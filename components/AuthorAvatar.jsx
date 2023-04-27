import Image from "next/image";
import styles from "@/styles/AuthorAvatar.module.css" 

export default function AuthorAvatar({ authorName, width, height,color}) {
  if(color === 'white'){
    return (
      <div className={styles.author}>
        <span className={styles.author_img}>
          <img src={authorName === 'JasubiP' ? '/img/authors/jasubi.jpg' :
              authorName === 'Erik Guzmán' ? '/img/authors/erik.jpeg' :
              authorName === 'Gabojin360' ? '/img/authors/gabojin360.jpg' : '/img/authors/default-icon.jpeg'}
            width={width} 
            height={height} 
            loading="lazy" 
            alt="Autor del Blog"
          />
        </span>
        <span className={styles.author_name}>
          {authorName}
        </span>
      </div>
    );
  }
  return (
    <div className={styles.author}>
      <span className={styles.author_img}>
        <img 
          src={authorName === 'JasubiP' ? '/img/authors/jasubi.jpg' :
          authorName === 'Erick Guzmán' ? '/img/authors/erik.jpg' :
          authorName === 'Gabojin360' ? '/img/authors/gabojin360.jpg' : '/img/authors/default-icon.jpeg'}
          width={width} 
          height={height} 
          loading="lazy" 
          alt="Autor del Blog"
        />
      </span>
      <span className={styles.author_name_blue}>
        {authorName}
      </span>
    </div>
  );


};
