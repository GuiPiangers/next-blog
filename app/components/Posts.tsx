import { getSortedPostData } from '@/lib/posts'
import ListItem from './ListItem'

function Posts() {
  const posts = getSortedPostData()
  return (
    <section className="mx-auto mt-6 max-w-2xl">
      <h2 className="text-3xl font-bold">Blog</h2>

      <ul className="w-full">
        {posts.map((post) => (
          <ListItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  )
}

export default Posts
