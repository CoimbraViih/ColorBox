import { motion } from 'framer-motion'
import { HOTMART_CHECKOUT_URL } from '../../constants/links'

export default function CtaButton({ label = 'QUERO AGORA POR R$37 →', size = 'lg' }) {
  const sizeStyles = size === 'xl'
    ? { minHeight: '68px', fontSize: '1.25rem', padding: '16px 40px' }
    : { minHeight: '56px', fontSize: '1.1rem', padding: '12px 32px' }

  return (
    <motion.a
      href={HOTMART_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-pulse"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        background: 'linear-gradient(135deg, #00C851, #00a843)',
        color: '#ffffff',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        borderRadius: '14px',
        textDecoration: 'none',
        cursor: 'pointer',
        ...sizeStyles,
      }}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => {
        if (typeof fbq !== 'undefined') fbq('track', 'InitiateCheckout')
      }}
    >
      {label}
    </motion.a>
  )
}
