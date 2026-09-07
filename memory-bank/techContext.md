# Tech Context

## Stack
- **Vite 8** (`npm run dev` / `build` / `preview`), `"type": "module"`.
- Vanilla JS, sem dependências de runtime. Zero framework.
- Fontes: Playfair Display + DM Sans via Google Fonts (`@import` no CSS).
- Imagens de imóvel: Unsplash por URL (placeholders até virem as fotos reais).

## Estrutura
```
index.html          shell mínimo
src/main.js         tudo: dados, HTML, handlers
src/style.css       estilos (blocos em camada; os do fim vencem)
public/brand/       assets servidos (mm-saez-sand.png, mm-saez.svg)
brand/              originais de trabalho (não são copiados no build)
memory-bank/        este contexto
```

**Atenção:** só o que está em `public/` é servido no build. Um asset em `brand/` (raiz)
não é copiado — precisa estar em `public/brand/`.

`vite.config.js` usa `base: './'` e os assets são referenciados por caminho **relativo**
(`./brand/x.png`), não absoluto. Isso faz o build funcionar tanto servido por HTTP
quanto aberto direto do disco por `file://` — abrir `dist/index.html` com dois cliques
quebra qualquer caminho iniciado por `/`.

A logo existe **em duas cópias propositalmente**: `public/brand/mm-saez-sand.png` (o
Vite serve `public/` na raiz) e `brand/mm-saez-sand.png` (o Live Server do VS Code serve
a pasta do projeto e **não** mapeia `public/` para `/`, então sem essa cópia dá 404).
Ao trocar a logo, atualize as duas.

## Ferramentas de apoio
- `.venv/` (Python 3.9) com **Pillow + numpy** — usado para recolorir a logo:
  remove o fundo por distância de cor, recupera a cor pura (unpremultiply) e remapeia
  para a paleta preservando o sombreado.
- Screenshots de verificação: Chrome headless.
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
   --disable-gpu --hide-scrollbars --virtual-time-budget=6000 \
   --window-size=1440,4200 --screenshot=out.png "http://localhost:PORTA/#imovel=1"`

## Armadilha do ambiente
O diretório do projeto termina com **espaço**: `~/Desktop/site da isa ` (com espaço
final). `cd ~/Desktop/"site da isa"` falha — sempre inclua o espaço nas aspas.

## Publicação
Repositório: **https://github.com/SolarisSy/msaez-imoveis** (público)
Site no ar: **https://solarissy.github.io/msaez-imoveis/**

Cada push na `main` dispara `.github/workflows/deploy.yml` (Actions → build Vite →
`upload-pages-artifact` → `deploy-pages`). O source do Pages é **GitHub Actions**, não
uma branch — foi habilitado por
`gh api -X POST repos/SolarisSy/msaez-imoveis/pages -f build_type=workflow`.

Se o primeiro deploy falhar com `HttpError: Not Found` em `deploy-pages`, é o Pages
ainda não habilitado: habilite e rode `gh run rerun <id>`.

O `base: './'` do `vite.config.js` é o que faz o site funcionar no subpath
`/msaez-imoveis/` — sem ele, todos os assets dariam 404 no GitHub Pages.
