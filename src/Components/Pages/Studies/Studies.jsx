import React from "react";
import "./Studies.css";

export const Studies = () => {
  return (
    <div className="projects">
      <h2>🚀 PROYECTOS CON DESPLIEGUE</h2>
      <hr className="line2" />

      <div className="projects-grid">
        {/* Proyecto 1 */}
        <div className="project-item">
          <img src="/img/project1.png" alt="Proyecto 1" />
          <h3>Traductor CS</h3>
          <p>
            Traductor con funcionalidades básicas de agregar palabras, descripción y categoría
            para posteriormente ser traducidas.
          </p>
          <a href="https://traductor-cs.vercel.app/">
            🔗 Ver Proyecto
          </a>
        </div>

        {/* Proyecto 2 */}
        <div className="project-item">
          <img src="/img/project2.png" alt="Proyecto 2" />
          <h3>Reproductor de Música</h3>
          <p>Reproductor de música con funcionalidades básicas; adelantar, cambiar, devolver, pausar, subir y bajar el volumen.</p>
          <a href="https://reproductor-musica-orpin.vercel.app/">
            🔗 Ver Proyecto
          </a>
        </div>

         {/* Proyecto 3 */}
         <div className="project-item">
          <img src="/img/project4.png" alt="Proyecto 3" />
          <h3>Juego interactivo de palabras</h3>
          <p>Juego interactivo con modalidad para 4 personas, consiste en escribir el mayor número de palabras</p>
          <a href="https://game-on-words.vercel.app/">
            🔗 Ver Proyecto
          </a>
        </div>

         {/* Proyecto 4 */}
         <div className="project-item">
          <img src="/img/project3.png" alt="Proyecto 4" />
          <h3>E-Commerce Sneackers</h3>
          <p>Reproductor de música con funcionalidades básicas.</p>
          <a href="https://sneakers-store-theta.vercel.app/">
            🔗 Ver Proyecto
          </a>
        </div>

         {/* Proyecto 5 */}
         <div className="project-item">
          <img src="/img/project5.png" alt="Proyecto 5" />
          <h3>Calculadora de notas</h3>
          <p>Sistema de calculadora con predicción de notas</p>
          <a href="https://calculadora-notas-sage.vercel.app/">
            🔗 Ver Proyecto
          </a>
        </div>

         {/* Proyecto 6 */}
         <div className="project-item">
          <img className="emoji-sad" src="/img/random.jpg" alt="" />
          <h3>PROXIMAMENTE MÁS....</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};
