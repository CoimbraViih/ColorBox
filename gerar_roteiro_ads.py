from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

OUTPUT = "/sessions/inspiring-friendly-knuth/mnt/ColorBox/ColorBox_Roteiro_Anuncios_Meta.pdf"

# ── Colors ──────────────────────────────────────────────────────────────────
PINK    = colors.HexColor("#FF69B4")
PURPLE  = colors.HexColor("#9B59B6")
ORANGE  = colors.HexColor("#FF8C00")
GREEN   = colors.HexColor("#00C851")
DGRAY   = colors.HexColor("#2C2C2C")
LGRAY   = colors.HexColor("#F5F5F5")
MGRAY   = colors.HexColor("#AAAAAA")
WHITE   = colors.white

doc = SimpleDocTemplate(
    OUTPUT, pagesize=A4,
    leftMargin=2*cm, rightMargin=2*cm,
    topMargin=2*cm, bottomMargin=2*cm
)

# ── Styles ───────────────────────────────────────────────────────────────────
base = getSampleStyleSheet()

def S(name, **kw):
    return ParagraphStyle(name, **kw)

sTitle = S("sTitle", fontName="Helvetica-Bold", fontSize=26, textColor=WHITE,
           alignment=TA_CENTER, spaceAfter=4)
sSubtitle = S("sSubtitle", fontName="Helvetica", fontSize=13, textColor=WHITE,
              alignment=TA_CENTER, spaceAfter=2)
sH1 = S("sH1", fontName="Helvetica-Bold", fontSize=15, textColor=WHITE,
        spaceBefore=4, spaceAfter=4, alignment=TA_LEFT)
sH2 = S("sH2", fontName="Helvetica-Bold", fontSize=12, textColor=PURPLE,
        spaceBefore=8, spaceAfter=3)
sH3 = S("sH3", fontName="Helvetica-Bold", fontSize=10, textColor=DGRAY,
        spaceBefore=6, spaceAfter=2)
sBody = S("sBody", fontName="Helvetica", fontSize=9, textColor=DGRAY,
          leading=13, spaceAfter=3)
sSmall = S("sSmall", fontName="Helvetica", fontSize=8, textColor=WHITE,
           leading=11)
sLabel = S("sLabel", fontName="Helvetica-Bold", fontSize=8, textColor=PURPLE)
sValue = S("sValue", fontName="Helvetica", fontSize=9, textColor=DGRAY, leading=12)
sAlert = S("sAlert", fontName="Helvetica-Bold", fontSize=9, textColor=ORANGE)
sCopy  = S("sCopy", fontName="Helvetica", fontSize=8.5, textColor=DGRAY,
           leading=13, leftIndent=6, spaceAfter=4)
sNote  = S("sNote", fontName="Helvetica-Oblique", fontSize=8, textColor=MGRAY,
           leading=11)

story = []

# ════════════════════════════════════════════════════════════════════════════
# HELPERS
# ════════════════════════════════════════════════════════════════════════════
def header_block(title, subtitle=None, color=PURPLE):
    data = [[Paragraph(title, sH1)]]
    if subtitle:
        data.append([Paragraph(subtitle, sSmall)])
    t = Table(data, colWidths=[17*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), color),
        ("TOPPADDING",    (0,0), (-1,-1), 8),
        ("BOTTOMPADDING", (0,0), (-1,-1), 8),
        ("LEFTPADDING",   (0,0), (-1,-1), 12),
        ("RIGHTPADDING",  (0,0), (-1,-1), 12),
    ]))
    return t

