import styles from '@/styles/Nav.module.css'
import Link from 'next/link'

export default function Nav(){
  return(
    <nav className={styles.nav}>
      <Link href='/'>
        <h2 className={styles.nav_title}>Nobody Cares </h2>
      </Link>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>
          <Link href="/sobre-nosotros"> Sobre Nosotros</Link>
        </li>
      </ul>
    </nav>
  )
}