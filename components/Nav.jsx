import styles from '@/styles/Nav.module.css'
import Link from 'next/link'
import { SocialNetwork } from './SocialNetwors'

export default function Nav(){

  return(
    <nav id="header-nav" className={styles.nav}>
      <section className={styles.nav_center}>
        <Link className={styles.nav_title_container} href='/'>
          <img src='/img/imagotipo-Blanco.png' alt='logo icon' />
        </Link>
        <SocialNetwork />
      </section>
    </nav>
  )
}