import{$ as n,C as E}from"./vendor-2D3jvCpt.js";import{db as C}from"./firebase-BDkoVxkB.js";import{i as S,c as T,r as F,D as A}from"./firebase-BwR1K4LJ.js";import{y as I,s as R,j as x,i as O,S as P,u as V}from"./index-BMe1Kusn.js";let m=null;const M=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`},z=()=>`
  <div class="smw_gestor_view">
    
    <!-- HEADER HERO PREMIUM -->
    <header class="smw_g_hero wi_fadeUp">
      <div class="smw_g_hero_bg"></div>
      <div class="smw_g_hero_content">
        <div class="smw_g_profile">
          <div class="smw_g_avatar" id="smwGestorAvatar"></div>
          <div class="smw_g_saludo">
            <h1 id="smwGestorSaludo">Cargando...</h1>
            <p><i class="fas fa-crown"></i> Dirección General — Huacachina</p>
          </div>
        </div>
        <div class="smw_g_date">
          <i class="fas fa-calendar-alt"></i> <span id="smwGestorMesLabel">Mes Actual</span>
        </div>
      </div>
    </header>

    <!-- KPIs SUPERIORES -->
    <section class="smw_g_kpis wi_fadeUp" style="animation-delay: 0.1s">
      <div class="smw_g_kpi_card">
        <div class="smw_g_kpi_ico" style="--c: var(--Dulce)"><i class="fas fa-chart-line"></i></div>
        <div class="smw_g_kpi_data">
          <span>Ingresos Brutos</span>
          <strong id="kpiIngresos">S/ 0.00</strong>
        </div>
      </div>
      <div class="smw_g_kpi_card">
        <div class="smw_g_kpi_ico" style="--c: var(--Paz)"><i class="fas fa-piggy-bank"></i></div>
        <div class="smw_g_kpi_data">
          <span>Ganancia Neta</span>
          <strong id="kpiGanancias">S/ 0.00</strong>
        </div>
      </div>
      <div class="smw_g_kpi_card">
        <div class="smw_g_kpi_ico" style="--c: #F59E0B"><i class="fas fa-file-invoice-dollar"></i></div>
        <div class="smw_g_kpi_data">
          <span>Por Cobrar</span>
          <strong id="kpiDeuda">S/ 0.00</strong>
        </div>
      </div>
      <div class="smw_g_kpi_card">
        <div class="smw_g_kpi_ico" style="--c: var(--Cielo)"><i class="fas fa-ticket-alt"></i></div>
        <div class="smw_g_kpi_data">
          <span>Ventas Totales</span>
          <strong id="kpiVentas">0</strong>
        </div>
      </div>
    </section>

    <!-- BLOQUE CENTRAL: GRÁFICO + TOP -->
    <div class="smw_g_grid wi_fadeUp" style="animation-delay: 0.2s">
      
      <!-- Panel de Gráfico -->
      <div class="smw_g_panel smw_g_panel_chart">
        <div class="smw_g_panel_head">
          <h3><i class="fas fa-chart-area"></i> Flujo de Ingresos (S/)</h3>
          <span class="smw_badge_dulce">Mes Actual</span>
        </div>
        <div class="smw_g_chart_wrap">
          <canvas id="gestorChart"></canvas>
        </div>
      </div>

      <!-- Panel Lateral (Rankings) -->
      <div class="smw_g_side">
        <!-- Top Vendedores -->
        <div class="smw_g_panel">
          <div class="smw_g_panel_head">
            <h3><i class="fas fa-medal"></i> Top Vendedores</h3>
          </div>
          <div class="smw_g_list" id="smwGTopVendedores">
            <!-- Skeletons -->
            <div class="smw_g_sk_list"></div>
            <div class="smw_g_sk_list"></div>
            <div class="smw_g_sk_list"></div>
          </div>
        </div>

        <!-- Top Tours -->
        <div class="smw_g_panel">
          <div class="smw_g_panel_head">
            <h3><i class="fas fa-route"></i> Top Tours</h3>
          </div>
          <div class="smw_g_tours" id="smwGTopTours">
            <!-- Skeletons -->
            <div class="smw_g_sk_tour"></div>
            <div class="smw_g_sk_tour"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- QUICK ACTIONS -->
    <section class="smw_g_actions wi_fadeUp" style="animation-delay: 0.3s">
      <a href="/rrhh" class="smw_g_action_btn" style="--c: var(--Mora)">
        <i class="fas fa-users-gear"></i>
        <span>Personal (RRHH)</span>
      </a>
      <a href="/precios" class="smw_g_action_btn" style="--c: var(--Oro)">
        <i class="fas fa-tags"></i>
        <span>Precios Catálogo</span>
      </a>
      <a href="/historial" class="smw_g_action_btn" style="--c: var(--Cielo)">
        <i class="fas fa-clipboard-list"></i>
        <span>Historial General</span>
      </a>
      <a href="/ranking" class="smw_g_action_btn" style="--c: #FF5C69">
        <i class="fas fa-trophy"></i>
        <span>Ranking del Mes</span>
      </a>
    </section>

  </div>
