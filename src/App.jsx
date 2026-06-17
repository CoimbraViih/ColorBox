import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './components/sections/HeroSection'
import PainSection from './components/sections/PainSection'
import BenefitsSection from './components/sections/BenefitsSection'
import CharactersSection from './components/sections/CharactersSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import UrgencySection from './components/sections/UrgencySection'
import GuaranteeSection from './components/sections/GuaranteeSection'
import FAQSection from './components/sections/FAQSection'
import FooterSection from './components/sections/FooterSection'
import FloatingCTA from './components/ui/FloatingCTA'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <>
      <main
        className="min-h-screen pb-20 md:pb-0"
        style={{ background: 'linear-gradient(180deg, #1e1b4b 0%, #2d1b69 50%, #1e1b4b 100%)' }}
      >
        <HeroSection />
        <PainSection />
        <BenefitsSection />
        <CharactersSection />
        <TestimonialsSection />
        <UrgencySection />
        <GuaranteeSection />
        <FAQSection />
        <FooterSection />
      </main>
      <FloatingCTA />
    </>
  )
}
