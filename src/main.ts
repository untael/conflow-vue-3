import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
//@ts-ignore
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import 'reflect-metadata';

const app = createApp(App)
app.use(VuesticPlugin)
app.use(router)
app.mount('#app')
