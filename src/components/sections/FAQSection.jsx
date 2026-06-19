import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FAQS } from '../../constants/faqs'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      borderRadius: '16px',
      overflow: 'hidden',
      border: `1px solid ${open ? 'rgba(167,139,250,0.4)' : 'rgba(255,255,255,0.07)'}`,
      background: open ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.04)',
      transition: 'all 0.3s ease',
      marginBottom: '12px',
    }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 24px',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '16px',
        }}
      >
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '0.95rem',
          lineHeight: 1.4,
        }}>{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ fontSize: '1.4rem', color: '#a78bfa', flexShrink: 0, lineHeight: 1 }}
        >+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              padding: '0 24px 20px',
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
            }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section
      className="cosmos-bg section-pad"
      style={{ background: '#050311' }}
    >
      <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
          }}>
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {FAQS.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
