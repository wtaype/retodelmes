/* ==========================================================================
   REGISTRAR.JS - Módulo SPA Premium de Registro/Edición con Doble Columna & Ranking
   ========================================================================== */

import $ from 'jquery';
import './registrar.css';
import { db } from '../firebase.js';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { wiAuth, Notificacion, wiSpin, getls } from '../widev.js';
import { rutas } from '../rutas.js';
import { 
  getMesActual, 
  cargarTours, 
  obtenerRankingMes, 
  invalidateRankingCaches 
} from './zsmile.js';

// --- VARIABLES GLOBALES DEL MÓDULO ---
let htours = [];      // Lista de tours activos cargados
let selTour = null;   // Tour seleccionado actualmente

// --- RENDERIZADO DEL HTML (Diseño de Doble Columna: 70% Formulario, 30% Ranking en Vivo) ---
export const render = () => `
  <div class="smw_reg_container">
    <div class="smw_reg_card" id="smwRegCard">
      
      <!-- COLUMNA IZQUIERDA: FORMULARIO DE REGISTRO (70%) -->
      <div class="smw_reg_col_left">
        <h1 class="smw_reg_title" id="smwRegCardTitle">
          <i class="fas fa-cart-plus"></i> Registrar Nueva Venta
        </h1>

        <form id="formularioVenta" class="smw_form">
          <div class="smw_form_grid">
            
            <!-- Fila 1: Tipo de Tour (3 cols) + Registro En (1 col) -->
            <div class="smw_form_field w_3">
              <label><i class="fas fa-route"></i> Tipo de Tour *</label>
              <div class="smw_tour_selector" id="tourSelector">
                <div class="smw_tour_display" id="tourDisplay" tabindex="0">
                  <span class="smw_tour_text">
                    <i class="fas fa-search-location" style="color:var(--mco)"></i> 
                    <span id="tourSelectedLabel">Seleccionar tour...</span>
                  </span>
                  <i class="fas fa-chevron-down smw_arrow"></i>
                </div>
                <div class="smw_tour_dropdown" id="tourDropdown">
                  <div class="smw_tour_search">
                    <i class="fas fa-search"></i>
                    <input type="text" id="smwTourSearch" placeholder="Buscar tour por nombre o precio..." autocomplete="off">
                  </div>
                  <div class="smw_tour_table_container">
                    <table class="smw_tour_table">
                      <tbody id="tourTableBody">
                        ${_generarSkeletonsSelectorTours(4)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <input type="hidden" id="tipoTour" required>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-hotel"></i> Registro en:</label>
              <select id="registroEn" class="smw_select">
                <option value="hawka">Hawka</option>
                <option value="hclaudia">HClaudia</option>
              </select>
            </div>

            <!-- Fila 2: Cliente (2 cols) + N° Habitación (1 col) + Hora (1 col) -->
            <div class="smw_form_field w_2">
              <label><i class="fas fa-user"></i> Nombre del Cliente *</label>
              <input type="text" id="nombreCliente" class="smw_input" required placeholder="Nombre de cliente / calle / grupo">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-bed"></i> Habitación</label>
              <input type="text" id="numeroHabitacion" class="smw_input" placeholder="Ej: 205">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-clock"></i> Hora de salida *</label>
              <input type="text" id="horaSalida" class="smw_input" placeholder="Ej: 5PM" required>
            </div>

            <!-- Fila 3: Tipo Doc (1 col) + N° Doc (1 col) + Método Pago (1 col) + PAX (1 col) -->
            <div class="smw_form_field w_1">
              <label><i class="fas fa-id-card"></i> Documento</label>
              <select id="tipoDocumento" class="smw_select">
                <option value="dni">DNI</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedula">Cédula</option>
                <option value="ce">CE</option>
              </select>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-hashtag"></i> N° Documento</label>
              <input type="text" id="numeroDocumento" class="smw_input" placeholder="Ej: 78964523">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-credit-card"></i> Pago *</label>
              <select id="metodoPago" class="smw_select" required>
                <option value="">Seleccionar...</option>
                <option value="Tarjeta">Tarjeta</option>
                <option value="Transferencia">Transferencia</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Yape">Yape</option>
                <option value="Plin">Plin</option>
              </select>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-users"></i> PAX *</label>
              <input type="number" id="cantidadPax" class="smw_input" required min="1" value="1">
            </div>

            <!-- Fila 4: Imp. Indiv. (1 col) + Total (1 col) + Operador (1 col) + Pago Oper. (1 col) -->
            <div class="smw_form_field w_1">
              <label><i class="fas fa-dollar-sign"></i> Individual (S/)</label>
              <input type="number" id="precioUnitario" class="smw_input" step="0.01" placeholder="0.00">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-calculator"></i> Total (S/)</label>
              <input type="number" id="importeTotal" class="smw_input" step="0.01" placeholder="0.00" disabled>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-user-shield"></i> Operador *</label>
              <input type="text" id="Operador" class="smw_input" placeholder="Ejm: Pili..." required>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-hand-holding-usd"></i> Pago Oper. *</label>
              <input type="number" id="PagoOperador" class="smw_input" step="0.01" placeholder="0.00" required>
            </div>

            <!-- Fila 5: Estado Pago (1 col) + Ganancia (1 col) + Fecha (1 col) + Comentarios (1 col) -->
            <div class="smw_form_field w_1">
              <label><i class="fas fa-money-check-alt"></i> Estado Pago *</label>
              <select id="estadoPago" class="smw_select" required>
                <option value="pagado">Pagado (Nosotros)</option>
                <option value="cobrar">Yo pasé (->)</option>
                <option value="pagado2">Nos pasaron (<-)</option>
                <option value="cobrado">Arreglado (<->)</option>
              </select>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-handshake"></i> Ganancia (S/)</label>
              <input type="number" id="ganancia" class="smw_input" step="0.01" placeholder="0.00" disabled>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-calendar-day"></i> Fecha *</label>
              <input type="date" id="fechaTour" class="smw_input" required value="${new Date().toISOString().split('T')[0]}">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fa-solid fa-comment-dots"></i> Notas (Opcional)</label>
              <input type="text" id="Comentario" class="smw_input" placeholder="Anotaciones extra...">
            </div>

            <!-- Fila 6: Opciones de Puntos / Excepciones (4 cols - Ancho Completo) -->
            <div class="smw_options_section">
              <h3 class="smw_options_title"><i class="fas fa-star-half-alt"></i> Opciones de Puntos / Excepciones</h3>
              <div class="smw_check_grid">
                
                <label class="smw_check_label" id="lblJulio">
                  <input type="checkbox" id="vtJulio">
                  <span>Venta de Julio</span>
                </label>

                <label class="smw_check_label" id="lblSonia">
                  <input type="checkbox" id="vtSonia">
                  <span>Venta de Sonia</span>
                </label>

                <label class="smw_check_label" id="lblExterna">
                  <input type="checkbox" id="vtExterna">
                  <span>Venta Externa</span>
                </label>

              </div>
            </div>

          </div>

          <!-- Acciones del Formulario -->
          <div class="smw_form_actions">
            <div class="smw_actions_left" id="smwActionsLeft">
              <button type="submit" class="smw_btn smw_btn_save" id="btnSaveVenta">
                <i class="fas fa-save"></i> Guardar Venta
              </button>
            </div>

            <div class="smw_points_preview">
              <i class="fas fa-trophy"></i>
              <span>Puntos a ganar: <strong id="vistaPreviaLaPuntos">0</strong></span>
            </div>
          </div>

        </form>
      </div>

      <!-- COLUMNA DERECHA: WIDGET DE RANKING EN VIVO (30%) -->
      <div class="smw_reg_col_right">
        <div class="smw_sidebar_header">
          <h2><i class="fas fa-trophy" style="color:#FFDA34"></i> Ranking en Vivo</h2>
          <span class="smw_month_badge" id="lblMesActual">...</span>
        </div>
        
        <div class="smw_mini_ranking_list" id="miniRankingList">
          ${_generarSkeletonsMiniRanking(5)}
        </div>

        <div class="smw_sidebar_links">
          <a href="/historial" class="smw_sidebar_btn nv_item" data-page="historial">
            <i class="fas fa-clipboard-list"></i> Ver Historial de Ventas
          </a>
        </div>
      </div>

    </div>
  </div>
`;

