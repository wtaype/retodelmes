import './historial.css';
import $ from 'jquery';
import { db } from '../firebase.js';
import { collection, getDocs, doc, deleteDoc, query, where } from 'firebase/firestore';
import { wiAuth, Notificacion, Capi, getls, savels } from '../widev.js';
import { rutas } from '../rutas.js';
import { getMesActual, invalidateRankingCaches } from './zsmile.js';

let todasLasVentas = [];
let todosLosEmpleados = [];
let mesSeleccionado = getMesActual();
let filtroVendedor = '';
let filtroHoy = false;
let pagActual = 1;
let limitePorPagina = 10;
let busquedaFiltro = '';

export const render = () => {
  const mesesOptions = selectMes();
  return `
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
                ${mesesOptions}
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
              ${_generarSkeletonsTabla(limitePorPagina || 5)}
            </tbody>
          </table>
        </div>

        <!-- Paginación -->
        <div class="smw_pagination_container" id="histPagination"></div>
      </section>

    </div>
  `;
};

export const init = async () => {
  const user = wiAuth.user;
  if (!user) return setTimeout(() => rutas.navigate('/login'), 100);

  // Set default state values
  pagActual = 1;
  filtroVendedor = '';
  filtroHoy = false;
  busquedaFiltro = '';
  
  // Set month
  $('#selHistorialMes').val(mesSeleccionado);
  _actualizarDisplayMes();

  // Load initial data
  await _cargarTodo();

  // Bind controls events
  _bindEvents(user);

  $('.wi_fadeUp').addClass('visible wi_visible');
  window.__WIREADY__ = true;
};

export const cleanup = () => {
  $(document).off('.historial_events');
  window.verDetalleVenta = null;
  window.editarVentaAccion = null;
  window.eliminarVentaAccion = null;
  window.histCambiarPagina = null;
};

// --- BINDING EVENTS ---
function _bindEvents(user) {
  // Selector de mes
  $(document).off('change.historial_events', '#selHistorialMes').on('change.historial_events', '#selHistorialMes', async function() {
    mesSeleccionado = $(this).val();
    _actualizarDisplayMes();
    pagActual = 1;
    await _cargarTodo();
  });

  // Flechas mes anterior/siguiente
  $(document).off('click.historial_events', '#btnHistMesAnt').on('click.historial_events', '#btnHistMesAnt', function() {
    const $sel = $('#selHistorialMes');
    const index = $sel.prop('selectedIndex');
    if (index < $sel.find('option').length - 1) {
      $sel.prop('selectedIndex', index + 1).trigger('change');
    }
  });

  $(document).off('click.historial_events', '#btnHistMesSig').on('click.historial_events', '#btnHistMesSig', function() {
    const $sel = $('#selHistorialMes');
    const index = $sel.prop('selectedIndex');
    if (index > 0) {
      $sel.prop('selectedIndex', index - 1).trigger('change');
    }
  });

  // Filtro Vendedor
  $(document).off('change.historial_events', '#histFilterEmployee').on('change.historial_events', '#histFilterEmployee', function() {
    filtroVendedor = $(this).val();
    pagActual = 1;
    _renderizarTabla();
  });

  // Limite de filas
  $(document).off('change.historial_events', '#histLimtSelector').on('change.historial_events', '#histLimtSelector', function() {
    limitePorPagina = parseInt($(this).val());
    pagActual = 1;
    _renderizarTabla();
  });

  // Búsqueda de cliente o habitación
  $(document).off('input.historial_events', '#histSearchInput').on('input.historial_events', '#histSearchInput', function() {
    busquedaFiltro = $(this).val().toLowerCase().trim();
    pagActual = 1;
    _renderizarTabla();
  });

  // Toggle Solo Hoy
  $(document).off('click.historial_events', '#btnFilterHoy').on('click.historial_events', '#btnFilterHoy', function() {
    filtroHoy = !filtroHoy;
    $(this).toggleClass('active', filtroHoy);
    pagActual = 1;
    _renderizarTabla();
  });

  // Registrar funciones globales de fila
  window.histCambiarPagina = (pag) => {
    pagActual = pag;
    _renderizarTabla();
  };

  window.verDetalleVenta = (id) => {
    const venta = todasLasVentas.find(v => v.id === id);
    if (!venta) return Notificacion('Venta no encontrada', 'error');
    window.editarVenta = { venta, soloVista: true };
    rutas.navigate('/registrar');
  };

  window.editarVentaAccion = (id) => {
    const venta = todasLasVentas.find(v => v.id === id);
    if (!venta) return Notificacion('Venta no encontrada', 'error');
    window.editarVenta = { venta, soloVista: false };
    rutas.navigate('/registrar');
  };

  window.eliminarVentaAccion = async (id) => {
    const venta = todasLasVentas.find(v => v.id === id);
    if (!venta) return Notificacion('Venta no encontrada', 'error');

    if (!confirm(`¿Eliminar venta de "${venta.nombreCliente}"?\n\nEsta acción NO se puede deshacer.`)) return;
    if (!confirm(`⚠️ CONFIRMACIÓN FINAL\n\nSe eliminará:\n• ${venta.nombreCliente}\n• ${venta.tipoTour}\n• S/ ${venta.importeTotal || 0}\n\n¿CONFIRMAS?`)) return;

    try {
      Notificacion('Eliminando registro...', 'info');
      await deleteDoc(doc(db, 'registrosdb', id));

      // Invalida cache local del mes correspondiente
      const f = venta.fechaTour;
      let mesVenta = mesSeleccionado;
      if (typeof f === 'string') {
        const [a, m] = f.split('-');
        mesVenta = `${a}-${m}`;
      } else if (f?.toDate) {
        const fd = f.toDate();
        mesVenta = `${fd.getFullYear()}-${String(fd.getMonth() + 1).padStart(2, '0')}`;
      }

      invalidateRankingCaches(venta.vendedor, mesVenta);
      Notificacion('Venta eliminada exitosamente', 'success');

      // Reload
      await _cargarTodo();
    } catch (e) {
      console.error('Error al eliminar:', e);
      Notificacion('Error al eliminar el registro.', 'error');
    }
  };
}

