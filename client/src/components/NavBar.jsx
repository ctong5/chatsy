import React from 'react';
import Logo from '../../public/logo_chatsy.png';

const NavBar = () => (
  <div className="containerNav">
    <div className="navList">
      <ul className="navUl">
        <div className="navLeft">
          <li><button><img src={Logo} alt="chatsy logo"/></button></li>
        </div>
        <div className="navRight">
          <li><button>Home</button></li>
          <li><button>Rooms</button></li>
          <li><button>Messages</button></li>
          <li><button>Profile</button></li>
        </div>
      </ul>
    </div>
  </div>
)

export default NavBar;