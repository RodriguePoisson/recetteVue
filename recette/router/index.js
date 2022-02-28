import {createRouter} from 'vue-router'
import {createWebHashHistory} from 'vue-router'
import ListRecette from '../src/components/ListRecette.vue'
import RecetteInfo from '../src/components/RecetteInfo.vue'
import Register from '../src/components/Register.vue'
import ModifyRecette from '../src/components/ModifyRecette.vue'

const routes = [
    { path: '/', component: ListRecette},
    { path: '/recette',component:RecetteInfo},
    { path: '/register',component:Register},
    { path: '/recette/modify/:id',component:ModifyRecette}
   
  ]

  export default createRouter({
      history: createWebHashHistory(),
      routes:routes
  })