import styles from '@/styles/Home.module.css'
import { getAllFilesMetadata } from '@/lib/mdx';
import PageLayout from '@/components/PageLayout'
import Link from 'next/link';
import { PostItemIndex } from '@/components/PostItemIndex';
import { FaTwitch } from 'react-icons/fa';

export default function Home({ posts }) {

  
  const selectedPosts = posts.sort((a, b) => parseInt(a.id) > parseInt(b.id) ? -1 : 1);

  return (
    <PageLayout title='Blog sobre tecnologia y programacion' >
      <section className={styles.post_blog_container}>
        <header className={styles.post_header}>
          <h2 className={styles._blog_container_title}>Últimos artículos</h2>
        </header>
        {selectedPosts.slice(0,4).map((post, index) => (
          <PostItemIndex key={post.title} post={post} index={ index }/>
        ))}
        <Link className={styles.post_blog__footer} href='/posts'> Artículos anteriores → </Link>
      </section>

      <section className='w-full md:max-w-[1280px] flex'>
        <section className='w-full md:max-w-[35%] p-5 mb-5'>
          <h2 className='text-4xl'>Proyectos</h2>
          <section className='mt-8 grid grid-cols-2 gap-4'>
            <a className=' flex flex-col items-center' target='blanck' href="https://entrenate.vercel.app/">
              <img className='rounded-[35px]' src="/img/apps/entrenate.jpg" alt="Entrenate app" />
              <span className='text-md mt-2 text-center'>Entrenate</span>
            </a>
            <a className=' flex flex-col items-center' target='blanck' href="https://brightsign-doc.vercel.app/">
              <img className='rounded-[35px]' src="/img/apps/bs-docs.jpg" alt="DocumentacionBrightSign" />
              <span className='text-md mt-2 text-center'>BrightSign Docs</span>
            </a>
            <a className=' flex flex-col items-center' target='blanck' href="https://web-app-mi-escuelita-virtual.vercel.app/">
              <img className='rounded-[35px]' src="/img/apps/mi-escuelita-virtual.jpg" alt="Mi escuelita virtual" />
              <span className='text-md mt-2 text-center'>Mi escuelita Virtual</span>
            </a>
            <a className=' flex flex-col items-center' target='blanck' href="https://jasubip-memorama-spiderman.vercel.app/">
              <img className='rounded-[35px]' src="/img/apps/spiderama.png" alt="Memorama de spiderman" />
              <span className='text-md mt-2 text-center'>Memorama Spiderman</span>
            </a>
          </section>
        </section>
        <section className='w-full lg:w-[65%] bg-blue-800 p-5'>
          <h2 className='text-4xl w-full'>Streaming</h2>
          <section className=' bg-red-400'>
            x
          </section>
        </section>
      </section>

    </PageLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  //console.log(posts)

  return {
    props: {
      posts,
    },
  };
}
