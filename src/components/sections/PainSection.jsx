import useScrollAnimation from '../../hooks/useScrollAnimation'
import gsap from 'gsap'

const PAIN_POINTS = [
  'Seu filho está sempre no celular ou tablet e você não sabe como mudar isso?',
  'As tardes em casa viram uma batalha de "não sei o que fazer"?',
  'Você quer uma atividade criativa, mas cadernos de papelaria são caros e acabam rápido?',
  'Queria dar algo especial pro seu filho mas sem gastar muito?',
]

export default function PainSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelectorAll('.pain-item'), {
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
    })
    gsap.from(el.querySelector('.pain-solution'), {
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el.querySelector('.pain-solution'),
        start: 'top 85%',
      },
    })
  })

  return (
    <section
      ref={ref}
      className="stars-bg relative overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(160deg, #2d1b69 0%, #1e1b4b 50%, #3b0764 100%)' }}
    >
      <div className="glow-orb" style={{ width: '250px', height: '250px', background: 'rgba(219,39,119,0.15)', top: '-40px', right: '-60px' }} />

      <div className="relative mx-auto max-w-md">
        <h2 className="mb-8 text-center text-3xl font-black leading-tight text-white md:text-4xl">
          Você Reconhece{' '}
          <span className="gradient-text">Essa Situação?</span>
        </h2>

        <div className="mb-8 flex flex-col gap-4">
          {PAIN_POINTS.map((point, i) => (
            <div
              key={i}
              className="pain-item flex items-start gap-3 rounded-2xl p-4"
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(167,139,250,0.15)',
              }}
            >
              <span className="mt-0.5 text-lg">❌</span>
              <p className="text-sm font-semibold leading-relaxed text-purple-100">{point}</p>
            </div>
          ))}
        </div>

        <div
          className="pain-solution rounded-2xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(253,230,138,0.15), rgba(251,146,60,0.15))',
            border: '1px solid rgba(253,230,138,0.3)',
          }}
        >
          <p className="text-xl font-black text-yellow-300">
            Seus problemas acabaram hoje! 🎉
          </p>
        </div>
      </div>
    </section>
  )
}
