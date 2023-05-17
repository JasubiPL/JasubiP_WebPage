import styles from '@/styles/Nav.module.css'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'
import { SessionContext } from '@/hooks/SessionContext'

export default function Nav(){
  const[loginUser, setLoginUser] = useState(<Link href='/login'>Acceder</Link>)
  const { session, currentUser } = useContext(SessionContext)

  useEffect(() => {verifyUser()},[])

  const verifyUser = async () =>{
    if(session){
      console.log(currentUser, session)
      setLoginUser(<User currentUser={currentUser.username} />)
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