import styles from '@/styles/dashboard/MyPosts.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function MyPosts(){
  const [postsList, setPostsList] = useState([])
  const router = useRouter()
  useEffect(() => {
    getPosts()
  },[])

  const getPosts = async () =>{
    const res = await axios.get('./api/posts')
    console.log(res.data)
    setPostsList(res.data)

  }
  return(
    <section className={styles.my_posts}>
      <h2>Mis Articulos</h2>
      <ul className={styles.posts_list}>
        {postsList.map(post => {
          return(
            <li key={post.id}>
              <div className={styles.posts_image_container}> 
                <img src={post.wallpaper} alt={post.alt} />
              </div>
              <h3>{post.title}</h3>
              <div className={styles.posts_buttons}>
                <button className={styles.look_button} onClick={() => router.push(`/posts/${post.slug}`)}>Ver</button>
                <button className={styles.delete_button} onClick={() => alert('Post Eliminado')}>Eliminar</button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}