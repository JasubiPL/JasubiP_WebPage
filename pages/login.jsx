import { useEffect, useState } from "react"
import axios from "axios"
import styles from "@/styles/Login.module.css" 
import { useRouter } from "next/router"
import Loading from "@/components/Loading"

export default function Login(){

  useEffect(() =>{verifyUser()},[])

  const [typeForm, setTypeForm] = useState("login")
  const[errorLogin, setErrorLogin] = useState('')
  const [credentials, setCredentials] = useState({
    email:"",
    password:"",
  })
  const router = useRouter()

  const verifyUser = async () =>{
    const res = await axios.get('/api/profile')
    if(res.data.login)  router.push('/')
  }

  const handleChange = (e) =>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitLogin = async (e) =>{
    e.preventDefault()
    //console.log(credentials);
    //const response = await axios.post('https://server-una-opinion-mas-production.up.railway.app/api/auth/login', credentials, {
    const response = await axios.post('http://localhost:4000/api/auth/login', credentials, {
      withCredentials: true
    })
    console.log(response)

    if(response.status === 200 && response.data.login){
      //console.log('login success')

      const res = await axios.get('/api/profile')
      //console.log(res.data)

      if(res.data.username === 'Admin'){
        router.push('/dashboard')
      }else{
        router.push('/')
      }
    }

    setErrorLogin(response.data.err)

  }

  if(typeForm === 'login'){
    return(
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmitLogin}>
          <img src="/img/icon.jpg" alt="" />
          <h3>Iniciar Sesión</h3>
          <label>Correo:</label>
          <input name='email' type='email' placeholder='email' onChange={handleChange}/>
          <label>Contraseña:</label>
          <input name='password' type='password' placeholder='password' onChange={handleChange}/>
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
          <input name='text' type='email' placeholder='username' onChange={handleChange}/>
          <label>Correo:</label>
          <input name='email' type='email' placeholder='email' onChange={handleChange}/>
          <label>Contraseña:</label>
          <input name='password' type='password' placeholder='password' onChange={handleChange}/>
          <button>Regístrarse</button>
          <p>¡No tienes una cuenta! <button onClick={() =>setTypeForm('login')}>Acceder</button></p>
        </form>
      </div>
    )
  }


}