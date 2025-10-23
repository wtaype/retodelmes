import{t as da,$ as t,v as ua,x as K,M as j,N as l,y as pa,d as I,a as m,j as J,i as G,l as A,z as ma,C as fa,b as D,c as N,g as va,A as O,B as _,q as W,e as Y,h as ea}from"./widev-DPC_QipY.js";let P=null;da(ea,async a=>{if(!a)return window.location.href="/";P=a;try{const e=O("wiSmile");if(e)return aa(e);const s=(await D(W(N(m,"smiles"),Y("usuario","==",a.displayName)))).docs[0].data();A("wiSmile",s,450),aa(s)}catch(e){console.error(e)}});t(document).on("click",".bt_salir",async()=>{await ua(ea),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}});t(document).on("click",".tab-btn",function(){const a=t(this).data("tab");K(this,"active"),K("#"+a+"-tab","active")});t(document).on("click",".bt_cargar",()=>{const a=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+|toursSmile|notasSmile)$/;Object.keys(localStorage).filter(e=>a.test(e)).forEach(e=>localStorage.removeItem(e)),j("Actualizado"),setTimeout(()=>location.reload(),800)});let x="2025-09",h=1,F=5,b=[],y=[];function aa(a){console.log(a.nombre),j("Bienvenido "+a.nombre+"!"),t(".app").html(`
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
                    <div class="wifresh"><i class="fa-solid fa-rotate-right"></i></div>
                    <div class="witemas"></div>
                    <div class="user-section">
                        <div class="user-info">
                            <img src="${a.imagen||"/smile.png"}" alt="${a.nombre}" class="user-avatar">
                            <span class="user-name">${a.nombre}</span>
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

                    ${Ta()}
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

            ${wa()}
        </main>

        <div id="notifications-container"></div>
        <div id="modal-container"></div>
    `),ba()}async function oa(){try{console.log("🔄 Cargando notas admin...");const a=O("notasSmile");if(a?.length>0){console.log(`✅ ${a.length} notas desde cache`),z(a);return}const e=await D(N(m,"notas"));if(e.empty){console.log("📭 No hay notas"),z([]);return}const o=e.docs.map(s=>({id:s.id,...s.data()}));A("notasSmile",o,600),console.log(`✅ ${o.length} notas cargadas`),z(o)}catch(a){console.error("❌ Error cargar notas:",a),z([])}}function z(a){const e=a.length>0?`
        ${a.map(o=>`<li>${o.nota}</li>`).join("")}
        <div style="font-size:var(--fz_s2);padding:.5vh 0">
            <i class="fas fa-sync"></i> Última actualización: ${new Date().toLocaleTimeString("es-ES")}
        </div>
    `:`
        <div style="color:#666;font-style:italic;text-align:center;padding:20px;">
            <i class="fas fa-info-circle"></i> No hay noticias disponibles
        </div>
    `;t(".descripcion_com").html(e)}function sa(){const a=new Date,e=a.getFullYear(),o=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0");return`${e}-${o}-${s}`}function ha(a){if(!a)return"Sin fecha";const[e,o,s]=a.split("-");return`${s}/${o}/${e}`}async function ba(a){try{const e=new Date().toISOString().slice(0,7);x=e,t("#monthSelector").val(e),t("#fechaTour").val(sa()),await Promise.all([ia(),H(),na(),la(),oa()]),ya(),R(),V()}catch(e){console.error("Error inicializando dashboard:",e),l("Error cargando datos del dashboard","error")}}async function ia(){try{const a=O("empleadosSmile");a&&(y=a,$());const e=W(N(m,"smiles"),Y("participa","==","si"));y=(await D(e)).docs.map(s=>({id:s.id,...s.data()})),A("empleadosSmile",y,300),await M(),$()}catch(a){console.error("Error cargando empleados:",a),t("#workersGrid").html(`
            <div class="error-workers">
                <i class="fas fa-exclamation-triangle"></i>
                Error cargando empleados
            </div>
        `)}}async function M(){try{const e=(await D(N(m,"registrosdb"))).docs.filter(o=>{const s=o.data();return s.fechaTour&&s.fechaTour.startsWith(x)});y.forEach(o=>{const s=e.filter(n=>n.data().vendedor===o.usuario);o.totalPuntos=s.reduce((n,r)=>n+(r.data().puntos||0),0),o.totalVentas=s.reduce((n,r)=>n+(r.data().qventa||0),0)}),y.sort((o,s)=>s.totalPuntos-o.totalPuntos)}catch(a){console.error("Error calculando puntos:",a)}}function $(){const a=y.map((e,o)=>{const s=o+1,n=s===1,r=s===2;return`
            <div class="worker-card ${n?"champion":r?"runner-up":""}" data-employee="${e.usuario}">
                <div class="rank-badge">
                    <i class="fas fa-${n?"crown":r?"medal":"user"}"></i>
                    #${s}
                </div>
                <div class="worker-avatar">
                    <img src="${e.imagen||"/smile.png"}" alt="${e.nombre}">
                    <div class="status-online"></div>
                </div>
                <div class="worker-info">
                    <h3>${e.nombre}</h3>
                    <p>${e.descripcion}</p>
                </div>
                <div class="worker-points">
                    <span class="points-number">${e.totalPuntos||0}</span>
                    <span class="points-label">puntos</span>
                </div>
                <div class="worker-stats">
                    <div class="stat">
                        <span class="stat-value">${e.totalVentas||0}</span>
                        <span class="stat-label">Tours Vendidos</span>
                    </div>
                </div>
            </div>
        `}).join("");t("#workersGrid").html(a)}async function H(){try{b=(await D(N(m,"registrosdb"))).docs.map(e=>({id:e.id,...e.data()})),b.sort((e,o)=>{const s=new Date(e.fechaTour||"1970-01-01");return new Date(o.fechaTour||"1970-01-01")-s}),S()}catch(a){console.error("Error cargando ventas:",a),t("#salesTableBody").html(`
            <tr><td colspan="9" class="error-cell">
                <i class="fas fa-exclamation-triangle"></i> Error cargando ventas
            </td></tr>
        `)}}function S(a="",e=!1){let o=[...b];if(o=o.filter(i=>i.fechaTour&&i.fechaTour.startsWith(x)),a&&(o=o.filter(i=>i.vendedor===a)),e){const i=new Date().toISOString().split("T")[0];o=o.filter(c=>c.fechaTour===i)}const s=Math.ceil(o.length/F),n=(h-1)*F,E=o.slice(n,n+F).map(i=>{const f=i.vendedor===P?.displayName?`<button class="btn-view" onclick="verDetalleVenta('${i.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>
               <button class="btn-edit" onclick="editarVenta('${i.id}')" title="Editar"><i class="fas fa-edit"></i></button>
               <button class="btn-delete" onclick="eliminarVenta('${i.id}')" title="Eliminar"><i class="fas fa-trash"></i></button>`:`<button class="btn-view" onclick="verDetalleVenta('${i.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>`,T=ha(i.fechaTour),u=`${ma(i.nombreCliente)}${i.numeroHabitacion?` <small>(${i.numeroHabitacion}</small>)`:""}`;return`
            <tr>
                <td>${T}</td>
                <td class="user-cell">
                    <img src="${y.find(C=>C.usuario===i.vendedor)?.imagen||"/smile.png"}" class="avatar-small">
                    <strong>${fa(i.vendedor)}</strong>
                </td>
                <td><span class="tour-badge">${i.tipoTour}</span></td>
                <td><span class="pax-badge"><i class="fas fa-users"></i> ${i.cantidadPax}</span></td>
                <td>${u}</td>
                <td><strong class="price">S/ ${(i.importeTotal||0).toFixed(2)}</strong></td>
                <td>S/ ${(i.precioUnitario||0).toFixed(2)}</td>
                <td><span class="status-badge ${i.estadoPago==="pagado"||i.estadoPago==="cobrado"?"paid":"pending"}">
                    <i class="fas fa-${i.estadoPago==="pagado"||i.estadoPago==="cobrado"?"check-circle":"clock"}"></i> 
                    ${i.estadoPago?.toUpperCase()}
                </span></td>
                <td>S/ ${(i.ganancia||0).toFixed(2)}</td>
                <td><span class="points-badge"><i class="fas fa-star"></i> ${i.puntos||0}</span></td>
                <td><div class="action-buttons">${f}</div></td>
            </tr>
        `}).join("");t("#salesTableBody").html(E||'<tr><td colspan="11" class="empty-cell"><i class="fas fa-inbox"></i> No hay ventas para mostrar</td></tr>'),ga(s)}function ga(a){if(a<=1){t("#paginationContainer").html("");return}let e='<div class="pagination">';h>1&&(e+=`<button class="page-btn" onclick="cambiarPagina(${h-1})">
            <i class="fas fa-chevron-left"></i>
        </button>`);for(let o=1;o<=a;o++)o===h?e+=`<button class="page-btn active">${o}</button>`:e+=`<button class="page-btn" onclick="cambiarPagina(${o})">${o}</button>`;h<a&&(e+=`<button class="page-btn" onclick="cambiarPagina(${h+1})">
            <i class="fas fa-chevron-right"></i>
        </button>`),e+="</div>",t("#paginationContainer").html(e)}async function na(){try{const a=Sa(x),e=`${a.replace("-","")}`,o=await va(I(m,"ganadores",e));if(o.exists()){ta(o.data());return}const s=await D(N(m,"registrosdb")),n={};s.docs.forEach(C=>{const g=C.data();if(g.fechaTour?.startsWith(a)){const v=g.vendedor;n[v]||(n[v]={puntos:0,ventas:0}),n[v].puntos+=g.puntos||0,n[v].ventas+=g.qventa||0}});const r=Object.entries(n);if(r.length===0){t("#lastWinner").html(`
                <div class="winner-header">
                    <i class="fas fa-trophy"></i>
                    <h3>Ganador del Mes Anterior</h3>
                </div>
                <div class="no-winner">
                    <i class="fas fa-question-circle"></i>
                    <span>No hay datos disponibles</span>
                </div>
            `);return}r.sort((C,g)=>g[1].puntos-C[1].puntos);const[E,i]=r[0],[c,f]=a.split("-"),T=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],u={ganador:E,puntosGanados:i.puntos,totalVentas:i.ventas,mes:T[parseInt(f)-1],year:c,mesCompleto:a,fechaRegistro:J()};await G(I(m,"ganadores",e),u),ta(u)}catch(a){console.error("Error:",a),t("#lastWinner").html(`
            <div class="winner-header">
                <i class="fas fa-trophy"></i>
                <h3>Ganador del Mes Anterior</h3>
            </div>
            <div class="error-winner">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Error cargando datos</span>
            </div>
        `)}}function ta(a){const e=y.find(o=>o.usuario===a.ganador||o.nombre===a.ganador);t("#lastWinner").html(`
        <div class="winner-header">
            <i class="fas fa-trophy"></i>
            <h3>Ganador del Mes Anterior</h3>
        </div>
        <div class="winner-info">
            <img src="${e?.imagen||"/smile.png"}" 
                 alt="${e?.nombre||a.ganador}">
            <div class="winner-details">
                <h4>${e?.nombre||a.ganador}</h4>
                <p>${a.mes} ${a.year}</p>
                <span class="winner-points">${a.puntosGanados} puntos</span>
                <span class="winner-sales">${a.totalVentas} tours</span>
            </div>
            <div class="winner-achievement">
                <i class="fas fa-crown"></i>
                <span>¡Campeón!</span>
            </div>
        </div>
    `)}function R(){const a=b.filter(c=>c.fechaTour&&c.fechaTour.startsWith(x)),e=new Date().toISOString().split("T")[0],o=a.filter(c=>c.fechaTour===e),s=a.reduce((c,f)=>c+(f.qventa||0),0),n=a.reduce((c,f)=>c+(f.puntos||0),0),r=o.reduce((c,f)=>c+(f.qventa||0),0),E=2500;t("#totalTours").text(s),t("#totalPuntos").text(n),t("#toursHoy").text(r);const i=[Math.min(r/5*100,100),Math.min(s/50*100,100),Math.min(n/E*100,100),100];t(".summary-stat").each((c,f)=>{const T=i[c]/100*360;t(f).css({"--progress":`${T}deg`,"--width":`${i[c]}%`})})}function ya(){const a=y.map(e=>`<option value="${e.usuario}">${e.nombre}</option>`).join("");t("#filterEmployee").html(`
        <option value="">Todos los vendedores</option>
        ${a}
    `)}t(document).on("change","#mostrarn",function(){F=parseInt(t(this).val()),h=1,S(t("#filterEmployee").val())});t(document).on("change","#monthSelector",function(){x=t(this).val(),h=1,Promise.all([M(),H()]).then(()=>{$(),S(),R(),na()})});t(document).on("change","#filterEmployee",function(){h=1,S(t(this).val())});t(document).on("click","#todayFilter",function(){h=1,S(t("#filterEmployee").val(),!0)});window.cambiarPagina=function(a){h=a,S(t("#filterEmployee").val())};window.verDetalleVenta=function(a){const e=b.find(o=>o.id===a);if(!e){l("Venta no encontrada","error");return}ra(e,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),l("Datos cargados para visualización","info")};window.editarVenta=function(a){const e=b.find(o=>o.id===a);if(!e){l("Venta no encontrada","error");return}ra(e,!1),t(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",a),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),l("Datos cargados para edición","info")};window.eliminarVenta=function(a){const e=b.find(n=>n.id===a);if(!e){l("Venta no encontrada","error");return}!confirm(`¿Estás seguro de eliminar la venta de "${e.nombreCliente}"?

Esta acción NO se puede deshacer.`)||!confirm(`⚠️ CONFIRMACIÓN FINAL ⚠️

Se eliminará permanentemente:
• Cliente: ${e.nombreCliente}
• Tour: ${e.tipoTour}
• Importe: S/ ${e.importeTotal}

¿CONFIRMAS LA ELIMINACIÓN?

Esta acción es IRREVERSIBLE.`)||Ea(a)};function ra(a,e=!1){U(),d=p.find(o=>o.tour===a.tipoTour||a.tipoTour.includes(o.tour.split(" ")[1])),d?(t("#tourDisplay .tour-text").text(d.tour),t("#tipoTour").val(d.tour),t(`.tour-row[data-tour*='"nt":${d.nt}']`).addClass("selected")):(t("#tourDisplay .tour-text").text(a.tipoTour||"🔍 Seleccionar tour..."),t("#tipoTour").val(a.tipoTour||"")),t("#registroEn").val(a.registroEn),t("#nombreCliente").val(a.nombreCliente),t("#numeroHabitacion").val(a.numeroHabitacion||""),t("#tipoDocumento").val(a.tipoDocumento||"dni"),t("#numeroDocumento").val(a.numeroDocumento||""),t("#cantidadPax").val(a.cantidadPax||1),t("#precioUnitario").val(a.precioUnitario||0),t("#metodoPago").val(a.metodoPago||""),t("#importeTotal").val(a.importeTotal||0),t("#ganancia").val(a.ganancia||0),Q(),t("#horaSalida").val(a.horaSalida),t("#Operador").val(a.Operador),t("#Comentario").val(a.Comentario),t("#fechaTour").val(a.fechaTour),t("#estadoPago").val(a.estadoPago||"pagado"),t("#vtJulio").prop("checked",a.esVentaJulio||!1),t("#vtSonia").prop("checked",a.esVentaSonia||!1),t("#vtExterna").prop("checked",a.esVentaExterna||!1),L(),e?(t("#formularioVenta input, #formularioVenta select, .tour-display").prop("disabled",!0),t(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),t("#formularioVenta").addClass("view-only"),t(".btn-clear-view").length===0&&t(".form-actions").prepend(`
                <button type="button" class="btn-clear-view" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Limpiar Vista
                </button>
            `)):(t("#formularioVenta input, #formularioVenta select").prop("disabled",!1),t(".tour-display").prop("disabled",!1),t(".btn-save").prop("disabled",!1),t("#formularioVenta").addClass("edit-mode"),t(".btn-cancel-edit").length===0&&t(".form-actions").prepend(`
                <button type="button" class="btn-cancel-edit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Cancelar Edición
                </button>
            `))}function L(){const a=parseInt(t("#cantidadPax").val())||1,e=d?d.pts:0,s=t("#vtJulio").prop("checked")||t("#vtSonia").prop("checked")||t("#vtExterna").prop("checked")?0:e*a;t("#vistaPreviaLaPuntos").text(s)}function U(){const a=sa(),e=1;d=null,t("#formularioVenta input, #formularioVenta select").prop("disabled",!1),t(".btn-save").prop("disabled",!1),t("#formularioVenta").removeClass("view-only edit-mode"),t(".btn-save").html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),t(".btn-clear-view, .btn-cancel-edit").remove(),t("#formularioVenta")[0].reset(),t("#cantidadPax").val(e),t("#fechaTour").val(a),t("#vistaPreviaLaPuntos").text("0"),t("#tourDisplay .tour-text").text("🔍 Seleccionar tour..."),t(".tour-row").removeClass("selected"),t("#importeTotal, #ganancia").prop("disabled",!0)}async function Ea(a){try{l("Eliminando venta...","info"),await pa(I(m,"registrosdb",a));const e=[];for(let s=0;s<localStorage.length;s++){const n=localStorage.key(s);if(n&&n.startsWith("vendedor_"))try{const r=JSON.parse(localStorage.getItem(n));r&&r.idVenta===a&&e.push(n)}catch{}}e.forEach(s=>localStorage.removeItem(s)),b=b.filter(s=>s.id!==a),await M(),$(),S(),R(),t(".btn-save").attr("data-edit-id")===a&&U(),l("¡Venta eliminada exitosamente!","success")}catch(e){console.error("Error eliminando venta:",e),l("Error al eliminar la venta. Inténtalo nuevamente.","error")}}t(document).on("click",".btn-clear-view",function(){U(),l("Vista limpiada","info")});t(document).on("click",".btn-cancel-edit",function(){U(),l("Edición cancelada","info")});function Sa(a){const[e,o]=a.split("-"),s=new Date(parseInt(e),parseInt(o)-2);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}let p=[];async function la(){try{console.log("🔄 Cargando tours...");const a=O("toursSmile");if(a?.length>0){p=a.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),console.log(`✅ ${p.length} tours desde cache`),typeof V=="function"&&V();return}const e=await D(W(N(m,"listatours"),Y("activo","==",!0)));if(e.empty){console.log("❌ No hay tours activos"),p=[];return}const o=e.docs.map(s=>({id:s.id,...s.data()}));p=o.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),A("toursSmile",o,300),console.log(`✅ ${p.length} tours cargados desde Firebase`),typeof V=="function"&&V()}catch(a){console.error("❌ Error cargando tours:",a),l("Error al cargar tours","error")}}let d=null;function Ta(){return`
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
    `}function V(){Ca(p),t("#tourDisplay").off("click"),t("#tourSearch").off("input"),t(document).off("click",".tour-row"),t("#tourDisplay").on("click",function(e){e.stopPropagation();const o=t("#tourDropdown");o.hasClass("active")?(o.removeClass("active"),t("#tourDisplay").removeClass("active")):(o.addClass("active"),t("#tourDisplay").addClass("active"),setTimeout(()=>t("#tourSearch").focus(),50))});let a;t("#tourSearch").on("input",function(){const e=t(this).val().toLowerCase();a&&clearTimeout(a),a=setTimeout(()=>{if(e.length===0)q(p);else if(e.length>=2){const o=p.filter(s=>s.tour.toLowerCase().includes(e)||s.price.toString().includes(e));q(o)}},200)}),t(document).on("click",".tour-row",function(e){e.stopPropagation();const o=t(this).data("index");d=p[o],d&&(t("#tourDisplay .tour-text").text(d.tour),t("#tipoTour").val(d.tour),t("#precioUnitario").val(d.price),t("#tourDropdown").removeClass("active"),t("#tourDisplay").removeClass("active"),t(".tour-row").removeClass("selected"),t(this).addClass("selected"),setTimeout(()=>{X("#precioUnitario"),ca(),L()},50))}),t(document).on("click",function(e){t(e.target).closest(".tour-selector").length||(t("#tourDropdown").removeClass("active"),t("#tourDisplay").removeClass("active"))}),Pa(),Oa()}function q(a){if(!a.length){t("#tourTableBody").html('<tr><td colspan="4" style="text-align:center;color:#666;">No hay tours disponibles</td></tr>');return}const e=document.createDocumentFragment();a.forEach((s,n)=>{const r=document.createElement("tr");r.className="tour-row",r.dataset.index=p.indexOf(s),r.innerHTML=`
            <td class="tour-num">${n+1}</td>
            <td class="tour-name">${s.tour}</td>
            <td class="tour-price">S/ ${s.price}</td>
            <td class="tour-pts">${s.pts} pts</td>
        `,e.appendChild(r)});const o=document.getElementById("tourTableBody");o.innerHTML="",o.appendChild(e)}function Ca(a){q(a)}function Q(){const a=t("#estadoPago").val(),e=parseInt(t("#cantidadPax").val())||1,s=(parseFloat(t("#precioUnitario").val())||0)*e;let n=0;a==="pagado"||a==="pagar"?n=s:(a==="cobrado"||a==="cobrar")&&d&&d.com&&(n=d.com*e),t("#ganancia").val(n.toFixed(2)),X("#ganancia")}t(document).on("change","#estadoPago",function(){Q()});function X(a){const e=t(a);e.addClass("field-updated"),setTimeout(()=>{e.removeClass("field-updated")},1e3)}function ca(){const a=parseInt(t("#cantidadPax").val())||1,e=parseFloat(t("#precioUnitario").val())||0;t("#importeTotal").val((e*a).toFixed(2)),Q(),X("#importeTotal")}function wa(){return`
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
    `}function Pa(){if(!p.length){t("#pointsGrid").html('<p style="text-align:center;color:#666;">No hay tours disponibles</p>');return}const e=[...p].sort((o,s)=>s.pts-o.pts).map(o=>`
        <div class="point-item">
            <span class="service-name">${o.tour}</span>
            <span class="point-value">${o.pts}</span>
        </div>
    `).join("");t("#pointsGrid").html(e)}function Oa(){if(!p.length){t("#pricesGrid").html('<p style="text-align:center;color:#666;">No hay precios disponibles</p>');return}const a=p.map(e=>`
        <div class="price-item">
            <span class="service-name">${e.tour}</span>
            <span class="service-price">S/ ${e.price.toFixed(2)}</span>
        </div>
    `).join("");t("#pricesGrid").html(a)}t(document).on("click",".btn-save",async a=>{if(a.preventDefault(),!t(".btn-save").prop("disabled"))try{if(!d){l("⚠️ Selecciona un tour primero","error"),t("#tourDisplay").focus();return}const e=t(".btn-save"),o=e.html();e.prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Guardando venta...');const s=t(".btn-save").attr("data-edit-id"),n=!!s,r=parseInt(t("#cantidadPax").val())||1,E=t("#vtJulio").prop("checked"),i=t("#vtSonia").prop("checked"),c=t("#vtExterna").prop("checked"),T=E||i||c?0:d.pts*r,u={tipoTour:d.tour,registroEn:t("#registroEn").val(),nombreCliente:t("#nombreCliente").val(),numeroHabitacion:t("#numeroHabitacion").val(),tipoDocumento:t("#tipoDocumento").val(),numeroDocumento:t("#numeroDocumento").val(),cantidadPax:r,precioUnitario:parseFloat(t("#precioUnitario").val())||0,metodoPago:t("#metodoPago").val(),importeTotal:parseFloat(t("#importeTotal").val())||0,ganancia:parseFloat(t("#ganancia").val())||0,horaSalida:t("#horaSalida").val(),Operador:t("#Operador").val(),Comentario:t("#Comentario").val(),fechaTour:t("#fechaTour").val(),estadoPago:t("#estadoPago").val(),vendedor:P.displayName,puntos:T,email:P.email,qventa:1,fechaRegistro:J(),esVentaJulio:E,esVentaSonia:i,esVentaExterna:c},C=[[d,"#tourDisplay","tour"],[u.nombreCliente,"#nombreCliente","Cliente"],[u.horaSalida,"#horaSalida","Hora"],[u.fechaTour,"#fechaTour","Fecha"],[u.Operador,"#Operador","Operador"],[u.numeroDocumento,"#numeroDocumento","Documento"],[u.metodoPago,"#metodoPago","y Metodo de pago"]];t(".faltaValor, .okValor").removeClass("faltaValor okValor");const g=C.filter(([v,w,k])=>{const Z=v&&v.toString().trim();return t(w).addClass(Z?"okValor":"faltaValor"),Z?null:k}).map(([,,v])=>v).filter(Boolean);if(g.length){e.prop("disabled",!1).html(o),l(`⚠️ Completa: ${g.join(", ")}`,"error"),t(".faltaValor").first().focus();return}if(n){u.idVenta=s,await G(I(m,"registrosdb",s),u);const v=`vendedor_${P.displayName}`;A(v,u,450);const w=b.findIndex(k=>k.id===s);w!==-1&&(b[w]={id:s,...u}),l("¡Venta actualizada exitosamente!","success")}else{const w=`venta_${Date.now()}`;u.idVenta=w,await G(I(m,"registrosdb",w),u);const k=`vendedor_${P.displayName}`;A(k,u,450),l("¡Venta registrada exitosamente!","success")}t(".faltaValor, .okValor").removeClass("faltaValor okValor"),U(),await H(),await M(),$(),R()}catch(e){console.error("Error al guardar/actualizar venta:",e),l("Error al procesar la venta. Inténtalo nuevamente.","error"),t(".btn-save").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Venta')}});t(document).on("change","#vtJulio, #vtSonia, #vtExterna",function(){L()});t(document).on("input change","#formularioVenta input, #formularioVenta select",function(){const a=t(this).val()?.toString().trim();t(this).removeClass("faltaValor").addClass(a?"okValor":"faltaValor")});t(document).on("click",".tour-row",function(){t("#tourDisplay").removeClass("faltaValor").addClass("okValor")});t(document).on("change","#tipoTour",function(){const a=t(this).find("option:selected").data("price")||0,e=parseInt(t("#cantidadPax").val())||1;t("#precioUnitario").val(a),t("#importeTotal").val(a*e),L()});t(document).on("input","#cantidadPax, #precioUnitario",function(){ca(),L()});t(document).on("click",".tema",async function(){const a=t(this).data("tema");try{await G(I(m,"configuracion",P.displayName),{tema:a,actualizado:J()},{merge:!0}),A("wiTema",a,72),j('Tema guardado <i class="fa-solid fa-circle-check"></i>')}catch(e){console.error(e)}});async function Aa(){try{const a=t(".wifresh"),e=a.html();a.html('<i class="fas fa-spinner fa-spin"></i>').prop("disabled",!0),l("🔄 Verificando actualizaciones...","info");const o=await Da();if(!o.hayActualizaciones){a.html(e).prop("disabled",!1),l("✅ Todo está actualizado","success");return}l(`🔄 Aplicando ${o.total} actualizaciones...`,"info");const s=[];o.empleados&&s.push(Na()),o.tours&&s.push(Va()),o.ventas&&s.push(Ia()),o.notas&&s.push($a()),await Promise.all(s),await Promise.all([M(),R()]),$(),S(),V(),a.html(e).prop("disabled",!1),l(`✅ ${o.total} actualizaciones aplicadas correctamente`,"success")}catch(a){console.error("❌ Error en wifresh:",a),t(".wifresh").html('<i class="fa-solid fa-rotate-right"></i>').prop("disabled",!1),l("❌ Error en actualización. Inténtalo nuevamente.","error")}}async function Da(){const a={empleados:!1,tours:!1,ventas:!1,notas:!1,total:0,hayActualizaciones:!1};try{(!O("empleadosSmile")||B("empleadosSmile",300))&&(a.empleados=!0,a.total++),(!O("toursSmile")||B("toursSmile",300))&&(a.tours=!0,a.total++),a.ventas=!0,a.total++,(!O("notasSmile")||B("notasSmile",600))&&(a.notas=!0,a.total++),a.hayActualizaciones=a.total>0}catch(e){console.error("Error detectando cambios:",e)}return a}function B(a,e){try{const o=localStorage.getItem(a+"_timestamp");if(!o)return!0;const s=parseInt(o);return(Date.now()-s)/1e3>e}catch{return!0}}async function Na(){_("empleadosSmile"),await ia()}async function Va(){_("toursSmile"),await la()}async function Ia(){await H()}async function $a(){_("notasSmile"),await oa()}t(document).on("click",".wifresh",function(a){a.preventDefault(),Aa()});
