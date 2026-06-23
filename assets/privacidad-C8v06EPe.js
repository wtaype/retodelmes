import{r as e}from"./vendor-CZ6bxb2j.js";import{t}from"./wii-BvK6d7hI.js";import{O as n}from"./widev-D5ebok9f.js";import{i as r}from"./index-DEfOni5N.js";/* empty css               *//* empty css                 */var i=[{ico:`fa-database`,color:`#0EBEFF`,num:`01`,tit:`Información que Recopilamos`,body:`<p>Para el correcto funcionamiento de la plataforma interna de ventas y comisiones, recopilamos únicamente los datos necesarios:</p>
    <ul class="tm_list">
      <li><i class="fas fa-check"></i> <strong>Datos de cuenta corporativa:</strong> Nombre del colaborador, correo electrónico y foto de perfil (mediante Google Auth).</li>
      <li><i class="fas fa-check"></i> <strong>Registros de Tours:</strong> Tipo de tour vendido (Buggies, Sandboarding, Ruta del Pisco, etc.), precio cobrado, comisión pactada, fecha y número del comprobante.</li>
      <li><i class="fas fa-check"></i> <strong>Datos de Actividad:</strong> Auditoría de registros, cambios realizados y marcas de tiempo de las transacciones (para control administrativo).</li>
    </ul>
    <div class="tm_alert">
      <i class="fas fa-shield-halved"></i>
      <p>Este sistema no recopila datos de carácter financiero personal, cuentas bancarias ni contraseñas externas. Las claves son autenticadas directamente por Google de forma segura.</p>
    </div>`},{ico:`fa-gear`,color:`#29C72E`,num:`02`,tit:`Cómo Usamos tu Información`,body:`<p>Los datos registrados se procesan con fines estrictamente laborales y administrativos:</p>
    <ul class="tm_list">
      <li><i class="fas fa-check"></i> Calcular mensualmente el acumulado de tus comisiones ganadas de forma transparente.</li>
      <li><i class="fas fa-check"></i> Generar el ranking de estrellas oficial para la asignación de bonos y premios de fin de mes.</li>
      <li><i class="fas fa-check"></i> Permitir a los supervisores auditar y confirmar la validez de los tickets ingresados.</li>
      <li><i class="fas fa-check"></i> Mantener un registro histórico seguro de las operaciones turísticas.</li>
    </ul>`},{ico:`fa-ban`,color:`#FF5C69`,num:`03`,tit:`Políticas sobre Publicidad y Terceros`,body:`<p>Al ser una aplicación de uso corporativo interno de la empresa de turismo:</p>
    <ul class="tm_list">
      <li><i class="fas fa-check"></i> <strong>No se muestra publicidad externa:</strong> No utilizamos Google AdSense ni redes publicitarias.</li>
      <li><i class="fas fa-check"></i> <strong>No se venden datos:</strong> Ninguna información operativa o personal es comercializada ni expuesta a externos.</li>
      <li><i class="fas fa-check"></i> <strong>Servicios Técnicos:</strong> Google Firebase se usa únicamente como infraestructura en la nube para almacenamiento seguro de base de datos cifrada.</li>
    </ul>`},{ico:`fa-user-lock`,color:`#7000FF`,num:`04`,tit:`Confidencialidad Laboral Estricta`,body:`<p><strong>Toda la información contenida en esta aplicación es considerada Secreto Comercial:</strong></p>
    <ul class="tm_list">
      <li><i class="fas fa-triangle-exclamation" style="color:#FFDA34"></i> Está estrictamente prohibido compartir capturas de pantalla, exportar historiales o revelar datos de ventas e ingresos a personas ajenas a la organización.</li>
      <li><i class="fas fa-triangle-exclamation" style="color:#FFDA34"></i> El acceso a la app es personal e intransferible. El descuido en el resguardo de credenciales será reportado a la gerencia.</li>
      <li><i class="fas fa-triangle-exclamation" style="color:#FFDA34"></i> Cualquier sospecha de fuga de información interna resultará en la suspensión del acceso y auditorías del dispositivo de origen.</li>
    </ul>`},{ico:`fa-shield-halved`,color:`#FFDA34`,num:`05`,tit:`Seguridad y Cifrado de Datos`,body:`<p>Implementamos medidas técnicas para resguardar la base de datos operativa:</p>
    <ul class="tm_list">
      <li><i class="fas fa-check"></i> Conexión encriptada mediante protocolo seguro HTTPS/TLS.</li>
      <li><i class="fas fa-check"></i> Reglas de seguridad estrictas en Firebase que impiden a un colaborador modificar o visualizar datos administrativos de otros sin permisos.</li>
      <li><i class="fas fa-check"></i> Control de auditoría que registra qué usuario creó o actualizó cada documento.</li>
    </ul>`},{ico:`fa-rotate`,color:`#0EBEFF`,num:`06`,tit:`Modificaciones de esta Política`,body:`<p>La administración de la empresa se reserva el derecho de modificar estas políticas para adaptarlas a nuevas normativas internas u operativas.</p>
    <div class="tm_alert">
      <i class="fas fa-calendar-check"></i>
      <p>Última actualización: Mayo de ${n()} · Versión v33. El uso continuado del aplicativo constituye la aceptación de estas normativas laborales de confidencialidad.</p>
    </div>`}],a=()=>`
<main id="wimain">
<div class="ac_wrap tm_wrap">

  <!-- ══ HERO ══ -->
  <section class="ac_hero tm_hero">
    <div class="ac_hero_orb ac_orb1"></div>
    <div class="ac_hero_orb ac_orb2"></div>
    <div class="ac_hero_orb ac_orb3"></div>
    <div class="ac_hero_body">
      <div class="ac_hero_badge"><i class="fas fa-lock"></i> Información de Uso Interno</div>
      <h1 class="ac_hero_tit">Política de<br><span class="ac_grad">Privacidad</span></h1>
      <p class="ac_hero_sub">
        Esta política regula el tratamiento de tus datos laborales y las directrices de 
        <strong>confidencialidad de información sensible corporativa.</strong>
      </p>
      <div class="tm_hero_chips">
        <span class="tm_chip"><i class="fas fa-ban"></i> Sin rastreadores</span>
        <span class="tm_chip"><i class="fas fa-eye-slash"></i> Datos Protegidos</span>
        <span class="tm_chip"><i class="fas fa-shield-halved"></i> Secreto Comercial</span>
      </div>
      <div class="tm_last_upd">
        <i class="fas fa-calendar-check"></i>
        Última actualización: Mayo ${n()} · Versión v33
      </div>
    </div>
  </section>

  <!-- ══ ÍNDICE RÁPIDO ══ -->
  <div class="tm_index_band">
    ${i.map((e,t)=>`
      <a href="#tm_sec_${t}" class="tm_index_item">
        <i class="fas ${e.ico}" style="color:${e.color}"></i>
        <span>${e.tit}</span>
      </a>`).join(``)}
  </div>

  <!-- ══ SECCIONES ══ -->
  <section class="ac_sec tm_secciones">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-shield-halved"></i> Protección</div>
      <h2 class="ac_sec_tit">Directrices de <span class="ac_grad">Seguridad</span></h2>
      <p class="ac_sec_sub">Toda la base de datos de comisiones y tours vendidos es privada y de carácter reservado.</p>
    </div>
    <div class="tm_secs_grid">
      ${i.map((e,t)=>`
        <div class="tm_sec_card wi_fadeUp" id="tm_sec_${t}">
          <div class="tm_sec_header">
            <div class="tm_sec_ico" style="--tc:${e.color}"><i class="fas ${e.ico}"></i></div>
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
`,o=null,s=()=>{o=new IntersectionObserver(t=>t.forEach(t=>{t.isIntersecting&&e(t.target).addClass(`visible`)}),{threshold:.1}),e(`.wi_fadeUp`).each(function(){o.observe(this)}),e(document).on(`click.privacidad`,`.tm_nav`,function(t){t.preventDefault(),r(()=>import(`./index-DEfOni5N.js`).then(e=>e.r).then(t=>t.rutas.navigate(e(this).attr(`href`))),[])}),e(document).on(`click.privacidad`,`.tm_index_item`,function(t){t.preventDefault();let n=document.querySelector(e(this).attr(`href`));n&&window.scrollTo({top:n.getBoundingClientRect().top+scrollY-90,behavior:`smooth`})}),console.log(`🔒 ${t} Privacidad cargada`),window.__WIREADY__=!0},c=()=>{o?.disconnect?.(),o=null,e(document).off(`.privacidad`)};export{c as cleanup,s as init,a as render};