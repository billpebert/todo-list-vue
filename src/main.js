import { createApp } from 'vue'
import './style.css'
import 'tw-elements'
import router from "./router";
import App from './App.vue'

const app = createApp(App)
app.use(router).mount('#app')
app.provide('api', 'https://todo.api.devcode.gethired.id')
app.provide('email', 'bilpo@mail.com')