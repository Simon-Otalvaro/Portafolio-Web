import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <hr />
      <footer>
        <div className="links">
          <a href="https://wa.me/3228432087/" target="_blank" rel="noopener noreferrer">
            <img className="img-footer" src="/img/whatsapp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/sim%C3%B3n-otalvaro-4633a0352/" target="_blank" rel="noopener noreferrer">
            <img className="img-footer" src="/img/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Simon-Otalvaro/" target="_blank" rel="noopener noreferrer">
            <img className="img-footer" src="/img/github.png" alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/saimonotalvaro?igsh=MWN0dnlncWFxZnZtOQ==" target="_blank" rel="noopener noreferrer">
            <img className="img-footer" src="/img/instagram.png" alt="Instagram" />
          </a>
        </div>

        <div className="footer-info">
          <p>📍 Calarcá - Quindío, Colombia</p>
          <p><a href="simonotalvaro6@gmail.com">simonotalvaro6@gmail.com</a></p>
        </div>

        <p className="text-footer">© S a i m o n - D e v - 2025. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};
