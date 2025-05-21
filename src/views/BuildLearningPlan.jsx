import { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
} from '@mui/material';
import Table from '../components/Table';

export default function BuildLearningPlan() {
  const [topic, setTopic] = useState('');
  const [time, setTime] = useState('');
  const [data, setData] = useState([]);

  const cols = [
      { field: 'topic', filter: false, floatingFilter: false },
      { field: 'description', filter: false, floatingFilter: false },
      { field: 'time', filter: false, floatingFilter: false },
      { field: 'priorKnowledge', filter: false, floatingFilter: false }
  ];

  function getPrompt() {
      return `Create me a learning plan for ${topic}. This plan should take no more than ${time} hours. Divide it into topics, give a short description of the topic, the amount of time it should take and prior knowledge for the topic.
      Return your response in a JSON format with no additional text. The format will look like: 
      [{
        "topic": "First Topic name",
        "description": "Short description of the topic",
        "time": "Time it should take",
        "priorKnowledge": "Prior knowledge for the topic"
      },{
      "topic": "Second Topic name",
        "description": "Short description of the topic",
        "time": "Time it should take",
        "priorKnowledge": "Prior knowledge for the topic"
      }]`
  }

  function processResponse(response) {
    try {
      const parsedResponse = JSON.parse(response);
      console.log(parsedResponse);
      setData(parsedResponse);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }

  function invokeModel() {
    axios.post('https://openrouter.ai/api/v1/chat/completions', {
      model: 'meta-llama/llama-3.3-8b-instruct:free', // you can chose a different free model from https://openrouter.ai/models
      messages: [
        {
          role: 'user',
          content: getPrompt(),
        },
      ],
    }, {
      headers: {
        Authorization: 'Bearer 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', // here place your api key from https://openrouter.ai/settings/keys
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      const reply = response.data.choices?.[0]?.message?.content || 'No response';
      console.log(reply);
      processResponse(reply);
    })
    .catch(error => {
      const errorMsg = error.response?.data?.message || error.message;
      console.log(errorMsg);
      processResponse("");
    });
  }

  return (
    <>
      <div style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <TextField
        label="Topic"
        variant="outlined"
        fullWidth
        onChange={(e) => setTopic(e.target.value)}
      />
      <TextField
          label="Time in Hours"
          variant="outlined"
          fullWidth
          onChange={(e) => setTime(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={invokeModel}>
        Send
      </Button></div>
      {data.length > 0 && <Table cols={cols} rows={data} size='large'/>}
  </>);
}