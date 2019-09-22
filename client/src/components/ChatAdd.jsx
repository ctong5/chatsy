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
          <input 
            id="username" 
            type="text" 
            placeholder="Username" 
            name="username" 
            value={username} 
            onChange={e => handleChange(e)} />
        </div>
        <div className="colon">:</div>
        <div className="message">
          <input 
            id="message" 
            type="text" 
            placeholder="Message" 
            name="message" 
            value={message} 
            onChange={e => handleChange(e)}/>
        </div>
      </div>
      <div className="submit">
        <button className="paperclip">
          <i className="material-icons">attach_file</i>
        </button>
        <button className="send" onClick={sendMessage} >
          <i className="material-icons">send</i>
        </button>
      </div>
    </form>
  )
};

export default ChatAdd;