`,K=async()=>{const e=I.user;if(!e)return setTimeout(()=>R.navigate("/login"),100);const r=x("wiSmile"),a=O(r?.nombre||e.displayName||"Gerente"),t=a.substring(0,2).toUpperCase();n("#smwGestorAvatar").text(t),n("#smwGestorSaludo").html(`${P()} <strong>${a}</strong>`);const o=M();n("#smwGestorMesLabel").text(o),n(".wi_fadeUp").addClass("visible wi_visible"),U(o),window.__WIREADY__=!0},Y=()=>{m&&(m.destroy(),m=null)};async function U(e){try{const r=`gestor_data_${e}`,a=x(r);let t=[],o=[];if(a)t=a.ventas,o=a.empleados;else{const[l,_]=await Promise.all([S(T(C,"registrosdb")),S(F(T(C,"smiles"),A("participa","==","si")))]),[v,f]=e.split("-").map(Number);l.forEach(p=>{const b=p.data(),d=b.fechaTour;let u,w;if(typeof d=="string")[u,w]=d.split("-").map(Number);else if(d?.toDate){const h=d.toDate();u=h.getFullYear(),w=h.getMonth()+1}else return;u===v&&w===f&&t.push(b)}),o=_.docs.map(p=>p.data()),V(r,{ventas:t,empleados:o},5)}B(t,o)}catch(r){console.error("Error cargando dashboard:",r)}}function B(e,r){let a=0,t=0,o=0,l=e.length;const _={},v={},f={};e.forEach(s=>{const i=parseFloat(s.importeTotal)||0,y=parseFloat(s.ganancia)||0;a+=i,t+=y,s.estadoPago==="cobrar"&&(o+=i);let c="01";const g=s.fechaTour;typeof g=="string"?c=g.split("-")[2]?.substring(0,2)||"01":g?.toDate&&(c=String(g.toDate().getDate()).padStart(2,"0")),_[c]=(_[c]||0)+i,v[s.vendedor]=(v[s.vendedor]||0)+i;const k=s.tipoTour||"Otro";f[k]=(f[k]||0)+1}),n("#kpiIngresos").text(`S/ ${a.toFixed(2)}`),n("#kpiGanancias").text(`S/ ${t.toFixed(2)}`),n("#kpiDeuda").text(`S/ ${o.toFixed(2)}`),n("#kpiVentas").text(l);const p=Object.entries(v).sort((s,i)=>i[1]-s[1]).slice(0,3);let b=p.length?p.map(([s,i],y)=>{const c=r.find(G=>G.usuario===s),g=c?.nombre||s,k=c?.imagen||c?.avatar||"/retodelmes/smile.avif",D=a>0?(i/a*100).toFixed(1):0;return`
      <div class="smw_g_top_user">
        <div class="smw_g_tu_pos">${y+1}</div>
        <img src="${k}" class="smw_g_tu_img" onerror="this.src='/retodelmes/smile.avif'">
        <div class="smw_g_tu_info">
          <strong>${g}</strong>
          <span>S/ ${i.toFixed(2)} (${D}%)</span>
        </div>
      </div>
    `}).join(""):'<p style="color:var(--tx3);font-size:13px;padding:10px">Aún no hay ventas</p>';n("#smwGTopVendedores").html(b);const d=Object.entries(f).sort((s,i)=>i[1]-s[1]).slice(0,3);let u=d[0]?.[1]||1,w=d.length?d.map(([s,i])=>{const y=i/u*100;return`
      <div class="smw_g_top_tour">
        <div class="smw_g_tt_head">
          <span>${s}</span>
          <strong>${i} pax</strong>
        </div>
        <div class="smw_g_tt_bar_wrap">
          <div class="smw_g_tt_bar" style="width: ${y}%"></div>
        </div>
      </div>
    `}).join(""):'<p style="color:var(--tx3);font-size:13px;padding:10px">Aún no hay tours</p>';n("#smwGTopTours").html(w);const h=Object.keys(_).sort(),$=h.map(s=>_[s]);j(h,$)}function j(e,r){const a=document.getElementById("gestorChart");if(!a)return;m&&m.destroy();const t=getComputedStyle(document.documentElement).getPropertyValue("--Dulce").trim()||"#FF5C69",o=`color-mix(in srgb, ${t} 20%, transparent)`;m=new E(a,{type:"line",data:{labels:e.map(l=>`Día ${l}`),datasets:[{label:"Ingresos (S/)",data:r,borderColor:t,backgroundColor:o,borderWidth:3,tension:.4,fill:!0,pointBackgroundColor:"#fff",pointBorderColor:t,pointBorderWidth:2,pointRadius:4,pointHoverRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#fff",titleColor:"#000",bodyColor:"#666",borderColor:t,borderWidth:1,padding:10,displayColors:!1,callbacks:{label:function(l){return"S/ "+l.parsed.y.toFixed(2)}}}},scales:{x:{grid:{display:!1},ticks:{color:"#999",font:{family:"Outfit"}}},y:{grid:{color:"rgba(0,0,0,0.04)",borderDash:[5,5]},ticks:{color:"#999",font:{family:"Outfit"},callback:l=>"S/ "+l},beginAtZero:!0}}}})}export{Y as cleanup,K as init,z as render};
