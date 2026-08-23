export default function CodeFrame({ filename, lines = 1, children }) {
  const gutterNumbers = Array.from({ length: lines }, (_, i) => i + 1)

  return (
    <div className="code-frame">
      <div className="code-frame-header">{filename}</div>
      <div className="code-frame-body">
        <div className="gutter" aria-hidden="true">
          {gutterNumbers.map((n) => (
            <div key={n}>{String(n).padStart(2, '0')}</div>
          ))}
        </div>
        <div className="code-frame-lines">{children}</div>
      </div>
    </div>
  )
}
