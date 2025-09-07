import React from "react";
import { useLocation } from "react-router-dom";
import "./Services.css"; // reutiliza o mesmo CSS dos cards

const TechnologyPartners = ({ partners: propsPartners }) => {
  // Recebe partners via prop ou via location.state (Link)
  const location = useLocation();
  const partners = propsPartners || location.state?.partners || [];

  return (
    <section className="services" id="technology-partner">
      <div className="section-heading"><h6>Parceiros</h6><h4>A EMPRESA X tem mais de 80 parceiros de tecnologia
</h4></div>
      <div
        className="row g-4"
        style={{ marginTop: "80px", paddingLeft: "20px", paddingRight: "20px" }}
      >
        {partners.length > 0 ? (
          partners.map((partner, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay={`${0.2 + (index % 3) * 0.2}s`}
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src={partner.image}
                    className="img-fluid rounded-top w-100"
                    alt={partner.name}
                  />
                </div>
                <div className="rounded-bottom p-4">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h4 d-inline-block mb-2"
                  >
                    {partner.name}
                  </a>
                  <p className="mb-3">{partner.description}</p>
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#fff" }}>
            Nenhum parceiro disponível.
          </p>
        )}
      </div>
    </section>
  );
};

export default TechnologyPartners;
