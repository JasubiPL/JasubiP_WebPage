import styles from '@/styles/LoginArea.module.css'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function LoginArea({login}){
  const [loginOptions, setLoginOptions] = useState("")
  const [loginOptionsActive, setLoginOptionsActive] = useState(false)

  function handleLogin(isActive){
    if(isActive){
      setLoginOptions("")
      setLoginOptionsActive(false)
    }else{
      setLoginOptions(<LoginOptionModal />)
      setLoginOptionsActive(true)
    }
  }


  if(!login){
    return(
      <section className={styles.login}>
        <button onClick={() => handleLogin(loginOptionsActive)}>Acceder</button>
        {loginOptions}
      </section>
      )
  }else{
    return(
      <button>Logeado</button>
    )
  }
}

export function LoginOptionModal(){
  return(
    <section className={styles.login_modal}>
      <button>
        Acceder con Google
        <FcGoogle />
      </button>
    </section>
  )
  }