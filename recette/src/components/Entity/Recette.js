class Recette
{
    constructor(title,content,image,id)
    {
        this.title = title 
        this.content = content
        this.image = image
        this.id = id
    }

    toString()
    {
        return '{"title":"'+this.title+'","content":"'+this.content+'"}'
    }
}

export default Recette