// --- ACTUALIZAR VISTA DEL MES SELECCIONADO ---
function _actualizarDisplayMes() {
  const text = $('#selHistorialMes option:selected').text();
  $('#txtHistMesSeleccionado').text(text || mesSeleccionado);
}

// --- CARGAR TODOS LOS DATOS (EMPLEADOS + VENTAS) ---
async function _cargarTodo() {
  try {
    // Intentar cargar de cache local primero para velocidad instantánea
    let cachedEmpleados = getls('todosEmpleadosSmile');
    let cachedVentas = getls('todasVentasSmile');

    if (cachedEmpleados && cachedVentas) {
      todosLosEmpleados = cachedEmpleados;
      todasLasVentas = cachedVentas;
      
      const opts = todosLosEmpleados
        .map(e => `<option value="${e.usuario}">${e.nombre || e.usuario}</option>`)
        .join('');
      $('#histFilterEmployee').html(`<option value="">Todos los vendedores</option>${opts}`).val(filtroVendedor);
      
      _renderizarTabla();
      return;
    }

    // Si no hay cache, mostrar skeletons y consultar a Firestore
    $('#histSalesTableBody').html(_generarSkeletonsTabla(limitePorPagina || 5));

    // Ejecutar ambas consultas Firestore en paralelo para mayor velocidad
    const [empSnap, snap] = await Promise.all([
      getDocs(query(collection(db, 'smiles'), where('participa', '==', 'si'))),
      getDocs(collection(db, 'registrosdb'))
    ]);

    todosLosEmpleados = empSnap.docs.map(d => ({ id: d.id, ...d.data() }));
    todasLasVentas = snap.docs.map(d => ({ id: d.id, ...d.data() }));

    // Ordenar por fecha (más recientes primero)
    todasLasVentas.sort((a, b) => {
      const dateA = a.fechaTour?.toDate ? a.fechaTour.toDate() : new Date(a.fechaTour || 0);
      const dateB = b.fechaTour?.toDate ? b.fechaTour.toDate() : new Date(b.fechaTour || 0);
      return dateB - dateA;
    });

    // Guardar en caché local (Ventas por 5 minutos, Empleados por 60 minutos)
    savels('todosEmpleadosSmile', todosLosEmpleados, 60);
    savels('todasVentasSmile', todasLasVentas, 5);

    // Rellenar selector de empleados
    const opts = todosLosEmpleados
      .map(e => `<option value="${e.usuario}">${e.nombre || e.usuario}</option>`)
      .join('');
    $('#histFilterEmployee').html(`<option value="">Todos los vendedores</option>${opts}`).val(filtroVendedor);

    _renderizarTabla();
  } catch (error) {
    console.error('Error en cargar todo:', error);
    $('#histSalesTableBody').html('<tr><td colspan="11" class="smw_error_cell"><i class="fas fa-exclamation-triangle"></i> Error al cargar datos</td></tr>');
  }
}

