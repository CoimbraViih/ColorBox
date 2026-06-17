import { useState } from 'react'
import { FAQS } from '../../constants/faqs'

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  function toggle(index) {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white px-5 py-14">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-3xl font-black leading-tight text-gray-800 sm:text-4xl">
          Ainda tem{' '}
          <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
            dúvidas?
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-gray-500 sm:text-lg">
          As perguntas mais frequentes das mães que já compraram
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl bg-white shadow-md transition-shadow ${
                  isOpen ? 'shadow-lg' : ''
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                    isOpen ? 'border-l-4 border-brand-pink' : 'border-l-4 border-transparent'
                  }`}
                >
                  <span className="text-base font-bold text-gray-800 sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-2xl font-bold text-brand-purple transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
