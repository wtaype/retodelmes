const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/admin-FWOua3Ty.css","assets/mifcm-DMGZebNt.css","assets/permisos-DocH6Ucx.css","assets/sistema-C3OQ-N0f.css","assets/usuarios-BMnNRUe5.css","assets/gestor-C2mWujYN.css","assets/precios-RaoK6dN1.css","assets/trabajador_nuevo-DAK_KIvY.css","assets/rrhh-Dox8AORR.css","assets/agregar-DOjTjWfU.css","assets/avisar-B5ddB24w.css","assets/chat-CZ6DaJJ8.css","assets/crear-DdIpSs_P.css","assets/historial-C7mrWGnl.css","assets/mensajes-MIv6zaMF.css","assets/metricas-C7zPbHpQ.css","assets/notas-dOX0449r.css","assets/perfil-BZqPOASC.css","assets/ranking-DMfKxd2p.css","assets/registrar-NIzfPw2j.css","assets/smile-BWbZimzl.css","assets/tours-BXLv0e8Y.css","assets/win-CFprZW1q.css","assets/word-vV8fNusV.css","assets/verificar-mialvYKy.css","assets/acerca-rEkuWwpI.css","assets/contacto-C-QNnnsD.css","assets/terminos-CEyXQAUt.css","assets/descubre-D_yf6JJ_.css","assets/blog-Pvtd5AbW.css","assets/nuevo-BJdQZpYp.css","assets/post-CaVCZ_Tu.css","assets/chatwil-R1-t4gNv.css","assets/emojis-GLPEIk5R.css","assets/login-CmMlLPC3.css","assets/precios-D9xczg9-.css","assets/registrado-DMFE_p3X.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{r as t}from"./vendor-CZ6bxb2j.js";import{c as n,n as r,t as i}from"./wii-BvK6d7hI.js";import{E as a,S as o,T as s,a as c,b as l,f as u,i as d,k as f,x as p}from"./widev-BkR2Na_W.js";var m=e({cleanup:()=>w,init:()=>C,render:()=>S}),h=[`Guías en las Dunas 🏎️`,`Expertos en Sandboard 🏂`,`Promotores de la Ruta del Pisco 🍷`,`Pilotos de Parapente y Aventuras 🪂`,`Colaboradores estrella 🏆`],g=[{valor:100,label:`Compromiso`,sufijo:`%`},{valor:10,label:`Experiencia`,sufijo:`/10`}],_=[{id:`ranking`,icon:`fa-trophy`,color:`#FFD700`,nombre:`Ranking en Vivo`,desc:`Posiciones actualizadas al instante`,items:[{icon:`fa-star`,name:`Líderes destacados`,desc:`Sonia & Jackson a la cabeza`},{icon:`fa-medal`,name:`Medallas de Honor`,desc:`Incentivos por desempeño`},{icon:`fa-arrow-trend-up`,name:`Suma mensual`,desc:`Puntos acumulados al segundo`}]},{id:`buggies`,icon:`fa-car-side`,color:`#FF8F00`,nombre:`Buggies & Sandboard`,desc:`Aventura extrema en las dunas`,items:[{icon:`fa-clock`,name:`Buggies 1h / 2h`,desc:`Paseo compartido o privado`},{icon:`fa-person-snowboarding`,name:`Sandboarding Pro`,desc:`Tablas básicas y profesionales`},{icon:`fa-compass`,name:`Seguridad Total`,desc:`Pilotos con licencia y experiencia`}]},{id:`bodegas`,icon:`fa-wine-glass-alt`,color:`#D32F2F`,nombre:`Ruta del Pisco`,desc:`Catas y tradición vitivinícola`,items:[{icon:`fa-wine-bottle`,name:`Tours de Bodegas`,desc:`Visitas regulares y privadas`},{icon:`fa-city`,name:`City Tour Ica`,desc:`Plaza de Armas y brujas de Cachiche`},{icon:`fa-map-pin`,name:`Guía Jackson`,desc:`Guiado con cata de vinos y piscos`}]},{id:`regionales`,icon:`fa-plane`,color:`#0288D1`,nombre:`Tours Regionales`,desc:`Excursiones emblemáticas en Ica`,items:[{icon:`fa-anchor`,name:`Tour de Paracas`,desc:`Islas Ballestas y Reserva Nacional`},{icon:`fa-eye`,name:`Sobrevuelo Líneas`,desc:`Líneas de Nazca desde el aire`},{icon:`fa-mountain`,name:`Cañón de los Perdidos`,desc:`Trekking en el cañón desértico`}]},{id:`adicionales`,icon:`fa-motorcycle`,color:`#7B1FA2`,nombre:`Cuatrimotos & Más`,desc:`Paseos off-road y aventura`,items:[{icon:`fa-wind`,name:`Vuelo Parapente`,desc:`Vuela sobre el Oasis de América`},{icon:`fa-truck-monster`,name:`Ruta en Polaris RZR`,desc:`Vehículos premium todoterreno`},{icon:`fa-route`,name:`Traslados Ica`,desc:`Logística y movilidad segura`}]},{id:`comisiones`,icon:`fa-award`,color:`#388E3C`,nombre:`Premios y Comisiones`,desc:`Recompensas a tu esfuerzo diario`,items:[{icon:`fa-percent`,name:`Comisiones Directas`,desc:`Ganancias por cada tour vendido`},{icon:`fa-chart-pie`,name:`Metas del Mes`,desc:`Bonos extras por llegar al objetivo`},{icon:`fa-gift`,name:`Premios Especiales`,desc:`Incentivos al Colaborador Estrella`}]}],v=[{icon:`fa-mobile-screen-button`,titulo:`Ideal para Celulares`,desc:`Diseñado para registrar tus ventas de forma ultrarrápida directamente desde el desierto de Huacachina o en ruta sin perder tiempo.`},{icon:`fa-face-smile`,titulo:`Motivación y Premios`,desc:`Gana comisiones y puntos por cada tour vendido. Compite de forma divertida en el ranking oficial para llevarte el premio del mes.`},{icon:`fa-circle-check`,titulo:`Transparencia Total`,desc:`Visualiza al instante tus ventas confirmadas en tu cuenta, sin errores de cálculo ni confusiones al fin de mes.`}],y=e=>`
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${e.valor}" data-sufijo="${e.sufijo}">0</div>
    <div class="ini_stat_l">${e.label}</div>
  </div>`,b=e=>`
  <div class="ini_cat_card" style="--cc:${e.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="fas ${e.icon}"></i></div>
      <div class="ini_cat_info"><h3>${e.nombre}</h3><p>${e.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${e.items.map(e=>`
        <li><div class="ini_tool_a">
          <i class="fas ${e.icon}"></i>
          <div><strong>${e.name}</strong><span>${e.desc}</span></div>
          <i class="fas fa-check ini_ext" style="color:var(--success)"></i>
        </div></li>`).join(``)}
    </ul>
  </div>`,x=(e,t)=>`
  <div class="ini_about_card" style="--d:${t*.15}s">
    <div class="ini_card_ico"><i class="fas ${e.icon}"></i></div>
    <h3>${e.titulo}</h3>
    <p>${e.desc}</p>
  </div>`,S=()=>`
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${c()}</span><span class="ini_wave">👋</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        Reto de Ventas <span class="ini_grad">Huacachina</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${h.map((e,t)=>`<span class="ini_role${t===0?` active`:``}">${e}</span>`).join(``)}
      </div>

      <p class="ini_sub" style="--d:.54s">
        Te amooo, acumula comisiones y compite de forma sana en el ranking oficial de guías y promotores turísticos. ¡Claudia y Jackson lideran el mes!
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${g.map(y).join(``)}
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
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${s(`Buggies`)}><i class="fas fa-car-side"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${s(`Sandboard`)}><i class="fas fa-person-snowboarding"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${s(`Bodegas`)}><i class="fas fa-wine-glass-alt"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${s(`Parapente`)}><i class="fas fa-parachute-box"></i></div>
    </div>
  </section>

  <!-- ===== FUNCIONALIDADES ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Los <span class="ini_grad">6 Pilares</span> del Reto</h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">Herramientas diseñadas para potenciar tu desempeño e ingresos</p>
    </div>
    <div class="ini_cats_grid">${_.map(b).join(``)}</div>
  </section>

  <!-- ===== ¿POR QUÉ? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Qué beneficios tenemos al usar <span class="ini_grad">${i}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${v.map(x).join(``)}</div>
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
      <p class="ini_cta_autor" style="margin-top:2vh;">Creado con ❤️ por <a href="${n}" target="_blank" rel="noopener">${r}</a> · v33 © ${f()}</p>
    </div>
  </section>

</div>`,C=()=>{let e=0,n=t(`.ini_role`);setInterval(()=>{n.removeClass(`active`),n.eq(e=(e+1)%n.length).addClass(`active`)},2800),a(`#in_stats`,()=>{t(`.ini_stat_n`).each(function(){let e=t(this),n=+e.data(`target`),r=e.data(`sufijo`)||``,i=0,a=setInterval(()=>{i+=n/50,i>=n?(e.text(n+r),clearInterval(a)):e.text(Math.floor(i))},28)})}),a(`.ini_cat_card`,null,{anim:`wi_fadeUp`,stagger:80}),a(`.ini_about_card`,null,{anim:`wi_fadeUp`,stagger:140}),console.log(`🚀 ${i} v33 · Inicio OK`)},w=()=>{},T=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),E=function(e){return`/`+e},D={},O=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=E(t,n),t in D)return;D[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:T,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},k=e({NAV:()=>j,RUTAS:()=>M,rutas:()=>F}),A=[],j={todos:{nvleft:[{href:`/`,page:`inicio`,ico:`fa-house`,txt:`Bienvenido`},...A],nvright:[{isBtn:!0,cls:`bt_auth login`,ico:`fa-sign-in-alt`,txt:`Iniciar sessión`}]},smile:{nvleft:[{href:`/registrar`,page:`registrar`,ico:`fa-plus-circle`,txt:`Registrar Ventas`},{href:`/historial`,page:`historial`,ico:`fa-clipboard-list`,txt:`Historial Ventas`},{href:`/ranking`,page:`ranking`,ico:`fa-trophy`,txt:`Ranking`},{href:`/tours`,page:`tours`,ico:`fa-route`,txt:`Tours `},{href:`/chat`,page:`chat`,ico:`fa-comments`,txt:`Chat Grupal`},...A],nvright:[{isPerfil:!0},{isSalir:!0}]},gestor:{nvleft:[{href:`/gestor`,page:`gestor`,ico:`fa-house`,txt:`Dashboard`},{href:`/registrar`,page:`registrar`,ico:`fa-plus-circle`,txt:`Registrar Ventas`},{href:`/ranking`,page:`ranking`,ico:`fa-trophy`,txt:`Ranking`},{href:`/historial`,page:`historial`,ico:`fa-clipboard-list`,txt:`Historial Ventas`},{href:`/tours`,page:`tours`,ico:`fa-route`,txt:`Tours`},{href:`/precios`,page:`precios`,ico:`fa-tags`,txt:`Gestionar Trours`},...A],nvright:[{href:`/chat`,page:`chat`,ico:`fa-comments`,txt:`Chat Grupal`},{href:`/rrhh`,page:`rrhh`,ico:`fa-users-gear`,txt:`Trabajadores`},{isPerfil:!0},{isSalir:!0}]},admin:{nvleft:[{href:`/admin`,page:`admin`,ico:`fa-globe`,txt:`Plataforma`},{href:`/usuarios`,page:`usuarios`,ico:`fa-users`,txt:`Usuarios`},{href:`/permisos`,page:`permisos`,ico:`fa-lock`,txt:`Permisos`},{href:`/sistema`,page:`sistema`,ico:`fa-cogs`,txt:`Sistema`},{href:`/chat`,page:`chat`,ico:`fa-comments`,txt:`Chat Grupal`}],nvright:[{href:`/mifcm`,page:`mifcm`,ico:`fa-bell`,txt:`Mi FCM`},{href:`/word`,page:`word`,ico:`fa-rocket`,txt:`Planificar`},{href:`/nuevo`,page:`nuevo`,ico:`fa-plus`,txt:`Post`},{href:`/notas`,page:`notas`,ico:`fa-comments`,txt:`Book`},{isPerfil:!0},{isSalir:!0}]},verificar:{nvleft:[],nvright:[]}},M=[{path:`/inicio`,area:`web/`},{path:`/login`,area:`web/`},{path:`/emojis`,area:`web/`},{path:`/registrado`,area:`web/`},{path:`/blog`,area:`web/blog/`},{path:`/post`,area:`web/blog/`},{path:`/chatwil`,area:`web/chatwil/`},{path:`/acerca`,area:`web/acerca/`},{path:`/descubre`,area:`web/acerca/`},{path:`/terminos`,area:`web/acerca/`},{path:`/cookies`,area:`web/acerca/`},{path:`/privacidad`,area:`web/acerca/`},{path:`/feedback`,area:`web/acerca/`},{path:`/contacto`,area:`web/acerca/`},{path:`/agregar`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/smile`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/notas`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/perfil`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/mensajes`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/word`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/nuevo`,area:`web/blog/`,roles:[`smile`,`gestor`,`admin`]},{path:`/registrar`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/ranking`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/historial`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/tours`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/avisar`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/chat`,area:`smile/`,roles:[`smile`,`gestor`,`admin`]},{path:`/rrhh`,area:`gestor/`,roles:[`gestor`,`admin`]},{path:`/precios`,area:`gestor/`,roles:[`gestor`,`admin`]},{path:`/trabajador_nuevo`,area:`gestor/`,roles:null},{path:`/gestor`,area:`gestor/`,roles:[`gestor`,`admin`]},{path:`/admin`,area:`admin/`,roles:[`admin`]},{path:`/usuarios`,area:`admin/`,roles:[`admin`]},{path:`/permisos`,area:`admin/`,roles:[`admin`]},{path:`/sistema`,area:`admin/`,roles:[`admin`]},{path:`/mifcm`,area:`admin/`,roles:[`admin`]},{path:`/verificar`,area:`verificar/`,roles:[`admin`]}],N=Object.assign({"./admin/admin.js":()=>O(()=>import(`./admin-CDluE3YI.js`),__vite__mapDeps([0])),"./admin/fcm.js":()=>O(()=>import(`./fcm-BvRk9kiK.js`),[]),"./admin/mifcm.js":()=>O(()=>import(`./mifcm-BIe5MWgF.js`),__vite__mapDeps([1])),"./admin/permisos.js":()=>O(()=>import(`./permisos-CrEIs-sW.js`),__vite__mapDeps([2])),"./admin/sistema.js":()=>O(()=>import(`./sistema-4obkF4Kq.js`),__vite__mapDeps([3])),"./admin/usuarios.js":()=>O(()=>import(`./usuarios-iRN4ggUm.js`),__vite__mapDeps([4])),"./gestor/gestor.js":()=>O(()=>import(`./gestor-C8D8WfmZ.js`),__vite__mapDeps([5])),"./gestor/precios.js":()=>O(()=>import(`./precios-Czayh1Zx.js`),__vite__mapDeps([6])),"./gestor/rrhh.js":()=>O(()=>import(`./rrhh-DHOWfDUU.js`),__vite__mapDeps([7,8])),"./gestor/trabajador_nuevo.js":()=>O(()=>import(`./trabajador_nuevo-CzSenIFf.js`),__vite__mapDeps([7])),"./gestor/trabajadores.js":()=>O(()=>import(`./trabajadores-BvRk9kiK.js`),[]),"./smile/agregar.js":()=>O(()=>import(`./agregar-BvTqCL15.js`),__vite__mapDeps([9])),"./smile/avisar.js":()=>O(()=>import(`./avisar-v31ZsG-Y.js`),__vite__mapDeps([10])),"./smile/chat.js":()=>O(()=>import(`./chat-UZfS8JJj.js`),__vite__mapDeps([11])),"./smile/crear.js":()=>O(()=>import(`./crear-BfW3NfkQ.js`),__vite__mapDeps([12])),"./smile/historial.js":()=>O(()=>import(`./historial-BBRMoynD.js`),__vite__mapDeps([13])),"./smile/mensajes.js":()=>O(()=>import(`./mensajes-B5nhCeiY.js`),__vite__mapDeps([14])),"./smile/metricas.js":()=>O(()=>import(`./metricas-UFVivWsk.js`),__vite__mapDeps([15])),"./smile/notas.js":()=>O(()=>import(`./notas-BN07X2Wk.js`),__vite__mapDeps([16])),"./smile/perfil.js":()=>O(()=>import(`./perfil-BVCqnR2t.js`),__vite__mapDeps([17])),"./smile/ranking.js":()=>O(()=>import(`./ranking-DfADLXZr.js`),__vite__mapDeps([18])),"./smile/registrar.js":()=>O(()=>import(`./registrar-NdR5P8L1.js`),__vite__mapDeps([19])),"./smile/smile.js":()=>O(()=>import(`./smile-BH7G84zb.js`),__vite__mapDeps([20])),"./smile/tours.js":()=>O(()=>import(`./tours-16H11jrj.js`),__vite__mapDeps([21])),"./smile/win.js":()=>O(()=>import(`./win-O3_HxLw5.js`),__vite__mapDeps([22])),"./smile/word.js":()=>O(()=>import(`./word-Di03XzLS.js`),__vite__mapDeps([23])),"./smile/zsmile.js":()=>O(()=>import(`./zsmile-DFnR68aQ.js`),[]),"./verificar/verificar.js":()=>O(()=>import(`./verificar-nbteEdvU.js`),__vite__mapDeps([24])),"./web/404.js":()=>O(()=>import(`./404-DVIDtGB8.js`),[]),"./web/acerca/acerca.js":()=>O(()=>import(`./acerca-DgDYPFTx.js`),__vite__mapDeps([25])),"./web/acerca/contacto.js":()=>O(()=>import(`./contacto-qJNLPKSk.js`),__vite__mapDeps([26,25])),"./web/acerca/cookies.js":()=>O(()=>import(`./cookies-CCjWnXaA.js`),__vite__mapDeps([25,27])),"./web/acerca/descubre.js":()=>O(()=>import(`./descubre-C4mW-KMd.js`),__vite__mapDeps([28])),"./web/acerca/feedback.js":()=>O(()=>import(`./feedback-5TU21fr4.js`),__vite__mapDeps([25,27])),"./web/acerca/privacidad.js":()=>O(()=>import(`./privacidad-C0OX2p-X.js`),__vite__mapDeps([25,27])),"./web/acerca/terminos.js":()=>O(()=>import(`./terminos-GtfPU2Qw.js`),__vite__mapDeps([25,27])),"./web/blog/blog.js":()=>O(()=>import(`./blog-Qu5EFN6K.js`),__vite__mapDeps([29])),"./web/blog/nuevo.js":()=>O(()=>import(`./nuevo-CIifS0K7.js`),__vite__mapDeps([30])),"./web/blog/post.js":()=>O(()=>import(`./post-1qPqZ5bn.js`),__vite__mapDeps([31])),"./web/blog/woo.js":()=>O(()=>import(`./woo-DNkc3KUT.js`),[]),"./web/chatwil/chatwil.js":()=>O(()=>import(`./chatwil-BTy8Ff8m.js`),__vite__mapDeps([32])),"./web/chatwil/config.js":()=>O(()=>import(`./config-CpJRQ2zz.js`),[]),"./web/chatwil/contexto.js":()=>O(()=>import(`./contexto-DBuxlkBG.js`),[]),"./web/chatwil/datawii.js":()=>O(()=>import(`./datawii-BvRk9kiK.js`),[]),"./web/chatwil/waa.js":()=>O(()=>import(`./waa-ClgJHSI_.js`),[]),"./web/emojis.js":()=>O(()=>import(`./emojis-DfMOW7Fy.js`),__vite__mapDeps([33])),"./web/login.js":()=>O(()=>import(`./login-DLDRhUHH.js`),__vite__mapDeps([34])),"./web/precios.js":()=>O(()=>import(`./precios-B_8qcqcP.js`),__vite__mapDeps([35])),"./web/registrado.js":()=>O(()=>import(`./registrado-BgocRw74.js`),__vite__mapDeps([36]))}),P=(e,t)=>N[`./${e}${t}.js`],F=new class{constructor(){this.rutas={},this.cache={"/inicio":m},this.modActual=null,this.cargand=!1,this.HOME=`inicio`,this.main=`#wimain`,this.pathActual=null,this.isFirstLoad=!0}register(e,t){this.rutas[e]=t}inicio(){return Promise.resolve(m)}registerAll(e){let t={},n={};M.forEach(({path:e,area:r,roles:i=null,mod:a})=>{if(e===`/inicio`){t[e]=()=>this.inicio();return}let o=a??e.split(`/`).pop(),s=P(r,o);if(!s){console.warn(`[ruta] no encontrado: ${r}${o}.js`);return}i===null?t[e]=s:(n[e]??=[]).push({roles:i,imp:s})});let r=()=>Promise.resolve({render:()=>``,init:()=>setTimeout(()=>this.navigate(`/login`),0)});new Set([...Object.keys(t),...Object.keys(n)]).forEach(i=>{let a=t[i],o=n[i]||[],s=()=>{let t=e?.()||null;return o.find(e=>e.roles.includes(t))};if(!o.length)return this.register(i,a);if(!a)return this.register(i,()=>{let e=s();return e?e.imp():r()});this.register(i,()=>{let e=s();return e?e.imp():a()})})}async prefetch(e){let t=p.limpiar(e)===`/`?`/${this.HOME}`:p.limpiar(e);if(!(this.cache[t]||!this.rutas[t]))try{this.cache[t]=await this.rutas[t](),console.log(`⚡ Listo ${t.replace(`/`,``)}`)}catch{console.warn(`[ruta] prefetch falló:`,t)}}async navigate(e,n=!0){if(this.cargand)return;this.cargand=!0;let r=p.limpiar(e)===`/`?`/${this.HOME}`:p.limpiar(e);if([`/admin`,`/usuarios`,`/permisos`,`/sistema`,`/mifcm`].includes(r)){let{getls:e}=await O(async()=>{let{getls:e}=await import(`./widev-BkR2Na_W.js`).then(e=>e.O);return{getls:e}},[]),t=e(`wiSmile`),n=e=>(this.cargand=!1,this.navigate(e,!0)),r=!t||t.rol!==`admin`?`/`:t.estado===`activo`?sessionStorage.getItem(`vault_unlocked`)?null:`/verificar`:`/registrado`;if(r)return n(r)}try{this.modActual?.cleanup?.();let e=this.rutas[r]?null:r.slice(1),i=e?P(`web/blog/`,`post`):this.rutas[r]??P(`web/`,`404`),a=this.cache[r]??await i();e||(this.cache[r]=a);let[o]=await Promise.all([a.render(e)]);document.body.classList.remove(`is-public-profile`),this.marcarNav(r),window.dispatchEvent(new CustomEvent(`winavigate`,{detail:{norm:r}})),this.isFirstLoad&&t(this.main).children().length>0&&!window.__WIREADY__&&r===`/${this.HOME}`?this.isFirstLoad=!1:await l(this.main,o),this.isFirstLoad=!1,window.scrollTo(0,0),a.init?.(e),n&&p.poner(r===`/${this.HOME}`?`/`:r,document.title),this.pathActual=r,this.modActual=a}catch(e){if(e instanceof TypeError&&e.message.includes(`Failed to fetch`))return location.reload();d(`Error en la ruta`),console.error(`[ruta] navigate:`,e)}finally{this.cargand=!1}}marcarNav(e){let n=e.slice(1)||this.HOME;t(`.nv_item`).removeClass(`active`),t(`.nv_item[data-page="${n}"]`).addClass(`active`)}init(){this.marcarNav(p.actual===`/`?`/${this.HOME}`:p.limpiar(p.actual)),t(document).on(`click`,`.nv_item`,e=>{e.preventDefault();let n=t(e.currentTarget).data(`page`);this.navigate(n===this.HOME?`/`:`/${n}`)}).on(`mouseenter touchstart`,`.nv_item[data-page]`,e=>{let n=t(e.currentTarget).data(`page`);this.prefetch(n===this.HOME?`/`:`/${n}`)}),window.addEventListener(`popstate`,e=>{let t=e.state?.ruta||p.actual;(p.limpiar(t)===`/`?`/${this.HOME}`:p.limpiar(t))!==this.pathActual&&this.navigate(t,!1)}),this.navigate(p.actual,!1)}};F.registerAll(()=>u(`wiSmile`)?.rol);var I=(e=!1)=>{let t=u(`wiSmile`);return t&&!e&&setTimeout(()=>F.navigate({smile:`/smile`,gestor:`/gestor`,admin:`/admin`}[t.rol]||`/smile`),0),F.inicio()};F.register(`/`,I),F.register(`/inicio`,I),F.init(),O(()=>import(`./header-CXLwXIbk.js`),[]),O(()=>import(`./footer-Cf0II8tY.js`),[]),o({css:[`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap`,`https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap`,`https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap`]});export{O as i,F as n,k as r,j as t};