import { GrFacebook } from 'react-icons/gr'
import { GiConversation } from 'react-icons/gi'
import{ BsTwitter } from 'react-icons/bs'
import styles from '@/styles/Nav.module.css'
import Link from 'next/link'

export default function Nav(){
  return(
    <nav className={styles.nav}>
      <Link href='/'>
        <h2 className={styles.nav_title}>Nobody Cares </h2>
      </Link>
      <div className={styles.nav_socialNetworkIcons}>
        <a href="https://www.facebook.com/jasubip" target='blanck'>
          <GrFacebook />
        </a>
        <a href="https://www.twitter.com/jasubip" target='blanck'>
          <BsTwitter /> 
        </a>
        <a href="#">
          
        </a>

      </div>
    </nav>
  )
}