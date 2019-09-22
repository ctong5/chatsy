import React from 'react';
import io from 'socket.io-client';
import ChatItem from './ChatItem';
import ChatAdd from './ChatAdd';

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

    console.log(`Note: indexes will not be used as keys for ChatItem components.
Otherwise, open up multiple browser windows and chat away on Chatsy. Enjoy! Cassie`)
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
      <div className="streamAddMessage">
        <div className="chatTitle">
          <p>Chats</p>
        </div>
        
        <div className="stream">
          <ChatItem messages={messages} />
        </div>

        <div className="addMessage">
          <ChatAdd username={username} message={message} handleChange={this.handleChange} sendMessage={this.sendMessage} />
        </div>

      </div>

    )
  }
};

export default Chat;