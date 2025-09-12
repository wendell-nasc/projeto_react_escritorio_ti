import React from "react";
import { useLocation,useNavigate } from "react-router-dom";


import "./Services.css";

const ServicesHome = ({ services: propsServices }) => {
  const location = useLocation();
  const services = propsServices || location.state?.services || [];
  const navigate = useNavigate(); // aqui você cria a função navigate

  

   return (

    

    <div className="row g-4" style={{ marginTop: "80px", padding: "0 20px" }}>
      {services.length > 0 &&
        services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-4 d-flex">
            <div
              className="service-item d-flex flex-column w-100"
              onClick={() => navigate(`/services/${index}`)} // navega para ServiceDetail
              style={{ cursor: "pointer" }}
            >
              <div className="service-img">
                <img src={service.image} className="img-fluid w-100" alt={service.title} />
              </div>
              <div className="service-content flex-grow-1 d-flex flex-column p-4">
                <h4 className="service-title mb-3">{service.title}</h4>
                <p className="service-description flex-grow-1 mb-4">{service.description}</p>
                <a className="btn btn-primary rounded-pill py-2 px-4 mt-auto" href="#">
                  Leia mais
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ServicesHome;
