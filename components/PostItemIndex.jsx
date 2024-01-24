import styles from '@/styles/PostItem.module.css'
import Link from 'next/link'
import Topic from './Topic'

export const PostItemIndex = ({ post, index }) =>{


  return(
    <li key={post.title} className={`${styles.post_item} card_${index}`}>
      <Link href={`/posts/${post.slug}`} className={styles.post_item_poster}>
        <img loading='lazy' layout='responsive' src={post.poster} alt={post.alt} />
        <Topic className='absolute bottom-4 right-4' topic={post.topic} />
        <div className={styles._item_title_container}>
          <h3 className={styles.post_item_title}>{post.title}</h3>
          
          <p className={styles._item__description}>
          {`${post.description.slice(0, 200)}... `}
          </p>
          <p className={styles._item__date}>
            {post.date}
          </p>
        </div>
      </Link>
    </li>
  )
}