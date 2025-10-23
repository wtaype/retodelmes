import{t as sa,$ as a,v as ia,x as X,M as B,N as u,y as na,d as N,a as m,j as q,i as U,l as w,z as ra,C as la,b as O,c as D,g as ca,A as F,q as j,e as J,h as aa}from"./widev-DHEX-f3z.js";let P=null;sa(aa,async e=>{if(!e)return window.location.href="/";P=e;try{const t=F("wiSmile");if(t)return Z(t);const s=(await O(j(D(m,"smiles"),J("usuario","==",e.displayName)))).docs[0].data();w("wiSmile",s,450),Z(s)}catch(t){console.error(t)}});a(document).on("click",".bt_salir",async()=>{await ia(aa),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(t=>localStorage.removeItem(t))}});a(document).on("click",".tab-btn",function(){const e=a(this).data("tab");X(this,"active"),X("#"+e+"-tab","active")});a(document).on("click",".bt_cargar",()=>{const e=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+|toursSmile|notasSmile)$/;Object.keys(localStorage).filter(t=>e.test(t)).forEach(t=>localStorage.removeItem(t)),B("Actualizado"),setTimeout(()=>location.reload(),800)});let V="2025-09",b=1,L=5,g=[],y=[];function Z(e){console.log(e.nombre),B("Bienvenido "+e.nombre+"!"),a(".app").html(`
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

                    ${ga()}
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

            ${Ea()}
        </main>

        <div id="notifications-container"></div>
        <div id="modal-container"></div>
    `),ua()}async function da(){try{console.log("🔄 Cargando notas admin...");const e=F("notasSmile");if(e?.length>0){console.log(`✅ ${e.length} notas desde cache`),R(e);return}const t=await O(D(m,"notas"));if(t.empty){console.log("📭 No hay notas"),R([]);return}const o=t.docs.map(s=>({id:s.id,...s.data()}));w("notasSmile",o,600),console.log(`✅ ${o.length} notas cargadas`),R(o)}catch(e){console.error("❌ Error cargar notas:",e),R([])}}function R(e){const t=e.length>0?`
        ${e.map(o=>`<li>${o.nota}</li>`).join("")}
        <div style="font-size:var(--fz_s2);padding:.5vh 0">
            <i class="fas fa-sync"></i> Última actualización: ${new Date().toLocaleTimeString("es-ES")}
        </div>
    `:`
        <div style="color:#666;font-style:italic;text-align:center;padding:20px;">
            <i class="fas fa-info-circle"></i> No hay noticias disponibles
        </div>
    `;a(".descripcion_com").html(t)}async function ua(e){try{const t=new Date().toISOString().slice(0,7);V=t,a("#monthSelector").val(t),a("#fechaTour").val(new Date().toLocaleDateString("sv-SE")),await Promise.all([pa(),_(),ea(),ba(),da()]),fa(),z(),I()}catch(t){console.error("Error inicializando dashboard:",t),u("Error cargando datos del dashboard","error")}}async function pa(){try{const e=F("empleadosSmile");e&&(y=e,$());const t=j(D(m,"smiles"),J("participa","==","si"));y=(await O(t)).docs.map(s=>({id:s.id,...s.data()})),w("empleadosSmile",y,300),await G(),$()}catch(e){console.error("Error cargando empleados:",e),a("#workersGrid").html(`
            <div class="error-workers">
                <i class="fas fa-exclamation-triangle"></i>
                Error cargando empleados
            </div>
        `)}}async function G(){try{const t=(await O(D(m,"registrosdb"))).docs.filter(o=>{const s=o.data();return s.fechaTour&&s.fechaTour.startsWith(V)});y.forEach(o=>{const s=t.filter(n=>n.data().vendedor===o.usuario);o.totalPuntos=s.reduce((n,r)=>n+(r.data().puntos||0),0),o.totalVentas=s.reduce((n,r)=>n+(r.data().qventa||0),0)}),y.sort((o,s)=>s.totalPuntos-o.totalPuntos)}catch(e){console.error("Error calculando puntos:",e)}}function $(){const e=y.map((t,o)=>{const s=o+1,n=s===1,r=s===2;return`
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
        `}).join("");a("#workersGrid").html(e)}async function _(){try{g=(await O(D(m,"registrosdb"))).docs.map(t=>({id:t.id,...t.data()})),g.sort((t,o)=>{const s=new Date(t.fechaTour||"1970-01-01");return new Date(o.fechaTour||"1970-01-01")-s}),A()}catch(e){console.error("Error cargando ventas:",e),a("#salesTableBody").html(`
            <tr><td colspan="9" class="error-cell">
                <i class="fas fa-exclamation-triangle"></i> Error cargando ventas
            </td></tr>
        `)}}function A(e="",t=!1){let o=[...g];if(o=o.filter(i=>i.fechaTour&&i.fechaTour.startsWith(V)),e&&(o=o.filter(i=>i.vendedor===e)),t){const i=new Date().toISOString().split("T")[0];o=o.filter(l=>l.fechaTour===i)}const s=Math.ceil(o.length/L),n=(b-1)*L,E=o.slice(n,n+L).map(i=>{const f=i.vendedor===P?.displayName?`<button class="btn-view" onclick="verDetalleVenta('${i.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>
               <button class="btn-edit" onclick="editarVenta('${i.id}')" title="Editar"><i class="fas fa-edit"></i></button>
               <button class="btn-delete" onclick="eliminarVenta('${i.id}')" title="Eliminar"><i class="fas fa-trash"></i></button>`:`<button class="btn-view" onclick="verDetalleVenta('${i.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>`,S=new Date(i.fechaTour).toLocaleDateString("es-ES"),d=`${ra(i.nombreCliente)}${i.numeroHabitacion?` <small>(${i.numeroHabitacion}</small>)`:""}`,T=(i.precioUnitario*.1).toFixed(2);return`
            <tr>
                <td>${S}</td>
                <td class="user-cell">
                    <img src="${y.find(h=>h.usuario===i.vendedor)?.imagen||"/smile.png"}" class="avatar-small">
                    <strong>${la(i.vendedor)}</strong>
                </td>
                <td><span class="tour-badge">${i.tipoTour}</span></td>
                <td><span class="pax-badge"><i class="fas fa-users"></i> ${i.cantidadPax}</span></td>
                <td>${d}</td>
                <td><strong class="price">S/ ${(i.importeTotal||0).toFixed(2)}</strong></td>
                <td>S/ ${(i.precioUnitario||0).toFixed(2)}</td>
                <td>S/ ${T}</td>
                <td><span class="status-badge ${i.estadoPago==="pagado"||i.estadoPago==="cobrado"?"paid":"pending"}">
                    <i class="fas fa-${i.estadoPago==="pagado"||i.estadoPago==="cobrado"?"check-circle":"clock"}"></i> 
                    ${i.estadoPago?.toUpperCase()}
                </span></td>
                <td>S/ ${(i.ganancia||0).toFixed(2)}</td>
                <td><span class="points-badge"><i class="fas fa-star"></i> ${i.puntos||0}</span></td>
                <td><div class="action-buttons">${f}</div></td>
            </tr>
        `}).join("");a("#salesTableBody").html(E||'<tr><td colspan="12" class="empty-cell"><i class="fas fa-inbox"></i> No hay ventas para mostrar</td></tr>'),ma(s)}function ma(e){if(e<=1){a("#paginationContainer").html("");return}let t='<div class="pagination">';b>1&&(t+=`<button class="page-btn" onclick="cambiarPagina(${b-1})">
            <i class="fas fa-chevron-left"></i>
        </button>`);for(let o=1;o<=e;o++)o===b?t+=`<button class="page-btn active">${o}</button>`:t+=`<button class="page-btn" onclick="cambiarPagina(${o})">${o}</button>`;b<e&&(t+=`<button class="page-btn" onclick="cambiarPagina(${b+1})">
            <i class="fas fa-chevron-right"></i>
        </button>`),t+="</div>",a("#paginationContainer").html(t)}async function ea(){try{const e=ha(V),t=`${e.replace("-","")}`,o=await ca(N(m,"ganadores",t));if(o.exists()){K(o.data());return}const s=await O(D(m,"registrosdb")),n={};s.docs.forEach(T=>{const h=T.data();if(h.fechaTour?.startsWith(e)){const v=h.vendedor;n[v]||(n[v]={puntos:0,ventas:0}),n[v].puntos+=h.puntos||0,n[v].ventas+=h.qventa||0}});const r=Object.entries(n);if(r.length===0){a("#lastWinner").html(`
                <div class="winner-header">
                    <i class="fas fa-trophy"></i>
                    <h3>Ganador del Mes Anterior</h3>
                </div>
                <div class="no-winner">
                    <i class="fas fa-question-circle"></i>
                    <span>No hay datos disponibles</span>
                </div>
            `);return}r.sort((T,h)=>h[1].puntos-T[1].puntos);const[E,i]=r[0],[l,f]=e.split("-"),S=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],d={ganador:E,puntosGanados:i.puntos,totalVentas:i.ventas,mes:S[parseInt(f)-1],year:l,mesCompleto:e,fechaRegistro:q()};await U(N(m,"ganadores",t),d),K(d)}catch(e){console.error("Error:",e),a("#lastWinner").html(`
            <div class="winner-header">
                <i class="fas fa-trophy"></i>
                <h3>Ganador del Mes Anterior</h3>
            </div>
            <div class="error-winner">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Error cargando datos</span>
            </div>
        `)}}function K(e){const t=y.find(o=>o.usuario===e.ganador||o.nombre===e.ganador);a("#lastWinner").html(`
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
    `)}function z(){const e=g.filter(l=>l.fechaTour&&l.fechaTour.startsWith(V)),t=new Date().toISOString().split("T")[0],o=e.filter(l=>l.fechaTour===t),s=e.reduce((l,f)=>l+(f.qventa||0),0),n=e.reduce((l,f)=>l+(f.puntos||0),0),r=o.reduce((l,f)=>l+(f.qventa||0),0),E=2500;a("#totalTours").text(s),a("#totalPuntos").text(n),a("#toursHoy").text(r);const i=[Math.min(r/5*100,100),Math.min(s/50*100,100),Math.min(n/E*100,100),100];a(".summary-stat").each((l,f)=>{const S=i[l]/100*360;a(f).css({"--progress":`${S}deg`,"--width":`${i[l]}%`})})}function fa(){const e=y.map(t=>`<option value="${t.usuario}">${t.nombre}</option>`).join("");a("#filterEmployee").html(`
        <option value="">Todos los vendedores</option>
        ${e}
    `)}a(document).on("change","#mostrarn",function(){L=parseInt(a(this).val()),b=1,A(a("#filterEmployee").val())});a(document).on("change","#monthSelector",function(){V=a(this).val(),b=1,Promise.all([G(),_()]).then(()=>{$(),A(),z(),ea()})});a(document).on("change","#filterEmployee",function(){b=1,A(a(this).val())});a(document).on("click","#todayFilter",function(){b=1,A(a("#filterEmployee").val(),!0)});window.cambiarPagina=function(e){b=e,A(a("#filterEmployee").val())};window.verDetalleVenta=function(e){const t=g.find(o=>o.id===e);if(!t){u("Venta no encontrada","error");return}ta(t,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),u("Datos cargados para visualización","info")};window.editarVenta=function(e){const t=g.find(o=>o.id===e);if(!t){u("Venta no encontrada","error");return}ta(t,!1),a(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",e),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),u("Datos cargados para edición","info")};window.eliminarVenta=function(e){const t=g.find(n=>n.id===e);if(!t){u("Venta no encontrada","error");return}!confirm(`¿Estás seguro de eliminar la venta de "${t.nombreCliente}"?

Esta acción NO se puede deshacer.`)||!confirm(`⚠️ CONFIRMACIÓN FINAL ⚠️

Se eliminará permanentemente:
• Cliente: ${t.nombreCliente}
• Tour: ${t.tipoTour}
• Importe: S/ ${t.importeTotal}

¿CONFIRMAS LA ELIMINACIÓN?

Esta acción es IRREVERSIBLE.`)||va(e)};function ta(e,t=!1){M(),c=p.find(o=>o.tour===e.tipoTour||e.tipoTour.includes(o.tour.split(" ")[1])),c?(a("#tourDisplay .tour-text").text(c.tour),a("#tipoTour").val(c.tour),a(`.tour-row[data-tour*='"nt":${c.nt}']`).addClass("selected")):(a("#tourDisplay .tour-text").text(e.tipoTour||"🔍 Seleccionar tour..."),a("#tipoTour").val(e.tipoTour||"")),a("#registroEn").val(e.registroEn),a("#nombreCliente").val(e.nombreCliente),a("#numeroHabitacion").val(e.numeroHabitacion||""),a("#tipoDocumento").val(e.tipoDocumento||"dni"),a("#numeroDocumento").val(e.numeroDocumento||""),a("#cantidadPax").val(e.cantidadPax||1),a("#precioUnitario").val(e.precioUnitario||0),a("#metodoPago").val(e.metodoPago||""),a("#importeTotal").val(e.importeTotal||0),a("#ganancia").val(e.ganancia||0),W(),a("#horaSalida").val(e.horaSalida),a("#Operador").val(e.Operador),a("#Comentario").val(e.Comentario),a("#fechaTour").val(e.fechaTour),a("#estadoPago").val(e.estadoPago||"pagado"),a("#vtJulio").prop("checked",e.esVentaJulio||!1),a("#vtSonia").prop("checked",e.esVentaSonia||!1),a("#vtExterna").prop("checked",e.esVentaExterna||!1),k(),t?(a("#formularioVenta input, #formularioVenta select, .tour-display").prop("disabled",!0),a(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),a("#formularioVenta").addClass("view-only"),a(".btn-clear-view").length===0&&a(".form-actions").prepend(`
                <button type="button" class="btn-clear-view" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Limpiar Vista
                </button>
            `)):(a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a(".tour-display").prop("disabled",!1),a(".btn-save").prop("disabled",!1),a("#formularioVenta").addClass("edit-mode"),a(".btn-cancel-edit").length===0&&a(".form-actions").prepend(`
                <button type="button" class="btn-cancel-edit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Cancelar Edición
                </button>
            `))}function k(){const e=parseInt(a("#cantidadPax").val())||1,t=c?c.pts:0,s=a("#vtJulio").prop("checked")||a("#vtSonia").prop("checked")||a("#vtExterna").prop("checked")?0:t*e;a("#vistaPreviaLaPuntos").text(s)}function M(){const e=new Date().toLocaleDateString("sv-SE"),t=1;c=null,a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a(".btn-save").prop("disabled",!1),a("#formularioVenta").removeClass("view-only edit-mode"),a(".btn-save").html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),a(".btn-clear-view, .btn-cancel-edit").remove(),a("#formularioVenta")[0].reset(),a("#cantidadPax").val(t),a("#fechaTour").val(e),a("#vistaPreviaLaPuntos").text("0"),a("#tourDisplay .tour-text").text("🔍 Seleccionar tour..."),a(".tour-row").removeClass("selected"),a("#importeTotal, #ganancia").prop("disabled",!0)}async function va(e){try{u("Eliminando venta...","info"),await na(N(m,"registrosdb",e));const t=[];for(let s=0;s<localStorage.length;s++){const n=localStorage.key(s);if(n&&n.startsWith("vendedor_"))try{const r=JSON.parse(localStorage.getItem(n));r&&r.idVenta===e&&t.push(n)}catch{}}t.forEach(s=>localStorage.removeItem(s)),g=g.filter(s=>s.id!==e),await G(),$(),A(),z(),a(".btn-save").attr("data-edit-id")===e&&M(),u("¡Venta eliminada exitosamente!","success")}catch(t){console.error("Error eliminando venta:",t),u("Error al eliminar la venta. Inténtalo nuevamente.","error")}}a(document).on("click",".btn-clear-view",function(){M(),u("Vista limpiada","info")});a(document).on("click",".btn-cancel-edit",function(){M(),u("Edición cancelada","info")});function ha(e){const[t,o]=e.split("-"),s=new Date(parseInt(t),parseInt(o)-2);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}let p=[];async function ba(){try{console.log("🔄 Cargando tours...");const e=F("toursSmile");if(e?.length>0){p=e.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),console.log(`✅ ${p.length} tours desde cache`),typeof I=="function"&&I();return}const t=await O(j(D(m,"listatours"),J("activo","==",!0)));if(t.empty){console.log("❌ No hay tours activos"),p=[];return}const o=t.docs.map(s=>({id:s.id,...s.data()}));p=o.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),w("toursSmile",o,300),console.log(`✅ ${p.length} tours cargados desde Firebase`),typeof I=="function"&&I()}catch(e){console.error("❌ Error cargando tours:",e),u("Error al cargar tours","error")}}let c=null;function ga(){return`
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
                    <label><i class="fas fa-calculator"></i>Total por Cobrar(S/)</label>
                    <input type="number" id="importeTotal" step="0.01" placeholder="S/ 0.00" disabled>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-user"></i>Operador *</label>
                    <input type="text" id="Operador" placeholder="Ejm: Jacki, Pili, William...." required>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-money-check-alt"></i>Pagado?</label>
                    <select id="estadoPago">
                        <option value="pagado">Servicio Pagado </option>
                        <option value="cobrar">Servicio por cobrar</option>
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
    `}function I(){ya(p),a("#tourDisplay").off("click"),a("#tourSearch").off("input"),a(document).off("click",".tour-row"),a("#tourDisplay").on("click",function(t){t.stopPropagation();const o=a("#tourDropdown");o.hasClass("active")?(o.removeClass("active"),a("#tourDisplay").removeClass("active")):(o.addClass("active"),a("#tourDisplay").addClass("active"),setTimeout(()=>a("#tourSearch").focus(),50))});let e;a("#tourSearch").on("input",function(){const t=a(this).val().toLowerCase();e&&clearTimeout(e),e=setTimeout(()=>{if(t.length===0)H(p);else if(t.length>=2){const o=p.filter(s=>s.tour.toLowerCase().includes(t)||s.price.toString().includes(t));H(o)}},200)}),a(document).on("click",".tour-row",function(t){t.stopPropagation();const o=a(this).data("index");c=p[o],c&&(a("#tourDisplay .tour-text").text(c.tour),a("#tipoTour").val(c.tour),a("#precioUnitario").val(c.price),a("#tourDropdown").removeClass("active"),a("#tourDisplay").removeClass("active"),a(".tour-row").removeClass("selected"),a(this).addClass("selected"),setTimeout(()=>{Y("#precioUnitario"),oa(),k()},50))}),a(document).on("click",function(t){a(t.target).closest(".tour-selector").length||(a("#tourDropdown").removeClass("active"),a("#tourDisplay").removeClass("active"))}),Sa(),Ta()}function H(e){if(!e.length){a("#tourTableBody").html('<tr><td colspan="4" style="text-align:center;color:#666;">No hay tours disponibles</td></tr>');return}const t=document.createDocumentFragment();e.forEach((s,n)=>{const r=document.createElement("tr");r.className="tour-row",r.dataset.index=p.indexOf(s),r.innerHTML=`
            <td class="tour-num">${n+1}</td>
            <td class="tour-name">${s.tour}</td>
            <td class="tour-price">S/ ${s.price}</td>
            <td class="tour-pts">${s.pts} pts</td>
        `,t.appendChild(r)});const o=document.getElementById("tourTableBody");o.innerHTML="",o.appendChild(t)}function ya(e){H(e)}function W(){const e=a("#estadoPago").val(),t=parseInt(a("#cantidadPax").val())||1,s=(parseFloat(a("#precioUnitario").val())||0)*t;let n=0;e==="pagado"||e==="pagar"?n=s:(e==="cobrado"||e==="cobrar")&&c&&c.com&&(n=c.com*t),a("#ganancia").val(n.toFixed(2)),Y("#ganancia")}a(document).on("change","#estadoPago",function(){W()});function Y(e){const t=a(e);t.addClass("field-updated"),setTimeout(()=>{t.removeClass("field-updated")},1e3)}function oa(){const e=parseInt(a("#cantidadPax").val())||1,t=parseFloat(a("#precioUnitario").val())||0;a("#importeTotal").val((t*e).toFixed(2)),W(),Y("#importeTotal")}function Ea(){return`
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
    `}function Sa(){if(!p.length){a("#pointsGrid").html('<p style="text-align:center;color:#666;">No hay tours disponibles</p>');return}const t=[...p].sort((o,s)=>s.pts-o.pts).map(o=>`
        <div class="point-item">
            <span class="service-name">${o.tour}</span>
            <span class="point-value">${o.pts}</span>
        </div>
    `).join("");a("#pointsGrid").html(t)}function Ta(){if(!p.length){a("#pricesGrid").html('<p style="text-align:center;color:#666;">No hay precios disponibles</p>');return}const e=p.map(t=>`
        <div class="price-item">
            <span class="service-name">${t.tour}</span>
            <span class="service-price">S/ ${t.price.toFixed(2)}</span>
        </div>
    `).join("");a("#pricesGrid").html(e)}a(document).on("click",".btn-save",async e=>{if(e.preventDefault(),!a(".btn-save").prop("disabled"))try{if(!c){u("⚠️ Selecciona un tour primero","error"),a("#tourDisplay").focus();return}const t=a(".btn-save"),o=t.html();t.prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Guardando venta...');const s=a(".btn-save").attr("data-edit-id"),n=!!s,r=parseInt(a("#cantidadPax").val())||1,E=a("#vtJulio").prop("checked"),i=a("#vtSonia").prop("checked"),l=a("#vtExterna").prop("checked"),S=E||i||l?0:c.pts*r,d={tipoTour:c.tour,registroEn:a("#registroEn").val(),nombreCliente:a("#nombreCliente").val(),numeroHabitacion:a("#numeroHabitacion").val(),tipoDocumento:a("#tipoDocumento").val(),numeroDocumento:a("#numeroDocumento").val(),cantidadPax:r,precioUnitario:parseFloat(a("#precioUnitario").val())||0,metodoPago:a("#metodoPago").val(),importeTotal:parseFloat(a("#importeTotal").val())||0,ganancia:parseFloat(a("#ganancia").val())||0,horaSalida:a("#horaSalida").val(),Operador:a("#Operador").val(),Comentario:a("#Comentario").val(),fechaTour:a("#fechaTour").val(),estadoPago:a("#estadoPago").val(),vendedor:P.displayName,puntos:S,email:P.email,qventa:1,fechaRegistro:q(),esVentaJulio:E,esVentaSonia:i,esVentaExterna:l},T=[[c,"#tourDisplay","tour"],[d.nombreCliente,"#nombreCliente","Cliente"],[d.horaSalida,"#horaSalida","Hora"],[d.fechaTour,"#fechaTour","Fecha"],[d.Operador,"#Operador","Operador"],[d.numeroDocumento,"#numeroDocumento","Documento"],[d.metodoPago,"#metodoPago","y Metodo de pago"]];a(".faltaValor, .okValor").removeClass("faltaValor okValor");const h=T.filter(([v,C,x])=>{const Q=v&&v.toString().trim();return a(C).addClass(Q?"okValor":"faltaValor"),Q?null:x}).map(([,,v])=>v).filter(Boolean);if(h.length){t.prop("disabled",!1).html(o),u(`⚠️ Completa: ${h.join(", ")}`,"error"),a(".faltaValor").first().focus();return}if(n){d.idVenta=s,await U(N(m,"registrosdb",s),d);const v=`vendedor_${P.displayName}`;w(v,d,450);const C=g.findIndex(x=>x.id===s);C!==-1&&(g[C]={id:s,...d}),u("¡Venta actualizada exitosamente!","success")}else{const C=`venta_${Date.now()}`;d.idVenta=C,await U(N(m,"registrosdb",C),d);const x=`vendedor_${P.displayName}`;w(x,d,450),u("¡Venta registrada exitosamente!","success")}a(".faltaValor, .okValor").removeClass("faltaValor okValor"),M(),await _(),await G(),$(),z()}catch(t){console.error("Error al guardar/actualizar venta:",t),u("Error al procesar la venta. Inténtalo nuevamente.","error"),a(".btn-save").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Venta')}});a(document).on("change","#vtJulio, #vtSonia, #vtExterna",function(){k()});a(document).on("input change","#formularioVenta input, #formularioVenta select",function(){const e=a(this).val()?.toString().trim();a(this).removeClass("faltaValor").addClass(e?"okValor":"faltaValor")});a(document).on("click",".tour-row",function(){a("#tourDisplay").removeClass("faltaValor").addClass("okValor")});a(document).on("change","#tipoTour",function(){const e=a(this).find("option:selected").data("price")||0,t=parseInt(a("#cantidadPax").val())||1;a("#precioUnitario").val(e),a("#importeTotal").val(e*t),k()});a(document).on("input","#cantidadPax, #precioUnitario",function(){oa(),k()});a(document).on("click",".tema",async function(){const e=a(this).data("tema");try{await U(N(m,"configuracion",P.displayName),{tema:e,actualizado:q()},{merge:!0}),w("wiTema",e,72),B('Tema guardado <i class="fa-solid fa-circle-check"></i>')}catch(t){console.error(t)}});
