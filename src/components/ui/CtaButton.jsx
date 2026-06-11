import { HOTMART_CHECKOUT_URL, CTA_TEXT } from '../../constants/links'

export default function CtaButton({ className = '' }) {
  return (
    <a
      href={HOTMART_CHECKOUT_URL}
      className={`inline-block w-full max-w-md animate-pulse rounded-2xl bg-cta-green px-8 py-5 text-center text-xl font-black tracking-wide text-white shadow-2xl shadow-black/30 transition-transform duration-200 hover:scale-105 active:scale-95 sm:text-2xl ${className}`}
    >
      {CTA_TEXT}
    </a>
  )
}
