import CtaButton from '../ui/CtaButton'

const MOCKUP_NOTEBOOKS = [
  { emoji: '❄️', name: 'Frozen', bg: 'bg-sky-400', rotate: '-rotate-6', z: 'z-10' },
  { emoji: '🐷', name: 'Peppa Pig', bg: 'bg-brand-pink', rotate: 'rotate-0', z: 'z-20 -mt-4 sm:mt-0' },
  { emoji: '💖', name: 'Barbie', bg: 'bg-fuchsia-500', rotate: 'rotate-6', z: 'z-10' },
]

export default function HeroSection() {
  return (
    <section className="bg-linear-to-br from-brand-pink via-brand-purple to-brand-orange px-5 py-12 font-sans sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-sm">
          🔥 Entrega imediata no seu e-mail
        </span>

        <h1 className="mt-6 text-balance text-4xl font-black leading-tight text-white drop-shadow-md sm:text-5xl md:text-6xl">
          Chega de telas!
          <span className="mt-2 block text-3xl sm:text-4xl md:text-5xl">
            30 Cadernos de Colorir com os Personagens que Seu Filho{' '}
            <span className="text-yellow-300">AMA</span>
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-lg font-semibold text-white/90 sm:text-xl">
          Frozen, Barbie, Peppa Pig, Moana, Stitch e muito mais. PDF para
          imprimir quantas vezes quiser. 🎨
        </p>

        {/* Mockup CSS dos cadernos — trocar por <img> quando houver artes reais */}
        <div className="relative mt-10 flex items-center justify-center">
          {MOCKUP_NOTEBOOKS.map((notebook) => (
            <div
              key={notebook.name}
              className={`${notebook.bg} ${notebook.rotate} ${notebook.z} -mx-3 flex h-44 w-32 flex-col items-center justify-center gap-2 rounded-2xl border-4 border-white shadow-2xl shadow-black/40 sm:h-56 sm:w-40`}
            >
              <span className="text-5xl sm:text-6xl">{notebook.emoji}</span>
              <span className="px-2 text-center text-sm font-extrabold text-white drop-shadow sm:text-base">
                {notebook.name}
              </span>
            </div>
          ))}
          <span className="absolute -right-4 -top-4 z-30 rounded-full bg-yellow-300 px-4 py-2 text-sm font-black text-brand-purple shadow-xl sm:-right-8">
            30 cadernos!
          </span>
        </div>

        <div className="mt-10 w-full max-w-md">
          <CtaButton />
        </div>

        <p className="mt-5 text-sm font-semibold text-white/85 sm:text-base">
          ✅ Acesso imediato &nbsp;•&nbsp; 🔒 Compra segura Hotmart &nbsp;•&nbsp;
          💜 Garantia de 7 dias
        </p>
      </div>
    </section>
  )
}
