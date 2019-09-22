import React from 'react';

const ChatAdd = (props) => {
  const {
    username,
    message,
    handleChange,
    sendMessage,
  } = props;
  
  return (
    <form action="">
      <div className="info">
        <div className="username">
          <input id="username" type="text" placeholder="Username" name="username" value={username} onChange={e => handleChange(e)} />
        </div>
        <div className="colon">:</div>
        <div className="message">
          <input id="message" type="text" placeholder="Message" name="message" value={message} onChange={e => handleChange(e)}/>
        </div>
      </div>
      <div className="submit">
        <div className="paperclip">
          <i className="material-icons">attach_file</i>
        </div>
        <div className="send" onClick={sendMessage} >
          <i className="material-icons">send</i>
        </div>
      </div>
    </form>
  )
};

export default ChatAdd;