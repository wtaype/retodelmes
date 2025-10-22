import{t as et,A as V,b as N,q as I,c as F,a as w,e as E,N as n,v as B,h as z,l as D,$ as e,B as st,C as k,D as H,z as X,y as it,d as L,E as G,j as W,F as nt}from"./widev-BPETPWfi.js";let x=null,b=new Date().toISOString().slice(0,7),f="todos",l=0,y=0,h=[],v=[],m=[],T=7,p=[];et(z,async t=>{if(!t)return window.location.href="/";try{const o=V("wiSmileTop");if(o)return await j(o);const a=await N(I(F(w,"smiles"),E("usuario","==",t.displayName)));if(a.empty||a.docs[0].data().rol!=="smiletop")return n("No tienes permisos de administrador","error"),await B(z);const i=a.docs[0].data();D("wiSmileTop",i,450),await j(i)}catch(o){console.error("Error auth:",o),n("Error al cargar aplicación","error")}});async function j(t){x=t,console.log(`✅ Admin: ${t.nombre}`),e(".app").html(rt()),st();try{await Y(),await S(),await lt(),await M(),pt(),$(),P(),n("Dashboard cargado","success")}catch(o){console.error("Error init:",o),n("Error al inicializar","error")}}function rt(){return`
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
                    <img src="${x.imagen||"./smile.png"}" alt="Avatar" class="user-avatar">
                    <span>${x.nombre||"Admin"}</span>
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
                        <select id="monthFilter">${ct()}</select>
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
                        <h2><i class="fas fa-route"></i> Tours</h2>
                        <button id="addTour" class="btn-refresh">+ Tour</button>
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
    `}function ct(){const t=[],o=new Date;for(let a=-6;a<=5;a++){const i=new Date(o.getFullYear(),o.getMonth()+a,1),s=i.toISOString().slice(0,7),r=i.toLocaleDateString("es-ES",{year:"numeric",month:"long"}),d=s===b?"selected":"";t.push(`<option value="${s}" ${d}>${k(r)}</option>`)}return t.join("")}async function Y(){try{console.log("🔄 Cargando usuarios...");const t=V("usuariosSmileTop");if(t&&t.length>0){v=t,console.log(`✅ ${v.length} usuarios desde cache`),q();return}v=(await N(I(F(w,"smiles"),E("rol","==","smile")))).docs.map(a=>({id:a.id,...a.data()})),console.log(`✅ ${v.length} usuarios cargados desde Firestore`),D("usuariosSmileTop",v,300),q()}catch(t){console.error("❌ Error load usuarios:",t),n("Error al cargar usuarios","error")}}async function S(t=0,o=!0){try{console.log(`🔄 Cargando ventas página ${t}...`);let a=I(F(w,"registrosdb"),E("fechaTour",">=",b+"-01"),E("fechaTour","<=",b+"-31"),H("fechaTour","desc")),s=(await N(a)).docs.map(u=>({id:u.id,...u.data()}));if(f!=="todos"&&(s=s.filter(u=>u.vendedor===f),console.log(`🔍 Filtrado por usuario ${f}: ${s.length} ventas`)),y=Math.ceil(s.length/T),s.length===0){l=0,h=[],console.log("❌ No hay ventas para este filtro");return}l>=y&&(l=0);const r=l*T,d=r+T;h=s.slice(r,d),console.log(`✅ ${h.length}/${s.length} ventas cargadas para página ${l+1}/${y}`)}catch(a){console.error("❌ Error load ventas:",a),n("Error al cargar ventas","error")}}async function C(){try{console.log("🔄 Refrescando datos..."),e("#tableContainer").html(`
            <div class="loading-state">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Actualizando datos...</p>
            </div>
        `),l=0,await Y(),await S(l),$(),n("✅ Datos actualizados correctamente","success")}catch(t){console.error("❌ Error refresh:",t),n("Error al actualizar datos","error")}}async function lt(){try{console.log("🔄 Cargando notas...");const t=V("notasSmileTop");if(t&&t.length>0){m=t,console.log(`✅ ${m.length} notas desde cache`);return}m=[{id:1,titulo:"Noticias a trabajadores",contenido:"Escribe aquí las noticias importantes para el equipo...",editando:!1,fechaCreacion:new Date().toISOString()}],D("notasSmileTop",m,720),console.log("✅ Notas por defecto creadas")}catch(t){console.error("❌ Error load notas:",t)}}function q(){const t=e("#userFilter"),o=t.val();t.find('option:not([value="todos"])').remove(),console.log("📋 Actualizando filtro de usuarios..."),v.forEach(a=>{const i=a.nombre||a.usuario;t.append(`<option value="${a.usuario}">${i}</option>`)}),o&&t.find(`option[value="${o}"]`).length&&t.val(o),console.log(`✅ ${t.find("option").length-1} usuarios en filtro`)}function $(){const t=e("#tableContainer");if(console.log(`📊 Renderizando ${h.length} ventas`),h.length===0){t.html(`
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>No hay ventas</h3>
                <p>No se encontraron ventas para ${f==="todos"?"este mes":"este usuario en este mes"}</p>
                <button class="btn-refresh bt_cargar" style="margin-top: 1rem;">
                    <i class="fas fa-sync"></i>
                    Buscar en base de datos
                </button>
            </div>
        `),O([],0,0),e("#pagination").hide();return}const o=`
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
                ${h.map(s=>J(s)).join("")}
            </tbody>
        </table>
    `;t.html(o);const a=h.reduce((s,r)=>s+(parseFloat(r.importeTotal)||0),0),i=h.reduce((s,r)=>s+(parseInt(r.puntos)||0),0);O(h,a,i),dt()}function J(t,o=!1){const a=v.find(c=>c.usuario===t.vendedor||c.id===t.vendedor),i=t.fechaTour?new Date(t.fechaTour).toLocaleDateString("es-ES"):"Sin fecha",s=parseFloat(t.precioUnitario)||0,r=parseFloat(t.importeTotal)||0,d=parseFloat(t.comision)||r*.1,u=parseFloat(t.ganancia)||r-d,g=parseInt(t.puntos)||0;return o?`
            <tr class="editing-row" data-id="${t.id}">
                <td>${i}</td>
                <td class="user-cell">
                    <img src="${a?.imagen||"./smile.png"}" class="avatar-small">
                    ${a?.nombre||a?.usuario||t.vendedor}
                </td>
                <td class="tour-cell">${t.tipoTour||"Tour"}</td>
                <td class="money-cell">${t.cantidadPax||"0"}</td>
                <td class="money-cell">${X(t.nombreCliente)||"Sin nombre"}</td>
                <td><input type="number" class="edit-input" data-field="importeTotal" value="${r.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="precioUnitario" value="${s.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="comision" value="${d.toFixed(2)}" step="0.01"></td>
                <td class="money-cell">${k(t.estadoPago)||"No"}</td>
                <td><input type="number" class="edit-input" data-field="ganancia" value="${u.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="puntos" value="${g}"></td>
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
            <td>${i}</td>
            <td class="user-cell">
                <img src="${a?.imagen||"./smile.png"}" class="avatar-small">
                ${a?.nombre||a?.usuario||t.vendedor}
            </td>
            <td class="tour-cell">${t.tipoTour||"Tour"}</td>
            <td class="money-cell">${t.cantidadPax||"0"}</td>
            <td class="money-cell">${X(t.nombreCliente)||"Sin nombre"}</td>
            <td class="money-cell">${r.toFixed(2)}</td>
            <td class="money-cell">${s.toFixed(2)}</td>
            <td class="money-cell">${d.toFixed(2)}</td>
            <td class="money-cell">${k(t.estadoPago)||"No"}</td>
            <td class="money-cell">${u.toFixed(2)}</td>
            <td class="points-cell">${g}</td>
            <td class="actions-cell">
                <button class="btn-action btn-view" onclick="viewVenta('${t.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-action btn-edit" onclick="editVenta('${t.id}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `}function O(t,o,a){e("#totalVentas").text(`${t.length} ${t.length===1?"venta":"ventas"}`),e("#totalIngresos").text(`S/ ${o.toFixed(2)}`),e("#totalPuntos").text(`${a} puntos`)}function dt(){const t=e("#pagination"),o=e("#prevPage"),a=e("#nextPage"),i=e("#pageNumbers");if(y<=1){t.hide();return}let s="";const r=8;let d=Math.max(0,l-Math.floor(r/2)),u=Math.min(y-1,d+r-1);u-d<r-1&&(d=Math.max(0,u-r+1));for(let g=d;g<=u;g++)s+=`
            <button class="btn-page page-number ${g===l?"active":""}" data-page="${g}">
                ${g+1}
            </button>
        `;i.html(s),o.prop("disabled",l===0),a.prop("disabled",l>=y-1),t.show()}async function M(){try{console.log("🔄 Cargando tours desde Firestore...");const t=await N(F(w,"listatours"));if(t.empty){console.log("📭 No hay tours en Firestore"),p=[],A();return}p=t.docs.map(o=>({id:o.id,...o.data()})),console.log(`✅ ${p.length} tours cargados:`,p),A()}catch(t){console.error("❌ Error cargando tours:",t),n("Error al cargar tours","error"),e("#toursContainer").html(`
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle" style="color:#dc3545;font-size:48px;margin-bottom:15px;"></i>
                <h3>Error al cargar tours</h3>
                <p>No se pudieron cargar los tours desde la base de datos</p>
                <button onclick="loadTours()" class="btn-refresh" style="margin-top:15px;">
                    <i class="fas fa-sync"></i> Reintentar
                </button>
            </div>
        `)}}function A(){console.log("🎨 Renderizando tours...",p);const t=`
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
                ${p.length>0?p.map((o,a)=>K(o,a+1)).join(""):`
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
    `;e("#toursContainer").html(t),console.log("✅ Tours renderizados en interfaz")}function K(t,o,a=!1){return a?`
            <tr class="editing-row" data-id="${t.id}">
                <td><strong>${o}</strong></td>
                <td>
                    <input id="tourNombre" 
                           type="text" 
                           class="edit-input" 
                           placeholder="Ingresa el tour" 
                           value="${t.nombre}" 
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
                    <button onclick="saveTour('${t.id}', ${o})" class="btn-action btn-save" title="Guardar">
                        <i class="fas fa-check"></i>
                    </button>
                    <button onclick="cancelEditTour('${t.id}')" class="btn-action btn-cancel" title="Cancelar">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `:`
        <tr data-id="${t.id}">
            <td><strong>${o}</strong></td>
            <td class="tour-name">${t.nombre}</td>
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
    `}function Q(){const t=`
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
    `;p.length>0?e("#toursTableBody").append(t):e("#toursTableBody").html(t),setTimeout(()=>e("#tourNombre").focus(),100),n("📝 Agregando nuevo tour...","info")}window.editTour=function(t){const o=p.find(s=>s.id===t);if(!o)return;const a=p.findIndex(s=>s.id===t)+1;e(`tr[data-id="${t}"]`).replaceWith(K(o,a,!0)),setTimeout(()=>e("#tourNombre").focus(),100),n("✏️ Editando tour...","info")};window.cancelEditTour=function(t){A(),n("❌ Edición cancelada","info")};window.cancelAddTour=function(){p.length>0?e(".new-tour-row").remove():A(),n("❌ Nuevo tour cancelado","info")};window.delTour=async function(t){const o=p.find(i=>i.id===t);if(!(!o||!confirm(`¿Eliminar el tour "${o.nombre}"?

Esta acción no se puede deshacer.`)))try{await it(L(w,"listatours",t)),await M(),n("🗑️ Tour eliminado correctamente","success")}catch(i){console.error("Error eliminar tour:",i),n("❌ Error al eliminar tour","error")}};window.saveTour=async function(t,o){const a=e("#tourNombre").val().trim(),i=parseFloat(e("#tourPrecio").val())||0,s=parseFloat(e("#tourComision").val())||0,r=parseInt(e("#tourPuntos").val())||0;if(!a){n("⚠️ El nombre del tour es obligatorio","error"),e("#tourNombre").focus();return}if(i<=0){n("⚠️ El precio debe ser mayor a 0","error"),e("#tourPrecio").focus();return}const d={nombre:a,precio:i,comision:s,puntos:r,activo:!0,fecha:W(),modificadoPor:x.nombre||x.usuario};try{t?(await G(L(w,"listatours",t),d),n("✅ Tour actualizado correctamente","success")):(await nt(F(w,"listatours"),d),n("✅ Tour creado correctamente","success")),await M()}catch(u){console.error("Error guardar tour:",u),n("❌ Error al guardar tour","error")}};window.showAddForm=Q;window.loadTours=M;function P(){const t=e("#notesContainer");if(!m||m.length===0){t.html(`
            <div class="empty-state">
                <i class="fas fa-sticky-note"></i>
                <h3>Sin notas</h3>
                <p>Agrega tu primera nota</p>
            </div>
        `);return}const o=m.map(a=>`
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
    `).join("");t.html(o)}window.viewVenta=function(t){const o=h.find(r=>r.id===t);if(!o)return;const a=v.find(r=>r.usuario===o.vendedor||r.id===o.vendedor),i=o.nombreCliente||"Cliente",s=a?.nombre||a?.usuario||o.vendedor;n(`👁️ Viendo: ${i} - Vendedor: ${s}`,"info",4e3)};window.editVenta=function(t){const o=h.find(i=>i.id===t);if(!o)return;e(`tr[data-id="${t}"]`).replaceWith(J(o,!0)),n("Modo edición activado","info")};window.saveVenta=async function(t){try{const o=e(`.editing-row[data-id="${t}"]`),a={};o.find(".edit-input").each(function(){const s=e(this).data("field"),r=e(this).val();a[s]=s==="puntos"?parseInt(r):parseFloat(r)}),a.actualizadoPor=x.nombre||x.usuario,a.fechaActualizacion=W(),await G(L(w,"registrosdb",t),a);const i=h.findIndex(s=>s.id===t);i!==-1&&Object.assign(h[i],a),$(),n("✅ Venta actualizada correctamente","success")}catch(o){console.error("❌ Error save venta:",o),n("Error al actualizar venta","error")}};window.cancelEdit=function(t){$(),n("Edición cancelada","info")};window.editNota=function(t){const o=m.find(a=>a.id===t);o&&(o.editando=!0,P(),n("Editando nota...","info"))};window.saveNota=function(t){const o=m.find(i=>i.id===t),a=e(`.note-item[data-id="${t}"] .note-content`).val();o&&(o.contenido=a,o.editando=!1,o.fechaModificacion=new Date().toISOString(),D("notasSmileTop",m,720),P(),n("📝 Nota guardada correctamente","success"))};window.cancelNota=function(t){const o=m.find(a=>a.id===t);o&&(o.editando=!1,P(),n("Edición cancelada","info"))};async function ut(){try{console.log("📊 Exportando a Excel...");let t=I(F(w,"registrosdb"),E("fechaTour",">=",b+"-01"),E("fechaTour","<=",b+"-31"),H("fechaTour","desc")),a=(await N(t)).docs.map(c=>({id:c.id,...c.data()}));if(f!=="todos"&&(a=a.filter(c=>c.vendedor===f)),a.length===0)return n("❌ No hay datos para exportar","warning");const i=a.map(c=>{const R=v.find(ot=>ot.usuario===c.vendedor),Z=c.fechaTour?new Date(c.fechaTour).toLocaleDateString("es-ES"):"Sin fecha",_=parseFloat(c.importeTotal)||0,tt=parseFloat(c.precioUnitario)||0,U=parseFloat(c.comision)||_*.1,at=parseFloat(c.ganancia)||_-U;return{Fecha:Z,Usuario:R?.nombre||R?.usuario||c.vendedor,"Tipo Tour":c.tipoTour||"Tour",PAX:c.cantidadPax||0,"Nombre Cliente":c.nombreCliente||"Sin nombre","Monto Total":_.toFixed(2),"Monto Individual":tt.toFixed(2),Comisión:U.toFixed(2),"Estado Pago":k(c.estadoPago)||"Pendiente",Ganancia:at.toFixed(2),Puntos:parseInt(c.puntos)||0,Hotel:c.hotel||"",Habitación:c.numeroHabitacion||"","Fecha Registro":c.fechaRegistro?new Date(c.fechaRegistro.toDate()).toLocaleDateString("es-ES"):""}}),s=XLSX.utils.json_to_sheet(i),r=[{wch:12},{wch:15},{wch:20},{wch:8},{wch:25},{wch:12},{wch:15},{wch:12},{wch:12},{wch:12},{wch:8},{wch:20},{wch:10},{wch:15}];s["!cols"]=r;const d=XLSX.utils.book_new(),u=f==="todos"?`Ventas_${b.replace("-","_")}`:`${f}_${b.replace("-","_")}`;XLSX.utils.book_append_sheet(d,s,u);const g=f==="todos"?`ventas_${b}_todas.xlsx`:`ventas_${b}_${f}.xlsx`;XLSX.writeFile(d,g),console.log(`✅ Excel exportado: ${g}`),n(`📊 Excel exportado: ${i.length} registros`,"success")}catch(t){console.error("❌ Error exportar Excel:",t),n("Error al exportar Excel","error")}}function pt(){e(document).on("click",".bt_salir",async()=>{try{await B(z),window.location.href="/",localStorage.clear()}catch(t){console.error("Error logout:",t)}}),e(document).on("click",".bt_cargar",async()=>{await C()}),e(document).on("click",".bt_exportar",async()=>{await ut()}),e(document).on("change","#monthFilter",async function(){b=e(this).val(),l=0,console.log(`📅 Cambiando a mes: ${b}`),await C()}),e(document).on("change","#userFilter",async function(){const t=e(this).val();t!==f&&(f=t,l=0,console.log(`👤 Filtrando por usuario: ${f}`),await C())}),e(document).on("click","#prevPage",async()=>{l>0&&(l--,await S(l,!1),$())}),e(document).on("click","#nextPage",async()=>{l<y-1&&(l++,await S(l,!1),$())}),e(document).on("click",".page-number",async function(){const t=parseInt(e(this).data("page"));t!==l&&(l=t,await S(l,!1),$())}),e(document).on("click","#addNote",()=>{const t={id:Date.now(),titulo:"Nueva Nota",contenido:"",editando:!0,fechaCreacion:new Date().toISOString()};m.push(t),P(),n("Nueva nota agregada","info")}),e(document).on("change","#itemsFilter",async function(){const t=parseInt(e(this).val());t!==T&&(T=t,l=0,console.log(`📊 Mostrando ${T} ventas por página`),await C())}),e(document).on("click","#addTour",()=>Q())}e(document).ready(()=>{if(console.log("🚀 SmileTop Admin v2.0 iniciado"),typeof XLSX>"u"){const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",t.onload=()=>console.log("✅ Biblioteca XLSX cargada"),document.head.appendChild(t)}});e(document).ready(()=>{console.log("🚀 SmileTop Admin v2.0 iniciado")});
