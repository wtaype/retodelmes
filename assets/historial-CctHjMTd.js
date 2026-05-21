import{$ as n}from"./vendor-PbmUQHyn.js";import{db as M}from"./firebase-DmJttupn.js";import{i as E,r as U,c as C,D as Y,d as z,e as G}from"./firebase-BM1KOhEp.js";import{A as I,u as T,l as F,w as H,c as _,C as P}from"./index-DKQikmxs.js";import{getMesActual as J,invalidateRankingCaches as q}from"./zsmile-TFisWv2O.js";let f=[],g=[],$=J(),v="",y=!1,c=1,b=10,w="";const ot=()=>`
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
                ${Z()}
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
              ${N(b||5)}
            </tbody>
          </table>
        </div>

        <!-- Paginación -->
        <div class="smw_pagination_container" id="histPagination"></div>
      </section>

    </div>
  `,lt=async()=>{if(!I.user)return setTimeout(()=>T.navigate("/login"),100);c=1,v="",y=!1,w="",n("#selHistorialMes").val($),L(),await V(),W(),n(".wi_fadeUp").addClass("visible wi_visible"),window.__WIREADY__=!0},rt=()=>{n(document).off(".historial_events"),window.verDetalleVenta=null,window.editarVentaAccion=null,window.eliminarVentaAccion=null,window.histCambiarPagina=null};function W(e){n(document).off("change.historial_events","#selHistorialMes").on("change.historial_events","#selHistorialMes",async function(){$=n(this).val(),L(),c=1,await V()}),n(document).off("click.historial_events","#btnHistMesAnt").on("click.historial_events","#btnHistMesAnt",function(){const s=n("#selHistorialMes"),t=s.prop("selectedIndex");t<s.find("option").length-1&&s.prop("selectedIndex",t+1).trigger("change")}),n(document).off("click.historial_events","#btnHistMesSig").on("click.historial_events","#btnHistMesSig",function(){const s=n("#selHistorialMes"),t=s.prop("selectedIndex");t>0&&s.prop("selectedIndex",t-1).trigger("change")}),n(document).off("change.historial_events","#histFilterEmployee").on("change.historial_events","#histFilterEmployee",function(){v=n(this).val(),c=1,u()}),n(document).off("change.historial_events","#histLimtSelector").on("change.historial_events","#histLimtSelector",function(){b=parseInt(n(this).val()),c=1,u()}),n(document).off("input.historial_events","#histSearchInput").on("input.historial_events","#histSearchInput",function(){w=n(this).val().toLowerCase().trim(),c=1,u()}),n(document).off("click.historial_events","#btnFilterHoy").on("click.historial_events","#btnFilterHoy",function(){y=!y,n(this).toggleClass("active",y),c=1,u()}),window.histCambiarPagina=s=>{c=s,u()},window.verDetalleVenta=s=>{const t=f.find(i=>i.id===s);if(!t)return _("Venta no encontrada","error");window.editarVenta={venta:t,soloVista:!0},T.navigate("/registrar")},window.editarVentaAccion=s=>{const t=f.find(i=>i.id===s);if(!t)return _("Venta no encontrada","error");window.editarVenta={venta:t,soloVista:!1},T.navigate("/registrar")},window.eliminarVentaAccion=async s=>{const t=f.find(i=>i.id===s);if(!t)return _("Venta no encontrada","error");if(confirm(`¿Eliminar venta de "${t.nombreCliente}"?

Esta acción NO se puede deshacer.`)&&confirm(`⚠️ CONFIRMACIÓN FINAL

Se eliminará:
• ${t.nombreCliente}
• ${t.tipoTour}
• S/ ${t.importeTotal||0}

¿CONFIRMAS?`))try{_("Eliminando registro...","info"),await z(G(M,"registrosdb",s));const i=t.fechaTour;let l=$;if(typeof i=="string"){const[o,r]=i.split("-");l=`${o}-${r}`}else if(i?.toDate){const o=i.toDate();l=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}q(t.vendedor,l),_("Venta eliminada exitosamente","success"),await V()}catch(i){console.error("Error al eliminar:",i),_("Error al eliminar el registro.","error")}}}function L(){const e=n("#selHistorialMes option:selected").text();n("#txtHistMesSeleccionado").text(e||$)}async function V(){try{let e=F("todosEmpleadosSmile"),s=F("todasVentasSmile");if(e&&s){g=e,f=s;const o=g.map(r=>`<option value="${r.usuario}">${r.nombre||r.usuario}</option>`).join("");n("#histFilterEmployee").html(`<option value="">Todos los vendedores</option>${o}`).val(v),u();return}n("#histSalesTableBody").html(N(b||5));const[t,i]=await Promise.all([E(U(C(M,"smiles"),Y("participa","==","si"))),E(C(M,"registrosdb"))]);g=t.docs.map(o=>({id:o.id,...o.data()})),f=i.docs.map(o=>({id:o.id,...o.data()})),f.sort((o,r)=>{const m=o.fechaTour?.toDate?o.fechaTour.toDate():new Date(o.fechaTour||0);return(r.fechaTour?.toDate?r.fechaTour.toDate():new Date(r.fechaTour||0))-m}),H("todosEmpleadosSmile",g,60),H("todasVentasSmile",f,5);const l=g.map(o=>`<option value="${o.usuario}">${o.nombre||o.usuario}</option>`).join("");n("#histFilterEmployee").html(`<option value="">Todos los vendedores</option>${l}`).val(v),u()}catch(e){console.error("Error en cargar todo:",e),n("#histSalesTableBody").html('<tr><td colspan="11" class="smw_error_cell"><i class="fas fa-exclamation-triangle"></i> Error al cargar datos</td></tr>')}}function u(){const[e,s]=$.split("-").map(Number),t=new Date,i=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;let l=f.filter(a=>{const d=a.fechaTour;if(!d)return!1;if(d.toDate){const p=d.toDate();return p.getFullYear()===e&&p.getMonth()+1===s}if(typeof d=="string"){const[p,h]=d.split("-").map(Number);return p===e&&h===s}return!1});v&&(l=l.filter(a=>a.vendedor===v)),w&&(l=l.filter(a=>{const d=(a.nombreCliente||"").toLowerCase(),p=(a.numeroHabitacion||"").toLowerCase(),h=(a.tipoTour||"").toLowerCase();return d.includes(w)||p.includes(w)||h.includes(w)})),y&&(l=l.filter(a=>{const d=a.fechaTour;if(!d)return!1;if(typeof d=="string")return d.split("T")[0]===i;if(d.toDate){const p=d.toDate();return`${p.getFullYear()}-${String(p.getMonth()+1).padStart(2,"0")}-${String(p.getDate()).padStart(2,"0")}`===i}return!1}));const o=l.length,r=Math.ceil(o/b);c>r&&r>0&&(c=r);const m=(c-1)*b,x=l.slice(m,m+b),S=I.user,D=x.map(a=>{const p=a.vendedor===S?.usuario?`
        <button class="smw_hist_btn smw_hbtn_view" onclick="verDetalleVenta('${a.id}')" title="Ver Venta"><i class="fas fa-eye"></i></button>
        <button class="smw_hist_btn smw_hbtn_edit" onclick="editarVentaAccion('${a.id}')" title="Editar"><i class="fas fa-edit"></i></button>
        <button class="smw_hist_btn smw_hbtn_delete" onclick="eliminarVentaAccion('${a.id}')" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
      `:`
        <button class="smw_hist_btn smw_hbtn_view" onclick="verDetalleVenta('${a.id}')" title="Ver Detalle"><i class="fas fa-eye"></i></button>
      `,h=K(a.fechaTour),O=`<strong>${a.nombreCliente||"Sin nombre"}</strong>${a.numeroHabitacion?` <span class="smw_room_pill"><i class="fas fa-door-open"></i> ${a.numeroHabitacion}</span>`:""}`,R=g.find(j=>j.usuario===a.vendedor)?.imagen||"/smile.png",A=Q(a.estadoPago),B=a.esVentaJulio?"Julio":a.esVentaSonia?"Sonia":a.esVentaExterna?"Externo":P(a.vendedor);return`
      <tr class="smw_row_anim">
        <td><span class="smw_date_span"><i class="far fa-calendar-alt"></i> ${h}</span></td>
        <td>
          <div class="smw_vendedor_cell">
            <img src="${R}" class="smw_avatar_table" alt="avatar">
            <span class="smw_vendedor_name">${P(a.vendedor)}</span>
          </div>
        </td>
        <td><span class="smw_tour_pill">${a.tipoTour}</span></td>
        <td><span class="smw_pax_pill"><i class="fas fa-users"></i> ${a.cantidadPax||1}</span></td>
        <td><div class="smw_cliente_cell">${O}</div></td>
        <td><strong class="smw_price_span">S/ ${parseFloat(a.importeTotal||0).toFixed(2)}</strong></td>
        <td>
          <span class="smw_status_badge ${A.cls}">
            <i class="fas fa-${A.icn}"></i> ${A.txt}
          </span>
        </td>
        <td><span class="smw_profit_span">S/ ${parseFloat(a.ganancia||0).toFixed(2)}</span></td>
        <td><span class="smw_reg_label"><i class="fas fa-clipboard-user"></i> ${B}</span></td>
        <td><span class="smw_points_pill"><i class="fas fa-star"></i> ${a.puntos||0}</span></td>
        <td><div class="smw_actions_cell">${p}</div></td>
      </tr>
    `}).join(""),k=n("#histSalesTableBody");D?k.html(D):k.html(`
      <tr>
        <td colspan="11" class="smw_empty_cell">
          <i class="fas fa-inbox"></i>
          <strong>No se encontraron registros de ventas</strong>
          <p>Prueba ajustando los filtros o seleccionando otro mes.</p>
        </td>
      </tr>
    `),X(r)}function X(e){const s=n("#histPagination");if(e<=1){s.html("");return}let t='<div class="smw_pagination">';c>1&&(t+=`<button class="smw_page_btn" onclick="histCambiarPagina(${c-1})"><i class="fas fa-chevron-left"></i></button>`);for(let i=1;i<=e;i++)t+=`<button class="smw_page_btn ${i===c?"active":""}" onclick="histCambiarPagina(${i})">${i}</button>`;c<e&&(t+=`<button class="smw_page_btn" onclick="histCambiarPagina(${c+1})"><i class="fas fa-chevron-right"></i></button>`),t+="</div>",s.html(t)}function K(e){if(!e)return"Sin fecha";let s=null;if(e.toDate)s=e.toDate();else if(typeof e=="string"){const t=e.split("T")[0].split("-");if(t.length===3)return`${t[2]}/${t[1]}/${t[0]}`;s=new Date(e)}else e.seconds&&(s=new Date(e.seconds*1e3));if(s&&!isNaN(s.getTime())){const t=String(s.getDate()).padStart(2,"0"),i=String(s.getMonth()+1).padStart(2,"0"),l=s.getFullYear();return`${t}/${i}/${l}`}return"Sin fecha"}function Q(e){return{pagado:{cls:"paid",icn:"check-circle",txt:"PAGADO"},cobrado:{cls:"paid",icn:"check-circle",txt:"PAGADO"},cobrar:{cls:"pending",icn:"clock",txt:"DEUDA"}}[e]||{cls:"pending",icn:"clock",txt:"DEUDA"}}function Z(){const e=new Date,s=e.getFullYear(),t=e.getMonth(),i=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];return n.map(new Array(7),(l,o)=>{const r=o-3,m=t+r,x=s+Math.floor(m/12),S=(m%12+12)%12;return`<option value="${`${x}-${String(S+1).padStart(2,"0")}`}"${r===0?" selected":""}>${i[S]} ${x}</option>`}).join("")}function N(e=5){return Array(e).fill(0).map(()=>`
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
  `).join("")}export{rt as cleanup,lt as init,ot as render};