def ad_block(num, tipo, criativo, texto_principal, headline, descricao, cta, url, cor_tipo):
    ah_style = S("ah"+num, fontName="Helvetica-Bold", fontSize=10, textColor=WHITE)
    rows = [
        [Paragraph(f"Anuncio {num} - {tipo}", ah_style), ""],
        [Paragraph("Criativo:", sLabel),
         Paragraph(criativo.replace("\n","<br/>"), sNote)],
        [Paragraph("Texto principal:", sLabel),
         Paragraph(texto_principal.replace("\n","<br/>"), sCopy)],
        [Paragraph("Titulo (Headline):", sLabel),
         Paragraph(headline, sValue)],
        [Paragraph("Descricao:", sLabel),
         Paragraph(descricao, sValue)],
        [Paragraph("Botao CTA:", sLabel),
         Paragraph(cta, sValue)],
        [Paragraph("URL de destino:", sLabel),
         Paragraph(url, sNote)],
    ]
    t = Table(rows, colWidths=[3.5*cm, 13.5*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND",   (0,0), (-1,0), cor_tipo),
        ("SPAN",         (0,0), (-1,0)),
        ("FONTSIZE",     (0,0), (-1,-1), 8.5),
        ("TOPPADDING",   (0,0), (-1,-1), 5),
        ("BOTTOMPADDING",(0,0), (-1,-1), 5),
        ("LEFTPADDING",  (0,0), (-1,-1), 7),
        ("VALIGN",       (0,0), (-1,-1), "TOP"),
        ("GRID",         (0,1), (-1,-1), 0.3, colors.HexColor("#EEEEEE")),
        ("BACKGROUND",   (0,1), (0,-1), colors.HexColor("#FAF0FF")),
    ]))
    return t

def conjunto_block(numero, nome, publico_desc, interesses, comportamentos,
                   genero, idade, orcamento, otimizacao, posicionamentos,
                   ad1, ad2, cor=PINK):
    story.append(Spacer(1, 0.4*cm))
    story.append(header_block(
        f"Conjunto {numero}: {nome}",
        subtitle=publico_desc,
        color=cor
    ))
    story.append(Spacer(1, 0.3*cm))

    cfg = [
        ["Campo", "Configuracao"],
        ["Nome do conjunto", nome],
        ["Genero", genero],
        ["Faixa etaria", idade],
        ["Localizacao", "Brasil (todos os estados)"],
        ["Orcamento diario", orcamento],
        ["Otimizacao de lance", otimizacao],
        ["Posicionamentos", posicionamentos],
        ["Interesses", interesses],
        ["Comportamentos", comportamentos],
    ]
    tc2 = Table(cfg, colWidths=[4.5*cm, 12.5*cm])
    tc2.setStyle(TableStyle([
        ("BACKGROUND",   (0,0), (-1,0), cor),
        ("TEXTCOLOR",    (0,0), (-1,0), WHITE),
        ("FONTNAME",     (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTNAME",     (0,1), (0,-1), "Helvetica-Bold"),
        ("TEXTCOLOR",    (0,1), (0,-1), cor),
        ("FONTSIZE",     (0,0), (-1,-1), 8.5),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE, LGRAY]),
        ("GRID",         (0,0), (-1,-1), 0.3, colors.HexColor("#DDDDDD")),
        ("TOPPADDING",   (0,0), (-1,-1), 5),
        ("BOTTOMPADDING",(0,0), (-1,-1), 5),
        ("LEFTPADDING",  (0,0), (-1,-1), 7),
        ("VALIGN",       (0,0), (-1,-1), "TOP"),
    ]))
    story.append(tc2)
    story.append(Spacer(1, 0.3*cm))
    story.append(ad1)
    story.append(Spacer(1, 0.25*cm))
    story.append(ad2)
    story.append(Spacer(1, 0.1*cm))

URL = "https://colorbox-two.vercel.app/"

# ════════════════════════════════════════════════════════════════════════════
# CAPA
# ════════════════════════════════════════════════════════════════════════════
cover = Table(
    [[Paragraph("ColorBox", sTitle)],
     [Paragraph("Roteiro Completo de Anuncios - Meta Ads", sSubtitle)],
     [Paragraph("4 Conjuntos | 8 Anuncios | Copys Completos | Criativos", sSmall)]],
    colWidths=[17*cm]
)
cover.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), PINK),
    ("TOPPADDING",    (0,0), (-1,-1), 24),
    ("BOTTOMPADDING", (0,0), (-1,-1), 24),
    ("LEFTPADDING",   (0,0), (-1,-1), 20),
]))
story.append(cover)
story.append(Spacer(1, 0.5*cm))

# ════════════════════════════════════════════════════════════════════════════
# VISAO GERAL
# ════════════════════════════════════════════════════════════════════════════
story.append(header_block("Visao Geral da Campanha", color=PURPLE))
story.append(Spacer(1, 0.3*cm))

