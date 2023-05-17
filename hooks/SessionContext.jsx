import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext(null)

export default function SessionProvider({ children }){

  const [session, setSession] = useState(false)
  const [user, setUser] = useState([])
  const [token, setToken]  = useState('')

  useEffect(() => {
    const getToken = window.sessionStorage.getItem('sessionAuth')
    setToken(getToken)
  },[])

  // console.log(token)
  // console.log(user)
  // console.log(session)

  return(
    <SessionContext.Provider value={{
      session,
      setSession,
      user,
      setUser,
      token,
      setToken
    }}>
      {children}
    </SessionContext.Provider>
  )
}