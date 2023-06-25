import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaLaptop } from 'react-icons/fa'
import LinkIcon from './LinkIcon'

function NavBar() {
  return (
    <nav className="sticky top-0 z-10 bg-zinc-900 p-4 text-white shadow-xl">
      <div className="prose prose-xl mx-auto flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <Link
          href="/"
          className="font-bold text-white/80 no-underline transition hover:text-white/100"
        >
          Guilherme Piangers
        </Link>
        <div className="flex gap-4">
          <LinkIcon
            title="LinkedIn"
            url="https://www.linkedin.com/in/guilherme-piangers-431a1a27b/"
          >
            <FaLinkedinIn size={24} />
          </LinkIcon>

          <LinkIcon title="GitHub" url="https://github.com/GuiPiangers">
            <FaGithub size={24} />
          </LinkIcon>

          <LinkIcon
            title="Portfolio"
            url="https://portifolio-ten-mu.vercel.app"
          >
            <FaLaptop size={24} />
          </LinkIcon>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
