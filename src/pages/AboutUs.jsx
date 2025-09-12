import React from "react";
import aboutImage from "/assets/images/about-left-image.jpg";

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        {/* Linha título */}
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading text-center">
              <h6>TechNunes Soluções em TI</h6>
              <h4>Apresentação</h4>
            </div>
          </div>
        </div>

        {/* Linha conteúdo */}
        <div className="row align-items-center gx-5">
          {/* Coluna texto */}
          <div className="col-lg-6">
            <div className="about-text">
              <p>
                Somos uma empresa especializada em oferecer suporte tecnológico
                eficiente, ágil e personalizado para pessoas físicas e empresas.
              </p>
              <p>
                Atuamos com manutenção, consultoria e soluções inteligentes em
                tecnologia da informação, garantindo o pleno funcionamento de
                equipamentos e sistemas, proporcionando segurança, produtividade
                e inovação aos nossos clientes.
              </p>
              <p>
                Com atendimento humanizado, profissionais capacitados e
                compromisso com a qualidade, nos dedicamos a conectar pessoas e
                negócios à tecnologia com eficiência e confiança.
              </p>
              <p>
                <b>Missão:</b> Oferecer soluções tecnológicas práticas e de
                qualidade que simplificam o dia a dia dos nossos clientes.
              </p>
              <p>
                <b>Visão:</b> Ser referência em serviços de TI pela excelência e
                proximidade com o cliente.
              </p>
              <p>
                <b>Valores:</b> Compromisso, agilidade, ética e inovação.
              </p>
              <a
                href="#contato"
                className="btn btn-primary rounded-pill py-2 px-4 mt-3"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          {/* Coluna imagem */}
          <div className="col-lg-6">
            <div className="left-image">
              <img
                src={aboutImage}
                alt="Sobre nós"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
