import CtaButton from '../ui/CtaButton'

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 px-5 py-14">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        <span className="text-4xl">🎨</span>
        <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
          ColorBox
        </h2>
        <p className="mt-2 text-base text-gray-400 sm:text-lg">
          30 cadernos para colorir — R$37 uma única vez
        </p>

        <div className="mt-8 w-full max-w-sm">
          <CtaButton />
        </div>

        <p className="mt-10 text-xs text-gray-600">
          © 2025 ColorBox. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
