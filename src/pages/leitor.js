export default {
  template: `
  <div class="leitor">
        <main class="leitor__main">
      <div class="leitor__controls">
        <button class="leitor__button" @click="prevChapter"><i class='bx bx-chevron-left'></i></button>
        <select class="leitor__select" v-model="currentId" @change="loadChapter">
          <option v-for="cap in chapters" :key="cap.id" :value="cap.id">{{ cap.name }}</option>
        </select>
        <button class="leitor__button" @click="nextChapter"><i class='bx bx-chevron-right'></i></button>
      </div>

      <embed class="leitor__pdf" type="application/pdf" :src="currentFile" />

      <div class="leitor__controls leitor__controls--footer">
        <button class="leitor__button" @click="prevChapter"><i class='bx bx-chevron-left'></i></button>
        <button class="leitor__button" @click="nextChapter"><i class='bx bx-chevron-right'></i></button>
      </div>
    </main>

     `,

  data() {
    return {
      chapters: [
        { id: 1, name: "Capítulo 1 - O Início", file: "capitulos/capitulo1.pdf" },
        { id: 2, name: "Capítulo 2 - O Roubo do Barco", file: "capitulos/capitulo2.pdf" },
        { id: 3, name: "Capítulo 3 - A Ilha do Comércio", file: "capitulos/capitulo3.pdf" }
      ],
      currentId: 1
    };
  },

  computed: {
    currentFile() {
      const cap = this.chapters.find(c => c.id === this.currentId);
      return cap ? cap.file : "";
    }
  },

  methods: {
    loadChapter() {
      const cap = this.chapters.find(c => c.id === this.currentId);
      if (cap) window.scrollTo({ top: 0, behavior: "smooth" });
    },
    prevChapter() {
      if (this.currentId > 1) this.currentId--;
    },
    nextChapter() {
      if (this.currentId < this.chapters.length) this.currentId++;
    }
  }
};

