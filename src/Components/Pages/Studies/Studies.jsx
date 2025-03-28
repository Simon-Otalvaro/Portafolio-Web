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
          <img src="/img/project3.png" alt="Proyecto 2" />
          <h3>E-Commerce Sneackers</h3>
          <p>Sistema de gestión de Sneackers con carrito de compras integrado.</p>
          <a href="https://sneakers-store-theta.vercel.app/">
            🔗 Ver Proyecto
          </a>
        </div>

         {/* Proyecto 4 */}
         <div className="project-item">
          <img src="/img/project3.png" alt="Proyecto 2" />
          <h3>E-Commerce Sneackers</h3>
          <p>Reproductor de música con funcionalidades básicas.</p>
          <a href="https://sneakers-store-theta.vercel.app/">
            🔗 Ver Proyecto
          </a>
        </div>

         {/* Proyecto 3 */}
         <div className="project-item">
          <img src="/img/project3.png" alt="Proyecto 2" />
          <h3>E-Commerce Sneackers</h3>
          <p>Reproductor de música con funcionalidades básicas.</p>
          <a href="https://sneakers-store-theta.vercel.app/">
            🔗 Ver Proyecto
          </a>
        </div>

         {/* Proyecto 3 */}
         <div className="project-item">
          <img src="/img/project3.png" alt="Proyecto 2" />
          <h3>E-Commerce Sneackers</h3>
          <p>Reproductor de música con funcionalidades básicas.</p>
          <a href="https://sneakers-store-theta.vercel.app/">
            🔗 Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
};
