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
                            <span class="summary-value">2500</span>
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
    const filas = ventasPagina.map(venta => {
        const esPropietario = venta.vendedor === userAuth?.displayName;
        const botones = esPropietario 
            ? `<button class="btn-view" onclick="verDetalleVenta('${venta.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>
               <button class="btn-edit" onclick="editarVenta('${venta.id}')" title="Editar"><i class="fas fa-edit"></i></button>
               <button class="btn-delete" onclick="eliminarVenta('${venta.id}')" title="Eliminar"><i class="fas fa-trash"></i></button>`
            : `<button class="btn-view" onclick="verDetalleVenta('${venta.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>`;
        
        return `
            <tr>
                <td><span class="tour-badge">${venta.tipoTour}</span></td>
                <td><strong>${venta.nombreCliente}</strong>${venta.numeroHabitacion ? `<small>Hab: ${venta.numeroHabitacion}</small>` : ''}</td>
                <td><span class="pax-badge"><i class="fas fa-users"></i> ${venta.cantidadPax}</span></td>
                <td><div class="datetime-info"><span><i class="fas fa-calendar"></i> ${venta.fechaTour}</span><span><i class="fas fa-clock"></i> ${venta.horaSalida}</span></div></td>
                <td><div class="seller-info"><strong>${venta.vendedor}</strong><i class="fas fa-user-tie"></i></div></td>
                <td><strong class="price">S/ ${(venta.importeTotal || 0).toFixed(2)}</strong></td>
                <td><span class="points-badge"><i class="fas fa-star"></i> ${venta.puntos || 0}</span></td>
                <td><span class="status-badge ${(venta.estadoPago === 'pagado' || venta.estadoPago === 'cobrado') ? 'paid' : 'pending'}"><i class="fas fa-${(venta.estadoPago === 'pagado' || venta.estadoPago === 'cobrado') ? 'check-circle' : 'clock'}"></i> ${venta.estadoPago?.toUpperCase()}</span></td>
                <td><div class="action-buttons">${botones}</div></td>
            </tr>
        `;
    }).join('');
    
    $('#salesTableBody').html(filas || `<tr><td colspan="9" class="empty-cell"><i class="fas fa-inbox"></i> No hay ventas para mostrar</td></tr>`);
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
// FUNCIONES GLOBALES PARA PAGINACIÓN Y ACCIONES
window.cambiarPagina = function(pagina) {
    currentPage = pagina;
    renderizarTablaVentas($('#filterEmployee').val());
};

window.verDetalleVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    if (!venta) {
        Notificacion('Venta no encontrada', 'error');
        return;
    }
    
    // Cargar datos en el formulario (solo vista, no editable)
    cargarDatosEnFormulario(venta, true); // true = solo vista
    
    // Scroll al formulario
    document.querySelector('#formularioVenta').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
    
    Notificacion('Datos cargados para visualización', 'info');
};

window.editarVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    if (!venta) {
        Notificacion('Venta no encontrada', 'error');
        return;
    }
    
    // Cargar datos en el formulario (editable)
    cargarDatosEnFormulario(venta, false); // false = editable
    
    // Cambiar el botón de guardar a actualizar
    $('.btn-save').html('<i class="fas fa-edit"></i> Actualizar Venta').attr('data-edit-id', ventaId);
    
    // Scroll al formulario
    document.querySelector('#formularioVenta').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
    
    Notificacion('Datos cargados para edición', 'info');
};

window.eliminarVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    if (!venta) {
        Notificacion('Venta no encontrada', 'error');
        return;
    }
    
    // Primera confirmación
    const confirmacion1 = confirm(`¿Estás seguro de eliminar la venta de "${venta.nombreCliente}"?\n\nEsta acción NO se puede deshacer.`);
    
    if (!confirmacion1) return;
    
    // Segunda confirmación
    const confirmacion2 = confirm(`⚠️ CONFIRMACIÓN FINAL ⚠️\n\nSe eliminará permanentemente:\n• Cliente: ${venta.nombreCliente}\n• Tour: ${venta.tipoTour}\n• Importe: S/ ${venta.importeTotal}\n\n¿CONFIRMAS LA ELIMINACIÓN?\n\nEsta acción es IRREVERSIBLE.`);
    
    if (!confirmacion2) return;
    
    // Proceder con la eliminación
    eliminarVentaCompleta(ventaId);
};

