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
            answer = await axios.post(this.urlBackend+'inscription',{"email":email,"name":name,"lastname":lastname,"pass":password})
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
        let answer_to_return
        try
        {
             answer = await axios.post(this.urlBackend+'connexion',{"email":email,"password":password})
             answer_to_return = answer.data
        }
        catch(e)
        {
            answer_to_return = false
        }
        return answer_to_return
    }
}

export default RecetteDAO