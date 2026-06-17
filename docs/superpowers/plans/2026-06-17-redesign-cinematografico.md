# ColorBox Redesign Cinematográfico — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir completamente o visual da landing page ColorBox por um estilo "Noite Pixar" cinematográfico com GSAP ScrollTrigger + Framer Motion, usando imagens reais dos cadernos.

**Architecture:** Cada seção é um componente isolado em `src/components/sections/`. GSAP registrado uma vez em `App.jsx`. Framer Motion usado diretamente nos componentes. Sem estado global — dados via constants.

**Tech Stack:** React 19 + Vite 6 + Tailwind CSS v4 + GSAP 3.15 (ScrollTrigger) + Framer Motion 12.40

## Global Constraints

- JSX puro — sem TypeScript
- Tailwind classes inline — sem CSS modules
- Todos os CTAs apontam para `https://pay.hotmart.com/7914058`
- Mobile-first: base 390px, adaptações em `md:` breakpoint
- CTAs: altura mínima 56px, verde `#00C851`, rounded-2xl
- GSAP: `gsap.registerPlugin(ScrollTrigger)` apenas em `App.jsx`; todo useEffect com ScrollTrigger retorna cleanup
- Framer Motion: import de `framer-motion`, não de sub-paths
- Imagens dos cadernos em `/cadernos/[nome].png` (servidas de `public/cadernos/`)
- Sem comentários óbvios — apenas onde o "porquê" não é evidente

---

## File Map

| Arquivo | Ação | Responsabilidade |
|---|---|---|
| `src/index.css` | Modificar | Adicionar CSS vars Noite Pixar + star pattern + animações globais |
| `src/App.jsx` | Modificar | Registrar GSAP+ScrollTrigger, adicionar PainSection |
| `src/constants/characters.js` | Substituir | 36 cadernos reais com `image` paths |
| `src/hooks/useCountdown.js` | Substituir | Timer 23:59:59 com persistência localStorage |
| `src/hooks/useScrollAnimation.js` | Criar | Wrapper useRef+useEffect para GSAP ScrollTrigger |
| `src/components/ui/CtaButton.jsx` | Substituir | Botão verde com Framer Motion whileHover/whileTap |
| `src/components/ui/NotebookCard.jsx` | Criar | Card de caderno com imagem real + Framer Motion |
| `src/components/ui/CountdownTimer.jsx` | Criar | 4 dígitos HH/MM/SS separados com glow |
| `src/components/ui/FloatingCTA.jsx` | Substituir | Barra fixa mobile com Framer Motion slide-up |
| `src/components/sections/HeroSection.jsx` | Substituir | Hero Noite Pixar + GSAP stagger entry |
| `src/components/sections/PainSection.jsx` | Criar | 4 pain points + GSAP slide-in cascata |
| `src/components/sections/BenefitsSection.jsx` | Substituir | 3 cards + Framer Motion hover |
| `src/components/sections/CharactersSection.jsx` | Substituir | Grade 4 colunas imagens reais + GSAP stagger |
| `src/components/sections/TestimonialsSection.jsx` | Substituir | 3 cards scroll horizontal + Framer Motion |
| `src/components/sections/UrgencySection.jsx` | Substituir | Countdown + preço riscado + CTA máximo |
| `src/components/sections/GuaranteeSection.jsx` | Substituir | Escudo + selos + GSAP scale-in |
| `src/components/sections/FAQSection.jsx` | Substituir | Accordion Framer Motion AnimatePresence |
| `src/components/sections/FooterSection.jsx` | Substituir | Gradiente entardecer + CTA final |

---

### Task 1: Tema global CSS + App.jsx bootstrap

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Produces: variáveis CSS `--night-bg`, `--night-bg-2`, `--night-accent`, classe `.stars-bg`; GSAP+ScrollTrigger registrados globalmente; PainSection no render do App

- [ ] **Step 1: Atualizar `src/index.css`**

```css
@import "tailwindcss";

@theme {
  --font-sans: "Poppins", ui-sans-serif, system-ui, sans-serif;

  --color-brand-pink: #ff69b4;
  --color-brand-purple: #9b59b6;
  --color-brand-orange: #ff8c00;
  --color-cta-green: #00c851;
  --color-night-bg: #1e1b4b;
  --color-night-bg2: #2d1b69;
  --color-night-bg3: #3b0764;
  --color-gold: #fde68a;
  --color-neon-purple: #a78bfa;
}

.stars-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px),
    radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px);
  background-size: 42px 42px, 23px 23px;
  background-position: 0 0, 14px 12px;
  opacity: 0.08;
  pointer-events: none;
}

.gradient-text {
  background: linear-gradient(90deg, #fde68a, #fb923c, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glow-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(48px);
  pointer-events: none;
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 4px 24px rgba(0,200,81,0.5), 0 0 40px rgba(0,200,81,0.2); }
  50% { box-shadow: 0 4px 36px rgba(0,200,81,0.75), 0 0 64px rgba(0,200,81,0.4); }
}

.cta-pulse {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.float-anim {
  animation: float 3s ease-in-out infinite;
}
```

- [ ] **Step 2: Atualizar `src/App.jsx`**

```jsx
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
```

- [ ] **Step 3: Verificar que o app abre sem erros**

```bash
pnpm dev
```

Abrir http://localhost:5173 — deve carregar sem erros no console (PainSection ainda não existe, erro esperado até Task 2).

