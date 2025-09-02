import{r as H,$ as s,t as B,v as C,M as R,N as c,x as G,d as T,a as v,j as F,i as N,l as b,b as S,c as P,y as A,g as q,q as V,e as $,h as k}from"./widev-nldX7V_U.js";let f=null;H(k,async a=>{if(!a)return window.location.href="/";f=a;try{const e=A("wiSmile");if(e)return w(e);const i=(await S(V(P(v,"smiles"),$("usuario","==",a.displayName)))).docs[0].data();b("wiSmile",i,450),w(i)}catch(e){console.error(e)}});s(document).on("click",".bt_salir",async()=>{await B(k),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}});s(document).on("click",".tab-btn",function(){const a=s(this).data("tab");C(this,"active"),C("#"+a+"-tab","active")});s(document).on("click",".bt_cargar",()=>{const a=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+)$/;Object.keys(localStorage).filter(e=>a.test(e)).forEach(e=>localStorage.removeItem(e)),R("Actualizado"),setTimeout(()=>location.reload(),800)});let h="2025-09",p=1;const O=5;let d=[],u=[];function w(a){console.log(a.nombre),R("Bienvenido "+a.nombre+"!"),s(".app").html(`
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
                            <button class="btn-add" id="addNewSale">
                                <i class="fas fa-plus"></i> Agregar
                            </button>
                        </div>
                    </div>

                    ${Q()}
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
                            <span class="summary-value">50</span>
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
                                <th><i class="fas fa-calendar-clock"></i> Fecha/Hora</th>
                                <th><i class="fas fa-user-tie"></i> Vendedor</th>
                                <th><i class="fas fa-dollar-sign"></i> Importe</th>
                                <th><i class="fas fa-star"></i> Puntos</th>
                                <th><i class="fas fa-info-circle"></i> Estado</th>
                                <th><i class="fas fa-cogs"></i> Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="salesTableBody">
                            <tr><td colspan="9" class="loading-cell">
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

            ${X()}
        </main>

        <div id="notifications-container"></div>
        <div id="modal-container"></div>
    `),z()}async function z(a){try{await Promise.all([j(),L(),M()]),_(),I()}catch(e){console.error("Error inicializando dashboard:",e),c("Error cargando datos del dashboard","error")}}async function j(){try{const a=A("empleadosSmile");a&&(u=a,g());const e=V(P(v,"smiles"),$("participa","==","si"));u=(await S(e)).docs.map(i=>({id:i.id,...i.data()})),b("empleadosSmile",u,300),await y(),g()}catch(a){console.error("Error cargando empleados:",a),s("#workersGrid").html(`
            <div class="error-workers">
                <i class="fas fa-exclamation-triangle"></i>
                Error cargando empleados
            </div>
        `)}}async function y(){try{const e=(await S(P(v,"registrosdb"))).docs.filter(t=>{const i=t.data();return i.fechaTour&&i.fechaTour.startsWith(h)});u.forEach(t=>{const i=e.filter(o=>o.data().vendedor===t.usuario);t.totalPuntos=i.reduce((o,r)=>o+(r.data().puntos||0),0),t.totalVentas=i.reduce((o,r)=>o+(r.data().qventa||0),0)}),u.sort((t,i)=>i.totalPuntos-t.totalPuntos)}catch(a){console.error("Error calculando puntos:",a)}}function g(){const a=u.map((e,t)=>{const i=t+1,o=i===1,r=i===2;return`
            <div class="worker-card ${o?"champion":r?"runner-up":""}" data-employee="${e.usuario}">
                <div class="rank-badge">
                    <i class="fas fa-${o?"crown":r?"medal":"user"}"></i>
                    #${i}
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
        `}).join("");s("#workersGrid").html(a)}async function L(){try{d=(await S(P(v,"registrosdb"))).docs.map(e=>({id:e.id,...e.data()})),d.sort((e,t)=>{const i=new Date(e.fechaTour||"1970-01-01");return new Date(t.fechaTour||"1970-01-01")-i}),m()}catch(a){console.error("Error cargando ventas:",a),s("#salesTableBody").html(`
            <tr><td colspan="9" class="error-cell">
                <i class="fas fa-exclamation-triangle"></i> Error cargando ventas
            </td></tr>
        `)}}function m(a="",e=!1){let t=[...d];if(t=t.filter(n=>n.fechaTour&&n.fechaTour.startsWith(h)),a&&(t=t.filter(n=>n.vendedor===a)),e){const n=new Date().toISOString().split("T")[0];t=t.filter(U=>U.fechaTour===n)}const i=Math.ceil(t.length/O),o=(p-1)*O,l=t.slice(o,o+O).map(n=>`
        <tr>
            <td><span class="tour-badge">${n.tipoTour}</span></td>
            <td>
                <strong>${n.nombreCliente}</strong>
                ${n.numeroHabitacion?`<small>Hab: ${n.numeroHabitacion}</small>`:""}
            </td>
            <td><span class="pax-badge"><i class="fas fa-users"></i> ${n.cantidadPax}</span></td>
            <td>
                <div class="datetime-info">
                    <span><i class="fas fa-calendar"></i> ${n.fechaTour}</span>
                    <span><i class="fas fa-clock"></i> ${n.horaSalida}</span>
                </div>
            </td>
            <td>
                <div class="seller-info">
                    <strong>${n.vendedor}</strong>
                    <i class="fas fa-user-tie"></i>
                </div>
            </td>
            <td><strong class="price">S/ ${(n.importeTotal||0).toFixed(2)}</strong></td>
            <td><span class="points-badge"><i class="fas fa-star"></i> ${n.puntos||0}</span></td>
            <td><span class="status-badge ${n.estadoPago==="pagado"?"paid":"pending"}">
                <i class="fas fa-${n.estadoPago==="pagado"?"check-circle":"clock"}"></i> 
                ${n.estadoPago?.toUpperCase()||"PENDIENTE"}
            </span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-view" onclick="verDetalleVenta('${n.id}')" title="Ver detalles">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-edit" onclick="editarVenta('${n.id}')" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-delete" onclick="eliminarVenta('${n.id}')" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join("");s("#salesTableBody").html(l||`
        <tr><td colspan="9" class="empty-cell">
            <i class="fas fa-inbox"></i> No hay ventas para mostrar
        </td></tr>
    `),J(i)}function J(a){if(a<=1){s("#paginationContainer").html("");return}let e='<div class="pagination">';p>1&&(e+=`<button class="page-btn" onclick="cambiarPagina(${p-1})">
            <i class="fas fa-chevron-left"></i>
        </button>`);for(let t=1;t<=a;t++)t===p?e+=`<button class="page-btn active">${t}</button>`:e+=`<button class="page-btn" onclick="cambiarPagina(${t})">${t}</button>`;p<a&&(e+=`<button class="page-btn" onclick="cambiarPagina(${p+1})">
            <i class="fas fa-chevron-right"></i>
        </button>`),e+="</div>",s("#paginationContainer").html(e)}async function M(){try{const a=A("ultimoGanador");a&&D(a);const t=`${Y(h).replace("-","")}`,i=await q(T(v,"ganadores",t));if(i.exists()){const o=i.data();b("ultimoGanador",o,3600),D(o)}else s("#lastWinner").html(`
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
        `)}}function D(a){const e=u.find(o=>o.usuario===a.ganador||o.nombre===a.ganador),t=e?.imagen||"https://i.postimg.cc/HWMY74kP/image.png",i=e?.nombre||a.ganador;s("#lastWinner").html(`
        <div class="winner-header">
            <i class="fas fa-trophy"></i>
            <h3>Último Ganador del Mes</h3>
        </div>
        <div class="winner-info">
            <img src="${t}" alt="${i}">
            <div class="winner-details">
                <h4>${i}</h4>
                <p>${a.mes} ${a.year}</p>
                <span class="winner-points">${a.puntosGanados} puntos</span>
            </div>
            <div class="winner-achievement">
                <i class="fas fa-star"></i>
                <span>¡Excelente trabajo!</span>
            </div>
        </div>
    `)}function I(){const a=d.filter(l=>l.fechaTour&&l.fechaTour.startsWith(h)),e=new Date().toISOString().split("T")[0],t=a.filter(l=>l.fechaTour===e),i=a.reduce((l,n)=>l+(n.qventa||0),0),o=a.reduce((l,n)=>l+(n.puntos||0),0),r=t.reduce((l,n)=>l+(n.qventa||0),0);s("#totalTours").text(i),s("#totalPuntos").text(o),s("#toursHoy").text(r)}function _(){const a=u.map(e=>`<option value="${e.usuario}">${e.nombre}</option>`).join("");s("#filterEmployee").html(`
        <option value="">Todos los vendedores</option>
        ${a}
    `)}s(document).on("change","#monthSelector",function(){h=s(this).val(),p=1,y().then(()=>{g(),m(),I(),M()})});s(document).on("change","#filterEmployee",function(){p=1,m(s(this).val())});s(document).on("click","#todayFilter",function(){p=1,m(s("#filterEmployee").val(),!0)});window.cambiarPagina=function(a){p=a,m(s("#filterEmployee").val())};window.verDetalleVenta=function(a){const e=d.find(t=>t.id===a);if(!e){c("Venta no encontrada","error");return}x(e,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),c("Datos cargados para visualización","info")};window.editarVenta=function(a){const e=d.find(t=>t.id===a);if(!e){c("Venta no encontrada","error");return}x(e,!1),s(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",a),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),c("Datos cargados para edición","info")};window.eliminarVenta=function(a){const e=d.find(o=>o.id===a);if(!e){c("Venta no encontrada","error");return}!confirm(`¿Estás seguro de eliminar la venta de "${e.nombreCliente}"?

Esta acción NO se puede deshacer.`)||!confirm(`⚠️ CONFIRMACIÓN FINAL ⚠️

Se eliminará permanentemente:
• Cliente: ${e.nombreCliente}
• Tour: ${e.tipoTour}
• Importe: S/ ${e.importeTotal}

¿CONFIRMAS LA ELIMINACIÓN?

Esta acción es IRREVERSIBLE.`)||W(a)};function x(a,e=!1){E(),s("#tipoTour").val(a.tipoTour),s("#registroEn").val(a.registroEn),s("#nombreCliente").val(a.nombreCliente),s("#numeroHabitacion").val(a.numeroHabitacion||""),s("#tipoDocumento").val(a.tipoDocumento||"dni"),s("#numeroDocumento").val(a.numeroDocumento||""),s("#cantidadPax").val(a.cantidadPax||1),s("#precioUnitario").val(a.precioUnitario||0),s("#metodoPago").val(a.metodoPago||""),s("#importeTotal").val(a.importeTotal||0),s("#cobroProveedor").val(a.cobroProveedor||0),s("#horaSalida").val(a.horaSalida),s("#fechaTour").val(a.fechaTour),s("#estadoPago").val(a.estadoPago||"pagado"),s("#vistaPreviaLaPuntos").text(a.puntos||0),e?(s("#formularioVenta input, #formularioVenta select").prop("disabled",!0),s(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),s("#formularioVenta").addClass("view-only"),s(".btn-clear-view").length===0&&s(".form-actions").prepend(`
                <button type="button" class="btn-clear-view" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Limpiar Vista
                </button>
            `)):(s("#formularioVenta input, #formularioVenta select").prop("disabled",!1),s(".btn-save").prop("disabled",!1),s("#formularioVenta").addClass("edit-mode"),s(".btn-cancel-edit").length===0&&s(".form-actions").prepend(`
                <button type="button" class="btn-cancel-edit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Cancelar Edición
                </button>
            `))}function E(){s("#formularioVenta input, #formularioVenta select").prop("disabled",!1),s(".btn-save").prop("disabled",!1),s("#formularioVenta").removeClass("view-only edit-mode"),s(".btn-save").html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),s(".btn-clear-view, .btn-cancel-edit").remove(),s("#formularioVenta")[0].reset(),s("#cantidadPax").val(1),s("#vistaPreviaLaPuntos").text("0")}async function W(a){try{c("Eliminando venta...","info"),await G(T(v,"registrosdb",a));const e=[];for(let i=0;i<localStorage.length;i++){const o=localStorage.key(i);if(o&&o.startsWith("vendedor_"))try{const r=JSON.parse(localStorage.getItem(o));r&&r.idVenta===a&&e.push(o)}catch{}}e.forEach(i=>localStorage.removeItem(i)),d=d.filter(i=>i.id!==a),await y(),g(),m(),I(),s(".btn-save").attr("data-edit-id")===a&&E(),c("¡Venta eliminada exitosamente!","success")}catch(e){console.error("Error eliminando venta:",e),c("Error al eliminar la venta. Inténtalo nuevamente.","error")}}s(document).on("click",".btn-clear-view",function(){E(),c("Vista limpiada","info")});s(document).on("click",".btn-cancel-edit",function(){E(),c("Edición cancelada","info")});function Y(a){const[e,t]=a.split("-"),i=new Date(parseInt(e),parseInt(t)-2);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function Q(){return`
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
                        <option value="Buggie 1 Hora - Sonia" data-points="25" data-price="25">2. 🏜️ Buggie 1 Hora - Sonia (25 pts)</option>
                        <option value="Buggie 2 Horas - Sonia" data-points="35" data-price="35">3. 🏜️ Buggie 2 Horas - Sonia (35 pts)</option>
                        <option value="Buggie Privado - Sonia" data-points="40" data-price="200">4. 🏜️ Buggie Privado - Sonia (40 pts)</option>
                        <option value="Tour de bodegas" data-points="15" data-price="30">5. 🍷 Tour de bodegas (15 pts)</option>
                        <option value="Tour de bodegas - Jackson" data-points="20" data-price="30">6. 🍷 Tour de bodegas - Jackson (20 pts)</option>
                        <option value="Tour de bodegas Privado - Jackson" data-points="40" data-price="150">7. 🍷 Tour de bodegas Privado - Jackson (40 pts)</option>
                        <option value="City Tour - Jackson" data-points="40" data-price="200">8. 🏛️ City Tour - Jackson (40 pts)</option>
                        <option value="Tour de Paracas" data-points="10" data-price="70">9. 🏝️ Tour de Paracas (10 pts)</option>
                        <option value="Cañón de los perdidos" data-points="10" data-price="70">10. 🏔️ Cañón de los perdidos (10 pts)</option>
                        <option value="Cuatrimotos" data-points="10" data-price="70">11. 🏍️ Cuatrimotos (10 pts)</option>
                        <option value="Sobrevuelo" data-points="10" data-price="200">12. ✈️ Sobrevuelo (10 pts)</option>
                        <option value="Nazca Terrestre" data-points="10" data-price="150">13. 🗿 Nazca Terrestre (10 pts)</option>
                        <option value="Tablas Profesional" data-points="15" data-price="150">14. 🏄 Tablas Profesional (15 pts)</option>
                        <option value="Polaris" data-points="10" data-price="380">15. 🚙 Polaris (10 pts)</option>
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
                        PAX *
                    </label>
                    <input type="number" id="cantidadPax" required min="1" value="1">
                </div>

                <!-- IMPORTE INDIVIDUAL -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-user-tag"></i>
                        Importe Individual
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
                        Importe x Cobrar
                    </label>
                    <input type="number" id="importeTotal" step="0.01" placeholder="S/ 0.00">
                </div>

                <!-- COBRO PROVEEDOR -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-handshake"></i>
                        Cobro Proveedor
                    </label>
                    <input type="number" id="cobroProveedor" step="0.01" placeholder="S/ 0.00">
                </div>

                <!-- HORA DE SALIDA -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-clock"></i>
                        Hora de salida *
                    </label>
                    <input type="text" id="horaSalida" required>
                </div>

                <!-- FECHA -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-calendar-day"></i>
                        Fecha *
                    </label>
                    <input type="date" id="fechaTour" required>
                </div>

                <!-- Pagado? -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-money-check-alt"></i>
                        Pagado?
                    </label>
                    <select id="estadoPago">
                        <option value="pagado">Pagado</option>
                        <option value="debe">Debe</option>
                    </select>
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
    `}function X(){return`
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
                        <span class="service-name">🪂 Parapente</span>
                        <span class="point-value">50</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🏜️ Buggie Privado</span>
                        <span class="point-value">30</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🏛️ City Tour</span>
                        <span class="point-value">20</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🏜️ Buggie Grupal</span>
                        <span class="point-value">15</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🍷 Tour de bodegas</span>
                        <span class="point-value">15</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🏄 Tablas Profesional</span>
                        <span class="point-value">15</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🏝️ Tour de Paracas</span>
                        <span class="point-value">10</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🏔️ Cañón de los perdidos</span>
                        <span class="point-value">10</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🏍️ Cuatrimotos</span>
                        <span class="point-value">10</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">✈️ Sobrevuelo</span>
                        <span class="point-value">10</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🗿 Nazca Terrestre</span>
                        <span class="point-value">10</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🚙 Polaris</span>
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
                        <span class="service-name">🏜️ Buggie 1 Hora</span>
                        <span class="service-price">S/ 25.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏜️ Buggie 2 Horas</span>
                        <span class="service-price">S/ 35.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏜️ Buggie Privado</span>
                        <span class="service-price">S/ 200.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏝️ Paracas</span>
                        <span class="service-price">S/ 70.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏔️ Cañón de los Perdidos</span>
                        <span class="service-price">S/ 70.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🪂 Parapente</span>
                        <span class="service-price">S/ 330.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏍️ Cuatrimotos</span>
                        <span class="service-price">S/ 70.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🍷 Bodegas</span>
                        <span class="service-price">S/ 30.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏛️ City Tour</span>
                        <span class="service-price">S/ 200.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🚙 Polaris</span>
                        <span class="service-price">S/ 380.00</span>
                    </div> 
                    <div class="price-item">
                        <span class="service-name">🏄 Tablas Profesionales</span>
                        <span class="service-price">S/ 150.00</span>
                    </div>
                </div>
                <div class="price-note">
                    <p><i class="fas fa-info-circle"></i> <strong>Nota:</strong> City Tour incluye S/ 10.00 por persona para actividad de chocotejas</p>
                </div>
            </div>
        </section>
    `}s(document).on("click",".btn-save",async a=>{a.preventDefault();try{const e=s(".btn-save").attr("data-edit-id"),t=!!e,i={tipoTour:s("#tipoTour").val(),registroEn:s("#registroEn").val(),nombreCliente:s("#nombreCliente").val(),numeroHabitacion:s("#numeroHabitacion").val(),tipoDocumento:s("#tipoDocumento").val(),numeroDocumento:s("#numeroDocumento").val(),cantidadPax:parseInt(s("#cantidadPax").val())||1,precioUnitario:parseFloat(s("#precioUnitario").val())||0,metodoPago:s("#metodoPago").val(),importeTotal:parseFloat(s("#importeTotal").val())||0,cobroProveedor:parseFloat(s("#cobroProveedor").val())||0,horaSalida:s("#horaSalida").val(),fechaTour:s("#fechaTour").val(),estadoPago:s("#estadoPago").val(),vendedor:f.displayName,puntos:parseInt(s("#tipoTour option:selected").data("points"))||0,email:f.email,qventa:1,fechaRegistro:F()};if(!i.tipoTour||!i.nombreCliente||!i.horaSalida||!i.fechaTour){c("Por favor completa todos los campos obligatorios","error");return}if(t){i.idVenta=e,await N(T(v,"registrosdb",e),i);const o=`vendedor_${f.displayName}`;b(o,i,450);const r=d.findIndex(l=>l.id===e);r!==-1&&(d[r]={id:e,...i}),c("¡Venta actualizada exitosamente!","success")}else{const r=`venta_${Date.now()}`;i.idVenta=r,await N(T(v,"registrosdb",r),i);const l=`vendedor_${f.displayName}`;b(l,i,450),c("¡Venta registrada exitosamente!","success")}E(),await L(),await y(),g(),I()}catch(e){console.error("Error al guardar/actualizar venta:",e),c("Error al procesar la venta. Inténtalo nuevamente.","error")}});s(document).on("change","#tipoTour",function(){const a=s(this).find("option:selected").data("points")||0,e=s(this).find("option:selected").data("price")||0;s("#vistaPreviaLaPuntos").text(a),s("#precioUnitario").val(e);const t=parseInt(s("#cantidadPax").val())||1;s("#importeTotal").val(e*t)});s(document).on("input","#cantidadPax, #precioUnitario",function(){const a=parseInt(s("#cantidadPax").val())||1,e=parseFloat(s("#precioUnitario").val())||0;s("#importeTotal").val(e*a)});
