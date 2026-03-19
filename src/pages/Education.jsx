import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import PageTransition from '../components/PageTransition'
import { education } from '../data/profileData'

const Education = () => (
  <PageTransition>
    <main className="mx-auto max-w-6xl px-5 pt-32 pb-20 md:px-10">
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
    </main>
  </PageTransition>
)

export default Education
