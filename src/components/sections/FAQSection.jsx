import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQS } from '../../constants/faqs'

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        background: 'rgba(0,0,0,0.3)',
        border: `1px solid ${open ? 'rgba(167,139,250,0.5)' : 'rgba(167,139,250,0.2)'}`,
        transition: 'border-color 0.2s',
      }}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className="font-bold text-white">{faq.question}</span>
        <motion.span
          className="flex-shrink-0 text-purple-300 text-lg"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-purple-200">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section
      className="stars-bg relative overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(160deg, #1e1b4b 0%, #2d1b69 100%)' }}
    >
      <div className="relative mx-auto max-w-md">
        <h2 className="mb-8 text-center text-3xl font-black text-white">
          Perguntas <span className="gradient-text">Frequentes</span>
        </h2>

        <div className="flex flex-col gap-3">
          {FAQS.map(faq => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