geral_data = [
    ["Campo", "Valor"],
    ["Nome da campanha", "ColorBox | Cadernos para Colorir PDF"],
    ["Objetivo", "Trafego (recomendado ate o pixel estar ativo)"],
    ["Tipo de compra", "Leilao"],
    ["Otimizacao por conjunto", "Cliques no link"],
    ["Orcamento da campanha (CBO)", "DESATIVADO - orcamento definido por conjunto"],
    ["Pais de veiculacao", "Brasil (todos os estados)"],
    ["Status inicial", "Em rascunho - NAO ativar antes de revisar tudo"],
    ["Link de destino", "https://colorbox-two.vercel.app/"],
    ["Total de conjuntos", "4 conjuntos de anuncios"],
    ["Total de anuncios", "8 anuncios (2 por conjunto: 1 imagem + 1 video)"],
    ["Orcamento total por dia", "R$80,00/dia (R$20 por conjunto x 4)"],
]
t = Table(geral_data, colWidths=[5.5*cm, 11.5*cm])
t.setStyle(TableStyle([
    ("BACKGROUND",   (0,0), (-1,0), PURPLE),
    ("TEXTCOLOR",    (0,0), (-1,0), WHITE),
    ("FONTNAME",     (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTNAME",     (0,1), (0,-1), "Helvetica-Bold"),
    ("TEXTCOLOR",    (0,1), (0,-1), PURPLE),
    ("FONTSIZE",     (0,0), (-1,-1), 8.5),
    ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE, LGRAY]),
    ("GRID",         (0,0), (-1,-1), 0.3, colors.HexColor("#DDDDDD")),
    ("TOPPADDING",   (0,0), (-1,-1), 5),
    ("BOTTOMPADDING",(0,0), (-1,-1), 5),
    ("LEFTPADDING",  (0,0), (-1,-1), 7),
    ("VALIGN",       (0,0), (-1,-1), "TOP"),
]))
story.append(t)
story.append(Spacer(1, 0.4*cm))

aviso = Table([[
    Paragraph("IMPORTANTE - Pixel do Meta", sAlert),
    Paragraph(
        "O pixel ainda nao esta configurado na landing page. Por isso, use objetivo "
        "<b>Trafego</b> com otimizacao por <b>Cliques no link</b>. Assim que o pixel "
        "estiver ativo e com pelo menos 50 eventos de Compra registrados, mude o objetivo "
        "para <b>Vendas &gt; Compras</b> para performance muito superior.",
        sBody)
]], colWidths=[4.5*cm, 12.5*cm])
aviso.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), colors.HexColor("#FFF8E1")),
    ("BOX",        (0,0), (-1,-1), 1, ORANGE),
    ("TOPPADDING", (0,0), (-1,-1), 8),
    ("BOTTOMPADDING",(0,0),(-1,-1), 8),
    ("LEFTPADDING",(0,0),(-1,-1), 8),
    ("VALIGN",     (0,0), (-1,-1), "TOP"),
]))
story.append(aviso)
story.append(Spacer(1, 0.4*cm))

# ════════════════════════════════════════════════════════════════════════════
# CRIATIVOS
# ════════════════════════════════════════════════════════════════════════════
story.append(header_block("Criativos Disponiveis  (pasta: ColorBox/Criativos/)", color=DGRAY))
story.append(Spacer(1, 0.3*cm))