// FUNCIÓN PARA CARGAR DATOS EN EL FORMULARIO
function cargarDatosEnFormulario(venta, soloVista = false) {
    // Limpiar estado de edición previo
    limpiarEstadoFormulario();
    
    // Cargar datos en los campos
    $('#tipoTour').val(venta.tipoTour);
    $('#registroEn').val(venta.registroEn);
    $('#nombreCliente').val(venta.nombreCliente);
    $('#numeroHabitacion').val(venta.numeroHabitacion || '');
    $('#tipoDocumento').val(venta.tipoDocumento || 'dni');
    $('#numeroDocumento').val(venta.numeroDocumento || '');
    $('#cantidadPax').val(venta.cantidadPax || 1);
    $('#precioUnitario').val(venta.precioUnitario || 0);
    $('#metodoPago').val(venta.metodoPago || '');
    $('#importeTotal').val(venta.importeTotal || 0);
    $('#cobroProveedor').val(venta.cobroProveedor || 0);
    $('#horaSalida').val(venta.horaSalida);
    $('#Operador').val(venta.Operador);
    $('#Comentario').val(venta.Comentario);
    $('#fechaTour').val(venta.fechaTour);
    $('#estadoPago').val(venta.estadoPago || 'pagado');
    
    // Actualizar preview de puntos
    $('#vistaPreviaLaPuntos').text(venta.puntos || 0);
    
    if (soloVista) {
        // Deshabilitar todos los campos para solo vista
        $('#formularioVenta input, #formularioVenta select').prop('disabled', true);
        $('.btn-save').prop('disabled', true).html('<i class="fas fa-eye"></i> Solo Vista');
        
        // Agregar indicador visual
        $('#formularioVenta').addClass('view-only');
        
        // Mostrar botón para limpiar vista
        if ($('.btn-clear-view').length === 0) {
            $('.form-actions').prepend(`
                <button type="button" class="btn-clear-view" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Limpiar Vista
                </button>
            `);
        }
    } else {
        // Modo edición - habilitar campos
        $('#formularioVenta input, #formularioVenta select').prop('disabled', false);
        $('.btn-save').prop('disabled', false);
        $('#formularioVenta').addClass('edit-mode');
        
        // Mostrar botón para cancelar edición
        if ($('.btn-cancel-edit').length === 0) {
            $('.form-actions').prepend(`
                <button type="button" class="btn-cancel-edit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Cancelar Edición
                </button>
            `);
        }
    }
}

// FUNCIÓN PARA LIMPIAR ESTADO DEL FORMULARIO
function limpiarEstadoFormulario() {
    // Habilitar todos los campos
    $('#formularioVenta input, #formularioVenta select').prop('disabled', false);
    $('.btn-save').prop('disabled', false);
    
    // Remover clases de estado
    $('#formularioVenta').removeClass('view-only edit-mode');
    
    // Restaurar botón original
    $('.btn-save').html('<i class="fas fa-save"></i> Guardar Venta').removeAttr('data-edit-id');
    
    // Remover botones adicionales
    $('.btn-clear-view, .btn-cancel-edit').remove();
    
    // Limpiar formulario
    $('#formularioVenta')[0].reset();
    $('#cantidadPax').val(1);
    $('#vistaPreviaLaPuntos').text('0');
}

// FUNCIÓN PARA ELIMINAR VENTA COMPLETA
async function eliminarVentaCompleta(ventaId) {
    try {
        // Mostrar indicador de carga
        Notificacion('Eliminando venta...', 'info');
        
        // Eliminar de Firebase
        await deleteDoc(doc(db, 'registrosdb', ventaId));
        
        // Eliminar de localStorage (buscar todas las claves que puedan contener esta venta)
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('vendedor_')) {
                try {
                    const data = JSON.parse(localStorage.getItem(key));
                    if (data && data.idVenta === ventaId) {
                        keysToRemove.push(key);
                    }
                } catch (e) {
                    // Ignorar errores de parsing
                }
            }
        }
        
        // Remover las claves encontradas
        keysToRemove.forEach(key => localStorage.removeItem(key));
        // Actualizar datos locales
        todasLasVentas = todasLasVentas.filter(v => v.id !== ventaId);
        
        // Actualizar interfaz
        await calcularPuntosEmpleados();
        renderizarEmpleados();
        renderizarTablaVentas();
        actualizarResumenCompetencia();
        
        // Limpiar formulario si tenía datos de esta venta
        const editId = $('.btn-save').attr('data-edit-id');
        if (editId === ventaId) {
            limpiarEstadoFormulario();
        }
        
        Notificacion('¡Venta eliminada exitosamente!', 'success');
        
    } catch (error) {
        console.error('Error eliminando venta:', error);
        Notificacion('Error al eliminar la venta. Inténtalo nuevamente.', 'error');
    }
}

