import styles from '@/styles/Home.module.css'
import { getAllFilesMetadata } from '@/lib/mdx';
import PageLayout from '@/components/PageLayout'
import Link from 'next/link';
import { FcClapperboard, FcElectronics, FcRating  } from 'react-icons/fc'
import { useEffect } from 'react';
import { startSlider } from '@/lib/handleSlider';
import Image from 'next/image';



export default function Home({ posts }) {
  posts.sort((a, b) =>( a.id > b.id) ? -1 : 1);
  let lastPosts = posts.slice(0, 2);
  useEffect(() => startSlider());

  return (
    <PageLayout 
      title='Home'
      description='
      Descubre en nuestra página web una gran variedad de 
      temas de interés, desde tecnología y ciencia hasta arte y entretenimiento. 
      Encontrarás artículos y opiniones interesantes sobre los temas más relevantes de 
      actualidad, escritos por expertos y apasionados en cada materia. 
      Mantente actualizado y expande tus conocimientos con nuestro contenido de calidad. 
      ¡Visítanos ahora y descubre todo lo que tenemos para ofrecer!
      '
      keywords='
      innovación tecnológica, tendencias tecnológicas, 
      dispositivos móviles, inteligencia artificial, ciberseguridad, programación, redes sociales, 
      transformación digital, marketing digital, videojuegos, realidad virtual, e-commerce, 
      pensamiento crítico, ética, moral, valores, metafísica, epistemología, lógica, argumentación, 
      filosofía política, filosofía de la ciencia, filosofía del arte, actualidad política, 
      democracia, derechos humanos, economía, política internacional, ideologías políticas, liderazgo, libertad,
      '
      canonical='https://unaopinionmas.vercel.app/'
    >
      <section className={styles.slider_container}>
        {lastPosts.map(post =>(
          <article key={post.slug} className={`${styles.slide} slide` }>
            <Image priority width={1920} height={600} layout='responsive'  src={post.wallpaper} alt={post.alt} />
            <div className={styles.slide_content}>
              <div className={styles.slide_content_graddient}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Link href={`/posts/${post.slug}`}>Ver Post</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className={styles.post_blog_container}>
        <h2 className={styles._blog_container_title}>Ultimos Post</h2>
        {posts.map(post => (
          <li key={post.slug} className={styles.post_item}>
            <Link href={`/posts/${post.slug}`} className={styles.post_item_poster}>
              <Image width={250} height={444.44} loading='lazy' layout='responsive' src={post.poster} alt={post.alt} />
              <div className={styles._item_title_container}>
                <div className={styles._item_uthor}>
                  <span>
                    <Image
                      width={35}
                      height={35}
                      loading='lazy'
                      src={post.author === 'JasubiP' ? '/img/authors/jasubi.jpg' : '/img/authors/erik.jpeg'}
                      alt='Foto del autor'
                    />
                  </span>
                  <p>{post.author}</p>
                </div>
                <h3 className={styles.post_item_title}>{post.title}</h3>
              </div>
            </Link>
            <p className={styles.post_item_footer}>
              {post.topic}
              {post.icon === 'Peliculas' ? <FcClapperboard /> :
              post.icon === 'Tecnologia' ? <FcElectronics /> : 
              post.icon === 'Curiosidades' ? <FcRating /> : ""}</p>
            <p className={styles.post_item_footer}>{post.date}</p>
          </li>
        ))}
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
