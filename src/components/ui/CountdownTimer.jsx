import { motion, AnimatePresence } from 'framer-motion'
import useCountdown from '../../hooks/useCountdown'

function Digit({ value, label }) {
  const formatted = String(value).padStart(2, '0')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={formatted}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="gradient-text-gold"
            style={{
              display: 'block',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              lineHeight: 1,
            }}
          >
            {formatted}
          </motion.span>
        </AnimatePresence>
      </div>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: '10px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'rgba(255,255,255,0.6)',
      }}>
        {label}
      </span>
    </div>
  )
}

export default function CountdownTimer() {
  const { hours, minutes, seconds } = useCountdown()

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <Digit value={hours} label="HORAS" />
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
        color: '#f59e0b',
        opacity: 0.6,
        lineHeight: 1,
        marginBottom: '20px',
      }}>:</span>
      <Digit value={minutes} label="MIN" />
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
        color: '#f59e0b',
        opacity: 0.6,
        lineHeight: 1,
        marginBottom: '20px',
      }}>:</span>
      <Digit value={seconds} label="SEG" />
    </div>
  )
}
