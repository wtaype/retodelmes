import{r as e}from"./vendor-CZ6bxb2j.js";import{C as t,c as n,f as r,h as i,i as a,m as o,o as s,t as c,v as l}from"./widev-BkR2Na_W.js";import{r as u}from"./index-DKV-3SlD.js";import{A as d,O as f,T as p,_ as m,m as h,x as g}from"./firebase-BXqel3Di.js";import{n as _}from"./firebase-Cc-Gk9nK.js";import{getMesActual as v,invalidateRankingCaches as y}from"./zsmile-DFnR68aQ.js";var b=[],x=[],S=v(),C=``,w=!1,T=1,E=9,D=``,O=null,k=()=>`
    <div class="smw_hist_view">
      
      <!-- CABECERA: Título y Selector de Mes -->
      <header class="smw_hist_header wi_fadeUp">
        <div class="smw_hist_title_row">
          <h1><i class="fas fa-clipboard-list smw_cielo_glow"></i> Historial de Ventas</h1>
          <p class="smw_hist_subtitle">Monitorea y gestiona los registros mensuales</p>
        </div>

        <div class="smw_hist_controls">
          <!-- Botón de actualización manual -->
          <button class="smw_refresh_btn" id="btnRefreshHistorial" title="Actualizar Historial" style="margin-right: 1.5vh;">
            <i class="fas fa-sync-alt"></i>
          </button>
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
              ${B()}
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
              ${V(9)}
            </tbody>
          </table>
        </div>

        <!-- Paginación -->
        <div class="smw_pagination_container" id="histPagination"></div>
      </section>

      <!-- MODAL DE CONFIRMACIÓN DE ELIMINACIÓN -->
      <div id="modalConfirmarEliminacion" class="wiModal">
        <div class="modalBody smw_del_modal_body">
          <button class="modalX" id="btnCancelDelX">&times;</button>
          <div class="smw_del_modal_icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <h3>¿Eliminar venta?</h3>
          <p class="smw_del_modal_desc">Esta acción no se puede deshacer. Por favor confirma los detalles del registro:</p>
          
          <div class="smw_del_modal_details">
            <div class="smw_del_detail_row">
              <span class="smw_del_detail_label">Cliente:</span>
              <span class="smw_del_detail_val" id="txtDelCliente">...</span>
            </div>
            <div class="smw_del_detail_row">
              <span class="smw_del_detail_label">Tour:</span>
              <span class="smw_del_detail_val" id="txtDelTour">...</span>
            </div>
            <div class="smw_del_detail_row">
              <span class="smw_del_detail_label">Importe:</span>
              <span class="smw_del_detail_val" id="txtDelImporte">...</span>
            </div>
          </div>

          <div class="smw_del_modal_acts">
            <button class="smw_del_btn smw_del_btn_cancel" id="btnCancelDelVenta">
              <i class="fas fa-times"></i> Cancelar
            </button>
            <button class="smw_del_btn smw_del_btn_confirm" id="btnConfirmDelVenta">
              <i class="fas fa-trash-alt"></i> Confirmar
            </button>
          </div>
        </div>
      </div>

    </div>
  `,A=async()=>{let t=l.user;if(!t)return setTimeout(()=>u.navigate(`/login`),100);T=1,C=``,w=!1,D=``,e(`#selHistorialMes`).val(S),N(),e(`.wi_fadeUp`).addClass(`visible wi_visible`),P(),M(t),window.__WIREADY__=!0},j=()=>{e(document).off(`.historial_events`),window.verDetalleVenta=null,window.editarVentaAccion=null,window.eliminarVentaAccion=null,window.histCambiarPagina=null};function M(r){e(document).off(`click.historial_events`,`#btnRefreshHistorial`).on(`click.historial_events`,`#btnRefreshHistorial`,async function(){await P(!0)}),e(document).off(`change.historial_events`,`#selHistorialMes`).on(`change.historial_events`,`#selHistorialMes`,async function(){S=e(this).val(),N(),T=1,await P()}),e(document).off(`click.historial_events`,`#btnHistMesAnt`).on(`click.historial_events`,`#btnHistMesAnt`,function(){let t=e(`#selHistorialMes`),n=t.prop(`selectedIndex`);n<t.find(`option`).length-1&&t.prop(`selectedIndex`,n+1).trigger(`change`)}),e(document).off(`click.historial_events`,`#btnHistMesSig`).on(`click.historial_events`,`#btnHistMesSig`,function(){let t=e(`#selHistorialMes`),n=t.prop(`selectedIndex`);n>0&&t.prop(`selectedIndex`,n-1).trigger(`change`)}),e(document).off(`change.historial_events`,`#histFilterEmployee`).on(`change.historial_events`,`#histFilterEmployee`,function(){C=e(this).val(),T=1,F()}),e(document).off(`change.historial_events`,`#histLimtSelector`).on(`change.historial_events`,`#histLimtSelector`,function(){E=parseInt(e(this).val()),T=1,F()}),e(document).off(`input.historial_events`,`#histSearchInput`).on(`input.historial_events`,`#histSearchInput`,function(){D=e(this).val().toLowerCase().trim(),T=1,F()}),e(document).off(`click.historial_events`,`#btnFilterHoy`).on(`click.historial_events`,`#btnFilterHoy`,function(){w=!w,e(this).toggleClass(`active`,w),T=1,F()}),window.histCambiarPagina=e=>{T=e,F()},window.verDetalleVenta=e=>{let t=b.find(t=>t.id===e);if(!t)return a(`Venta no encontrada`,`error`);let n={venta:t,soloVista:!0};window.editarVenta=n,i(`editarVentaTemp`,n,10),u.navigate(`/registrar`)},window.editarVentaAccion=e=>{let t=b.find(t=>t.id===e);if(!t)return a(`Venta no encontrada`,`error`);let n={venta:t,soloVista:!1};window.editarVenta=n,i(`editarVentaTemp`,n,10),u.navigate(`/registrar`)},e(document).off(`click.historial_events`,`#btnCancelDelVenta, #btnCancelDelX`).on(`click.historial_events`,`#btnCancelDelVenta, #btnCancelDelX`,function(){n(`modalConfirmarEliminacion`),O=null}),e(document).off(`click.historial_events`,`#btnConfirmDelVenta`).on(`click.historial_events`,`#btnConfirmDelVenta`,async function(){if(!O)return;let r=b.find(e=>e.id===O);if(!r){a(`Venta no encontrada`,`error`),n(`modalConfirmarEliminacion`);return}let i=e(this);t(i,!0,`Eliminando...`);try{await h(d(_,`registrosdb`,O));let e=r.fechaTour,t=S;if(typeof e==`string`){let[n,r]=e.split(`-`);t=`${n}-${r}`}else if(e?.toDate){let n=e.toDate();t=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}`}y(r.vendedor,t),a(`Venta eliminada exitosamente`,`success`),n(`modalConfirmarEliminacion`),O=null,await P()}catch(e){console.error(`Error al eliminar:`,e),a(`Error al eliminar el registro.`,`error`)}finally{t(i,!1,`Confirmar`)}}),window.eliminarVentaAccion=t=>{let n=b.find(e=>e.id===t);if(!n)return a(`Venta no encontrada`,`error`);O=t,e(`#txtDelCliente`).text((n.nombreCliente||``).toUpperCase()),e(`#txtDelTour`).text(n.tipoTour||`Sin tipo`),e(`#txtDelImporte`).text(`S/ ${parseFloat(n.importeTotal||0).toFixed(2)}`),s(`modalConfirmarEliminacion`)}}function N(){let t=e(`#selHistorialMes option:selected`).text();e(`#txtHistMesSeleccionado`).text(t||S)}async function P(t=!1){let n=e(`.smw_hist_header`),a=e(`#btnRefreshHistorial`);n.addClass(`smw_loading`),a.addClass(`spinning`);try{t&&(o(`todosEmpleadosSmile`),o(`todasVentasSmile`));let n=r(`todosEmpleadosSmile`),a=r(`todasVentasSmile`);if(n&&a){x=n,b=a;let t=x.map(e=>`<option value="${e.usuario}">${e.nombre||e.usuario}</option>`).join(``);e(`#histFilterEmployee`).html(`<option value="">Todos los vendedores</option>${t}`).val(C),F();return}e(`#histSalesTableBody`).html(V(E));let[s,c]=await Promise.all([m(g(f(_,`smiles`),p(`participa`,`==`,`si`))),m(f(_,`registrosdb`))]);x=s.docs.map(e=>({id:e.id,...e.data()})),b=c.docs.map(e=>({id:e.id,...e.data()})),b.sort((e,t)=>{let n=e.fechaTour?.toDate?e.fechaTour.toDate():new Date(e.fechaTour||0);return(t.fechaTour?.toDate?t.fechaTour.toDate():new Date(t.fechaTour||0))-n}),i(`todosEmpleadosSmile`,x,60),i(`todasVentasSmile`,b,5);let l=x.map(e=>`<option value="${e.usuario}">${e.nombre||e.usuario}</option>`).join(``);e(`#histFilterEmployee`).html(`<option value="">Todos los vendedores</option>${l}`).val(C),F()}catch(t){console.error(`Error en cargar todo:`,t),e(`#histSalesTableBody`).html(`<tr><td colspan="12" class="smw_error_cell"><i class="fas fa-exclamation-triangle"></i> Error al cargar datos</td></tr>`)}finally{n.removeClass(`smw_loading`),a.removeClass(`spinning`)}}function F(){let[t,n]=S.split(`-`).map(Number),r=new Date,i=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,`0`)}-${String(r.getDate()).padStart(2,`0`)}`,a=new Set(x.map(e=>e.usuario)),o=b.filter(e=>{if(!a.has(e.vendedor))return!1;let r=e.fechaTour;if(!r)return!1;if(r.toDate){let e=r.toDate();return e.getFullYear()===t&&e.getMonth()+1===n}if(typeof r==`string`){let[e,i]=r.split(`-`).map(Number);return e===t&&i===n}return!1});C&&(o=o.filter(e=>e.vendedor===C)),D&&(o=o.filter(e=>{let t=(e.nombreCliente||``).toLowerCase(),n=(e.numeroHabitacion||``).toLowerCase(),r=(e.tipoTour||``).toLowerCase();return t.includes(D)||n.includes(D)||r.includes(D)})),w&&(o=o.filter(e=>{let t=e.fechaTour;if(!t)return!1;if(typeof t==`string`)return t.split(`T`)[0]===i;if(t.toDate){let e=t.toDate();return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`===i}return!1}));let s=o.length,u=Math.ceil(s/E);T>u&&u>0&&(T=u);let d=(T-1)*E,f=o.slice(d,d+E),p=l.user,m=f.map(e=>{let t=e.vendedor===p?.usuario?`
        <button class="smw_hist_btn smw_hbtn_view"   onclick="verDetalleVenta('${e.id}')"   title="Ver Venta"><i class="fas fa-eye"></i></button>
        <button class="smw_hist_btn smw_hbtn_edit"   onclick="editarVentaAccion('${e.id}')" title="Editar"><i class="fas fa-edit"></i></button>
        <button class="smw_hist_btn smw_hbtn_delete" onclick="eliminarVentaAccion('${e.id}')" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
      `:`<button class="smw_hist_btn smw_hbtn_view" onclick="verDetalleVenta('${e.id}')" title="Ver Detalle"><i class="fas fa-eye"></i></button>`,n=R(e.fechaTour),r=x.find(t=>t.usuario===e.vendedor),i=r?.imagen||r?.avatar?r.imagen||r.avatar:`/smile.avif`,a=z(e.estadoPago,e.pagoOperadorSiNo),o=e.esVentaJulio?`Julio`:e.esVentaSonia?`Sonia`:e.esVentaExterna?`Externo`:c(e.vendedor),s=`
      <div class="smw_cliente_info">
        <span class="smw_cliente_name">${(e.nombreCliente||`Sin nombre`).toUpperCase()}</span>
        ${e.numeroHabitacion?`<span class="smw_room_pill"><i class="fas fa-door-open"></i> ${e.numeroHabitacion}</span>`:``}
      </div>
    `;return`
      <tr class="smw_row_anim">
        <td><span class="smw_date_span">${n}</span></td>
        <td>
          <div class="smw_vendedor_cell">
            <img src="${i}" class="smw_avatar_table" alt="avatar" onerror="this.src='/smile.avif'">
            <span class="smw_vendedor_name">${c(e.vendedor)}</span>
          </div>
        </td>
        <td><span class="smw_tour_pill">${e.tipoTour}</span></td>
        <td><span class="smw_pax_pill"><i class="fas fa-users"></i> ${e.cantidadPax||1}</span></td>
        <td><div class="smw_cliente_cell">${s}</div></td>
        <td><strong class="smw_price_span">S/ ${parseFloat(e.importeTotal||0).toFixed(2)}</strong></td>
        <td><span class="smw_unit_price">S/ ${parseFloat(e.precioUnitario||e.precio||0).toFixed(2)}</span></td>
        <td>
          <span class="smw_status_badge ${a.cls}">
            <span class="smw_status_dot"></span> ${a.txt}
          </span>
        </td>
        <td><span class="smw_profit_span">S/ ${parseFloat(e.ganancia||0).toFixed(2)}</span></td>
        <td><span class="smw_reg_label"><i class="fas fa-user"></i> ${o}</span></td>
        <td>
          <span class="smw_points_box">
            <i class="fas fa-star"></i> ${e.puntos||0}
          </span>
        </td>
        <td><div class="smw_actions_cell">${t}</div></td>
      </tr>
    `}).join(``),h=e(`#histSalesTableBody`);m?h.html(m):h.html(`
      <tr>
        <td colspan="12" class="smw_empty_cell">
          <i class="fas fa-inbox"></i>
          <strong>No se encontraron registros de ventas</strong>
          <p>Prueba ajustando los filtros o seleccionando otro mes.</p>
        </td>
      </tr>
    `),I(u)}function I(t){let n=e(`#histPagination`);if(t<=1){n.html(``);return}let r=`<div class="smw_pagination">`;T>1&&(r+=`<button class="smw_page_btn" onclick="histCambiarPagina(${T-1})"><i class="fas fa-chevron-left"></i></button>`),L(T,t).forEach(e=>{e===`...`?r+=`<span style="padding:0 0.5vh;color:var(--tx3);font-weight:700">…</span>`:r+=`<button class="smw_page_btn ${e===T?`active`:``}" onclick="histCambiarPagina(${e})">${e}</button>`}),T<t&&(r+=`<button class="smw_page_btn" onclick="histCambiarPagina(${T+1})"><i class="fas fa-chevron-right"></i></button>`),r+=`</div>`,n.html(r)}function L(e,t){return t<=7?Array.from({length:t},(e,t)=>t+1):e<=4?[1,2,3,4,5,`...`,t]:e>=t-3?[1,`...`,t-4,t-3,t-2,t-1,t]:[1,`...`,e-1,e,e+1,`...`,t]}function R(e){if(!e)return`Sin fecha`;if(e.toDate){let t=e.toDate();return`${String(t.getDate()).padStart(2,`0`)}/${String(t.getMonth()+1).padStart(2,`0`)}/${t.getFullYear()}`}if(typeof e==`string`){let t=e.split(`T`)[0].split(`-`);return t.length===3?`${t[2]}/${t[1]}/${t[0]}`:e}if(e.seconds){let t=new Date(e.seconds*1e3);return`${String(t.getDate()).padStart(2,`0`)}/${String(t.getMonth()+1).padStart(2,`0`)}/${t.getFullYear()}`}return`Sin fecha`}function z(e,t){return!(e===`pagado`||e===`pagado2`)&&t===`no`?{cls:`pending`,txt:`DEUDA`}:{pagado:{cls:`paid`,txt:`PAGADO`},cobrado:{cls:`paid`,txt:`PAGADO`},cobrar:{cls:`pending`,txt:`DEUDA`}}[e]||{cls:`pending`,txt:`DEUDA`}}function B(){let t=new Date,n=t.getFullYear(),r=t.getMonth(),i=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];return e.map(Array(7),(e,t)=>{let a=t-3,o=r+a,s=n+Math.floor(o/12),c=(o%12+12)%12;return`<option value="${`${s}-${String(c+1).padStart(2,`0`)}`}"${a===0?` selected`:``}>${i[c]} ${s}</option>`}).join(``)}function V(e=9){return Array(e).fill(0).map(()=>`
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
  `).join(``)}export{j as cleanup,A as init,k as render};