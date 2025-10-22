import{t as ta,$ as a,v as oa,x as Y,M as z,N as d,y as sa,d as A,a as v,j as H,i as R,l as T,z as ia,C as na,b as C,c as P,g as ra,A as L,q as B,e as q,h as Z}from"./widev-DHEX-f3z.js";let S=null;ta(Z,async e=>{if(!e)return window.location.href="/";S=e;try{const t=L("wiSmile");if(t)return Q(t);const s=(await C(B(P(v,"smiles"),q("usuario","==",e.displayName)))).docs[0].data();T("wiSmile",s,450),Q(s)}catch(t){console.error(t)}});a(document).on("click",".bt_salir",async()=>{await oa(Z),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(t=>localStorage.removeItem(t))}});a(document).on("click",".tab-btn",function(){const e=a(this).data("tab");Y(this,"active"),Y("#"+e+"-tab","active")});a(document).on("click",".bt_cargar",()=>{const e=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+|toursSmile|notasSmile)$/;Object.keys(localStorage).filter(t=>e.test(t)).forEach(t=>localStorage.removeItem(t)),z("Actualizado"),setTimeout(()=>location.reload(),800)});let D="2025-09",h=1,M=5,b=[],y=[];function Q(e){console.log(e.nombre),z("Bienvenido "+e.nombre+"!"),a(".app").html(`
        <!-- HEADER SUPERIOR -->
        <header class="top-header">
            <div class="header-container miwp">
                <div class="header-left">
                    <h1 class="main-title">
                        <i class="fas fa-trophy"></i>
                        RETO DEL MES
                    </h1>
                    <select id="monthSelector" class="month-selector">
                        <option value="2025-09">Septiembre 2025</option>
                        <option value="2025-10">Octubre 2025</option>
                        <option value="2025-11">Noviembre 2025</option>
                        <option value="2025-12">Diciembre 2025</option>
                    </select>
                </div>
                <div class="header-right">
                    <div class="witemas"></div>
                    <div class="user-section">
                        <div class="user-info">
                            <img src="${e.imagen||"/smile.png"}" alt="${e.nombre}" class="user-avatar">
                            <span class="user-name">${e.nombre}</span>
                        </div>
                        <button class="logout-btn bt_salir">
                            <i class="fas fa-sign-out-alt"></i>
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- CONTENIDO PRINCIPAL -->
        <main class="main-container miwp">
            <div class="dashboard-layout">
                
                <!-- SECCION NUEVA VENTA -->
                <section class="new-sale-panel">
                    <div class="panel-header">
                        <h2><i class="fas fa-plus-circle"></i> Nueva Venta</h2>
                        <div class="bt_add_exportar">
                            <p>Venta por:</p>
                            <label for="vtJulio"><input type="checkbox" id="vtJulio"/>Julio</label>   
                            <label for="vtSonia"><input type="checkbox" id="vtSonia"/>Sonia</label>   
                            <label for="vtExterna"><input type="checkbox" id="vtExterna"/>Otros</label>   
                            <button class="btn-add" id="addNewSale">
                                <i class="fas fa-plus"></i> Agregar
                            </button>
                        </div>
                    </div>

                    ${ha()}
                </section>

                <!-- SECCION COMPETENCIA -->
                <section class="competition-panel">
                    <div class="panel-header">
                        <h2><i class="fas fa-fire"></i> Competencia del Mes</h2>
                        <span class="subtitle">¡Quien venda más gana!</span>
                    </div>

                    <ul class="descripcion_com">
                        <li>¡Buenos días Rubi y Piero! Mi nombre es Wilder Taype, desarrollador de este sitio web. Espero que se encuentren muy bien. Quería agradecerles por registrarse y mantener sus ventas actualizadas. Para hacerles las cosas aún más fáciles, he actualizado la plataforma con mejoras en la búsqueda de tours y otras funcionalidades.</li>
                        <li>Ayer tuvimos una reunión con Clau y, para simplificar el proceso de registro, hemos actualizado 
                        el campo de motivo de viaje para mantener todo al día con SUNAT y trabajar con mayor tranquilidad.</li>
                    </ul>

                    <!-- TRABAJADORES DINÁMICOS -->
                    <div class="workers-grid" id="workersGrid">
                        <div class="loading-workers">
                            <i class="fas fa-spinner fa-spin"></i>
                            Cargando empleados...
                        </div>
                    </div>

                    <!-- ULTIMO GANADOR DEL MES -->
                    <div class="last-winner" id="lastWinner">
                        <div class="loading-workers">
                            <i class="fas fa-spinner fa-spin"></i>
                            Cargando ganador...
                        </div>
                    </div>

                    <!-- RESUMEN COMPETENCIA -->
                    <div class="competition-summary" id="competitionSummary">
                        <div class="summary-stat">
                            <span class="summary-label">Tours de Hoy</span>
                            <span class="summary-value" id="toursHoy">0</span>
                        </div>
                        <div class="summary-stat">
                            <span class="summary-label">Total Tours</span>
                            <span class="summary-value" id="totalTours">0</span>
                        </div>
                        <div class="summary-stat">
                            <span class="summary-label">Puntos Totales</span>
                            <span class="summary-value" id="totalPuntos">0</span>
                        </div>
                        <div class="summary-stat">
                            <span class="summary-label">Meta del Mes</span>
                            <span class="summary-value">2500</span>
                        </div>
                    </div>
                </section>
            </div>

            <!-- TABLA DE VENTAS -->
<section class="sales-table-section">
    <div class="table-header">
        <h2><i class="fas fa-clipboard-list"></i> Registro de Ventas</h2>
        <div class="table-filters">
            <select id="mostrarn" class="filter-select">
                <option value="5">Mostrar 5 ventas</option>
                <option value="7">7 ventas</option>
                <option value="10">10 ventas</option>
                <option value="15">15 ventas</option>
            </select>
            <select id="filterEmployee" class="filter-select">
                <option value="">Todos los vendedores</option>
            </select>
            <button class="filter-btn" id="todayFilter">
                <i class="fas fa-calendar-day"></i> Hoy
            </button>
        </div>
    </div>

    <div class="table-container">
        <table class="sales-table" id="salesTable">
            <thead>
                <tr>
                    <th><i class="fas fa-calendar"></i> Fecha</th>
                    <th><i class="fas fa-user"></i> Usuario</th>
                    <th><i class="fas fa-route"></i> Tipo Tour</th>
                    <th><i class="fas fa-users"></i> PAX</th>
                    <th><i class="fas fa-user-tag"></i> Nombre</th>
                    <th><i class="fas fa-calculator"></i> M. Total</th>
                    <th><i class="fas fa-dollar-sign"></i> M. Individual</th>
                    <th><i class="fas fa-percent"></i> Comisión</th>
                    <th><i class="fas fa-credit-card"></i> Pagado</th>
                    <th><i class="fas fa-hand-holding-usd"></i> Ganancia</th>
                    <th><i class="fas fa-star"></i> Puntos</th>
                    <th><i class="fas fa-cogs"></i> Acciones</th>
                </tr>
            </thead>
            <tbody id="salesTableBody">
                <tr><td colspan="12" class="loading-cell">
                    <i class="fas fa-spinner fa-spin"></i> Cargando ventas...
                </td></tr>
            </tbody>
        </table>
    </div>

    <!-- PAGINACIÓN -->
    <div class="pagination-container" id="paginationContainer">
        <!-- Se llena dinámicamente -->
    </div>
</section>

            ${ga()}
        </main>

        <div id="notifications-container"></div>
        <div id="modal-container"></div>
    `),ca()}async function la(){try{console.log("🔄 Cargando notas admin...");const e=L("notasSmile");if(e?.length>0){console.log(`✅ ${e.length} notas desde cache`),k(e);return}const t=await C(P(v,"notas"));if(t.empty){console.log("📭 No hay notas"),k([]);return}const o=t.docs.map(s=>({id:s.id,...s.data()}));T("notasSmile",o,600),console.log(`✅ ${o.length} notas cargadas`),k(o)}catch(e){console.error("❌ Error cargar notas:",e),k([])}}function k(e){const t=e.length>0?`
        ${e.map(o=>`<li>${o.nota}</li>`).join("")}
        <div style="font-size:var(--fz_s2);padding:.5vh 0">
            <i class="fas fa-sync"></i> Última actualización: ${new Date().toLocaleTimeString("es-ES")}
        </div>
    `:`
        <div style="color:#666;font-style:italic;text-align:center;padding:20px;">
            <i class="fas fa-info-circle"></i> No hay noticias disponibles
        </div>
    `;a(".descripcion_com").html(t)}async function ca(e){try{const t=new Date().toISOString().slice(0,7);D=t,a("#monthSelector").val(t),a("#fechaTour").val(new Date().toLocaleDateString("sv-SE")),await Promise.all([da(),j(),K(),va(),la()]),pa(),F(),x()}catch(t){console.error("Error inicializando dashboard:",t),d("Error cargando datos del dashboard","error")}}async function da(){try{const e=L("empleadosSmile");e&&(y=e,I());const t=B(P(v,"smiles"),q("participa","==","si"));y=(await C(t)).docs.map(s=>({id:s.id,...s.data()})),T("empleadosSmile",y,300),await U(),I()}catch(e){console.error("Error cargando empleados:",e),a("#workersGrid").html(`
            <div class="error-workers">
                <i class="fas fa-exclamation-triangle"></i>
                Error cargando empleados
            </div>
        `)}}async function U(){try{const t=(await C(P(v,"registrosdb"))).docs.filter(o=>{const s=o.data();return s.fechaTour&&s.fechaTour.startsWith(D)});y.forEach(o=>{const s=t.filter(n=>n.data().vendedor===o.usuario);o.totalPuntos=s.reduce((n,r)=>n+(r.data().puntos||0),0),o.totalVentas=s.reduce((n,r)=>n+(r.data().qventa||0),0)}),y.sort((o,s)=>s.totalPuntos-o.totalPuntos)}catch(e){console.error("Error calculando puntos:",e)}}function I(){const e=y.map((t,o)=>{const s=o+1,n=s===1,r=s===2;return`
            <div class="worker-card ${n?"champion":r?"runner-up":""}" data-employee="${t.usuario}">
                <div class="rank-badge">
                    <i class="fas fa-${n?"crown":r?"medal":"user"}"></i>
                    #${s}
                </div>
                <div class="worker-avatar">
                    <img src="${t.imagen||"/smile.png"}" alt="${t.nombre}">
                    <div class="status-online"></div>
                </div>
                <div class="worker-info">
                    <h3>${t.nombre}</h3>
                    <p>${t.descripcion}</p>
                </div>
                <div class="worker-points">
                    <span class="points-number">${t.totalPuntos||0}</span>
                    <span class="points-label">puntos</span>
                </div>
                <div class="worker-stats">
                    <div class="stat">
                        <span class="stat-value">${t.totalVentas||0}</span>
                        <span class="stat-label">Tours Vendidos</span>
                    </div>
                </div>
            </div>
        `}).join("");a("#workersGrid").html(e)}async function j(){try{b=(await C(P(v,"registrosdb"))).docs.map(t=>({id:t.id,...t.data()})),b.sort((t,o)=>{const s=new Date(t.fechaTour||"1970-01-01");return new Date(o.fechaTour||"1970-01-01")-s}),w()}catch(e){console.error("Error cargando ventas:",e),a("#salesTableBody").html(`
            <tr><td colspan="9" class="error-cell">
                <i class="fas fa-exclamation-triangle"></i> Error cargando ventas
            </td></tr>
        `)}}function w(e="",t=!1){let o=[...b];if(o=o.filter(i=>i.fechaTour&&i.fechaTour.startsWith(D)),e&&(o=o.filter(i=>i.vendedor===e)),t){const i=new Date().toISOString().split("T")[0];o=o.filter(O=>O.fechaTour===i)}const s=Math.ceil(o.length/M),n=(h-1)*M,c=o.slice(n,n+M).map(i=>{const u=i.vendedor===S?.displayName?`<button class="btn-view" onclick="verDetalleVenta('${i.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>
               <button class="btn-edit" onclick="editarVenta('${i.id}')" title="Editar"><i class="fas fa-edit"></i></button>
               <button class="btn-delete" onclick="eliminarVenta('${i.id}')" title="Eliminar"><i class="fas fa-trash"></i></button>`:`<button class="btn-view" onclick="verDetalleVenta('${i.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>`,N=new Date(i.fechaTour).toLocaleDateString("es-ES"),E=`${ia(i.nombreCliente)}${i.numeroHabitacion?` <small>(${i.numeroHabitacion}</small>)`:""}`,f=(i.precioUnitario*.1).toFixed(2);return`
            <tr>
                <td>${N}</td>
                <td class="user-cell">
                    <img src="${y.find(p=>p.usuario===i.vendedor)?.imagen||"/smile.png"}" class="avatar-small">
                    <strong>${na(i.vendedor)}</strong>
                </td>
                <td><span class="tour-badge">${i.tipoTour}</span></td>
                <td><span class="pax-badge"><i class="fas fa-users"></i> ${i.cantidadPax}</span></td>
                <td>${E}</td>
                <td><strong class="price">S/ ${(i.importeTotal||0).toFixed(2)}</strong></td>
                <td>S/ ${(i.precioUnitario||0).toFixed(2)}</td>
                <td>S/ ${f}</td>
                <td><span class="status-badge ${i.estadoPago==="pagado"||i.estadoPago==="cobrado"?"paid":"pending"}">
                    <i class="fas fa-${i.estadoPago==="pagado"||i.estadoPago==="cobrado"?"check-circle":"clock"}"></i> 
                    ${i.estadoPago?.toUpperCase()}
                </span></td>
                <td>S/ ${(i.ganancia||0).toFixed(2)}</td>
                <td><span class="points-badge"><i class="fas fa-star"></i> ${i.puntos||0}</span></td>
                <td><div class="action-buttons">${u}</div></td>
            </tr>
        `}).join("");a("#salesTableBody").html(c||'<tr><td colspan="12" class="empty-cell"><i class="fas fa-inbox"></i> No hay ventas para mostrar</td></tr>'),ua(s)}function ua(e){if(e<=1){a("#paginationContainer").html("");return}let t='<div class="pagination">';h>1&&(t+=`<button class="page-btn" onclick="cambiarPagina(${h-1})">
            <i class="fas fa-chevron-left"></i>
        </button>`);for(let o=1;o<=e;o++)o===h?t+=`<button class="page-btn active">${o}</button>`:t+=`<button class="page-btn" onclick="cambiarPagina(${o})">${o}</button>`;h<e&&(t+=`<button class="page-btn" onclick="cambiarPagina(${h+1})">
            <i class="fas fa-chevron-right"></i>
        </button>`),t+="</div>",a("#paginationContainer").html(t)}async function K(){try{const e=fa(D),t=`${e.replace("-","")}`,o=await ra(A(v,"ganadores",t));if(o.exists()){X(o.data());return}const s=await C(P(v,"registrosdb")),n={};s.docs.forEach(f=>{const p=f.data();if(p.fechaTour?.startsWith(e)){const g=p.vendedor;n[g]||(n[g]={puntos:0,ventas:0}),n[g].puntos+=p.puntos||0,n[g].ventas+=p.qventa||0}});const r=Object.entries(n);if(r.length===0){a("#lastWinner").html(`
                <div class="winner-header">
                    <i class="fas fa-trophy"></i>
                    <h3>Ganador del Mes Anterior</h3>
                </div>
                <div class="no-winner">
                    <i class="fas fa-question-circle"></i>
                    <span>No hay datos disponibles</span>
                </div>
            `);return}r.sort((f,p)=>p[1].puntos-f[1].puntos);const[c,i]=r[0],[O,u]=e.split("-"),N=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],E={ganador:c,puntosGanados:i.puntos,totalVentas:i.ventas,mes:N[parseInt(u)-1],year:O,mesCompleto:e,fechaRegistro:H()};await R(A(v,"ganadores",t),E),X(E)}catch(e){console.error("Error:",e),a("#lastWinner").html(`
            <div class="winner-header">
                <i class="fas fa-trophy"></i>
                <h3>Ganador del Mes Anterior</h3>
            </div>
            <div class="error-winner">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Error cargando datos</span>
            </div>
        `)}}function X(e){const t=y.find(o=>o.usuario===e.ganador||o.nombre===e.ganador);a("#lastWinner").html(`
        <div class="winner-header">
            <i class="fas fa-trophy"></i>
            <h3>Ganador del Mes Anterior</h3>
        </div>
        <div class="winner-info">
            <img src="${t?.imagen||"/smile.png"}" 
                 alt="${t?.nombre||e.ganador}">
            <div class="winner-details">
                <h4>${t?.nombre||e.ganador}</h4>
                <p>${e.mes} ${e.year}</p>
                <span class="winner-points">${e.puntosGanados} puntos</span>
                <span class="winner-sales">${e.totalVentas} tours</span>
            </div>
            <div class="winner-achievement">
                <i class="fas fa-crown"></i>
                <span>¡Campeón!</span>
            </div>
        </div>
    `)}function F(){const e=b.filter(c=>c.fechaTour&&c.fechaTour.startsWith(D)),t=new Date().toISOString().split("T")[0],o=e.filter(c=>c.fechaTour===t),s=e.reduce((c,i)=>c+(i.qventa||0),0),n=e.reduce((c,i)=>c+(i.puntos||0),0),r=o.reduce((c,i)=>c+(i.qventa||0),0);a("#totalTours").text(s),a("#totalPuntos").text(n),a("#toursHoy").text(r)}function pa(){const e=y.map(t=>`<option value="${t.usuario}">${t.nombre}</option>`).join("");a("#filterEmployee").html(`
        <option value="">Todos los vendedores</option>
        ${e}
    `)}a(document).on("change","#mostrarn",function(){M=parseInt(a(this).val()),h=1,w(a("#filterEmployee").val())});a(document).on("change","#monthSelector",function(){D=a(this).val(),h=1,Promise.all([U(),j()]).then(()=>{I(),w(),F(),K()})});a(document).on("change","#filterEmployee",function(){h=1,w(a(this).val())});a(document).on("click","#todayFilter",function(){h=1,w(a("#filterEmployee").val(),!0)});window.cambiarPagina=function(e){h=e,w(a("#filterEmployee").val())};window.verDetalleVenta=function(e){const t=b.find(o=>o.id===e);if(!t){d("Venta no encontrada","error");return}aa(t,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),d("Datos cargados para visualización","info")};window.editarVenta=function(e){const t=b.find(o=>o.id===e);if(!t){d("Venta no encontrada","error");return}aa(t,!1),a(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",e),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),d("Datos cargados para edición","info")};window.eliminarVenta=function(e){const t=b.find(n=>n.id===e);if(!t){d("Venta no encontrada","error");return}!confirm(`¿Estás seguro de eliminar la venta de "${t.nombreCliente}"?

Esta acción NO se puede deshacer.`)||!confirm(`⚠️ CONFIRMACIÓN FINAL ⚠️

Se eliminará permanentemente:
• Cliente: ${t.nombreCliente}
• Tour: ${t.tipoTour}
• Importe: S/ ${t.importeTotal}

¿CONFIRMAS LA ELIMINACIÓN?

Esta acción es IRREVERSIBLE.`)||ma(e)};function aa(e,t=!1){$(),l=m.find(o=>o.tour===e.tipoTour||e.tipoTour.includes(o.tour.split(" ")[1])),l?(a("#tourDisplay .tour-text").text(l.tour),a("#tipoTour").val(l.tour),a(`.tour-row[data-tour*='"nt":${l.nt}']`).addClass("selected")):(a("#tourDisplay .tour-text").text(e.tipoTour||"🔍 Seleccionar tour..."),a("#tipoTour").val(e.tipoTour||"")),a("#registroEn").val(e.registroEn),a("#nombreCliente").val(e.nombreCliente),a("#numeroHabitacion").val(e.numeroHabitacion||""),a("#tipoDocumento").val(e.tipoDocumento||"dni"),a("#numeroDocumento").val(e.numeroDocumento||""),a("#cantidadPax").val(e.cantidadPax||1),a("#precioUnitario").val(e.precioUnitario||0),a("#metodoPago").val(e.metodoPago||""),a("#importeTotal").val(e.importeTotal||0),a("#ganancia").val(e.ganancia||0),J(),a("#horaSalida").val(e.horaSalida),a("#Operador").val(e.Operador),a("#Comentario").val(e.Comentario),a("#fechaTour").val(e.fechaTour),a("#estadoPago").val(e.estadoPago||"pagado"),a("#vtJulio").prop("checked",e.esVentaJulio||!1),a("#vtSonia").prop("checked",e.esVentaSonia||!1),a("#vtExterna").prop("checked",e.esVentaExterna||!1),V(),t?(a("#formularioVenta input, #formularioVenta select, .tour-display").prop("disabled",!0),a(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),a("#formularioVenta").addClass("view-only"),a(".btn-clear-view").length===0&&a(".form-actions").prepend(`
                <button type="button" class="btn-clear-view" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Limpiar Vista
                </button>
            `)):(a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a(".tour-display").prop("disabled",!1),a(".btn-save").prop("disabled",!1),a("#formularioVenta").addClass("edit-mode"),a(".btn-cancel-edit").length===0&&a(".form-actions").prepend(`
                <button type="button" class="btn-cancel-edit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Cancelar Edición
                </button>
            `))}function V(){const e=parseInt(a("#cantidadPax").val())||1,t=l?l.pts:0,s=a("#vtJulio").prop("checked")||a("#vtSonia").prop("checked")||a("#vtExterna").prop("checked")?0:t*e;a("#vistaPreviaLaPuntos").text(s)}function $(){l=null,a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a(".btn-save").prop("disabled",!1),a("#formularioVenta").removeClass("view-only edit-mode"),a(".btn-save").html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),a(".btn-clear-view, .btn-cancel-edit").remove(),a("#formularioVenta")[0].reset(),a("#cantidadPax").val(1),a("#vistaPreviaLaPuntos").text("0"),a("#tourDisplay .tour-text").text("🔍 Seleccionar tour..."),a(".tour-row").removeClass("selected")}async function ma(e){try{d("Eliminando venta...","info"),await sa(A(v,"registrosdb",e));const t=[];for(let s=0;s<localStorage.length;s++){const n=localStorage.key(s);if(n&&n.startsWith("vendedor_"))try{const r=JSON.parse(localStorage.getItem(n));r&&r.idVenta===e&&t.push(n)}catch{}}t.forEach(s=>localStorage.removeItem(s)),b=b.filter(s=>s.id!==e),await U(),I(),w(),F(),a(".btn-save").attr("data-edit-id")===e&&$(),d("¡Venta eliminada exitosamente!","success")}catch(t){console.error("Error eliminando venta:",t),d("Error al eliminar la venta. Inténtalo nuevamente.","error")}}a(document).on("click",".btn-clear-view",function(){$(),d("Vista limpiada","info")});a(document).on("click",".btn-cancel-edit",function(){$(),d("Edición cancelada","info")});function fa(e){const[t,o]=e.split("-"),s=new Date(parseInt(t),parseInt(o)-2);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}let m=[];async function va(){try{console.log("🔄 Cargando tours...");const e=L("toursSmile");if(e?.length>0){m=e.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),console.log(`✅ ${m.length} tours desde cache`),typeof x=="function"&&x();return}const t=await C(B(P(v,"listatours"),q("activo","==",!0)));if(t.empty){console.log("❌ No hay tours activos"),m=[];return}const o=t.docs.map(s=>({id:s.id,...s.data()}));m=o.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),T("toursSmile",o,300),console.log(`✅ ${m.length} tours cargados desde Firebase`),typeof x=="function"&&x()}catch(e){console.error("❌ Error cargando tours:",e),d("Error al cargar tours","error")}}let l=null;function ha(){return`
        <form id="formularioVenta" class="sale-form">
            <div class="form-grid">
                <!-- SELECTOR DE TOUR MEJORADO -->
                <div class="form-field">
                    <label class="tour-label">
                        <i class="fas fa-route"></i>
                        Tipo de Tour *
                    </label>
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
                                <table class="tour-table" id="tourTable">
                                    <tbody id="tourTableBody"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="tipoTour" required>
                </div>

                <!-- RESTO DE CAMPOS EXISTENTES -->
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
                    <label><i class="fas fa-money-check-alt"></i>Pagado?</label>
                    <select id="estadoPago">
                        <option value="pagado">Tour con nosotros (pagado)</option>
                        <option value="pagar">Tour con nosotros (pendiente)</option>
                        <option value="cobrado">Tour con Sonia, externo (cobrado)</option>
                        <option value="cobrar">Tour con Sonia, externo (pendiente)</option>
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
                    <label><i class="fas fa-calculator"></i>Total por Cobrar(S/)</label>
                    <input type="number" id="importeTotal" step="0.01" placeholder="S/ 0.00" disabled>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-user"></i>Operador *</label>
                    <input type="text" id="Operador" placeholder="Ejm: Jacki, Pili, William...." required>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-credit-card"></i>Método de Pago</label>
                    <select id="metodoPago">
                    <option value="">Seleccionar...</option>
                        <option value="Tarjeta">Tarjeta de Débito/Crédito</option>
                        <option value="Efectivo">Efectivo en Cash</option>
                        <option value="Transferencia">Transferencia Bancaria</option>
                        <option value="Yape">Yape</option>
                        <option value="Plin">Plin</option>
                    </select>
                </div>

                <div class="form-field">
                    <label title="Es un calculo importe total - comision del operador, si es nosotros, no tiene comision, si es externo depende del tour">
                    <i class="fas fa-handshake"></i>Ganancia Estimada*</label>
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
                <button type="submit" class="btn-save">
                    <i class="fas fa-save"></i>
                    Guardar Venta
                </button>
                <div class="points-preview">
                    <div class="points-info">
                        <i class="fas fa-star"></i>
                        <span>Puntos a ganar: <strong id="vistaPreviaLaPuntos">0</strong></span>
                    </div>
                </div>
            </div>
        </form>
    `}function x(){ba(m),a("#tourDisplay").off("click"),a("#tourSearch").off("input"),a(document).off("click",".tour-row"),a("#tourDisplay").on("click",function(t){t.stopPropagation();const o=a("#tourDropdown");o.hasClass("active")?(o.removeClass("active"),a("#tourDisplay").removeClass("active")):(o.addClass("active"),a("#tourDisplay").addClass("active"),setTimeout(()=>a("#tourSearch").focus(),50))});let e;a("#tourSearch").on("input",function(){const t=a(this).val().toLowerCase();e&&clearTimeout(e),e=setTimeout(()=>{if(t.length===0)G(m);else if(t.length>=2){const o=m.filter(s=>s.tour.toLowerCase().includes(t)||s.price.toString().includes(t));G(o)}},200)}),a(document).on("click",".tour-row",function(t){t.stopPropagation();const o=a(this).data("index");l=m[o],l&&(a("#tourDisplay .tour-text").text(l.tour),a("#tipoTour").val(l.tour),a("#precioUnitario").val(l.price),a("#tourDropdown").removeClass("active"),a("#tourDisplay").removeClass("active"),a(".tour-row").removeClass("selected"),a(this).addClass("selected"),setTimeout(()=>{_("#precioUnitario"),ea(),V()},50))}),a(document).on("click",function(t){a(t.target).closest(".tour-selector").length||(a("#tourDropdown").removeClass("active"),a("#tourDisplay").removeClass("active"))}),ya(),Ea()}function G(e){if(!e.length){a("#tourTableBody").html('<tr><td colspan="4" style="text-align:center;color:#666;">No hay tours disponibles</td></tr>');return}const t=document.createDocumentFragment();e.forEach((s,n)=>{const r=document.createElement("tr");r.className="tour-row",r.dataset.index=m.indexOf(s),r.innerHTML=`
            <td class="tour-num">${n+1}</td>
            <td class="tour-name">${s.tour}</td>
            <td class="tour-price">S/ ${s.price}</td>
            <td class="tour-pts">${s.pts} pts</td>
        `,t.appendChild(r)});const o=document.getElementById("tourTableBody");o.innerHTML="",o.appendChild(t)}function ba(e){G(e)}function J(){const e=a("#estadoPago").val(),t=parseInt(a("#cantidadPax").val())||1,s=(parseFloat(a("#precioUnitario").val())||0)*t;let n=0;e==="pagado"||e==="pagar"?n=s:(e==="cobrado"||e==="cobrar")&&l&&l.com&&(n=l.com*t),a("#ganancia").val(n.toFixed(2)),_("#ganancia")}a(document).on("change","#estadoPago",function(){J()});function _(e){const t=a(e);t.addClass("field-updated"),setTimeout(()=>{t.removeClass("field-updated")},1e3)}function ea(){const e=parseInt(a("#cantidadPax").val())||1,t=parseFloat(a("#precioUnitario").val())||0;a("#importeTotal").val((t*e).toFixed(2)),J(),_("#importeTotal")}function ga(){return`
        <!-- INFORMACION DE SERVICIOS -->
        <section class="info-section">
            <div class="info-tabs">
                <button class="tab-btn active" data-tab="points">
                    <i class="fas fa-star"></i>
                    Puntos
                </button>
                <button class="tab-btn" data-tab="rules">
                    <i class="fas fa-list-ul"></i>
                    Reglas
                </button>
                <button class="tab-btn" data-tab="prices">
                    <i class="fas fa-money-bill-wave"></i>
                    Precios
                </button>
            </div>

<div class="tab-content active" id="points-tab">
    <h3><i class="fas fa-chart-bar"></i> Asignación de Puntos por Servicio</h3>
    <div class="points-grid" id="pointsGrid">
        <div class="loading-points">
            <i class="fas fa-spinner fa-spin"></i>
            Cargando puntos...
        </div>
    </div>
</div>

            <div class="tab-content" id="rules-tab">
                <h3><i class="fas fa-gavel"></i> Reglas del Sistema de Puntos</h3>
                <div class="rules-list">
                    <div class="rule-item">
                        <span class="rule-number">1</span>
                        <span>EN LOS PRECIOS BRINDADOS NO ESTÁ INCLUÍDO LA TASA TURÍSTICA</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-number">2</span>
                        <span>EN EL CASO DEL BUGGIE/BODEGAS Y CITY TOUR EL PUNTAJE SERÁ MAYOR SIEMPRE Y CUANDO SALGAN CON EL BUGGIE DE LA SEÑORA SONIA O CAMIONETA</span>
                    </div>
                    <div class="rule-item bonus">
                        <span class="rule-number">3</span>
                        <span>SE ANULARÁN LOS PUNTOS POR ALGÚN RECLAMO. SI EL CLIENTE DEJA COMENTARIO A FAVOR HAY BONUS DE +10 PUNTOS. MAL COMENTARIO = -10 PUNTOS</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-number">4</span>
                        <span>SI SE REALIZA ANULACIÓN DE TOUR O DEVOLUCIÓN DE DINERO NO SE DARÁN PUNTAJES</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-number">5</span>
                        <span>PARA QUE LOS PUNTOS SEAN VÁLIDOS SE DEBE REGISTRAR COMPLETO TODOS LOS DATOS EL MISMO DÍA</span>
                    </div>
                    <div class="rule-item bonus">
                        <span class="rule-number">5</span>
                        <span>SI EL CLIENTE TE ETIQUETA EN REDES SOCIALES = +5 PUNTOS BONUS, PERO DEJA COMENTARIO = +5 (MÁXIMO 10 POR CLIENTE) </span>
                    </div>
                </div>
            </div>

      <div class="tab-content" id="prices-tab">
    <h3><i class="fas fa-tags"></i> Precios de Tours - Venta Mínima</h3>
    <div class="prices-grid" id="pricesGrid">
        <div class="loading-prices">
            <i class="fas fa-spinner fa-spin"></i>
            Cargando precios...
        </div>
    </div>
    <div class="price-note">
        <p><i class="fas fa-info-circle"></i> <strong>Nota:</strong> Precios actualizados automáticamente desde la base de datos</p>
    </div>
    </div>

            </div>
        </section>
    `}function ya(){if(!m.length){a("#pointsGrid").html('<p style="text-align:center;color:#666;">No hay tours disponibles</p>');return}const t=[...m].sort((o,s)=>s.pts-o.pts).map(o=>`
        <div class="point-item">
            <span class="service-name">${o.tour}</span>
            <span class="point-value">${o.pts}</span>
        </div>
    `).join("");a("#pointsGrid").html(t)}function Ea(){if(!m.length){a("#pricesGrid").html('<p style="text-align:center;color:#666;">No hay precios disponibles</p>');return}const e=m.map(t=>`
        <div class="price-item">
            <span class="service-name">${t.tour}</span>
            <span class="service-price">S/ ${t.price.toFixed(2)}</span>
        </div>
    `).join("");a("#pricesGrid").html(e)}a(document).on("click",".btn-save",async e=>{e.preventDefault();try{if(!l){d("⚠️ Selecciona un tour primero","error"),a("#tourDisplay").focus();return}const t=a(".btn-save").attr("data-edit-id"),o=!!t,s=parseInt(a("#cantidadPax").val())||1,n=a("#vtJulio").prop("checked"),r=a("#vtSonia").prop("checked"),c=a("#vtExterna").prop("checked"),O=n||r||c?0:l.pts*s,u={tipoTour:l.tour,registroEn:a("#registroEn").val(),nombreCliente:a("#nombreCliente").val(),numeroHabitacion:a("#numeroHabitacion").val(),tipoDocumento:a("#tipoDocumento").val(),numeroDocumento:a("#numeroDocumento").val(),cantidadPax:s,precioUnitario:parseFloat(a("#precioUnitario").val())||0,metodoPago:a("#metodoPago").val(),importeTotal:parseFloat(a("#importeTotal").val())||0,ganancia:parseFloat(a("#ganancia").val())||0,horaSalida:a("#horaSalida").val(),Operador:a("#Operador").val(),Comentario:a("#Comentario").val(),fechaTour:a("#fechaTour").val(),estadoPago:a("#estadoPago").val(),vendedor:S.displayName,puntos:O,email:S.email,qventa:1,fechaRegistro:H(),esVentaJulio:n,esVentaSonia:r,esVentaExterna:c},N=[[l,"#tourDisplay","tour"],[u.nombreCliente,"#nombreCliente","cliente"],[u.horaSalida,"#horaSalida","hora"],[u.fechaTour,"#fechaTour","fecha"],[u.Operador,"#Operador","operador"],[u.Comentario,"#Comentario","comentario"]];a(".faltaValor, .okValor").removeClass("faltaValor okValor");const E=N.filter(([f,p,g])=>{const W=f&&f.toString().trim();return a(p).addClass(W?"okValor":"faltaValor"),W?null:g}).map(([,,f])=>f).filter(Boolean);if(E.length){d(`⚠️ Completa: ${E.join(", ")}`,"error"),a(".faltaValor").first().focus();return}if(o){u.idVenta=t,await R(A(v,"registrosdb",t),u);const f=`vendedor_${S.displayName}`;T(f,u,450);const p=b.findIndex(g=>g.id===t);p!==-1&&(b[p]={id:t,...u}),d("¡Venta actualizada exitosamente!","success")}else{const p=`venta_${Date.now()}`;u.idVenta=p,await R(A(v,"registrosdb",p),u);const g=`vendedor_${S.displayName}`;T(g,u,450),d("¡Venta registrada exitosamente!","success")}$(),await j(),await U(),I(),F()}catch(t){console.error("Error al guardar/actualizar venta:",t),d("Error al procesar la venta. Inténtalo nuevamente.","error")}});a(document).on("change","#vtJulio, #vtSonia, #vtExterna",function(){V()});a(document).on("input change","#nombreCliente, #horaSalida, #fechaTour, #Operador, #Comentario",function(){a(this).removeClass("faltaValor").addClass("okValor")});a(document).on("click",".tour-row",function(){a("#tourDisplay").removeClass("faltaValor").addClass("okValor")});a(document).on("change","#tipoTour",function(){const e=a(this).find("option:selected").data("price")||0,t=parseInt(a("#cantidadPax").val())||1;a("#precioUnitario").val(e),a("#importeTotal").val(e*t),V()});a(document).on("input","#cantidadPax, #precioUnitario",function(){ea(),V()});a(document).on("click",".tema",async function(){const e=a(this).data("tema");try{await R(A(v,"configuracion",S.displayName),{tema:e,actualizado:H()},{merge:!0}),T("wiTema",e,72),z('Tema guardado <i class="fa-solid fa-circle-check"></i>')}catch(t){console.error(t)}});
