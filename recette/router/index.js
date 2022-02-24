import {createRouter} from 'vue-router'
import {createWebHashHistory} from 'vue-router'
import ListRecette from '../src/components/ListRecette.vue'
import RecetteInfo from '../src/components/RecetteInfo.vue'

const routes = [
    { path: '/', component: ListRecette },
    { path: '/recette',component:RecetteInfo}
   
  ]

  export default createRouter({
      history: createWebHashHistory(),
      routes:routes
  })