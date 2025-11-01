import{t as dt,B as L,E as q,a as m,b as F,q as I,c as P,e as E,l as D,h as K,$ as e,F as ut,N as i,G as Q,A as Z,C as B,z as ft,d as S,D as $,j as k,H as j,i as H,v as pt}from"./widev-9nBR2YtD.js";let f=null,w=new Date(new Date().toLocaleString("en-US",{timeZone:"America/Lima"})).toISOString().slice(0,7),b="todos",l=0,T=0,v=[],y=[],u=[],A=7,p=[],N=!1,R=null;dt(K,async t=>{if(!t)return window.location.href="/";R=t;try{const o=L("wiSmileTop");if(o)return W(o),q(m,R);const n=(await F(I(P(m,"smiles"),E("usuario","==",t.displayName)))).docs[0].data();D("wiSmile",n,450),W(n),q(m,R)}catch(o){console.error(o)}});async function W(t){f=t,console.log(`✅ Admin: ${t.nombre}`),e(".app").html(mt()),ut();try{await tt(),await _(),await at(),await z(),await nt(),vt(),C(),x(),i("Bienvenido "+t.nombre,"success")}catch(o){console.error("Error init:",o),i("Error al inicializar","error")}}function mt(){return`
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
                        <select id="monthFilter">${ht()}</select>
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
    `}function ht(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"America/Lima"}));return[...Array(12)].map((o,a)=>{const s=new Date(t.getFullYear(),t.getMonth()-6+a,1).toISOString().slice(0,7);return`<option value="${s}" ${s===w?"selected":""}>${s}</option>`}).join("")}async function tt(){try{console.log("🔄 Cargando usuarios...");const t=L("usuariosSmileTop");if(t&&t.length>0){y=t,console.log(`✅ ${y.length} usuarios desde cache`),Y();return}y=(await F(I(P(m,"smiles"),E("rol","==","smile")))).docs.map(a=>({id:a.id,...a.data()})),console.log(`✅ ${y.length} usuarios cargados desde Firestore`),D("usuariosSmileTop",y,300),Y()}catch(t){console.error("❌ Error load usuarios:",t),i("Error al cargar usuarios","error")}}async function _(t=0,o=!0){try{console.log(`🔄 Cargando ventas página ${t}...`);let a=I(P(m,"registrosdb"),E("fechaTour",">=",w+"-01"),E("fechaTour","<=",w+"-31"),Q("fechaTour","desc")),s=(await F(a)).docs.map(h=>({id:h.id,...h.data()}));if(b!=="todos"&&(s=s.filter(h=>h.vendedor===b),console.log(`🔍 Filtrado por usuario ${b}: ${s.length} ventas`)),T=Math.ceil(s.length/A),s.length===0){l=0,v=[],console.log("❌ No hay ventas para este filtro");return}l>=T&&(l=0);const r=l*A,d=r+A;v=s.slice(r,d),console.log(`✅ ${v.length}/${s.length} ventas cargadas para página ${l+1}/${T}`)}catch(a){console.error("❌ Error load ventas:",a),i("Error al cargar ventas","error")}}async function U(){try{console.log("🔄 Refrescando datos..."),e("#tableContainer").html(`
            <div class="loading-state">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Actualizando datos...</p>
            </div>
        `),l=0,await tt(),await _(l),C(),i("✅ Datos actualizados correctamente","success")}catch(t){console.error("❌ Error refresh:",t),i("Error al actualizar datos","error")}}async function at(){try{console.log("🔄 Cargando notas...");const t=L("notasSmileTop");if(t?.length>0){u=t,console.log(`✅ ${u.length} notas desde cache`),x();return}const o=await F(P(m,"notas"));if(o.empty){console.log("📭 No hay notas, creando por defecto"),u=[],x();return}u=o.docs.map(a=>({id:a.id,titulo:"Noticias a trabajadores",contenido:a.data().nota||"",editando:!1,...a.data()})),D("notasSmileTop",u,720),console.log(`✅ ${u.length} notas cargadas desde Firebase`),x()}catch(t){console.error("❌ Error load notas:",t),u=[],x()}}function Y(){const t=e("#userFilter"),o=t.val();t.find('option:not([value="todos"])').remove(),console.log("📋 Actualizando filtro de usuarios..."),y.forEach(a=>{const n=a.nombre||a.usuario;t.append(`<option value="${a.usuario}">${n}</option>`)}),o&&t.find(`option[value="${o}"]`).length&&t.val(o),console.log(`✅ ${t.find("option").length-1} usuarios en filtro`)}function C(){const t=e("#tableContainer");if(console.log(`📊 Renderizando ${v.length} ventas`),v.length===0){t.html(`
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>No hay ventas</h3>
                <p>No se encontraron ventas para ${b==="todos"?"este mes":"este usuario en este mes"}</p>
                <button class="btn-refresh bt_cargar" style="margin-top: 1rem;">
                    <i class="fas fa-sync"></i>
                    Buscar en base de datos
                </button>
            </div>
        `),J([],0,0),e("#pagination").hide();return}const o=`
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
                ${v.map(s=>ot(s)).join("")}
            </tbody>
        </table>
    `;t.html(o);const a=v.reduce((s,r)=>s+(parseFloat(r.importeTotal)||0),0),n=v.reduce((s,r)=>s+(parseInt(r.puntos)||0),0);J(v,a,n),gt()}function ot(t,o=!1){const a=y.find(c=>c.usuario===t.vendedor||c.id===t.vendedor),n=t.fechaTour?new Date(t.fechaTour).toLocaleDateString("es-PE",{timeZone:"America/Lima"}):"Sin fecha",s=parseFloat(t.precioUnitario)||0,r=parseFloat(t.importeTotal)||0,d=parseFloat(t.comision)||r*.1,h=parseFloat(t.ganancia)||r-d,g=parseInt(t.puntos)||0;return o?`
            <tr class="editing-row" data-id="${t.id}">
                <td>${n}</td>
                <td class="user-cell">
                    <img src="${a?.imagen||"./smile.png"}" class="avatar-small">
                    ${a?.nombre||a?.usuario||t.vendedor}
                </td>
                <td class="tour-cell">${t.tipoTour||"Tour"}</td>
                <td class="money-cell">${t.cantidadPax||"0"}</td>
                <td class="money-cell">${Z(t.nombreCliente)||"Sin nombre"}</td>
                <td><input type="number" class="edit-input" data-field="importeTotal" value="${r.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="precioUnitario" value="${s.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="comision" value="${d.toFixed(2)}" step="0.01"></td>
                <td class="money-cell">${B(t.estadoPago)||"No"}</td>
                <td><input type="number" class="edit-input" data-field="ganancia" value="${h.toFixed(2)}" step="0.01"></td>
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
            <td>${n}</td>
            <td class="user-cell">
                <img src="${a?.imagen||"./smile.png"}" class="avatar-small">
                ${a?.nombre||a?.usuario||t.vendedor}
            </td>
            <td class="tour-cell">${t.tipoTour||"Tour"}</td>
            <td class="money-cell">${t.cantidadPax||"0"}</td>
            <td class="money-cell">${Z(t.nombreCliente)||"Sin nombre"}</td>
            <td class="money-cell">${r.toFixed(2)}</td>
            <td class="money-cell">${s.toFixed(2)}</td>
            <td class="money-cell">${d.toFixed(2)}</td>
            <td class="money-cell">${B(t.estadoPago)||"No"}</td>
            <td class="money-cell">${h.toFixed(2)}</td>
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
    `}function J(t,o,a){e("#totalVentas").text(`${t.length} ${t.length===1?"venta":"ventas"}`),e("#totalIngresos").text(`S/ ${o.toFixed(2)}`),e("#totalPuntos").text(`${a} puntos`)}function gt(){const t=e("#pagination"),o=e("#prevPage"),a=e("#nextPage"),n=e("#pageNumbers");if(T<=1){t.hide();return}let s="";const r=8;let d=Math.max(0,l-Math.floor(r/2)),h=Math.min(T-1,d+r-1);h-d<r-1&&(d=Math.max(0,h-r+1));for(let g=d;g<=h;g++)s+=`
            <button class="btn-page page-number ${g===l?"active":""}" data-page="${g}">
                ${g+1}
            </button>
        `;n.html(s),o.prop("disabled",l===0),a.prop("disabled",l>=T-1),t.show()}async function z(){try{console.log("🔄 Cargando tours...");const t=L("toursSmileTop");if(t&&t.length>0){p=t,console.log(`✅ ${p.length} tours desde cache`),M();return}console.log("📡 Cargando desde Firestore...");const o=await F(P(m,"listatours"));if(o.empty){console.log("📭 No hay tours en Firestore"),p=[],M();return}p=o.docs.map(a=>({id:a.id,...a.data()})),D("toursSmileTop",p,300),console.log(`✅ ${p.length} tours cargados y guardados en cache`),M()}catch(t){console.error("❌ Error cargando tours:",t),i("Error al cargar tours","error"),e("#toursContainer").html(`
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle" style="color:#dc3545;font-size:48px;margin-bottom:15px;"></i>
                <h3>Error al cargar tours</h3>
                <p>No se pudieron cargar los tours desde la base de datos</p>
                <button onclick="loadTours()" class="btn-refresh" style="margin-top:15px;">
                    <i class="fas fa-sync"></i> Reintentar
                </button>
            </div>
        `)}}function M(){console.log("🎨 Renderizando tours...",p);const t=`
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
    `;e("#toursContainer").html(t),console.log("✅ Tours renderizados en interfaz")}function et(t,o,a=!1){const n=t.num||o;return a?`
            <tr class="editing-row" data-id="${t.id}">
                <td><strong>${n}</strong></td>
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
                    <button onclick="saveTour('${t.id}', ${n})" class="btn-action btn-save" title="Guardar">
                        <i class="fas fa-check"></i>
                    </button>
                    <button onclick="cancelEditTour('${t.id}')" class="btn-action btn-cancel" title="Cancelar">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `:`
        <tr data-id="${t.id}">
            <td><strong>${n}</strong></td>
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
    `;p.length>0?e("#toursTableBody").append(t):e("#toursTableBody").html(t),setTimeout(()=>e("#tourNombre").focus(),100),i("📝 Agregando nuevo tour...","info")}window.editTour=function(t){const o=p.find(s=>s.id===t);if(!o)return;const a=p.findIndex(s=>s.id===t)+1;e(`tr[data-id="${t}"]`).replaceWith(et(o,a,!0)),setTimeout(()=>e("#tourNombre").focus(),100),i("✏️ Editando tour...","info")};window.cancelEditTour=function(t){M(),i("❌ Edición cancelada","info")};window.cancelAddTour=function(){p.length>0?e(".new-tour-row").remove():M(),i("❌ Nuevo tour cancelado","info")};window.delTour=async function(t){const o=p.find(n=>n.id===t);if(!(!o||!confirm(`¿Eliminar el tour "${o.tour||o.nombre}"?

Esta acción no se puede deshacer.`)))try{await ft(S(m,"listatours",t)),$("toursSmileTop"),await z(),i("🗑️ Tour eliminado correctamente","success")}catch(n){console.error("Error eliminar tour:",n),i("❌ Error al eliminar tour","error")}};window.refreshToursFromDB=async function(){console.log("🔄 Forzando recarga desde Firebase..."),$("toursSmileTop"),await z(),i("✅ Tours actualizados desde Firebase","success")};window.saveTour=async function(t,o){const a=e("#tourNombre").val().trim(),n=parseFloat(e("#tourPrecio").val())||0,s=parseFloat(e("#tourComision").val())||0,r=parseInt(e("#tourPuntos").val())||0;if(!a){i("⚠️ El nombre del tour es obligatorio","error"),e("#tourNombre").focus();return}if(n<=0){i("⚠️ El precio debe ser mayor a 0","error"),e("#tourPrecio").focus();return}try{if(t){const d={activo:!0,comision:s,tour:a,precio:n,puntos:r,actualizadoPor:f.nombre||f.usuario||"Admin",fecha:k()};await j(S(m,"listatours",t),d),i("✅ Tour actualizado correctamente","success")}else{const d=p.length>0?Math.max(...p.map(c=>c.num||0))+1:1,h={activo:!0,comision:s,tour:a,precio:n,puntos:r,num:d,creadoPor:f.nombre||f.usuario||"Admin",actualizadoPor:f.nombre||f.usuario||"Admin",fecha:k()},g=Date.now().toString();await H(S(m,"listatours",g),h),i(`✅ Tour #${d} creado correctamente`,"success")}$("toursSmileTop"),await z()}catch(d){console.error("❌ Error guardar tour:",d),i("❌ Error al guardar tour: "+d.message,"error")}};window.showAddForm=st;window.loadTours=z;function x(){const t=e("#notesContainer");if(!u||u.length===0){t.html(`
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
    `).join("");t.html(o)}window.viewVenta=function(t){const o=v.find(r=>r.id===t);if(!o)return;const a=y.find(r=>r.usuario===o.vendedor||r.id===o.vendedor),n=o.nombreCliente||"Cliente",s=a?.nombre||a?.usuario||o.vendedor;i(`👁️ Viendo: ${n} - Vendedor: ${s}`,"info",4e3)};window.editVenta=function(t){const o=v.find(n=>n.id===t);if(!o)return;e(`tr[data-id="${t}"]`).replaceWith(ot(o,!0)),i("Modo edición activado","info")};window.saveVenta=async function(t){try{const o=e(`.editing-row[data-id="${t}"]`),a={};o.find(".edit-input").each(function(){const s=e(this).data("field"),r=e(this).val();a[s]=s==="puntos"?parseInt(r):parseFloat(r)}),a.actualizadoPor=f.nombre||f.usuario,a.fechaActualizacion=k(),await j(S(m,"registrosdb",t),a);const n=v.findIndex(s=>s.id===t);n!==-1&&Object.assign(v[n],a),C(),i("✅ Venta actualizada correctamente","success")}catch(o){console.error("❌ Error save venta:",o),i("Error al actualizar venta","error")}};window.cancelEdit=function(t){C(),i("Edición cancelada","info")};window.editNota=function(t){console.log("📝 Editando nota:",t);const o=u.find(a=>a.id==t);o?(o.editando=!0,x(),setTimeout(()=>{e(`.note-item[data-id="${t}"] .note-content`).focus()},100),i("✏️ Editando nota...","info")):(console.error("❌ Nota no encontrada:",t),i("❌ Error: Nota no encontrada","error"))};window.saveNota=async function(t){console.log("💾 Guardando nota:",t);const o=e(`.note-item[data-id="${t}"] .note-content`).val().trim();if(!o){i("⚠️ La nota no puede estar vacía","error"),e(`.note-item[data-id="${t}"] .note-content`).focus();return}try{const a={nota:o,creadoPor:f.nombre||f.usuario||"Admin",actualizadoPor:f.nombre||f.usuario||"Admin",fechaCreacion:k()};if(t&&t!=="new"){await j(S(m,"notas",t.toString()),a);const n=u.find(s=>s.id==t);n&&(n.nota=o,n.editando=!1),i("✅ Nota actualizada","success")}else{const n=Date.now().toString();await H(S(m,"notas",n),a),u=u.filter(s=>s.id!=="new"),u.push({id:n,titulo:"Nota",nota:o,editando:!1,...a}),i("✅ Nota creada","success")}$("notasSmileTop"),x()}catch(a){console.error("❌ Error guardar nota:",a),i("❌ Error al guardar: "+a.message,"error")}};window.cancelNota=function(t){if(console.log("❌ Cancelando edición:",t),t==="new")u=u.filter(o=>o.id!=="new");else{const o=u.find(a=>a.id==t);o&&(o.editando=!1)}x(),i("❌ Edición cancelada","info")};async function bt(){try{console.log("📊 Exportando a Excel...");let t=I(P(m,"registrosdb"),E("fechaTour",">=",w+"-01"),E("fechaTour","<=",w+"-31"),Q("fechaTour","desc")),a=(await F(t)).docs.map(c=>({id:c.id,...c.data()}));if(b!=="todos"&&(a=a.filter(c=>c.vendedor===b)),a.length===0)return i("❌ No hay datos para exportar","warning");const n=a.map(c=>{const G=y.find(lt=>lt.usuario===c.vendedor),it=c.fechaTour?new Date(c.fechaTour).toLocaleDateString("es-PE",{timeZone:"America/Lima"}):"Sin fecha",V=parseFloat(c.importeTotal)||0,rt=parseFloat(c.precioUnitario)||0,O=parseFloat(c.comision)||V*.1,ct=parseFloat(c.ganancia)||V-O;return{Fecha:it,Usuario:G?.nombre||G?.usuario||c.vendedor,"Tipo Tour":c.tipoTour||"Tour",PAX:c.cantidadPax||0,"Nombre Cliente":c.nombreCliente||"Sin nombre","Monto Total":V.toFixed(2),"Monto Individual":rt.toFixed(2),Comisión:O.toFixed(2),"Estado Pago":B(c.estadoPago)||"Pendiente",Ganancia:ct.toFixed(2),Puntos:parseInt(c.puntos)||0,Hotel:c.hotel||"",Habitación:c.numeroHabitacion||"","Fecha Registro":c.fechaRegistro?new Date(c.fechaRegistro.toDate()).toLocaleDateString("es-ES"):""}}),s=XLSX.utils.json_to_sheet(n),r=[{wch:12},{wch:15},{wch:20},{wch:8},{wch:25},{wch:12},{wch:15},{wch:12},{wch:12},{wch:12},{wch:8},{wch:20},{wch:10},{wch:15}];s["!cols"]=r;const d=XLSX.utils.book_new(),h=b==="todos"?`Ventas_${w.replace("-","_")}`:`${b}_${w.replace("-","_")}`;XLSX.utils.book_append_sheet(d,s,h);const g=b==="todos"?`ventas_${w}_todas.xlsx`:`ventas_${w}_${b}.xlsx`;XLSX.writeFile(d,g),console.log(`✅ Excel exportado: ${g}`),i(`📊 Excel exportado: ${n.length} registros`,"success")}catch(t){console.error("❌ Error exportar Excel:",t),i("Error al exportar Excel","error")}}function vt(){e(document).on("click",".bt_salir",async()=>{try{await pt(K),window.location.href="/",localStorage.clear()}catch(t){console.error("Error logout:",t)}}),e(document).on("click",".bt_cargar",async()=>{$("usuariosSmileTop"),$("toursSmileTop"),$("notasSmileTop"),$("configCrearCuenta"),await U(),await z(),await at(),await nt()}),e(document).on("click",".bt_exportar",async()=>{await bt()}),e(document).on("change","#monthFilter",async function(){w=e(this).val(),l=0,console.log(`📅 Cambiando a mes: ${w}`),await U()}),e(document).on("change","#userFilter",async function(){const t=e(this).val();t!==b&&(b=t,l=0,console.log(`👤 Filtrando por usuario: ${b}`),await U())}),e(document).on("click","#prevPage",async()=>{l>0&&(l--,await _(l,!1),C())}),e(document).on("click","#nextPage",async()=>{l<T-1&&(l++,await _(l,!1),C())}),e(document).on("click",".page-number",async function(){const t=parseInt(e(this).data("page"));t!==l&&(l=t,await _(l,!1),C())}),e(document).on("click","#addNote",()=>{const t={id:"new",titulo:"Nueva Nota",contenido:"",editando:!0,fechaCreacion:new Date().toISOString()};u.push(t),x(),i("📝 Agregando nueva nota...","info")}),e(document).on("change","#itemsFilter",async function(){const t=parseInt(e(this).val());t!==A&&(A=t,l=0,console.log(`📊 Mostrando ${A} ventas por página`),await U())}),e(document).on("click","#addTour",()=>st())}e(document).ready(()=>{if(console.log("🚀 SmileTop Admin v2.0 iniciado"),typeof XLSX>"u"){const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",t.onload=()=>console.log("✅ Biblioteca XLSX cargada"),document.head.appendChild(t)}});async function nt(){try{console.log("🔄 Cargando config cuenta...");const t=L("configCrearCuenta");if(t!==null){N=t,X();return}N=(await F(I(P(m,"smilesTop"),E("__name__","==","configuracion")))).docs[0]?.data()?.crearCuenta||!1,D("configCrearCuenta",N,60),X()}catch(t){console.error("❌ Error load config:",t),N=!1,X()}}function X(){e("#usuariosConfigContainer").html(`
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
                        <input type="checkbox" id="checkCrearCuenta" ${N?"checked":""} style="width:20px;height:20px;cursor:pointer;">
                    </td>
                    <td class="actions-cell">
                        <button onclick="saveConfigCuenta()" class="btn-action btn-save" title="Guardar">
                            <i class="fas fa-save"></i> 
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    `)}window.saveConfigCuenta=async function(){try{const t=e("#checkCrearCuenta").is(":checked"),o={crearCuenta:t,usuario:f.usuario,actualizadoPor:f.nombre||f.usuario,fechaCreado:k(),fechaActualizado:k()};await H(S(m,"smilesTop","configuracion"),o,{merge:!0}),N=t,$("configCrearCuenta"),D("configCrearCuenta",t,60),i(`✅ Crear cuenta ${t?"habilitado":"deshabilitado"}`,"success")}catch(t){console.error("❌ Error save config:",t),i("❌ Error al guardar","error")}};e(document).ready(()=>{console.log("🚀 SmileTop Admin v2.0 iniciado")});
