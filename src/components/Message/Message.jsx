import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

function Message({ username, message }) {
  const isUser = username === message.username;
  return (
    <div className={`messageCard ${isUser && 'messageUser'}`}>
      <Card className={isUser ? 'userCard' : 'guestCard'}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.username}:{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
