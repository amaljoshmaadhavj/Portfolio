import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { certifications } from '../data/profileData'

const Certifications = () => (
  <PageTransition>
    <main className="mx-auto max-w-6xl px-5 pt-32 pb-20 md:px-10">
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
    </main>
  </PageTransition>
)

export default Certifications
