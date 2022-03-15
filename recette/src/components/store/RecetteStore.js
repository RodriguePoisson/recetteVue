import Vuex from 'vuex'
import Recette from '../Entity/Recette'
import RecetteDAO from '../../DAO/RecetteDAO.js'

const recettedao = new RecetteDAO()
const state = {
    recettes:await recettedao.getRecettes()
}
const getters = 
{
    recettes: state => state.recettes,
    getSpecificRecette : (state) =>(id_recette)=>{
            for( let recette of state.recettes )
            {
                
                if(recette.id==id_recette)
                {
                    return recette
                }
            }
    },
    getRecetteByUser : (state) =>(id_user)=>{
        let list_recette = new Array()
        for(let recette of state.recettes )
        {
            if(recette.user.id==id_user)
            {
                list_recette.push(recette)
            }
        }
        return list_recette
    }
}



export default new Vuex.Store({
    state:state,
    mutations:{},
    getters:getters,
    actions:{},
})