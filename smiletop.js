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

// FUNCIONES MUY UTILES[END]

// DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [START]
function smileContenido(wi){

  console.log(wi.nombre); 
  Mensaje('Bienvenido ' + wi.nombre + '!'); //Bievenida como ejemplo 

// HTML CONTENIDO [Start] 
  $('.app').html(`
    <!-- HEADER SUPERIOR -->
    <header class="top-header">
        <div class="header-container">
            <!-- TITULO IZQUIERDA -->
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

            <!-- DERECHA: TEMAS + USUARIO -->
            <div class="header-right">
                <!-- SELECTOR DE TEMAS -->
                <div class="witemas"></div>
                
                <!-- USUARIO Y SALIR -->
                <div class="user-section">
                    <div class="user-info">
                        <img src="https://i.postimg.cc/HWMY74kP/image.png" alt="RUBI" class="user-avatar">
                        <span class="user-name">${wi.nombre}</span>
                    </div>
                    <button class="logout-btn bt_salir" >
                        <i class="fas fa-sign-out-alt"></i>
                        Salir
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- CONTENIDO PRINCIPAL -->
    <main class="main-container">
        <!-- GRID DE DASHBOARD -->
        <div class="dashboard-layout">
            
            <!-- SECCION NUEVA VENTA -->
            <section class="new-sale-panel">
                <div class="panel-header">
                    <h2>
                        <i class="fas fa-plus-circle"></i>
                        Nueva Venta
                    </h2>
                    <div class="bt_add_exportar">
                    <button class="btn-add" id="addNewSale">
                    <i class="fas fa-plus"></i>
                    Agregar
                    </button>
                    <button class="btn-add" id="exportarExcel">
                    <i class="fa-solid fa-file-export"></i>
                    Exportar
                    </button>
                    </div>
                </div>

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

<!-- 1. PARAPENTE -->
<option value="Parapente" data-points="50" data-price="330">
1. 🪂 Parapente (50 pts)
</option>

<!-- 2. BUGGIE TOURS -->
<option value="Buggie 1 Hora - Sonia" data-points="25" data-price="25">
2. 🏜️ Buggie 1 Hora - Sonia (25 pts)
</option>
<option value="Buggie 2 Horas - Sonia" data-points="35" data-price="35">
3. 🏜️ Buggie 2 Horas - Sonia (35 pts)
</option>
<option value="Buggie Privado - Sonia" data-points="40" data-price="200">
4. 🏜️ Buggie Privado - Sonia (40 pts)
</option>

<!-- 5. TOURS DE BODEGAS -->
<option value="Tour de bodegas" data-points="15" data-price="30">
5. 🍷 Tour de bodegas (15 pts)
</option>
<option value="Tour de bodegas - Jackson" data-points="20" data-price="30">
6. 🍷 Tour de bodegas - Jackson (20 pts)
</option>
<option value="Tour de bodegas Privado - Jackson" data-points="40" data-price="150">
7. 🍷 Tour de bodegas Privado - Jackson (40 pts)
</option>

<!-- 8. CITY TOUR -->
<option value="City Tour - Jackson" data-points="40" data-price="200">
8. 🏛️ City Tour - Jackson (40 pts)
</option>

<!-- 9. OTROS TOURS -->
<option value="Tour de Paracas" data-points="10" data-price="70">
9. 🏝️ Tour de Paracas (10 pts)
</option>
<option value="Cañón de los perdidos" data-points="10" data-price="70">
10. 🏔️ Cañón de los perdidos (10 pts)
</option>
<option value="Cuatrimotos" data-points="10" data-price="70">
11. 🏍️ Cuatrimotos (10 pts)
</option>
<option value="Sobrevuelo" data-points="10" data-price="200">
12. ✈️ Sobrevuelo (10 pts)
</option>
<option value="Nazca Terrestre" data-points="10" data-price="150">
13. 🗿 Nazca Terrestre (10 pts)
</option>
<option value="Tablas Profesional" data-points="15" data-price="150">
14. 🏄 Tablas Profesional (15 pts)
</option>
<option value="Polaris" data-points="10" data-price="380">
15. 🚙 Polaris (10 pts)
</option>
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
<input type="text" id="horaSalida" required="">
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
            </section>

            <!-- SECCION COMPETENCIA -->
            <section class="competition-panel">
                <div class="panel-header">
                    <h2>
                        <i class="fas fa-fire"></i>
                        Competencia del Mes
                    </h2>
                    <span class="subtitle">¡Quien venda más gana!</span>
                </div>

                <!-- TRABAJADORES -->
                <div class="workers-grid">
                    <!-- RUBI -->
                    <div class="worker-card champion" data-employee="RUBI">
                        <div class="rank-badge">
                            <i class="fas fa-crown"></i>
                            #1
                        </div>
                        <div class="worker-avatar">
                            <img src="https://i.postimg.cc/HWMY74kP/image.png" alt="RUBI">
                            <div class="status-online"></div>
                        </div>
                        <div class="worker-info">
                            <h3>RUBI</h3>
                            <p>Especialista en Tours</p>
                        </div>
                        <div class="worker-points">
                            <span class="points-number">10</span>
                            <span class="points-label">puntos</span>
                        </div>
                        <div class="worker-stats">
                            <div class="stat">
                                <span class="stat-value">1</span>
                                <span class="stat-label">Tours Vendidos</span>
                            </div>
                            <div class="stat">
                                <span class="stat-value">2</span>
                                <span class="stat-label">Clientes Atendidos</span>
                            </div>
                            <div class="stat">
                                <span class="stat-value">63%</span>
                                <span class="stat-label">Tasa de Éxito</span>
                            </div>
                            <div class="stat">
                                <span class="stat-value">1d</span>
                                <span class="stat-label">Racha Actual</span>
                            </div>
                        </div>
                    </div>

                    <!-- PIERO -->
                    <div class="worker-card runner-up" data-employee="PIERO">
                        <div class="rank-badge">
                            <i class="fas fa-medal"></i>
                            #2
                        </div>
                        <div class="worker-avatar">
                            <img src="https://i.postimg.cc/GmmnzkbR/image.png" alt="PIERO">
                            <div class="status-online"></div>
                        </div>
                        <div class="worker-info">
                            <h3>PIERO</h3>
                            <p>Especialista en Tours</p>
                        </div>
                        <div class="worker-points">
                            <span class="points-number">50</span>
                            <span class="points-label">puntos</span>
                        </div>
                        <div class="worker-stats">
                            <div class="stat">
                                <span class="stat-value">1</span>
                                <span class="stat-label">Tours Vendidos</span>
                            </div>
                            <div class="stat">
                                <span class="stat-value">1</span>
                                <span class="stat-label">Clientes Atendidos</span>
                            </div>
                            <div class="stat">
                                <span class="stat-value">63%</span>
                                <span class="stat-label">Tasa de Éxito</span>
                            </div>
                            <div class="stat">
                                <span class="stat-value">1d</span>
                                <span class="stat-label">Racha Actual</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ULTIMO GANADOR DEL MES -->
                <div class="last-winner">
                    <div class="winner-header">
                        <i class="fas fa-trophy"></i>
                        <h3>Último Ganador del Mes</h3>
                    </div>
                    <div class="winner-info">
                        <img src="https://i.postimg.cc/HWMY74kP/image.png" alt="RUBI">
                        <div class="winner-details">
                            <h4>RUBI</h4>
                            <p>Febrero 2025</p>
                            <span class="winner-points">150 puntos</span>
                        </div>
                        <div class="winner-achievement">
                            <i class="fas fa-star"></i>
                            <span>¡Excelente trabajo!</span>
                        </div>
                    </div>
                </div>

                <!-- RESUMEN COMPETENCIA -->
                <div class="competition-summary">
                    <div class="summary-stat">
                        <span class="summary-label">Total Tours</span>
                        <span class="summary-value">2</span>
                    </div>
                    <div class="summary-stat">
                        <span class="summary-label">Puntos Totales</span>
                        <span class="summary-value">60</span>
                    </div>
                    <div class="summary-stat">
                        <span class="summary-label">Tours de Hoy</span>
                        <span class="summary-value">0</span>
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
                <h2>
                    <i class="fas fa-clipboard-list"></i>
                    Registro de Ventas
                </h2>
                <div class="table-filters">
                    <select id="filterEmployee" class="filter-select">
                        <option value="">Todos los vendedores</option>
                        <option value="RUBI">RUBI</option>
                        <option value="PIERO">PIERO</option>
                    </select>
                    <button class="filter-btn" id="todayFilter">
                        <i class="fas fa-calendar-day"></i>
                        Hoy
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
                    <tbody>
                        <!-- DATOS DE EJEMPLO -->
                        <tr>
                            <td><span class="tour-badge">Parapente</span></td>
                            <td>
                                <strong>CARLOS MENDOZA LOPEZ</strong>
                                <small>Hab: 301</small>
                            </td>
                            <td><span class="pax-badge"><i class="fas fa-users"></i> 1</span></td>
                            <td>
                                <div class="datetime-info">
                                    <span><i class="fas fa-calendar"></i> Invalid Date</span>
                                    <span><i class="fas fa-clock"></i> undefined</span>
                                </div>
                            </td>
                            <td>
                                <div class="seller-info">
                                    <strong>PIERO</strong>
                                    <i class="fas fa-user-tie"></i>
                                </div>
                            </td>
                            <td><strong class="price">S/ 330.00</strong></td>
                            <td><span class="points-badge"><i class="fas fa-star"></i> 50</span></td>
                            <td><span class="status-badge paid"><i class="fas fa-check-circle"></i> PAGADO</span></td>
                            <td>
                                <div class="action-buttons">
                                    <button class="btn-view" title="Ver detalles">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                    <button class="btn-edit" title="Editar">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn-delete" title="Eliminar">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span class="tour-badge">Tour de Paracas</span></td>
                            <td>
                                <strong>MIGUEL ANGEL ROJAS GONZALEZ</strong>
                                <small>Hab: 205</small>
                            </td>
                            <td><span class="pax-badge"><i class="fas fa-users"></i> 2</span></td>
                            <td>
                                <div class="datetime-info">
                                    <span><i class="fas fa-calendar"></i> Invalid Date</span>
                                    <span><i class="fas fa-clock"></i> undefined</span>
                                </div>
                            </td>
                            <td>
                                <div class="seller-info">
                                    <strong>RUBI</strong>
                                    <i class="fas fa-user-tie"></i>
                                </div>
                            </td>
                            <td><strong class="price">S/ 140.00</strong></td>
                            <td><span class="points-badge"><i class="fas fa-star"></i> 10</span></td>
                            <td><span class="status-badge paid"><i class="fas fa-check-circle"></i> PAGADO</span></td>
                            <td>
                                <div class="action-buttons">
                                    <button class="btn-view" title="Ver detalles">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                    <button class="btn-edit" title="Editar">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn-delete" title="Eliminar">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

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
                        <span class="service-name">🏜️ Buggie Privado</span>
                        <span class="point-value">30</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🏛️ City Tour</span>
                        <span class="point-value">20</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🏜️ Buggie Grupal</span>
                        <span class="point-value">15</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🍷 Tour de bodegas</span>
                        <span class="point-value">15</span>
                    </div>
                    <div class="point-item">
                        <span class="service-name">🏄 Tablas Profesional</span>
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
                    <div class="rule-item">
                        <span class="rule-number">3</span>
                        <!-- <span>LOS PUNTOS APLICAN PARA HUÉSPEDES DE PLATAFORMAS DE RESERVAS O CLIENTES DIRECTOS</span> -->
                    </div>
                    <div class="rule-item">
                        <span class="rule-number">4</span>
                        <!-- <span>NO APLICA PARA PASAJEROS QUE SON PASADOS POR TERCIARIOS COMO JALADORES O CHOFERES</span> -->
                    </div>
                    <div class="rule-item bonus">
                        <span class="rule-number">5</span>
                        <span>SE ANULARÁN LOS PUNTOS POR ALGÚN RECLAMO. SI EL CLIENTE DEJA COMENTARIO A FAVOR HAY BONUS DE +10 PUNTOS. MAL COMENTARIO = -10 PUNTOS</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-number">6</span>
                        <span>SI SE REALIZA ANULACIÓN DE TOUR O DEVOLUCIÓN DE DINERO NO SE DARÁN PUNTAJES</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-number">7</span>
                        <span>PARA QUE LOS PUNTOS SEAN VÁLIDOS SE DEBE REGISTRAR COMPLETO TODOS LOS DATOS EL MISMO DÍA</span>
                    </div>
                    <div class="rule-item bonus">
                        <span class="rule-number">8</span>
                        <span>SI EL CLIENTE TE ETIQUETA EN REDES SOCIALES = +5 PUNTOS BONUS, PERO DEJA COMENTARIO = +5 (MÁXIMO 10 POR CLIENTE) </span>
                    </div>
                </div>
            </div>

            <div class="tab-content" id="prices-tab">
                <h3><i class="fas fa-tags"></i> Precios de Tours - Venta Mínima</h3>
                <div class="prices-grid">
                    <div class="price-item">
                        <span class="service-name">🏜️ Buggie 1 Hora</span>
                        <span class="service-price">S/ 25.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏜️ Buggie 2 Horas</span>
                        <span class="service-price">S/ 35.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏜️ Buggie Privado</span>
                        <span class="service-price">S/ 200.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏝️ Paracas</span>
                        <span class="service-price">S/ 70.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏔️ Cañón de los Perdidos</span>
                        <span class="service-price">S/ 70.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🪂 Parapente</span>
                        <span class="service-price">S/ 330.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏍️ Cuatrimotos</span>
                        <span class="service-price">S/ 70.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🍷 Bodegas</span>
                        <span class="service-price">S/ 30.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏛️ City Tour</span>
                        <span class="service-price">S/ 200.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🚙 Polaris</span>
                        <span class="service-price">S/ 380.00</span>
                    </div>
                    <div class="price-item">
                        <span class="service-name">🏄 Tablas Profesionales</span>
                        <span class="service-price">S/ 150.00</span>
                    </div>
                </div>
                <div class="price-note">
                    <p><i class="fas fa-info-circle"></i> <strong>Nota:</strong> City Tour incluye S/ 10.00 por persona para actividad de chocotejas</p>
                </div>
            </div>
        </section>
    </main>

    <!-- CONTAINER DE NOTIFICACIONES -->
    <div id="notifications-container"></div>

    <!-- MODALES -->
    <div id="modal-container"></div>
`); // HTML CONTENIDO [End] 

// JQUERY CONTENIDO JS [Start] 
 

// JQUERY CONTENIDO JS [End] 

}// DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [START]

 