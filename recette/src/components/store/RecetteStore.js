import Vuex from 'vuex'
import Recette from '../Entity/Recette'
import RecetteDAO from '../../DAO/RecetteDAO.js'

const recettedao = new RecetteDAO()
const state = {
    recettes:await recettedao.getRecettes()
}
const getters = {
    recettes: state => state.recettes,
    getSpecificRecette(id_recette){

            for(var recette_object in state => state.recettes)
            {
                if(recette_object.id=id_recette)
                {
                    return recette_object
                }
            }
            return null
        }
}

export default new Vuex.Store({
    state:state,
    mutation:{},
    getters:getters,
    actions:{},
})