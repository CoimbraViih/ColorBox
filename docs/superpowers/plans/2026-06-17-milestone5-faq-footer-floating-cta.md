# Milestone 5 — FAQ + Footer + Botão Flutuante

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Completar a landing page com FAQSection (accordion), FooterSection (CTA final + copyright) e FloatingCTA (botão fixo mobile sempre visível).

**Architecture:** Três novos componentes isolados seguindo o padrão existente (JSX puro, dados via constants, Tailwind inline). O `FloatingCTA` é um componente `ui/` reutilizável; `FAQSection` e `FooterSection` vão em `sections/`. O `App.jsx` é atualizado por último para montar tudo.

**Tech Stack:** React 19, Vite 6, Tailwind CSS v4, JSX puro (sem TypeScript, sem testes automatizados)

## Global Constraints

- JSX puro — sem TypeScript
- Tailwind classes inline — sem CSS modules
- Componentes: PascalCase (`FAQSection.jsx`)
- Constantes: camelCase (`faqs.js`)
- Sem estado global — `useState` local por componente
- Mobile-first — público usa celular
- Cores: rosa `#FF69B4` (`brand-pink`), roxo `#9B59B6` (`brand-purple`), laranja `#FF8C00`
- CTA sempre aponta para `HOTMART_CHECKOUT_URL` de `constants/links.js`
- `CtaButton` existente em `src/components/ui/CtaButton.jsx` deve ser reutilizado sem modificação
- Verificação: `pnpm dev` + inspecionar no browser (sem framework de testes)

---

### Task 1: Dados do FAQ

**Files:**
- Create: `src/constants/faqs.js`

**Interfaces:**
- Produces: array `FAQS` exportado, cada item `{ id, question, answer }`

- [ ] **Step 1: Criar o arquivo de constantes**

```js
// src/constants/faqs.js
export const FAQS = [
  {
    id: 1,
    question: 'Como vou receber os cadernos após a compra?',
    answer:
      'Assim que o pagamento for confirmado, você recebe acesso imediato pelo Hotmart Club. É só entrar na plataforma e baixar os 30 PDFs na hora — sem esperar, sem frete.',
  },
  {
    id: 2,
    question: 'Preciso de algum programa especial para abrir os arquivos?',
    answer:
      'Não! Os cadernos são em PDF, um formato que qualquer celular, tablet ou computador já abre. Você pode imprimir em casa, numa gráfica ou num mercado — do jeito que preferir.',
  },
  {
    id: 3,
    question: 'Posso imprimir quantas vezes quiser?',
    answer:
      'Sim! Depois que você compra, os arquivos são seus para sempre. Pode imprimir uma vez, dez vezes, cem vezes — ideal para usar com vários filhos ou na sala de aula.',
  },
  {
    id: 4,
    question: 'E se eu não gostar? Tem garantia?',
    answer:
      'Tem sim! Você tem 7 dias de garantia total. Se por qualquer motivo não ficar satisfeita, é só entrar em contato com o suporte da Hotmart e receber 100% do seu dinheiro de volta. Sem perguntas.',
  },
]
```

- [ ] **Step 2: Verificar no browser**

Abrir `src/constants/faqs.js` e confirmar que os 4 objetos estão corretos — sem erro de sintaxe.

- [ ] **Step 3: Commit**

```bash
git add src/constants/faqs.js
git commit -m "feat: add FAQ constants data"
```

---

### Task 2: FAQSection — Accordion

**Files:**
- Create: `src/components/sections/FAQSection.jsx`
- Uses: `src/constants/faqs.js`

**Interfaces:**
- Consumes: `FAQS` de `../../constants/faqs` — array `{ id, question, answer }`
- Produces: componente `FAQSection` sem props

- [ ] **Step 1: Criar o componente**

```jsx
// src/components/sections/FAQSection.jsx
import { useState } from 'react'
import { FAQS } from '../../constants/faqs'

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  function toggle(index) {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white px-5 py-14">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-3xl font-black leading-tight text-gray-800 sm:text-4xl">
          Ainda tem{' '}
          <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
            dúvidas?
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-gray-500 sm:text-lg">
          As perguntas mais frequentes das mães que já compraram
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl bg-white shadow-md transition-shadow ${
                  isOpen ? 'shadow-lg' : ''
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                    isOpen ? 'border-l-4 border-brand-pink' : 'border-l-4 border-transparent'
                  }`}
                >
                  <span className="text-base font-bold text-gray-800 sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-2xl font-bold text-brand-purple transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Adicionar FAQSection no App.jsx temporariamente para verificar**

```jsx
// src/App.jsx — adicionar import e componente ao final do <main>
import FAQSection from './components/sections/FAQSection'
// ...
<FAQSection />
```

- [ ] **Step 3: Rodar o dev server e verificar**

```bash
pnpm dev
```

