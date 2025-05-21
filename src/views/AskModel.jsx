import { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Modal,
  Box,
  Typography
} from '@mui/material';

export default function AskModel() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function invokeModel() {
    axios.post('https://openrouter.ai/api/v1/chat/completions', {
      model: 'meta-llama/llama-3.3-8b-instruct:free', // you can chose a different free model from https://openrouter.ai/models
      messages: [
        {
          role: 'user',
          content: prompt,
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
      setResponse(reply);
      handleOpen();
    })
    .catch(error => {
      const errorMsg = error.response?.data?.message || error.message;
      setResponse(`Error: ${errorMsg}`);
      handleOpen();
    });
  }

  return (
    <div style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <TextField
        label="Ask something"
        variant="outlined"
        fullWidth
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={invokeModel}>
        Send
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>Model Response</Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {response}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}