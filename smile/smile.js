// === IMPORTS ===
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { wiTema, Mensaje, savels, getls, mesPeru } from './widev.js';
import { cargarNotas, cargarUltimoGanador, actualizarResumenCompetencia } from './tourRanking.js';
import { cargarVentas, actualizarFiltroEmpleados, cargarEmpleados } from './tourHistorial.js';
import { cargarTours, initTourSelector, getFormularioHTML } from './tourRegistrar.js';
import { getInfoTabsHTML } from './tourInfo.js';
import { wifresh } from './wiupdate.js';

// === EXPORTS ===
export let userAuth = null;
export let currentMonth = '2025-09';
export let currentPage = 1;
export let ventasPorPagina = 5;
export let todasLasVentas = [];
export let todosLosEmpleados = [];

// 🔥 FUNCIONES SETTER
export const setVentasPorPagina = (val) => { ventasPorPagina = val; };
export const setCurrentPage = (val) => { currentPage = val; };
export const setCurrentMonth = (val) => { currentMonth = val; };

// === AUTH ===
onAuthStateChanged(auth, async user => {
  if (!user) return window.location.href = '/';
  userAuth = user;
  
  try {
    const wi = getls('wiSmile') || await obtenerDatosUsuario(user);
    smileContenido(wi);
    wiTema(db, userAuth);
  } catch (e) { console.error(e); }
});

// Obtener datos de Firebase
const obtenerDatosUsuario = async (user) => {
  const snap = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
  const data = snap.docs[0].data();
  savels('wiSmile', data, 450);
  return data;
};

// Cerrar sesión
$(document).on('click', '.bt_salir', async () => {
  await signOut(auth);
  localStorage.clear();
  window.location.href = '/';
});

// === RENDER ===
function smileContenido(wi) {
  Mensaje(`Bienvenido ${wi.nombre}!`);
  
  $('.app').html(`
    <header class="top-header">
      <div class="header-container miwp">
        <div class="header-left">
          <h1 class="main-title"><i class="fas fa-trophy"></i>RETO DEL MES</h1>
          <select id="monthSelector" class="month-selector">
            ${['09', '10', '11', '12'].map(m => `<option value="2025-${m}">${['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][m-9]} 2025</option>`).join('')}
          </select>
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
          <ul class="descripcion_com">
            <li>¡Buenos días Rubi y Piero! He actualizado la plataforma con mejoras en la búsqueda de tours y otras funcionalidades.</li>
            <li>Hemos actualizado el campo de motivo de viaje para mantener todo al día con SUNAT.</li>
          </ul>
          <div class="workers-grid" id="workersGrid"><div class="loading-workers"><i class="fas fa-spinner fa-spin"></i>Cargando empleados...</div></div>
          <div class="last-winner" id="lastWinner"><div class="loading-workers"><i class="fas fa-spinner fa-spin"></i>Cargando ganador...</div></div>
          <div class="competition-summary" id="competitionSummary">
            ${['Tours de Hoy:toursHoy', 'Total Tours:totalTours', 'Puntos Totales:totalPuntos', 'Meta del Mes:2500'].map(s => {
              const [label, id] = s.split(':');
              const valor = id === '2500' ? '2500' : '0';
              return `<div class="summary-stat"><span class="summary-label">${label}</span><span class="summary-value" id="${id}">${valor}</span></div>`;
            }).join('')}
          </div>
        </section>
      </div>

      <section class="sales-table-section">
        <div class="table-header">
          <h2><i class="fas fa-clipboard-list"></i> Registro de Ventas</h2>
          <div class="table-filters">
            <select id="mostrarn" class="filter-select">${[5,7,10,15].map(n => `<option value="${n}">Mostrar ${n} ventas</option>`).join('')}</select>
            <select id="filterEmployee" class="filter-select"><option value="">Todos los vendedores</option></select>
            <button class="filter-btn" id="todayFilter"><i class="fas fa-calendar-day"></i> Hoy</button>
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
    <footer class='foo hwb txc'><p>Creado con<i class='wicon wi-corazon'></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class='wty'></span><span class='abw tm11042025'>| Acerca del app | Actualizado</span></p></footer>
  `);

  inicializarDashboard();
}

// === INIT ===
async function inicializarDashboard() {
  try {
    currentMonth = mesPeru();
    $('#monthSelector').val(currentMonth);
    $('#fechaTour').val(mesPeru('fecha'));
    
    await Promise.all([cargarEmpleados(), cargarVentas(), cargarUltimoGanador(), cargarTours(), cargarNotas()]);
    
    actualizarFiltroEmpleados();
    actualizarResumenCompetencia();
    initTourSelector();
  } catch (e) {
    console.error('Error init:', e);
  }
}