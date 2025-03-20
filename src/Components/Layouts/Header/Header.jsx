import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className='Icon-Header'>
        <img src="/assets/Img/Icon-Header.png" alt="Logo" />
        <h1>P O R T A F O L I O - W E B</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/TechnicalSkills">PROYECTOS</NavLink></li>
          <li><NavLink to="/Experience">HABILIDADES</NavLink></li>
          <li><NavLink to="/Experience">SOBRE MÍ</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};
