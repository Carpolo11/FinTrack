import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 👈 importa el router

createApp(App)
  .use(router) // 👈 activa el router
  .mount('#app')
