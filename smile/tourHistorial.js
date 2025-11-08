// === IMPORTS ===
import $ from 'jquery';
import { db } from '../firebase/init.js';
import { getDocs, deleteDoc, collection, doc } from 'firebase/firestore';
import { Notificacion, savels, getls, Capi, mis10, savebd, getbd } from './widev.js'; // ✅ ACTUALIZADO
import { cargarDatosEnFormulario, limpiarEstadoFormulario} from './tourRegistrar.js';
import { wiUsuario, mesActual, currentPage, ventasPorPagina, todasLasVentas, todosLosEmpleados, setVentasPorPagina, setCurrentPage, setCurrentMonth } from './smile.js';
import { renderizarEmpleados, calcularPuntosEmpleados, actualizarResumenCompetencia, cargarUltimoGanador } from './tourRanking.js';

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
  setVentasPorPagina(parseInt($(this).val()));
  setCurrentPage(1);
  renderizarTablaVentas($('#filterEmployee').val());
});

$(document).on('change', '#monthSelector', function() {
  setCurrentMonth($(this).val());
  setCurrentPage(1);
  
  Promise.all([calcularPuntosEmpleados(), cargarVentas()])
    .then(() => {
      renderizarEmpleados();
      renderizarTablaVentas();
      actualizarResumenCompetencia();
      cargarUltimoGanador();
    });
});

$(document).on('change', '#filterEmployee', () => {
  setCurrentPage(1);
  renderizarTablaVentas($('#filterEmployee').val());
});

$(document).on('click', '#todayFilter', () => {
  setCurrentPage(1);
  renderizarTablaVentas($('#filterEmployee').val(), true);
});

// === FUNCIONES GLOBALES ===
window.cambiarPagina = (pag) => {
  setCurrentPage(pag);
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
    const v = todasLasVentas.find(x=>x.id===id); // v
    const mv = (()=>{ // mv=mes venta
      const f=v?.fechaTour; 
      if(!f) return mesActual;
      if(typeof f==='string'){ const [a,m]=f.split('-'); return `${a}-${m}`; }
      const d=f.toDate(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    })();
    const [y,m]=mesActual.split('-').map(Number); // y,m UI
    const pm = (()=>{ const d=new Date(y,m-2,1); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`; })(); // pm=mes prev UI
    
    await deleteDoc(doc(db,'registrosdb',id)); // del

    // caches
    localStorage.removeItem(`empleadosPuntos_${mv}`); // rm pts
    localStorage.removeItem(`resumenMes_${mv}`);      // rm sum
    if(mv===pm) localStorage.removeItem(`ganadorMes_${pm}`); // rm win
    Object.keys(localStorage) // rm por-vendedor
      .filter(k=>k.startsWith('vendedor_'))
      .forEach(k=>{ try{ const d=JSON.parse(localStorage.getItem(k)); if(d?.idVenta===id) localStorage.removeItem(k);}catch(_){}});

    const i=todasLasVentas.findIndex(x=>x.id===id); if(i>-1) todasLasVentas.splice(i,1); // rm mem

    // UI/compute
    if(mv===mesActual){ 
      await calcularPuntosEmpleados();               // pts
      actualizarResumenCompetencia();                // kpi
      renderizarEmpleados();                         // rank
      renderizarTablaVentas();                       // tabla
    } else {
      renderizarTablaVentas();                       // tabla
    }
    if(mv===pm) await cargarUltimoGanador();         // win

    if($('.btn-save').attr('data-edit-id')===id) limpiarEstadoFormulario(); // form
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
    
    // ✅ ACTUALIZADO - Ordenar por fecha usando getbd
    todasLasVentas.sort((a, b) => {
      const fechaA = a.fechaTour?.toDate ? a.fechaTour.toDate() : new Date(a.fechaTour || '1970');
      const fechaB = b.fechaTour?.toDate ? b.fechaTour.toDate() : new Date(b.fechaTour || '1970');
      return fechaB - fechaA;
    });
    
    renderizarTablaVentas();
    
  } catch (e) {
    console.error('Error ventas:', e);
    $('#salesTableBody').html('<tr><td colspan="11" class="error-cell"><i class="fas fa-exclamation-triangle"></i>Error</td></tr>');
  }
}

// === RENDERIZAR TABLA ===
function renderizarTablaVentas(filtro = '', soloHoy = false) {
  const [actualYear, actualMes] = mesActual.split('-').map(Number);
  const hoy = new Date();
  const hoyStr = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
  
  let ventas = todasLasVentas.filter(v => {
    const f = v.fechaTour;
    if (!f) return false;
    if (f.toDate) { const fd = f.toDate(); return fd.getFullYear() === actualYear && fd.getMonth() + 1 === actualMes; } // Timestamp
    if (typeof f === 'string') { const [a, m] = f.split('-').map(Number); return a === actualYear && m === actualMes; } // String
    return false;
  });
  
  if (filtro) ventas = ventas.filter(v => v.vendedor === filtro);
  
  if (soloHoy) {
    ventas = ventas.filter(v => {
      const f = v.fechaTour;
      if (!f) return false;
      if (typeof f === 'string') return f === hoyStr; // String
      if (f.toDate) { const fd = f.toDate(); return `${fd.getFullYear()}-${String(fd.getMonth() + 1).padStart(2, '0')}-${String(fd.getDate()).padStart(2, '0')}` === hoyStr; } // Timestamp
      return false;
    });
  }
  
  const totalPags = Math.ceil(ventas.length / ventasPorPagina);
  const inicio = (currentPage - 1) * ventasPorPagina;
  const ventasPag = ventas.slice(inicio, inicio + ventasPorPagina);
  
  const filas = ventasPag.map(v => {
    const esProp = v.vendedor === wiUsuario?.displayName;
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
  
  // ✅ ACTUALIZADO - Usar getbd para Timestamps
  if (fecha?.toDate) return getbd(fecha);
  
  // Para strings formato YYYY-MM-DD
  if (typeof fecha === 'string') {
    const [y, m, d] = fecha.split('-');
    return `${d}/${m}/${y}`;
  }
  
  return 'Sin fecha';
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