- [ ] **Step 4: Commit**

```bash
git add src/index.css src/App.jsx
git commit -m "feat: tema Noite Pixar CSS vars + App bootstrap GSAP"
```

---

### Task 2: constants/characters.js — dados reais dos 36 cadernos

**Files:**
- Modify: `src/constants/characters.js`

**Interfaces:**
- Produces: `CHARACTERS` array com `{ id, name, image, emoji }` — `image` é path string `/cadernos/[nome].png` ou `null` para cadernos sem imagem ainda

- [ ] **Step 1: Substituir `src/constants/characters.js`**

```js
// 36 cadernos reais. image: path relativo a /public (Vite serve como raiz).
// null = sem imagem ainda, CharactersSection usa emoji como fallback.
export const CHARACTERS = [
  { id: 1,  name: 'Lilo & Stitch',      image: '/cadernos/lilo.png',        emoji: '🌺' },
  { id: 2,  name: 'Patrulha Canina',    image: '/cadernos/patrulha.png',    emoji: '🐾' },
  { id: 3,  name: 'Sonic',              image: '/cadernos/sonic.png',        emoji: '💨' },
  { id: 4,  name: 'Homem-Aranha',       image: '/cadernos/homem-aranha.png', emoji: '🕷️' },
  { id: 5,  name: 'Barbie',             image: '/cadernos/barbie.png',       emoji: '💖' },
  { id: 6,  name: 'Moana',              image: '/cadernos/moana.png',        emoji: '🌊' },
  { id: 7,  name: 'Hello Kitty',        image: '/cadernos/hello-kitty.png',  emoji: '🎀' },
  { id: 8,  name: 'Pokémon',            image: '/cadernos/pokemon.png',      emoji: '⚡' },
  { id: 9,  name: 'Labubu',             image: '/cadernos/labubu.png',       emoji: '🐰' },
  { id: 10, name: 'Minecraft',          image: '/cadernos/minecraft.png',    emoji: '⛏️' },
  { id: 11, name: 'Turma da Mônica',    image: '/cadernos/monica.png',       emoji: '🐰' },
  { id: 12, name: 'LOL Surprise',       image: '/cadernos/lol.png',          emoji: '🎀' },
  { id: 13, name: 'Kung Fu Panda',      image: '/cadernos/panda.jpg',        emoji: '🐼' },
  { id: 14, name: 'Capivara',           image: '/cadernos/capivara.png',     emoji: '🦫' },
  { id: 15, name: 'Show da Luna',       image: '/cadernos/luna.png',         emoji: '🔭' },
  { id: 16, name: 'Unicórnio',          image: '/cadernos/unicornio.png',    emoji: '🦄' },
  { id: 17, name: 'Bichinhos',          image: null,                         emoji: '🐾' },
  { id: 18, name: 'Dinossauros',        image: null,                         emoji: '🦕' },
  { id: 19, name: 'Harry Potter',       image: null,                         emoji: '⚡' },
  { id: 20, name: 'Princesas',          image: null,                         emoji: '👑' },
  { id: 21, name: 'Kawaii',             image: null,                         emoji: '🌸' },
  { id: 22, name: 'Arco-íris',          image: null,                         emoji: '🌈' },
  { id: 23, name: 'Casa Mágica da Gaby',image: null,                         emoji: '🏠' },
  { id: 24, name: 'Aniversário',        image: null,                         emoji: '🎂' },
  { id: 25, name: 'Natal',              image: null,                         emoji: '🎄' },
  { id: 26, name: 'Lucas Neto',         image: null,                         emoji: '🎬' },
  { id: 27, name: 'Luluca',             image: null,                         emoji: '🎵' },
  { id: 28, name: 'Mundo Bita',         image: null,                         emoji: '🎶' },
  { id: 29, name: 'Divertidamente',     image: null,                         emoji: '😊' },
  { id: 30, name: 'Jesus',             image: null,                         emoji: '✝️' },
  { id: 31, name: 'Bíblico',            image: null,                         emoji: '📖' },
  { id: 32, name: 'Carros',             image: null,                         emoji: '🚗' },
  { id: 33, name: 'Ursinhos',           image: null,                         emoji: '🧸' },
  { id: 34, name: 'Alfabetização',      image: null,                         emoji: '🔤' },
  { id: 35, name: 'Panda',              image: null,                         emoji: '🐼' },
  { id: 36, name: 'Super-Heróis',       image: null,                         emoji: '🦸' },
]

// Os 15 cadernos com imagem real, usados na grade principal da CharactersSection
export const FEATURED_CHARACTERS = CHARACTERS.filter(c => c.image !== null)
```

- [ ] **Step 2: Commit**

```bash
git add src/constants/characters.js
git commit -m "feat: characters.js com 36 cadernos reais e paths de imagem"
```

---

### Task 3: useCountdown + useScrollAnimation hooks

**Files:**
- Modify: `src/hooks/useCountdown.js`
- Create: `src/hooks/useScrollAnimation.js`

**Interfaces:**
- `useCountdown()` → `{ hours, minutes, seconds, isExpired }` (adiciona `hours`, persiste no localStorage)
- `useScrollAnimation(animFn)` → `ref` — passa o ref para o elemento raiz da seção; `animFn(el)` recebe o elemento DOM e registra os ScrollTriggers

- [ ] **Step 1: Substituir `src/hooks/useCountdown.js`**

