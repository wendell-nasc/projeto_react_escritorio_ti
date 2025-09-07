import React from "react";
import { NavLink } from "react-router-dom";

import serviceImg1 from "/assets/images/service-image-01.jpg";
import serviceImg2 from "/assets/images/service-image-02.jpg";
import serviceImg3 from "/assets/images/service-image-03.jpg";
import detailsImg1 from "/assets/images/service-details-01.jpg";
import detailsImg2 from "/assets/images/service-details-02.jpg";
import detailsImg3 from "/assets/images/service-details-03.jpg";

import "./Services.css"; // Usa o CSS original do template
import { Banner, CTA, AboutUs, Calculator, Testimonials, Partners } from './';


const ServicesOur = () => {
  return (
    <>
      {/* Cabeçalho */}
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h2>Our Services</h2>
                <div className="div-dec"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Serviços principais */}
      <section className="main-services">
        <div className="container">
          <div className="row">
            {/* Serviço 1 */}
            <div className="col-lg-12">
              <div className="service-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left-image">
                      <img src={serviceImg1} alt="Digital Currencies" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="right-text-content">
                      <i className="fas fa-archive"></i>
                      <h4>Digital Currencies</h4>
                      <p>
                        You will see a bunch of free CSS templates when you search on Google.
                        TemplateMo is the best one because it is 100% free for anyone. We do
                        not ask you anything in return. You are free to use our templates for
                        any purpose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="col-lg-12">
              <div className="service-item">
                <div className="row">
                  <div className="col-lg-6 align-self-center">
                    <div className="left-text-content">
                      <i className="fas fa-archive"></i>
                      <h4>Financial Solutions</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ex massa.
                        In ac laoreet urna. Curabitur eu enim nibh. Phasellus sodales nisi vel leo aliquam,
                        ut tempus augue hendrerit. Pellentesque eu risus tincidunt, condimentum eros in,
                        auctor augue. Vivamus et urna blandit, varius sapien sed.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-image">
                      <img src={serviceImg2} alt="Financial Solutions" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="col-lg-12">
              <div className="service-item last-service">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left-image">
                      <img src={serviceImg3} alt="Cryptocurrency Exchanges" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="right-text-content">
                      <i className="fas fa-archive"></i>
                      <h4>Cryptocurrency Exchanges</h4>
                      <p>
                        Mauris id efficitur ante, vitae ultrices metus. Donec et nunc massa. Nullam
                        non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat
                        posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in
                        euismod ligula. Aliquam vel scelerisque elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Call To Action */}
      <section className="simple-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h4>
                Business <em>Solutions</em> and <strong>Crypto</strong> Investments
              </h4>
            </div>
            <div className="col-lg-7">
              <div className="buttons">
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

      {/* Detalhes dos serviços */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            {/* Título */}
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h6>Investment in Details</h6>
                <h4>Upgrade your knowledge</h4>
              </div>
            </div>

            {/* Tabs */}
            <div className="col-lg-10 offset-lg-1">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    {/* Menu */}
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="active gradient-border">
                          <span>Crypto Investments</span>
                        </div>
                        <div className="gradient-border">
                          <span>Cryptocurrency Market</span>
                        </div>
                        <div className="gradient-border">
                          <span>Financial Planning</span>
                        </div>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="col-lg-12">
                      <ul className="nacc">
                        {/* Aba 1 */}
                        <li className="active">
                          <div>
                            <div className="left-image">
                              <img src={detailsImg1} alt="Crypto Investments" />
                            </div>
                            <div className="right-content">
                              <h4>Learn more about cryptocurrency investments</h4>
                              <p>
                                Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec.
                                In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros
                                porttitor risus condimentum tempus.
                              </p>
                              <span>- Top Crypto prices and charts</span>
                              <span>- Is Cryptocurrency a good investment?</span>
                              <span className="last-span">
                                - Crypto Market Insiders and News
                              </span>
                            </div>
                          </div>
                        </li>

                        {/* Aba 2 */}
                        <li>
                          <div>
                            <div className="left-image">
                              <img src={detailsImg2} alt="Cryptocurrency Market" />
                            </div>
                            <div className="right-content">
                              <h4>Read more on Cryptocurrency Market</h4>
                              <p>
                                Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor,
                                at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.
                              </p>
                              <span>- Digital Currency Exchange</span>
                              <span>- Trading Cryptocurrencies Online</span>
                              <span className="last-span">
                                - Different Categories of Digital Currencies
                              </span>
                            </div>
                          </div>
                        </li>

                        {/* Aba 3 */}
                        <li>
                          <div>
                            <div className="left-image">
                              <img src={detailsImg3} alt="Financial Planning" />
                            </div>
                            <div className="right-content">
                              <h4>How to carefully plan on your online financials</h4>
                              <p>
                                Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.
                                Nulla facilisi. Mauris vitae lacinia magna. Nam euismod sapien sit amet elementum blandit.
                                Nulla non placerat neque.
                              </p>
                              <span>- Financial Planning and Investments</span>
                              <span>- Business Networking</span>
                              <span className="last-span">
                                - Managing Digital Assets
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fim Tabs */}
          </div>


   {/* Seção de Parceiros */}
        

        </div>
        <Partners />
      </section>
    </>
  );
};

export default ServicesOur;
