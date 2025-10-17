import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDocs, doc, updateDoc, collection, query, where, orderBy, limit, startAfter, serverTimestamp, addDoc } from "firebase/firestore";
import { Capi, Mensaje, Notificacion, savels, getls, removels, wiTema, infoo, fechaLetra,mis6 } from './widev.js';

// ========================================
// 🔐 VARIABLES GLOBALES COMPACTAS
// ========================================
let userAuth = null;
let userData = null;
let currentMonth = new Date().toISOString().slice(0, 7);
let currentUser = 'todos';
let currentPage = 0;
let totalPages = 0;
let lastDoc = null;
let todasLasVentas = [];
let todosLosUsuarios = [];
let notasData = [];
let ITEMS_PER_PAGE = 7;

// ========================================
// 🚀 INICIALIZACIÓN PRINCIPAL
// ========================================
onAuthStateChanged(auth, async user => {
    if (!user) return window.location.href = '/';
    userAuth = user;
    
    try {
        const wi = getls('wiSmileTop');
        if (wi) return await initAdmin(wi);
        
        const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
        if (busq.empty || busq.docs[0].data().rol !== 'smiletop') {
            Notificacion('No tienes permisos de administrador', 'error');
            return await signOut(auth);
        }
        
        const widt = busq.docs[0].data();
        savels('wiSmileTop', widt, 450);
        await initAdmin(widt);
    } catch (error) {
        console.error('Error auth:', error);
        Notificacion('Error al cargar aplicación', 'error');
    }
});

// ========================================
// 🏗️ INICIALIZAR ADMIN
// ========================================
async function initAdmin(data) {
    userData = data;
    console.log(`✅ Admin: ${data.nombre}`);
    
    $('.app').html(getHTML());
    infoo();
    
    try {
        await loadUsuarios();
        await loadVentas();
        await loadNotas();
        initEvents();
        renderTable();
        renderNotas();
        Notificacion('Dashboard cargado', 'success');
    } catch (error) {
        console.error('Error init:', error);
        Notificacion('Error al inicializar', 'error');
    }
}

// ========================================
// 🎨 HTML ESTRUCTURA COMPACTA
// ========================================
function getHTML() {
    return `
        <header class="admin-header">
            <div class="header-left">
                <div class="logo">
                    <i class="fas fa-chart-line"></i>
                    <h1>Administración de Tours Hawka & HClaudia</h1>
                </div>
            </div>
            <div class="header-right">
                <div class="witemas"></div>
                <div class="user-info">
                    <img src="${userData.imagen || './smile.png'}" alt="Avatar" class="user-avatar">
                    <span>${userData.nombre || 'Admin'}</span>
                </div>
                <button class="btn-logout bt_salir">
                    <i class="fas fa-sign-out-alt"></i>
                    Salir
                </button>
            </div>
        </header>

        <div class="content-grid">
            <main class="main-content">
                <section class="filters-bar">
                    <div class="filter-group">
                        <label><i class="fas fa-calendar"></i> Mes</label>
                        <select id="monthFilter">${getMonthOptions()}</select>
                    </div>
                    <div class="filter-group">
                        <label><i class="fas fa-user"></i> Usuario</label>
                        <select id="userFilter">
                            <option value="todos">Todos los usuarios</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label><i class="fas fa-list"></i> Mostrar</label>
                        <select id="itemsFilter">
                            <option value="7" selected>7 ventas</option>
                            <option value="10">10 ventas</option>
                            <option value="20">20 ventas</option>
                            <option value="30">30 ventas</option>
                        </select>
                    </div>
                    <button class="btn-refresh bt_cargar">
                        <i class="fas fa-sync"></i>
                        Actualizar
                    </button>
                </section>

                <section class="table-section">
                    <div class="table-header">
                        <h2><i class="fas fa-table"></i> Registro de Ventas</h2>
                        <div class="table-stats">
                            <span id="totalVentas">0 ventas</span>
                            <span id="totalIngresos">S/ 0.00</span>
                            <span id="totalPuntos">0 puntos</span>
                        </div>
                    </div>
                    
                    <div class="table-container" id="tableContainer">
                        <div class="loading-state">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Cargando ventas...</p>
                        </div>
                    </div>
                    
                    <div class="pagination" id="pagination" style="display: none;">
                        <button id="prevPage" class="btn-page">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="page-numbers" id="pageNumbers"></div>
                        <button id="nextPage" class="btn-page">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </section>
            </main>

            <aside class="sidebar">
                <div class="notes-section">
                    <div class="notes-header">
                        <h3><i class="fas fa-sticky-note"></i> Notas</h3>
                        <button id="addNote" class="btn-add">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="notes-container" id="notesContainer">
                        <div class="loading-state">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Cargando notas...</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    `;
}

