/* ==========================================================================
   RANKING.JS - Módulo SPA Premium del Salón de Campeones & Podio 3D
   ========================================================================== */

import $ from 'jquery';
import './ranking.css';
import { db } from '../firebase.js';
import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  setDoc, 
  serverTimestamp, 
  Timestamp 
} from 'firebase/firestore';
import { wiAuth, Notificacion, Capi, Capit, getls, savels } from '../widev.js';
import { rutas } from '../rutas.js';
import { getMesActual, obtenerRankingMes } from './zsmile.js';

// --- ELEMENTO DE RENDER SPA ---
export const render = () => `
  <div class="smw_rank_view">
    
    <!-- CABECERA: Título, Subtítulo y Controles -->
    <header class="smw_rank_header wi_fadeUp">
      <div class="smw_rank_title_row">
        <h1><i class="fas fa-trophy smw_gold_glow"></i> Salón de Campeones</h1>
        <p class="smw_rank_subtitle">Puntuaciones y ventas acumuladas del mes</p>
      </div>
      
      <div class="smw_rank_controls">
        <!-- Selector de Mes Estilizado -->
        <div class="smw_month_selector_wrap">
          <button class="smw_month_nav_btn" id="btnMesAnt" title="Mes Anterior">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="smw_month_display" id="btnMonthDropdown">
            <i class="fas fa-calendar-alt"></i>
            <span id="txtMesSeleccionado">...</span>
            <select id="selRankingMes" class="smw_month_hidden_select"></select>
          </div>
          <button class="smw_month_nav_btn" id="btnMesSig" title="Mes Siguiente">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <a href="/smile" class="smw_back_btn nv_item" data-page="smile">
          <i class="fas fa-arrow-left"></i> Panel de Control
        </a>
      </div>
    </header>

    <!-- BANDA GLOBAL: KPIs del Mes -->
    <section class="smw_rank_kpis_grid wi_fadeUp" id="rankKpiGrid">
      
      <div class="smw_rkpi_card" style="--kpi-color: var(--Cielo)">
        <div class="smw_rkpi_icon"><i class="fas fa-car-side"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiToursHoy">0</span>
          <span class="smw_rkpi_lbl">Tours Hoy</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Paz)">
        <div class="smw_rkpi_icon"><i class="fas fa-route"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiToursMes">0</span>
          <span class="smw_rkpi_lbl">Total Tours Mes</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Mora)">
        <div class="smw_rkpi_icon"><i class="fas fa-star"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiPuntosEquipo">0</span>
          <span class="smw_rkpi_lbl">Puntos Equipo</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Oro)">
        <div class="smw_rkpi_icon"><i class="fas fa-bullseye"></i></div>
        <div class="smw_rkpi_info" style="width: 100%;">
          <div class="smw_meta_progress_wrap">
            <span class="smw_rkpi_val" id="rkpiMetaMes">0%</span>
            <span class="smw_rkpi_lbl">Meta (2500 pts)</span>
          </div>
          <div class="smw_meta_progress_bar">
            <div class="smw_meta_progress_fill" id="metaProgressFill" style="width: 0%"></div>
          </div>
        </div>
      </div>

    </section>

    <!-- SECCIÓN DEL PODIO 3D (Top 3) -->
    <section class="smw_podium_section wi_fadeUp" id="podiumSection">
      <!-- Renderizado Dinámico -->
    </section>

    <!-- SECCIÓN INFERIOR: Clasificación General y Sidebar -->
    <div class="smw_rank_bottom_grid wi_fadeUp">
      
      <!-- Columna Izquierda: Clasificación #4+ -->
      <div class="smw_rank_list_card">
        <div class="smw_card_header">
          <h2><i class="fas fa-list-ol" style="color:var(--mco)"></i> Clasificación General</h2>
          <span class="smw_badge" id="lblCountParticipantes">0 Colaboradores</span>
        </div>
        <div class="smw_leaderboard_list" id="leaderboardList">
          <!-- Renderizado Dinámico -->
        </div>
      </div>

      <!-- Columna Derecha: Sidebar (Ganador anterior y Avisos) -->
      <div class="smw_rank_sidebar">
        
        <!-- Tarjeta de Ganador Anterior -->
        <div class="smw_winner_card" id="lastWinnerCard">
          <div class="smw_winner_header">
            <i class="fas fa-crown"></i>
            <h3>Campeón del Mes Anterior</h3>
          </div>
          <div class="smw_winner_body" id="winnerBody">
            <div class="smw_winner_loading">
              <i class="fas fa-spinner fa-spin"></i> Cargando campeón...
            </div>
          </div>
        </div>

        <!-- Tarjeta de Avisos del Equipo -->
        <div class="smw_notes_card">
          <div class="smw_notes_header">
            <i class="fas fa-bullhorn" style="color:var(--mco)"></i>
            <h3>Avisos del Equipo</h3>
          </div>
          <ul class="smw_notes_list" id="notesList">
            <div class="smw_winner_loading">
              <i class="fas fa-spinner fa-spin"></i> Cargando avisos...
            </div>
          </ul>
        </div>

      </div>

    </div>

  </div>
`;

