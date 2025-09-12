import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


import "./Banner.css";



// Serviços do portfólio
const services = [
  {
    title: "Suporte técnico especializado",
    description:
      "Oferecemos suporte especializado para computadores, notebooks e periféricos, garantindo que seus dispositivos funcionem sempre de forma eficiente.",
    image: "/assets/images/slide-01.jpg",
  },
  {
    title: "Manutenção e reparo de computadores",
    description:
      "Serviços de manutenção preventiva e corretiva para computadores, notebooks e periféricos.",
    image: "/assets/images/slide-02.jpg",
  },
  {
    title: "Consultoria em Infraestrutura de TI",
    description:
      "Planejamento, implementação e otimização de infraestrutura tecnológica para empresas.",
    image: "/assets/images/slide-03.jpg",
  },
  {
    title: "Criação de Sites e Aplicações Web",
    description:
      "Desenvolvemos landing pages, sites institucionais, e-commerce e sistemas online personalizados.",
    image: "/assets/images/slide-01.jpg",
  },
  {
    title: "Bots Automatizados e APIs",
    description:
      "Automatização de tarefas com bots (Telegram, WhatsApp, Discord) e integração via APIs customizadas.",
    image: "/assets/images/slide-02.jpg",
  },
];

function Banner() {
  return (
    <div className="swiper-banner" id="top">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="swiper-container"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-inner"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-lg-8 col-md-10 col-12">
                    <div className="header-text text-white">
                      <h2>
                        {service.title} <em>TechNunes</em>
                      </h2>
                      <div className="div-dec"></div>
                      <p>{service.description}</p>
                      <div className="buttons d-flex flex-wrap gap-2">
                        <div className="green-button">
                          <a href="#">Leia mais</a>
                        </div>
                        <div className="orange-button">
                          <a href="#">Contato</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Botões de navegação */}
        <div className="swiper-button-next swiper-button-white"></div>
        <div className="swiper-button-prev swiper-button-white"></div>
      </Swiper>
    </div>
  );
}

export default Banner;