// EVENTOS PARA BOTONES ADICIONALES
$(document).on('click', '.btn-clear-view', function() {
    limpiarEstadoFormulario();
    Notificacion('Vista limpiada', 'info');
});

$(document).on('click', '.btn-cancel-edit', function() {
    limpiarEstadoFormulario();
    Notificacion('Edición cancelada', 'info');
});

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
                        <option value="Buggy 1 Hora" data-points="15" data-price="20">2. 🏜️ Buggy 1 Hora (15 pts)</option>
                        <option value="Buggy 2 Horas" data-points="25" data-price="25">3. 🏜️ Buggy 2 Horas (25 pts)</option>
                        <option value="Buggy Privado" data-points="30" data-price="180">4. 🏜️ Buggy Privado (30 pts)</option>
                        <option value="Buggy 1 Hora - Sonia" data-points="25" data-price="20">5. 🏜️ Buggy 1 Hora - Sonia (25 pts)</option>
                        <option value="Buggy 2 Horas - Sonia" data-points="35" data-price="25">6. 🏜️ Buggy 2 Horas - Sonia (35 pts)</option>
                        <option value="Buggy Privado - Sonia" data-points="50" data-price="180">7. 🏜️ Buggy Privado - Sonia (40 pts)</option>
                        <option value="Tour de bodegas" data-points="10" data-price="20">8. 🍷 Tour de bodegas (10 pts)</option>
                        <option value="Tour de bodegas - Jackson" data-points="20" data-price="20">9. 🍷 Tour de bodegas - Jackson (20 pts)</option>
                        <option value="Tour de bodegas Privado" data-points="30" data-price="150">10. 🍷 Tour de bodegas Privado (30 pts)</option>
                        <option value="Tour de bodegas Privado - Jackson" data-points="40" data-price="150">11. 🍷 Tour de bodegas Privado - Jackson (40 pts)</option>
                        <option value="City Tour - Jackson" data-points="50" data-price="200">12. 🏛️ City Tour - Jackson (50 pts)</option>
                        <option value="Tour de Paracas" data-points="20" data-price="60">13. 🏝️ Tour de Paracas (20 pts)</option>
                        <option value="Cañón de los perdidos" data-points="20" data-price="60">14. 🏔️ Cañón de los perdidos (20 pts)</option>
                        <option value="Cuatrimotos" data-points="20" data-price="70">15. 🏍️ Cuatrimotos (20 pts)</option>
                        <option value="Sobrevuelo" data-points="30" data-price="494">16. ✈️ Sobrevuelo (30 pts)</option>
                        <option value="Nazca Terrestre" data-points="10" data-price="150">17. 🗿 Nazca Terrestre (10 pts)</option>
                        <option value="Renta Tablas Profesional" data-points="10" data-price="50">18. 🏄 Renta Tablas Profesional (10 pts)</option>
                        <option value="Tablas Profesional - Sonia" data-points="15" data-price="150">19. 🏄 Tablas Profesional - Sonia (15 pts)</option>
                        <option value="Tablas Profesional + Buggy" data-points="10" data-price="150">20. 🏄 Tablas Profesional + Buggy (10 pts)</option>
                        <option value="Polaris" data-points="20" data-price="380">21. 🚙 Polaris (20 pts)</option>
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
                        <option value="cedula">Cédula</option>
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
                        PAX (Cantidad Personas/Grupo Privado)
                    </label>
                    <input type="number" id="cantidadPax" required min="1" value="1">
                </div>

                <!-- IMPORTE INDIVIDUAL -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-user-tag"></i>
                        Importe Individual/Grupo Privado
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
                        Importe x Cobrar(Total)
                    </label>
                    <input type="number" id="importeTotal" step="0.01" placeholder="S/ 0.00" disabled>
                </div>

                <!-- COBRO PROVEEDOR -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-handshake"></i>
                        Pagar/Cobrar a Operador
                    </label>
                    <input type="number" id="cobroProveedor" step="0.01" placeholder="S/ 0.00">
                </div>

                <!-- OPERADOR -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-user"></i>
                        Operador *
                    </label>
                    <input type="text" id="Operador" placeholder="Ejm: Jacki, Pili, William.... " required>
                </div>

                <!-- FECHA -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-calendar-day"></i>
                        Fecha *
                    </label>
                    <input type="date" id="fechaTour" required>
                </div>

                <!-- HORA DE SALIDA -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-clock"></i>
                        Hora de salida *
                    </label>
                    <input type="text" id="horaSalida" placeholder="2 HORAS -5PM" required>
                </div>

                <!-- PAGADO ? -->
                <div class="form-field">
                    <label>
                        <i class="fas fa-money-check-alt"></i>
                        Pagado?
                    </label>
                    <select id="estadoPago">
                    <option value="pagar">Falta pagar a proveedor</option>
                    <option value="pagado">Pagado a proveedor</option>
                    <option value="cobrar">Cobrar saldo pendiente</option>
                    <option value="cobrado">Saldo pendiente cobrado</option>
                    </select>
                </div>

                <!-- COMENTARIO -->
                <div class="form-field">
                    <label>
                        <i class="fa-solid fa-comment"></i>
                        Comentario *
                    </label>
                    <input type="text" id="Comentario" placeholder="Escribe notas de tu venta " required>
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
        <!-- INFORMACION DE SERVICIOS -->
        <section class="info-section">
            <div class="info-tabs">
                <button class="tab-btn active" data-tab="points">
                    <i class="fas fa-star"></i>
                    Puntos
                </button>
                <button class="tab-btn" data-tab="rules">
                    <i class="fas fa-list-ul"></i>
                    Reglas
                </button>
                <button class="tab-btn" data-tab="prices">
                    <i class="fas fa-money-bill-wave"></i>
                    Precios
                </button>
            </div>