// --- INICIALIZACIÓN DE LA SPA ---
export const init = async () => {
  // Validación de sesión usando el helper centralizado wiAuth de widev.js
  const user = wiAuth.user;
  if (!user) return setTimeout(() => rutas.navigate('/login'), 100);

  // 1. Mostrar nombre de mes en el badge del sidebar
  const mesesNombres = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const mesActual = getMesActual();
  const [ano, mesNum] = mesActual.split('-');
  $('#lblMesActual').text(`${mesesNombres[parseInt(mesNum) - 1]} ${ano}`);

  // 2. Cargar tours desde caché o Firestore
  htours = await cargarTours();
  renderTourTable(htours);

  // 3. Pintar ranking en vivo lateral
  await pintarMiniRanking();

  // 4. Registrar todos los eventos
  _registrarEventos();

  // 5. Verificar modo edición o vista desde el historial
  _verificarModoEspecial(user);
};

// --- ELIMINACIÓN DE EVENTOS DE MEMORIA AL DESMONTAR ---
export const cleanup = () => {
  $(document).off('.registrar');
  selTour = null;
  htours = [];
};

// --- RENDERIZAR TABLA INTERNA DEL SELECTOR ---
function renderTourTable(tours) {
  if (!tours.length) {
    $('#tourTableBody').html('<tr><td colspan="4" style="text-align:center;color:var(--tx3);padding:2vh;">Sin resultados para la búsqueda</td></tr>');
    return;
  }

  const html = tours.map((t) => `
    <tr class="tour-row" data-index="${htours.indexOf(t)}">
      <td class="smw_tour_num"><i class="fas fa-route"></i></td>
      <td>${t.tour}</td>
      <td class="smw_tour_price">S/ ${t.price.toFixed(2)}</td>
      <td class="smw_tour_pts">${t.pts} pts</td>
    </tr>
  `).join('');

  $('#tourTableBody').html(html);
}

