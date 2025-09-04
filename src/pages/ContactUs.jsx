import React, { useState } from "react";
import { Banner, CTA, AboutUs, Calculator, Testimonials, Partners } from './';




const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* Cabeçalho */}
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text text-center">
                <h2>Contact Us</h2>
                <div className="div-dec"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mapa + Informações */}
      <section className="map">
        <div className="container">
          <div className="row">
            {/* Google Maps */}
            <div className="col-lg-12">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.78997548554!2d144.9805125252687!3d-37.84132841005892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6681f3e9cb7e1%3A0x9d52778f56cab5a8!2sFawkner%20Park!5e1!3m2!1sen!2sth!4v1648201596364!5m2!1sen!2sth"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: "5px", position: "relative", zIndex: 2 }}
                  allowFullScreen
                  title="Google Maps"
                ></iframe>
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-lg-4">
                  <div className="info-item">
                    <i className="fa fa-envelope"></i>
                    <h4>Email Address</h4>
                    <a href="mailto:info@company.com">info@company.com</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-item">
                    <i className="fa fa-phone"></i>
                    <h4>Phone Number</h4>
                    <a href="tel:0100200340">010-020-0340</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-item">
                    <i className="fa fa-map-marked-alt"></i>
                    <h4>Address</h4>
                    <a href="https://goo.gl/maps/victoria" target="_blank" rel="noreferrer">
                      Victoria, Australia
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="contact-us-form">
        <div className="container">
          <div className="row">
            {/* Cabeçalho do formulário */}
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h6>Contact Us</h6>
                <h4>Feel free to message us</h4>
              </div>
            </div>

            {/* Formulário */}
            <div className="col-lg-10 offset-lg-1">
              <form id="contact" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your Name..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        id="phone"
                        placeholder="Your Phone..."
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your E-mail..."
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Subject..."
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        id="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        {/* Seção de Parceiros */}
        <Partners />
    </div>
  );
};

export default ContactUs;
