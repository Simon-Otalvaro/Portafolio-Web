import React from "react";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile-container">
      {/* Sección de Habilidades Técnicas */}
      <div className="skills">
        <h2>🚀 MIS HABILIDADES TÉCNICAS</h2>
        <hr className="line1" />
        <ul>
          <li>💻 HTML, CSS, JavaScript, Java, MySQL</li>
          <li>⚛️ React.js</li>
          <li>📦 Git & GitHub</li>
          <li>🖌️ UI/UX Design</li>
          <li>⚙️ Metodología Ágil; Scrum</li>
          <li>📖 Jira, Notion, Trello</li>
        </ul>
      </div>

      {/* Sección de Habilidades Blandas */}
      <div className="soft-skills">
        <h2>💡 HABILIDADES BLANDAS</h2>
        <hr className="line2" />
        <ul>
          <li>🤝 Trabajo en equipo</li>
          <li>🗣️ Comunicación efectiva</li>
          <li>🎯 Resolución de problemas</li>
          <li>⏳ Gestión del tiempo</li>
          <li>🌟 Adaptabilidad</li>
        </ul>
      </div>
    </div>
  );
};
