import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

/* eslint-disable no-undef */
type Props = {
  post: BlogPost
}

function ListItem({ post }: Props) {
  const { id, title, date } = post
  const formattedDate = getFormattedDate(date)

  return (
    <li className="mt-4 text-xl">
      <Link className="underline hover:text-black/70" href={`/posts/${id}`}>
        {title}
      </Link>
      <p className="mt-2 text-sm">{formattedDate}</p>
    </li>
  )
}

export default ListItem
