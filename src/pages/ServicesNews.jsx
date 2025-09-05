import React from "react";

const servicesData = [
  {
    icon: "fas fa-archive",
    title: "CSS Templates",
    description:
      "TemplateMo website is the best for you to explore and download free website templates.",
  },
  {
    icon: "fas fa-cloud",
    title: "HTML5 Web Pages",
    description:
      "Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.",
  },
  {
    icon: "fas fa-charging-station",
    title: "Responsive Designs",
    description:
      "All of our CSS templates are 100% free to use for commercial or business websites.",
  },
  {
    icon: "fas fa-suitcase",
    title: "Mobile and Tablet ready!",
    description:
      "Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.",
  },
  {
    icon: "fas fa-archway",
    title: "Fast Customer Support",
    description:
      "Do not be hesitated to contact us if you have any question or concern about our templates.",
  },
  {
    icon: "fas fa-puzzle-piece",
    title: "Fully Customizable",
    description:
      "If you have any idea or suggestion about new templates, feel free to let us know.",
  },
];

const ServicesNews = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="row">
          {servicesData.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-12 mb-4">
              <div className="service-item">
                <i className={service.icon}></i>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNews;
