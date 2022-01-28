import { App } from 'vue'
import '../assets/common.css'
import button from './button'
import icon from './icon'
import ButtonGroup from './button-group'

const components = [
    button,
    icon,
    ButtonGroup
]

interface IHuatec {
  install(app:App):void,
  [key:string]:any
}


const HuatecUi:IHuatec = {
  install(app: App) {
    //console.log(app,' ==t ')
    components.map(item => {
      app.use(item);
      HuatecUi[item.name]=item._default
    })
  }
}


declare global {
  interface Window {
    HuatecUi:{
      install(app:App):void,
      [key:string]:any
    };
  }

}


if(typeof window!=='undefined'){
  window.HuatecUi=HuatecUi
}

export default HuatecUi


