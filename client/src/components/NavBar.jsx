import React from 'react';
import Logo from '../../public/logo_chatsy.png';

const NavBar = () => (
  <div className="containerNav">
    <div className="navList">
      <ul className="navUl">
        <li>Home</li>
        <li><img src={Logo} alt="chatsy logo"/></li>
        <li>User</li>
      </ul>
    </div>
  </div>
)

export default NavBar;