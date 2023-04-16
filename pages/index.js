import styles from '@/styles/Home.module.css'
import PageLayout from '@/components/PageLayout'
import Link from 'next/link';
import { getAllFilesMetadata } from '@/lib/mdx';


export default function Home({ posts }) {
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
      <section className={styles.poster_blog_container}>
        {posts.map(post => (
          <li key={post.slug}>
            <h1>{post.title}</h1>
            <Link href={`/posts/${post.slug}`}>Leér Más</Link>
          </li>
        ))}
      </section>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  console.log(posts)

  return {
    props: {
      posts,
    },
  };
}
