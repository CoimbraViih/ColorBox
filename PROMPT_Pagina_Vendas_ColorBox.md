# PROMPT — Página de Vendas Cinematográfica: ColorBox

> Use este prompt para gerar a landing page de vendas do ColorBox com Claude Code, Cursor, Bolt.new ou qualquer agente de desenvolvimento. O prompt é otimizado para React + Vite + Tailwind CSS v4.

---

## CONTEXTO DO PRODUTO

Você vai construir a landing page de vendas do **ColorBox**: um kit com **30 cadernos para colorir em PDF** com personagens infantis populares (Frozen, Barbie, Peppa Pig, Moana, Turma da Mônica, LOL Surprise, Stitch, Show da Luna, Arco-íris, entre outros). Preço único de **R$37**, entrega imediata pelo **Hotmart Club**, garantia de 7 dias.

- **Checkout Hotmart:** `https://pay.hotmart.com/7914058`
- **Stack:** React + Vite 6 + Tailwind CSS v4 + pnpm
- **Deploy:** Vercel
- **Font:** Poppins (Google Fonts)

---

## PÚBLICO-ALVO

**Persona primária:** Mãe de criança entre 3 e 10 anos, classe C/D/E, acessa pelo celular via Meta Ads (Instagram/Facebook). Está cansada de criança pedindo tela, quer uma atividade criativa, barata e que funcione. Toma decisões emocionais e rápidas. Não tem paciência para páginas lentas ou confusas. Decide em menos de 60 segundos se vai comprar.

**Persona secundária:** Professora de educação infantil buscando material imprimível para sala de aula.

---

## ESTILO VISUAL: CINEMATOGRÁFICO

A página deve ter **impacto visual imediato**, como o primeiro frame de um filme infantil animado. Não é uma landing page genérica — é uma **experiência visual e emocional** que envolve a mãe e faz ela sentir que está dando algo especial para o filho.

**Diretrizes de design:**
- **Mobile-first obrigatório** — toda a hierarquia visual é projetada para 390px de largura
- **Backgrounds cinematográficos:** gradientes suaves de céu, nuvens, luz solar filtrada — não fundos lisos
- **Personagens 3D/animados** flutuando nas seções como mascotes vivos (use ilustrações PNG com transparência posicionadas absolutamente)
- **Mockup físico:** o produto digital deve parecer tangível — mostrar cadernos "saindo" de uma caixa ou empilhados em perspectiva
- **Paleta de cores:** rosa `#FF69B4`, roxo `#9B59B6`, laranja `#FF8C00`, verde CTA `#00C851`, fundo creme `#FFF8F0`
- **CTAs:** verde `#00C851` com texto branco bold, bordas arredondadas generosas (`rounded-2xl`), shadow dramática, tamanho mínimo 56px de altura no mobile
- **Tipografia:** Poppins Bold para headlines (700-900 weight), Poppins Regular para corpo. Headlines em caixa alta ou capitalização estratégica
- **Emojis inline** como micro-ícones emocionais (não substituem ícones UI)
- **Sem bordas finas** — tudo com `shadow-lg` ou `shadow-xl` e `rounded-2xl`
- **Animações sutis:** `animate-bounce` nos CTAs, `animate-pulse` no countdown, fade-in nas seções ao scroll (Intersection Observer)

---

## ESTRUTURA DA PÁGINA (ordem obrigatória)

### SEÇÃO 1 — HERO (primeira dobra, acima do fold)

**Objetivo:** Capturar atenção em 3 segundos e gerar desejo imediato.

**Layout mobile:** empilhado verticalmente
**Background:** gradiente de céu infantil animado (lavanda → azul claro → branco), com nuvens sutis

**Conteúdo:**
- Badge/pill no topo: `✨ ACESSO IMEDIATO APÓS A COMPRA`
- Headline principal (H1, Poppins 900, 2.2rem mobile): `"Seu Filho Vai Largar o Celular por Horas"` — ou variação emocional forte que conecte com mãe cansada de tela
- Sub-headline: `"30 Cadernos para Colorir em PDF com os Personagens que Ele Mais Ama"` — mencionar: Frozen, Barbie, Peppa, Stitch, Moana
- Mockup: imagem de cadernos coloridos empilhados ou em leque (perspectiva 3D)
- Personagem mascote (ex: Stitch ou Peppa) flutuando ao lado do mockup
- CTA principal: botão verde grande `"QUERO AGORA POR R$37 →"` com animação de bounce sutil
- Urgência logo abaixo do CTA: `"⚡ Oferta por tempo limitado | 🔒 Compra 100% segura"`
- Prova social: `"⭐⭐⭐⭐⭐ Mais de 3.200 mães satisfeitas"`

---

### SEÇÃO 2 — DOR E IDENTIFICAÇÃO

**Objetivo:** A mãe se ver na situação e pensar "isso é exatamente eu".

**Background:** creme `#FFF8F0` com imagem de criança entediada (use `object-cover opacity-20` como background sutil) e personagem 3D no canto superior direito

