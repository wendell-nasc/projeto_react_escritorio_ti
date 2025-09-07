class MeuWidget extends HTMLElement {
  connectedCallback() {
    // Criar Shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Container do widget
    // const container = document.createElement("div");
    // container.id = "widget-container";
    // container.innerHTML = `
    //   <input type="text" id="data" placeholder="Escolha uma data" />
    //   <button id="btn-alerta">Clique aqui</button>
    //   <div class="owl-carousel">
    //     <div>Slide 1</div>
    //     <div>Slide 2</div>
    //     <div>Slide 3</div>
    //   </div>
    // `;
    // shadow.appendChild(container);

    // Scripts externos que dependem de jQuery ou outros
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
          script.onerror = () => { i++; carregar(); }; // ignora erros
          shadow.appendChild(script);
        } else {
          callback();
        }
      };
      carregar();
    };

    // Inicializar scripts após carregar
    carregarScripts(scripts, () => {
      const $ = window.jQuery;

      if ($) {
        // Inicializar datepicker
        if ($.fn.datepicker) {
          $(shadow.querySelector("#data")).datepicker();
        }

        // Botão de alerta
        $(shadow.querySelector("#btn-alerta")).click(() => {
          alert("Botão clicado com sucesso!");
        });

        // Owl Carousel
        if ($.fn.owlCarousel) {
          $(shadow.querySelector(".owl-carousel")).owlCarousel();
        }
      }
    });
  }
}

// Registrar Web Component
customElements.define("meu-widget", MeuWidget);
