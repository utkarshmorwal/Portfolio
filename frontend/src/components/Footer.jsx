export default function Footer({ name }) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span>
        © {year} {name}. Built with Spring Boot &amp; React.
      </span>
      <span>
        utkarsh@portfolio:~$<span className="cursor" aria-hidden="true" />
      </span>
    </footer>
  )
}
