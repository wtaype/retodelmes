// === IMPORTS ===
import $ from 'jquery';
import  './smile.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { wiTema, Mensaje, savels, getls, savebd, getbd } from './widev.js';


// $('.app').html(`<h1>Cargando rankings...</h1>`);

// export const misRankings = async () => {
//   const cache = getls('topSmiles');
//   if (cache) return renderizarRankings(cache);

//   try {
//     const busq = await getDocs(collection(db, 'smiles'));
//     if (busq.empty) return $('.app').html(`<div class="estado-vacio"><i class="fa-solid fa-user-slash"></i><p>No hay empleados registrados</p></div>`);

//     const empleados = busq.docs.map(d => ({ id: d.id, ...d.data() }))
//       .sort((a, b) => (b.puntos || 0) - (a.puntos || 0));
    
//     savels('topSmiles', empleados, 5);
//     renderizarRankings(empleados);
//     Mensaje(`✅ ${busq.size} empleados cargados`);
//   } catch (e) {
//     console.error(e);
//     $('.app').html(`<div class="estado-error"><i class="fa-solid fa-exclamation-triangle"></i><p>Error al cargar</p></div>`);
//   }
// };

// function renderizarRankings(empleados) {
//   $('.app').html(empleados.map((emp, i) => {
//     const rank = i + 1;
//     const cls = rank === 1 ? 'champion' : rank === 2 ? 'runner-up' : '';
//     const icn = rank === 1 ? 'crown' : rank === 2 ? 'medal' : 'user';
    
//     return `
//       <div class="worker-card ${cls}">
//         <div class="rank-badge"><i class="fas fa-${icn}"></i>#${rank}</div>
//         <div class="worker-avatar">
//           <img src="${emp.imagen || '/smile.png'}" alt="${emp.nombre}">
//         </div>
//         <div class="worker-info">
//           <h3>${emp.nombre}</h3>
//           <p>${emp.descripcion || 'Colaborador'}</p>
//         </div>
//         <div class="worker-points">
//           <span class="points-number">${emp.puntos || 0}</span>
//           <span class="points-label">puntos</span>
//         </div>
//       </div>
//     `;
//   }).join(''));
// }

// misRankings();