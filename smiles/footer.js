import $ from 'jquery';
import { app, lanzamiento, by, linkme, version, icon } from './wii.js';
import { savels, getls } from './widev.js';

// ── Redes Sociales ───────────────────────────────────────────────────────────
const REDES = [
  { tit: 'YouTube',   ico: 'fab fa-youtube',   url: 'https://www.youtube.com/@wiihope',   bg: '#ff0000' },
  { tit: 'Facebook',  ico: 'fab fa-facebook-f', url: 'https://www.facebook.com/wiihopee', bg: '#1877F2' },
  { tit: 'Instagram', ico: 'fab fa-instagram',  url: 'https://www.instagram.com/WiiHopee',bg: 'linear-gradient(45deg,#f58529,#dd2a7b,#515bd4)' },
  { tit: 'TikTok',    ico: 'fab fa-tiktok',     url: 'https://www.tiktok.com/@wiihope',   bg: '#000'    },
];

export { footer };
function footer(){
  const ahora = new Date();
  return `
  <footer class="foo">
    <div class="foo_inner">
      <div class="foo_left">
        <div class="foo_brand">
          <span class="foo_app"><a href="/">${app}</a></span>
          <span class="foo_ver">${version}</span>
        </div>
        <div class="foo_links">
          <a href="/acerca"   class="foo_link nv_item" data-page="acerca"  ><i class="fas fa-circle-info"></i> Acerca</a>
          <a href="/terminos"   class="foo_link nv_item" data-page="terminos"  ><i class="fas fa-file-contract"></i> Términos</a> 
          <a href="/cookies"    class="foo_link nv_item" data-page="cookies"   ><i class="fas fa-cookie-bite"></i> Cookies</a>
          <a href="/privacidad" class="foo_link nv_item" data-page="privacidad"><i class="fas fa-lock"></i> Privacidad</a>
          <a href="/feedback"   class="foo_link nv_item" data-page="feedback"  ><i class="fas fa-comment-dots"></i> Feedback</a>
          <a href="/contacto"   class="foo_link nv_item" data-page="contacto"  ><i class="fas fa-envelope"></i> Contacto</a>
          ${REDES.map(r => `<a href="${r.url}" class="redsscc" target="_blank" rel="noopener noreferrer" title="${r.tit}" style="--rb:${r.bg}"><i class="${r.ico}"></i></a>`).join('')}
        </div>
      </div>
      <div class="foo_right">
        <span>Creado con <i class="fas fa-heart" style="color:var(--mco);"></i> by <a href="${linkme}" target="_blank"><strong>${by}</strong></a> ${lanzamiento} - ${ahora.getFullYear()}</span>
      </div>
    </div>
  </footer>
  `;
}; 
if (!$('.foo').length) $('body').append(footer());

if (!$('#wi_bg_style').length) $("head").append(`<style id="wi_bg_style">:root{--bgim:url("${import.meta.env.BASE_URL}wpuntos.svg")}body{background: var(--bgim), var(--bg)}</style>`);

// ── BANNER COOKIES ────────────────────────────────────────────────────────────
const CK_KEY = 'cookies';

const cerrarBanner = (val) => {
  savels(CK_KEY, val);
  $('#cookies').removeClass('cookies_show');
  setTimeout(() => $('#cookies').remove(), 400);
};

// Los listeners siempre se registran (independiente del prerender)
$(document).on('click', '#ck_aceptar',  () => cerrarBanner(true));
$(document).on('click', '#ck_rechazar', () => cerrarBanner(false));

if (!getls(CK_KEY)) {
  // Si el prerender ya lo inyectó en el HTML, solo mostrarlo
  // Si no existe todavía (entorno de dev), crearlo
  if (!$('#cookies').length) {
    $('body').append(`
      <div class="cookies" id="cookies" role="dialog" aria-live="polite">
        <p class="cookies_txt"> <i class="fas fa-cookie-bite cookies_ico"></i>
          Usamos cookies para mejorar tu experiencia y mostrarte anuncios relevantes
          <a href="/cookies" class="cookies_link nv_item" data-page="cookies">más info.</a>
        </p>
        <div class="cookies_btns">
          <button class="cookies_aceptar" id="ck_aceptar"><i class="fas fa-check"></i> Aceptar</button>
          <button class="cookies_rechazar" id="ck_rechazar">Rechazar</button>
        </div>
      </div>`);
  }
  setTimeout(() => $('#cookies').addClass('cookies_show'), 800);
} else {
  // Ya aceptó — eliminar banner prerenderizado si existe en el DOM
  $('#cookies').remove();
}