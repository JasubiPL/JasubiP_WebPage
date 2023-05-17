import { useContext, useEffect, useState } from "react"
import axios from "axios"
import styles from "@/styles/Login.module.css" 
import { useRouter } from "next/router"
import { SessionContext } from "@/hooks/SessionContext"
import Modal from "@/components/Modal"

export default function Login(){
  const { setUser, session, setSession } = useContext(SessionContext)
  
  const router = useRouter()
  const [typeForm, setTypeForm] = useState("login")
  const[errorLogin, setErrorLogin] = useState('')
  const [credentials, setCredentials] = useState({
    email:"",
    password:"",
  })
  const [register, setRegister] = useState({
    username:"",
    email:"",
    password:"",
  })

  useEffect(() =>{
    if(session)  router.push('/')
  },[])

  const handleChangeLogin = (e) =>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangeRegister = (e) =>{
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitLogin = async (e) =>{
    e.preventDefault()

    const res = await axios.post('https://server-una-opinion-mas-production.up.railway.app/api/auth/login', credentials,{
    //const response = await axios.post('http://localhost:4000/api/auth/login', credentials, {
      withCredentials: true
    })
    const userData = res.data

    setSession(userData.login)
    setUser([userData.username, userData.email, userData.credentials])
    window.sessionStorage.setItem('sessionAuth', userData.nbcAuth)
  
    router.push('/')

    setErrorLogin(res.data.err)

  }

  const handleSubmitRegister = async (e) =>{
    e.preventDefault()

    const res = await axios.post('https://server-una-opinion-mas-production.up.railway.app/api/auth/singup', register,{
      withCredentials: true
    })

    const {message, userData, login} = res.data
    console.log(message)

    if(message == 'El usario ya existe'){
      alert(message)

      setTimeout(() =>{
        setModal()
      })
    }else{
      setSession(login)
      setUser([userData.username, userData.email, userData.credentials])
      window.sessionStorage.setItem('sessionAuth', userData.nbcAuth)
    
      router.push('/')
    }
    
  }

  if(typeForm === 'login'){
    return(
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmitLogin}>
          <img src="/img/icon.jpg" alt="" />
          <h3>Iniciar Sesión</h3>
          <label>Correo:</label>
          <input name='email' type='email' placeholder='email' onChange={handleChangeLogin}/>
          <label>Contraseña:</label>
          <input name='password' type='password' placeholder='password' onChange={handleChangeLogin}/>
          <p className={styles.login_error}>{errorLogin}</p>
          <button>Acceder</button>
          <p>¡No tienes una cuenta! <button onClick={() =>setTypeForm('')}>Regístrate</button></p>
        </form>
      </div>
    )
  }else{
    return(
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmitRegister}>
          <img src="/img/icon.jpg" alt="" />
          <h3>Regístrarse</h3>
          <label>Nombre de usuario:</label>
          <input name='username' type='text' placeholder='Nombre un nombre de usuario' onChange={handleChangeRegister}/>
          <label>Correo:</label>
          <input name='email' type='email' placeholder='Escriebe tu correo' onChange={handleChangeRegister}/>
          <label>Contraseña:</label>
          <input name='password' type='password' placeholder='Escribe un password' onChange={handleChangeRegister}/>
          <button>Regístrarse</button>
          <p>¡No tienes una cuenta! <button onClick={() =>setTypeForm('login')}>Acceder</button></p>
        </form>
      </div>
    )
  }


}