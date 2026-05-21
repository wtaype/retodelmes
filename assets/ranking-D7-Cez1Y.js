import{$ as r}from"./vendor-2D3jvCpt.js";import{db as x}from"./firebase-BPYZb32v.js";import{i as T,c as D,h as V,e as E,T as j,u as q,v as B}from"./firebase-BwR1K4LJ.js";import{y as z,s as L,b as F,j as A,u as $,a as S,C as G}from"./index-Ds5QDkyH.js";import{getMesActual as P,obtenerRankingMes as Y}from"./zsmile-D_ugFjjn.js";const ps=()=>`
  <div class="smw_rank_view">
    
    <!-- CABECERA PREMIUM: idéntica a historial -->
    <header class="smw_rank_header wi_fadeUp">
      <div class="smw_rank_title_row">
        <h1><i class="fas fa-trophy smw_gold_glow"></i> Salón de Campeones</h1>
        <p class="smw_rank_subtitle">Puntuaciones y ventas acumuladas del mes</p>
      </div>
      
      <div class="smw_rank_controls">
        <!-- Selector de Mes – cápsula con flechas -->
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
      </div>
    </header>

    <!-- BANDA GLOBAL: KPIs del Mes – skeletons en render, datos via init -->
    <section class="smw_rank_kpis_grid wi_fadeUp" id="rankKpiGrid">
      
      <div class="smw_rkpi_card" style="--kpi-color: var(--Cielo)">
        <div class="smw_rkpi_icon"><i class="fas fa-car-side"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiToursHoy"><span class="smw_sk_el" style="width:38px;height:22px;border-radius:6px"></span></span>
          <span class="smw_rkpi_lbl">Tours Hoy</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Paz)">
        <div class="smw_rkpi_icon"><i class="fas fa-route"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiToursMes"><span class="smw_sk_el" style="width:38px;height:22px;border-radius:6px"></span></span>
          <span class="smw_rkpi_lbl">Total Tours Mes</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Mora)">
        <div class="smw_rkpi_icon"><i class="fas fa-star"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiPuntosEquipo"><span class="smw_sk_el" style="width:52px;height:22px;border-radius:6px"></span></span>
          <span class="smw_rkpi_lbl">Puntos Equipo</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Oro)">
        <div class="smw_rkpi_icon"><i class="fas fa-bullseye"></i></div>
        <div class="smw_rkpi_info" style="width: 100%;">
          <div class="smw_meta_progress_wrap">
            <span class="smw_rkpi_val" id="rkpiMetaMes"><span class="smw_sk_el" style="width:42px;height:22px;border-radius:6px"></span></span>
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

    <!-- SECCIÓN INFERIOR: Top Ganancia + Tabla + Sidebar -->
    <div class="smw_rank_bottom_grid wi_fadeUp">
      
      <!-- Columna Izquierda: Top Ganancia + Tabla de Ventas -->
      <div class="smw_rank_list_card">

        <!-- ① Top 3 · Mayor Ganancia -->
        <div class="smw_card_header">
          <h2><i class="fas fa-sack-dollar" style="color:var(--Paz)"></i> Top Ventas · Mayor Ganancia</h2>
          <span class="smw_badge" id="lblCountParticipantes">— registros</span>
        </div>
        <div id="topGananciaSection" class="smw_top_ganancia_wrap">
          <!-- Skeletons → cargando -->
          ${U()}
        </div>

        <!-- ② Tabla de Ventas del Mes -->
        <div class="smw_card_subheader">
          <h3><i class="fas fa-table" style="color:var(--mco)"></i> Ventas del Mes</h3>
        </div>
        <div id="ventasTablaSection">
          <!-- Skeletons → cargando -->
          ${R()}
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
`,_s=async()=>{if(!z.user)return setTimeout(()=>L.navigate("/login"),100);r(".wi_fadeUp").addClass("visible wi_visible"),window.__WIREADY__=!0,K();const a=P();N(a),ts(),console.log("🏆 SPA Ranking montado — cargando datos en paralelo...")},ms=()=>{r(document).off(".ranking"),r("#selRankingMes").off(".ranking"),r("#btnMesAnt").off(".ranking"),r("#btnMesSig").off(".ranking")};function O(s=6){const a=[],t=new Date,i=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];for(let e=0;e<s;e++){const n=new Date(t.getFullYear(),t.getMonth()-e,1),o=n.getFullYear(),d=String(n.getMonth()+1).padStart(2,"0"),l=`${o}-${d}`,p=`${i[n.getMonth()]} ${o}`;a.push({val:l,lbl:p})}return a}function H(s){const[a,t]=s.split("-"),i=new Date(parseInt(a),parseInt(t)-2,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function K(){const s=O(6),a=r("#selRankingMes");a.empty(),s.forEach(i=>{a.append(`<option value="${i.val}">${i.lbl}</option>`)});const t=P();a.val(t),r("#txtMesSeleccionado").text(a.find("option:selected").text()),a.on("change.ranking",async()=>{const i=a.val();r("#txtMesSeleccionado").text(a.find("option:selected").text()),await N(i)}),r("#btnMesAnt").on("click.ranking",()=>{const i=a.prop("selectedIndex");i<s.length-1?a.prop("selectedIndex",i+1).trigger("change"):F("No hay meses anteriores disponibles.","info")}),r("#btnMesSig").on("click.ranking",()=>{const i=a.prop("selectedIndex");i>0?a.prop("selectedIndex",i-1).trigger("change"):F("Estás en el mes más reciente.","info")})}async function N(s){const a=r(".smw_rank_header");a.addClass("smw_loading");try{r("#podiumSection").html(is()),r("#topGananciaSection").html(U()),r("#ventasTablaSection").html(R());const[t,i]=await Promise.all([Y(s),J(s)]),e=new Set(t.map(o=>o.usuario)),n=i.filter(o=>e.has(o.vendedor));r("#podiumSection").html(W(t)),r("#topGananciaSection").html(Q(n,t)),r("#ventasTablaSection").html(X(n,t)),r("#lblCountParticipantes").text(`${n.length} registro${n.length!==1?"s":""}`),await ss(s),await as(s,t),setTimeout(()=>{r(".smw_anim_bounce, .smw_anim_fade").addClass("visible")},50)}catch(t){console.error("Error cargando mes:",t),F("Error cargando clasificación del mes","error")}finally{a.removeClass("smw_loading")}}async function J(s){const[a,t]=s.split("-").map(Number),i=d=>d.filter(l=>{const p=l.fechaTour;if(!p)return!1;if(p.toDate){const c=p.toDate();return c.getFullYear()===a&&c.getMonth()+1===t}if(typeof p=="string"){const[c,w]=p.split("-").map(Number);return c===a&&w===t}return!1}),e=A("todasVentasSmile");if(e)return i(e);const o=(await T(D(x,"registrosdb"))).docs.map(d=>({id:d.id,...d.data()}));return $("todasVentasSmile",o,5),i(o)}function W(s){const a=s[0]||null,t=s[1]||null,i=s[2]||null,e=(n,o,d,l,p)=>{if(!n)return`
        <div class="smw_podium_place smw_empty_place ${d}">
          <div class="smw_podium_pedestal">
            <span class="smw_pedestal_num">#${o}</span>
          </div>
        </div>
      `;const c=`${(n.nombre||"?")[0]}${(n.nombre||"")[1]||""}`.toUpperCase(),w=n.imagen?`<img src="${n.imagen}" alt="${n.nombre}" class="smw_podium_img">`:`<div class="smw_podium_avatar_initials">${c}</div>`,f=o===1?'<div class="smw_crown_icon"><i class="fas fa-crown"></i></div>':"";return`
      <div class="smw_podium_place ${d} smw_anim_bounce" style="animation-delay: ${(3-o)*.15}s">
        ${f}
        <div class="smw_podium_avatar_wrap" style="--glow-color: ${l}">
          ${w}
          <div class="smw_podium_badge"><i class="fas ${p}"></i></div>
        </div>
        <div class="smw_podium_info">
          <h3>${S(n.nombre)}</h3>
          <p>${G(n.descripcion||"Colaborador")}</p>
        </div>
        <div class="smw_podium_score">
          <span class="smw_podium_pts">${n.totalPuntos} <span>pts</span></span>
          <span class="smw_podium_tours">${n.totalVentas} tours</span>
        </div>
        <div class="smw_podium_pedestal" style="--ped-color: ${l}">
          <span class="smw_pedestal_num">#${o}</span>
        </div>
      </div>
    `};return`
    <div class="smw_podium_container">
      ${e(t,2,"smw_pos_2","#A0A0A0","fa-medal")}
      ${e(a,1,"smw_pos_1","#FFD700","fa-crown")}
      ${e(i,3,"smw_pos_3","#CD7F32","fa-award")}
    </div>
  `}function Q(s,a){if(!s.length)return`
    <div class="smw_list_empty"><i class="fas fa-inbox"></i><span>Sin ventas este mes.</span></div>`;const t={};s.forEach(d=>{const l=d.vendedor;t[l]||(t[l]={ganancia:0,ventas:0,puntos:0}),t[l].ganancia+=parseFloat(d.ganancia||0),t[l].ventas+=1,t[l].puntos+=parseInt(d.puntos||0)});const i=Object.entries(t).sort((d,l)=>l[1].ganancia-d[1].ganancia).slice(0,3),e=["🥇","🥈","🥉"],n=["#FFD700","#A0A0A0","#CD7F32"],o=["rgba(255,215,0,0.08)","rgba(160,160,160,0.06)","rgba(205,127,50,0.07)"];return`<div class="smw_top_ganancia_grid">
    ${i.map(([d,l],p)=>{const c=a.find(b=>b.usuario===d),w=c?S(c.nombre):S(d),f=w.slice(0,2).toUpperCase(),k=c?.imagen?`<img src="${c.imagen}" alt="${w}" class="smw_tg_avatar" onerror="this.style.display='none'">`:`<div class="smw_tg_avatar_initials" style="--tg-color:${n[p]}">${f}</div>`;return`
        <div class="smw_tg_card smw_anim_fade" style="--tg-color:${n[p]};--tg-bg:${o[p]};animation-delay:${p*.08}s">
          <div class="smw_tg_medal">${e[p]}</div>
          <div class="smw_tg_avatar_wrap">${k}</div>
          <div class="smw_tg_info">
            <strong>${w}</strong>
            <span>${l.ventas} venta${l.ventas!==1?"s":""} · <i class="fas fa-star" style="color:#F59E0B"></i> ${l.puntos} pts</span>
          </div>
          <div class="smw_tg_ganancia">
            <strong>S/ ${l.ganancia.toFixed(2)}</strong>
            <span>ganancia</span>
          </div>
        </div>`}).join("")}
  </div>`}function X(s,a){return s.length?`
    <div class="smw_vt_responsive">
      <table class="smw_vt_table">
        <thead>
          <tr>
            <th><i class="fas fa-calendar"></i> Fecha</th>
            <th><i class="fas fa-route"></i> Tour</th>
            <th><i class="fas fa-user"></i> Usuario</th>
            <th><i class="fas fa-calculator"></i> Total</th>
            <th><i class="fas fa-hand-holding-usd"></i> Ganancia</th>
            <th><i class="fas fa-star"></i> Puntos</th>
          </tr>
        </thead>
        <tbody>${[...s].sort((e,n)=>{const o=e.fechaTour?.toDate?e.fechaTour.toDate():new Date(e.fechaTour||0);return(n.fechaTour?.toDate?n.fechaTour.toDate():new Date(n.fechaTour||0))-o}).map(e=>{const n=a.find(c=>c.usuario===e.vendedor),o=n?S(n.nombre):G(e.vendedor),d=o.slice(0,2).toUpperCase(),l=n?.imagen?`<img src="${n.imagen}" alt="${o}" class="smw_vt_avatar" onerror="this.style.display='none'">`:`<div class="smw_vt_avatar_initials">${d}</div>`;return`
      <tr class="smw_vt_row">
        <td><span class="smw_vt_fecha">${Z(e.fechaTour)}</span></td>
        <td><span class="smw_vt_tour_pill">${e.tipoTour||"—"}</span></td>
        <td>
          <div class="smw_vt_user">
            <div class="smw_vt_avatar_wrap">${l}</div>
            <span>${o}</span>
          </div>
        </td>
        <td><strong class="smw_vt_total">S/ ${parseFloat(e.importeTotal||0).toFixed(2)}</strong></td>
        <td><span class="smw_vt_profit">S/ ${parseFloat(e.ganancia||0).toFixed(2)}</span></td>
        <td><span class="smw_vt_pts"><i class="fas fa-star"></i> ${e.puntos||0}</span></td>
      </tr>`}).join("")}</tbody>
      </table>
    </div>`:`
    <div class="smw_list_empty"><i class="fas fa-inbox"></i><span>Sin ventas este mes.</span></div>`}function Z(s){if(!s)return"—";if(s.toDate){const a=s.toDate();return`${String(a.getDate()).padStart(2,"0")}/${String(a.getMonth()+1).padStart(2,"0")}/${a.getFullYear()}`}if(typeof s=="string"){const a=s.split("T")[0].split("-");return a.length===3?`${a[2]}/${a[1]}/${a[0]}`:s}if(s.seconds){const a=new Date(s.seconds*1e3);return`${String(a.getDate()).padStart(2,"0")}/${String(a.getMonth()+1).padStart(2,"0")}/${a.getFullYear()}`}return"—"}async function ss(s){try{const a=`resumenMes_${s}`,t=new Date,i=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,e=A(a);if(e&&e.mes===s&&e.dia===i){I(e);return}const n=await T(D(x,"registrosdb")),[o,d]=s.split("-").map(Number);let l=0,p=0,c=0;n.docs.forEach(k=>{const b=k.data(),u=b.fechaTour;if(!u)return;let _,m,h;if(typeof u=="string"){const v=u.split("-");_=Number(v[0]),m=Number(v[1]),h=u}else if(u.toDate){const v=u.toDate();_=v.getFullYear(),m=v.getMonth()+1,h=`${_}-${String(m).padStart(2,"0")}-${String(v.getDate()).padStart(2,"0")}`}else return;_===o&&m===d&&(l+=parseInt(b.qventa)||0,p+=parseInt(b.puntos)||0,h===i&&(c+=parseInt(b.qventa)||0))});const f={mes:s,dia:i,toursHoy:c,toursMes:l,totalPuntos:p,meta:2500};$(a,f,.25),I(f)}catch(a){console.error("Error actualizando KPIs globales:",a)}}function I({toursHoy:s,toursMes:a,totalPuntos:t,meta:i}){r("#rkpiToursHoy").text(s),r("#rkpiToursMes").text(a),r("#rkpiPuntosEquipo").text(t);const e=Math.min(Math.round(t/i*100),100);r("#rkpiMetaMes").text(`${e}%`),r("#metaProgressFill").css("width",`${e}%`)}async function as(s,a){try{const t=H(s),i=`ganadorMes_${t}`,e=A(i);if(e){C(e,a);return}r("#winnerBody").html(es());const n=t.replace("-",""),o=await V(E(x,"ganadores",n));if(o.exists()){const _=o.data();$(i,_,1440),C(_,a);return}const[d,l]=t.split("-").map(Number),p=await T(D(x,"registrosdb")),c={};p.docs.forEach(_=>{const m=_.data(),h=m.fechaTour;if(!h)return;let v,y;if(typeof h=="string")[v,y]=h.split("-").map(Number);else if(h.toDate){const g=h.toDate();v=g.getFullYear(),y=g.getMonth()+1}else return;if(v===d&&y===l){const g=m.vendedor;c[g]||(c[g]={puntos:0,ventas:0}),c[g].puntos+=parseInt(m.puntos)||0,c[g].ventas+=parseInt(m.qventa)||1}});const w=Object.entries(c);if(!w.length){r("#winnerBody").html(`
        <div class="smw_winner_empty">
          <i class="fas fa-question-circle"></i>
          <span>No hay datos de ventas en ${l}/${d} para definir un campeón.</span>
        </div>
      `);return}const[f,k]=w.sort((_,m)=>m[1].puntos-_[1].puntos)[0],b=_=>{const[m,h,v]=_.split("-").map(Number),y=new Date,g=new Date(m,h-1,v,y.getHours(),y.getMinutes(),y.getSeconds());return j.fromDate(g)},u={ganador:f,puntosGanados:k.puntos,totalVentas:k.ventas,mes:l,year:d,mesCompleto:b(`${t}-01`),fechaRegistro:q()};await B(E(x,"ganadores",n),u),$(i,u,1440),C(u,a)}catch(t){console.error("Error cargando campeón anterior:",t),r("#winnerBody").html(`
      <div class="smw_winner_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar campeón anterior</span>
      </div>
    `)}}function C(s,a){const t=a.find(o=>o.usuario===s.ganador||o.nombre===s.ganador),i=S(s.ganador||""),e=i.slice(0,2).toUpperCase(),n=t?.imagen?`<img src="${t.imagen}" alt="${s.ganador}">`:`<div class="smw_winner_avatar_initials">${e}</div>`;r("#winnerBody").html(`
    <div class="smw_winner_content">
      <div class="smw_winner_avatar_wrap">
        ${n}
        <div class="smw_winner_crown"><i class="fas fa-crown"></i></div>
      </div>
      <div class="smw_winner_details">
        <h4>${i}</h4>
        <p class="smw_winner_period"><i class="fas fa-calendar-alt"></i> Competencia: ${s.mes}/${s.year}</p>
        <div class="smw_winner_stats">
          <span class="smw_w_stat_pts"><i class="fas fa-star"></i> <strong>${s.puntosGanados}</strong> pts</span>
          <span class="smw_w_stat_tours"><i class="fas fa-route"></i> <strong>${s.totalVentas}</strong> tours</span>
        </div>
      </div>
    </div>
  `)}async function ts(){try{const s=A("notasSmile");if(s){M(s);return}r("#notesList").html(ns());const a=await T(D(x,"notas"));if(a.empty){M([]);return}const t=a.docs.map(i=>({id:i.id,...i.data()}));$("notasSmile",t,10),M(t)}catch(s){console.warn("Error cargando notas:",s),M([])}}function M(s){if(!s||!s.length){r("#notesList").html(`
      <div class="smw_notes_empty">
        <i class="fas fa-info-circle"></i>
        <span>No hay avisos recientes del equipo.</span>
      </div>
    `);return}const a=s.map(t=>`
    <li class="smw_note_item">
      <i class="fas fa-bullhorn"></i>
      <span>${t.nota||""}</span>
    </li>
  `).join("");r("#notesList").html(a)}function is(){return`
    <div class="smw_podium_container smw_sk_podium">
      <!-- Lugar #2 -->
      <div class="smw_podium_place smw_pos_2">
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 11vh; height: 11vh;"></div>
        <div class="smw_sk_el" style="width: 80px; height: 16px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 55px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 90px; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
      <!-- Lugar #1 -->
      <div class="smw_podium_place smw_pos_1">
        <div class="smw_crown_icon" style="color: var(--brd); opacity: 0.3;"><i class="fas fa-crown"></i></div>
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 13.5vh; height: 13.5vh;"></div>
        <div class="smw_sk_el" style="width: 90px; height: 18px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 60px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 120px; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
      <!-- Lugar #3 -->
      <div class="smw_podium_place smw_pos_3">
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 11vh; height: 11vh;"></div>
        <div class="smw_sk_el" style="width: 80px; height: 16px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 55px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 60px; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
    </div>
  `}function es(){return`
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
  `}function ns(){return`
    <div class="smw_notes_sk" style="width: 100%; padding: 1vh 0;">
      <div class="smw_sk_el" style="width: 100%; height: 14px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
      <div class="smw_sk_el" style="width: 90%; height: 14px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
      <div class="smw_sk_el" style="width: 95%; height: 14px; border-radius: 4px;"></div>
    </div>
  `}function U(){return`<div class="smw_top_ganancia_grid">${[0,1,2].map(s=>`
    <div class="smw_tg_card" style="--tg-color:var(--brd);--tg-bg:var(--bg5)">
      <div class="smw_sk_el" style="width:32px;height:32px;border-radius:50%;flex-shrink:0"></div>
      <div class="smw_sk_el smw_sk_circle" style="width:5vh;height:5vh;flex-shrink:0"></div>
      <div style="flex:1;display:flex;flex-direction:column;gap:0.7vh">
        <div class="smw_sk_el" style="width:90px;height:14px"></div>
        <div class="smw_sk_el" style="width:70px;height:11px"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:0.5vh;align-items:flex-end">
        <div class="smw_sk_el" style="width:65px;height:18px"></div>
        <div class="smw_sk_el" style="width:45px;height:11px"></div>
      </div>
    </div>`).join("")}</div>`}function R(){return`<div class="smw_vt_responsive">
    <table class="smw_vt_table">
      <thead><tr>
        <th>Fecha</th><th>Tour</th><th>Usuario</th><th>Total</th><th>Ganancia</th><th>Puntos</th>
      </tr></thead>
      <tbody>${Array(5).fill(0).map(()=>`
        <tr class="smw_vt_row">
          <td><span class="smw_sk_el" style="width:65px;height:13px"></span></td>
          <td><span class="smw_sk_el" style="width:90px;height:22px;border-radius:5px"></span></td>
          <td><div style="display:flex;align-items:center;gap:8px">
            <span class="smw_sk_el smw_sk_circle" style="width:26px;height:26px"></span>
            <span class="smw_sk_el" style="width:75px;height:13px"></span>
          </div></td>
          <td><span class="smw_sk_el" style="width:55px;height:14px"></span></td>
          <td><span class="smw_sk_el" style="width:50px;height:14px"></span></td>
          <td><span class="smw_sk_el" style="width:44px;height:20px;border-radius:50px"></span></td>
        </tr>`).join("")}
      </tbody>
    </table>
  </div>`}export{ms as cleanup,_s as init,ps as render};
