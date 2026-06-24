import './ganancias.css';
import $ from 'jquery';
import { db } from '../firebase.js';
import { collection, getDocs, doc, writeBatch, serverTimestamp } from 'firebase/firestore';
import { wiAuth, Notificacion, Capi, Capit, getls, savels, removels, wiSpin } from '../widev.js';
import { rutas } from '../rutas.js';
import { getMesActual, cargarTodosEmpleados } from '../smile/zsmile.js';

// ─── STATE ────────────────────────────────────────────────────────────────────
let todasLasVentas = [];
let todosLosEmpleados = [];
let mesSeleccionado = getMesActual();
let vendedorSeleccionado = null;
let busquedaFiltroVendedor = '';
let cargando = false;

// Configuración persistente de comisiones por trabajador
// Estructura: { [usuario]: { pct: 10, base: 'neto' } }
let configComisiones = getls('configComisiones') || {};

// ─── HELPERS DE VALIDACIÓN Y BUSQUEDA ROBUSTA ─────────────────────────────────

// Verifica si un estado de pago cuenta como cobrado (ingresó a caja)
const esCobrado = (estado) => ['pagado', 'pagado2', 'caja'].includes(estado);

// Obtiene año y mes de forma segura soportando strings, Timestamps y Timestamps serializados
function obtenerMesAnioDeFecha(f) {
  if (!f) return null;
  if (typeof f === 'string') {
    const parts = f.trim().split('-');
    if (parts.length >= 2) {
      return { yr: parseInt(parts[0]), mm: parseInt(parts[1]) };
    }
  } else if (typeof f.toDate === 'function') {
    const fd = f.toDate();
    return { yr: fd.getFullYear(), mm: fd.getMonth() + 1 };
  } else if (f.seconds !== undefined) {
    const fd = new Date(f.seconds * 1000);
    return { yr: fd.getFullYear(), mm: fd.getMonth() + 1 };
  }
  return null;
}

// Compara de forma tolerante el campo vendedor (nombre o usuario) de registrosdb con el empleado de smiles
const matchesVendedor = (vendedorField, emp) => {
  if (!vendedorField || !emp) return false;
  const vLower = vendedorField.toLowerCase().trim();
  const uLower = (emp.usuario || '').toLowerCase().trim();
  const nLower = `${emp.nombre || ''} ${emp.apellidos || ''}`.toLowerCase().trim();
  const nameOnlyLower = (emp.nombre || '').toLowerCase().trim();
  
  return vLower === uLower || vLower === nLower || vLower === nameOnlyLower;
};

const _initials = (u) =>
  ((u.nombre || '') + ' ' + (u.apellidos || '') || u.usuario || '?')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(w => (w[0] || '').toUpperCase())
    .join('');

const _avatar = (u, size = 42) => {
  if (u.imagen) {
    return `<div class="gan_avatar" style="width:${size}px;height:${size}px"><img class="gan_avatar_img" src="${u.imagen}" alt="${Capi(u.nombre || u.usuario || '?')}" loading="lazy"/></div>`;
  }
  const ini = _initials(u);
  return `<div class="gan_avatar gan_avatar_initials" style="width:${size}px;height:${size}px;font-size:${Math.round(size * 0.36)}px">${ini}</div>`;
};

