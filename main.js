const app = Vue.createApp({});
import navbar  from "./componentes/navbar.js";
import banner from "./componentes/banner.js";
app.component("navbar", navbar);
app.component("banner", banner);
app.mount("#app");
