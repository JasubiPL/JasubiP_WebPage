import styles from '@/styles/Home.module.css'
import { getAllFilesMetadata } from '@/lib/mdx';
import PageLayout from '@/components/PageLayout'
import Link from 'next/link';
import AuthorAvatar from '@/components/AuthorAvatar';

export default function Home({ posts }) {

  
  posts.sort((a, b) => parseInt(a.id) > parseInt(b.id) ? -1 : 1);

  return (
    <PageLayout
      shareImage='/img/reflection/nobody-cares-1-wallpaper.jpg'
      title='Blog sobre diversos temas'
      description='En Nobody Cares Blog, encontraras una gran variedad de Publicaciónes sobre gadgets, tecnología, software y videojuegos. Últimas tecnologías en electrónica de consumo y novedades tecnológicas en México y el mundo"'
      keywords='opinion publica,temas de interes, noticias, news, blogs politicos, tendencias, blog de tecnologia, articulos de tecnologia, articulos de reflexion, blogs de opinion, articulo de videojuegos, articulos de cultura, innovación tecnológica, tendencias tecnológicas, inteligencia artificial, ciberseguridad, programación,  transformación digital, videojuegos, realidad virtual, reflexión, filosofía, política,educion financiera'
      canonical='https://nobodycares.vercel.app/'
    >
      <section className={styles.post_blog_container}>
        <header className={styles.post_header}>
          <h2 className={styles._blog_container_title}>Últimos artículos</h2>
        </header>
        {posts.slice(0,4).map(post => (
          <li key={post.slug} className={styles.post_item}>
            <Link href={`/posts/${post.slug}`} className={styles.post_item_poster}>
              <img loading='lazy' layout='responsive' src={post.poster} alt={post.alt} />
              <div className={styles._item_title_container}>
                <div className={styles._item_uthor}>
                  <AuthorAvatar 
                  width='30px'
                  height='30px'
                  authorName={post.author}
                  color='white'
                  />
                </div>
                <h3 className={styles.post_item_title}>{post.title}</h3>
              </div>
            </Link>
            <p className={styles.post_item_footer}>{post.date}</p>
          </li>
        ))}
      </section>
      <section className={styles.categories_section}>
        <h2>Series</h2>
        <section className={styles.categories_container}>
          <Link href={"/series/nobody-cares-vol-1"}>
            <h3>Nobody Cares Vol.1</h3>
            <img src="/img/Backgrounds/blog.jpg" alt="Serie Nobody cares Vol 1" />
          </Link>
          <Link href={"/"}>
            <h3>Finanzas Personales</h3>
            <img src="/img/Backgrounds/economy.png" alt="Serie Nobody cares" />
          </Link>
        </section>

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
