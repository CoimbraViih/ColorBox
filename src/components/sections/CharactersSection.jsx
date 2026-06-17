import useScrollAnimation from '../../hooks/useScrollAnimation'
import CtaButton from '../ui/CtaButton'
import NotebookCard from '../ui/NotebookCard'
import { FEATURED_CHARACTERS } from '../../constants/characters'
import gsap from 'gsap'

export default function CharactersSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelectorAll('.notebook-item'), {
      y: 24,
      opacity: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el.querySelector('.notebooks-grid'),
        start: 'top 80%',
      },
    })
  })

  return (
    <section
      ref={ref}
      className="stars-bg relative overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(160deg, #3b0764 0%, #2d1b69 50%, #1e1b4b 100%)' }}
    >
      <div className="glow-orb" style={{ width: '250px', height: '250px', background: 'rgba(124,58,237,0.3)', top: '-60px', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="glow-orb" style={{ width: '180px', height: '120px', background: 'rgba(219,39,119,0.2)', bottom: '40px', right: '-30px' }} />

      <div className="relative mx-auto max-w-md">
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-purple-300"
            style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.25)' }}>
            🎁 O Que Você Recebe Hoje
          </span>
        </div>

        <h2 className="mb-2 text-center text-3xl font-black leading-tight text-white md:text-4xl">
          <span className="gradient-text">30 Cadernos para Colorir</span>
        </h2>
        <p className="mb-2 text-center text-lg font-semibold text-purple-200">
          Mais de <strong className="text-white">900 páginas</strong> de ilustrações
        </p>

        <p className="mb-6 text-center text-sm text-purple-300">
          Personagens que toda criança conhece e ama — prontos para imprimir e colorir quantas vezes quiser.
        </p>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {[['30', 'cadernos'], ['900+', 'páginas'], ['🖨️', 'Imprime infinito']].map(([num, label]) => (
            <div key={label} className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span style={{ color: '#fde68a', fontSize: '14px' }}>{num}</span>
              <span className="text-purple-200">{label}</span>
            </div>
          ))}
        </div>

        <div className="notebooks-grid mb-6 grid grid-cols-4 gap-2">
          {FEATURED_CHARACTERS.map((character, i) => (
            <div key={character.id} className="notebook-item">
              <NotebookCard character={character} index={i} />
            </div>
          ))}
          {/* Card "+mais" */}
          <div
            className="notebook-item flex flex-col items-center justify-center rounded-xl p-2 text-center"
            style={{
              aspectRatio: '3/4',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(219,39,119,0.4))',
              border: '1px solid rgba(167,139,250,0.3)',
            }}
          >
            <span className="text-xl font-black" style={{ color: '#fde68a' }}>+20</span>
            <span className="text-[9px] font-bold text-purple-200 leading-tight mt-1">cadernos</span>
            <span className="text-[8px] text-purple-300 leading-tight mt-1">Dinos, Harry Potter e mais...</span>
          </div>
        </div>

        <CtaButton label="QUERO OS 30 CADERNOS POR R$37 →" size="xl" />
      </div>
    </section>
  )
}