cri_data = [
    ["Arquivo", "Formato", "Uso sugerido"],
    ["1_Playful Digital Ad for Kids' Coloring Books.png",       "Feed",  "Conjunto 4 - Papelaria (imagem principal)"],
    ["2_Vibrant Digital Ad with Cartoon Pages.png",             "Feed",  "Reserva / Teste A/B"],
    ["3_Post para Facebook - Diversao e aprendizado.png",       "Feed",  "Conjunto 2 - Professoras (imagem principal)"],
    ["4_Post para Facebook - Colecao ColorBox de PDFs.png",     "Feed",  "Reserva / Teste A/B"],
    ["5_Post para Instagram - Celular o tempo todo.png",        "Feed",  "Reserva (menor resolucao)"],
    ["6_Colorful Banner Ad for Productive Screen Time.png",     "Feed",  "Reserva / Teste A/B"],
    ["7_Post para Instagram - Celular o tempo todo.png",        "Feed",  "Conjunto 1 - Mamaes (imagem principal)"],
    ["8_Vibrant Digital Ad for Brazilian Moms.png",             "Feed",  "Conjunto 3 - Terapia (imagem principal)"],
    ["9_Exciting Story Ad Featuring Kids' Characters.png",      "Story", "Conjunto 3 - Terapia (formato story)"],
    ["10_Colorful Ad for Brazilian Moms with Coloring Books.png","Feed/Story","Conjunto 4 - Papelaria (story)"],
    ["11_Story - Colorir e divertido!.png",                     "Story", "Conjunto 2 - Professoras (story)"],
    ["12_Story - Chega de briga!.png",                          "Story", "Conjunto 1 - Mamaes (story)"],
    ["cc 01.mp4  (54MB)",                                       "Video", "Conjuntos 1 e 3"],
    ["cc 02.mp4  (66MB)",                                       "Video", "Conjuntos 2 e 4"],
]
tc_cri = Table(cri_data, colWidths=[8*cm, 2.2*cm, 6.8*cm])
tc_cri.setStyle(TableStyle([
    ("BACKGROUND",   (0,0), (-1,0), DGRAY),
    ("TEXTCOLOR",    (0,0), (-1,0), WHITE),
    ("FONTNAME",     (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTSIZE",     (0,0), (-1,-1), 7.5),
    ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE, LGRAY]),
    ("GRID",         (0,0), (-1,-1), 0.3, colors.HexColor("#DDDDDD")),
    ("TOPPADDING",   (0,0), (-1,-1), 4),
    ("BOTTOMPADDING",(0,0), (-1,-1), 4),
    ("LEFTPADDING",  (0,0), (-1,-1), 5),
    ("FONTNAME",     (0,13), (-1,14), "Helvetica-Bold"),
    ("BACKGROUND",   (0,13), (-1,14), colors.HexColor("#FFF3E0")),
]))
story.append(tc_cri)

# ════════════════════════════════════════════════════════════════════════════
# CONJUNTO 1 — MAMAES
# ════════════════════════════════════════════════════════════════════════════
conjunto_block(
    numero=1,
    nome="Mamaes - Filhos Pequenos",
    publico_desc="Maes com filhos de 3 a 10 anos",
    interesses="Maternidade, Criacao de filhos, Atividades infantis, "
               "Entretenimento infantil, Brinquedos e jogos, Desenvolvimento infantil, "
               "Educacao de criancas, Familia",
    comportamentos="Pais com filhos de 0 a 12 anos (comportamento disponivel no Meta)",
    genero="Mulheres",
    idade="24 a 44 anos",
    orcamento="R$20,00 por dia",
    otimizacao="Cliques no link (selecionar: Maximizar cliques no link)",
    posicionamentos="Feed do Facebook, Feed do Instagram, Stories do Facebook, "
                    "Stories do Instagram. Desativar: Reels, Audience Network, Messenger.",
    ad1=ad_block(
        "1A", "Imagem",
        "Feed: 7_Post para Instagram - Seus filhos pedem celular o tempo todo.png\n"
        "Story: 12_Story - Chega de briga!.png  (adicionar como variacao de posicionamento)",
        "Cansada de ver seu filho grudado no celular?\n\n"
        "A ColorBox tem 30 cadernos para colorir com os personagens favoritos deles: "
        "Frozen, Barbie, Peppa Pig, Stitch e muito mais!\n\n"
        "Baixe agora e imprima em casa:\n"
        "- Horas de diversao garantidas\n"
        "- Atividade criativa e educativa\n"
        "- Acalma sem precisar de tela\n\n"
        "Por apenas R$37 - acesso para sempre!",
        "30 Cadernos para Colorir por R$37",
        "Frozen, Barbie, Peppa Pig e mais! Baixe e imprima em casa.",
        "Comprar agora",
        URL, PINK
    ),
    ad2=ad_block(
        "1B", "Video",
        "cc 01.mp4\n(54MB - fazer upload direto no Ads Manager)",
        "O segredo para uma tarde tranquila com seu filho?\n\n"
        "A ColorBox tem 30 cadernos para colorir com personagens que eles AMAM: "
        "Stitch, Moana, Lol Surprise, Turma da Monica e muito mais!\n\n"
        "Baixe agora por R$37 e imprima quantas vezes quiser!",
        "Tarde em Paz com a ColorBox",
        "30 personagens favoritos | R$37 acesso vitalicio | Imprima em casa",
        "Comprar agora",
        URL, ORANGE
    ),
    cor=PINK
)

