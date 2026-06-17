import CtaButton from '../ui/CtaButton'

export default function GuaranteeSection() {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">

        <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-linear-to-br from-yellow-300 via-yellow-400 to-amber-500 shadow-2xl shadow-yellow-400/40 ring-8 ring-yellow-200">
          <div className="flex flex-col items-center">
            <span className="text-4xl">🛡️</span>
            <span className="mt-1 text-3xl font-black leading-none text-white drop-shadow">7</span>
            <span className="text-sm font-black uppercase tracking-wide text-white drop-shadow">dias</span>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-black text-gray-800 sm:text-3xl">
          Garantia Total de 7 Dias
        </h2>

        <p className="mt-4 text-balance text-base text-gray-600 sm:text-lg">
          Se por qualquer motivo você não ficar satisfeita, basta enviar um e-mail
          em até <strong>7 dias</strong> e devolvemos 100% do seu dinheiro.{' '}
          <span className="font-bold text-brand-purple">Sem perguntas, sem burocracia.</span>
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm font-semibold text-gray-500">
          <span>✅ Compra 100% segura</span>
          <span>✅ Plataforma Hotmart</span>
          <span>✅ Risco zero</span>
        </div>

        <div className="mt-8 w-full max-w-sm">
          <CtaButton />
        </div>
      </div>
    </section>
  )
}