<div class="tab-content active" id="points-tab">
    <h3><i class="fas fa-chart-bar"></i> Asignación de Puntos por Servicio</h3>
    <div class="points-grid">
        <div class="point-item">
            <span class="service-name">🪂 Parapente</span>
            <span class="point-value">50</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏜️ Buggy Privado - Sonia</span>
            <span class="point-value">40</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏛️ City Tour - Jackson</span>
            <span class="point-value">40</span>
        </div>
        <div class="point-item">
            <span class="service-name">🍷 Tour de bodegas Privado - Jackson</span>
            <span class="point-value">40</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏜️ Buggy 2 Horas - Sonia</span>
            <span class="point-value">35</span>
        </div>
        <div class="point-item">
            <span class="service-name">🍷 Tour de bodegas Privado</span>
            <span class="point-value">30</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏜️ Buggy Privado</span>
            <span class="point-value">30</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏜️ Buggy 1 Hora - Sonia</span>
            <span class="point-value">25</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏜️ Buggy 2 Horas</span>
            <span class="point-value">25</span>
        </div>
        <div class="point-item">
            <span class="service-name">🍷 Tour de bodegas - Jackson</span>
            <span class="point-value">20</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏜️ Buggy 1 Hora</span>
            <span class="point-value">15</span>
        </div>
        <div class="point-item">
            <span class="service-name">🍷 Tour de bodegas</span>
            <span class="point-value">15</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏄 Tablas Profesional - Sonia</span>
            <span class="point-value">15</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏝️ Tour de Paracas</span>
            <span class="point-value">10</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏔️ Cañón de los perdidos</span>
            <span class="point-value">10</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏍️ Cuatrimotos</span>
            <span class="point-value">10</span>
        </div>
        <div class="point-item">
            <span class="service-name">✈️ Sobrevuelo</span>
            <span class="point-value">10</span>
        </div>
        <div class="point-item">
            <span class="service-name">🗿 Nazca Terrestre</span>
            <span class="point-value">10</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏄 Renta Tablas Profesional</span>
            <span class="point-value">10</span>
        </div>
        <div class="point-item">
            <span class="service-name">🏄 Tablas Profesional + Buggy</span>
            <span class="point-value">10</span>
        </div>
        <div class="point-item">
            <span class="service-name">🚙 Polaris</span>
            <span class="point-value">10</span>
        </div>
    </div>
