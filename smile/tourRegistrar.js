// === IMPORTS ===
import $ from 'jquery';
import { db } from '../firebase/init.js';
import { doc, setDoc, getDocs, collection, query, where, serverTimestamp } from 'firebase/firestore';
import { Notificacion, savels, getls, savebd } from './widev.js';
import { wiUsuario, todasLasVentas, mesActual } from './smile.js';
import { cargarVentas, renderizarTablaVentas } from './tourHistorial.js';
import { calcularPuntosEmpleados, renderizarEmpleados, actualizarResumenCompetencia } from './tourRanking.js';

// === EXPORTS ===
export { cargarDatosEnFormulario, cargarTours, initTourSelector, getFormularioHTML, limpiarEstadoFormulario };

// === HTML FORMULARIO ===
function getFormularioHTML() {
  return `
    <form id="formularioVenta" class="sale-form">
      <div class="form-grid">
        <div class="form-field">
          <label class="tour-label"><i class="fas fa-route"></i>Tipo de Tour *</label>
          <div class="tour-selector" id="tourSelector">
            <div class="tour-display" id="tourDisplay">
              <span class="tour-text">🔍 Seleccionar tour...</span>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="tour-dropdown" id="tourDropdown">
              <div class="tour-search">
                <input type="text" id="tourSearch" placeholder="Buscar tour..." autocomplete="off">
                <i class="fas fa-search"></i>
              </div>
              <div class="tour-table-container">
                <table class="tour-table"><tbody id="tourTableBody"></tbody></table>
              </div>
            </div>
          </div>
          <input type="hidden" id="tipoTour" required>
        </div>

        <div class="form-field">
          <label><i class="fas fa-hotel"></i>Registro en:</label>
          <select id="registroEn">
            <option value="hawka">Hawka</option>
            <option value="hclaudia">HClaudia</option>
          </select>
        </div>

        <div class="form-field">
          <label><i class="fas fa-bed"></i>N° Habitación(Opcional)</label>
          <input type="text" id="numeroHabitacion" placeholder="Ej: 205">
        </div>

        <div class="form-field">
          <label><i class="fas fa-user"></i>Nombre del Cliente *</label>
          <input type="text" id="nombreCliente" required placeholder="Nombre de cliente / calle">
        </div>

        <div class="form-field">
          <label><i class="fas fa-clock"></i>Hora de salida *</label>
          <input type="text" id="horaSalida" placeholder="2 HORAS -5PM" required>
        </div>

        <div class="form-field">
          <label><i class="fas fa-id-card"></i>Tipo de Documento</label>
          <select id="tipoDocumento">
            <option value="dni">DNI</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="cedula">Cédula</option>
            <option value="ce">Carnet Extranjería</option>
          </select>
        </div>

        <div class="form-field">
          <label><i class="fas fa-hashtag"></i>N° DNI/Pasaporte/CE</label>
          <input type="text" id="numeroDocumento" placeholder="78964523">
        </div>

        <div class="form-field">
          <label><i class="fas fa-credit-card"></i>Método de Pago</label>
          <select id="metodoPago">
            <option value="">Seleccionar...</option>
            <option value="Tarjeta">Tarjeta de Débito/Crédito</option>
            <option value="Transferencia">Transferencia Bancaria</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Yape">Yape</option>
            <option value="Plin">Plin</option>
          </select>
        </div>

        <div class="form-field">
          <label><i class="fas fa-users"></i>PAX (Cantidad Personas/Grupo Privado)</label>
          <input type="number" id="cantidadPax" required min="1" value="1">
        </div>

        <div class="form-field">
          <label><i class="fas fa-user-tag"></i>Importe Individual/Grupo Privado</label>
          <input type="number" id="precioUnitario" step="0.01" placeholder="S/ 0.00">
        </div>

        <div class="form-field">
          <label><i class="fas fa-calculator"></i>Total por Pagar(S/)</label>
          <input type="number" id="importeTotal" step="0.01" placeholder="S/ 0.00" disabled>
        </div>

        <div class="form-field">
          <label><i class="fas fa-user"></i>Operador *</label>
          <input type="text" id="Operador" placeholder="Ejm: Jacki, Pili, William...." required>
        </div>

        <div class="form-field">
          <label><i class="fas fa-money-bill"></i>Pago al operador (S/) *</label>
          <input type="number" id="PagoOperador" step="0.01" placeholder="0.00" required>
        </div>

        <div class="form-field">
          <label><i class="fas fa-money-check-alt"></i>Estado del Pago:</label>
          <select id="estadoPago">
            <option value="pagado">Pagado (Tour con nosotros)</option>
            <option value="cobrar">Yo pase al operador (->)</option>
            <option value="pagado2">Nos ha pasado a nosotros (<-)</option>
            <option value="cobrado">Deuda Arreglada (<->)</option>
          </select>
        </div>

        <div class="form-field">
          <label title="Calculo: importe total - comision del operador"><i class="fas fa-handshake"></i>Ganancia Estimada*</label>
          <input type="number" id="ganancia" step="0.01" placeholder="S/ 0.00" disabled>
        </div>

        <div class="form-field">
          <label><i class="fas fa-calendar-day"></i>Fecha *</label>
          <input type="date" id="fechaTour" required value="${new Date().toISOString().split('T')[0]}">
        </div>

        <div class="form-field">
          <label><i class="fa-solid fa-comment"></i>Comentario/Anotes (Opcional) *</label>
          <input type="text" id="Comentario" placeholder="Escribe notas de tu venta(opcional)">
        </div>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-save"><i class="fas fa-save"></i> Guardar Venta</button>
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

// === VARIABLES ===
let htours = [];
let selTour = null;

// ACTUALIZANDO TOURS 
function invalidateRankingCaches() {
  try {
    localStorage.removeItem('topSmiles');
    localStorage.removeItem(`empleadosPuntos_${mesActual}`);
    localStorage.removeItem(`resumenMes_${mesActual}`);
  } catch(e){ console.warn('Cache clear warn', e); }
}

$(document).off('click.btnsave').on('click.btnsave', '.btn-save', async (e) => {
  e.preventDefault();
  const $btn = $('.btn-save');
  if ($btn.prop('disabled')) return;
  
  // Selección tour requerida
  if (!selTour) return Notificacion('Selecciona un tour', 'error'), $('#tourDisplay').addClass('faltaValor').focus();

  // Campos requeridos mínimos
  const req = [
    ['#nombreCliente','Cliente'],
    ['#horaSalida','Hora'],
    ['#fechaTour','Fecha'],
    ['#Operador','Operador'],
    ['#metodoPago','Pago']
  ];
  const falt = req.filter(([sel]) => !$(sel).val()?.trim());
  if (falt.length) {
    falt.forEach(([sel]) => $(sel).addClass('faltaValor'));
    return Notificacion('Completa: ' + falt.map(([,n])=>n).join(', '), 'error');
  }

  // Preparar datos
  const pax = parseInt($('#cantidadPax').val()) || 1;
  const esEsp = $('#vtJulio,#vtSonia,#vtExterna').is(':checked');
  const ventaId = $btn.attr('data-edit-id') || `venta_${Date.now()}`;

  const venta = {
    idVenta: ventaId,
    tipoTour: selTour.tour,
    registroEn: $('#registroEn').val(),
    nombreCliente: $('#nombreCliente').val(),
    numeroHabitacion: $('#numeroHabitacion').val(),
    tipoDocumento: $('#tipoDocumento').val(),
    numeroDocumento: $('#numeroDocumento').val(),
    cantidadPax: pax,
    precioUnitario: parseFloat($('#precioUnitario').val()) || 0,
    metodoPago: $('#metodoPago').val(),
    importeTotal: parseFloat($('#importeTotal').val()) || 0,
    ganancia: parseFloat($('#ganancia').val()) || 0,
    horaSalida: $('#horaSalida').val(),
    Operador: $('#Operador').val(),
    PagoOperador: parseFloat($('#PagoOperador').val()) || 0,
    Comentario: $('#Comentario').val(),
    fechaTour: savebd($('#fechaTour').val()),
    estadoPago: $('#estadoPago').val(),
    vendedor: wiUsuario.displayName,
    puntos: esEsp ? 0 : selTour.pts * pax,
    email: wiUsuario.email,
    qventa: 1,
    fechaRegistro: serverTimestamp(),
    esVentaJulio: !!$('#vtJulio').prop('checked'),
    esVentaSonia: !!$('#vtSonia').prop('checked'),
    esVentaExterna: !!$('#vtExterna').prop('checked')
  };

  // Optimista: deshabilitar botón + spinner
  const txt = '<i class="fas fa-save"></i> Guardar Venta';
  $btn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Guardando...');

  try {
    await setDoc(doc(db, 'registrosdb', ventaId), venta); // guardado

    // === DESPUÉS DE GUARDAR (ordenar y mostrar arriba) ===
    venta.id = ventaId;                                   // id para tabla
    const i = todasLasVentas.findIndex(v=>v.id===ventaId||v.idVenta===ventaId);
    i>-1 ? (todasLasVentas[i]=venta) : todasLasVentas.push(venta); // upsert
    todasLasVentas.sort((a,b)=>{                          // orden por fecha DESC
      const fa=a.fechaTour?.toDate?a.fechaTour.toDate():new Date(a.fechaTour||0);
      const fb=b.fechaTour?.toDate?b.fechaTour.toDate():new Date(b.fechaTour||0);
      return fb-fa;
    });
    // opcional: forzar página 1
    if (window.currentPage!==undefined) window.currentPage = 1;    // pag=1
    renderizarTablaVentas();                              // re-render inmediato
    // === FIN ===

    invalidateRankingCaches();
    Notificacion(i>-1?'Venta actualizada':'Venta registrada','success');
    limpiarEstadoFormulario();
    setTimeout(async()=>{ await calcularPuntosEmpleados(); renderizarEmpleados(); actualizarResumenCompetencia(); },40);
    
  } catch(err) {
    console.error('Err venta:', err);
    Notificacion('Error guardando', 'error');
  } finally {
    $btn.prop('disabled', false).html(txt).removeAttr('data-edit-id');
  }
});

// Validación en tiempo real
$(document).on('input change', '#formularioVenta input, #formularioVenta select', function() {
  $(this).toggleClass('okValor faltaValor', !!$(this).val()?.toString().trim());
});

$(document).on('click', '.tour-row', () => $('#tourDisplay').removeClass('faltaValor').addClass('okValor'));

// Calcular total y puntos
$(document).on('change', '#vtJulio, #vtSonia, #vtExterna', actualizarPuntosPreview);
$(document).on('input', '#cantidadPax, #precioUnitario', () => { calcularTotal(); calcularComision(); actualizarPuntosPreview(); });
$(document).on('change', '#estadoPago', calcularComision);
$(document).on('input', '#importeTotal, #PagoOperador', calcularComision);

// Limpiar/Cancelar
$(document).on('click', '.btn-clear-view, .btn-cancel-edit', () => { limpiarEstadoFormulario(); Notificacion('Vista limpiada', 'info'); });

// === FUNCIONES CÁLCULO ===
function calcularTotal() {
  const pax = parseInt($('#cantidadPax').val()) || 1;
  const precio = parseFloat($('#precioUnitario').val()) || 0;
  $('#importeTotal').val((precio * pax).toFixed(2));
  aplicarZoom('#importeTotal');
}

function calcularComision() {
  const estado = $('#estadoPago').val();
  const total = parseFloat($('#importeTotal').val()) || 0;
  const pago = parseFloat($('#PagoOperador').val()) || 0;
  const esPagado = estado === 'pagado' || estado === 'pagado2'; // Ambos estados de "pagado"
  
  $('#ganancia').val((esPagado ? total : total - pago).toFixed(2));
  $('#PagoOperador').prop('disabled', esPagado).attr('placeholder', esPagado ? 'Servicio nuestro' : '0.00').val(esPagado ? '0' : $('#PagoOperador').val());
  aplicarZoom('#ganancia');
}

function actualizarPuntosPreview() {
  const pax = parseInt($('#cantidadPax').val()) || 1;
  const ptsBase = selTour?.pts || 0;
  const esEsp = $('#vtJulio, #vtSonia, #vtExterna').is(':checked');
  $('#vistaPreviaLaPuntos').text(esEsp ? 0 : (ptsBase * pax));
}

function aplicarZoom(sel) { $(sel).addClass('field-updated'); setTimeout(() => $(sel).removeClass('field-updated'), 1000); }

// === CARGAR TOURS ===
async function cargarTours() {
  try {
    console.log('🔄 Cargando tours...');
    
    const cache = getls('toursSmile');
    if (cache?.length > 0) {
      htours = cache.map(t => ({ nt: t.num || Math.random(), tour: t.tour, price: t.precio, pts: t.puntos, com: t.comision || 5 }));
      console.log(`✅ ${htours.length} tours desde cache`);
      if (typeof initTourSelector === 'function') initTourSelector();
      return;
    }
    
    const snap = await getDocs(query(collection(db, 'listatours'), where('activo', '==', true)));
    if (snap.empty) return console.log('❌ No hay tours'), htours = [];
    
    const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    htours = data.map(t => ({ nt: t.num || Math.random(), tour: t.tour, price: t.precio, pts: t.puntos, com: t.comision || 5 }));
    
    savels('toursSmile', data, 300);
    console.log(`✅ ${htours.length} tours desde Firebase`);
    if (typeof initTourSelector === 'function') initTourSelector();
    
  } catch (error) {
    console.error('❌ Error tours:', error);
    Notificacion('Error cargando tours', 'error');
  }
}

function initTourSelector() {
  renderTourTable(htours);
  
  $('#tourDisplay').off('click').on('click', function(e) {
    e.stopPropagation();
    const $drop = $('#tourDropdown');
    $drop.toggleClass('active');
    $(this).toggleClass('active');
    if ($drop.hasClass('active')) setTimeout(() => $('#tourSearch').focus(), 50);
  });
  
  let timeout;
  $('#tourSearch').off('input').on('input', function() {
    const q = $(this).val().toLowerCase();
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!q) return renderTourTable(htours);
      if (q.length >= 2) renderTourTable(htours.filter(t => t.tour.toLowerCase().includes(q) || t.price.toString().includes(q)));
    }, 200);
  });
  
  $(document).off('click.tour').on('click.tour', '.tour-row', function(e) {
    e.stopPropagation();
    selTour = htours[$(this).data('index')];
    if (!selTour) return;
    
    $('#tourDisplay .tour-text').text(selTour.tour);
    $('#tipoTour').val(selTour.tour);
    $('#precioUnitario').val(selTour.price);
    $('#tourDropdown, #tourDisplay').removeClass('active');
    $('.tour-row').removeClass('selected');
    $(this).addClass('selected');
    
    setTimeout(() => { aplicarZoom('#precioUnitario'); calcularTotal(); calcularComision(); actualizarPuntosPreview(); }, 50);
  });
  
  $(document).on('click', e => {
    if (!$(e.target).closest('.tour-selector').length) $('#tourDropdown, #tourDisplay').removeClass('active');
  });

  renderizarPuntos();
  renderizarPrecios();
}

function renderTourTable(tours) {
  if (!tours.length) return $('#tourTableBody').html('<tr><td colspan="4" style="text-align:center;color:#666;">Sin tours</td></tr>');
  
  const frag = document.createDocumentFragment();
  tours.forEach((t, i) => {
    const row = document.createElement('tr');
    row.className = 'tour-row';
    row.dataset.index = htours.indexOf(t);
    row.innerHTML = `<td class="tour-num">${i+1}</td><td class="tour-name">${t.tour}</td><td class="tour-price">S/ ${t.price}</td><td class="tour-pts">${t.pts} pts</td>`;
    frag.appendChild(row);
  });
  
  const tbody = document.getElementById('tourTableBody');
  tbody.innerHTML = '';
  tbody.appendChild(frag);
}

function renderizarPuntos() {
  if (!htours.length) return $('#pointsGrid').html('<p style="text-align:center;color:#666;">Sin datos</p>');
  
  const sorted = [...htours].sort((a, b) => b.pts - a.pts);
  $('#pointsGrid').html(sorted.map(t => `<div class="point-item"><span class="service-name">${t.tour}</span><span class="point-value">${t.pts}</span></div>`).join(''));
}

function renderizarPrecios() {
  if (!htours.length) return $('#pricesGrid').html('<p style="text-align:center;color:#666;">Sin datos</p>');
  $('#pricesGrid').html(htours.map(t => `<div class="price-item"><span class="service-name">${t.tour}</span><span class="service-price">S/ ${t.price.toFixed(2)}</span></div>`).join(''));
}

function limpiarEstadoFormulario() {
  selTour = null;
  $('#formularioVenta input, #formularioVenta select').prop('disabled', false);
  $('#formularioVenta').removeClass('view-only edit-mode');
  $('.btn-save').prop('disabled', false).html('<i class="fas fa-save"></i> Guardar Venta').removeAttr('data-edit-id');
  $('.btn-clear-view, .btn-cancel-edit').remove();
  $('#formularioVenta')[0].reset();
  $('#cantidadPax').val(1);
  $('#fechaTour').val(new Date().toISOString().split('T')[0]); // ✅ Resetear a hoy
  $('#vistaPreviaLaPuntos').text('0');
  $('#tourDisplay .tour-text').text('🔍 Seleccionar tour...');
  $('.tour-row').removeClass('selected');
  $('#importeTotal, #ganancia').prop('disabled', true);
}

function cargarDatosEnFormulario(venta, soloVista = false) {
  limpiarEstadoFormulario();
  
  selTour = htours.find(t => t.tour === venta.tipoTour || venta.tipoTour.includes(t.tour.split(' ')[1]));
  
  if (selTour) {
    $('#tourDisplay .tour-text').text(selTour.tour);
    $('#tipoTour').val(selTour.tour);
    $(`.tour-row[data-tour*='"nt":${selTour.nt}']`).addClass('selected');
  } else {
    $('#tourDisplay .tour-text').text(venta.tipoTour || '🔍 Seleccionar...');
    $('#tipoTour').val(venta.tipoTour || '');
  }
  
  // Cargar campos
  Object.entries(venta).forEach(([key, val]) => {
    const $el = $(`#${key}`);
    if ($el.length) {
      if (key === 'fechaTour' && val?.toDate) $el.val(val.toDate().toISOString().split('T')[0]); // Timestamp
      else $el.val(val || '');
    }
  });
  
  $('#vtJulio').prop('checked', venta.esVentaJulio || false);
  $('#vtSonia').prop('checked', venta.esVentaSonia || false);
  $('#vtExterna').prop('checked', venta.esVentaExterna || false);
  
  calcularComision();
  actualizarPuntosPreview();
  
  if (soloVista) {
    $('#formularioVenta input, #formularioVenta select, .tour-display').prop('disabled', true);
    $('.btn-save').prop('disabled', true).html('<i class="fas fa-eye"></i> Solo Vista');
    $('#formularioVenta').addClass('view-only');
    if (!$('.btn-clear-view').length) $('.form-actions').prepend('<button type="button" class="btn-clear-view" style="background:#6c757d;color:#fff;border:none;padding:10px 20px;border-radius:5px;margin-right:10px"><i class="fas fa-times"></i> Limpiar Vista</button>');
  } else {
    $('#formularioVenta input, #formularioVenta select').prop('disabled', false);
    $('.tour-display').prop('disabled', false);
    $('#formularioVenta').addClass('edit-mode');
    if (!$('.btn-cancel-edit').length) $('.form-actions').prepend('<button type="button" class="btn-cancel-edit" style="background:#dc3545;color:#fff;border:none;padding:10px 20px;border-radius:5px;margin-right:10px"><i class="fas fa-times"></i> Cancelar Edición</button>');
  }
}