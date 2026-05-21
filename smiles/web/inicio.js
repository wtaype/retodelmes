import $ from 'jquery';
import { app, version, by, linkme } from '../wii.js';
import { wiVista, year, wiTip, Saludar } from '../widev.js';

// ── DATA ──────────────────────────────────────────────────────
const roles = [
  'Guías en las Dunas 🏎️',
  'Expertos en Sandboard 🏂',
  'Promotores de la Ruta del Pisco 🍷',
  'Pilotos de Parapente y Aventuras 🪂',
  'Colaboradores estrella 🏆'
];

const stats = [
  { valor:100,  label:'Compromiso',        sufijo:'%' },
  { valor:10,   label:'Experiencia', sufijo:'/10' },
];

const features = [
  { id:'ranking',  icon:'fa-trophy', color:'#FFD700', nombre:'Ranking en Vivo',  desc:'Posiciones actualizadas al instante',
    items:[{icon:'fa-star',name:'Líderes destacados',desc:'Sonia & Jackson a la cabeza'},{icon:'fa-medal',name:'Medallas de Honor',desc:'Incentivos por desempeño'},{icon:'fa-arrow-trend-up',name:'Suma mensual',desc:'Puntos acumulados al segundo'}]},
  { id:'buggies',   icon:'fa-car-side',    color:'#FF8F00', nombre:'Buggies & Sandboard',   desc:'Aventura extrema en las dunas',
    items:[{icon:'fa-clock',name:'Buggies 1h / 2h',desc:'Paseo compartido o privado'},{icon:'fa-person-snowboarding',name:'Sandboarding Pro',desc:'Tablas básicas y profesionales'},{icon:'fa-compass',name:'Seguridad Total',desc:'Pilotos con licencia y experiencia'}]},
  { id:'bodegas',  icon:'fa-wine-glass-alt',   color:'#D32F2F', nombre:'Ruta del Pisco',  desc:'Catas y tradición vitivinícola',
    items:[{icon:'fa-wine-bottle',name:'Tours de Bodegas',desc:'Visitas regulares y privadas'},{icon:'fa-city',name:'City Tour Ica',desc:'Plaza de Armas y brujas de Cachiche'},{icon:'fa-map-pin',name:'Guía Jackson',desc:'Guiado con cata de vinos y piscos'}]},
  { id:'regionales', icon:'fa-plane',   color:'#0288D1', nombre:'Tours Regionales', desc:'Excursiones emblemáticas en Ica',
    items:[{icon:'fa-anchor',name:'Tour de Paracas',desc:'Islas Ballestas y Reserva Nacional'},{icon:'fa-eye',name:'Sobrevuelo Líneas',desc:'Líneas de Nazca desde el aire'},{icon:'fa-mountain',name:'Cañón de los Perdidos',desc:'Trekking en el cañón desértico'}]},
  { id:'adicionales',  icon:'fa-motorcycle', color:'#7B1FA2', nombre:'Cuatrimotos & Más',  desc:'Paseos off-road y aventura',
    items:[{icon:'fa-wind',name:'Vuelo Parapente',desc:'Vuela sobre el Oasis de América'},{icon:'fa-truck-monster',name:'Ruta en Polaris RZR',desc:'Vehículos premium todoterreno'},{icon:'fa-route',name:'Traslados Ica',desc:'Logística y movilidad segura'}]},
  { id:'comisiones', icon:'fa-award',   color:'#388E3C', nombre:'Premios y Comisiones', desc:'Recompensas a tu esfuerzo diario',
    items:[{icon:'fa-percent',name:'Comisiones Directas',desc:'Ganancias por cada tour vendido'},{icon:'fa-chart-pie',name:'Metas del Mes',desc:'Bonos extras por llegar al objetivo'},{icon:'fa-gift',name:'Premios Especiales',desc:'Incentivos al Colaborador Estrella'}]},
];

