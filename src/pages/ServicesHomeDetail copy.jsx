import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "./ServicesHomeDetail.css";

const ServicesHomeDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="contact-page">
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Serviço não encontrado</h2>
                <div className="div-dec"></div>
                <button className="orange-button mt-4" onClick={() => navigate(-1)}>
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Header com imagem de fundo e título */}
      <div
        className="page-heading"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text text-center" style={{ color: "#fff" }}>
                <h2>{service.title}</h2>
                <div className="div-dec"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Overlay para dar contraste no texto */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: -1,
          }}
        ></div>
      </div>

      {/* Conteúdo do serviço */}
      <section className="service-content section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="lead">{service.description}</p>
              <p>{service.details}</p>
              <button className="orange-button mt-3" onClick={() => navigate(-1)}>
                Voltar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHomeDetail;
