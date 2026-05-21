import{$ as i}from"./vendor-2D3jvCpt.js";import{db as y}from"./firebase-BDkoVxkB.js";import{i as M,c as S}from"./firebase-BwR1K4LJ.js";import{y as F,s as A,i as q,S as x,d as C,j as P,u as R}from"./index-BMe1Kusn.js";import{getMesActual as D,obtenerRankingMes as T}from"./zsmile-IG3War6X.js";let p=D();const j=()=>`
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
              ${E()}
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
        ${[{page:"registrar",ico:"fa-plus-circle",col:"#FF5C69",tit:"Registrar Venta",sub:"Nueva venta de tour"},{page:"ranking",ico:"fa-trophy",col:"#FFDA34",tit:"Ver Ranking",sub:"Puntos del mes"},{page:"historial",ico:"fa-clipboard-list",col:"#0EBEFF",tit:"Historial",sub:"Mis ventas registradas"},{page:"tours",ico:"fa-route",col:"#29C72E",tit:"Catálogo Tours",sub:"Lista de tours and precios"},{page:"avisar",ico:"fa-bell",col:"#7000FF",tit:"Anuncios",sub:"Noticias del equipo"}].map((a,e)=>`
          <a href="/${a.page}" class="smw_qcard nv_item" data-page="${a.page}" style="--qc:${a.col}; animation-delay: ${e*.05}s">
            <div class="smw_qcard_ico" style="--qc: ${a.col}"><i class="fas ${a.ico}"></i></div>
            <div class="smw_qcard_txt">
              <strong>${a.tit}</strong>
              <span>${a.sub}</span>
            </div>
            <i class="fas fa-arrow-right smw_qcard_arr"></i>
          </a>
        `).join("")}
      </nav>
    </div>
  `,Y=async()=>{const s=F.user;if(!s)return setTimeout(()=>A.navigate("/login"),100);const a=q(s.nombre||s.usuario||""),e=`${(s.nombre||"?")[0]}${(s.apellidos||"")[0]||""}`.toUpperCase();i("#smwAvatar").text(e),i("#smwSaludo").html(`${x()} <strong>${a}</strong>`),s.descripcion?i("#smwRole").html(`<i class="fas fa-user-tag"></i> ${s.descripcion}`):i("#smwRole").html('<i class="fas fa-car-side"></i> Colaborador — Reto del Mes'),i("#smwMonthSelector").val(p),b(s.usuario,p),i(document).off("change.smile_dash").on("change.smile_dash","#smwMonthSelector",function(){p=i(this).val(),b(s.usuario,p)}),i(".wi_fadeUp").addClass("visible wi_visible"),console.log(`🏜️ ${C} Smile Dashboard cargado`),window.__WIREADY__=!0},J=()=>{i(document).off("change.smile_dash")};async function b(s,a){try{i("#kpiTours").html('<span class="smw_sk_kpi"></span>'),i("#kpiPuntos").html('<span class="smw_sk_kpi"></span>'),i("#kpiPos").html('<span class="smw_sk_kpi"></span>');const e=`kpiSmile_${s}_${a}`,n=P(e);if(n)return f(n);const[g,d]=a.split("-").map(Number),r=await M(S(y,"registrosdb"));let t=0,o=0;r.docs.forEach(u=>{const c=u.data();if(c.vendedor!==s)return;const l=c.fechaTour;let v,w;if(typeof l=="string")[v,w]=l.split("-").map(Number);else if(l?.toDate){const k=l.toDate();v=k.getFullYear(),w=k.getMonth()+1}else return;v===g&&w===d&&(t+=parseInt(c.qventa)||1,o+=parseInt(c.puntos)||0)});const _=(await T(a)).findIndex(u=>u.usuario===s),$=_===-1?"—":`#${_+1}`,h={tours:t,puntos:o,posicion:$};R(e,h,5),f(h)}catch(e){console.warn("KPI error:",e),f({tours:"?",puntos:"?",posicion:"?"})}}function f({tours:s,puntos:a,posicion:e}){i("#kpiTours").text(s),i("#kpiPuntos").text(a),i("#kpiPos").text(e)}function E(){const s=new Date,a=s.getFullYear(),e=s.getMonth(),n=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];return i.map(new Array(7),(g,d)=>{const r=d-3,t=e+r,o=a+Math.floor(t/12),m=(t%12+12)%12;return`<option value="${`${o}-${String(m+1).padStart(2,"0")}`}"${r===0?" selected":""}>${n[m]} ${o}</option>`}).join("")}export{J as cleanup,Y as init,j as render};