# ════════════════════════════════════════════════════════════════════════════
# CONJUNTO 2 — PROFESSORAS
# ════════════════════════════════════════════════════════════════════════════
conjunto_block(
    numero=2,
    nome="Professoras e Educadoras",
    publico_desc="Professoras da educacao infantil e fundamental",
    interesses="Educacao infantil, Ensino fundamental, Pedagogia, "
               "Atividades pedagogicas, Recreacao infantil, Sala de aula, "
               "Material didatico, Psicopedagogia, Aprendizagem",
    comportamentos="Segmentar por cargo: Professora, Educadora, Pedagoga "
                   "(em Dados demograficos > Cargo no Meta Ads)",
    genero="Mulheres",
    idade="24 a 50 anos",
    orcamento="R$20,00 por dia",
    otimizacao="Cliques no link (selecionar: Maximizar cliques no link)",
    posicionamentos="Feed do Facebook, Feed do Instagram, Stories do Facebook, "
                    "Stories do Instagram. Desativar: Reels, Audience Network, Messenger.",
    ad1=ad_block(
        "2A", "Imagem",
        "Feed: 3_Post para Facebook - Diversao e aprendizado para todas as idades!.png\n"
        "Story: 11_Story - Colorir e divertido!.png  (adicionar como variacao)",
        "Professora, essa atividade vai salvar suas aulas de artes!\n\n"
        "30 cadernos para colorir com personagens que as criancas adoram. "
        "Baixe uma vez e use com toda a turma!\n\n"
        "- 30 temas diferentes\n"
        "- Impressao ilimitada\n"
        "- Personagens: Frozen, Peppa, Barbie, Stitch...\n\n"
        "R$37 - Acesso vitalicio!",
        "30 Cadernos de Colorir para Sala de Aula",
        "Use com a turma inteira. Imprima quantas vezes precisar!",
        "Saiba mais",
        URL, PURPLE
    ),
    ad2=ad_block(
        "2B", "Video",
        "cc 02.mp4\n(66MB - fazer upload direto no Ads Manager)",
        "Atividade que toda crianca AMA - e que toda professora precisa ter!\n\n"
        "ColorBox: 30 cadernos para colorir com os personagens favoritos das criancas. "
        "Perfeito para aulas de artes, hora livre ou atividades pedagogicas.\n\n"
        "Baixe por R$37 e imprima a vontade! Acesso vitalicio.",
        "Atividades de Colorir para Sua Turma",
        "30 personagens | Impressao ilimitada | R$37 acesso vitalicio",
        "Saiba mais",
        URL, PURPLE
    ),
    cor=PURPLE
)

# ════════════════════════════════════════════════════════════════════════════
# CONJUNTO 3 — TERAPIA
# ════════════════════════════════════════════════════════════════════════════
TEAL = colors.HexColor("#16A085")
conjunto_block(
    numero=3,
    nome="Terapia Criativa e Autocuidado",
    publico_desc="Adultos que usam arte como terapia, profissionais de saude mental",
    interesses="Arteterapia, Mindfulness, Meditacao, Autocuidado, "
               "Bem-estar mental, Yoga, Terapia, Psicologia positiva, "
               "Saude mental, Relaxamento, Arte e criatividade",
    comportamentos="Sem comportamento especifico - usar apenas interesses acima",
    genero="Todos (mulheres e homens)",
    idade="25 a 55 anos",
    orcamento="R$20,00 por dia",
    otimizacao="Cliques no link (selecionar: Maximizar cliques no link)",
    posicionamentos="Feed do Facebook, Feed do Instagram, Stories do Facebook, "
                    "Stories do Instagram. Desativar: Reels, Audience Network, Messenger.",
    ad1=ad_block(
        "3A", "Imagem",
        "Feed: 8_Vibrant Digital Ad for Brazilian Moms.png\n"
        "Story: 9_Exciting Story Ad Featuring Kids' Favorite Characters.png",
        "Colorir e a meditacao mais gostosa que existe\n\n"
        "Adultos tambem precisam de um momento de paz. "
        "A ColorBox tem 30 cadernos com designs fofos para voce colorir, "
        "relaxar e recarregar as energias.\n\n"
        "- Baixe agora e comece hoje\n"
        "- R$37 - sua terapia criativa\n"
        "- Sem limite de impressoes!",
        "Colorir e Terapia - Voce Merece!",
        "30 designs fofos para relaxar e criar. R$37 acesso vitalicio.",
        "Comprar agora",
        URL, TEAL
    ),
    ad2=ad_block(
        "3B", "Video",
        "cc 01.mp4\n(54MB - fazer upload direto no Ads Manager)",
        "Quando foi a ultima vez que voce fez algo so por prazer?\n\n"
        "Colorir alivia a ansiedade, acalma a mente e ainda fica lindo! "
        "A ColorBox tem 30 cadernos para colorir para voce, "
        "para as criancas ou para fazer juntos.\n\n"
        "R$37 - Baixe e comece hoje mesmo!",
        "Terapia Criativa em 30 Cadernos Fofos",
        "30 cadernos para colorir. Baixe, imprima e relaxe. R$37!",
        "Comprar agora",
        URL, TEAL
    ),
    cor=TEAL
)

