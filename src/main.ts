import { createApp, inject } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import 'reflect-metadata'
import './main.scss'

const app = createApp(App)

;(window as any).injectExternal = inject

app.use(VuesticPlugin)
app.use(router)
app.mount('#app')
