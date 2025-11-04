// === IMPORTS ===
import $ from 'jquery';
import { Mensaje, Notificacion, removels, getls } from './widev.js';
import { cargarEmpleados, cargarVentas, renderizarTablaVentas } from './tourHistorial.js';
import { cargarTours, initTourSelector } from './tourRegistrar.js';
import { cargarNotas, calcularPuntosEmpleados, renderizarEmpleados, actualizarResumenCompetencia } from './tourRanking.js';

// === EXPORTS ===
export { wifresh };

// === SPIN HELPER ===
const spin = ($btn, estado) => {
  const $icono = $btn.find('i');
  if (estado) {
    $icono.removeClass().addClass('fas fa-spinner fa-spin');
    $btn.prop('disabled', true);
  } else {
    $icono.removeClass().addClass('fa-solid fa-rotate-right');
    $btn.prop('disabled', false);
  }
};

// === ACTUALIZAR DATOS ===
$(document).on('click', '.bt_cargar', () => {
  const regex = /^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+|toursSmile|notasSmile|empleadosSmile|empleadosPuntos_)$/;
  Object.keys(localStorage)
    .filter(k => regex.test(k))
    .forEach(k => localStorage.removeItem(k));
  
  Mensaje('✅ Cache limpiado');
  setTimeout(() => location.reload(), 800);
});

// === WIFRESH INTELIGENTE ===
async function wifresh() {
  try {
    const $btn = $('.wifresh');
    spin($btn, true);
    Notificacion('🔄 Verificando actualizaciones...', 'info');
    
    const cambios = await detectarCambios();
    
    if (!cambios.hayActualizaciones) {
      spin($btn, false);
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
    
    spin($btn, false);
    Notificacion(`✅ ${cambios.total} actualizaciones aplicadas`, 'success');
    
  } catch (e) {
    console.error('❌ Error wifresh:', e);
    spin($('.wifresh'), false);
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