import CtaButton from '../ui/CtaButton'

export default function FooterSection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 text-center"
      style={{ background: 'linear-gradient(160deg, #7c2d12 0%, #831843 35%, #4c1d95 70%, #1e1b4b 100%)' }}
    >
      <div className="glow-orb" style={{ width: '300px', height: '200px', background: 'rgba(251,146,60,0.2)', top: '0', left: '50%', transform: 'translateX(-50%)', filter: 'blur(50px)' }} />

      <div className="relative mx-auto max-w-md">
        <h2 className="mb-2 text-3xl font-black text-white md:text-4xl">
          Oferta Não Vai Durar{' '}
          <span className="gradient-text">Para Sempre!</span>
        </h2>
        <p className="mb-8 text-lg font-bold text-orange-300">
          Compre Agora e Garanta 60% OFF 🏷️
        </p>

        <div
          className="mb-8 rounded-2xl p-6"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div className="mb-3 flex justify-center gap-2 text-sm font-semibold text-purple-200">
            <span>✅ 30 cadernos</span>
            <span>·</span>
            <span>✅ 900+ páginas</span>
            <span>·</span>
            <span>✅ Acesso imediato</span>
          </div>
          <div className="mb-4">
            <span className="text-4xl font-black text-white">R$</span>
            <span className="text-6xl font-black" style={{ color: '#00C851' }}>37</span>
          </div>
          <div className="cta-section-anchor">
            <CtaButton label="QUERO AGORA POR R$37 →" size="xl" />
          </div>
        </div>

        <div
          className="rounded-xl p-4 text-xs text-purple-400"
          style={{ borderTop: '1px solid rgba(167,139,250,0.15)' }}
        >
          <p className="mb-1 font-bold text-purple-300">Copyright © 2026 ColorBox — Todos os direitos reservados</p>
          <p>contato: <a href="mailto:suporte@colorbox.com.br" className="underline hover:text-purple-200">suporte@colorbox.com.br</a></p>
        </div>
      </div>
    </section>
  )
}