</div>

            <div class="tab-content" id="rules-tab">
                <h3><i class="fas fa-gavel"></i> Reglas del Sistema de Puntos</h3>
                <div class="rules-list">
                    <div class="rule-item">
                        <span class="rule-number">1</span>
                        <span>EN LOS PRECIOS BRINDADOS NO ESTÁ INCLUÍDO LA TASA TURÍSTICA</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-number">2</span>
                        <span>EN EL CASO DEL BUGGIE/BODEGAS Y CITY TOUR EL PUNTAJE SERÁ MAYOR SIEMPRE Y CUANDO SALGAN CON EL BUGGIE DE LA SEÑORA SONIA O CAMIONETA</span>
                    </div>
                    <div class="rule-item bonus">
                        <span class="rule-number">3</span>
                        <span>SE ANULARÁN LOS PUNTOS POR ALGÚN RECLAMO. SI EL CLIENTE DEJA COMENTARIO A FAVOR HAY BONUS DE +10 PUNTOS. MAL COMENTARIO = -10 PUNTOS</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-number">4</span>
                        <span>SI SE REALIZA ANULACIÓN DE TOUR O DEVOLUCIÓN DE DINERO NO SE DARÁN PUNTAJES</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-number">5</span>
                        <span>PARA QUE LOS PUNTOS SEAN VÁLIDOS SE DEBE REGISTRAR COMPLETO TODOS LOS DATOS EL MISMO DÍA</span>
                    </div>
                    <div class="rule-item bonus">
                        <span class="rule-number">5</span>
                        <span>SI EL CLIENTE TE ETIQUETA EN REDES SOCIALES = +5 PUNTOS BONUS, PERO DEJA COMENTARIO = +5 (MÁXIMO 10 POR CLIENTE) </span>
                    </div>
                </div>
            </div>

   <div class="tab-content" id="prices-tab">
    <h3><i class="fas fa-tags"></i> Precios de Tours - Venta Mínima</h3>
    <div class="prices-grid">
        <div class="price-item">
            <span class="service-name">🪂 Parapente</span>
            <span class="service-price">S/ 330.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy 1 Hora</span>
            <span class="service-price">S/ 20.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy 2 Horas</span>
            <span class="service-price">S/ 25.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy Privado</span>
            <span class="service-price">S/ 180.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy 1 Hora - Sonia</span>
            <span class="service-price">S/ 25.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy 2 Horas - Sonia</span>
            <span class="service-price">S/ 35.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏜️ Buggy Privado - Sonia</span>
            <span class="service-price">S/ 200.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🍷 Tour de bodegas</span>
            <span class="service-price">S/ 30.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🍷 Tour de bodegas - Jackson</span>
            <span class="service-price">S/ 30.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🍷 Tour de bodegas Privado</span>
            <span class="service-price">S/ 150.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🍷 Tour de bodegas Privado - Jackson</span>
            <span class="service-price">S/ 150.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏛️ City Tour - Jackson</span>
            <span class="service-price">S/ 200.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏝️ Tour de Paracas</span>
            <span class="service-price">S/ 70.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏔️ Cañón de los perdidos</span>
            <span class="service-price">S/ 70.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏍️ Cuatrimotos</span>
            <span class="service-price">S/ 70.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">✈️ Sobrevuelo</span>
            <span class="service-price">S/ 200.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🗿 Nazca Terrestre</span>
            <span class="service-price">S/ 150.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏄 Renta Tablas Profesional</span>
            <span class="service-price">S/ 50.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏄 Tablas Profesional - Sonia</span>
            <span class="service-price">S/ 150.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🏄 Tablas Profesional + Buggy</span>
            <span class="service-price">S/ 150.00</span>
        </div>
        <div class="price-item">
            <span class="service-name">🚙 Polaris</span>
            <span class="service-price">S/ 380.00</span>
        </div>
    </div>
    <div class="price-note">
        <p><i class="fas fa-info-circle"></i> <strong>Nota:</strong> City Tour incluye S/ 10.00 por persona para actividad de chocotejas</p>
    </div>
