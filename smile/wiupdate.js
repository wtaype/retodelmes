// === IMPORTS ===
import $ from 'jquery';
import { Mensaje, Notificacion, removels } from './widev.js';

// === EXPORTS ===
export { wifresh };

// === ACTUALIZAR DATOS ===
$(document).on('click', '.bt_cargar', () => {
  const regex = /^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+|toursSmile|notasSmile)$/;
  Object.keys(localStorage)
    .filter(k => regex.test(k))
    .forEach(k => localStorage.removeItem(k));
  
  Mensaje('Actualizado');
  setTimeout(() => location.reload(), 800);
});

// === WIFRESH INTELIGENTE ===
async function wifresh() {
  try {
    const $btn = $('.wifresh');
    const orig = $btn.html();
    
    $btn.html('<i class="fas fa-spinner fa-spin"></i>').prop('disabled', true);
    Notificacion('🔄 Verificando actualizaciones...', 'info');
    
    const cambios = await detectarCambios();
    
    if (!cambios.hayActualizaciones) {
      $btn.html(orig).prop('disabled', false);
      Notificacion('✅ Todo actualizado', 'success');
      return;
    }
    
    Notificacion(`🔄 Aplicando ${cambios.total} actualizaciones...`, 'info');
    
    const promesas = [];
    if (cambios.empleados) promesas.push(actualizarEmpleados());
    if (cambios.tours) promesas.push(actualizarTours());
    if (cambios.ventas) promesas.push(actualizarVentas());
    if (cambios.notas) promesas.push(actualizarNotas());
    
    await Promise.all(promesas);
    
    await Promise.all([calcularPuntosEmpleados(), actualizarResumenCompetencia()]);
    
    renderizarEmpleados();
    renderizarTablaVentas();
    initTourSelector();
    
    $btn.html(orig).prop('disabled', false);
    Notificacion(`✅ ${cambios.total} actualizaciones aplicadas`, 'success');
    
  } catch (e) {
    console.error('❌ Error wifresh:', e);
    $('.wifresh').html('<i class="fa-solid fa-rotate-right"></i>').prop('disabled', false);
    Notificacion('❌ Error en actualización', 'error');
  }
}

// === DETECTAR CAMBIOS ===
async function detectarCambios() {
  const cambios = { empleados: false, tours: false, ventas: true, notas: false, total: 0, hayActualizaciones: false };
  
  try {
    if (!getls('empleadosSmile') || esCacheExpirado('empleadosSmile', 300)) {
      cambios.empleados = true;
      cambios.total++;
    }
    
    if (!getls('toursSmile') || esCacheExpirado('toursSmile', 300)) {
      cambios.tours = true;
      cambios.total++;
    }
    
    cambios.total++; // Ventas siempre
    
    if (!getls('notasSmile') || esCacheExpirado('notasSmile', 600)) {
      cambios.notas = true;
      cambios.total++;
    }
    
    cambios.hayActualizaciones = cambios.total > 0;
    
  } catch (e) {
    console.error('Error detectando:', e);
  }
  
  return cambios;
}

// === CACHE EXPIRADO ===
function esCacheExpirado(clave, max) {
  try {
    const ts = localStorage.getItem(`${clave}_timestamp`);
    if (!ts) return true;
    
    const dif = (Date.now() - parseInt(ts)) / 1000;
    return dif > max;
  } catch {
    return true;
  }
}

// === FUNCIONES ACTUALIZAR ===
async function actualizarEmpleados() {
  removels('empleadosSmile');
  await cargarEmpleados();
}

async function actualizarTours() {
  removels('toursSmile');
  await cargarTours();
}

async function actualizarVentas() {
  await cargarVentas();
}

async function actualizarNotas() {
  removels('notasSmile');
  await cargarNotas();
}

// === EVENTO ===
$(document).on('click', '.wifresh', e => {
  e.preventDefault();
  wifresh();
});