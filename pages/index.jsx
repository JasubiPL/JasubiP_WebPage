import styles from '@/styles/Home.module.css'
import { getAllFilesMetadata } from '@/lib/mdx';
import PageLayout from '@/components/PageLayout'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { startSlider } from '@/lib/handleSlider';
import AuthorAvatar from '@/components/AuthorAvatar';
import Topic from '@/components/Topic';

export default function Home({ posts }) {
  useEffect(() => {startSlider()},[]);

  
  posts.sort((a, b) => parseInt(a.id) > parseInt(b.id) ? -1 : 1);
  const lastPosts = posts
  const allPosts = posts

  //Categori filter
  const [filter, setFilter] = useState("All")

  const postFilter = (filter) => {
    if (filter === 'All'){
      return allPosts
    }else{
      return allPosts.filter(post => post.topic === filter)
    }
  }

  const postFiltered = postFilter(filter)
  

  return (
    <PageLayout
      shareImage='/img/reflection/nobody-cares-1-wallpaper.jpg'
      title='Blog de opinion sobre diversos temas'
      description='En Nobody Cares Blog, encontraras una gran variedad de Publicaciónes sobre gadgets, tecnología, software y videojuegos. Últimas tecnologías en electrónica de consumo y novedades tecnológicas en México y el mundo"'
      keywords='opinion publica,temas de interes, noticias, news, blogs politicos, tendencias, blog de tecnologia, articulos de tecnologia, articulos de reflexion, blogs de opinion, articulo de videojuegos, articulos de cultura, innovación tecnológica, tendencias tecnológicas, inteligencia artificial, ciberseguridad, programación,  transformación digital, videojuegos, realidad virtual, reflexión, filosofía, política,educion financiera'
      canonical='https://unaopinionmas.vercel.app/'
    >
      <section className={styles.slider_container}>
        {lastPosts.slice(0, 4).map(post =>(
          <article key={post.slug} className={`${styles.slide} slide` }>
            <img priority='true' src={post.wallpaper} alt={post.alt} />
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
        <header className={styles.post_header}><
          h2 className={styles._blog_container_title}>Últimos artículos</h2>
          <div className={styles._blog_container_filter}>
            <label htmlFor="Temas">Temas</label>
            <select id='Temas' onChange={() => setFilter(event.target.value)}>
              <option className={styles.filter_option} value="All">Todo</option>
              <option value="Cine">Cine</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Curiosidades">Curiosidades</option>
              <option value="Desarrollo de Software">Programación</option>
              <option value="Reflexión">Reflexión</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>
        </header>
        {postFiltered.map(post => (
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
            <p className={styles.post_item_footer}>
              <Topic topic={post.topic} icon={post.icon} />
            </p>
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
