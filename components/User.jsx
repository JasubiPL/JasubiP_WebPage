import styles from '@/styles/User.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function User({currentUser}){
  const [showMenu, setShowMenu] = useState(styles.menu_hidden)
  const router = useRouter()

  const handlerMenu = () =>{
    if(showMenu.includes('hidden')){
      setShowMenu(styles.menu_show)
    }else{
      setShowMenu(styles.menu_hidden)
    }
  }

  const logout = async () =>{
    const res = await axios.post('/api/auth/logout')
    //console.log(res)
    router.reload()
    router.push('/')
  }

  return(
    <section className={styles.user_container}>
      <GiHamburgerMenu onClick={handlerMenu}/>
      <div className={styles.user} onClick={handlerMenu}>
        <img src={`/img/users/${currentUser}.jpg`} alt={currentUser} />
        <span>{currentUser}</span>
      </div>
      <ul className={`${showMenu} ${styles.menu}`}>
        <AiOutlineClose onClick={handlerMenu}/>
        <div className={styles.user_mobile} onClick={handlerMenu}>
          <img src={`/img/users/${currentUser}.jpg`} alt={currentUser} />
          <span>{currentUser}</span>
        </div>
        {currentUser === 'Admin' ? <li><Link href='/dashboard' >Dashboard</Link></li> : ''}
        <li><button onClick={logout}>Cerrar Sesión</button></li>
      </ul>
    </section>
  )
}