const beneficios = [
  { icon:'fa-mobile-screen-button',titulo:'Ideal para Celulares',   desc:'Diseñado para registrar tus ventas de forma ultrarrápida directamente desde el desierto de Huacachina o en ruta sin perder tiempo.' },
  { icon:'fa-face-smile',       titulo:'Motivación y Premios',   desc:'Gana comisiones y puntos por cada tour vendido. Compite de forma divertida en el ranking oficial para llevarte el premio del mes.' },
  { icon:'fa-circle-check',titulo:'Transparencia Total', desc:'Visualiza al instante tus ventas confirmadas en tu cuenta, sin errores de cálculo ni confusiones al fin de mes.' },
];

// ── PLANTILLAS ────────────────────────────────────────────────
const tplStat = s => `
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${s.valor}" data-sufijo="${s.sufijo}">0</div>
    <div class="ini_stat_l">${s.label}</div>
  </div>`;

const tplFeature = f => `
  <div class="ini_cat_card" style="--cc:${f.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="fas ${f.icon}"></i></div>
      <div class="ini_cat_info"><h3>${f.nombre}</h3><p>${f.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${f.items.map(it=>`
        <li><div class="ini_tool_a">
          <i class="fas ${it.icon}"></i>
          <div><strong>${it.name}</strong><span>${it.desc}</span></div>
          <i class="fas fa-check ini_ext" style="color:var(--success)"></i>
        </div></li>`).join('')}
    </ul>
  </div>`;

const tplBeneficio = (b,i) => `
  <div class="ini_about_card" style="--d:${i*.15}s">
    <div class="ini_card_ico"><i class="fas ${b.icon}"></i></div>
    <h3>${b.titulo}</h3>
    <p>${b.desc}</p>
  </div>`;