**Headline (H2):** `"Você Reconhece Essa Situação?"` — centralizado, Poppins Bold

**4 pain points com ❌ ícone:**
1. ❌ "Seu filho está sempre no celular ou tablet e você não sabe como mudar isso?"
2. ❌ "As tardes em casa viram uma batalha de 'não sei o que fazer'?"
3. ❌ "Você quer uma atividade criativa, mas cadernos de papelaria são caros e acabam rápido?"
4. ❌ "Queria dar algo especial pro seu filho mas sem gastar muito?"

**Solução revelada (bold, centralizado, cor primária):**
`"Seus problemas acabaram hoje! 🎉"`

---

### SEÇÃO 3 — BENEFÍCIOS EMOCIONAIS (para a mãe E para o filho)

**Objetivo:** Mostrar o produto como herói da história dos dois.

**Headline duplo (técnica: filho ama + mãe agradece):**
> H2: `"Filhos VÃO AMAR"` (cor rosa/roxo)
> H2: `"Você VAI AGRADECER"` (cor laranja/verde)

**Sub-texto (destaque em fundo coral/salmon claro):**
`"Transforme momentos de agitação em pura diversão criativa com os 30 Cadernos ColorBox."`

**Grid 2x2 com imagens mostrando contextos de uso:**
- 🍽️ No restaurante esperando o pedido
- 🚗 Na viagem de carro
- ☀️ Na tarde em casa
- 📚 Na sala de aula

**3 bullets de benefício com emoji (cards arredondados com shadow):**
- ✨ "Crianças mais calmas e focadas em apenas 15 minutos!"
- 🎨 "Personagens que elas já conhecem e amam — Frozen, Barbie, Peppa e muito mais"
- 💝 "O presente perfeito que educa enquanto diverte — sem tela!"

**CTA:** `"QUERO O COLORBOX POR R$37 →"` (verde, shadow dramática)

---

### SEÇÃO 4 — O QUE ESTÁ INCLUÍDO (showcase de personagens)

**Objetivo:** Mostrar quantidade e variedade — criar sensação de muito valor por pouco.

**Headline:** `"🎁 O Que Você Recebe Hoje:"` (Poppins Bold)

**Destaque em box colorido:**
> **30 Cadernos para Colorir em PDF**
> Mais de **900 páginas** de ilustrações exclusivas

**Grid de personagens (3 colunas mobile):** Cards com thumbnail de cada caderno + nome do personagem. Personagens incluídos:
- Frozen / Elsa
- Barbie
- Peppa Pig
- Moana
- Stitch
- Turma da Mônica
- LOL Surprise
- Show da Luna
- Arco-íris / Rainbow
- Fada / Unicórnio
- Dinossauros
- Carros / Veículos
- Animais da Fazenda
- Princesas
- Super-heróis
- ... e muito mais

**Bônus section (card destacado com cor diferente):**
- 🎁 "Imprime quantas vezes quiser — nunca acaba!"
- 📱 "Funciona no celular, tablet e computador"
- ⚡ "Acesso imediato após o pagamento"
- 🌟 "Ideal para imprimir e usar na escola"

---

### SEÇÃO 5 — DEPOIMENTOS / PROVA SOCIAL

**Objetivo:** Quebrar objeções com voz de quem já comprou.

**Background:** gradiente rosa claro → branco

**Headline:** `"O Que as Mães Estão Falando:"` + sub: `"⭐⭐⭐⭐⭐ Avaliação média 4.9/5"`

**3 cards de depoimento (scroll horizontal no mobile):**
Cada card contém:
- Foto circular da mãe (real, não stock genérico)
- Nome + cidade
- Estrelas (5/5)
- Texto do depoimento — foco em: criança ficou calma, valeu muito mais que o preço, imprimiu várias vezes

**Exemplos de texto:**
> "Comprei na sexta e já imprimi no sábado. Minha filha ficou 2 horas colorindo e não pediu o celular uma vez! Já indiquei pra 4 amigas." — *Juliana M., São Paulo*

> "Professora aqui! Usei em sala de aula e as crianças amaram a Peppa e a Frozen. Vale muito mais que o preço." — *Carla R., professora, MG*

> "Meu filho tem 5 anos e adora o Stitch. Já imprimi o caderno 3 vezes! Uma compra e diversão infinita." — *Mariana S., Rio de Janeiro*

---

### SEÇÃO 6 — URGÊNCIA / COUNTDOWN

**Objetivo:** Criar senso de escassez real para forçar decisão agora.

**Background:** gradiente dramático escuro (roxo escuro → azul navy) com efeito de "holofote" — contrasta com o restante da página

**Headline:** `"⚡ ATENÇÃO: Oferta Especial Encerrando Em:"` (branco, bold)

**Countdown timer (4 dígitos: HH:MM:SS):**
- Cada dígito em card separado com fundo escuro + texto branco grande (72px)
- Labels: HORAS / MIN / SEG

**Preço com risco:**
- `~~De R$97~~`
- `POR APENAS R$37` (verde, tamanho 3x maior)
- `Economia de R$60 (60% OFF)`

