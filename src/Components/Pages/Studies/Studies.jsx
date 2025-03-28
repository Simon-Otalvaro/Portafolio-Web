import React from "react";
import "./Studies.css";

export const Studies = () => {
  return (
    <div className="projects">
      <h2>🚀 PROYECTOS DESTACADOS</h2>
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
          <a href="https://traductor-cs.vercel.app/" target="_blank" rel="noopener noreferrer">
            🔗 Ver Proyecto
          </a>
        </div>

        {/* Proyecto 2 */}
        <div className="project-item">
          <img src="/img/project2.png" alt="Proyecto 2" />
          <h3>Reproductor de Música</h3>
          <p>Reproductor de música con funcionalidades básicas.</p>
          <a href="https://reproductor-musica-orpin.vercel.app/" target="_blank" rel="noopener noreferrer">
            🔗 Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
};