```js
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'colorbox_countdown_end'
const DURATION_MS = 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000

function getOrCreateEnd() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const end = parseInt(stored, 10)
    if (end > Date.now()) return end
  }
  const end = Date.now() + DURATION_MS
  localStorage.setItem(STORAGE_KEY, String(end))
  return end
}

export default function useCountdown() {
  const [end] = useState(getOrCreateEnd)
  const [remaining, setRemaining] = useState(() => Math.max(0, end - Date.now()))

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, end - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [end])

  const hours = Math.floor(remaining / 3600000)
  const minutes = Math.floor((remaining % 3600000) / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)

  return { hours, minutes, seconds, isExpired: remaining === 0 }
}
```

- [ ] **Step 2: Criar `src/hooks/useScrollAnimation.js`**

```js
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// animFn recebe o elemento DOM raiz e deve registrar ScrollTriggers nele.
// Retorna automaticamente cleanup de todos os ScrollTriggers criados na seção.
export default function useScrollAnimation(animFn) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => animFn(el), el)
    return () => ctx.revert()
  }, [])

  return ref
}
```

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useCountdown.js src/hooks/useScrollAnimation.js
git commit -m "feat: useCountdown com horas+localStorage, useScrollAnimation wrapper GSAP"
```

---

### Task 4: CtaButton + NotebookCard — componentes UI base

**Files:**
- Modify: `src/components/ui/CtaButton.jsx`
- Create: `src/components/ui/NotebookCard.jsx`

**Interfaces:**
- `<CtaButton label size className />` — `label` string, `size` "lg"|"xl" (default "lg"), `className` extra
- `<NotebookCard character index />` — `character` objeto `{ name, image, emoji }`, `index` número para delay do stagger

- [ ] **Step 1: Substituir `src/components/ui/CtaButton.jsx`**

```jsx
import { motion } from 'framer-motion'
import { HOTMART_CHECKOUT } from '../../constants/links'

export default function CtaButton({ label = 'QUERO AGORA POR R$37 →', size = 'lg', className = '' }) {
  const sizeClasses = size === 'xl'
    ? 'text-lg py-5 px-8 min-h-[64px]'
    : 'text-base py-4 px-6 min-h-[56px]'

  return (
    <motion.a
      href={HOTMART_CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-pulse inline-flex w-full items-center justify-center rounded-2xl font-black text-white ${sizeClasses} ${className}`}
      style={{ background: 'linear-gradient(135deg, #00C851, #00a040)' }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => {
        if (typeof fbq !== 'undefined') fbq('track', 'InitiateCheckout')
      }}
    >
      {label}
    </motion.a>
  )
}
```

- [ ] **Step 2: Criar `src/components/ui/NotebookCard.jsx`**

```jsx
import { motion } from 'framer-motion'

export default function NotebookCard({ character, index = 0 }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl"
      style={{
        aspectRatio: '3/4',
        border: '1px solid rgba(167,139,250,0.25)',
        boxShadow: 'inset 0 0 12px rgba(124,58,237,0.15)',
      }}
      whileHover={{
        scale: 1.07,
        boxShadow: '0 0 24px rgba(167,139,250,0.5), inset 0 0 12px rgba(124,58,237,0.2)',
        zIndex: 10,
      }}
      transition={{ duration: 0.2 }}
    >
      {character.image ? (
        <img
          src={character.image}
          alt={`Caderno para colorir ${character.name}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-1"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(219,39,119,0.3))' }}
        >
          <span className="text-3xl">{character.emoji}</span>
        </div>
      )}
      <div
        className="absolute inset-x-0 bottom-0 flex items-end p-1.5"
        style={{ background: 'linear-gradient(to top, rgba(15,10,30,0.9) 0%, transparent 60%)' }}
      >
        <span className="text-[9px] font-bold leading-tight text-white drop-shadow">
          {character.name}
        </span>
      </div>
    </motion.div>
  )
}
```

- [ ] **Step 3: Verificar no browser**

```bash
pnpm dev
```

Os componentes ainda não aparecem na página (não foram importados nas seções), mas não deve haver erros de build.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/CtaButton.jsx src/components/ui/NotebookCard.jsx
git commit -m "feat: CtaButton Framer Motion + NotebookCard com imagem real"
```

---

### Task 5: CountdownTimer + FloatingCTA

**Files:**
- Create: `src/components/ui/CountdownTimer.jsx`
- Modify: `src/components/ui/FloatingCTA.jsx`

**Interfaces:**
- `<CountdownTimer />` — lê `useCountdown()`, renderiza 4 dígitos separados (HH MM SS) com labels
- `<FloatingCTA ctaRef />` — `ctaRef` é o ref do CTA principal (HeroSection) para IntersectionObserver

- [ ] **Step 1: Criar `src/components/ui/CountdownTimer.jsx`**

