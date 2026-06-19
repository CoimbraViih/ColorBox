# ColorBox — Guia de Configuração Meta Ads

> Status do diagnóstico: **18/06/2026**
> Conta de Anúncios: `659431580781513` | Página FB: `Scion Brasil` (ID `330248903506830`)

---

## ✅ O que já está pronto no código

| Item | Status |
|---|---|
| Código do pixel no `index.html` | ✅ Pronto (só falta o ID — ver Passo 1) |
| Evento `InitiateCheckout` no CTA | ✅ Já implementado em `CtaButton.jsx` |
| Evento `PageView` | ✅ No template do pixel |
| Links Hotmart nos CTAs | ✅ Configurados |
| Landing page otimizada para mobile | ✅ Pronta |

---

## ⚡ Checklist de bloqueadores (faça nessa ordem)

### PASSO 1 — Criar o Meta Pixel (CRÍTICO — sem isso os anúncios não otimizam)

1. No Chrome, vá para: **business.facebook.com → Todas as ferramentas → Gerenciador de Eventos**
   - URL direta: `https://business.facebook.com/events_manager2/list/pixel`
2. Clique em **Conectar fontes de dados → Web**
3. Escolha **Pixel do Meta** → dê o nome: `ColorBox Pixel`
4. Método de instalação: **Adicionar código manualmente**
5. Copie o **ID do Pixel** (formato: 15 dígitos, ex: `123456789012345`)

**Depois de pegar o ID — ative o pixel no código:**

Abra `index.html` na raiz do projeto e substitua o bloco comentado por este (colando seu ID nos dois lugares marcados):

```html
<!-- Meta Pixel ColorBox -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID_AQUI');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
/></noscript>
```

Depois: `pnpm build` → deploy no Vercel → verifique com a extensão **Meta Pixel Helper** no Chrome.

---

### PASSO 2 — Integração Hotmart → Purchase tracking (CRÍTICO para otimização)

O pixel na landing page captura `PageView` e `InitiateCheckout`. Mas a **compra acontece no Hotmart** — então você precisa configurar o Hotmart para disparar o evento `Purchase` na página de obrigado.

**No painel Hotmart:**
1. Acesse: `app.hotmart.com/products/manage/7914058`
2. Vá em **Integrações → Facebook Pixel**
3. Cole o mesmo **ID do Pixel** (do Passo 1)
4. Salve — o Hotmart vai disparar automaticamente o evento `Purchase` com o valor da venda

Isso permite que o algoritmo da Meta otimize para **compradores**, não só visitantes.

---

### PASSO 3 — Adicionar método de pagamento na conta de anúncios

Sem cartão, os anúncios não vão ao ar.

1. No Gerenciador de Anúncios, clique em **Cobrança e pagamentos** (ícone de cartão na barra lateral)
   - URL: `https://adsmanager.facebook.com/billing/payment_settings?act=659431580781513`
2. Clique em **Adicionar método de pagamento**
3. Adicione um cartão de crédito (recomendado: cartão com limite suficiente para o budget diário × 7 dias)
4. Defina um **Limite de gasto da conta** inicial (ex: R$300) para controle enquanto testa

---

### PASSO 4 — Configurar a Página "Scion Brasil" para o ColorBox

A página está vazia (0 seguidores, sem foto de perfil do ColorBox). Antes de rodar anúncios, configure o básico:

**4.1 — Foto de perfil**
- Use o logo ColorBox (arquivo `colorbox_capa.png` ou `colorbox_capa_v2.png` já na raiz do projeto)
- Tamanho ideal: 400×400 px, fundo roxo/rosa do produto
- No Business Suite: clique na foto de perfil → Atualizar foto do perfil

**4.2 — Foto de capa**
- Tamanho: 820×312 px (desktop) / 640×360 px (mobile)
- Use um banner mostrando os cadernos com personagens populares (Stitch, Barbie, Frozen)
- Coloque o texto: "30 Cadernos de Colorir • PDF imediato • R$37"

**4.3 — Informações da página**
Vá em **Configurações da página → Informações da página** e preencha:

| Campo | Valor |
|---|---|
| **Categoria** | Produto de mídia / Entretenimento infantil |
| **Descrição** | 30 cadernos para colorir em PDF com os personagens favoritos das crianças: Frozen, Barbie, Peppa Pig, Stitch, Turma da Mônica e muito mais. Entrega digital imediata. Imprima infinitas vezes! |
| **Website** | URL da sua landing page no Vercel |
| **Número de WhatsApp** | (opcional, para credibilidade) |

