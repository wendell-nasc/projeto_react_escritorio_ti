import { Link, useLocation } from "react-router-dom";
import { servicesData as defaultServicesData } from "../data/servicesData";
import { useEffect } from "react";

const Header = ({ servicesData = defaultServicesData }) => {
  const location = useLocation();
  const isHome = location.pathname === "/home";

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

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <Link to="/home" className="logo">
                <img src="/assets/images/logo.png" alt="Logo" />
              </Link>

              {/* Menu */}
              <ul className="nav">
                {/* Home */}
                <li className="scroll-to-section">
                  {isHome ? (
                    <a href="#top" className="active">Home</a>
                  ) : (
                    <Link to="/home">Home</Link>
                  )}
                </li>

                {/* Services */}
                <li className="scroll-to-section">
                  {isHome ? (
                    <a href="#services">Services</a>
                  ) : (
                    <Link to="/services" state={{ services: servicesData }}>
                      Services
                    </Link>
                  )}
                </li>

                {/* About */}
                <li className="scroll-to-section">
                  {isHome ? (
                    <a href="#about">About</a>
                  ) : (
                    <Link to="/about">About</Link>
                  )}
                </li>

                {/* Dropdown Pages */}
                <li className="has-sub">
                  <a href="javascript:void(0)">Pages</a>
                  <ul className="sub-menu">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/our-services">Our Services</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                  </ul>
                </li>

                {/* Testimonials */}
                <li className="scroll-to-section">
                  {isHome ? (
                    <a href="#testimonials">Testimonials</a>
                  ) : (
                    <Link to="/testimonials">Testimonials</Link>
                  )}
                </li>

                {/* Contact */}
                <li>
                  <Link to="/contact-us">Contact Support</Link>
                </li>
              </ul>

              {/* Mobile menu trigger */}
              <a className="menu-trigger">
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
