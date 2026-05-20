import './acerca.css';
import $ from 'jquery';
import { app, version, by, linkme, icon } from '../../wii.js';
import { year, wiTip, wicopy } from '../../widev.js';

// ============================================================
// 🎨 RENDER
// ============================================================
export const render = () => `
<main id="wimain">
<div class="ac_wrap">

  <!-- ══ HERO ══ -->
  <section class="ac_hero">
    <div class="ac_hero_orb ac_orb1"></div>
    <div class="ac_hero_orb ac_orb2"></div>
    <div class="ac_hero_orb ac_orb3"></div>
    <div class="ac_hero_body">
      <div class="ac_hero_logo">
        <img src="/smile.avif" alt="${app}" loading="lazy">
      </div>
      <div class="ac_hero_badge"><i class="fas fa-lock"></i> Canal Interno Restringido</div>
      <h1 class="ac_hero_tit">${app}</h1>
      <p class="ac_hero_sub">
        Herramienta corporativa para el registro de ventas, cálculo de comisiones y gamificación 
        de los guías y promotores turísticos en <strong>Huacachina, Ica.</strong>
      </p>
      <div class="ac_hero_stats">
        
          <div class="ac_stat" style="--sc:#0EBEFF">
            <i class="fas fa-shield-halved" style="color:#0EBEFF"></i>
            <strong>100%</strong>
            <span>Confidencial</span>
          </div>
          <div class="ac_stat" style="--sc:#FF5C69">
            <i class="fas fa-chart-line" style="color:#FF5C69"></i>
            <strong>Ventas</strong>
            <span>Comisiones reales</span>
          </div>
          <div class="ac_stat" style="--sc:#29C72E">
            <i class="fas fa-user-check" style="color:#29C72E"></i>
            <strong>Revisado</strong>
            <span>Auditoría activa</span>
          </div>
          <div class="ac_stat" style="--sc:#7000FF">
            <i class="fas fa-star" style="color:#7000FF"></i>
            <strong>Puntos</strong>
            <span>Premios mensuales</span>
          </div>
      </div>
      <div class="ac_hero_btns">
        <a href="/smile" class="ac_btn_p"><i class="fas fa-list-check"></i> Registrar Mis Ventas</a>
        <button class="ac_btn_s" id="ac_compartir"><i class="fas fa-share-nodes"></i> Compartir App</button>
      </div>
      <div class="ac_hero_scroll"><i class="fas fa-chevron-down"></i></div>
    </div>
  </section>

  <!-- ══ COUNTER BAND ══ -->
  <div class="ac_counter_band">
    <div class="ac_counter_item">
      <span class="ac_counter_num" data-target="100">100</span><span>%</span>
      <p>Seguridad de datos</p>
    </div>
    <div class="ac_counter_sep"></div>
    <div class="ac_counter_item">
      <span class="ac_counter_num" data-target="18">18</span>
      <p>Tours autorizados</p>
    </div>
    <div class="ac_counter_sep"></div>
    <div class="ac_counter_item">
      <span>∞</span>
      <p>Esfuerzo en equipo</p>
    </div>
    <div class="ac_counter_sep"></div>
    <div class="ac_counter_item">
      <span class="ac_counter_num" data-target="2026">2026</span>
      <p>Sistema auditado</p>
    </div>
  </div>

  <!-- ══ NUESTRA HISTORIA ══ -->
  <section class="ac_sec">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-circle-info"></i> Uso Administrativo</div>
      <h2 class="ac_sec_tit">El propósito de <span class="ac_grad">${app}</span></h2>
    </div>
    <div class="ac_historia wi_fadeUp">
      <p><strong>${app}</strong> es una plataforma interna exclusiva diseñada para optimizar y transparentar el registro de los tours vendidos y ejecutados por nuestro equipo de guías y agentes comerciales en la región de Ica-Huacachina.</p>
      
      <p>Nuestra misión principal es brindar a los colaboradores una herramienta digital en la cual puedan ingresar de forma rápida y sencilla los servicios prestados (paseos en buggies areneros 4x4, práctica de sandboarding, recorridos vinícolas y excursiones regionales) obteniendo el cálculo automatizado de sus comisiones y puntos acumulados para las competencias de incentivos.</p>
      
      <p>Debido a la naturaleza de las operaciones comerciales, rutas, precios de los servicios y comisiones de los colaboradores, <strong>toda la información registrada dentro de esta aplicación es sensible y de propiedad corporativa</strong>. Se prohíbe terminantemente su divulgación o exposición ante personas externas a la empresa.</p>

      <p>Todo el sistema es auditado activamente por la oficina administrativa de turismo en Huacachina, garantizando la seguridad en el pago de tus comisiones y la legitimidad del ranking mensual de colaboradores.</p>

      <div class="ac_firma">
        <strong>Administración y Desarrollo</strong>
        <span>Ica - Huacachina, Perú</span>
      </div>
    </div>
  </section>

  <!-- ══ BENEFICIOS ══ -->
  <section class="ac_sec ac_sec_alt">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-star"></i> Ventajas corporativas</div>
      <h2 class="ac_sec_tit">Beneficios para <span class="ac_grad">nuestros guías</span></h2>
      <p class="ac_sec_sub">Desarrollado para facilitar tu labor diaria en oficina y en las dunas</p>
    </div>
    <div class="ac_feat_grid">
      
        <div class="ac_feat_card wi_fadeUp ac_color_cielo">
          <div class="ac_feat_ico"><i class="fas fa-car-side"></i></div>
          <h3>Registro Inmediato</h3>
          <p>Sube tus ventas de Buggies, Sandboard y Tours Regionales al instante desde tu teléfono en medio de las dunas.</p>
        </div>
        <div class="ac_feat_card wi_fadeUp ac_color_dulce">
          <div class="ac_feat_ico"><i class="fas fa-coins"></i></div>
          <h3>Transparencia Total</h3>
          <p>Visualiza en tiempo real tus ganancias y comisiones aprobadas acumuladas de forma clara y sin errores matemáticos.</p>
        </div>
        <div class="ac_feat_card wi_fadeUp ac_color_paz">
          <div class="ac_feat_ico"><i class="fas fa-trophy"></i></div>
          <h3>Ranking y Estrellas</h3>
          <p>Acumula puntos por tu esfuerzo diario, asciende en la tabla general de guías y llévate el premio del mes.</p>
        </div>
        <div class="ac_feat_card wi_fadeUp ac_color_mora">
          <div class="ac_feat_ico"><i class="fas fa-shield-halved"></i></div>
          <h3>Confidencialidad</h3>
          <p>Tus datos financieros y récords de ventas están protegidos contra filtraciones con autenticación encriptada.</p>
        </div>
        <div class="ac_feat_card wi_fadeUp ac_color_cielo">
          <div class="ac_feat_ico"><i class="fas fa-calendar-check"></i></div>
          <h3>Auditoría Rápida</h3>
          <p>Los supervisores validan tus tickets de venta directamente en el panel de control para que tus comisiones no se retrasen.</p>
        </div>
        <div class="ac_feat_card wi_fadeUp ac_color_dulce">
          <div class="ac_feat_ico"><i class="fas fa-bolt"></i></div>
          <h3>Ultrarrápido y Offline</h3>
          <p>Optimizado para cargar de forma inmediata en las dunas de Ica, incluso bajo señales de conexión móvil inestables.</p>
        </div>
    </div>
  </section>

  <!-- ══ CÓMO FUNCIONA ══ -->
  <section class="ac_sec">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-route"></i> Flujo operativo</div>
      <h2 class="ac_sec_tit">3 pasos para <span class="ac_grad">tus puntos</span></h2>
      <p class="ac_sec_sub">El proceso interno que garantiza la transparencia y validez de tus ventas</p>
    </div>
    <div class="ac_pasos">
      
        <div class="ac_paso wi_fadeUp">
          <div class="ac_paso_num">1</div>
          <div class="ac_paso_ico"><i class="fas fa-file-pen"></i></div>
          <h3>Registra</h3>
          <p>Ingresa el tour realizado, la fecha, el precio cobrado y tu comisión en el formulario.</p>
        </div>
        <div class="ac_paso_sep"><i class="fas fa-chevron-right"></i></div>
        <div class="ac_paso wi_fadeUp">
          <div class="ac_paso_num">2</div>
          <div class="ac_paso_ico"><i class="fas fa-signature"></i></div>
          <h3>Validación</h3>
          <p>El supervisor administrativo revisa el comprobante y el número del ticket de venta ingresado.</p>
        </div>
        <div class="ac_paso_sep"><i class="fas fa-chevron-right"></i></div>
        <div class="ac_paso wi_fadeUp">
          <div class="ac_paso_num">3</div>
          <div class="ac_paso_ico"><i class="fas fa-gift"></i></div>
          <h3>Gana</h3>
          <p>Recibe los puntos en tu ranking de estrellas y la comisión lista en tu reporte mensual.</p>
        </div>
        
    </div>
  </section>

  <!-- ══ TESTIMONIOS ══ -->
  <section class="ac_sec ac_sec_alt">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-comments"></i> Opiniones de nuestro equipo</div>
      <h2 class="ac_sec_tit">Qué dicen <span class="ac_grad">los guías</span></h2>
      <p class="ac_sec_sub">Testimonios sobre el uso cotidiano de la herramienta en el campo</p>
    </div>
    <div class="ac_test_grid">
      
        <div class="ac_test_card wi_fadeUp">
          <div class="ac_test_stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="ac_test_txt">"Registrar mis tours en carro arenero desde el mismo desierto me ahorra horas al final de la semana. Ver mis puntos subir al instante me motiva a seguir ofreciendo el mejor servicio."</p>
          <div class="ac_test_autor">
            <span class="ac_test_avatar">🏎️</span>
            <div><strong>Claudia</strong><span>Guía de Buggies</span></div>
          </div>
        </div>
        <div class="ac_test_card wi_fadeUp">
          <div class="ac_test_stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="ac_test_txt">"La transparencia en las comisiones es lo mejor. Ya no hay dudas al final del mes porque cada tour tiene su registro validado por administración. Carmen y yo siempre competimos por el ranking."</p>
          <div class="ac_test_autor">
            <span class="ac_test_avatar">🏜️</span>
            <div><strong>Jackson</strong><span>Promotor Turístico</span></div>
          </div>
        </div>
        <div class="ac_test_card wi_fadeUp">
          <div class="ac_test_stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="ac_test_txt">"Poder registrar los tours a Paracas y Nazca y saber que mi información personal y laboral está segura en un canal interno de la empresa nos da total tranquilidad."</p>
          <div class="ac_test_autor">
            <span class="ac_test_avatar">🪂</span>
            <div><strong>Sonia</strong><span>Guía Regional</span></div>
          </div>
    </div>
  </section>

  <!-- ══ MÓDULOS ══ -->
  <section class="ac_sec">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-layer-group"></i> Secciones de Trabajo</div>
      <h2 class="ac_sec_tit">Navegación <span class="ac_grad">de la App</span></h2>
      <p class="ac_sec_sub">Acceso rápido a las funciones operativas de la plataforma</p>
    </div>
    <div class="ac_modulos_grid">
      
        <a href="/smile" class="ac_modulo_card wi_fadeUp" style="--mc:#0EBEFF">
          <div class="ac_modulo_ico"><i class="fas fa-coins"></i></div>
          <div class="ac_modulo_info">
            <strong>Mis Ventas</strong>
            <span>Registro y comisiones</span>
          </div>
          <div class="ac_modulo_arr"><i class="fas fa-arrow-right"></i></div>
        </a>
        <a href="/smiletop" class="ac_modulo_card wi_fadeUp" style="--mc:#FF5C69">
          <div class="ac_modulo_ico"><i class="fas fa-user-tie"></i></div>
          <div class="ac_modulo_info">
            <strong>Administración</strong>
            <span>Validación y Ranking</span>
          </div>
          <div class="ac_modulo_arr"><i class="fas fa-arrow-right"></i></div>
        </a>
        <a href="/acerca/contacto" class="ac_modulo_card wi_fadeUp" style="--mc:#29C72E">
          <div class="ac_modulo_ico"><i class="fas fa-headset"></i></div>
          <div class="ac_modulo_info">
            <strong>Soporte Técnico</strong>
            <span>Contactar Administrador</span>
          </div>
          <div class="ac_modulo_arr"><i class="fas fa-arrow-right"></i></div>
        </a>
    </div>
  </section>

  <!-- ══ CTA ══ -->
  <section class="ac_cta_sec">
    <div class="ac_cta_wrap wi_fadeUp">
      <div class="ac_hero_orb ac_orb1"></div>
      <div class="ac_hero_orb ac_orb2"></div>
      <div class="ac_cta_glow"></div>
      <div class="ac_cta_inner">
        <span class="ac_cta_emoji">🔒</span>
        <h2>¿Listo para subir tu<br>siguiente tour?</h2>
        <p>Entra a tu cuenta interna y registra tus ventas del día.</p>
        <div class="ac_cta_btns">
          <a href="/smile" class="ac_btn_p ac_btn_lg"><i class="fas fa-coins"></i> Registrar Venta</a>
          <a href="/smiletop" class="ac_btn_s ac_btn_lg"><i class="fas fa-trophy"></i> Ver Tabla de Posiciones</a>
        </div>
      </div>
    </div>
  </section>

</div></main>
`;

