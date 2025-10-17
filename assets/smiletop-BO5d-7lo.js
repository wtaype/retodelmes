import{t as q,z as C,b as D,q as M,c as k,a as S,e as T,N as r,v as z,h as P,l as N,$ as s,A as _,C as U,B as j,j as B,D as R,d as H}from"./widev-BgHKgf92.js";let $=null,w=new Date().toISOString().slice(0,7),h="todos",c=0,m=0,l=[],g=[],u=[];const x=7;q(P,async a=>{if(!a)return window.location.href="/";try{const e=C("wiSmileTop");if(e)return await A(e);const t=await D(M(k(S,"smiles"),T("usuario","==",a.displayName)));if(t.empty||t.docs[0].data().rol!=="smiletop")return r("No tienes permisos de administrador","error"),await z(P);const i=t.docs[0].data();N("wiSmileTop",i,450),await A(i)}catch(e){console.error("Error auth:",e),r("Error al cargar aplicación","error")}});async function A(a){$=a,console.log(`✅ Admin: ${a.nombre}`),s(".app").html(G()),_();try{await L(),await v(),await Y(),K(),b(),y(),r("Dashboard cargado","success")}catch(e){console.error("Error init:",e),r("Error al inicializar","error")}}function G(){return`
        <header class="admin-header">
            <div class="header-left">
                <div class="logo">
                    <i class="fas fa-chart-line"></i>
                    <h1>SmileTop Admin</h1>
                </div>
            </div>
            <div class="header-right">
                <div class="witemas"></div>
                <div class="user-info">
                    <img src="${$.imagen||"./smile.png"}" alt="Avatar" class="user-avatar">
                    <span>${$.nombre||"Admin"}</span>
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
                        <select id="monthFilter">${W()}</select>
                    </div>
                    <div class="filter-group">
                        <label><i class="fas fa-user"></i> Usuario</label>
                        <select id="userFilter">
                            <option value="todos">Todos los usuarios</option>
                        </select>
                    </div>
                    <button class="btn-refresh bt_cargar">
                        <i class="fas fa-sync"></i>
                        Actualizar
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
    `}function W(){const a=[],e=new Date;for(let t=-6;t<=5;t++){const i=new Date(e.getFullYear(),e.getMonth()+t,1),o=i.toISOString().slice(0,7),n=i.toLocaleDateString("es-ES",{year:"numeric",month:"long"}),d=o===w?"selected":"";a.push(`<option value="${o}" ${d}>${U(n)}</option>`)}return a.join("")}async function L(){try{console.log("🔄 Cargando usuarios...");const a=C("usuariosSmileTop");if(a&&a.length>0){g=a,console.log(`✅ ${g.length} usuarios desde cache`),I();return}g=(await D(M(k(S,"smiles"),T("rol","==","smile")))).docs.map(t=>({id:t.id,...t.data()})),console.log(`✅ ${g.length} usuarios cargados desde Firestore`),N("usuariosSmileTop",g,300),I()}catch(a){console.error("❌ Error load usuarios:",a),r("Error al cargar usuarios","error")}}async function v(a=0,e=!0){try{console.log(`🔄 Cargando ventas página ${a}...`);let t=M(k(S,"registrosdb"),T("fechaTour",">=",w+"-01"),T("fechaTour","<=",w+"-31"),j("fechaTour","desc")),o=(await D(t)).docs.map(f=>({id:f.id,...f.data()}));if(h!=="todos"&&(o=o.filter(f=>f.vendedor===h),console.log(`🔍 Filtrado por usuario ${h}: ${o.length} ventas`)),m=Math.ceil(o.length/x),o.length===0){c=0,l=[],console.log("❌ No hay ventas para este filtro");return}c>=m&&(c=0);const n=c*x,d=n+x;l=o.slice(n,d),console.log(`✅ ${l.length}/${o.length} ventas cargadas para página ${c+1}/${m}`)}catch(t){console.error("❌ Error load ventas:",t),r("Error al cargar ventas","error")}}async function F(){try{console.log("🔄 Refrescando datos..."),s("#tableContainer").html(`
            <div class="loading-state">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Actualizando datos...</p>
            </div>
        `),c=0,await L(),await v(c),b(),r("✅ Datos actualizados correctamente","success")}catch(a){console.error("❌ Error refresh:",a),r("Error al actualizar datos","error")}}async function Y(){try{console.log("🔄 Cargando notas...");const a=C("notasSmileTop");if(a&&a.length>0){u=a,console.log(`✅ ${u.length} notas desde cache`);return}u=[{id:1,titulo:"Noticias a trabajadores",contenido:"Escribe aquí las noticias importantes para el equipo...",editando:!1,fechaCreacion:new Date().toISOString()}],N("notasSmileTop",u,720),console.log("✅ Notas por defecto creadas")}catch(a){console.error("❌ Error load notas:",a)}}function I(){const a=s("#userFilter"),e=a.val();a.find('option:not([value="todos"])').remove(),console.log("📋 Actualizando filtro de usuarios..."),g.forEach(t=>{const i=t.nombre||t.usuario;a.append(`<option value="${t.usuario}">${i}</option>`)}),e&&a.find(`option[value="${e}"]`).length&&a.val(e),console.log(`✅ ${a.find("option").length-1} usuarios en filtro`)}function b(){const a=s("#tableContainer");if(console.log(`📊 Renderizando ${l.length} ventas`),l.length===0){a.html(`
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>No hay ventas</h3>
                <p>No se encontraron ventas para ${h==="todos"?"este mes":"este usuario en este mes"}</p>
                <button class="btn-refresh bt_cargar" style="margin-top: 1rem;">
                    <i class="fas fa-sync"></i>
                    Buscar en base de datos
                </button>
            </div>
        `),V([],0,0),s("#pagination").hide();return}const e=`
        <table class="sales-table">
            <thead>
                <tr>
                    <th><i class="fas fa-calendar"></i> Fecha</th>
                    <th><i class="fas fa-user"></i> Usuario</th>
                    <th><i class="fas fa-route"></i> Tipo Tour</th>
                    <th><i class="fas fa-check-circle"></i> Pagado</th>
                    <th><i class="fas fa-coins"></i> M. Individual</th>
                    <th><i class="fas fa-money-bill-wave"></i> M. Total</th>
                    <th><i class="fas fa-percentage"></i> Comisión</th>
                    <th><i class="fas fa-chart-line"></i> Ganancia</th>
                    <th><i class="fas fa-star"></i> Puntos</th>
                    <th><i class="fas fa-cogs"></i> Acciones</th>
                </tr>
            </thead>
            <tbody>
                ${l.map(o=>O(o)).join("")}
            </tbody>
        </table>
    `;a.html(e);const t=l.reduce((o,n)=>o+(parseFloat(n.importeTotal)||0),0),i=l.reduce((o,n)=>o+(parseInt(n.puntos)||0),0);V(l,t,i),J()}function O(a,e=!1){const t=g.find(E=>E.usuario===a.vendedor||E.id===a.vendedor),i=a.fechaTour?new Date(a.fechaTour).toLocaleDateString("es-ES"):"Sin fecha",o=parseFloat(a.precioUnitario)||0,n=parseFloat(a.importeTotal)||0,d=n*.1,f=parseFloat(a.ganancia)||n-d,p=parseInt(a.puntos)||0;return e?`
            <tr class="editing-row" data-id="${a.id}">
                <td>${i}</td>
                <td class="user-cell">
                    <img src="${t?.imagen||"./smile.png"}" class="avatar-small">
                    ${t?.nombre||t?.usuario||a.vendedor}
                </td>
                <td class="tour-cell">${a.tipoTour||"Tour"}</td>
                <td><input type="number" class="edit-input" data-field="precioUnitario" value="${o.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="importeTotal" value="${n.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="comision" value="${d.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="ganancia" value="${f.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="puntos" value="${p}"></td>
                <td class="actions-cell">
                    <button class="btn-action btn-save" onclick="saveVenta('${a.id}')">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn-action btn-cancel" onclick="cancelEdit('${a.id}')">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `:`
        <tr data-id="${a.id}">
            <td>${i}</td>
            <td class="user-cell">
                <img src="${t?.imagen||"./smile.png"}" class="avatar-small">
                ${t?.nombre||t?.usuario||a.vendedor}
            </td>
            <td class="tour-cell">${a.tipoTour||"Tour"}</td>
            <td class="money-cell">${U(a.estadoPago)||"No"}</td>
            <td class="money-cell">${o.toFixed(2)}</td>
            <td class="money-cell">${n.toFixed(2)}</td>
            <td class="money-cell">${d.toFixed(2)}</td>
            <td class="money-cell">${f.toFixed(2)}</td>
            <td class="points-cell">${p}</td>
            <td class="actions-cell">
                <button class="btn-action btn-view" onclick="viewVenta('${a.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-action btn-edit" onclick="editVenta('${a.id}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `}function V(a,e,t){s("#totalVentas").text(`${a.length} ${a.length===1?"venta":"ventas"}`),s("#totalIngresos").text(`S/ ${e.toFixed(2)}`),s("#totalPuntos").text(`${t} puntos`)}function J(){const a=s("#pagination"),e=s("#prevPage"),t=s("#nextPage"),i=s("#pageNumbers");if(m<=1){a.hide();return}let o="";const n=8;let d=Math.max(0,c-Math.floor(n/2)),f=Math.min(m-1,d+n-1);f-d<n-1&&(d=Math.max(0,f-n+1));for(let p=d;p<=f;p++)o+=`
            <button class="btn-page page-number ${p===c?"active":""}" data-page="${p}">
                ${p+1}
            </button>
        `;i.html(o),e.prop("disabled",c===0),t.prop("disabled",c>=m-1),a.show()}function y(){const a=s("#notesContainer");if(!u||u.length===0){a.html(`
            <div class="empty-state">
                <i class="fas fa-sticky-note"></i>
                <h3>Sin notas</h3>
                <p>Agrega tu primera nota</p>
            </div>
        `);return}const e=u.map(t=>`
        <div class="note-item" data-id="${t.id}">
            <h4>${t.titulo}</h4>
            <textarea 
                class="note-content" 
                ${t.editando?"":"disabled"} 
                placeholder="Escribe aquí..."
            >${t.contenido||""}</textarea>
            <div class="note-actions">
                ${t.editando?`
                    <button class="btn-save" onclick="saveNota(${t.id})">
                        <i class="fas fa-save"></i> 
                    </button>
                    <button class="btn-cancel" onclick="cancelNota(${t.id})">
                        <i class="fas fa-times"></i> 
                    </button>
                `:`
                    <button class="btn-edit" onclick="editNota(${t.id})">
                        <i class="fas fa-edit"></i> 
                    </button>
                `}
            </div>
        </div>
    `).join("");a.html(e)}function K(){s(document).on("click",".bt_salir",async()=>{try{await z(P),window.location.href="/",localStorage.clear()}catch(a){console.error("Error logout:",a)}}),s(document).on("click",".bt_cargar",async()=>{await F()}),s(document).on("change","#monthFilter",async function(){w=s(this).val(),c=0,console.log(`📅 Cambiando a mes: ${w}`),await F()}),s(document).on("change","#userFilter",async function(){const a=s(this).val();a!==h&&(h=a,c=0,console.log(`👤 Filtrando por usuario: ${h}`),await F())}),s(document).on("click","#prevPage",async()=>{c>0&&(c--,await v(c,!1),b())}),s(document).on("click","#nextPage",async()=>{c<m-1&&(c++,await v(c,!1),b())}),s(document).on("click",".page-number",async function(){const a=parseInt(s(this).data("page"));a!==c&&(c=a,await v(c,!1),b())}),s(document).on("click","#addNote",()=>{const a={id:Date.now(),titulo:"Nueva Nota",contenido:"",editando:!0,fechaCreacion:new Date().toISOString()};u.push(a),y(),r("Nueva nota agregada","info")})}window.viewVenta=function(a){const e=l.find(n=>n.id===a);if(!e)return;const t=g.find(n=>n.usuario===e.vendedor||n.id===e.vendedor),i=e.nombreCliente||"Cliente",o=t?.nombre||t?.usuario||e.vendedor;r(`👁️ Viendo: ${i} - Vendedor: ${o}`,"info",4e3)};window.editVenta=function(a){const e=l.find(i=>i.id===a);if(!e)return;s(`tr[data-id="${a}"]`).replaceWith(O(e,!0)),r("Modo edición activado","info")};window.saveVenta=async function(a){try{const e=s(`.editing-row[data-id="${a}"]`),t={};e.find(".edit-input").each(function(){const o=s(this).data("field"),n=s(this).val();t[o]=o==="puntos"?parseInt(n):parseFloat(n)}),t.actualizadoPor=$.nombre||$.usuario,t.fechaActualizacion=B(),await R(H(S,"registrosdb",a),t);const i=l.findIndex(o=>o.id===a);i!==-1&&Object.assign(l[i],t),b(),r("✅ Venta actualizada correctamente","success")}catch(e){console.error("❌ Error save venta:",e),r("Error al actualizar venta","error")}};window.cancelEdit=function(a){b(),r("Edición cancelada","info")};window.editNota=function(a){const e=u.find(t=>t.id===a);e&&(e.editando=!0,y(),r("Editando nota...","info"))};window.saveNota=function(a){const e=u.find(i=>i.id===a),t=s(`.note-item[data-id="${a}"] .note-content`).val();e&&(e.contenido=t,e.editando=!1,e.fechaModificacion=new Date().toISOString(),N("notasSmileTop",u,720),y(),r("📝 Nota guardada correctamente","success"))};window.cancelNota=function(a){const e=u.find(t=>t.id===a);e&&(e.editando=!1,y(),r("Edición cancelada","info"))};s(document).ready(()=>{console.log("🚀 SmileTop Admin v2.0 iniciado")});
