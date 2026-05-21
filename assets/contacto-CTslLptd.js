import{b as i,E as p,d as u,I as g,H as f,D as y,_ as w}from"./index-D2CM3kGN.js";/* empty css               */import{$ as e}from"./vendor-2D3jvCpt.js";const r={pub:void 0,sid:void 0,tid:void 0};y({js:[()=>w(()=>import("https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"),[])]});const q=[{ico:"fa-envelope",color:"#0EBEFF",label:"Email Soporte",value:"soporte.interno@retodelmes.com",copiable:!0},{ico:"fa-map-marker-alt",color:"#FF5C69",label:"Oficina Principal",value:"Huacachina, Ica, Perú",copiable:!1},{ico:"fa-clock",color:"#29C72E",label:"Atención",value:"Lun-Sáb 9am - 6pm",copiable:!1}],E=["Duda con puntos de ranking","Error en cálculo de comisiones","Venta no cargada o sin validar","Problema con cuenta o credenciales","Sugerencia técnica de la app","Reportar error de sistema","Otro motivo interno"],C=[{q:"¿Quién evalúa las solicitudes de cuenta?",r:"El equipo administrativo y de recursos humanos evalúa y aprueba cada registro de usuario tras validar su contrato laboral activo."},{q:"¿Cuánto tardan en aprobarse mis ventas registradas?",r:"La validación de comprobantes se realiza diariamente. Generalmente tus puntos y comisiones se confirman en un plazo máximo de 12 a 24 horas."},{q:"¿Es obligatorio registrar los tours en tiempo real?",r:"Sí, se recomienda ingresar cada tour inmediatamente después de finalizado el servicio para agilizar la conciliación de cuotas de carros areneros y de comisiones."},{q:"¿Qué hago si registré un dato erróneo?",r:'Envía un mensaje mediante este formulario seleccionando el asunto "Venta no cargada o sin validar" detallando el número de ticket y la corrección requerida.'}],o=500,v="wi_ct_last",S=60*1e3,$=()=>{const a=parseInt(localStorage.getItem(v)||"0",10);return Date.now()-a>S},I=()=>localStorage.setItem(v,String(Date.now()));let c=[];const A=()=>`
<main id="wimain">
<div class="ac_wrap ct_wrap">

  <!-- ══ HERO ══ -->
  <section class="ac_hero ct_hero">
    <div class="ac_hero_orb ac_orb1"></div>
    <div class="ac_hero_orb ac_orb2"></div>
    <div class="ac_hero_orb ac_orb3"></div>
    <div class="ac_hero_body">
      <div class="ac_hero_badge"><i class="fas fa-lock"></i> Canal de Soporte Corporativo</div>
      <h1 class="ac_hero_tit">Contacto e<br><span class="ac_grad">Incidencias 🛠️</span></h1>
      <p class="ac_hero_sub">
        ¿Tienes problemas con tus comisiones, validación de tours o acceso a tu cuenta?
        <strong>La administración está aquí para asistirte.</strong>
      </p>
      <div class="tm_hero_chips">
        <span class="tm_chip"><i class="fas fa-clock"></i> Respuesta: Lun-Sáb</span>
        <span class="tm_chip"><i class="fas fa-lock"></i> Canal Confidencial</span>
        <span class="tm_chip"><i class="fas fa-shield-halved"></i> Solo personal autorizado</span>
      </div>
    </div>
  </section>

  <!-- ══ GRID: FORM + INFO ══ -->
  <section class="ac_sec ct_sec">
    <div class="ct_grid">

      <!-- Formulario -->
      <div class="ct_form_wrap">
        <div class="ac_sec_head" style="text-align:left;margin-bottom:4vh">
          <div class="ac_sec_badge"><i class="fas fa-comment-dots"></i> Formulario de Incidencias</div>
          <h2 class="ac_sec_tit">Reportar <span class="ac_grad">un problema</span></h2>
        </div>
        <form id="ctForm" class="ct_form" novalidate autocomplete="off">
          <!-- Honeypot anti-bot (invisible) -->
          <input type="text" name="ct_honey" id="ct_honey" tabindex="-1" aria-hidden="true" style="position:absolute;left:-9999px;opacity:0">

          <div class="ct_field">
            <label for="ct_nombre"><i class="fas fa-user"></i> Nombre del Colaborador</label>
            <input type="text" id="ct_nombre" name="from_name" placeholder="Tu nombre completo" required maxlength="80">
          </div>
          <div class="ct_field">
            <label for="ct_email"><i class="fas fa-envelope"></i> Email Corporativo/Personal</label>
            <input type="email" id="ct_email" name="email" placeholder="tu@empresa.com" required maxlength="120">
          </div>
          <div class="ct_field">
            <label for="ct_telefono"><i class="fas fa-phone"></i> Celular</label>
            <input type="tel" id="ct_telefono" name="telefono" placeholder="Tu número de contacto" maxlength="20">
          </div>
          <div class="ct_field">
            <label for="ct_asunto"><i class="fas fa-tag"></i> Asunto o Incidencia</label>
            <select id="ct_asunto" name="asunto" required>
              <option value="">Selecciona un motivo</option>
              ${E.map(a=>`<option value="${a}">${a}</option>`).join("")}
            </select>
          </div>
          <div class="ct_field">
            <label for="ct_mensaje"><i class="fas fa-comment-dots"></i> Detalles de la Incidencia</label>
            <textarea id="ct_mensaje" name="message" rows="6" placeholder="Describe los detalles (Nº ticket de tour, fecha, tour específico, etc.)" required maxlength="${o}"></textarea>
            <div class="ct_chars"><span id="ct_count">0</span> / ${o}</div>
          </div>

          <div class="ct_actions">
            <button type="submit" class="ac_btn_p ct_btn_submit" id="ct_submit">
              <i class="fas fa-paper-plane"></i> <span>Enviar Reporte</span>
            </button>
            <button type="reset" class="ac_btn_s">
              <i class="fas fa-redo"></i> <span>Limpiar</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Info -->
      <div class="ct_info_wrap">
        <div class="ct_info_card wi_fadeUp">
          <h3><i class="fas fa-address-card"></i> Información de Contacto</h3>
          <div class="ct_info_items">
            ${q.map(a=>`
              <div class="ct_info_item">
                <div class="ct_info_ico" style="background:color-mix(in srgb,${a.color} 15%,transparent);color:${a.color}">
                  <i class="fas ${a.ico}"></i>
                </div>
                <div class="ct_info_data">
                  <span class="ct_info_label">${a.label}</span>
                  <span class="ct_info_value">${a.value}</span>
                </div>
                ${a.copiable?`<button class="ct_copy" data-copy="${a.value}" title="Copiar"><i class="fas fa-copy"></i></button>`:""}
              </div>`).join("")}
          </div>
        </div>

        <div class="ct_info_card wi_fadeUp" style="margin-top:3vh">
          <h3><i class="fas fa-shield-halved"></i> Confidencialidad de la Información</h3>
          <div style="font-size:0.8rem; color:var(--tx-muted); line-height:1.6; padding:12px;">
            Este formulario de soporte e información enviada se procesa internamente mediante servidores seguros. 
            Toda la información referente a transacciones, números de ticket y comisiones de ventas es confidencial 
            y no se comparte con terceros.
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ══ FAQ ══ -->
  <section class="ac_sec ac_sec_alt">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-circle-question"></i> Dudas de Guías</div>
      <h2 class="ac_sec_tit">Preguntas <span class="ac_grad">Frecuentes</span></h2>
    </div>
    <div class="ct_faq">
      ${C.map((a,s)=>`
        <div class="ct_faq_item wi_fadeUp" id="faq_${s}">
          <div class="ct_faq_q">
            <i class="fas fa-circle-question"></i>
            <h3>${a.q}</h3>
            <i class="fas fa-chevron-down ct_faq_arr"></i>
          </div>
          <div class="ct_faq_a"><p>${a.r}</p></div>
        </div>`).join("")}
    </div>
  </section>

</div></main>`,k=()=>{e(document).on("input.contacto","#ct_mensaje",function(){const a=e(this).val();a.length>o&&e(this).val(a.slice(0,o)),e("#ct_count").text(Math.min(a.length,o))}),e(document).on("reset.contacto","#ctForm",()=>{setTimeout(()=>e("#ct_count").text("0"),10)}),e(document).on("submit.contacto","#ctForm",async function(a){if(a.preventDefault(),e("#ct_honey").val())return;if(!$()){i("Espera un momento antes de enviar otro mensaje.","warning");return}const s=e("#ct_nombre").val().trim(),l=e("#ct_email").val().trim(),b=e("#ct_telefono").val().trim()||"No especificado",d=e("#ct_asunto").val(),m=e("#ct_mensaje").val().trim();if(s.length<3)return i("El nombre debe tener al menos 3 caracteres.","error");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l))return i("Ingresa un email válido.","error");if(!d)return i("Selecciona una incidencia.","error");if(m.length<10)return i("El mensaje debe tener al menos 10 caracteres.","error");const _=e("#ct_submit");p(_,!0,"Enviando…");try{typeof window.emailjs>"u"&&await new Promise((n,h)=>{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",t.onload=n,t.onerror=()=>h(new Error("No se pudo cargar EmailJS")),document.head.appendChild(t)}),window.emailjs.init(r.pub),await window.emailjs.send(r.sid,r.tid,{nombre:s,email:l,telefono:b,asunto:d,mensaje:m,app_name:u}),I(),i("¡Incidencia enviada al Administrador! Se procesará a la brevedad. 🛠️","success",4500),this.reset(),e("#ct_count").text("0")}catch(n){console.error("[contacto] EmailJS error:",n),i("No se pudo enviar el mensaje. Intenta de nuevo.","error")}finally{p(_,!1,"Enviar Reporte")}}),e(document).on("click.contacto",".ct_copy",function(){g(e(this).data("copy"),this,"¡Copiado!")}),e(document).on("click.contacto",".ct_faq_q",function(){const a=e(this).closest(".ct_faq_item"),s=a.hasClass("active");e(".ct_faq_item").removeClass("active").find(".ct_faq_a").slideUp(280),e(".ct_faq_arr").removeClass("rotated"),s||(a.addClass("active").find(".ct_faq_a").slideDown(280),a.find(".ct_faq_arr").addClass("rotated"))}),c.push(f(".wi_fadeUp",a=>e(a).addClass("visible"))),c.push(f(".ct_faq_item",(a,s)=>setTimeout(()=>e(a).addClass("visible"),s*80))),console.log(`📩 ${u} Soporte Contacto cargado`),window.__WIREADY__=!0},D=()=>{e(document).off(".contacto"),c.forEach(a=>a?.disconnect?.()),c=[]};export{D as cleanup,k as init,A as render};
