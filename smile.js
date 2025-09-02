import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, deleteDoc, onSnapshot, collection, query, where, writeBatch, serverTimestamp, limit} from "firebase/firestore";

import { Capi, Mensaje, Notificacion, savels, getls, removels, accederRol, gosaves, getsaves, adrm, adtm, infoo} from './widev.js';

// 🔐 GESTIÓN DE AUTENTICACIÓN EN DASHBOARD
let userAuth = null; //Para guardar usuario

onAuthStateChanged(auth, async user => {
  if(!user) return window.location.href = '/'; // Seguridad default 
  userAuth = user; //Guardando usuario

  try{
    const wi = getls('wiSmile');
    if(wi) return smileContenido(wi); // Cache primero 

    const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
    const widt = busq.docs[0].data(); savels('wiSmile', widt, 450); smileContenido(widt); // Desde Online 
  }catch(e){console.error(e)}
});

$(document).on('click', '.bt_salir', async () => {
  await signOut(auth); window.location.href = '/';   // Cierra la sesión + Envia al inicio 
  try{localStorage.clear();}catch(_){Object.keys(localStorage).forEach(k=>localStorage.removeItem(k));} //Limpieza de localStorage
});

$(document).on('click','.tab-btn', function(){
    const activetb = $(this).data('tab');
    adrm(this, 'active'); adrm('#'+activetb+'-tab', 'active');

});

$(document).on('click','.bt_cargar',()=>{
  const pattern=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+)$/;
  Object.keys(localStorage).filter(k=>pattern.test(k)).forEach(k=>localStorage.removeItem(k));
  Mensaje('Actualizado'); setTimeout(()=>location.reload(),800);
}); // Actualizar la parte de imagen 

// ...existing code...

// VARIABLES GLOBALES
let currentMonth = '2025-09';
let currentPage = 1;
const ventasPorPagina = 5;
let todasLasVentas = [];
let todosLosEmpleados = [];

// DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [START]
function smileContenido(wi){
    console.log(wi.nombre); 
    Mensaje('Bienvenido ' + wi.nombre + '!');

    // HTML CONTENIDO [Start] 
    $('.app').html(`
        <!-- HEADER SUPERIOR -->
        <header class="top-header">
            <div class="header-container">
                <div class="header-left">
                    <h1 class="main-title">
                        <i class="fas fa-trophy"></i>
                        RETO DEL MES
                    </h1>
                    <select id="monthSelector" class="month-selector">
                        <option value="2025-09">Septiembre 2025</option>
                        <option value="2025-10">Octubre 2025</option>
                        <option value="2025-11">Noviembre 2025</option>
                        <option value="2025-12">Diciembre 2025</option>
                    </select>
                </div>
                <div class="header-right">
                    <div class="witemas"></div>
                    <div class="user-section">
                        <div class="user-info">
                            <img src="${wi.imagen}" alt="${wi.nombre}" class="user-avatar">
                            <span class="user-name">${wi.nombre}</span>
                        </div>
                        <button class="logout-btn bt_salir">
                            <i class="fas fa-sign-out-alt"></i>
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- CONTENIDO PRINCIPAL -->
        <main class="main-container">
            <div class="dashboard-layout">
                
                <!-- SECCION NUEVA VENTA -->
                <section class="new-sale-panel">
                    <div class="panel-header">
                        <h2><i class="fas fa-plus-circle"></i> Nueva Venta</h2>
                        <div class="bt_add_exportar">
                            <button class="btn-add" id="addNewSale">
                                <i class="fas fa-plus"></i> Agregar
                            </button>
                        </div>
                    </div>

                    ${getFormularioHTML()}
                </section>

                <!-- SECCION COMPETENCIA -->
                <section class="competition-panel">
                    <div class="panel-header">
                        <h2><i class="fas fa-fire"></i> Competencia del Mes</h2>
                        <span class="subtitle">¡Quien venda más gana!</span>
                    </div>

                    <ul class="descripcion_com">
                        <li>La competencia del mes es una oportunidad para motivarnos y dar lo mejor en nuestras ventas.</li>
                        <li>¡Recuerda que quien logre más ventas durante este periodo será el ganador!</li>
                    </ul>

                    <!-- TRABAJADORES DINÁMICOS -->
                    <div class="workers-grid" id="workersGrid">
                        <div class="loading-workers">
                            <i class="fas fa-spinner fa-spin"></i>
                            Cargando empleados...
                        </div>
                    </div>

                    <!-- ULTIMO GANADOR DEL MES -->
                    <div class="last-winner" id="lastWinner">
                        <div class="loading-workers">
                            <i class="fas fa-spinner fa-spin"></i>
                            Cargando ganador...
                        </div>
                    </div>

                    <!-- RESUMEN COMPETENCIA -->
                    <div class="competition-summary" id="competitionSummary">
                        <div class="summary-stat">
                            <span class="summary-label">Total Tours</span>
                            <span class="summary-value" id="totalTours">0</span>
                        </div>
                        <div class="summary-stat">
                            <span class="summary-label">Puntos Totales</span>
                            <span class="summary-value" id="totalPuntos">0</span>
                        </div>
                        <div class="summary-stat">
                            <span class="summary-label">Tours de Hoy</span>
                            <span class="summary-value" id="toursHoy">0</span>
                        </div>
                        <div class="summary-stat">
                            <span class="summary-label">Meta del Mes</span>
                            <span class="summary-value">50</span>
                        </div>
                    </div>
                </section>
            </div>

            <!-- TABLA DE VENTAS -->
            <section class="sales-table-section">
                <div class="table-header">
                    <h2><i class="fas fa-clipboard-list"></i> Registro de Ventas</h2>
                    <div class="table-filters">
                        <select id="filterEmployee" class="filter-select">
                            <option value="">Todos los vendedores</option>
                        </select>
                        <button class="filter-btn" id="todayFilter">
                            <i class="fas fa-calendar-day"></i> Hoy
                        </button>
                    </div>
                </div>

                <div class="table-container">
                    <table class="sales-table" id="salesTable">
                        <thead>
                            <tr>
                                <th><i class="fas fa-route"></i> Tour</th>
                                <th><i class="fas fa-user"></i> Cliente</th>
                                <th><i class="fas fa-users"></i> PAX</th>
                                <th><i class="fas fa-calendar-clock"></i> Fecha/Hora</th>
                                <th><i class="fas fa-user-tie"></i> Vendedor</th>
                                <th><i class="fas fa-dollar-sign"></i> Importe</th>
                                <th><i class="fas fa-star"></i> Puntos</th>
                                <th><i class="fas fa-info-circle"></i> Estado</th>
                                <th><i class="fas fa-cogs"></i> Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="salesTableBody">
                            <tr><td colspan="9" class="loading-cell">
                                <i class="fas fa-spinner fa-spin"></i> Cargando ventas...
                            </td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- PAGINACIÓN -->
                <div class="pagination-container" id="paginationContainer">
                    <!-- Se llena dinámicamente -->
                </div>
            </section>

            ${getInfoTabsHTML()}
        </main>

        <div id="notifications-container"></div>
        <div id="modal-container"></div>
    `);

    // Inicializar datos
    inicializarDashboard(wi);
}

// FUNCIÓN PRINCIPAL DE INICIALIZACIÓN
async function inicializarDashboard(wi) {
    try {
        // Cargar datos en paralelo para optimizar
        await Promise.all([
            cargarEmpleados(),
            cargarVentas(),
            cargarUltimoGanador()
        ]);
        
        // Actualizar filtros y resumen
        actualizarFiltroEmpleados();
        actualizarResumenCompetencia();
        
    } catch (error) {
        console.error('Error inicializando dashboard:', error);
        Notificacion('Error cargando datos del dashboard', 'error');
    }
}