**4.4 — Criar pelo menos 1 post antes de rodar anúncios**
A Meta tende a aprovar anúncios mais rápido quando a página tem alguma atividade. Poste 1 imagem mostrando os cadernos com uma legenda simples.

---

### PASSO 5 — Conectar Instagram (recomendado)

Anúncios que rodam no Instagram junto ao Facebook têm custo por resultado menor e maior alcance.

1. No Business Suite, clique em **Conectar Instagram** (aparece na home da página Scion Brasil)
2. Se não tiver conta Instagram: crie uma com o nome `@colorboxbr` ou similar
3. Após conectar, sua conta de anúncios pode veicular em ambas as plataformas

---

## 🎯 Estrutura da Primeira Campanha

Quando o pixel tiver dados (aguarde 50+ eventos de Purchase para otimização de conversão), crie:

### Campanha
- **Objetivo:** Vendas (Conversões) → evento: Purchase
- **Orçamento:** R$30–50/dia (CBO — campanha otimiza entre conjuntos)
- **Período:** Sem data de término (campanha contínua, ajuste conforme ROAS)

### Conjunto de Anúncios — Público Frio (topo de funil)
- **Localização:** Brasil
- **Idade:** 25–45 anos
- **Gênero:** Feminino (90% do público são mães)
- **Interesses (combine):**
  - Educação infantil, Atividades para crianças
  - Livros infantis, Material escolar
  - Personagens: Disney, Frozen, Barbie, Peppa Pig
  - Maternidade, Filhos
- **Advantage+ audience:** Ativar (deixe a Meta expandir quando encontrar escala)
- **Placements:** Automatic Placements (deixe a Meta otimizar)

### Conjunto de Anúncios — Remarketing (fundo de funil)
- **Público:** Pessoas que visitaram a landing page nos últimos 7 dias mas não compraram
- **Exclusão:** Quem já comprou (pixel Purchase)
- **Orçamento:** R$10/dia

### Formatos de Anúncio (crie pelo menos 3 variações para teste A/B)

**Variação 1 — Carrossel com personagens**
- Slides: 1 caderno por slide (Stitch, Barbie, Frozen, Peppa, Turma da Mônica...)
- Headline: "Qual o favorito do seu filho? 🎨"
- Texto: "30 cadernos para colorir com os personagens que eles amam. Baixe agora e imprima infinitas vezes. Só R$37 👇"
- CTA: "Comprar agora"

**Variação 2 — Vídeo curto (15s) — Recomendado para stories**
- Mostrar a mão de uma criança colorindo
- Texto na tela: "CHEGA DE TELA! 📱❌" → "30 cadernos para colorir" → "R$37 — Acesso imediato"
- CTA: "Ver agora"

**Variação 3 — Imagem única com headline forte**
- Imagem: grade com os 30 personagens
- Headline: "Seu filho vai largar o celular sozinho 🎨"
- Texto: "30 cadernos temáticos em PDF por apenas R$37. Frozen, Barbie, Peppa Pig, Stitch e mais 26 personagens. Entrega imediata no Hotmart Club."
- CTA: "Comprar agora"

---

## 📊 KPIs para acompanhar (primeiras 2 semanas)

| Métrica | Meta inicial |
|---|---|
| CTR (Taxa de clique) | > 1,5% |
| CPC (Custo por clique) | < R$1,50 |
| CPM (Custo por 1.000 impressões) | R$8–20 (normal no Brasil) |
| Taxa de conversão landing page | > 1% |
| CPA (Custo por Purchase) | < R$18 (ROAS > 2x) |
| ROAS | Mínimo 2x para escalar |

---

## 🚨 Problemas comuns antes de lançar

| Problema | Solução |
|---|---|
| Anúncio reprovado por "personagens protegidos" | Use criativos mostrando crianças colorindo, não os personagens diretamente |
| Pixel não disparando | Verifique com Pixel Helper Extension; confirme que fez build + deploy após adicionar o ID |
| Conta de anúncios desativada | Complete a verificação de identidade (pedida na conta Althorya API) |
| Purchase não aparece nos eventos | Configure o pixel no painel Hotmart (Passo 2) |