function getMonthOptions() {
    const options = [];
    const currentDate = new Date();
    
    for (let i = -6; i <= 5; i++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
        const value = date.toISOString().slice(0, 7);
        const label = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
        const selected = value === currentMonth ? 'selected' : '';
        options.push(`<option value="${value}" ${selected}>${Capi(label)}</option>`);
    }
    
    return options.join('');
}

// ========================================
// 📊 CARGAR DATOS OPTIMIZADO
// ========================================
async function loadUsuarios() {
    try {
        console.log('🔄 Cargando usuarios...');
        
        const cache = getls('usuariosSmileTop');
        if (cache && cache.length > 0) {
            todosLosUsuarios = cache;
            console.log(`✅ ${todosLosUsuarios.length} usuarios desde cache`);
            updateUserFilter();
            return;
        }

        const snapshot = await getDocs(query(collection(db, 'smiles'), where('rol', '==', 'smile')));
        todosLosUsuarios = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        console.log(`✅ ${todosLosUsuarios.length} usuarios cargados desde Firestore`);
        savels('usuariosSmileTop', todosLosUsuarios, 300);
        updateUserFilter();
    } catch (error) {
        console.error('❌ Error load usuarios:', error);
        Notificacion('Error al cargar usuarios', 'error');
    }
}

async function loadVentas(page = 0, resetPagination = true) {
    try {
        console.log(`🔄 Cargando ventas página ${page}...`);
        
        // Query base para el mes
        let q = query(
            collection(db, 'registrosdb'),
            where('fechaTour', '>=', currentMonth + '-01'),
            where('fechaTour', '<=', currentMonth + '-31'),
            orderBy('fechaTour', 'desc')
        );

        const snapshot = await getDocs(q);
        let ventasDelMes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Filtrar por usuario ANTES de la paginación
        if (currentUser !== 'todos') {
            ventasDelMes = ventasDelMes.filter(venta => venta.vendedor === currentUser);
            console.log(`🔍 Filtrado por usuario ${currentUser}: ${ventasDelMes.length} ventas`);
        }
        
        // Recalcular paginación basada en ventas filtradas
        totalPages = Math.ceil(ventasDelMes.length / ITEMS_PER_PAGE);
        
        // Si no hay ventas para este usuario, resetear página
        if (ventasDelMes.length === 0) {
            currentPage = 0;
            todasLasVentas = [];
            console.log('❌ No hay ventas para este filtro');
            return;
        }
        
        // Si la página actual está fuera de rango, ir a la primera página
        if (currentPage >= totalPages) {
            currentPage = 0;
        }
        
        const startIndex = currentPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        
        todasLasVentas = ventasDelMes.slice(startIndex, endIndex);
        
        console.log(`✅ ${todasLasVentas.length}/${ventasDelMes.length} ventas cargadas para página ${currentPage + 1}/${totalPages}`);
    } catch (error) {
        console.error('❌ Error load ventas:', error);
        Notificacion('Error al cargar ventas', 'error');
    }
}