// CARGAR EMPLEADOS OPTIMIZADO
async function cargarEmpleados() {
    try {
        // Verificar cache primero
        const empleadosCache = getls('empleadosSmile');
        if (empleadosCache) {
            todosLosEmpleados = empleadosCache;
            renderizarEmpleados();
        }

        // Obtener empleados que participan
        const empleadosQuery = query(collection(db, 'smiles'), where('participa', '==', 'si'));
        const empleadosSnapshot = await getDocs(empleadosQuery);
        
        todosLosEmpleados = empleadosSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // Guardar en cache
        savels('empleadosSmile', todosLosEmpleados, 300);
        
        await calcularPuntosEmpleados();
        renderizarEmpleados();
        
    } catch (error) {
        console.error('Error cargando empleados:', error);
        $('#workersGrid').html(`
            <div class="error-workers">
                <i class="fas fa-exclamation-triangle"></i>
                Error cargando empleados
            </div>
        `);
    }
}

// CALCULAR PUNTOS DE EMPLEADOS
async function calcularPuntosEmpleados() {
    try {
        // Obtener ventas del mes actual
        const ventasSnapshot = await getDocs(collection(db, 'registrosdb'));
        
        // Filtrar por mes actual
        const ventasDelMes = ventasSnapshot.docs.filter(doc => {
            const venta = doc.data();
            return venta.fechaTour && venta.fechaTour.startsWith(currentMonth);
        });

        // Calcular puntos por empleado
        todosLosEmpleados.forEach(empleado => {
            const ventasEmpleado = ventasDelMes.filter(doc => 
                doc.data().vendedor === empleado.usuario
            );
            
            empleado.totalPuntos = ventasEmpleado.reduce((sum, doc) => 
                sum + (doc.data().puntos || 0), 0
            );
            empleado.totalVentas = ventasEmpleado.reduce((sum, doc) => 
                sum + (doc.data().qventa || 0), 0
            );
        });

        // Ordenar por puntos
        todosLosEmpleados.sort((a, b) => b.totalPuntos - a.totalPuntos);
        
    } catch (error) {
        console.error('Error calculando puntos:', error);
    }
}