```jsx
import { motion } from 'framer-motion'
import useCountdown from '../../hooks/useCountdown'

function Digit({ value, label }) {
  const formatted = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center gap-1">
      <motion.div
        className="flex items-center justify-center rounded-xl font-black text-white"
        style={{
          background: 'rgba(0,0,0,0.5)',
          border: '1px solid rgba(167,139,250,0.3)',
          minWidth: '72px',
          fontSize: '3rem',
          lineHeight: 1,
          padding: '12px 8px',
          boxShadow: '0 0 20px rgba(167,139,250,0.2)',
        }}
        key={formatted}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {formatted}
      </motion.div>
      <span className="text-[10px] font-bold tracking-widest text-purple-300">{label}</span>
    </div>
  )
}

export default function CountdownTimer() {
  const { hours, minutes, seconds } = useCountdown()

  return (
    <div className="flex items-start justify-center gap-3">
      <Digit value={hours} label="HORAS" />
      <span className="mt-3 text-4xl font-black text-purple-300">:</span>
      <Digit value={minutes} label="MIN" />
      <span className="mt-3 text-4xl font-black text-purple-300">:</span>
      <Digit value={seconds} label="SEG" />
    </div>
  )
}
```

- [ ] **Step 2: Substituir `src/components/ui/FloatingCTA.jsx`**

```jsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HOTMART_CHECKOUT } from '../../constants/links'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Aparece após 2s
    const t = setTimeout(() => setVisible(true), 2000)

    // Oculta quando qualquer .cta-section-anchor está no viewport
    const anchors = document.querySelectorAll('.cta-section-anchor')
    if (!anchors.length) return () => clearTimeout(t)

    const obs = new IntersectionObserver(
      (entries) => setHidden(entries.some(e => e.isIntersecting)),
      { threshold: 0.5 }
    )
    anchors.forEach(a => obs.observe(a))

    return () => {
      clearTimeout(t)
      obs.disconnect()
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && !hidden && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.a
            href={HOTMART_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse flex w-full items-center justify-center rounded-2xl py-4 text-base font-black text-white"
            style={{ background: 'linear-gradient(135deg, #00C851, #00a040)', minHeight: '56px' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              if (typeof fbq !== 'undefined') fbq('track', 'InitiateCheckout')
            }}
          >
            QUERO POR R$37 →
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/CountdownTimer.jsx src/components/ui/FloatingCTA.jsx
git commit -m "feat: CountdownTimer HH:MM:SS + FloatingCTA Framer Motion slide-up"
```

---

### Task 6: HeroSection

**Files:**
- Modify: `src/components/sections/HeroSection.jsx`

**Interfaces:**
- Consumes: `CtaButton` de `../ui/CtaButton`, `useScrollAnimation` de `../../hooks/useScrollAnimation`
- Produz: classe `.cta-section-anchor` no botão principal (para FloatingCTA IntersectionObserver)

- [ ] **Step 1: Substituir `src/components/sections/HeroSection.jsx`**

```jsx
import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import CtaButton from '../ui/CtaButton'
import gsap from 'gsap'

const NOTEBOOKS = [
  { emoji: '❄️', name: 'Frozen',   color: '#818cf8', rotate: '-8deg' },
  { emoji: '💖', name: 'Barbie',   color: '#f472b6', rotate: '0deg', marginTop: '-12px' },
  { emoji: '🌺', name: 'Stitch',   color: '#60a5fa', rotate: '8deg' },
]

export default function HeroSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelectorAll('.hero-item'), {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
    })
  })

  return (
    <section
      ref={ref}
      className="stars-bg relative overflow-hidden px-5 py-14 text-center"
      style={{ background: 'linear-gradient(160deg, #1e1b4b 0%, #3b0764 50%, #1e1b4b 100%)' }}
    >
      <div className="glow-orb hero-item" style={{ width: '300px', height: '300px', background: 'rgba(124,58,237,0.25)', top: '-80px', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="glow-orb" style={{ width: '200px', height: '200px', background: 'rgba(219,39,119,0.15)', bottom: '0', right: '-50px' }} />

      <div className="relative mx-auto max-w-md">
        <div className="hero-item mb-5 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-purple-200"
          style={{ background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.3)' }}>
          ✨ ACESSO IMEDIATO APÓS A COMPRA
        </div>

        <h1 className="hero-item mb-4 text-4xl font-black leading-[1.1] text-white md:text-5xl">
          Seu Filho Vai{' '}
          <span className="gradient-text">Largar o Celular</span>
          {' '}por Horas
        </h1>

        <p className="hero-item mb-8 text-base font-semibold leading-relaxed text-purple-200 md:text-lg">
          30 Cadernos para Colorir em PDF com os Personagens que Ele Mais Ama —
          Frozen, Barbie, Stitch, Moana, Patrulha Canina e muito mais!
        </p>

        {/* Mockup cadernos */}
        <div className="hero-item relative mb-8 flex items-center justify-center gap-0">
          {NOTEBOOKS.map((nb) => (
            <div
              key={nb.name}
              className="float-anim relative -mx-2 flex h-40 w-28 flex-col items-center justify-center gap-2 rounded-2xl shadow-2xl md:h-48 md:w-36"
              style={{
                background: `linear-gradient(135deg, ${nb.color}, ${nb.color}cc)`,
                border: '3px solid rgba(255,255,255,0.3)',
                transform: `rotate(${nb.rotate})`,
                marginTop: nb.marginTop || '0',
                boxShadow: `0 8px 32px ${nb.color}66`,
                animationDelay: nb.marginTop ? '0.5s' : '0s',
              }}
            >
              <span className="text-5xl">{nb.emoji}</span>
              <span className="px-2 text-center text-xs font-extrabold text-white drop-shadow">{nb.name}</span>
            </div>
          ))}
          <span
            className="absolute -right-2 -top-3 z-10 rounded-full px-3 py-1 text-xs font-black text-purple-900"
            style={{ background: '#fde68a', boxShadow: '0 2px 12px rgba(253,230,138,0.6)' }}
          >
            30 cadernos!
          </span>
        </div>

        <div className="hero-item cta-section-anchor mb-4">
          <CtaButton size="xl" />
        </div>

        <p className="hero-item mb-5 text-sm font-semibold text-purple-300">
          ⚡ Oferta por tempo limitado &nbsp;|&nbsp; 🔒 Compra 100% segura
        </p>

        <div className="hero-item inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-yellow-300"
          style={{ background: 'rgba(253,230,138,0.1)', border: '1px solid rgba(253,230,138,0.2)' }}>
          ⭐⭐⭐⭐⭐ Mais de 3.200 mães satisfeitas
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar no browser — hero deve aparecer com o tema Noite Pixar**

```bash
pnpm dev
```

Checar: gradiente escuro, badge pill, headline com texto gradiente dourado, 3 cadernos em perspectiva, botão verde pulsando.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HeroSection.jsx
git commit -m "feat: HeroSection Noite Pixar com GSAP stagger entry"
```