// --- CALCULAR Y PINTAR EL WIDGET DE RANKING EN VIVO ---
async function pintarMiniRanking() {
  try {
    const mes = getMesActual();
    
    // Si no está en caché local, inyectar el skeleton para evitar saltos bruscos
    const cacheKey = `empleadosPuntos_${mes}`;
    const cached = getls(cacheKey);
    if (!cached) {
      $('#miniRankingList').html(_generarSkeletonsMiniRanking(5));
    }

    const ranking = await obtenerRankingMes(mes);

    if (!ranking || !ranking.length) {
      $('#miniRankingList').html(`
        <div class="smw_mini_empty">
          <i class="fas fa-star" style="color:var(--brd)"></i>
          <span>No hay ventas este mes.<br>¡Sé el primero en registrar!</span>
        </div>
      `);
      return;
    }

    // Tomamos solo el top 5 para el sidebar
    const html = ranking.slice(0, 5).map((emp, i) => {
      const pos = i + 1;
      const itemCls = pos <= 3 ? `pos_${pos}` : '';
      const badgeContent = pos === 1 ? '<i class="fas fa-crown"></i>' : pos;
      
      const iniciales = `${(emp.nombre || '?')[0]}${(emp.nombre?.split(' ')[1] || '')[0] || ''}`.toUpperCase();
      
      return `
        <div class="smw_mini_rank_item ${itemCls}" style="animation-delay: ${i * 0.08}s">
          <div class="smw_mini_rank_badge">${badgeContent}</div>
          <div class="smw_mini_rank_avatar">
            ${emp.imagen ? `<img src="${emp.imagen}" alt="${emp.nombre}">` : `<span>${iniciales}</span>`}
          </div>
          <div class="smw_mini_rank_info">
            <span class="smw_mini_rank_name">${emp.nombre}</span>
            <span class="smw_mini_rank_sales">${emp.totalVentas} tour${emp.totalVentas !== 1 ? 's' : ''}</span>
          </div>
          <div class="smw_mini_rank_pts">${emp.totalPuntos} <span>pts</span></div>
        </div>
      `;
    }).join('');

    $('#miniRankingList').html(html);
  } catch (error) {
    console.error('Error al pintar mini ranking:', error);
    $('#miniRankingList').html(`
      <div class="smw_mini_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar el ranking</span>
      </div>
    `);
  }
}

