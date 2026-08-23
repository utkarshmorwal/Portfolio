import { useReveal } from '../hooks/useReveal'

export default function Experience({ experience }) {
  const [ref, visible] = useReveal()

  return (
    <section id="experience" className="section">
      <div className="section-eyebrow">04</div>
      <h2 className="section-title">Experience</h2>

      <div ref={ref} className={`timeline reveal ${visible ? 'visible' : ''}`}>
        {experience.map((job) => (
          <div className="timeline-item" key={job.role + job.company}>
            <div className="timeline-role">{job.role}</div>
            <div className="timeline-meta">
              <span>{job.company}</span>
              <span>{job.location}</span>
              <span>{job.period}</span>
            </div>
            <ul className="timeline-list">
              {job.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
