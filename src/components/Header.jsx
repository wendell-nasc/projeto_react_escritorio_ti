import { Link, useLocation } from "react-router-dom";
import { servicesData as defaultServicesData } from "../data/servicesData";
import { useState, useEffect } from "react";
import "./Header.css"; // importa o CSS

const Header = ({ servicesData = defaultServicesData }) => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-area");
      if (window.scrollY > 50) {
        header.classList.add("background-header");
      } else {
        header.classList.remove("background-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className={`main-nav ${menuOpen ? "active" : ""}`}>
              {/* Logo */}
              <Link to="/home" className="logo">
                <img src="/assets/images/logo.png" alt="Logo" />
              </Link>

              {/* Menu */}
              <ul className="nav" 
              // style={{ display: menuOpen ? "block" : "" }}
              style={{
                display: menuOpen ? "block" : "",
                backgroundColor: menuOpen ? "#1b1b1b" : "transparent",
                padding: menuOpen ? "20px 0" : "0",
              }}
              >
                <li className="scroll-to-section" onClick={handleLinkClick}>
                  {isHome ? (
                    <a href="#top" className="active">Home</a>
                  ) : (
                    <Link to="/home">Home</Link>
                  )}
                </li>

                <li className="scroll-to-section" onClick={handleLinkClick}>
                  {isHome ? (
                    <a href="#services">Serviços</a>
                  ) : (
                    <Link to="/services" state={{ services: servicesData }}>
                      Serviços
                    </Link>
                  )}
                </li>

                <li className="scroll-to-section" onClick={handleLinkClick}>
                  {isHome ? (
                    <a href="#about">Sobre</a>
                  ) : (
                    <Link to="/about">Sobre</Link>
                  )}
                </li>

                <li className="has-sub" onClick={handleLinkClick}>
                  <a href="javascript:void(0)">Páginas</a>
                  <ul className="sub-menu">
                    <li><Link to="/about">Sobre Nós</Link></li>
                    <li><Link to="/our-services">Outros Serviços</Link></li>
                    <li><Link to="/contact-us">Nosso Contatos</Link></li>
                  </ul>
                </li>

                <li className="scroll-to-section" onClick={handleLinkClick}>
                  {isHome ? (
                    <a href="#testimonials">Depoimentos</a>
                  ) : (
                    <Link to="/testimonials">Depoimentos</Link>
                  )}
                </li>

                <li onClick={handleLinkClick}>
                  <Link to="/contact-us">Contato Suporte</Link>
                </li>
              </ul>

              {/* Mobile Menu Trigger */}
              <a
                className={`menu-trigger ${menuOpen ? "active" : ""}`}
                onClick={handleMenuToggle}
              >
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
