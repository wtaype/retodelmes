import{r as e}from"./vendor-CZ6bxb2j.js";import{t}from"./wii-BvK6d7hI.js";import{O as n}from"./widev-D5ebok9f.js";/* empty css               *//* empty css                 */var r=[{ico:`fa-user-shield`,color:`#0EBEFF`,num:`01`,tit:`Uso de la Plataforma`,body:`<p>Este aplicativo es una herramienta digital de uso exclusivo para el personal de guías y agentes comerciales autorizados. Al acceder a la plataforma, te comprometes a:</p>
    <ul class="tm_list">
      <li><i class="fas fa-check"></i> Registrar únicamente los tours reales y servicios turísticos concretados.</li>
      <li><i class="fas fa-check"></i> Mantener bajo estricta confidencialidad tus credenciales de acceso.</li>
      <li><i class="fas fa-check"></i> Utilizar la app con fines estrictamente laborales y no comerciales ajenos a la empresa.</li>
      <li><i class="fas fa-check"></i> No realizar ingeniería inversa, raspado de datos (scraping) o ataques informáticos contra el servidor.</li>
    </ul>`},{ico:`fa-clipboard-check`,color:`#29C72E`,num:`02`,tit:`Autenticidad y Auditoría de Ventas`,body:`<p>La transparencia es el pilar de Reto del Mes. Cada registro de tour ingresado es auditado:</p>
    <ul class="tm_list">
      <li><i class="fas fa-check"></i> Debes ingresar el código de ticket o voucher correcto de la venta.</li>
      <li><i class="fas fa-check"></i> La administración verificará cada voucher antes de validar los puntos del ranking y tus comisiones.</li>
      <li><i class="fas fa-triangle-exclamation" style="color:#FFDA34"></i> <strong>Prohibición de fraude:</strong> El registro deliberado de tours falsos, duplicados o inexistentes constituye una falta laboral grave que será remitida al departamento de recursos humanos para las sanciones y medidas disciplinarias respectivas.</li>
    </ul>`},{ico:`fa-eye-slash`,color:`#FF5C69`,num:`03`,tit:`Confidencialidad de los Datos`,body:`<p>Toda la información operativa, montos de venta, porcentajes de comisión, cantidad de tours diarios y posiciones en el ranking es estrictamente privada:</p>
    <ul class="tm_list">
      <li><i class="fas fa-check"></i> Queda prohibida la divulgación de cualquier dato interno a agencias de turismo competidoras o terceros externos.</li>
      <li><i class="fas fa-check"></i> Se prohíbe capturar pantalla o exportar información de los paneles con intenciones de difusión externa.</li>
      <li><i class="fas fa-check"></i> El incumplimiento de esta directiva vulnera el acuerdo de confidencialidad de la empresa y dará lugar a acciones legales.</li>
    </ul>`},{ico:`fa-copyright`,color:`#7000FF`,num:`04`,tit:`Propiedad Intelectual`,body:`<p>Reto del Mes es una aplicación de propiedad corporativa. Todos los derechos reservados ${n()}.</p>
    <ul class="tm_list">
      <li><i class="fas fa-check"></i> El código fuente, diseño, logotipos, marcas comerciales e iconos son propiedad exclusiva de la empresa o sus licenciantes.</li>
      <li><i class="fas fa-check"></i> No se concede ningún derecho de copia, reproducción o explotación del software fuera de las tareas asignadas a tu puesto de trabajo.</li>
    </ul>`},{ico:`fa-cloud-bolt`,color:`#FFDA34`,num:`05`,tit:`Sincronización y Caché de Datos`,body:`<p>Para optimizar el uso en zonas con poca señal en las dunas de Ica:</p>
    <ul class="tm_list">
      <li><i class="fas fa-check"></i> Los tours se guardan primero en la memoria local (LocalStorage) de tu dispositivo móvil.</li>
      <li><i class="fas fa-check"></i> Debes asegurarte de tener cobertura a Internet en algún momento de tu jornada para que el sistema sincronice tus datos en la base de datos central de Firebase.</li>
      <li><i class="fas fa-check"></i> La administración no se hace responsable por pérdida de comisiones si limpias la caché del navegador antes de sincronizar tus ventas guardadas de forma offline.</li>
    </ul>`},{ico:`fa-gavel`,color:`#0EBEFF`,num:`06`,tit:`Legislación y Jurisdicción`,body:`<p>Estos Términos y Condiciones se rigen bajo los reglamentos internos de la empresa y la legislación laboral vigente en la República del Perú.</p>
    <p>Cualquier controversia relacionada con el uso de este aplicativo será sometida a revisión del comité interno de administración y, de ser necesario, a los fueros legales de Ica, Perú.</p>`}],i=()=>`
<main id="wimain">
<div class="ac_wrap tm_wrap">

  <!-- ══ HERO ══ -->
  <section class="ac_hero tm_hero">
    <div class="ac_hero_orb ac_orb1"></div>
    <div class="ac_hero_orb ac_orb2"></div>
    <div class="ac_hero_orb ac_orb3"></div>
    <div class="ac_hero_body">
      <div class="ac_hero_badge"><i class="fas fa-file-contract"></i> Reglamento de Uso</div>
      <h1 class="ac_hero_tit">Términos y<br><span class="ac_grad">Condiciones</span></h1>
      <p class="ac_hero_sub">
        Normas de conducta, integridad de registros y directrices obligatorias para el uso 
        del aplicativo interno de <strong>ventas y comisiones turísticas.</strong>
      </p>
      <div class="tm_hero_chips">
        <span class="tm_chip"><i class="fas fa-user-check"></i> Uso Honesto</span>
        <span class="tm_chip"><i class="fas fa-shield-halved"></i> Datos Encriptados</span>
        <span class="tm_chip"><i class="fas fa-gavel"></i> Cumplimiento Laboral</span>
      </div>
      <div class="tm_last_upd">
        <i class="fas fa-calendar-check"></i>
        Última actualización: Mayo ${n()} · Versión v33
      </div>
    </div>
  </section>

  <!-- ══ ÍNDICE RÁPIDO ══ -->
  <div class="tm_index_band">
    ${r.map((e,t)=>`
      <a href="#tm_sec_${t}" class="tm_index_item">
        <i class="fas ${e.ico}" style="color:${e.color}"></i>
        <span>${e.tit}</span>
      </a>`).join(``)}
  </div>

  <!-- ══ SECCIONES ══ -->
  <section class="ac_sec tm_secciones">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-list-check"></i> Contrato de Uso</div>
      <h2 class="ac_sec_tit">Reglamento <span class="ac_grad">de Operaciones</span></h2>
      <p class="ac_sec_sub">Lee con atención. El uso del aplicativo requiere el cumplimiento de estas normas.</p>
    </div>
    <div class="tm_secs_grid">
      ${r.map((e,t)=>`
        <div class="tm_sec_card wi_fadeUp" id="tm_sec_${t}">
          <div class="tm_sec_header">
            <div class="tm_sec_ico" style="--tc:${e.color}">
              <i class="fas ${e.ico}"></i>
            </div>
            <div>
              <span class="tm_sec_num" style="color:${e.color}">${e.num}</span>
              <h2 class="tm_sec_tit">${e.tit}</h2>
            </div>
          </div>
          <div class="tm_sec_body">${e.body}</div>
        </div>`).join(``)}
    </div>
  </section>

</div></main>
`,a=null,o=()=>{let n=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&e(t.target).addClass(`visible`)})},{threshold:.1});a=n,e(`.wi_fadeUp`).each(function(){n.observe(this)}),e(document).on(`click.terminos`,`.tm_nav`,function(t){t.preventDefault();let{rutas:n}=window._wiRutas??{};n?.navigate?.(e(this).attr(`href`))}),e(document).on(`click.terminos`,`.tm_index_item`,function(t){t.preventDefault();let n=document.querySelector(e(this).attr(`href`));n&&window.scrollTo({top:n.getBoundingClientRect().top+scrollY-90,behavior:`smooth`})}),window.wiInitTips&&window.wiInitTips(),console.log(`📜 ${t} Términos cargados`),window.__WIREADY__=!0},s=()=>{a?.disconnect?.(),a=null,e(document).off(`.terminos`)};export{s as cleanup,o as init,i as render};