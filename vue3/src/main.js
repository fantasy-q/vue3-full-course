import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import vueRouter from './route/router'
import store from './store/index';

const vueApp = createApp(App)

// Install the store instance as a plugin
vueApp.use(vueRouter)
vueApp.use(store)

vueApp.mount('#app')
