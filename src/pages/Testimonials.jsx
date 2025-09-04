import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules from 'swiper/modules'
import { Navigation, Autoplay } from 'swiper/modules';

const testimonialsData = [
  {
    text: "“Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”",
    name: "David Eigenberg",
    role: "CEO of Mexant",
    imgSrc: "assets/images/testimonials-01.jpg",
  },
  {
    text: "“Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”",
    name: "Andrew Garfield",
    role: "CTO of Mexant",
    imgSrc: "assets/images/testimonials-01.jpg",
  },
  {
    text: "“Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo. Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo.”",
    name: "George Lopez",
    role: "Crypto Manager",
    imgSrc: "assets/images/testimonials-01.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h6>Testimonials</h6>
              <h4>What They Say</h4>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <Swiper
              navigation={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              className="mySwiper"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="item">
                    <i className="fa fa-quote-left"></i>
                    <p>{testimonial.text}</p>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                    <div className="right-image">
                      <img src={testimonial.imgSrc} alt={testimonial.name} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
