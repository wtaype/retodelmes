import{$ as s}from"./vendor-2D3jvCpt.js";import{y as r,s as d}from"./index-CGMM99MM.js";import{cargarTours as c}from"./zsmile-Bgl22WoR.js";import"./firebase-DXGRMKXG.js";import"./firebase-BwR1K4LJ.js";let e=[];const w=()=>`
  <div class="smw_tours_view">
    
    <!-- CABECERA: Título y Controles -->
    <header class="smw_tours_header wi_fadeUp">
      <div class="smw_tours_title_row">
        <h1><i class="fas fa-route smw_paz_glow"></i> Catálogo & Reglas</h1>
        <p class="smw_tours_subtitle">Información oficial de tours, precios y políticas del reto</p>
      </div>

      <a href="/smile" class="smw_back_btn nv_item" data-page="smile">
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
        
        <div class="smw_tours_grid" id="preciosCatalogGrid">
          ${o(4)}
        </div>
      </div>

      <!-- PESTAÑA: PUNTOS -->
      <div class="smw_tab_pane" id="pane-puntos">
        <div class="smw_sec_head_tours">
          <h3><i class="fas fa-award"></i> Asignación de Puntos del Reto</h3>
          <span class="smw_badge_info"><i class="fas fa-fire"></i> ¡Suma más para ganar!</span>
        </div>

        <div class="smw_tours_grid" id="puntosCatalogGrid">
          <!-- Dinámico -->
        </div>
      </div>

      <!-- PESTAÑA: REGLAS -->
      <div class="smw_tab_pane" id="pane-reglas">
        <div class="smw_sec_head_tours">
          <h3><i class="fas fa-shield-halved"></i> Políticas y Reglas del Sistema</h3>
          <span class="smw_badge_info"><i class="fas fa-triangle-exclamation"></i> Lectura obligatoria</span>
        </div>

        <div class="smw_rules_list">
          ${[{title:"Tasa Turística",desc:"Los precios que se muestran en el catálogo NO incluyen la tasa turística regulada.",type:"normal"},{title:"Vehículos Propios",desc:"Buggie/Bodegas y City Tour: Se acumula mayor puntaje con buggies propiedad de Sonia o vehículos autorizados de la empresa.",type:"normal"},{title:"Reclamos y Quejas",desc:"⚠️ Reclamos fundados de clientes ANULAN los puntos del tour. Comentario positivo certificado = +10 pts. Comentario negativo = -10 pts.",type:"alert"},{title:"Anulación de Servicios",desc:"Cualquier devolución o anulación de tour cancela por completo los puntos y comisiones del mismo.",type:"normal"},{title:"Registro Oportuno",desc:"Los tours deben ser registrados en el sistema el MISMO DÍA en que se realiza la venta para validar los puntos.",type:"alert"},{title:"Fidelización en Redes",desc:"Etiqueta en Instagram/Tiktok de la marca = +5 pts. Comentario en TripAdvisor o Google Maps = +5 pts (Máximo 10 puntos extra por cliente).",type:"bonus"}].map((a,t)=>`
            <div class="smw_rule_card ${a.type}">
              <div class="smw_rule_index">${t+1}</div>
              <div class="smw_rule_body">
                <h4>${a.title}</h4>
                <p>${a.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

    </div>

  </div>
`,g=async()=>{if(!r.user)return setTimeout(()=>d.navigate("/login"),100);n(),s(document).off("click.tours_events",".smw_tab_btn").on("click.tours_events",".smw_tab_btn",function(){const t=s(this).data("tab");s(".smw_tab_btn").removeClass("active"),s(this).addClass("active"),s(".smw_tab_pane").removeClass("active"),s(`#pane-${t}`).addClass("active")}),s(".wi_fadeUp").addClass("visible wi_visible"),window.__WIREADY__=!0},h=()=>{s(document).off(".tours_events")};async function n(){const a=s(".smw_tours_header");a.addClass("smw_loading");try{if(s("#preciosCatalogGrid").html(o(4)),s("#puntosCatalogGrid").html(o(4)),e=await c(),!e.length){s("#preciosCatalogGrid").html('<div class="smw_empty_pane">No hay tours cargados en la base de datos.</div>'),s("#puntosCatalogGrid").html('<div class="smw_empty_pane">No hay tours cargados en la base de datos.</div>');return}const t=e.map(i=>`
      <div class="smw_tour_cat_card">
        <div class="smw_tcard_badge"><i class="fas fa-route"></i></div>
        <h4 class="smw_tcard_title">${i.tour}</h4>
        <div class="smw_tcard_details">
          <div class="smw_tcard_stat">
            <span class="smw_tcard_stat_lbl">Precio Sugerido</span>
            <strong class="smw_tcard_stat_val" style="color: var(--tx)">S/ ${i.price.toFixed(2)}</strong>
          </div>
          <div class="smw_tcard_stat">
            <span class="smw_tcard_stat_lbl">Comisión Base</span>
            <strong class="smw_tcard_stat_val" style="color: var(--Paz)">S/ ${i.com.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    `).join("");s("#preciosCatalogGrid").html(t);const l=e.map(i=>`
      <div class="smw_tour_cat_card puntos">
        <div class="smw_tcard_badge" >
          <i class="fas fa-star"></i>
        </div>
        <h4 class="smw_tcard_title">${i.tour}</h4>
        <div class="smw_tcard_details">
          <div class="smw_tcard_stat">
            <span class="smw_tcard_stat_lbl">Puntos por pax</span>
            <strong class="smw_tcard_stat_val" >${i.pts} <i class="fas fa-star" style="font-size: 14px"></i></strong>
          </div>
          <div class="smw_tcard_stat">
            <span class="smw_tcard_stat_lbl">Multiplicador pax</span>
            <strong class="smw_tcard_stat_val" style="color: var(--tx)">Activo</strong>
          </div>
        </div>
      </div>
    `).join("");s("#puntosCatalogGrid").html(l)}catch(t){console.error("Error al cargar catalogo:",t),s("#preciosCatalogGrid").html('<div class="smw_empty_pane">Error al cargar información de tours.</div>')}finally{a.removeClass("smw_loading")}}function o(a=4){return Array(a).fill(0).map(()=>`
    <div class="smw_tour_cat_card smw_sk_tcard">
      <div class="smw_tcard_badge smw_sk_el" style="width: 4.5vh; height: 4.5vh; border-radius: 1vh; margin: 0 auto 0 0;"></div>
      <div class="smw_sk_el" style="width: 80%; height: 20px; margin: 1.5vh 0; border-radius: 6px;"></div>
      <div class="smw_tcard_details" style="border-top: 1px dashed var(--brd); padding-top: 1.5vh; margin-top: 1vh; width: 100%;">
        <div class="smw_tcard_stat" style="align-items: flex-start; gap: 0.5vh;">
          <span class="smw_sk_el" style="width: 50px; height: 12px; border-radius: 4px;"></span>
          <span class="smw_sk_el" style="width: 65px; height: 18px; border-radius: 4px;"></span>
        </div>
        <div class="smw_tcard_stat" style="align-items: flex-end; gap: 0.5vh;">
          <span class="smw_sk_el" style="width: 50px; height: 12px; border-radius: 4px;"></span>
          <span class="smw_sk_el" style="width: 65px; height: 18px; border-radius: 4px;"></span>
        </div>
      </div>
    </div>
  `).join("")}export{h as cleanup,g as init,w as render};
