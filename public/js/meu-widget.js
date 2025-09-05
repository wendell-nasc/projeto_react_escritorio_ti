class MeuWidget extends HTMLElement {
  constructor() {
    super();
    // Cria Shadow DOM
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Cria container principal do widget
    const container = document.createElement("div");
    container.id = "widget-container";
    container.innerHTML = `
      <input type="text" id="data" placeholder="Escolha uma data" />
      <button id="btn-alerta">Clique aqui</button>
    `;
    this.shadow.appendChild(container);

    // Lista de scripts a carregar dinamicamente
    const scripts = [
      "/vendor/jquery/jquery.min.js",
      "/assets/js/isotope.js",
      "/assets/js/isotope.min.js",
      "/assets/js/custom.js",
      "/assets/js/swiper.js",
      "/assets/js/swiper_script.js",
      "/assets/js/tabs.js",
      "/assets/js/video.js",
    ];

    // Função para carregar scripts em sequência
    const carregarScripts = (lista, callback) => {
      let i = 0;
      const carregar = () => {
        if (i < lista.length) {
          const script = document.createElement("script");
          script.src = lista[i];
          script.onload = () => {
            i++;
            carregar();
          };
          script.onerror = () => {
            console.warn(`Falha ao carregar o script: ${lista[i]}`);
            i++;
            carregar();
          };
          document.body.appendChild(script); // usar body para scripts globais
        } else {
          callback();
        }
      };
      carregar();
    };

    // Inicializa widgets após carregar os scripts
    carregarScripts(scripts, () => {
      if (window.jQuery) {
        const $ = window.jQuery;

        // Aplica datepicker
        $(container.querySelector("#data")).datepicker();

        // Evento do botão
        $(container.querySelector("#btn-alerta")).click(() => {
          alert("Botão clicado com sucesso!");
        });
      } else {
        console.error("jQuery não foi carregado corretamente.");
      }
    });
  }
}

// Define o Web Component
customElements.define("meu-widget", MeuWidget);
