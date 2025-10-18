import home from "./src/pages/home.js";
import leitor from "./src/pages/leitor.js";
import navbar from "./src/componentes/navbar.js"
import rodape from "./src/componentes/rodape.js"
const routes = [
    { path: "/", component: home },
    { path: "/leitor", component: leitor }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0 };
  }
});

const app = Vue.createApp({});
app.use(router);
app.component("navbar",navbar);
app.component("rodape",rodape);
app.mount("#app");

