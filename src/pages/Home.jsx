import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { profile } from '../data/profileData'
import PageTransition from '../components/PageTransition'

const typingPhrases = [
  'Designing AI-first digital experiences',
  'Building intelligent products with data',
  'Turning ideas into deployable ML systems',
]

const Home = () => {
  const text = useTypingEffect(typingPhrases)

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 100])

  return (
    <PageTransition>
      <section className="noise relative flex min-h-screen items-center px-5 pt-24 md:px-10">
        <motion.div style={{ y }} className="mx-auto w-full max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] text-white/70"
          >
            {profile.title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold leading-tight text-white md:text-7xl"
          >
            Hi, I&apos;m Amaljosh Maadhav J - <span className="bg-gradient-to-r from-neonBlue to-violetGlow bg-clip-text text-transparent">AI Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 min-h-8 text-lg text-white/70 md:text-2xl"
          >
            {text}
            <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-neonBlue" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-8 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/projects" className="rounded-full bg-gradient-to-r from-violetGlow to-neonBlue px-7 py-3 text-sm font-semibold text-black transition hover:shadow-glow">
              View Projects
            </Link>
            <Link to="/contact" className="rounded-full border border-white/20 px-7 py-3 text-sm text-white transition hover:border-neonBlue/60 hover:bg-white/5">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  )
}

export default Home
