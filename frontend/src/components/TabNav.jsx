export const SECTIONS = [
  { id: 'hero', label: 'Hero.java' },
  { id: 'about', label: 'About.java' },
  { id: 'skills', label: 'Skills.java' },
  { id: 'projects', label: 'Projects.java' },
  { id: 'experience', label: 'Experience.java' },
  { id: 'certifications', label: 'Certifications.java' },
  { id: 'contact', label: 'Contact.java' },
]

export default function TabNav({ activeId }) {
  function handleClick(e, id) {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="tabbar" aria-label="Section navigation">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`tab ${activeId === s.id ? 'active' : ''}`}
          onClick={(e) => handleClick(e, s.id)}
        >
          {s.label}
        </a>
      ))}
    </nav>
  )
}
