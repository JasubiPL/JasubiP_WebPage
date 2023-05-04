import styles from '@/styles/Post.module.css'
import PageLayout from '@/components/PageLayout';
import AuthorAvatar from '@/components/AuthorAvatar';
import { useRouter } from 'next/router';
import { getFiles, getFilesBySlug } from '@/lib/mdx';
import { FcClapperboard, FcElectronics, FcRating, FcCommandLine, FcDecision } from 'react-icons/fc'
import { RiGameFill  } from 'react-icons/ri'
import {StickyShareButtons} from 'sharethis-reactjs';
import { MDXRemote } from 'next-mdx-remote';
import Topic from '@/components/Topic';

export default function Post({ source, frontmatter }) {
  const router = useRouter();

  return (
    <PageLayout 
      title={frontmatter.title} 
      description={frontmatter.description} 
      keywords={frontmatter.keywords} 
      canonical={`https://unaopinionmas.vercel.app${router.asPath}`}
      shareImage={frontmatter.wallpaper}>
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
          <img src={frontmatter.wallpaper} alt={frontmatter.alt}/>
        </div>
      </section>
      <section className={styles.post_source}>
        <div className={styles.post_source_center}>
          <AuthorAvatar
            authorName={frontmatter.author}
            width='50px'
            height='50px'
          />
          <small className={styles.post_source_date}>Publicado: {frontmatter.date}</small>
          <span className={styles.post_source_topic}>
            <Topic topic={frontmatter.topic} icon={frontmatter.icon} />
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