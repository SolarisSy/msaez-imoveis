# Active Context — 2026-09-06

## Estado
Redesign da **página do produto** concluído. Ela é uma tela cheia aberta ao clicar num
card do catálogo, com: breadcrumb, título + preço, galeria com miniaturas, faixa de
resumo, "Sobre o imóvel" (descrição + ficha técnica em 2 colunas + diferenciais +
condomínio/ref), corretora responsável, formulário de contato e "Veja também".

## Última rodada de mudanças
1. Estrutura da página do produto criada no formato de painéis empilhados (referência:
   CB Imóveis).
2. Paleta trocada para a escala Desert Sand; página do produto passou de escura a clara.
3. Logo recolorida para a paleta do site (transparente, sem moldura).
4. Página do produto redesenhada em Powder Pink + Dark Chocolate: saíram as faixas
   chapadas, entraram hairlines, respiro e tipografia serifada.
5. Página do produto passou a usar o mesmo fundo damask da grade principal.
6. Rodapé criado (buscas frequentes, atalhos por bairro/tipo/quarto/preço, contato,
   endereço) e aplicado na home e na página do produto.

## Servindo o site
`npm run dev` é o caminho certo. O Live Server do VS Code também funciona, mas só porque
os assets estão duplicados em `brand/` — ver techContext.md.

## Pendências conhecidas
- `broker` em `src/main.js` concentra todos os dados de contato e está com
  placeholders: `creci`, `email`, `phone`, `phoneLabel`, `landline`, `address`.
  **Precisam dos valores reais** — não inventar.
- Os telefones `(47) 99205-6726` / `(47) 3515-3157` que apareceram numa versão anterior
  eram **da CB Imóveis** (site usado como referência visual) e foram removidos.
- Fotos dos imóveis são do Unsplash; a galeria repete as mesmas 5 imagens para todo
  imóvel (`galleryOf`).
- Textos descritivos são gerados a partir de bairro/cidade, não são descrições reais.
- Não há roteamento nem SEO por imóvel (a página vive num hash).

## Próximo passo natural
Substituir dados e contatos reais, depois avaliar rota real por imóvel se SEO importar.
