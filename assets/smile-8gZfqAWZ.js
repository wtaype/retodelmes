import{t as S,b as C,c as E,a as y,l as M,$ as e,g as ga,d as G,j as ta,v as ea,i as oa,x as sa,N as f,q as ia,e as na,y as ha,C as K,z as ba,A as X,M as ra,B as R,D as ya,E as $a,F as Q,h as la}from"./widev-jgIUWVlk.js";function wa(){return`<div class="competition-summary" id="competitionSummary">
    ${["Tours de Hoy:toursHoy","Total Tours:totalTours","Puntos Totales:totalPuntos","Meta del Mes:2500"].map(a=>{const[t,o]=a.split(":");return`<div class="summary-stat"><span class="summary-label">${t}</span><span class="summary-value" id="${o}">${o==="2500"?"2500":"0"}</span></div>`}).join("")}
  </div>`}function A(){const a=`empleadosPuntos_${T}`,t=S(a);t?.length>0&&m.length===0&&m.push(...t);const o=m.map((s,l)=>{const c=l+1,r=c===1?"champion":c===2?"runner-up":"",u=c===1?"crown":c===2?"medal":"user";return`
      <div class="worker-card ${r}" data-employee="${s.usuario}">
        <div class="rank-badge"><i class="fas fa-${u}"></i>#${c}</div>
        <div class="worker-avatar">
          <img src="${s.imagen||"/smile.png"}" alt="${s.nombre}">
          <div class="status-online"></div>
        </div>
        <div class="worker-info">
          <h3>${s.nombre}</h3>
          <p>${s.descripcion}</p>
        </div>
        <div class="worker-points">
          <span class="points-number">${s.totalPuntos||0}</span>
          <span class="points-label">puntos</span>
        </div>
        <div class="worker-stats">
          <div class="stat">
            <span class="stat-value">${s.totalVentas||0}</span>
            <span class="stat-label">Tours Vendidos</span>
          </div>
        </div>
      </div>
    `}).join("");e("#workersGrid").html(o)}async function N(){try{const a=`empleadosPuntos_${T}`,t=S(a);if(t?.length>0){console.log(`✅ ${t.length} empleados desde cache`),m.splice(0,m.length,...t);return}if(!m.length)return console.warn("⚠️ Sin empleados");console.log("🔄 Calculando puntos...");const o=await C(E(y,"registrosdb")),[s,l]=T.split("-").map(Number),c=o.docs.filter(r=>{const u=r.data().fechaTour;if(!u)return!1;if(u.toDate){const p=u.toDate();return p.getFullYear()===s&&p.getMonth()+1===l}if(typeof u=="string"){const[p,g]=u.split("-").map(Number);return p===s&&g===l}return!1});m.forEach(r=>{const u=c.filter(p=>p.data().vendedor===r.usuario);r.totalPuntos=u.reduce((p,g)=>p+(g.data().puntos||0),0),r.totalVentas=u.reduce((p,g)=>p+(g.data().qventa||0),0)}),m.sort((r,u)=>u.totalPuntos-r.totalPuntos),M(a,m,30),console.log(`✅ ${m.length} empleados guardados en cache`)}catch(a){console.error("❌ Error:",a)}}async function ca(){try{console.log("🔄 Cargando notas...");const a=S("notasSmile");if(a?.length>0){console.log(`✅ ${a.length} notas desde cache`),z(a);return}const t=await C(E(y,"notas"));if(t.empty){console.log("📭 No hay notas"),z([]);return}const o=t.docs.map(s=>({id:s.id,...s.data()}));M("notasSmile",o,600),console.log(`✅ ${o.length} notas cargadas`),z(o)}catch(a){console.error("❌ Error notas:",a),z([])}}function z(a){const t=a.length>0?`
    ${a.map(o=>`<li>${o.nota}</li>`).join("")}
    <div style="font-size:var(--fz_s2);padding:.5vh 0">
      <i class="fas fa-sync"></i> Actualizado: ${new Date().toLocaleString("es-ES")}
    </div>
  `:`<div style="color:#666;text-align:center;padding:20px;font-style:italic">
    <i class="fas fa-info-circle"></i> No hay noticias
  </div>`;e(".descripcion_com").html(t)}function H(){const[a,t]=T.split("-").map(Number),o=new Date,s=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`,l=$.filter(i=>{const n=i.fechaTour;if(!n)return!1;if(n.toDate){const d=n.toDate();return d.getFullYear()===a&&d.getMonth()+1===t}if(typeof n=="string"){const[d,w]=n.split("-").map(Number);return d===a&&w===t}return!1}),c=l.filter(i=>{const n=i.fechaTour;if(!n)return!1;if(typeof n=="string")return n===s;if(n.toDate){const d=n.toDate();return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`===s}return!1}),r=l.reduce((i,n)=>i+(n.qventa||0),0),u=l.reduce((i,n)=>i+(n.puntos||0),0),p=c.reduce((i,n)=>i+(n.qventa||0),0);e("#totalTours").text(r),e("#totalPuntos").text(u),e("#toursHoy").text(p);const h=[Math.min(p/5*100,100),Math.min(r/50*100,100),Math.min(u/2500*100,100),100];e(".summary-stat").each((i,n)=>{const d=h[i]/100*360;e(n).css({"--progress":`${d}deg`,"--width":`${h[i]}%`})})}async function da(){try{const a=Sa(T),t=a.replace("-",""),o=await ga(G(y,"ganadores",t));if(o.exists())return Z(o.data());const s=await C(E(y,"registrosdb")),l={},[c,r]=a.split("-").map(Number);s.docs.forEach(i=>{const n=i.data(),d=n.fechaTour;if(!d)return;let w=!1;if(typeof d=="string"){const[V,L]=d.split("-").map(Number);w=V===c&&L===r}else if(d.toDate){const V=d.toDate();w=V.getFullYear()===c&&V.getMonth()+1===r}w&&(l[n.vendedor]||(l[n.vendedor]={puntos:0,ventas:0}),l[n.vendedor].puntos+=n.puntos||0,l[n.vendedor].ventas+=n.qventa||0)});const u=Object.entries(l);if(!u.length){e("#lastWinner").html(`
        <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
        <div class="no-winner"><i class="fas fa-question-circle"></i><span>No hay datos</span></div>
      `);return}u.sort((i,n)=>n[1].puntos-i[1].puntos);const[p,g]=u[0],h={ganador:p,puntosGanados:g.puntos,totalVentas:g.ventas,mes:r,year:c,mesCompleto:ea(`${a}-01`),fechaRegistro:ta()};await oa(G(y,"ganadores",t),h),Z(h)}catch(a){console.error("Error ganador:",a),e("#lastWinner").html(`
      <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
      <div class="error-winner"><i class="fas fa-exclamation-triangle"></i><span>Error</span></div>
    `)}}function Sa(a){const[t,o]=a.split("-"),s=new Date(parseInt(t),parseInt(o)-2);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}function Z(a){const t=m.find(o=>o.usuario===a.ganador||o.nombre===a.ganador);sa(a.mesCompleto),e("#lastWinner").html(`
    <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
    <div class="winner-info">
      <img src="${t?.imagen||"/smile.png"}" alt="${a.ganador}">
      <div class="winner-details">
        <h4>${a.ganador}</h4>
        <p>${a.mes}/${a.year}</p>
        <span class="winner-points">${a.puntosGanados} puntos</span>
        <span class="winner-sales">${a.totalVentas} tours</span>
      </div>
      <div class="winner-achievement"><i class="fas fa-crown"></i><span>¡Campeón!</span></div>
    </div>
  `)}function Ta(){return`
    <form id="formularioVenta" class="sale-form">
      <div class="form-grid">
        <div class="form-field">
          <label class="tour-label"><i class="fas fa-route"></i>Tipo de Tour *</label>
          <div class="tour-selector" id="tourSelector">
            <div class="tour-display" id="tourDisplay">
              <span class="tour-text">🔍 Seleccionar tour...</span>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="tour-dropdown" id="tourDropdown">
              <div class="tour-search">
                <input type="text" id="tourSearch" placeholder="Buscar tour..." autocomplete="off">
                <i class="fas fa-search"></i>
              </div>
              <div class="tour-table-container">
                <table class="tour-table"><tbody id="tourTableBody"></tbody></table>
              </div>
            </div>
          </div>
          <input type="hidden" id="tipoTour" required>
        </div>

        <div class="form-field">
          <label><i class="fas fa-hotel"></i>Registro en:</label>
          <select id="registroEn">
            <option value="hawka">Hawka</option>
            <option value="hclaudia">HClaudia</option>
          </select>
        </div>

        <div class="form-field">
          <label><i class="fas fa-bed"></i>N° Habitación(Opcional)</label>
          <input type="text" id="numeroHabitacion" placeholder="Ej: 205">
        </div>

        <div class="form-field">
          <label><i class="fas fa-user"></i>Nombre del Cliente *</label>
          <input type="text" id="nombreCliente" required placeholder="Nombre de cliente / calle">
        </div>

        <div class="form-field">
          <label><i class="fas fa-clock"></i>Hora de salida *</label>
          <input type="text" id="horaSalida" placeholder="2 HORAS -5PM" required>
        </div>

        <div class="form-field">
          <label><i class="fas fa-id-card"></i>Tipo de Documento</label>
          <select id="tipoDocumento">
            <option value="dni">DNI</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="cedula">Cédula</option>
            <option value="ce">Carnet Extranjería</option>
          </select>
        </div>

        <div class="form-field">
          <label><i class="fas fa-hashtag"></i>N° DNI/Pasaporte/CE</label>
          <input type="text" id="numeroDocumento" placeholder="78964523">
        </div>

        <div class="form-field">
          <label><i class="fas fa-credit-card"></i>Método de Pago</label>
          <select id="metodoPago">
            <option value="">Seleccionar...</option>
            <option value="Tarjeta">Tarjeta de Débito/Crédito</option>
            <option value="Transferencia">Transferencia Bancaria</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Yape">Yape</option>
            <option value="Plin">Plin</option>
          </select>
        </div>

        <div class="form-field">
          <label><i class="fas fa-users"></i>PAX (Cantidad Personas/Grupo Privado)</label>
          <input type="number" id="cantidadPax" required min="1" value="1">
        </div>

        <div class="form-field">
          <label><i class="fas fa-user-tag"></i>Importe Individual/Grupo Privado</label>
          <input type="number" id="precioUnitario" step="0.01" placeholder="S/ 0.00">
        </div>

        <div class="form-field">
          <label><i class="fas fa-calculator"></i>Total por Pagar(S/)</label>
          <input type="number" id="importeTotal" step="0.01" placeholder="S/ 0.00" disabled>
        </div>

        <div class="form-field">
          <label><i class="fas fa-user"></i>Operador *</label>
          <input type="text" id="Operador" placeholder="Ejm: Jacki, Pili, William...." required>
        </div>

        <div class="form-field">
          <label><i class="fas fa-money-bill"></i>Pago al operador (S/) *</label>
          <input type="number" id="PagoOperador" step="0.01" placeholder="0.00" required>
        </div>

        <div class="form-field">
          <label><i class="fas fa-money-check-alt"></i>Estado del Pago:</label>
          <select id="estadoPago">
            <option value="pagado">Pagado (Tour con nosotros)</option>
            <option value="cobrar">Yo pase al operador (->)</option>
            <option value="pagado2">Nos ha pasado a nosotros (<-)</option>
            <option value="cobrado">Deuda Arreglada (<->)</option>
          </select>
        </div>

        <div class="form-field">
          <label title="Calculo: importe total - comision del operador"><i class="fas fa-handshake"></i>Ganancia Estimada*</label>
          <input type="number" id="ganancia" step="0.01" placeholder="S/ 0.00" disabled>
        </div>

        <div class="form-field">
          <label><i class="fas fa-calendar-day"></i>Fecha *</label>
          <input type="date" id="fechaTour" required value="${new Date().toISOString().split("T")[0]}">
        </div>

        <div class="form-field">
          <label><i class="fa-solid fa-comment"></i>Comentario/Anotes (Opcional) *</label>
          <input type="text" id="Comentario" placeholder="Escribe notas de tu venta(opcional)">
        </div>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-save"><i class="fas fa-save"></i> Guardar Venta</button>
        <div class="points-preview">
          <div class="points-info">
            <i class="fas fa-star"></i>
            <span>Puntos a ganar: <strong id="vistaPreviaLaPuntos">0</strong></span>
          </div>
        </div>
      </div>
    </form>
  `}let b=[],v=null;e(document).on("click",".btn-save",async a=>{if(a.preventDefault(),!e(".btn-save").prop("disabled"))try{if(!v)return f("⚠️ Selecciona un tour","error"),e("#tourDisplay").focus();const t=e(".btn-save"),o=t.html();t.prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Guardando...');const s=t.attr("data-edit-id"),l=parseInt(e("#cantidadPax").val())||1,c=e("#vtJulio, #vtSonia, #vtExterna").is(":checked"),r={tipoTour:v.tour,registroEn:e("#registroEn").val(),nombreCliente:e("#nombreCliente").val(),numeroHabitacion:e("#numeroHabitacion").val(),tipoDocumento:e("#tipoDocumento").val(),numeroDocumento:e("#numeroDocumento").val(),cantidadPax:l,precioUnitario:parseFloat(e("#precioUnitario").val())||0,metodoPago:e("#metodoPago").val(),importeTotal:parseFloat(e("#importeTotal").val())||0,ganancia:parseFloat(e("#ganancia").val())||0,horaSalida:e("#horaSalida").val(),Operador:e("#Operador").val(),PagoOperador:parseFloat(e("#PagoOperador").val())||0,Comentario:e("#Comentario").val(),fechaTour:ea(e("#fechaTour").val()),estadoPago:e("#estadoPago").val(),vendedor:x.displayName,puntos:c?0:v.pts*l,email:x.email,qventa:1,fechaRegistro:ta(),esVentaJulio:!!e("#vtJulio").prop("checked"),esVentaSonia:!!e("#vtSonia").prop("checked"),esVentaExterna:!!e("#vtExterna").prop("checked")},u=[[v,"#tourDisplay","tour"],[r.nombreCliente,"#nombreCliente","Cliente"],[r.horaSalida,"#horaSalida","Hora"],[e("#fechaTour").val(),"#fechaTour","Fecha"],[r.Operador,"#Operador","Operador"],[r.numeroDocumento,"#numeroDocumento","Documento"],[r.metodoPago,"#metodoPago","Método de pago"]];e(".faltaValor, .okValor").removeClass("faltaValor okValor");const p=u.filter(([h,i])=>{const n=h&&h.toString().trim();return e(i).addClass(n?"okValor":"faltaValor"),!n}).map(([,,h])=>h);if(p.length)return t.prop("disabled",!1).html(o),f(`⚠️ Completa: ${p.join(", ")}`,"error"),e(".faltaValor").first().focus();const g=s||`venta_${Date.now()}`;if(r.idVenta=g,await oa(G(y,"registrosdb",g),r),M(`vendedor_${x.displayName}`,r,450),s){const h=$.findIndex(i=>i.id===s);h!==-1&&($[h]={id:s,...r}),f("¡Venta actualizada!","success")}else f("¡Venta registrada!","success");e(".faltaValor, .okValor").removeClass("faltaValor okValor"),_(),await B(),await N(),A(),H()}catch(t){console.error("Error guardando:",t),f("Error al guardar","error"),e(".btn-save").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Venta')}});e(document).on("input change","#formularioVenta input, #formularioVenta select",function(){e(this).toggleClass("okValor faltaValor",!!e(this).val()?.toString().trim())});e(document).on("click",".tour-row",()=>e("#tourDisplay").removeClass("faltaValor").addClass("okValor"));e(document).on("change","#vtJulio, #vtSonia, #vtExterna",q);e(document).on("input","#cantidadPax, #precioUnitario",()=>{ua(),F(),q()});e(document).on("change","#estadoPago",F);e(document).on("input","#importeTotal, #PagoOperador",F);e(document).on("click",".btn-clear-view, .btn-cancel-edit",()=>{_(),f("Vista limpiada","info")});function ua(){const a=parseInt(e("#cantidadPax").val())||1,t=parseFloat(e("#precioUnitario").val())||0;e("#importeTotal").val((t*a).toFixed(2)),W("#importeTotal")}function F(){const a=e("#estadoPago").val(),t=parseFloat(e("#importeTotal").val())||0,o=parseFloat(e("#PagoOperador").val())||0,s=a==="pagado"||a==="pagado2";e("#ganancia").val((s?t:t-o).toFixed(2)),e("#PagoOperador").prop("disabled",s).attr("placeholder",s?"Servicio nuestro":"0.00").val(s?"0":e("#PagoOperador").val()),W("#ganancia")}function q(){const a=parseInt(e("#cantidadPax").val())||1,t=v?.pts||0,o=e("#vtJulio, #vtSonia, #vtExterna").is(":checked");e("#vistaPreviaLaPuntos").text(o?0:t*a)}function W(a){e(a).addClass("field-updated"),setTimeout(()=>e(a).removeClass("field-updated"),1e3)}async function pa(){try{console.log("🔄 Cargando tours...");const a=S("toursSmile");if(a?.length>0){b=a.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),console.log(`✅ ${b.length} tours desde cache`),typeof k=="function"&&k();return}const t=await C(ia(E(y,"listatours"),na("activo","==",!0)));if(t.empty)return console.log("❌ No hay tours"),b=[];const o=t.docs.map(s=>({id:s.id,...s.data()}));b=o.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),M("toursSmile",o,300),console.log(`✅ ${b.length} tours desde Firebase`),typeof k=="function"&&k()}catch(a){console.error("❌ Error tours:",a),f("Error cargando tours","error")}}function k(){Y(b),e("#tourDisplay").off("click").on("click",function(t){t.stopPropagation();const o=e("#tourDropdown");o.toggleClass("active"),e(this).toggleClass("active"),o.hasClass("active")&&setTimeout(()=>e("#tourSearch").focus(),50)});let a;e("#tourSearch").off("input").on("input",function(){const t=e(this).val().toLowerCase();clearTimeout(a),a=setTimeout(()=>{if(!t)return Y(b);t.length>=2&&Y(b.filter(o=>o.tour.toLowerCase().includes(t)||o.price.toString().includes(t)))},200)}),e(document).off("click.tour").on("click.tour",".tour-row",function(t){t.stopPropagation(),v=b[e(this).data("index")],v&&(e("#tourDisplay .tour-text").text(v.tour),e("#tipoTour").val(v.tour),e("#precioUnitario").val(v.price),e("#tourDropdown, #tourDisplay").removeClass("active"),e(".tour-row").removeClass("selected"),e(this).addClass("selected"),setTimeout(()=>{W("#precioUnitario"),ua(),F(),q()},50))}),e(document).on("click",t=>{e(t.target).closest(".tour-selector").length||e("#tourDropdown, #tourDisplay").removeClass("active")}),Pa(),Da()}function Y(a){if(!a.length)return e("#tourTableBody").html('<tr><td colspan="4" style="text-align:center;color:#666;">Sin tours</td></tr>');const t=document.createDocumentFragment();a.forEach((s,l)=>{const c=document.createElement("tr");c.className="tour-row",c.dataset.index=b.indexOf(s),c.innerHTML=`<td class="tour-num">${l+1}</td><td class="tour-name">${s.tour}</td><td class="tour-price">S/ ${s.price}</td><td class="tour-pts">${s.pts} pts</td>`,t.appendChild(c)});const o=document.getElementById("tourTableBody");o.innerHTML="",o.appendChild(t)}function Pa(){if(!b.length)return e("#pointsGrid").html('<p style="text-align:center;color:#666;">Sin datos</p>');const a=[...b].sort((t,o)=>o.pts-t.pts);e("#pointsGrid").html(a.map(t=>`<div class="point-item"><span class="service-name">${t.tour}</span><span class="point-value">${t.pts}</span></div>`).join(""))}function Da(){if(!b.length)return e("#pricesGrid").html('<p style="text-align:center;color:#666;">Sin datos</p>');e("#pricesGrid").html(b.map(a=>`<div class="price-item"><span class="service-name">${a.tour}</span><span class="service-price">S/ ${a.price.toFixed(2)}</span></div>`).join(""))}function _(){v=null,e("#formularioVenta input, #formularioVenta select").prop("disabled",!1),e("#formularioVenta").removeClass("view-only edit-mode"),e(".btn-save").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),e(".btn-clear-view, .btn-cancel-edit").remove(),e("#formularioVenta")[0].reset(),e("#cantidadPax").val(1),e("#fechaTour").val(new Date().toISOString().split("T")[0]),e("#vistaPreviaLaPuntos").text("0"),e("#tourDisplay .tour-text").text("🔍 Seleccionar tour..."),e(".tour-row").removeClass("selected"),e("#importeTotal, #ganancia").prop("disabled",!0)}function fa(a,t=!1){_(),v=b.find(o=>o.tour===a.tipoTour||a.tipoTour.includes(o.tour.split(" ")[1])),v?(e("#tourDisplay .tour-text").text(v.tour),e("#tipoTour").val(v.tour),e(`.tour-row[data-tour*='"nt":${v.nt}']`).addClass("selected")):(e("#tourDisplay .tour-text").text(a.tipoTour||"🔍 Seleccionar..."),e("#tipoTour").val(a.tipoTour||"")),Object.entries(a).forEach(([o,s])=>{const l=e(`#${o}`);l.length&&(o==="fechaTour"&&s?.toDate?l.val(s.toDate().toISOString().split("T")[0]):l.val(s||""))}),e("#vtJulio").prop("checked",a.esVentaJulio||!1),e("#vtSonia").prop("checked",a.esVentaSonia||!1),e("#vtExterna").prop("checked",a.esVentaExterna||!1),F(),q(),t?(e("#formularioVenta input, #formularioVenta select, .tour-display").prop("disabled",!0),e(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),e("#formularioVenta").addClass("view-only"),e(".btn-clear-view").length||e(".form-actions").prepend('<button type="button" class="btn-clear-view" style="background:#6c757d;color:#fff;border:none;padding:10px 20px;border-radius:5px;margin-right:10px"><i class="fas fa-times"></i> Limpiar Vista</button>')):(e("#formularioVenta input, #formularioVenta select").prop("disabled",!1),e(".tour-display").prop("disabled",!1),e("#formularioVenta").addClass("edit-mode"),e(".btn-cancel-edit").length||e(".form-actions").prepend('<button type="button" class="btn-cancel-edit" style="background:#dc3545;color:#fff;border:none;padding:10px 20px;border-radius:5px;margin-right:10px"><i class="fas fa-times"></i> Cancelar Edición</button>'))}async function ma(){try{const a=S("empleadosSmile");a&&(m.splice(0,m.length,...a),A());const o=(await C(E(y,"smiles"))).docs.filter(s=>s.data().participa==="si").map(s=>({id:s.id,...s.data()}));m.splice(0,m.length,...o),M("empleadosSmile",m,300),await N(),A()}catch(a){console.error("Error empleados:",a),e("#workersGrid").html('<div class="error-workers"><i class="fas fa-exclamation-triangle"></i>Error</div>')}}e(document).on("change","#mostrarn",function(){ja(parseInt(e(this).val())),O(1),P(e("#filterEmployee").val())});e(document).on("change","#monthSelector",function(){Ga(e(this).val()),O(1),Promise.all([N(),B()]).then(()=>{A(),P(),H(),da()})});e(document).on("change","#filterEmployee",()=>{O(1),P(e("#filterEmployee").val())});e(document).on("click","#todayFilter",()=>{O(1),P(e("#filterEmployee").val(),!0)});window.cambiarPagina=a=>{O(a),P(e("#filterEmployee").val())};window.verDetalleVenta=a=>{const t=$.find(o=>o.id===a);if(!t)return f("Venta no encontrada","error");fa(t,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),f("Datos cargados","info")};window.editarVenta=a=>{const t=$.find(o=>o.id===a);if(!t)return f("Venta no encontrada","error");fa(t,!1),e(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",a),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),f("Datos cargados para edición","info")};window.eliminarVenta=a=>{const t=$.find(o=>o.id===a);if(!t)return f("Venta no encontrada","error");confirm(`¿Eliminar venta de "${t.nombreCliente}"?

Esta acción NO se puede deshacer.`)&&confirm(`⚠️ CONFIRMACIÓN FINAL

Se eliminará:
• ${t.nombreCliente}
• ${t.tipoTour}
• S/ ${t.importeTotal}

¿CONFIRMAS?`)&&xa(a)};async function xa(a){try{f("Eliminando...","info"),await ba(G(y,"registrosdb",a)),Object.keys(localStorage).filter(o=>o.startsWith("vendedor_")).forEach(o=>{try{JSON.parse(localStorage.getItem(o))?.idVenta===a&&localStorage.removeItem(o)}catch{}});const t=$.findIndex(o=>o.id===a);t!==-1&&$.splice(t,1),await N(),A(),P(),H(),e(".btn-save").attr("data-edit-id")===a&&_(),f("¡Venta eliminada!","success")}catch(t){console.error("Error eliminando:",t),f("Error al eliminar","error")}}function Ca(){const a=m.map(t=>`<option value="${t.usuario}">${t.nombre}</option>`).join("");e("#filterEmployee").html(`<option value="">Todos los vendedores</option>${a}`)}async function B(){try{const a=await C(E(y,"registrosdb"));$.splice(0,$.length,...a.docs.map(t=>({id:t.id,...t.data()}))),$.sort((t,o)=>{const s=t.fechaTour?.toDate?t.fechaTour.toDate():new Date(t.fechaTour||"1970");return(o.fechaTour?.toDate?o.fechaTour.toDate():new Date(o.fechaTour||"1970"))-s}),P()}catch(a){console.error("Error ventas:",a),e("#salesTableBody").html('<tr><td colspan="11" class="error-cell"><i class="fas fa-exclamation-triangle"></i>Error</td></tr>')}}function P(a="",t=!1){const[o,s]=T.split("-").map(Number),l=new Date,c=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`;let r=$.filter(i=>{const n=i.fechaTour;if(!n)return!1;if(n.toDate){const d=n.toDate();return d.getFullYear()===o&&d.getMonth()+1===s}if(typeof n=="string"){const[d,w]=n.split("-").map(Number);return d===o&&w===s}return!1});a&&(r=r.filter(i=>i.vendedor===a)),t&&(r=r.filter(i=>{const n=i.fechaTour;if(!n)return!1;if(typeof n=="string")return n===c;if(n.toDate){const d=n.toDate();return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`===c}return!1}));const u=Math.ceil(r.length/j),p=(D-1)*j,h=r.slice(p,p+j).map(i=>{const d=i.vendedor===x?.displayName?`<button class="btn-view" onclick="verDetalleVenta('${i.id}')"><i class="fas fa-eye"></i></button>
         <button class="btn-edit" onclick="editarVenta('${i.id}')"><i class="fas fa-edit"></i></button>
         <button class="btn-delete" onclick="eliminarVenta('${i.id}')"><i class="fas fa-trash"></i></button>`:`<button class="btn-view" onclick="verDetalleVenta('${i.id}')"><i class="fas fa-eye"></i></button>`,w=Ea(i.fechaTour),V=`${ha(i.nombreCliente)}${i.numeroHabitacion?` <small>(${i.numeroHabitacion})</small>`:""}`,L=m.find(va=>va.usuario===i.vendedor),U=Va(i.estadoPago);return`
      <tr>
        <td>${w}</td>
        <td class="user-cell">
          <img src="${L?.imagen||"/smile.png"}" class="avatar-small">
          <strong>${K(i.vendedor)}</strong>
        </td>
        <td><span class="tour-badge">${i.tipoTour}</span></td>
        <td><span class="pax-badge"><i class="fas fa-users"></i> ${i.cantidadPax}</span></td>
        <td>${V}</td>
        <td><strong class="price">S/ ${(i.importeTotal||0).toFixed(2)}</strong></td>
        <td>S/ ${(i.precioUnitario||0).toFixed(2)}</td>
        <td><span class="status-badge ${U.cls}">
          <i class="fas fa-${U.icn}"></i> ${U.txt}
        </span></td>
        <td>S/ ${(i.ganancia||0).toFixed(2)}</td>
        <td>${i.esVentaJulio?"Julio":i.esVentaSonia?"Sonia":i.esVentaExterna?"Otro":K(i.vendedor)}</td>
        <td><span class="points-badge"><i class="fas fa-star"></i> ${i.puntos||0}</span></td>
        <td><div class="action-buttons">${d}</div></td>
      </tr>
    `}).join("");e("#salesTableBody").html(h||'<tr><td colspan="11" class="empty-cell"><i class="fas fa-inbox"></i>No hay ventas</td></tr>'),ka(u)}function Ea(a){if(!a)return"Sin fecha";if(a?.toDate)return sa(a);if(typeof a=="string"){const[t,o,s]=a.split("-");return`${s}/${o}/${t}`}return"Sin fecha"}function Va(a){return{pagado:{cls:"paid",icn:"check-circle",txt:"PAGADO"},cobrado:{cls:"paid",icn:"check-circle",txt:"PAGADO"},cobrar:{cls:"pending",icn:"clock",txt:"DEUDA"}}[a]||{cls:"pending",icn:"clock",txt:"DEUDA"}}function ka(a){if(a<=1)return e("#paginationContainer").html("");let t='<div class="pagination">';D>1&&(t+=`<button class="page-btn" onclick="cambiarPagina(${D-1})"><i class="fas fa-chevron-left"></i></button>`);for(let o=1;o<=a;o++)t+=`<button class="page-btn ${o===D?"active":""}" onclick="cambiarPagina(${o})">${o}</button>`;D<a&&(t+=`<button class="page-btn" onclick="cambiarPagina(${D+1})"><i class="fas fa-chevron-right"></i></button>`),t+="</div>",e("#paginationContainer").html(t)}e(document).on("click",".tab-btn",function(){const a=e(this).data("tab");X(this,"active"),X(`#${a}-tab`,"active")});function Aa(){return`
    <section class="info-section">
      <div class="info-tabs">
        ${["points:star:Puntos","rules:list-ul:Reglas","prices:money-bill-wave:Precios"].map((a,t)=>{const[o,s,l]=a.split(":");return`<button class="tab-btn ${t===0?"active":""}" data-tab="${o}">
              <i class="fas fa-${s}"></i>${l}
            </button>`}).join("")}
      </div>

      <div class="tab-content active" id="points-tab">
        <h3><i class="fas fa-chart-bar"></i> Asignación de Puntos</h3>
        <div class="points-grid" id="pointsGrid">
          <div class="loading-points"><i class="fas fa-spinner fa-spin"></i>Cargando...</div>
        </div>
      </div>

      <div class="tab-content" id="rules-tab">
        <h3><i class="fas fa-gavel"></i> Reglas del Sistema</h3>
        <div class="rules-list">
          ${["Los precios NO incluyen tasa turística","Buggie/Bodegas y City Tour: Mayor puntaje con buggie de Sonia o camioneta","Reclamos anulan puntos. Comentario positivo = +10pts. Negativo = -10pts","Anulación o devolución = Sin puntos","Registrar datos completos el mismo día para validar puntos","Etiqueta en redes = +5pts. Comentario = +5pts (máx 10 por cliente)"].map((a,t)=>`
            <div class="rule-item ${t===2||t===5?"bonus":""}">
              <span class="rule-number">${t+1}</span>
              <span>${a}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="tab-content" id="prices-tab">
        <h3><i class="fas fa-tags"></i> Precios de Tours</h3>
        <div class="prices-grid" id="pricesGrid">
          <div class="loading-prices"><i class="fas fa-spinner fa-spin"></i>Cargando...</div>
        </div>
        <div class="price-note">
          <p><i class="fas fa-info-circle"></i> <strong>Nota:</strong> Precios actualizados automáticamente</p>
        </div>
      </div>
    </section>
  `}const I=(a,t)=>{const o=a.find("i");t?(o.removeClass().addClass("fas fa-spinner fa-spin"),a.prop("disabled",!0)):(o.removeClass().addClass("fa-solid fa-rotate-right"),a.prop("disabled",!1))};e(document).on("click",".bt_cargar",()=>{const a=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+|toursSmile|notasSmile|empleadosSmile|empleadosPuntos_)$/;Object.keys(localStorage).filter(t=>a.test(t)).forEach(t=>localStorage.removeItem(t)),ra("✅ Cache limpiado"),setTimeout(()=>location.reload(),800)});async function Ma(){try{const a=e(".wifresh");I(a,!0),f("🔄 Verificando actualizaciones...","info");const t=await Na();if(!t.hayActualizaciones){I(a,!1),f("✅ Todo actualizado","success");return}f(`🔄 Aplicando ${t.total} actualizaciones...`,"info");const o=[];t.empleados&&o.push(Fa()),t.tours&&o.push(Oa()),t.ventas&&o.push(za()),t.notas&&o.push(Ia()),await Promise.all(o),await Promise.all([N(),H()]),A(),P(),k(),I(a,!1),f(`✅ ${t.total} actualizaciones aplicadas`,"success")}catch(a){console.error("❌ Error wifresh:",a),I(e(".wifresh"),!1),f("❌ Error en actualización","error")}}async function Na(){const a={empleados:!1,tours:!1,ventas:!0,notas:!1,total:0,hayActualizaciones:!1};try{(!S("empleadosSmile")||J("empleadosSmile",300))&&(a.empleados=!0,a.total++),(!S("toursSmile")||J("toursSmile",300))&&(a.tours=!0,a.total++),a.total++,(!S("notasSmile")||J("notasSmile",600))&&(a.notas=!0,a.total++),a.hayActualizaciones=a.total>0}catch(t){console.error("Error detectando:",t)}return a}function J(a,t){try{const o=localStorage.getItem(`${a}_timestamp`);return o?(Date.now()-parseInt(o))/1e3>t:!0}catch{return!0}}async function Fa(){R("empleadosSmile"),await ma()}async function Oa(){R("toursSmile"),await pa()}async function za(){await B()}async function Ia(){R("notasSmile"),await ca()}e(document).on("click",".wifresh",a=>{a.preventDefault(),Ma()});let x=null,T="2025-09",D=1,j=5,$=[],m=[];const ja=a=>{j=a},O=a=>{D=a},Ga=a=>{T=a};function Ha(){const a=new Date,t=a.getFullYear(),o=a.getMonth(),s=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],l=[];for(let c=-3;c<=3;c++){const r=o+c,u=t+Math.floor(r/12),p=(r%12+12)%12,g=`${u}-${String(p+1).padStart(2,"0")}`;l.push(`<option value="${g}">${s[p]} ${u}</option>`)}return l.join("")}ya(la,async a=>{if(!a)return window.location.href="/";x=a;try{const t=S("wiSmile");if(t)return aa(t),Q(y,x);const s=(await C(ia(E(y,"smiles"),na("usuario","==",a.displayName)))).docs[0].data();M("wiSmile",s,450),aa(s),Q(y,x)}catch(t){console.error(t)}});e(document).on("click",".bt_salir",async()=>{await $a(la),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(t=>localStorage.removeItem(t))}});function aa(a){ra(`Bienvenido ${a.nombre}!`),e(".app").html(`
    <header class="top-header">
      <div class="header-container miwp">
        <div class="header-left">
          <h1 class="main-title"><i class="fas fa-trophy"></i>RETO DEL MES</h1>
          <select id="monthSelector" class="month-selector">${Ha()}</select>
        </div>
        <div class="header-right">
          <div class="wifresh"><i class="fa-solid fa-rotate-right"></i></div>
          <div class="witemas"></div>
          <div class="user-section">
            <div class="user-info">
              <img src="${a.imagen||"/smile.png"}" alt="${a.nombre}" class="user-avatar">
              <span class="user-name">${a.nombre}</span>
            </div>
            <button class="logout-btn bt_salir"><i class="fas fa-sign-out-alt"></i>Salir</button>
          </div>
        </div>
      </div>
    </header>

    <main class="main-container miwp">
      <div class="dashboard-layout">
        <section class="new-sale-panel">
          <div class="panel-header">
            <h2><i class="fas fa-plus-circle"></i> Nueva Venta</h2>
            <div class="bt_add_exportar">
              <p>Venta por:</p>
              ${["Julio","Sonia","Otros"].map((t,o)=>`<label for="vt${t}"><input type="checkbox" id="vt${t}"/>${t}</label>`).join("")}
              <button class="btn-add" id="addNewSale"><i class="fas fa-plus"></i> Agregar</button>
            </div>
          </div>
          ${Ta()}
        </section>

        <section class="competition-panel">
          <div class="panel-header">
            <h2><i class="fas fa-fire"></i> Competencia del Mes</h2>
            <span class="subtitle">¡Quien venda más gana!</span>
          </div>
          <ul class="descripcion_com">
            <li>¡Buenos días Rubi y Piero! He actualizado la plataforma con mejoras en la búsqueda de tours y otras funcionalidades.</li>
            <li>Hemos actualizado el campo de motivo de viaje para mantener todo al día con SUNAT.</li>
          </ul>
          <div class="workers-grid" id="workersGrid"><div class="loading-workers"><i class="fas fa-spinner fa-spin"></i>Cargando empleados...</div></div>
          <div class="last-winner" id="lastWinner"><div class="loading-workers"><i class="fas fa-spinner fa-spin"></i>Cargando ganador...</div></div>
          ${wa()}
        </section>
      </div>

      <section class="sales-table-section">
        <div class="table-header">
          <h2><i class="fas fa-clipboard-list"></i> Registro de Ventas</h2>
          <div class="table-filters">
            <select id="mostrarn" class="filter-select">${[5,7,10,15].map(t=>`<option value="${t}">Mostrar ${t} ventas</option>`).join("")}</select>
            <select id="filterEmployee" class="filter-select"><option value="">Todos los vendedores</option></select>
            <button class="filter-btn" id="todayFilter"><i class="fas fa-calendar-day"></i> Hoy</button>
          </div>
        </div>
        <div class="table-container">
          <table class="sales-table" id="salesTable">
            <thead><tr>${["Fecha:calendar","Usuario:user","Tipo Tour:route","PAX:users","Nombre:user-tag","M. Total:calculator","M. Individual:dollar-sign","Pagado:credit-card","Ganancia:hand-holding-usd","Vendedor:user","Puntos:star","Acciones:cogs"].map(t=>`<th><i class="fas fa-${t.split(":")[1]}"></i> ${t.split(":")[0]}</th>`).join("")}</tr></thead>
            <tbody id="salesTableBody"><tr><td colspan="12" class="loading-cell"><i class="fas fa-spinner fa-spin"></i> Cargando ventas...</td></tr></tbody>
          </table>
        </div>
        <div class="pagination-container" id="paginationContainer"></div>
      </section>
      ${Aa()}
    </main>
    <div id="notifications-container"></div>
    <div id="modal-container"></div>
    <footer class='foo hwb txc'><p>Creado con<i class='wicon wi-corazon'></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class='wty'></span><span class='abw tm11042025'>| Acerca del app | Actualizado</span></p></footer>
  `),qa()}async function qa(){try{const a=new Date;T=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}`,e("#monthSelector").val(T),await Promise.all([ma(),B(),da(),pa(),ca()]),Ca(),k()}catch(a){console.error("Error init:",a)}}
