import { useState } from "react"
import axios from "axios"
import styles from "@/styles/Login.module.css" 

export default function Login(){

  const [typeForm, setTypeForm] = useState("login")
  const [credentials, setCredentials] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) =>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitLogin = async (e) =>{
    e.preventDefault()
    console.log(credentials);
    const response = await axios.post('/api/auth/login', credentials)
    console.log(response)
  }

  const handleSubmitRegister = async (e) =>{
    e.preventDefault()
    console.log(credentials);
    const response = await axios.post('/api/auth/login', credentials)
    console.log(response)
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