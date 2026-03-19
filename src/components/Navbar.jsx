import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { navLinks } from '../data/profileData'

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [activeSection])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-black/50 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="font-display text-lg font-semibold text-white">
          <span className="bg-gradient-to-r from-neonBlue to-violetGlow bg-clip-text text-transparent">AJM</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <a href={link.to} className="group relative text-sm tracking-wide text-white/80 transition hover:text-white">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-neonBlue to-violetGlow transition-transform duration-300 group-hover:scale-x-100" />
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-neonBlue to-violetGlow"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-xs text-white/90 transition hover:border-neonBlue/70 hover:text-white md:block"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-md border border-white/20 px-3 py-1 text-xs text-white md:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/80 px-6 py-5 backdrop-blur md:hidden">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <a href={link.to} className="text-sm tracking-wide text-white/80 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
