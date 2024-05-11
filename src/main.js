import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import Home from './components/home/Home.vue'
import Favorites from './components/favorites/Favorites.vue'

const app = createApp(App)
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/favorites', name: 'favorites', component: Favorites },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')
