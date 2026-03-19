import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import PageTransition from '../components/PageTransition'

const Contact = () => {
  const [status, setStatus] = useState('idle')

  const onSubmit = (event) => {
    event.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 900)
    setTimeout(() => setStatus('idle'), 2600)
    event.currentTarget.reset()
  }

  return (
    <PageTransition>
      <main className="mx-auto max-w-4xl px-5 pt-32 pb-20 md:px-10">
        <Reveal>
          <SectionTitle title="Contact" subtitle="Let&apos;s Build Something Great" />
        </Reveal>

        <Reveal>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <input required placeholder="Your Name" className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-violetGlow focus:shadow-glow" />
              <input required type="email" placeholder="Email Address" className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-neonBlue focus:shadow-blueGlow" />
            </div>
            <input required placeholder="Subject" className="mt-5 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-violetGlow focus:shadow-glow" />
            <textarea required rows={5} placeholder="Tell me about your project..." className="mt-5 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-neonBlue focus:shadow-blueGlow" />

            <div className="mt-6 flex items-center gap-4">
              <button type="submit" className="rounded-full bg-gradient-to-r from-violetGlow to-neonBlue px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
                Send Message
              </button>

              <AnimatePresence mode="wait">
                {status !== 'idle' && (
                  <motion.p
                    key={status}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="text-sm text-white/80"
                  >
                    {status === 'loading' ? 'Submitting...' : 'Message sent successfully.'}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </main>
    </PageTransition>
  )
}

export default Contact