async function refreshData() {
    try {
        console.log('🔄 Refrescando datos...');
        
        // Mostrar loading
        $('#tableContainer').html(`
            <div class="loading-state">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Actualizando datos...</p>
            </div>
        `);
        
        // Resetear página al cambiar filtros
        currentPage = 0;
        
        // Recargar usuarios primero
        await loadUsuarios();
        
        // Luego cargar ventas con filtros actuales
        await loadVentas(currentPage);
        
        // Renderizar tabla
        renderTable();
        
        Notificacion('✅ Datos actualizados correctamente', 'success');
        
    } catch (error) {
        console.error('❌ Error refresh:', error);
        Notificacion('Error al actualizar datos', 'error');
    }
}

async function loadNotas() {
    try {
        console.log('🔄 Cargando notas...');
        
        const cache = getls('notasSmileTop');
        if (cache && cache.length > 0) {
            notasData = cache;
            console.log(`✅ ${notasData.length} notas desde cache`);
            return;
        }
        
        // Si no hay cache, crear nota por defecto
        notasData = [
            { 
                id: 1, 
                titulo: 'Noticias a trabajadores', 
                contenido: 'Escribe aquí las noticias importantes para el equipo...', 
                editando: false,
                fechaCreacion: new Date().toISOString()
            }
        ];
        
        savels('notasSmileTop', notasData, 720);
        console.log('✅ Notas por defecto creadas');
    } catch (error) {
        console.error('❌ Error load notas:', error);
    }
}

// ========================================
// 🔄 ACTUALIZAR FILTROS
// ========================================
function updateUserFilter() {
    const filter = $('#userFilter');
    const current = filter.val();
    
    // Limpiar opciones excepto "Todos"
    filter.find('option:not([value="todos"])').remove();
    
    console.log('📋 Actualizando filtro de usuarios...');
    
    // Agregar todos los usuarios registrados
    todosLosUsuarios.forEach(usuario => {
        const nombre = usuario.nombre || usuario.usuario;
        filter.append(`<option value="${usuario.usuario}">${nombre}</option>`);
    });
    
    // Restaurar selección anterior
    if (current && filter.find(`option[value="${current}"]`).length) {
        filter.val(current);
    }
    
    console.log(`✅ ${filter.find('option').length - 1} usuarios en filtro`);
}

// ========================================
// 📋 RENDERIZAR TABLA OPTIMIZADA
// ========================================
function renderTable() {
    const container = $('#tableContainer');
    
    console.log(`📊 Renderizando ${todasLasVentas.length} ventas`);
    
    if (todasLasVentas.length === 0) {
        container.html(`
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>No hay ventas</h3>
                <p>No se encontraron ventas para ${currentUser === 'todos' ? 'este mes' : 'este usuario en este mes'}</p>
                <button class="btn-refresh bt_cargar" style="margin-top: 1rem;">
                    <i class="fas fa-sync"></i>
                    Buscar en base de datos
                </button>
            </div>
        `);
        updateStats([], 0, 0);
        $('#pagination').hide();
        return;
    }
    
    const tableHTML = `
        <table class="sales-table">
            <thead>
                <tr>
                    <th><i class="fas fa-calendar"></i> Fecha</th>
                    <th><i class="fas fa-user"></i> Usuario</th>
                    <th><i class="fas fa-route"></i> Tipo Tour</th>
                    <th><i class="fas fa-users"></i> Pax</th>
                    <th><i class="fas fa-user"></i> Nombre</th>
                    <th><i class="fas fa-money-bill-wave"></i> M. Total</th>
                    <th><i class="fas fa-coins"></i> M. Individual</th>
                    <th><i class="fas fa-percentage"></i> Comisión</th>
                    <th><i class="fas fa-check-circle"></i> Pagado</th>
                    <th><i class="fas fa-chart-line"></i> Ganancia</th>
                    <th><i class="fas fa-star"></i> Puntos</th>
                    <th><i class="fas fa-cogs"></i> Acciones</th>
                </tr>
            </thead>
            <tbody>
                ${todasLasVentas.map(venta => renderVentaRow(venta)).join('')}
            </tbody>
        </table>
    `;
    
    container.html(tableHTML);
    
    const totalIngresos = todasLasVentas.reduce((sum, v) => sum + (parseFloat(v.importeTotal) || 0), 0);
    const totalPuntos = todasLasVentas.reduce((sum, v) => sum + (parseInt(v.puntos) || 0), 0);
    
    updateStats(todasLasVentas, totalIngresos, totalPuntos);
    updatePagination();
}

