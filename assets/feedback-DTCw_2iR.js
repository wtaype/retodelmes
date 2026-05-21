import{_ as e,d as t}from"./index-D2CM3kGN.js";/* empty css               *//* empty css                 */import{$ as c}from"./vendor-2D3jvCpt.js";const r=[{ico:"fa-envelope",color:"#0EBEFF",bg:"var(--wb)",txt:"var(--tx)",tit:"Correo Administrativo",desc:"Escríbenos directamente para consultas sobre nóminas, comisiones o contratos.",url:"mailto:soporte.interno@retodelmes.com",cta:"Enviar correo"},{ico:"fa-comment-dots",color:"#29C72E",bg:"var(--wb)",txt:"var(--tx)",tit:"Formulario de Soporte",desc:"Reporta errores de sistema, tickets no validados o solicita soporte técnico inmediato.",url:"/acerca/contacto",cta:"Abrir Formulario"}],n=[{ico:"fa-bug",color:"#FF5C69",tit:"Problema con Comisión",desc:"El monto calculado de tus soles o acumulados tiene discrepancias."},{ico:"fa-star",color:"#FFDA34",tit:"Error de Puntos o Venta",desc:"El tour registrado no aparece en el ranking o no sumó puntos."},{ico:"fa-user-lock",color:"#0EBEFF",tit:"Acceso y Credenciales",desc:"Dificultades para iniciar sesión o problemas con tu contraseña."},{ico:"fa-lightbulb",color:"#29C72E",tit:"Sugerencia de la App",desc:"Propuestas para optimizar el registro de tours en las dunas de Ica."}],m=()=>`
<main id="wimain">
<div class="ac_wrap tm_wrap">

  <section class="ac_hero tm_hero">
    <div class="ac_hero_orb ac_orb1"></div><div class="ac_hero_orb ac_orb2"></div><div class="ac_hero_orb ac_orb3"></div>
    <div class="ac_hero_body">
      <div class="ac_hero_badge"><i class="fas fa-headset"></i> Canal de Comunicación Interno</div>
      <h1 class="ac_hero_tit">Centro de<br><span class="ac_grad">Soporte 🛠️</span></h1>
      <p class="ac_hero_sub">
        Tu retroalimentación nos permite optimizar los registros y corregir comisiones.
        <strong>Estamos para garantizar la transparencia del sistema.</strong>
      </p>
      <div class="tm_hero_chips">
        <span class="tm_chip"><i class="fas fa-bolt"></i> Atención Prioritaria</span>
        <span class="tm_chip"><i class="fas fa-shield-halved"></i> Confidencial</span>
        <span class="tm_chip"><i class="fas fa-lock"></i> Exclusivo Colaboradores</span>
      </div>
    </div>
  </section>

  <section class="ac_sec">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-comments"></i> Canales de ayuda</div>
      <h2 class="ac_sec_tit">¿Cómo reportar <span class="ac_grad">una incidencia?</span></h2>
      <p class="ac_sec_sub">Elige la vía más cómoda para comunicarte con administración</p>
    </div>
    <div class="fb_canales">
      ${r.map(a=>`
        <a href="${a.url}" class="fb_canal wi_fadeUp" style="--cc:${a.color}">
          <div class="fb_canal_ico" style="background:${a.bg};color:${a.txt}"><i class="fas ${a.ico}"></i></div>
          <div class="fb_canal_info">
            <strong>${a.tit}</strong>
            <span>${a.desc}</span>
          </div>
          <div class="fb_canal_cta" style="color:${a.color}">${a.cta} <i class="fas fa-arrow-right"></i></div>
        </a>`).join("")}
    </div>
  </section>

  <section class="ac_sec ac_sec_alt">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-layer-group"></i> Categorías</div>
      <h2 class="ac_sec_tit">¿Qué tipo de problema <span class="ac_grad">presentas?</span></h2>
      <p class="ac_sec_sub">Clasifica tu solicitud para darle trámite prioritario</p>
    </div>
    <div class="ac_feat_grid">
      ${n.map(a=>`
        <div class="ac_feat_card wi_fadeUp" style="--sc:${a.color}">
          <div class="ac_feat_ico"><i class="fas ${a.ico}"></i></div>
          <h3>${a.tit}</h3><p>${a.desc}</p>
        </div>`).join("")}
    </div>
  </section>

</div></main>`;let i=null;const v=()=>{i=new IntersectionObserver(a=>a.forEach(s=>{s.isIntersecting&&c(s.target).addClass("visible")}),{threshold:.1}),c(".wi_fadeUp").each(function(){i.observe(this)}),c(document).on("click.feedback",".fb_canal",function(a){const s=c(this).attr("href");s&&s.startsWith("/")&&(a.preventDefault(),e(()=>import("./index-D2CM3kGN.js").then(o=>o.t),[]).then(o=>o.rutas.navigate(s)))}),console.log(`💬 ${t} Feedback cargado`)},f=()=>{i?.disconnect?.(),i=null,c(document).off(".feedback")};export{f as cleanup,v as init,m as render};
