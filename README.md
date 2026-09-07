# M Saez Corretora de Imóveis

Site de catálogo de imóveis da corretora M Saez, em Camboriú e Balneário Camboriú (SC).

## Rodar localmente

```bash
npm install
npm run dev
```

`npm run build` gera a versão de produção em `dist/`.

## Estrutura

| Caminho | O que é |
|---|---|
| `src/main.js` | dados dos imóveis, montagem da interface e interações |
| `src/style.css` | estilos (blocos em camada — os do fim prevalecem) |
| `public/brand/` | assets servidos |
| `memory-bank/` | contexto e decisões do projeto |

## Publicação

Cada push na `main` dispara o workflow `.github/workflows/deploy.yml`, que builda e
publica no GitHub Pages.

## Antes de divulgar

Os dados de contato em `src/main.js` (objeto `broker`) ainda são **placeholders**:
CRECI, e-mail, telefones e endereço precisam dos valores reais.