// ============================================================
// 🔢 COUNTER ANIMATION
// ============================================================
const animateCounters = () => {
  $('.ac_counter_num').each(function () {
    const $el = $(this);
    const targetVal = $el.data('target');
    if (!targetVal) return;
    
    const target = parseInt(targetVal);
    const duration = 2000;
    let start = null;
    
    const step = ts => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(ease * target);
      $el.text(current.toLocaleString());
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
};

// ============================================================
// ⚡ INIT
// ============================================================
export const init = () => {
  // Animación de entrada para los elementos wi_fadeUp
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).addClass('visible');
      }
    });
  }, { threshold: 0.1 });

  $('.wi_fadeUp').each(function() {
    observer.observe(this);
  });

  // Contadores al entrar en vista
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const band = document.querySelector('.ac_counter_band');
  if (band) counterObserver.observe(band);

  // Compartir
  $('#ac_compartir').on('click', function () {
    const url = window.location.origin;
    if (navigator.share) {
      navigator.share({ title: app, text: `🔒 Acceso interno de ${app} - Plataforma de Ventas.`, url }).catch(() => {});
    } else {
      wicopy(url, this, '¡Link copiado!');
    }
  });

  // Tooltips
  if (window.wiInitTips) window.wiInitTips();

  console.log(`🔒 ${app} Acerca actualizado`);
  window.__WIREADY__ = true;
};

export const cleanup = () => {
  $('#ac_compartir').off('click');
};