# ════════════════════════════════════════════════════════════════════════════
# CONJUNTO 4 — PAPELARIA
# ════════════════════════════════════════════════════════════════════════════
conjunto_block(
    numero=4,
    nome="Papelaria Fofa e DIY",
    publico_desc="Entusiastas de papelaria, artesanato e criatividade",
    interesses="Papelaria, Artesanato, DIY (faca voce mesmo), Scrapbook, "
               "Material escolar fofo, Decoracao criativa, Bullet journal, "
               "Cadernos, Arte manual, Customizacao, Design criativo",
    comportamentos="Sem comportamento especifico - usar apenas interesses acima",
    genero="Mulheres",
    idade="18 a 40 anos",
    orcamento="R$20,00 por dia",
    otimizacao="Cliques no link (selecionar: Maximizar cliques no link)",
    posicionamentos="Feed do Facebook, Feed do Instagram, Stories do Instagram. "
                    "Desativar: Reels, Audience Network, Messenger.",
    ad1=ad_block(
        "4A", "Imagem",
        "Feed: 1_Playful Digital Ad for Kids' Coloring Books.png\n"
        "Story: 10_Colorful Ad for Brazilian Moms with Coloring Books.png",
        "Papelaria fofa que voce baixa, imprime e usa!\n\n"
        "30 cadernos para colorir com os personagens mais amados: "
        "Barbie, Stitch, Show da Luna, Arco-Iris e muito mais!\n\n"
        "Montou sua pastinha? Fez seu kit? Presenteou alguem?\n"
        "Tudo isso com R$37 e acesso para sempre!",
        "30 Cadernos Fofos para Baixar e Imprimir",
        "Barbie, Stitch, Frozen e mais | R$37 | Acesso vitalicio",
        "Comprar agora",
        URL, ORANGE
    ),
    ad2=ad_block(
        "4B", "Video",
        "cc 02.mp4\n(66MB - fazer upload direto no Ads Manager)",
        "Sabe aquele kit de papelaria fofa que voce queria montar?\n\n"
        "Com a ColorBox voce tem 30 cadernos para colorir com os personagens "
        "mais fofos para imprimir, montar pastinhas e se divertir!\n\n"
        "R$37 - Acesso vitalicio. Imprima quantas vezes quiser!",
        "Monte sua Pastinha Fofa com a ColorBox",
        "30 cadernos | Barbie, Frozen, Stitch e mais | Imprima a vontade",
        "Comprar agora",
        URL, ORANGE
    ),
    cor=ORANGE
)

# ════════════════════════════════════════════════════════════════════════════
# PASSO A PASSO
# ════════════════════════════════════════════════════════════════════════════
story.append(Spacer(1, 0.5*cm))
story.append(header_block("Passo a Passo no Meta Ads Manager", color=DGRAY))
story.append(Spacer(1, 0.3*cm))

