import PageLayout from "@/components/PageLayout";
import styles from '@/styles/series/nobody-v1.module.css'
import { useEffect } from "react";
import axios from "axios";

export default function NobodyCaresVol1(){
  useEffect(() => {
    getPosts()
  },[])

  const getPosts = async () =>{
    const res = await axios.get('../../api/posts-NCV1')
    const posts = res.data

  }
  return(
    <PageLayout
      shareImage='/img/reflection/nobody-cares-1-wallpaper.jpg'
      title='Nobody Cares Vol 1'
      description='Esta es una serie de blog en donde el autor y creador de NOBODY CARES nos comparte un poco de su filosofia de vida y sus experiencias'
      keywords='opinion publica,temas de interes, noticias, news, blogs politicos, tendencias, blog de tecnologia, articulos de tecnologia, articulos de reflexion, blogs de opinion, articulo de videojuegos, articulos de cultura, innovación tecnológica, tendencias tecnológicas, inteligencia artificial, ciberseguridad, programación,  transformación digital, videojuegos, realidad virtual, reflexión, filosofía, política,educion financiera'
      canonical='https://nobodycares.vercel.app/'
    >
      <section className={styles.main_container}>
        <header className={styles.header}>
          <img src="/img/Backgrounds/blog.jpg" alt="" />
          <section>
            <h1>Nobody Cares Vol.1</h1>
            <p>Este es el primer volumen de una serie blog donde el autor de NOBODY CARES nos compartirá un poco de su filosofía, sus vivencias y su camino hacia el logro de las metas que se propone</p>
          </section>
        </header>
      </section>
      <section className={styles.posts_container}>
        {
          posts.map
        }
      </section>
    </PageLayout>
  )
}