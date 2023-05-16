import { serialize } from "cookie"
import { verify } from "jsonwebtoken"

export default function logoutHandler(req, res){

  const { nbcAuth } = req.cookies

  verify(nbcAuth, 'nbc')

  const serialized = serialize('nbcAuth', null, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/'
  })

  res.setHeader('Set-Cookie', serialized)
  return res.json('logout Success')
}