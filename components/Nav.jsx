import styles from '@/styles/Nav.module.css'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'

export default function Nav(){
  const[loginUser, setLoginUser] = useState(<Link href='/login'>Acceder</Link>)

  useEffect(() => {verifyUser()},[])

  const verifyUser = async () =>{
    const res = await axios.get('/api/profile')
    if(res.data.login){
      setLoginUser(<User currentUser={res.data.username} />)
    }
  }


  let login = false
  return(
    <nav className={styles.nav}>
      <section className={styles.nav_center}>
        <Link className={styles.nav_title_container} href='/'>
          <img src='/img/logo.png' alt='logo icon' />
          <h2 className={styles.nav_title}><span>NOBODY</span>CARES </h2>
        </Link>
        <div className={styles.social_network_container}>
          <a href='https://www.facebook.com/profile.php?id=100092340722303' target='_blank'><FaFacebookF /></a>
          <a href='https://twitter.com/NobodyCaresOffi' target='_blank'><BsTwitter /></a>
          <a href='https://www.instagram.com/nobodycaresoffi/' target='_blank'><AiFillInstagram /></a>
          {loginUser}
        </div>
      </section>
    </nav>
  )
}