class MeuWidget extends HTMLElement {
  connectedCallback() {
    // Criar Shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Container do widget
    // const container = document.createElement("div");
    // container.innerHTML = `
    //   <div id="widget-container">
    //     <input type="text" id="data" placeholder="Escolha uma data" />
    //     <button id="btn-alerta">Clique aqui</button>
    //   </div>
    // `;
    // shadow.appendChild(container);

    // Scripts que dependem de jQuery e outros
    const scripts = [
      "/assets/js/isotope.js",
      "/assets/js/isotope.min.js",
      "/assets/js/custom.js",
      "/assets/js/swiper.js",
      "/assets/js/swiper_script.js",
      "/assets/js/tabs.js",
      "/assets/js/video.js"
    ];

    const carregarScripts = (lista, callback) => {
      let i = 0;
      const carregar = () => {
        if (i < lista.length) {
          const script = document.createElement("script");
          script.src = lista[i];
          script.onload = () => { i++; carregar(); };
          shadow.appendChild(script);
        } else {
          callback();
        }
      };
      carregar();
    };

    // Inicializar scripts
    carregarScripts(scripts, () => {
      const $ = window.jQuery;

      if ($ && $.fn.datepicker) {
        $(shadow.querySelector("#data")).datepicker();
      }

      $(shadow.querySelector("#btn-alerta")).click(() => {
        alert("Botão clicado com sucesso!");
      });

      // Inicializar Owl Carousel se existir
      if ($ && $.fn.owlCarousel) {
        $(shadow).find(".owl-carousel").owlCarousel();
      }
    });
  }
}

customElements.define("meu-widget", MeuWidget);