// Generar selector de meses
function selectMes() {
  const hoy = new Date(), anio = hoy.getFullYear(), mes = hoy.getMonth();
  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  return $.map(new Array(7), (_, i) => {
    const cada = i - 3, des = mes + cada;
    const cyear = anio + Math.floor(des / 12);
    const mesv  = ((des % 12) + 12) % 12;
    const tval  = `${cyear}-${String(mesv + 1).padStart(2, '0')}`;
    return `<option value="${tval}"${cada === 0 ? ' selected' : ''}>${meses[mesv]} ${cyear}</option>`;
  }).join('');
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
export const render = () => {
  const mesesOptions = selectMes();
  return `
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
                ${mesesOptions}
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
  `;
};

// ─── INITIALIZATION ───────────────────────────────────────────────────────────
export const init = async () => {
  cargando = false;
  vendedorSeleccionado = null;
  busquedaFiltroVendedor = '';
  mesSeleccionado = getMesActual();

  $('#selGanMes').val(mesSeleccionado);
  _actualizarDisplayMes();

  $('.gan_wrap').addClass('visible');

  await _cargarTodo();
  _bindEvents();

  window.__WIREADY__ = true;
};

// Cleanup
export const cleanup = () => {
  $(document).off('.ganancias_events');
};

// ─── EVENTOS ──────────────────────────────────────────────────────────────────
function _bindEvents() {
  $(document).off('click.ganancias_events', '#btnRefreshGanancias')
    .on('click.ganancias_events', '#btnRefreshGanancias', async function() {
      await _cargarTodo(true);
    });

  $(document).off('change.ganancias_events', '#selGanMes')
    .on('change.ganancias_events', '#selGanMes', async function() {
      mesSeleccionado = $(this).val();
      _actualizarDisplayMes();
      vendedorSeleccionado = null; // reset selection
      await _cargarTodo();
    });

  $(document).off('click.ganancias_events', '#btnGanMesAnt')
    .on('click.ganancias_events', '#btnGanMesAnt', function() {
      const $sel = $('#selGanMes');
      const index = $sel.prop('selectedIndex');
      if (index < $sel.find('option').length - 1) {
        $sel.prop('selectedIndex', index + 1).trigger('change');
      }
    });

  $(document).off('click.ganancias_events', '#btnGanMesSig')
    .on('click.ganancias_events', '#btnGanMesSig', function() {
      const $sel = $('#selGanMes');
      const index = $sel.prop('selectedIndex');
      if (index > 0) {
        $sel.prop('selectedIndex', index - 1).trigger('change');
      }
    });

  // Buscador de colaboradores
  $(document).off('input.ganancias_events', '#searchVendedor')
    .on('input.ganancias_events', '#searchVendedor', function() {
      busquedaFiltroVendedor = $(this).val().toLowerCase().trim();
      _renderizarColaboradores();
    });

  // Seleccionar colaborador
  $(document).off('click.ganancias_events', '.gan_worker_card')
    .on('click.ganancias_events', '.gan_worker_card', function() {
      const id = $(this).data('id');
      vendedorSeleccionado = id;
      $('.gan_worker_card').removeClass('active');
      $(this).addClass('active');
      _renderizarDetalle();
    });

  // Cambiar porcentaje dinámicamente
  $(document).off('input.ganancias_events', '#ganPctInput')
    .on('input.ganancias_events', '#ganPctInput', function() {
      if (!vendedorSeleccionado) return;
      let val = parseFloat($(this).val());
      if (isNaN(val) || val < 0) val = 0;
      if (val > 100) val = 100;

      if (!configComisiones[vendedorSeleccionado]) {
        configComisiones[vendedorSeleccionado] = { pct: 10, base: 'neto' };
      }
      configComisiones[vendedorSeleccionado].pct = val;
      savels('configComisiones', configComisiones);

      _calcularMontos();
      _actualizarKpisGlobales();
      _actualizarKpisPersonales();
      _actualizarTablaDetalle();
    });

  // Cambiar base de cálculo (bruto vs neto)
  $(document).off('click.ganancias_events', '.gan_calc_btn')
    .on('click.ganancias_events', '.gan_calc_btn', function() {
      if (!vendedorSeleccionado) return;
      const base = $(this).data('base');

      $('.gan_calc_btn').removeClass('active');
      $(this).addClass('active');

      if (!configComisiones[vendedorSeleccionado]) {
        configComisiones[vendedorSeleccionado] = { pct: 10, base: 'neto' };
      }
      configComisiones[vendedorSeleccionado].base = base;
      savels('configComisiones', configComisiones);

      _calcularMontos();
      _actualizarKpisGlobales();
      _actualizarKpisPersonales();
      _actualizarTablaDetalle();
    });

  // Acción: Liquidar comisiones
  $(document).off('click.ganancias_events', '#btnLiquidarComisiones')
    .on('click.ganancias_events', '#btnLiquidarComisiones', async function() {
      if (!vendedorSeleccionado) return;

      const emp = todosLosEmpleados.find(e => e.usuario === vendedorSeleccionado);
      const empNombre = Capit((emp?.nombre || '') + ' ' + (emp?.apellidos || '')).trim() || vendedorSeleccionado;

      // Obtener ventas pendientes de este mes para el vendedor
      const [yr, mm] = mesSeleccionado.split('-').map(Number);
      const ventasColab = todasLasVentas.filter(v => {
        if (!matchesVendedor(v.vendedor, emp)) return false;
        if (!esCobrado(v.estadoPago)) return false; // solo cobradas
        
        const dateInfo = obtenerMesAnioDeFecha(v.fechaTour);
        if (!dateInfo) return false;
        
        return dateInfo.yr === yr && dateInfo.mm === mm;
      });

      const pendientes = ventasColab.filter(v => !v.comisionPagada);

      if (!pendientes.length) {
        return Notificacion('No hay comisiones pendientes para liquidar.', 'warning');
      }

      // Confirmación
      if (!confirm(`¿Estás seguro de liquidar las comisiones de ${empNombre} para el mes ${mesSeleccionado}?\nSe pagarán ${pendientes.length} ventas.`)) {
        return;
      }

      const $btn = $(this);
      wiSpin($btn[0], true, 'Liquidando...');

      try {
        const batch = writeBatch(db);

        pendientes.forEach(sale => {
          const docRef = doc(db, 'registrosdb', sale.idVenta || sale.id);
          batch.update(docRef, {
            comisionPagada: true,
            comisionMontoPagado: parseFloat(sale.comisionCalculada),
            comisionFechaPago: serverTimestamp()
          });
        });

        await batch.commit();

        Notificacion(`Comisiones de ${empNombre} liquidadas ✅`, 'success');
        
        // Recargar datos en silencio
        await _cargarTodo(true);

      } catch (err) {
        console.error('Error al liquidar comisiones:', err);
        Notificacion('Error al registrar la liquidación.', 'error');
      } finally {
        wiSpin($btn[0], false);
      }
    });
}

// ─── LOGIC & DATA LOADING ─────────────────────────────────────────────────────
function _actualizarDisplayMes() {
  const text = $('#selGanMes option:selected').text();
  $('#txtGanMesSeleccionado').text(text || mesSeleccionado);
}

async function _cargarTodo(forceRefresh = false) {
  if (cargando) return;
  cargando = true;

  const $card = $('#ganHeaderCard');
  const $btn = $('#btnRefreshGanancias');
  $card.addClass('smw_loading');
  $btn.addClass('spinning');

  try {
    if (forceRefresh) {
      removels('todosEmpleadosSmile');
      removels('todasVentasSmile');
    }

    // Cargar empleados y todas las ventas
    const [empSnap, snap] = await Promise.all([
      getDocs(collection(db, 'smiles')),
      getDocs(collection(db, 'registrosdb'))
    ]);

    // Filtrar colaboradores activos que participan
    todosLosEmpleados = empSnap.docs
      .map(d => ({ id: d.id, ...d.data() }))
      .filter(e => e.participa === 'si');

    todosLosEmpleados.sort((a, b) => 
      (a.nombre || a.usuario || '').localeCompare(b.nombre || b.usuario || '', 'es')
    );

    todasLasVentas = snap.docs.map(d => ({ id: d.id, ...d.data() }));

    // Calcular comisiones de forma inicial
    _calcularMontos();

    // Renders
    _renderizarColaboradores();
    _actualizarKpisGlobales();

    if (vendedorSeleccionado) {
      _renderizarDetalle();
    }

  } catch (err) {
    console.error('Error al cargar datos de ganancias:', err);
    Notificacion('Error al cargar los registros.', 'error');
  } finally {
    cargando = false;
    $card.removeClass('smw_loading');
    $btn.removeClass('spinning');
  }
}

// Calcula las comisiones de todas las ventas basándose en los porcentajes actuales
function _calcularMontos() {
  todasLasVentas.forEach(v => {
    // Buscar el colaborador correspondiente para obtener sus comisiones personalizadas
    const emp = todosLosEmpleados.find(e => matchesVendedor(v.vendedor, e));
    const sellerId = emp ? emp.usuario : v.vendedor;

    // Configuración del vendedor
    const conf = configComisiones[sellerId] || { pct: 10, base: 'neto' };
    const pct = parseFloat(conf.pct) || 10;
    const base = conf.base || 'neto';

    const baseAmount = base === 'neto' ? (parseFloat(v.ganancia) || 0) : (parseFloat(v.importeTotal) || 0);

    // Si ya está pagada en Firestore, respetamos el histórico
    if (v.comisionPagada) {
      v.comisionCalculada = parseFloat(v.comisionMontoPagado) || 0;
    } else {
      v.comisionCalculada = (pct / 100) * baseAmount;
    }
  });
}

// ─── RENDERS INTERNOS ──────────────────────────────────────────────────────────

// 1. KPI Globales del mes
function _actualizarKpisGlobales() {
  const [yr, mm] = mesSeleccionado.split('-').map(Number);

  // Ventas cobradas en el mes actual por participantes activos
  const ventasMes = todasLasVentas.filter(v => {
    const dateInfo = obtenerMesAnioDeFecha(v.fechaTour);
    if (!dateInfo) return false;
    
    // Validar que el vendedor corresponda a un colaborador activo del reto
    const emp = todosLosEmpleados.find(e => matchesVendedor(v.vendedor, e));
    if (!emp) return false;

    return dateInfo.yr === yr && dateInfo.mm === mm;
  });

  let totalVentas = 0;
  let totalGananciaEmpresa = 0;
  let totalComisiones = 0;
  let totalComisionesPagadas = 0;

  ventasMes.forEach(v => {
    // Solo sumamos a los totales si el pago ingresó a caja (pagado, pagado2, caja)
    if (esCobrado(v.estadoPago)) {
      totalVentas += parseFloat(v.importeTotal) || 0;
      totalGananciaEmpresa += parseFloat(v.ganancia) || 0;
      totalComisiones += v.comisionCalculada;
      
      if (v.comisionPagada) {
        totalComisionesPagadas += v.comisionCalculada;
      }
    }
  });

  $('#kpiGlobalVentas').text(`S/ ${totalVentas.toFixed(2)}`);
  $('#kpiGlobalGanancia').text(`S/ ${totalGananciaEmpresa.toFixed(2)}`);
  $('#kpiGlobalComisiones').text(`S/ ${totalComisiones.toFixed(2)}`);
  $('#kpiGlobalPagado').text(`S/ ${totalComisionesPagadas.toFixed(2)}`);
}

// 2. Lista de Colaboradores (Sidebar)
function _renderizarColaboradores() {
  const [yr, mm] = mesSeleccionado.split('-').map(Number);

  const filtrados = todosLosEmpleados.filter(e => {
    if (busquedaFiltroVendedor) {
      const haystack = `${e.nombre} ${e.apellidos} ${e.usuario}`.toLowerCase();
      if (!haystack.includes(busquedaFiltroVendedor)) return false;
    }
    return true;
  });

  if (!filtrados.length) {
    $('#workersListContainer').html(`
      <div style="text-align:center; padding: 2rem; color: var(--tx3,#888); font-size: 0.82rem;">
        <i class="fas fa-user-slash" style="font-size:1.5rem; margin-bottom:0.5rem; display:block;"></i>
        Sin resultados
      </div>
    `);
    return;
  }

  const html = filtrados.map(e => {
    // Calcular comisiones de este colaborador en el mes seleccionado
    const ventasColab = todasLasVentas.filter(v => {
      if (!matchesVendedor(v.vendedor, e)) return false;
      
      const dateInfo = obtenerMesAnioDeFecha(v.fechaTour);
      if (!dateInfo) return false;

      return dateInfo.yr === yr && dateInfo.mm === mm;
    });

    let comisionTotal = 0;
    let tienePendiente = false;
    let tieneVentasCobradas = false;

    ventasColab.forEach(v => {
      // Solo comisiona si el dinero ya ingresó a la caja (esCobrado)
      if (esCobrado(v.estadoPago)) {
        tieneVentasCobradas = true;
        comisionTotal += v.comisionCalculada;
        if (!v.comisionPagada) tienePendiente = true;
      }
    });

    const isSelected = e.usuario === vendedorSeleccionado;
    const badgeCls = tienePendiente ? 'pendiente' : 'pagado';
    const badgeText = tienePendiente ? 'Pendiente' : 'Pagado';

    const nombreCompleto = Capit((e.nombre || '') + ' ' + (e.apellidos || '')).trim() || e.usuario;

    return `
      <div class="gan_worker_card ${isSelected ? 'active' : ''}" data-id="${e.usuario}">
        ${_avatar(e, 40)}
        <div class="gan_worker_info">
          <span class="gan_worker_name">${nombreCompleto}</span>
          <span class="gan_worker_sub">Comisión: S/ ${comisionTotal.toFixed(2)}</span>
        </div>
        ${tieneVentasCobradas ? `<span class="gan_worker_badge ${badgeCls}">${badgeText}</span>` : ''}
      </div>
    `;
  }).join('');

  $('#workersListContainer').html(html);
}

// 3. Detalle del Colaborador Seleccionado
function _renderizarDetalle() {
  if (!vendedorSeleccionado) return;

  const emp = todosLosEmpleados.find(e => e.usuario === vendedorSeleccionado);
  if (!emp) return;

  const nombreCompleto = Capit((emp.nombre || '') + ' ' + (emp.apellidos || '')).trim() || emp.usuario;

  // Configuración del vendedor
  const conf = configComisiones[vendedorSeleccionado] || { pct: 10, base: 'neto' };
  const pct = conf.pct ?? 10;
  const base = conf.base ?? 'neto';

  // Banco info
  const banco = emp.banco || '';
  const numCuenta = emp.numeroCuenta || '';
  const titular = emp.titularCuenta || '';

  const html = `
    <!-- Header del trabajador -->
    <div class="gan_colab_header_card">
      <div class="gan_colab_profile">
        ${_avatar(emp, 48)}
        <div class="gan_colab_names">
          <h2 class="gan_colab_name">${nombreCompleto}</h2>
          <span class="gan_colab_username">@${emp.usuario} · ${emp.email || 'Sin correo'}</span>
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
            <input type="number" id="ganPctInput" class="gan_pct_input" min="0" max="100" value="${pct}" />
            <span class="gan_pct_symbol">%</span>
          </div>
        </div>
        <div class="gan_config_item" style="display:flex; align-items:center; gap:0.6rem;">
          <span class="gan_config_label">Calcular sobre:</span>
          <div class="gan_calc_toggle_group">
            <button class="gan_calc_btn ${base === 'neto' ? 'active' : ''}" data-base="neto" data-witip="Calcula la comisión sobre la ganancia líquida del tour (importe cobrado -  costo del operador)." data-wtipo="info">Ganancia Neta</button>
            <button class="gan_calc_btn ${base === 'bruto' ? 'active' : ''}" data-base="bruto" data-witip="Calcula la comisión sobre el total bruto cobrado al cliente, sin deducir costos de operación." data-wtipo="info">Total Bruto</button>
          </div>
        </div>
      </div>
    </div>

    <!-- KPIs Personales -->
    <div class="gan_colab_kpis">
      <div class="gan_colab_kpi_card">
        <span class="gan_colab_kpi_label" data-witip="Suma total de los importes cobrados al cliente antes de restar costos." data-wtipo="info" style="cursor: help;">Toal Ventas (Bruto)</span>
        <strong class="gan_colab_kpi_num" id="kpiColabVentas">S/ 0.00</strong>
      </div>
      <div class="gan_colab_kpi_card">
        <span class="gan_colab_kpi_label" data-witip="Suma total de los costos cobrados por los operadores para realizar los tours." data-wtipo="info" style="cursor: help;">Total Costo del Operador</span>
        <strong class="gan_colab_kpi_num" id="kpiColabCosto">S/ 0.00</strong>
      </div>
      <div class="gan_colab_kpi_card">
        <span class="gan_colab_kpi_label" data-witip="Ingreso neto final para la empresa (Total Bruto - Costo del Operador)." data-wtipo="info" style="cursor: help;">Total Ganancia Empresa</span>
        <strong class="gan_colab_kpi_num" id="kpiColabNeto">S/ 0.00</strong>
      </div>
      <div class="gan_colab_kpi_card">
        <span class="gan_colab_kpi_label" data-witip="Monto correspondiente al colaborador basado en su porcentaje y base de cálculo configurada." data-wtipo="info" style="cursor: help;">Comisión para trabajador</span>
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
              <th>Tour</th>
              <th>PAX</th>
              <th>Ventas (Bruto)</th>
              <th>Costo Operador</th>
              <th>Ganancia Empresa</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody id="ganColabTableBody">
            <!-- Ventas renderizadas dinámicamente -->
          </tbody>
        </table>
      </div>
    </div>
  `;

  $('#detailPanelContainer').html(html);

  _actualizarKpisPersonales();
  _actualizarTablaDetalle();
}

// 4. Actualiza las KPIs personales de la columna derecha
function _actualizarKpisPersonales() {
  if (!vendedorSeleccionado) return;

  const [yr, mm] = mesSeleccionado.split('-').map(Number);
  const emp = todosLosEmpleados.find(e => e.usuario === vendedorSeleccionado);

  const ventasColab = todasLasVentas.filter(v => {
    if (!matchesVendedor(v.vendedor, emp)) return false;
    
    const dateInfo = obtenerMesAnioDeFecha(v.fechaTour);
    if (!dateInfo) return false;

    return dateInfo.yr === yr && dateInfo.mm === mm;
  });

  let totalBruto = 0;
  let totalCosto = 0;
  let totalNeto = 0;
  let totalComision = 0;
  let tienePendiente = false;

  ventasColab.forEach(v => {
    // Para KPIs de comisiones a pagar, solo consideramos las que ya están cobradas por caja
    if (esCobrado(v.estadoPago)) {
      totalBruto += parseFloat(v.importeTotal) || 0;
      totalCosto += parseFloat(v.PagoOperador) || 0;
      totalNeto += parseFloat(v.ganancia) || 0;
      totalComision += v.comisionCalculada;
      if (!v.comisionPagada) tienePendiente = true;
    }
  });

  $('#kpiColabVentas').text(`S/ ${totalBruto.toFixed(2)}`);
  $('#kpiColabCosto').text(`S/ ${totalCosto.toFixed(2)}`);
  $('#kpiColabNeto').text(`S/ ${totalNeto.toFixed(2)}`);
  $('#kpiColabComision').text(`S/ ${totalComision.toFixed(2)}`);

  // Habilitar o deshabilitar botón de liquidar
  const $btn = $('#btnLiquidarComisiones');
  if (totalComision > 0 && tienePendiente) {
    $btn.prop('disabled', false);
  } else {
    $btn.prop('disabled', true);
  }
}

// 5. Renderizar filas en la tabla del colaborador
function _actualizarTablaDetalle() {
  if (!vendedorSeleccionado) return;

  const [yr, mm] = mesSeleccionado.split('-').map(Number);
  const emp = todosLosEmpleados.find(e => e.usuario === vendedorSeleccionado);

  const ventasColab = todasLasVentas.filter(v => {
    if (!matchesVendedor(v.vendedor, emp)) return false;
    
    const dateInfo = obtenerMesAnioDeFecha(v.fechaTour);
    if (!dateInfo) return false;

    return dateInfo.yr === yr && dateInfo.mm === mm;
  });

  if (!ventasColab.length) {
    $('#ganColabTableBody').html(`
      <tr>
        <td colspan="7" style="text-align:center; padding:3rem; color:var(--tx3,#888);">
          <i class="fas fa-receipt" style="font-size:2rem; margin-bottom:0.5rem; display:block;"></i>
          No hay ventas registradas para este colaborador en el mes seleccionado.
        </td>
      </tr>
    `);
    return;
  }

  // Ordenar por fecha descendente
  ventasColab.sort((a, b) => {
    const dA = a.fechaTour?.toDate ? a.fechaTour.toDate() : new Date(a.fechaTour || 0);
    const dB = b.fechaTour?.toDate ? b.fechaTour.toDate() : new Date(b.fechaTour || 0);
    return dB - dA;
  });

  const html = ventasColab.map(v => {
    const f = v.fechaTour;
    let fechaStr = '—';
    if (typeof f === 'string') {
      fechaStr = f;
    } else if (f?.toDate) {
      const fd = f.toDate();
      fechaStr = `${fd.getFullYear()}-${String(fd.getMonth()+1).padStart(2,'0')}-${String(fd.getDate()).padStart(2,'0')}`;
    }

    let badgeCls, badgeText, badgeIcon, badgeStyle = '';
    let comisionText = '';

    if (!esCobrado(v.estadoPago)) {
      // Es una deuda
      badgeCls = 'pendiente';
      badgeText = 'Debe';
      badgeIcon = 'fa-exclamation-circle';
      badgeStyle = 'style="background: rgba(239, 68, 68, 0.1); color: #EF4444;"';
      comisionText = `<span style="color:var(--tx3,#888); font-style:italic;">S/ 0.00 (Debe)</span>`;
    } else {
      // Ya ingresó a caja, por lo que comisiona
      badgeCls = v.comisionPagada ? 'pagado' : 'pendiente';
      badgeText = v.comisionPagada ? 'Pagado' : 'Pendiente';
      badgeIcon = v.comisionPagada ? 'fa-check-circle' : 'fa-clock';
      comisionText = `<strong style="color:#10B981; font-family:var(--ff_O);">S/ ${v.comisionCalculada.toFixed(2)}</strong>`;
    }

    return `
      <tr>
        <td><strong>${fechaStr}</strong></td>
        <td><span class="smw_rol_badge rrhh_rol_smile" style="background:#f1f5f9; color:#475569; border: 1px solid #cbd5e1;">${v.tipoTour || 'Tour'}</span></td>
        <td><strong style="font-family:var(--ff_O);">${v.cantidadPax || v.pax || 1}</strong></td>
        <td>S/ ${(parseFloat(v.importeTotal) || 0).toFixed(2)}</td>
        <td>S/ ${(parseFloat(v.PagoOperador) || 0).toFixed(2)}</td>
        <td>S/ ${(parseFloat(v.ganancia) || 0).toFixed(2)}</td>
        <td>
          <span class="gan_badge ${badgeCls}" ${badgeStyle}>
            <i class="fas ${badgeIcon}"></i> ${badgeText}
          </span>
        </td>
      </tr>
    `;
  }).join('');

  $('#ganColabTableBody').html(html);
}
