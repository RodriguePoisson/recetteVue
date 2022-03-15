import jwt_decode from "jwt-decode"
class User
{
    constructor(nom,prenom,email,id,jwt)
    {
        this.nom = nom 
        this.prenom = prenom
        this.id = id
        this.email = email
        this.jwt = jwt
    }

    static constructUserByObjectBackEnd(user_object)
    {
        return new User(user_object.lastname,user_object.name,user_object.email,user_object._id)
    }
    static constructUserByJwt(user_jwt)
    {
        const jwt = user_jwt.jwt

        let decoded = jwt_decode(jwt)
        return new User(decoded.lastname,decoded.name,decoded.email,decoded.id,jwt)
      
    }
}

export default User
