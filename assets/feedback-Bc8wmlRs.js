import{r as e}from"./vendor-CZ6bxb2j.js";import{t}from"./wii-BvK6d7hI.js";import{o as n}from"./index-Bq5gtrcG.js";/* empty css               *//* empty css                 */var r=[{ico:`fa-envelope`,color:`#0EBEFF`,bg:`var(--wb)`,txt:`var(--tx)`,tit:`Correo Administrativo`,desc:`Escríbenos directamente para consultas sobre nóminas, comisiones o contratos.`,url:`mailto:soporte.interno@retodelmes.com`,cta:`Enviar correo`},{ico:`fa-comment-dots`,color:`#29C72E`,bg:`var(--wb)`,txt:`var(--tx)`,tit:`Formulario de Soporte`,desc:`Reporta errores de sistema, tickets no validados o solicita soporte técnico inmediato.`,url:`/acerca/contacto`,cta:`Abrir Formulario`}],i=[{ico:`fa-bug`,color:`#FF5C69`,tit:`Problema con Comisión`,desc:`El monto calculado de tus soles o acumulados tiene discrepancias.`},{ico:`fa-star`,color:`#FFDA34`,tit:`Error de Puntos o Venta`,desc:`El tour registrado no aparece en el ranking o no sumó puntos.`},{ico:`fa-user-lock`,color:`#0EBEFF`,tit:`Acceso y Credenciales`,desc:`Dificultades para iniciar sesión o problemas con tu contraseña.`},{ico:`fa-lightbulb`,color:`#29C72E`,tit:`Sugerencia de la App`,desc:`Propuestas para optimizar el registro de tours en las dunas de Ica.`}],a=()=>`
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
      ${r.map(e=>`
        <a href="${e.url}" class="fb_canal wi_fadeUp" style="--cc:${e.color}">
          <div class="fb_canal_ico" style="background:${e.bg};color:${e.txt}"><i class="fas ${e.ico}"></i></div>
          <div class="fb_canal_info">
            <strong>${e.tit}</strong>
            <span>${e.desc}</span>
          </div>
          <div class="fb_canal_cta" style="color:${e.color}">${e.cta} <i class="fas fa-arrow-right"></i></div>
        </a>`).join(``)}
    </div>
  </section>

  <section class="ac_sec ac_sec_alt">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-layer-group"></i> Categorías</div>
      <h2 class="ac_sec_tit">¿Qué tipo de problema <span class="ac_grad">presentas?</span></h2>
      <p class="ac_sec_sub">Clasifica tu solicitud para darle trámite prioritario</p>
    </div>
    <div class="ac_feat_grid">
      ${i.map(e=>`
        <div class="ac_feat_card wi_fadeUp" style="--sc:${e.color}">
          <div class="ac_feat_ico"><i class="fas ${e.ico}"></i></div>
          <h3>${e.tit}</h3><p>${e.desc}</p>
        </div>`).join(``)}
    </div>
  </section>

</div></main>`,o=null,s=()=>{o=new IntersectionObserver(t=>t.forEach(t=>{t.isIntersecting&&e(t.target).addClass(`visible`)}),{threshold:.1}),e(`.wi_fadeUp`).each(function(){o.observe(this)}),e(document).on(`click.feedback`,`.fb_canal`,function(t){let r=e(this).attr(`href`);r&&r.startsWith(`/`)&&(t.preventDefault(),n(()=>import(`./index-Bq5gtrcG.js`).then(e=>e.a).then(e=>e.rutas.navigate(r)),[]))}),console.log(`💬 ${t} Feedback cargado`)},c=()=>{o?.disconnect?.(),o=null,e(document).off(`.feedback`)};export{c as cleanup,s as init,a as render};