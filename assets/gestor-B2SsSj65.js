import{r as e,t}from"./vendor-CZ6bxb2j.js";import{_ as n,a as r,d as i,m as a,u as o}from"./widev-D5ebok9f.js";import{n as s}from"./index-BqCX0awG.js";import{O as c,T as l,_ as u,x as d}from"./firebase-COMEVlQu.js";import{n as f}from"./firebase-srJqeJFD.js";var p=null,m=()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}`},h=()=>`
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
`,g=async()=>{let t=n.user;if(!t)return setTimeout(()=>s.navigate(`/login`),100);let a=o(i(`wiSmile`)?.nombre||t.displayName||`Gerente`),c=a.substring(0,2).toUpperCase();e(`#smwGestorAvatar`).text(c),e(`#smwGestorSaludo`).html(`${r()} <strong>${a}</strong>`);let l=m();e(`#smwGestorMesLabel`).text(l),e(`.wi_fadeUp`).addClass(`visible wi_visible`),v(l),window.__WIREADY__=!0},_=()=>{p&&=(p.destroy(),null)};async function v(e){try{let t=`gestor_data_${e}`,n=i(t),r=[],o=[];if(n)r=n.ventas,o=n.empleados;else{let[n,i]=await Promise.all([u(c(f,`registrosdb`)),u(d(c(f,`smiles`),l(`participa`,`==`,`si`)))]),[s,p]=e.split(`-`).map(Number);n.forEach(e=>{let t=e.data(),n=t.fechaTour,i,a;if(typeof n==`string`)[i,a]=n.split(`-`).map(Number);else if(n?.toDate){let e=n.toDate();i=e.getFullYear(),a=e.getMonth()+1}else return;i===s&&a===p&&r.push(t)}),o=i.docs.map(e=>e.data()),a(t,{ventas:r,empleados:o},5)}y(r,o)}catch(e){console.error(`Error cargando dashboard:`,e)}}function y(t,n){let r=0,i=0,a=0,o=t.length,s={},c={},l={};t.forEach(e=>{let t=parseFloat(e.importeTotal)||0,n=parseFloat(e.ganancia)||0;r+=t,i+=n,e.estadoPago===`cobrar`&&(a+=t),!(e.estadoPago===`pagado`||e.estadoPago===`pagado2`)&&e.pagoOperadorSiNo===`no`&&(a+=parseFloat(e.PagoOperador)||0);let o=`01`,u=e.fechaTour;typeof u==`string`?o=u.split(`-`)[2]?.substring(0,2)||`01`:u?.toDate&&(o=String(u.toDate().getDate()).padStart(2,`0`)),s[o]=(s[o]||0)+t,c[e.vendedor]=(c[e.vendedor]||0)+t;let d=e.tipoTour||`Otro`;l[d]=(l[d]||0)+1}),e(`#kpiIngresos`).text(`S/ ${r.toFixed(2)}`),e(`#kpiGanancias`).text(`S/ ${i.toFixed(2)}`),e(`#kpiDeuda`).text(`S/ ${a.toFixed(2)}`),e(`#kpiVentas`).text(o);let u=Object.entries(c).sort((e,t)=>t[1]-e[1]).slice(0,3),d=u.length?u.map(([e,t],i)=>{let a=n.find(t=>t.usuario===e),o=a?.nombre||e,s=a?.imagen||a?.avatar||`/smile.avif`,c=r>0?(t/r*100).toFixed(1):0;return`
      <div class="smw_g_top_user">
        <div class="smw_g_tu_pos">${i+1}</div>
        <img src="${s}" class="smw_g_tu_img" onerror="this.src='/smile.avif'">
        <div class="smw_g_tu_info">
          <strong>${o}</strong>
          <span>S/ ${t.toFixed(2)} (${c}%)</span>
        </div>
      </div>
    `}).join(``):`<p style="color:var(--tx3);font-size:13px;padding:10px">Aún no hay ventas</p>`;e(`#smwGTopVendedores`).html(d);let f=Object.entries(l).sort((e,t)=>t[1]-e[1]).slice(0,3),p=f[0]?.[1]||1,m=f.length?f.map(([e,t])=>`
      <div class="smw_g_top_tour">
        <div class="smw_g_tt_head">
          <span>${e}</span>
          <strong>${t} pax</strong>
        </div>
        <div class="smw_g_tt_bar_wrap">
          <div class="smw_g_tt_bar" style="width: ${t/p*100}%"></div>
        </div>
      </div>
    `).join(``):`<p style="color:var(--tx3);font-size:13px;padding:10px">Aún no hay tours</p>`;e(`#smwGTopTours`).html(m);let h=Object.keys(s).sort();b(h,h.map(e=>s[e]))}function b(e,n){let r=document.getElementById(`gestorChart`);if(!r)return;p&&p.destroy();let i=getComputedStyle(document.documentElement).getPropertyValue(`--Dulce`).trim()||`#FF5C69`,a=`color-mix(in srgb, ${i} 20%, transparent)`;p=new t(r,{type:`line`,data:{labels:e.map(e=>`Día ${e}`),datasets:[{label:`Ingresos (S/)`,data:n,borderColor:i,backgroundColor:a,borderWidth:3,tension:.4,fill:!0,pointBackgroundColor:`#fff`,pointBorderColor:i,pointBorderWidth:2,pointRadius:4,pointHoverRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:`#fff`,titleColor:`#000`,bodyColor:`#666`,borderColor:i,borderWidth:1,padding:10,displayColors:!1,callbacks:{label:function(e){return`S/ `+e.parsed.y.toFixed(2)}}}},scales:{x:{grid:{display:!1},ticks:{color:`#999`,font:{family:`Outfit`}}},y:{grid:{color:`rgba(0,0,0,0.04)`,borderDash:[5,5]},ticks:{color:`#999`,font:{family:`Outfit`},callback:e=>`S/ `+e},beginAtZero:!0}}}})}export{_ as cleanup,g as init,h as render};