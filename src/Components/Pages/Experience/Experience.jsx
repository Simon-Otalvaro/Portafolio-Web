import React from "react";
import "./Experience.css";

export const Experience = () => {
  return (
    <div className="experience-container">
      {/* Sección de Idiomas */}
      <div className="languages">
        <h2>🌍 IDIOMAS</h2>
        <hr className="line1" />
        <ul className="language-list">
          <li>Español - Nativo</li>
          <li>Inglés - Básico</li>
        </ul>
      </div>

      {/* Sección de Experiencia */}
      <div className="work-experience">
        <h2>💼 EXPERIENCIA</h2>
        <hr className="line2" />
        <div className="experience-box">
          <h3>📅 2022 – 2023</h3>
          <p><strong>Proceso de proyecto E-commerce</strong></p>
          <p>Proyecto productivo SENA nivel técnico</p>
          <p>Creación de plataforma web e-commerce con HTML, JavaScript y CSS.</p>
        </div>

        <div className="experience-box">
          <h3>📅 2024</h3>
          <p><strong>Curso intensivo RPA (Automatización Robótica de Procesos)</strong></p>
          <p>Gestión de un sistema de aprendices con PIX STUDIO.</p>
        </div>
      </div>

      {/* Sección de Educación */}
      <div className="education">
        <h2>🎓 EDUCACIÓN</h2>
        <hr className="line1" />
        <div className="education-box">
          <h3>📌 Básica primaria</h3>
          <p>Maximino Poitiers (Bogotá)</p>
        </div>

        <div className="education-box">
          <h3>📌 Básica secundaria</h3>
          <p>I.E San José, personero (Calarcá)</p>
        </div>

        <div className="education-box">
          <h3>📌 TÉCNICOS</h3>
          <p><strong>Técnico en Desarrollo de Software - SENA</strong> (2022 - 2023)</p>
          <p><strong>Tecnólogo en Desarrollo de Software - SENA</strong> (2024 - Cursando)</p>
        </div>
      </div>

      {/* Sección de Referencias */}
      <div className="references">
        <h2>📞 REFERENCIAS</h2>
        <hr className="line2" />
        <p><strong>📱 Celular:</strong> +57 314 3663801</p>
        <p><strong>📧 Email:</strong> otalvaroandres570@gmail.com</p>
        <p><strong>👨‍💻 Referencia:</strong> Andrés Felipe Otalvaro</p>
        <p>Ingeniero de sistemas / Senior</p>
      </div>
    </div>
  );
};
