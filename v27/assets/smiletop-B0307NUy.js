import{o as ct,d as m,h as S,q as z,c as N,w as T,a as tt,$ as s,i as q,e as lt,f as F,k as M,u as O,l as G,n as dt}from"./init-K98cp_Uf.js";import"./foo-DJJaD4eS.js";import{d as I,w as W,e as k,N as i,m as K,C as H,r as D}from"./widev-DxvgDuDE.js";let f=null,g=new Date(new Date().toLocaleString("en-US",{timeZone:"America/Lima"})).toISOString().slice(0,7),b="todos",d=0,P=0,w=[],x=[],u=[],L=7,p=[],_=!1,j=null;ct(tt,async t=>{if(!t)return window.location.href="/";j=t;try{const o=I("wiSmileTop");if(o)return Y(o),W(m,j);const e=(await S(z(N(m,"smiles"),T("usuario","==",t.displayName)))).docs[0].data();k("wiSmileTop",e,450),Y(e),W(m,j)}catch(o){console.error(o)}});async function Y(t){f=t,console.log(`✅ Admin: ${t.nombre}`),s(".app").html(ut());try{await at(),await V(),await pt(),await R(),await wt(),bt(),A(),C(),i("Bienvenido "+t.nombre,"success")}catch(o){console.error("Error init:",o),i("Error al inicializar","error")}}function ut(){return`
        <header class="admin-header">
            <div class="header-left">
                <div class="logo">
                    <i class="fas fa-chart-line"></i>
                    <h1>Administración de Tours Hawka & HClaudia</h1>
                </div>
            </div>
            <div class="header-right">
                <div class="witemas"></div>
                <div class="user-info">
                    <img src="${f.imagen||"./smile.png"}" alt="Avatar" class="user-avatar">
                    <span>${f.nombre||"Admin"}</span>
                </div>
                <button class="btn-logout bt_salir">
                    <i class="fas fa-sign-out-alt"></i>
                    Salir
                </button>
            </div>
        </header>

        <div class="content-grid">
            <main class="main-content">
                <section class="filters-bar">
                    <div class="filter-group">
                        <label><i class="fas fa-calendar"></i> Mes</label>
                        <select id="monthFilter">${ft()}</select>
                    </div>
                    <div class="filter-group">
                        <label><i class="fas fa-user"></i> Usuario</label>
                        <select id="userFilter">
                            <option value="todos">Todos los usuarios</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label><i class="fas fa-list"></i> Mostrar</label>
                        <select id="itemsFilter">
                            <option value="7" selected>7 ventas</option>
                            <option value="10">10 ventas</option>
                            <option value="20">20 ventas</option>
                            <option value="30">30 ventas</option>
                        </select>
                    </div>
                    <button class="btn-refresh bt_cargar">
                        <i class="fas fa-sync"></i>
                        Actualizar
                    </button>
                    <button class="btn-refresh bt_exportar">
                        <i class="fas fa-sync"></i>
                        Exportar Excel 
                    </button>
                </section>

                <section class="table-section">
                    <div class="table-header">
                        <h2><i class="fas fa-table"></i> Registro de Ventas</h2>
                        <div class="table-stats">
                            <span id="totalVentas">0 ventas</span>
                            <span id="totalIngresos">S/ 0.00</span>
                            <span id="totalPuntos">0 puntos</span>
                        </div>
                    </div>
                    
                    <div class="table-container" id="tableContainer">
                        <div class="loading-state">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Cargando ventas...</p>
                        </div>
                    </div>
                    
                    <div class="pagination" id="pagination" style="display: none;">
                        <button id="prevPage" class="btn-page">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="page-numbers" id="pageNumbers"></div>
                        <button id="nextPage" class="btn-page">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </section>

                <!-- GESTIÓN DE TOURS COMPACTA -->
                <section class="table-section">
                    <div class="table-header">
                        <h2><i class="fas fa-route"></i> Administrar Tours</h2>
                        <div class="table-stats">
                            <button id="refreshTours" class="btn-refresh" onclick="refreshToursFromDB()">
                                <i class="fas fa-sync"></i> Actualizar
                            </button>
                            <button id="addTour" class="btn-refresh">
                                <i class="fas fa-plus"></i> Agregar
                            </button>
                        </div>
                    </div>
                    
                    <div id="toursContainer">
                        <div class="loading-state">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Cargando tours...</p>
                        </div>
                    </div>
                </section>

                <!-- GESTIÓN DE USUARIOS COMPACTA -->
                <section class="table-section">
                    <div class="table-header">
                        <h2><i class="fas fa-users-cog"></i> Administrar Usuarios</h2>
                    </div>
                    <div id="usuariosConfigContainer">
                        <div class="loading-state">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Cargando configuración...</p>
                        </div>
                    </div>
                </section>

            </main>

            <aside class="sidebar">
                <div class="notes-section">
                    <div class="notes-header">
                        <h3><i class="fas fa-sticky-note"></i> Notas</h3>
                        <button id="addNote" class="btn-add">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="notes-container" id="notesContainer">
                        <div class="loading-state">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Cargando notas...</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    `}function ft(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"America/Lima"}));return[...Array(12)].map((o,a)=>{const n=new Date(t.getFullYear(),t.getMonth()-6+a,1).toISOString().slice(0,7);return`<option value="${n}" ${n===g?"selected":""}>${n}</option>`}).join("")}async function at(){try{console.log("🔄 Cargando usuarios...");const t=I("usuariosSmileTop");if(t&&t.length>0){x=t,console.log(`✅ ${x.length} usuarios desde cache`),J();return}x=(await S(z(N(m,"smiles"),T("rol","==","smile")))).docs.map(a=>({id:a.id,...a.data()})),console.log(`✅ ${x.length} usuarios cargados desde Firestore`),k("usuariosSmileTop",x,300),J()}catch(t){console.error("❌ Error load usuarios:",t),i("Error al cargar usuarios","error")}}async function V(t=0,o=!0){try{const e=`ventasSmileTop_${g}_${b}`;o&&(t=0),console.log(`🔄 Cargando ventas pág ${t} (cacheKey: ${e})`);const n=I(e);if(n&&Array.isArray(n))return console.log(`⚡ Ventas desde cache (${n.length})`),a(n,t);const[r,l]=g.split("-").map(Number),y=new Date(r,l-1,1,0,0,0,0),h=new Date(r,l,1,0,0,0,0),c=z(N(m,"registrosdb"),T("fechaTour",">=",y),T("fechaTour","<",h),q("fechaTour","desc"));let $=await S(c);if($.empty){console.warn("⚠️ Sin resultados Timestamp; probando strings...");const v=z(N(m,"registrosdb"),T("fechaTour",">=",`${g}-01`),T("fechaTour","<=",`${g}-32`),q("fechaTour","desc"));$=await S(v)}let E=$.docs.map(v=>({id:v.id,...v.data()}));b!=="todos"&&(E=E.filter(v=>v.vendedor===b)),k(e,E,10),a(E,t)}catch(e){console.error("❌ Error loadVentas:",e),i("Error al cargar ventas","error"),w=[]}function a(e,n){if(P=Math.max(1,Math.ceil(e.length/L)),n>=P&&(n=0),d=n,e.length===0){w=[],console.log("📭 Sin ventas para filtros");return}const r=d*L,l=r+L;w=e.slice(r,l),console.log(`✅ Página ${d+1}/${P} mostrando ${w.length} de ${e.length}`)}}async function X(t=!1){try{console.log(`🔄 Refrescando datos (force=${t})`),s("#tableContainer").html(`
            <div class="loading-state">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Actualizando datos...</p>
            </div>
        `),d=0,t&&D(`ventasSmileTop_${g}_${b}`),await at(),await V(0,!0),A(),i("✅ Datos actualizados","success")}catch(o){console.error("❌ Error refreshData:",o),i("Error al actualizar datos","error")}}async function pt(){try{console.log("🔄 Cargando notas...");const t=I("notasSmileTop");if(t?.length>0){u=t,console.log(`✅ ${u.length} notas desde cache`),C();return}const o=await S(N(m,"notas"));if(o.empty){console.log("📭 No hay notas, creando por defecto"),u=[],C();return}u=o.docs.map(a=>({id:a.id,titulo:"Noticias a trabajadores",contenido:a.data().nota||"",editando:!1,...a.data()})),k("notasSmileTop",u,720),console.log(`✅ ${u.length} notas cargadas desde Firebase`),C()}catch(t){console.error("❌ Error load notas:",t),u=[],C()}}function J(){const t=s("#userFilter"),o=t.val();t.find('option:not([value="todos"])').remove(),console.log("📋 Actualizando filtro de usuarios..."),x.forEach(a=>{const e=a.nombre||a.usuario;t.append(`<option value="${a.usuario}">${e}</option>`)}),o&&t.find(`option[value="${o}"]`).length&&t.val(o),console.log(`✅ ${t.find("option").length-1} usuarios en filtro`)}function A(){const t=s("#tableContainer");if(console.log(`📊 Renderizando ${w.length} ventas`),w.length===0){t.html(`
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>No hay ventas</h3>
                <p>No se encontraron ventas para ${b==="todos"?"este mes":"este usuario en este mes"}</p>
                <button class="btn-refresh bt_cargar" style="margin-top: 1rem;">
                    <i class="fas fa-sync"></i>
                    Buscar en base de datos
                </button>
            </div>
        `),Q([],0,0),s("#pagination").hide();return}const o=`
        <table class="sales-table">
            <thead>
                <tr>
                    <th><i class="fas fa-calendar"></i> Fecha</th>
                    <th><i class="fas fa-user"></i> Usuario</th>
                    <th><i class="fas fa-route"></i> Tipo Tour</th>
                    <th><i class="fas fa-users"></i> Pax</th>
                    <th><i class="fas fa-user"></i> Nombre</th>
                    <th><i class="fas fa-money-bill-wave"></i> M. Total</th>
                    <th><i class="fas fa-coins"></i> M. Individual</th>
                    <th><i class="fas fa-percentage"></i> Comisión</th>
                    <th><i class="fas fa-check-circle"></i> Pagado</th>
                    <th><i class="fas fa-chart-line"></i> Ganancia</th>
                    <th><i class="fas fa-star"></i> Puntos</th>
                    <th><i class="fas fa-cogs"></i> Acciones</th>
                </tr>
            </thead>
            <tbody>
                ${w.map(n=>ot(n)).join("")}
            </tbody>
        </table>
    `;t.html(o);const a=w.reduce((n,r)=>n+(parseFloat(r.importeTotal)||0),0),e=w.reduce((n,r)=>n+(parseInt(r.puntos)||0),0);Q(w,a,e),ht()}function ot(t,o=!1){const a=x.find($=>$.usuario===t.vendedor||$.id===t.vendedor),e=mt(t.fechaTour),n=c(t.precioUnitario),r=c(t.importeTotal),l=c(t.comision,r*.1),y=c(t.ganancia,r-l),h=parseInt(t.puntos)||0;function c($,E=0){const v=parseFloat($);return isNaN(v)?E:v}return o?`
            <tr class="editing-row" data-id="${t.id}">
                <td>${e}</td>
                <td class="user-cell">
                    <img src="${a?.imagen||"./smile.png"}" class="avatar-small">
                    ${a?.nombre||a?.usuario||t.vendedor}
                </td>
                <td class="tour-cell">${t.tipoTour||"Tour"}</td>
                <td class="money-cell">${t.cantidadPax||"0"}</td>
                <td class="money-cell">${K(t.nombreCliente)||"Sin nombre"}</td>
                <td><input type="number" class="edit-input" data-field="importeTotal" value="${r.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="precioUnitario" value="${n.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="comision" value="${l.toFixed(2)}" step="0.01"></td>
                <td class="money-cell">${H(t.estadoPago)||"No"}</td>
                <td><input type="number" class="edit-input" data-field="ganancia" value="${y.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="puntos" value="${h}"></td>
                <td class="actions-cell">
                    <button class="btn-action btn-save" onclick="saveVenta('${t.id}')">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn-action btn-cancel" onclick="cancelEdit('${t.id}')">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `:`
        <tr data-id="${t.id}">
            <td>${e}</td>
            <td class="user-cell">
                <img src="${a?.imagen||"./smile.png"}" class="avatar-small">
                ${a?.nombre||a?.usuario||t.vendedor}
            </td>
            <td class="tour-cell">${t.tipoTour||"Tour"}</td>
            <td class="money-cell">${t.cantidadPax||"0"}</td>
            <td class="money-cell">${K(t.nombreCliente)||"Sin nombre"}</td>
            <td class="money-cell">${r.toFixed(2)}</td>
            <td class="money-cell">${n.toFixed(2)}</td>
            <td class="money-cell">${l.toFixed(2)}</td>
            <td class="money-cell">${H(t.estadoPago)||"No"}</td>
            <td class="money-cell">${y.toFixed(2)}</td>
            <td class="points-cell">${h}</td>
            <td class="actions-cell">
                <button class="btn-action btn-view" onclick="viewVenta('${t.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-action btn-edit" onclick="editVenta('${t.id}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `}function mt(t){if(!t)return"Sin fecha";if(typeof t=="object"&&typeof t.toDate=="function")return t.toDate().toLocaleDateString("es-PE",{timeZone:"America/Lima"});if(t.seconds&&!isNaN(t.seconds))return new Date(t.seconds*1e3).toLocaleDateString("es-PE",{timeZone:"America/Lima"});if(typeof t=="string"&&t.includes("T"))return new Date(t).toLocaleDateString("es-PE",{timeZone:"America/Lima"});if(typeof t=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(t)){const[o,a,e]=t.split("-");return`${e}/${a}/${o}`}try{return new Date(t).toLocaleDateString("es-PE",{timeZone:"America/Lima"})}catch{return"Fecha?"}}function Q(t,o,a){s("#totalVentas").text(`${t.length} ${t.length===1?"venta":"ventas"}`),s("#totalIngresos").text(`S/ ${o.toFixed(2)}`),s("#totalPuntos").text(`${a} puntos`)}function ht(){const t=s("#pagination"),o=s("#prevPage"),a=s("#nextPage"),e=s("#pageNumbers");if(P<=1){t.hide();return}let n="";const r=8;let l=Math.max(0,d-Math.floor(r/2)),y=Math.min(P-1,l+r-1);y-l<r-1&&(l=Math.max(0,y-r+1));for(let h=l;h<=y;h++)n+=`
            <button class="btn-page page-number ${h===d?"active":""}" data-page="${h}">
                ${h+1}
            </button>
        `;e.html(n),o.prop("disabled",d===0),a.prop("disabled",d>=P-1),t.show()}async function R(){try{console.log("🔄 Cargando tours...");const t=I("toursSmileTop");if(t&&t.length>0){p=t,console.log(`✅ ${p.length} tours desde cache`),U();return}console.log("📡 Cargando desde Firestore...");const o=await S(N(m,"listatours"));if(o.empty){console.log("📭 No hay tours en Firestore"),p=[],U();return}p=o.docs.map(a=>({id:a.id,...a.data()})),k("toursSmileTop",p,300),console.log(`✅ ${p.length} tours cargados y guardados en cache`),U()}catch(t){console.error("❌ Error cargando tours:",t),i("Error al cargar tours","error"),s("#toursContainer").html(`
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle" style="color:#dc3545;font-size:48px;margin-bottom:15px;"></i>
                <h3>Error al cargar tours</h3>
                <p>No se pudieron cargar los tours desde la base de datos</p>
                <button onclick="loadTours()" class="btn-refresh" style="margin-top:15px;">
                    <i class="fas fa-sync"></i> Reintentar
                </button>
            </div>
        `)}}function U(){console.log("🎨 Renderizando tours...",p);const t=`
        <table class="sales-table">
            <thead>
                <tr>
                    <th><i class="fas fa-hashtag"></i> Num</th>
                    <th><i class="fas fa-route"></i> Tour</th>
                    <th><i class="fas fa-dollar-sign"></i> Precio (S/)</th>
                    <th><i class="fas fa-percentage"></i> Comisión</th>
                    <th><i class="fas fa-star"></i> Puntos</th>
                    <th><i class="fas fa-cogs"></i> Acción</th>
                </tr>
            </thead>
            <tbody id="toursTableBody">
                ${p.length>0?p.map((o,a)=>et(o,a+1)).join(""):`
                    <tr>
                        <td colspan="6" class="empty-cell" style="text-align:center;padding:40px;">
                            <i class="fas fa-route" style="font-size:48px;color:#ccc;margin-bottom:15px;"></i>
                            <p style="margin:0;color:#666;">No hay tours registrados</p>
                            <button onclick="showAddForm()" class="btn-refresh" style="margin-top:15px;">
                                <i class="fas fa-plus"></i> Agregar Primer Tour
                            </button>
                        </td>
                    </tr>
                `}
            </tbody>
        </table>
    `;s("#toursContainer").html(t),console.log("✅ Tours renderizados en interfaz")}function et(t,o,a=!1){const e=t.num||o;return a?`
            <tr class="editing-row" data-id="${t.id}">
                <td><strong>${e}</strong></td>
                <td>
                    <input id="tourNombre" 
                           type="text" 
                           class="edit-input" 
                           placeholder="Ingresa el tour" 
                           value="${t.tour||t.nombre||""}" 
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td>
                    <input id="tourPrecio" 
                           type="number" 
                           class="edit-input" 
                           placeholder="Precio: Ingresa el valor" 
                           value="${t.precio||""}" 
                           step="0.01" 
                           min="0"
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td>
                    <input id="tourComision" 
                           type="number" 
                           class="edit-input" 
                           placeholder="Ingresa Comisión: 25.00" 
                           value="${t.comision||""}" 
                           step="0.01" 
                           min="0"
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td>
                    <input id="tourPuntos" 
                           type="number" 
                           class="edit-input" 
                           placeholder="Aquí también solo número: 50" 
                           value="${t.puntos||""}" 
                           min="0"
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td class="actions-cell">
                    <button onclick="saveTour('${t.id}', ${e})" class="btn-action btn-save" title="Guardar">
                        <i class="fas fa-check"></i>
                    </button>
                    <button onclick="cancelEditTour('${t.id}')" class="btn-action btn-cancel" title="Cancelar">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `:`
        <tr data-id="${t.id}">
            <td><strong>${e}</strong></td>
            <td class="tour-name">${t.tour||t.nombre||"Tour sin nombre"}</td>
            <td class="money-cell">${(t.precio||0).toFixed(2)}</td>
            <td class="money-cell">${(t.comision||0).toFixed(2)}</td>
            <td class="points-cell">${t.puntos||0}</td>
            <td class="actions-cell">
                <button onclick="editTour('${t.id}')" class="btn-action btn-edit" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="delTour('${t.id}')" class="btn-action btn-delete" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `}function st(){const t=`
        <tr class="editing-row new-tour-row">
            <td><strong>${p.length+1}</strong></td>
            <td>
                <input id="tourNombre" 
                       type="text" 
                       class="edit-input" 
                       placeholder="Ingresa el tour" 
                       value="" 
                       style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
            </td>
            <td>
                <input id="tourPrecio" 
                       type="number" 
                       class="edit-input" 
                       placeholder="Precio: Ingresa el valor" 
                       value="" 
                       step="0.01" 
                       min="0"
                       style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
            </td>
            <td>
                <input id="tourComision" 
                       type="number" 
                       class="edit-input" 
                       placeholder="Ingresa Comisión: 25.00" 
                       value="" 
                       step="0.01" 
                       min="0"
                       style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
            </td>
            <td>
                <input id="tourPuntos" 
                       type="number" 
                       class="edit-input" 
                       placeholder="Aquí también solo número: 50" 
                       value="" 
                       min="0"
                       style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
            </td>
            <td class="actions-cell">
                <button onclick="saveTour('', ${p.length+1})" class="btn-action btn-save" title="Guardar">
                    <i class="fas fa-check"></i>
                </button>
                <button onclick="cancelAddTour()" class="btn-action btn-cancel" title="Cancelar">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
    `;p.length>0?s("#toursTableBody").append(t):s("#toursTableBody").html(t),setTimeout(()=>s("#tourNombre").focus(),100),i("📝 Agregando nuevo tour...","info")}window.editTour=function(t){const o=p.find(n=>n.id===t);if(!o)return;const a=p.findIndex(n=>n.id===t)+1;s(`tr[data-id="${t}"]`).replaceWith(et(o,a,!0)),setTimeout(()=>s("#tourNombre").focus(),100),i("✏️ Editando tour...","info")};window.cancelEditTour=function(t){U(),i("❌ Edición cancelada","info")};window.cancelAddTour=function(){p.length>0?s(".new-tour-row").remove():U(),i("❌ Nuevo tour cancelado","info")};window.delTour=async function(t){const o=p.find(e=>e.id===t);if(!(!o||!confirm(`¿Eliminar el tour "${o.tour||o.nombre}"?

Esta acción no se puede deshacer.`)))try{await lt(F(m,"listatours",t)),D("toursSmileTop"),await R(),i("🗑️ Tour eliminado correctamente","success")}catch(e){console.error("Error eliminar tour:",e),i("❌ Error al eliminar tour","error")}};window.refreshToursFromDB=async function(){console.log("🔄 Forzando recarga desde Firebase..."),D("toursSmileTop"),await R(),i("✅ Tours actualizados desde Firebase","success")};window.saveTour=async function(t,o){const a=s("#tourNombre").val().trim(),e=parseFloat(s("#tourPrecio").val())||0,n=parseFloat(s("#tourComision").val())||0,r=parseInt(s("#tourPuntos").val())||0;if(!a){i("⚠️ El nombre del tour es obligatorio","error"),s("#tourNombre").focus();return}if(e<=0){i("⚠️ El precio debe ser mayor a 0","error"),s("#tourPrecio").focus();return}try{if(t){const l={activo:!0,comision:n,tour:a,precio:e,puntos:r,actualizadoPor:f.nombre||f.usuario||"Admin",fecha:M()};await O(F(m,"listatours",t),l),i("✅ Tour actualizado correctamente","success")}else{const l=p.length>0?Math.max(...p.map(c=>c.num||0))+1:1,y={activo:!0,comision:n,tour:a,precio:e,puntos:r,num:l,creadoPor:f.nombre||f.usuario||"Admin",actualizadoPor:f.nombre||f.usuario||"Admin",fecha:M()},h=Date.now().toString();await G(F(m,"listatours",h),y),i(`✅ Tour #${l} creado correctamente`,"success")}D("toursSmileTop"),await R()}catch(l){console.error("❌ Error guardar tour:",l),i("❌ Error al guardar tour: "+l.message,"error")}};window.showAddForm=st;window.loadTours=R;function C(){const t=s("#notesContainer");if(!u||u.length===0){t.html(`
            <div class="empty-state">
                <i class="fas fa-sticky-note"></i>
                <h3>Sin notas</h3>
                <p>Agrega tu primera nota</p>
            </div>
        `);return}const o=u.map(a=>`
        <div class="note-item" data-id="${a.id}">
            <h4>${a.titulo||"Nota"}</h4>
            <textarea 
                class="note-content" 
                ${a.editando?"":"disabled"} 
                placeholder="Escribe aquí tu nota..."
            >${a.nota||a.contenido||""}</textarea>
            <div class="note-actions">
                ${a.editando?`
                    <button class="btn-save" onclick="saveNota('${a.id}')">
                        <i class="fas fa-save"></i> 
                    </button>
                    <button class="btn-cancel" onclick="cancelNota('${a.id}')">
                        <i class="fas fa-times"></i> 
                    </button>
                `:`
                    <button class="btn-edit" onclick="editNota('${a.id}')">
                        <i class="fas fa-edit"></i> 
                    </button>
                `}
            </div>
        </div>
    `).join("");t.html(o)}window.viewVenta=function(t){const o=w.find(r=>r.id===t);if(!o)return;const a=x.find(r=>r.usuario===o.vendedor||r.id===o.vendedor),e=o.nombreCliente||"Cliente",n=a?.nombre||a?.usuario||o.vendedor;i(`👁️ Viendo: ${e} - Vendedor: ${n}`,"info",4e3)};window.editVenta=function(t){const o=w.find(e=>e.id===t);if(!o)return;s(`tr[data-id="${t}"]`).replaceWith(ot(o,!0)),i("Modo edición activado","info")};window.saveVenta=async function(t){try{const o=s(`.editing-row[data-id="${t}"]`),a={};o.find(".edit-input").each(function(){const n=s(this).data("field"),r=s(this).val();a[n]=n==="puntos"?parseInt(r):parseFloat(r)}),a.actualizadoPor=f.nombre||f.usuario,a.fechaActualizacion=M(),await O(F(m,"registrosdb",t),a);const e=w.findIndex(n=>n.id===t);e!==-1&&Object.assign(w[e],a),A(),i("✅ Venta actualizada correctamente","success")}catch(o){console.error("❌ Error save venta:",o),i("Error al actualizar venta","error")}};window.cancelEdit=function(t){A(),i("Edición cancelada","info")};window.editNota=function(t){console.log("📝 Editando nota:",t);const o=u.find(a=>a.id==t);o?(o.editando=!0,C(),setTimeout(()=>{s(`.note-item[data-id="${t}"] .note-content`).focus()},100),i("✏️ Editando nota...","info")):(console.error("❌ Nota no encontrada:",t),i("❌ Error: Nota no encontrada","error"))};window.saveNota=async function(t){console.log("💾 Guardando nota:",t);const o=s(`.note-item[data-id="${t}"] .note-content`).val().trim();if(!o){i("⚠️ La nota no puede estar vacía","error"),s(`.note-item[data-id="${t}"] .note-content`).focus();return}try{const a={nota:o,creadoPor:f.nombre||f.usuario||"Admin",actualizadoPor:f.nombre||f.usuario||"Admin",fechaCreacion:M()};if(t&&t!=="new"){await O(F(m,"notas",t.toString()),a);const e=u.find(n=>n.id==t);e&&(e.nota=o,e.editando=!1),i("✅ Nota actualizada","success")}else{const e=Date.now().toString();await G(F(m,"notas",e),a),u=u.filter(n=>n.id!=="new"),u.push({id:e,titulo:"Nota",nota:o,editando:!1,...a}),i("✅ Nota creada","success")}D("notasSmileTop"),C()}catch(a){console.error("❌ Error guardar nota:",a),i("❌ Error al guardar: "+a.message,"error")}};window.cancelNota=function(t){if(console.log("❌ Cancelando edición:",t),t==="new")u=u.filter(o=>o.id!=="new");else{const o=u.find(a=>a.id==t);o&&(o.editando=!1)}C(),i("❌ Edición cancelada","info")};async function gt(){try{console.log("📊 Exportando a Excel...");let t=z(N(m,"registrosdb"),T("fechaTour",">=",g+"-01"),T("fechaTour","<=",g+"-31"),q("fechaTour","desc")),a=(await S(t)).docs.map(c=>({id:c.id,...c.data()}));if(b!=="todos"&&(a=a.filter(c=>c.vendedor===b)),a.length===0)return i("❌ No hay datos para exportar","warning");const e=a.map(c=>{const $=x.find(rt=>rt.usuario===c.vendedor),E=c.fechaTour?new Date(c.fechaTour).toLocaleDateString("es-PE",{timeZone:"America/Lima"}):"Sin fecha",v=parseFloat(c.importeTotal)||0,nt=parseFloat(c.precioUnitario)||0,Z=parseFloat(c.comision)||v*.1,it=parseFloat(c.ganancia)||v-Z;return{Fecha:E,Usuario:$?.nombre||$?.usuario||c.vendedor,"Tipo Tour":c.tipoTour||"Tour",PAX:c.cantidadPax||0,"Nombre Cliente":c.nombreCliente||"Sin nombre","Monto Total":v.toFixed(2),"Monto Individual":nt.toFixed(2),Comisión:Z.toFixed(2),"Estado Pago":H(c.estadoPago)||"Pendiente",Ganancia:it.toFixed(2),Puntos:parseInt(c.puntos)||0,Hotel:c.hotel||"",Habitación:c.numeroHabitacion||"","Fecha Registro":c.fechaRegistro?new Date(c.fechaRegistro.toDate()).toLocaleDateString("es-ES"):""}}),n=XLSX.utils.json_to_sheet(e),r=[{wch:12},{wch:15},{wch:20},{wch:8},{wch:25},{wch:12},{wch:15},{wch:12},{wch:12},{wch:12},{wch:8},{wch:20},{wch:10},{wch:15}];n["!cols"]=r;const l=XLSX.utils.book_new(),y=b==="todos"?`Ventas_${g.replace("-","_")}`:`${b}_${g.replace("-","_")}`;XLSX.utils.book_append_sheet(l,n,y);const h=b==="todos"?`ventas_${g}_todas.xlsx`:`ventas_${g}_${b}.xlsx`;XLSX.writeFile(l,h),console.log(`✅ Excel exportado: ${h}`),i(`📊 Excel exportado: ${e.length} registros`,"success")}catch(t){console.error("❌ Error exportar Excel:",t),i("Error al exportar Excel","error")}}function bt(){s(document).on("click",".bt_salir",async()=>{try{await dt(tt),window.location.href="/",localStorage.clear()}catch(t){console.error("Error logout:",t)}}),s(document).on("click",".bt_cargar",async()=>{D(`ventasSmileTop_${g}_${b}`),await X(!0)}),s(document).on("click",".bt_exportar",async()=>{await gt()}),s(document).on("change","#monthFilter",async function(){g=s(this).val(),d=0,console.log(`📅 Cambiando a mes: ${g}`),await X()}),s(document).on("change","#userFilter",async function(){const t=s(this).val();t!==b&&(b=t,d=0,console.log(`👤 Filtrando por usuario: ${b}`),await X())}),s(document).on("click","#prevPage",async()=>{d>0&&(d--,await V(d,!1),A())}),s(document).on("click","#nextPage",async()=>{d<P-1&&(d++,await V(d,!1),A())}),s(document).on("click",".page-number",async function(){const t=parseInt(s(this).data("page"));t!==d&&(d=t,await V(d,!1),A())}),s(document).on("click","#addNote",()=>{const t={id:"new",titulo:"Nueva Nota",contenido:"",editando:!0,fechaCreacion:new Date().toISOString()};u.push(t),C(),i("📝 Agregando nueva nota...","info")}),s(document).on("change","#itemsFilter",async function(){const t=parseInt(s(this).val());t!==L&&(L=t,d=0,console.log(`📊 Mostrando ${L} ventas por página`),await X())}),s(document).on("click","#addTour",()=>st())}s(document).ready(()=>{if(console.log("🚀 SmileTop Admin v2.0 iniciado"),typeof XLSX>"u"){const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",t.onload=()=>console.log("✅ Biblioteca XLSX cargada"),document.head.appendChild(t)}});async function wt(){try{console.log("🔄 Cargando config cuenta...");const t=I("configCrearCuenta");if(t!==null){_=t,B();return}_=(await S(z(N(m,"smilesTop"),T("__name__","==","configuracion")))).docs[0]?.data()?.crearCuenta||!1,k("configCrearCuenta",_,60),B()}catch(t){console.error("❌ Error load config:",t),_=!1,B()}}function B(){s("#usuariosConfigContainer").html(`
        <table class="sales-table">
            <thead>
                <tr>
                    <th><i class="fas fa-cog"></i> Configuración</th>
                    <th><i class="fas fa-toggle-on"></i> Estado</th>
                    <th><i class="fas fa-save"></i> Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Habilitar Crear Cuenta</strong></td>
                    <td>
                        <input type="checkbox" id="checkCrearCuenta" ${_?"checked":""} style="width:20px;height:20px;cursor:pointer;">
                    </td>
                    <td class="actions-cell">
                        <button onclick="saveConfigCuenta()" class="btn-action btn-save" title="Guardar">
                            <i class="fas fa-save"></i> 
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    `)}window.saveConfigCuenta=async function(){try{const t=s("#checkCrearCuenta").is(":checked"),o={crearCuenta:t,usuario:f.usuario,actualizadoPor:f.nombre||f.usuario,fechaCreado:M(),fechaActualizado:M()};await G(F(m,"smilesTop","configuracion"),o,{merge:!0}),_=t,D("configCrearCuenta"),k("configCrearCuenta",t,60),i(`✅ Crear cuenta ${t?"habilitado":"deshabilitado"}`,"success")}catch(t){console.error("❌ Error save config:",t),i("❌ Error al guardar","error")}};s(document).ready(()=>{console.log("🚀 SmileTop Admin v2.0 iniciado")});
