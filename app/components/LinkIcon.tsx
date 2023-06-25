import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode
  url: string
  title?: string
}

function LinkIcon({ children, url, title }: Props) {
  return (
    <Link
      title={title}
      className="text-white/80 hover:text-white/100"
      href={url}
    >
      {children}
    </Link>
  )
}

export default LinkIcon
