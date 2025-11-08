// === IMPORTS ===
import $ from 'jquery';
import { adrm } from './widev.js';

// === EXPORTS ===
export { getInfoTabsHTML };

// === EVENTOS ===
$(document).on('click', '.tab-btn', function() {
  const tab = $(this).data('tab');
  adrm(this, 'active');   adrm(`#${tab}-tab`, 'active');
});

// === HTML ===
function getInfoTabsHTML() {
  return `
    <section class="info-section">
      <div class="info-tabs">
        ${['points:star:Puntos', 'rules:list-ul:Reglas', 'prices:money-bill-wave:Precios']
          .map((t, i) => {
            const [id, icn, txt] = t.split(':');
            return `<button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab="${id}">
              <i class="fas fa-${icn}"></i>${txt}
            </button>`;
          }).join('')}
      </div>

      <div class="tab-content active" id="points-tab">
        <h3><i class="fas fa-chart-bar"></i> Asignación de Puntos</h3>
        <div class="points-grid" id="pointsGrid">
          <div class="loading-points"><i class="fas fa-spinner fa-spin"></i>Cargando...</div>
        </div>
      </div>

      <div class="tab-content" id="rules-tab">
        <h3><i class="fas fa-gavel"></i> Reglas del Sistema</h3>
        <div class="rules-list">
          ${[
            'Los precios NO incluyen tasa turística',
            'Buggie/Bodegas y City Tour: Mayor puntaje con buggie de Sonia o camioneta',
            'Reclamos anulan puntos. Comentario positivo = +10pts. Negativo = -10pts',
            'Anulación o devolución = Sin puntos',
            'Registrar datos completos el mismo día para validar puntos',
            'Etiqueta en redes = +5pts. Comentario = +5pts (máx 10 por cliente)'
          ].map((r, i) => `
            <div class="rule-item ${i === 2 || i === 5 ? 'bonus' : ''}">
              <span class="rule-number">${i + 1}</span>
              <span>${r}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="tab-content" id="prices-tab">
        <h3><i class="fas fa-tags"></i> Precios de Tours</h3>
        <div class="prices-grid" id="pricesGrid">
          <div class="loading-prices"><i class="fas fa-spinner fa-spin"></i>Cargando...</div>
        </div>
        <div class="price-note">
          <p><i class="fas fa-info-circle"></i> <strong>Nota:</strong> Precios actualizados automáticamente</p>
        </div>
      </div>
    </section>
  `;
}