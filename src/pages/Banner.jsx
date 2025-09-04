import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Banner() {
  const slides = [1, 2, 3];

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
        {slides.map((i) => (
          <SwiperSlide key={i}>
            <div
              className="slide-inner"
              style={{
                backgroundImage: `url(/assets/images/slide-0${i}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="header-text">
                      <h2>
                        Slide {i} Title <em>with Emphasis</em>
                      </h2>
                      <div className="div-dec"></div>
                      <p>Slide {i} content goes here...</p>
                      <div className="buttons">
                        <div className="green-button">
                          <a href="#">Discover More</a>
                        </div>
                        <div className="orange-button">
                          <a href="#">Contact Us</a>
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
