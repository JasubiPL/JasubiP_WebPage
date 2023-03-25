import styles from '@/styles/Home.module.css'
import PageLayout from '@/components/PageLayout'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData)
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <PageLayout 
      title='Una Opinion Mas - Home'
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
    >
      <section className={styles.articles_container}>
        <h1 className={styles.articles_title}>Ultimos Post</h1>
        <ul className={styles.articles_list}>
          {allPostsData.map(({ id, title,description,img }) => (
            <li className={styles.listItem} key={id}>
              <Image src={img} width={100} height={100} layout='responsive'/>
              <h2 className={styles.post_title}>{title}</h2>
              <p>{description}</p>
              <Link href={`/posts/${id}`}>Seguir Leyendo</Link>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  )
}
