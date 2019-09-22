import React from 'react';

const ChatItem = props => {
  const {
    messages,
  } = props;

  return (
    <div>
    {messages.map(message => <div>{message.author}: {message.message}</div>)}
    </div>
  );
};

export default ChatItem;