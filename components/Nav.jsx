import styles from '@/styles/Nav.module.css'
import Link from 'next/link'
import { SocialNetwork } from './SocialNetwors'
import { useRouter } from 'next/router'

export default function Nav(){
  const path = useRouter().pathname

  return(
    <nav id="header-nav" className={styles.nav}>
      <section className={styles.nav_center}>
        <Link className={styles.nav_title_container} href='/'>
          <img src='/img/imagotipo-Blanco.png' alt='logo icon' />
        </Link>
        
        {/* <ul className='flex gap-2 w-full py-2 justify-center order-1 md:order-0 md:w-auto'>
          <li className={`py-1 px-4 transition-all hover:bg-accent_100  rounded-full ${path === '/' ? 'bg-accent_100' :''}`}>
            <Link href='/'>Inicio</Link>
          </li>
          <li className={`py-1 px-4 transition-all hover:bg-accent_100  rounded-full ${path.includes('/posts')  ? 'bg-accent_100' :''}`}>
            <Link href='/posts'>Blog</Link>
          </li>
        </ul> */}

        <SocialNetwork className='md:order-2'/>
      </section>
    </nav>
  )
}