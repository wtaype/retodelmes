import{t as y,b as x,c as C,a as g,l as D,$ as t,v as U,g as da,d as I,j as X,i as Q,N as d,x as L,q as Z,e as aa,y as ua,C as W,z as pa,A as Y,M as ta,B as J,D as fa,E as ma,F as va,h as ea}from"./widev-Bc5hZygA.js";function k(){const a=`empleadosPuntos_${$}`,e=y(a);e?.length>0&&u.length===0&&u.push(...e);const o=u.map((s,n)=>{const r=n+1,l=r===1?"champion":r===2?"runner-up":"",i=r===1?"crown":r===2?"medal":"user";return`
      <div class="worker-card ${l}" data-employee="${s.usuario}">
        <div class="rank-badge"><i class="fas fa-${i}"></i>#${r}</div>
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
    `}).join("");t("#workersGrid").html(o)}async function A(){try{const a=`empleadosPuntos_${$}`,e=y(a);if(e?.length>0){console.log(`✅ ${e.length} empleados desde cache`),u.splice(0,u.length,...e);return}if(!u.length)return console.warn("⚠️ Sin empleados");console.log("🔄 Calculando puntos...");const s=(await x(C(g,"registrosdb"))).docs.filter(n=>n.data().fechaTour?.startsWith($));u.forEach(n=>{const r=s.filter(l=>l.data().vendedor===n.usuario);n.totalPuntos=r.reduce((l,i)=>l+(i.data().puntos||0),0),n.totalVentas=r.reduce((l,i)=>l+(i.data().qventa||0),0)}),u.sort((n,r)=>r.totalPuntos-n.totalPuntos),D(a,u,30),console.log(`✅ ${u.length} empleados guardados en cache`)}catch(a){console.error("❌ Error:",a)}}async function oa(){try{console.log("🔄 Cargando notas...");const a=y("notasSmile");if(a?.length>0){console.log(`✅ ${a.length} notas desde cache`),O(a);return}const e=await x(C(g,"notas"));if(e.empty){console.log("📭 No hay notas"),O([]);return}const o=e.docs.map(s=>({id:s.id,...s.data()}));D("notasSmile",o,600),console.log(`✅ ${o.length} notas cargadas`),O(o)}catch(a){console.error("❌ Error notas:",a),O([])}}function O(a){const e=a.length>0?`
    ${a.map(o=>`<li>${o.nota}</li>`).join("")}
    <div style="font-size:var(--fz_s2);padding:.5vh 0">
      <i class="fas fa-sync"></i> Actualizado: ${U()}
    </div>
  `:`<div style="color:#666;text-align:center;padding:20px;font-style:italic">
    <i class="fas fa-info-circle"></i> No hay noticias
  </div>`;t(".descripcion_com").html(e)}function N(){const a=b.filter(c=>c.fechaTour?.startsWith($)),e=U("input").split("T")[0],o=a.filter(c=>c.fechaTour===e),s=a.reduce((c,m)=>c+(m.qventa||0),0),n=a.reduce((c,m)=>c+(m.puntos||0),0),r=o.reduce((c,m)=>c+(m.qventa||0),0);t("#totalTours").text(s),t("#totalPuntos").text(n),t("#toursHoy").text(r);const i=[Math.min(r/5*100,100),Math.min(s/50*100,100),Math.min(n/2500*100,100),100];t(".summary-stat").each((c,m)=>{const v=i[c]/100*360;t(m).css({"--progress":`${v}deg`,"--width":`${i[c]}%`})})}async function sa(){try{const a=ha($),e=a.replace("-",""),o=await da(I(g,"ganadores",e));if(o.exists()){K(o.data());return}const s=await x(C(g,"registrosdb")),n={};s.docs.forEach(P=>{const h=P.data();h.fechaTour?.startsWith(a)&&(n[h.vendedor]||(n[h.vendedor]={puntos:0,ventas:0}),n[h.vendedor].puntos+=h.puntos||0,n[h.vendedor].ventas+=h.qventa||0)});const r=Object.entries(n);if(!r.length){t("#lastWinner").html(`
        <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
        <div class="no-winner"><i class="fas fa-question-circle"></i><span>No hay datos</span></div>
      `);return}r.sort((P,h)=>h[1].puntos-P[1].puntos);const[l,i]=r[0],[c,m]=a.split("-"),v=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],w={ganador:l,puntosGanados:i.puntos,totalVentas:i.ventas,mes:v[parseInt(m)-1],year:c,mesCompleto:a,fechaRegistro:X()};await Q(I(g,"ganadores",e),w),K(w)}catch(a){console.error("Error ganador:",a),t("#lastWinner").html(`
      <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
      <div class="error-winner"><i class="fas fa-exclamation-triangle"></i><span>Error</span></div>
    `)}}function ha(a){const[e,o]=a.split("-"),s=new Date(parseInt(e),parseInt(o)-2);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}function K(a){const e=u.find(o=>o.usuario===a.ganador||o.nombre===a.ganador);t("#lastWinner").html(`
    <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
    <div class="winner-info">
      <img src="${e?.imagen||"/smile.png"}" alt="${e?.nombre||a.ganador}">
      <div class="winner-details">
        <h4>${e?.nombre||a.ganador}</h4>
        <p>${a.mes} ${a.year}</p>
        <span class="winner-points">${a.puntosGanados} puntos</span>
        <span class="winner-sales">${a.totalVentas} tours</span>
      </div>
      <div class="winner-achievement"><i class="fas fa-crown"></i><span>¡Campeón!</span></div>
    </div>
  `)}let f=[],p=null;t(document).on("click",".btn-save",async a=>{if(a.preventDefault(),!t(".btn-save").prop("disabled"))try{if(!p)return d("⚠️ Selecciona un tour primero","error"),t("#tourDisplay").focus();const e=t(".btn-save"),o=e.html();e.prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Guardando...');const s=e.attr("data-edit-id"),n=parseInt(t("#cantidadPax").val())||1,r=t("#vtJulio, #vtSonia, #vtExterna").is(":checked"),l={tipoTour:p.tour,registroEn:t("#registroEn").val(),nombreCliente:t("#nombreCliente").val(),numeroHabitacion:t("#numeroHabitacion").val(),tipoDocumento:t("#tipoDocumento").val(),numeroDocumento:t("#numeroDocumento").val(),cantidadPax:n,precioUnitario:parseFloat(t("#precioUnitario").val())||0,metodoPago:t("#metodoPago").val(),importeTotal:parseFloat(t("#importeTotal").val())||0,ganancia:parseFloat(t("#ganancia").val())||0,horaSalida:t("#horaSalida").val(),Operador:t("#Operador").val(),PagoOperador:parseFloat(t("#PagoOperador").val())||0,Comentario:t("#Comentario").val(),fechaTour:t("#fechaTour").val(),estadoPago:t("#estadoPago").val(),vendedor:E.displayName,puntos:r?0:p.pts*n,email:E.email,qventa:1,fechaRegistro:X(),esVentaJulio:!!t("#vtJulio").prop("checked"),esVentaSonia:!!t("#vtSonia").prop("checked"),esVentaExterna:!!t("#vtExterna").prop("checked")},i=[[p,"#tourDisplay","tour"],[l.nombreCliente,"#nombreCliente","Cliente"],[l.horaSalida,"#horaSalida","Hora"],[l.fechaTour,"#fechaTour","Fecha"],[l.Operador,"#Operador","Operador"],[l.numeroDocumento,"#numeroDocumento","Documento"],[l.metodoPago,"#metodoPago","Método de pago"]];t(".faltaValor, .okValor").removeClass("faltaValor okValor");const c=i.filter(([v,w])=>{const P=v&&v.toString().trim();return t(w).addClass(P?"okValor":"faltaValor"),!P}).map(([,,v])=>v);if(c.length)return e.prop("disabled",!1).html(o),d(`⚠️ Completa: ${c.join(", ")}`,"error"),t(".faltaValor").first().focus();const m=s||`venta_${Date.now()}`;if(l.idVenta=m,await Q(I(g,"registrosdb",m),l),D(`vendedor_${E.displayName}`,l,450),s){const v=b.findIndex(w=>w.id===s);v!==-1&&(b[v]={id:s,...l}),d("¡Venta actualizada!","success")}else d("¡Venta registrada!","success");t(".faltaValor, .okValor").removeClass("faltaValor okValor"),H(),await q(),await A(),k(),N()}catch(e){console.error("Error guardando:",e),d("Error al guardar. Inténtalo nuevamente.","error"),t(".btn-save").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Venta')}});t(document).on("input change","#formularioVenta input, #formularioVenta select",function(){t(this).toggleClass("okValor faltaValor",!!t(this).val()?.toString().trim())});t(document).on("click",".tour-row",()=>t("#tourDisplay").removeClass("faltaValor").addClass("okValor"));t(document).on("change","#vtJulio, #vtSonia, #vtExterna",G);t(document).on("input","#cantidadPax, #precioUnitario",()=>{ia(),j(),G()});t(document).on("change","#estadoPago",j);t(document).on("input","#importeTotal, #PagoOperador",j);t(document).on("click",".btn-clear-view, .btn-cancel-edit",()=>{H(),d("Vista limpiada","info")});function ia(){const a=parseInt(t("#cantidadPax").val())||1,e=parseFloat(t("#precioUnitario").val())||0;t("#importeTotal").val((e*a).toFixed(2)),R("#importeTotal")}function j(){const a=t("#estadoPago").val(),e=parseFloat(t("#importeTotal").val())||0,o=parseFloat(t("#PagoOperador").val())||0,s=a==="pagado";t("#ganancia").val((s?e:e-o).toFixed(2)),t("#PagoOperador").prop("disabled",s).attr("placeholder",s?"Servicio nuestro":"0.00").val(s?"0":t("#PagoOperador").val()),R("#ganancia")}function G(){const a=parseInt(t("#cantidadPax").val())||1,e=p?.pts||0,o=t("#vtJulio, #vtSonia, #vtExterna").is(":checked");t("#vistaPreviaLaPuntos").text(o?0:e*a)}function R(a){t(a).addClass("field-updated"),setTimeout(()=>t(a).removeClass("field-updated"),1e3)}function ga(){return`
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
          <input type="number" id="PagoOperador" step="0.01" placeholder="0.00" required disabled>
        </div>

        <div class="form-field">
          <label><i class="fas fa-money-check-alt"></i>Estado del Pago:</label>
          <select id="estadoPago">
            <option id="ep01" value="pagado">Pagado (Tour con nosotros)</option>
            <option id="ep03" value="cobrar">Yo pase al operador (->)</option>
            <option id="ep02" value="pagado">Nos ha pasado a nosotros (<-)</option>
            <option id="ep04" value="cobrado">Deuda Arreglada (<->)</option>
          </select>
        </div>

        <div class="form-field">
          <label title="Calculo: importe total - comision del operador"><i class="fas fa-handshake"></i>Ganancia Estimada*</label>
          <input type="number" id="ganancia" step="0.01" placeholder="S/ 0.00" disabled>
        </div>

        <div class="form-field">
          <label><i class="fas fa-calendar-day"></i>Fecha *</label>
          <input type="date" id="fechaTour" required>
        </div>

        <div class="form-field">
          <label><i class="fa-solid fa-comment"></i>Comentario/Anotes (Opcional) *</label>
          <input type="text" id="Comentario" placeholder="Escribe notas de tu venta(opcional)" required>
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
  `}async function na(){try{console.log("🔄 Cargando tours...");const a=y("toursSmile");if(a?.length>0){f=a.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),console.log(`✅ ${f.length} tours desde cache`),typeof V=="function"&&V();return}const e=await x(Z(C(g,"listatours"),aa("activo","==",!0)));if(e.empty){console.log("❌ No hay tours"),f=[];return}const o=e.docs.map(s=>({id:s.id,...s.data()}));f=o.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),D("toursSmile",o,300),console.log(`✅ ${f.length} tours desde Firebase`),typeof V=="function"&&V()}catch(a){console.error("❌ Error tours:",a),d("Error cargando tours","error")}}function V(){_(f),t("#tourDisplay").off("click").on("click",function(e){e.stopPropagation();const o=t("#tourDropdown");o.toggleClass("active"),t(this).toggleClass("active"),o.hasClass("active")&&setTimeout(()=>t("#tourSearch").focus(),50)});let a;t("#tourSearch").off("input").on("input",function(){const e=t(this).val().toLowerCase();clearTimeout(a),a=setTimeout(()=>{if(!e)return _(f);e.length>=2&&_(f.filter(o=>o.tour.toLowerCase().includes(e)||o.price.toString().includes(e)))},200)}),t(document).off("click.tour").on("click.tour",".tour-row",function(e){e.stopPropagation(),p=f[t(this).data("index")],p&&(t("#tourDisplay .tour-text").text(p.tour),t("#tipoTour").val(p.tour),t("#precioUnitario").val(p.price),t("#tourDropdown, #tourDisplay").removeClass("active"),t(".tour-row").removeClass("selected"),t(this).addClass("selected"),setTimeout(()=>{R("#precioUnitario"),ia(),G()},50))}),t(document).on("click",e=>{t(e.target).closest(".tour-selector").length||t("#tourDropdown, #tourDisplay").removeClass("active")}),ba(),ya()}function _(a){if(!a.length)return t("#tourTableBody").html('<tr><td colspan="4" style="text-align:center;color:#666;">Sin tours</td></tr>');const e=document.createDocumentFragment();a.forEach((s,n)=>{const r=document.createElement("tr");r.className="tour-row",r.dataset.index=f.indexOf(s),r.innerHTML=`<td class="tour-num">${n+1}</td><td class="tour-name">${s.tour}</td><td class="tour-price">S/ ${s.price}</td><td class="tour-pts">${s.pts} pts</td>`,e.appendChild(r)});const o=document.getElementById("tourTableBody");o.innerHTML="",o.appendChild(e)}function ba(){if(!f.length)return t("#pointsGrid").html('<p style="text-align:center;color:#666;">Sin datos</p>');const a=[...f].sort((e,o)=>o.pts-e.pts);t("#pointsGrid").html(a.map(e=>`
    <div class="point-item">
      <span class="service-name">${e.tour}</span>
      <span class="point-value">${e.pts}</span>
    </div>
  `).join(""))}function ya(){if(!f.length)return t("#pricesGrid").html('<p style="text-align:center;color:#666;">Sin datos</p>');t("#pricesGrid").html(f.map(a=>`
    <div class="price-item">
      <span class="service-name">${a.tour}</span>
      <span class="service-price">S/ ${a.price.toFixed(2)}</span>
    </div>
  `).join(""))}function H(){const a=L("fecha");p=null,t("#formularioVenta input, #formularioVenta select").prop("disabled",!1),t("#formularioVenta").removeClass("view-only edit-mode"),t(".btn-save").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),t(".btn-clear-view, .btn-cancel-edit").remove(),t("#formularioVenta")[0].reset(),t("#cantidadPax").val(1),t("#fechaTour").val(a),t("#vistaPreviaLaPuntos").text("0"),t("#tourDisplay .tour-text").text("🔍 Seleccionar tour..."),t(".tour-row").removeClass("selected"),t("#importeTotal, #ganancia").prop("disabled",!0)}function ra(a,e=!1){H(),p=f.find(o=>o.tour===a.tipoTour||a.tipoTour.includes(o.tour.split(" ")[1])),p?(t("#tourDisplay .tour-text").text(p.tour),t("#tipoTour").val(p.tour),t(`.tour-row[data-tour*='"nt":${p.nt}']`).addClass("selected")):(t("#tourDisplay .tour-text").text(a.tipoTour||"🔍 Seleccionar..."),t("#tipoTour").val(a.tipoTour||"")),Object.entries(a).forEach(([o,s])=>{const n=t(`#${o}`);n.length&&n.val(s||"")}),t("#vtJulio").prop("checked",a.esVentaJulio||!1),t("#vtSonia").prop("checked",a.esVentaSonia||!1),t("#vtExterna").prop("checked",a.esVentaExterna||!1),j(),G(),e?(t("#formularioVenta input, #formularioVenta select, .tour-display").prop("disabled",!0),t(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),t("#formularioVenta").addClass("view-only"),t(".btn-clear-view").length||t(".form-actions").prepend('<button type="button" class="btn-clear-view" style="background:#6c757d;color:#fff;border:none;padding:10px 20px;border-radius:5px;margin-right:10px"><i class="fas fa-times"></i> Limpiar Vista</button>')):(t("#formularioVenta input, #formularioVenta select").prop("disabled",!1),t(".tour-display").prop("disabled",!1),t("#formularioVenta").addClass("edit-mode"),t(".btn-cancel-edit").length||t(".form-actions").prepend('<button type="button" class="btn-cancel-edit" style="background:#dc3545;color:#fff;border:none;padding:10px 20px;border-radius:5px;margin-right:10px"><i class="fas fa-times"></i> Cancelar Edición</button>'))}async function la(){try{const a=y("empleadosSmile");a&&(u.splice(0,u.length,...a),k());const o=(await x(C(g,"smiles"))).docs.filter(s=>s.data().participa==="si").map(s=>({id:s.id,...s.data()}));u.splice(0,u.length,...o),D("empleadosSmile",u,300),await A(),k()}catch(a){console.error("Error empleados:",a),t("#workersGrid").html('<div class="error-workers"><i class="fas fa-exclamation-triangle"></i>Error</div>')}}t(document).on("change","#mostrarn",function(){Na(parseInt(t(this).val())),M(1),S(t("#filterEmployee").val())});t(document).on("change","#monthSelector",function(){Ma(t(this).val()),M(1),Promise.all([A(),q()]).then(()=>{k(),S(),N(),sa()})});t(document).on("change","#filterEmployee",()=>{M(1),S(t("#filterEmployee").val())});t(document).on("click","#todayFilter",()=>{M(1),S(t("#filterEmployee").val(),!0)});window.cambiarPagina=a=>{M(a),S(t("#filterEmployee").val())};window.verDetalleVenta=a=>{const e=b.find(o=>o.id===a);if(!e)return d("Venta no encontrada","error");ra(e,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),d("Datos cargados","info")};window.editarVenta=a=>{const e=b.find(o=>o.id===a);if(!e)return d("Venta no encontrada","error");ra(e,!1),t(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",a),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),d("Datos cargados para edición","info")};window.eliminarVenta=a=>{const e=b.find(o=>o.id===a);if(!e)return d("Venta no encontrada","error");confirm(`¿Eliminar venta de "${e.nombreCliente}"?

Esta acción NO se puede deshacer.`)&&confirm(`⚠️ CONFIRMACIÓN FINAL

Se eliminará:
• ${e.nombreCliente}
• ${e.tipoTour}
• S/ ${e.importeTotal}

¿CONFIRMAS?`)&&$a(a)};async function $a(a){try{d("Eliminando...","info"),await pa(I(g,"registrosdb",a)),Object.keys(localStorage).filter(o=>o.startsWith("vendedor_")).forEach(o=>{try{JSON.parse(localStorage.getItem(o))?.idVenta===a&&localStorage.removeItem(o)}catch{}});const e=b.findIndex(o=>o.id===a);e!==-1&&b.splice(e,1),await A(),k(),S(),N(),t(".btn-save").attr("data-edit-id")===a&&H(),d("¡Venta eliminada!","success")}catch(e){console.error("Error eliminando:",e),d("Error al eliminar","error")}}function wa(){const a=u.map(e=>`<option value="${e.usuario}">${e.nombre}</option>`).join("");t("#filterEmployee").html(`<option value="">Todos los vendedores</option>${a}`)}async function q(){try{const a=await x(C(g,"registrosdb"));b.splice(0,b.length,...a.docs.map(e=>({id:e.id,...e.data()}))),b.sort((e,o)=>new Date(o.fechaTour||"1970")-new Date(e.fechaTour||"1970")),S()}catch(a){console.error("Error ventas:",a),t("#salesTableBody").html('<tr><td colspan="11" class="error-cell"><i class="fas fa-exclamation-triangle"></i>Error</td></tr>')}}function S(a="",e=!1){let o=b.filter(i=>i.fechaTour?.startsWith($));if(a&&(o=o.filter(i=>i.vendedor===a)),e){const i=U("input").split("T")[0];o=o.filter(c=>c.fechaTour===i)}const s=Math.ceil(o.length/F),n=(T-1)*F,l=o.slice(n,n+F).map(i=>{const m=i.vendedor===E?.displayName?`<button class="btn-view" onclick="verDetalleVenta('${i.id}')"><i class="fas fa-eye"></i></button>
         <button class="btn-edit" onclick="editarVenta('${i.id}')"><i class="fas fa-edit"></i></button>
         <button class="btn-delete" onclick="eliminarVenta('${i.id}')"><i class="fas fa-trash"></i></button>`:`<button class="btn-view" onclick="verDetalleVenta('${i.id}')"><i class="fas fa-eye"></i></button>`,v=Pa(i.fechaTour),w=`${ua(i.nombreCliente)}${i.numeroHabitacion?` <small>(${i.numeroHabitacion})</small>`:""}`,P=u.find(ca=>ca.usuario===i.vendedor),h=Sa(i.estadoPago);return`
      <tr>
        <td>${v}</td>
        <td class="user-cell">
          <img src="${P?.imagen||"/smile.png"}" class="avatar-small">
          <strong>${W(i.vendedor)}</strong>
        </td>
        <td><span class="tour-badge">${i.tipoTour}</span></td>
        <td><span class="pax-badge"><i class="fas fa-users"></i> ${i.cantidadPax}</span></td>
        <td>${w}</td>
        <td><strong class="price">S/ ${(i.importeTotal||0).toFixed(2)}</strong></td>
        <td>S/ ${(i.precioUnitario||0).toFixed(2)}</td>
        <td><span class="status-badge ${h.cls}">
          <i class="fas fa-${h.icn}"></i> ${h.txt}
        </span></td>
        <td>S/ ${(i.ganancia||0).toFixed(2)}</td>
        <td>${i.esVentaJulio?"Julio":i.esVentaSonia?"Sonia":i.esVentaExterna?"Otro":W(i.vendedor)}</td>
        <td><span class="points-badge"><i class="fas fa-star"></i> ${i.puntos||0}</span></td>
        <td><div class="action-buttons">${m}</div></td>
      </tr>
    `}).join("");t("#salesTableBody").html(l||'<tr><td colspan="11" class="empty-cell"><i class="fas fa-inbox"></i>No hay ventas</td></tr>'),Ta(s)}function Pa(a){if(!a)return"Sin fecha";const[e,o,s]=a.split("-");return`${s}/${o}/${e}`}function Sa(a){return{pagado:{cls:"paid",icn:"check-circle",txt:"PAGADO"},cobrado:{cls:"paid",icn:"check-circle",txt:"PAGADO"},cobrar:{cls:"pending",icn:"clock",txt:"DEUDA"}}[a]||{cls:"pending",icn:"clock",txt:"DEUDA"}}function Ta(a){if(a<=1)return t("#paginationContainer").html("");let e='<div class="pagination">';T>1&&(e+=`<button class="page-btn" onclick="cambiarPagina(${T-1})"><i class="fas fa-chevron-left"></i></button>`);for(let o=1;o<=a;o++)e+=`<button class="page-btn ${o===T?"active":""}" onclick="cambiarPagina(${o})">${o}</button>`;T<a&&(e+=`<button class="page-btn" onclick="cambiarPagina(${T+1})"><i class="fas fa-chevron-right"></i></button>`),e+="</div>",t("#paginationContainer").html(e)}t(document).on("click",".tab-btn",function(){const a=t(this).data("tab");Y(this,"active"),Y(`#${a}-tab`,"active")});function xa(){return`
    <section class="info-section">
      <div class="info-tabs">
        ${["points:star:Puntos","rules:list-ul:Reglas","prices:money-bill-wave:Precios"].map((a,e)=>{const[o,s,n]=a.split(":");return`<button class="tab-btn ${e===0?"active":""}" data-tab="${o}">
              <i class="fas fa-${s}"></i>${n}
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
  `}const z=(a,e)=>{const o=a.find("i");e?(o.removeClass().addClass("fas fa-spinner fa-spin"),a.prop("disabled",!0)):(o.removeClass().addClass("fa-solid fa-rotate-right"),a.prop("disabled",!1))};t(document).on("click",".bt_cargar",()=>{const a=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+|toursSmile|notasSmile|empleadosSmile|empleadosPuntos_)$/;Object.keys(localStorage).filter(e=>a.test(e)).forEach(e=>localStorage.removeItem(e)),ta("✅ Cache limpiado"),setTimeout(()=>location.reload(),800)});async function Ca(){try{const a=t(".wifresh");z(a,!0),d("🔄 Verificando actualizaciones...","info");const e=await Va();if(!e.hayActualizaciones){z(a,!1),d("✅ Todo actualizado","success");return}d(`🔄 Aplicando ${e.total} actualizaciones...`,"info");const o=[];e.empleados&&o.push(Ea()),e.tours&&o.push(ka()),e.ventas&&o.push(Da()),e.notas&&o.push(Aa()),await Promise.all(o),await Promise.all([A(),N()]),k(),S(),V(),z(a,!1),d(`✅ ${e.total} actualizaciones aplicadas`,"success")}catch(a){console.error("❌ Error wifresh:",a),z(t(".wifresh"),!1),d("❌ Error en actualización","error")}}async function Va(){const a={empleados:!1,tours:!1,ventas:!0,notas:!1,total:0,hayActualizaciones:!1};try{(!y("empleadosSmile")||B("empleadosSmile",300))&&(a.empleados=!0,a.total++),(!y("toursSmile")||B("toursSmile",300))&&(a.tours=!0,a.total++),a.total++,(!y("notasSmile")||B("notasSmile",600))&&(a.notas=!0,a.total++),a.hayActualizaciones=a.total>0}catch(e){console.error("Error detectando:",e)}return a}function B(a,e){try{const o=localStorage.getItem(`${a}_timestamp`);return o?(Date.now()-parseInt(o))/1e3>e:!0}catch{return!0}}async function Ea(){J("empleadosSmile"),await la()}async function ka(){J("toursSmile"),await na()}async function Da(){await q()}async function Aa(){J("notasSmile"),await oa()}t(document).on("click",".wifresh",a=>{a.preventDefault(),Ca()});let E=null,$="2025-09",T=1,F=5,b=[],u=[];const Na=a=>{F=a},M=a=>{T=a},Ma=a=>{$=a};fa(ea,async a=>{if(!a)return window.location.href="/";E=a;try{const e=y("wiSmile")||await Oa(a);za(e),va(g,E)}catch(e){console.error(e)}});const Oa=async a=>{const o=(await x(Z(C(g,"smiles"),aa("usuario","==",a.displayName)))).docs[0].data();return D("wiSmile",o,450),o};t(document).on("click",".bt_salir",async()=>{await ma(ea),localStorage.clear(),window.location.href="/"});function za(a){ta(`Bienvenido ${a.nombre}!`),t(".app").html(`
    <header class="top-header">
      <div class="header-container miwp">
        <div class="header-left">
          <h1 class="main-title"><i class="fas fa-trophy"></i>RETO DEL MES</h1>
          <select id="monthSelector" class="month-selector">
            ${["09","10","11","12"].map(e=>`<option value="2025-${e}">${["Septiembre","Octubre","Noviembre","Diciembre"][e-9]} 2025</option>`).join("")}
          </select>
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
          ${ga()}
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
          <div class="competition-summary" id="competitionSummary">
            ${["Tours de Hoy:toursHoy","Total Tours:totalTours","Puntos Totales:totalPuntos","Meta del Mes:2500"].map(e=>{const[o,s]=e.split(":");return`<div class="summary-stat"><span class="summary-label">${o}</span><span class="summary-value" id="${s}">${s==="2500"?"2500":"0"}</span></div>`}).join("")}
          </div>
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
      ${xa()}
    </main>
    <div id="notifications-container"></div>
    <div id="modal-container"></div>
    <footer class='foo hwb txc'><p>Creado con<i class='wicon wi-corazon'></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class='wty'></span><span class='abw tm11042025'>| Acerca del app | Actualizado</span></p></footer>
  `),Fa()}async function Fa(){try{$=L(),t("#monthSelector").val($),t("#fechaTour").val(L("fecha")),await Promise.all([la(),q(),sa(),na(),oa()]),wa(),N(),V()}catch(a){console.error("Error init:",a)}}
