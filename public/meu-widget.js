class MeuWidget extends HTMLElement {
  connectedCallback() {
    // Criar Shadow DOM para isolar o conteúdo
    const shadow = this.attachShadow({ mode: "open" });

    // Criar container principal
    // const container = document.createElement("div");
    // container.innerHTML = `
    //   <div id="widget-container">
    //     <input type="text" id="data" placeholder="Escolha uma data" />
    //     <button id="btn-alerta">Clique aqui</button>
    //   </div>
    // `;

    // // Adiciona o container ao shadow DOM
    // shadow.appendChild(container);

    // Carrega dinamicamente o jQuery, jQuery UI e os arquivos antigos
    const scripts = [      

      "/vendor/jquery/jquery.min.js",
      // "/vendor/bootstrap/js/bootstrap.bundle.min.js",


      
      "/assets/js/isotope.js",
      "/assets/js/isotope.min.js",
      "/assets/js/custom.js",
      
      "/assets/js/swiper.js",
      "/assets/js/swiper_script.js",

      
      "/assets/js/tabs.js",
      "/assets/js/video.js",
      


      
    ];

    // Função para carregar scripts na ordem correta
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
          shadow.appendChild(script);
        } else {
          callback();
        }
      };

      carregar();
    };

    // Inicializa scripts antigos após carregar todos
    carregarScripts(scripts, () => {
      // Aqui o jQuery está disponível
      const $ = window.jQuery;

      // Exemplo: aplica datepicker
      $(shadow.querySelector("#data")).datepicker();

      // Exemplo: botão com evento jQuery
      $(shadow.querySelector("#btn-alerta")).click(() => {
        alert("Botão clicado com sucesso!");
      });
    });
  }
}

// Define o Web Component
customElements.define("meu-widget", MeuWidget);
