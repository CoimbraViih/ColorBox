import { motion } from 'framer-motion'
import CountdownTimer from '../ui/CountdownTimer'
import CtaButton from '../ui/CtaButton'

export default function UrgencySection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 text-center"
      style={{ background: 'linear-gradient(160deg, #0a0815 0%, #1a0a2e 50%, #0a0815 100%)' }}
    >
      {/* Holofote central */}
      <div className="glow-orb" style={{ width: '400px', height: '200px', background: 'rgba(167,139,250,0.12)', top: '0', left: '50%', transform: 'translateX(-50%)', filter: 'blur(60px)' }} />

      <div className="relative mx-auto max-w-md">
        <motion.h2
          className="mb-6 text-2xl font-black text-white md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ⚡ ATENÇÃO: Oferta Especial{' '}
          <span className="gradient-text">Encerrando Em:</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <CountdownTimer />
        </motion.div>

        <div className="mb-8">
          <p className="mb-1 text-lg font-bold text-purple-400 line-through">De R$97</p>
          <p className="mb-1 text-5xl font-black text-white">
            R$<span className="gradient-text" style={{ backgroundImage: 'linear-gradient(90deg, #00C851, #00e860)' }}>37</span>
          </p>
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black"
            style={{ background: 'rgba(0,200,81,0.15)', border: '1px solid rgba(0,200,81,0.3)', color: '#00C851' }}
          >
            Economia de R$60 (60% OFF)
          </div>
        </div>

        <div className="cta-section-anchor mb-4">
          <CtaButton label="GARANTIR MINHA OFERTA AGORA →" size="xl" />
        </div>

        <p className="text-xs font-semibold text-purple-400">
          🔒 Pagamento seguro &nbsp;|&nbsp; ⚡ Acesso imediato &nbsp;|&nbsp; 🎁 30 cadernos incluídos
        </p>
      </div>
    </section>
  )
}
