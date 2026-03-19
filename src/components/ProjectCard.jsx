import { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - bounds.left) / bounds.width
    const py = (event.clientY - bounds.top) / bounds.height

    setTilt({
      x: (py - 0.5) * -10,
      y: (px - 0.5) * 12,
    })
  }

  const reset = () => setTilt({ x: 0, y: 0 })

  return (
    <article
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="group glass relative overflow-hidden rounded-2xl p-6 transition duration-500 hover:-translate-y-2"
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02,1.02,1.02)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violetGlow/10 to-neonBlue/5 opacity-0 transition group-hover:opacity-100" />
      <div className="relative space-y-4">
        <h3 className="font-display text-xl text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-white/70">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <a href={project.github} className="rounded-full border border-neonBlue/50 px-4 py-2 text-xs text-neonBlue transition hover:bg-neonBlue/10">
            GitHub
          </a>
          <a href={project.live} className="rounded-full border border-violetGlow/60 px-4 py-2 text-xs text-violetGlow transition hover:bg-violetGlow/10">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
