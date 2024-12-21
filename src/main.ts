import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import "./styles/Main.css"

import App from './App.vue'

import Home from './pages/Home.vue'
import Inac from './pages/Inac.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/buy', component: Inac }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')