// --- INICIALIZACIÓN DEL MÓDULO SPA ---
export const init = async () => {
  const user = wiAuth.user;
  if (!user) return setTimeout(() => rutas.navigate('/login'), 100);

  // Mostrar vistas con animación
  $('.wi_fadeUp').addClass('visible wi_visible');

  // Inicializar selector de meses
  _inicializarSelectorMes();

  // Cargar datos para el mes actual
  const mesActual = getMesActual();
  await cargarDatosMes(mesActual);

  // Cargar avisos del equipo
  await cargarNotas();

  console.log('🏆 SPA Ranking cargado exitosamente');
  window.__WIREADY__ = true;
};

// --- LIMPIEZA DE EVENTOS AL DESMONTAR ---
export const cleanup = () => {
  $(document).off('.ranking');
  $('#selRankingMes').off('.ranking');
  $('#btnMesAnt').off('.ranking');
  $('#btnMesSig').off('.ranking');
};

// --- DIBUJAR LISTA DE LOS ÚLTIMOS 6 MESES ---
function getUltimosMeses(n = 6) {
  const meses = [];
  const hoy = new Date();
  const mesesNombres = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  for (let i = 0; i < n; i++) {
    const d = new Date(hoy.getFullYear(), hoy.getMonth() - i, 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const val = `${y}-${m}`;
    const lbl = `${mesesNombres[d.getMonth()]} ${y}`;
    meses.push({ val, lbl });
  }
  return meses;
}

// --- CALCULAR MES ANTERIOR ---
function calcularMesAnterior(mes) {
  const [y, m] = mes.split('-');
  const f = new Date(parseInt(y), parseInt(m) - 2, 1);
  return `${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, '0')}`;
}

// --- EVENTOS DEL SELECTOR DE MES ---
function _inicializarSelectorMes() {
  const meses = getUltimosMeses(6);
  const select = $('#selRankingMes');
  select.empty();
  
  meses.forEach(m => {
    select.append(`<option value="${m.val}">${m.lbl}</option>`);
  });

  const mesActual = getMesActual();
  select.val(mesActual);
  $('#txtMesSeleccionado').text(select.find('option:selected').text());

  // Cambios en select nativo oculto
  select.on('change.ranking', async () => {
    const val = select.val();
    $('#txtMesSeleccionado').text(select.find('option:selected').text());
    await cargarDatosMes(val);
  });

  // Click en botón mes anterior (izquierda, va al pasado -> incrementa index)
  $('#btnMesAnt').on('click.ranking', () => {
    const currentIdx = select.prop('selectedIndex');
    if (currentIdx < meses.length - 1) {
      select.prop('selectedIndex', currentIdx + 1).trigger('change');
    } else {
      Notificacion('No hay meses anteriores disponibles.', 'info');
    }
  });

  // Click en botón mes siguiente (derecha, va al futuro -> disminuye index)
  $('#btnMesSig').on('click.ranking', () => {
    const currentIdx = select.prop('selectedIndex');
    if (currentIdx > 0) {
      select.prop('selectedIndex', currentIdx - 1).trigger('change');
    } else {
      Notificacion('Estás en el mes más reciente.', 'info');
    }
  });
}

// --- CARGAR TODOS LOS COMPONENTES PARA EL MES DADO ---
async function cargarDatosMes(mes) {
  try {
    // 1. Mostrar Skeletons Premium
    $('#podiumSection').html(_generarSkeletonsPodio());
    $('#leaderboardList').html(_generarSkeletonsRankingList(4));

    // 2. Obtener lista desde base de datos
    const ranking = await obtenerRankingMes(mes);
    
    // 3. Pintar Podio
    $('#podiumSection').html(renderPodio(ranking));
    
    // 4. Pintar Tabla
    $('#leaderboardList').html(renderListadoRanking(ranking));
    $('#lblCountParticipantes').text(`${ranking.length} Colaboradores`);

    // 5. Cargar Resumen de KPIs
    await actualizarKpisGlobales(mes);

    // 6. Cargar Ganador anterior
    await cargarUltimoGanador(mes, ranking);

    // 7. Disparar animaciones
    setTimeout(() => {
      $('.smw_anim_bounce, .smw_anim_fade').addClass('visible');
    }, 50);

  } catch (error) {
    console.error('Error cargando mes:', error);
    Notificacion('Error cargando clasificación del mes', 'error');
  }
}

// --- RENDERIZACIÓN DEL PODIO 3D (TOP 3) ---
function renderPodio(ranking) {
  const top1 = ranking[0] || null;
  const top2 = ranking[1] || null;
  const top3 = ranking[2] || null;

  const renderPedestal = (emp, pos, heightClass, medalColor, medalIcon) => {
    if (!emp) {
      return `
        <div class="smw_podium_place smw_empty_place ${heightClass}">
          <div class="smw_podium_pedestal">
            <span class="smw_pedestal_num">#${pos}</span>
          </div>
        </div>
      `;
    }

    const iniciales = `${(emp.nombre || '?')[0]}${(emp.nombre || '')[1] || ''}`.toUpperCase();
    const avatarHtml = emp.imagen 
      ? `<img src="${emp.imagen}" alt="${emp.nombre}" class="smw_podium_img">` 
      : `<div class="smw_podium_avatar_initials">${iniciales}</div>`;

    const crownHtml = pos === 1 ? `<div class="smw_crown_icon"><i class="fas fa-crown"></i></div>` : '';

    return `
      <div class="smw_podium_place ${heightClass} smw_anim_bounce" style="animation-delay: ${(3 - pos) * 0.15}s">
        ${crownHtml}
        <div class="smw_podium_avatar_wrap" style="--glow-color: ${medalColor}">
          ${avatarHtml}
          <div class="smw_podium_badge"><i class="fas ${medalIcon}"></i></div>
        </div>
        <div class="smw_podium_info">
          <h3>${Capit(emp.nombre)}</h3>
          <p>${Capi(emp.descripcion || 'Colaborador')}</p>
        </div>
        <div class="smw_podium_score">
          <span class="smw_podium_pts">${emp.totalPuntos} <span>pts</span></span>
          <span class="smw_podium_tours">${emp.totalVentas} tours</span>
        </div>
        <div class="smw_podium_pedestal" style="--ped-color: ${medalColor}">
          <span class="smw_pedestal_num">#${pos}</span>
        </div>
      </div>
    `;
  };

  return `
    <div class="smw_podium_container">
      ${renderPedestal(top2, 2, 'smw_pos_2', '#A0A0A0', 'fa-medal')}
      ${renderPedestal(top1, 1, 'smw_pos_1', '#FFD700', 'fa-crown')}
      ${renderPedestal(top3, 3, 'smw_pos_3', '#CD7F32', 'fa-award')}
    </div>
  `;
}

// --- RENDERIZACIÓN DE LAS DEMÁS POSICIONES (#4+) ---
function renderListadoRanking(ranking) {
  const restOfRanking = ranking.slice(3);
  if (!restOfRanking.length) {
    return `
      <div class="smw_list_empty">
        <i class="fas fa-user-friends"></i>
        <span>No hay más participantes registrados este mes.</span>
      </div>
    `;
  }

  return restOfRanking.map((emp, index) => {
    const pos = index + 4;
    const iniciales = `${(emp.nombre || '?')[0]}${(emp.nombre || '')[1] || ''}`.toUpperCase();
    const avatarHtml = emp.imagen 
      ? `<img src="${emp.imagen}" alt="${emp.nombre}" class="smw_list_avatar">` 
      : `<div class="smw_list_avatar_initials">${iniciales}</div>`;

    return `
      <div class="smw_list_row smw_anim_fade" style="animation-delay: ${index * 0.05}s">
        <div class="smw_list_pos">#${pos}</div>
        <div class="smw_list_avatar_wrap">
          ${avatarHtml}
        </div>
        <div class="smw_list_info">
          <h4>${Capit(emp.nombre)}</h4>
          <p>${Capi(emp.descripcion || 'Colaborador')}</p>
        </div>
        <div class="smw_list_stats">
          <div class="smw_lstat">
            <span class="smw_lstat_val">${emp.totalVentas}</span>
            <span class="smw_lstat_lbl">tours</span>
          </div>
          <div class="smw_lstat_sep"></div>
          <div class="smw_lstat_pts">
            <strong>${emp.totalPuntos}</strong>
            <span>puntos</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- ACTUALIZAR KPIS GLOBALES EN LA BANDA SUPERIOR ---
async function actualizarKpisGlobales(mes) {
  try {
    const key = `resumenMes_${mes}`;
    const hoy = new Date();
    const hoyStr = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
    
    // Intentar caché local primero
    const cached = getls(key);
    if (cached && cached.mes === mes && cached.dia === hoyStr) {
      _pintarKpisGlobales(cached);
      return;
    }

    const snap = await getDocs(collection(db, 'registrosdb'));
    const [yr, mm] = mes.split('-').map(Number);
    let toursMes = 0;
    let puntosMes = 0;
    let toursHoy = 0;

    snap.docs.forEach(d => {
      const v = d.data();
      const f = v.fechaTour;
      if (!f) return;
      let a, m, dStr;
      
      if (typeof f === 'string') {
        const parts = f.split('-');
        a = Number(parts[0]);
        m = Number(parts[1]);
        dStr = f;
      } else if (f.toDate) {
        const fd = f.toDate();
        a = fd.getFullYear();
        m = fd.getMonth() + 1;
        dStr = `${a}-${String(m).padStart(2, '0')}-${String(fd.getDate()).padStart(2, '0')}`;
      } else {
        return;
      }

      if (a === yr && m === mm) {
        toursMes += (parseInt(v.qventa) || 0);
        puntosMes += (parseInt(v.puntos) || 0);
        if (dStr === hoyStr) {
          toursHoy += (parseInt(v.qventa) || 0);
        }
      }
    });

    const meta = 2500;
    const data = { mes, dia: hoyStr, toursHoy, toursMes, totalPuntos: puntosMes, meta };
    savels(key, data, 0.25); // Cache por 15 minutos
    _pintarKpisGlobales(data);
  } catch (error) {
    console.error('Error actualizando KPIs globales:', error);
  }
}

function _pintarKpisGlobales({ toursHoy, toursMes, totalPuntos, meta }) {
  $('#rkpiToursHoy').text(toursHoy);
  $('#rkpiToursMes').text(toursMes);
  $('#rkpiPuntosEquipo').text(totalPuntos);
  
  const pct = Math.min(Math.round((totalPuntos / meta) * 100), 100);
  $('#rkpiMetaMes').text(`${pct}%`);
  $('#metaProgressFill').css('width', `${pct}%`);
}

// --- CARGAR GANADOR DEL MES ANTERIOR ---
async function cargarUltimoGanador(mesActual, empleados) {
  try {
    const mesAnt = calcularMesAnterior(mesActual);
    const key = `ganadorMes_${mesAnt}`;
    const cache = getls(key);
    
    if (cache) {
      renderizarUltimoGanador(cache, empleados);
      return;
    }

    // Inyectar skeleton si va a consultar a Firestore
    $('#winnerBody').html(_generarSkeletonGanador());

    const id = mesAnt.replace('-', '');
    const docu = await getDoc(doc(db, 'ganadores', id));
    if (docu.exists()) {
      const dat = docu.data();
      savels(key, dat, 1440); // 24 horas caché
      renderizarUltimoGanador(dat, empleados);
      return;
    }

    // Calcular ganador mes anterior en vivo
    const [ano, mes] = mesAnt.split('-').map(Number);
    const snap = await getDocs(collection(db, 'registrosdb'));
    
    const mapa = {};
    snap.docs.forEach(d => {
      const v = d.data();
      const f = v.fechaTour;
      if (!f) return;
      let a, m;
      if (typeof f === 'string') {
        [a, m] = f.split('-').map(Number);
      } else if (f.toDate) {
        const fd = f.toDate();
        a = fd.getFullYear();
        m = fd.getMonth() + 1;
      } else {
        return;
      }

      if (a === ano && m === mes) {
        const ven = v.vendedor;
        if (!mapa[ven]) mapa[ven] = { puntos: 0, ventas: 0 };
        mapa[ven].puntos += (parseInt(v.puntos) || 0);
        mapa[ven].ventas += (parseInt(v.qventa) || 1);
      }
    });

    const lista = Object.entries(mapa);
    if (!lista.length) {
      $('#winnerBody').html(`
        <div class="smw_winner_empty">
          <i class="fas fa-question-circle"></i>
          <span>No hay datos de ventas en ${mes}/${ano} para definir un campeón.</span>
        </div>
      `);
      return;
    }

    const [gan, inf] = lista.sort((a, b) => b[1].puntos - a[1].puntos)[0];
    
    // Convertidor para Firebase Timestamp
    const savebd = (fecha) => {
      const [y, m, d] = fecha.split('-').map(Number);
      const ahora = new Date();
      const fechaObj = new Date(y, m - 1, d, ahora.getHours(), ahora.getMinutes(), ahora.getSeconds());
      return Timestamp.fromDate(fechaObj);
    };

    const dat = {
      ganador: gan,
      puntosGanados: inf.puntos,
      totalVentas: inf.ventas,
      mes: mes,
      year: ano,
      mesCompleto: savebd(`${mesAnt}-01`),
      fechaRegistro: serverTimestamp()
    };

    await setDoc(doc(db, 'ganadores', id), dat);
    savels(key, dat, 1440);
    renderizarUltimoGanador(dat, empleados);
  } catch (error) {
    console.error('Error cargando campeón anterior:', error);
    $('#winnerBody').html(`
      <div class="smw_winner_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar campeón anterior</span>
      </div>
    `);
  }
}

function renderizarUltimoGanador(data, empleados) {
  const emp = empleados.find(e => e.usuario === data.ganador || e.nombre === data.ganador);
  const nombreCapi = Capit(data.ganador || '');
  const iniciales = nombreCapi.slice(0, 2).toUpperCase();
  
  const avatarHtml = emp?.imagen 
    ? `<img src="${emp.imagen}" alt="${data.ganador}">`
    : `<div class="smw_winner_avatar_initials">${iniciales}</div>`;

  $('#winnerBody').html(`
    <div class="smw_winner_content">
      <div class="smw_winner_avatar_wrap">
        ${avatarHtml}
        <div class="smw_winner_crown"><i class="fas fa-crown"></i></div>
      </div>
      <div class="smw_winner_details">
        <h4>${nombreCapi}</h4>
        <p class="smw_winner_period"><i class="fas fa-calendar-alt"></i> Competencia: ${data.mes}/${data.year}</p>
        <div class="smw_winner_stats">
          <span class="smw_w_stat_pts"><i class="fas fa-star"></i> <strong>${data.puntosGanados}</strong> pts</span>
          <span class="smw_w_stat_tours"><i class="fas fa-route"></i> <strong>${data.totalVentas}</strong> tours</span>
        </div>
      </div>
    </div>
  `);
}

// --- CARGAR AVISOS DEL EQUIPO (NOTAS) ---
async function cargarNotas() {
  try {
    const cache = getls('notasSmile');
    if (cache) {
      renderizarNotas(cache);
      return;
    }

    // Inyectar skeleton si va a consultar a Firestore
    $('#notesList').html(_generarSkeletonNotas());

    const snap = await getDocs(collection(db, 'notas'));
    if (snap.empty) {
      renderizarNotas([]);
      return;
    }

    const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    savels('notasSmile', data, 10); // Cache por 10 horas
    renderizarNotas(data);
  } catch (error) {
    console.warn('Error cargando notas:', error);
    renderizarNotas([]);
  }
}

function renderizarNotas(notas) {
  if (!notas || !notas.length) {
    $('#notesList').html(`
      <div class="smw_notes_empty">
        <i class="fas fa-info-circle"></i>
        <span>No hay avisos recientes del equipo.</span>
      </div>
    `);
    return;
  }

  const html = notas.map(n => `
    <li class="smw_note_item">
      <i class="fas fa-bullhorn"></i>
      <span>${n.nota || ''}</span>
    </li>
  `).join('');

  $('#notesList').html(html);
}

function _generarSkeletonsPodio() {
  return `
    <div class="smw_podium_container smw_sk_podium">
      <!-- Lugar #2 -->
      <div class="smw_podium_place smw_pos_2">
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 11vh; height: 11vh;"></div>
        <div class="smw_sk_el" style="width: 80px; height: 16px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 55px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 14vh; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
      <!-- Lugar #1 -->
      <div class="smw_podium_place smw_pos_1">
        <div class="smw_crown_icon" style="color: var(--brd); opacity: 0.3;"><i class="fas fa-crown"></i></div>
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 13.5vh; height: 13.5vh;"></div>
        <div class="smw_sk_el" style="width: 90px; height: 18px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 60px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 20vh; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
      <!-- Lugar #3 -->
      <div class="smw_podium_place smw_pos_3">
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 11vh; height: 11vh;"></div>
        <div class="smw_sk_el" style="width: 80px; height: 16px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 55px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 10vh; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
    </div>
  `;
}

function _generarSkeletonsRankingList(cant = 4) {
  return Array(cant).fill(0).map((_, index) => `
    <div class="smw_list_row smw_sk_row_rank" style="animation-delay: ${index * 0.05}s">
      <div class="smw_sk_el" style="width: 25px; height: 18px; border-radius: 4px; margin-right: 2.5vh;"></div>
      <div class="smw_list_avatar_wrap smw_sk_el smw_sk_circle" style="margin-right: 2.5vh; border-radius: 50%; width: 6.5vh; height: 6.5vh; background: none;"></div>
      <div class="smw_list_info" style="flex: 1;">
        <div class="smw_sk_el" style="width: 120px; height: 16px; margin-bottom: 0.6vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 85px; height: 12px; border-radius: 4px;"></div>
      </div>
      <div class="smw_list_stats" style="display: flex; gap: 2.5vh; align-items: center;">
        <div class="smw_sk_el" style="width: 40px; height: 16px; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 60px; height: 18px; border-radius: 4px;"></div>
      </div>
    </div>
  `).join('');
}

function _generarSkeletonGanador() {
  return `
    <div class="smw_winner_content smw_sk_winner">
      <div class="smw_winner_avatar_wrap smw_sk_el smw_sk_circle" style="border-radius: 50%; width: 9vh; height: 9vh; background: none;"></div>
      <div class="smw_winner_details" style="flex: 1;">
        <div class="smw_sk_el" style="width: 100px; height: 16px; margin-bottom: 0.8vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 120px; height: 12px; margin-bottom: 1.2vh; border-radius: 4px;"></div>
        <div class="smw_winner_stats" style="display: flex; gap: 1.5vh;">
          <span class="smw_sk_el" style="width: 60px; height: 16px; border-radius: 4px;"></span>
          <span class="smw_sk_el" style="width: 60px; height: 16px; border-radius: 4px;"></span>
        </div>
      </div>
    </div>
  `;
}

function _generarSkeletonNotas() {
  return `
    <div class="smw_notes_sk" style="width: 100%; padding: 1vh 0;">
      <div class="smw_sk_el" style="width: 100%; height: 14px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
      <div class="smw_sk_el" style="width: 90%; height: 14px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
      <div class="smw_sk_el" style="width: 95%; height: 14px; border-radius: 4px;"></div>
    </div>
  `;
}

