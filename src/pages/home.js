export default {
  template: `
  <div class="bh" @click="onRootClick">
   
    <!-- Seções -->
    <section id="home" class="bh-home bh-section">
      <h1 class="bh-home__title">Bem-vindo ao BlackHeart</h1>
      <p class="bh-home__text">Um universo sombrio, místico e sangrento — onde cada página revela um segredo.</p>
      <button class="bh-home__cta" @click="scrollPara('capitulos')">Ver Capítulos</button>
    </section>

    <div class="bh-transition">↓ Sobre ↓</div>

    <section id="sobre" class="bh-sobre">
      <h2 class="bh-sobre__title">Sobre</h2>
      <p class="bh-sobre__text">
        BlackHeart é uma obra independente que mistura elementos de fantasia, horror e filosofia. 
        Aqui você encontrará a jornada dos Gibrids e do Cálice Negro — duas forças que se chocam em meio ao caos e à fé.
      </p>
    </section>

    <div class="bh-transition">↓ Personagens ↓</div>

    <section id="personagens" class="bh-personagens-bg">
      <h2>Facção: Diabretes</h2>
      <div class="bh-personagens">
        <div class="bh-personagem-card" v-for="personagem in diabretes" :key="personagem.nome">
          <img :src="personagem.img" :alt="personagem.nome">
          <h3>{{ personagem.nome }}</h3>
          <p><span class="label">Habilidades:</span> {{ personagem.habilidades }}</p>
          <p><span class="label">Armas:</span> {{ personagem.armas }}</p>
          <p><span class="label">Personalidade:</span> {{ personagem.personalidade }}</p>
        </div>
      </div>

      <div class="bh-separator">
        <div class="bh-separator-line"><i class='bx bx-chevron-down'></i></div>
        <span>↓ Cálice Negro ↓</span>
      </div>

      <h2>Facção: Cálice Negro</h2>
      <div class="bh-personagens">
        <div class="bh-personagem-card" v-for="personagem in caliceNegro" :key="personagem.nome">
          <img :src="personagem.img" :alt="personagem.nome">
          <h3>{{ personagem.nome }}</h3>
          <p><span class="label">Habilidades:</span> {{ personagem.habilidades }}</p>
          <p><span class="label">Armas:</span> {{ personagem.armas }}</p>
          <p><span class="label">Personalidade:</span> {{ personagem.personalidade }}</p>
        </div>
      </div>
    </section>

    <div class="bh-transition">↓ Capítulos ↓</div>

    <section id="capitulos" class="bh-capitulos">
      <h2 class="bh-capitulos__title">Capítulos</h2>
      <div class="bh-capitulos__list">
        <div class="bh-capitulos__item"><i class='bx bx-book'></i> Capítulo 1 - Sangue e Fogo</div>
        <div class="bh-capitulos__item"><i class='bx bx-book'></i> Capítulo 2 - Vozes na Escuridão</div>
        <div class="bh-capitulos__item"><i class='bx bx-book'></i> Capítulo 3 - O Cálice Negro</div>
      </div>
    </section>

    <div class="bh-transition">↓ Doação ↓</div>

    <section id="doacao" class="bh-doacao">
      <h2 class="bh-doacao__title">Ajude o Projeto</h2>
      <div class="bh-doacao__qr">
        <img src="https://i.ibb.co/pL2f5sR/qr-bitcoin.png" alt="QR Bitcoin" class="bh-doacao__qr-img">
      </div>
      <p class="bh-doacao__text">Endereço Bitcoin: <br><code class="bh-doacao__address">{{ btcAddress }}</code></p>
      <button class="bh-doacao__btn" @click="copiar">Copiar Endereço</button>
    </section>
 
  </div>
  `,
  data() {
    return {
      btcAddress: "bc1qexampleaddress12345xyz",
      diabretes: [
        { nome: "Nathan Makani", img: "diabrete.jpg", habilidades: "Fogo, Almas", armas: "Ganchos da Ruína, Lâmina Carmesim", personalidade: "Impulsivo, estratégico" },
        { nome: "Kanaloa Maremotus", img: "kanaloa.jpg", habilidades: "Luminether, Água", armas: "Pulseira Iara", personalidade: "Sarcástica, otimista, ousada" },
        { nome: "Ícaro", img: "icaro.jpg", habilidades: "Quebra de Maldições, Luz", armas: "Lâminas Serafim", personalidade: "Charmoso, leal, mortal" }
      ],
      caliceNegro: [
        { nome: "Kant (Void)", img: "kant.jpg", habilidades: "Trevas, Espaço, Cortes", armas: "Lâmina das Trevas", personalidade: "Silencioso, disciplinado" },
        { nome: "Silvia", img: "silvia.jpg", habilidades: "Natureza, Luminether", armas: "Correntes de Hera", personalidade: "Compassiva, implacável" },
        { nome: "Kinjau", img: "kinjau.jpg", habilidades: "Invocação de Criaturas", armas: "Tomo das Bestas", personalidade: "Misterioso, calculista" }
      ]
    };
  },
  methods: { 
    scrollPara(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    copiar() {
      navigator.clipboard.writeText(this.btcAddress)
        .then(() => alert("Endereço Bitcoin copiado!"));
    },
    onRootClick(e) {
      if (!this.menuActive) return;
      const menu = this.$refs.menu;
      const toggle = this.$refs.navbar.querySelector('.bh-navbar__toggle');
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        this.closeMenu();
      }
    },
    lockBodyScroll(lock) {
      document.body.style.overflow = lock ? 'hidden' : '';
    }
  },
  beforeDestroy() {
    this.lockBodyScroll(false);
  }
};

