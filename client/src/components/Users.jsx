import React from 'react';
import Avatar from '../../public/avatar.png';

const Users = () => (
  <div className="usersContainer">
    <div className="usersTitle"><p>Users Online</p></div>
    <div className="cards">
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

        <div className="userCard">
          <img src={Avatar} alt="profile avatar"/>
          <p>User5</p>
        </div>

        <div className="userCard">
          <img src={Avatar} alt="profile avatar"/>
          <p>User6</p>
        </div>

        <div className="userCard">
          <img src={Avatar} alt="profile avatar"/>
          <p>User7</p>
        </div>

        <div className="userCard">
          <img src={Avatar} alt="profile avatar"/>
          <p>User8</p>
        </div>

        <div className="userCard">
          <img src={Avatar} alt="profile avatar"/>
          <p>User9</p>
        </div>

        <div className="userCard">
          <img src={Avatar} alt="profile avatar"/>
          <p>User10</p>
        </div>
      </div>
    </div>
  </div>
);

export default Users;