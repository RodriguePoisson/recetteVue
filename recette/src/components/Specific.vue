<template>
    <Recette :recette = "recette"></Recette>
</template>

<script>
import Recette from './Recette.vue';
export default {
     components:{Recette},
    data(){
        return{
            recette:this.$RecetteStore.getters.getSpecificRecette(this.$route.params.id)
        }
    }
}
</script>