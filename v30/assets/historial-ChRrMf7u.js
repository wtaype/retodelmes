import{$ as n}from"./vendor-PbmUQHyn.js";import{db as A}from"./firebase-DaxCdgUB.js";import{i as C,r as B,c as E,D as U,d as Y,e as j}from"./firebase-BM1KOhEp.js";import{A as H,u as M,c as h,C as F}from"./index-B-SYHrlC.js";import{getMesActual as z,invalidateRankingCaches as G}from"./zsmile-C_WKbqNC.js";let _=[],T=[],v=z(),x="",b=!1,l=1,g=10,m="";const it=()=>`
    <div class="smw_hist_view">
      
      <!-- CABECERA: Título y Controles de Filtros -->
      <header class="smw_hist_header wi_fadeUp">
        <div class="smw_hist_title_row">
          <h1><i class="fas fa-clipboard-list smw_cielo_glow"></i> Historial de Ventas</h1>
          <p class="smw_hist_subtitle">Monitorea y gestiona los registros mensuales</p>
        </div>

        <div class="smw_hist_controls">
          <!-- Selector de Mes Estilizado -->
          <div class="smw_month_selector_wrap">
            <button class="smw_month_nav_btn" id="btnHistMesAnt" title="Mes Anterior">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="smw_month_display">
              <i class="fas fa-calendar-alt"></i>
              <span id="txtHistMesSeleccionado">...</span>
              <select id="selHistorialMes" class="smw_month_hidden_select">
                ${K()}
              </select>
            </div>
            <button class="smw_month_nav_btn" id="btnHistMesSig" title="Mes Siguiente">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>

          <a href="/smile" class="smw_back_btn nv_item" data-page="smile">
            <i class="fas fa-arrow-left"></i> Panel de Control
          </a>
        </div>
      </header>

      <!-- BARRA DE FILTRADO Y BUSCADORES -->
      <section class="smw_hist_filters_card wi_fadeUp" style="animation-delay: 0.1s">
        <div class="smw_filter_grid">
          
          <!-- Buscador de Cliente/Habitación -->
          <div class="smw_filter_field">
            <label><i class="fas fa-search"></i> Buscar Venta</label>
            <input type="text" id="histSearchInput" class="smw_input" placeholder="Nombre cliente o habitación...">
          </div>

          <!-- Filtrar por Vendedor -->
          <div class="smw_filter_field">
            <label><i class="fas fa-user-tie"></i> Filtrar por Vendedor</label>
            <select id="histFilterEmployee" class="smw_select">
              <option value="">Todos los vendedores</option>
            </select>
          </div>

          <!-- Mostrar N Registros -->
          <div class="smw_filter_field">
            <label><i class="fas fa-list-numeric"></i> Ventas por página</label>
            <select id="histLimtSelector" class="smw_select">
              <option value="5">Mostrar 5 ventas</option>
              <option value="10" selected>Mostrar 10 ventas</option>
              <option value="15">Mostrar 15 ventas</option>
              <option value="25">Mostrar 25 ventas</option>
            </select>
          </div>

          <!-- Botón Hoy / Todos -->
          <div class="smw_filter_field smw_toggle_field">
            <label>&nbsp;</label>
            <button class="smw_btn_toggle" id="btnFilterHoy">
              <i class="fas fa-calendar-day"></i> Solo hoy
            </button>
          </div>

        </div>
      </section>

      <!-- TABLA DE RESULTADOS GLASSMORPHIC -->
      <section class="smw_hist_table_card wi_fadeUp" style="animation-delay: 0.2s">
        <div class="smw_table_responsive">
          <table class="smw_hist_table">
            <thead>
              <tr>
                <th><i class="fas fa-calendar"></i> Fecha</th>
                <th><i class="fas fa-user"></i> Colaborador</th>
                <th><i class="fas fa-route"></i> Tour</th>
                <th><i class="fas fa-users"></i> PAX</th>
                <th><i class="fas fa-user-tag"></i> Cliente</th>
                <th><i class="fas fa-calculator"></i> Total</th>
                <th><i class="fas fa-credit-card"></i> Estado</th>
                <th><i class="fas fa-hand-holding-usd"></i> Ganancia</th>
                <th><i class="fas fa-user-shield"></i> Registrado</th>
                <th><i class="fas fa-star"></i> Pts</th>
                <th style="text-align: center;"><i class="fas fa-cogs"></i> Acciones</th>
              </tr>
            </thead>
            <tbody id="histSalesTableBody">
              ${I(g||5)}
            </tbody>
          </table>
        </div>

        <!-- Paginación -->
        <div class="smw_pagination_container" id="histPagination"></div>
      </section>

    </div>
  `,nt=async()=>{if(!H.user)return setTimeout(()=>M.navigate("/login"),100);l=1,x="",b=!1,m="",n("#selHistorialMes").val(v),P(),await k(),J(),n(".wi_fadeUp").addClass("visible wi_visible"),window.__WIREADY__=!0},ot=()=>{n(document).off(".historial_events"),window.verDetalleVenta=null,window.editarVentaAccion=null,window.eliminarVentaAccion=null,window.histCambiarPagina=null};function J(i){n(document).off("change.historial_events","#selHistorialMes").on("change.historial_events","#selHistorialMes",async function(){v=n(this).val(),P(),l=1,await k()}),n(document).off("click.historial_events","#btnHistMesAnt").on("click.historial_events","#btnHistMesAnt",function(){const e=n("#selHistorialMes"),t=e.prop("selectedIndex");t<e.find("option").length-1&&e.prop("selectedIndex",t+1).trigger("change")}),n(document).off("click.historial_events","#btnHistMesSig").on("click.historial_events","#btnHistMesSig",function(){const e=n("#selHistorialMes"),t=e.prop("selectedIndex");t>0&&e.prop("selectedIndex",t-1).trigger("change")}),n(document).off("change.historial_events","#histFilterEmployee").on("change.historial_events","#histFilterEmployee",function(){x=n(this).val(),l=1,u()}),n(document).off("change.historial_events","#histLimtSelector").on("change.historial_events","#histLimtSelector",function(){g=parseInt(n(this).val()),l=1,u()}),n(document).off("input.historial_events","#histSearchInput").on("input.historial_events","#histSearchInput",function(){m=n(this).val().toLowerCase().trim(),l=1,u()}),n(document).off("click.historial_events","#btnFilterHoy").on("click.historial_events","#btnFilterHoy",function(){b=!b,n(this).toggleClass("active",b),l=1,u()}),window.histCambiarPagina=e=>{l=e,u()},window.verDetalleVenta=e=>{const t=_.find(s=>s.id===e);if(!t)return h("Venta no encontrada","error");window.editarVenta={venta:t,soloVista:!0},M.navigate("/registrar")},window.editarVentaAccion=e=>{const t=_.find(s=>s.id===e);if(!t)return h("Venta no encontrada","error");window.editarVenta={venta:t,soloVista:!1},M.navigate("/registrar")},window.eliminarVentaAccion=async e=>{const t=_.find(s=>s.id===e);if(!t)return h("Venta no encontrada","error");if(confirm(`¿Eliminar venta de "${t.nombreCliente}"?

Esta acción NO se puede deshacer.`)&&confirm(`⚠️ CONFIRMACIÓN FINAL

Se eliminará:
• ${t.nombreCliente}
• ${t.tipoTour}
• S/ ${t.importeTotal||0}

¿CONFIRMAS?`))try{h("Eliminando registro...","info"),await Y(j(A,"registrosdb",e));const s=t.fechaTour;let o=v;if(typeof s=="string"){const[d,p]=s.split("-");o=`${d}-${p}`}else if(s?.toDate){const d=s.toDate();o=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`}G(t.vendedor,o),h("Venta eliminada exitosamente","success"),await k()}catch(s){console.error("Error al eliminar:",s),h("Error al eliminar el registro.","error")}}}function P(){const i=n("#selHistorialMes option:selected").text();n("#txtHistMesSeleccionado").text(i||v)}async function k(){try{n("#histSalesTableBody").html(I(g||5)),T=(await C(B(E(A,"smiles"),U("participa","==","si")))).docs.map(s=>({id:s.id,...s.data()}));const e=T.map(s=>`<option value="${s.usuario}">${s.nombre||s.usuario}</option>`).join("");n("#histFilterEmployee").html(`<option value="">Todos los vendedores</option>${e}`).val(x),_=(await C(E(A,"registrosdb"))).docs.map(s=>({id:s.id,...s.data()})),_.sort((s,o)=>{const d=s.fechaTour?.toDate?s.fechaTour.toDate():new Date(s.fechaTour||0);return(o.fechaTour?.toDate?o.fechaTour.toDate():new Date(o.fechaTour||0))-d}),u()}catch(i){console.error("Error en cargar todo:",i),n("#histSalesTableBody").html('<tr><td colspan="11" class="smw_error_cell"><i class="fas fa-exclamation-triangle"></i> Error al cargar datos</td></tr>')}}function u(){const[i,e]=v.split("-").map(Number),t=new Date,s=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;let o=_.filter(a=>{const r=a.fechaTour;if(!r)return!1;if(r.toDate){const c=r.toDate();return c.getFullYear()===i&&c.getMonth()+1===e}if(typeof r=="string"){const[c,f]=r.split("-").map(Number);return c===i&&f===e}return!1});x&&(o=o.filter(a=>a.vendedor===x)),m&&(o=o.filter(a=>{const r=(a.nombreCliente||"").toLowerCase(),c=(a.numeroHabitacion||"").toLowerCase(),f=(a.tipoTour||"").toLowerCase();return r.includes(m)||c.includes(m)||f.includes(m)})),b&&(o=o.filter(a=>{const r=a.fechaTour;if(!r)return!1;if(typeof r=="string")return r.split("T")[0]===s;if(r.toDate){const c=r.toDate();return`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`===s}return!1}));const d=o.length,p=Math.ceil(d/g);l>p&&p>0&&(l=p);const w=(l-1)*g,y=o.slice(w,w+g),$=H.user,S=y.map(a=>{const c=a.vendedor===$?.usuario?`
        <button class="smw_hist_btn smw_hbtn_view" onclick="verDetalleVenta('${a.id}')" title="Ver Venta"><i class="fas fa-eye"></i></button>
        <button class="smw_hist_btn smw_hbtn_edit" onclick="editarVentaAccion('${a.id}')" title="Editar"><i class="fas fa-edit"></i></button>
        <button class="smw_hist_btn smw_hbtn_delete" onclick="eliminarVentaAccion('${a.id}')" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
      `:`
        <button class="smw_hist_btn smw_hbtn_view" onclick="verDetalleVenta('${a.id}')" title="Ver Detalle"><i class="fas fa-eye"></i></button>
      `,f=W(a.fechaTour),L=`<strong>${a.nombreCliente||"Sin nombre"}</strong>${a.numeroHabitacion?` <span class="smw_room_pill"><i class="fas fa-door-open"></i> ${a.numeroHabitacion}</span>`:""}`,N=T.find(R=>R.usuario===a.vendedor)?.imagen||"/smile.png",D=X(a.estadoPago),O=a.esVentaJulio?"Julio":a.esVentaSonia?"Sonia":a.esVentaExterna?"Externo":F(a.vendedor);return`
      <tr class="smw_row_anim">
        <td><span class="smw_date_span"><i class="far fa-calendar-alt"></i> ${f}</span></td>
        <td>
          <div class="smw_vendedor_cell">
            <img src="${N}" class="smw_avatar_table" alt="avatar">
            <span class="smw_vendedor_name">${F(a.vendedor)}</span>
          </div>
        </td>
        <td><span class="smw_tour_pill">${a.tipoTour}</span></td>
        <td><span class="smw_pax_pill"><i class="fas fa-users"></i> ${a.cantidadPax||1}</span></td>
        <td><div class="smw_cliente_cell">${L}</div></td>
        <td><strong class="smw_price_span">S/ ${parseFloat(a.importeTotal||0).toFixed(2)}</strong></td>
        <td>
          <span class="smw_status_badge ${D.cls}">
            <i class="fas fa-${D.icn}"></i> ${D.txt}
          </span>
        </td>
        <td><span class="smw_profit_span">S/ ${parseFloat(a.ganancia||0).toFixed(2)}</span></td>
        <td><span class="smw_reg_label"><i class="fas fa-clipboard-user"></i> ${O}</span></td>
        <td><span class="smw_points_pill"><i class="fas fa-star"></i> ${a.puntos||0}</span></td>
        <td><div class="smw_actions_cell">${c}</div></td>
      </tr>
    `}).join(""),V=n("#histSalesTableBody");S?V.html(S):V.html(`
      <tr>
        <td colspan="11" class="smw_empty_cell">
          <i class="fas fa-inbox"></i>
          <strong>No se encontraron registros de ventas</strong>
          <p>Prueba ajustando los filtros o seleccionando otro mes.</p>
        </td>
      </tr>
    `),q(p)}function q(i){const e=n("#histPagination");if(i<=1){e.html("");return}let t='<div class="smw_pagination">';l>1&&(t+=`<button class="smw_page_btn" onclick="histCambiarPagina(${l-1})"><i class="fas fa-chevron-left"></i></button>`);for(let s=1;s<=i;s++)t+=`<button class="smw_page_btn ${s===l?"active":""}" onclick="histCambiarPagina(${s})">${s}</button>`;l<i&&(t+=`<button class="smw_page_btn" onclick="histCambiarPagina(${l+1})"><i class="fas fa-chevron-right"></i></button>`),t+="</div>",e.html(t)}function W(i){if(!i)return"Sin fecha";let e=null;if(i.toDate)e=i.toDate();else if(typeof i=="string"){const t=i.split("T")[0].split("-");if(t.length===3)return`${t[2]}/${t[1]}/${t[0]}`;e=new Date(i)}else i.seconds&&(e=new Date(i.seconds*1e3));if(e&&!isNaN(e.getTime())){const t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${s}/${o}`}return"Sin fecha"}function X(i){return{pagado:{cls:"paid",icn:"check-circle",txt:"PAGADO"},cobrado:{cls:"paid",icn:"check-circle",txt:"PAGADO"},cobrar:{cls:"pending",icn:"clock",txt:"DEUDA"}}[i]||{cls:"pending",icn:"clock",txt:"DEUDA"}}function K(){const i=new Date,e=i.getFullYear(),t=i.getMonth(),s=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];return n.map(new Array(7),(o,d)=>{const p=d-3,w=t+p,y=e+Math.floor(w/12),$=(w%12+12)%12;return`<option value="${`${y}-${String($+1).padStart(2,"0")}`}"${p===0?" selected":""}>${s[$]} ${y}</option>`}).join("")}function I(i=5){return Array(i).fill(0).map(()=>`
    <tr class="smw_sk_row">
      <td><span class="smw_sk_el" style="width: 70px; height: 16px; border-radius: 4px;"></span></td>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="smw_sk_el smw_sk_circle" style="width: 26px; height: 26px; border-radius: 50%;"></span>
          <span class="smw_sk_el" style="width: 75px; height: 16px; border-radius: 4px;"></span>
        </div>
      </td>
      <td><span class="smw_sk_el" style="width: 90px; height: 20px; border-radius: 10px;"></span></td>
      <td><span class="smw_sk_el" style="width: 30px; height: 16px; border-radius: 4px;"></span></td>
      <td><span class="smw_sk_el" style="width: 110px; height: 16px; border-radius: 4px;"></span></td>
      <td><span class="smw_sk_el" style="width: 60px; height: 18px; border-radius: 4px;"></span></td>
      <td><span class="smw_sk_el" style="width: 70px; height: 20px; border-radius: 6px;"></span></td>
      <td><span class="smw_sk_el" style="width: 55px; height: 16px; border-radius: 4px;"></span></td>
      <td><span class="smw_sk_el" style="width: 65px; height: 16px; border-radius: 4px;"></span></td>
      <td><span class="smw_sk_el" style="width: 30px; height: 16px; border-radius: 4px;"></span></td>
      <td>
        <div style="display: flex; gap: 6px; justify-content: center;">
          <span class="smw_sk_el" style="width: 24px; height: 24px; border-radius: 6px;"></span>
          <span class="smw_sk_el" style="width: 24px; height: 24px; border-radius: 6px;"></span>
        </div>
      </td>
    </tr>
  `).join("")}export{ot as cleanup,nt as init,it as render};
