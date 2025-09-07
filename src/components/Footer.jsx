import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Coluna 1 - Sobre */}
        <div className="footer-column">
          <h3>Stocker</h3>
          <p>
            Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
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
          <h4>Contact Info</h4>
          <p>Email: support@stocker.com</p>
          <p>Phone: +55 11 99999-9999</p>
          <p>Address: São Paulo - SP</p>

          {/* Redes sociais centralizadas */}
          <ul className="social-icons">
            <li>
              <a href="https://fb.com/templatemo" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fa fa-behance"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">
        <p>© 2025 Stocker. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
