import{t as W,$ as s,v as _,x as L,M as x,N as c,y as Y,d as E,a as v,j as U,i as R,l as g,b as O,c as C,C as B,z as $,g as Q,q as G,e as J,h as F}from"./widev-d9ATpUtb.js";let b=null;W(F,async a=>{if(!a)return window.location.href="/";b=a;try{const e=$("wiSmile");if(e)return M(e);const o=(await O(G(C(v,"smiles"),J("usuario","==",a.displayName)))).docs[0].data();g("wiSmile",o,450),M(o)}catch(e){console.error(e)}});s(document).on("click",".bt_salir",async()=>{await _(F),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}});s(document).on("click",".tab-btn",function(){const a=s(this).data("tab");L(this,"active"),L("#"+a+"-tab","active")});s(document).on("click",".bt_cargar",()=>{const a=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+)$/;Object.keys(localStorage).filter(e=>a.test(e)).forEach(e=>localStorage.removeItem(e)),x("Actualizado"),setTimeout(()=>location.reload(),800)});let T="2025-09",u=1;const D=5;let p=[],m=[];function M(a){console.log(a.nombre),x("Bienvenido "+a.nombre+"!"),s(".app").html(`
        <!-- HEADER SUPERIOR -->
        <header class="top-header">
            <div class="header-container">
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
                            <img src="${a.imagen}" alt="${a.nombre}" class="user-avatar">
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
        <main class="main-container">
            <div class="dashboard-layout">
                
                <!-- SECCION NUEVA VENTA -->
                <section class="new-sale-panel">
                    <div class="panel-header">
                        <h2><i class="fas fa-plus-circle"></i> Nueva Venta</h2>
                        <div class="bt_add_exportar">
                            <p>Ventas:</p>
                            <label for="vtJulio"><input type="checkbox" id="vtJulio"/>Julio</label>   
                            <label for="vtSonia"><input type="checkbox" id="vtSonia"/>Sonia</label>   
                            <label for="vtExterna"><input type="checkbox" id="vtExterna"/>Externa</label>   
                            <button class="btn-add" id="addNewSale">
                                <i class="fas fa-plus"></i> Agregar
                            </button>
                        </div>
                    </div>

                    ${oa()}
                </section>

                <!-- SECCION COMPETENCIA -->
                <section class="competition-panel">
                    <div class="panel-header">
                        <h2><i class="fas fa-fire"></i> Competencia del Mes</h2>
                        <span class="subtitle">¡Quien venda más gana!</span>
                    </div>

                    <ul class="descripcion_com">
                        <li>La competencia del mes es una oportunidad para motivarnos y dar lo mejor en nuestras ventas.</li>
                        <li>¡Recuerda que quien logre más ventas durante este periodo será el ganador!</li>
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
                            <span class="summary-label">Total Tours</span>
                            <span class="summary-value" id="totalTours">0</span>
                        </div>
                        <div class="summary-stat">
                            <span class="summary-label">Puntos Totales</span>
                            <span class="summary-value" id="totalPuntos">0</span>
                        </div>
                        <div class="summary-stat">
                            <span class="summary-label">Tours de Hoy</span>
                            <span class="summary-value" id="toursHoy">0</span>
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
                    <th><i class="fas fa-route"></i> Tour</th>
                    <th><i class="fas fa-user"></i> Cliente</th>
                    <th><i class="fas fa-users"></i> PAX</th>
                    <th><i class="fas fa-dollar-sign"></i> Importe</th>
                    <th><i class="fas fa-calendar-clock"></i> Fecha/Hora</th>
                    <th><i class="fas fa-star"></i> Puntos</th>
                    <th><i class="fas fa-info-circle"></i> Registro</th>
                    <th><i class="fas fa-user-tie"></i> Vendedor</th>
                    <th><i class="fas fa-tag"></i> Estado</th>
                    <th><i class="fas fa-cogs"></i> Acciones</th>
                </tr>
            </thead>
            <tbody id="salesTableBody">
                <tr><td colspan="10" class="loading-cell">
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

            ${ta()}
        </main>

        <div id="notifications-container"></div>
        <div id="modal-container"></div>
    `),X()}async function X(a){try{await Promise.all([Z(),q(),z()]),sa(),A()}catch(e){console.error("Error inicializando dashboard:",e),c("Error cargando datos del dashboard","error")}}async function Z(){try{const a=$("empleadosSmile");a&&(m=a,S());const e=G(C(v,"smiles"),J("participa","==","si"));m=(await O(e)).docs.map(o=>({id:o.id,...o.data()})),g("empleadosSmile",m,300),await I(),S()}catch(a){console.error("Error cargando empleados:",a),s("#workersGrid").html(`
            <div class="error-workers">
                <i class="fas fa-exclamation-triangle"></i>
                Error cargando empleados
            </div>
        `)}}async function I(){try{const e=(await O(C(v,"registrosdb"))).docs.filter(i=>{const o=i.data();return o.fechaTour&&o.fechaTour.startsWith(T)});m.forEach(i=>{const o=e.filter(n=>n.data().vendedor===i.usuario);i.totalPuntos=o.reduce((n,r)=>n+(r.data().puntos||0),0),i.totalVentas=o.reduce((n,r)=>n+(r.data().qventa||0),0)}),m.sort((i,o)=>o.totalPuntos-i.totalPuntos)}catch(a){console.error("Error calculando puntos:",a)}}function S(){const a=m.map((e,i)=>{const o=i+1,n=o===1,r=o===2;return`
            <div class="worker-card ${n?"champion":r?"runner-up":""}" data-employee="${e.usuario}">
                <div class="rank-badge">
                    <i class="fas fa-${n?"crown":r?"medal":"user"}"></i>
                    #${o}
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
        `}).join("");s("#workersGrid").html(a)}async function q(){try{p=(await O(C(v,"registrosdb"))).docs.map(e=>({id:e.id,...e.data()})),p.sort((e,i)=>{const o=new Date(e.fechaTour||"1970-01-01");return new Date(i.fechaTour||"1970-01-01")-o}),h()}catch(a){console.error("Error cargando ventas:",a),s("#salesTableBody").html(`
            <tr><td colspan="9" class="error-cell">
                <i class="fas fa-exclamation-triangle"></i> Error cargando ventas
            </td></tr>
        `)}}function h(a="",e=!1){let i=[...p];if(i=i.filter(t=>t.fechaTour&&t.fechaTour.startsWith(T)),a&&(i=i.filter(t=>t.vendedor===a)),e){const t=new Date().toISOString().split("T")[0];i=i.filter(w=>w.fechaTour===t)}const o=Math.ceil(i.length/D),n=(u-1)*D,l=i.slice(n,n+D).map(t=>{const V=t.vendedor===b?.displayName?`<button class="btn-view" onclick="verDetalleVenta('${t.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>
               <button class="btn-edit" onclick="editarVenta('${t.id}')" title="Editar"><i class="fas fa-edit"></i></button>
               <button class="btn-delete" onclick="eliminarVenta('${t.id}')" title="Eliminar"><i class="fas fa-trash"></i></button>`:`<button class="btn-view" onclick="verDetalleVenta('${t.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>`,d=t.nombreCliente.length>6?t.nombreCliente.substring(0,6)+"...":t.nombreCliente,y=t.numeroHabitacion?`<small>Hab: ${t.numeroHabitacion}</small>`:"",f=K(t);return`
            <tr>
                <td><span class="tour-badge">${t.tipoTour}</span></td>
                <td>
                    <strong>${d}</strong>
                    ${y}
                </td>
                <td><span class="pax-badge"><i class="fas fa-users"></i> ${t.cantidadPax}</span></td>
                <td><strong class="price">S/ ${(t.importeTotal||0).toFixed(2)}</strong></td>
                <td>
                    <div class="datetime-info">
                        <span><i class="fas fa-calendar"></i> ${t.fechaTour}</span>
                        <span><i class="fas fa-clock"></i> ${t.horaSalida}</span>
                    </div>
                </td>
                <td><span class="points-badge"><i class="fas fa-star"></i> ${t.puntos||0}</span></td>
                <td><div class="seller-info"><strong><i class="fas fa-user-tie"></i> ${B(t.vendedor)}</strong></div></td>
                <td>${f||B(t.vendedor)}</td>
                <td><span class="status-badge ${t.estadoPago==="pagado"||t.estadoPago==="cobrado"?"paid":"pending"}"><i class="fas fa-${t.estadoPago==="pagado"||t.estadoPago==="cobrado"?"check-circle":"clock"}"></i> ${t.estadoPago?.toUpperCase()}</span></td>
                <td><div class="action-buttons">${V}</div></div>
            </tr>
        `}).join("");s("#salesTableBody").html(l||'<tr><td colspan="10" class="empty-cell"><i class="fas fa-inbox"></i> No hay ventas para mostrar</td></tr>'),aa(o)}function K(a){let e=[];return a.esVentaJulio&&e.push('<span class="venta-especial julio">Julio</span>'),a.esVentaSonia&&e.push('<span class="venta-especial sonia">Sonia</span>'),a.esVentaExterna&&e.push('<span class="venta-especial externa">Externa</span>'),e.length>0?e.join(" "):""}function aa(a){if(a<=1){s("#paginationContainer").html("");return}let e='<div class="pagination">';u>1&&(e+=`<button class="page-btn" onclick="cambiarPagina(${u-1})">
            <i class="fas fa-chevron-left"></i>
        </button>`);for(let i=1;i<=a;i++)i===u?e+=`<button class="page-btn active">${i}</button>`:e+=`<button class="page-btn" onclick="cambiarPagina(${i})">${i}</button>`;u<a&&(e+=`<button class="page-btn" onclick="cambiarPagina(${u+1})">
            <i class="fas fa-chevron-right"></i>
        </button>`),e+="</div>",s("#paginationContainer").html(e)}async function z(){try{const a=$("ultimoGanador");a&&H(a);const i=`${ia(T).replace("-","")}`,o=await Q(E(v,"ganadores",i));if(o.exists()){const n=o.data();g("ultimoGanador",n,3600),H(n)}else s("#lastWinner").html(`
                <div class="winner-header">
                    <i class="fas fa-trophy"></i>
                    <h3>Último Ganador del Mes</h3>
                </div>
                <div class="no-winner">
                    <i class="fas fa-question-circle"></i>
                    <span>Aún no hay ganador registrado</span>
                </div>
            `)}catch(a){console.error("Error cargando último ganador:",a),s("#lastWinner").html(`
            <div class="winner-header">
                <i class="fas fa-trophy"></i>
                <h3>Último Ganador del Mes</h3>
            </div>
            <div class="error-winner">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Error cargando ganador</span>
            </div>
        `)}}function H(a){const e=m.find(n=>n.usuario===a.ganador||n.nombre===a.ganador),i=e?.imagen||"https://i.postimg.cc/HWMY74kP/image.png",o=e?.nombre||a.ganador;s("#lastWinner").html(`
        <div class="winner-header">
            <i class="fas fa-trophy"></i>
            <h3>Último Ganador del Mes</h3>
        </div>
        <div class="winner-info">
            <img src="${i}" alt="${o}">
            <div class="winner-details">
                <h4>${o}</h4>
                <p>${a.mes} ${a.year}</p>
                <span class="winner-points">${a.puntosGanados} puntos</span>
            </div>
            <div class="winner-achievement">
                <i class="fas fa-star"></i>
                <span>¡Excelente trabajo!</span>
            </div>
        </div>
    `)}function A(){const a=p.filter(l=>l.fechaTour&&l.fechaTour.startsWith(T)),e=new Date().toISOString().split("T")[0],i=a.filter(l=>l.fechaTour===e),o=a.reduce((l,t)=>l+(t.qventa||0),0),n=a.reduce((l,t)=>l+(t.puntos||0),0),r=i.reduce((l,t)=>l+(t.qventa||0),0);s("#totalTours").text(o),s("#totalPuntos").text(n),s("#toursHoy").text(r)}function sa(){const a=m.map(e=>`<option value="${e.usuario}">${e.nombre}</option>`).join("");s("#filterEmployee").html(`
        <option value="">Todos los vendedores</option>
        ${a}
    `)}s(document).on("change","#monthSelector",function(){T=s(this).val(),u=1,I().then(()=>{S(),h(),A(),z()})});s(document).on("change","#filterEmployee",function(){u=1,h(s(this).val())});s(document).on("click","#todayFilter",function(){u=1,h(s("#filterEmployee").val(),!0)});window.cambiarPagina=function(a){u=a,h(s("#filterEmployee").val())};window.verDetalleVenta=function(a){const e=p.find(i=>i.id===a);if(!e){c("Venta no encontrada","error");return}j(e,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),c("Datos cargados para visualización","info")};window.editarVenta=function(a){const e=p.find(i=>i.id===a);if(!e){c("Venta no encontrada","error");return}j(e,!1),s(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",a),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),c("Datos cargados para edición","info")};window.eliminarVenta=function(a){const e=p.find(n=>n.id===a);if(!e){c("Venta no encontrada","error");return}!confirm(`¿Estás seguro de eliminar la venta de "${e.nombreCliente}"?

Esta acción NO se puede deshacer.`)||!confirm(`⚠️ CONFIRMACIÓN FINAL ⚠️

Se eliminará permanentemente:
• Cliente: ${e.nombreCliente}
• Tour: ${e.tipoTour}
• Importe: S/ ${e.importeTotal}

¿CONFIRMAS LA ELIMINACIÓN?

Esta acción es IRREVERSIBLE.`)||ea(a)};function j(a,e=!1){P(),s("#tipoTour").val(a.tipoTour),s("#registroEn").val(a.registroEn),s("#nombreCliente").val(a.nombreCliente),s("#numeroHabitacion").val(a.numeroHabitacion||""),s("#tipoDocumento").val(a.tipoDocumento||"dni"),s("#numeroDocumento").val(a.numeroDocumento||""),s("#cantidadPax").val(a.cantidadPax||1),s("#precioUnitario").val(a.precioUnitario||0),s("#metodoPago").val(a.metodoPago||""),s("#importeTotal").val(a.importeTotal||0),s("#cobroProveedor").val(a.cobroProveedor||0),s("#horaSalida").val(a.horaSalida),s("#Operador").val(a.Operador),s("#Comentario").val(a.Comentario),s("#fechaTour").val(a.fechaTour),s("#estadoPago").val(a.estadoPago||"pagado"),s("#vtJulio").prop("checked",a.esVentaJulio||!1),s("#vtSonia").prop("checked",a.esVentaSonia||!1),s("#vtExterna").prop("checked",a.esVentaExterna||!1),N(),e?(s("#formularioVenta input, #formularioVenta select").prop("disabled",!0),s(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),s("#formularioVenta").addClass("view-only"),s(".btn-clear-view").length===0&&s(".form-actions").prepend(`
                <button type="button" class="btn-clear-view" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Limpiar Vista
                </button>
            `)):(s("#formularioVenta input, #formularioVenta select").prop("disabled",!1),s(".btn-save").prop("disabled",!1),s("#formularioVenta").addClass("edit-mode"),s(".btn-cancel-edit").length===0&&s(".form-actions").prepend(`
                <button type="button" class="btn-cancel-edit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Cancelar Edición
                </button>
            `))}function N(){const a=parseInt(s("#cantidadPax").val())||1,e=parseInt(s("#tipoTour option:selected").data("points"))||0,o=s("#vtJulio").prop("checked")||s("#vtSonia").prop("checked")||s("#vtExterna").prop("checked")?0:e*a;s("#vistaPreviaLaPuntos").text(o)}function P(){s("#formularioVenta input, #formularioVenta select").prop("disabled",!1),s(".btn-save").prop("disabled",!1),s("#formularioVenta").removeClass("view-only edit-mode"),s(".btn-save").html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),s(".btn-clear-view, .btn-cancel-edit").remove(),s("#formularioVenta")[0].reset(),s("#cantidadPax").val(1),s("#vistaPreviaLaPuntos").text("0")}async function ea(a){try{c("Eliminando venta...","info"),await Y(E(v,"registrosdb",a));const e=[];for(let o=0;o<localStorage.length;o++){const n=localStorage.key(o);if(n&&n.startsWith("vendedor_"))try{const r=JSON.parse(localStorage.getItem(n));r&&r.idVenta===a&&e.push(n)}catch{}}e.forEach(o=>localStorage.removeItem(o)),p=p.filter(o=>o.id!==a),await I(),S(),h(),A(),s(".btn-save").attr("data-edit-id")===a&&P(),c("¡Venta eliminada exitosamente!","success")}catch(e){console.error("Error eliminando venta:",e),c("Error al eliminar la venta. Inténtalo nuevamente.","error")}}s(document).on("click",".btn-clear-view",function(){P(),c("Vista limpiada","info")});s(document).on("click",".btn-cancel-edit",function(){P(),c("Edición cancelada","info")});function ia(a){const[e,i]=a.split("-"),o=new Date(parseInt(e),parseInt(i)-2);return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function oa(){return`
        <form id="formularioVenta" class="sale-form">
            <div class="form-grid">
                <!-- TIPO DE TOUR -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-route"></i>
                        Tipo de Tour *
                    </label>
                    <select id="tipoTour" required>
                        <option value="">Seleccionar tour...</option>
                        <option value="Parapente" data-points="50" data-price="330">1. 🪂 Parapente (50 pts)</option>
                        <option value="Buggy 1 Hora" data-points="15" data-price="20">2. 🏜️ Buggy 1 Hora (15 pts)</option>
                        <option value="Buggy 2 Horas" data-points="25" data-price="25">3. 🏜️ Buggy 2 Horas (25 pts)</option>
                        <option value="Buggy Privado" data-points="30" data-price="180">4. 🏜️ Buggy Privado (30 pts)</option>
                        <option value="Buggy 1 Hora - Sonia" data-points="25" data-price="20">5. 🏜️ Buggy 1 Hora - Sonia (25 pts)</option>
                        <option value="Buggy 2 Horas - Sonia" data-points="35" data-price="25">6. 🏜️ Buggy 2 Horas - Sonia (35 pts)</option>
                        <option value="Buggy Privado - Sonia" data-points="40" data-price="180">7. 🏜️ Buggy Privado - Sonia (40 pts)</option>
                        <option value="Buggy Privado 2 Horas - Sonia" data-points="80" data-price="260">8. 🏜️ Buggy Privado 2 Horas- Sonia (80 pts)</option>
                        <option value="Tour de bodegas" data-points="10" data-price="20">9. 🍷 Tour de bodegas (10 pts)</option>
                        <option value="Tour de bodegas - Jackson" data-points="20" data-price="20">10. 🍷 Tour de bodegas - Jackson (20 pts)</option>
                        <option value="Tour de bodegas Privado" data-points="30" data-price="150">11. 🍷 Tour de bodegas Privado (30 pts)</option>
                        <option value="Tour de bodegas Privado - Jackson" data-points="40" data-price="150">12. 🍷 Tour de bodegas Privado - Jackson (40 pts)</option>
                        <option value="City Tour - Jackson" data-points="50" data-price="200">13. 🏛️ City Tour - Jackson (50 pts)</option>
                        <option value="Tour de Paracas" data-points="20" data-price="60">14. 🏝️ Tour de Paracas (20 pts)</option>
                        <option value="Cañón de los perdidos" data-points="20" data-price="60">15. 🏔️ Cañón de los perdidos (20 pts)</option>
                        <option value="Cuatrimotos" data-points="20" data-price="70">16. 🏍️ Cuatrimotos (20 pts)</option>
                        <option value="Sobrevuelo" data-points="30" data-price="494">17. ✈️ Sobrevuelo (30 pts)</option>
                        <option value="Nazca Terrestre" data-points="10" data-price="150">18. 🗿 Nazca Terrestre (10 pts)</option>
                        <option value="Renta Tablas Profesional" data-points="10" data-price="50">19. 🏄 Renta Tablas Profesional (10 pts)</option>
                        <option value="Tablas Profesional - Sonia" data-points="15" data-price="150">20. 🏄 Tablas Profesional - Sonia (15 pts)</option>
                        <option value="Tablas Profesional + Buggy" data-points="10" data-price="150">21. 🏄 Tablas Profesional + Buggy (10 pts)</option>
                        <option value="Polaris" data-points="20" data-price="380">22. 🚙 Polaris (20 pts)</option>
                    </select>
                </div>

                <!-- REGISTRO EN -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-hotel"></i>
                        Registro en:
                    </label>
                    <select id="registroEn">
                        <option value="hawka">Hawka</option>
                        <option value="hclaudia">HClaudia</option>
                    </select>
                </div>

                <!-- NOMBRE CLIENTE -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-user"></i>
                        Nombre del Cliente *
                    </label>
                    <input type="text" id="nombreCliente" required placeholder="Nombre de cliente / calle">
                </div>

                <!-- HABITACION -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-bed"></i>
                        N° Habitación(Opcional)
                    </label>
                    <input type="text" id="numeroHabitacion" placeholder="Ej: 205">
                </div>

                <!-- Tipo de documento -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-id-card"></i>
                        Tipo de Documento (opcional)
                    </label>
                    <select id="tipoDocumento">
                        <option value="dni">DNI</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="cedula">Cédula</option>
                        <option value="ce">Carnet Extranjería</option>
                    </select>
                </div>

                <!-- INGRESE DNI -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-hashtag"></i>
                        N° DNI/Pasaporte/CE
                    </label>
                    <input type="text" id="numeroDocumento" placeholder="78964523">
                </div>

                <!-- PAX -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-users"></i>
                        PAX (Cantidad Personas/Grupo Privado)
                    </label>
                    <input type="number" id="cantidadPax" required min="1" value="1">
                </div>

                <!-- IMPORTE INDIVIDUAL -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-user-tag"></i>
                        Importe Individual/Grupo Privado
                    </label>
                    <input type="number" id="precioUnitario" step="0.01" placeholder="S/ 0.00">
                </div>

                <!-- METODO PAGO -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-credit-card"></i>
                        Método de Pago
                    </label>
                    <select id="metodoPago">
                        <option value="">Seleccionar...</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Tarjeta">Tarjeta</option>
                        <option value="Transferencia">Transferencia</option>
                        <option value="Yape">Yape</option>
                        <option value="Plin">Plin</option>
                    </select>
                </div>

                <!-- IMPORTE TOTAL -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-calculator"></i>
                        Importe x Cobrar(Total)
                    </label>
                    <input type="number" id="importeTotal" step="0.01" placeholder="S/ 0.00" disabled>
                </div>

                <!-- COBRO PROVEEDOR -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-handshake"></i>
                        Pagar/Cobrar a Operador
                    </label>
                    <input type="number" id="cobroProveedor" step="0.01" placeholder="S/ 0.00">
                </div>

                <!-- OPERADOR -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-user"></i>
                        Operador *
                    </label>
                    <input type="text" id="Operador" placeholder="Ejm: Jacki, Pili, William.... " required>
                </div>

                <!-- FECHA -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-calendar-day"></i>
                        Fecha *
                    </label>
                    <input type="date" id="fechaTour" required>
                </div>

                <!-- HORA DE SALIDA -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-clock"></i>
                        Hora de salida *
                    </label>
                    <input type="text" id="horaSalida" placeholder="2 HORAS -5PM" required>
                </div>

                <!-- PAGADO ? -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-money-check-alt"></i>
                        Pagado?
                    </label>
                    <select id="estadoPago">
                    <option value="pagar">Falta pagar a proveedor</option>
                    <option value="pagado">Pagado a proveedor</option>
                    <option value="cobrar">Cobrar saldo pendiente</option>
                    <option value="cobrado">Saldo pendiente cobrado</option>
                    </select>
                </div>

                <!-- COMENTARIO -->
                <div class="form-field">
                    <label>
                        <i class="fa-solid fa-comment"></i>
                        Comentario *
                    </label>
                    <input type="text" id="Comentario" placeholder="Escribe notas de tu venta " required>
                </div>

            </div>

            <!-- ACCIONES DEL FORMULARIO -->
            <div class="form-actions">
                <button type="submit" class="btn-save">
                    <i class="fas fa-save"></i>
                    Guardar Venta
                </button>

                <!-- PREVIEW DE PUNTOS -->
                <div class="points-preview">
                    <div class="points-info">
                        <i class="fas fa-star"></i>
                        <span>Puntos a ganar: <strong id="vistaPreviaLaPuntos">0</strong></span>
                    </div>
                </div>
            </div>
        </form>
    `}function ta(){return`
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
    `}s(document).on("click",".btn-save",async a=>{a.preventDefault();try{const e=s(".btn-save").attr("data-edit-id"),i=!!e,o=parseInt(s("#cantidadPax").val())||1,n=parseInt(s("#tipoTour option:selected").data("points"))||0,r=s("#vtJulio").prop("checked"),l=s("#vtSonia").prop("checked"),t=s("#vtExterna").prop("checked"),V=r||l||t?0:n*o,d={tipoTour:s("#tipoTour").val(),registroEn:s("#registroEn").val(),nombreCliente:s("#nombreCliente").val(),numeroHabitacion:s("#numeroHabitacion").val(),tipoDocumento:s("#tipoDocumento").val(),numeroDocumento:s("#numeroDocumento").val(),cantidadPax:o,precioUnitario:parseFloat(s("#precioUnitario").val())||0,metodoPago:s("#metodoPago").val(),importeTotal:parseFloat(s("#importeTotal").val())||0,cobroProveedor:parseFloat(s("#cobroProveedor").val())||0,horaSalida:s("#horaSalida").val(),Operador:s("#Operador").val(),Comentario:s("#Comentario").val(),fechaTour:s("#fechaTour").val(),estadoPago:s("#estadoPago").val(),vendedor:b.displayName,puntos:V,email:b.email,qventa:1,fechaRegistro:U(),esVentaJulio:r,esVentaSonia:l,esVentaExterna:t};if(!d.tipoTour||!d.nombreCliente||!d.horaSalida||!d.fechaTour){c("Por favor completa todos los campos obligatorios","error");return}if(i){d.idVenta=e,await R(E(v,"registrosdb",e),d);const y=`vendedor_${b.displayName}`;g(y,d,450);const f=p.findIndex(k=>k.id===e);f!==-1&&(p[f]={id:e,...d}),c("¡Venta actualizada exitosamente!","success")}else{const f=`venta_${Date.now()}`;d.idVenta=f,await R(E(v,"registrosdb",f),d);const k=`vendedor_${b.displayName}`;g(k,d,450),c("¡Venta registrada exitosamente!","success")}P(),await q(),await I(),S(),A()}catch(e){console.error("Error al guardar/actualizar venta:",e),c("Error al procesar la venta. Inténtalo nuevamente.","error")}});s(document).on("change","#vtJulio, #vtSonia, #vtExterna",function(){N()});s(document).on("change","#tipoTour",function(){const a=s(this).find("option:selected").data("price")||0,e=parseInt(s("#cantidadPax").val())||1;s("#precioUnitario").val(a),s("#importeTotal").val(a*e),N()});s(document).on("input","#cantidadPax, #precioUnitario",function(){const a=parseInt(s("#cantidadPax").val())||1,e=parseFloat(s("#precioUnitario").val())||0;s("#importeTotal").val(e*a),N()});s(document).on("click",".tema",async function(){const a=s(this).data("tema");try{await R(E(v,"configuracion",b.displayName),{tema:a,actualizado:U()},{merge:!0}),g("wiTema",a,72),x('Tema guardado <i class="fa-solid fa-circle-check"></i>')}catch(e){console.error(e)}});
