# ColorBox — Briefing do Projeto

## Produto
Landing page de vendas para "ColorBox": 30 cadernos para colorir em PDF com personagens infantis populares (Frozen, Barbie, Peppa Pig, Moana, Turma da Mônica, Lol Surprise, Stitch, Show da Luna, Arco-íris). Preço único R$37, vendido via Hotmart (produto ID 7914058), entrega imediata via Hotmart Club.

## Objetivo
Converter tráfego pago (Meta Ads) em compradores. Público: mães e professoras de crianças 3–10 anos, acessando pelo celular.

## Stack
- React + Vite 6
- Tailwind CSS v4
- pnpm (gerenciador de pacotes)
- Vercel (deploy)

## Estrutura de Pastas
```
src/
  components/
    sections/       # Hero, Characters, Benefits, Testimonials, Urgency, Guarantee, FAQ, Footer
    ui/             # Botões, badges, selos reutilizáveis
  assets/
    images/         # Mockups dos cadernos, personagens, fotos de depoimentos
  hooks/            # useCountdown (timer de urgência)
  constants/        # Links Hotmart, dados de personagens, FAQs, depoimentos
  App.jsx
  main.jsx
docs/
  PRD.md
```

## Convenções
- Componentes: PascalCase (`HeroSection.jsx`)
- Arquivos de dados/constantes: camelCase (`characters.js`, `faqs.js`)
- Tailwind classes inline; sem CSS modules
- Sem TypeScript por enquanto — JSX puro
- Sem estado global — componentes isolados, dados via constants

## Integrações
- **Hotmart Checkout:** `https://pay.hotmart.com/7914058` — todos os CTAs apontam aqui
- **Meta Pixel:** script injetado via `index.html` `<head>` (ID do pixel a definir pelo cliente)
- Sem backend — página 100% estática

## Design Language
- Mobile-first (público usa celular)
- Cores primárias: rosa (`#FF69B4`), roxo (`#9B59B6`), laranja (`#FF8C00`)
- CTA buttons: verde (`#00C851`) ou laranja, texto "QUERO AGORA POR R$37", tamanho grande
- Tipografia: bold, impactante — Google Fonts: **Poppins**
- Ícones: Lucide React ou emojis inline
- Sem bordas finas — elementos com sombra e arredondamento generoso

## Seções da Página (ordem)
1. Hero — headline emocional + CTA principal
2. Personagens — grid 30 cadernos
3. Benefícios — 5 bullets com ícones
4. Depoimentos — 3–5 com foto e nome
5. Urgência — contador regressivo
6. Garantia — 7 dias
7. FAQ — 4 perguntas
8. Footer CTA — botão final + contato

## Comandos Úteis
```bash
pnpm dev        # dev server
pnpm build      # build de produção
pnpm preview    # preview do build
```
