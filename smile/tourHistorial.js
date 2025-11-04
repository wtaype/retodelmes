// === IMPORTS ===
import $ from 'jquery';
import { db } from '../firebase/init.js';
import { getDocs, deleteDoc, collection, doc } from 'firebase/firestore';
import { Notificacion, savels, getls, Capi, mis10, fechaPeru } from './widev.js';
import { userAuth, currentMonth, currentPage, ventasPorPagina, todasLasVentas, todosLosEmpleados } from './smile.js';
import { cargarDatosEnFormulario, limpiarEstadoFormulario} from './tourRegistrar.js';
import { renderizarEmpleados, calcularPuntosEmpleados,actualizarResumenCompetencia } from './tourRanking.js';

// === EXPORTS ===
export { renderizarTablaVentas, cargarVentas, actualizarFiltroEmpleados, cargarEmpleados };

// === CARGAR EMPLEADOS ===
async function cargarEmpleados() {
  try {
    const cache = getls('empleadosSmile');
    if (cache) {
      todosLosEmpleados.splice(0, todosLosEmpleados.length, ...cache);
      renderizarEmpleados();
    }

    const snap = await getDocs(collection(db, 'smiles'));
    const empleados = snap.docs
      .filter(d => d.data().participa === 'si')
      .map(d => ({ id: d.id, ...d.data() }));
    
    todosLosEmpleados.splice(0, todosLosEmpleados.length, ...empleados);
    savels('empleadosSmile', todosLosEmpleados, 300);
    
    await calcularPuntosEmpleados();
    renderizarEmpleados();
    
  } catch (e) {
    console.error('Error empleados:', e);
    $('#workersGrid').html('<div class="error-workers"><i class="fas fa-exclamation-triangle"></i>Error</div>');
  }
}

// === EVENTOS ===
$(document).on('change', '#mostrarn', function() {
  ventasPorPagina = parseInt($(this).val());
  currentPage = 1;
  renderizarTablaVentas($('#filterEmployee').val());
});

$(document).on('change', '#monthSelector', function() {
  currentMonth = $(this).val();
  currentPage = 1;
  
  Promise.all([calcularPuntosEmpleados(), cargarVentas()])
    .then(() => {
      renderizarEmpleados();
      renderizarTablaVentas();
      actualizarResumenCompetencia();
      cargarUltimoGanador();
    });
});

$(document).on('change', '#filterEmployee', () => {
  currentPage = 1;
  renderizarTablaVentas($('#filterEmployee').val());
});

$(document).on('click', '#todayFilter', () => {
  currentPage = 1;
  renderizarTablaVentas($('#filterEmployee').val(), true);
});

// === FUNCIONES GLOBALES ===
window.cambiarPagina = (pag) => {
  currentPage = pag;
  renderizarTablaVentas($('#filterEmployee').val());
};

window.verDetalleVenta = (id) => {
  const venta = todasLasVentas.find(v => v.id === id);
  if (!venta) return Notificacion('Venta no encontrada', 'error');
  
  cargarDatosEnFormulario(venta, true);
  document.querySelector('#formularioVenta').scrollIntoView({ behavior: 'smooth', block: 'start' });
  Notificacion('Datos cargados', 'info');
};

window.editarVenta = (id) => {
  const venta = todasLasVentas.find(v => v.id === id);
  if (!venta) return Notificacion('Venta no encontrada', 'error');
  
  cargarDatosEnFormulario(venta, false);
  $('.btn-save').html('<i class="fas fa-edit"></i> Actualizar Venta').attr('data-edit-id', id);
  document.querySelector('#formularioVenta').scrollIntoView({ behavior: 'smooth', block: 'start' });
  Notificacion('Datos cargados para edición', 'info');
};

window.eliminarVenta = (id) => {
  const venta = todasLasVentas.find(v => v.id === id);
  if (!venta) return Notificacion('Venta no encontrada', 'error');
  
  if (!confirm(`¿Eliminar venta de "${venta.nombreCliente}"?\n\nEsta acción NO se puede deshacer.`)) return;
  if (!confirm(`⚠️ CONFIRMACIÓN FINAL\n\nSe eliminará:\n• ${venta.nombreCliente}\n• ${venta.tipoTour}\n• S/ ${venta.importeTotal}\n\n¿CONFIRMAS?`)) return;
  
  eliminarVentaCompleta(id);
};

// === ELIMINAR VENTA ===
async function eliminarVentaCompleta(id) {
  try {
    Notificacion('Eliminando...', 'info');
    
    await deleteDoc(doc(db, 'registrosdb', id));
    
    // Limpiar localStorage
    Object.keys(localStorage)
      .filter(k => k.startsWith('vendedor_'))
      .forEach(k => {
        try {
          const data = JSON.parse(localStorage.getItem(k));
          if (data?.idVenta === id) localStorage.removeItem(k);
        } catch (_) {}
      });
    
    const index = todasLasVentas.findIndex(v => v.id === id);
    if (index !== -1) {
      todasLasVentas.splice(index, 1);
    }
    
    await calcularPuntosEmpleados();
    renderizarEmpleados();
    renderizarTablaVentas();
    actualizarResumenCompetencia();
    
    if ($('.btn-save').attr('data-edit-id') === id) limpiarEstadoFormulario();
    
    Notificacion('¡Venta eliminada!', 'success');
    
  } catch (e) {
    console.error('Error eliminando:', e);
    Notificacion('Error al eliminar', 'error');
  }
}

