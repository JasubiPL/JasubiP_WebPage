import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import { SocialNetwork } from './SocialNetwors'

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <div className={styles.footer_credits}>
        <a 
          href="https://www.facebook.com/jasubip" 
          target='_blank'
        >
          <p>Powerwd by</p> 
          <img loading='lazy' src="/img/imagotipo-Blanco.webp" alt="Desarrollada por JasubiP" />
        </a>
      </div>
      <ul className={styles.footer_center}>
        <SocialNetwork />
        <Link href="/sobre-mi" className='hover:text-accent_100 transition-all text-xl'>| Sobre Mi</Link>
      </ul>
      
    </footer>
  )
}