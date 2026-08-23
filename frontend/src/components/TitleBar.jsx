import { SunIcon, MoonIcon } from './Icons'

const STATUS_TEXT = {
  checking: 'api: checking…',
  live: 'api: connected',
  offline: 'api: cached data',
}

export default function TitleBar({ name, apiStatus, theme, toggleTheme }) {
  return (
    <div className="titlebar">
      <div className="traffic-lights">
        <span />
        <span />
        <span />
      </div>
      <div className="titlebar-filename">
        Portfolio.java — <strong>{name}</strong>
      </div>
      <div className="titlebar-spacer" />
      <div className="status-pill" title="Connection to the Spring Boot API">
        <span className={`status-dot ${apiStatus}`} />
        {STATUS_TEXT[apiStatus]}
      </div>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        type="button"
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  )
}