// --- EVENTOS JQUERY DE LA PÁGINA ---
function _registrarEventos() {
  $(document)
    // Validación visual de campos requeridos en tiempo real
    .on('input.registrar change.registrar', '#formularioVenta input, #formularioVenta select', function() {
      const $el = $(this);
      const val = $el.val()?.toString().trim();
      const req = $el.prop('required');
      
      if (req) {
        $el.toggleClass('okValor', !!val).toggleClass('faltaValor', !val);
      } else {
        $el.toggleClass('okValor', !!val);
      }
    })

    // Abrir/Cerrar el desplegable de Tours
    .on('click.registrar', '#tourDisplay', function(e) {
      e.stopPropagation();
      const $drop = $('#tourDropdown');
      const active = $drop.hasClass('active');
      
      $('.smw_tour_dropdown').removeClass('active');
      $('.smw_tour_display').removeClass('active');

      if (!active) {
        $drop.addClass('active');
        $(this).addClass('active');
        setTimeout(() => $('#smwTourSearch').focus(), 100);
      }
    })

    // Cerrar dropdown al hacer click fuera
    .on('click.registrar', function(e) {
      if (!$(e.target).closest('.smw_tour_selector').length) {
        $('#tourDropdown, #tourDisplay').removeClass('active');
      }
    })

    // Búsqueda interactiva de tours
    .on('input.registrar', '#smwTourSearch', function() {
      const q = $(this).val().toLowerCase();
      if (!q) {
        renderTourTable(htours);
      } else {
        const filtrados = htours.filter(t => 
          t.tour.toLowerCase().includes(q) || 
          t.price.toString().includes(q)
        );
        renderTourTable(filtrados);
      }
    })

    // Selección de Tour de la tabla
    .on('click.registrar', '.tour-row', function(e) {
      e.stopPropagation();
      const idx = $(this).data('index');
      selTour = htours[idx];
      if (!selTour) return;

      $('#tourSelectedLabel').text(selTour.tour);
      $('#tipoTour').val(selTour.tour).removeClass('faltaValor').addClass('okValor');
      $('#precioUnitario').val(selTour.price).removeClass('faltaValor').addClass('okValor');
      $('#tourDropdown, #tourDisplay').removeClass('active');
      
      $('.tour-row').removeClass('selected');
      $(this).addClass('selected');

      aplicarZoom('#precioUnitario');
      
      calcularTotal();
      calcularComision();
      actualizarPuntosPreview();
    })

    // Cambios en PAX y Precio Unitario
    .on('input.registrar', '#cantidadPax, #precioUnitario', () => {
      calcularTotal();
      calcularComision();
      actualizarPuntosPreview();
    })

    // Cambios en Estado de Pago e Importes
    .on('change.registrar', '#estadoPago', calcularComision)
    .on('input.registrar', '#importeTotal, #PagoOperador', calcularComision)

    // Visual de checkboxes personalizados
    .on('change.registrar', '#vtJulio, #vtSonia, #vtExterna', function() {
      const id = $(this).attr('id');
      const mapped = { 'vtJulio': '#lblJulio', 'vtSonia': '#lblSonia', 'vtExterna': '#lblExterna' };
      $(mapped[id]).toggleClass('active', $(this).prop('checked'));
      actualizarPuntosPreview();
    })

    // GUARDAR O ACTUALIZAR LA VENTA
    .on('submit.registrar', '#formularioVenta', async function(e) {
      e.preventDefault();
      
      const $btn = $('#btnSaveVenta');
      if ($btn.prop('disabled')) return;

      // Validar selector de tours
      if (!selTour) {
        Notificacion('Selecciona un tour del catálogo', 'error');
        $('#tourDisplay').addClass('faltaValor').focus();
        return;
      }

      // Validaciones obligatorias de campos mínimos
      const req = [
        ['#nombreCliente', 'Cliente'],
        ['#horaSalida', 'Hora'],
        ['#fechaTour', 'Fecha'],
        ['#Operador', 'Operador'],
        ['#metodoPago', 'Pago']
      ];
      const vacios = req.filter(([sel]) => !$(sel).val()?.trim());
      if (vacios.length) {
        vacios.forEach(([sel]) => $(sel).addClass('faltaValor'));
        Notificacion(`Completa los campos obligatorios: ${vacios.map(([,n]) => n).join(', ')}`, 'error');
        return;
      }

      const user = wiAuth.user;
      const vendedor = user.usuario || user.nombre || 'Desconocido';
      const email = user.email || '';

      const pax = parseInt($('#cantidadPax').val()) || 1;
      const esEsp = $('#vtJulio, #vtSonia, #vtExterna').is(':checked');
      const ventaId = $btn.attr('data-edit-id') || `venta_${Date.now()}`;

      const venta = {
        idVenta: ventaId,
        tipoTour: selTour.tour,
        registroEn: $('#registroEn').val(),
        nombreCliente: $('#nombreCliente').val().trim(),
        numeroHabitacion: $('#numeroHabitacion').val().trim(),
        tipoDocumento: $('#tipoDocumento').val(),
        numeroDocumento: $('#numeroDocumento').val().trim(),
        cantidadPax: pax,
        precioUnitario: parseFloat($('#precioUnitario').val()) || 0,
        metodoPago: $('#metodoPago').val(),
        importeTotal: parseFloat($('#importeTotal').val()) || 0,
        ganancia: parseFloat($('#ganancia').val()) || 0,
        horaSalida: $('#horaSalida').val().trim(),
        Operador: $('#Operador').val().trim(),
        PagoOperador: parseFloat($('#PagoOperador').val()) || 0,
        Comentario: $('#Comentario').val().trim(),
        fechaTour: $('#fechaTour').val(),
        estadoPago: $('#estadoPago').val(),
        vendedor: vendedor,
        puntos: esEsp ? 0 : (selTour.pts * pax),
        email: email,
        qventa: 1,
        fechaRegistro: serverTimestamp(),
        esVentaJulio: !!$('#vtJulio').prop('checked'),
        esVentaSonia: !!$('#vtSonia').prop('checked'),
        esVentaExterna: !!$('#vtExterna').prop('checked')
      };

      wiSpin($btn, true, $btn.attr('data-edit-id') ? 'Actualizando...' : 'Guardando...');

      try {
        await setDoc(doc(db, 'registrosdb', ventaId), venta);

        // Limpiar cachés del mes de forma inteligente usando zsmile.js
        const mes = getMesActual();
        invalidateRankingCaches(vendedor, mes);

        Notificacion(
          $btn.attr('data-edit-id') ? '¡Venta actualizada con éxito! 🏆' : '¡Venta registrada con éxito! 🚀',
          'success'
        );

        // Limpiar formulario
        limpiarFormulario();

        // Repintar mini ranking lateral de inmediato para feedback instantáneo
        await pintarMiniRanking();

        // Redirección guiada al historial para corroborar
        setTimeout(() => {
          rutas.navigate('/historial');
        }, 1200);

      } catch (err) {
        console.error('Error al guardar venta:', err);
        Notificacion('Error al intentar guardar la venta.', 'error');
      } finally {
        wiSpin($btn, false);
      }
    });
}

