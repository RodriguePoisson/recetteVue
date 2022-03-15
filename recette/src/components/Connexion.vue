<template>
  <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form  v-on:submit.prevent id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Email:</label><br>
                                <input v-model="email" type="text" name="username" id="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input v-model="mot_de_passe" type="text" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <input v-on:click="connect" type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                            </div>
                            <div id="register-link" class="text-right">
                                <a href="#/register" class="text-info">Register here</a>
                            </div>
                            
                            {{nom}}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name:'Connexion',
    data(){
        return{
            email:'',
            mot_de_passe:'',
            nom:'',
        }
    },
  
    methods:{
    
      async connect()
        {
            await this.$UserStore.dispatch("connexion",{"email":this.email,"mot_de_passe":this.mot_de_passe})
            this.nom = this.$UserStore.state.user
            this.connected = this.$UserStore.state.connected
        }
    },
    computed:{
       
    },
    
}
</script>
