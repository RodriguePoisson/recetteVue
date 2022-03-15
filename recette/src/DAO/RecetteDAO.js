import axios from "axios"
import Recette from '../components/Entity/Recette.js'
class RecetteDAO
{
    constructor()
    {
        this.urlBackend = "https://recettebackend.herokuapp.com/"
    }
    async getRecettes()
    {
        const recettes = await axios.get(this.urlBackend+'list')
        const recettesData = recettes.data
        
        let recette_list = []
        for (const recette of recettesData) 
        {
            recette_list.push(new Recette(recette.title,recette.content,recette.image,recette._id,recette.user[0]))
        }
        return recette_list
    }
}

export default RecetteDAO