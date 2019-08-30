import React from 'react';
import {FaPizzaSlice} from 'react-icons/fa';

const Header = () => {
  return(
    <header className="header" data-testid="header">
    <nav>
      <div className="logo">
        <img src="../../../public/images/logo.png" alt="Todoist" />
      </div>
      <div className="settings">
        <ul>
          <li className="settings__add">+</li>
          <li className="settings__cog">
            <FaPizzaSlice />
          </li>
        </ul>
      </div>
    </nav>
  </header>
  );
};

export default Header;