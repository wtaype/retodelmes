import{t as K,$ as a,v as aa,x as F,M as L,N as d,y as sa,d as P,a as v,j as B,i as k,l as w,z as ea,C as ia,b as A,c as N,g as ta,A as z,q as W,e as _,h as Y}from"./widev-DHEX-f3z.js";let S=null;K(Y,async s=>{if(!s)return window.location.href="/";S=s;try{const e=z("wiSmile");if(e)return G(e);const t=(await A(W(N(v,"smiles"),_("usuario","==",s.displayName)))).docs[0].data();w("wiSmile",t,450),G(t)}catch(e){console.error(e)}});a(document).on("click",".bt_salir",async()=>{await aa(Y),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}});a(document).on("click",".tab-btn",function(){const s=a(this).data("tab");F(this,"active"),F("#"+s+"-tab","active")});a(document).on("click",".bt_cargar",()=>{const s=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+)$/;Object.keys(localStorage).filter(e=>s.test(e)).forEach(e=>localStorage.removeItem(e)),L("Actualizado"),setTimeout(()=>location.reload(),800)});let C="2025-09",u=1,V=5,m=[],g=[];function G(s){console.log(s.nombre),L("Bienvenido "+s.nombre+"!"),a(".app").html(`
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
                            <img src="${s.imagen}" alt="${s.nombre}" class="user-avatar">
                            <span class="user-name">${s.nombre}</span>
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

                    ${pa()}
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

            ${va()}
        </main>

        <div id="notifications-container"></div>
        <div id="modal-container"></div>
    `),oa()}async function oa(s){try{const e=new Date().toISOString().slice(0,7);C=e,a("#monthSelector").val(e),a("#fechaTour").val(new Date().toLocaleDateString("sv-SE")),await Promise.all([na(),U(),Q()]),ca(),R(),ua()}catch(e){console.error("Error inicializando dashboard:",e),d("Error cargando datos del dashboard","error")}}async function na(){try{const s=z("empleadosSmile");s&&(g=s,O());const e=W(N(v,"smiles"),_("participa","==","si"));g=(await A(e)).docs.map(t=>({id:t.id,...t.data()})),w("empleadosSmile",g,300),await $(),O()}catch(s){console.error("Error cargando empleados:",s),a("#workersGrid").html(`
            <div class="error-workers">
                <i class="fas fa-exclamation-triangle"></i>
                Error cargando empleados
            </div>
        `)}}async function $(){try{const e=(await A(N(v,"registrosdb"))).docs.filter(i=>{const t=i.data();return t.fechaTour&&t.fechaTour.startsWith(C)});g.forEach(i=>{const t=e.filter(n=>n.data().vendedor===i.usuario);i.totalPuntos=t.reduce((n,r)=>n+(r.data().puntos||0),0),i.totalVentas=t.reduce((n,r)=>n+(r.data().qventa||0),0)}),g.sort((i,t)=>t.totalPuntos-i.totalPuntos)}catch(s){console.error("Error calculando puntos:",s)}}function O(){const s=g.map((e,i)=>{const t=i+1,n=t===1,r=t===2;return`
            <div class="worker-card ${n?"champion":r?"runner-up":""}" data-employee="${e.usuario}">
                <div class="rank-badge">
                    <i class="fas fa-${n?"crown":r?"medal":"user"}"></i>
                    #${t}
                </div>
                <div class="worker-avatar">
                    <img src="${e.imagen}" alt="${e.nombre}">
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
        `}).join("");a("#workersGrid").html(s)}async function U(){try{m=(await A(N(v,"registrosdb"))).docs.map(e=>({id:e.id,...e.data()})),m.sort((e,i)=>{const t=new Date(e.fechaTour||"1970-01-01");return new Date(i.fechaTour||"1970-01-01")-t}),y()}catch(s){console.error("Error cargando ventas:",s),a("#salesTableBody").html(`
            <tr><td colspan="9" class="error-cell">
                <i class="fas fa-exclamation-triangle"></i> Error cargando ventas
            </td></tr>
        `)}}function y(s="",e=!1){let i=[...m];if(i=i.filter(o=>o.fechaTour&&o.fechaTour.startsWith(C)),s&&(i=i.filter(o=>o.vendedor===s)),e){const o=new Date().toISOString().split("T")[0];i=i.filter(T=>T.fechaTour===o)}const t=Math.ceil(i.length/V),n=(u-1)*V,l=i.slice(n,n+V).map(o=>{const p=o.vendedor===S?.displayName?`<button class="btn-view" onclick="verDetalleVenta('${o.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>
               <button class="btn-edit" onclick="editarVenta('${o.id}')" title="Editar"><i class="fas fa-edit"></i></button>
               <button class="btn-delete" onclick="eliminarVenta('${o.id}')" title="Eliminar"><i class="fas fa-trash"></i></button>`:`<button class="btn-view" onclick="verDetalleVenta('${o.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>`,E=new Date(o.fechaTour).toLocaleDateString("es-ES"),f=`${ea(o.nombreCliente)}${o.numeroHabitacion?` <small>(${o.numeroHabitacion}</small>)`:""}`,b=(o.precioUnitario*.1).toFixed(2);return`
            <tr>
                <td>${E}</td>
                <td class="user-cell">
                    <img src="${g.find(h=>h.usuario===o.vendedor)?.imagen||"/smile.png"}" class="avatar-small">
                    <strong>${ia(o.vendedor)}</strong>
                </td>
                <td><span class="tour-badge">${o.tipoTour}</span></td>
                <td><span class="pax-badge"><i class="fas fa-users"></i> ${o.cantidadPax}</span></td>
                <td>${f}</td>
                <td><strong class="price">S/ ${(o.importeTotal||0).toFixed(2)}</strong></td>
                <td>S/ ${(o.precioUnitario||0).toFixed(2)}</td>
                <td>S/ ${b}</td>
                <td><span class="status-badge ${o.estadoPago==="pagado"||o.estadoPago==="cobrado"?"paid":"pending"}">
                    <i class="fas fa-${o.estadoPago==="pagado"||o.estadoPago==="cobrado"?"check-circle":"clock"}"></i> 
                    ${o.estadoPago?.toUpperCase()}
                </span></td>
                <td>S/ ${(o.ganancia||0).toFixed(2)}</td>
                <td><span class="points-badge"><i class="fas fa-star"></i> ${o.puntos||0}</span></td>
                <td><div class="action-buttons">${p}</div></td>
            </tr>
        `}).join("");a("#salesTableBody").html(l||'<tr><td colspan="12" class="empty-cell"><i class="fas fa-inbox"></i> No hay ventas para mostrar</td></tr>'),ra(t)}function ra(s){if(s<=1){a("#paginationContainer").html("");return}let e='<div class="pagination">';u>1&&(e+=`<button class="page-btn" onclick="cambiarPagina(${u-1})">
            <i class="fas fa-chevron-left"></i>
        </button>`);for(let i=1;i<=s;i++)i===u?e+=`<button class="page-btn active">${i}</button>`:e+=`<button class="page-btn" onclick="cambiarPagina(${i})">${i}</button>`;u<s&&(e+=`<button class="page-btn" onclick="cambiarPagina(${u+1})">
            <i class="fas fa-chevron-right"></i>
        </button>`),e+="</div>",a("#paginationContainer").html(e)}async function Q(){try{const s=da(C),e=`${s.replace("-","")}`,i=await ta(P(v,"ganadores",e));if(i.exists()){j(i.data());return}const t=await A(N(v,"registrosdb")),n={};t.docs.forEach(b=>{const h=b.data();if(h.fechaTour?.startsWith(s)){const x=h.vendedor;n[x]||(n[x]={puntos:0,ventas:0}),n[x].puntos+=h.puntos||0,n[x].ventas+=h.qventa||0}});const r=Object.entries(n);if(r.length===0){a("#lastWinner").html(`
                <div class="winner-header">
                    <i class="fas fa-trophy"></i>
                    <h3>Ganador del Mes Anterior</h3>
                </div>
                <div class="no-winner">
                    <i class="fas fa-question-circle"></i>
                    <span>No hay datos disponibles</span>
                </div>
            `);return}r.sort((b,h)=>h[1].puntos-b[1].puntos);const[l,o]=r[0],[T,p]=s.split("-"),E=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],f={ganador:l,puntosGanados:o.puntos,totalVentas:o.ventas,mes:E[parseInt(p)-1],year:T,mesCompleto:s,fechaRegistro:B()};await k(P(v,"ganadores",e),f),j(f)}catch(s){console.error("Error:",s),a("#lastWinner").html(`
            <div class="winner-header">
                <i class="fas fa-trophy"></i>
                <h3>Ganador del Mes Anterior</h3>
            </div>
            <div class="error-winner">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Error cargando datos</span>
            </div>
        `)}}function j(s){const e=g.find(i=>i.usuario===s.ganador||i.nombre===s.ganador);a("#lastWinner").html(`
        <div class="winner-header">
            <i class="fas fa-trophy"></i>
            <h3>Ganador del Mes Anterior</h3>
        </div>
        <div class="winner-info">
            <img src="${e?.imagen||"/smile.png"}" 
                 alt="${e?.nombre||s.ganador}">
            <div class="winner-details">
                <h4>${e?.nombre||s.ganador}</h4>
                <p>${s.mes} ${s.year}</p>
                <span class="winner-points">${s.puntosGanados} puntos</span>
                <span class="winner-sales">${s.totalVentas} tours</span>
            </div>
            <div class="winner-achievement">
                <i class="fas fa-crown"></i>
                <span>¡Campeón!</span>
            </div>
        </div>
    `)}function R(){const s=m.filter(l=>l.fechaTour&&l.fechaTour.startsWith(C)),e=new Date().toISOString().split("T")[0],i=s.filter(l=>l.fechaTour===e),t=s.reduce((l,o)=>l+(o.qventa||0),0),n=s.reduce((l,o)=>l+(o.puntos||0),0),r=i.reduce((l,o)=>l+(o.qventa||0),0);a("#totalTours").text(t),a("#totalPuntos").text(n),a("#toursHoy").text(r)}function ca(){const s=g.map(e=>`<option value="${e.usuario}">${e.nombre}</option>`).join("");a("#filterEmployee").html(`
        <option value="">Todos los vendedores</option>
        ${s}
    `)}a(document).on("change","#mostrarn",function(){V=parseInt(a(this).val()),u=1,y(a("#filterEmployee").val())});a(document).on("change","#monthSelector",function(){C=a(this).val(),u=1,Promise.all([$(),U()]).then(()=>{O(),y(),R(),Q()})});a(document).on("change","#filterEmployee",function(){u=1,y(a(this).val())});a(document).on("click","#todayFilter",function(){u=1,y(a("#filterEmployee").val(),!0)});window.cambiarPagina=function(s){u=s,y(a("#filterEmployee").val())};window.verDetalleVenta=function(s){const e=m.find(i=>i.id===s);if(!e){d("Venta no encontrada","error");return}X(e,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),d("Datos cargados para visualización","info")};window.editarVenta=function(s){const e=m.find(i=>i.id===s);if(!e){d("Venta no encontrada","error");return}X(e,!1),a(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",s),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),d("Datos cargados para edición","info")};window.eliminarVenta=function(s){const e=m.find(n=>n.id===s);if(!e){d("Venta no encontrada","error");return}!confirm(`¿Estás seguro de eliminar la venta de "${e.nombreCliente}"?

Esta acción NO se puede deshacer.`)||!confirm(`⚠️ CONFIRMACIÓN FINAL ⚠️

Se eliminará permanentemente:
• Cliente: ${e.nombreCliente}
• Tour: ${e.tipoTour}
• Importe: S/ ${e.importeTotal}

¿CONFIRMAS LA ELIMINACIÓN?

Esta acción es IRREVERSIBLE.`)||la(s)};function X(s,e=!1){D(),c=M.find(i=>i.tour===s.tipoTour||s.tipoTour.includes(i.tour.split(" ")[1])),c?(a("#tourDisplay .tour-text").text(c.tour),a("#tipoTour").val(c.tour),a(`.tour-row[data-tour*='"nt":${c.nt}']`).addClass("selected")):(a("#tourDisplay .tour-text").text(s.tipoTour||"🔍 Seleccionar tour..."),a("#tipoTour").val(s.tipoTour||"")),a("#registroEn").val(s.registroEn),a("#nombreCliente").val(s.nombreCliente),a("#numeroHabitacion").val(s.numeroHabitacion||""),a("#tipoDocumento").val(s.tipoDocumento||"dni"),a("#numeroDocumento").val(s.numeroDocumento||""),a("#cantidadPax").val(s.cantidadPax||1),a("#precioUnitario").val(s.precioUnitario||0),a("#metodoPago").val(s.metodoPago||""),a("#importeTotal").val(s.importeTotal||0),a("#ganancia").val(s.ganancia||0),H(),a("#horaSalida").val(s.horaSalida),a("#Operador").val(s.Operador),a("#Viaje").val(s.Viaje||""),a("#Comentario").val(s.Comentario),a("#fechaTour").val(s.fechaTour),a("#estadoPago").val(s.estadoPago||"pagado"),a("#vtJulio").prop("checked",s.esVentaJulio||!1),a("#vtSonia").prop("checked",s.esVentaSonia||!1),a("#vtExterna").prop("checked",s.esVentaExterna||!1),I(),e?(a("#formularioVenta input, #formularioVenta select, .tour-display").prop("disabled",!0),a(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),a("#formularioVenta").addClass("view-only"),a(".btn-clear-view").length===0&&a(".form-actions").prepend(`
                <button type="button" class="btn-clear-view" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Limpiar Vista
                </button>
            `)):(a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a(".tour-display").prop("disabled",!1),a(".btn-save").prop("disabled",!1),a("#formularioVenta").addClass("edit-mode"),a(".btn-cancel-edit").length===0&&a(".form-actions").prepend(`
                <button type="button" class="btn-cancel-edit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Cancelar Edición
                </button>
            `))}function I(){const s=parseInt(a("#cantidadPax").val())||1,e=c?c.pts:0,t=a("#vtJulio").prop("checked")||a("#vtSonia").prop("checked")||a("#vtExterna").prop("checked")?0:e*s;a("#vistaPreviaLaPuntos").text(t)}function D(){c=null,a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a(".btn-save").prop("disabled",!1),a("#formularioVenta").removeClass("view-only edit-mode"),a(".btn-save").html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),a(".btn-clear-view, .btn-cancel-edit").remove(),a("#formularioVenta")[0].reset(),a("#cantidadPax").val(1),a("#vistaPreviaLaPuntos").text("0"),a("#tourDisplay .tour-text").text("🔍 Seleccionar tour..."),a(".tour-row").removeClass("selected")}async function la(s){try{d("Eliminando venta...","info"),await sa(P(v,"registrosdb",s));const e=[];for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);if(n&&n.startsWith("vendedor_"))try{const r=JSON.parse(localStorage.getItem(n));r&&r.idVenta===s&&e.push(n)}catch{}}e.forEach(t=>localStorage.removeItem(t)),m=m.filter(t=>t.id!==s),await $(),O(),y(),R(),a(".btn-save").attr("data-edit-id")===s&&D(),d("¡Venta eliminada exitosamente!","success")}catch(e){console.error("Error eliminando venta:",e),d("Error al eliminar la venta. Inténtalo nuevamente.","error")}}a(document).on("click",".btn-clear-view",function(){D(),d("Vista limpiada","info")});a(document).on("click",".btn-cancel-edit",function(){D(),d("Edición cancelada","info")});function da(s){const[e,i]=s.split("-"),t=new Date(parseInt(e),parseInt(i)-2);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`}const M=[{nt:1,tour:"🪂 Parapente",price:330,pts:50,com:5},{nt:2,tour:"🏜️ Buggy 1H",price:20,pts:15,com:5},{nt:3,tour:"🏜️ Buggy 2H",price:25,pts:25,com:5},{nt:4,tour:"🏜️ Buggy Privado",price:180,pts:30,com:5},{nt:5,tour:"🏜️ Buggy 1H-Sonia",price:20,pts:25,com:5},{nt:6,tour:"🏜️ Buggy 2H-Sonia",price:25,pts:35,com:5},{nt:7,tour:"🏜️ Buggy Priv-Sonia",price:180,pts:40,com:5},{nt:8,tour:"🏜️ Buggy 2H Priv-Sonia",price:260,pts:80,com:5},{nt:9,tour:"🍷 Bodegas",price:20,pts:10,com:5},{nt:10,tour:"🍷 Bodegas-Jackson",price:20,pts:20,com:5},{nt:11,tour:"🍷 Bodegas Priv",price:150,pts:30,com:5},{nt:12,tour:"🍷 Bodegas Priv-Jackson",price:150,pts:40,com:5},{nt:13,tour:"🏛️ City Tour-Jackson",price:200,pts:50,com:5},{nt:14,tour:"🏝️ Paracas",price:60,pts:20,com:5},{nt:15,tour:"🏔️ Cañón perdidos",price:60,pts:20,com:5},{nt:16,tour:"🏍️ Cuatrimotos",price:70,pts:20,com:5},{nt:17,tour:"✈️ Sobrevuelo",price:494,pts:30,com:5},{nt:18,tour:"🗿 Nazca Terrestre",price:150,pts:10,com:5},{nt:19,tour:"🏄 Tablas Pro",price:50,pts:10,com:5},{nt:20,tour:"🏄 Tablas-Sonia",price:150,pts:15,com:5},{nt:21,tour:"🏄 Tablas+Buggy",price:150,pts:10,com:5},{nt:22,tour:"🚙 Polaris",price:380,pts:20,com:5}];let c=null;function pa(){return`
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
                    <label><i class="fas fa-plane"></i>Motivo de Viaje</label>
                    <input type="text" id="Viaje" placeholder="Turismo, trabajo, familia...">
                </div>

                <div class="form-field">
                    <label><i class="fas fa-id-card"></i>Tipo de Documento (opcional)</label>
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
                    <label><i class="fas fa-calculator"></i>Importe x Cobrar(Total)</label>
                    <input type="number" id="importeTotal" step="0.01" placeholder="S/ 0.00" disabled>
                </div>


                <div class="form-field">
                    <label><i class="fas fa-calendar-day"></i>Fecha *</label>
                    <input type="date" id="fechaTour" required>
                </div>

                <div class="form-field">
                    <label title="Es un calculo importe total - comision del operador, si es nosotros, no tiene comision, si es externo depende del tour"><i class="fas fa-handshake"></i>Ganancia *</label>
                    <input type="number" id="ganancia" step="0.01" placeholder="S/ 0.00" disabled>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-credit-card"></i>Método de Pago</label>
                    <select id="metodoPago">
                        <option value="">Seleccionar...</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Tarjeta">Tarjeta</option>
                        <option value="Transferencia">Transferencia</option>
                        <option value="Yape">Yape</option>
                        <option value="Plin">Plin</option>
                    </select>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-user"></i>Operador *</label>
                    <input type="text" id="Operador" placeholder="Ejm: Jacki, Pili, William...." required>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-clock"></i>Hora de salida *</label>
                    <input type="text" id="horaSalida" placeholder="2 HORAS -5PM" required>
                </div>

                <div class="form-field">
                    <label><i class="fa-solid fa-comment"></i>Comentario/Anotes (Opcional) *</label>
                    <input type="text" id="Comentario" placeholder="Escribe notas de tu venta" required>
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
    `}function ua(){q(M),a("#tourDisplay").on("click",function(s){s.stopPropagation(),a("#tourDropdown").toggleClass("active"),a("#tourDisplay").toggleClass("active"),a("#tourDropdown").hasClass("active")&&a("#tourSearch").focus()}),a("#tourSearch").on("input",function(){const s=a(this).val().toLowerCase(),e=M.filter(i=>i.tour.toLowerCase().includes(s)||i.price.toString().includes(s)||i.pts.toString().includes(s)||i.nt.toString().includes(s));q(e)}),a(document).on("click",".tour-row",function(){c=JSON.parse(a(this).attr("data-tour")),a("#tourDisplay .tour-text").text(c.tour),a("#tipoTour").val(c.tour),a("#precioUnitario").val(c.price),J("#precioUnitario"),Z(),I(),a("#tourDropdown").removeClass("active"),a("#tourDisplay").removeClass("active"),a(".tour-row").removeClass("selected"),a(this).addClass("selected")}),a(document).on("click",function(s){a(s.target).closest(".tour-selector").length||(a("#tourDropdown").removeClass("active"),a("#tourDisplay").removeClass("active"))})}function q(s){const e=s.map((i,t)=>`
        <tr class="tour-row" data-tour='${JSON.stringify(i)}'>
            <td class="tour-num">${t+1}</td>
            <td class="tour-name">${i.tour}</td>
            <td class="tour-price">S/ ${i.price}</td>
            <td class="tour-pts">${i.pts} pts</td>
        </tr>
    `).join("");a("#tourTableBody").html(e)}function H(){const s=a("#estadoPago").val(),e=parseInt(a("#cantidadPax").val())||1,t=(parseFloat(a("#precioUnitario").val())||0)*e;let n=0;s==="pagado"||s==="pagar"?n=t:(s==="cobrado"||s==="cobrar")&&c&&c.com&&(n=c.com*e),a("#ganancia").val(n.toFixed(2)),J("#ganancia")}a(document).on("change","#estadoPago",function(){H()});function J(s){const e=a(s);e.addClass("field-updated"),setTimeout(()=>{e.removeClass("field-updated")},1e3)}function Z(){const s=parseInt(a("#cantidadPax").val())||1,e=parseFloat(a("#precioUnitario").val())||0;a("#importeTotal").val((e*s).toFixed(2)),H(),J("#importeTotal")}function va(){return`
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
<div class="points-grid">
    <div class="point-item">
        <span class="service-name">🏜️ Buggy Privado 2 Horas - Sonia</span>
        <span class="point-value">80</span>
    </div>
    <div class="point-item">
        <span class="service-name">🪂 Parapente</span>
        <span class="point-value">50</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏜️ Buggy Privado - Sonia</span>
        <span class="point-value">40</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏛️ City Tour - Jackson</span>
        <span class="point-value">40</span>
    </div>
    <div class="point-item">
        <span class="service-name">🍷 Tour de bodegas Privado - Jackson</span>
        <span class="point-value">40</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏜️ Buggy 2 Horas - Sonia</span>
        <span class="point-value">35</span>
    </div>
    <div class="point-item">
        <span class="service-name">🍷 Tour de bodegas Privado</span>
        <span class="point-value">30</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏜️ Buggy Privado</span>
        <span class="point-value">30</span>
    </div>
    <div class="point-item">
        <span class="service-name">✈️ Sobrevuelo</span>
        <span class="point-value">30</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏜️ Buggy 1 Hora - Sonia</span>
        <span class="point-value">25</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏜️ Buggy 2 Horas</span>
        <span class="point-value">25</span>
    </div>
    <div class="point-item">
        <span class="service-name">🍷 Tour de bodegas - Jackson</span>
        <span class="point-value">20</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏝️ Tour de Paracas</span>
        <span class="point-value">20</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏔️ Cañón de los perdidos</span>
        <span class="point-value">20</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏍️ Cuatrimotos</span>
        <span class="point-value">20</span>
    </div>
    <div class="point-item">
        <span class="service-name">🚙 Polaris</span>
        <span class="point-value">20</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏜️ Buggy 1 Hora</span>
        <span class="point-value">15</span>
    </div>
    <div class="point-item">
        <span class="service-name">🍷 Tour de bodegas</span>
        <span class="point-value">15</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏄 Tablas Profesional - Sonia</span>
        <span class="point-value">15</span>
    </div>
    <div class="point-item">
        <span class="service-name">🗿 Nazca Terrestre</span>
        <span class="point-value">10</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏄 Renta Tablas Profesional</span>
        <span class="point-value">10</span>
    </div>
    <div class="point-item">
        <span class="service-name">🏄 Tablas Profesional + Buggy</span>
        <span class="point-value">10</span>
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
    <div class="prices-grid">
        <div class="price-item">
            <span class="service-name">🪂 Parapente</span>
            <span class="service-price">S/ 330.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy 1 Hora</span>
            <span class="service-price">S/ 20.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy 2 Horas</span>
            <span class="service-price">S/ 25.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy Privado</span>
            <span class="service-price">S/ 180.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy 1 Hora - Sonia</span>
            <span class="service-price">S/ 25.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy 2 Horas - Sonia</span>
            <span class="service-price">S/ 35.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy Privado - Sonia</span>
            <span class="service-price">S/ 200.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🍷 Tour de bodegas</span>
            <span class="service-price">S/ 30.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🍷 Tour de bodegas - Jackson</span>
            <span class="service-price">S/ 30.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🍷 Tour de bodegas Privado</span>
            <span class="service-price">S/ 150.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🍷 Tour de bodegas Privado - Jackson</span>
            <span class="service-price">S/ 150.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏛️ City Tour - Jackson</span>
            <span class="service-price">S/ 200.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏝️ Tour de Paracas</span>
            <span class="service-price">S/ 70.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏔️ Cañón de los perdidos</span>
            <span class="service-price">S/ 70.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏍️ Cuatrimotos</span>
            <span class="service-price">S/ 70.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">✈️ Sobrevuelo</span>
            <span class="service-price">S/ 200.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🗿 Nazca Terrestre</span>
            <span class="service-price">S/ 150.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏄 Renta Tablas Profesional</span>
            <span class="service-price">S/ 50.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏄 Tablas Profesional - Sonia</span>
            <span class="service-price">S/ 150.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏄 Tablas Profesional + Buggy</span>
            <span class="service-price">S/ 150.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🚙 Polaris</span>
            <span class="service-price">S/ 380.00</span>
        </div>
    </div>
    <div class="price-note">
        <p><i class="fas fa-info-circle"></i> <strong>Nota:</strong> City Tour incluye S/ 10.00 por persona para actividad de chocotejas</p>
    </div>
</div>

            </div>
        </section>
    `}a(document).on("click",".btn-save",async s=>{s.preventDefault();try{if(!c){d("⚠️ Selecciona un tour primero","error"),a("#tourDisplay").focus();return}const e=a(".btn-save").attr("data-edit-id"),i=!!e,t=parseInt(a("#cantidadPax").val())||1,n=a("#vtJulio").prop("checked"),r=a("#vtSonia").prop("checked"),l=a("#vtExterna").prop("checked"),T=n||r||l?0:c.pts*t,p={tipoTour:c.tour,registroEn:a("#registroEn").val(),nombreCliente:a("#nombreCliente").val(),numeroHabitacion:a("#numeroHabitacion").val(),tipoDocumento:a("#tipoDocumento").val(),numeroDocumento:a("#numeroDocumento").val(),cantidadPax:t,precioUnitario:parseFloat(a("#precioUnitario").val())||0,metodoPago:a("#metodoPago").val(),importeTotal:parseFloat(a("#importeTotal").val())||0,ganancia:parseFloat(a("#ganancia").val())||0,horaSalida:a("#horaSalida").val(),Operador:a("#Operador").val(),Viaje:a("#Viaje").val(),Comentario:a("#Comentario").val(),fechaTour:a("#fechaTour").val(),estadoPago:a("#estadoPago").val(),vendedor:S.displayName,puntos:T,email:S.email,qventa:1,fechaRegistro:B(),esVentaJulio:n,esVentaSonia:r,esVentaExterna:l};if(!p.nombreCliente||!p.horaSalida||!p.fechaTour){d("Por favor completa todos los campos obligatorios","error");return}if(i){p.idVenta=e,await k(P(v,"registrosdb",e),p);const E=`vendedor_${S.displayName}`;w(E,p,450);const f=m.findIndex(b=>b.id===e);f!==-1&&(m[f]={id:e,...p}),d("¡Venta actualizada exitosamente!","success")}else{const f=`venta_${Date.now()}`;p.idVenta=f,await k(P(v,"registrosdb",f),p);const b=`vendedor_${S.displayName}`;w(b,p,450),d("¡Venta registrada exitosamente!","success")}D(),await U(),await $(),O(),R()}catch(e){console.error("Error al guardar/actualizar venta:",e),d("Error al procesar la venta. Inténtalo nuevamente.","error")}});a(document).on("change","#vtJulio, #vtSonia, #vtExterna",function(){I()});a(document).on("change","#tipoTour",function(){const s=a(this).find("option:selected").data("price")||0,e=parseInt(a("#cantidadPax").val())||1;a("#precioUnitario").val(s),a("#importeTotal").val(s*e),I()});a(document).on("input","#cantidadPax, #precioUnitario",function(){Z(),I()});a(document).on("click",".tema",async function(){const s=a(this).data("tema");try{await k(P(v,"configuracion",S.displayName),{tema:s,actualizado:B()},{merge:!0}),w("wiTema",s,72),L('Tema guardado <i class="fa-solid fa-circle-check"></i>')}catch(e){console.error(e)}});
