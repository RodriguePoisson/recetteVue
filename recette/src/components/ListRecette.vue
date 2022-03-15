<template>
    <div class="container">
        <div class="text-center">
            <h1>Bootstrap card tiled layout</h1>
        </div>
        <div class="container">
            <div class="card-columns">
               <Recette v-for="(recette,key) in recettes" :recette="recette" :key="key" ></Recette>
            </div>
            {{r.toString()}}
        </div>
    </div>
</template>

<script>

import Recette from './Recette.vue';

import store from './store/RecetteStore'
export default{
    store:store,
    name:'ListRecette',
    components:{Recette},
    data(){
        return{
            recettes:store.getters.recettes,
            r:store.getters.recettes[0]
        }
    },
    computed:{

    }
    
}
</script>