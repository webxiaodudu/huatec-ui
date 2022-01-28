import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import HuatecUi from './components'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(HuatecUi)
app.mount('#app')
