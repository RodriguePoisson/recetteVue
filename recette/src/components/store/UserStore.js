import Vuex from 'vuex'
import UserDAO from '../../DAO/UserDAO.js'
import User from '../Entity/User.js'

const userDAO = new UserDAO

const state = {
    user:{},
    users_recette_name_and_last_name:[],
    connected:'false'
}

const getters ={
    getUser : (state) => 
    {
        return state.user
    },
}

const actions = {
    async connexion(store,{email,mot_de_passe}){
        let user = await User.constructUserByJwt(await userDAO.connexion(email,mot_de_passe))
        store.commit('connect',{'user':user})
    },
}
const mutations = {
    connect: (state,{user}) => {
        if(user===null)
        {
            state.connected = false
        }
        else
        {
            state.user = user
            state.connected = true
        }
    },
}

export default new Vuex.Store({
    state:state,
    mutations:mutations,
    getters:getters,
    actions:actions,
})