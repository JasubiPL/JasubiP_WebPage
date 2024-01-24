import Link from 'next/link'
import Topic from './Topic'

export const PostItem = ({ post }) =>{


  return(
    <li 
      key={post.title} 
      className='w-full bg-black_200 rounded-xl p-2 hover:bg-accent_100 transition-all group'
    >
      <Link href={`/posts/${post.slug}`} className='flex flex-col gap-3'>
        <div className='flex w-full aspect-square rounded-xl overflow-hidden relative justify-end'>
          <img 
            className='w-full object-cover'
            loading='lazy' 
            layout='responsive' 
            src={post.poster} 
            alt={post.alt} 
          />
          <Topic className='absolute top-2 right-2' topic={post.topic} />
        </div>
          <h3 className='text-2xl font-semibold'>{post.title}</h3>
          <p className='text-white_200 group-hover:text-white_100'>
          {`${post.description.slice(0, 100)}...`}
          </p>
          <p className='text-white_200 group-hover:text-white_100 '>
            {post.date}
          </p>
      </Link>
    </li>
  )
}