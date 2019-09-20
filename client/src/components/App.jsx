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
      <div>
        <Users />
      </div>
      
      <div>
        <Chat />
      </div>
    </div>
  </div>
)

export default App;
