import React from "react";
import { NavLink } from "react-router-dom";
import aboutImage from "/assets/images/about-left-image.jpg";
import { Banner, CTA, AboutUs, Calculator, Testimonials, Partners } from './';
 


const AboutUsPrincipal = () => {
  return (
    <div className="about-page">
      {/* Cabeçalho da página */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>About Us</h2>
              <div className="div-dec"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção superior com imagem + acordeão */}
      <section className="top-section section-padding">
        <div className="container">
          <div className="row gx-4">
            {/* Imagem */}
            <div className="col-lg-6">
              <div className="left-image">
                <img src={aboutImage} alt="About" className="img-fluid rounded" />
              </div>
            </div>

            {/* Acordeões */}
            <div className="col-lg-6 align-self-center">
              <div className="accordions is-first-expanded">
                {[
                  {
                    title: "Mexant Financial Planning",
                    content: `You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. 

                    We do not ask you anything in return. You are free to use our templates for any purpose.`,
                  },
                  {
                    title: "Mexant Crypto Investing",
                    content: `Mexant HTML5 Template is available to download 100% free of charge. This CSS layout is based on Bootstrap 5 framework.

                    Anyone can edit and use this layout for all professional websites. Thank you for visiting TemplateMo website.`,
                  },
                  {
                    title: "Cryptocurrency Investments",
                    content: `Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo.

                    Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo. Mauris scelerisque venenatis justo, sed interdum sem.`,
                  },
                ].map((item, index) => (
                  <article className="accordion" key={index}>
                    <div className="accordion-head">
                      <span>{item.title}</span>
                      <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                      </span>
                    </div>
                    <div className="accordion-body">
                      <div className="content">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Call To Action */}
      <section className="simple-cta">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h4>
                Business <em>Solutions</em> and <strong>Crypto</strong> Investments
              </h4>
            </div>
            <div className="col-lg-7">
              <div className="buttons d-flex gap-3">
                <div className="green-button">
                  <NavLink to="/services">Discover More</NavLink>
                </div>
                <div className="orange-button">
                  <NavLink to="/contact">Contact Us</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção O que fazemos */}
      <section className="what-we-do section-padding">
        <div className="container">
          <div className="row gx-4">
            {/* Conteúdo da esquerda */}
            <div className="col-lg-5">
              <div className="left-content">
                <h4>Please tell us about your idea and how you want it to be</h4>
                <p>
                  If you need more HTML templates, you can try visiting TooCSS blog and Tooplate websites. You can get many good templates on those websites.
                  <br />
                  <br />
                  Nulla non placerat neque, a gravida elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sed dolor condimentum tellus commodo volutpat non malesuada turpis.
                </p>
                <div className="green-button">
                  <NavLink to="/contact">Discover More</NavLink>
                </div>
              </div>
            </div>

            {/* Conteúdo da direita */}
            <div className="col-lg-6 offset-lg-1">
              <div className="right-items">
                <div className="row gx-4">
                  {["First", "Second", "Third", "Fourth"].map((step, index) => (
                    <div className="col-lg-6 mb-4" key={index}>
                      <div className="item">
                        <em>{`0${index + 1}`}</em>
                        <h4>{`${step} Step`}</h4>
                        <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    
    
     {/* Seção de Parceiros */}
        <Partners />

    </div>    
  );
};


export default AboutUsPrincipal;