// --- CÁLCULOS EN TIEMPO REAL ---
function calcularTotal() {
  const pax = parseInt($('#cantidadPax').val()) || 1;
  const precio = parseFloat($('#precioUnitario').val()) || 0;
  const total = precio * pax;
  $('#importeTotal').val(total.toFixed(2));
  aplicarZoom('#importeTotal');
}

function calcularComision() {
  const estado = $('#estadoPago').val();
  const total = parseFloat($('#importeTotal').val()) || 0;
  const pago = parseFloat($('#PagoOperador').val()) || 0;
  const esPagado = estado === 'pagado' || estado === 'pagado2';

  const $pagoOp = $('#PagoOperador');
  if (esPagado) {
    $pagoOp.prop('disabled', true).val('0').attr('placeholder', 'Servicio propio');
    $('#ganancia').val(total.toFixed(2));
  } else {
    $pagoOp.prop('disabled', false).attr('placeholder', 'S/ 0.00');
    const ganancia = total - pago;
    $('#ganancia').val(ganancia.toFixed(2));
  }
  
  aplicarZoom('#ganancia');
}

function actualizarPuntosPreview() {
  const pax = parseInt($('#cantidadPax').val()) || 1;
  const ptsBase = selTour?.pts || 0;
  const esEsp = $('#vtJulio, #vtSonia, #vtExterna').is(':checked');
  const totalPuntos = esEsp ? 0 : (ptsBase * pax);
  
  $('#vistaPreviaLaPuntos').text(totalPuntos);
  aplicarZoom('#vistaPreviaLaPuntos');
}

