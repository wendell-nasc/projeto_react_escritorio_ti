import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna 1 - Sobre */}
        <div className="footer-column">
          <h3>TECHNUNES SOLUÇÕES EM TI</h3>
          <p>
            Somos uma empresa especializada em oferecer suporte tecnológico
            eficiente, ágil e personalizado para pessoas físicas e empresas.
          </p>
        </div>

        {/* Coluna 2 - Links rápidos */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Feature</a></li>
            <li><a href="#">Attractions</a></li>
            <li><a href="#">Tickets</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Suporte */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>

        {/* Coluna 4 - Contato e Redes Sociais */}
        <div className="footer-column">
          <h4>Informações de Contato</h4>
          <p>Email: edvan.nunes@techunesti.com.br</p>
          <p>Phone: +55 11 98214.2212</p>
          <p>Address: São Paulo - SP</p>

          {/* Redes sociais centralizadas */}
          <ul className="social-icons">
            <li>
              <a
                href="https://fb.com/templatemo"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <FaBehance />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">
        <p>© 2025 ITWNS. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
