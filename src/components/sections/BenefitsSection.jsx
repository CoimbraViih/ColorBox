import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import CtaButton from '../ui/CtaButton'
import gsap from 'gsap'

const BENEFITS = [
  {
    icon: '✨',
    headline: 'Crianças mais calmas em 15 minutos',
    text: 'A atividade de colorir ativa o foco e reduz a ansiedade. Você vai notar a diferença na primeira vez.',
  },
  {
    icon: '🎨',
    headline: 'Personagens que elas já conhecem e amam',
    text: 'Frozen, Barbie, Stitch, Patrulha Canina, Pokémon e muito mais — o que a sua criança ama, está aqui.',
  },
  {
    icon: '💝',
    headline: 'O presente perfeito que educa sem tela',
    text: 'Uma compra. Infinitas impressões. Você pode usar com vários filhos, na escola, na casa da avó.',
  },
]

export default function BenefitsSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelectorAll('.benefit-card'), {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
      },
    })
  })

  return (
    <section
      ref={ref}
      className="stars-bg relative overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(160deg, #1e1b4b 0%, #2d1b69 100%)' }}
    >
      <div className="glow-orb" style={{ width: '200px', height: '200px', background: 'rgba(244,114,182,0.2)', top: '20px', left: '-40px' }} />

      <div className="relative mx-auto max-w-md">
        <div className="mb-2 text-center">
          <span className="text-3xl font-black" style={{ color: '#f472b6' }}>Filhos VÃO AMAR</span>
        </div>
        <div className="mb-8 text-center">
          <span className="text-3xl font-black" style={{ color: '#fb923c' }}>Você VAI AGRADECER</span>
        </div>

        <p className="mb-8 rounded-2xl p-4 text-center text-sm font-semibold text-purple-100"
          style={{ background: 'rgba(251,146,60,0.12)', border: '1px solid rgba(251,146,60,0.2)' }}>
          Transforme momentos de agitação em pura diversão criativa com os 30 Cadernos ColorBox.
        </p>

        <div className="mb-8 flex flex-col gap-4">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={i}
              className="benefit-card rounded-2xl p-5"
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(167,139,250,0.2)',
              }}
              whileHover={{
                borderColor: 'rgba(167,139,250,0.5)',
                boxShadow: '0 0 24px rgba(167,139,250,0.2)',
              }}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="text-2xl">{b.icon}</span>
                <h3 className="font-black text-white">{b.headline}</h3>
              </div>
              <p className="text-sm leading-relaxed text-purple-200">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <CtaButton label="QUERO O COLORBOX POR R$37 →" size="xl" />
      </div>
    </section>
  )
}