function aplicarZoom(sel) {
  $(sel).addClass('field-updated');
  setTimeout(() => $(sel).removeClass('field-updated'), 600);
}

// --- LIMPIAR ESTADO FORMULARIO ---
function limpiarFormulario() {
  selTour = null;
  const $form = $('#formularioVenta');
  if (!$form.length) return;

  $form[0].reset();
  $('#formularioVenta input, #formularioVenta select').prop('disabled', false).removeClass('okValor faltaValor');
  $('#smwRegCard').removeClass('view-only edit-mode');
  
  $('.smw_check_label').removeClass('active');
  
  $('#btnSaveVenta').prop('disabled', false).html('<i class="fas fa-save"></i> Guardar Venta').removeAttr('data-edit-id');
  $('.btn-custom-action').remove();

  // Valores default
  $('#cantidadPax').val(1);
  $('#fechaTour').val(new Date().toISOString().split('T')[0]);
  $('#vistaPreviaLaPuntos').text('0');
  $('#tourSelectedLabel').text('Seleccionar tour...');
  $('.tour-row').removeClass('selected');
  $('#importeTotal, #ganancia').prop('disabled', true);
  
  $('#smwRegCardTitle').html('<i class="fas fa-cart-plus"></i> Registrar Nueva Venta');
}

