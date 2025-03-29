import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="text-content">
          <h1 className="name">SIMÓN OTALVARO</h1>
          <p className="title">Técnico de Software, Desarrollador Web y Diseñador.</p>
          <div className="description">
            <p>
              Soy un estudiante de desarrollo de software apasionado por el Front-End. Me gusta ser proactivo y dinámico, me entusiasma trabajar con energía y compromiso. Estoy constantemente dispuesto a aprender y conocer nuevas herramientas para mejorar mis habilidades de desarrollo de software.
            </p>
          </div>

          <div>
            <a href="/public/Documents/CV.pdf" download>
              <button className="button">
                DESCARGAR CV
              </button>
            </a>
          </div>
        </div>

        <div className="image-container">
          <img className="my-photo" src="img/Me.jpg" alt="Mi foto" />
        </div>
      </div>
    </div>
  );
};