// ── RENDER ────────────────────────────────────────────────────
export const render = () => `
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${Saludar()}</span><span class="ini_wave">👋</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        Reto de Ventas <span class="ini_grad">Huacachina</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${roles.map((r,i)=>`<span class="ini_role${i===0?' active':''}">${r}</span>`).join('')}
      </div>

      <p class="ini_sub" style="--d:.54s">
        Registra tus tours, acumula comisiones y compite de forma sana en el ranking oficial de guías y promotores turísticos. ¡Claudia y Jackson lideran el mes!
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${stats.map(tplStat).join('')}
      </div>

      <div class="ini_btns" style="--d:.9s">
        <a href="/login" class="ini_btn_p"><i class="fas fa-rocket"></i> Iniciar Sesión</a>
      </div>

    </div>

    <!-- Derecha: preview Reto del Mes Dashboard (Ranking) -->
    <div class="ini_hero_visual">
      <div class="ini_nw_preview" style="--d:.3s">
        <div class="ini_nw_head">
          <div class="ini_nw_dots"><div></div><div></div><div></div></div>
          <div class="ini_nw_search">Buscar tour o guía...</div>
        </div>
        <div class="ini_nw_body">
          <div class="ini_nw_side">
            <div class="active"></div><div></div><div></div><div></div>
          </div>
          <div class="ini_nw_main">
            <!-- Claudia (Gold) -->
            <div class="ini_nw_card" style="border-left: 4px solid #FFD700; background: var(--bg1); padding: 12px; gap: 8px;">
              <div style="width: 100% !important; height: auto !important; background: transparent !important; opacity: 1 !important; display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; font-weight: 700; color: var(--tx);">
                <span>🏆 1. Claudia</span>
                <span style="color: var(--mco); display: flex; align-items: center; gap: 4px;">100 <i class="fas fa-star" style="color: #FFD700;"></i></span>
              </div>
              <div style="width: 90% !important; height: 6px !important; background: #FFD700 !important; border-radius: 3px; opacity: 1 !important;"></div>
            </div>
            
            <!-- Jackson (Silver) -->
            <div class="ini_nw_card" style="border-left: 4px solid #C0C0C0; background: var(--bg1); padding: 12px; gap: 8px;">
              <div style="width: 100% !important; height: auto !important; background: transparent !important; opacity: 1 !important; display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; font-weight: 700; color: var(--tx);">
                <span>🥈 2. Jackson</span>
                <span style="color: var(--mco); display: flex; align-items: center; gap: 4px;">80 <i class="fas fa-star" style="color: #C0C0C0;"></i></span>
              </div>
              <div style="width: 78% !important; height: 6px !important; background: #C0C0C0 !important; border-radius: 3px; opacity: 1 !important;"></div>
            </div>
            
            <!-- Sonia (Bronze) -->
            <div class="ini_nw_card" style="border-left: 4px solid var(--mco); background: var(--bg1); padding: 12px; gap: 8px;">
              <div style="width: 100% !important; height: auto !important; background: transparent !important; opacity: 1 !important; display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; font-weight: 700; color: var(--tx);">
                <span>🥉 3. Sonia</span>
                <span style="color: var(--mco); display: flex; align-items: center; gap: 4px;">50 <i class="fas fa-star" style="color: #CD7F32;"></i></span>
              </div>
              <div style="width: 60% !important; height: 6px !important; background: var(--mco) !important; border-radius: 3px; opacity: 1 !important;"></div>
            </div>

            <!-- Carmen (4th) -->
            <div class="ini_nw_card" style="border-left: 4px solid #8E8E93; background: var(--bg1); padding: 12px; gap: 8px;">
              <div style="width: 100% !important; height: auto !important; background: transparent !important; opacity: 1 !important; display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; font-weight: 700; color: var(--tx);">
                <span>🏅 4. Carmen</span>
                <span style="color: var(--mco); display: flex; align-items: center; gap: 4px;">35 <i class="fas fa-star" style="color: #8E8E93;"></i></span>
              </div>
              <div style="width: 45% !important; height: 6px !important; background: #8E8E93 !important; border-radius: 3px; opacity: 1 !important;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${wiTip('Buggies')}><i class="fas fa-car-side"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${wiTip('Sandboard')}><i class="fas fa-person-snowboarding"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${wiTip('Bodegas')}><i class="fas fa-wine-glass-alt"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${wiTip('Parapente')}><i class="fas fa-parachute-box"></i></div>
    </div>
  </section>

  <!-- ===== FUNCIONALIDADES ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Los <span class="ini_grad">6 Pilares</span> del Reto</h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">Herramientas diseñadas para potenciar tu desempeño e ingresos</p>
    </div>
    <div class="ini_cats_grid">${features.map(tplFeature).join('')}</div>
  </section>

  <!-- ===== ¿POR QUÉ? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Qué beneficios tenemos al usar <span class="ini_grad">${app}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${beneficios.map(tplBeneficio).join('')}</div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="ini_cta_sec">
    <div class="ini_cta_wrap">
      <i class="fas fa-rocket ini_cta_ico"></i>
      <h2>¿Listo para subir al podio de este mes?</h2>
      <p>Registra tus ventas diarias y sigue tu progreso en tiempo real.</p>
      <div class="ini_cta_chips">
        <a href="/login" class="ini_btn_p"><i class="fas fa-arrow-right"></i> Entrar a la plataforma</a>
      </div>
      <p class="ini_cta_autor" style="margin-top:2vh;">Creado con ❤️ por <a href="${linkme}" target="_blank" rel="noopener">${by}</a> · ${version} © ${year()}</p>
    </div>
  </section>

</div>`;

// ── INIT ──────────────────────────────────────────────────────
export const init = () => {

  // Roles rotantes
  let ri = 0;
  const $r = $('.ini_role');
  setInterval(() => { $r.removeClass('active'); $r.eq(ri = (ri+1) % $r.length).addClass('active'); }, 2800);

  // Stats contador — al entrar en viewport
  wiVista('#in_stats', () => {
    $('.ini_stat_n').each(function() {
      const $n = $(this), obj = +$n.data('target'), suf = $n.data('sufijo') || '';
      let v = 0;
      const t = setInterval(() => {
        v += obj / 50;
        if (v >= obj) { $n.text(obj + suf); clearInterval(t); }
        else $n.text(Math.floor(v));
      }, 28);
    });
  });

  // Scroll animations
  wiVista('.ini_cat_card',   null, { anim:'wi_fadeUp', stagger:80  });
  wiVista('.ini_about_card', null, { anim:'wi_fadeUp', stagger:140 });

  console.log(`🚀 ${app} ${version} · Inicio OK`);
};

export const cleanup = () => {};