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
    async ajouterRecette(titre,contenu,jwt)
    {
        const header = {
            'Authorization':'Bearer '+jwt
        }

        await axios.post(this.urlBackend+'add',{'title':titre,'content':contenu},{'headers':header})
        
    }
    async supprimerRecette(id,jwt)
    {
        const header = {
            'Authorization':'Bearer '+jwt
        }
        await axios.post(this.urlBackend+'delete',{'idrecette':id},{'headers':header})
    }
    async modifieRecette(titre,contenu,jwt,id)
    {
        const header = {
            'Authorization':'Bearer '+jwt
        }
        await axios.post(this.urlBackend+'modify',{'title':titre,'content':contenu,'idrecette':id},{'headers':header})
    }
}

export default RecetteDAO