import React from 'react';
import Chat from './Chat';
import NavBar from './NavBar';
import Users from './Users';

const App = () => (
  <div className="appContainer">
    <div className="appHead">
      <NavBar />
    </div>
    
    <div className="appBody">
      <div className="userBox">
        <Users />
      </div>
      
      <div className="chatBox">
        <Chat />
      </div>
    </div>
  </div>
)

export default App;
