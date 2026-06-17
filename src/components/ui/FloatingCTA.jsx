import CtaButton from './CtaButton'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
        <CtaButton />
      </div>
    </div>
  )
}
