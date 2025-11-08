// === IMPORTS ===
import $ from 'jquery';
import { db } from '../firebase/init.js';
import { doc, setDoc, getDoc, getDocs, collection, serverTimestamp } from 'firebase/firestore';
import { savels, getls, savebd, getbd, Capi } from './widev.js';
import { mesActual, todasLasVentas, todosLosEmpleados } from './smile.js';

// === EXPORTS ===
export { cargarNotas, cargarUltimoGanador, actualizarResumenCompetencia, calcularPuntosEmpleados, renderizarEmpleados, resumenes };

// === RENDERIZAR EMPLEADOS ===
function renderizarEmpleados() {
  const cache = getls(`empleadosPuntos_${mesActual}`);
  if (cache) return pintarRanking(cache);
  if (!todosLosEmpleados.length) return $('.app').html(`<div class="estado-vacio"><i class="fa-solid fa-spinner fa-spin"></i><p>Cargando empleados...</p></div>`);
  
  savels(`empleadosPuntos_${mesActual}`, todosLosEmpleados, 5);
  pintarRanking(todosLosEmpleados);
}

function pintarRanking(empleados) {
  const html = empleados.map((emp, i) => {
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
    const cache = getls(`empleadosPuntos_${mesActual}`);
    if (cache?.length) {
      console.log(`✅ ${cache.length} empleados desde cache`);
      todosLosEmpleados.splice(0, todosLosEmpleados.length, ...cache);
      return;
    }
    
    if (!todosLosEmpleados.length) return console.warn('⚠️ Sin empleados');
    
    console.log('🔄 Calculando puntos...');
    const snap = await getDocs(collection(db, 'registrosdb'));
    const [actualYear, actualMes] = mesActual.split('-').map(Number);
    
    const ventasMes = snap.docs.filter(d => {
      const f = d.data().fechaTour;
      if (!f) return false;
      if (f.toDate) { const fd = f.toDate(); return fd.getFullYear() === actualYear && fd.getMonth() + 1 === actualMes; }
      if (typeof f === 'string') { const [a, m] = f.split('-').map(Number); return a === actualYear && m === actualMes; }
      return false;
    });

    todosLosEmpleados.forEach(emp => {
      const ventas = ventasMes.filter(d => d.data().vendedor === emp.usuario);
      emp.totalPuntos = ventas.reduce((sum, d) => sum + (d.data().puntos || 0), 0);
      emp.totalVentas = ventas.reduce((sum, d) => sum + (d.data().qventa || 0), 0);
    });
    
    todosLosEmpleados.sort((a, b) => b.totalPuntos - a.totalPuntos);
    savels(`empleadosPuntos_${mesActual}`, todosLosEmpleados, 5);
    console.log(`✅ ${todosLosEmpleados.length} empleados guardados en cache`);
    
  } catch (e) { console.error('❌ Error:', e); }
}

// === CARGAR NOTAS ===
async function cargarNotas() {
  try {
    const cache = getls('notasSmile');
    if (cache?.length) return console.log(`✅ ${cache.length} notas desde cache`), renderizarNotas(cache);
    
    console.log('🔄 Cargando notas...');
    const snap = await getDocs(collection(db, 'notas'));
    
    if (snap.empty) return console.log('📭 No hay notas'), renderizarNotas([]);
    
    const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    savels('notasSmile', data, 600);
    console.log(`✅ ${data.length} notas cargadas`);
    renderizarNotas(data);
    
  } catch (e) { console.error('❌ Error notas:', e); renderizarNotas([]); }
}

function renderizarNotas(notas) {
  const html = notas.length ? `
    ${notas.map(n => `<li>${n.nota}</li>`).join('')}
    <div style="font-size:var(--fz_s2);padding:.5vh 0">
      <i class="fas fa-sync"></i> Actualizado: ${new Date().toLocaleString('es-ES')}
    </div>
  ` : `<div style="color:#666;text-align:center;padding:20px;font-style:italic">
    <i class="fas fa-info-circle"></i> No hay noticias
  </div>`;
  
  $('.descripcion_com').html(html);
}


// === CARGAR ÚLTIMO GANADOR ===
async function cargarUltimoGanador() {
  try {
    const mesAnt = calcularMesAnterior(mesActual);
    const key = `ganadorMes_${mesAnt}`;
    const cache = getls(key);
    if (cache) return renderizarUltimoGanador(cache);

    const id = mesAnt.replace('-', '');
    const docu = await getDoc(doc(db, 'ganadores', id));
    if (docu.exists()) { const dat = docu.data(); savels(key, dat, 1440); return renderizarUltimoGanador(dat); }

    const [ano, mes] = mesAnt.split('-').map(Number);
    const esMes = f => {
      if (!f) return false;
      if (typeof f === 'string') { const [a, m] = f.split('-').map(Number); return a === ano && m === mes; }
      if (f.toDate) { const d = f.toDate(); return d.getFullYear() === ano && d.getMonth() + 1 === mes; }
      return false;
    };

    const snap = await getDocs(collection(db, 'registrosdb'));
    const mapa = snap.docs
      .map(x => x.data())
      .filter(v => esMes(v.fechaTour))
      .reduce((acc, v) => {
        const ven = v.vendedor;
        if (!acc[ven]) acc[ven] = { puntos: 0, ventas: 0 };
        acc[ven].puntos += (v.puntos || 0);
        acc[ven].ventas += (v.qventa || 0);
        return acc;
      }, {});

    const lista = Object.entries(mapa);
    if (!lista.length) return $('#lastWinner').html(`
      <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
      <div class="no-winner"><i class="fas fa-question-circle"></i><span>No hay datos</span></div>
    `);

    const [gan, inf] = lista.sort((a, b) => b[1].puntos - a[1].puntos)[0];
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
    renderizarUltimoGanador(dat);

  } catch (err) {
    console.error('Error ganador:', err);
    $('#lastWinner').html(`
      <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
      <div class="error-winner"><i class="fas fa-exclamation-triangle"></i><span>Error al cargar</span></div>
    `);
  }
}

function calcularMesAnterior(mes) {
  const [y, m] = mes.split('-');
  const f = new Date(parseInt(y), parseInt(m) - 2);
  return `${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, '0')}`;
}

function renderizarUltimoGanador(data) {
  const emp = todosLosEmpleados.find(e => e.usuario === data.ganador || e.nombre === data.ganador);
  
  $('#lastWinner').html(`
    <div class="winner-header"><i class="fas fa-trophy"></i><h3>Ganador del Mes Anterior</h3></div>
    <div class="winner-info">
      <img src="${emp?.imagen || '/smile.png'}" alt="${data.ganador}">
      <div class="winner-details">
        <h4>${Capi(data.ganador)}</h4>
        <p>${data.mes}/${data.year}</p>
        <span class="winner-points">${data.puntosGanados} puntos</span>
        <span class="winner-sales">${data.totalVentas} tours</span>
      </div>
      <div class="winner-achievement"><i class="fas fa-crown"></i><span>¡Campeón!</span></div>
    </div>
  `);
}

// === ACTUALIZAR RESUMEN ===
function resumenes() {
  return `<div class="competition-summary" id="competitionSummary">
    ${['Tours Hoy:toursHoy','Total Tours:totalTours','Puntos Totales:totalPuntos','Meta Mes:metaMes'].map(s=>{
      const [lab,id]=s.split(':');return `<div class="summary-stat"><span class="summary-label">${lab}</span><span class="summary-value" id="${id}">...</span></div>`;
    }).join('')}
  </div>`;
}

// === RESUMEN (cache resumenMes_YYYY-MM) ===
function actualizarResumenCompetencia() {
  const hoy=new Date(), hoyStr=`${hoy.getFullYear()}-${String(hoy.getMonth()+1).padStart(2,'0')}-${String(hoy.getDate()).padStart(2,'0')}`;
  const [yr,mm]=mesActual.split('-').map(Number);
  const key=`resumenMes_${mesActual}`;
  const cache=getls(key);
  if(cache && cache.mes===mesActual && cache.dia===hoyStr){
    $('#toursHoy').text(cache.toursHoy);
    $('#totalTours').text(cache.totalTours);
    $('#totalPuntos').text(cache.totalPuntos);
    $('#metaMes').text(cache.meta);
    return;
  }
  let toursMes=0,puntosMes=0,toursHoy=0;
  todasLasVentas.forEach(v=>{
    const f=v.fechaTour;
    if(!f) return;
    let a,m,dStr;
    if(typeof f==='string'){
      const [A,M,D]=f.split('-');a=+A;m=+M;dStr=f;
    } else if(f.toDate){
      const fd=f.toDate();a=fd.getFullYear();m=fd.getMonth()+1;
      dStr=`${a}-${String(m).padStart(2,'0')}-${String(fd.getDate()).padStart(2,'0')}`;
    } else return;
    if(a===yr && m===mm){
      toursMes+=(v.qventa||0);
      puntosMes+=(v.puntos||0);
      if(dStr===hoyStr) toursHoy+=(v.qventa||0);
    }
  });
  const meta=2500;
  $('#toursHoy').text(toursHoy);
  $('#totalTours').text(toursMes);
  $('#totalPuntos').text(puntosMes);
  $('#metaMes').text(meta);
  savels(key,{mes:mesActual,dia:hoyStr,toursHoy:toursHoy,totalTours:toursMes,totalPuntos:puntosMes,meta},0.25); // 15 min
  // opcional estilos progreso
  const stats=[Math.min((toursHoy/5)*100,100),Math.min((toursMes/50)*100,100),Math.min((puntosMes/meta)*100,100),100];
  $('.summary-stat').each((i,el)=>{
    const grados=(stats[i]/100)*360;
    $(el).css({'--progress':`${grados}deg`,'--width':`${stats[i]}%`});
  });
}
