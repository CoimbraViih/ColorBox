import { useState, useEffect } from 'react'

const DURATION_MS = 15 * 60 * 1000

export default function useCountdown() {
  const [end] = useState(() => Date.now() + DURATION_MS)
  const [remaining, setRemaining] = useState(DURATION_MS)

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, end - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [end])

  const minutes = Math.floor(remaining / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)

  return { hours: 0, minutes, seconds, isExpired: remaining === 0 }
}
