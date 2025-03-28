  import './Header.css';
  import React from 'react';
  import { NavLink } from 'react-router-dom';

  export const Header = () => {
    return (
      <header>
        <div className='Icon-Header'>
          <img src='/img/icon.png'/>
          <h1>P O R T A F O L I O - W E B</h1>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/">INICIO</NavLink></li>
            <li><NavLink to="/profile">HABILIDADES</NavLink></li>
            <li><NavLink to="/studies">PROYECTOS</NavLink></li>
            <li><NavLink to="/experience">SOBRE MÍ</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  };
