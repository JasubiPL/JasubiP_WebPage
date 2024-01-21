import Head from 'next/head'
import Nav from './Nav'
import styles from '@/styles/PageLayout.module.css'
import Footer from './Footer'

export default function PageLayout({
  children, 
  title = `JasubiP`, 
  canonical,
  description,
  keywords,
}){
  
  return(
    <>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="IE=8; IE=9; IE=10; IE=11" http-equiv="X-UA-Compatible" />
      
      {/*  Etiquetas meta para SEO */}
      <title>{`JasubiP 🧑‍💻 | ${title}`}</title>
      <meta name="google-site-verification" content="HSIHpvU5swFz_smB2ySAV2YUq4XzSQccc9mjyVWUwvE" />
      <meta name="description" content={description} />
      <meta name="keywords" content={`programacion, front-end, blog de tecnologia, desarrollo de software, blog de programacion, blogs, articulos de programacion, jasubip, jasubi piñeyro ${keywords}`} />
      <meta name="author" content="Jasubi Piñeyro, JasubiP" />
      <meta name="language" content="Español" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter Card data */}
      <meta name="twitter:site" content="@jasubip" />
      <meta name="twitter:creator" content="@jasubip" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/*  Etiquetas meta para redes sociales 
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://unaopinionmas.vercel.app${shareImage}`} />*/}
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://jasubip.vercel.app" />
      <meta property="og:site_name" content="JasubiP" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Estilos CSS y otros recursos */}
      <link rel="icon" href="/img/imagotipo-blanco-cuadrado.png" />

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