// --- FILTRAR Y RENDERIZAR TABLA EN LA PÁGINA ---
function _renderizarTabla() {
  const [actualYear, actualMes] = mesSeleccionado.split('-').map(Number);
  const hoyObj = new Date();
  const hoyStr = `${hoyObj.getFullYear()}-${String(hoyObj.getMonth() + 1).padStart(2, '0')}-${String(hoyObj.getDate()).padStart(2, '0')}`;

  // 1. Filtrar por el mes seleccionado
  let ventas = todasLasVentas.filter(v => {
    const f = v.fechaTour;
    if (!f) return false;
    if (f.toDate) {
      const fd = f.toDate();
      return fd.getFullYear() === actualYear && fd.getMonth() + 1 === actualMes;
    }
    if (typeof f === 'string') {
      const [a, m] = f.split('-').map(Number);
      return a === actualYear && m === actualMes;
    }
    return false;
  });

  // 2. Filtrar por vendedor
  if (filtroVendedor) {
    ventas = ventas.filter(v => v.vendedor === filtroVendedor);
  }

  // 3. Filtrar por búsqueda text (cliente o habitación)
  if (busquedaFiltro) {
    ventas = ventas.filter(v => {
      const cliente = (v.nombreCliente || '').toLowerCase();
      const habitacion = (v.numeroHabitacion || '').toLowerCase();
      const tipoTour = (v.tipoTour || '').toLowerCase();
      return cliente.includes(busquedaFiltro) || habitacion.includes(busquedaFiltro) || tipoTour.includes(busquedaFiltro);
    });
  }

  // 4. Filtrar por solo hoy
  if (filtroHoy) {
    ventas = ventas.filter(v => {
      const f = v.fechaTour;
      if (!f) return false;
      if (typeof f === 'string') return f.split('T')[0] === hoyStr;
      if (f.toDate) {
        const fd = f.toDate();
        const fStr = `${fd.getFullYear()}-${String(fd.getMonth() + 1).padStart(2, '0')}-${String(fd.getDate()).padStart(2, '0')}`;
        return fStr === hoyStr;
      }
      return false;
    });
  }

  // Paginación
  const totalRegs = ventas.length;
  const totalPags = Math.ceil(totalRegs / limitePorPagina);
  if (pagActual > totalPags && totalPags > 0) pagActual = totalPags;

  const inicio = (pagActual - 1) * limitePorPagina;
  const ventasPag = ventas.slice(inicio, inicio + limitePorPagina);

  const currentUser = wiAuth.user;

  // Renders rows
  const filasHtml = ventasPag.map(v => {
    // Permisos de edición / borrado (Solo si es dueño de la venta)
    const esDuenio = v.vendedor === currentUser?.usuario;

    const btns = esDuenio 
      ? `
        <button class="smw_hist_btn smw_hbtn_view" onclick="verDetalleVenta('${v.id}')" title="Ver Venta"><i class="fas fa-eye"></i></button>
        <button class="smw_hist_btn smw_hbtn_edit" onclick="editarVentaAccion('${v.id}')" title="Editar"><i class="fas fa-edit"></i></button>
        <button class="smw_hist_btn smw_hbtn_delete" onclick="eliminarVentaAccion('${v.id}')" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
      ` 
      : `
        <button class="smw_hist_btn smw_hbtn_view" onclick="verDetalleVenta('${v.id}')" title="Ver Detalle"><i class="fas fa-eye"></i></button>
      `;

    const fecha = _formatearFecha(v.fechaTour);
    const cliente = `<strong>${v.nombreCliente || 'Sin nombre'}</strong>${v.numeroHabitacion ? ` <span class="smw_room_pill"><i class="fas fa-door-open"></i> ${v.numeroHabitacion}</span>` : ''}`;
    
    // Obtener imagen del vendedor
    const emp = todosLosEmpleados.find(e => e.usuario === v.vendedor);
    const avatarImg = emp?.imagen || '/smile.png';

    // Badge de estado pago
    const est = _obtenerEstado(v.estadoPago);

    // Registrado en
    const quienVende = v.esVentaJulio ? 'Julio' : v.esVentaSonia ? 'Sonia' : v.esVentaExterna ? 'Externo' : Capi(v.vendedor);

    return `
      <tr class="smw_row_anim">
        <td><span class="smw_date_span"><i class="far fa-calendar-alt"></i> ${fecha}</span></td>
        <td>
          <div class="smw_vendedor_cell">
            <img src="${avatarImg}" class="smw_avatar_table" alt="avatar">
            <span class="smw_vendedor_name">${Capi(v.vendedor)}</span>
          </div>
        </td>
        <td><span class="smw_tour_pill">${v.tipoTour}</span></td>
        <td><span class="smw_pax_pill"><i class="fas fa-users"></i> ${v.cantidadPax || 1}</span></td>
        <td><div class="smw_cliente_cell">${cliente}</div></td>
        <td><strong class="smw_price_span">S/ ${parseFloat(v.importeTotal || 0).toFixed(2)}</strong></td>
        <td>
          <span class="smw_status_badge ${est.cls}">
            <i class="fas fa-${est.icn}"></i> ${est.txt}
          </span>
        </td>
        <td><span class="smw_profit_span">S/ ${parseFloat(v.ganancia || 0).toFixed(2)}</span></td>
        <td><span class="smw_reg_label"><i class="fas fa-clipboard-user"></i> ${quienVende}</span></td>
        <td><span class="smw_points_pill"><i class="fas fa-star"></i> ${v.puntos || 0}</span></td>
        <td><div class="smw_actions_cell">${btns}</div></td>
      </tr>
    `;
  }).join('');

  const tbody = $('#histSalesTableBody');
  if (filasHtml) {
    tbody.html(filasHtml);
  } else {
    tbody.html(`
      <tr>
        <td colspan="11" class="smw_empty_cell">
          <i class="fas fa-inbox"></i>
          <strong>No se encontraron registros de ventas</strong>
          <p>Prueba ajustando los filtros o seleccionando otro mes.</p>
        </td>
      </tr>
    `);
  }

  _renderizarPaginacion(totalPags);
}

