# System Patterns

## Arquitetura
Vanilla JS + Vite, sem framework e sem router. Um único `src/main.js` monta o shell da
aplicação via `innerHTML` e depois aplica mutações imperativas sobre ele.

```
index.html  →  <div id="app">
src/main.js →  shell (sidebar, topbar, hero, catálogo, modal) + dados + handlers
src/style.css → estilos
```

## Padrões em uso

### 1. CSS em camadas de override
`style.css` foi construído por acréscimo: blocos no fim do arquivo sobrescrevem os
anteriores (paleta, tema, ajustes). **Ao mudar cor/estilo, acrescente ou reescreva o
bloco final** — editar uma regra no meio costuma ser anulado adiante.
Cuidado com especificidade: já houve conflito entre `.detail-story p` (novo) e
`.detail-story p:not(.eyebrow)` (antigo, mais específico). Prefixe com `.detail-page`.

### 2. Página do produto = modal fullscreen
Não existe rota. `openModal(property)` injeta o HTML em `#modal-card` e o modal vira
tela cheia via `.modal-card:has(.detail-page)`. A "URL" é o hash `#imovel=<id>`, lido no
carregamento.

### 3. Delegação de eventos por data-attribute
Todos os cliques passam por listeners no `document`, casando com `data-*`:
`data-open`, `data-favorite`, `data-contact`, `data-gallery-step`, `data-gallery-image`,
`data-detail-back`, `data-detail-favorite`, `data-detail-print`, `data-detail-share`,
`data-detail-open`, `data-detail-send`.
**Renderização recria o DOM — nunca guarde referência a nó; use o data-attribute.**

### 4. Ícones inline
`detailIcons` guarda SVGs como string. Use `stroke="currentColor"` e `fill="none"` para
o ícone funcionar em qualquer fundo (um ícone sólido com miolo hardcoded já sumiu ao
trocar o tema).

### 5. Dados
`properties[]` no topo de `main.js`. Campos: id, code, type, title, location, city,
district, condo, price, area, rooms, suites, baths, parking, image, tag, rental.
`featurePresets` define os diferenciais por tipo (Apartamento / Casa).
`broker` centraliza nome, CRECI, telefone, Instagram e e-mail.

### 6. Rodapé compartilhado
`siteFooter()` devolve o HTML do rodapé e é usado nos dois contextos: injetado no fim do
`.main-content` (home) e concatenado no `innerHTML` do `#modal-card` **fora** do
`.detail-page` (produto) — dentro dele o rodapé herdaria o `max-width` do conteúdo.

Os atalhos são gerados a partir de `properties[]` (bairros, tipos, códigos, cidades) e
filtram de verdade via `applyQuickFilter(kind, value)` → `data-footer` / `data-value`.

**Ordem de execução importa:** `siteFooter()` lê `priceBands` e `uniq`, que são `const`
no fim do arquivo. Por isso a abertura pelo hash (`const requestedProperty = ...`) é a
**última linha** de `main.js` — antes disso ela caía em TDZ e o modal não abria.

**`.main-content` é flex-column** (para o rodapé encostar no fim quando o conteúdo é
curto) e tem `height:100vh`; os filhos precisam de `flex:0 0 auto`, senão são
comprimidos e o catálogo colapsa.
