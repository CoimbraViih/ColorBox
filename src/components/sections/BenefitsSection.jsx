import { motion } from 'framer-motion'
import { Printer, Heart, Zap, Smartphone, Users } from 'lucide-react'
import CtaButton from '../ui/CtaButton'

const BENEFITS = [
  {
    icon: Printer,
    color: '#a78bfa',
    bg: 'rgba(124,58,237,0.15)',
    title: 'Imprima Infinitas Vezes',
    text: 'Os PDFs são seus para sempre. Imprima uma vez, dez vezes, cem vezes — ideal para vários filhos ou sala de aula.',
  },
  {
    icon: Zap,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.15)',
    title: 'Acesso em 2 Minutos',
    text: 'Após a compra, acesso imediato via Hotmart Club. Sem esperar, sem frete, sem complicação.',
  },
  {
    icon: Heart,
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.15)',
    title: '30 Temas Favoritos',
    text: 'Frozen, Barbie, Peppa Pig, Stitch, Moana, Arco-íris e muito mais — personagens que as crianças AMAM.',
  },
  {
    icon: Smartphone,
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.15)',
    title: 'Funciona em Qualquer Tela',
    text: 'Celular, tablet ou computador — qualquer aparelho abre PDF. Baixe uma vez e use para sempre, mesmo sem internet.',
  },
  {
    icon: Users,
    color: '#00C851',
    bg: 'rgba(0,200,81,0.15)',
    title: 'Ideal Para Sala de Aula',
    text: 'Professoras usam com a turma toda. Um único acesso, impressões ilimitadas — atividade garantida para todas as aulas.',
  },
]

export default function BenefitsSection() {
  return (
    <section
      className="cosmos-bg section-pad"
      style={{ background: '#050311' }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Glow orb decorativo */}
        <div className="glow-orb" style={{ width: '300px', height: '300px', background: 'rgba(124,58,237,0.12)', top: '-60px', right: '-80px' }} />

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
            marginBottom: '16px',
            color: '#ffffff',
          }}>
            Por Que as Mães<br />
            <span style={{ color: '#ec4899' }}>Estão Amando?</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto' }}>
            Atividade criativa, offline, sem assinatura e que dura para sempre.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}
        >
          {BENEFITS.map(({ icon: Icon, color, bg, title, text }, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
              }}
              whileHover={{ y: -4 }}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                padding: '24px',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon size={24} color={color} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '6px',
                }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ textAlign: 'center' }}>
          <CtaButton label="QUERO O COLORBOX POR R$37 →" size="xl" />
        </div>
      </div>
    </section>
  )
}
