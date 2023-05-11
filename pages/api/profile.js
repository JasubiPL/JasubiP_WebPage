import { verify } from "jsonwebtoken"

export default function profileHandler(req, res){
  const { nbcToken } = req.cookies

  try{
    const user = verify(nbcToken, 'secret')
    return res.json({email: user.email, username: user.username, login:true})
  }catch(error){
    return res.json({error:"Token invalido"})
  }
}