import styles from '@/styles/User.module.css'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/router'
import axios from 'axios'
import { SessionContext } from '@/hooks/SessionContext'

export default function User({currentUser}){
  const { user } = useContext(SessionContext)
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
    window.sessionStorage.clear()
    router.reload()
    router.push('/')
  }

  return(
    <section className={styles.user_container}>
      <GiHamburgerMenu onClick={handlerMenu}/>
      <div className={styles.user} onClick={handlerMenu}>
        <img src={`/img/users/${user[0]}.jpg`} alt={user[0]} />
        <span>{user[0]}</span>
      </div>
      <ul className={`${showMenu} ${styles.menu}`}>
        <AiOutlineClose onClick={handlerMenu}/>
        <div className={styles.user_mobile} onClick={handlerMenu}>
          <img src={`/img/users/${user[0]}.jpg`} alt={user[0]} />
          <span>{user}</span>
        </div>
        {user[2] === 'standar' ? '' :  <li><Link href='/dashboard' >Dashboard</Link></li> }
        <li><button onClick={logout}>Cerrar Sesión</button></li>
      </ul>
    </section>
  )
}