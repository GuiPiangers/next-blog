import getFormattedDate from '@/lib/getFormattedDate'
import { getPostData, getSortedPostData } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import parse from 'html-react-parser'

type Props = {
  params: { postId: string }
}

export function generateStaticParams() {
  const posts = getSortedPostData()

  return posts.map((post) => ({
    postId: post.id,
  }))
}

export async function generateMetadata({ params }: Props) {
  const posts = getSortedPostData()
  const { postId } = params

  const post = posts.find((post) => post.id === postId)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
  }
}

async function Post({ params }: Props) {
  const posts = getSortedPostData()
  const { postId } = params
  const { title, date, contentHtml } = await getPostData(postId)
  const formattedDate = getFormattedDate(date)

  if (!posts.find((post) => post.id === postId)) return notFound

  return (
    <main className="prose prose-xl prose-slate mx-auto mt-12 px-6">
      <h1 className="mb-0 text-3xl">{title}</h1>
      <p>{formattedDate}</p>
      <article>
        <section>{parse(contentHtml)}</section>
        <p>
          <Link href="/">&larr; Back to home</Link>
        </p>
      </article>
    </main>
  )
}

export default Post
