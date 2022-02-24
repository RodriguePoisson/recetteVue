<template>
    <div class="container">
        <div class="text-center">
            <h1>Bootstrap card tiled layout</h1>
        </div>
        <div class="container">
            <div class="card-columns">
               <Recette v-for="(recette,key) in recettes" :recette="recette" :key="key" ></Recette>
               {{az}}
            </div>
        </div>
    </div>
</template>

<script>

import Recette from './Recette.vue';
import RecetteDAO from '../DAO/RecetteDAO.js'


export default{
    name:'ListRecette',
    components:{Recette},
    data(){
        return{
            recettes: [{title:"Carbo",content:"pate carbo"},{title:"Caazeazerbo",content:"pate cazeazeazarbo"},{title:"Carzaebo",content:"pate carbo"}],
        }
    },
    computed:{
        az: function()
        {
            let a = new RecetteDAO()
            console.log(a.getRecettes())
        }
    }
    
}
</script>