// --- CONFIGURAR MODO EDICIÓN O VISTA ---
function _verificarModoEspecial(user) {
  const datosEdicion = window.editarVenta || getls('editarVentaTemp');
  if (!datosEdicion) return;

  window.editarVenta = null;
  removels('editarVentaTemp');

  const { venta, soloVista } = datosEdicion;
  if (!venta) return;

  limpiarFormulario();

  // Vincular tour
  selTour = htours.find(t => t.tour === venta.tipoTour);
  if (selTour) {
    $('#tourSelectedLabel').text(selTour.tour);
    $('#tipoTour').val(selTour.tour);
    $(`.tour-row[data-index="${htours.indexOf(selTour)}"]`).addClass('selected');
  } else {
    $('#tourSelectedLabel').text(venta.tipoTour || 'Tour personalizado');
    $('#tipoTour').val(venta.tipoTour || '');
  }

  // Rellenar campos
  Object.entries(venta).forEach(([key, val]) => {
    const $el = $(`#${key}`);
    if ($el.length && key !== 'fechaTour') {
      $el.val(val || '');
    }
  });

  if (venta.fechaTour) {
    let f = '';
    if (venta.fechaTour?.toDate) f = venta.fechaTour.toDate().toISOString().split('T')[0];
    else if (typeof venta.fechaTour === 'string') f = venta.fechaTour.split('T')[0];
    $('#fechaTour').val(f);
  }

  $('#vtJulio').prop('checked', venta.esVentaJulio || false).trigger('change');
  $('#vtSonia').prop('checked', venta.esVentaSonia || false).trigger('change');
  $('#vtExterna').prop('checked', venta.esVentaExterna || false).trigger('change');

  calcularTotal();
  calcularComision();
  actualizarPuntosPreview();

  if (soloVista) {
    $('#formularioVenta input, #formularioVenta select').prop('disabled', true);
    $('#tourDisplay').css('pointer-events', 'none');
    $('#smwRegCard').addClass('view-only');
    $('#smwRegCardTitle').html('<i class="fas fa-eye"></i> Detalle de Venta (Solo Vista)');
    
    $('#btnSaveVenta').prop('disabled', true).html('<i class="fas fa-lock"></i> Venta Protegida');

    if (!$('.btn-clear-view').length) {
      $('#smwActionsLeft').append(`
        <button type="button" class="smw_btn smw_btn_cancel btn-custom-action btn-clear-view">
          <i class="fas fa-arrow-left"></i> Volver al Registro
        </button>
      `);
    }

    $(document).on('click.registrar', '.btn-clear-view', function() {
      limpiarFormulario();
      Notificacion('Formulario restaurado a modo registro.', 'info');
    });

  } else {
    $('#formularioVenta input, #formularioVenta select').prop('disabled', false);
    $('#importeTotal, #ganancia').prop('disabled', true);
    $('#tourDisplay').css('pointer-events', 'auto');
    $('#smwRegCard').addClass('edit-mode');
    $('#smwRegCardTitle').html('<i class="fas fa-edit"></i> Modificar Registro de Venta');

    $('#btnSaveVenta').prop('disabled', false).html('<i class="fas fa-save"></i> Guardar Cambios').attr('data-edit-id', venta.idVenta || venta.id);

    if (!$('.btn-cancel-edit').length) {
      $('#smwActionsLeft').append(`
        <button type="button" class="smw_btn smw_btn_cancel btn-custom-action btn-cancel-edit">
          <i class="fas fa-times"></i> Cancelar Edición
        </button>
      `);
    }

    $(document).on('click.registrar', '.btn-cancel-edit', function() {
      limpiarFormulario();
      Notificacion('Edición cancelada.', 'info');
    });
  }
}

// --- GENERADORES DE SKELETONS LOADERS COMPACTOS Y PREMIUM ---
function _generarSkeletonsSelectorTours(cant = 4) {
  return Array(cant).fill(0).map(() => `
    <tr style="pointer-events: none;">
      <td class="smw_tour_num"><div class="smw_sk_el" style="width: 16px; height: 16px; border-radius: 4px;"></div></td>
      <td><div class="smw_sk_el" style="width: 140px; height: 14px; border-radius: 4px;"></div></td>
      <td class="smw_tour_price"><div class="smw_sk_el" style="width: 50px; height: 14px; border-radius: 4px;"></div></td>
      <td class="smw_tour_pts"><div class="smw_sk_el" style="width: 40px; height: 14px; border-radius: 4px;"></div></td>
    </tr>
  `).join('');
}

function _generarSkeletonsMiniRanking(cant = 5) {
  return Array(cant).fill(0).map((_, index) => `
    <div class="smw_mini_rank_item smw_sk_mini_row" style="pointer-events: none; animation-delay: ${index * 0.05}s">
      <div class="smw_sk_el" style="width: 2.2vh; height: 2.2vh; border-radius: 50%; margin-right: 1.5vh;"></div>
      <div class="smw_mini_rank_avatar smw_sk_el smw_sk_circle" style="border-radius: 50%; width: 4.5vh; height: 4.5vh; background: none; margin-right: 1.5vh;"></div>
      <div class="smw_mini_rank_info" style="flex: 1;">
        <div class="smw_sk_el" style="width: 80px; height: 12px; margin-bottom: 0.6vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 50px; height: 9px; border-radius: 4px;"></div>
      </div>
      <div class="smw_sk_el" style="width: 40px; height: 14px; border-radius: 4px;"></div>
    </div>
  `).join('');
}
