import { verify } from "jsonwebtoken"

export default function profileHandler(req, res){
  const { nbcAuth } = req.cookies

  try{
    const user = verify(nbcAuth, 'nbc')
    console.log(user)
    return res.json({email: user.email, username: user.username, login:true})
  }catch(error){
    return res.json({error:"Token invalido"})
  }
}