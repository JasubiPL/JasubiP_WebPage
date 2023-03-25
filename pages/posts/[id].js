import styles from '@/styles/Post.module.css'
import PageLayout from '@/components/PageLayout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <PageLayout title={postData.title} description={postData.description} keywords={postData.keywords}>
      <article className={styles.post_container}>
        <h1 className={styles.post_title}>{postData.title}</h1>
        <small className={styles.post_date}>{postData.date}</small>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}