// RENDERIZAR EMPLEADOS
function renderizarEmpleados() {
    const workersHTML = todosLosEmpleados.map((empleado, index) => {
        const rank = index + 1;
        const isChampion = rank === 1;
        const isRunnerUp = rank === 2;
        
        return `
            <div class="worker-card ${isChampion ? 'champion' : isRunnerUp ? 'runner-up' : ''}" data-employee="${empleado.usuario}">
                <div class="rank-badge">
                    <i class="fas fa-${isChampion ? 'crown' : isRunnerUp ? 'medal' : 'user'}"></i>
                    #${rank}
                </div>
                <div class="worker-avatar">
                    <img src="${empleado.imagen}" alt="${empleado.nombre}">
                    <div class="status-online"></div>
                </div>
                <div class="worker-info">
                    <h3>${empleado.nombre}</h3>
                    <p>${empleado.descripcion}</p>
                </div>
                <div class="worker-points">
                    <span class="points-number">${empleado.totalPuntos || 0}</span>
                    <span class="points-label">puntos</span>
                </div>
                <div class="worker-stats">
                    <div class="stat">
                        <span class="stat-value">${empleado.totalVentas || 0}</span>
                        <span class="stat-label">Tours Vendidos</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    $('#workersGrid').html(workersHTML);
}

// CARGAR VENTAS
async function cargarVentas() {
    try {
        const ventasSnapshot = await getDocs(collection(db, 'registrosdb'));
        todasLasVentas = ventasSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        
        // Ordenar por fecha más reciente
        todasLasVentas.sort((a, b) => {
            const fechaA = new Date(a.fechaTour || '1970-01-01');
            const fechaB = new Date(b.fechaTour || '1970-01-01');
            return fechaB - fechaA;
        });
        
        renderizarTablaVentas();
        
    } catch (error) {
        console.error('Error cargando ventas:', error);
        $('#salesTableBody').html(`
            <tr><td colspan="9" class="error-cell">
                <i class="fas fa-exclamation-triangle"></i> Error cargando ventas
            </td></tr>
        `);
    }
}

// RENDERIZAR TABLA DE VENTAS CON PAGINACIÓN
function renderizarTablaVentas(filtroEmpleado = '', soloHoy = false) {
    let ventasFiltradas = [...todasLasVentas];
    
    // Filtrar por mes actual
    ventasFiltradas = ventasFiltradas.filter(venta => 
        venta.fechaTour && venta.fechaTour.startsWith(currentMonth)
    );
    
    // Filtrar por empleado
    if (filtroEmpleado) {
        ventasFiltradas = ventasFiltradas.filter(venta => 
            venta.vendedor === filtroEmpleado
        );
    }
    
    // Filtrar por hoy
    if (soloHoy) {
        const hoy = new Date().toISOString().split('T')[0];
        ventasFiltradas = ventasFiltradas.filter(venta => 
            venta.fechaTour === hoy
        );
    }
    
    // Paginación
    const totalPaginas = Math.ceil(ventasFiltradas.length / ventasPorPagina);
    const inicio = (currentPage - 1) * ventasPorPagina;
    const ventasPagina = ventasFiltradas.slice(inicio, inicio + ventasPorPagina);
    
    // Renderizar filas
    const filas = ventasPagina.map(venta => `
        <tr>
            <td><span class="tour-badge">${venta.tipoTour}</span></td>
            <td>
                <strong>${venta.nombreCliente}</strong>
                ${venta.numeroHabitacion ? `<small>Hab: ${venta.numeroHabitacion}</small>` : ''}
            </td>
            <td><span class="pax-badge"><i class="fas fa-users"></i> ${venta.cantidadPax}</span></td>
            <td>
                <div class="datetime-info">
                    <span><i class="fas fa-calendar"></i> ${venta.fechaTour}</span>
                    <span><i class="fas fa-clock"></i> ${venta.horaSalida}</span>
                </div>
            </td>
            <td>
                <div class="seller-info">
                    <strong>${venta.vendedor}</strong>
                    <i class="fas fa-user-tie"></i>
                </div>
            </td>
            <td><strong class="price">S/ ${(venta.importeTotal || 0).toFixed(2)}</strong></td>
            <td><span class="points-badge"><i class="fas fa-star"></i> ${venta.puntos || 0}</span></td>
            <td><span class="status-badge ${venta.estadoPago === 'pagado' ? 'paid' : 'pending'}">
                <i class="fas fa-${venta.estadoPago === 'pagado' ? 'check-circle' : 'clock'}"></i> 
                ${venta.estadoPago?.toUpperCase() || 'PENDIENTE'}
            </span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-view" onclick="verDetalleVenta('${venta.id}')" title="Ver detalles">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-edit" onclick="editarVenta('${venta.id}')" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-delete" onclick="eliminarVenta('${venta.id}')" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
    
    $('#salesTableBody').html(filas || `
        <tr><td colspan="9" class="empty-cell">
            <i class="fas fa-inbox"></i> No hay ventas para mostrar
        </td></tr>
    `);
    
    // Renderizar paginación
    renderizarPaginacion(totalPaginas);
}

// RENDERIZAR PAGINACIÓN
function renderizarPaginacion(totalPaginas) {
    if (totalPaginas <= 1) {
        $('#paginationContainer').html('');
        return;
    }
    
    let paginationHTML = '<div class="pagination">';
    
    // Botón anterior
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="cambiarPagina(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i>
        </button>`;
    }
    
    // Números de página
    for (let i = 1; i <= totalPaginas; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="page-btn active">${i}</button>`;
        } else {
            paginationHTML += `<button class="page-btn" onclick="cambiarPagina(${i})">${i}</button>`;
        }
    }
    
    // Botón siguiente
    if (currentPage < totalPaginas) {
        paginationHTML += `<button class="page-btn" onclick="cambiarPagina(${currentPage + 1})">
            <i class="fas fa-chevron-right"></i>
        </button>`;
    }
    
    paginationHTML += '</div>';
    $('#paginationContainer').html(paginationHTML);
}

