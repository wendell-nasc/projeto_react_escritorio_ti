import { Link, NavLink, useLocation } from "react-router-dom";
import { servicesData as defaultServicesData } from "../data/servicesData";

const Header = ({ servicesData = defaultServicesData }) => {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <div>
      {/* ***** Header Area Start ***** */}
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

                  {/* Pages Dropdown */}
                  <li className="has-sub">
                    <a href="#!">Pages</a>
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

                  {/* Contact Support */}
                  <li>
                    <Link to="/contact-us">Contact Support</Link>
                  </li>
                </ul>

                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
    </div>
  );
};

export default Header;
