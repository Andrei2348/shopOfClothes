/** @format */

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import Home from "./components/home/Home.vue";
import Favorites from "./components/favorites/Favorites.vue";
import Cart from "./components/cart/Cart.vue";

const app = createApp(App);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true,
    meta: { isLogin: false },
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
    props: true,
    meta: { isLogin: false },
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    props: true,
    meta: { isLogin: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(autoAnimatePlugin);
app.use(router);
app.use(store);
app.mount("#app");

router.beforeEach((to, from, next) => {
  console.log(store.state.isLogin);
  console.log(to.meta.isLogin);
  if (to.meta.isLogin === store.state.isLogin) {
    next();
  }
  if (to.meta.isLogin !== store.state.isLogin) {
    next();
  }
  // } else {
  //   next();
  // }
});
