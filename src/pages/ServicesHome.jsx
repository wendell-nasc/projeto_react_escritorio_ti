import React from "react";
import { useLocation } from "react-router-dom";
import "./Services.css";

const ServicesHome = ({ services: propsServices }) => {
  // Recebe services via prop ou via location.state (Link)
  const location = useLocation();
  const services = propsServices || location.state?.services || [];

  return (
    <>
      
      {/* Seção de serviços */}
      <section className="services" id="services">
        <div className="section-heading">
          <h6>Serviços</h6>
          <h4>Nossos serviços</h4>
        </div>

        <div
          className="row g-4"
          style={{ marginTop: "80px", paddingLeft: "20px", paddingRight: "20px" }}
        >
          {services.length > 0 ? (
            services.map((service, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay={`${0.2 + (index % 3) * 0.2}s`}
              >
                <div className="service-item">
                  <div className="service-img">
                    <img
                      src={service.image}
                      className="img-fluid rounded-top w-100"
                      alt={service.title}
                    />
                  </div>
                  <div className="rounded-bottom p-4">
                    <a href={service.link} className="h4 d-inline-block mb-4">
                      {service.title}
                    </a>
                    <p className="mb-4">{service.description}</p>
                    <a
                      className="btn btn-primary rounded-pill py-2 px-4"
                      href={service.link}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#fff" }}>
              Nenhum serviço disponível.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ServicesHome;
