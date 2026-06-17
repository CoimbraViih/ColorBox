import useCountdown from '../../hooks/useCountdown'
import CtaButton from '../ui/CtaButton'

function TimeBlock({ value, label }) {
  const display = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/20 sm:h-20 sm:w-20">
        <span className="font-black text-brand-purple text-3xl sm:text-4xl tabular-nums">
          {display}
        </span>
      </div>
      <span className="mt-1 text-xs font-bold uppercase tracking-widest text-white/80">
        {label}
      </span>
    </div>
  )
}

export default function UrgencySection() {
  const { minutes, seconds } = useCountdown()

  return (
    <section className="bg-linear-to-br from-brand-purple via-[#7B2D8B] to-brand-orange px-5 py-12">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white shadow backdrop-blur-sm">
          🔥 Oferta por tempo limitado
        </span>

        <h2 className="mt-5 text-2xl font-black text-white sm:text-3xl">
          Essa oferta encerra em:
        </h2>

        <div className="mt-6 flex items-center gap-3">
          <TimeBlock value={minutes} label="min" />
          <span className="mb-5 text-4xl font-black text-white">:</span>
          <TimeBlock value={seconds} label="seg" />
        </div>

        <p className="mt-6 text-balance text-base font-semibold text-white/90 sm:text-lg">
          30 cadernos de colorir por apenas{' '}
          <span className="text-yellow-300 font-black">R$37</span>. Não perca!
        </p>

        <div className="mt-6 w-full max-w-sm">
          <CtaButton />
        </div>
      </div>
    </section>
  )
}
