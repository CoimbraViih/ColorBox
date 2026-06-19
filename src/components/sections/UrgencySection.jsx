import { motion } from 'framer-motion'
import CountdownTimer from '../ui/CountdownTimer'
import CtaButton from '../ui/CtaButton'

export default function UrgencySection() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 20px',
      background: 'linear-gradient(180deg, #050311 0%, #0d0515 50%, #050311 100%)',
    }}>

      {/* Holofote central */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '99px',
            marginBottom: '24px',
            background: 'rgba(239,68,68,0.2)',
            border: '1px solid rgba(239,68,68,0.3)',
            color: '#fca5a5',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}>
            ⚡ OFERTA POR TEMPO LIMITADO
          </span>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '12px',
          }}>
            Essa Oferta Encerra Em:
          </h2>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
          style={{ margin: '32px 0' }}
        >
          <CountdownTimer />
        </motion.div>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ marginBottom: '32px' }}
        >
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'line-through', marginBottom: '4px' }}>
            De R$97
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '8px' }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Por apenas</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: 800, color: '#00C851', lineHeight: 1 }}>R$37</span>
          </div>
          <span style={{
            display: 'inline-block',
            marginTop: '8px',
            padding: '4px 16px',
            borderRadius: '99px',
            background: 'rgba(0,200,81,0.15)',
            border: '1px solid rgba(0,200,81,0.3)',
            color: '#00C851',
            fontSize: '13px',
            fontWeight: 700,
          }}>
            💰 Você economiza R$60 (60% OFF)
          </span>
        </motion.div>

        <div className="cta-section-anchor">
          <CtaButton label="GARANTIR MINHA OFERTA AGORA →" size="xl" />
        </div>

        <p style={{
          marginTop: '16px',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.4)',
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <span>🔒 Pagamento seguro</span>
          <span>⚡ Acesso imediato</span>
          <span>🎁 30 cadernos</span>
        </p>
      </div>
    </section>
  )
}