function filtrarVentas() {
    let filtradas = todasLasVentas;
    
    // Filtrar por usuario si no es "todos"
    if (currentUser !== 'todos') {
        filtradas = filtradas.filter(venta => venta.vendedor === currentUser);
    }
    
    return filtradas;
}

function renderVentaRow(venta, editing = false) {
    const usuario = todosLosUsuarios.find(u => u.usuario === venta.vendedor || u.id === venta.vendedor);
    const fechaFormateada = venta.fechaTour ? new Date(venta.fechaTour).toLocaleDateString('es-ES') : 'Sin fecha';
    const montoIndividual = parseFloat(venta.precioUnitario) || 0;
    const montoTotal = parseFloat(venta.importeTotal) || 0;
    const comision = parseFloat(venta.comision) || (montoTotal * 0.1);
    const ganancia = parseFloat(venta.ganancia) || (montoTotal - comision);
    const puntos = parseInt(venta.puntos) || 0;
    
    if (editing) {
        return `
            <tr class="editing-row" data-id="${venta.id}">
                <td>${fechaFormateada}</td>
                <td class="user-cell">
                    <img src="${usuario?.imagen || './smile.png'}" class="avatar-small">
                    ${usuario?.nombre || usuario?.usuario || venta.vendedor}
                </td>
                <td class="tour-cell">${venta.tipoTour || 'Tour'}</td>
                <td class="money-cell">${venta.cantidadPax || '0'}</td>
                <td class="money-cell">${mis6(venta.nombreCliente) || 'Sin nombre'}</td>
                <td><input type="number" class="edit-input" data-field="importeTotal" value="${montoTotal.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="precioUnitario" value="${montoIndividual.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="comision" value="${comision.toFixed(2)}" step="0.01"></td>
                <td class="money-cell">${Capi(venta.estadoPago) || 'No'}</td>
                <td><input type="number" class="edit-input" data-field="ganancia" value="${ganancia.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="puntos" value="${puntos}"></td>
                <td class="actions-cell">
                    <button class="btn-action btn-save" onclick="saveVenta('${venta.id}')">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn-action btn-cancel" onclick="cancelEdit('${venta.id}')">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `;
    }
    
    return `
        <tr data-id="${venta.id}">
            <td>${fechaFormateada}</td>
            <td class="user-cell">
                <img src="${usuario?.imagen || './smile.png'}" class="avatar-small">
                ${usuario?.nombre || usuario?.usuario || venta.vendedor}
            </td>
            <td class="tour-cell">${venta.tipoTour || 'Tour'}</td>
            <td class="money-cell">${venta.cantidadPax || '0'}</td>
            <td class="money-cell">${mis6(venta.nombreCliente) || 'Sin nombre'}</td>
            <td class="money-cell">${montoTotal.toFixed(2)}</td>
            <td class="money-cell">${montoIndividual.toFixed(2)}</td>
            <td class="money-cell">${comision.toFixed(2)}</td>
            <td class="money-cell">${Capi(venta.estadoPago) || 'No'}</td>
            <td class="money-cell">${ganancia.toFixed(2)}</td>
            <td class="points-cell">${puntos}</td>
            <td class="actions-cell">
                <button class="btn-action btn-view" onclick="viewVenta('${venta.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-action btn-edit" onclick="editVenta('${venta.id}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `;
}

