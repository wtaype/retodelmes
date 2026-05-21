import{$ as i}from"./vendor-PbmUQHyn.js";import{db as M}from"./firebase-DBKTF61f.js";import{i as H,r as z,c as C,D as J,d as q,e as G}from"./firebase-BM1KOhEp.js";import{A as R,u as A,l as P,w as I,c as w,C as L}from"./index-DIsh90OI.js";import{getMesActual as W,invalidateRankingCaches as X}from"./zsmile-Bqn82rgd.js";let m=[],u=[],S=W(),v="",$=!1,r=1,x=9,b="";const rt=()=>`
    <div class="smw_hist_view">
      
      <!-- CABECERA: Título y Selector de Mes -->
      <header class="smw_hist_header wi_fadeUp">
        <div class="smw_hist_title_row">
          <h1><i class="fas fa-clipboard-list smw_cielo_glow"></i> Historial de Ventas</h1>
          <p class="smw_hist_subtitle">Monitorea y gestiona los registros mensuales</p>
        </div>

        <div class="smw_hist_controls">
          <!-- Selector de Mes con flechas -->
          <div class="smw_month_selector_wrap">
            <button class="smw_month_nav_btn" id="btnHistMesAnt" title="Mes Anterior">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="smw_month_display">
              <i class="fas fa-calendar-alt"></i>
              <span id="txtHistMesSeleccionado">...</span>
            </div>
            <!-- Select oculto para cambio de mes -->
            <select id="selHistorialMes" class="smw_month_hidden_select_header">
              ${et()}
            </select>
            <button class="smw_month_nav_btn" id="btnHistMesSig" title="Mes Siguiente">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </header>

      <!-- BARRA DE FILTROS -->
      <section class="smw_hist_filters_card wi_fadeUp" style="animation-delay: 0.08s">
        <div class="smw_filter_grid">
          
          <!-- Buscador -->
          <div class="smw_filter_field">
            <label><i class="fas fa-search"></i> Buscar Venta</label>
            <input type="text" id="histSearchInput" class="smw_input" placeholder="Nombre cliente o habitación...">
          </div>

          <!-- Filtrar por Vendedor -->
          <div class="smw_filter_field">
            <label><i class="fas fa-user-tie"></i> Vendedor</label>
            <select id="histFilterEmployee" class="smw_select">
              <option value="">Todos los vendedores</option>
            </select>
          </div>

          <!-- Ventas por página -->
          <div class="smw_filter_field">
            <label><i class="fas fa-list-numeric"></i> Por página</label>
            <select id="histLimtSelector" class="smw_select">
              <option value="5">Mostrar 5</option>
              <option value="9" selected>Mostrar 9</option>
              <option value="15">Mostrar 15</option>
              <option value="25">Mostrar 25</option>
            </select>
          </div>

          <!-- Solo hoy -->
          <div class="smw_filter_field smw_toggle_field">
            <label><i class="fas fa-calendar"></i> Fecha</label>
            <button class="smw_btn_toggle" id="btnFilterHoy">
              <i class="fas fa-calendar-day"></i> Solo hoy
            </button>
          </div>

        </div>
      </section>

      <!-- TABLA DE RESULTADOS -->
      <section class="smw_hist_table_card wi_fadeUp" style="animation-delay: 0.18s">

        <!-- Barra de título de tabla estilo referencia -->
        <div class="smw_hist_table_title">
          <div style="display:flex;align-items:center;gap:1.2vh">
            <i class="fas fa-table"></i>
            Registro de Ventas
          </div>
          <span id="smwHistTotal">— registros</span>
        </div>

        <div class="smw_table_responsive">
          <table class="smw_hist_table">
            <thead>
              <tr>
                <th><i class="fas fa-calendar"></i>Fecha</th>
                <th><i class="fas fa-user"></i>Usuario</th>
                <th><i class="fas fa-route"></i>Tipo Tour</th>
                <th><i class="fas fa-users"></i>PAX</th>
                <th><i class="fas fa-user-tag"></i>Nombre</th>
                <th><i class="fas fa-calculator"></i>M. Total</th>
                <th><i class="fas fa-dollar-sign"></i>M. Individual</th>
                <th><i class="fas fa-credit-card"></i>Pagado</th>
                <th><i class="fas fa-hand-holding-usd"></i>Ganancia</th>
                <th><i class="fas fa-user-shield"></i>Vendedor</th>
                <th><i class="fas fa-star"></i>Puntos</th>
                <th><i class="fas fa-cogs"></i>Acciones</th>
              </tr>
            </thead>
            <tbody id="histSalesTableBody">
              ${N(9)}
            </tbody>
          </table>
        </div>

        <!-- Paginación -->
        <div class="smw_pagination_container" id="histPagination"></div>
      </section>

    </div>
  `,ct=async()=>{if(!R.user)return setTimeout(()=>A.navigate("/login"),100);r=1,v="",$=!1,b="",i("#selHistorialMes").val(S),B(),await V(),K(),i(".wi_fadeUp").addClass("visible wi_visible"),window.__WIREADY__=!0},dt=()=>{i(document).off(".historial_events"),window.verDetalleVenta=null,window.editarVentaAccion=null,window.eliminarVentaAccion=null,window.histCambiarPagina=null};function K(s){i(document).off("change.historial_events","#selHistorialMes").on("change.historial_events","#selHistorialMes",async function(){S=i(this).val(),B(),r=1,await V()}),i(document).off("click.historial_events","#btnHistMesAnt").on("click.historial_events","#btnHistMesAnt",function(){const t=i("#selHistorialMes"),e=t.prop("selectedIndex");e<t.find("option").length-1&&t.prop("selectedIndex",e+1).trigger("change")}),i(document).off("click.historial_events","#btnHistMesSig").on("click.historial_events","#btnHistMesSig",function(){const t=i("#selHistorialMes"),e=t.prop("selectedIndex");e>0&&t.prop("selectedIndex",e-1).trigger("change")}),i(document).off("change.historial_events","#histFilterEmployee").on("change.historial_events","#histFilterEmployee",function(){v=i(this).val(),r=1,_()}),i(document).off("change.historial_events","#histLimtSelector").on("change.historial_events","#histLimtSelector",function(){x=parseInt(i(this).val()),r=1,_()}),i(document).off("input.historial_events","#histSearchInput").on("input.historial_events","#histSearchInput",function(){b=i(this).val().toLowerCase().trim(),r=1,_()}),i(document).off("click.historial_events","#btnFilterHoy").on("click.historial_events","#btnFilterHoy",function(){$=!$,i(this).toggleClass("active",$),r=1,_()}),window.histCambiarPagina=t=>{r=t,_()},window.verDetalleVenta=t=>{const e=m.find(o=>o.id===t);if(!e)return w("Venta no encontrada","error");window.editarVenta={venta:e,soloVista:!0},A.navigate("/registrar")},window.editarVentaAccion=t=>{const e=m.find(o=>o.id===t);if(!e)return w("Venta no encontrada","error");window.editarVenta={venta:e,soloVista:!1},A.navigate("/registrar")},window.eliminarVentaAccion=async t=>{const e=m.find(o=>o.id===t);if(!e)return w("Venta no encontrada","error");if(confirm(`¿Eliminar venta de "${e.nombreCliente}"?

Esta acción NO se puede deshacer.`)&&confirm(`⚠️ CONFIRMACIÓN FINAL

Se eliminará:
• ${e.nombreCliente}
• ${e.tipoTour}
• S/ ${e.importeTotal||0}

¿CONFIRMAS?`))try{w("Eliminando registro...","info"),await q(G(M,"registrosdb",t));const o=e.fechaTour;let p=S;if(typeof o=="string"){const[l,n]=o.split("-");p=`${l}-${n}`}else if(o?.toDate){const l=o.toDate();p=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`}X(e.vendedor,p),w("Venta eliminada exitosamente","success"),await V()}catch(o){console.error("Error al eliminar:",o),w("Error al eliminar el registro.","error")}}}function B(){const s=i("#selHistorialMes option:selected").text();i("#txtHistMesSeleccionado").text(s||S)}async function V(){const s=i(".smw_hist_header");s.addClass("smw_loading");try{const t=P("todosEmpleadosSmile"),e=P("todasVentasSmile");if(t&&e){u=t,m=e;const n=u.map(c=>`<option value="${c.usuario}">${c.nombre||c.usuario}</option>`).join("");i("#histFilterEmployee").html(`<option value="">Todos los vendedores</option>${n}`).val(v),_();return}i("#histSalesTableBody").html(N(x));const[o,p]=await Promise.all([H(z(C(M,"smiles"),J("participa","==","si"))),H(C(M,"registrosdb"))]);u=o.docs.map(n=>({id:n.id,...n.data()})),m=p.docs.map(n=>({id:n.id,...n.data()})),m.sort((n,c)=>{const h=n.fechaTour?.toDate?n.fechaTour.toDate():new Date(n.fechaTour||0);return(c.fechaTour?.toDate?c.fechaTour.toDate():new Date(c.fechaTour||0))-h}),I("todosEmpleadosSmile",u,60),I("todasVentasSmile",m,5);const l=u.map(n=>`<option value="${n.usuario}">${n.nombre||n.usuario}</option>`).join("");i("#histFilterEmployee").html(`<option value="">Todos los vendedores</option>${l}`).val(v),_()}catch(t){console.error("Error en cargar todo:",t),i("#histSalesTableBody").html('<tr><td colspan="12" class="smw_error_cell"><i class="fas fa-exclamation-triangle"></i> Error al cargar datos</td></tr>')}finally{s.removeClass("smw_loading")}}function _(){const[s,t]=S.split("-").map(Number),e=new Date,o=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,p=new Set(u.map(a=>a.usuario));let l=m.filter(a=>{if(!p.has(a.vendedor))return!1;const d=a.fechaTour;if(!d)return!1;if(d.toDate){const f=d.toDate();return f.getFullYear()===s&&f.getMonth()+1===t}if(typeof d=="string"){const[f,g]=d.split("-").map(Number);return f===s&&g===t}return!1});v&&(l=l.filter(a=>a.vendedor===v)),b&&(l=l.filter(a=>{const d=(a.nombreCliente||"").toLowerCase(),f=(a.numeroHabitacion||"").toLowerCase(),g=(a.tipoTour||"").toLowerCase();return d.includes(b)||f.includes(b)||g.includes(b)})),$&&(l=l.filter(a=>{const d=a.fechaTour;if(!d)return!1;if(typeof d=="string")return d.split("T")[0]===o;if(d.toDate){const f=d.toDate();return`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`===o}return!1}));const n=l.length,c=Math.ceil(n/x);r>c&&c>0&&(r=c);const h=(r-1)*x,y=l.slice(h,h+x);i("#smwHistTotal").text(`Registro${n!==1?"s":""} = ${n}`);const T=R.user,E=y.map(a=>{const f=a.vendedor===T?.usuario?`
        <button class="smw_hist_btn smw_hbtn_view"   onclick="verDetalleVenta('${a.id}')"   title="Ver Venta"><i class="fas fa-eye"></i></button>
        <button class="smw_hist_btn smw_hbtn_edit"   onclick="editarVentaAccion('${a.id}')" title="Editar"><i class="fas fa-edit"></i></button>
        <button class="smw_hist_btn smw_hbtn_delete" onclick="eliminarVentaAccion('${a.id}')" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
      `:`<button class="smw_hist_btn smw_hbtn_view" onclick="verDetalleVenta('${a.id}')" title="Ver Detalle"><i class="fas fa-eye"></i></button>`,g=tt(a.fechaTour),D=u.find(Y=>Y.usuario===a.vendedor),O=D?.imagen||D?.avatar?D.imagen||D.avatar:"/retodelmes/smile.avif",F=st(a.estadoPago),U=a.esVentaJulio?"Julio":a.esVentaSonia?"Sonia":a.esVentaExterna?"Externo":L(a.vendedor),j=`
      <div class="smw_cliente_info">
        <span class="smw_cliente_name">${(a.nombreCliente||"Sin nombre").toUpperCase()}</span>
        ${a.numeroHabitacion?`<span class="smw_room_pill"><i class="fas fa-door-open"></i> ${a.numeroHabitacion}</span>`:""}
      </div>
    `;return`
      <tr class="smw_row_anim">
        <td><span class="smw_date_span">${g}</span></td>
        <td>
          <div class="smw_vendedor_cell">
            <img src="${O}" class="smw_avatar_table" alt="avatar" onerror="this.src='/retodelmes/smile.avif'">
            <span class="smw_vendedor_name">${L(a.vendedor)}</span>
          </div>
        </td>
        <td><span class="smw_tour_pill">${a.tipoTour}</span></td>
        <td><span class="smw_pax_pill"><i class="fas fa-users"></i> ${a.cantidadPax||1}</span></td>
        <td><div class="smw_cliente_cell">${j}</div></td>
        <td><strong class="smw_price_span">S/ ${parseFloat(a.importeTotal||0).toFixed(2)}</strong></td>
        <td><span class="smw_unit_price">S/ ${parseFloat(a.precioUnitario||a.precio||0).toFixed(2)}</span></td>
        <td>
          <span class="smw_status_badge ${F.cls}">
            <span class="smw_status_dot"></span> ${F.txt}
          </span>
        </td>
        <td><span class="smw_profit_span">S/ ${parseFloat(a.ganancia||0).toFixed(2)}</span></td>
        <td><span class="smw_reg_label"><i class="fas fa-user"></i> ${U}</span></td>
        <td>
          <span class="smw_points_box">
            <i class="fas fa-star"></i> ${a.puntos||0}
          </span>
        </td>
        <td><div class="smw_actions_cell">${f}</div></td>
      </tr>
    `}).join(""),k=i("#histSalesTableBody");E?k.html(E):k.html(`
      <tr>
        <td colspan="12" class="smw_empty_cell">
          <i class="fas fa-inbox"></i>
          <strong>No se encontraron registros de ventas</strong>
          <p>Prueba ajustando los filtros o seleccionando otro mes.</p>
        </td>
      </tr>
    `),Q(c)}function Q(s){const t=i("#histPagination");if(s<=1){t.html("");return}let e='<div class="smw_pagination">';r>1&&(e+=`<button class="smw_page_btn" onclick="histCambiarPagina(${r-1})"><i class="fas fa-chevron-left"></i></button>`),Z(r,s).forEach(p=>{p==="..."?e+='<span style="padding:0 0.5vh;color:var(--tx3);font-weight:700">…</span>':e+=`<button class="smw_page_btn ${p===r?"active":""}" onclick="histCambiarPagina(${p})">${p}</button>`}),r<s&&(e+=`<button class="smw_page_btn" onclick="histCambiarPagina(${r+1})"><i class="fas fa-chevron-right"></i></button>`),e+="</div>",t.html(e)}function Z(s,t){return t<=7?Array.from({length:t},(e,o)=>o+1):s<=4?[1,2,3,4,5,"...",t]:s>=t-3?[1,"...",t-4,t-3,t-2,t-1,t]:[1,"...",s-1,s,s+1,"...",t]}function tt(s){if(!s)return"Sin fecha";if(s.toDate){const t=s.toDate();return`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}/${t.getFullYear()}`}if(typeof s=="string"){const t=s.split("T")[0].split("-");return t.length===3?`${t[2]}/${t[1]}/${t[0]}`:s}if(s.seconds){const t=new Date(s.seconds*1e3);return`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}/${t.getFullYear()}`}return"Sin fecha"}function st(s){return{pagado:{cls:"paid",txt:"PAGADO"},cobrado:{cls:"paid",txt:"PAGADO"},cobrar:{cls:"pending",txt:"DEUDA"}}[s]||{cls:"pending",txt:"DEUDA"}}function et(){const s=new Date,t=s.getFullYear(),e=s.getMonth(),o=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];return i.map(new Array(7),(p,l)=>{const n=l-3,c=e+n,h=t+Math.floor(c/12),y=(c%12+12)%12;return`<option value="${`${h}-${String(y+1).padStart(2,"0")}`}"${n===0?" selected":""}>${o[y]} ${h}</option>`}).join("")}function N(s=9){return Array(s).fill(0).map(()=>`
    <tr class="smw_sk_row">
      <td><span class="smw_sk_el" style="width:65px;height:14px"></span></td>
      <td>
        <div style="display:flex;align-items:center;gap:8px;justify-content:center">
          <span class="smw_sk_el smw_sk_circle" style="width:28px;height:28px"></span>
          <span class="smw_sk_el" style="width:65px;height:14px"></span>
        </div>
      </td>
      <td><span class="smw_sk_el" style="width:100px;height:24px;border-radius:6px"></span></td>
      <td><span class="smw_sk_el" style="width:40px;height:22px;border-radius:50px"></span></td>
      <td><span class="smw_sk_el" style="width:85px;height:14px"></span></td>
      <td><span class="smw_sk_el" style="width:60px;height:16px"></span></td>
      <td><span class="smw_sk_el" style="width:55px;height:14px"></span></td>
      <td><span class="smw_sk_el" style="width:72px;height:22px;border-radius:50px"></span></td>
      <td><span class="smw_sk_el" style="width:55px;height:14px"></span></td>
      <td><span class="smw_sk_el" style="width:60px;height:14px"></span></td>
      <td><span class="smw_sk_el" style="width:52px;height:22px;border-radius:50px"></span></td>
      <td>
        <div style="display:flex;gap:6px;justify-content:center">
          <span class="smw_sk_el smw_sk_circle" style="width:26px;height:26px"></span>
        </div>
      </td>
    </tr>
  `).join("")}export{dt as cleanup,ct as init,rt as render};
