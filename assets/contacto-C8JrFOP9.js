import{r as e}from"./vendor-CZ6bxb2j.js";import{t}from"./wii-BvK6d7hI.js";import{C as n,D as r,E as i,S as a,i as o}from"./widev-BkR2Na_W.js";import{a as s}from"./index-CA-XJpFF.js";/* empty css               */var c={pub:void 0,sid:void 0,tid:void 0};a({js:[()=>s(()=>import(`https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`),[])]});var l=[{ico:`fa-envelope`,color:`#0EBEFF`,label:`Email Soporte`,value:`soporte.interno@retodelmes.com`,copiable:!0},{ico:`fa-map-marker-alt`,color:`#FF5C69`,label:`Oficina Principal`,value:`Huacachina, Ica, Perú`,copiable:!1},{ico:`fa-clock`,color:`#29C72E`,label:`Atención`,value:`Lun-Sáb 9am - 6pm`,copiable:!1}],u=[`Duda con puntos de ranking`,`Error en cálculo de comisiones`,`Venta no cargada o sin validar`,`Problema con cuenta o credenciales`,`Sugerencia técnica de la app`,`Reportar error de sistema`,`Otro motivo interno`],d=[{q:`¿Quién evalúa las solicitudes de cuenta?`,r:`El equipo administrativo y de recursos humanos evalúa y aprueba cada registro de usuario tras validar su contrato laboral activo.`},{q:`¿Cuánto tardan en aprobarse mis ventas registradas?`,r:`La validación de comprobantes se realiza diariamente. Generalmente tus puntos y comisiones se confirman en un plazo máximo de 12 a 24 horas.`},{q:`¿Es obligatorio registrar los tours en tiempo real?`,r:`Sí, se recomienda ingresar cada tour inmediatamente después de finalizado el servicio para agilizar la conciliación de cuotas de carros areneros y de comisiones.`},{q:`¿Qué hago si registré un dato erróneo?`,r:`Envía un mensaje mediante este formulario seleccionando el asunto "Venta no cargada o sin validar" detallando el número de ticket y la corrección requerida.`}],f=500,p=`wi_ct_last`,m=60*1e3,h=()=>{let e=parseInt(localStorage.getItem(p)||`0`,10);return Date.now()-e>m},g=()=>localStorage.setItem(p,String(Date.now())),_=[],v=()=>`
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
              ${u.map(e=>`<option value="${e}">${e}</option>`).join(``)}
            </select>
          </div>
          <div class="ct_field">
            <label for="ct_mensaje"><i class="fas fa-comment-dots"></i> Detalles de la Incidencia</label>
            <textarea id="ct_mensaje" name="message" rows="6" placeholder="Describe los detalles (Nº ticket de tour, fecha, tour específico, etc.)" required maxlength="${f}"></textarea>
            <div class="ct_chars"><span id="ct_count">0</span> / ${f}</div>
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
            ${l.map(e=>`
              <div class="ct_info_item">
                <div class="ct_info_ico" style="background:color-mix(in srgb,${e.color} 15%,transparent);color:${e.color}">
                  <i class="fas ${e.ico}"></i>
                </div>
                <div class="ct_info_data">
                  <span class="ct_info_label">${e.label}</span>
                  <span class="ct_info_value">${e.value}</span>
                </div>
                ${e.copiable?`<button class="ct_copy" data-copy="${e.value}" title="Copiar"><i class="fas fa-copy"></i></button>`:``}
              </div>`).join(``)}
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
      ${d.map((e,t)=>`
        <div class="ct_faq_item wi_fadeUp" id="faq_${t}">
          <div class="ct_faq_q">
            <i class="fas fa-circle-question"></i>
            <h3>${e.q}</h3>
            <i class="fas fa-chevron-down ct_faq_arr"></i>
          </div>
          <div class="ct_faq_a"><p>${e.r}</p></div>
        </div>`).join(``)}
    </div>
  </section>

</div></main>`,y=()=>{e(document).on(`input.contacto`,`#ct_mensaje`,function(){let t=e(this).val();t.length>f&&e(this).val(t.slice(0,f)),e(`#ct_count`).text(Math.min(t.length,f))}),e(document).on(`reset.contacto`,`#ctForm`,()=>{setTimeout(()=>e(`#ct_count`).text(`0`),10)}),e(document).on(`submit.contacto`,`#ctForm`,async function(r){if(r.preventDefault(),e(`#ct_honey`).val())return;if(!h()){o(`Espera un momento antes de enviar otro mensaje.`,`warning`);return}let i=e(`#ct_nombre`).val().trim(),a=e(`#ct_email`).val().trim(),s=e(`#ct_telefono`).val().trim()||`No especificado`,l=e(`#ct_asunto`).val(),u=e(`#ct_mensaje`).val().trim();if(i.length<3)return o(`El nombre debe tener al menos 3 caracteres.`,`error`);if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a))return o(`Ingresa un email válido.`,`error`);if(!l)return o(`Selecciona una incidencia.`,`error`);if(u.length<10)return o(`El mensaje debe tener al menos 10 caracteres.`,`error`);let d=e(`#ct_submit`);n(d,!0,`Enviando…`);try{window.emailjs===void 0&&await new Promise((e,t)=>{let n=document.createElement(`script`);n.src=`https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`,n.onload=e,n.onerror=()=>t(Error(`No se pudo cargar EmailJS`)),document.head.appendChild(n)}),window.emailjs.init(c.pub),await window.emailjs.send(c.sid,c.tid,{nombre:i,email:a,telefono:s,asunto:l,mensaje:u,app_name:t}),g(),o(`¡Incidencia enviada al Administrador! Se procesará a la brevedad. 🛠️`,`success`,4500),this.reset(),e(`#ct_count`).text(`0`)}catch(e){console.error(`[contacto] EmailJS error:`,e),o(`No se pudo enviar el mensaje. Intenta de nuevo.`,`error`)}finally{n(d,!1,`Enviar Reporte`)}}),e(document).on(`click.contacto`,`.ct_copy`,function(){r(e(this).data(`copy`),this,`¡Copiado!`)}),e(document).on(`click.contacto`,`.ct_faq_q`,function(){let t=e(this).closest(`.ct_faq_item`),n=t.hasClass(`active`);e(`.ct_faq_item`).removeClass(`active`).find(`.ct_faq_a`).slideUp(280),e(`.ct_faq_arr`).removeClass(`rotated`),n||(t.addClass(`active`).find(`.ct_faq_a`).slideDown(280),t.find(`.ct_faq_arr`).addClass(`rotated`))}),_.push(i(`.wi_fadeUp`,t=>e(t).addClass(`visible`))),_.push(i(`.ct_faq_item`,(t,n)=>setTimeout(()=>e(t).addClass(`visible`),n*80))),console.log(`📩 ${t} Soporte Contacto cargado`),window.__WIREADY__=!0},b=()=>{e(document).off(`.contacto`),_.forEach(e=>e?.disconnect?.()),_=[]};export{b as cleanup,y as init,v as render};