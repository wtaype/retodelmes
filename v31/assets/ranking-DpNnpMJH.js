import{$ as e}from"./vendor-PbmUQHyn.js";import{db as k}from"./firebase-C8DVrBxg.js";import{i as A,c as D,h as F,e as N,T as G,u as q,v as z}from"./firebase-BM1KOhEp.js";import{A as U,u as H,c as C,l as E,w as M,a as I,C as T}from"./index-Cj1xyXrU.js";import{getMesActual as L,obtenerRankingMes as O}from"./zsmile-JZAidpmN.js";const os=()=>`
  <div class="smw_rank_view">
    
    <!-- CABECERA: Título, Subtítulo y Controles -->
    <header class="smw_rank_header wi_fadeUp">
      <div class="smw_rank_title_row">
        <h1><i class="fas fa-trophy smw_gold_glow"></i> Salón de Campeones</h1>
        <p class="smw_rank_subtitle">Puntuaciones y ventas acumuladas del mes</p>
      </div>
      
      <div class="smw_rank_controls">
        <!-- Selector de Mes Estilizado -->
        <div class="smw_month_selector_wrap">
          <button class="smw_month_nav_btn" id="btnMesAnt" title="Mes Anterior">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="smw_month_display" id="btnMonthDropdown">
            <i class="fas fa-calendar-alt"></i>
            <span id="txtMesSeleccionado">...</span>
            <select id="selRankingMes" class="smw_month_hidden_select"></select>
          </div>
          <button class="smw_month_nav_btn" id="btnMesSig" title="Mes Siguiente">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <a href="/smile" class="smw_back_btn nv_item" data-page="smile">
          <i class="fas fa-arrow-left"></i> Panel de Control
        </a>
      </div>
    </header>

    <!-- BANDA GLOBAL: KPIs del Mes -->
    <section class="smw_rank_kpis_grid wi_fadeUp" id="rankKpiGrid">
      
      <div class="smw_rkpi_card" style="--kpi-color: var(--Cielo)">
        <div class="smw_rkpi_icon"><i class="fas fa-car-side"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiToursHoy">0</span>
          <span class="smw_rkpi_lbl">Tours Hoy</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Paz)">
        <div class="smw_rkpi_icon"><i class="fas fa-route"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiToursMes">0</span>
          <span class="smw_rkpi_lbl">Total Tours Mes</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Mora)">
        <div class="smw_rkpi_icon"><i class="fas fa-star"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiPuntosEquipo">0</span>
          <span class="smw_rkpi_lbl">Puntos Equipo</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Oro)">
        <div class="smw_rkpi_icon"><i class="fas fa-bullseye"></i></div>
        <div class="smw_rkpi_info" style="width: 100%;">
          <div class="smw_meta_progress_wrap">
            <span class="smw_rkpi_val" id="rkpiMetaMes">0%</span>
            <span class="smw_rkpi_lbl">Meta (2500 pts)</span>
          </div>
          <div class="smw_meta_progress_bar">
            <div class="smw_meta_progress_fill" id="metaProgressFill" style="width: 0%"></div>
          </div>
        </div>
      </div>

    </section>

    <!-- SECCIÓN DEL PODIO 3D (Top 3) -->
    <section class="smw_podium_section wi_fadeUp" id="podiumSection">
      <!-- Renderizado Dinámico -->
    </section>

    <!-- SECCIÓN INFERIOR: Clasificación General y Sidebar -->
    <div class="smw_rank_bottom_grid wi_fadeUp">
      
      <!-- Columna Izquierda: Clasificación #4+ -->
      <div class="smw_rank_list_card">
        <div class="smw_card_header">
          <h2><i class="fas fa-list-ol" style="color:var(--mco)"></i> Clasificación General</h2>
          <span class="smw_badge" id="lblCountParticipantes">0 Colaboradores</span>
        </div>
        <div class="smw_leaderboard_list" id="leaderboardList">
          <!-- Renderizado Dinámico -->
        </div>
      </div>

      <!-- Columna Derecha: Sidebar (Ganador anterior y Avisos) -->
      <div class="smw_rank_sidebar">
        
        <!-- Tarjeta de Ganador Anterior -->
        <div class="smw_winner_card" id="lastWinnerCard">
          <div class="smw_winner_header">
            <i class="fas fa-crown"></i>
            <h3>Campeón del Mes Anterior</h3>
          </div>
          <div class="smw_winner_body" id="winnerBody">
            <div class="smw_winner_loading">
              <i class="fas fa-spinner fa-spin"></i> Cargando campeón...
            </div>
          </div>
        </div>

        <!-- Tarjeta de Avisos del Equipo -->
        <div class="smw_notes_card">
          <div class="smw_notes_header">
            <i class="fas fa-bullhorn" style="color:var(--mco)"></i>
            <h3>Avisos del Equipo</h3>
          </div>
          <ul class="smw_notes_list" id="notesList">
            <div class="smw_winner_loading">
              <i class="fas fa-spinner fa-spin"></i> Cargando avisos...
            </div>
          </ul>
        </div>

      </div>

    </div>

  </div>
`,ls=async()=>{if(!U.user)return setTimeout(()=>H.navigate("/login"),100);e(".wi_fadeUp").addClass("visible wi_visible"),Y();const s=L();await R(s),await Q(),console.log("🏆 SPA Ranking cargado exitosamente"),window.__WIREADY__=!0},ds=()=>{e(document).off(".ranking"),e("#selRankingMes").off(".ranking"),e("#btnMesAnt").off(".ranking"),e("#btnMesSig").off(".ranking")};function B(a=6){const s=[],i=new Date,t=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];for(let r=0;r<a;r++){const n=new Date(i.getFullYear(),i.getMonth()-r,1),o=n.getFullYear(),p=String(n.getMonth()+1).padStart(2,"0"),_=`${o}-${p}`,h=`${t[n.getMonth()]} ${o}`;s.push({val:_,lbl:h})}return s}function j(a){const[s,i]=a.split("-"),t=new Date(parseInt(s),parseInt(i)-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`}function Y(){const a=B(6),s=e("#selRankingMes");s.empty(),a.forEach(t=>{s.append(`<option value="${t.val}">${t.lbl}</option>`)});const i=L();s.val(i),e("#txtMesSeleccionado").text(s.find("option:selected").text()),s.on("change.ranking",async()=>{const t=s.val();e("#txtMesSeleccionado").text(s.find("option:selected").text()),await R(t)}),e("#btnMesAnt").on("click.ranking",()=>{const t=s.prop("selectedIndex");t<a.length-1?s.prop("selectedIndex",t+1).trigger("change"):C("No hay meses anteriores disponibles.","info")}),e("#btnMesSig").on("click.ranking",()=>{const t=s.prop("selectedIndex");t>0?s.prop("selectedIndex",t-1).trigger("change"):C("Estás en el mes más reciente.","info")})}async function R(a){try{e("#podiumSection").html(X()),e("#leaderboardList").html(Z(4));const s=await O(a);e("#podiumSection").html(K(s)),e("#leaderboardList").html(V(s)),e("#lblCountParticipantes").text(`${s.length} Colaboradores`),await J(a),await W(a,s),setTimeout(()=>{e(".smw_anim_bounce, .smw_anim_fade").addClass("visible")},50)}catch(s){console.error("Error cargando mes:",s),C("Error cargando clasificación del mes","error")}}function K(a){const s=a[0]||null,i=a[1]||null,t=a[2]||null,r=(n,o,p,_,h)=>{if(!n)return`
        <div class="smw_podium_place smw_empty_place ${p}">
          <div class="smw_podium_pedestal">
            <span class="smw_pedestal_num">#${o}</span>
          </div>
        </div>
      `;const v=`${(n.nombre||"?")[0]}${(n.nombre||"")[1]||""}`.toUpperCase(),y=n.imagen?`<img src="${n.imagen}" alt="${n.nombre}" class="smw_podium_img">`:`<div class="smw_podium_avatar_initials">${v}</div>`,f=o===1?'<div class="smw_crown_icon"><i class="fas fa-crown"></i></div>':"";return`
      <div class="smw_podium_place ${p} smw_anim_bounce" style="animation-delay: ${(3-o)*.15}s">
        ${f}
        <div class="smw_podium_avatar_wrap" style="--glow-color: ${_}">
          ${y}
          <div class="smw_podium_badge"><i class="fas ${h}"></i></div>
        </div>
        <div class="smw_podium_info">
          <h3>${I(n.nombre)}</h3>
          <p>${T(n.descripcion||"Colaborador")}</p>
        </div>
        <div class="smw_podium_score">
          <span class="smw_podium_pts">${n.totalPuntos} <span>pts</span></span>
          <span class="smw_podium_tours">${n.totalVentas} tours</span>
        </div>
        <div class="smw_podium_pedestal" style="--ped-color: ${_}">
          <span class="smw_pedestal_num">#${o}</span>
        </div>
      </div>
    `};return`
    <div class="smw_podium_container">
      ${r(i,2,"smw_pos_2","#A0A0A0","fa-medal")}
      ${r(s,1,"smw_pos_1","#FFD700","fa-crown")}
      ${r(t,3,"smw_pos_3","#CD7F32","fa-award")}
    </div>
  `}function V(a){const s=a.slice(3);return s.length?s.map((i,t)=>{const r=t+4,n=`${(i.nombre||"?")[0]}${(i.nombre||"")[1]||""}`.toUpperCase(),o=i.imagen?`<img src="${i.imagen}" alt="${i.nombre}" class="smw_list_avatar">`:`<div class="smw_list_avatar_initials">${n}</div>`;return`
      <div class="smw_list_row smw_anim_fade" style="animation-delay: ${t*.05}s">
        <div class="smw_list_pos">#${r}</div>
        <div class="smw_list_avatar_wrap">
          ${o}
        </div>
        <div class="smw_list_info">
          <h4>${I(i.nombre)}</h4>
          <p>${T(i.descripcion||"Colaborador")}</p>
        </div>
        <div class="smw_list_stats">
          <div class="smw_lstat">
            <span class="smw_lstat_val">${i.totalVentas}</span>
            <span class="smw_lstat_lbl">tours</span>
          </div>
          <div class="smw_lstat_sep"></div>
          <div class="smw_lstat_pts">
            <strong>${i.totalPuntos}</strong>
            <span>puntos</span>
          </div>
        </div>
      </div>
    `}).join(""):`
      <div class="smw_list_empty">
        <i class="fas fa-user-friends"></i>
        <span>No hay más participantes registrados este mes.</span>
      </div>
    `}async function J(a){try{const s=`resumenMes_${a}`,i=new Date,t=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,r=E(s);if(r&&r.mes===a&&r.dia===t){P(r);return}const n=await A(D(k,"registrosdb")),[o,p]=a.split("-").map(Number);let _=0,h=0,v=0;n.docs.forEach(x=>{const b=x.data(),w=b.fechaTour;if(!w)return;let l,d,m;if(typeof w=="string"){const c=w.split("-");l=Number(c[0]),d=Number(c[1]),m=w}else if(w.toDate){const c=w.toDate();l=c.getFullYear(),d=c.getMonth()+1,m=`${l}-${String(d).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`}else return;l===o&&d===p&&(_+=parseInt(b.qventa)||0,h+=parseInt(b.puntos)||0,m===t&&(v+=parseInt(b.qventa)||0))});const f={mes:a,dia:t,toursHoy:v,toursMes:_,totalPuntos:h,meta:2500};M(s,f,.25),P(f)}catch(s){console.error("Error actualizando KPIs globales:",s)}}function P({toursHoy:a,toursMes:s,totalPuntos:i,meta:t}){e("#rkpiToursHoy").text(a),e("#rkpiToursMes").text(s),e("#rkpiPuntosEquipo").text(i);const r=Math.min(Math.round(i/t*100),100);e("#rkpiMetaMes").text(`${r}%`),e("#metaProgressFill").css("width",`${r}%`)}async function W(a,s){try{const i=j(a),t=`ganadorMes_${i}`,r=E(t);if(r){S(r,s);return}e("#winnerBody").html(ss());const n=i.replace("-",""),o=await F(N(k,"ganadores",n));if(o.exists()){const l=o.data();M(t,l,1440),S(l,s);return}const[p,_]=i.split("-").map(Number),h=await A(D(k,"registrosdb")),v={};h.docs.forEach(l=>{const d=l.data(),m=d.fechaTour;if(!m)return;let c,g;if(typeof m=="string")[c,g]=m.split("-").map(Number);else if(m.toDate){const u=m.toDate();c=u.getFullYear(),g=u.getMonth()+1}else return;if(c===p&&g===_){const u=d.vendedor;v[u]||(v[u]={puntos:0,ventas:0}),v[u].puntos+=parseInt(d.puntos)||0,v[u].ventas+=parseInt(d.qventa)||1}});const y=Object.entries(v);if(!y.length){e("#winnerBody").html(`
        <div class="smw_winner_empty">
          <i class="fas fa-question-circle"></i>
          <span>No hay datos de ventas en ${_}/${p} para definir un campeón.</span>
        </div>
      `);return}const[f,x]=y.sort((l,d)=>d[1].puntos-l[1].puntos)[0],b=l=>{const[d,m,c]=l.split("-").map(Number),g=new Date,u=new Date(d,m-1,c,g.getHours(),g.getMinutes(),g.getSeconds());return G.fromDate(u)},w={ganador:f,puntosGanados:x.puntos,totalVentas:x.ventas,mes:_,year:p,mesCompleto:b(`${i}-01`),fechaRegistro:q()};await z(N(k,"ganadores",n),w),M(t,w,1440),S(w,s)}catch(i){console.error("Error cargando campeón anterior:",i),e("#winnerBody").html(`
      <div class="smw_winner_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar campeón anterior</span>
      </div>
    `)}}function S(a,s){const i=s.find(o=>o.usuario===a.ganador||o.nombre===a.ganador),t=I(a.ganador||""),r=t.slice(0,2).toUpperCase(),n=i?.imagen?`<img src="${i.imagen}" alt="${a.ganador}">`:`<div class="smw_winner_avatar_initials">${r}</div>`;e("#winnerBody").html(`
    <div class="smw_winner_content">
      <div class="smw_winner_avatar_wrap">
        ${n}
        <div class="smw_winner_crown"><i class="fas fa-crown"></i></div>
      </div>
      <div class="smw_winner_details">
        <h4>${t}</h4>
        <p class="smw_winner_period"><i class="fas fa-calendar-alt"></i> Competencia: ${a.mes}/${a.year}</p>
        <div class="smw_winner_stats">
          <span class="smw_w_stat_pts"><i class="fas fa-star"></i> <strong>${a.puntosGanados}</strong> pts</span>
          <span class="smw_w_stat_tours"><i class="fas fa-route"></i> <strong>${a.totalVentas}</strong> tours</span>
        </div>
      </div>
    </div>
  `)}async function Q(){try{const a=E("notasSmile");if(a){$(a);return}e("#notesList").html(as());const s=await A(D(k,"notas"));if(s.empty){$([]);return}const i=s.docs.map(t=>({id:t.id,...t.data()}));M("notasSmile",i,10),$(i)}catch(a){console.warn("Error cargando notas:",a),$([])}}function $(a){if(!a||!a.length){e("#notesList").html(`
      <div class="smw_notes_empty">
        <i class="fas fa-info-circle"></i>
        <span>No hay avisos recientes del equipo.</span>
      </div>
    `);return}const s=a.map(i=>`
    <li class="smw_note_item">
      <i class="fas fa-bullhorn"></i>
      <span>${i.nota||""}</span>
    </li>
  `).join("");e("#notesList").html(s)}function X(){return`
    <div class="smw_podium_container smw_sk_podium">
      <!-- Lugar #2 -->
      <div class="smw_podium_place smw_pos_2">
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 11vh; height: 11vh;"></div>
        <div class="smw_sk_el" style="width: 80px; height: 16px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 55px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 14vh; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
      <!-- Lugar #1 -->
      <div class="smw_podium_place smw_pos_1">
        <div class="smw_crown_icon" style="color: var(--brd); opacity: 0.3;"><i class="fas fa-crown"></i></div>
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 13.5vh; height: 13.5vh;"></div>
        <div class="smw_sk_el" style="width: 90px; height: 18px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 60px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 20vh; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
      <!-- Lugar #3 -->
      <div class="smw_podium_place smw_pos_3">
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 11vh; height: 11vh;"></div>
        <div class="smw_sk_el" style="width: 80px; height: 16px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 55px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 10vh; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
    </div>
  `}function Z(a=4){return Array(a).fill(0).map((s,i)=>`
    <div class="smw_list_row smw_sk_row_rank" style="animation-delay: ${i*.05}s">
      <div class="smw_sk_el" style="width: 25px; height: 18px; border-radius: 4px; margin-right: 2.5vh;"></div>
      <div class="smw_list_avatar_wrap smw_sk_el smw_sk_circle" style="margin-right: 2.5vh; border-radius: 50%; width: 6.5vh; height: 6.5vh; background: none;"></div>
      <div class="smw_list_info" style="flex: 1;">
        <div class="smw_sk_el" style="width: 120px; height: 16px; margin-bottom: 0.6vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 85px; height: 12px; border-radius: 4px;"></div>
      </div>
      <div class="smw_list_stats" style="display: flex; gap: 2.5vh; align-items: center;">
        <div class="smw_sk_el" style="width: 40px; height: 16px; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 60px; height: 18px; border-radius: 4px;"></div>
      </div>
    </div>
  `).join("")}function ss(){return`
    <div class="smw_winner_content smw_sk_winner">
      <div class="smw_winner_avatar_wrap smw_sk_el smw_sk_circle" style="border-radius: 50%; width: 9vh; height: 9vh; background: none;"></div>
      <div class="smw_winner_details" style="flex: 1;">
        <div class="smw_sk_el" style="width: 100px; height: 16px; margin-bottom: 0.8vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 120px; height: 12px; margin-bottom: 1.2vh; border-radius: 4px;"></div>
        <div class="smw_winner_stats" style="display: flex; gap: 1.5vh;">
          <span class="smw_sk_el" style="width: 60px; height: 16px; border-radius: 4px;"></span>
          <span class="smw_sk_el" style="width: 60px; height: 16px; border-radius: 4px;"></span>
        </div>
      </div>
    </div>
  `}function as(){return`
    <div class="smw_notes_sk" style="width: 100%; padding: 1vh 0;">
      <div class="smw_sk_el" style="width: 100%; height: 14px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
      <div class="smw_sk_el" style="width: 90%; height: 14px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
      <div class="smw_sk_el" style="width: 95%; height: 14px; border-radius: 4px;"></div>
    </div>
  `}export{ds as cleanup,ls as init,os as render};
