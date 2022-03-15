<template>
    <div class="container">
        <div class="text-center">
            <h1>Bootstrap card tiled layout</h1>
        </div>
        <div class="container">
            <div class="card-columns">
               <Recette v-for="(recette,key) in recettes" :recette="recette" :key="key" ></Recette>
            </div>
        </div>
    </div>
</template>

<script>

import Recette from './Recette.vue';

export default{
    name:'ListRecette',
    components:{Recette},
    data(){
        return{
            r:this.$RecetteStore.getters.recettes[0]
        }
    },
    computed:{
        recettes(){
            return this.$RecetteStore.state.recettes
        }
    }
    
}
</script>