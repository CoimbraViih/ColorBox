import HeroSection from './components/sections/HeroSection'
import CharactersSection from './components/sections/CharactersSection'
import BenefitsSection from './components/sections/BenefitsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import UrgencySection from './components/sections/UrgencySection'
import GuaranteeSection from './components/sections/GuaranteeSection'
import FAQSection from './components/sections/FAQSection'
import FooterSection from './components/sections/FooterSection'

export default function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CharactersSection />
      <BenefitsSection />
      <TestimonialsSection />
      <UrgencySection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
