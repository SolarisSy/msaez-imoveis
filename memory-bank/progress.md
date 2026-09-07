# Progress

## Funciona hoje
- [x] Home: hero, catálogo com 6 imóveis, filtros (tipo / região / finalidade).
- [x] Cards: favoritar, contato direto por WhatsApp, contador de favoritos na sidebar.
- [x] Página do produto em tela cheia via `#imovel=<id>`, aberta em nova aba.
- [x] Galeria: miniaturas, setas, navegação por ← / → e Esc para fechar.
- [x] Ficha técnica, diferenciais por tipo de imóvel, condomínio e referência.
- [x] Formulário que monta a mensagem e dispara WhatsApp / e-mail / visita / proposta.
- [x] Imóveis relacionados navegáveis sem recarregar.
- [x] Compartilhar (`navigator.share` com fallback para clipboard) e imprimir
      (`@media print` esconde ações e formulário).
- [x] Responsivo até 820px; logo na paleta do site.

## Falta
- [ ] Dados reais: CRECI, e-mail, telefone da corretora.
- [ ] Fotos reais por imóvel (hoje a galeria repete as mesmas imagens).
- [ ] Descrição real de cada imóvel (hoje é texto gerado).
- [ ] Sidebar: "Minhas visitas" só faz scroll; favoritos não persistem (memória volátil).
- [ ] Páginas institucionais e de contato do menu.
- [ ] SEO / URL própria por imóvel.

## Decisões que não devem ser revertidas sem motivo
- Página do produto clara, com cor em traço fino — o tema escuro com faixas chapadas foi
  testado e rejeitado por ficar pesado.
- Desert Sand fica no header/hero; a página do produto usa Powder Pink como acento
  (as duas juntas competiam).
- O painel do catálogo continua escuro com damask, por contraste deliberado.