Abrir `http://localhost:5173` no browser, rolar até a seção FAQ e verificar:
- 4 perguntas aparecem com cards `rounded-2xl` e `shadow-md`
- Clicar em uma pergunta: abre com animação suave, borda esquerda rosa aparece, `+` rotaciona para `×`
- Clicar na mesma: fecha
- Clicar em outra enquanto uma está aberta: a anterior fecha, a nova abre

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/FAQSection.jsx src/App.jsx
git commit -m "feat: add FAQSection with accordion"
```

---

### Task 3: FooterSection — CTA Final + Copyright

**Files:**
- Create: `src/components/sections/FooterSection.jsx`
- Uses: `src/components/ui/CtaButton.jsx` (sem modificação)

**Interfaces:**
- Consumes: `CtaButton` de `../ui/CtaButton` — sem props obrigatórias
- Produces: componente `FooterSection` sem props

- [ ] **Step 1: Criar o componente**

```jsx
// src/components/sections/FooterSection.jsx
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
```

- [ ] **Step 2: Adicionar FooterSection no App.jsx temporariamente para verificar**

```jsx
// src/App.jsx — adicionar import e componente ao final do <main>
import FooterSection from './components/sections/FooterSection'
// ...
<FooterSection />
```

- [ ] **Step 3: Rodar e verificar**

```bash
pnpm dev
```

Rolar até o final da página e verificar:
- Fundo cinza escuro (`bg-gray-900`) contrastando com as seções anteriores
- Emoji 🎨 + "ColorBox" em branco
- `CtaButton` verde centralizado e funcional (link abre Hotmart)
- Copyright em cinza claro no rodapé

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/FooterSection.jsx src/App.jsx
git commit -m "feat: add FooterSection with final CTA"
```

---

### Task 4: FloatingCTA — Botão Fixo Mobile

**Files:**
- Create: `src/components/ui/FloatingCTA.jsx`
- Uses: `src/components/ui/CtaButton.jsx` (sem modificação)

**Interfaces:**
- Consumes: `CtaButton` de `./CtaButton` — sem props obrigatórias
- Produces: componente `FloatingCTA` sem props

- [ ] **Step 1: Criar o componente**

```jsx
// src/components/ui/FloatingCTA.jsx
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
```

- [ ] **Step 2: Adicionar FloatingCTA no App.jsx**

```jsx
// src/App.jsx — adicionar import e montar fora do <main>
import FloatingCTA from './components/ui/FloatingCTA'
// ...
<FloatingCTA />
```

- [ ] **Step 3: Rodar e verificar**

```bash
pnpm dev
```

No DevTools do browser, ativar emulação mobile (ex: iPhone 12). Verificar:
- Barra branca com `CtaButton` fixada no rodapé da tela em toda a página
- Ao rolar, o botão permanece visível o tempo todo
- Em viewport desktop (`md:` em diante), o botão flutuante **não aparece**
- O botão não cobre conteúdo importante — verificar que o `FooterSection` não fica totalmente coberto

- [ ] **Step 4: Adicionar padding-bottom no `<main>` para compensar a barra flutuante**

O `FloatingCTA` tem ~76px de altura no mobile. O conteúdo final pode ficar parcialmente coberto. Adicionar `pb-20 md:pb-0` no `<main>` de `App.jsx`:

```jsx
<main className="min-h-screen pb-20 md:pb-0">
```

- [ ] **Step 5: Verificar que o Footer não fica coberto**

Rolar até o final da página no mobile emulado e confirmar que o copyright do `FooterSection` fica visível acima da barra flutuante.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/FloatingCTA.jsx src/App.jsx
git commit -m "feat: add FloatingCTA fixed bottom bar for mobile"
```

---

### Task 5: Montar App.jsx Final

**Files:**
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes (todos já importados nas tasks anteriores):
  - `HeroSection`, `CharactersSection`, `BenefitsSection`, `TestimonialsSection`, `UrgencySection`, `GuaranteeSection` — existentes
  - `FAQSection` — criado em Task 2
  - `FooterSection` — criado em Task 3
  - `FloatingCTA` — criado em Task 4

- [ ] **Step 1: Garantir que o App.jsx está com todos os componentes na ordem correta**

```jsx
// src/App.jsx
import HeroSection from './components/sections/HeroSection'
import CharactersSection from './components/sections/CharactersSection'
import BenefitsSection from './components/sections/BenefitsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import UrgencySection from './components/sections/UrgencySection'
import GuaranteeSection from './components/sections/GuaranteeSection'
import FAQSection from './components/sections/FAQSection'
import FooterSection from './components/sections/FooterSection'
import FloatingCTA from './components/ui/FloatingCTA'

export default function App() {
  return (
    <>
      <main className="min-h-screen pb-20 md:pb-0">
        <HeroSection />
        <CharactersSection />
        <BenefitsSection />
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

- [ ] **Step 2: Verificação final completa**

```bash
pnpm dev
```

Percorrer a página inteira no mobile emulado e verificar a ordem:
1. Hero ✓
2. Personagens ✓
3. Benefícios ✓
4. Depoimentos ✓
5. Urgência ✓
6. Garantia ✓
7. FAQ — accordion funciona, uma pergunta por vez ✓
8. Footer — CTA verde + copyright ✓
9. Barra flutuante — sempre visível no mobile, invisível no desktop ✓

- [ ] **Step 3: Build de produção**

```bash
pnpm build
```

Esperado: build sem erros e sem warnings críticos.

- [ ] **Step 4: Commit final**

```bash
git add src/App.jsx
git commit -m "feat: milestone 5 complete — FAQ, Footer, FloatingCTA"
```

---

### Task 6: Atualizar PLAN.md

**Files:**
- Modify: `PLAN.md`

- [ ] **Step 1: Marcar Milestone 5 como concluído**

No `PLAN.md`, substituir os `- [ ]` do Milestone 5 por `- [x]` e atualizar a linha de entrega:

```markdown
## Milestone 5 — FAQ + Footer + Botão Flutuante
- [x] `FAQSection` com accordion (4 perguntas)
- [x] Footer com CTA final e link de suporte
- [x] Botão flutuante fixo no mobile (bottom CTA)

**Entrega:** ✅ Página 100% completa
```

- [ ] **Step 2: Commit**

```bash
git add PLAN.md
git commit -m "docs: marca Milestone 5 como concluido no PLAN.md"
```
