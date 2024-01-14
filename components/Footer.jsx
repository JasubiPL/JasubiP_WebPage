import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
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
          <img loading='lazy' src="/img/jasubip-logo.png" alt="Desarrollada por JasubiP" />
        </a>
      </div>
      <ul className={styles.footer_center}>
        <li>
          <Link href={'/sobre-nosotros'} >Sobre Nosotros</Link>
        </li>
        <SocialNetwork />
      </ul>
    </footer>
  )
}