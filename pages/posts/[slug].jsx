import { getFiles, getFilesBySlug } from '@/lib/mdx';
import styles from '@/styles/Post.module.css'
import PageLayout from '@/components/PageLayout';
import { MDXRemote } from 'next-mdx-remote';

export default function Post({ source, frontmatter }) {
  return (
    <PageLayout title={frontmatter.title} description={frontmatter.description} keywords={frontmatter.keywords}>
        <div className={styles.post_header} style={{backgroundImage:`url(${frontmatter.img})`}}>
          <h1 className={styles.post_title}>{frontmatter.title}</h1>
        </div>
      <section className={styles.post_container}>
        <small className={styles.post_date}>Publicado: {frontmatter.date}</small>
        <div className={styles.post_content}>
          <MDXRemote {...source} />
        </div>
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