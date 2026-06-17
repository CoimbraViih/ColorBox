import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../../constants/testimonials'

export default function TestimonialsSection() {
  return (
    <section
      className="cosmos-bg section-pad"
      style={{ background: '#050311' }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <div style={{ marginBottom: '12px', color: '#f59e0b', fontSize: '1.5rem' }}>⭐⭐⭐⭐⭐</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
          }}>
            O Que as Mães<br />
            <span className="gradient-text">Estão Falando</span>
          </h2>
          <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
            Avaliação média ⭐ 4.9/5 de mais de 3.200 famílias
          </p>
        </motion.div>

        {/* Cards scroll horizontal mobile */}
        <div style={{ marginLeft: '-20px', marginRight: '-20px', overflowX: 'auto', paddingLeft: '20px', paddingBottom: '16px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            style={{ display: 'flex', gap: '16px', width: 'max-content', paddingRight: '20px' }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -4 }}
                style={{
                  width: '300px',
                  padding: '24px',
                  borderRadius: '20px',
                  flexShrink: 0,
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ color: '#f59e0b', fontSize: '0.9rem', marginBottom: '12px' }}>⭐⭐⭐⭐⭐</div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '20px',
                }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    overflow: 'hidden',
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                  }}>
                    {t.avatar
                      ? <img src={t.avatar} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : t.name[0]
                    }
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#ffffff' }}>{t.name}</p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>{t.role || 'Mãe'}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