function updateStats(ventas, totalIngresos, totalPuntos) {
    $('#totalVentas').text(`${ventas.length} ${ventas.length === 1 ? 'venta' : 'ventas'}`);
    $('#totalIngresos').text(`S/ ${totalIngresos.toFixed(2)}`);
    $('#totalPuntos').text(`${totalPuntos} puntos`);
}

function updatePagination() {
    const pagination = $('#pagination');
    const prevBtn = $('#prevPage');
    const nextBtn = $('#nextPage');
    const pageNumbers = $('#pageNumbers');
    
    if (totalPages <= 1) {
        pagination.hide();
        return;
    }
    
    // Generar números de página como en smile.js
    let paginationHTML = '';
    const maxVisiblePages = 8;
    
    let startPage = Math.max(0, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);
    
    // Ajustar si estamos cerca del final
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(0, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const isActive = i === currentPage ? 'active' : '';
        paginationHTML += `
            <button class="btn-page page-number ${isActive}" data-page="${i}">
                ${i + 1}
            </button>
        `;
    }
    
    pageNumbers.html(paginationHTML);
    
    prevBtn.prop('disabled', currentPage === 0);
    nextBtn.prop('disabled', currentPage >= totalPages - 1);
    
    pagination.show();
}

// ========================================
// 📝 RENDERIZAR NOTAS
// ========================================
function renderNotas() {
    const container = $('#notesContainer');
    
    if (!notasData || notasData.length === 0) {
        container.html(`
            <div class="empty-state">
                <i class="fas fa-sticky-note"></i>
                <h3>Sin notas</h3>
                <p>Agrega tu primera nota</p>
            </div>
        `);
        return;
    }
    
    const notasHTML = notasData.map(nota => `
        <div class="note-item" data-id="${nota.id}">
            <h4>${nota.titulo}</h4>
            <textarea 
                class="note-content" 
                ${!nota.editando ? 'disabled' : ''} 
                placeholder="Escribe aquí..."
            >${nota.contenido || ''}</textarea>
            <div class="note-actions">
                ${nota.editando ? `
                    <button class="btn-save" onclick="saveNota(${nota.id})">
                        <i class="fas fa-save"></i> 
                    </button>
                    <button class="btn-cancel" onclick="cancelNota(${nota.id})">
                        <i class="fas fa-times"></i> 
                    </button>
                ` : `
                    <button class="btn-edit" onclick="editNota(${nota.id})">
                        <i class="fas fa-edit"></i> 
                    </button>
                `}
            </div>
        </div>
    `).join('');
    
    container.html(notasHTML);
}

// ========================================
// 🎛️ EVENTOS
// ========================================
function initEvents() {
    // Logout
    $(document).on('click', '.bt_salir', async () => {
        try {
            await signOut(auth);
            window.location.href = '/';
            localStorage.clear();
        } catch (error) {
            console.error('Error logout:', error);
        }
    });
    
    // Refresh data (NO RELOAD PAGE)
    $(document).on('click', '.bt_cargar', async () => {
        await refreshData();
    });
    
    // Filtro de mes
    $(document).on('change', '#monthFilter', async function() {
        currentMonth = $(this).val();
        currentPage = 0;
        console.log(`📅 Cambiando a mes: ${currentMonth}`);
        await refreshData();
    });
    
    // Filtro de usuario
    $(document).on('change', '#userFilter', async function() {
        const newUser = $(this).val();
        if (newUser !== currentUser) {
            currentUser = newUser;
            currentPage = 0; // Resetear a primera página
            console.log(`👤 Filtrando por usuario: ${currentUser}`);
            await refreshData();
        }
    });
    
    // Paginación - anterior
    $(document).on('click', '#prevPage', async () => {
        if (currentPage > 0) {
            currentPage--;
            await loadVentas(currentPage, false);
            renderTable();
        }
    });
    
    // Paginación - siguiente
    $(document).on('click', '#nextPage', async () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            await loadVentas(currentPage, false);
            renderTable();
        }
    });
    
    // Paginación - números
    $(document).on('click', '.page-number', async function() {
        const page = parseInt($(this).data('page'));
        if (page !== currentPage) {
            currentPage = page;
            await loadVentas(currentPage, false);
            renderTable();
        }
    });
    
    // Agregar nota
    $(document).on('click', '#addNote', () => {
        const nuevaNota = {
            id: Date.now(),
            titulo: 'Nueva Nota',
            contenido: '',
            editando: true,
            fechaCreacion: new Date().toISOString()
        };
        
        notasData.push(nuevaNota);
        renderNotas();
        Notificacion('Nueva nota agregada', 'info');
    });

    // Filtro de cantidad
    $(document).on('change', '#itemsFilter', async function() {
        const newItems = parseInt($(this).val());
        if (newItems !== ITEMS_PER_PAGE) {
            ITEMS_PER_PAGE = newItems;
            currentPage = 0;
            console.log(`📊 Mostrando ${ITEMS_PER_PAGE} ventas por página`);
            await refreshData();
        }
    });
}

