import User from './User.js'
class Recette
{
    constructor(title,content,image,id,user)
    {
        this.title = title 
        this.content = content
        this.image = image
        this.id = id
        this.user = User.constructUserByObjectBackEnd(user)
    }

    toString()
    {
        return '{"title":"'+this.title+'","content":"'+this.content+'","id:"'+this.id+'"user":'+this.user.id+'}'
    }
}

export default Recette
