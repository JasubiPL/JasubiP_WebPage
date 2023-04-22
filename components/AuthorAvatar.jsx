import Image from "next/image";
import styles from "@/styles/AuthorAvatar.module.css"
import Link from "next/link";

export default function AuthorAvatar({ authorName, width, height}) {
  return (
    <Link href="/" className={styles.author}>
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
    </Link>
  );
};
