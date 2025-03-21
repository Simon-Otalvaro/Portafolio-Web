  import './Header.css';
  import React from 'react';
  import { NavLink } from 'react-router-dom';

  export const Header = () => {
    return (
      <header>
        <div className='Icon-Header'>
          <img />
          <h1>P O R T F O L I O - W E B</h1>
        </div>
        <nav>
          <ul>
            <li><NavLink to="">HOME</NavLink></li>
            <li><NavLink to="">PROYECTS</NavLink></li>
            <li><NavLink to="">SKILLS</NavLink></li>
            <li><NavLink to="">ABOUT ME</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  };
