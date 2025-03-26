import React from 'react';

export const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="text-content">
          <h1 className="name">SIMÓN OTALVARO</h1>
          <p className="title">Técnico de Software, Desarrollador Web y Diseñador.</p>
          <div className="description">
            <p>Soy un estudiante de desarrollo de software apasionado por el Front-End. Me gusta ser proactivo y dinámico, me entusiasma trabajar con energía y compromiso. Estoy constantemente dispuesto a aprender y conocer nuevas herramientas para mejorar mis habilidades de desarrollo de software.</p>
          </div>
      {/* Botón CV Uiverse.io */}    
      <button class="botao">
  <svg
    class="mysvg"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="24px"
    width="24px"
  >
    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      id="SVGRepo_tracerCarrier"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g id="Interface / Download">
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="#f1f1f1"
          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
          id="Vector"
        ></path>
      </g>
    </g>
  </svg>
  <span class="texto">Download CV</span>
      </button>

        </div>
        <div className="image-container">
          <img className="my-photo" src="src/assets/img/Me2.jpg" alt="Mi foto" />
        </div>
      </div>

      {/* Sección de Habilidades */}
      <div className="skills">
        <h2>MIS HABILIDADES:</h2>
        <hr className='line1'></hr>
        <ul>
          <li>💻 HTML, CSS, JavaScript, JAVA, MySQL</li>
          <li>⚛️ React.js</li>
          <li>📦 Git & GitHub</li>
          <li>🖌️ UI/UX Design</li>
          <li>⚙️ Metodología Ágile; Scrum</li>
          <li>📖 Flujo de Trabajo; Jira, Notio, Trello</li>
        </ul>
      </div>

      {/* Sección de Proyectos */}
      <div className="projects">
        <h2>PROYECTOS:</h2>
        <hr className='line2'></hr>
        <div className="project-item">
          <img src="src\assets\img\project1.png" alt="Proyecto 1" />
          <h3>TRADUCTOR CS</h3>
          <p>Traductor con funcionalidades básicas de agregar palabras, descripción y categoria para posteriormente ser traducidas.</p>
          <a href="https://traductor-cs.vercel.app/" target="_blank" rel="noopener noreferrer">
            VER LINK DIRECTO
          </a>
        </div>

        <div className="project-item">
          <img src="src\assets\img\project2.png" alt="Proyecto 2" />
          <h3>REPRODUCTOR DE MÚSICA</h3>
          <p>Reproductor de música con funcionalidades básicas.</p>
          <a href="https://reproductor-musica-orpin.vercel.app/" target="_blank" rel="noopener noreferrer">
            VER LINK DIRECTO
          </a>
        </div>
      </div>
    </div>
  );
};
