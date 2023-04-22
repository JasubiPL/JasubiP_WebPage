import Image from "next/image";
import styles from "@/styles/AuthorAvatar.module.css"

export default function AuthorAvatar({img, authorName, width, height}) {
  return (
    <a href="/" className={styles.author}>
      <div className={styles.author_img}>
        <Image src={authorName === 'JasubiP' ? '/img/authors/jasubi.jpg' : '/img/authors/erik.jpeg'}
          width={width} 
          height={height} 
          loading="lazy" 
          alt="Autor del Blog"
        />
      </div>
      <div className={styles.author_name}>
        {authorName}
      </div>
    </a>
  );
};
