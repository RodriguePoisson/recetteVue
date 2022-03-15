import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import Vuex from 'vuex'
import UserStore from './components/store/UserStore'
import RecetteStore from './components/store/RecetteStore'

const app = createApp(App)

app.config.globalProperties.$UserStore = UserStore
app.config.globalProperties.$RecetteStore = RecetteStore
app.config.globalProperties.$route = router
app.use(router)
app.use(Vuex)

app.mount("#app")


