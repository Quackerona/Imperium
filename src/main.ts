import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import "./Style.css"

import App from './App.vue'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Inac from './pages/Inac.vue'
import Confession from './pages/Confession.vue'
import Evil from './pages/Evil.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/buy', component: Inac },
  { path: '/about', component: About },
  { path: '/confession', component: Confession },
  { path: '/evil', component: Evil }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')