**CTA:** `"GARANTIR MINHA OFERTA AGORA →"` (verde vibrante, tamanho máximo, shadow intensa)

**Linha abaixo:** `"🔒 Pagamento seguro | ⚡ Acesso imediato | 🎁 30 cadernos incluídos"`

---

### SEÇÃO 7 — GARANTIA

**Objetivo:** Eliminar o medo de comprar.

**Background:** creme `#FFF8F0`

**Layout centralizado com selo shield:**
- Ícone de escudo grande (verde com checkmark)
- Headline: `"Garantia Incondicional de 7 Dias"` (Poppins Bold)
- Texto: `"Compra 100% segura. Se por qualquer motivo você não ficar satisfeita, basta enviar um e-mail em até 7 dias e devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia."`
- Selos: Hotmart Secured | Pagamento Seguro | Satisfação Garantida

---

### SEÇÃO 8 — FAQ

**Objetivo:** Destruir as últimas objeções antes do CTA final.

**Headline:** `"Perguntas Frequentes"`

**Accordion interativo (4 perguntas):**
1. **"Como vou receber os cadernos?"**
   → Imediatamente após o pagamento você recebe um e-mail com o link de acesso pelo Hotmart Club. É só baixar e imprimir!

2. **"Preciso de internet para usar?"**
   → Não! Depois de baixar os PDFs você usa offline em qualquer dispositivo, quantas vezes quiser.

3. **"Funciona no celular?"**
   → Sim! Os PDFs abrem em qualquer celular, tablet ou computador com leitor de PDF.

4. **"Posso imprimir mais de uma vez?"**
   → Pode e deve! Você pode imprimir cada caderno quantas vezes quiser. Uma compra, diversão infinita!

---

### SEÇÃO 9 — CTA FINAL (footer section)

**Objetivo:** Última chance de converter — repetição emocional + urgência.

**Background:** gradiente cinematográfico (céu ao entardecer — laranja + rosa + roxo) com personagem mascote grande posicionado lateralmente

**Headline:** `"Oferta Não Vai Durar Para Sempre!"`
**Sub:** `"Compre Agora e Garanta 60% OFF 🏷️"`

**Box de produto (card branco com shadow):**
- Mockup da "caixa" ColorBox com cadernos saindo
- Lista rápida do que está incluído
- Preço: `R$37` (grande, verde)
- CTA: `"QUERO AGORA POR R$37 →"` (verde, máximo tamanho possível no mobile)

**Footer simples:**
- `Copyright © ColorBox — Todos os direitos reservados`
- `contato: [email de suporte]`

---

### COMPONENTE EXTRA: Botão Flutuante Mobile

**Sempre visível no mobile, fixo na parte inferior da tela:**
```jsx
// FloatingCTA.jsx
// position: fixed, bottom: 0, left: 0, right: 0
// z-index: 50
// Botão verde com texto "QUERO POR R$37 →" e animação pulse
// Ocultar quando o próprio CTA da seção está visível (IntersectionObserver)
```

---

## INTEGRAÇÕES TÉCNICAS

```html
<!-- index.html — Meta Pixel no <head> -->
<script>
  !function(f,b,e,v,n,t,s){/* Meta Pixel base code */}
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

```js
// constants/hotmart.js
export const HOTMART_CHECKOUT = 'https://pay.hotmart.com/7914058';

// Evento de conversão ao clicar em CTA:
// fbq('track', 'InitiateCheckout');
```

---

## REGRAS DE IMPLEMENTAÇÃO

1. **Mobile-first obrigatório** — comece pelo layout 390px, depois adapte para desktop
2. **Performance:** imagens com `loading="lazy"`, fonts com `font-display: swap`
3. **Countdown timer** com `useCountdown` hook — inicializar com 23:59:59 e resetar em localStorage
4. **Animações:** use `@keyframes` ou Tailwind animate classes — sem bibliotecas pesadas (sem Framer Motion)
5. **Acessibilidade:** todos os CTAs com `aria-label`, imagens com `alt` descritivo
6. **Sem estado global** — componentes isolados com props e constants
7. **Todos os links de CTA** apontam para `https://pay.hotmart.com/7914058`
8. **FAQ:** accordion nativo com `<details>` + `<summary>` ou state local com `useState`

---

## TOM DE VOZ DO COPY

- **Fala diretamente com a mãe** — "você", "seu filho", "sua filha"
- **Emocional antes de racional** — primeiro o sentimento, depois os fatos
- **Urgência real** — preço, oferta limitada, timer
- **Simples e direto** — frases curtas, sem termos técnicos
- **Confiança** — garantia, segurança, Hotmart, selos
- **Celebração** — emojis 🎉🎨✨💝, cores vibrantes, energia positiva

---

> **Referência visual para o estilo cinematográfico:** Imagine o cartaz de abertura de um filme da Disney/Pixar — luz filtrada, cores saturadas mas harmônicas, personagens com vida própria flutuando no espaço, fundo etéreo que parece ter profundidade. Esse é o feeling que a página deve transmitir na primeira dobra.
