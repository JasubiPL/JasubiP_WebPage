import { createContext, useState } from "react";

export const SessionContext = createContext(null)

export default function SessionProvider({ children }){
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