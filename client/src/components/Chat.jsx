import React from 'react';
import io from 'socket.io-client';
import ChatItem from './ChatItem';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
      messages: [],
    };
    this.socket = io();
    this.handleChange = this.handleChange.bind(this);
  } 

  componentDidMount() {
    this.socket.on('RECEIVE_MESSAGE', data => {
      addMessage(data);
    });

    const addMessage = data => {
      this.setState({messages: [...this.state.messages, data]});
    }
  
    this.sendMessage = e => {
      e.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        username: this.state.username,
        message: this.state.message,
      })
      this.setState({ message: '' });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const {
      username,
      message,
      messages,
    } = this.state;

    return (
      <div className="allChatsAddMessage">
        <div className="chatTitle">
          <p>Chats</p>
        </div>
        <div className="allChats">
          <ChatItem messages={messages} />
        </div>

        <div className="addMessage">
          <form action="">
            <div className="info">
              <div className="username">
                <input id="username" type="text" placeholder="Username" name="username" value={username} onChange={e => this.handleChange(e)} />
              </div>
              <div className="colon">:</div>
              <div className="message">
                <input id="message" type="text" placeholder="Message" name="message" value={message} onChange={e => this.handleChange(e)}/>
              </div>
            </div>
            <div className="submit">
              <div className="paperclip">
                <i className="material-icons">attach_file</i>
              </div>
              <div className="send" onClick={this.sendMessage} >
                <i className="material-icons">send</i>
              </div>
            </div>
          </form>
        </div>

      </div>

    )
  }
};

export default Chat;