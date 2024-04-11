import styles from '@/styles/Nav.module.css'
import Link from 'next/link'
import { SocialNetwork } from './SocialNetwors'
import { useRouter } from 'next/router'
import { Imagotipo } from './Imagotipo'

export default function Nav(){
  const path = useRouter().pathname

  return(
    <nav id="header-nav" className={styles.nav}>
      <section className={styles.nav_center}>
        <Link className={styles.nav_title_container} href='/'>
          <Imagotipo width={50} height={50} fill='#ffffff'/>
        </Link>

        <div className="flex gap-2 md:order-2">
        <SocialNetwork /> 
        <Link href="/sobre-mi" className='hover:text-accent_100 transition-all hidden md:flex'>| Sobre Mi</Link>
        </div>
      </section>
    </nav>
  )
}