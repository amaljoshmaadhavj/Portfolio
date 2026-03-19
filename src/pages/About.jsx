import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { experienceTimeline, profile } from '../data/profileData'

const About = () => (
  <PageTransition>
    <main className="mx-auto max-w-6xl px-5 pt-32 pb-20 md:px-10">
      <Reveal>
        <SectionTitle title="About Me" subtitle="Profile" />
      </Reveal>

      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <Reveal className="glass rounded-3xl p-8">
          <h3 className="font-display text-2xl text-white">{profile.name}</h3>
          <p className="mt-4 leading-relaxed text-white/70">
            I build AI-powered applications that combine robust data pipelines, model intelligence, and premium product experiences.
            My focus is creating practical systems that ship fast, scale reliably, and feel intuitive to real users.
          </p>
          <p className="mt-4 leading-relaxed text-white/65">
            I enjoy operating at the intersection of data science and frontend engineering to create products that are both technically strong and visually high quality.
          </p>
        </Reveal>

        <Reveal>
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass flex h-full min-h-64 items-end rounded-3xl bg-gradient-to-br from-violetGlow/20 to-neonBlue/10 p-8"
          >
            <p className="font-display text-3xl text-white/95">Aspiring Data Scientist</p>
          </motion.div>
        </Reveal>
      </div>

      <div className="mt-16 space-y-6">
        {experienceTimeline.map((item) => (
          <Reveal key={item.year} className="relative pl-10">
            <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-neonBlue shadow-blueGlow" />
            <span className="absolute left-[5px] top-6 h-[calc(100%+20px)] w-px bg-white/15" />
            <p className="text-sm text-neonBlue">{item.year}</p>
            <h4 className="mt-1 font-display text-xl text-white">{item.title}</h4>
            <p className="mt-2 text-white/65">{item.detail}</p>
          </Reveal>
        ))}
      </div>
    </main>
  </PageTransition>
)

export default About
