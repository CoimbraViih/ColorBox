import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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

export default function App() {
  return (
    <div style={{ background: '#050311', minHeight: '100vh' }}>
      {/* Ambient background orbs — posição fixa, atrás de tudo */}
      <div className="glow-orb" style={{
        position: 'fixed', width: '600px', height: '600px',
        background: 'rgba(124,58,237,0.12)', top: '-200px', left: '-200px',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <div className="glow-orb" style={{
        position: 'fixed', width: '500px', height: '500px',
        background: 'rgba(236,72,153,0.08)', bottom: '-150px', right: '-100px',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <main style={{ position: 'relative', zIndex: 1 }}>
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
    </div>
  )
}
