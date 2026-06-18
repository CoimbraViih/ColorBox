import { motion } from 'framer-motion'
import CtaButton from '../ui/CtaButton'

export default function FooterSection() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 20px 48px',
      background: 'linear-gradient(180deg, #050311 0%, #1a0a1a 40%, #2d0a1a 70%, #1a0510 100%)',
    }}>

      {/* Glow dourado */}
      <div className="glow-orb" style={{
        width: '400px',
        height: '400px',
        background: 'rgba(245,158,11,0.12)',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
      }} />

      <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '8px',
          }}>
            Transforme as Tardes<br />
            <span style={{ color: '#ec4899' }}>da Sua Criança Hoje</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#f59e0b', fontWeight: 600, marginBottom: '36px' }}>
            De R$ 97,00 por R$ 37,00 — por tempo limitado ⏰
          </p>

          {/* Product card */}
          <div style={{
            background: 'rgba(255,255,255,0.07)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '32px 28px',
            marginBottom: '32px',
          }}>
            <div style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '16px',
              lineHeight: 2,
            }}>
              ✅ 30 cadernos temáticos em PDF<br />
              ✅ 900+ páginas para colorir<br />
              ✅ Acesso imediato via Hotmart Club<br />
              ✅ Imprime infinitas vezes
            </div>
            <div style={{ marginBottom: '8px' }}>
              <span style={{ textDecoration: 'line-through', color: 'rgba(255,255,255,0.35)', fontSize: '1rem' }}>De R$97</span>
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(3rem, 10vw, 5rem)',
              fontWeight: 800,
              color: '#00C851',
              lineHeight: 1,
              marginBottom: '4px',
            }}>R$37</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
              pagamento único · sem mensalidade
            </div>
            <div className="cta-section-anchor">
              <CtaButton label="QUERO AGORA POR R$37 →" size="xl" />
            </div>
          </div>
        </motion.div>

        {/* Footer bottom */}
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', lineHeight: 2 }}>
          <p>Copyright © 2026 ColorBox — Todos os direitos reservados</p>
          <p>Suporte: <a href="mailto:viihcoimbra7x@gmail.com" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>viihcoimbra7x@gmail.com</a></p>
        </div>
      </div>
    </section>
  )
}
