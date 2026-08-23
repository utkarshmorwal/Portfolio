import { useReveal } from '../hooks/useReveal'

const LABELS = {
  languages: 'Languages',
  java: 'Core Java',
  spring: 'Spring Framework',
  persistence: 'ORM & Persistence',
  frontend: 'Frontend',
  databases: 'Databases',
  security: 'Security',
  tools: 'Development Tools',
  concepts: 'Architecture & Concepts',
  deployment: 'Deployment',
}

export default function Skills({ skills }) {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className="section">
      <div className="section-eyebrow">02</div>
      <h2 className="section-title">Skills</h2>

      <div ref={ref} className={`skills-groups reveal ${visible ? 'visible' : ''}`}>
        {skills.map((group) => (
          <div key={group.category}>
            <div className="skill-group-label">{LABELS[group.category] || group.category}</div>
            <div className="chip-row">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