// --- PAGINACIÓN ---
function _renderizarPaginacion(total) {
  const container = $('#histPagination');
  if (total <= 1) {
    container.html('');
    return;
  }

  let html = '<div class="smw_pagination">';

  if (pagActual > 1) {
    html += `<button class="smw_page_btn" onclick="histCambiarPagina(${pagActual - 1})"><i class="fas fa-chevron-left"></i></button>`;
  }

  for (let i = 1; i <= total; i++) {
    html += `<button class="smw_page_btn ${i === pagActual ? 'active' : ''}" onclick="histCambiarPagina(${i})">${i}</button>`;
  }

  if (pagActual < total) {
    html += `<button class="smw_page_btn" onclick="histCambiarPagina(${pagActual + 1})"><i class="fas fa-chevron-right"></i></button>`;
  }

  html += '</div>';
  container.html(html);
}

// --- AUXILIARES ---
function _formatearFecha(fecha) {
  if (!fecha) return 'Sin fecha';
  let dateObj = null;

  if (fecha.toDate) {
    dateObj = fecha.toDate();
  } else if (typeof fecha === 'string') {
    const parts = fecha.split('T')[0].split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    dateObj = new Date(fecha);
  } else if (fecha.seconds) {
    dateObj = new Date(fecha.seconds * 1000);
  }

  if (dateObj && !isNaN(dateObj.getTime())) {
    const d = String(dateObj.getDate()).padStart(2, '0');
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const y = dateObj.getFullYear();
    return `${d}/${m}/${y}`;
  }
  return 'Sin fecha';
}

function _obtenerEstado(estado) {
  const estados = {
    'pagado': { cls: 'paid', icn: 'check-circle', txt: 'PAGADO' },
    'cobrado': { cls: 'paid', icn: 'check-circle', txt: 'PAGADO' },
    'cobrar': { cls: 'pending', icn: 'clock', txt: 'DEUDA' }
  };
  return estados[estado] || { cls: 'pending', icn: 'clock', txt: 'DEUDA' };
}

function selectMes() {
  const hoy = new Date(), anio = hoy.getFullYear(), mes = hoy.getMonth();
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  return $.map(new Array(7), (_, i) => {
    const cada = i - 3, des = mes + cada, cyear = anio + Math.floor(des / 12), mesv = ((des % 12) + 12) % 12;
    const tval = `${cyear}-${String(mesv + 1).padStart(2, '0')}`;
    return `<option value="${tval}"${cada === 0 ? ' selected' : ''}>${meses[mesv]} ${cyear}</option>`;
  }).join('');
}

function _generarSkeletonsTabla(cant = 5) {
  return Array(cant).fill(0).map(() => `
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
  `).join('');
}

