import Link from 'next/link'

export default function AsideBarPost({ headings }) {
  if (!headings.length) {
    return null
  }

  return (
    <ul>
      {headings.map((heading) => (
        <li key={heading.id}>
          <Link href={`#${heading.id}`} passHref>
            <a>{heading.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}