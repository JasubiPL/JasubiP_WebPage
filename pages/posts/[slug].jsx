import styles from '@/styles/Post.module.css'
import PageLayout from '@/components/PageLayout';
import { useRouter } from 'next/router';
import { getFiles, getFilesBySlug } from '@/lib/mdx';
import {StickyShareButtons} from 'sharethis-reactjs';
import { MDXRemote } from 'next-mdx-remote';
import Topic from '@/components/Topic';

export default function Post({ source, frontmatter }) {
  const router = useRouter();

  return (
    <PageLayout title={frontmatter.title} >
      <StickyShareButtons
        config={{
          show_mobile: 'true',
          color:'white',
          enabled: 'true',
          labels: 'cta',
          language: 'es',
          networks: [
            'facebook',
            'twitter',
            'linkedin',
            'whatsapp',
          ]
        }}
      />
      <section className={styles.post_header}>
        <div className={styles.post_header_center}>
          <div className={styles.post_header_center}>
            <div className={styles.post_header_img}>
              <img className={styles.post_img} src={frontmatter.poster} alt={frontmatter.alt} />
            </div>
            <div className={styles.post_header_right}>
              <h1 className={styles.post_title}>{ frontmatter.title }</h1>
              <div className={styles.post_source}>
                <small className={styles.post_source_date}>Publicado: {frontmatter.date}</small>
                <span className={styles.post_source_topic}>
                  <Topic topic={frontmatter.topic} icon={frontmatter.icon} />
                </span>
              </div>
            </div>
          </div>
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