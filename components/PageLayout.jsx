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
      
      {/*  Etiquetas meta para SEO */}
      <title>{`${title} | Nobody Cares`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Jasubi Piñeyro - JasubiP" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Mi blog RSS feed" />

      {/* Twitter Card data */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={`https://unaopinionmas.vercel.app${shareImage}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/*  Etiquetas meta para redes sociales */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={`https://unaopinionmas.vercel.app/${shareImage}`} />
      <meta property="og:url" content={canonical}></meta>
      
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