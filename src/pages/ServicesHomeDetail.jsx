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


      {/* Cabeçalho no padrão do template */}

      
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text text-center">
                <h2>Serviços</h2>
                <div className="div-dec"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do serviço */}
      <section className="service-content section">
        <div className="container">
          <div className="row">
            {/* Imagem do serviço */}
            <div className="col-lg-6">
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid rounded shadow"
                style={{ borderRadius: "10px" }}
              />
            </div>

            {/* Texto do serviço */}
            <div className="col-lg-6">
              <h4 className="mb-3">{service.title}</h4>
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
