import React from 'react';
import io from 'socket.io-client';

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
        author: this.state.username,
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

        <div className="allChats">
          {messages.map(message => {
              return (
                  <div>{message.author}: {message.message}</div>
              )
          })}
        </div>

        <div className="addMessage">
          <form action="">
            <input id="username" type="text" placeholder="Username" name="username" value={username} onChange={e => this.handleChange(e)} />
            <input id="message" type="text" placeholder="Message" name="message" value={message} onChange={e => this.handleChange(e)}/>
            <button onClick={this.sendMessage}>Send</button>
          </form>
        </div>

      </div>

    )
  }
};

export default Chat;