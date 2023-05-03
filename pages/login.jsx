import { useState } from "react"
import axios from "axios"
import styles from "@/styles/Login.module.css" 

export default function Login(){
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

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(credentials);
    const response = await axios.post('/api/auth/login', credentials)
    console.log(response)
  }

  return(
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img src="/img/icon.jpg" alt="" />
        <label>Correo:</label>
        <input name='email' type='email' placeholder='email' onChange={handleChange}/>
        <label>Contraseña:</label>
        <input name='password' type='password' placeholder='password' onChange={handleChange}/>
        <button>Acceder</button>
      </form>
    </div>
  )
}