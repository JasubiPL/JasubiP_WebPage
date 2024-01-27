import Head from 'next/head'
import Nav from './Nav'
import styles from '@/styles/PageLayout.module.css'
import Footer from './Footer'

export default function PageLayout({
  children, 
  title = `JasubiP`,
}){
  
  return(
    <>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="IE=8; IE=9; IE=10; IE=11" http-equiv="X-UA-Compatible" />
      
      {/* Estilos CSS y otros recursos */}
      <link rel="icon" href="/img/icon.svg" />

      {/*  Etiquetas meta para SEO */}
      <title>{`JasubiP 🧑‍💻 | ${title}`}</title>

    </Head>
    <header>
      <Nav></Nav>
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <Footer />
    </>
  )
}