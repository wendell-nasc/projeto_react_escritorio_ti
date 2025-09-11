import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutImage from "/assets/images/about-left-image.jpg";

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h6>TechNunes Soluções em TI</h6>
              <h4>Apresentação</h4>
            </div>
          </div>



    
          {/* Seção superior com imagem + texto */}
          
            <div className="container">
              <div className="row gx-4 align-items-center">
                
                {/* Texto sobre a empresa */}
                <div className="col-lg-6">
                  <div className="about-text">                    
                    
                    <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>

                      Somos uma empresa especializada em oferecer suporte tecnológico eficiente, ágil e personalizado para pessoas físicas e empresas.
                    </p>
                    <br />
                    <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                      Atuamos com manutenção, consultoria e soluções inteligentes em tecnologia da informação, garantindo o pleno funcionamento de equipamentos e sistemas, proporcionando segurança, produtividade e inovação aos nossos clientes.
                    </p>
                    <br />
                    <br />
                    <a href="#contato" className="btn btn-primary rounded-pill py-2 px-4">
                      Saiba Mais
                    </a>
                    <br />
                    <br />
    
                    <br /><br />
                    <br />
    
                    
                  </div>
                </div>
    
                {/* Imagem */}
                <div className="col-lg-6">
                  <div className="left-image text-center">
                    <img src={aboutImage} alt="About" className="img-fluid rounded" />
                  </div>
                </div>
    
              </div>
            </div>
          





          
        </div>





      </div>



    </section>
  );
}

export default AboutUs;