// CARGAR ÚLTIMO GANADOR
async function cargarUltimoGanador() {
    try {
        const ganadorCache = getls('ultimoGanador');
        if (ganadorCache) {
            renderizarUltimoGanador(ganadorCache);
        }

        // Calcular mes anterior
        const mesAnterior = calcularMesAnterior(currentMonth);
        const docId = `${mesAnterior.replace('-', '')}`;
        
        const ganadorDoc = await getDoc(doc(db, 'ganadores', docId));
        
        if (ganadorDoc.exists()) {
            const ganadorData = ganadorDoc.data();
            savels('ultimoGanador', ganadorData, 3600); // Cache por 1 hora
            renderizarUltimoGanador(ganadorData);
        } else {
            // Si no hay ganador, mostrar mensaje
            $('#lastWinner').html(`
                <div class="winner-header">
                    <i class="fas fa-trophy"></i>
                    <h3>Último Ganador del Mes</h3>
                </div>
                <div class="no-winner">
                    <i class="fas fa-question-circle"></i>
                    <span>Aún no hay ganador registrado</span>
                </div>
            `);
        }
        
    } catch (error) {
        console.error('Error cargando último ganador:', error);
        $('#lastWinner').html(`
            <div class="winner-header">
                <i class="fas fa-trophy"></i>
                <h3>Último Ganador del Mes</h3>
            </div>
            <div class="error-winner">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Error cargando ganador</span>
            </div>
        `);
    }
}

// RENDERIZAR ÚLTIMO GANADOR
function renderizarUltimoGanador(ganadorData) {
    // Buscar datos del empleado ganador
    const empleadoGanador = todosLosEmpleados.find(emp => 
        emp.usuario === ganadorData.ganador || emp.nombre === ganadorData.ganador
    );
    
    const imagenGanador = empleadoGanador?.imagen || 'https://i.postimg.cc/HWMY74kP/image.png';
    const nombreGanador = empleadoGanador?.nombre || ganadorData.ganador;
    
    $('#lastWinner').html(`
        <div class="winner-header">
            <i class="fas fa-trophy"></i>
            <h3>Último Ganador del Mes</h3>
        </div>
        <div class="winner-info">
            <img src="${imagenGanador}" alt="${nombreGanador}">
            <div class="winner-details">
                <h4>${nombreGanador}</h4>
                <p>${ganadorData.mes} ${ganadorData.year}</p>
                <span class="winner-points">${ganadorData.puntosGanados} puntos</span>
            </div>
            <div class="winner-achievement">
                <i class="fas fa-star"></i>
                <span>¡Excelente trabajo!</span>
            </div>
        </div>
    `);
}

// ACTUALIZAR RESUMEN DE COMPETENCIA
function actualizarResumenCompetencia() {
    const ventasDelMes = todasLasVentas.filter(venta => 
        venta.fechaTour && venta.fechaTour.startsWith(currentMonth)
    );
    
    const hoy = new Date().toISOString().split('T')[0];
    const ventasHoy = ventasDelMes.filter(venta => venta.fechaTour === hoy);
    
    const totalTours = ventasDelMes.reduce((sum, venta) => sum + (venta.qventa || 0), 0);
    const totalPuntos = ventasDelMes.reduce((sum, venta) => sum + (venta.puntos || 0), 0);
    const toursHoy = ventasHoy.reduce((sum, venta) => sum + (venta.qventa || 0), 0);
    
    $('#totalTours').text(totalTours);
    $('#totalPuntos').text(totalPuntos);
    $('#toursHoy').text(toursHoy);
}

// ACTUALIZAR FILTRO DE EMPLEADOS
function actualizarFiltroEmpleados() {
    const empleadosOptions = todosLosEmpleados.map(emp => 
        `<option value="${emp.usuario}">${emp.nombre}</option>`
    ).join('');
    
    $('#filterEmployee').html(`
        <option value="">Todos los vendedores</option>
        ${empleadosOptions}
    `);
}

// EVENTOS Y FUNCIONES AUXILIARES
$(document).on('change', '#monthSelector', function() {
    currentMonth = $(this).val();
    currentPage = 1;
    
    // Recargar datos para el nuevo mes
    calcularPuntosEmpleados().then(() => {
        renderizarEmpleados();
        renderizarTablaVentas();
        actualizarResumenCompetencia();
        cargarUltimoGanador();
    });
});

