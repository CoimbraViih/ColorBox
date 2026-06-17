# ColorBox — Redesign Cinematográfico Completo

**Data:** 2026-06-17  
**Status:** Aprovado

---

## Contexto

Redesign completo da landing page de vendas do ColorBox (kit 30 cadernos PDF, R$37, Hotmart). Público-alvo: mães de crianças 3–10 anos via Meta Ads mobile. A página existente tem todas as seções mas com design básico. O objetivo é substituir completamente o visual por um estilo "Noite Pixar" cinematográfico com animações GSAP ScrollTrigger + Framer Motion.

---

## Decisões de Design

### Tema Visual: "Noite Pixar"
- **Background base:** roxo escuro `#1e1b4b` → `#2d1b69` → `#3b0764`
- **Estrelas:** dot pattern `rgba(255,255,255,0.08)` como camada fixa
- **Glow:** orbs radial-gradient difusos em roxo/rosa em cada seção
- **Acentos:** dourado `#fde68a`, laranja `#fb923c`, rosa `#f472b6`
- **CTA:** verde `#00C851` com glow animado pulse
- **Cards:** `border: 1px solid rgba(167,139,250,0.2)`, `box-shadow` neon interno
- **Sem bordas finas** — tudo com shadow dramática e `rounded-2xl`

### Tipografia
- **Poppins 900** em todos os headlines
- **Poppins 400/600** no corpo e sub-textos
- Headlines com `background-clip: text` gradiente dourado/laranja/rosa nos destaques

### Estratégia de Animação
- **GSAP + ScrollTrigger:** scroll-driven animations (fade-up stagger, pin, reveal)
  - Hero: stagger entry de todos os elementos ao load
  - Personagens: stagger dos cards ao entrar no viewport
  - Pain points: slide-in em cascata
  - Countdown: pulse nos dígitos
  - Guarantee: scale-in no escudo
- **Framer Motion:** micro-interações e hover states
  - Cards de cadernos: `whileHover` scale + glow
  - CTA buttons: `whileHover` + `whileTap`
  - FAQ accordion: `AnimatePresence` + `motion.div` na abertura
  - FloatingCTA: `motion.div` com `initial/animate` slide-up entry

### Mobile-First
- Layout base: 390px
- Grid de personagens: 4 colunas no mobile
- CTAs: mínimo 56px de altura
- FloatingCTA fixo no bottom, oculto via IntersectionObserver quando CTA da seção visível

---

## Estrutura de Seções

### 1. HeroSection
- Badge pill: "✨ ACESSO IMEDIATO APÓS A COMPRA"
- H1: "Seu Filho Vai Largar o Celular por Horas"
- Sub: 30 cadernos PDF com personagens (Frozen, Barbie, Peppa, Stitch, Moana...)
- Mockup: 3 cadernos em perspectiva (emoji placeholder até ter artes reais)
- CTA principal verde com bounce
- Linha urgência: "⚡ Oferta por tempo limitado | 🔒 Compra 100% segura"
- Prova social: "⭐⭐⭐⭐⭐ Mais de 3.200 mães satisfeitas"
- GSAP: stagger fade-up, delay 100ms progressivo por elemento

### 2. PainSection (nova)
- H2: "Você Reconhece Essa Situação?"
- 4 pain points com ❌
- Solução revelada: "Seus problemas acabaram hoje! 🎉"
- GSAP: slide-in dos pain points em cascata ao scroll

### 3. BenefitsSection
- Dois headlines: "Filhos VÃO AMAR" (rosa) + "Você VAI AGRADECER" (laranja)
- 3 cards com ícone + headline + texto
- CTA verde
- Framer Motion: whileHover nos cards

### 4. CharactersSection *(design aprovado)*
- Badge + headline "30 Cadernos para Colorir / Mais de 900 páginas"
- Resumo 1 linha
- Stats pills: 30 cadernos · 900+ páginas · 🖨️ Imprime infinito
- Grade 4 colunas: 15 cadernos com imagens reais + card "+21 cadernos"
- Imagens em `public/cadernos/` (16 já copiadas)
- CTA verde
- GSAP: stagger reveal dos cards; Framer Motion: whileHover scale+glow

### 5. TestimonialsSection
- Headline + "⭐⭐⭐⭐⭐ Avaliação média 4.9/5"
- 3 cards scroll horizontal no mobile
- Conteúdo: foto circular, nome+cidade, estrelas, depoimento
- Framer Motion: fade-in lateral ao entrar no viewport

### 6. UrgencySection
- Background mais escuro (quase preto) com holofote central
- Headline "⚡ ATENÇÃO: Oferta Especial Encerrando Em:"
- Countdown HH:MM:SS — 4 dígitos separados em cards, 72px, localStorage
- Preço: ~~R$97~~ → **R$37** → "Economia de R$60 (60% OFF)"
- CTA máximo "GARANTIR MINHA OFERTA AGORA →"
- GSAP: pulse nos dígitos; Framer Motion: entrada do countdown

### 7. GuaranteeSection
- Escudo verde grande com checkmark
- H2: "Garantia Incondicional de 7 Dias"
- Texto + 3 selos
- GSAP: scale-in no escudo

### 8. FAQSection
- 4 perguntas accordion
- `<details>`/`<summary>` nativo + Framer Motion `AnimatePresence` no conteúdo

### 9. FooterSection
- Gradiente entardecer (laranja+rosa+roxo)
- Headline + CTA final + copyright + email suporte

### 10. FloatingCTA
- Framer Motion: slide-up entry inicial
- IntersectionObserver: ocultar quando CTA da seção visível
- Verde com pulse

---

## Arquitetura de Componentes

```
src/
  components/
    sections/
      HeroSection.jsx          ← reescrito
      PainSection.jsx          ← novo
      BenefitsSection.jsx      ← reescrito
      CharactersSection.jsx    ← reescrito (imagens reais)
      TestimonialsSection.jsx  ← reescrito
      UrgencySection.jsx       ← reescrito
      GuaranteeSection.jsx     ← reescrito
      FAQSection.jsx           ← reescrito
      FooterSection.jsx        ← reescrito
    ui/
      CtaButton.jsx            ← reescrito
      FloatingCTA.jsx          ← reescrito
      CountdownTimer.jsx       ← novo (extraído de UrgencySection)
      NotebookCard.jsx         ← novo
  hooks/
    useCountdown.js            ← mantido + fix localStorage
    useScrollAnimation.js      ← novo (wrapper GSAP/ScrollTrigger)
  constants/
    characters.js              ← atualizado (36 cadernos, paths das imagens)
    faqs.js                    ← mantido
    testimonials.js            ← mantido
    links.js                   ← mantido
public/
  cadernos/                    ← 16 imagens ✓ (barbie, lilo, moana, etc.)
```

---

## Pacotes Instalados

- `gsap 3.15.0` ✓
- `framer-motion 12.40.0` ✓

---

## Regras de Implementação

1. **Mobile-first** — base 390px, depois md: breakpoint
2. **Sem TypeScript** — JSX puro conforme CLAUDE.md
3. **Tailwind inline** — sem CSS modules
4. **Sem estado global** — componentes isolados
5. **Todos os CTAs** → `https://pay.hotmart.com/7914058`
6. **Imagens:** `loading="lazy"`, `alt` descritivo
7. **GSAP cleanup:** retornar função de cleanup em todos os useEffect com ScrollTrigger
8. **Framer Motion:** `"use client"` não necessário (não é Next.js)
9. **Performance:** `gsap.registerPlugin(ScrollTrigger)` uma vez no App.jsx
