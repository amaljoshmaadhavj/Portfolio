import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { certifications, education, experienceTimeline, profile, projects, skills } from '../data/profileData'
import profileImage from '../../AMALJOSH MAADHAV J.jpg'

gsap.registerPlugin(ScrollTrigger)

const typingPhrases = [
  'Designing AI-first digital experiences',
  'Building intelligent products with data',
  'Turning ideas into deployable ML systems',
]

const githubUsername = 'amaljoshmaadhavj'

const sectionClassName = 'scroll-mt-28 px-5 py-20 md:px-10 md:py-24'

const LandingPage = () => {
  const text = useTypingEffect(typingPhrases)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 100])
  const barRefs = useRef([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    const animations = barRefs.current
      .filter(Boolean)
      .map((bar) => {
        const level = Number(bar.dataset.level)

        return gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${level}%`,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
            },
          },
        )
      })

    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill()
        animation.kill()
      })
    }
  }, [])

  const onChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message.')
      }

      setStatus('success')
      setStatusMessage(result.message || 'Message sent successfully.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setStatusMessage(error.message || 'Failed to send message. Please try again later.')
    }
  }

  return (
    <main>
      <section id="home" className="noise relative flex min-h-screen scroll-mt-24 items-center px-5 pt-24 md:px-10">
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
            Hi, I&apos;m Amaljosh Maadhav J -{' '}
            <span className="bg-gradient-to-r from-neonBlue to-violetGlow bg-clip-text text-transparent">AI Developer</span>
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
            <a href="#projects" className="rounded-full bg-gradient-to-r from-violetGlow to-neonBlue px-7 py-3 text-sm font-semibold text-black transition hover:shadow-glow">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-7 py-3 text-sm text-white transition hover:border-neonBlue/60 hover:bg-white/5">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className={sectionClassName}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle title="About Me" subtitle="Profile" />
          </Reveal>

          <div className="grid items-start gap-8 md:grid-cols-[1.2fr_0.9fr]">
            <Reveal className="glass rounded-3xl p-8">
              <h3 className="font-display text-2xl text-white">{profile.name}</h3>
              <p className="mt-4 leading-relaxed text-white/70">
                I build AI-powered applications that combine robust data pipelines, model intelligence, and premium product experiences.
                My focus is creating practical systems that ship fast, scale reliably, and feel intuitive to real users.
              </p>
              <p className="mt-4 leading-relaxed text-white/65">
                I enjoy operating at the intersection of data science and frontend engineering to create products that are both technically strong and visually high quality.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-neonBlue/80">GitHub Activity</p>
                    <p className="mt-2 text-sm text-white/65">Live contribution snapshot from github.com/{githubUsername}</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">Live profile</span>
                </div>

                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden rounded-xl border border-white/10 bg-[#05070a] p-3 transition hover:border-neonBlue/40"
                >
                  <img
                    src={`https://ghchart.rshah.org/38bdf8/${githubUsername}`}
                    alt={`${githubUsername} GitHub contribution chart`}
                    loading="lazy"
                    className="w-full rounded-lg bg-[#05070a]"
                  />
                </a>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-xs text-white/50">Opens your GitHub profile in a new tab.</p>
                  <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-neonBlue/35 px-3 py-1.5 text-xs text-neonBlue transition hover:bg-neonBlue/10"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <motion.div
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass mx-auto flex w-full max-w-[440px] flex-col rounded-3xl bg-gradient-to-br from-violetGlow/20 to-neonBlue/10 p-6 md:p-7"
              >
                <img
                  src={profileImage}
                  alt="Amaljosh Maadhav J"
                  className="mb-5 aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-glow"
                />
                <p className="text-center font-display text-3xl text-white/95">Aspiring Data Scientist</p>
              </motion.div>
            </Reveal>
          </div>

          <div className="mt-16 space-y-6">
            {experienceTimeline.map((item, index) => (
              <Reveal key={`${item.year}-${item.title}`} className="relative pl-10">
                <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-neonBlue shadow-blueGlow" />
                {index !== experienceTimeline.length - 1 && (
                  <span className="absolute left-[5px] top-6 h-[calc(100%+20px)] w-px bg-white/15" />
                )}
                <p className="text-sm text-neonBlue">{item.year}</p>
                <h4 className="mt-1 font-display text-xl text-white">{item.title}</h4>
                <p className="mt-2 text-white/65">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className={sectionClassName}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle title="Education" subtitle="Academic Journey" />
          </Reveal>

          <div className="space-y-6">
            {education.map((item) => (
              <Reveal key={item.title} className="glass rounded-2xl p-7">
                <p className="text-sm uppercase tracking-[0.2em] text-neonBlue/80">{item.period}</p>
                <h3 className="mt-2 font-display text-2xl text-white">{item.title}</h3>
                <p className="mt-1 text-white/80">{item.institution}</p>
                <p className="mt-4 text-white/65">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={sectionClassName}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle title="Skills" subtitle="Technical Strengths" />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <Reveal key={skill.name}>
                <article className="glass rounded-2xl p-6 transition hover:shadow-glow">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-display text-lg text-white">{skill.name}</h3>
                    <span className="text-sm text-white/75">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      ref={(el) => {
                        barRefs.current[index] = el
                      }}
                      data-level={skill.level}
                      className="h-full rounded-full bg-gradient-to-r from-neonBlue to-violetGlow"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className={sectionClassName}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle title="Licenses & Certifications" subtitle="Credentials" />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert) => (
              <Reveal key={cert.name}>
                <article className="glass rounded-2xl p-6 transition duration-500 hover:-translate-y-2 hover:shadow-blueGlow">
                  <p className="text-sm text-neonBlue/80">{cert.year}</p>
                  <h3 className="mt-3 font-display text-xl text-white">{cert.name}</h3>
                  <p className="mt-2 text-white/70">{cert.issuer}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={sectionClassName}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle title="Projects" subtitle="Featured Work" />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Reveal key={project.title}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 px-5 pt-20 pb-24 md:px-10 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionTitle title="Contact" subtitle="Let&apos;s Build Something Great" />
          </Reveal>

          <Reveal>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  placeholder="Your Name"
                  className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-violetGlow focus:shadow-glow"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  placeholder="Email Address"
                  className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-neonBlue focus:shadow-blueGlow"
                />
              </div>
              <input
                required
                name="subject"
                value={formData.subject}
                onChange={onChange}
                placeholder="Subject"
                className="mt-5 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-violetGlow focus:shadow-glow"
              />
              <textarea
                required
                rows={5}
                name="message"
                value={formData.message}
                onChange={onChange}
                placeholder="Tell me about your project..."
                className="mt-5 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-neonBlue focus:shadow-blueGlow"
              />

              <div className="mt-6 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="rounded-full bg-gradient-to-r from-violetGlow to-neonBlue px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                <AnimatePresence mode="wait">
                  {status !== 'idle' && (
                    <motion.p
                      key={status}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={`text-sm ${status === 'error' ? 'text-rose-300' : 'text-white/80'}`}
                    >
                      {status === 'loading' ? 'Submitting...' : statusMessage}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default LandingPage
