import { useReveal } from '../hooks/useReveal'

export default function Certifications({ certifications }) {
  const [ref, visible] = useReveal()

  return (
    <section id="certifications" className="section">
      <div className="section-eyebrow">05</div>
      <h2 className="section-title">Certifications & Achievements</h2>

      <div ref={ref} className={`cert-console reveal ${visible ? 'visible' : ''}`}>
        {certifications.map((cert) => (
          <div className="cert-line" key={cert.title}>
            <span className="cert-tag">[OK]</span>
            <span className="cert-title">{cert.title}</span>
            <span className="cert-meta">
              {cert.issuer}
              {cert.issued ? ` \u00b7 ${cert.issued}` : ''}
              {cert.code ? ` \u00b7 #${cert.code}` : ''}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
