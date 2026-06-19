import { motion } from 'framer-motion'
import { FEATURED_CHARACTERS } from '../../constants/characters'
import NotebookCard from '../ui/NotebookCard'
import CtaButton from '../ui/CtaButton'

export default function CharactersSection() {
  return (
    <section
      className="cosmos-bg section-pad"
      style={{ background: 'linear-gradient(180deg, #050311 0%, #0e0a2a 100%)' }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '16px' }}
        >
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '99px',
            background: 'rgba(245,158,11,0.15)',
            border: '1px solid rgba(245,158,11,0.3)',
            color: '#fde68a',
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '16px',
          }}>
            🎁 O Que Você Recebe Hoje
          </span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
          }}>
            <span className="gradient-text">30 Cadernos</span> Temáticos<br />
            Para Colorir
          </h2>
        </motion.div>

        {/* Stats pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}
        >
          {['900+ páginas', '30 temas', 'PDF de alta qualidade'].map((s, i) => (
            <span key={i} style={{
              padding: '6px 14px',
              borderRadius: '99px',
              fontSize: '12px',
              fontWeight: 600,
              background: 'rgba(167,139,250,0.12)',
              border: '1px solid rgba(167,139,250,0.2)',
              color: '#a78bfa',
            }}>{s}</span>
          ))}
        </motion.div>

        {/* Grid 4 colunas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}
        >
          {FEATURED_CHARACTERS.map((char) => (
            <motion.div
              key={char.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <NotebookCard character={char} />
            </motion.div>
          ))}

          {/* "+14 mais!" extra card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
            }}
            whileHover={{ scale: 1.05, y: -4 }}
            style={{
              aspectRatio: '3/4',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(236,72,153,0.4))',
              border: '1px solid rgba(167,139,250,0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default',
            }}
          >
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 800,
              color: '#fde68a',
              textAlign: 'center',
              lineHeight: 1.2,
            }}>+14<br />mais!</p>
          </motion.div>
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <CtaButton label="QUERO OS 30 CADERNOS POR R$37 →" size="xl" />
        </div>
      </div>
    </section>
  )
}
