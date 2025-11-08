import{t as C,b as V,c as k,a as P,l as x,$ as t,g as ba,d as B,j as na,v as ra,i as la,C as X,N as v,q as ca,e as da,x as ya,y as $a,z as Sa,A as ea,M as ua,B as Q,D as wa,E as Ta,F as oa,h as pa}from"./widev-DnIyZzvI.js";/* empty css              */function N(){const a=C(`empleadosPuntos_${g}`);if(a)return sa(a);if(!h.length)return t(".app").html('<div class="estado-vacio"><i class="fa-solid fa-spinner fa-spin"></i><p>Cargando empleados...</p></div>');x(`empleadosPuntos_${g}`,h,5),sa(h)}function sa(a){const e=a.map((o,s)=>{const c=s+1,l=c===1?"champion":c===2?"runner-up":"",r=c===1?"crown":c===2?"medal":"user";return`
      <div class="worker-card ${l}" data-employee="${o.usuario}">
        <div class="rank-badge"><i class="fas fa-${r}"></i>#${c}</div>
        <div class="worker-avatar">
          <img src="${o.imagen||"/smile.png"}" alt="${o.nombre}">
          <div class="status-online"></div>
        </div>
        <div class="worker-info">
          <h3>${o.nombre}</h3>
          <p>${o.descripcion}</p>
        </div>
        <div class="worker-points">
          <span class="points-number">${o.totalPuntos||0}</span>
          <span class="points-label">puntos</span>
        </div>
        <div class="worker-stats">
          <div class="stat">
            <span class="stat-value">${o.totalVentas||0}</span>
            <span class="stat-label">Tours Vendidos</span>
          </div>
        </div>
      </div>
    `}).join("");t("#workersGrid").html(e)}async function I(){try{const a=C(`empleadosPuntos_${g}`);if(a?.length){console.log(`✅ ${a.length} empleados desde cache`),h.splice(0,h.length,...a);return}if(!h.length)return console.warn("⚠️ Sin empleados");console.log("🔄 Calculando puntos...");const e=await V(k(P,"registrosdb")),[o,s]=g.split("-").map(Number),c=e.docs.filter(l=>{const r=l.data().fechaTour;if(!r)return!1;if(r.toDate){const i=r.toDate();return i.getFullYear()===o&&i.getMonth()+1===s}if(typeof r=="string"){const[i,p]=r.split("-").map(Number);return i===o&&p===s}return!1});h.forEach(l=>{const r=c.filter(i=>i.data().vendedor===l.usuario);l.totalPuntos=r.reduce((i,p)=>i+(p.data().puntos||0),0),l.totalVentas=r.reduce((i,p)=>i+(p.data().qventa||0),0)}),h.sort((l,r)=>r.totalPuntos-l.totalPuntos),x(`empleadosPuntos_${g}`,h,5),console.log(`✅ ${h.length} empleados guardados en cache`)}catch(a){console.error("❌ Error:",a)}}async function fa(){try{const a=C("notasSmile");if(a?.length)return console.log(`✅ ${a.length} notas desde cache`),G(a);console.log("🔄 Cargando notas...");const e=await V(k(P,"notas"));if(e.empty)return console.log("📭 No hay notas"),G([]);const o=e.docs.map(s=>({id:s.id,...s.data()}));x("notasSmile",o,600),console.log(`✅ ${o.length} notas cargadas`),G(o)}catch(a){console.error("❌ Error notas:",a),G([])}}function G(a){const e=a.length?`
    ${a.map(o=>`<li>${o.nota}</li>`).join("")}
    <div style="font-size:var(--fz_s2);padding:.5vh 0">
      <i class="fas fa-sync"></i> Actualizado: ${new Date().toLocaleString("es-ES")}
    </div>
  `:`<div style="color:#666;text-align:center;padding:20px;font-style:italic">
    <i class="fas fa-info-circle"></i> No hay noticias
  </div>`;t(".descripcion_com").html(e)}async function Z(){try{const a=Pa(g),e=`ganadorMes_${a}`,o=C(e);if(o)return U(o);const s=a.replace("-",""),c=await ba(B(P,"ganadores",s));if(c.exists()){const d=c.data();return x(e,d,1440),U(d)}const[l,r]=a.split("-").map(Number),i=d=>{if(!d)return!1;if(typeof d=="string"){const[y,T]=d.split("-").map(Number);return y===l&&T===r}if(d.toDate){const y=d.toDate();return y.getFullYear()===l&&y.getMonth()+1===r}return!1},f=(await V(k(P,"registrosdb"))).docs.map(d=>d.data()).filter(d=>i(d.fechaTour)).reduce((d,y)=>{const T=y.vendedor;return d[T]||(d[T]={puntos:0,ventas:0}),d[T].puntos+=y.puntos||0,d[T].ventas+=y.qventa||0,d},{}),b=Object.entries(f);if(!b.length)return t("#lastWinner").html(`
      <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
      <div class="no-winner"><i class="fas fa-question-circle"></i><span>No hay datos</span></div>
    `);const[n,u]=b.sort((d,y)=>y[1].puntos-d[1].puntos)[0],m={ganador:n,puntosGanados:u.puntos,totalVentas:u.ventas,mes:r,year:l,mesCompleto:ra(`${a}-01`),fechaRegistro:na()};await la(B(P,"ganadores",s),m),x(e,m,1440),U(m)}catch(a){console.error("Error ganador:",a),t("#lastWinner").html(`
      <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
      <div class="error-winner"><i class="fas fa-exclamation-triangle"></i><span>Error al cargar</span></div>
    `)}}function Pa(a){const[e,o]=a.split("-"),s=new Date(parseInt(e),parseInt(o)-2);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}function U(a){const e=h.find(o=>o.usuario===a.ganador||o.nombre===a.ganador);t("#lastWinner").html(`
    <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
    <div class="winner-info">
      <img src="${e?.imagen||"/smile.png"}" alt="${a.ganador}">
      <div class="winner-details">
        <h4>${X(a.ganador)}</h4>
        <p>${a.mes}/${a.year}</p>
        <span class="winner-points">${a.puntosGanados} puntos</span>
        <span class="winner-sales">${a.totalVentas} tours</span>
      </div>
      <div class="winner-achievement"><i class="fas fa-crown"></i><span>¡Campeón!</span></div>
    </div>
  `)}function Da(){return`<div class="competition-summary" id="competitionSummary">
    ${["Tours Hoy:toursHoy","Total Tours:totalTours","Puntos Totales:totalPuntos","Meta Mes:metaMes"].map(a=>{const[e,o]=a.split(":");return`<div class="summary-stat"><span class="summary-label">${e}</span><span class="summary-value" id="${o}">...</span></div>`}).join("")}
  </div>`}function O(){const a=new Date,e=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`,[o,s]=g.split("-").map(Number),c=`resumenMes_${g}`,l=C(c);if(l&&l.mes===g&&l.dia===e){t("#toursHoy").text(l.toursHoy),t("#totalTours").text(l.totalTours),t("#totalPuntos").text(l.totalPuntos),t("#metaMes").text(l.meta);return}let r=0,i=0,p=0;w.forEach(n=>{const u=n.fechaTour;if(!u)return;let m,d,y;if(typeof u=="string"){const[T,A,ta]=u.split("-");m=+T,d=+A,y=u}else if(u.toDate){const T=u.toDate();m=T.getFullYear(),d=T.getMonth()+1,y=`${m}-${String(d).padStart(2,"0")}-${String(T.getDate()).padStart(2,"0")}`}else return;m===o&&d===s&&(r+=n.qventa||0,i+=n.puntos||0,y===e&&(p+=n.qventa||0))});const f=2500;t("#toursHoy").text(p),t("#totalTours").text(r),t("#totalPuntos").text(i),t("#metaMes").text(f),x(c,{mes:g,dia:e,toursHoy:p,totalTours:r,totalPuntos:i,meta:f},.25);const b=[Math.min(p/5*100,100),Math.min(r/50*100,100),Math.min(i/f*100,100),100];t(".summary-stat").each((n,u)=>{const m=b[n]/100*360;t(u).css({"--progress":`${m}deg`,"--width":`${b[n]}%`})})}function xa(){return`
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
  `}let $=[],S=null;function Ca(){try{localStorage.removeItem("topSmiles"),localStorage.removeItem(`empleadosPuntos_${g}`),localStorage.removeItem(`resumenMes_${g}`)}catch(a){console.warn("Cache clear warn",a)}}t(document).off("click.btnsave").on("click.btnsave",".btn-save",async a=>{a.preventDefault();const e=t(".btn-save");if(e.prop("disabled"))return;if(!S)return v("Selecciona un tour","error"),t("#tourDisplay").addClass("faltaValor").focus();const s=[["#nombreCliente","Cliente"],["#horaSalida","Hora"],["#fechaTour","Fecha"],["#Operador","Operador"],["#metodoPago","Pago"]].filter(([f])=>!t(f).val()?.trim());if(s.length)return s.forEach(([f])=>t(f).addClass("faltaValor")),v("Completa: "+s.map(([,f])=>f).join(", "),"error");const c=parseInt(t("#cantidadPax").val())||1,l=t("#vtJulio,#vtSonia,#vtExterna").is(":checked"),r=e.attr("data-edit-id")||`venta_${Date.now()}`,i={idVenta:r,tipoTour:S.tour,registroEn:t("#registroEn").val(),nombreCliente:t("#nombreCliente").val(),numeroHabitacion:t("#numeroHabitacion").val(),tipoDocumento:t("#tipoDocumento").val(),numeroDocumento:t("#numeroDocumento").val(),cantidadPax:c,precioUnitario:parseFloat(t("#precioUnitario").val())||0,metodoPago:t("#metodoPago").val(),importeTotal:parseFloat(t("#importeTotal").val())||0,ganancia:parseFloat(t("#ganancia").val())||0,horaSalida:t("#horaSalida").val(),Operador:t("#Operador").val(),PagoOperador:parseFloat(t("#PagoOperador").val())||0,Comentario:t("#Comentario").val(),fechaTour:ra(t("#fechaTour").val()),estadoPago:t("#estadoPago").val(),vendedor:F.displayName,puntos:l?0:S.pts*c,email:F.email,qventa:1,fechaRegistro:na(),esVentaJulio:!!t("#vtJulio").prop("checked"),esVentaSonia:!!t("#vtSonia").prop("checked"),esVentaExterna:!!t("#vtExterna").prop("checked")},p='<i class="fas fa-save"></i> Guardar Venta';e.prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Guardando...');try{await la(B(P,"registrosdb",r),i),i.id=r;const f=w.findIndex(b=>b.id===r||b.idVenta===r);f>-1?w[f]=i:w.push(i),w.sort((b,n)=>{const u=b.fechaTour?.toDate?b.fechaTour.toDate():new Date(b.fechaTour||0);return(n.fechaTour?.toDate?n.fechaTour.toDate():new Date(n.fechaTour||0))-u}),window.currentPage!==void 0&&(window.currentPage=1),D(),Ca(),v(f>-1?"Venta actualizada":"Venta registrada","success"),Y(),setTimeout(async()=>{await I(),N(),O()},40)}catch(f){console.error("Err venta:",f),v("Error guardando","error")}finally{e.prop("disabled",!1).html(p).removeAttr("data-edit-id")}});t(document).on("input change","#formularioVenta input, #formularioVenta select",function(){t(this).toggleClass("okValor faltaValor",!!t(this).val()?.toString().trim())});t(document).on("click",".tour-row",()=>t("#tourDisplay").removeClass("faltaValor").addClass("okValor"));t(document).on("change","#vtJulio, #vtSonia, #vtExterna",R);t(document).on("input","#cantidadPax, #precioUnitario",()=>{ma(),_(),R()});t(document).on("change","#estadoPago",_);t(document).on("input","#importeTotal, #PagoOperador",_);t(document).on("click",".btn-clear-view, .btn-cancel-edit",()=>{Y(),v("Vista limpiada","info")});function ma(){const a=parseInt(t("#cantidadPax").val())||1,e=parseFloat(t("#precioUnitario").val())||0;t("#importeTotal").val((e*a).toFixed(2)),K("#importeTotal")}function _(){const a=t("#estadoPago").val(),e=parseFloat(t("#importeTotal").val())||0,o=parseFloat(t("#PagoOperador").val())||0,s=a==="pagado"||a==="pagado2";t("#ganancia").val((s?e:e-o).toFixed(2)),t("#PagoOperador").prop("disabled",s).attr("placeholder",s?"Servicio nuestro":"0.00").val(s?"0":t("#PagoOperador").val()),K("#ganancia")}function R(){const a=parseInt(t("#cantidadPax").val())||1,e=S?.pts||0,o=t("#vtJulio, #vtSonia, #vtExterna").is(":checked");t("#vistaPreviaLaPuntos").text(o?0:e*a)}function K(a){t(a).addClass("field-updated"),setTimeout(()=>t(a).removeClass("field-updated"),1e3)}async function va(){try{console.log("🔄 Cargando tours...");const a=C("toursSmile");if(a?.length>0){$=a.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),console.log(`✅ ${$.length} tours desde cache`),typeof M=="function"&&M();return}const e=await V(ca(k(P,"listatours"),da("activo","==",!0)));if(e.empty)return console.log("❌ No hay tours"),$=[];const o=e.docs.map(s=>({id:s.id,...s.data()}));$=o.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),x("toursSmile",o,300),console.log(`✅ ${$.length} tours desde Firebase`),typeof M=="function"&&M()}catch(a){console.error("❌ Error tours:",a),v("Error cargando tours","error")}}function M(){W($),t("#tourDisplay").off("click").on("click",function(e){e.stopPropagation();const o=t("#tourDropdown");o.toggleClass("active"),t(this).toggleClass("active"),o.hasClass("active")&&setTimeout(()=>t("#tourSearch").focus(),50)});let a;t("#tourSearch").off("input").on("input",function(){const e=t(this).val().toLowerCase();clearTimeout(a),a=setTimeout(()=>{if(!e)return W($);e.length>=2&&W($.filter(o=>o.tour.toLowerCase().includes(e)||o.price.toString().includes(e)))},200)}),t(document).off("click.tour").on("click.tour",".tour-row",function(e){e.stopPropagation(),S=$[t(this).data("index")],S&&(t("#tourDisplay .tour-text").text(S.tour),t("#tipoTour").val(S.tour),t("#precioUnitario").val(S.price),t("#tourDropdown, #tourDisplay").removeClass("active"),t(".tour-row").removeClass("selected"),t(this).addClass("selected"),setTimeout(()=>{K("#precioUnitario"),ma(),_(),R()},50))}),t(document).on("click",e=>{t(e.target).closest(".tour-selector").length||t("#tourDropdown, #tourDisplay").removeClass("active")}),Ea(),Va()}function W(a){if(!a.length)return t("#tourTableBody").html('<tr><td colspan="4" style="text-align:center;color:#666;">Sin tours</td></tr>');const e=document.createDocumentFragment();a.forEach((s,c)=>{const l=document.createElement("tr");l.className="tour-row",l.dataset.index=$.indexOf(s),l.innerHTML=`<td class="tour-num">${c+1}</td><td class="tour-name">${s.tour}</td><td class="tour-price">S/ ${s.price}</td><td class="tour-pts">${s.pts} pts</td>`,e.appendChild(l)});const o=document.getElementById("tourTableBody");o.innerHTML="",o.appendChild(e)}function Ea(){if(!$.length)return t("#pointsGrid").html('<p style="text-align:center;color:#666;">Sin datos</p>');const a=[...$].sort((e,o)=>o.pts-e.pts);t("#pointsGrid").html(a.map(e=>`<div class="point-item"><span class="service-name">${e.tour}</span><span class="point-value">${e.pts}</span></div>`).join(""))}function Va(){if(!$.length)return t("#pricesGrid").html('<p style="text-align:center;color:#666;">Sin datos</p>');t("#pricesGrid").html($.map(a=>`<div class="price-item"><span class="service-name">${a.tour}</span><span class="service-price">S/ ${a.price.toFixed(2)}</span></div>`).join(""))}function Y(){S=null,t("#formularioVenta input, #formularioVenta select").prop("disabled",!1),t("#formularioVenta").removeClass("view-only edit-mode"),t(".btn-save").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),t(".btn-clear-view, .btn-cancel-edit").remove(),t("#formularioVenta")[0].reset(),t("#cantidadPax").val(1),t("#fechaTour").val(new Date().toISOString().split("T")[0]),t("#vistaPreviaLaPuntos").text("0"),t("#tourDisplay .tour-text").text("🔍 Seleccionar tour..."),t(".tour-row").removeClass("selected"),t("#importeTotal, #ganancia").prop("disabled",!0)}function ga(a,e=!1){Y(),S=$.find(o=>o.tour===a.tipoTour||a.tipoTour.includes(o.tour.split(" ")[1])),S?(t("#tourDisplay .tour-text").text(S.tour),t("#tipoTour").val(S.tour),t(`.tour-row[data-tour*='"nt":${S.nt}']`).addClass("selected")):(t("#tourDisplay .tour-text").text(a.tipoTour||"🔍 Seleccionar..."),t("#tipoTour").val(a.tipoTour||"")),Object.entries(a).forEach(([o,s])=>{const c=t(`#${o}`);c.length&&(o==="fechaTour"&&s?.toDate?c.val(s.toDate().toISOString().split("T")[0]):c.val(s||""))}),t("#vtJulio").prop("checked",a.esVentaJulio||!1),t("#vtSonia").prop("checked",a.esVentaSonia||!1),t("#vtExterna").prop("checked",a.esVentaExterna||!1),_(),R(),e?(t("#formularioVenta input, #formularioVenta select, .tour-display").prop("disabled",!0),t(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),t("#formularioVenta").addClass("view-only"),t(".btn-clear-view").length||t(".form-actions").prepend('<button type="button" class="btn-clear-view" style="background:#6c757d;color:#fff;border:none;padding:10px 20px;border-radius:5px;margin-right:10px"><i class="fas fa-times"></i> Limpiar Vista</button>')):(t("#formularioVenta input, #formularioVenta select").prop("disabled",!1),t(".tour-display").prop("disabled",!1),t("#formularioVenta").addClass("edit-mode"),t(".btn-cancel-edit").length||t(".form-actions").prepend('<button type="button" class="btn-cancel-edit" style="background:#dc3545;color:#fff;border:none;padding:10px 20px;border-radius:5px;margin-right:10px"><i class="fas fa-times"></i> Cancelar Edición</button>'))}async function ha(){try{const a=C("empleadosSmile");a&&(h.splice(0,h.length,...a),N());const o=(await V(k(P,"smiles"))).docs.filter(s=>s.data().participa==="si").map(s=>({id:s.id,...s.data()}));h.splice(0,h.length,...o),x("empleadosSmile",h,300),await I(),N()}catch(a){console.error("Error empleados:",a),t("#workersGrid").html('<div class="error-workers"><i class="fas fa-exclamation-triangle"></i>Error</div>')}}t(document).on("change","#mostrarn",function(){Ha(parseInt(t(this).val())),j(1),D(t("#filterEmployee").val())});t(document).on("change","#monthSelector",function(){La(t(this).val()),j(1),Promise.all([I(),aa()]).then(()=>{N(),D(),O(),Z()})});t(document).on("change","#filterEmployee",()=>{j(1),D(t("#filterEmployee").val())});t(document).on("click","#todayFilter",()=>{j(1),D(t("#filterEmployee").val(),!0)});window.cambiarPagina=a=>{j(a),D(t("#filterEmployee").val())};window.verDetalleVenta=a=>{const e=w.find(o=>o.id===a);if(!e)return v("Venta no encontrada","error");ga(e,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),v("Datos cargados","info")};window.editarVenta=a=>{const e=w.find(o=>o.id===a);if(!e)return v("Venta no encontrada","error");ga(e,!1),t(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",a),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),v("Datos cargados para edición","info")};window.eliminarVenta=a=>{const e=w.find(o=>o.id===a);if(!e)return v("Venta no encontrada","error");confirm(`¿Eliminar venta de "${e.nombreCliente}"?

Esta acción NO se puede deshacer.`)&&confirm(`⚠️ CONFIRMACIÓN FINAL

Se eliminará:
• ${e.nombreCliente}
• ${e.tipoTour}
• S/ ${e.importeTotal}

¿CONFIRMAS?`)&&ka(a)};async function ka(a){try{v("Eliminando...","info");const e=w.find(i=>i.id===a),o=(()=>{const i=e?.fechaTour;if(!i)return g;if(typeof i=="string"){const[f,b]=i.split("-");return`${f}-${b}`}const p=i.toDate();return`${p.getFullYear()}-${String(p.getMonth()+1).padStart(2,"0")}`})(),[s,c]=g.split("-").map(Number),l=(()=>{const i=new Date(s,c-2,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`})();await ya(B(P,"registrosdb",a)),localStorage.removeItem(`empleadosPuntos_${o}`),localStorage.removeItem(`resumenMes_${o}`),o===l&&localStorage.removeItem(`ganadorMes_${l}`),Object.keys(localStorage).filter(i=>i.startsWith("vendedor_")).forEach(i=>{try{JSON.parse(localStorage.getItem(i))?.idVenta===a&&localStorage.removeItem(i)}catch{}});const r=w.findIndex(i=>i.id===a);r>-1&&w.splice(r,1),o===g&&(await I(),O(),N()),D(),o===l&&await Z(),t(".btn-save").attr("data-edit-id")===a&&Y(),v("¡Venta eliminada!","success")}catch(e){console.error("Error eliminando:",e),v("Error al eliminar","error")}}function Ma(){const a=h.map(e=>`<option value="${e.usuario}">${e.nombre}</option>`).join("");t("#filterEmployee").html(`<option value="">Todos los vendedores</option>${a}`)}async function aa(){try{const a=await V(k(P,"registrosdb"));w.splice(0,w.length,...a.docs.map(e=>({id:e.id,...e.data()}))),w.sort((e,o)=>{const s=e.fechaTour?.toDate?e.fechaTour.toDate():new Date(e.fechaTour||"1970");return(o.fechaTour?.toDate?o.fechaTour.toDate():new Date(o.fechaTour||"1970"))-s}),D()}catch(a){console.error("Error ventas:",a),t("#salesTableBody").html('<tr><td colspan="11" class="error-cell"><i class="fas fa-exclamation-triangle"></i>Error</td></tr>')}}function D(a="",e=!1){const[o,s]=g.split("-").map(Number),c=new Date,l=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`;let r=w.filter(n=>{const u=n.fechaTour;if(!u)return!1;if(u.toDate){const m=u.toDate();return m.getFullYear()===o&&m.getMonth()+1===s}if(typeof u=="string"){const[m,d]=u.split("-").map(Number);return m===o&&d===s}return!1});a&&(r=r.filter(n=>n.vendedor===a)),e&&(r=r.filter(n=>{const u=n.fechaTour;if(!u)return!1;if(typeof u=="string")return u===l;if(u.toDate){const m=u.toDate();return`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}-${String(m.getDate()).padStart(2,"0")}`===l}return!1}));const i=Math.ceil(r.length/L),p=(E-1)*L,b=r.slice(p,p+L).map(n=>{const m=n.vendedor===F?.displayName?`<button class="btn-view" onclick="verDetalleVenta('${n.id}')"><i class="fas fa-eye"></i></button>
         <button class="btn-edit" onclick="editarVenta('${n.id}')"><i class="fas fa-edit"></i></button>
         <button class="btn-delete" onclick="eliminarVenta('${n.id}')"><i class="fas fa-trash"></i></button>`:`<button class="btn-view" onclick="verDetalleVenta('${n.id}')"><i class="fas fa-eye"></i></button>`,d=Fa(n.fechaTour),y=`${$a(n.nombreCliente)}${n.numeroHabitacion?` <small>(${n.numeroHabitacion})</small>`:""}`,T=h.find(ta=>ta.usuario===n.vendedor),A=Na(n.estadoPago);return`
      <tr>
        <td>${d}</td>
        <td class="user-cell">
          <img src="${T?.imagen||"/smile.png"}" class="avatar-small">
          <strong>${X(n.vendedor)}</strong>
        </td>
        <td><span class="tour-badge">${n.tipoTour}</span></td>
        <td><span class="pax-badge"><i class="fas fa-users"></i> ${n.cantidadPax}</span></td>
        <td>${y}</td>
        <td><strong class="price">S/ ${(n.importeTotal||0).toFixed(2)}</strong></td>
        <td>S/ ${(n.precioUnitario||0).toFixed(2)}</td>
        <td><span class="status-badge ${A.cls}">
          <i class="fas fa-${A.icn}"></i> ${A.txt}
        </span></td>
        <td>S/ ${(n.ganancia||0).toFixed(2)}</td>
        <td>${n.esVentaJulio?"Julio":n.esVentaSonia?"Sonia":n.esVentaExterna?"Otro":X(n.vendedor)}</td>
        <td><span class="points-badge"><i class="fas fa-star"></i> ${n.puntos||0}</span></td>
        <td><div class="action-buttons">${m}</div></td>
      </tr>
    `}).join("");t("#salesTableBody").html(b||'<tr><td colspan="11" class="empty-cell"><i class="fas fa-inbox"></i>No hay ventas</td></tr>'),Aa(i)}function Fa(a){if(!a)return"Sin fecha";if(a?.toDate)return Sa(a);if(typeof a=="string"){const[e,o,s]=a.split("-");return`${s}/${o}/${e}`}return"Sin fecha"}function Na(a){return{pagado:{cls:"paid",icn:"check-circle",txt:"PAGADO"},cobrado:{cls:"paid",icn:"check-circle",txt:"PAGADO"},cobrar:{cls:"pending",icn:"clock",txt:"DEUDA"}}[a]||{cls:"pending",icn:"clock",txt:"DEUDA"}}function Aa(a){if(a<=1)return t("#paginationContainer").html("");let e='<div class="pagination">';E>1&&(e+=`<button class="page-btn" onclick="cambiarPagina(${E-1})"><i class="fas fa-chevron-left"></i></button>`);for(let o=1;o<=a;o++)e+=`<button class="page-btn ${o===E?"active":""}" onclick="cambiarPagina(${o})">${o}</button>`;E<a&&(e+=`<button class="page-btn" onclick="cambiarPagina(${E+1})"><i class="fas fa-chevron-right"></i></button>`),e+="</div>",t("#paginationContainer").html(e)}t(document).on("click",".tab-btn",function(){const a=t(this).data("tab");ea(this,"active"),ea(`#${a}-tab`,"active")});function Ia(){return`
    <section class="info-section">
      <div class="info-tabs">
        ${["points:star:Puntos","rules:list-ul:Reglas","prices:money-bill-wave:Precios"].map((a,e)=>{const[o,s,c]=a.split(":");return`<button class="tab-btn ${e===0?"active":""}" data-tab="${o}">
              <i class="fas fa-${s}"></i>${c}
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
          ${["Los precios NO incluyen tasa turística","Buggie/Bodegas y City Tour: Mayor puntaje con buggie de Sonia o camioneta","Reclamos anulan puntos. Comentario positivo = +10pts. Negativo = -10pts","Anulación o devolución = Sin puntos","Registrar datos completos el mismo día para validar puntos","Etiqueta en redes = +5pts. Comentario = +5pts (máx 10 por cliente)"].map((a,e)=>`
            <div class="rule-item ${e===2||e===5?"bonus":""}">
              <span class="rule-number">${e+1}</span>
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
  `}const q={empleados:300,tours:300,ventas:180,notas:600},J=a=>localStorage.setItem(`${a}_timestamp`,Date.now()),z=(a,e)=>{const o=localStorage.getItem(`${a}_timestamp`);return!o||(Date.now()-+o)/1e3>e},H=(a,e)=>{const o=a.find("i");e?(o.attr("class","fas fa-spinner fa-spin"),a.prop("disabled",!0)):(o.attr("class","fa-solid fa-rotate-right"),a.prop("disabled",!1))};function Oa(){return{empleados:z("empleadosSmile",q.empleados),tours:z("toursSmile",q.tours),ventas:z("ventasSmile",q.ventas),notas:z("notasSmile",q.notas)}}async function _a(){Q("empleadosSmile"),await ha(),J("empleadosSmile")}async function ja(){Q("toursSmile"),await va(),J("toursSmile")}async function Ga(){await aa(),J("ventasSmile")}async function qa(){Q("notasSmile"),await fa(),J("notasSmile")}async function za(){const a=t(".wifresh");H(a,!0),v("🔄 Revisando cambios","info");const e=Oa(),o=[];if(e.empleados&&o.push(_a()),e.tours&&o.push(ja()),e.ventas&&o.push(Ga()),e.notas&&o.push(qa()),!o.length)return H(a,!1),v("✅ Todo al día","success");v(`🔄 Aplicando ${o.length} actualizaciones`,"info");try{await Promise.all(o),(e.ventas||e.empleados)&&(await I(),O()),e.empleados&&N(),e.ventas&&D(),e.tours&&M(),H(a,!1),v("✅ Datos actualizados","success")}catch(s){console.error("wifresh error",s),H(a,!1),v("❌ Falló actualización","error")}}t(document).on("click",".bt_cargar",()=>{["empleadosSmile","toursSmile","ventasSmile","notasSmile","empleadosPuntos_","topSmiles"].forEach(a=>{Object.keys(localStorage).forEach(e=>e.startsWith(a)&&localStorage.removeItem(e))}),ua("✅ Cache limpiado"),setTimeout(()=>location.reload(),600)});t(document).on("click",".wifresh",a=>{a.preventDefault(),za()});let F=null,g="2025-09",E=1,L=5,w=[],h=[];const Ha=a=>{L=a},j=a=>{E=a},La=a=>{g=a};wa(pa,async a=>{if(!a)return window.location.href="/";F=a;try{const e=C("wiSmile");if(e)return ia(e),oa(P,F);const s=(await V(ca(k(P,"smiles"),da("usuario","==",a.displayName)))).docs[0].data();x("wiSmile",s,450),ia(s),oa(P,F)}catch(e){console.error(e)}});t(document).on("click",".bt_salir",async()=>{await Ta(pa),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}});async function ia(a){ua(`Bienvenido ${a.nombre}!`),t(".app").html(`
    <header class="top-header">
      <div class="header-container miwp">
        <div class="header-left">
          <h1 class="main-title"><i class="fas fa-trophy"></i>RETO DEL MES</h1>
          <select id="monthSelector" class="month-selector">${Ba()}</select>
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
              ${["Julio","Sonia","Otros"].map((e,o)=>`<label for="vt${e}"><input type="checkbox" id="vt${e}"/>${e}</label>`).join("")}
              <button class="btn-add" id="addNewSale"><i class="fas fa-plus"></i> Agregar</button>
            </div>
          </div>
          ${xa()}
        </section>

        <section class="competition-panel">
          <div class="panel-header">
            <h2><i class="fas fa-fire"></i> Competencia del Mes</h2>
            <span class="subtitle">¡Quien venda más gana!</span>
          </div>
          <ul class="descripcion_com"></ul>
          <div class="workers-grid" id="workersGrid"><div class="loading-workers"><i class="fas fa-spinner fa-spin"></i>Cargando empleados...</div></div>
          <div class="last-winner" id="lastWinner"><div class="loading-workers"><i class="fas fa-spinner fa-spin"></i>Cargando ganador...</div></div>
          ${Da()}
        </section>
      </div>

      <section class="sales-table-section">
        <div class="table-header">
          <h2><i class="fas fa-clipboard-list"></i> Registro de Ventas</h2>
          <div class="table-filters">
            <select id="mostrarn" class="filter-select">${[5,7,10,15].map(e=>`<option value="${e}">Mostrar ${e} ventas</option>`).join("")}</select>
            <select id="filterEmployee" class="filter-select"><option value="">Todos los vendedores</option></select>
            <button class="filter-btn" id="todayFilter"><i class="fas fa-calendar-day"></i> Hoy</button>
          </div>
        </div>
        <div class="table-container">
          <table class="sales-table" id="salesTable">
            <thead><tr>${["Fecha:calendar","Usuario:user","Tipo Tour:route","PAX:users","Nombre:user-tag","M. Total:calculator","M. Individual:dollar-sign","Pagado:credit-card","Ganancia:hand-holding-usd","Vendedor:user","Puntos:star","Acciones:cogs"].map(e=>`<th><i class="fas fa-${e.split(":")[1]}"></i> ${e.split(":")[0]}</th>`).join("")}</tr></thead>
            <tbody id="salesTableBody"><tr><td colspan="12" class="loading-cell"><i class="fas fa-spinner fa-spin"></i> Cargando ventas...</td></tr></tbody>
          </table>
        </div>
        <div class="pagination-container" id="paginationContainer"></div>
      </section>
      ${Ia()}
    </main>
    <div id="notifications-container"></div>
    <div id="modal-container"></div>
    <footer class='foo hwb txc'><p>Creado con<i class='wicon wi-corazon'></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class='wty'></span><span class='abw tm11042025'>| Acerca del app | Actualizado</span></p></footer>
  `),t("#monthSelector").val(g);try{await Promise.all([ha(),aa(),Z(),va(),fa()]),Ma(),M(),O()}catch(e){console.error("ErrorIn:",e)}}function Ba(){const a=new Date,e=a.getFullYear(),o=a.getMonth(),s=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];return g=`${e}-${String(o+1).padStart(2,"0")}`,t.map(new Array(7),(c,l)=>{const r=l-3,i=o+r,p=e+Math.floor(i/12),f=(i%12+12)%12;return`<option value="${`${p}-${String(f+1).padStart(2,"0")}`}"${r===0?" selected":""}>${s[f]} ${p}</option>`}).join("")}
