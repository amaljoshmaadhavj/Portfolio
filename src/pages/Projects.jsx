import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import PageTransition from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/profileData'

const Projects = () => (
  <PageTransition>
    <main className="mx-auto max-w-6xl px-5 pt-32 pb-20 md:px-10">
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
    </main>
  </PageTransition>
)

export default Projects
