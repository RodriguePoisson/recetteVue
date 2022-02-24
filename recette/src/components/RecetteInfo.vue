<template>
    <Recette :recette="recette"></Recette>
</template>

<script>
    import Recette from "./Recette.vue";

    export default
    {
        name:'RecetteInfo',
        components:{Recette},
        data()
        {
            return{
                recette:{title:"Caazeazerbo",content:"pate cazeazeazarbo"}
            }
        }
    }
</script>