$(document).on('change', '#filterEmployee', function() {
    currentPage = 1;
    renderizarTablaVentas($(this).val());
});

$(document).on('click', '#todayFilter', function() {
    currentPage = 1;
    renderizarTablaVentas($('#filterEmployee').val(), true);
});

// FUNCIONES GLOBALES PARA PAGINACIÓN Y ACCIONES
window.cambiarPagina = function(pagina) {
    currentPage = pagina;
    renderizarTablaVentas($('#filterEmployee').val());
};

window.verDetalleVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    console.log('Ver detalle:', venta);
    // Implementar modal de detalle
};

window.editarVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    console.log('Editar venta:', venta);
    // Implementar edición
};

window.eliminarVenta = function(ventaId) {
    if (confirm('¿Estás seguro de eliminar esta venta?')) {
        console.log('Eliminar venta:', ventaId);
        // Implementar eliminación
    }
};

// ...existing code...

// FUNCIONES AUXILIARES
function calcularMesAnterior(mesActual) {
    const [year, month] = mesActual.split('-');
    const fecha = new Date(parseInt(year), parseInt(month) - 2); // -2 porque mes es 0-indexed
    return `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}`;
}

function getFormularioHTML() {
    return `
        <form id="formularioVenta" class="sale-form">
            <div class="form-grid">
                <!-- TIPO DE TOUR -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-route"></i>
                        Tipo de Tour *
                    </label>
                    <select id="tipoTour" required>
                        <option value="">Seleccionar tour...</option>
                        <option value="Parapente" data-points="50" data-price="330">1. 🪂 Parapente (50 pts)</option>
                        <option value="Buggie 1 Hora - Sonia" data-points="25" data-price="25">2. 🏜️ Buggie 1 Hora - Sonia (25 pts)</option>
                        <option value="Buggie 2 Horas - Sonia" data-points="35" data-price="35">3. 🏜️ Buggie 2 Horas - Sonia (35 pts)</option>
                        <option value="Buggie Privado - Sonia" data-points="40" data-price="200">4. 🏜️ Buggie Privado - Sonia (40 pts)</option>
                        <option value="Tour de bodegas" data-points="15" data-price="30">5. 🍷 Tour de bodegas (15 pts)</option>
                        <option value="Tour de bodegas - Jackson" data-points="20" data-price="30">6. 🍷 Tour de bodegas - Jackson (20 pts)</option>
                        <option value="Tour de bodegas Privado - Jackson" data-points="40" data-price="150">7. 🍷 Tour de bodegas Privado - Jackson (40 pts)</option>
                        <option value="City Tour - Jackson" data-points="40" data-price="200">8. 🏛️ City Tour - Jackson (40 pts)</option>
                        <option value="Tour de Paracas" data-points="10" data-price="70">9. 🏝️ Tour de Paracas (10 pts)</option>
                        <option value="Cañón de los perdidos" data-points="10" data-price="70">10. 🏔️ Cañón de los perdidos (10 pts)</option>
                        <option value="Cuatrimotos" data-points="10" data-price="70">11. 🏍️ Cuatrimotos (10 pts)</option>
                        <option value="Sobrevuelo" data-points="10" data-price="200">12. ✈️ Sobrevuelo (10 pts)</option>
                        <option value="Nazca Terrestre" data-points="10" data-price="150">13. 🗿 Nazca Terrestre (10 pts)</option>
                        <option value="Tablas Profesional" data-points="15" data-price="150">14. 🏄 Tablas Profesional (15 pts)</option>
                        <option value="Polaris" data-points="10" data-price="380">15. 🚙 Polaris (10 pts)</option>
                    </select>
                </div>

                <!-- REGISTRO EN -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-hotel"></i>
                        Registro en:
                    </label>
                    <select id="registroEn">
                        <option value="hawka">Hawka</option>
                        <option value="hclaudia">HClaudia</option>
                    </select>
                </div>

                <!-- NOMBRE CLIENTE -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-user"></i>
                        Nombre del Cliente *
                    </label>
                    <input type="text" id="nombreCliente" required placeholder="Nombre de cliente / calle">
                </div>

                <!-- HABITACION -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-bed"></i>
                        N° Habitación(Opcional)
                    </label>
                    <input type="text" id="numeroHabitacion" placeholder="Ej: 205">
                </div>

                <!-- Tipo de documento -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-id-card"></i>
                        Tipo de Documento (opcional)
                    </label>
                    <select id="tipoDocumento">
                        <option value="dni">DNI</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="ce">Carnet Extranjería</option>
                    </select>
                </div>

                <!-- INGRESE DNI -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-hashtag"></i>
                        N° DNI/Pasaporte/CE
                    </label>
                    <input type="text" id="numeroDocumento" placeholder="78964523">
                </div>

                <!-- PAX -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-users"></i>
                        PAX *
                    </label>
                    <input type="number" id="cantidadPax" required min="1" value="1">
                </div>

                <!-- IMPORTE INDIVIDUAL -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-user-tag"></i>
                        Importe Individual
                    </label>
                    <input type="number" id="precioUnitario" step="0.01" placeholder="S/ 0.00">
                </div>

                <!-- METODO PAGO -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-credit-card"></i>
                        Método de Pago
                    </label>
                    <select id="metodoPago">
                        <option value="">Seleccionar...</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Tarjeta">Tarjeta</option>
                        <option value="Transferencia">Transferencia</option>
                        <option value="Yape">Yape</option>
                        <option value="Plin">Plin</option>
                    </select>
                </div>

                <!-- IMPORTE TOTAL -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-calculator"></i>
                        Importe x Cobrar
                    </label>
                    <input type="number" id="importeTotal" step="0.01" placeholder="S/ 0.00">
                </div>

                <!-- COBRO PROVEEDOR -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-handshake"></i>
                        Cobro Proveedor
                    </label>
                    <input type="number" id="cobroProveedor" step="0.01" placeholder="S/ 0.00">
                </div>

                <!-- HORA DE SALIDA -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-clock"></i>
                        Hora de salida *
                    </label>
                    <input type="text" id="horaSalida" required>
                </div>

                <!-- FECHA -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-calendar-day"></i>
                        Fecha *
                    </label>
                    <input type="date" id="fechaTour" required>
                </div>

                <!-- Pagado? -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-money-check-alt"></i>
                        Pagado?
                    </label>
                    <select id="estadoPago">
                        <option value="pagado">Pagado</option>
                        <option value="debe">Debe</option>
                    </select>
                </div>
            </div>

            <!-- ACCIONES DEL FORMULARIO -->
            <div class="form-actions">
                <button type="submit" class="btn-save">
                    <i class="fas fa-save"></i>
                    Guardar Venta
                </button>

                <!-- PREVIEW DE PUNTOS -->
                <div class="points-preview">
                    <div class="points-info">
                        <i class="fas fa-star"></i>
                        <span>Puntos a ganar: <strong id="vistaPreviaLaPuntos">0</strong></span>
                    </div>
                </div>
            </div>
        </form>
    `;
}

