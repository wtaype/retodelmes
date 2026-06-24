import{r as e}from"./vendor-CZ6bxb2j.js";import{t}from"./wii-BvK6d7hI.js";import{a as n,d as r,f as i,h as a,v as o}from"./widev-BkR2Na_W.js";import"./index-DrcQc_nm.js";import{a as s,g as c}from"./firebase-D6VL4aaK.js";import{n as l}from"./firebase-BfEAzf30.js";import{getMesActual as u,obtenerRankingMes as d}from"./zsmile-9OBMck8o.js";var f=u(),p=()=>`
    <div class="smw_dash">
      <header class="smw_hero wi_fadeUp">
        <div class="smw_hero_glow"></div>
        <div class="smw_hero_content">
          <div class="smw_hero_left">
            <div class="smw_avatar_wrap">
              <div class="smw_avatar" id="smwAvatar">?</div>
              <div class="smw_avatar_ring"></div>
            </div>
            <div class="smw_welcome">
              <h1 id="smwSaludo">Cargando...</h1>
              <p id="smwRole"><i class="fas fa-car-side"></i> Colaborador — Reto del Mes</p>
            </div>
          </div>
          <div class="smw_month_selector_container">
            <select id="smwMonthSelector" class="smw_select" style="min-width: 160px; backdrop-filter: blur(10px); background: var(--bg5);">
              ${v()}
            </select>
          </div>
        </div>
      </header>

      <section class="smw_kpi_band wi_fadeUp" id="smwKpis" style="animation-delay: 0.1s">
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiTours" style="color: var(--Cielo)"><span class="smw_sk_kpi"></span></span>
          <span class="smw_kpi_lbl">Tours este mes</span>
        </div>
        <div class="smw_kpi_sep"></div>
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiPuntos" style="color: var(--Oro)"><span class="smw_sk_kpi"></span></span>
          <span class="smw_kpi_lbl">Mis puntos</span>
        </div>
        <div class="smw_kpi_sep"></div>
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiPos" style="color: var(--Mora)"><span class="smw_sk_kpi"></span></span>
          <span class="smw_kpi_lbl">Posición</span>
        </div>
      </section>

      <nav class="smw_quick_nav wi_fadeUp" style="animation-delay: 0.2s">
        ${[{page:`registrar`,ico:`fa-plus-circle`,col:`#FF5C69`,tit:`Registrar Venta`,sub:`Nueva venta de tour`},{page:`ranking`,ico:`fa-trophy`,col:`#FFDA34`,tit:`Ver Ranking`,sub:`Puntos del mes`},{page:`historial`,ico:`fa-clipboard-list`,col:`#0EBEFF`,tit:`Historial`,sub:`Mis ventas registradas`},{page:`tours`,ico:`fa-route`,col:`#29C72E`,tit:`Catálogo Tours`,sub:`Lista de tours and precios`}].map((e,t)=>`
          <a href="/${e.page}" class="smw_qcard nv_item" data-page="${e.page}" style="--qc:${e.col}; animation-delay: ${t*.05}s">
            <div class="smw_qcard_ico" style="--qc: ${e.col}"><i class="fas ${e.ico}"></i></div>
            <div class="smw_qcard_txt">
              <strong>${e.tit}</strong>
              <span>${e.sub}</span>
            </div>
            <i class="fas fa-arrow-right smw_qcard_arr"></i>
          </a>
        `).join(``)}
      </nav>
    </div>
  `,m=async()=>{let i=o.user,a=r(i.nombre||i.usuario||``),s=`${(i.nombre||`?`)[0]}${(i.apellidos||``)[0]||``}`.toUpperCase();e(`#smwAvatar`).text(s),e(`#smwSaludo`).html(`${n()} <strong>${a}</strong>`),i.descripcion?e(`#smwRole`).html(`<i class="fas fa-user-tag"></i> ${i.descripcion}`):e(`#smwRole`).html(`<i class="fas fa-car-side"></i> Colaborador — Reto del Mes`),e(`#smwMonthSelector`).val(f),g(i.usuario,f),e(document).off(`change.smile_dash`).on(`change.smile_dash`,`#smwMonthSelector`,function(){f=e(this).val(),g(i.usuario,f)}),e(`.wi_fadeUp`).addClass(`visible wi_visible`),console.log(`🏜️ ${t} Smile Dashboard cargado`),window.__WIREADY__=!0},h=()=>{e(document).off(`change.smile_dash`)};async function g(t,n){try{e(`#kpiTours`).html(`<span class="smw_sk_kpi"></span>`),e(`#kpiPuntos`).html(`<span class="smw_sk_kpi"></span>`),e(`#kpiPos`).html(`<span class="smw_sk_kpi"></span>`);let r=`kpiSmile_${t}_${n}`,o=i(r);if(o)return _(o);let[u,f]=n.split(`-`).map(Number),p=await s(c(l,`registrosdb`)),m=0,h=0;p.docs.forEach(e=>{let n=e.data();if(n.vendedor!==t)return;let r=n.fechaTour,i,a;if(typeof r==`string`)[i,a]=r.split(`-`).map(Number);else if(r?.toDate){let e=r.toDate();i=e.getFullYear(),a=e.getMonth()+1}else return;i===u&&a===f&&(m+=parseInt(n.qventa)||1,h+=parseInt(n.puntos)||0)});let g=(await d(n)).findIndex(e=>e.usuario===t),v=g===-1?`—`:`#${g+1}`,y={tours:m,puntos:h,posicion:v};a(r,y,5),_(y)}catch(e){console.warn(`KPI error:`,e),_({tours:`?`,puntos:`?`,posicion:`?`})}}function _({tours:t,puntos:n,posicion:r}){e(`#kpiTours`).text(t),e(`#kpiPuntos`).text(n),e(`#kpiPos`).text(r)}function v(){let t=new Date,n=t.getFullYear(),r=t.getMonth(),i=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];return e.map(Array(7),(e,t)=>{let a=t-3,o=r+a,s=n+Math.floor(o/12),c=(o%12+12)%12;return`<option value="${`${s}-${String(c+1).padStart(2,`0`)}`}"${a===0?` selected`:``}>${i[c]} ${s}</option>`}).join(``)}export{h as cleanup,m as init,p as render};