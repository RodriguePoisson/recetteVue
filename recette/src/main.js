import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import Vuex from 'vuex'
import UserStore from './components/store/UserStore'

const app = createApp(App)

app.config.globalProperties.$UserStore = UserStore
app.use(router)
app.use(Vuex)

app.mount("#app")


