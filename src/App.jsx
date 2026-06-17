import HeroSection from './components/sections/HeroSection'
import CharactersSection from './components/sections/CharactersSection'
import BenefitsSection from './components/sections/BenefitsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'

export default function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CharactersSection />
      <BenefitsSection />
      <TestimonialsSection />
    </main>
  )
}
