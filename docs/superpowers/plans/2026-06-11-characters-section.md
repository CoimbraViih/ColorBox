# Seção de Personagens (Milestone 2) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir a vitrine completa do produto: grid responsivo com os 30 cadernos de colorir, dados centralizados em `constants/characters.js` e CTA secundário após o grid.

**Architecture:** Mesma abordagem do Hero — dados em arquivo de constants, card visual em CSS puro (placeholder com emoji + cor, trocável por `<img>` quando houver artes reais), seção montada em `CharactersSection.jsx` e plugada no `App.jsx` logo após o `HeroSection`. Sem estado, sem props drilling — o grid é 100% estático.

**Tech Stack:** React 19 (JSX puro, sem TS), Tailwind CSS v4 (classes inline, tokens `brand-*` já definidos em `src/index.css`), pnpm.

**Verificação:** O projeto não tem framework de testes (decisão do CLAUDE.md — página estática). Cada task é verificada com `pnpm build` (sem erros) e checagem visual no `pnpm dev`.

---

## File Structure

| Arquivo | Ação | Responsabilidade |
|---|---|---|
| `src/constants/characters.js` | Criar | Array com os 30 cadernos (id, nome, emoji, cor de fundo) |
| `src/components/ui/CharacterCard.jsx` | Criar | Card visual de um caderno (placeholder CSS, pronto p/ trocar por imagem) |
| `src/components/sections/CharactersSection.jsx` | Criar | Headline da seção + grid responsivo + CTA secundário |
| `src/App.jsx` | Modificar | Renderizar `CharactersSection` após `HeroSection` |

---

### Task 1: Dados dos 30 cadernos em `constants/characters.js`

**Files:**
- Create: `src/constants/characters.js`

- [ ] **Step 1: Criar o arquivo de constants**

Os 9 temas do produto (CLAUDE.md) distribuídos em 30 volumes. Campo `image: null` reservado para quando as artes reais chegarem.

```js
// 30 cadernos distribuídos pelos 9 temas do produto.
// `image: null` — substituir pelo import da arte real quando disponível.
export const CHARACTERS = [
  { id: 1, name: 'Frozen Vol. 1', emoji: '❄️', bg: 'bg-sky-400', image: null },
  { id: 2, name: 'Frozen Vol. 2', emoji: '⛄', bg: 'bg-sky-500', image: null },
  { id: 3, name: 'Frozen Vol. 3', emoji: '👑', bg: 'bg-cyan-400', image: null },
  { id: 4, name: 'Frozen Vol. 4', emoji: '🏔️', bg: 'bg-blue-400', image: null },
  { id: 5, name: 'Barbie Vol. 1', emoji: '💖', bg: 'bg-fuchsia-500', image: null },
  { id: 6, name: 'Barbie Vol. 2', emoji: '👗', bg: 'bg-pink-500', image: null },
  { id: 7, name: 'Barbie Vol. 3', emoji: '💅', bg: 'bg-fuchsia-400', image: null },
  { id: 8, name: 'Barbie Vol. 4', emoji: '🦄', bg: 'bg-pink-400', image: null },
  { id: 9, name: 'Peppa Pig Vol. 1', emoji: '🐷', bg: 'bg-brand-pink', image: null },
  { id: 10, name: 'Peppa Pig Vol. 2', emoji: '🐽', bg: 'bg-rose-400', image: null },
  { id: 11, name: 'Peppa Pig Vol. 3', emoji: '🌧️', bg: 'bg-rose-500', image: null },
  { id: 12, name: 'Peppa Pig Vol. 4', emoji: '🛝', bg: 'bg-pink-300', image: null },
  { id: 13, name: 'Moana Vol. 1', emoji: '🌊', bg: 'bg-teal-500', image: null },
  { id: 14, name: 'Moana Vol. 2', emoji: '🏝️', bg: 'bg-emerald-400', image: null },
  { id: 15, name: 'Moana Vol. 3', emoji: '⛵', bg: 'bg-teal-400', image: null },
  { id: 16, name: 'Turma da Mônica Vol. 1', emoji: '🐰', bg: 'bg-red-500', image: null },
  { id: 17, name: 'Turma da Mônica Vol. 2', emoji: '🍉', bg: 'bg-green-500', image: null },
  { id: 18, name: 'Turma da Mônica Vol. 3', emoji: '🦷', bg: 'bg-yellow-400', image: null },
  { id: 19, name: 'Turma da Mônica Vol. 4', emoji: '🐶', bg: 'bg-red-400', image: null },
  { id: 20, name: 'Lol Surprise Vol. 1', emoji: '🎀', bg: 'bg-purple-400', image: null },
  { id: 21, name: 'Lol Surprise Vol. 2', emoji: '✨', bg: 'bg-violet-500', image: null },
  { id: 22, name: 'Lol Surprise Vol. 3', emoji: '🎁', bg: 'bg-purple-500', image: null },
  { id: 23, name: 'Stitch Vol. 1', emoji: '👽', bg: 'bg-blue-600', image: null },
  { id: 24, name: 'Stitch Vol. 2', emoji: '🌺', bg: 'bg-indigo-500', image: null },
  { id: 25, name: 'Stitch Vol. 3', emoji: '🏄', bg: 'bg-blue-500', image: null },
  { id: 26, name: 'Show da Luna Vol. 1', emoji: '🔭', bg: 'bg-brand-orange', image: null },
  { id: 27, name: 'Show da Luna Vol. 2', emoji: '🧪', bg: 'bg-orange-400', image: null },
  { id: 28, name: 'Show da Luna Vol. 3', emoji: '🌙', bg: 'bg-amber-500', image: null },
  { id: 29, name: 'Arco-íris Vol. 1', emoji: '🌈', bg: 'bg-brand-purple', image: null },
  { id: 30, name: 'Arco-íris Vol. 2', emoji: '🎨', bg: 'bg-violet-400', image: null },
]
```

