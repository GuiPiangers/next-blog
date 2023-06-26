import Posts from './components/Posts'

export default function Home() {
  return (
    <main className="mx-auto px-6">
      <p className="my-12 text-center text-2xl">
        Hello and Welcome 👋{' '}
        <span className="whitespace-nowrap">
          I&apos;m <strong>Guilherme</strong>
        </span>
      </p>

      <Posts />
    </main>
  )
}
