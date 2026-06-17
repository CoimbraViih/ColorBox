import { motion } from 'framer-motion'
import { HOTMART_CHECKOUT_URL } from '../../constants/links'

export default function CtaButton({ label = 'QUERO AGORA POR R$37 →', size = 'lg', className = '' }) {
  const sizeClasses = size === 'xl'
    ? 'text-lg py-5 px-8 min-h-[64px]'
    : 'text-base py-4 px-6 min-h-[56px]'

  return (
    <motion.a
      href={HOTMART_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-pulse inline-flex w-full items-center justify-center rounded-2xl font-black text-white ${sizeClasses} ${className}`}
      style={{ background: 'linear-gradient(135deg, #00C851, #00a040)' }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => {
        if (typeof fbq !== 'undefined') fbq('track', 'InitiateCheckout')
      }}
    >
      {label}
    </motion.a>
  )
}