// ========================================
// ✏️ FUNCIONES GLOBALES
// ========================================
window.viewVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    if (!venta) return;
    
    const usuario = todosLosUsuarios.find(u => u.usuario === venta.vendedor || u.id === venta.vendedor);
    const nombreCliente = venta.nombreCliente || 'Cliente';
    const nombreUsuario = usuario?.nombre || usuario?.usuario || venta.vendedor;
    
    Notificacion(`👁️ Viendo: ${nombreCliente} - Vendedor: ${nombreUsuario}`, 'info', 4000);
};

window.editVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    if (!venta) return;
    
    const row = $(`tr[data-id="${ventaId}"]`);
    row.replaceWith(renderVentaRow(venta, true));
    
    Notificacion('Modo edición activado', 'info');
};

window.saveVenta = async function(ventaId) {
    try {
        const row = $(`.editing-row[data-id="${ventaId}"]`);
        const updates = {};
        
        row.find('.edit-input').each(function() {
            const field = $(this).data('field');
            const value = $(this).val();
            updates[field] = field === 'puntos' ? parseInt(value) : parseFloat(value);
        });
        
        updates.actualizadoPor = userData.nombre || userData.usuario;
        updates.fechaActualizacion = serverTimestamp();
        
        await updateDoc(doc(db, 'registrosdb', ventaId), updates);
        
        // Actualizar datos locales
        const ventaIndex = todasLasVentas.findIndex(v => v.id === ventaId);
        if (ventaIndex !== -1) {
            Object.assign(todasLasVentas[ventaIndex], updates);
        }
        
        renderTable();
        Notificacion('✅ Venta actualizada correctamente', 'success');
        
    } catch (error) {
        console.error('❌ Error save venta:', error);
        Notificacion('Error al actualizar venta', 'error');
    }
};

window.cancelEdit = function(ventaId) {
    renderTable();
    Notificacion('Edición cancelada', 'info');
};

window.editNota = function(notaId) {
    const nota = notasData.find(n => n.id === notaId);
    if (nota) {
        nota.editando = true;
        renderNotas();
        Notificacion('Editando nota...', 'info');
    }
};

window.saveNota = function(notaId) {
    const nota = notasData.find(n => n.id === notaId);
    const contenido = $(`.note-item[data-id="${notaId}"] .note-content`).val();
    
    if (nota) {
        nota.contenido = contenido;
        nota.editando = false;
        nota.fechaModificacion = new Date().toISOString();
        
        savels('notasSmileTop', notasData, 720);
        renderNotas();
        Notificacion('📝 Nota guardada correctamente', 'success');
    }
};

window.cancelNota = function(notaId) {
    const nota = notasData.find(n => n.id === notaId);
    if (nota) {
        nota.editando = false;
        renderNotas();
        Notificacion('Edición cancelada', 'info');
    }
};

// ========================================
// 🚀 INICIALIZACIÓN FINAL
// ========================================
$(document).ready(() => {
    console.log('🚀 SmileTop Admin v2.0 iniciado');
});