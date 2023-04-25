import styles from '@/styles/Footer.module.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import Link from 'next/link'

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <div className={styles.footer_credits}>
        <a 
          href="https://www.facebook.com/jasubip" 
          target='_blank'
        >
          <p>Con Amor Por</p> 
          <img loading='lazy' src="/img/jasubip-logo.png" alt="Desarrollada por JasubiP" />
        </a>
      </div>
      <ul className={styles.footer_center}>
        <li>
          <Link href={'/sobre-nosotros'} >Sobre Nosotros</Link>
        </li>
        <li>
          <a href='https://www.facebook.com/profile.php?id=100092340722303' target='_blank'><FaFacebookF /></a>
          <a href='https://twitter.com/NobodyCaresOffi' target='_blank'><BsTwitter /></a>
        </li>
      </ul>
    </footer>
  )
}