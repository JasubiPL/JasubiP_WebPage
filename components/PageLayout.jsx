import Head from 'next/head'
import Nav from './Nav'
import styles from '@/styles/PageLayout.module.css'
import Footer from './Footer'

export default function PageLayout({
  children, 
  title = `Nobody Cares`, 
  canonical,
  description,
  keywords,
  shareImage,}){
  return(
    <>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="IE=8; IE=9; IE=10; IE=11" http-equiv="X-UA-Compatible" />
      
      {/*  Etiquetas meta para SEO */}
      <title>{`${title} | Nobody Cares`}</title>
      <meta name="google-site-verification" content="HSIHpvU5swFz_smB2ySAV2YUq4XzSQccc9mjyVWUwvE" />
      <meta name="description" content={description} />
      <meta name="keywords" content={`nobodycares, una opinion mas, opinion, posteo, nobody cares, nobody cares blog, blog, blog personal, blogs, articulo, articulos, jasubip, jasubi piñeyro, erik guzman, gabogin360, ${keywords}`} />
      <meta name="author" content="Jasubi Piñeyro - JasubiP" />
      <meta name="language" content="Español" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter Card data */}
      <meta name="twitter:site" content="@NobodyCaresOffi" />
      <meta name="twitter:creator" content="@NobodyCaresOffi" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={`https://unaopinionmas.vercel.app${shareImage}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/*  Etiquetas meta para redes sociales */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://unaopinionmas.vercel.app${shareImage}`} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://unaopinionmas.vercel.app" />
      <meta property="og:site_name" content="Nobody Cares" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Estilos CSS y otros recursos */}
      <link rel="icon" href="/img/icon.jpg" />

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