// === IMPORTS ===
import $ from 'jquery';
import { db } from '../firebase/init.js';
import { doc, setDoc, getDoc, getDocs, collection, serverTimestamp } from 'firebase/firestore';
import { savels, getls, savebd, getbd } from './widev.js';
import { currentMonth, todasLasVentas, todosLosEmpleados } from './smile.js';

// === EXPORTS ===
export { cargarNotas, cargarUltimoGanador, actualizarResumenCompetencia, calcularPuntosEmpleados, renderizarEmpleados, resumenes };

// === RESUMEN COMPETENCIA ===
function resumenes() {
  return `<div class="competition-summary" id="competitionSummary">
    ${['Tours de Hoy:toursHoy', 'Total Tours:totalTours', 'Puntos Totales:totalPuntos', 'Meta del Mes:2500'].map(s => {
      const [label, id] = s.split(':');
      const valor = id === '2500' ? '2500' : '0';
      return `<div class="summary-stat"><span class="summary-label">${label}</span><span class="summary-value" id="${id}">${valor}</span></div>`;
    }).join('')}
  </div>`;
}

// === RENDERIZAR EMPLEADOS ===
function renderizarEmpleados() {
  const cacheKey = `empleadosPuntos_${currentMonth}`;
  const cache = getls(cacheKey);
  
  if (cache?.length > 0 && todosLosEmpleados.length === 0) {
    todosLosEmpleados.push(...cache);
  }
  
  const html = todosLosEmpleados.map((emp, i) => {
    const rank = i + 1;
    const cls = rank === 1 ? 'champion' : rank === 2 ? 'runner-up' : '';
    const icn = rank === 1 ? 'crown' : rank === 2 ? 'medal' : 'user';
    
    return `
      <div class="worker-card ${cls}" data-employee="${emp.usuario}">
        <div class="rank-badge"><i class="fas fa-${icn}"></i>#${rank}</div>
        <div class="worker-avatar">
          <img src="${emp.imagen || '/smile.png'}" alt="${emp.nombre}">
          <div class="status-online"></div>
        </div>
        <div class="worker-info">
          <h3>${emp.nombre}</h3>
          <p>${emp.descripcion}</p>
        </div>
        <div class="worker-points">
          <span class="points-number">${emp.totalPuntos || 0}</span>
          <span class="points-label">puntos</span>
        </div>
        <div class="worker-stats">
          <div class="stat">
            <span class="stat-value">${emp.totalVentas || 0}</span>
            <span class="stat-label">Tours Vendidos</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  $('#workersGrid').html(html);
}

// === CALCULAR PUNTOS ===
async function calcularPuntosEmpleados() {
  try {
    const cacheKey = `empleadosPuntos_${currentMonth}`;
    const cache = getls(cacheKey);
    
    if (cache?.length > 0) {
      console.log(`✅ ${cache.length} empleados desde cache`);
      todosLosEmpleados.splice(0, todosLosEmpleados.length, ...cache);
      return;
    }
    
    if (!todosLosEmpleados.length) return console.warn('⚠️ Sin empleados');
    
    console.log('🔄 Calculando puntos...');
    const snap = await getDocs(collection(db, 'registrosdb'));
    const [añoActual, mesActual] = currentMonth.split('-').map(Number);
    
    const ventasMes = snap.docs.filter(d => {
      const f = d.data().fechaTour;
      if (!f) return false;
      if (f.toDate) { const fd = f.toDate(); return fd.getFullYear() === añoActual && fd.getMonth() + 1 === mesActual; } // Timestamp
      if (typeof f === 'string') { const [a, m] = f.split('-').map(Number); return a === añoActual && m === mesActual; } // String legacy
      return false;
    });

    todosLosEmpleados.forEach(emp => {
      const ventas = ventasMes.filter(d => d.data().vendedor === emp.usuario);
      emp.totalPuntos = ventas.reduce((sum, d) => sum + (d.data().puntos || 0), 0);
      emp.totalVentas = ventas.reduce((sum, d) => sum + (d.data().qventa || 0), 0);
    });
    todosLosEmpleados.sort((a, b) => b.totalPuntos - a.totalPuntos);
    
    savels(cacheKey, todosLosEmpleados, 30);
    console.log(`✅ ${todosLosEmpleados.length} empleados guardados en cache`);
    
  } catch (e) {
    console.error('❌ Error:', e);
  }
}

// === CARGAR NOTAS ===
async function cargarNotas() {
  try {
    console.log('🔄 Cargando notas...');
    
    const cache = getls('notasSmile');
    if (cache?.length > 0) {
      console.log(`✅ ${cache.length} notas desde cache`);
      renderizarNotas(cache);
      return;
    }
    
    const snap = await getDocs(collection(db, 'notas'));
    if (snap.empty) {
      console.log('📭 No hay notas');
      renderizarNotas([]);
      return;
    }
    
    const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    savels('notasSmile', data, 600);
    console.log(`✅ ${data.length} notas cargadas`);
    renderizarNotas(data);
    
  } catch (e) {
    console.error('❌ Error notas:', e);
    renderizarNotas([]);
  }
}

// === RENDERIZAR NOTAS ===
function renderizarNotas(notas) {
  const html = notas.length > 0 ? `
    ${notas.map(n => `<li>${n.nota}</li>`).join('')}
    <div style="font-size:var(--fz_s2);padding:.5vh 0">
      <i class="fas fa-sync"></i> Actualizado: ${new Date().toLocaleString('es-ES')}
    </div>
  ` : `<div style="color:#666;text-align:center;padding:20px;font-style:italic">
    <i class="fas fa-info-circle"></i> No hay noticias
  </div>`;
  
  $('.descripcion_com').html(html);
}

// === ACTUALIZAR RESUMEN ===
function actualizarResumenCompetencia() {
  const [añoActual, mesActual] = currentMonth.split('-').map(Number);
  const hoy = new Date();
  const hoyStr = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
  
  const ventasMes = todasLasVentas.filter(v => {
    const f = v.fechaTour;
    if (!f) return false;
    if (f.toDate) { const fd = f.toDate(); return fd.getFullYear() === añoActual && fd.getMonth() + 1 === mesActual; } // Timestamp
    if (typeof f === 'string') { const [a, m] = f.split('-').map(Number); return a === añoActual && m === mesActual; } // String
    return false;
  });
  
  const ventasHoy = ventasMes.filter(v => {
    const f = v.fechaTour;
    if (!f) return false;
    if (typeof f === 'string') return f === hoyStr; // String
    if (f.toDate) { const fd = f.toDate(); return `${fd.getFullYear()}-${String(fd.getMonth() + 1).padStart(2, '0')}-${String(fd.getDate()).padStart(2, '0')}` === hoyStr; } // Timestamp
    return false;
  });
  
  const totalTours = ventasMes.reduce((sum, v) => sum + (v.qventa || 0), 0);
  const totalPuntos = ventasMes.reduce((sum, v) => sum + (v.puntos || 0), 0);
  const toursHoy = ventasHoy.reduce((sum, v) => sum + (v.qventa || 0), 0);
  
  $('#totalTours').text(totalTours);
  $('#totalPuntos').text(totalPuntos);
  $('#toursHoy').text(toursHoy);
  
  const meta = 2500;
  const stats = [Math.min((toursHoy / 5) * 100, 100), Math.min((totalTours / 50) * 100, 100), Math.min((totalPuntos / meta) * 100, 100), 100];
  
  $('.summary-stat').each((i, el) => {
    const grados = (stats[i] / 100) * 360;
    $(el).css({ '--progress': `${grados}deg`, '--width': `${stats[i]}%` });
  });
}

// === CARGAR ÚLTIMO GANADOR ===
async function cargarUltimoGanador() {
  try {
    const mesAnt = calcularMesAnterior(currentMonth);
    const docId = mesAnt.replace('-', '');
    
    const ganadorDoc = await getDoc(doc(db, 'ganadores', docId));
    if (ganadorDoc.exists()) return renderizarUltimoGanador(ganadorDoc.data());
    
    // Calcular ganador automáticamente
    const snap = await getDocs(collection(db, 'registrosdb'));
    const puntos = {};
    const [añoAnt, mesAnt2] = mesAnt.split('-').map(Number);
    
    snap.docs.forEach(d => {
      const v = d.data();
      const f = v.fechaTour;
      if (!f) return;
      
      let esMesAnt = false;
      if (typeof f === 'string') { const [a, m] = f.split('-').map(Number); esMesAnt = a === añoAnt && m === mesAnt2; } // String
      else if (f.toDate) { const fd = f.toDate(); esMesAnt = fd.getFullYear() === añoAnt && fd.getMonth() + 1 === mesAnt2; } // Timestamp
      
      if (esMesAnt) {
        if (!puntos[v.vendedor]) puntos[v.vendedor] = { puntos: 0, ventas: 0 };
        puntos[v.vendedor].puntos += (v.puntos || 0);
        puntos[v.vendedor].ventas += (v.qventa || 0);
      }
    });
    
    const arr = Object.entries(puntos);
    if (!arr.length) {
      $('#lastWinner').html(`
        <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
        <div class="no-winner"><i class="fas fa-question-circle"></i><span>No hay datos</span></div>
      `);
      return;
    }
    
    arr.sort((a, b) => b[1].puntos - a[1].puntos);
    const [ganador, datos] = arr[0];
    
    const ganadorData = {
      ganador,
      puntosGanados: datos.puntos,
      totalVentas: datos.ventas,
      mes: mesAnt2,
      year: añoAnt,
      mesCompleto: savebd(`${mesAnt}-01`),
      fechaRegistro: serverTimestamp()
    };
    
    await setDoc(doc(db, 'ganadores', docId), ganadorData);
    renderizarUltimoGanador(ganadorData);
    
  } catch (e) {
    console.error('Error ganador:', e);
    $('#lastWinner').html(`
      <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
      <div class="error-winner"><i class="fas fa-exclamation-triangle"></i><span>Error</span></div>
    `);
  }
}

// === AUXILIARES ===
function calcularMesAnterior(mes) {
  const [y, m] = mes.split('-');
  const f = new Date(parseInt(y), parseInt(m) - 2);
  return `${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, '0')}`;
}

function renderizarUltimoGanador(data) {
  const emp = todosLosEmpleados.find(e => e.usuario === data.ganador || e.nombre === data.ganador);
  const fechaMes = getbd(data.mesCompleto); // ✅ ACTUALIZADO
  
  $('#lastWinner').html(`
    <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
    <div class="winner-info">
      <img src="${emp?.imagen || '/smile.png'}" alt="${data.ganador}">
      <div class="winner-details">
        <h4>${data.ganador}</h4>
        <p>${data.mes}/${data.year}</p>
        <span class="winner-points">${data.puntosGanados} puntos</span>
        <span class="winner-sales">${data.totalVentas} tours</span>
      </div>
      <div class="winner-achievement"><i class="fas fa-crown"></i><span>¡Campeón!</span></div>
    </div>
  `);
}