---

### Task 7: PainSection (nova)

**Files:**
- Create: `src/components/sections/PainSection.jsx`

**Interfaces:**
- Consumes: `useScrollAnimation`
- Produz: seção renderizada entre Hero e Benefits no App.jsx

- [ ] **Step 1: Criar `src/components/sections/PainSection.jsx`**

```jsx
import useScrollAnimation from '../../hooks/useScrollAnimation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const PAIN_POINTS = [
  'Seu filho está sempre no celular ou tablet e você não sabe como mudar isso?',
  'As tardes em casa viram uma batalha de "não sei o que fazer"?',
  'Você quer uma atividade criativa, mas cadernos de papelaria são caros e acabam rápido?',
  'Queria dar algo especial pro seu filho mas sem gastar muito?',
]

export default function PainSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelectorAll('.pain-item'), {
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
    })
    gsap.from(el.querySelector('.pain-solution'), {
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el.querySelector('.pain-solution'),
        start: 'top 85%',
      },
    })
  })

  return (
    <section
      ref={ref}
      className="stars-bg relative overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(160deg, #2d1b69 0%, #1e1b4b 50%, #3b0764 100%)' }}
    >
      <div className="glow-orb" style={{ width: '250px', height: '250px', background: 'rgba(219,39,119,0.15)', top: '-40px', right: '-60px' }} />

      <div className="relative mx-auto max-w-md">
        <h2 className="mb-8 text-center text-3xl font-black leading-tight text-white md:text-4xl">
          Você Reconhece{' '}
          <span className="gradient-text">Essa Situação?</span>
        </h2>

        <div className="mb-8 flex flex-col gap-4">
          {PAIN_POINTS.map((point, i) => (
            <div
              key={i}
              className="pain-item flex items-start gap-3 rounded-2xl p-4"
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(167,139,250,0.15)',
              }}
            >
              <span className="mt-0.5 text-lg">❌</span>
              <p className="text-sm font-semibold leading-relaxed text-purple-100">{point}</p>
            </div>
          ))}
        </div>

        <div
          className="pain-solution rounded-2xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(253,230,138,0.15), rgba(251,146,60,0.15))',
            border: '1px solid rgba(253,230,138,0.3)',
          }}
        >
          <p className="text-xl font-black text-yellow-300">
            Seus problemas acabaram hoje! 🎉
          </p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar no browser — seção deve aparecer após o hero**

Rolar a página: os pain points devem deslizar da esquerda ao entrar no viewport.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/PainSection.jsx
git commit -m "feat: PainSection com 4 pain points e GSAP slide-in cascata"
```

---

### Task 8: BenefitsSection

**Files:**
- Modify: `src/components/sections/BenefitsSection.jsx`

**Interfaces:**
- Consumes: `CtaButton`, `useScrollAnimation`

- [ ] **Step 1: Substituir `src/components/sections/BenefitsSection.jsx`**

```jsx
import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import CtaButton from '../ui/CtaButton'
import gsap from 'gsap'

const BENEFITS = [
  {
    icon: '✨',
    headline: 'Crianças mais calmas em 15 minutos',
    text: 'A atividade de colorir ativa o foco e reduz a ansiedade. Você vai notar a diferença na primeira vez.',
  },
  {
    icon: '🎨',
    headline: 'Personagens que elas já conhecem e amam',
    text: 'Frozen, Barbie, Stitch, Patrulha Canina, Pokémon e muito mais — o que a sua criança ama, está aqui.',
  },
  {
    icon: '💝',
    headline: 'O presente perfeito que educa sem tela',
    text: 'Uma compra. Infinitas impressões. Você pode usar com vários filhos, na escola, na casa da avó.',
  },
]

export default function BenefitsSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelectorAll('.benefit-card'), {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
      },
    })
  })

  return (
    <section
      ref={ref}
      className="stars-bg relative overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(160deg, #1e1b4b 0%, #2d1b69 100%)' }}
    >
      <div className="glow-orb" style={{ width: '200px', height: '200px', background: 'rgba(244,114,182,0.2)', top: '20px', left: '-40px' }} />

      <div className="relative mx-auto max-w-md">
        <div className="mb-2 text-center">
          <span className="text-3xl font-black" style={{ color: '#f472b6' }}>Filhos VÃO AMAR</span>
        </div>
        <div className="mb-8 text-center">
          <span className="text-3xl font-black" style={{ color: '#fb923c' }}>Você VAI AGRADECER</span>
        </div>

        <p className="mb-8 rounded-2xl p-4 text-center text-sm font-semibold text-purple-100"
          style={{ background: 'rgba(251,146,60,0.12)', border: '1px solid rgba(251,146,60,0.2)' }}>
          Transforme momentos de agitação em pura diversão criativa com os 30 Cadernos ColorBox.
        </p>

        <div className="mb-8 flex flex-col gap-4">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={i}
              className="benefit-card rounded-2xl p-5"
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(167,139,250,0.2)',
              }}
              whileHover={{
                borderColor: 'rgba(167,139,250,0.5)',
                boxShadow: '0 0 24px rgba(167,139,250,0.2)',
              }}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="text-2xl">{b.icon}</span>
                <h3 className="font-black text-white">{b.headline}</h3>
              </div>
              <p className="text-sm leading-relaxed text-purple-200">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <CtaButton label="QUERO O COLORBOX POR R$37 →" size="xl" />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/BenefitsSection.jsx
git commit -m "feat: BenefitsSection 3 cards Framer Motion hover + GSAP reveal"
```

