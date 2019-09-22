import React from 'react';
import Logo from '../../public/logo_chatsy.png';

const NavBar = () => (
  <div className="containerNav">
    <div className="navList">
      <ul className="navUl">
        <div className="navLeft">
          <li><img src={Logo} alt="chatsy logo"/></li>
        </div>
        <div className="navRight">
          <li>Home</li>
          <li>Rooms</li>
          <li>User</li>
        </div>
      </ul>
    </div>
  </div>
)

export default NavBar;