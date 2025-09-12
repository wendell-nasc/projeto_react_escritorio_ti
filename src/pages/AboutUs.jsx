import React from "react";
import aboutImage from "/assets/images/about-left-image.jpg";

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="row">
          {/* Título */}
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading text-center">
              <h6>TechNunes Soluções em TI</h6>
              <h4>Apresentação</h4>
            </div>
          </div>

          {/* Seção com texto + imagem */}
          <div className="container">
            <div className="row gx-4 align-items-stretch">
              {/* Texto sobre a empresa */}
              <div className="col-lg-6 d-flex">
                <div className="about-text my-auto">
                  <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                    Somos uma empresa especializada em oferecer suporte tecnológico eficiente,
                    ágil e personalizado para pessoas físicas e empresas.
                  </p>
                  <br />
                  <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                    Atuamos com manutenção, consultoria e soluções inteligentes em tecnologia da
                    informação, garantindo o pleno funcionamento de equipamentos e sistemas,
                    proporcionando segurança, produtividade e inovação aos nossos clientes.
                  </p>
                  <br />
                  <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                    Com atendimento humanizado, profissionais capacitados e compromisso com a
                    qualidade, nos dedicamos a conectar pessoas e negócios à tecnologia com
                    eficiência e confiança.
                  </p>
                  <br />
                  <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                    <b>Missão:</b> Oferecer soluções tecnológicas práticas e de qualidade que
                    simplificam o dia a dia dos nossos clientes.
                  </p>
                  <br />
                  <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                    <b>Visão:</b> Ser referência em serviços de TI pela excelência e proximidade
                    com o cliente.
                  </p>
                  <br />
                  <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                    <b>Valores:</b> Compromisso, agilidade, ética e inovação.
                  </p>
                  <br />
                  <a
                    href="#contato"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="col-lg-6 d-flex">
                <div className="left-image w-100 h-100">
                  <img
                    src={aboutImage}
                    alt="About"
                    className="img-fluid rounded"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