---

### Task 9: CharactersSection com imagens reais

**Files:**
- Modify: `src/components/sections/CharactersSection.jsx`

**Interfaces:**
- Consumes: `NotebookCard`, `CtaButton`, `FEATURED_CHARACTERS` de constants, `useScrollAnimation`

- [ ] **Step 1: Substituir `src/components/sections/CharactersSection.jsx`**

```jsx
import useScrollAnimation from '../../hooks/useScrollAnimation'
import CtaButton from '../ui/CtaButton'
import NotebookCard from '../ui/NotebookCard'
import { FEATURED_CHARACTERS } from '../../constants/characters'
import gsap from 'gsap'

export default function CharactersSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelectorAll('.notebook-item'), {
      y: 24,
      opacity: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el.querySelector('.notebooks-grid'),
        start: 'top 80%',
      },
    })
  })

  return (
    <section
      ref={ref}
      className="stars-bg relative overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(160deg, #3b0764 0%, #2d1b69 50%, #1e1b4b 100%)' }}
    >
      <div className="glow-orb" style={{ width: '250px', height: '250px', background: 'rgba(124,58,237,0.3)', top: '-60px', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="glow-orb" style={{ width: '180px', height: '120px', background: 'rgba(219,39,119,0.2)', bottom: '40px', right: '-30px' }} />

      <div className="relative mx-auto max-w-md">
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-purple-300"
            style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.25)' }}>
            🎁 O Que Você Recebe Hoje
          </span>
        </div>

        <h2 className="mb-2 text-center text-3xl font-black leading-tight text-white md:text-4xl">
          <span className="gradient-text">30 Cadernos para Colorir</span>
        </h2>
        <p className="mb-2 text-center text-lg font-semibold text-purple-200">
          Mais de <strong className="text-white">900 páginas</strong> de ilustrações
        </p>

        <p className="mb-6 text-center text-sm text-purple-300">
          Personagens que toda criança conhece e ama — prontos para imprimir e colorir quantas vezes quiser.
        </p>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {[['30', 'cadernos'], ['900+', 'páginas'], ['🖨️', 'Imprime infinito']].map(([num, label]) => (
            <div key={label} className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span style={{ color: '#fde68a', fontSize: '14px' }}>{num}</span>
              <span className="text-purple-200">{label}</span>
            </div>
          ))}
        </div>

        <div className="notebooks-grid mb-6 grid grid-cols-4 gap-2">
          {FEATURED_CHARACTERS.map((character, i) => (
            <div key={character.id} className="notebook-item">
              <NotebookCard character={character} index={i} />
            </div>
          ))}
          {/* Card "+mais" */}
          <div
            className="notebook-item flex flex-col items-center justify-center rounded-xl p-2 text-center"
            style={{
              aspectRatio: '3/4',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(219,39,119,0.4))',
              border: '1px solid rgba(167,139,250,0.3)',
            }}
          >
            <span className="text-xl font-black" style={{ color: '#fde68a' }}>+20</span>
            <span className="text-[9px] font-bold text-purple-200 leading-tight mt-1">cadernos</span>
            <span className="text-[8px] text-purple-300 leading-tight mt-1">Dinos, Harry Potter e mais...</span>
          </div>
        </div>

        <CtaButton label="QUERO OS 30 CADERNOS POR R$37 →" size="xl" />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar no browser — grade 4 colunas com imagens reais**

Rolar até a seção: 16 cards com fotos reais dos cadernos, card "+20" no final, stagger reveal ao scroll.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/CharactersSection.jsx
git commit -m "feat: CharactersSection grade 4 col imagens reais + GSAP stagger reveal"
```

---

### Task 10: TestimonialsSection

**Files:**
- Modify: `src/components/sections/TestimonialsSection.jsx`

**Interfaces:**
- Consumes: `TESTIMONIALS` de `../../constants/testimonials`

- [ ] **Step 1: Substituir `src/components/sections/TestimonialsSection.jsx`**

