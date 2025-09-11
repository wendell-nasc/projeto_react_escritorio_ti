import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "./ServicesHomeDetail.css";

const ServicesHomeDetail = () => {
  const { serviceId } = useParams(); // pega o índice do serviço da URL
  const navigate = useNavigate();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Serviço não encontrado</h2>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Header com imagem de fundo */}
      <div className="service-header">
        <img src={service.image} alt={service.title} className="header-image" />
        <div className="header-overlay">
          <h1 className="header-title">{service.title}</h1>
        </div>
      </div>

      {/* Conteúdo do serviço */}
      <div className="service-content container">
        <p className="lead">{service.description}</p>
        <p>
          {service.details}
        </p>
        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ServicesHomeDetail;
