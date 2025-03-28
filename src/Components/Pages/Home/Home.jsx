import React from 'react';

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
            <a href="/cv.pdf" download="/CV - Simón Otalvaro.pdf">
              <button className="button">
                <svg
                  viewBox="0 0 16 16"
                  className="bi bi-lightning-charge-fill"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                  ></path>
                </svg>
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
