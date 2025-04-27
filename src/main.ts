import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import ProductList from './views/ProductList.vue'
import ProductDetail from './views/ProductDetail.vue'

const routes = [
  { path: '/', component: ProductList },
  { path: '/product/:id', component: ProductDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')