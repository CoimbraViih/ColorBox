import { TESTIMONIALS } from '../../constants/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="bg-linear-to-br from-brand-purple to-brand-pink px-5 py-12 font-sans sm:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-3xl font-black text-white drop-shadow-md sm:text-4xl">
          O que as mães estão dizendo 💬
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-xl"
            >
              <span className="text-5xl">{t.avatar}</span>
              <p className="flex-1 text-sm italic leading-relaxed text-gray-700">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
