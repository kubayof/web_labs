import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import store from './store'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App).use(store).use(router)
app.use(vuetify)

app.mount('#app')
