<template>
    <Recette></Recette>
</template>

<script>
    import Recette from './Recette.vue'

    import store from './store/RecetteStore'
    export default{
        store:store,
        name:'ModifyRecette',
        components:{Recette},
        data(){
            return{
                recettes:store.getters.getSpecificRecette("620a30f4f701f4600009efd9")
            }
        },
        computed:{

        }
        
    }
</script>

