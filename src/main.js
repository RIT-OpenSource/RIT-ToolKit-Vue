import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$theme_global = {
    theme: localStorage.getItem('theme')
}

app.use(createPinia())
app.use(router)

if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'auto')
}

app.mount('#app')