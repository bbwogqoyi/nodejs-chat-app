import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router'

const app = createApp(App);
app.directive(
  'nlbr', {
      beforeMount(el, binding, vnode) {
        // simplified example, 
        // works only for nodes without any child elements
        el.innerHTML = el.textContent.replaceAll(/([^>\\r\\n]?)(\\r\\n|\\n\\r|\\r|\\n)/g, '<br/>');
      }
    }
);

app.use(router)

app.mount('#app')
