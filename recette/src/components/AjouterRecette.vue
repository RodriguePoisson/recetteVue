<template>
    <div id="ajouterRecette">
        <h3 class="text-center text-white pt-5">Ajouter une recette</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form  v-on:submit.prevent id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Ajouter une recette</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Titre de la recette</label><br>
                                <input v-model="titre" type="text" name="username" id="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Contenu de la recette</label><br>
                                <textarea v-model="contenu" type="textarea" name="password" id="password" class="form-control"> </textarea>
                            </div>
                            <div class="form-group">
                                <input v-on:click="ajout" type="submit" name="submit" class="btn btn-info btn-md" value="Ajouter une recette">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RecetteDAO from '../DAO/RecetteDAO'
import Recette from './Entity/Recette'

export default {
    data(){
        return{
            titre:'',
            contenu:'',
        }
    },
    methods:{
        ajout(){
            let dao = new RecetteDAO()
            console.log(this.$UserStore.state.user)
            dao.ajouterRecette(this.titre,this.contenu,this.$UserStore.state.user.jwt)
            this.$RecetteStore.dispatch("ajouter")
        }
    }
}
</script>