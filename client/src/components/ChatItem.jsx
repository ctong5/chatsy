import React from 'react';

const ChatItem = props => {
  const {
    messages,
  } = props;

  return (
    <div>
    {messages.map(message => {
      return (
        <div>
          {message.username}: {message.message}
        </div>
      )
    })}
    </div>
  );
};

export default ChatItem;