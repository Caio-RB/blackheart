export default {
  template: `
    <nav class="bh-navbar" ref="navbar">
      <div class="bh-navbar__logo"><i class='bx bx-heart'></i> BlackHeart</div>

      <button
        class="bh-navbar__toggle"
        :aria-expanded="menuActive.toString()"
        aria-label="Abrir menu"
        @click.stop="toggleMenu"
      >
        <i :class="menuActive ? 'bx bx-x' : 'bx bx-menu'"></i>
      </button>

      <div
        class="bh-navbar__menu"
        :class="{ 'bh-navbar__menu--active': menuActive }"
        ref="menu"
        @click.stop
      >
        <button class="bh-navbar__menu-close" @click="closeMenu" aria-label="Fechar menu">×</button>

        <router-link :to="{ path:'/', hash:'#home' }" class="bh-navbar__link" >Home</router-link>
        <router-link :to="{ path:'/', hash:'#sobre' }" class="bh-navbar__link">Sobre</router-link>
        <router-link :to="{ path:'/', hash:'#personagens' }" class="bh-navbar__link">Personagens</router-link>
        <router-link :to="{ path:'/', hash:'#capitulos' }" class="bh-navbar__link">Capítulos</router-link>
        <router-link :to="{ path:'/', hash:'#doacao' }" class="bh-navbar__link">Doação</router-link>
      </div>
    </nav>
  `,
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    closeMenu() {
      this.menuActive = false;
    }
      }
};