function getInfoTabsHTML() {
    return `
        <section class="info-tabs-section">
            <div class="tabs-header">
                <button class="tab-btn active" data-tab="info">
                    <i class="fas fa-info-circle"></i>
                    Información
                </button>
                <button class="tab-btn" data-tab="rules">
                    <i class="fas fa-trophy"></i>
                    Reglas
                </button>
                <button class="tab-btn" data-tab="prizes">
                    <i class="fas fa-gift"></i>
                    Premios
                </button>
            </div>

            <div class="tabs-content">
                <div id="info-tab" class="tab-content active">
                    <h3><i class="fas fa-info-circle"></i> Información General</h3>
                    <p>Sistema de competencia mensual para motivar las ventas del equipo.</p>
                    <ul>
                        <li>Cada tour vendido suma puntos según su tipo</li>
                        <li>Los puntos se acumulan durante todo el mes</li>
                        <li>Al final del mes se determina el ganador</li>
                    </ul>
                </div>

                <div id="rules-tab" class="tab-content">
                    <h3><i class="fas fa-trophy"></i> Reglas de la Competencia</h3>
                    <ul>
                        <li>Solo se cuentan las ventas registradas en el sistema</li>
                        <li>Los puntos se asignan automáticamente según el tipo de tour</li>
                        <li>Las ventas deben estar marcadas como "Pagado" para ser válidas</li>
                        <li>En caso de empate, gana quien tenga más tours vendidos</li>
                    </ul>
                </div>

                <div id="prizes-tab" class="tab-content">
                    <h3><i class="fas fa-gift"></i> Premios y Reconocimientos</h3>
                    <ul>
                        <li>🥇 1er lugar: Reconocimiento especial + Premio</li>
                        <li>🥈 2do lugar: Mención honorífica</li>
                        <li>🥉 3er lugar: Certificado de participación</li>
                        <li>Todos los participantes reciben reconocimiento por su esfuerzo</li>
                    </ul>
                </div>
            </div>
        </section>
    `;
}

