import './tours.css';
import $ from 'jquery';
import { wiAuth, Capi } from '../widev.js';
import { rutas } from '../rutas.js';
import { cargarTours } from './zsmile.js';

let catalogTours = [];

export const render = () => `
  <div class="smw_tours_view">
    
    <!-- CABECERA: Título y Controles -->
    <header class="smw_tours_header wi_fadeUp">
      <div class="smw_tours_title_row">
        <h1><i class="fas fa-route smw_paz_glow"></i> Catálogo & Reglas</h1>
        <p class="smw_tours_subtitle">Información oficial de tours, precios y políticas del reto</p>
      </div>

      <a href="/smile" class="smw_tours_back_btn nv_item" data-page="smile">
        <i class="fas fa-arrow-left"></i> Panel de Control
      </a>
    </header>

    <!-- NAVEGACIÓN DE PESTAÑAS (TABS) -->
    <div class="smw_tours_tabs wi_fadeUp" style="animation-delay: 0.1s">
      <button class="smw_tab_btn active" data-tab="precios">
        <i class="fas fa-tags"></i> Precios de Tours
      </button>
      <button class="smw_tab_btn" data-tab="puntos">
        <i class="fas fa-star"></i> Puntos del Reto
      </button>
      <button class="smw_tab_btn" data-tab="reglas">
        <i class="fas fa-gavel"></i> Reglas y Políticas
      </button>
    </div>

    <!-- CONTENIDOS DE PESTAÑAS -->
    <div class="smw_tours_content_container wi_fadeUp" style="animation-delay: 0.2s">
      
      <!-- PESTAÑA: PRECIOS -->
      <div class="smw_tab_pane active" id="pane-precios">
        <div class="smw_sec_head_tours">
          <h3><i class="fas fa-hand-holding-dollar"></i> Lista de Precios Oficiales</h3>
          <span class="smw_badge_info"><i class="fas fa-info-circle"></i> Comisión base incluida</span>
        </div>
        
        <div class="smw_table_responsive">
          <table class="smw_tours_table">
            <thead>
              <tr>
                <th style="width: 50px; text-align: center;">N°</th>
                <th><i class="fas fa-route"></i> Tour / Servicio</th>
                <th><i class="fas fa-dollar-sign"></i> Precio Sugerido</th>
                <th><i class="fas fa-hand-holding-usd"></i> Comisión Base</th>
              </tr>
            </thead>
            <tbody id="preciosTableBody">
              ${_generarSkeletonsTablaTours(4)}
            </tbody>
          </table>
        </div>
      </div>

      <!-- PESTAÑA: PUNTOS -->
      <div class="smw_tab_pane" id="pane-puntos">
        <div class="smw_sec_head_tours">
          <h3><i class="fas fa-award"></i> Asignación de Puntos del Reto</h3>
          <span class="smw_badge_info"><i class="fas fa-fire"></i> ¡Suma más para ganar!</span>
        </div>

        <div class="smw_table_responsive">
          <table class="smw_tours_table">
            <thead>
              <tr>
                <th style="width: 50px; text-align: center;">N°</th>
                <th><i class="fas fa-route"></i> Tour / Servicio</th>
                <th><i class="fas fa-star"></i> Puntos por PAX</th>
                <th><i class="fas fa-bolt"></i> Multiplicador</th>
              </tr>
            </thead>
            <tbody id="puntosTableBody">
              ${_generarSkeletonsTablaTours(4)}
            </tbody>
          </table>
        </div>
      </div>

      <!-- PESTAÑA: REGLAS -->
      <div class="smw_tab_pane" id="pane-reglas">
        <div class="smw_sec_head_tours">
          <h3><i class="fas fa-shield-halved"></i> Políticas y Reglas del Sistema</h3>
          <span class="smw_badge_info"><i class="fas fa-triangle-exclamation"></i> Lectura obligatoria</span>
        </div>

        <div class="smw_rules_list">
          ${[
            { title: 'Tasa Turística', desc: 'Los precios que se muestran en el catálogo NO incluyen la tasa turística regulada.', type: 'warning' },
            { title: 'Vehículos Propios', desc: 'Buggie/Bodegas y City Tour: Se acumula mayor puntaje con buggies propiedad de Sonia o vehículos autorizados de la empresa.', type: 'success' },
            { title: 'Reclamos y Quejas', desc: 'Reclamos fundados de clientes ANULAN los puntos del tour. Comentario positivo certificado = +10 pts. Comentario negativo = -10 pts.', type: 'danger' },
            { title: 'Anulación de Servicios', desc: 'Cualquier devolución o anulación de tour cancela por completo los puntos y comisiones del mismo.', type: 'danger' },
            { title: 'Registro Oportuno', desc: 'Los tours deben ser registrados en el sistema el MISMO DÍA en que se realiza la venta para validar los puntos.', type: 'warning' },
            { title: 'Fidelización en Redes', desc: 'Etiqueta en Instagram/Tiktok de la marca = +5 pts. Comentario en TripAdvisor o Google Maps = +5 pts (Máximo 10 puntos extra por cliente).', type: 'success' }
          ].map((r, i) => {
            const icons = {
              success: 'fa-circle-check',
              warning: 'fa-triangle-exclamation',
              danger: 'fa-shield-halved'
            };
            const ico = icons[r.type] || 'fa-circle-info';
            return `
              <div class="smw_rule_card ${r.type}">
                <div class="smw_rule_index">
                  <i class="fas ${ico}"></i>
                </div>
                <div class="smw_rule_body">
                  <h4>${r.title}</h4>
                  <p>${r.desc}</p>
                </div>
                <div class="smw_rule_num_badge">#${i + 1}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

    </div>

  </div>