```jsx
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../../constants/testimonials'

export default function TestimonialsSection() {
  return (
    <section
      className="stars-bg relative overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(160deg, #1e1b4b 0%, #2d1b69 100%)' }}
    >
      <div className="glow-orb" style={{ width: '220px', height: '220px', background: 'rgba(244,114,182,0.15)', top: '-30px', right: '-40px' }} />

      <div className="relative mx-auto max-w-md">
        <h2 className="mb-2 text-center text-3xl font-black text-white">
          O Que as Mães{' '}
          <span className="gradient-text">Estão Falando:</span>
        </h2>
        <p className="mb-8 text-center text-sm font-bold text-yellow-300">
          ⭐⭐⭐⭐⭐ Avaliação média 4.9/5
        </p>

        {/* Scroll horizontal no mobile */}
        <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:flex-col md:px-0">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              className="w-72 flex-shrink-0 rounded-2xl p-5 md:w-full"
              style={{
                background: 'rgba(0,0,0,0.35)',
                border: '1px solid rgba(167,139,250,0.2)',
              }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-2xl"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-black text-white">{t.name}</p>
                  <p className="text-xs text-purple-300">{t.role}</p>
                </div>
              </div>
              <p className="mb-2 text-xs font-bold text-yellow-300">⭐⭐⭐⭐⭐</p>
              <p className="text-sm leading-relaxed text-purple-100">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/TestimonialsSection.jsx
git commit -m "feat: TestimonialsSection scroll horizontal mobile + Framer Motion fade-in"
```

---

### Task 11: UrgencySection com CountdownTimer

**Files:**
- Modify: `src/components/sections/UrgencySection.jsx`

**Interfaces:**
- Consumes: `CountdownTimer`, `CtaButton`

- [ ] **Step 1: Substituir `src/components/sections/UrgencySection.jsx`**

```jsx
import { motion } from 'framer-motion'
import CountdownTimer from '../ui/CountdownTimer'
import CtaButton from '../ui/CtaButton'

export default function UrgencySection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 text-center"
      style={{ background: 'linear-gradient(160deg, #0a0815 0%, #1a0a2e 50%, #0a0815 100%)' }}
    >
      {/* Holofote central */}
      <div className="glow-orb" style={{ width: '400px', height: '200px', background: 'rgba(167,139,250,0.12)', top: '0', left: '50%', transform: 'translateX(-50%)', filter: 'blur(60px)' }} />

      <div className="relative mx-auto max-w-md">
        <motion.h2
          className="mb-6 text-2xl font-black text-white md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ⚡ ATENÇÃO: Oferta Especial{' '}
          <span className="gradient-text">Encerrando Em:</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <CountdownTimer />
        </motion.div>

        <div className="mb-8">
          <p className="mb-1 text-lg font-bold text-purple-400 line-through">De R$97</p>
          <p className="mb-1 text-5xl font-black text-white">
            R$<span className="gradient-text" style={{ backgroundImage: 'linear-gradient(90deg, #00C851, #00e860)' }}>37</span>
          </p>
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black"
            style={{ background: 'rgba(0,200,81,0.15)', border: '1px solid rgba(0,200,81,0.3)', color: '#00C851' }}
          >
            Economia de R$60 (60% OFF)
          </div>
        </div>

        <div className="cta-section-anchor mb-4">
          <CtaButton label="GARANTIR MINHA OFERTA AGORA →" size="xl" />
        </div>

        <p className="text-xs font-semibold text-purple-400">
          🔒 Pagamento seguro &nbsp;|&nbsp; ⚡ Acesso imediato &nbsp;|&nbsp; 🎁 30 cadernos incluídos
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar countdown aparece com HH:MM:SS e persiste ao recarregar**

Recarregar a página — o timer não deve reiniciar do zero (localStorage).

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/UrgencySection.jsx
git commit -m "feat: UrgencySection countdown HH:MM:SS + preço riscado + holofote"
```

---

### Task 12: GuaranteeSection

**Files:**
- Modify: `src/components/sections/GuaranteeSection.jsx`

- [ ] **Step 1: Substituir `src/components/sections/GuaranteeSection.jsx`**

```jsx
import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import gsap from 'gsap'

const SEALS = ['Hotmart Secured', 'Pagamento Seguro', 'Satisfação Garantida']

export default function GuaranteeSection() {
  const ref = useScrollAnimation((el) => {
    gsap.from(el.querySelector('.shield-icon'), {
      scale: 0,
      rotation: -15,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
      },
    })
  })

  return (
    <section
      ref={ref}
      className="stars-bg relative overflow-hidden px-5 py-16 text-center"
      style={{ background: 'linear-gradient(160deg, #2d1b69 0%, #1e1b4b 100%)' }}
    >
      <div className="glow-orb" style={{ width: '200px', height: '200px', background: 'rgba(0,200,81,0.12)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      <div className="relative mx-auto max-w-md">
        <div className="shield-icon mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full text-5xl"
          style={{
            background: 'linear-gradient(135deg, #00C851, #00a040)',
            boxShadow: '0 0 40px rgba(0,200,81,0.5)',
          }}>
          🛡️
        </div>

        <h2 className="mb-4 text-3xl font-black text-white">
          Garantia Incondicional de{' '}
          <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(90deg, #00C851, #00e860)' }}>7 Dias</span>
        </h2>

        <p className="mb-8 leading-relaxed text-purple-200">
          Compra 100% segura. Se por qualquer motivo você não ficar satisfeita, basta enviar um e-mail em até 7 dias e devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {SEALS.map((seal) => (
            <motion.div
              key={seal}
              className="rounded-xl px-4 py-2 text-sm font-bold text-purple-200"
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(167,139,250,0.25)',
              }}
              whileHover={{ borderColor: 'rgba(0,200,81,0.5)', color: '#ffffff' }}
            >
              ✅ {seal}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/GuaranteeSection.jsx
git commit -m "feat: GuaranteeSection escudo GSAP scale-in + selos Framer Motion"
```

