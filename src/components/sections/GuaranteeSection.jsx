import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import gsap from 'gsap'

const SEALS = ['Hotmart Secured', 'Pagamento Seguro', 'Satisfação Garantida']

export default function GuaranteeSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelector('.shield-icon'), {
      scale: 0,
      rotation: -15,
      opacity: 0,
      duration: 0.8,
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
      className="stars-bg relative overflow-hidden px-5 py-16 text-center"
      style={{ background: 'linear-gradient(160deg, #2d1b69 0%, #1e1b4b 100%)' }}
    >
      <div className="glow-orb" style={{ width: '200px', height: '200px', background: 'rgba(0,200,81,0.12)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      <div className="relative mx-auto max-w-md">
        <div className="shield-icon mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full text-5xl"
          style={{
            background: 'linear-gradient(135deg, #00C851, #00a040)',
            boxShadow: '0 0 40px rgba(0,200,81,0.5)',
          }}>
          🛡️
        </div>

        <h2 className="mb-4 text-3xl font-black text-white">
          Garantia Incondicional de{' '}
          <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(90deg, #00C851, #00e860)' }}>7 Dias</span>
        </h2>

        <p className="mb-8 leading-relaxed text-purple-200">
          Compra 100% segura. Se por qualquer motivo você não ficar satisfeita, basta enviar um e-mail em até 7 dias e devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {SEALS.map((seal) => (
            <motion.div
              key={seal}
              className="rounded-xl px-4 py-2 text-sm font-bold text-purple-200"
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(167,139,250,0.25)',
              }}
              whileHover={{ borderColor: 'rgba(0,200,81,0.5)', color: '#ffffff' }}
            >
              ✅ {seal}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
