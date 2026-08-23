import { useMemo } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, CodeIcon } from './Icons'

function buildTokens(profile) {
  const className = (profile.name || 'Developer').replace(/[^a-zA-Z]/g, '')
  return [
    { t: 'public class ', c: 'tok-keyword' },
    { t: className, c: 'tok-type' },
    { t: ' implements ', c: 'tok-keyword' },
    { t: 'JavaDeveloper', c: 'tok-type' },
    { t: ' {\n\n', c: 'tok-punct' },
    { t: '    private ', c: 'tok-keyword' },
    { t: 'String ', c: 'tok-type' },
    { t: 'role ', c: 'tok-plain' },
    { t: '= ', c: 'tok-punct' },
    { t: `"${profile.title}"`, c: 'tok-string' },
    { t: ';\n', c: 'tok-punct' },
    { t: '    private ', c: 'tok-keyword' },
    { t: 'String ', c: 'tok-type' },
    { t: 'location ', c: 'tok-plain' },
    { t: '= ', c: 'tok-punct' },
    { t: `"${profile.location}"`, c: 'tok-string' },
    { t: ';\n', c: 'tok-punct' },
    { t: '    private ', c: 'tok-keyword' },
    { t: 'String ', c: 'tok-type' },
    { t: 'stack ', c: 'tok-plain' },
    { t: '= ', c: 'tok-punct' },
    { t: '"Spring Boot \u00b7 React \u00b7 MySQL \u00b7 JWT"', c: 'tok-string' },
    { t: ';\n\n', c: 'tok-punct' },
    { t: '    public ', c: 'tok-keyword' },
    { t: 'void ', c: 'tok-keyword' },
    { t: 'buildSoftware', c: 'tok-func' },
    { t: '() {\n', c: 'tok-punct' },
    { t: '        // shipping production-ready code\n', c: 'tok-comment' },
    { t: '    }\n', c: 'tok-punct' },
    { t: '}', c: 'tok-punct' },
  ]
}

export default function Hero({ profile }) {
  const tokens = useMemo(() => buildTokens(profile), [profile])
  const fullText = useMemo(() => tokens.map((tok) => tok.t).join(''), [tokens])
  const { output, done } = useTypewriter(fullText, { speed: 14, startDelay: 250 })

  return (
    <section id="hero" className="section hero" style={{ borderBottom: 'none' }}>
      <pre className="hero-code" aria-label={`${profile.name}, ${profile.title}`}>
        {done ? (
          tokens.map((tok, i) => (
            <span key={i} className={tok.c}>
              {tok.t}
            </span>
          ))
        ) : (
          <span className="tok-plain">{output}</span>
        )}
        <span className="cursor" aria-hidden="true" />
      </pre>

      <div className="hero-meta">
        <span>
          <MapPinIcon /> {profile.location}
        </span>
        <span>
          <CodeIcon /> {profile.education?.split(',')[0] || 'B.Tech CSE'}
        </span>
      </div>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
          View Projects
        </a>
        <a className="btn btn-ghost" href="/resume.pdf" download>
          <DownloadIcon /> Download Resume
        </a>
        <a className="btn btn-ghost" href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
          Get In Touch
        </a>
      </div>

      <div className="social-row">
        {profile.github && (
          <a className="social-icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
        )}
        {profile.linkedin && (
          <a className="social-icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        )}
        <a className="social-icon" href={`mailto:${profile.email}`} aria-label="Email">
          <MailIcon />
        </a>
        {profile.leetcode && (
          <a className="social-icon" href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
            <CodeIcon />
          </a>
        )}
      </div>
    </section>
  )
}

function scrollToSection(e, id) {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
