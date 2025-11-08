// === IMPORTS ===
import $ from 'jquery';
import  './smile.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { wiTema, Mensaje, savels, getls, savebd, getbd } from './widev.js';
// import { cargarNotas, cargarUltimoGanador, resumenes } from './tourRanking.js';
// import { cargarVentas, actualizarFiltroEmpleados, cargarEmpleados } from './tourHistorial.js';
// import { cargarTours, initTourSelector, getFormularioHTML } from './tourRegistrar.js';
// import { getInfoTabsHTML } from './tourInfo.js';
// import { wifresh } from './wiupdate.js';

// // === EXPORTS ===
// export let wiUsuario = null;
// export let currentMonth = '2025-09';
// export let currentPage = 1;
// export let ventasPorPagina = 5;
// export let todasLasVentas = [];
// export let todosLosEmpleados = [];

// // 🔥 FUNCIONES SETTER
// export const setVentasPorPagina = (val) => { ventasPorPagina = val; };
// export const setCurrentPage = (val) => { currentPage = val; };
// export const setCurrentMonth = (val) => { currentMonth = val; };

// === FUNCIÓN MESES DINÁMICOS ===
// function mesActual(){
//   const hoy = new Date(), anio = hoy.getFullYear(), mes = hoy.getMonth();
//   const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
//   return $.map(new Array(7), (_,i) => {
//     const cada = i - 3, des = mes + cada, cyear = anio + Math.floor(des/12), mesv = ((des % 12) + 12) % 12;
//     const tval = `${cyear}-${String(mesv + 1).padStart(2,'0')}`;
//     return `<option value="${tval}"${cada === 0 ? ' selected' : ''}>${meses[mesv]} ${cyear}</option>`;
//   }).join('');
// }

// // debug 

$('.app').html(`<h1>Cargando rankings...</h1>`);

export const misRankings = async () => {
  const cache = getls('topSmiles');
  if (cache) return renderizarRankings(cache);

  try {
    const busq = await getDocs(collection(db, 'smiles'));
    if (busq.empty) return $('.app').html(`<div class="estado-vacio"><i class="fa-solid fa-user-slash"></i><p>No hay empleados registrados</p></div>`);

    const empleados = busq.docs.map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.puntos || 0) - (a.puntos || 0));
    
    savels('topSmiles', empleados, 5);
    renderizarRankings(empleados);
    Mensaje(`✅ ${busq.size} empleados cargados`);
  } catch (e) {
    console.error(e);
    $('.app').html(`<div class="estado-error"><i class="fa-solid fa-exclamation-triangle"></i><p>Error al cargar</p></div>`);
  }
};

function renderizarRankings(empleados) {
  $('.app').html(empleados.map((emp, i) => {
    const rank = i + 1;
    const cls = rank === 1 ? 'champion' : rank === 2 ? 'runner-up' : '';
    const icn = rank === 1 ? 'crown' : rank === 2 ? 'medal' : 'user';
    
    return `
      <div class="worker-card ${cls}">
        <div class="rank-badge"><i class="fas fa-${icn}"></i>#${rank}</div>
        <div class="worker-avatar">
          <img src="${emp.imagen || '/smile.png'}" alt="${emp.nombre}">
        </div>
        <div class="worker-info">
          <h3>${emp.nombre}</h3>
          <p>${emp.descripcion || 'Colaborador'}</p>
        </div>
        <div class="worker-points">
          <span class="points-number">${emp.puntos || 0}</span>
          <span class="points-label">puntos</span>
        </div>
      </div>
    `;
  }).join(''));
}

misRankings();