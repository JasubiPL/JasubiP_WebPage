import  jwt  from "jsonwebtoken"
import {serialize} from "cookie"

export default function loginhandler(req, res){
  const { email, password } = req.body

  if(email === 'admin@admin.com' && password === 'admin'){
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 7,
      email: 'admin@admin.com',
      username:'admin',
    }, 'secret')

    const serialized = serialize('nbcToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 7,
      path: '/'
    })
  
    res.setHeader('Set-Cookie', serialized)
    return res.json('login success')
  }

  return res.status(401).json({err: 'password invalido'})

}