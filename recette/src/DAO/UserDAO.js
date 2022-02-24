import axios from "axios"
import User from '../components/Entity/User.js'
class RecetteDAO
{
    constructor()
    {
        this.urlBackend = "https://recettebackend.herokuapp.com/"
    }
    async inscription(email,name,lastname,password)
    {
        let answer 
        try
        {
            answer = await axios.post(this.urlBackend+'inscription',{"email":email,"name":name,"lastname":lastname,"password":password})
        }
        catch(e)
        {
            answer = false
        }
        return answer
    }

    async connexion(email,password)
    {
        let answer
        try
        {
             answer = await axios.post(this.urlBackend+'connexion',{"email":email,"password":password})
             answer = answer.data
        }
        catch(e)
        {
            answer = false
        }
        return answer
    }
}

export default RecetteDAO