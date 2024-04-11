import styles from '@/styles/Home.module.css'
import { getAllFilesMetadata } from '@/lib/mdx';
import PageLayout from '@/components/PageLayout'
import Link from 'next/link';
import { PostItemIndex } from '@/components/PostItemIndex';
import { FaTwitch, FaYoutube } from 'react-icons/fa';
import { TwitchScreen } from '@/components/TwitchScreen';

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

      <section className='w-full md:max-w-[1280px] flex flex-wrap'>
        <section className='w-full lg:max-w-[35%] p-5 mb-5'>
          <h2 className='text-4xl'>Proyectos</h2>
          <section className='mt-8 grid grid-cols-2 gap-4'>
            <a className=' flex flex-col items-center hover:scale-105 active:scale-95 transition-all' target='blanck' href="https://youtu.be/1PbtLw1bl6w?si=bit8HUfbFg2Ai2jB">
              <img className='rounded-[35px]' src="/img/apps/DS_IAMSA.jpg" alt="Señalizacion Digital" />
              <span className='text-md mt-2 text-center'>Señalizaion Digital</span>
            </a>
            <a className=' flex flex-col items-center hover:scale-105 active:scale-95 transition-all' target='blanck' href="https://brightsign-doc.vercel.app/">
              <img className='rounded-[35px]' src="/img/apps/bs-docs.webp" alt="DocumentacionBrightSign" />
              <span className='text-md mt-2 text-center'>BrightSign Docs</span>
            </a>
            <a className=' flex flex-col items-center hover:scale-105 active:scale-95 transition-all' target='blanck' href="https://web-app-mi-escuelita-virtual.vercel.app/">
              <img className='rounded-[35px]' src="/img/apps/mi-escuelita-virtual.webp" alt="Mi escuelita virtual" />
              <span className='text-md mt-2 text-center'>Mi escuelita Virtual</span>
            </a>
            <a className=' flex flex-col items-center hover:scale-105 active:scale-95 transition-all' target='blanck' href="https://jasubip-memorama-spiderman.vercel.app/">
              <img className='rounded-[35px]' src="/img/apps/spiderama.webp" alt="Memorama de spiderman" />
              <span className='text-md mt-2 text-center'>Memorama Spiderman</span>
            </a>
          </section>
        </section>
        <section className='w-full lg:w-[65%] p-5'>
          <h2 className='text-4xl w-full'>Streaming</h2>
          <section className='mt-4'>
            <section className='flex gap-4 mb-2'>
              <a 
                className='flex gap-3 items-center bg-purple-800 text-purple-300 border-2 border-purple-300 rounded-full 
                px-4 py-1 hover:scale-105 transition-all'
                href='https://twitch.tv/jasubip'
                target='blanck'
              >jasubip <FaTwitch className='w-6 h-6' /></a>
              <a 
                className='flex gap-3 items-center bg-red-800 text-red-300 border-2 border-red-300
                rounded-full px-4 py-1 hover:scale-105 transition-all'
                href='https://www.youtube.com/channel/UC5LgbMiS-BxoJnxSbE851BQ'
                target='black'
              >Jugando con Jasubi <FaYoutube className='w-6 h-6' /></a>
            </section>

            <TwitchScreen />
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
