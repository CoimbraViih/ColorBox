import { BENEFITS, SOCIAL_PROOF_COUNT } from '../../constants/benefits'

export default function BenefitsSection() {
  return (
    <section className="bg-white px-5 py-12 font-sans sm:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-black leading-tight text-gray-800 sm:text-4xl">
          Por que as mães{' '}
          <span className="bg-linear-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
            amam o ColorBox?
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-gray-500 sm:text-lg">
          Tudo que uma mãe precisa para manter o filho entretido e longe das telas.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-md shadow-gray-100 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-brand-pink/10 to-brand-purple/10 text-3xl">
                {benefit.emoji}
              </span>
              <div>
                <h3 className="text-base font-bold text-gray-800 sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500 sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}

          <div
            key="social-proof"
            className="flex items-center justify-center rounded-2xl bg-linear-to-br from-brand-pink/5 to-brand-purple/5 p-5 shadow-md shadow-gray-100"
          >
            <p className="text-center text-sm font-semibold text-brand-purple sm:text-base">
              ✅ Mais de{' '}
              <span className="font-black text-brand-pink">{SOCIAL_PROOF_COUNT} famílias</span>{' '}
              já aprovaram o ColorBox
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
