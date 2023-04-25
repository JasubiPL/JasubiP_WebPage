import { getFiles, getFilesBySlug } from '@/lib/mdx';
import { FcClapperboard, FcElectronics, FcRating  } from 'react-icons/fc'
import styles from '@/styles/Post.module.css'
import PageLayout from '@/components/PageLayout';
import { MDXRemote } from 'next-mdx-remote';
import AuthorAvatar from '@/components/AuthorAvatar';

export default function Post({ source, frontmatter }) {
  return (
    <PageLayout title={frontmatter.title} description={frontmatter.description} keywords={frontmatter.keywords}>
      <section className={styles.post_header}>
        <div className={styles.post_header_center}>
          <img src={frontmatter.wallpaper} alt={frontmatter.alt}/>
        </div>
      </section>
      <section className={styles.post_source}>
        <div className={styles.post_source_center}>
          <AuthorAvatar
            img={frontmatter.img}
            authorName={frontmatter.author}
            width='50px'
            height='50px'
          />
          <small className={styles.post_source_date}>Publicado: {frontmatter.date}</small>
          <span className={styles.post_source_topic}>
            {frontmatter.topic}
            {
              frontmatter.icon === 'Peliculas' ? <FcClapperboard /> :
              frontmatter.icon === 'Tecnologia' ? <FcElectronics /> : 
              frontmatter.icon === 'Curiosidades' ? <FcRating /> : ""
            }
          </span>
        </div>
      </section>
      <section className={styles.post_container}>
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