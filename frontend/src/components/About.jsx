import { useReveal } from '../hooks/useReveal'
import CodeFrame from './CodeFrame'

export default function About({ profile }) {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="section">
      <div className="section-eyebrow">01</div>
      <h2 className="section-title">About</h2>

      <div ref={ref} className={`about-grid reveal ${visible ? 'visible' : ''}`}>
        <CodeFrame filename="About.java" lines={4}>
          <p className="about-summary">{profile.summary}</p>
        </CodeFrame>

        <div className="facts-panel">
          <div className="line">
            <span className="key">location</span>
            <span className="tok-punct">: </span>
            <span className="val">"{profile.location}"</span>
          </div>
          <div className="line">
            <span className="key">education</span>
            <span className="tok-punct">: </span>
            <span className="val">"{profile.education}"</span>
          </div>
          <div className="line">
            <span className="key">cgpa</span>
            <span className="tok-punct">: </span>
            <span className="val">"{profile.cgpa}"</span>
          </div>
          <div className="line">
            <span className="key">email</span>
            <span className="tok-punct">: </span>
            <span className="val">"{profile.email}"</span>
          </div>
        </div>
      </div>
    </section>
  )
}
