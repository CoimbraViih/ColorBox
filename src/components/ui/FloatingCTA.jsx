import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HOTMART_CHECKOUT_URL } from '../../constants/links'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Aparece após 2s
    const t = setTimeout(() => setVisible(true), 2000)

    // Oculta quando qualquer .cta-section-anchor está no viewport
    const anchors = document.querySelectorAll('.cta-section-anchor')
    if (!anchors.length) return () => clearTimeout(t)

    const obs = new IntersectionObserver(
      (entries) => setHidden(entries.some(e => e.isIntersecting)),
      { threshold: 0.5 }
    )
    anchors.forEach(a => obs.observe(a))

    return () => {
      clearTimeout(t)
      obs.disconnect()
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && !hidden && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse flex w-full items-center justify-center rounded-2xl py-4 text-base font-black text-white"
            style={{ background: 'linear-gradient(135deg, #00C851, #00a040)', minHeight: '56px' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              if (typeof fbq !== 'undefined') fbq('track', 'InitiateCheckout')
            }}
          >
            QUERO POR R$37 →
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