`;

export const init = async () => {
  const user = wiAuth.user;
  if (!user) return setTimeout(() => rutas.navigate('/login'), 100);

  // Load catalogs
  _cargarCatalogo();

  // Tab switcher binding
  $(document).off('click.tours_events', '.smw_tab_btn').on('click.tours_events', '.smw_tab_btn', function() {
    const tabId = $(this).data('tab');
    
    $('.smw_tab_btn').removeClass('active');
    $(this).addClass('active');

    $('.smw_tab_pane').removeClass('active');
    $(`#pane-${tabId}`).addClass('active');
  });

  $('.wi_fadeUp').addClass('visible wi_visible');
  window.__WIREADY__ = true;
};

export const cleanup = () => {
  $(document).off('.tours_events');
};

async function _cargarCatalogo() {
  const $header = $('.smw_tours_header');
  $header.addClass('smw_loading');
  try {
    $('#preciosTableBody').html(_generarSkeletonsTablaTours(4));
    $('#puntosTableBody').html(_generarSkeletonsTablaTours(4));
    catalogTours = await cargarTours();

    if (!catalogTours.length) {
      $('#preciosTableBody').html('<tr><td colspan="4" class="smw_empty_pane">No hay tours cargados en la base de datos.</td></tr>');
      $('#puntosTableBody').html('<tr><td colspan="4" class="smw_empty_pane">No hay tours cargados en la base de datos.</td></tr>');
      return;
    }

    // Render Prices Table Rows
    const preciosHtml = catalogTours.map((t, i) => `
      <tr>
        <td style="text-align: center;"><span class="smw_tcol_num">${i + 1}</span></td>
        <td>
          <div class="smw_tname_cell">
            <span class="smw_tbadge_table price"><i class="fas fa-tag"></i></span>
            <span class="smw_tname_table">${t.tour}</span>
          </div>
        </td>
        <td><strong class="smw_tprice_table">S/ ${t.price.toFixed(2)}</strong></td>
        <td><span class="smw_tcom_table">S/ ${t.com.toFixed(2)}</span></td>
      </tr>
    `).join('');
    $('#preciosTableBody').html(preciosHtml);

    // Render Points Table Rows
    const puntosHtml = catalogTours.map((t, i) => `
      <tr>
        <td style="text-align: center;"><span class="smw_tcol_num">${i + 1}</span></td>
        <td>
          <div class="smw_tname_cell">
            <span class="smw_tbadge_table points"><i class="fas fa-star"></i></span>
            <span class="smw_tname_table">${t.tour}</span>
          </div>
        </td>
        <td>
          <span class="smw_tpoints_badge_table">
            <i class="fas fa-star"></i> ${t.pts} pts
          </span>
        </td>
        <td><span class="smw_tmult_table active">Activo</span></td>
      </tr>
    `).join('');
    $('#puntosTableBody').html(puntosHtml);

  } catch (error) {
    console.error('Error al cargar catalogo:', error);
    $('#preciosTableBody').html('<tr><td colspan="4" class="smw_empty_pane">Error al cargar información de tours.</td></tr>');
  } finally {
    $header.removeClass('smw_loading');
  }
}

function _generarSkeletonsTablaTours(cant = 4) {
  return Array(cant).fill(0).map(() => `
    <tr class="smw_sk_row">
      <td style="text-align: center;"><span class="smw_sk_el" style="width:20px;height:14px;border-radius:4px"></span></td>
      <td>
        <div style="display:flex;align-items:center;gap:1.5vh;">
          <span class="smw_sk_el smw_sk_circle" style="width:32px;height:32px;border-radius:8px"></span>
          <span class="smw_sk_el" style="width:140px;height:16px"></span>
        </div>
      </td>
      <td><span class="smw_sk_el" style="width:80px;height:16px"></span></td>
      <td><span class="smw_sk_el" style="width:80px;height:16px"></span></td>
    </tr>
  `).join('');
}

