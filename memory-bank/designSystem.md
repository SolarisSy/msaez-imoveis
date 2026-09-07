# Design System

## Paleta atual — Smoky Quartz (Pantone 18-1107 TCX)

Cinzas quentes / taupe. **Substituiu o eixo rosa-terracota** (Powder Pink `#D6A491`,
terracota `#A96559`, Desert Sand `#CFB591`) em todo o site — esses tons não devem voltar.

| Token | Hex | Uso |
|---|---|---|
| `--sq-50` | `#FAF9F7` | superfícies claras |
| `--sq-100` | `#F2F0EC` | topbar e hero |
| `--sq-200` | `#E8E4DF` | fundo do conteúdo claro |
| `--sq-300` | `#D6D1CB` | texto sobre escuro, CTA sólido |
| `--sq-400` | `#ADA69F` | acento, ícones, eyebrows |
| `--sq` | `#817973` | **Smoky Quartz** — acento forte, avatar, nav ativa |
| `--sq-600` | `#635C57` | texto secundário no claro |
| `--sq-700` | `#45403C` | — |
| `--sq-900` | `#2B2724` | texto e títulos no claro; sidebar |

Cards escuros: `rgba(38,35,33,.84)` com borda `rgba(173,166,159,.2)`.

**Única cor fora da paleta:** o verde `#25D366` do botão do WhatsApp (marca de terceiro,
precisa ser reconhecível) e o `#5BBE72` do ícone de WhatsApp inline.


## Histórico de paletas (não reverter sem motivo)


### Site (header, hero) — escala Desert Sand
Pantone 15-1214 TCX `#CFB591`, ampliada para dar contraste:
| Token | Hex | Uso |
|---|---|---|
| `--sand-50` | `#FBF7F1` | superfícies |
| `--sand-100` | `#F5EEE4` | topbar, hero |
| `--sand-200` | `#EFE5D8` | fundos secundários |
| `--sand-300` | `#E4D6C2` | badges |
| `--sand` | `#CFB591` | Desert Sand puro |
| `--sand-600` | `#B79A74` | ícones, hover |

### Página do produto — Powder Pink sobre o damask
A página do produto usa **o mesmo fundo da grade principal**: damask com véu
`rgba(20,12,10,.64 → .8)` e vinheta radial nos cantos. O véu é mais forte que o do
catálogo (.54/.72) porque ali o texto fica dentro de cards e aqui corre direto sobre a
textura.

Tokens do tema escuro: `--ink #F7EBE3` · `--ink-soft #DCC6BA` · `--muted #AE9488` ·
`--paper rgba(55,39,34,.82)` · `--hair rgba(228,197,183,.16)`. CTA sólido em Powder Pink
com texto `#33201C`.

### Referência de tons — Powder Pink + Dark Chocolate
| Token | Hex | Uso |
|---|---|---|
| `--pink` | `#D6A491` | Powder Pink: ícones, eyebrows, foco, avatar |
| `--pink-soft` | `#EBD5C8` | bordas tracejadas |
| `--pink-wash` | `#FAF1EB` | fundo do card da corretora |
| `--ink` | `#3D2521` | texto e títulos |
| `--ink-soft` | `#6E564E` | corpo de texto |
| `--muted` | `#9A8279` | labels, notas |
| `--paper` | `#FFFCF9` | cartões |
| `--hair` | `rgba(61,37,33,.1)` | divisores de 1px |
| fundo | `#F7F1EA` | off-white da página |

Dark Chocolate `#4A2D29` é a base histórica do site (sidebar, catálogo, CTA sólido).

### Catálogo (home)
Painel escuro com fundo damask (`brand/damask-background.jpg`) — contraste deliberado
com o header claro. Texto e filtros precisam de tons claros ali dentro; regras
escopadas em `.catalog-panel`.

## Regras de aplicação
1. **Cor em traço fino, nunca em bloco.** Faixas sólidas grandes deixam a página pesada.
2. Títulos em Playfair Display 500; nunca bold.
3. Eyebrow: 9.5px, `letter-spacing: .3em`, uppercase, cor de acento.
4. Divisores: 1px `--hair`. Raio de borda no máximo 3px.
5. Ações secundárias em outline; **um único** botão sólido por tela (WhatsApp).
6. Setas da galeria só aparecem no hover.

## Logo
`public/brand/mm-saez-sand.png` — versão recolorida do original, com fundo transparente:
telhados `#8A5F50`, swoosh `#A96559`, texto `#4A2D29`. A faixa inferior do arquivo
original ("Acreditamos no seu Sonho!" / "CRECI F25214") vinha cortada pela metade e foi
aparada. Se o CRECI precisar aparecer, use texto no site, não a imagem.

## Botão flutuante do WhatsApp
Círculo de 58px em `#25D366` (verde oficial), logotipo real do WhatsApp em branco, sem
texto — `.floating-whatsapp` no fim de `style.css`. É a única cor fora da paleta no
site: o botão precisa ser reconhecido de imediato, então usa a cor da marca do WhatsApp.
O ícone vem de `detailIcons.whatsapp`, não de um caractere de texto.

## Grade de produtos — fundo low-poly
O fundo do catálogo é `brand/polygon-dark.jpg` (2560×1440, ~58KB): facetas triangulares
em tons de `#060606` a `#3E3E3E`, mais claras na base. **Foi gerado proceduralmente**
pelo script em `scripts/lowpoly.py` (Delaunay do scipy sobre uma grade com jitter,
desenhada em 2x e reduzida com LANCZOS para bordas limpas) — regenerável com outra
semente ou paleta.

O véu por cima é leve (`rgba(0,0,0,.06 → .26)`): com véu forte as facetas somem e o
fundo vira um preto chapado.

O **rodapé usa a mesma imagem**, com véu um pouco mais forte. Como os dois usam
`background-attachment: fixed`, as facetas se alinham e a passagem do painel para o
rodapé fica contínua, sem emenda.

Os cards viraram cinza neutro (`rgba(26,24,24,.82)`) com borda quente `#D6A491`, para
acompanhar o fundo frio sem perder o vínculo com a marca.

### Camadas de profundidade (herdadas da versão damask)

1. **Parede** — `.catalog-panel::before`: spot de luz elíptico no topo
   (`rgba(255,228,203,.20)`) + vinheta radial nos quatro cantos. É a luz que dá volume.
2. ~~**Piso de madeira em perspectiva**~~ — desativado ao adotar o fundo geométrico
   (madeira + low-poly conflitavam). O `::after` virou só um degradê escuro na base.
   O código do piso está no histórico do git, se um dia voltar o fundo damask.
3. **Cards** — sombra dupla projetada, `border-top` claro (highlight de luz) e, no hover,
   `translateY(-8px) scale(1.014)` com a imagem em `scale(1.05)`.

A sombra de contato entre parede e chão fica em `.property-grid::after`.

**Ajuste de tom:** o piso precisa ser mais escuro que a intuição sugere — na primeira
tentativa as tábuas em `#7A5138` roubavam a cena dos imóveis. Ficaram em `#4A2F1F` /
`#573A26` com um véu escuro por cima.

**Resolução:** `brand/damask-background.jpg` tem 2028×1190. Com `cover fixed` ele só é
ampliado em telas acima de ~2028px de largura. Abaixo disso está nítido.
