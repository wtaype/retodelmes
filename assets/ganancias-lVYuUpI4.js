import{r as e}from"./vendor-CZ6bxb2j.js";import{C as t,f as n,h as r,i,m as a,n as o,t as s,v as c}from"./widev-BkR2Na_W.js";import{r as l}from"./index-DKV-3SlD.js";import{A as u,E as d,N as f,O as p,_ as m}from"./firebase-BXqel3Di.js";import{n as h}from"./firebase-Cc-Gk9nK.js";import{getMesActual as g}from"./zsmile-DFnR68aQ.js";var _=[],v=[],y=g(),b=null,x=``,S=!1,C=n(`configComisiones`)||{},w=e=>[`pagado`,`pagado2`,`caja`].includes(e);function T(e){if(!e)return null;if(typeof e==`string`){let t=e.trim().split(`-`);if(t.length>=2)return{yr:parseInt(t[0]),mm:parseInt(t[1])}}else if(typeof e.toDate==`function`){let t=e.toDate();return{yr:t.getFullYear(),mm:t.getMonth()+1}}else if(e.seconds!==void 0){let t=new Date(e.seconds*1e3);return{yr:t.getFullYear(),mm:t.getMonth()+1}}return null}var E=(e,t)=>{if(!e||!t)return!1;let n=e.toLowerCase().trim(),r=(t.usuario||``).toLowerCase().trim(),i=`${t.nombre||``} ${t.apellidos||``}`.toLowerCase().trim(),a=(t.nombre||``).toLowerCase().trim();return n===r||n===i||n===a},D=e=>((e.nombre||``)+` `+(e.apellidos||``)||e.usuario||`?`).trim().split(/\s+/).slice(0,2).map(e=>(e[0]||``).toUpperCase()).join(``),O=(e,t=42)=>{if(e.imagen)return`<div class="gan_avatar" style="width:${t}px;height:${t}px"><img class="gan_avatar_img" src="${e.imagen}" alt="${s(e.nombre||e.usuario||`?`)}" loading="lazy"/></div>`;let n=D(e);return`<div class="gan_avatar gan_avatar_initials" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.36)}px">${n}</div>`};function k(){let t=new Date,n=t.getFullYear(),r=t.getMonth(),i=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];return e.map(Array(7),(e,t)=>{let a=t-3,o=r+a,s=n+Math.floor(o/12),c=(o%12+12)%12;return`<option value="${`${s}-${String(c+1).padStart(2,`0`)}`}"${a===0?` selected`:``}>${i[c]} ${s}</option>`}).join(``)}var A=()=>`
    <div class="gan_wrap">
      
      <!-- ══ HEADER CARD ══ -->
      <div class="gan_header_card" id="ganHeaderCard">
        <div class="gan_header_card_stripe"></div>
        <div class="gan_header_inner">
          <div class="gan_header_text">
            <h1 class="gan_title">
              <i class="fas fa-wallet"></i>
              Ganancias y Comisiones
            </h1>
            <p class="gan_subtitle">Calcula ventas y gestiona la liquidación de comisiones del mes</p>
          </div>
          
          <div class="gan_header_actions">
            <!-- Botón de actualización manual -->
            <button class="gan_refresh_btn" id="btnRefreshGanancias" title="Actualizar Datos">
              <i class="fas fa-sync-alt"></i>
            </button>
            <!-- Selector de Mes -->
            <div class="gan_month_selector_wrap">
              <button class="gan_month_nav_btn" id="btnGanMesAnt" title="Mes Anterior">
                <i class="fas fa-chevron-left"></i>
              </button>
              <div class="gan_month_display">
                <i class="fas fa-calendar-alt"></i>
                <span id="txtGanMesSeleccionado">...</span>
              </div>
              <select id="selGanMes" class="gan_month_hidden_select_header">
                ${k()}
              </select>
              <button class="gan_month_nav_btn" id="btnGanMesSig" title="Mes Siguiente">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ KPIs GLOBALES (MES) ══ -->
      <div class="gan_stats_bar">
        <div class="gan_stat_card">
          <div class="gan_stat_ico" style="--c: 16, 185, 129"><i class="fas fa-hand-holding-dollar"></i></div>
          <div class="gan_stat_data">
            <span class="gan_stat_label">Ventas Cobradas (Mes)</span>
            <strong class="gan_stat_num" id="kpiGlobalVentas">S/ 0.00</strong>
          </div>
        </div>
        <div class="gan_stat_card">
          <div class="gan_stat_ico" style="--c: 14, 165, 233"><i class="fas fa-piggy-bank"></i></div>
          <div class="gan_stat_data">
            <span class="gan_stat_label">Ganancia Empresa (Mes)</span>
            <strong class="gan_stat_num" id="kpiGlobalGanancia">S/ 0.00</strong>
          </div>
        </div>
        <div class="gan_stat_card">
          <div class="gan_stat_ico" style="--c: 245, 158, 11"><i class="fas fa-calculator"></i></div>
          <div class="gan_stat_data">
            <span class="gan_stat_label">Comisiones Totales</span>
            <strong class="gan_stat_num" id="kpiGlobalComisiones">S/ 0.00</strong>
          </div>
        </div>
        <div class="gan_stat_card">
          <div class="gan_stat_ico" style="--c: 124, 58, 237"><i class="fas fa-square-check"></i></div>
          <div class="gan_stat_data">
            <span class="gan_stat_label">Comisiones Pagadas</span>
            <strong class="gan_stat_num" id="kpiGlobalPagado">S/ 0.00</strong>
          </div>
        </div>
      </div>

      <!-- ══ MAIN GRID (MASTER-DETAIL) ══ -->
      <div class="gan_grid">
        
        <!-- COLUMNA IZQUIERDA: LISTA COLABORADORES -->
        <aside class="gan_sidebar">
          <h3 class="gan_sidebar_title">
            <i class="fas fa-users"></i>
            Colaboradores
          </h3>
          <div style="position:relative; margin-bottom: 0.85rem;">
            <input 
              type="text" 
              id="searchVendedor" 
              class="prec_td_input" 
              style="width:100%; box-sizing:border-box; padding-left:32px; border-radius:1vh;" 
              placeholder="Buscar colaborador..."
            />
            <i class="fas fa-search" style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--tx3, #888); font-size:0.8rem;"></i>
          </div>
          <div class="gan_workers_list" id="workersListContainer">
            <!-- Cargando trabajadores... -->
            <div style="text-align:center; padding: 2rem; color: var(--tx3,#888);">
              <i class="fas fa-circle-notch fa-spin"></i> Cargando...
            </div>
          </div>
        </aside>

        <!-- COLUMNA DERECHA: DETALLE Y LIQUIDACION -->
        <main class="gan_detail_panel" id="detailPanelContainer">
          <div class="gan_empty_state">
            <i class="fas fa-wallet"></i>
            <h2>Comisiones del Colaborador</h2>
            <p>Selecciona un colaborador de la lista izquierda para ver y liquidar sus comisiones mensuales.</p>
          </div>
        </main>

      </div>

    </div>
  `,j=async()=>{if(!c.user)return setTimeout(()=>l.navigate(`/login`),100);S=!1,b=null,x=``,y=g(),e(`#selGanMes`).val(y),P(),e(`.gan_wrap`).addClass(`visible`),await F(),N(),window.__WIREADY__=!0},M=()=>{e(document).off(`.ganancias_events`)};function N(){e(document).off(`click.ganancias_events`,`#btnRefreshGanancias`).on(`click.ganancias_events`,`#btnRefreshGanancias`,async function(){await F(!0)}),e(document).off(`change.ganancias_events`,`#selGanMes`).on(`change.ganancias_events`,`#selGanMes`,async function(){y=e(this).val(),P(),b=null,await F()}),e(document).off(`click.ganancias_events`,`#btnGanMesAnt`).on(`click.ganancias_events`,`#btnGanMesAnt`,function(){let t=e(`#selGanMes`),n=t.prop(`selectedIndex`);n<t.find(`option`).length-1&&t.prop(`selectedIndex`,n+1).trigger(`change`)}),e(document).off(`click.ganancias_events`,`#btnGanMesSig`).on(`click.ganancias_events`,`#btnGanMesSig`,function(){let t=e(`#selGanMes`),n=t.prop(`selectedIndex`);n>0&&t.prop(`selectedIndex`,n-1).trigger(`change`)}),e(document).off(`input.ganancias_events`,`#searchVendedor`).on(`input.ganancias_events`,`#searchVendedor`,function(){x=e(this).val().toLowerCase().trim(),R()}),e(document).off(`click.ganancias_events`,`.gan_worker_card`).on(`click.ganancias_events`,`.gan_worker_card`,function(){b=e(this).data(`id`),e(`.gan_worker_card`).removeClass(`active`),e(this).addClass(`active`),z()}),e(document).off(`input.ganancias_events`,`#ganPctInput`).on(`input.ganancias_events`,`#ganPctInput`,function(){if(!b)return;let t=parseFloat(e(this).val());(isNaN(t)||t<0)&&(t=0),t>100&&(t=100),C[b]||(C[b]={pct:10,base:`neto`}),C[b].pct=t,r(`configComisiones`,C),I(),L(),B(),V()}),e(document).off(`click.ganancias_events`,`.gan_calc_btn`).on(`click.ganancias_events`,`.gan_calc_btn`,function(){if(!b)return;let t=e(this).data(`base`);e(`.gan_calc_btn`).removeClass(`active`),e(this).addClass(`active`),C[b]||(C[b]={pct:10,base:`neto`}),C[b].base=t,r(`configComisiones`,C),I(),L(),B(),V()}),e(document).off(`click.ganancias_events`,`#btnLiquidarComisiones`).on(`click.ganancias_events`,`#btnLiquidarComisiones`,async function(){if(!b)return;let n=v.find(e=>e.usuario===b),r=o((n?.nombre||``)+` `+(n?.apellidos||``)).trim()||b,[a,s]=y.split(`-`).map(Number),c=_.filter(e=>{if(!E(e.vendedor,n)||!w(e.estadoPago))return!1;let t=T(e.fechaTour);return t?t.yr===a&&t.mm===s:!1}).filter(e=>!e.comisionPagada);if(!c.length)return i(`No hay comisiones pendientes para liquidar.`,`warning`);if(!confirm(`¿Estás seguro de liquidar las comisiones de ${r} para el mes ${y}?\nSe pagarán ${c.length} ventas.`))return;let l=e(this);t(l[0],!0,`Liquidando...`);try{let e=d(h);c.forEach(t=>{let n=u(h,`registrosdb`,t.idVenta||t.id);e.update(n,{comisionPagada:!0,comisionMontoPagado:parseFloat(t.comisionCalculada),comisionFechaPago:f()})}),await e.commit(),i(`Comisiones de ${r} liquidadas ✅`,`success`),await F(!0)}catch(e){console.error(`Error al liquidar comisiones:`,e),i(`Error al registrar la liquidación.`,`error`)}finally{t(l[0],!1)}})}function P(){let t=e(`#selGanMes option:selected`).text();e(`#txtGanMesSeleccionado`).text(t||y)}async function F(t=!1){if(S)return;S=!0;let n=e(`#ganHeaderCard`),r=e(`#btnRefreshGanancias`);n.addClass(`smw_loading`),r.addClass(`spinning`);try{t&&(a(`todosEmpleadosSmile`),a(`todasVentasSmile`));let[e,n]=await Promise.all([m(p(h,`smiles`)),m(p(h,`registrosdb`))]);v=e.docs.map(e=>({id:e.id,...e.data()})).filter(e=>e.participa===`si`),v.sort((e,t)=>(e.nombre||e.usuario||``).localeCompare(t.nombre||t.usuario||``,`es`)),_=n.docs.map(e=>({id:e.id,...e.data()})),I(),R(),L(),b&&z()}catch(e){console.error(`Error al cargar datos de ganancias:`,e),i(`Error al cargar los registros.`,`error`)}finally{S=!1,n.removeClass(`smw_loading`),r.removeClass(`spinning`)}}function I(){_.forEach(e=>{let t=v.find(t=>E(e.vendedor,t)),n=C[t?t.usuario:e.vendedor]||{pct:10,base:`neto`},r=parseFloat(n.pct)||10,i=(n.base||`neto`)===`neto`?parseFloat(e.ganancia)||0:parseFloat(e.importeTotal)||0;e.comisionPagada?e.comisionCalculada=parseFloat(e.comisionMontoPagado)||0:e.comisionCalculada=r/100*i})}function L(){let[t,n]=y.split(`-`).map(Number),r=_.filter(e=>{let r=T(e.fechaTour);return!r||!v.find(t=>E(e.vendedor,t))?!1:r.yr===t&&r.mm===n}),i=0,a=0,o=0,s=0;r.forEach(e=>{w(e.estadoPago)&&(i+=parseFloat(e.importeTotal)||0,a+=parseFloat(e.ganancia)||0,o+=e.comisionCalculada,e.comisionPagada&&(s+=e.comisionCalculada))}),e(`#kpiGlobalVentas`).text(`S/ ${i.toFixed(2)}`),e(`#kpiGlobalGanancia`).text(`S/ ${a.toFixed(2)}`),e(`#kpiGlobalComisiones`).text(`S/ ${o.toFixed(2)}`),e(`#kpiGlobalPagado`).text(`S/ ${s.toFixed(2)}`)}function R(){let[t,n]=y.split(`-`).map(Number),r=v.filter(e=>!(x&&!`${e.nombre} ${e.apellidos} ${e.usuario}`.toLowerCase().includes(x)));if(!r.length){e(`#workersListContainer`).html(`
      <div style="text-align:center; padding: 2rem; color: var(--tx3,#888); font-size: 0.82rem;">
        <i class="fas fa-user-slash" style="font-size:1.5rem; margin-bottom:0.5rem; display:block;"></i>
        Sin resultados
      </div>
    `);return}let i=r.map(e=>{let r=_.filter(r=>{if(!E(r.vendedor,e))return!1;let i=T(r.fechaTour);return i?i.yr===t&&i.mm===n:!1}),i=0,a=!1,s=!1;r.forEach(e=>{w(e.estadoPago)&&(s=!0,i+=e.comisionCalculada,e.comisionPagada||(a=!0))});let c=e.usuario===b,l=a?`pendiente`:`pagado`,u=a?`Pendiente`:`Pagado`,d=o((e.nombre||``)+` `+(e.apellidos||``)).trim()||e.usuario;return`
      <div class="gan_worker_card ${c?`active`:``}" data-id="${e.usuario}">
        ${O(e,40)}
        <div class="gan_worker_info">
          <span class="gan_worker_name">${d}</span>
          <span class="gan_worker_sub">Comisión: S/ ${i.toFixed(2)}</span>
        </div>
        ${s?`<span class="gan_worker_badge ${l}">${u}</span>`:``}
      </div>
    `}).join(``);e(`#workersListContainer`).html(i)}function z(){if(!b)return;let t=v.find(e=>e.usuario===b);if(!t)return;let n=o((t.nombre||``)+` `+(t.apellidos||``)).trim()||t.usuario,r=C[b]||{pct:10,base:`neto`},i=r.pct??10,a=r.base??`neto`;t.banco,t.numeroCuenta,t.titularCuenta;let s=`
    <!-- Header del trabajador -->
    <div class="gan_colab_header_card">
      <div class="gan_colab_profile">
        ${O(t,48)}
        <div class="gan_colab_names">
          <h2 class="gan_colab_name">${n}</h2>
          <span class="gan_colab_username">@${t.usuario} · ${t.email||`Sin correo`}</span>
        </div>
      </div>
      <button class="gan_btn_liquidar" id="btnLiquidarComisiones">
        <i class="fas fa-check-double"></i> Liquidar Comisiones
      </button>
    </div>

    <!-- Configuración de Comisión (Fila Única) -->
    <div class="gan_config_card">
      <div style="display:flex; align-items:center; gap:0.5rem; font-weight:700; color:var(--tx,#111); font-size:0.9rem;">
        <i class="fas fa-sliders-h" style="color:var(--mco,#f59e0b);"></i>
        Configuración de Comisión:
      </div>
      <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;">
        <div class="gan_config_item" style="display:flex; align-items:center; gap:0.6rem;">
          <span class="gan_config_label">Porcentaje:</span>
          <div class="gan_input_pct_wrap">
            <input type="number" id="ganPctInput" class="gan_pct_input" min="0" max="100" value="${i}" />
            <span class="gan_pct_symbol">%</span>
          </div>
        </div>
        <div class="gan_config_item" style="display:flex; align-items:center; gap:0.6rem;">
          <span class="gan_config_label">Calcular sobre:</span>
          <div class="gan_calc_toggle_group">
            <button class="gan_calc_btn ${a===`neto`?`active`:``}" data-base="neto">Ganancia Neta</button>
            <button class="gan_calc_btn ${a===`bruto`?`active`:``}" data-base="bruto">Total Bruto</button>
          </div>
        </div>
      </div>
    </div>

    <!-- KPIs Personales -->
    <div class="gan_colab_kpis">
      <div class="gan_colab_kpi_card">
        <span class="gan_colab_kpi_label">Ventas (Total Bruto)</span>
        <strong class="gan_colab_kpi_num" id="kpiColabVentas">S/ 0.00</strong>
      </div>
      <div class="gan_colab_kpi_card">
        <span class="gan_colab_kpi_label">Ganancia Empresa</span>
        <strong class="gan_colab_kpi_num" id="kpiColabNeto">S/ 0.00</strong>
      </div>
      <div class="gan_colab_kpi_card">
        <span class="gan_colab_kpi_label">Comisión para trabajador</span>
        <strong class="gan_colab_kpi_num highlight" id="kpiColabComision">S/ 0.00</strong>
      </div>
    </div>

    <!-- Tabla de Ventas -->
    <div class="gan_table_card">
      <div class="gan_table_title">
        <i class="fas fa-list-check"></i>
        Ventas del colaborador
      </div>
      <div class="gan_table_responsive">
        <table class="gan_table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Tour</th>
              <th>PAX</th>
              <th>Total Venta (Bruto)</th>
              <th>Ganancia Neta</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody id="ganColabTableBody">
            <!-- Ventas renderizadas dinámicamente -->
          </tbody>
        </table>
      </div>
    </div>
  `;e(`#detailPanelContainer`).html(s),B(),V()}function B(){if(!b)return;let[t,n]=y.split(`-`).map(Number),r=v.find(e=>e.usuario===b),i=_.filter(e=>{if(!E(e.vendedor,r))return!1;let i=T(e.fechaTour);return i?i.yr===t&&i.mm===n:!1}),a=0,o=0,s=0,c=!1;i.forEach(e=>{w(e.estadoPago)&&(a+=parseFloat(e.importeTotal)||0,o+=parseFloat(e.ganancia)||0,s+=e.comisionCalculada,e.comisionPagada||(c=!0))}),e(`#kpiColabVentas`).text(`S/ ${a.toFixed(2)}`),e(`#kpiColabNeto`).text(`S/ ${o.toFixed(2)}`),e(`#kpiColabComision`).text(`S/ ${s.toFixed(2)}`);let l=e(`#btnLiquidarComisiones`);s>0&&c?l.prop(`disabled`,!1):l.prop(`disabled`,!0)}function V(){if(!b)return;let[t,n]=y.split(`-`).map(Number),r=v.find(e=>e.usuario===b),i=_.filter(e=>{if(!E(e.vendedor,r))return!1;let i=T(e.fechaTour);return i?i.yr===t&&i.mm===n:!1});if(!i.length){e(`#ganColabTableBody`).html(`
      <tr>
        <td colspan="8" style="text-align:center; padding:3rem; color:var(--tx3,#888);">
          <i class="fas fa-receipt" style="font-size:2rem; margin-bottom:0.5rem; display:block;"></i>
          No hay ventas registradas para este colaborador en el mes seleccionado.
        </td>
      </tr>
    `);return}i.sort((e,t)=>{let n=e.fechaTour?.toDate?e.fechaTour.toDate():new Date(e.fechaTour||0);return(t.fechaTour?.toDate?t.fechaTour.toDate():new Date(t.fechaTour||0))-n});let a=i.map(e=>{let t=e.fechaTour,n=`—`;if(typeof t==`string`)n=t;else if(t?.toDate){let e=t.toDate();n=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}let r,i,a,s=``;return w(e.estadoPago)?(r=e.comisionPagada?`pagado`:`pendiente`,i=e.comisionPagada?`Pagado`:`Pendiente`,a=e.comisionPagada?`fa-check-circle`:`fa-clock`,`${e.comisionCalculada.toFixed(2)}`):(r=`pendiente`,i=`Debe`,a=`fa-exclamation-circle`,s=`style="background: rgba(239, 68, 68, 0.1); color: #EF4444;"`),`
      <tr>
        <td><strong>${n}</strong></td>
        <td>${o(e.nombreCliente||`—`)}</td>
        <td><span class="smw_rol_badge rrhh_rol_smile" style="background:#f1f5f9; color:#475569; border: 1px solid #cbd5e1;">${e.tipoTour||`Tour`}</span></td>
        <td><strong style="font-family:var(--ff_O);">${e.cantidadPax||e.pax||1}</strong></td>
        <td>S/ ${(parseFloat(e.importeTotal)||0).toFixed(2)}</td>
        <td>S/ ${(parseFloat(e.ganancia)||0).toFixed(2)}</td>
        <td>
          <span class="gan_badge ${r}" ${s}>
            <i class="fas ${a}"></i> ${i}
          </span>
        </td>
      </tr>
    `}).join(``);e(`#ganColabTableBody`).html(a)}export{M as cleanup,j as init,A as render};