- [ ] **Step 2: Verificar build**

Run: `pnpm build`
Expected: build conclui sem erros (arquivo ainda não importado, mas valida sintaxe via lint do Vite/esbuild).

- [ ] **Step 3: Commit**

```bash
git add src/constants/characters.js
git commit -m "feat: dados dos 30 cadernos em constants/characters.js"
```

---

### Task 2: Componente `CharacterCard`

**Files:**
- Create: `src/components/ui/CharacterCard.jsx`

- [ ] **Step 1: Criar o componente**

Card no mesmo estilo do mockup do Hero (emoji grande + nome, borda branca, sombra, arredondado). Quando `character.image` existir, renderiza `<img>` no lugar do placeholder.

```jsx
export default function CharacterCard({ character }) {
  return (
    <div
      className={`${character.bg} flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-2xl border-4 border-white p-3 shadow-xl shadow-black/20 transition-transform duration-200 hover:scale-105`}
    >
      {character.image ? (
        <img
          src={character.image}
          alt={`Caderno de colorir ${character.name}`}
          loading="lazy"
          className="h-full w-full rounded-xl object-cover"
        />
      ) : (
        <>
          <span className="text-4xl sm:text-5xl">{character.emoji}</span>
          <span className="text-center text-xs font-extrabold leading-tight text-white drop-shadow sm:text-sm">
            {character.name}
          </span>
        </>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `pnpm build`
Expected: build sem erros.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/CharacterCard.jsx
git commit -m "feat: componente CharacterCard com placeholder CSS"
```

---

### Task 3: Seção `CharactersSection` + integração no App

**Files:**
- Create: `src/components/sections/CharactersSection.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Criar a seção**

Grid mobile-first: 2 colunas no celular, 3 em `sm`, 5 em `lg`. Headline de venda + badge de quantidade + CTA secundário reutilizando `CtaButton`.

```jsx
import CtaButton from '../ui/CtaButton'
import CharacterCard from '../ui/CharacterCard'
import { CHARACTERS } from '../../constants/characters'

export default function CharactersSection() {
  return (
    <section className="bg-white px-5 py-12 font-sans sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <span className="rounded-full bg-brand-purple/10 px-5 py-2 text-sm font-bold text-brand-purple">
          🎨 Olha tudo que vem no ColorBox
        </span>

        <h2 className="mt-4 text-balance text-center text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
          São <span className="text-brand-pink">30 cadernos</span> com os
          personagens favoritos das crianças
        </h2>

        <p className="mt-3 max-w-2xl text-balance text-center text-base font-semibold text-gray-600 sm:text-lg">
          Centenas de desenhos em PDF prontos para imprimir — em casa ou na
          gráfica, quantas vezes quiser.
        </p>

        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CHARACTERS.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-bold text-gray-800">
          Tudo isso por apenas{' '}
          <span className="text-cta-green">R$37</span> — pagamento único 👇
        </p>

        <div className="mt-4 w-full max-w-md">
          <CtaButton />
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Plugar no App.jsx**

Modify `src/App.jsx` para:

```jsx
import HeroSection from './components/sections/HeroSection'
import CharactersSection from './components/sections/CharactersSection'

export default function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CharactersSection />
    </main>
  )
}
```

- [ ] **Step 3: Verificação visual**

Run: `pnpm dev`
Expected:
- Grid com 30 cards após o Hero; 2 colunas em viewport mobile (~390px), 5 em desktop.
- CTA verde "QUERO AGORA POR R$37" após o grid apontando para `https://pay.hotmart.com/7914058`.
- Sem warnings de `key` no console.

- [ ] **Step 4: Verificar build**

Run: `pnpm build`
Expected: build sem erros.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/CharactersSection.jsx src/App.jsx
git commit -m "feat: CharactersSection com grid de 30 cadernos e CTA secundário"
```

---

### Task 4: Atualizar PLAN.md e finalizar

**Files:**
- Modify: `PLAN.md:26-28`

- [ ] **Step 1: Marcar checkboxes do Milestone 2**

```markdown
## Milestone 2 — Seção de Personagens
- [x] Grid de 30 cadernos com thumbnails (imagens placeholder ou reais)
- [x] Dados em `constants/characters.js`
- [x] CTA secundário após o grid
```

- [ ] **Step 2: Commit**

```bash
git add PLAN.md
git commit -m "docs: marca Milestone 2 como concluido no PLAN.md"
```
