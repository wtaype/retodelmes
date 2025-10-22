import{t as st,A as _,b as C,q as V,c as A,a as y,e as E,N as n,v as G,h as R,l as k,$ as e,B as it,C as M,D as W,z as B,y as nt,d as z,E as P,j as U,F as Y,i as rt}from"./widev-DHEX-f3z.js";let b=null,v=new Date().toISOString().slice(0,7),m="todos",d=0,$=0,h=[],w=[],g=[],T=7,u=[];st(R,async t=>{if(!t)return window.location.href="/";try{const o=_("wiSmileTop");if(o)return await q(o);const a=await C(V(A(y,"smiles"),E("usuario","==",t.displayName)));if(a.empty||a.docs[0].data().rol!=="smiletop")return n("No tienes permisos de administrador","error"),await G(R);const s=a.docs[0].data();k("wiSmileTop",s,450),await q(s)}catch(o){console.error("Error auth:",o),n("Error al cargar aplicación","error")}});async function q(t){b=t,console.log(`✅ Admin: ${t.nombre}`),e(".app").html(ct()),it();try{await J(),await F(),await dt(),await S(),ft(),x(),D(),n("Dashboard cargado","success")}catch(o){console.error("Error init:",o),n("Error al inicializar","error")}}function ct(){return`
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
                    <img src="${b.imagen||"./smile.png"}" alt="Avatar" class="user-avatar">
                    <span>${b.nombre||"Admin"}</span>
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
                        <select id="monthFilter">${lt()}</select>
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
    `}function lt(){const t=[],o=new Date;for(let a=-6;a<=5;a++){const s=new Date(o.getFullYear(),o.getMonth()+a,1),i=s.toISOString().slice(0,7),r=s.toLocaleDateString("es-ES",{year:"numeric",month:"long"}),l=i===v?"selected":"";t.push(`<option value="${i}" ${l}>${M(r)}</option>`)}return t.join("")}async function J(){try{console.log("🔄 Cargando usuarios...");const t=_("usuariosSmileTop");if(t&&t.length>0){w=t,console.log(`✅ ${w.length} usuarios desde cache`),O();return}w=(await C(V(A(y,"smiles"),E("rol","==","smile")))).docs.map(a=>({id:a.id,...a.data()})),console.log(`✅ ${w.length} usuarios cargados desde Firestore`),k("usuariosSmileTop",w,300),O()}catch(t){console.error("❌ Error load usuarios:",t),n("Error al cargar usuarios","error")}}async function F(t=0,o=!0){try{console.log(`🔄 Cargando ventas página ${t}...`);let a=V(A(y,"registrosdb"),E("fechaTour",">=",v+"-01"),E("fechaTour","<=",v+"-31"),W("fechaTour","desc")),i=(await C(a)).docs.map(p=>({id:p.id,...p.data()}));if(m!=="todos"&&(i=i.filter(p=>p.vendedor===m),console.log(`🔍 Filtrado por usuario ${m}: ${i.length} ventas`)),$=Math.ceil(i.length/T),i.length===0){d=0,h=[],console.log("❌ No hay ventas para este filtro");return}d>=$&&(d=0);const r=d*T,l=r+T;h=i.slice(r,l),console.log(`✅ ${h.length}/${i.length} ventas cargadas para página ${d+1}/${$}`)}catch(a){console.error("❌ Error load ventas:",a),n("Error al cargar ventas","error")}}async function I(){try{console.log("🔄 Refrescando datos..."),e("#tableContainer").html(`
            <div class="loading-state">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Actualizando datos...</p>
            </div>
        `),d=0,await J(),await F(d),x(),n("✅ Datos actualizados correctamente","success")}catch(t){console.error("❌ Error refresh:",t),n("Error al actualizar datos","error")}}async function dt(){try{console.log("🔄 Cargando notas...");const t=_("notasSmileTop");if(t&&t.length>0){g=t,console.log(`✅ ${g.length} notas desde cache`);return}g=[{id:1,titulo:"Noticias a trabajadores",contenido:"Escribe aquí las noticias importantes para el equipo...",editando:!1,fechaCreacion:new Date().toISOString()}],k("notasSmileTop",g,720),console.log("✅ Notas por defecto creadas")}catch(t){console.error("❌ Error load notas:",t)}}function O(){const t=e("#userFilter"),o=t.val();t.find('option:not([value="todos"])').remove(),console.log("📋 Actualizando filtro de usuarios..."),w.forEach(a=>{const s=a.nombre||a.usuario;t.append(`<option value="${a.usuario}">${s}</option>`)}),o&&t.find(`option[value="${o}"]`).length&&t.val(o),console.log(`✅ ${t.find("option").length-1} usuarios en filtro`)}function x(){const t=e("#tableContainer");if(console.log(`📊 Renderizando ${h.length} ventas`),h.length===0){t.html(`
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>No hay ventas</h3>
                <p>No se encontraron ventas para ${m==="todos"?"este mes":"este usuario en este mes"}</p>
                <button class="btn-refresh bt_cargar" style="margin-top: 1rem;">
                    <i class="fas fa-sync"></i>
                    Buscar en base de datos
                </button>
            </div>
        `),H([],0,0),e("#pagination").hide();return}const o=`
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
                ${h.map(i=>K(i)).join("")}
            </tbody>
        </table>
    `;t.html(o);const a=h.reduce((i,r)=>i+(parseFloat(r.importeTotal)||0),0),s=h.reduce((i,r)=>i+(parseInt(r.puntos)||0),0);H(h,a,s),ut()}function K(t,o=!1){const a=w.find(c=>c.usuario===t.vendedor||c.id===t.vendedor),s=t.fechaTour?new Date(t.fechaTour).toLocaleDateString("es-ES"):"Sin fecha",i=parseFloat(t.precioUnitario)||0,r=parseFloat(t.importeTotal)||0,l=parseFloat(t.comision)||r*.1,p=parseFloat(t.ganancia)||r-l,f=parseInt(t.puntos)||0;return o?`
            <tr class="editing-row" data-id="${t.id}">
                <td>${s}</td>
                <td class="user-cell">
                    <img src="${a?.imagen||"./smile.png"}" class="avatar-small">
                    ${a?.nombre||a?.usuario||t.vendedor}
                </td>
                <td class="tour-cell">${t.tipoTour||"Tour"}</td>
                <td class="money-cell">${t.cantidadPax||"0"}</td>
                <td class="money-cell">${B(t.nombreCliente)||"Sin nombre"}</td>
                <td><input type="number" class="edit-input" data-field="importeTotal" value="${r.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="precioUnitario" value="${i.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="comision" value="${l.toFixed(2)}" step="0.01"></td>
                <td class="money-cell">${M(t.estadoPago)||"No"}</td>
                <td><input type="number" class="edit-input" data-field="ganancia" value="${p.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="puntos" value="${f}"></td>
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
            <td>${s}</td>
            <td class="user-cell">
                <img src="${a?.imagen||"./smile.png"}" class="avatar-small">
                ${a?.nombre||a?.usuario||t.vendedor}
            </td>
            <td class="tour-cell">${t.tipoTour||"Tour"}</td>
            <td class="money-cell">${t.cantidadPax||"0"}</td>
            <td class="money-cell">${B(t.nombreCliente)||"Sin nombre"}</td>
            <td class="money-cell">${r.toFixed(2)}</td>
            <td class="money-cell">${i.toFixed(2)}</td>
            <td class="money-cell">${l.toFixed(2)}</td>
            <td class="money-cell">${M(t.estadoPago)||"No"}</td>
            <td class="money-cell">${p.toFixed(2)}</td>
            <td class="points-cell">${f}</td>
            <td class="actions-cell">
                <button class="btn-action btn-view" onclick="viewVenta('${t.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-action btn-edit" onclick="editVenta('${t.id}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `}function H(t,o,a){e("#totalVentas").text(`${t.length} ${t.length===1?"venta":"ventas"}`),e("#totalIngresos").text(`S/ ${o.toFixed(2)}`),e("#totalPuntos").text(`${a} puntos`)}function ut(){const t=e("#pagination"),o=e("#prevPage"),a=e("#nextPage"),s=e("#pageNumbers");if($<=1){t.hide();return}let i="";const r=8;let l=Math.max(0,d-Math.floor(r/2)),p=Math.min($-1,l+r-1);p-l<r-1&&(l=Math.max(0,p-r+1));for(let f=l;f<=p;f++)i+=`
            <button class="btn-page page-number ${f===d?"active":""}" data-page="${f}">
                ${f+1}
            </button>
        `;s.html(i),o.prop("disabled",d===0),a.prop("disabled",d>=$-1),t.show()}async function S(){try{console.log("🔄 Cargando tours...");const t=_("toursSmileTop");if(t&&t.length>0){u=t,console.log(`✅ ${u.length} tours desde cache`),N();return}console.log("📡 Cargando desde Firestore...");const o=await C(A(y,"listatours"));if(o.empty){console.log("📭 No hay tours en Firestore"),u=[],N();return}u=o.docs.map(a=>({id:a.id,...a.data()})),k("toursSmileTop",u,300),console.log(`✅ ${u.length} tours cargados y guardados en cache`),N()}catch(t){console.error("❌ Error cargando tours:",t),n("Error al cargar tours","error"),e("#toursContainer").html(`
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle" style="color:#dc3545;font-size:48px;margin-bottom:15px;"></i>
                <h3>Error al cargar tours</h3>
                <p>No se pudieron cargar los tours desde la base de datos</p>
                <button onclick="loadTours()" class="btn-refresh" style="margin-top:15px;">
                    <i class="fas fa-sync"></i> Reintentar
                </button>
            </div>
        `)}}function N(){console.log("🎨 Renderizando tours...",u);const t=`
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
                ${u.length>0?u.map((o,a)=>Q(o,a+1)).join(""):`
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
    `;e("#toursContainer").html(t),console.log("✅ Tours renderizados en interfaz")}function Q(t,o,a=!1){const s=t.num||o;return a?`
            <tr class="editing-row" data-id="${t.id}">
                <td><strong>${s}</strong></td>
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
                    <button onclick="saveTour('${t.id}', ${s})" class="btn-action btn-save" title="Guardar">
                        <i class="fas fa-check"></i>
                    </button>
                    <button onclick="cancelEditTour('${t.id}')" class="btn-action btn-cancel" title="Cancelar">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `:`
        <tr data-id="${t.id}">
            <td><strong>${s}</strong></td>
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
    `}function Z(){const t=`
        <tr class="editing-row new-tour-row">
            <td><strong>${u.length+1}</strong></td>
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
                <button onclick="saveTour('', ${u.length+1})" class="btn-action btn-save" title="Guardar">
                    <i class="fas fa-check"></i>
                </button>
                <button onclick="cancelAddTour()" class="btn-action btn-cancel" title="Cancelar">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
    `;u.length>0?e("#toursTableBody").append(t):e("#toursTableBody").html(t),setTimeout(()=>e("#tourNombre").focus(),100),n("📝 Agregando nuevo tour...","info")}window.editTour=function(t){const o=u.find(i=>i.id===t);if(!o)return;const a=u.findIndex(i=>i.id===t)+1;e(`tr[data-id="${t}"]`).replaceWith(Q(o,a,!0)),setTimeout(()=>e("#tourNombre").focus(),100),n("✏️ Editando tour...","info")};window.cancelEditTour=function(t){N(),n("❌ Edición cancelada","info")};window.cancelAddTour=function(){u.length>0?e(".new-tour-row").remove():N(),n("❌ Nuevo tour cancelado","info")};window.delTour=async function(t){const o=u.find(s=>s.id===t);if(!(!o||!confirm(`¿Eliminar el tour "${o.tour||o.nombre}"?

Esta acción no se puede deshacer.`)))try{await nt(z(y,"listatours",t)),P("toursSmileTop"),await S(),n("🗑️ Tour eliminado correctamente","success")}catch(s){console.error("Error eliminar tour:",s),n("❌ Error al eliminar tour","error")}};window.refreshToursFromDB=async function(){console.log("🔄 Forzando recarga desde Firebase..."),P("toursSmileTop"),await S(),n("✅ Tours actualizados desde Firebase","success")};window.saveTour=async function(t,o){const a=e("#tourNombre").val().trim(),s=parseFloat(e("#tourPrecio").val())||0,i=parseFloat(e("#tourComision").val())||0,r=parseInt(e("#tourPuntos").val())||0;if(!a){n("⚠️ El nombre del tour es obligatorio","error"),e("#tourNombre").focus();return}if(s<=0){n("⚠️ El precio debe ser mayor a 0","error"),e("#tourPrecio").focus();return}try{if(t){const l={activo:!0,comision:i,tour:a,precio:s,puntos:r,actualizadoPor:b.nombre||b.usuario||"Admin",fecha:U()};await Y(z(y,"listatours",t),l),n("✅ Tour actualizado correctamente","success")}else{const l=u.length>0?Math.max(...u.map(c=>c.num||0))+1:1,p={activo:!0,comision:i,tour:a,precio:s,puntos:r,num:l,creadoPor:b.nombre||b.usuario||"Admin",actualizadoPor:b.nombre||b.usuario||"Admin",fecha:U()},f=Date.now().toString();await rt(z(y,"listatours",f),p),n(`✅ Tour #${l} creado correctamente`,"success")}P("toursSmileTop"),await S()}catch(l){console.error("❌ Error guardar tour:",l),n("❌ Error al guardar tour: "+l.message,"error")}};window.showAddForm=Z;window.loadTours=S;function D(){const t=e("#notesContainer");if(!g||g.length===0){t.html(`
            <div class="empty-state">
                <i class="fas fa-sticky-note"></i>
                <h3>Sin notas</h3>
                <p>Agrega tu primera nota</p>
            </div>
        `);return}const o=g.map(a=>`
        <div class="note-item" data-id="${a.id}">
            <h4>${a.titulo}</h4>
            <textarea 
                class="note-content" 
                ${a.editando?"":"disabled"} 
                placeholder="Escribe aquí..."
            >${a.contenido||""}</textarea>
            <div class="note-actions">
                ${a.editando?`
                    <button class="btn-save" onclick="saveNota(${a.id})">
                        <i class="fas fa-save"></i> 
                    </button>
                    <button class="btn-cancel" onclick="cancelNota(${a.id})">
                        <i class="fas fa-times"></i> 
                    </button>
                `:`
                    <button class="btn-edit" onclick="editNota(${a.id})">
                        <i class="fas fa-edit"></i> 
                    </button>
                `}
            </div>
        </div>
    `).join("");t.html(o)}window.viewVenta=function(t){const o=h.find(r=>r.id===t);if(!o)return;const a=w.find(r=>r.usuario===o.vendedor||r.id===o.vendedor),s=o.nombreCliente||"Cliente",i=a?.nombre||a?.usuario||o.vendedor;n(`👁️ Viendo: ${s} - Vendedor: ${i}`,"info",4e3)};window.editVenta=function(t){const o=h.find(s=>s.id===t);if(!o)return;e(`tr[data-id="${t}"]`).replaceWith(K(o,!0)),n("Modo edición activado","info")};window.saveVenta=async function(t){try{const o=e(`.editing-row[data-id="${t}"]`),a={};o.find(".edit-input").each(function(){const i=e(this).data("field"),r=e(this).val();a[i]=i==="puntos"?parseInt(r):parseFloat(r)}),a.actualizadoPor=b.nombre||b.usuario,a.fechaActualizacion=U(),await Y(z(y,"registrosdb",t),a);const s=h.findIndex(i=>i.id===t);s!==-1&&Object.assign(h[s],a),x(),n("✅ Venta actualizada correctamente","success")}catch(o){console.error("❌ Error save venta:",o),n("Error al actualizar venta","error")}};window.cancelEdit=function(t){x(),n("Edición cancelada","info")};window.editNota=function(t){const o=g.find(a=>a.id===t);o&&(o.editando=!0,D(),n("Editando nota...","info"))};window.saveNota=function(t){const o=g.find(s=>s.id===t),a=e(`.note-item[data-id="${t}"] .note-content`).val();o&&(o.contenido=a,o.editando=!1,o.fechaModificacion=new Date().toISOString(),k("notasSmileTop",g,720),D(),n("📝 Nota guardada correctamente","success"))};window.cancelNota=function(t){const o=g.find(a=>a.id===t);o&&(o.editando=!1,D(),n("Edición cancelada","info"))};async function pt(){try{console.log("📊 Exportando a Excel...");let t=V(A(y,"registrosdb"),E("fechaTour",">=",v+"-01"),E("fechaTour","<=",v+"-31"),W("fechaTour","desc")),a=(await C(t)).docs.map(c=>({id:c.id,...c.data()}));if(m!=="todos"&&(a=a.filter(c=>c.vendedor===m)),a.length===0)return n("❌ No hay datos para exportar","warning");const s=a.map(c=>{const X=w.find(et=>et.usuario===c.vendedor),tt=c.fechaTour?new Date(c.fechaTour).toLocaleDateString("es-ES"):"Sin fecha",L=parseFloat(c.importeTotal)||0,at=parseFloat(c.precioUnitario)||0,j=parseFloat(c.comision)||L*.1,ot=parseFloat(c.ganancia)||L-j;return{Fecha:tt,Usuario:X?.nombre||X?.usuario||c.vendedor,"Tipo Tour":c.tipoTour||"Tour",PAX:c.cantidadPax||0,"Nombre Cliente":c.nombreCliente||"Sin nombre","Monto Total":L.toFixed(2),"Monto Individual":at.toFixed(2),Comisión:j.toFixed(2),"Estado Pago":M(c.estadoPago)||"Pendiente",Ganancia:ot.toFixed(2),Puntos:parseInt(c.puntos)||0,Hotel:c.hotel||"",Habitación:c.numeroHabitacion||"","Fecha Registro":c.fechaRegistro?new Date(c.fechaRegistro.toDate()).toLocaleDateString("es-ES"):""}}),i=XLSX.utils.json_to_sheet(s),r=[{wch:12},{wch:15},{wch:20},{wch:8},{wch:25},{wch:12},{wch:15},{wch:12},{wch:12},{wch:12},{wch:8},{wch:20},{wch:10},{wch:15}];i["!cols"]=r;const l=XLSX.utils.book_new(),p=m==="todos"?`Ventas_${v.replace("-","_")}`:`${m}_${v.replace("-","_")}`;XLSX.utils.book_append_sheet(l,i,p);const f=m==="todos"?`ventas_${v}_todas.xlsx`:`ventas_${v}_${m}.xlsx`;XLSX.writeFile(l,f),console.log(`✅ Excel exportado: ${f}`),n(`📊 Excel exportado: ${s.length} registros`,"success")}catch(t){console.error("❌ Error exportar Excel:",t),n("Error al exportar Excel","error")}}function ft(){e(document).on("click",".bt_salir",async()=>{try{await G(R),window.location.href="/",localStorage.clear()}catch(t){console.error("Error logout:",t)}}),e(document).on("click",".bt_cargar",async()=>{P("usuariosSmileTop"),P("toursSmileTop"),await I(),await S()}),e(document).on("click",".bt_exportar",async()=>{await pt()}),e(document).on("change","#monthFilter",async function(){v=e(this).val(),d=0,console.log(`📅 Cambiando a mes: ${v}`),await I()}),e(document).on("change","#userFilter",async function(){const t=e(this).val();t!==m&&(m=t,d=0,console.log(`👤 Filtrando por usuario: ${m}`),await I())}),e(document).on("click","#prevPage",async()=>{d>0&&(d--,await F(d,!1),x())}),e(document).on("click","#nextPage",async()=>{d<$-1&&(d++,await F(d,!1),x())}),e(document).on("click",".page-number",async function(){const t=parseInt(e(this).data("page"));t!==d&&(d=t,await F(d,!1),x())}),e(document).on("click","#addNote",()=>{const t={id:Date.now(),titulo:"Nueva Nota",contenido:"",editando:!0,fechaCreacion:new Date().toISOString()};g.push(t),D(),n("Nueva nota agregada","info")}),e(document).on("change","#itemsFilter",async function(){const t=parseInt(e(this).val());t!==T&&(T=t,d=0,console.log(`📊 Mostrando ${T} ventas por página`),await I())}),e(document).on("click","#addTour",()=>Z())}e(document).ready(()=>{if(console.log("🚀 SmileTop Admin v2.0 iniciado"),typeof XLSX>"u"){const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",t.onload=()=>console.log("✅ Biblioteca XLSX cargada"),document.head.appendChild(t)}});e(document).ready(()=>{console.log("🚀 SmileTop Admin v2.0 iniciado")});
