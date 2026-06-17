import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HOTMART_CHECKOUT_URL } from '../../constants/links'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Aparece após 3 segundos
    const t = setTimeout(() => setVisible(true), 3000)

    // Some quando .cta-section-anchor está visível
    const observe = () => {
      const anchors = document.querySelectorAll('.cta-section-anchor')
      if (!anchors.length) return

      const obs = new IntersectionObserver(
        (entries) => setHidden(entries.some(e => e.isIntersecting)),
        { threshold: 0.5 }
      )
      anchors.forEach(a => obs.observe(a))
      return obs
    }

    // Pequeno delay para o DOM estar montado
    const obsTimer = setTimeout(() => {
      const obs = observe()
      return () => obs && obs.disconnect()
    }, 500)

    return () => {
      clearTimeout(t)
      clearTimeout(obsTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && !hidden && (
        <motion.div
          className="md:hidden"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            padding: '12px 16px 20px',
            background: 'rgba(5,3,17,0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 250, damping: 30 }}
        >
          <motion.a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              minHeight: '52px',
              background: 'linear-gradient(135deg, #00C851, #00a843)',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              borderRadius: '12px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              if (typeof fbq !== 'undefined') fbq('track', 'InitiateCheckout')
            }}
          >
            QUERO O COLORBOX
            <span style={{ color: '#fde68a', fontWeight: 900 }}>R$37</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
