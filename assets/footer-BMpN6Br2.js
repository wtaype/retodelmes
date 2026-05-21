import{$ as a}from"./vendor-PbmUQHyn.js";import{e as c,z as t,r,g as n,q as l,l as f,w as d}from"./index-DIsh90OI.js";const k=[{tit:"YouTube",ico:"fab fa-youtube",url:"https://www.youtube.com/@wiihope",bg:"#ff0000"},{tit:"Facebook",ico:"fab fa-facebook-f",url:"https://www.facebook.com/wiihopee",bg:"#1877F2"},{tit:"Instagram",ico:"fab fa-instagram",url:"https://www.instagram.com/WiiHopee",bg:"linear-gradient(45deg,#f58529,#dd2a7b,#515bd4)"},{tit:"TikTok",ico:"fab fa-tiktok",url:"https://www.tiktok.com/@wiihope",bg:"#000"}];function p(){const e=new Date;return`
  <footer class="foo">
    <div class="foo_inner">
      <div class="foo_left">
        <div class="foo_brand">
          <span class="foo_app"><a href="/">${c}</a></span>
          <span class="foo_ver">${t}</span>
        </div>
        <div class="foo_links">
          <a href="/acerca"   class="foo_link nv_item" data-page="acerca"  ><i class="fas fa-circle-info"></i> Acerca</a>
          <a href="/terminos"   class="foo_link nv_item" data-page="terminos"  ><i class="fas fa-file-contract"></i> Términos</a> 
          <a href="/cookies"    class="foo_link nv_item" data-page="cookies"   ><i class="fas fa-cookie-bite"></i> Cookies</a>
          <a href="/privacidad" class="foo_link nv_item" data-page="privacidad"><i class="fas fa-lock"></i> Privacidad</a>
          <a href="/feedback"   class="foo_link nv_item" data-page="feedback"  ><i class="fas fa-comment-dots"></i> Feedback</a>
          <a href="/contacto"   class="foo_link nv_item" data-page="contacto"  ><i class="fas fa-envelope"></i> Contacto</a>
          ${k.map(o=>`<a href="${o.url}" class="redsscc" target="_blank" rel="noopener noreferrer" title="${o.tit}" style="--rb:${o.bg}"><i class="${o.ico}"></i></a>`).join("")}
        </div>
      </div>
      <div class="foo_right">
        <span>Creado con <i class="fas fa-heart" style="color:var(--mco);"></i> by <a href="${r}" target="_blank"><strong>${n}</strong></a> ${l} - ${e.getFullYear()}</span>
      </div>
    </div>
  </footer>
  `}a(".foo").length||a("body").append(p());a("#wi_bg_style").length||a("head").append('<style id="wi_bg_style">:root{--bgim:url("/retodelmes/wpuntos.svg")}body{background: var(--bgim), var(--bg)}</style>');const s="cookies",i=e=>{d(s,e),a("#cookies").removeClass("cookies_show"),setTimeout(()=>a("#cookies").remove(),400)};a(document).on("click","#ck_aceptar",()=>i(!0));a(document).on("click","#ck_rechazar",()=>i(!1));f(s)?a("#cookies").remove():(a("#cookies").length||a("body").append(`
<div class="cookiess cookiess_show" id="cookies" role="dialog" aria-live="polite" aria-label="Consentimiento de Cookies">
    <p class="cookiess_txt"><i class="fas fa-cookie-bite cookiess_ico"></i>Usamos cookies para mejorar tu experiencia y mostrarte anuncios relevantes
    <a class="cookiess_link nv_item" href="/cookies">Más info</a></p>
    <div class="cookiess_btns"><button class="cookiess_aceptar" id="ck_aceptar"><i class="fas fa-check"></i> Aceptar</button>
    <button class="cookiess_rechazar" id="ck_rechazar">Rechazar</button></div>
  </div>`),setTimeout(()=>a("#cookies").addClass("cookies_show"),800));export{p as footer};
