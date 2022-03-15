import {createRouter} from 'vue-router'
import {createWebHashHistory} from 'vue-router'
import ListRecette from '../src/components/ListRecette.vue'
import RecetteInfo from '../src/components/RecetteInfo.vue'
import Register from '../src/components/Register.vue'
import ModifyRecette from '../src/components/ModifyRecette.vue'
import MesRecettes from '../src/components/MesRecettes.vue'
import Connexion from '../src/components/Connexion.vue'

const routes = [
    { path: '/', component: ListRecette},
    { path: '/recette',component:RecetteInfo},
    { path: '/register',component:Register},
    { path: '/recette/modify/:id',component:ModifyRecette},
    { path: '/mesRecettes',component:MesRecettes},
    { path: '/connect',component:Connexion}
   
  ]

  export default createRouter({
      history: createWebHashHistory(),
      routes:routes
  })