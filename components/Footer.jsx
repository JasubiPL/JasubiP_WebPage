import styles from '@/styles/Footer.module.css'
import Image from 'next/image'

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <a href="https://www.facebook.com/jasubip" 
      className={styles.footer_center}
      target='_blank'
      >
        <p>Con Amor Por</p> 
        <Image width={150} height={35} loading='lazy' src="/img/jasubip-logo.png" alt="Desarrollada por JasubiP" />
      </a>
    </footer>
  )
}