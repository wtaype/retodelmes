import './more.css';
import $ from 'jquery';
import { wiAuth } from '../widev.js';
import { RUTAS } from '../rutas.js';

const CARDS = [
  // Módulos Comunes / Colaboradores (smile)
  { href: '/ranking',   ico: 'fa-trophy',           txt: 'Ranking',           desc: 'Salón de campeones y posiciones de venta del mes.' },
  { href: '/tours',     ico: 'fa-route',            txt: 'Catálogo de Tours', desc: 'Tours oficiales, precios vigentes y puntos asignados.' },
  { href: '/chat',      ico: 'fa-comments',         txt: 'Chat Grupal',       desc: 'Canal de comunicación en vivo con el equipo.' },
  
  // Módulos de Gestión (gestor & admin)
  { href: '/precios',   ico: 'fa-tags',             txt: 'Gestionar Tours',   desc: 'Configura y modifica el catálogo y precios oficiales.' },
  { href: '/ganancias', ico: 'fa-wallet',           txt: 'Ganancias',         desc: 'Calcula, audita y liquida comisiones del mes.' },
  { href: '/rrhh',      ico: 'fa-users-gear',       txt: 'Trabajadores',      desc: 'Administración de personal y activación de cuentas.' },

  // Módulos Administrativos (admin)
  { href: '/permisos',  ico: 'fa-lock',             txt: 'Permisos',          desc: 'Gestión de roles y privilegios de acceso.' },
  { href: '/sistema',   ico: 'fa-cogs',             txt: 'Sistema',           desc: 'Configuración global y bitácora del sistema.' },
  { href: '/mifcm',     ico: 'fa-bell',             txt: 'Mi FCM',            desc: 'Envío de notificaciones push a la aplicación.' },
  { href: '/nuevo',     ico: 'fa-plus',             txt: 'Crear Post',        desc: 'Escribe y publica artículos en el blog.' }
];

export const render = () => {
  const user = wiAuth.user;
  if (!user) return `<div class="z_page"><div class="z_empty"><i class="fas fa-ban"></i> Acceso denegado.</div></div>`;

  const rol = user.rol || 'smile';

  // Filtrar tarjetas por rol del usuario según RUTAS
  const cardsHtml = CARDS
    .filter(c => {
      const r = RUTAS.find(route => route.path === c.href);
      return r && r.roles && r.roles.includes(rol);
    })
    .map((c, i) => `
      <a href="${c.href}" class="z_card nv_item" data-page="${c.href.slice(1)}" data-search="${c.txt.toLowerCase()} ${c.desc.toLowerCase()}" style="animation-delay: ${i * 0.04}s">
        <div class="z_card_bar"></div>
        <div class="z_card_top">
          <div class="z_card_ico"><i class="fas ${c.ico}"></i></div>
          <div class="z_card_body">
            <h3>${c.txt}</h3>
            <p>${c.desc}</p>
          </div>
          <i class="fas fa-arrow-right z_card_arrow"></i>
        </div>
      </a>
    `)
    .join('');

  return `
    <div class="z_wrap">
      <header class="z_header wi_fadeUp">
        <div class="z_header_txt">
          <div class="z_badge"><i class="fas fa-cubes"></i> Módulos del Sistema</div>
          <h1>Más Herramientas</h1>
          <p>Explora y accede a las herramientas y módulos adicionales autorizados para tu cuenta.</p>
        </div>
        <div class="z_search_box">
          <i class="fas fa-search"></i>
          <input type="text" id="zSearchInput" placeholder="Buscar módulo..." autocomplete="off">
        </div>
      </header>
      
      <div class="z_grid wi_fadeUp" style="animation-delay: 0.1s">
        ${cardsHtml || `<div class="z_empty_grid"><i class="fas fa-ban"></i> No tienes herramientas adicionales asignadas.</div>`}
      </div>
    </div>
  `;
};

export const init = () => {
  const user = wiAuth.user;
  if (!user) return;

  $(document).off('.zmas').on('input.zmas', '#zSearchInput', function() {
    const q = $(this).val().toLowerCase().trim();
    if (!q) {
      $('.z_card').show();
      return;
    }
    $('.z_card').each(function() {
      const searchData = $(this).attr('data-search') || '';
      $(this).toggle(searchData.includes(q));
    });
  });

  $('.wi_fadeUp').addClass('visible wi_visible');
  window.__WIREADY__ = true;
};

export const cleanup = () => {
  $(document).off('.zmas');
};
