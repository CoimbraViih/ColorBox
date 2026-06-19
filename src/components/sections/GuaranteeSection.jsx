import { motion } from 'framer-motion'
import { Shield, RefreshCw, Clock } from 'lucide-react'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import gsap from 'gsap'

const SEALS = [
  { icon: Shield, label: 'Hotmart Secured', color: '#a78bfa' },
  { icon: RefreshCw, label: 'Dinheiro de Volta', color: '#00C851' },
  { icon: Clock, label: '7 Dias Garantidos', color: '#f59e0b' },
]

export default function GuaranteeSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelector('.shield-box'), {
      scale: 0,
      rotation: -20,
      opacity: 0,
      duration: 0.9,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
      },
    })
  })

  return (
    <section
      ref={ref}
      className="cosmos-bg section-pad"
      style={{ background: 'linear-gradient(180deg, #050311 0%, #0a1a0a 50%, #050311 100%)' }}
    >
      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Shield icon */}
        <div className="shield-box" style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00C851, #00a040)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 28px',
          boxShadow: '0 0 60px rgba(0,200,81,0.35), 0 20px 40px rgba(0,200,81,0.2)',
        }}>
          <Shield size={48} color="#ffffff" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            Garantia Incondicional de{' '}
            <span style={{ color: '#00C851' }}>7 Dias</span>
          </h2>

          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.8,
            maxWidth: '440px',
            margin: '0 auto 40px',
          }}>
            Se por qualquer motivo você não ficar 100% satisfeita com os cadernos, é só entrar em contato com o suporte da Hotmart em até 7 dias e receber todo o seu dinheiro de volta. Sem perguntas, sem burocracia.
          </p>

          {/* Seals */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {SEALS.map(({ icon: Icon, label, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.05 }}
                style={{
                  padding: '16px 20px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${color}33`,
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
              >
                <Icon size={20} color={color} />
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  color: '#ffffff',
                }}>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
