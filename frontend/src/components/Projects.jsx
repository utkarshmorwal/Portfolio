import { useReveal } from '../hooks/useReveal'
import { GitHubIcon, ExternalLinkIcon, TrophyIcon } from './Icons'

export default function Projects({ projects }) {
  const [ref, visible] = useReveal()

  return (
    <section id="projects" className="section">
      <div className="section-eyebrow">03</div>
      <h2 className="section-title">Projects</h2>

      <div ref={ref} className={`projects-grid reveal ${visible ? 'visible' : ''}`}>
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-header">
              <div className="project-name">{project.name}</div>
              <div className="project-tagline">{project.tagline}</div>
              {project.award && (
                <div className="project-award">
                  <TrophyIcon /> {project.award}
                </div>
              )}
            </div>
            <div className="project-body">
              <ul className="project-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="tech-row">
                {project.techStack.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.repoUrl && (
                  <a className="project-link" href={project.repoUrl} target="_blank" rel="noreferrer">
                    <GitHubIcon width="14" height="14" /> Source
                  </a>
                )}
                {project.liveUrl && (
                  <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLinkIcon /> Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
