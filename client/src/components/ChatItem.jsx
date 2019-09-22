import React from 'react';

const ChatItem = props => {
  const {
    messages,
  } = props;

  return (
    <div className="testing">
    {messages.map(message => {
      return (
        <div className="oneItem">
          <span className="itemUsername">{message.username}</span>: <span className="itemMessage">{message.message}</span>
        </div>
      )
    })}
    </div>
  );
};

export default ChatItem;