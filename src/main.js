const properties = [
  { id: 1, code: '1017', type: 'Apartamento', title: 'Apartamento mobiliado no Tabuleiro', location: 'Tabuleiro / Camboriú', city: 'Camboriú - SC', district: 'Tabuleiro', condo: 'Residencial Tabuleiro', price: 850000, area: 74, rooms: 2, suites: 1, baths: 2, parking: 1, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85', tag: 'Aceita financiamento' },
  { id: 2, code: '1628', type: 'Apartamento', title: 'Residencial Aurora', location: 'Rio Pequeno', city: 'Camboriú - SC', district: 'Rio Pequeno', condo: 'Residencial Aurora', price: 2700, area: 62, rooms: 2, suites: 1, baths: 2, parking: 1, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85', rental: true },
  { id: 3, code: '1310', type: 'Casa', title: 'Casa térrea com jardim reservado', location: 'Santa Regina', city: 'Camboriú - SC', district: 'Santa Regina', condo: null, price: 420000, area: 128, rooms: 3, suites: 1, baths: 2, parking: 2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85' },
  { id: 4, code: '1987', type: 'Apartamento', title: 'Vista mar no Centro', location: 'Centro', city: 'Balneário Camboriú - SC', district: 'Centro', condo: 'Edifício Vista Mar', price: 3200, area: 91, rooms: 2, suites: 1, baths: 2, parking: 1, image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85', rental: true },
  { id: 5, code: '1533', type: 'Casa', title: 'Refúgio contemporâneo', location: 'Rio Pequeno', city: 'Camboriú - SC', district: 'Rio Pequeno', condo: null, price: 375000, area: 143, rooms: 3, suites: 1, baths: 3, parking: 2, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85' },
  { id: 6, code: '0662', type: 'Apartamento', title: 'Loft luminoso com varanda', location: 'Praia Brava', city: 'Balneário Camboriú - SC', district: 'Praia Brava', condo: 'Brava Loft Residence', price: 2800, area: 58, rooms: 1, suites: 1, baths: 1, parking: 1, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85', rental: true },
]

/* Dados de contato da corretora — ajuste aqui. */
const broker = {
  name: 'Isa',
  creci: 'CRECI 00000',
  phone: '5547999999999',            // usado nos links wa.me (só dígitos)
  phoneLabel: '(47) 99999-9999',     // WhatsApp exibido
  landline: '(47) 3000-0000',        // telefone fixo exibido
  instagram: 'https://instagram.com/',
  email: 'contato@exemplo.com.br',
  address: 'Rua, nº, Sala — Bairro, Cidade - SC',
}

const featurePresets = {
  Apartamento: [
    ['Acabamento', ['Piso em porcelanato', 'Piso laminado nos quartos']],
    ['Características do imóvel', ['Área de serviço', 'Churrasqueira no apartamento', 'Cozinha integrada', 'Lavabo', 'Sala de estar', 'Sala de jantar']],
    ['Instalação', ['Infraestrutura para ar condicionado', 'Elevador', 'Água quente', 'Teto rebaixado em gesso']],
    ['Lazer', ['Academia', 'Sala de jogos', 'Salão de festas']],
  ],
  Casa: [
    ['Acabamento', ['Piso em porcelanato', 'Piso laminado nos quartos']],
    ['Características do imóvel', ['Área de serviço', 'Churrasqueira', 'Cozinha integrada', 'Lavabo', 'Sala de estar', 'Sala de jantar']],
    ['Instalação', ['Infraestrutura para ar condicionado', 'Água quente', 'Portão automatizado']],
    ['Lazer', ['Jardim reservado', 'Área gourmet', 'Espaço para pets']],
  ],
}

const detailIcons = {
  hash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 3 7 21M17 3l-2 18M4 8.5h16M3 15.5h16"/></svg>',
  bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/><path d="M3 18h18M6 10V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3"/></svg>',
  bath: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M6.5 12V6.5A2.5 2.5 0 0 1 9 4h.5"/><path d="M8 16v2M12 16v3M16 16v2"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16.5V12l1.9-4.6A1.5 1.5 0 0 1 7.3 6.5h9.4a1.5 1.5 0 0 1 1.4.9L20 12v4.5"/><path d="M4 16.5h16M6.5 16.5V18M17.5 16.5V18"/><circle cx="7.6" cy="13.6" r=".9"/><circle cx="16.4" cy="13.6" r=".9"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.4 12.2 2.4 2.4 4.7-5.1"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 3 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"/></svg>',
  person: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0Z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9.2"/><path d="M12 11v6M12 7.3v.5"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8Z"/></svg>',
  print: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v4H7zM5 8h14a2 2 0 0 1 2 2v6h-4v5H7v-5H3v-6a2 2 0 0 1 2-2Zm4 8h6v3H9Z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5.5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="18.5" r="2.6"/><path d="m8.4 10.7 7.2-3.9M8.4 13.3l7.2 3.9"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="1.6"/><path d="m3.6 6.6 8.4 6 8.4-6"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .4 5.2.4 11.7c0 2.1.6 4.1 1.6 5.8L.3 24l6.7-1.7a11.7 11.7 0 0 0 5.1 1.2h.1c6.4 0 11.6-5.2 11.6-11.7 0-3.1-1.2-6.1-3.4-8.3ZM12.1 21.3c-1.6 0-3.2-.4-4.6-1.2l-.3-.2-4 .1 1.1-3.8-.2-.4a9.5 9.5 0 0 1-1.5-5.1c0-5.2 4.3-9.5 9.5-9.5 2.5 0 4.9 1 6.7 2.8a9.4 9.4 0 0 1 2.8 6.7c0 5.3-4.2 9.6-9.5 9.6Zm5.2-7.1c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-.8 1c-.2.2-.4.3-.7.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.6.9 3.5.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 3h3.1l1.6 4-2 1.3a12 12 0 0 0 5.4 5.4l1.3-2 4 1.6v3.1a1.6 1.6 0 0 1-1.8 1.6C11.4 17.3 6.7 12.6 5 5.8A1.6 1.6 0 0 1 6.6 3Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="3.5" y="5" width="17" height="15" rx="1.8"/><path d="M8 3v4M16 3v4M3.5 10h17"/></svg>',
  thumb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3Zm2-11 3.4-6.6A1.6 1.6 0 0 1 17.5 4v4.6h2.7a1.8 1.8 0 0 1 1.7 2.3l-1.9 7.6a2 2 0 0 1-1.9 1.5H11Z"/></svg>',
}

const formatPrice = (property) => property.rental ? `R$ ${property.price.toLocaleString('pt-BR')}/mês` : `R$ ${property.price.toLocaleString('pt-BR')}`
const whatsappUrl = (property) => `https://wa.me/5547999999999?text=${encodeURIComponent(`Olá, Isa! Vi o imóvel ${property.title} no site e gostaria de saber mais detalhes.`)}`

document.querySelector('#app').innerHTML = `<div class="app-shell"><aside class="sidebar"><div class="brand-mark"><span>isa</span><small>imóveis</small></div><nav class="side-nav" aria-label="Navegação principal"><button class="nav-item active"><span class="nav-icon">⌂</span><span>Explorar</span></button><button class="nav-item"><span class="nav-icon">♡</span><span>Favoritos</span><b id="favorite-count">0</b></button><button class="nav-item"><span class="nav-icon">◷</span><span>Minhas visitas</span></button></nav><div class="sidebar-bottom"><div class="market-index"><div class="index-heading"><span>↗</span> Índices</div><div class="index-row"><b>IGP-M</b><small>AGO/26</small><strong>-0,22%</strong></div><div class="index-row"><b>INCC</b><small>AGO/26</small><strong>0,85%</strong></div><div class="index-row"><b>IPCA</b><small>JUL/26</small><strong>0,07%</strong></div></div><button class="about-link">Sobre a Isa <span>→</span></button><button class="contact-link">Fale comigo <span>↗</span></button></div></aside><main class="main-content"><header class="topbar"><div class="mobile-brand"><span>isa</span><small>imóveis</small></div><div class="breadcrumb">Início <span>/</span> Encontrar um imóvel</div><div class="top-actions"><button class="icon-button" aria-label="Notificações">♧</button><div class="avatar">I</div><button class="menu-button" aria-label="Abrir menu">☰</button></div></header><section class="hero-copy"><div><p class="eyebrow">Curadoria imobiliária</p><h1>Encontre o lugar<br><em>para chamar de seu.</em></h1><p class="hero-text">Imóveis escolhidos para acompanhar a próxima fase da sua história.</p></div><a class="hero-whatsapp" href="https://wa.me/5547999999999" target="_blank" rel="noreferrer"><span>Converse com a Isa</span><strong>↗</strong></a></section><section class="catalog-panel"><div class="catalog-toolbar"><div><p class="eyebrow">Seleção Isa</p><h2>Imóveis em destaque <span id="result-count">06</span></h2></div><button class="filter-toggle" id="filter-toggle">Filtros <span>⌄</span></button></div><div class="filters" id="filters"><label>O que você procura<select id="type-filter"><option value="all">Todos os imóveis</option><option value="Casa">Casas</option><option value="Apartamento">Apartamentos</option></select></label><label>Localização<select id="location-filter"><option value="all">Todas as regiões</option><option value="Centro">Centro</option><option value="Rio Pequeno">Rio Pequeno</option><option value="Praia Brava">Praia Brava</option><option value="Santa Regina">Santa Regina</option></select></label><label>Finalidade<select id="purpose-filter"><option value="all">Comprar ou alugar</option><option value="sale">Comprar</option><option value="rental">Alugar</option></select></label></div><div class="property-grid" id="property-grid"></div></section></main></div><a class="floating-whatsapp" href="https://wa.me/5547999999999" target="_blank" rel="noreferrer" aria-label="Falar com a Isa pelo WhatsApp"><span>Falar com a Isa</span><b>${detailIcons.whatsapp}</b></a><div class="modal" id="property-modal" aria-hidden="true"><div class="modal-backdrop"></div><article class="modal-card" id="modal-card"></article></div>`

const favorites = new Set()
const grid = document.querySelector('#property-grid')
const count = document.querySelector('#result-count')
function renderCards(items = properties) { count.textContent = String(items.length).padStart(2, '0'); grid.innerHTML = items.length ? items.map((property) => `<article class="property-card"><button class="favorite-button ${favorites.has(property.id) ? 'is-favorite' : ''}" data-favorite="${property.id}" aria-label="Favoritar">${favorites.has(property.id) ? '♥' : '♡'}</button><button class="card-image" data-open="${property.id}"><img src="${property.image}" alt="${property.title}" loading="lazy" />${property.tag ? `<span class="property-tag">${property.tag}</span>` : ''}<span class="photo-count">▧ 12</span></button><div class="card-body"><p class="card-type">${property.type} · ${property.location}</p><h3>${property.title}</h3><p class="price">${formatPrice(property)}</p><div class="property-meta"><span>⌂ ${property.area} m²</span><span>♧ ${property.rooms} quartos</span><span>▣ ${property.parking} vaga</span></div><div class="card-footer"><span>Atualizado hoje</span><button data-contact="${property.id}">Tenho interesse <b>↗</b></button></div></div></article>`).join('') : '<div class="empty-state"><span>⌂</span><h3>Nenhum imóvel encontrado</h3><p>Tente ajustar seus filtros para ver outras opções.</p></div>' }
function applyFilters() { const type = document.querySelector('#type-filter').value; const location = document.querySelector('#location-filter').value; const purpose = document.querySelector('#purpose-filter').value; renderCards(properties.filter((property) => (type === 'all' || property.type === type) && (location === 'all' || property.location === location) && (purpose === 'all' || (purpose === 'rental' ? property.rental : !property.rental)))) }
const galleryOf = (property) => [property.image, 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85']
const pricePerSquare = (property) => `R$ ${(property.price / property.area).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/m²`
const plural = (value, word) => `${value} ${word}${value > 1 ? 's' : ''}`

function detailSpecs(property) {
  return [
    ['Transação', property.rental ? 'Locação' : 'Venda'],
    ['Finalidade', 'Residencial'],
    ['Tipo de imóvel', property.type],
    ['Cidade', property.city],
    ['Bairro', property.district],
    ['Dormitórios', `${property.rooms}${property.suites ? ` (sendo ${plural(property.suites, 'suíte')})` : ''}`],
    ['Banheiros', property.baths],
    ['Vagas de garagem', property.parking],
    ['Área privativa', `${property.area} m²${property.rental ? '' : ` <b class="spec-badge">${pricePerSquare(property)}</b>`}`],
    ['Área total', `${property.area} m²`],
    ['Estuda permuta', property.rental ? 'Não' : 'Sim'],
    ['Aceita financiamento', property.rental ? 'Não' : 'Sim'],
  ]
}

function openModal(property) {
  const gallery = galleryOf(property)
  const related = properties.filter((item) => item.id !== property.id).slice(0, 3)
  const groups = featurePresets[property.type] || featurePresets.Apartamento
  const badges = [
    [detailIcons.hash, `Cód. ${property.code}`, 'referência', 'is-dark'],
    [detailIcons.bed, plural(property.rooms, 'quarto'), property.suites ? `sendo ${plural(property.suites, 'suíte')}` : 'dormitórios', ''],
    [detailIcons.bath, `${property.baths} banheiros`, 'no total', ''],
    [detailIcons.car, plural(property.parking, 'vaga'), 'coberta', ''],
  ]
  document.querySelector('#modal-card').innerHTML = `<div class="detail-page">
<nav class="detail-breadcrumb"><a href="#" data-detail-back>${detailIcons.home} Início</a><i>/</i><span>${property.rental ? 'Locação' : 'Venda'}</span><i>/</i><span>${property.city}</span><i>/</i><span>${property.type}</span><i>/</i><span>Código ${property.code}</span><button class="detail-back" data-detail-back>← Voltar</button></nav>
<header class="detail-hero">
  <div>
    <p class="eyebrow">${property.type} · ${property.district}</p>
    <h1 class="detail-title">${property.title}</h1>
    <p class="detail-place">${property.city}${property.condo ? ` · ${property.condo}` : ''}</p>
    <div class="detail-tools"><button data-detail-favorite="${property.id}" class="${favorites.has(property.id) ? 'is-favorite' : ''}" aria-label="Favoritar">${detailIcons.star}</button><button data-detail-print aria-label="Imprimir">${detailIcons.print}</button><button data-detail-share aria-label="Compartilhar">${detailIcons.share}</button></div>
  </div>
  <div class="detail-price"><small>${property.rental ? 'Locação' : 'Venda'}</small><strong>${formatPrice(property)}</strong>${property.rental ? '' : `<span>${pricePerSquare(property)}</span>`}</div>
</header>
<section class="detail-gallery-block">
  <div class="detail-stage"><button class="stage-nav is-prev" data-gallery-step="-1" aria-label="Foto anterior">${detailIcons.chevron}</button><img class="detail-hero-image" src="${gallery[0]}" alt="${property.title}" /><button class="stage-nav is-next" data-gallery-step="1" aria-label="Próxima foto">${detailIcons.chevron}</button></div>
  <div class="detail-thumbs">${gallery.map((image, index) => `<button class="detail-thumb ${index === 0 ? 'is-selected' : ''}" data-gallery-image="${image}"><img src="${image}" alt="Imagem ${index + 1} de ${property.title}" loading="lazy" /></button>`).join('')}</div>
</section>
<div class="detail-badges">${badges.map(([icon, label, note, modifier]) => `<div class="badge-item"><span class="badge-tile ${modifier}">${icon}</span><strong>${label}</strong>${note ? `<small>${note}</small>` : ''}</div>`).join('')}</div>
<section class="detail-panel">
  <header class="panel-head"><span class="panel-tab">A curadoria</span><h2>Sobre o imóvel</h2></header>
  <div class="panel-body">
    <div class="detail-story">
      <p>Imóvel selecionado pela curadoria da Isa em ${property.district}, ${property.city}. Ambientes bem iluminados e integrados, pensados para acompanhar tanto os dias tranquilos quanto os momentos especiais.</p>
      <p>Para agenda de visitas e condições de pagamento, fale com a corretora responsável pelo WhatsApp ${broker.phoneLabel} ou pelo fixo ${broker.landline}.</p>
      <p class="detail-note">Valor sujeito a alteração sem aviso prévio.</p>
    </div>
    <ul class="spec-table">${detailSpecs(property).map(([label, value]) => `<li><span>${label}</span><b>${value}</b></li>`).join('')}</ul>
    <div class="feature-groups">${groups.map(([title, items]) => `<div class="feature-group"><h3>${title}</h3><ul>${items.map((item) => `<li>${detailIcons.check}<span>${item}</span></li>`).join('')}</ul></div>`).join('')}</div>
    <div class="detail-condo"><div><small>${property.condo ? 'Condomínio' : 'Localização'}</small><strong>${property.condo || property.location}</strong></div><b class="ref-badge">Ref. ${property.id.toString().padStart(3, '0')}</b></div>
  </div>
</section>
<section class="detail-panel">
  <header class="panel-head"><span class="panel-tab">Atendimento</span><h2>Corretora responsável</h2></header>
  <div class="panel-body">
    <div class="broker-body">
      <div class="broker-avatar">${broker.name.slice(0, 1)}</div>
      <div class="broker-info"><small>${broker.creci}</small><strong>${broker.name}</strong><a class="broker-line" href="https://wa.me/${broker.phone}" target="_blank" rel="noreferrer">${detailIcons.whatsapp}<span>${broker.phoneLabel}</span></a><a class="broker-social" href="${broker.instagram}" target="_blank" rel="noreferrer" aria-label="Instagram">${detailIcons.instagram}</a></div>
    </div>
  </div>
</section>
<section class="detail-panel">
  <header class="panel-head"><span class="panel-tab">Contato</span><h2>Solicite mais informações</h2></header>
  <div class="panel-body">
    <form class="detail-form" data-detail-form onsubmit="return false">
      <input id="detail-name" type="text" placeholder="Nome" autocomplete="name" />
      <input id="detail-phone" type="tel" placeholder="Telefone" autocomplete="tel" />
      <input id="detail-email" type="email" placeholder="E-mail" autocomplete="email" />
      <textarea id="detail-message" rows="4" placeholder="Mensagem"></textarea>
      <button type="button" class="form-action" data-detail-send="whatsapp" data-property="${property.id}">${detailIcons.whatsapp}<span>Falar agora por WhatsApp</span></button>
      <span class="form-or">ou</span>
      <button type="button" class="form-action" data-detail-send="mail" data-property="${property.id}">${detailIcons.mail}<span>Enviar por e-mail</span></button>
      <button type="button" class="form-action" data-detail-send="visit" data-property="${property.id}">${detailIcons.calendar}<span>Solicitar visita</span></button>
      <button type="button" class="detail-proposal" data-detail-send="proposal" data-property="${property.id}">${detailIcons.thumb}<span>Fazer proposta</span></button>
    </form>
  </div>
</section>
<section class="detail-panel">
  <header class="panel-head"><span class="panel-tab">Seleção Isa</span><h2>Veja também</h2></header>
  <div class="panel-body">
    <div class="related-list">${related.map((item) => `<article class="related-item" data-detail-open="${item.id}"><div class="related-row"><img src="${item.image}" alt="${item.title}" loading="lazy" /></div><h4>${item.title}</h4><div class="related-info"><strong>${formatPrice(item)}</strong><div class="related-meta"><span>${detailIcons.bed}${item.rooms}</span><span>${detailIcons.bath}${item.baths}</span><span>${detailIcons.car}${item.parking}</span></div></div></article>`).join('')}</div>
  </div>
</section>
<button class="modal-close" aria-label="Fechar">×</button>
</div>
${siteFooter()}`
  document.querySelector('#property-modal').setAttribute('aria-hidden', 'false')
  document.querySelector('#modal-card').scrollTop = 0
}
document.addEventListener('click', (event) => { const favorite = event.target.closest('[data-favorite]'); const open = event.target.closest('[data-open]'); const contact = event.target.closest('[data-contact]'); if (favorite) { const id = Number(favorite.dataset.favorite); favorites.has(id) ? favorites.delete(id) : favorites.add(id); document.querySelector('#favorite-count').textContent = favorites.size; renderCards() } if (open) window.open(`${window.location.pathname}#imovel=${open.dataset.open}`, '_blank', 'noopener'); if (contact) { const property = properties.find((item) => item.id === Number(contact.dataset.contact)); window.open(whatsappUrl(property), '_blank', 'noopener') } if (event.target.closest('.modal-close') || event.target.classList.contains('modal-backdrop')) document.querySelector('#property-modal').setAttribute('aria-hidden', 'true') })
document.addEventListener('click', (event) => { const thumbnail = event.target.closest('[data-gallery-image]'); if (!thumbnail) return; document.querySelector('.detail-hero-image').src = thumbnail.dataset.galleryImage; document.querySelectorAll('.detail-thumb').forEach((item) => item.classList.remove('is-selected')); thumbnail.classList.add('is-selected') })
document.querySelectorAll('select').forEach((select) => select.addEventListener('change', applyFilters)); document.querySelector('#filter-toggle').addEventListener('click', () => document.querySelector('#filters').classList.toggle('is-open')); document.querySelector('.menu-button').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('is-open')); renderCards()
const headerBrand = document.querySelector('.mobile-brand'); headerBrand.outerHTML = '<a class="header-brand" href="#" aria-label="MM Saez Corretora de Imóveis"><img src="./brand/mm-saez-gray.png" alt="MM Saez Corretora de Imóveis"></a>'
document.querySelector('.avatar').outerHTML = '<a class="whatsapp-icon" href="https://wa.me/5547999999999" target="_blank" rel="noreferrer" aria-label="Falar com a Isa no WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .4 5.2.4 11.7c0 2.1.6 4.1 1.6 5.8L.3 24l6.7-1.7a11.7 11.7 0 0 0 5.1 1.2h.1c6.4 0 11.6-5.2 11.6-11.7 0-3.1-1.2-6.1-3.4-8.3ZM12.1 21.3c-1.6 0-3.2-.4-4.6-1.2l-.3-.2-4 .1 1.1-3.8-.2-.4a9.5 9.5 0 0 1-1.5-5.1c0-5.2 4.3-9.5 9.5-9.5 2.5 0 4.9 1 6.7 2.8a9.4 9.4 0 0 1 2.8 6.7c0 5.3-4.2 9.6-9.5 9.6Zm5.2-7.1c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-.8 1c-.2.2-.4.3-.7.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.6.9 3.5.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"/></svg></a>'
const topActions = document.querySelector('.top-actions'); const whatsappIcon = document.querySelector('.whatsapp-icon'); const arrowIcon = document.querySelector('.icon-button'); topActions.insertBefore(whatsappIcon, arrowIcon)
arrowIcon.remove()
document.querySelector('.menu-button').textContent = ''
const navItems = document.querySelectorAll('.nav-item'); const exploreButton = navItems[0]; const favoritesButton = navItems[1]; const visitsButton = navItems[2]
exploreButton.addEventListener('click', () => { navItems.forEach((item) => item.classList.remove('active')); exploreButton.classList.add('active'); renderCards(); document.querySelector('.main-content').scrollTo({ top: 0, behavior: 'smooth' }) })
favoritesButton.addEventListener('click', () => { navItems.forEach((item) => item.classList.remove('active')); favoritesButton.classList.add('active'); renderCards(properties.filter((property) => favorites.has(property.id))) })
visitsButton.addEventListener('click', () => { navItems.forEach((item) => item.classList.remove('active')); visitsButton.classList.add('active'); document.querySelector('.catalog-panel').scrollIntoView({ behavior: 'smooth' }) })
document.querySelector('.contact-link').addEventListener('click', () => window.open('https://wa.me/5547999999999', '_blank', 'noopener'))
document.addEventListener('click', (event) => { if (!event.target.closest('.sidebar') && !event.target.closest('.menu-button')) document.querySelector('.sidebar').classList.remove('is-open') })

/* --- Página de detalhe: navegação da galeria, ações e formulário --- */
function stepGallery(direction) { const thumbs = [...document.querySelectorAll('.detail-thumb')]; if (!thumbs.length) return; const current = Math.max(0, thumbs.findIndex((thumb) => thumb.classList.contains('is-selected'))); const next = (current + direction + thumbs.length) % thumbs.length; thumbs.forEach((thumb) => thumb.classList.remove('is-selected')); thumbs[next].classList.add('is-selected'); thumbs[next].scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' }); document.querySelector('.detail-hero-image').src = thumbs[next].dataset.galleryImage }
function detailFormMessage(property) { const value = (id) => (document.querySelector(id)?.value || '').trim(); const name = value('#detail-name'); const phone = value('#detail-phone'); const email = value('#detail-email'); const message = value('#detail-message'); return { name, phone, email, message } }
function closeDetail() { document.querySelector('#property-modal').setAttribute('aria-hidden', 'true'); if (window.location.hash.includes('imovel=')) { if (window.opener) window.close(); else { history.replaceState(null, '', window.location.pathname); } } }
document.addEventListener('click', (event) => {
  const step = event.target.closest('[data-gallery-step]')
  const back = event.target.closest('[data-detail-back]')
  const favorite = event.target.closest('[data-detail-favorite]')
  const share = event.target.closest('[data-detail-share]')
  const print = event.target.closest('[data-detail-print]')
  const openRelated = event.target.closest('[data-detail-open]')
  const send = event.target.closest('[data-detail-send]')
  if (step) stepGallery(Number(step.dataset.galleryStep))
  if (back) { event.preventDefault(); closeDetail() }
  if (favorite) { const id = Number(favorite.dataset.detailFavorite); favorites.has(id) ? favorites.delete(id) : favorites.add(id); favorite.classList.toggle('is-favorite', favorites.has(id)); document.querySelector('#favorite-count').textContent = favorites.size; renderCards() }
  if (share) { const url = window.location.href; navigator.share ? navigator.share({ url }).catch(() => {}) : navigator.clipboard?.writeText(url).then(() => { share.classList.add('is-copied'); setTimeout(() => share.classList.remove('is-copied'), 1600) }) }
  if (print) window.print()
  if (openRelated) { const property = properties.find((item) => item.id === Number(openRelated.dataset.detailOpen)); if (property) openModal(property) }
  if (send) {
    const property = properties.find((item) => item.id === Number(send.dataset.property))
    const form = detailFormMessage(property)
    const intro = { mail: 'gostaria de mais informações sobre', whatsapp: 'vi no site e gostaria de saber mais sobre', visit: 'gostaria de agendar uma visita ao imóvel', proposal: 'gostaria de fazer uma proposta para o imóvel' }[send.dataset.detailSend]
    const body = [`Olá, ${broker.name}! ${form.name ? `Meu nome é ${form.name} e ` : ''}${intro} ${property.title} (cód. ${property.code}).`, form.message, form.phone && `Telefone: ${form.phone}`, form.email && `E-mail: ${form.email}`].filter(Boolean).join('\n\n')
    if (send.dataset.detailSend === 'mail') window.location.href = `mailto:${broker.email}?subject=${encodeURIComponent(`Imóvel cód. ${property.code} - ${property.title}`)}&body=${encodeURIComponent(body)}`
    else window.open(`https://wa.me/${broker.phone}?text=${encodeURIComponent(body)}`, '_blank', 'noopener')
  }
})
document.addEventListener('keydown', (event) => { if (document.querySelector('#property-modal').getAttribute('aria-hidden') === 'false') { if (event.key === 'Escape') closeDetail(); if (event.key === 'ArrowRight') stepGallery(1); if (event.key === 'ArrowLeft') stepGallery(-1) } })

/* --- Rodapé do site: buscas frequentes, atalhos e contato --- */
const priceBands = [
  ['Até 500 mil', (p) => p.price <= 500000],
  ['De 500 mil até 750 mil', (p) => p.price > 500000 && p.price <= 750000],
  ['De 750 mil até 1,5 Mi', (p) => p.price > 750000 && p.price <= 1500000],
  ['A partir de 1,5 Mi', (p) => p.price > 1500000],
]
const uniq = (list) => [...new Set(list)]
const footerTags = () => [
  ...properties.map((p) => ({ label: `<b>Imóvel</b> código #${p.code}`, kind: 'code', value: p.id })),
  ...uniq(properties.map((p) => p.city)).map((city) => ({ label: `<b>Imóvel</b> em <b>${city}</b>`, kind: 'city', value: city })),
  ...uniq(properties.map((p) => p.type)).map((type) => ({ label: `<b>${type}</b>`, kind: 'type', value: type })),
  { label: '<b>Imóvel</b> para <b>venda</b>', kind: 'transaction', value: 'sale' },
  { label: '<b>Imóvel</b> para <b>locação</b>', kind: 'transaction', value: 'rental' },
]
function footerColumn(title, items) {
  return `<div class="footer-col"><h4>${title}</h4><ul>${items.map(({ label, kind, value }) => `<li><button data-footer="${kind}" data-value="${value}">${label}</button></li>`).join('')}</ul></div>`
}
function siteFooter() {
  return `<footer class="site-footer">
  <div class="footer-inner">
    <section class="footer-searches">
      <h3>Buscas frequentes</h3>
      <div class="footer-tags">${footerTags().map((tag) => `<button data-footer="${tag.kind}" data-value="${tag.value}">${tag.label}</button>`).join('')}</div>
    </section>
    <div class="footer-columns">
      ${footerColumn('Bairros mais acessados', uniq(properties.map((p) => p.district)).map((d) => ({ label: d, kind: 'district', value: d })))}
      ${footerColumn('Tipos mais buscados', uniq(properties.map((p) => p.type)).map((t) => ({ label: t, kind: 'type', value: t })))}
      ${footerColumn('Imóveis por quarto', [1, 2, 3, 4, 5].map((n) => ({ label: `${n} ${n > 1 ? 'Quartos' : 'Quarto'}`, kind: 'rooms', value: n })))}
      ${footerColumn('Imóveis por preço', priceBands.map(([label]) => ({ label, kind: 'price', value: label })))}
    </div>
    <div class="footer-contact">
      <a class="footer-brand" href="#" aria-label="M Saez Corretora de Imóveis"><img src="./brand/mm-saez-gray.png" alt="M Saez Corretora de Imóveis" /></a>
      <div class="footer-lines">
        <a href="mailto:${broker.email}">${detailIcons.mail}<span>Atendimento por e-mail</span></a>
        <a href="https://wa.me/${broker.phone}" target="_blank" rel="noreferrer">${detailIcons.whatsapp}<span>${broker.phoneLabel}</span></a>
        <a href="tel:${broker.landline.replace(/\D/g, '')}">${detailIcons.phone}<span>${broker.landline}</span></a>
        <a href="${broker.instagram}" target="_blank" rel="noreferrer">${detailIcons.instagram}<span>Instagram</span></a>
      </div>
      <p class="footer-creci">${broker.creci}</p>
    </div>
  </div>
  <div class="footer-bar">
    <span class="footer-address">${detailIcons.pin}<span>${broker.address}</span></span>
    <span class="footer-legal">© ${new Date().getFullYear()} ${broker.name} · M Saez Corretora de Imóveis</span>
  </div>
</footer>`
}
document.querySelector('.main-content').insertAdjacentHTML('beforeend', siteFooter())
function applyQuickFilter(kind, value) {
  document.querySelector('#property-modal').setAttribute('aria-hidden', 'true')
  if (kind === 'code') { const property = properties.find((item) => item.id === Number(value)); if (property) openModal(property); return }
  const band = priceBands.find(([label]) => label === value)
  const match = {
    city: (p) => p.city === value,
    type: (p) => p.type === value,
    district: (p) => p.district === value,
    rooms: (p) => p.rooms === Number(value),
    transaction: (p) => (value === 'rental' ? Boolean(p.rental) : !p.rental),
    price: (p) => !p.rental && band && band[1](p),
  }[kind]
  if (!match) return
  document.querySelectorAll('.filters select').forEach((select) => { select.value = 'all' })
  renderCards(properties.filter(match))
  document.querySelector('.catalog-panel').scrollIntoView({ behavior: 'smooth', block: 'start' })
}
document.addEventListener('click', (event) => { const target = event.target.closest('[data-footer]'); if (target) applyQuickFilter(target.dataset.footer, target.dataset.value) })


/* Abre o imóvel pedido na URL — por último: siteFooter() depende das constantes do rodapé. */
const requestedProperty = Number(new URLSearchParams(window.location.hash.slice(1)).get('imovel')); if (requestedProperty) openModal(properties.find((property) => property.id === requestedProperty))