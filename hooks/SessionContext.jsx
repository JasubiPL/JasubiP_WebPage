import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext(null)

export default function SessionProvider({ children }){

  useEffect(() => {verifyUser()},[])

  const verifyUser = async () =>{
    const login = window.sessionStorage.getItem('login')
    setSession(login)

    const getToken = window.sessionStorage.getItem('sessionAuth')
    setToken(getToken)

    console.log(getToken)

    if(session){
      const res = await axios.get('https://server-una-opinion-mas-production.up.railway.app/api/usersHandler/user',{
        headers:{
          'Authorization': `Bearer ${getToken}`
        }
      })

      const userData = res.data
      setCurrenUser(userData)
      console.log(userData.username)
    }
  } 
  
  const [session, setSession] = useState(false)
  const [currentUser, setCurrenUser] = useState()
  const [token, setToken]  = useState()

  return(
    <SessionContext.Provider value={{
      session,
      setSession,
      currentUser,
      setCurrenUser,
      token,
      setToken
    }}>
      {children}
    </SessionContext.Provider>
  )
}