import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Modal, ModalClose, Sheet, Stack, TextField, Typography } from '@mui/joy';
import ActionModal from '../components/ActionModal';


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
        Authorization: 'Bearer <API_KEY_COMES_HERE>', // here place your api key from https://openrouter.ai/settings/keys
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
    <div>
      <Typography level="h1" sx={{ marginBottom: '1rem' }}>
        Ask AI
      </Typography>

      <Stack direction="row" spacing={2}>
        <Input
          placeholder="Ask me anything"
          variant="outlined"
          fullWidth
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button color="primary" onClick={invokeModel}>
          Send
        </Button>
      </Stack>

      <Modal 
        variant="outlined" 
        open={open} 
        onClose={handleClose}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          sx={{
            minWidth: '60vw',
            maxWidth: '80vw',
            maxHeight: '80vh',
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography level="title-lg" gutterBottom>Model Response</Typography>
          <Typography level="body-sm" sx={{ whiteSpace: 'pre-wrap' }}>
            {response}
          </Typography>
        </Sheet>
      </Modal>
    </div>
  );
}