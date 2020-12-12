import { React, useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Message from './Message/Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hdg', 'hi']);
  const [username, setUsername] = useState('');

  console.log(input);
  console.log(messages);

  useEffect(() => {
    setUsername(prompt('Enter Your Name:'));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  };
  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      <form>
        <TextField
          id="standard-basic"
          label="Type Message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
          disabled={!input}
          endIcon={<SendIcon>send</SendIcon>}
        >
          Send
        </Button>
      </form>

      {messages.map((message, i) => (
        <Message key={i} text={message} />
      ))}
    </div>
  );
}

export default App;
