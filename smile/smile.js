// === IMPORTS ===
import $ from 'jquery';
import {footer} from './foo.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { wiTema, Mensaje, savels, getls, savebd, getbd } from './widev.js';
import { cargarNotas, cargarUltimoGanador, resumenes, actualizarResumenCompetencia  } from './tourRanking.js';
import { cargarVentas, actualizarFiltroEmpleados, cargarEmpleados } from './tourHistorial.js';
import { cargarTours, initTourSelector, getFormularioHTML } from './tourRegistrar.js';
import { getInfoTabsHTML } from './tourInfo.js';
import { wifresh } from './wiupdate.js';

// === EXPORTS ===
export let wiUsuario = null;
export let mesActual = '2025-09';
export let currentPage = 1;
export let ventasPorPagina = 5;
export let todasLasVentas = [];
export let todosLosEmpleados = [];

// 🔥 FUNCIONES SETTER
export const setVentasPorPagina = (val) => { ventasPorPagina = val; };
export const setCurrentPage = (val) => { currentPage = val; };
export const setCurrentMonth = (val) => { mesActual = val; };


// === AUTH ===
onAuthStateChanged(auth, async user => {
  if (!user) return window.location.href = '/';
  wiUsuario = user;
  try {
    const wi = getls('wiSmile');
    if (wi) return smileContenido(wi), wiTema(db, wiUsuario);
    const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
    const widt = busq.docs[0].data();
    savels('wiSmile', widt, 450);
    smileContenido(widt);
    wiTema(db, wiUsuario);
  } catch (e) { console.error(e); }
});

// === CERRAR SESIÓN ===
$(document).on('click', '.bt_salir', async () => {
  await signOut(auth);
  window.location.href = '/';
  try { localStorage.clear(); } catch (_) { Object.keys(localStorage).forEach(k => localStorage.removeItem(k)); }
});

// === RENDER ===
async function smileContenido(wi) {
  Mensaje(`Bienvenido ${wi.nombre}!`);
  
  $('.app').html(`
    <header class="top-header">
      <div class="header-container miwp">
        <div class="header-left">
          <h1 class="main-title"><i class="fas fa-trophy"></i>RETO DEL MES</h1>
          <select id="monthSelector" class="month-selector">${selectMes()}</select>
        </div>
        <div class="header-right">
          <div class="wifresh"><i class="fa-solid fa-rotate-right"></i></div>
          <div class="witemas"></div>
          <div class="user-section">
            <div class="user-info">
              <img src="${wi.imagen || '/smile.png'}" alt="${wi.nombre}" class="user-avatar">
              <span class="user-name">${wi.nombre}</span>
            </div>
            <button class="logout-btn bt_salir"><i class="fas fa-sign-out-alt"></i>Salir</button>
          </div>
        </div>
      </div>
    </header>

    <main class="main-container miwp">
      <div class="dashboard-layout">
        <section class="new-sale-panel">
          <div class="panel-header">
            <h2><i class="fas fa-plus-circle"></i> Nueva Venta</h2>
            <div class="bt_add_exportar">
              <p>Venta por:</p>
              ${['Julio', 'Sonia', 'Otros'].map((v, i) => `<label for="vt${v}"><input type="checkbox" id="vt${v}"/>${v}</label>`).join('')}
              <button class="btn-add" id="addNewSale"><i class="fas fa-plus"></i> Agregar</button>
            </div>
          </div>
          ${getFormularioHTML()}
        </section>

        <section class="competition-panel">
          <div class="panel-header">
            <h2><i class="fas fa-fire"></i> Competencia del Mes</h2>
            <span class="subtitle">¡Quien venda más gana!</span>
          </div>
          <ul class="descripcion_com"></ul>
          <div class="workers-grid" id="workersGrid"><div class="loading-workers"><i class="fas fa-spinner fa-spin"></i>Cargando empleados...</div></div>
          <div class="last-winner" id="lastWinner"><div class="loading-workers"><i class="fas fa-spinner fa-spin"></i>Cargando ganador...</div></div>
          ${resumenes()}
        </section>
      </div>

      <section class="sales-table-section">
        <div class="table-header">
          <h2><i class="fas fa-clipboard-list"></i> Registro de Ventas</h2>
          <div class="table-filters">
          <select id="filterEmployee" class="filter-select"><option value="">Todos los vendedores</option></select>
            <select id="mostrarn" class="filter-select">${[5,7,10,15].map(n => `<option value="${n}">Mostrar ${n} ventas</option>`).join('')}</select>
          </div>
        </div>
        <div class="table-container">
          <table class="sales-table" id="salesTable">
            <thead><tr>${['Fecha:calendar', 'Usuario:user', 'Tipo Tour:route', 'PAX:users', 'Nombre:user-tag', 'M. Total:calculator', 'M. Individual:dollar-sign', 'Pagado:credit-card', 'Ganancia:hand-holding-usd', 'Vendedor:user', 'Puntos:star', 'Acciones:cogs'].map(h => `<th><i class="fas fa-${h.split(':')[1]}"></i> ${h.split(':')[0]}</th>`).join('')}</tr></thead>
            <tbody id="salesTableBody"><tr><td colspan="12" class="loading-cell"><i class="fas fa-spinner fa-spin"></i> Cargando ventas...</td></tr></tbody>
          </table>
        </div>
        <div class="pagination-container" id="paginationContainer"></div>
      </section>
      ${getInfoTabsHTML()}
    </main>
    <div id="notifications-container"></div>
    <div id="modal-container"></div>
    ${footer()}
  `);

  // DIOS TE AMA BRO [START]
  $('#monthSelector').val(mesActual); //Mes actual 
  try {
    await Promise.all([
      cargarEmpleados(),    // ← Lee 1 vez
      cargarVentas(),       // ← Lee 1 vez
      cargarUltimoGanador(),// ← Lee 1 vez
      cargarTours(),        // ← Lee 1 vez
      cargarNotas()         // ← Lee 1 vez
    ]);
    actualizarFiltroEmpleados(); // ← Usa datos ya cargados (0 reads)
    initTourSelector();          // ← Usa datos ya cargados (0 reads)
    actualizarResumenCompetencia(); // ← llena los valores (reemplaza '...')
  } catch (e){console.error('ErrorIn:',e);}
  // DIOS TE AMA BRO [END]

}

// DETECCIÓN AUTOMATICA DE FECHAS 
function selectMes(){
  const hoy = new Date(), anio = hoy.getFullYear(), mes = hoy.getMonth();
  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  mesActual = `${anio}-${String(mes + 1).padStart(2,'0')}`;
  return $.map(new Array(7), (_,i) => {
    const cada = i - 3, des = mes + cada, cyear = anio + Math.floor(des/12), mesv = ((des % 12) + 12) % 12;
    const tval = `${cyear}-${String(mesv + 1).padStart(2,'0')}`;
    return `<option value="${tval}"${cada === 0 ? ' selected' : ''}>${meses[mesv]} ${cyear}</option>`;
  }).join('');
}