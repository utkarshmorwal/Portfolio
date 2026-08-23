import { useEffect, useRef, useState } from 'react'

/**
 * Reveals `text` one character at a time. Respects prefers-reduced-motion
 * by rendering the full text immediately.
 */
export function useTypewriter(text, { speed = 18, startDelay = 300 } = {}) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setOutput(text)
      setDone(true)
      return
    }
    if (started.current) return
    started.current = true

    let i = 0
    let intervalId
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1
        setOutput(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(startId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { output, done }
}
