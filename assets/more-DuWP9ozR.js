import{r as e}from"./vendor-CZ6bxb2j.js";import{v as t}from"./widev-BkR2Na_W.js";import{r as n}from"./index-BvT0La0u.js";var r=[{href:`/ranking`,ico:`fa-trophy`,txt:`Ranking`,desc:`Salón de campeones y posiciones de venta del mes.`},{href:`/tours`,ico:`fa-route`,txt:`Catálogo de Tours`,desc:`Tours oficiales, precios vigentes y puntos asignados.`},{href:`/chat`,ico:`fa-comments`,txt:`Chat Grupal`,desc:`Canal de comunicación en vivo con el equipo.`},{href:`/precios`,ico:`fa-tags`,txt:`Gestionar Tours`,desc:`Configura y modifica el catálogo y precios oficiales.`},{href:`/ganancias`,ico:`fa-wallet`,txt:`Ganancias`,desc:`Calcula, audita y liquida comisiones del mes.`},{href:`/rrhh`,ico:`fa-users-gear`,txt:`Trabajadores`,desc:`Administración de personal y activación de cuentas.`},{href:`/permisos`,ico:`fa-lock`,txt:`Permisos`,desc:`Gestión de roles y privilegios de acceso.`},{href:`/sistema`,ico:`fa-cogs`,txt:`Sistema`,desc:`Configuración global y bitácora del sistema.`},{href:`/mifcm`,ico:`fa-bell`,txt:`Mi FCM`,desc:`Envío de notificaciones push a la aplicación.`},{href:`/nuevo`,ico:`fa-plus`,txt:`Crear Post`,desc:`Escribe y publica artículos en el blog.`}],i=()=>{let e=t.user;if(!e)return`<div class="z_page"><div class="z_empty"><i class="fas fa-ban"></i> Acceso denegado.</div></div>`;let i=e.rol||`smile`;return`
    <div class="z_wrap">
      <header class="z_header wi_fadeUp">
        <div class="z_header_txt">
          <div class="z_badge"><i class="fas fa-cubes"></i> Módulos del Sistema</div>
          <h1>Más Herramientas</h1>
          <p>Explora y accede a las herramientas y módulos adicionales autorizados para tu cuenta.</p>
        </div>
        <div class="z_search_box">
          <i class="fas fa-search"></i>
          <input type="text" id="zSearchInput" placeholder="Buscar módulo..." autocomplete="off">
        </div>
      </header>
      
      <div class="z_grid wi_fadeUp" style="animation-delay: 0.1s">
        ${r.filter(e=>{let t=n.find(t=>t.path===e.href);return t&&t.roles&&t.roles.includes(i)}).map((e,t)=>`
      <a href="${e.href}" class="z_card nv_item" data-page="${e.href.slice(1)}" data-search="${e.txt.toLowerCase()} ${e.desc.toLowerCase()}" style="animation-delay: ${t*.04}s">
        <div class="z_card_bar"></div>
        <div class="z_card_top">
          <div class="z_card_ico"><i class="fas ${e.ico}"></i></div>
          <div class="z_card_body">
            <h3>${e.txt}</h3>
            <p>${e.desc}</p>
          </div>
          <i class="fas fa-arrow-right z_card_arrow"></i>
        </div>
      </a>
    `).join(``)||`<div class="z_empty_grid"><i class="fas fa-ban"></i> No tienes herramientas adicionales asignadas.</div>`}
      </div>
    </div>
  `},a=()=>{t.user&&(e(document).off(`.zmas`).on(`input.zmas`,`#zSearchInput`,function(){let t=e(this).val().toLowerCase().trim();if(!t){e(`.z_card`).show();return}e(`.z_card`).each(function(){let n=e(this).attr(`data-search`)||``;e(this).toggle(n.includes(t))})}),e(`.wi_fadeUp`).addClass(`visible wi_visible`),window.__WIREADY__=!0)},o=()=>{e(document).off(`.zmas`)};export{o as cleanup,a as init,i as render};