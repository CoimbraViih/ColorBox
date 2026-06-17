import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../../constants/testimonials'

export default function TestimonialsSection() {
  return (
    <section
      className="stars-bg relative overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(160deg, #1e1b4b 0%, #2d1b69 100%)' }}
    >
      <div className="glow-orb" style={{ width: '220px', height: '220px', background: 'rgba(244,114,182,0.15)', top: '-30px', right: '-40px' }} />

      <div className="relative mx-auto max-w-md">
        <h2 className="mb-2 text-center text-3xl font-black text-white">
          O Que as Mães{' '}
          <span className="gradient-text">Estão Falando:</span>
        </h2>
        <p className="mb-8 text-center text-sm font-bold text-yellow-300">
          ⭐⭐⭐⭐⭐ Avaliação média 4.9/5
        </p>

        {/* Scroll horizontal no mobile */}
        <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:flex-col md:px-0">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              className="w-72 flex-shrink-0 rounded-2xl p-5 md:w-full"
              style={{
                background: 'rgba(0,0,0,0.35)',
                border: '1px solid rgba(167,139,250,0.2)',
              }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-2xl"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-black text-white">{t.name}</p>
                  <p className="text-xs text-purple-300">{t.role}</p>
                </div>
              </div>
              <p className="mb-2 text-xs font-bold text-yellow-300">⭐⭐⭐⭐⭐</p>
              <p className="text-sm leading-relaxed text-purple-100">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
