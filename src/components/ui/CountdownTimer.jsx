import { motion } from 'framer-motion'
import useCountdown from '../../hooks/useCountdown'

function Digit({ value, label }) {
  const formatted = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center gap-1">
      <motion.div
        key={formatted}
        className="flex items-center justify-center rounded-xl font-black text-white"
        style={{
          background: 'rgba(0,0,0,0.5)',
          border: '1px solid rgba(167,139,250,0.3)',
          minWidth: '72px',
          fontSize: '3rem',
          lineHeight: 1,
          padding: '12px 8px',
          boxShadow: '0 0 20px rgba(167,139,250,0.2)',
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {formatted}
      </motion.div>
      <span className="text-[10px] font-bold tracking-widest text-purple-300">{label}</span>
    </div>
  )
}

export default function CountdownTimer() {
  const { hours, minutes, seconds } = useCountdown()

  return (
    <div className="flex items-start justify-center gap-3">
      <Digit value={hours} label="HORAS" />
      <span className="mt-3 text-4xl font-black text-purple-300">:</span>
      <Digit value={minutes} label="MIN" />
      <span className="mt-3 text-4xl font-black text-purple-300">:</span>
      <Digit value={seconds} label="SEG" />
    </div>
  )
}
