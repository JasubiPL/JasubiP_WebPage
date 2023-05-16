import  jwt  from "jsonwebtoken"
import {serialize} from "cookie"

export default function loginhandler(req, res){
  const { email, password } = req.body
  const data = req.body
  console.log(data)

  if(email === 'admin@nobodycares.com' && password === '08181020' || email === 'test@nobodycares.com' && password === '123456' ){
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      email: email,
      username:`${email === 'admin@nobodycares.com' ? 'Admin' : 'Test User'}`,
    }, 'secret')

    const serialized = serialize('nbcToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 7,
      path: '/'
    })
  
    res.setHeader('Set-Cookie', serialized)
    return res.json({message:'login success', login: true})
  }

  return res.json({err: 'Usuario o contraseña invalida'})

}