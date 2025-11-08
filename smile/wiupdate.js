// === IMPORTS ===
import $ from 'jquery';
import { Mensaje, Notificacion, removels, getls } from './widev.js';
import { cargarEmpleados, cargarVentas, renderizarTablaVentas } from './tourHistorial.js';
import { cargarTours, initTourSelector } from './tourRegistrar.js';
import { cargarNotas, calcularPuntosEmpleados, renderizarEmpleados, actualizarResumenCompetencia } from './tourRanking.js';

// === EXPORTS ===
export { wifresh };

// === CONFIG ===
const TTL = { empleados:300, tours:300, ventas:180, notas:600 }; // segundos
const mark = k => localStorage.setItem(`${k}_timestamp`, Date.now());
const expired = (k,ttl) => {
  const ts = localStorage.getItem(`${k}_timestamp`);
  return !ts || ((Date.now()-+ts)/1000) > ttl;
};

// === SPINNER ===
const spin = ($b,on) => {
  const $i=$b.find('i');
  on?($i.attr('class','fas fa-spinner fa-spin'),$b.prop('disabled',true))
     :($i.attr('class','fa-solid fa-rotate-right'),$b.prop('disabled',false));
};

// === DETECTAR CAMBIOS (solo lo necesario) ===
function detectarCambios(){
  return {
    empleados: expired('empleadosSmile',TTL.empleados),
    tours:     expired('toursSmile',TTL.tours),
    ventas:    expired('ventasSmile',TTL.ventas),
    notas:     expired('notasSmile',TTL.notas)
  };
}

// === ACTUALIZADORES PUNTUALES ===
async function updEmpleados(){ removels('empleadosSmile'); await cargarEmpleados(); mark('empleadosSmile'); }
async function updTours(){ removels('toursSmile'); await cargarTours(); mark('toursSmile'); }
async function updVentas(){ await cargarVentas(); mark('ventasSmile'); }
async function updNotas(){ removels('notasSmile'); await cargarNotas(); mark('notasSmile'); }

// === WIFRESH PRINCIPAL ===
async function wifresh(){
  const $btn=$('.wifresh'); spin($btn,true); Notificacion('🔄 Revisando cambios','info');
  const c = detectarCambios();
  const tareas=[];
  c.empleados && tareas.push(updEmpleados());
  c.tours     && tareas.push(updTours());
  c.ventas    && tareas.push(updVentas());
  c.notas     && tareas.push(updNotas());
  if(!tareas.length){ spin($btn,false); return Notificacion('✅ Todo al día','success'); }

  Notificacion(`🔄 Aplicando ${tareas.length} actualizaciones`,'info');
  try {
    await Promise.all(tareas);

    // Recalcular rankings/resumen solo si ventas o empleados cambiaron
    if (c.ventas || c.empleados){
      await calcularPuntosEmpleados();
      actualizarResumenCompetencia();
    }

    // Render optimista según lo que cambió
    c.empleados && renderizarEmpleados();
    c.ventas    && renderizarTablaVentas();
    c.tours     && initTourSelector();

    spin($btn,false);
    Notificacion('✅ Datos actualizados','success');
  } catch(e){
    console.error('wifresh error',e);
    spin($btn,false);
    Notificacion('❌ Falló actualización','error');
  }
}

// === LIMPIEZA MANUAL CACHE ===
$(document).on('click','.bt_cargar',()=>{
  ['empleadosSmile','toursSmile','ventasSmile','notasSmile','empleadosPuntos_','topSmiles'].forEach(k=>{
    Object.keys(localStorage).forEach(x=>x.startsWith(k)&&localStorage.removeItem(x));
  });
  Mensaje('✅ Cache limpiado'); setTimeout(()=>location.reload(),600);
});

// === EVENTO BOTÓN REFRESH ===
$(document).on('click','.wifresh',e=>{ e.preventDefault(); wifresh(); });