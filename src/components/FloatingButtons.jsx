import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./FloatingButtons.css";

function FloatingButtons() {
  return (
    <div className="floating-buttons">
      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5511982142212" // <-- coloque seu número com DDI e DDD
        className="btn btn-success rounded-circle shadow btn-floating"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Botão Instagram */}
      <a
        href="https://instagram.com/technunesti" // <-- coloque seu perfil do Instagram
        className="btn btn-danger rounded-circle shadow btn-floating instagram-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
}

export default FloatingButtons;