// ...existing code...

// JQUERY CONTENIDO JS [Start] 
$(document).on('click', '.btn-save', async (e) => {
    e.preventDefault();
    
    try {
        const formData = {
            tipoTour: $('#tipoTour').val(),
            registroEn: $('#registroEn').val(),
            nombreCliente: $('#nombreCliente').val(),
            numeroHabitacion: $('#numeroHabitacion').val(),
            tipoDocumento: $('#tipoDocumento').val(),
            numeroDocumento: $('#numeroDocumento').val(),
            cantidadPax: parseInt($('#cantidadPax').val()) || 1,
            precioUnitario: parseFloat($('#precioUnitario').val()) || 0,
            metodoPago: $('#metodoPago').val(),
            importeTotal: parseFloat($('#importeTotal').val()) || 0,
            cobroProveedor: parseFloat($('#cobroProveedor').val()) || 0,
            horaSalida: $('#horaSalida').val(),
            fechaTour: $('#fechaTour').val(),
            estadoPago: $('#estadoPago').val(),
            vendedor: userAuth.displayName,
            puntos: parseInt($('#tipoTour option:selected').data('points')) || 0,
            email: userAuth.email,
            qventa: 1,
            idVenta: 'venta_'+Date.now(),
            fechaRegistro: serverTimestamp()
        };

        // Validaciones
        if (!formData.tipoTour || !formData.nombreCliente || !formData.horaSalida || !formData.fechaTour) {
            Notificacion('Por favor completa todos los campos obligatorios', 'error');
            return;
        }

        const timestamp = Date.now();
        const docId = `venta_${timestamp}`;
        
        // Guardar en Firebase
        await setDoc(doc(db, 'registrosdb', docId), formData);
        
        // Guardar en localStorage por vendedor
        const vendedorId = `vendedor_${userAuth.displayName}`;
        savels(vendedorId, formData, 450);
        
        Notificacion('¡Venta registrada exitosamente!', 'success');
        
        // Limpiar formulario
        $('#formularioVenta')[0].reset();
        $('#cantidadPax').val(1);
        $('#vistaPreviaLaPuntos').text('0');
        
        // Actualizar datos dinámicamente
        await cargarVentas();
        await calcularPuntosEmpleados();
        renderizarEmpleados();
        actualizarResumenCompetencia();
        
    } catch (error) {
        console.error('Error al guardar venta:', error);
        Notificacion('Error al guardar la venta. Inténtalo nuevamente.', 'error');
    }
});

// Resto de eventos del formulario
$(document).on('change', '#tipoTour', function() {
    const puntos = $(this).find('option:selected').data('points') || 0;
    const precio = $(this).find('option:selected').data('price') || 0;
    
    $('#vistaPreviaLaPuntos').text(puntos);
    $('#precioUnitario').val(precio);
    
    const pax = parseInt($('#cantidadPax').val()) || 1;
    $('#importeTotal').val(precio * pax);
});

$(document).on('input', '#cantidadPax, #precioUnitario', function() {
    const pax = parseInt($('#cantidadPax').val()) || 1;
    const precio = parseFloat($('#precioUnitario').val()) || 0;
    $('#importeTotal').val(precio * pax);
});

// JQUERY CONTENIDO JS [End] 
// DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [END]