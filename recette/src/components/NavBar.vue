<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Recette au css horrible</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Liste des recettes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/MesRecettes">Mes recettes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/recette/ajouter">Ajouter recette</a>
          </li>
        </ul>
        <ul class="navbar-nav ">
            <li class="nav-item">
                <a href="#/connect" class="nav-link">Connexion</a>
            </li>
            <li class="nav-item">
                <a href="#/register" class="nav-link">Inscription</a>
            </li>
        </ul>
      </div>
    </div>
    
  </nav>
</template>

<script>

export default {
    data(){
        return{
            user:this.$UserStore.state.user
        }
    },
    computed:{
         currentRouteName() {
        return this.$route.name;
    }
    }
}
</script>