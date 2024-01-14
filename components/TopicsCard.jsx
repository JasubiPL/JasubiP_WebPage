import Link from "next/link";


export default function TopicCard({ slug, title, img }){
  return(
    <Link href={slug}>
      <h3>{ title }</h3>
      <img src={ img } alt={ title} />
    </Link>
  )
}