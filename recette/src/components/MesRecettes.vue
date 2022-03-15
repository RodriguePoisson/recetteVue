<template>
<div>
    <Recette v-for="(recette,key) in recettes" :recette="recette" :is_crudable=true :key="key" ></Recette>
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
            recettes:store.getters.getRecetteByUser(this.$UserStore.state.user.id)
        }
    },
}
</script>