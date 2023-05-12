import styles from '@/styles/dashboard/SetPost.module.css'
import { useState } from 'react';

export default function SetPost() {
  const [data, setData] = useState({
    title: '',
    description: '',
    keywords: '',
    topic: '',
    author: '',
    content:''
  })

  

  const handlerChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    
  }
  console.log(data)

  return (
    <section className={styles.set_post}>
      <h2>Nuevo Artículo</h2>
      <form>
        <label htmlFor="title">Nombre del Artículo</label>
        <input type="text" name='title' value={data.title} onChange={handlerChange}/>

        <label htmlFor="description">Descripción</label>
        <input type="text" name='description' value={data.description} onChange={handlerChange}/>

        <label htmlFor="keywords">Palabras Clave</label>
        <input type="text" name='keywords' value={data.keywords} onChange={handlerChange}/>

        <div className={styles.select_container}>
          <label htmlFor="Tema">Tema</label>
          <select name='topic' value={data.topic} onChange={handlerChange}>
            <option>Seleccionar</option>
            <option value="Cine">Cine</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Curiosidades">Curiosidades</option>
            <option value="Desarrollo de Software">Programación</option>
            <option value="Reflexión">Reflexión</option>
            <option value="Gaming">Gaming</option>
          </select>

          <label htmlFor="Tema">Autor</label>
          <select name='author' value={data.author} onChange={handlerChange}>
            <option>Seleccionar</option>
            <option value="JasubiP">Jasubi Piñeyro</option>
            <option value="Erik Guzmán">Erik Guzmán</option>
            <option value="Gabojin360">Gabojin360</option>
          </select>
        </div>

        <label htmlFor="content">Contenido</label>
        <textarea type="text" name='content' value={data.content} onChange={handlerChange}/>

        <div className={styles.update_image_container}>
          <label htmlFor="poster">Palabras Clave</label>
          <input type="file" name='poster' value={data.poster} onChange={handlerChange}/>
          
          <label htmlFor="wallpaper">Palabras Clave</label>
          <input type="file" name='wallpaper' value={data.wallpaper} onChange={handlerChange}/>
        </div>
        
      </form>
    </section>
  );
};
