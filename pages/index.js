import styles from '@/styles/Home.module.css'
import PageLayout from '@/components/PageLayout'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

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
      title='Home | Nobody Cares'
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
      <section className={styles.articles_container}>
        <h1 className={styles.articles_title}>Ultimos Post</h1>
        <ul className={styles.articles_list}>
          {allPostsData.map(({ id, title, img, alt, topic, date }) => (
            <li className={styles.listItem} key={id}>
              <Card css={{ w: "290px", h: "400px" }}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={img}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt={alt}
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#234fb066",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text >
                        {date} | {topic}
                      </Text>
                      <Text h2 weight="bold" color="#fff" size={16}>
                        {title}
                      </Text>
                      <Button color="gradient" auto>
                        <Link href={`posts/${id}`}>
                          <Text color='#fff'>
                            Leer Más
                          </Text>
                        </Link>
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  )
}
