// personagem.js
export default {
  template: `
  <section class="personagem">

  </section>
  `,
  data() {
    return {
      currentStep: 0,
      personagem: {
        nome: "",
        ether: "",
        faccao: "",
        outraFaccao: "",
        feiticos: "",
        raca: "",
        sexo: "",
        idade: "",
        continentariedade: "",
      },
      steps: [
        {
          title: "Nomeie teu Avatar das Trevas",
          component: {
            template: `
              <div class="personagem__field">
                <label for="nome" class="personagem__label">Nome do Feiticeiro</label>
                <input type="text" id="nome" v-model="$parent.personagem.nome" class="personagem__input" required>
                <button @click="gerarNomeAleatorio" class="personagem__button personagem__button--small">Gerar Nome Místico</button>
              </div>
            `
          }
        },
        {
          title: "Escolha teu Ether Primordial",
          component: {
            template: `
              <div class="personagem__field">
                <label for="ether" class="personagem__label">Ether</label>
                <select id="ether" v-model="$parent.personagem.ether" class="personagem__select" required>
                  <option value="">Selecione o Fluxo</option>
                  <option>Ether</option>
                  <option>Pyrether</option>
                  <option>Overether</option>
                  <option>Luminether</option>
                  <option>Spawnether</option>
                </select>
                <p class="personagem__tip">Cada Ether desperta poderes únicos no apocalipse!</p>
              </div>
            `
          }
        },
        {
          title: "Jure Lealdade a uma Facção Sombria",
          component: {
            template: `
              <div class="personagem__field">
                <label for="faccao" class="personagem__label">Facção</label>
                <select id="faccao" v-model="$parent.personagem.faccao" class="personagem__select" required>
                  <option value="">Selecione a Aliança</option>
                  <option>Tríades</option>
                  <option>Cartéis</option>
                  <option>Máfias</option>
                  <option>Mercenários</option>
                  <option>Redes Digitais</option>
                  <option>Gangues</option>
                  <option>Outra</option>
                </select>
                <div v-if="$parent.personagem.faccao === 'Outra'" class="personagem__field personagem__field--sub">
                  <label for="outraFac" class="personagem__label">Forje tua própria Facção</label>
                  <input type="text" id="outraFac" v-model="$parent.personagem.outraFaccao" class="personagem__input">
                </div>
              </div>
            `
          }
        },
        {
          title: "Teça teus Feitiços Arcanos",
          component: {
            template: `
              <div class="personagem__field">
                <label for="feiticos" class="personagem__label">Feitiços (separe por vírgula)</label>
                <textarea id="feiticos" v-model="$parent.personagem.feiticos" class="personagem__textarea" rows="3"></textarea>
                <p class="personagem__tip">Ex: Tempestade de Ébano, Lança de Sombras</p>
              </div>
            `
          }
        },
        {
          title: "Defina tua Essência Mortal",
          component: {
            template: `
              <div class="personagem__field-group">
                <div class="personagem__field">
                  <label for="raca" class="personagem__label">Raça</label>
                  <input type="text" id="raca" v-model="$parent.personagem.raca" class="personagem__input">
                </div>
                <div class="personagem__field">
                  <label for="sexo" class="personagem__label">Sexo</label>
                  <select id="sexo" v-model="$parent.personagem.sexo" class="personagem__select">
                    <option value="">Selecione</option>
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div class="personagem__field">
                  <label for="idade" class="personagem__label">Idade</label>
                  <input type="number" id="idade" v-model="$parent.personagem.idade" class="personagem__input">
                </div>
                <div class="personagem__field">
                  <label for="continentariedade" class="personagem__label">Continentariedade (Origem)</label>
                  <input type="text" id="continentariedade" v-model="$parent.personagem.continentariedade" class="personagem__input">
                </div>
              </div>
            `
          }
        }
      ]
    };
  },
  computed: {
    faccaoFinal() {
      return this.personagem.faccao === 'Outra' ? this.personagem.outraFaccao : this.personagem.faccao;
    },
    feiticosLista() {
      return this.personagem.feiticos.split(',').map(f => f.trim()).filter(f => f);
    },
    avatarStyle() {
      // Simula preview visual baseado em escolhas (pode expandir com imagens reais)
      let bg = 'gray';
      if (this.personagem.ether === 'Pyrether') bg = 'red';
      else if (this.personagem.ether === 'Overether') bg = 'black';
      else if (this.personagem.ether === 'Luminether') bg = 'green';
      else if (this.personagem.ether === 'Spawnether') bg = 'blue';
      return { backgroundColor: bg, animation: this.personagem.ether ? 'pulse 2s infinite' : 'none' };
    }
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) this.currentStep++;
    },
    prevStep() {
      if (this.currentStep > 0) this.currentStep--;
    },
    gerarNomeAleatorio() {
      const nomes = ['Kael', 'Lila', 'Cyberion', 'El Toro', 'Don Vittorio', 'Mei-Ling', 'Razor'];
      this.personagem.nome = nomes[Math.floor(Math.random() * nomes.length)];
    },
    enviarPersonagem() {
      const dados = { ...this.personagem, faccao: this.faccaoFinal };
      console.log("Feiticeiro Invocado:", dados);
      alert("Teu Feiticeiro desperta no caos de Lemuria!");
    },
  },
};
