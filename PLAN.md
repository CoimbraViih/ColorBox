# ColorBox — Plano de Desenvolvimento

## Milestone 0 — Bootstrap do Projeto
- [x] Inicializar projeto React + Vite com pnpm
- [x] Configurar Tailwind CSS v4
- [x] Estrutura de pastas (`src/components/sections`, `ui`, `assets`, `hooks`, `constants`)
- [x] Google Fonts (Poppins) no `index.html`
- [x] Meta Pixel placeholder no `index.html`
- [x] Deploy inicial na Vercel (pipeline ativo)

**Entrega:** ✅ Página em branco rodando na Vercel — https://colorbox-two.vercel.app (pipeline GitHub → Vercel ativo)

---

## Milestone 1 — Hero Section
- [x] Componente `HeroSection` com headline, sub-headline, CTA
- [x] Botão "QUERO AGORA POR R$37" → link Hotmart
- [x] Imagem/mockup dos cadernos em destaque (mockup CSS — trocar por artes reais depois)
- [x] Layout responsivo mobile-first

**Entrega:** Primeira dobra da página convertendo

---

## Milestone 2 — Seção de Personagens
- [x] Grid de 30 cadernos com thumbnails (imagens placeholder ou reais)
- [x] Dados em `constants/characters.js`
- [x] CTA secundário após o grid

**Entrega:** ✅ Vitrine completa do produto no ar — https://colorbox-two.vercel.app (PR #3 merged)

---

## Milestone 3 — Benefícios + Prova Social
- [x] Seção de 5 benefícios com ícones
- [x] 4 depoimentos com avatar emoji, nome e texto
- [x] Dados em `constants/testimonials.js` e `constants/benefits.js`

**Entrega:** ✅ Elementos de credibilidade e confiança no ar — https://colorbox-two.vercel.app (PR #4 merged)

---

## Milestone 4 — Urgência + Garantia
- [x] Hook `useCountdown` com timer regressivo
- [x] Componente `UrgencySection` com contador visual
- [x] `GuaranteeSection` com selo 7 dias e texto de segurança

**Entrega:** ✅ Elementos de conversão e remoção de objeções no ar — https://colorbox-two.vercel.app (PR #5 merged)

---

## Milestone 5 — FAQ + Footer + Botão Flutuante
- [x] `FAQSection` com accordion (4 perguntas)
- [x] Footer com CTA final e link de suporte
- [x] Botão flutuante fixo no mobile (bottom CTA)

**Entrega:** ✅ Página 100% completa — https://colorbox-two.vercel.app (PR #6 merged)

---

## Milestone 6 — Polimento e Performance
- [ ] Revisar copy em todas as seções
- [ ] Otimizar imagens (WebP, lazy loading)
- [ ] Lighthouse score mobile ≥ 85
- [ ] Testar fluxo completo: landing → checkout Hotmart
- [ ] Configurar domínio customizado na Vercel

**Entrega:** Página pronta para tráfego pago
