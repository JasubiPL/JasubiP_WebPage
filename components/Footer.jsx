import styles from '@/styles/Footer.module.css'

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <a href="https://www.facebook.com/jasubip" 
      className={styles.footer_center}
      target='_blank'
      >
        <p>Con Amor Por</p> 
        <img src="/img/jasubip-logo.png" alt="Desarrollada por JasubiP" />
      </a>
    </footer>
  )
}