</div>

            </div>
        </section>
    `;
}

// ...existing code...

// JQUERY CONTENIDO JS [Start] 
// FUNCIONES UTILES [START]
// $('#importeTotal').attr('disabled','disabled');
// FUNCIONES UTILES [END]

$(document).on('click', '.btn-save', async (e) => {
    e.preventDefault();
    
    try {
        const editId = $('.btn-save').attr('data-edit-id');
        const isEditing = !!editId;
        const pax = parseInt($('#cantidadPax').val()) || 1;
        const puntosBase = parseInt($('#tipoTour option:selected').data('points')) || 0;
        
        const formData = {
            tipoTour: $('#tipoTour').val(),
            registroEn: $('#registroEn').val(),
            nombreCliente: $('#nombreCliente').val(),
            numeroHabitacion: $('#numeroHabitacion').val(),
            tipoDocumento: $('#tipoDocumento').val(),
            numeroDocumento: $('#numeroDocumento').val(),
            cantidadPax: pax,
            precioUnitario: parseFloat($('#precioUnitario').val()) || 0,
            metodoPago: $('#metodoPago').val(),
            importeTotal: parseFloat($('#importeTotal').val()) || 0,
            cobroProveedor: parseFloat($('#cobroProveedor').val()) || 0,
            horaSalida: $('#horaSalida').val(),
            Operador: $('#Operador').val(),
            Comentario: $('#Comentario').val(),
            fechaTour: $('#fechaTour').val(),
            estadoPago: $('#estadoPago').val(),
            vendedor: userAuth.displayName,
            puntos: puntosBase * pax, // Puntos multiplicados por PAX
            email: userAuth.email,
            qventa: 1,
            fechaRegistro: serverTimestamp()
        };

        // Validaciones
        if (!formData.tipoTour || !formData.nombreCliente || !formData.horaSalida || !formData.fechaTour) {
            Notificacion('Por favor completa todos los campos obligatorios', 'error');
            return;
        }

        if (isEditing) {
            // MODO EDICIÓN - Actualizar venta existente
            formData.idVenta = editId; // Mantener el ID original
            
            // Actualizar en Firebase
            await setDoc(doc(db, 'registrosdb', editId), formData);
            
            // Actualizar en localStorage
            const vendedorId = `vendedor_${userAuth.displayName}`;
            savels(vendedorId, formData, 450);
            
            // Actualizar datos locales
            const index = todasLasVentas.findIndex(v => v.id === editId);
            if (index !== -1) {
                todasLasVentas[index] = { id: editId, ...formData };
            }
            
            Notificacion('¡Venta actualizada exitosamente!', 'success');
            
        } else {
            // MODO CREACIÓN - Nueva venta
            const timestamp = Date.now();
            const docId = `venta_${timestamp}`;
            formData.idVenta = docId;
            
            // Guardar en Firebase
            await setDoc(doc(db, 'registrosdb', docId), formData);
            
            // Guardar en localStorage
            const vendedorId = `vendedor_${userAuth.displayName}`;
            savels(vendedorId, formData, 450);
            
            Notificacion('¡Venta registrada exitosamente!', 'success');
        }
        
        // Limpiar formulario y estado
        limpiarEstadoFormulario();
        
        // Actualizar datos dinámicamente
        await cargarVentas();
        await calcularPuntosEmpleados();
        renderizarEmpleados();
        actualizarResumenCompetencia();
        
    } catch (error) {
        console.error('Error al guardar/actualizar venta:', error);
        Notificacion('Error al procesar la venta. Inténtalo nuevamente.', 'error');
    }
});

// Resto de eventos del formulario
$(document).on('change', '#tipoTour', function() {
    const puntos = $(this).find('option:selected').data('points') || 0;
    const precio = $(this).find('option:selected').data('price') || 0;
    const pax = parseInt($('#cantidadPax').val()) || 1;
    
    $('#vistaPreviaLaPuntos').text(puntos * pax);
    $('#precioUnitario').val(precio);
    $('#importeTotal').val(precio * pax);
});

$(document).on('input', '#cantidadPax, #precioUnitario', function() {
    const pax = parseInt($('#cantidadPax').val()) || 1;
    const precio = parseFloat($('#precioUnitario').val()) || 0;
    const puntosBase = $('#tipoTour option:selected').data('points') || 0;
    
    $('#importeTotal').val(precio * pax);
    $('#vistaPreviaLaPuntos').text(puntosBase * pax);
});

// PARA GUARDAR EL TEMA
$(document).on('click','.tema',async function(){
  const miTema = $(this).data('tema');
  try {
    await setDoc(doc(db, 'configuracion', userAuth.displayName), {
      tema: miTema,
      actualizado: serverTimestamp()
    }, { merge: true });
    savels('wiTema', miTema, 72);
    Mensaje('Tema guardado <i class="fa-solid fa-circle-check"></i>');
  }catch(e){console.error(e)}
});

// JQUERY CONTENIDO JS [End] 
// DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [END]