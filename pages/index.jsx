import styles from '@/styles/Home.module.css'
import { getAllFilesMetadata } from '@/lib/mdx';
import PageLayout from '@/components/PageLayout'
import Link from 'next/link';
import { PostItemIndex } from '@/components/PostItemIndex';
import Script from 'next/script'

export default function Home({ posts }) {

  
  const selectedPosts = posts.sort((a, b) => parseInt(a.id) > parseInt(b.id) ? -1 : 1);

  return (
    <PageLayout
      title='Blog sobre tecnologia y programacion'
      description='Encontraras una gran variedad de Publicaciónes sobre gadgets, tecnología, software y videojuegos. Últimas tecnologías en electrónica de consumo y novedades tecnológicas en México y el mundo"'
      keywords='noticias, news, tendencias, articulos de tecnologia, articulo de videojuegos, innovación tecnológica, tendencias tecnológicas, inteligencia artificial, ciberseguridad, programación,  transformación digital, realidad virtual'
      canonical='https://jasubip.vercel.app/'
    >
        <div className="container">
          <Script id="google-analytics">
            {`
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
              ga('create', 'UA-XXXXX-Y', 'auto');
              ga('send', 'pageview');
            `}
          </Script>
        </div>
      <section className={styles.post_blog_container}>
        <header className={styles.post_header}>
          <h2 className={styles._blog_container_title}>Últimos artículos</h2>
        </header>
        {selectedPosts.slice(0,4).map((post, index) => (
          <PostItemIndex key={post.title} post={post} index={ index }/>
        ))}
        <Link className={styles.post_blog__footer} href='/posts'> Artículos anteriores → </Link>
      </section>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  //console.log(posts)

  return {
    props: {
      posts,
    },
  };
}