passos = [
    ("1. Criar campanha",
     "Ads Manager > + Criar > Trafego > Campanha de trafego manual > Continuar.\n"
     "Nome: ColorBox | Cadernos para Colorir PDF.\n"
     "CBO: DESATIVADO. Categoria especial: Nenhuma. Clique em Avancar."),
    ("2. Configurar conjuntos (repita 4x)",
     "Nome do conjunto: conforme este roteiro.\n"
     "Conversao: Website > URL do site. Orcamento: R$20/dia.\n"
     "Datas: sem data de termino (veiculacao continua).\n"
     "Publico: adicione interesses e comportamentos de cada conjunto.\n"
     "Posicionamentos: Manuais > selecione apenas Feed + Stories.\n"
     "Otimizacao: Cliques no link. Clique em Avancar."),
    ("3. Criar anuncios (2 por conjunto)",
     "Anuncio de imagem: upload do .png indicado, adicione o copy completo.\n"
     "Anuncio de video: upload do .mp4 indicado, adicione o copy completo.\n"
     "CTA: conforme coluna 'Botao CTA' deste roteiro.\n"
     "URL de destino: https://colorbox-two.vercel.app/"),
    ("4. Salvar como rascunho",
     "Ao finalizar, confirme que o toggle 'Em rascunho' esta LIGADO (azul).\n"
     "Isso salva sem veicular. Repita para cada conjunto e anuncio."),
    ("5. Antes de ativar",
     "Revisar todos os copys e criativos.\n"
     "Confirmar URL de destino em cada anuncio.\n"
     "Instalar o pixel do Meta na landing page (ver CLAUDE.md do projeto).\n"
     "Adicionar forma de pagamento na conta se necessario.\n"
     "So entao: desligar o toggle 'Em rascunho' para ativar a campanha."),
]

for titulo, corpo in passos:
    row_data = [[
        Paragraph(titulo, S("pt"+titulo[:3], fontName="Helvetica-Bold",
                            fontSize=9, textColor=PURPLE)),
        Paragraph(corpo.replace("\n","<br/>"), sBody)
    ]]
    tp = Table(row_data, colWidths=[4*cm, 13*cm])
    tp.setStyle(TableStyle([
        ("BACKGROUND",   (0,0), (0,0), colors.HexColor("#F0E6FF")),
        ("BOX",          (0,0), (-1,-1), 0.5, colors.HexColor("#CCCCCC")),
        ("TOPPADDING",   (0,0), (-1,-1), 7),
        ("BOTTOMPADDING",(0,0), (-1,-1), 7),
        ("LEFTPADDING",  (0,0), (-1,-1), 8),
        ("VALIGN",       (0,0), (-1,-1), "TOP"),
    ]))
    story.append(tp)
    story.append(Spacer(1, 0.15*cm))

# ════════════════════════════════════════════════════════════════════════════
# PROXIMOS PASSOS
# ════════════════════════════════════════════════════════════════════════════
story.append(Spacer(1, 0.4*cm))
story.append(header_block("Proximos Passos Apos os Primeiros 7 Dias", color=GREEN))
story.append(Spacer(1, 0.3*cm))

next_data = [
    ["Analise", "Identifique qual conjunto teve menor CPC e maior CTR. Pause os demais ou reduza orcamento."],
    ["Escale", "Aumente o orcamento do conjunto vencedor para R$40-50/dia gradualmente."],
    ["Pause", "Pause o anuncio (imagem ou video) com pior desempenho em cada conjunto."],
    ["Pixel", "Instale o pixel do Meta na landing page e mude objetivo para Vendas > Compras."],
    ["Novos criativos", "Crie Reels curtos (15-30s) mostrando criancas ou adultos colorindo - alta viralidade."],
    ["Retargeting", "Crie conjunto de retargeting para visitantes da pagina que nao compraram."],
    ["Lookalike", "Apos 50 compras, crie publico Lookalike dos compradores (1-3% Brasil)."],
]
tn = Table(next_data, colWidths=[3.5*cm, 13.5*cm])
tn.setStyle(TableStyle([
    ("FONTNAME",     (0,0), (0,-1), "Helvetica-Bold"),
    ("TEXTCOLOR",    (0,0), (0,-1), GREEN),
    ("FONTSIZE",     (0,0), (-1,-1), 8.5),
    ("ROWBACKGROUNDS",(0,0),(-1,-1),[WHITE, LGRAY]),
    ("GRID",         (0,0), (-1,-1), 0.3, colors.HexColor("#DDDDDD")),
    ("TOPPADDING",   (0,0), (-1,-1), 5),
    ("BOTTOMPADDING",(0,0), (-1,-1), 5),
    ("LEFTPADDING",  (0,0), (-1,-1), 7),
    ("VALIGN",       (0,0), (-1,-1), "TOP"),
]))
story.append(tn)

# ════════════════════════════════════════════════════════════════════════════
# BUILD
# ════════════════════════════════════════════════════════════════════════════
doc.build(story)
print("PDF gerado:", OUTPUT)
