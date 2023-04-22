import { getFiles, getFilesBySlug } from '@/lib/mdx';
import styles from '@/styles/Post.module.css'
import PageLayout from '@/components/PageLayout';
import { MDXRemote } from 'next-mdx-remote';
import AuthorAvatar from '@/components/AuthorAvatar';

export default function Post({ source, frontmatter }) {
  return (
    <PageLayout title={frontmatter.title} description={frontmatter.description} keywords={frontmatter.keywords}>
        <div className={styles.post_header} style={{backgroundImage:`url(${frontmatter.wallpaper})`}}>
          <h1 className={styles.post_title}>{frontmatter.title}</h1>
        </div>
      <section className={styles.post_container}>
        <div className={styles.post_content}>
          <MDXRemote {...source} />
        </div>
        <small className={styles.post_date}>Publicado: {frontmatter.date}</small>
        <AuthorAvatar
          img={frontmatter.img}
          authorName={frontmatter.author}
          width='50px'
          height='50px'/>
      </section>
    </PageLayout>
  );
}

export async function getStaticProps({ params }){
  const { source, frontmatter } = await getFilesBySlug(params.slug);

  return {
    props:{
      source,
      frontmatter,
    }
  }
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths =posts.map(post =>({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  }
}