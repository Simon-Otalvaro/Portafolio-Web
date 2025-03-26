  import './Header.css';
  import React from 'react';
  import { NavLink } from 'react-router-dom';

  export const Header = () => {
    return (
      <header>
        <div className='Icon-Header'>
          <img src='src\assets\img\icon.png'/>
          <h1>P O R T F O L I O - W E B</h1>
        </div>
        <nav>
          <ul>
            <li><NavLink to="">INICIO</NavLink></li>
            <li><NavLink to="">PROYECTOS</NavLink></li>
            <li><NavLink to="">HABILIDADES</NavLink></li>
            <li><NavLink to="">SOBRE MÍ</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  };
