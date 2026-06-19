import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CtaButton from '../ui/CtaButton'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section
      ref={ref}
      className="cosmos-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #0d0820 0%, #050311 40%, #0a0520 100%)',
      }}
    >
      {/* Parallax background orbs */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'rgba(124,58,237,0.2)', top: '-100px', left: '-100px' }} />
        <div className="glow-orb" style={{ width: '400px', height: '400px', background: 'rgba(236,72,153,0.15)', top: '20%', right: '-80px' }} />
        <div className="glow-orb" style={{ width: '300px', height: '300px', background: 'rgba(6,182,212,0.1)', bottom: '10%', left: '20%' }} />
      </motion.div>

      <motion.div
        style={{ opacity, position: 'relative', zIndex: 10, maxWidth: '520px', margin: '0 auto', padding: '96px 20px', textAlign: 'center' }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(167,139,250,0.3)',
            borderRadius: '99px', padding: '6px 16px', fontSize: '13px', fontWeight: 600,
            color: '#a78bfa', marginBottom: '24px',
          }}>
            ✨ Kit Exclusivo · 30 Cadernos · PDF Imediato
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 7vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            color: '#ffffff',
          }}
        >
          Seu Filho Vai{' '}
          <span className="gradient-text">Largar o Celular</span>
          {' '}Sozinho
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '36px',
            maxWidth: '440px',
            margin: '0 auto 36px',
          }}
        >
          30 cadernos temáticos com os personagens favoritos das crianças — imprima infinitas vezes e transforme as tardes em casa.
        </motion.p>

        {/* 3 notebook mockups flutuando */}
        <motion.div
          variants={item}
          style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', alignItems: 'flex-end' }}
        >
          {[
            { img: '/cadernos/lilo.png', rot: '-8deg', delay: 0, size: '110px' },
            { img: '/cadernos/moana.png', rot: '0deg', delay: 0.2, size: '130px' },
            { img: '/cadernos/barbie.png', rot: '8deg', delay: 0.4, size: '110px' },
          ].map(({ img, rot, delay, size }, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay, ease: 'easeInOut' }}
              style={{
                width: size,
                aspectRatio: '3/4',
                borderRadius: '12px',
                overflow: 'hidden',
                transform: `rotate(${rot})`,
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                border: '2px solid rgba(255,255,255,0.1)',
                flexShrink: 0,
              }}
            >
              <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="cta-section-anchor">
          <CtaButton label="QUERO AGORA POR R$37 →" size="xl" />
        </motion.div>

        {/* Trust line */}
        <motion.div
          variants={item}
          style={{
            marginTop: '20px',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <span>🔒 Pagamento seguro</span>
          <span>⚡ Acesso imediato</span>
          <span>⭐ 3.200+ famílias</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
