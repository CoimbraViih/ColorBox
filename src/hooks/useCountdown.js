import { useState, useEffect } from 'react'

const STORAGE_KEY = 'colorbox_countdown_end'
const DURATION_MS = 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000

function getOrCreateEnd() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const end = parseInt(stored, 10)
    if (end > Date.now()) return end
  }
  const end = Date.now() + DURATION_MS
  localStorage.setItem(STORAGE_KEY, String(end))
  return end
}

export default function useCountdown() {
  const [end] = useState(getOrCreateEnd)
  const [remaining, setRemaining] = useState(() => Math.max(0, end - Date.now()))

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, end - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [end])

  const hours = Math.floor(remaining / 3600000)
  const minutes = Math.floor((remaining % 3600000) / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)

  return { hours, minutes, seconds, isExpired: remaining === 0 }
}
