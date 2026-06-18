import { motion } from 'framer-motion'

const PAIN_POINTS = [
  { emoji: '📱', title: 'Celular o dia todo', text: 'Seu filho está preso na tela e você não sabe como tirar sem criar uma guerra em casa?' },
  { emoji: '😔', title: 'Tardes sem graça', text: 'As tardes em casa viram uma batalha de "não sei o que fazer" e você fica sem resposta?' },
  { emoji: '💸', title: 'Atividades caras demais', text: 'Cadernos de colorir de qualidade custam caro na papelaria — e acabam em dois dias?' },
  { emoji: '🎁', title: 'Presente certeiro e barato', text: 'Quer dar algo especial pro seu filho, que ele realmente use, sem gastar muito?' },
]

export default function PainSection() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }
  const card = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section
      className="cosmos-bg section-pad"
      style={{ background: 'linear-gradient(180deg, #050311 0%, #0e0a2a 50%, #050311 100%)' }}
    >
      <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#ffffff',
          }}>
            Você Reconhece<br />
            <span className="gradient-text">Essa Situação?</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}
        >
          {PAIN_POINTS.map((p, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ x: 6 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px 24px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                cursor: 'default',
              }}
            >
              <span style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>{p.emoji}</span>
              <div>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#ffffff',
                  marginBottom: '4px',
                }}>{p.title}</p>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{p.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
          style={{
            padding: '28px 32px',
            borderRadius: '20px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(236,72,153,0.15))',
            border: '1px solid rgba(245,158,11,0.3)',
          }}
        >
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.2rem',
            fontWeight: 800,
            color: '#fde68a',
          }}>
            Todos esses problemas têm uma solução por R$37 🎉
          </p>
        </motion.div>
      </div>
    </section>
  )
}
