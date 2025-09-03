import{r as H,$ as a,t as U,v as N,M as k,N as c,x as G,d as S,a as u,j as F,i as w,l as g,b as P,c as y,y as A,g as q,q as V,e as $,h as L}from"./widev-C8h2HYTK.js";let b=null;H(L,async s=>{if(!s)return window.location.href="/";b=s;try{const e=A("wiSmile");if(e)return D(e);const o=(await P(V(y(u,"smiles"),$("usuario","==",s.displayName)))).docs[0].data();g("wiSmile",o,450),D(o)}catch(e){console.error(e)}});a(document).on("click",".bt_salir",async()=>{await U(L),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}});a(document).on("click",".tab-btn",function(){const s=a(this).data("tab");N(this,"active"),N("#"+s+"-tab","active")});a(document).on("click",".bt_cargar",()=>{const s=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+)$/;Object.keys(localStorage).filter(e=>s.test(e)).forEach(e=>localStorage.removeItem(e)),k("Actualizado"),setTimeout(()=>location.reload(),800)});let T="2025-09",p=1;const I=5;let d=[],v=[];function D(s){console.log(s.nombre),k("Bienvenido "+s.nombre+"!"),a(".app").html(`
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
    `),J()}async function J(s){try{await Promise.all([z(),M(),x()]),W(),C()}catch(e){console.error("Error inicializando dashboard:",e),c("Error cargando datos del dashboard","error")}}async function z(){try{const s=A("empleadosSmile");s&&(v=s,h());const e=V(y(u,"smiles"),$("participa","==","si"));v=(await P(e)).docs.map(o=>({id:o.id,...o.data()})),g("empleadosSmile",v,300),await O(),h()}catch(s){console.error("Error cargando empleados:",s),a("#workersGrid").html(`
            <div class="error-workers">
                <i class="fas fa-exclamation-triangle"></i>
                Error cargando empleados
            </div>
        `)}}async function O(){try{const e=(await P(y(u,"registrosdb"))).docs.filter(i=>{const o=i.data();return o.fechaTour&&o.fechaTour.startsWith(T)});v.forEach(i=>{const o=e.filter(n=>n.data().vendedor===i.usuario);i.totalPuntos=o.reduce((n,r)=>n+(r.data().puntos||0),0),i.totalVentas=o.reduce((n,r)=>n+(r.data().qventa||0),0)}),v.sort((i,o)=>o.totalPuntos-i.totalPuntos)}catch(s){console.error("Error calculando puntos:",s)}}function h(){const s=v.map((e,i)=>{const o=i+1,n=o===1,r=o===2;return`
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
        `}).join("");a("#workersGrid").html(s)}async function M(){try{d=(await P(y(u,"registrosdb"))).docs.map(e=>({id:e.id,...e.data()})),d.sort((e,i)=>{const o=new Date(e.fechaTour||"1970-01-01");return new Date(i.fechaTour||"1970-01-01")-o}),m()}catch(s){console.error("Error cargando ventas:",s),a("#salesTableBody").html(`
            <tr><td colspan="9" class="error-cell">
                <i class="fas fa-exclamation-triangle"></i> Error cargando ventas
            </td></tr>
        `)}}function m(s="",e=!1){let i=[...d];if(i=i.filter(t=>t.fechaTour&&t.fechaTour.startsWith(T)),s&&(i=i.filter(t=>t.vendedor===s)),e){const t=new Date().toISOString().split("T")[0];i=i.filter(f=>f.fechaTour===t)}const o=Math.ceil(i.length/I),n=(p-1)*I,l=i.slice(n,n+I).map(t=>`
        <tr>
            <td><span class="tour-badge">${t.tipoTour}</span></td>
            <td>
                <strong>${t.nombreCliente}</strong>
                ${t.numeroHabitacion?`<small>Hab: ${t.numeroHabitacion}</small>`:""}
            </td>
            <td><span class="pax-badge"><i class="fas fa-users"></i> ${t.cantidadPax}</span></td>
            <td>
                <div class="datetime-info">
                    <span><i class="fas fa-calendar"></i> ${t.fechaTour}</span>
                    <span><i class="fas fa-clock"></i> ${t.horaSalida}</span>
                </div>
            </td>
            <td>
                <div class="seller-info">
                    <strong>${t.vendedor}</strong>
                    <i class="fas fa-user-tie"></i>
                </div>
            </td>
            <td><strong class="price">S/ ${(t.importeTotal||0).toFixed(2)}</strong></td>
            <td><span class="points-badge"><i class="fas fa-star"></i> ${t.puntos||0}</span></td>

            <td><span class="status-badge ${t.estadoPago==="pagado"||t.estadoPago==="cobrado"?"paid":"pending"}">
                <i class="fas fa-${t.estadoPago==="pagado"||t.estadoPago==="cobrado"?"check-circle":"clock"}"></i> 
                ${t.estadoPago?.toUpperCase()}
            </span></td>

            <td>
                <div class="action-buttons">
                    <button class="btn-view" onclick="verDetalleVenta('${t.id}')" title="Ver detalles">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-edit" onclick="editarVenta('${t.id}')" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-delete" onclick="eliminarVenta('${t.id}')" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join("");a("#salesTableBody").html(l||`
        <tr><td colspan="9" class="empty-cell">
            <i class="fas fa-inbox"></i> No hay ventas para mostrar
        </td></tr>
    `),j(o)}function j(s){if(s<=1){a("#paginationContainer").html("");return}let e='<div class="pagination">';p>1&&(e+=`<button class="page-btn" onclick="cambiarPagina(${p-1})">
            <i class="fas fa-chevron-left"></i>
        </button>`);for(let i=1;i<=s;i++)i===p?e+=`<button class="page-btn active">${i}</button>`:e+=`<button class="page-btn" onclick="cambiarPagina(${i})">${i}</button>`;p<s&&(e+=`<button class="page-btn" onclick="cambiarPagina(${p+1})">
            <i class="fas fa-chevron-right"></i>
        </button>`),e+="</div>",a("#paginationContainer").html(e)}async function x(){try{const s=A("ultimoGanador");s&&R(s);const i=`${Y(T).replace("-","")}`,o=await q(S(u,"ganadores",i));if(o.exists()){const n=o.data();g("ultimoGanador",n,3600),R(n)}else a("#lastWinner").html(`
                <div class="winner-header">
                    <i class="fas fa-trophy"></i>
                    <h3>Último Ganador del Mes</h3>
                </div>
                <div class="no-winner">
                    <i class="fas fa-question-circle"></i>
                    <span>Aún no hay ganador registrado</span>
                </div>
            `)}catch(s){console.error("Error cargando último ganador:",s),a("#lastWinner").html(`
            <div class="winner-header">
                <i class="fas fa-trophy"></i>
                <h3>Último Ganador del Mes</h3>
            </div>
            <div class="error-winner">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Error cargando ganador</span>
            </div>
        `)}}function R(s){const e=v.find(n=>n.usuario===s.ganador||n.nombre===s.ganador),i=e?.imagen||"https://i.postimg.cc/HWMY74kP/image.png",o=e?.nombre||s.ganador;a("#lastWinner").html(`
        <div class="winner-header">
            <i class="fas fa-trophy"></i>
            <h3>Último Ganador del Mes</h3>
        </div>
        <div class="winner-info">
            <img src="${i}" alt="${o}">
            <div class="winner-details">
                <h4>${o}</h4>
                <p>${s.mes} ${s.year}</p>
                <span class="winner-points">${s.puntosGanados} puntos</span>
            </div>
            <div class="winner-achievement">
                <i class="fas fa-star"></i>
                <span>¡Excelente trabajo!</span>
            </div>
        </div>
    `)}function C(){const s=d.filter(l=>l.fechaTour&&l.fechaTour.startsWith(T)),e=new Date().toISOString().split("T")[0],i=s.filter(l=>l.fechaTour===e),o=s.reduce((l,t)=>l+(t.qventa||0),0),n=s.reduce((l,t)=>l+(t.puntos||0),0),r=i.reduce((l,t)=>l+(t.qventa||0),0);a("#totalTours").text(o),a("#totalPuntos").text(n),a("#toursHoy").text(r)}function W(){const s=v.map(e=>`<option value="${e.usuario}">${e.nombre}</option>`).join("");a("#filterEmployee").html(`
        <option value="">Todos los vendedores</option>
        ${s}
    `)}a(document).on("change","#monthSelector",function(){T=a(this).val(),p=1,O().then(()=>{h(),m(),C(),x()})});a(document).on("change","#filterEmployee",function(){p=1,m(a(this).val())});a(document).on("click","#todayFilter",function(){p=1,m(a("#filterEmployee").val(),!0)});window.cambiarPagina=function(s){p=s,m(a("#filterEmployee").val())};window.verDetalleVenta=function(s){const e=d.find(i=>i.id===s);if(!e){c("Venta no encontrada","error");return}B(e,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),c("Datos cargados para visualización","info")};window.editarVenta=function(s){const e=d.find(i=>i.id===s);if(!e){c("Venta no encontrada","error");return}B(e,!1),a(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",s),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),c("Datos cargados para edición","info")};window.eliminarVenta=function(s){const e=d.find(n=>n.id===s);if(!e){c("Venta no encontrada","error");return}!confirm(`¿Estás seguro de eliminar la venta de "${e.nombreCliente}"?

Esta acción NO se puede deshacer.`)||!confirm(`⚠️ CONFIRMACIÓN FINAL ⚠️

Se eliminará permanentemente:
• Cliente: ${e.nombreCliente}
• Tour: ${e.tipoTour}
• Importe: S/ ${e.importeTotal}

¿CONFIRMAS LA ELIMINACIÓN?

Esta acción es IRREVERSIBLE.`)||_(s)};function B(s,e=!1){E(),a("#tipoTour").val(s.tipoTour),a("#registroEn").val(s.registroEn),a("#nombreCliente").val(s.nombreCliente),a("#numeroHabitacion").val(s.numeroHabitacion||""),a("#tipoDocumento").val(s.tipoDocumento||"dni"),a("#numeroDocumento").val(s.numeroDocumento||""),a("#cantidadPax").val(s.cantidadPax||1),a("#precioUnitario").val(s.precioUnitario||0),a("#metodoPago").val(s.metodoPago||""),a("#importeTotal").val(s.importeTotal||0),a("#cobroProveedor").val(s.cobroProveedor||0),a("#horaSalida").val(s.horaSalida),a("#fechaTour").val(s.fechaTour),a("#estadoPago").val(s.estadoPago||"pagado"),a("#vistaPreviaLaPuntos").text(s.puntos||0),e?(a("#formularioVenta input, #formularioVenta select").prop("disabled",!0),a(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),a("#formularioVenta").addClass("view-only"),a(".btn-clear-view").length===0&&a(".form-actions").prepend(`
                <button type="button" class="btn-clear-view" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Limpiar Vista
                </button>
            `)):(a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a(".btn-save").prop("disabled",!1),a("#formularioVenta").addClass("edit-mode"),a(".btn-cancel-edit").length===0&&a(".form-actions").prepend(`
                <button type="button" class="btn-cancel-edit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Cancelar Edición
                </button>
            `))}function E(){a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a(".btn-save").prop("disabled",!1),a("#formularioVenta").removeClass("view-only edit-mode"),a(".btn-save").html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),a(".btn-clear-view, .btn-cancel-edit").remove(),a("#formularioVenta")[0].reset(),a("#cantidadPax").val(1),a("#vistaPreviaLaPuntos").text("0")}async function _(s){try{c("Eliminando venta...","info"),await G(S(u,"registrosdb",s));const e=[];for(let o=0;o<localStorage.length;o++){const n=localStorage.key(o);if(n&&n.startsWith("vendedor_"))try{const r=JSON.parse(localStorage.getItem(n));r&&r.idVenta===s&&e.push(n)}catch{}}e.forEach(o=>localStorage.removeItem(o)),d=d.filter(o=>o.id!==s),await O(),h(),m(),C(),a(".btn-save").attr("data-edit-id")===s&&E(),c("¡Venta eliminada exitosamente!","success")}catch(e){console.error("Error eliminando venta:",e),c("Error al eliminar la venta. Inténtalo nuevamente.","error")}}a(document).on("click",".btn-clear-view",function(){E(),c("Vista limpiada","info")});a(document).on("click",".btn-cancel-edit",function(){E(),c("Edición cancelada","info")});function Y(s){const[e,i]=s.split("-"),o=new Date(parseInt(e),parseInt(i)-2);return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function Q(){return`
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
                        <option value="Buggy Privado - Sonia" data-points="50" data-price="180">7. 🏜️ Buggy Privado - Sonia (40 pts)</option>
                        <option value="Tour de bodegas" data-points="10" data-price="20">8. 🍷 Tour de bodegas (10 pts)</option>
                        <option value="Tour de bodegas - Jackson" data-points="20" data-price="20">9. 🍷 Tour de bodegas - Jackson (20 pts)</option>
                        <option value="Tour de bodegas Privado" data-points="30" data-price="150">10. 🍷 Tour de bodegas Privado (30 pts)</option>
                        <option value="Tour de bodegas Privado - Jackson" data-points="40" data-price="150">11. 🍷 Tour de bodegas Privado - Jackson (40 pts)</option>
                        <option value="City Tour - Jackson" data-points="50" data-price="200">12. 🏛️ City Tour - Jackson (50 pts)</option>
                        <option value="Tour de Paracas" data-points="20" data-price="60">13. 🏝️ Tour de Paracas (20 pts)</option>
                        <option value="Cañón de los perdidos" data-points="20" data-price="60">14. 🏔️ Cañón de los perdidos (20 pts)</option>
                        <option value="Cuatrimotos" data-points="20" data-price="70">15. 🏍️ Cuatrimotos (20 pts)</option>
                        <option value="Sobrevuelo" data-points="30" data-price="494">16. ✈️ Sobrevuelo (30 pts)</option>
                        <option value="Nazca Terrestre" data-points="10" data-price="150">17. 🗿 Nazca Terrestre (10 pts)</option>
                        <option value="Renta Tablas Profesional" data-points="10" data-price="50">18. 🏄 Renta Tablas Profesional (10 pts)</option>
                        <option value="Tablas Profesional - Sonia" data-points="15" data-price="150">19. 🏄 Tablas Profesional - Sonia (15 pts)</option>
                        <option value="Tablas Profesional + Buggy" data-points="10" data-price="150">20. 🏄 Tablas Profesional + Buggy (10 pts)</option>
                        <option value="Polaris" data-points="20" data-price="380">21. 🚙 Polaris (20 pts)</option>
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
                        PAX (Cantidad Personas)
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
                    <input type="text" id="horaSalida" placeholder="2HORAS -5PM" required>
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
            <span class="service-name">🏄 Renta Tablas Profesional</span>
            <span class="point-value">10</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏄 Tablas Profesional + Buggy</span>
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
    `}a(document).on("click",".btn-save",async s=>{s.preventDefault();try{const e=a(".btn-save").attr("data-edit-id"),i=!!e,o=parseInt(a("#cantidadPax").val())||1,n=parseInt(a("#tipoTour option:selected").data("points"))||0,r={tipoTour:a("#tipoTour").val(),registroEn:a("#registroEn").val(),nombreCliente:a("#nombreCliente").val(),numeroHabitacion:a("#numeroHabitacion").val(),tipoDocumento:a("#tipoDocumento").val(),numeroDocumento:a("#numeroDocumento").val(),cantidadPax:o,precioUnitario:parseFloat(a("#precioUnitario").val())||0,metodoPago:a("#metodoPago").val(),importeTotal:parseFloat(a("#importeTotal").val())||0,cobroProveedor:parseFloat(a("#cobroProveedor").val())||0,horaSalida:a("#horaSalida").val(),Operador:a("#Operador").val(),Comentario:a("#Comentario").val(),fechaTour:a("#fechaTour").val(),estadoPago:a("#estadoPago").val(),vendedor:b.displayName,puntos:n*o,email:b.email,qventa:1,fechaRegistro:F()};if(!r.tipoTour||!r.nombreCliente||!r.horaSalida||!r.fechaTour){c("Por favor completa todos los campos obligatorios","error");return}if(i){r.idVenta=e,await w(S(u,"registrosdb",e),r);const l=`vendedor_${b.displayName}`;g(l,r,450);const t=d.findIndex(f=>f.id===e);t!==-1&&(d[t]={id:e,...r}),c("¡Venta actualizada exitosamente!","success")}else{const t=`venta_${Date.now()}`;r.idVenta=t,await w(S(u,"registrosdb",t),r);const f=`vendedor_${b.displayName}`;g(f,r,450),c("¡Venta registrada exitosamente!","success")}E(),await M(),await O(),h(),C()}catch(e){console.error("Error al guardar/actualizar venta:",e),c("Error al procesar la venta. Inténtalo nuevamente.","error")}});a(document).on("change","#tipoTour",function(){const s=a(this).find("option:selected").data("points")||0,e=a(this).find("option:selected").data("price")||0,i=parseInt(a("#cantidadPax").val())||1;a("#vistaPreviaLaPuntos").text(s*i),a("#precioUnitario").val(e),a("#importeTotal").val(e*i)});a(document).on("input","#cantidadPax, #precioUnitario",function(){const s=parseInt(a("#cantidadPax").val())||1,e=parseFloat(a("#precioUnitario").val())||0,i=a("#tipoTour option:selected").data("points")||0;a("#importeTotal").val(e*s),a("#vistaPreviaLaPuntos").text(i*s)});
