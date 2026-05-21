import{$ as a}from"./vendor-2D3jvCpt.js";import{d as i,x as c,p as t,f as r,o as n,j as l,u as f}from"./index-CaICLHnq.js";function d(){return`
  <footer class="foo">
    <div class="foo_inner">
      <div class="foo_left">
        <div class="foo_brand">
          <span class="foo_app"><a href="/">${i}</a></span>
          <span class="foo_ver">${c}</span>
        </div>
        <div class="foo_links">
          <a href="/acerca"   class="foo_link nv_item" data-page="acerca"  ><i class="fas fa-circle-info"></i> Acerca</a>
          <a href="/terminos"   class="foo_link nv_item" data-page="terminos"  ><i class="fas fa-file-contract"></i> Términos</a> 
          <a href="/cookies"    class="foo_link nv_item" data-page="cookies"   ><i class="fas fa-cookie-bite"></i> Cookies</a>
          <a href="/privacidad" class="foo_link nv_item" data-page="privacidad"><i class="fas fa-lock"></i> Privacidad</a>
          <a href="/feedback"   class="foo_link nv_item" data-page="feedback"  ><i class="fas fa-comment-dots"></i> Feedback</a>
          <a href="/contacto"   class="foo_link nv_item" data-page="contacto"  ><i class="fas fa-envelope"></i> Contacto</a>
          </div>
          </div>
          <div class="foo_right">
          <span>Creado con <i class="fas fa-heart" style="color:var(--mco);"></i> by <a href="${t}" target="_blank"><strong>${r}</strong></a> ${n} - ${new Date().getFullYear()}</span>
          </div>
          </div>
          </footer>
          `}a(".foo").length||a("body").append(d());a("#wi_bg_style").length||a("head").append('<style id="wi_bg_style">:root{--bgim:url("/retodelmes/wpuntos.svg")}body{background: var(--bgim), var(--bg)}</style>');const s="cookies",e=o=>{f(s,o),a("#cookies").removeClass("cookies_show"),setTimeout(()=>a("#cookies").remove(),150)};a(document).on("pointerdown","#ck_aceptar",()=>e(!0));a(document).on("pointerdown","#ck_rechazar",()=>e(!1));l(s)?a("#cookies").remove():(a("#cookies").length||a("body").append(`
<div class="cookiess cookiess_show" id="cookies" role="dialog" aria-live="polite" aria-label="Consentimiento de Cookies">
    <p class="cookiess_txt"><i class="fas fa-cookie-bite cookiess_ico"></i>Usamos cookies para mejorar tu experiencia y mostrarte anuncios relevantes
    <a class="cookiess_link nv_item" href="/cookies">Más info</a></p>
    <div class="cookiess_btns"><button class="cookiess_aceptar" id="ck_aceptar"><i class="fas fa-check"></i> Aceptar</button>
    <button class="cookiess_rechazar" id="ck_rechazar">Rechazar</button></div>
  </div>`),setTimeout(()=>a("#cookies").addClass("cookies_show"),800));export{d as footer};
