<template>
<div>
    <Recette v-for="(recette,key) in recettes" :recette="recette" :is_crudable=true :key="key" ></Recette>
    {{recettes}}
    {{t}}
</div>
				
</template>

<script>
import Recette from './Recette.vue'
import store from './store/RecetteStore'
export default{
    store:store,
    name:'MesRecettes',
    components:{Recette},
    data(){
        return{
            t:this.$UserStore.state.user,
            recettes:store.getters.getRecetteByUser(this.$UserStore.state.user.id)
        }
    },
    
}
</script>