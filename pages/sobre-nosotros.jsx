import PageLayout from '@/components/PageLayout'
import styles from '@/styles/SobreNosotros.module.css'
import{ BsTwitter } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

export default function SobreNosotros() {
  return (
    <PageLayout
      title='Sobre Nosotros'
      description='Conoce nuestra historia, misión, visión y valores en la sección Sobre nosotros. 
      Descubre quiénes somos, nuestra trayectoria y filosofía empresarial. Conoce al 
      equipo detrás de nuestro éxito y lo que nos impulsa a seguir mejorando día a día
      '
      keywords='sobre nosotros, historia de la empresa, misión, visión, equipo, valores, trayectoria, filosofía'
    >
      <section className={styles.container}>
        <section className={styles.description}>
          <div className={styles.description_center}>
            <h2>Todo el mundo tiene algo que contar...</h2>
            <p>
            ¡Que tal! Somos Jasubi y Erik los autores de este sito y de antemano te 
            agradecemos el que te des el tiempo de leer nuestro blog.</p>

            <p>Somos un par de sujetos que un día fueron unidos por el destino, lo que 
            dio pie a una buena amistad que tuvo como fruto este proyecto llamado 'Nobody Care'. 
            Nuestro objetivo no es más que compartir nuestras opiniones sobre temas de nuestro 
            interés, venir y platicar sobre temas que a la mayoría no le interesa hablar con nosotros.</p>

            <p>Esperamos este bog sea de tu agrado. Poco a poco iremos integrando más cosas a la 
            plataforma para que también tú puedas dejar tu opinión sobre estos temas, ya que nos 
            interesa mucho tu opinion.
            </p>
          </div>
        </section>
        <section className={styles.cards_container}>
          <h2 className={styles.cards_container_title}>Conoce al equipo</h2>
          <article className={styles.card}>
            <img loading='lazy' src='/img/authors/jasubi.jpg' lat='Autor Jasubi' />
            <h3>Jasubi Piñeyro</h3>
            <p>Autor y Desarrollador del sitio</p>
            <p className={styles.card_description}>
            ¡Que tal! Soy desarrollador de software especializado en tecnologías web. Soy
             medio geek y me encantan diversos temas como diseño, tecnología, filosofía y 
            fitness.
            </p>
            <div className={styles.socialnetwork}>
              <a href='https://twitter.com/JasubiP' target='_blank'><BsTwitter /></a>
              <a href='https://www.linkedin.com/in/jasubip/' target='_blank'><AiFillLinkedin /></a>
            </div>
          </article>
          <article className={styles.card}>
            <img loading='lazy' src='/img/authors/erik.jpeg' lat='Autor Jasubi' />
            <h3>Erik Guzmán</h3>
            <p>Autor</p>
            <p className={styles.card_description}>
            Hola! Soy un comunicólogo extrovertido de 29 años, nacido y criado en la ciudad 
            de México. Soy content manager y project management.
            Soy de los que piensan antes de actuar. Aunque eso no significa que no me 
            divierta en cada actividad que emprendo, ¡al contrario!
            </p>
            <div className={styles.socialnetwork}>
              <a href='https://twitter.com/Gatoverik' target='_blank'><BsTwitter /></a>
              <a href='https://www.linkedin.com/in/erik-guzman-projectmanager/' target='_blank'><AiFillLinkedin /></a>
            </div>
          </article>
        </section>
      </section>
    </PageLayout>
  );
};
