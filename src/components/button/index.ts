import { App } from 'vue'
import button from './src/index.vue'

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('huatec-button', button)
  },
  name:'HuatecButton',
  _default:button
}