// === ACTUALIZAR FILTRO ===
function actualizarFiltroEmpleados() {
  const opts = todosLosEmpleados.map(e => `<option value="${e.usuario}">${e.nombre}</option>`).join('');
  $('#filterEmployee').html(`<option value="">Todos los vendedores</option>${opts}`);
}

// === CARGAR VENTAS ===
async function cargarVentas() {
  try {
    const snap = await getDocs(collection(db, 'registrosdb'));
    todasLasVentas.splice(0, todasLasVentas.length, 
      ...snap.docs.map(d => ({ id: d.id, ...d.data() }))
    );
    
    todasLasVentas.sort((a, b) => new Date(b.fechaTour || '1970') - new Date(a.fechaTour || '1970'));
    renderizarTablaVentas();
    
  } catch (e) {
    console.error('Error ventas:', e);
    $('#salesTableBody').html('<tr><td colspan="11" class="error-cell"><i class="fas fa-exclamation-triangle"></i>Error</td></tr>');
  }
}

// === RENDERIZAR TABLA ===
function renderizarTablaVentas(filtro = '', soloHoy = false) {
  let ventas = todasLasVentas.filter(v => v.fechaTour?.startsWith(currentMonth));
  
  if (filtro) ventas = ventas.filter(v => v.vendedor === filtro);
  if (soloHoy) {
    const hoy = fechaPeru('input').split('T')[0];
    ventas = ventas.filter(v => v.fechaTour === hoy);
  }
  
  const totalPags = Math.ceil(ventas.length / ventasPorPagina);
  const inicio = (currentPage - 1) * ventasPorPagina;
  const ventasPag = ventas.slice(inicio, inicio + ventasPorPagina);
  
  const filas = ventasPag.map(v => {
    const esProp = v.vendedor === userAuth?.displayName;
    const btns = esProp 
      ? `<button class="btn-view" onclick="verDetalleVenta('${v.id}')"><i class="fas fa-eye"></i></button>
         <button class="btn-edit" onclick="editarVenta('${v.id}')"><i class="fas fa-edit"></i></button>
         <button class="btn-delete" onclick="eliminarVenta('${v.id}')"><i class="fas fa-trash"></i></button>`
      : `<button class="btn-view" onclick="verDetalleVenta('${v.id}')"><i class="fas fa-eye"></i></button>`;
    
    const fecha = formatearFecha(v.fechaTour);
    const cliente = `${mis10(v.nombreCliente, 15)}${v.numeroHabitacion ? ` <small>(${v.numeroHabitacion})</small>` : ''}`;
    const emp = todosLosEmpleados.find(e => e.usuario === v.vendedor);
    const estado = obtenerEstado(v.estadoPago);
    
    return `
      <tr>
        <td>${fecha}</td>
        <td class="user-cell">
          <img src="${emp?.imagen || '/smile.png'}" class="avatar-small">
          <strong>${Capi(v.vendedor)}</strong>
        </td>
        <td><span class="tour-badge">${v.tipoTour}</span></td>
        <td><span class="pax-badge"><i class="fas fa-users"></i> ${v.cantidadPax}</span></td>
        <td>${cliente}</td>
        <td><strong class="price">S/ ${(v.importeTotal || 0).toFixed(2)}</strong></td>
        <td>S/ ${(v.precioUnitario || 0).toFixed(2)}</td>
        <td><span class="status-badge ${estado.cls}">
          <i class="fas fa-${estado.icn}"></i> ${estado.txt}
        </span></td>
        <td>S/ ${(v.ganancia || 0).toFixed(2)}</td>
        <td>${v.esVentaJulio ? 'Julio' : v.esVentaSonia ? 'Sonia' : v.esVentaExterna ? 'Otro' : Capi(v.vendedor)}</td>
        <td><span class="points-badge"><i class="fas fa-star"></i> ${v.puntos || 0}</span></td>
        <td><div class="action-buttons">${btns}</div></td>
      </tr>
    `;
  }).join('');
  
  $('#salesTableBody').html(filas || '<tr><td colspan="11" class="empty-cell"><i class="fas fa-inbox"></i>No hay ventas</td></tr>');
  renderizarPaginacion(totalPags);
}

// === AUXILIARES ===
function formatearFecha(fecha) {
  if (!fecha) return 'Sin fecha';
  const [y, m, d] = fecha.split('-');
  return `${d}/${m}/${y}`;
}

function obtenerEstado(estado) {
  const estados = {
    'pagado': { cls: 'paid', icn: 'check-circle', txt: 'PAGADO' },
    'cobrado': { cls: 'paid', icn: 'check-circle', txt: 'PAGADO' },
    'cobrar': { cls: 'pending', icn: 'clock', txt: 'DEUDA' }
  };
  return estados[estado] || { cls: 'pending', icn: 'clock', txt: 'DEUDA' };
}

function renderizarPaginacion(total) {
  if (total <= 1) return $('#paginationContainer').html('');
  
  let html = '<div class="pagination">';
  
  if (currentPage > 1) {
    html += `<button class="page-btn" onclick="cambiarPagina(${currentPage - 1})"><i class="fas fa-chevron-left"></i></button>`;
  }
  
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="cambiarPagina(${i})">${i}</button>`;
  }
  
  if (currentPage < total) {
    html += `<button class="page-btn" onclick="cambiarPagina(${currentPage + 1})"><i class="fas fa-chevron-right"></i></button>`;
  }
  
  html += '</div>';
  $('#paginationContainer').html(html);
}