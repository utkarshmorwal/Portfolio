import { useEffect, useState } from 'react'
import TitleBar from './components/TitleBar'
import TabNav, { SECTIONS } from './components/TabNav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ArrowUpIcon } from './components/Icons'
import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'
import {
  fetchProfile,
  fetchProjects,
  fetchExperience,
  fetchSkills,
  fetchCertifications,
} from './api'
import {
  fallbackProfile,
  fallbackProjects,
  fallbackExperience,
  fallbackSkills,
  fallbackCertifications,
} from './data/fallbackData'

const SECTION_IDS = SECTIONS.map((s) => s.id)

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const activeId = useScrollSpy(SECTION_IDS)

  const [profile, setProfile] = useState(fallbackProfile)
  const [projects, setProjects] = useState(fallbackProjects)
  const [experience, setExperience] = useState(fallbackExperience)
  const [skills, setSkills] = useState(fallbackSkills)
  const [certifications, setCertifications] = useState(fallbackCertifications)
  const [apiStatus, setApiStatus] = useState('checking')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    let cancelled = false

    Promise.all([
      fetchProfile(),
      fetchProjects(),
      fetchExperience(),
      fetchSkills(),
      fetchCertifications(),
    ]).then(([p, pr, ex, sk, ce]) => {
      if (cancelled) return
      setProfile(p.data)
      setProjects(pr.data)
      setExperience(ex.data)
      setSkills(sk.data)
      setCertifications(ce.data)
      setApiStatus(p.live ? 'live' : 'offline')
    })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page">
      <div className="ide-window">
        <TitleBar name={profile.name} apiStatus={apiStatus} theme={theme} toggleTheme={toggleTheme} />
        <TabNav activeId={activeId} />

        <div className="content">
          <Hero profile={profile} />
          <About profile={profile} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <Experience experience={experience} />
          <Certifications certifications={certifications} />
          <Contact profile={profile} />
        </div>

        <Footer name={profile.name} />
      </div>

      <button
        className={`back-to-top ${showTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        type="button"
      >
        <ArrowUpIcon />
      </button>
    </div>
  )
}
