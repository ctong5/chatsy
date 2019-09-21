import React from 'react';
import Avatar from '../../public/avatar.png';

const Users = () => (
  <div className="usersContainer">
    <div className="usersTitle">
      <p>Users Online</p>
    </div>
    <div className="userCardContainer">
      <div className="userCard">
        <img src={Avatar} alt="profile avatar"/>
        <p>User1</p>
      </div>

      <div className="userCard">
        <img src={Avatar} alt="profile avatar"/>
        <p>User2</p>
      </div>


      <div className="userCard">
        <img src={Avatar} alt="profile avatar"/>
        <p>User3</p>
      </div>

      <div className="userCard">
        <img src={Avatar} alt="profile avatar"/>
        <p>User4</p>
      </div>
    </div>
  </div>
);

export default Users;