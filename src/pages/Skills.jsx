import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/profileData'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const barRefs = useRef([])

  useEffect(() => {
    const animations = barRefs.current.map((bar) => {
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

  return (
    <PageTransition>
      <main className="mx-auto max-w-6xl px-5 pt-32 pb-20 md:px-10">
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
      </main>
    </PageTransition>
  )
}

export default Skills
