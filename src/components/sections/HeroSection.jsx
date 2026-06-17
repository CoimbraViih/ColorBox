import useScrollAnimation from '../../hooks/useScrollAnimation'
import CtaButton from '../ui/CtaButton'
import gsap from 'gsap'

const NOTEBOOKS = [
  { emoji: '❄️', name: 'Frozen',   color: '#818cf8', rotate: '-8deg' },
  { emoji: '💖', name: 'Barbie',   color: '#f472b6', rotate: '0deg', marginTop: '-12px' },
  { emoji: '🌺', name: 'Stitch',   color: '#60a5fa', rotate: '8deg' },
]

export default function HeroSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelectorAll('.hero-item'), {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
    })
  })

  return (
    <section
      ref={ref}
      className="stars-bg relative overflow-hidden px-5 py-14 text-center"
      style={{ background: 'linear-gradient(160deg, #1e1b4b 0%, #3b0764 50%, #1e1b4b 100%)' }}
    >
      <div className="glow-orb hero-item" style={{ width: '300px', height: '300px', background: 'rgba(124,58,237,0.25)', top: '-80px', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="glow-orb" style={{ width: '200px', height: '200px', background: 'rgba(219,39,119,0.15)', bottom: '0', right: '-50px' }} />

      <div className="relative mx-auto max-w-md">
        <div className="hero-item mb-5 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-purple-200"
          style={{ background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.3)' }}>
          ✨ ACESSO IMEDIATO APÓS A COMPRA
        </div>

        <h1 className="hero-item mb-4 text-4xl font-black leading-[1.1] text-white md:text-5xl">
          Seu Filho Vai{' '}
          <span className="gradient-text">Largar o Celular</span>
          {' '}por Horas
        </h1>

        <p className="hero-item mb-8 text-base font-semibold leading-relaxed text-purple-200 md:text-lg">
          30 Cadernos para Colorir em PDF com os Personagens que Ele Mais Ama —
          Frozen, Barbie, Stitch, Moana, Patrulha Canina e muito mais!
        </p>

        {/* Mockup cadernos */}
        <div className="hero-item relative mb-8 flex items-center justify-center gap-0">
          {NOTEBOOKS.map((nb) => (
            <div
              key={nb.name}
              className="float-anim relative -mx-2 flex h-40 w-28 flex-col items-center justify-center gap-2 rounded-2xl shadow-2xl md:h-48 md:w-36"
              style={{
                background: `linear-gradient(135deg, ${nb.color}, ${nb.color}cc)`,
                border: '3px solid rgba(255,255,255,0.3)',
                transform: `rotate(${nb.rotate})`,
                marginTop: nb.marginTop || '0',
                boxShadow: `0 8px 32px ${nb.color}66`,
                animationDelay: nb.marginTop ? '0.5s' : '0s',
              }}
            >
              <span className="text-5xl">{nb.emoji}</span>
              <span className="px-2 text-center text-xs font-extrabold text-white drop-shadow">{nb.name}</span>
            </div>
          ))}
          <span
            className="absolute -right-2 -top-3 z-10 rounded-full px-3 py-1 text-xs font-black text-purple-900"
            style={{ background: '#fde68a', boxShadow: '0 2px 12px rgba(253,230,138,0.6)' }}
          >
            30 cadernos!
          </span>
        </div>

        <div className="hero-item cta-section-anchor mb-4">
          <CtaButton size="xl" />
        </div>

        <p className="hero-item mb-5 text-sm font-semibold text-purple-300">
          ⚡ Oferta por tempo limitado &nbsp;|&nbsp; 🔒 Compra 100% segura
        </p>

        <div className="hero-item inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-yellow-300"
          style={{ background: 'rgba(253,230,138,0.1)', border: '1px solid rgba(253,230,138,0.2)' }}>
          ⭐⭐⭐⭐⭐ Mais de 3.200 mães satisfeitas
        </div>
      </div>
    </section>
  )
}