---

### Task 13: FAQSection com AnimatePresence

**Files:**
- Modify: `src/components/sections/FAQSection.jsx`

- [ ] **Step 1: Substituir `src/components/sections/FAQSection.jsx`**

```jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQS } from '../../constants/faqs'

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        background: 'rgba(0,0,0,0.3)',
        border: `1px solid ${open ? 'rgba(167,139,250,0.5)' : 'rgba(167,139,250,0.2)'}`,
        transition: 'border-color 0.2s',
      }}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className="font-bold text-white">{faq.question}</span>
        <motion.span
          className="flex-shrink-0 text-purple-300 text-lg"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-purple-200">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section
      className="stars-bg relative overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(160deg, #1e1b4b 0%, #2d1b69 100%)' }}
    >
      <div className="relative mx-auto max-w-md">
        <h2 className="mb-8 text-center text-3xl font-black text-white">
          Perguntas <span className="gradient-text">Frequentes</span>
        </h2>

        <div className="flex flex-col gap-3">
          {FAQS.map(faq => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar accordion abre/fecha com animação suave**

Clicar nas perguntas: resposta deve expandir/colapsar com altura animada, ícone "+" rotaciona para "×".

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/FAQSection.jsx
git commit -m "feat: FAQSection accordion Framer Motion AnimatePresence"
```

---

### Task 14: FooterSection

**Files:**
- Modify: `src/components/sections/FooterSection.jsx`

- [ ] **Step 1: Substituir `src/components/sections/FooterSection.jsx`**

```jsx
import CtaButton from '../ui/CtaButton'

export default function FooterSection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 text-center"
      style={{ background: 'linear-gradient(160deg, #7c2d12 0%, #831843 35%, #4c1d95 70%, #1e1b4b 100%)' }}
    >
      <div className="glow-orb" style={{ width: '300px', height: '200px', background: 'rgba(251,146,60,0.2)', top: '0', left: '50%', transform: 'translateX(-50%)', filter: 'blur(50px)' }} />

      <div className="relative mx-auto max-w-md">
        <h2 className="mb-2 text-3xl font-black text-white md:text-4xl">
          Oferta Não Vai Durar{' '}
          <span className="gradient-text">Para Sempre!</span>
        </h2>
        <p className="mb-8 text-lg font-bold text-orange-300">
          Compre Agora e Garanta 60% OFF 🏷️
        </p>

        <div
          className="mb-8 rounded-2xl p-6"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div className="mb-3 flex justify-center gap-2 text-sm font-semibold text-purple-200">
            <span>✅ 30 cadernos</span>
            <span>·</span>
            <span>✅ 900+ páginas</span>
            <span>·</span>
            <span>✅ Acesso imediato</span>
          </div>
          <div className="mb-4">
            <span className="text-4xl font-black text-white">R$</span>
            <span className="text-6xl font-black" style={{ color: '#00C851' }}>37</span>
          </div>
          <div className="cta-section-anchor">
            <CtaButton label="QUERO AGORA POR R$37 →" size="xl" />
          </div>
        </div>

        <div
          className="rounded-xl p-4 text-xs text-purple-400"
          style={{ borderTop: '1px solid rgba(167,139,250,0.15)' }}
        >
          <p className="mb-1 font-bold text-purple-300">Copyright © 2026 ColorBox — Todos os direitos reservados</p>
          <p>contato: <a href="mailto:suporte@colorbox.com.br" className="underline hover:text-purple-200">suporte@colorbox.com.br</a></p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/FooterSection.jsx
git commit -m "feat: FooterSection gradiente entardecer + CTA final"
```

---

### Task 15: Revisão final e build de produção

**Files:**
- Nenhum arquivo novo — verificação e ajustes

- [ ] **Step 1: Rodar o dev server e percorrer toda a página**

```bash
pnpm dev
```

Checklist visual (mobile 390px via DevTools):
- [ ] Hero: gradiente escuro, headline gradiente dourado, 3 cadernos flutuando, CTA verde pulsando
- [ ] Pain: 4 cards deslizam da esquerda ao scroll
- [ ] Benefits: 2 headlines coloridos, 3 cards com hover
- [ ] Characters: grade 4 colunas com fotos reais, card "+20"
- [ ] Testimonials: 3 cards com scroll horizontal
- [ ] Urgency: countdown HH:MM:SS, preço riscado, CTA máximo
- [ ] Guarantee: escudo animado, 3 selos
- [ ] FAQ: accordion abre/fecha suavemente
- [ ] Footer: gradiente laranja→rosa→roxo, preço grande, CTA
- [ ] FloatingCTA: aparece após 2s no mobile, some quando CTA visível

- [ ] **Step 2: Build de produção**

```bash
pnpm build
```

Esperado: build sem erros, `dist/` gerado.

- [ ] **Step 3: Preview do build**

```bash
pnpm preview
```

Confirmar que tudo funciona no preview (sem referências a localhost:5173).

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "feat: redesign completo Noite Pixar — GSAP + Framer Motion + imagens reais"
```
