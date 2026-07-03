import{r as e}from"./vendor-CZ6bxb2j.js";import{f as t,h as n,i as r,n as i,v as a,w as o}from"./widev-BkR2Na_W.js";import{a as s,c,d as l,g as u,l as d,n as f,o as p,s as ee,t as m,v as h,x as g}from"./firebase-D6VL4aaK.js";import{n as _}from"./firebase-BfEAzf30.js";import{cargarTodosEmpleados as v}from"./zsmile-9OBMck8o.js";var y=`.chat`,b=`chatSmileMsgs`,x=.1,S=7,C=5,w=500,T=[],E=[],D=``,O=null,k=!1,A=``,j=``,M=!1,N=!0,P=null,F=()=>`
  <div class="chat_wrap wi_fadeUp">
    <div class="chat_container" id="chatContainer">

      <!-- ═══ SIDEBAR (LEFT COLUMN) ═══ -->
      <aside class="chat_sidebar">
        <div class="chat_sidebar_header">
          <div class="chat_sidebar_title">
            <i class="fas fa-users-viewfinder"></i>
            <h2>Mi Equipo</h2>
            <span class="chat_sidebar_count" id="sidebarCount">0</span>
          </div>
          <button class="chat_sidebar_close_btn" id="chatSidebarClose" title="Cerrar">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="chat_sidebar_search">
          <div class="chat_search_box">
            <i class="fas fa-search"></i>
            <input
              type="text"
              id="chatSearchInput"
              placeholder="Buscar compañero…"
              autocomplete="off"
            >
          </div>
        </div>

        <div class="chat_sidebar_list" id="chatSidebarList">
          ${I()}
        </div>
      </aside>

      <!-- ═══ MAIN CHAT (RIGHT COLUMN) ═══ -->
      <main class="chat_main">
        <!-- ══ HEADER ══ -->
        <div class="chat_header smw_loading" id="chatHeader">
          <div class="chat_header_left">
            <button class="chat_sidebar_toggle_btn" id="chatSidebarToggle" title="Ver colaboradores">
              <i class="fas fa-users"></i>
              <span class="chat_sidebar_indicator"></span>
            </button>
            <div class="chat_header_icon">
              <i class="fas fa-comments"></i>
            </div>
            <div class="chat_header_text">
              <h1 class="chat_title">Chat del Equipo</h1>
              <p class="chat_subtitle">Canal interno de <em>Reto del Mes</em></p>
            </div>
          </div>
          <div class="chat_header_actions">
            <div class="chat_online_badge" id="chatOnline">
              <span class="chat_online_dot"></span>
              <span id="chatOnlineCount">—</span> activos
            </div>
            <button class="chat_refresh_btn" id="chatRefresh" title="Actualizar mensajes">
              <i class="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>

        <!-- ══ MESSAGES AREA ══ -->
        <div class="chat_messages" id="chatMessages">
          ${L()}
        </div>

        <!-- ══ INPUT AREA ══ -->
        <div class="chat_input_area" id="chatInputArea">
          <div class="chat_input_card">
            <div class="chat_textarea_wrap">
              <textarea
                id="chatTextarea"
                class="chat_textarea"
                placeholder="Escribe un mensaje…"
                rows="1"
                maxlength="${w}"
              ></textarea>
            </div>
            <button class="chat_send_btn" id="chatSendBtn" title="Enviar mensaje">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
          <div class="chat_blocked_msg" id="chatBlockedMsg" style="display:none;">
            <i class="fas fa-lock"></i>
            Solo los colaboradores activos pueden enviar mensajes.
          </div>
        </div>
      </main>

    </div>

    <!-- CHAT DELETION MODAL -->
    <div class="chat_modal" id="chatEliminarModal">
      <div class="chat_modal_body">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar mensaje?</h3>
        <p>Esta acción no se puede deshacer y se borrará para todos.</p>
        <div class="chat_modal_acts">
          <button class="chat_cancel" id="chatCancelDeleteBtn">Cancelar</button>
          <button class="chat_confirm" id="chatConfirmDeleteBtn">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
`;function I(){return[,,,,,].fill(0).map(()=>`
    <div class="chat_sidebar_sk_item">
      <div class="chat_sidebar_sk_avatar smw_sk_el"></div>
      <div class="chat_sidebar_sk_info">
        <div class="chat_sidebar_sk_name smw_sk_el"></div>
        <div class="chat_sidebar_sk_sub smw_sk_el"></div>
      </div>
    </div>
  `).join(``)}function L(){return[{mine:!1,w:`62%`},{mine:!0,w:`48%`},{mine:!1,w:`75%`},{mine:!0,w:`55%`},{mine:!1,w:`68%`}].map(({mine:e,w:t})=>`
    <div class="chat_bubble_wrap ${e?`mine`:`other`}">
      ${e?``:`<div class="chat_sk_avatar smw_sk_el"></div>`}
      <div class="chat_sk_block">
        <div class="chat_sk_name smw_sk_el" style="width:90px;"></div>
        <div class="chat_sk_bubble smw_sk_el" style="width:${t};"></div>
      </div>
      ${e?`<div class="chat_sk_avatar smw_sk_el"></div>`:``}
    </div>
  `).join(``)}var R=(e=``)=>{let t=e.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0][0].toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase():`?`},z=[`#3b82f6`,`#f97316`,`#a855f7`,`#22c55e`,`#ef4444`,`#0ea5e9`,`#eab308`,`#ec4899`],B=(e=``)=>{let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return z[Math.abs(t)%z.length]},V=e=>{if(e.tipo===`snapshot`)return H(e);let t=e.usuario||e.autor||``,n=t&&A&&t.toLowerCase().trim()===A.toLowerCase().trim(),r=B(t),s=R(e.nombre||t||`?`),c=o(e.creado||e.ts),l=U(e.texto||``).replace(/\n/g,`<br>`),u=a.user?.rol===`gestor`||a.user?.rol===`admin`,d=n||u,f=e.imagen,p=`
    <div class="chat_avatar_wrap" title="${i(e.nombre||t||``)}">
      ${f?`<img class="chat_avatar_img" src="${e.imagen}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`:``}
      <div class="chat_avatar_fallback" style="background:${r}; ${f?`display:none;`:``}">
        ${s}
      </div>
    </div>
  `;return`
    <div class="chat_bubble_wrap ${n?`mine`:`other`} chat_msg_in ${e.temp?`chat_msg_pending`:``}" data-id="${e.id||``}">
      ${n?``:p}
      <div class="chat_bubble_col">
        <div class="chat_bubble_meta ${n?`right`:``}">
          <span class="chat_bubble_name">${i(e.nombre||t||`Colaborador`)}</span>
          <span class="chat_bubble_time">${c}</span>
          ${d?`<button class="chat_msg_delete_btn" data-id="${e.id||``}" title="Eliminar mensaje"><i class="fas fa-trash-alt"></i></button>`:``}
        </div>
        <div class="chat_bubble ${n?`mine`:`other`}">
          <span>${l}</span>
        </div>
      </div>
      ${n?p:``}
    </div>
  `},H=e=>`
    <div class="chat_snapshot_card chat_msg_in">
      <div class="chat_snapshot_icon">📊</div>
      <div class="chat_snapshot_body">
        <div class="chat_snapshot_label">
          <i class="fas fa-chart-bar"></i> Snapshot del equipo
          <span class="chat_snapshot_time">${o(e.creado||e.ts)}</span>
        </div>
        <div class="chat_snapshot_text">${U(e.texto||``)}</div>
      </div>
    </div>
  `,U=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),te=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),W=()=>{let t=e(`#chatTextarea`).val()||``;e(`.chat_sidebar_item`).each(function(){let n=(e(this).attr(`data-nombre`)||``).trim();n&&(RegExp(`@`+te(n)+`(?![a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ])`,`i`).test(t)?e(this).addClass(`active`):e(this).removeClass(`active`))})},G=(t=!1)=>{let n=e(`#chatMessages`);if(!T.length){n.html(`
      <div class="chat_empty">
        <div class="chat_empty_icon">💬</div>
        <p class="chat_empty_title">Sin mensajes aún</p>
        <p class="chat_empty_sub">¡Sé el primero en escribir!</p>
      </div>
    `);return}let r=T.map(V).join(``);N&&T.length>=S&&(r=`<div class="chat_paginate_container"><button class="chat_paginate_btn" id="chatPaginateBtn"><i class="fas fa-history"></i> Cargar anteriores (+5)</button></div>`+r),n.html(r),e(`#chatMessages .chat_msg_in`).each(function(t){e(this).css(`animation-delay`,`${t*.02}s`)}),t||q()},K=()=>{let t=e(`#chatSidebarList`);if(!t.length)return;let n=E.filter(e=>{let t=D.toLowerCase().trim(),n=(e.nombre||``).toLowerCase(),r=(e.apellidos||``).toLowerCase(),i=(e.usuario||``).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)});if(e(`#sidebarCount`).text(n.length),!n.length){t.html(`
      <div class="chat_sidebar_empty">
        <i class="fas fa-search-minus"></i>
        <p class="chat_sidebar_empty_title">Sin resultados</p>
        <p class="chat_sidebar_empty_sub">Intenta buscar otra palabra</p>
      </div>
    `);return}let r=n.map(e=>{let t=e.usuario===A,n=R(e.nombre||`?`),r=B(e.usuario||``),a=e.estado===`activo`,o=e.imagen||e.avatar,s=o?`<img class="chat_sidebar_avatar_img" src="${o}" alt="${e.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`:``;return`${e.nombre||``} ${e.apellidos||``}`.replace(/\s+/g,` `).trim(),`
      <div class="chat_sidebar_item ${t?`chat_sidebar_item_me`:``}" data-usuario="${e.usuario}" data-nombre="${e.usuario}">
        <div class="chat_sidebar_avatar_wrap">
          ${s}
          <div class="chat_sidebar_avatar_fallback" style="background:${r}; ${o?`display:none;`:``}">
            ${n}
          </div>
          <span class="chat_sidebar_avatar_dot ${a?`online`:`offline`}"></span>
        </div>
        <div class="chat_sidebar_info">
          <div class="chat_sidebar_name_row">
            <span class="chat_sidebar_name">${i(e.nombre)} ${i(e.apellidos||``)}</span>
            ${t?`<span class="chat_sidebar_me_badge">Tú</span>`:``}
          </div>
          <div class="chat_sidebar_status_row">
            <span class="chat_sidebar_role chat_badge_${e.rol||`smile`}">
              ${e.rol===`gestor`?`Gestor`:e.rol===`admin`?`Admin`:`Smile`}
            </span>
            <span class="chat_sidebar_username">@${e.usuario}</span>
          </div>
        </div>
        <div class="chat_sidebar_action" title="Mencionar">
          <i class="fas fa-at"></i>
        </div>
      </div>
    `}).join(``);t.html(r),W()},q=(e=!1)=>{let t=document.getElementById(`chatMessages`);t&&t.scrollTo({top:t.scrollHeight,behavior:e?`smooth`:`auto`})},J=t=>{e(`#chatOnlineCount`).text(t)},Y=()=>{O&&=(O(),null),e(`#chatHeader`).addClass(`smw_loading`),O=ee(d(u(_,`chatSmiles`),c(`creado`,`desc`),p(S)),t=>{T=t.docs.slice().reverse().map(e=>({id:e.id,...e.data()})),N=t.size>=S,n(b,T,x),G(),J(new Set(T.map(e=>e.usuario||e.autor).filter(Boolean)).size),e(`#chatHeader`).removeClass(`smw_loading`),e(`#chatRefresh`).removeClass(`chat_spinning`)},t=>{console.error(`[Chat] onSnapshot error:`,t),T.length||e(`#chatMessages`).html(`
        <div class="chat_empty chat_empty_error">
          <div class="chat_empty_icon">⚠️</div>
          <p class="chat_empty_title">Error al cargar</p>
          <p class="chat_empty_sub">Revisa tu conexión o permisos en tiempo real.</p>
          <button class="chat_retry_btn" id="chatRetry">
            <i class="fas fa-redo"></i> Reintentar
          </button>
        </div>
      `),e(`#chatHeader`).removeClass(`smw_loading`),e(`#chatRefresh`).removeClass(`chat_spinning`)})},X=async()=>{if(M||!N||!T.length)return;let t=e(`#chatMessages`),n=T[0].creado||T[0].ts;if(!n){r(`No se puede paginar: falta cursor de tiempo`,`warning`);return}M=!0,e(`#chatPaginateBtn`).prop(`disabled`,!0).html(`<i class="fas fa-circle-notch fa-spin"></i> Cargando anteriores...`);try{let e=await s(d(u(_,`chatSmiles`),c(`creado`,`desc`),l(n),p(C)));if(e.empty){N=!1,G(!0),r(`No hay más mensajes anteriores`,`info`);return}let i=e.docs.reverse().map(e=>({id:e.id,...e.data()}));i.length<C&&(N=!1);let a=t[0].scrollHeight,o=t[0].scrollTop;T=[...i,...T],G(!0);let f=t[0].scrollHeight;t[0].scrollTop=o+(f-a),r(`Cargados ${i.length} mensajes anteriores`,`success`)}catch(e){console.error(`[Chat] loadAnteriores error:`,e),r(`Error al cargar anteriores`,`error`)}finally{M=!1}},Z=async()=>{try{E=await v(!0),K()}catch(e){console.error(`[Chat] _loadColaboradores error:`,e)}},Q=async()=>{if(!k)return;let t=e(`#chatTextarea`),i=t.val().trim();if(!i)return;if(i.length>w){r(`El mensaje excede ${w} caracteres`,`warning`);return}t.val(``).trigger(`input`),$(t[0]);let o=`temp_`+Date.now()+Math.random().toString(36).substr(2,5),s=a.user,c=s?.imagen||s?.avatar||``,l={id:o,texto:i,usuario:A,email:s?.email||``,nombre:j,imagen:c,creado:new Date,ts:new Date,tipo:`texto`,temp:!0};T.push(l),G(!1),m(u(_,`chatSmiles`),{texto:i,usuario:A,email:s?.email||``,nombre:j,imagen:c,creado:g(),ts:g(),tipo:`texto`}).then(e=>{let t=T.findIndex(e=>e.id===o);t!==-1&&(T[t].id=e.id,delete T[t].temp,n(b,T,x),G(!0))}).catch(e=>{console.error(`[Chat] Background send error:`,e),r(`No se pudo entregar el mensaje`,`error`),T=T.filter(e=>e.id!==o),n(b,T,x),G(!0)})},$=e=>{e&&(e.style.height=`auto`,e.style.height=Math.min(e.scrollHeight,96)+`px`,e.style.overflowY=e.scrollHeight>96?`auto`:`hidden`)},ne=()=>{let t=e(`#chatTextarea`),n=e(`#chatSendBtn`),r=e(`#chatBlockedMsg`);k?(t.prop(`disabled`,!1).attr(`placeholder`,`Escribe un mensaje…`),n.prop(`disabled`,!1).removeClass(`chat_send_disabled`),r.hide()):(t.prop(`disabled`,!0).attr(`placeholder`,`No puedes enviar mensajes (participación inactiva)`),n.prop(`disabled`,!0).addClass(`chat_send_disabled`),r.show())},re=async()=>{e(`.chat_wrap`).addClass(`visible`),window.__WIREADY__=!0;let i=a.user;i&&(A=i.usuario||i.email||``,j=i.nombre||i.usuario||`Colaborador`,k=i.participa===`si`),ne();let o=t(b);o&&Array.isArray(o)&&(T=o,N=!0,G()),Y(),Z(),e(document).on(`input${y}`,`#chatTextarea`,function(){$(this),W()}),e(document).on(`keydown${y}`,`#chatTextarea`,function(e){e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),Q())}),e(document).on(`click${y}`,`#chatSendBtn`,()=>Q()),e(document).on(`click${y}`,`#chatRefresh`,async function(){n(b,null,0),n(`todosEmpleadosSmile`,null,0),N=!0,e(`#chatRefresh`).addClass(`chat_spinning`),Y(),await Z(),r(`Mensajes actualizados`,`success`)}),e(document).on(`click${y}`,`#chatPaginateBtn`,()=>X()),e(document).on(`click${y}`,`.chat_msg_delete_btn`,function(){let t=e(this).attr(`data-id`);t&&(P=t,e(`#chatEliminarModal`).addClass(`show`))}),e(document).on(`click${y}`,`#chatCancelDeleteBtn, #chatEliminarModal`,function(t){e(t.target).is(`#chatCancelDeleteBtn, #chatEliminarModal`)&&(e(`#chatEliminarModal`).removeClass(`show`),P=null)}),e(document).on(`click${y}`,`#chatConfirmDeleteBtn`,function(){if(!P)return;let t=P;e(`#chatEliminarModal`).removeClass(`show`),P=null;let i=e(`.chat_bubble_wrap[data-id="${t}"]`);i.length?i.fadeOut(200,function(){e(this).remove(),T=T.filter(e=>e.id!==t),n(b,T,x),T.length===0&&G()}):(T=T.filter(e=>e.id!==t),n(b,T,x),G(!0)),f(h(_,`chatSmiles`,t)).then(()=>{r(`Mensaje eliminado permanentemente`,`success`)}).catch(e=>{console.error(`[Chat] deleteDoc error:`,e),r(`No se pudo borrar el mensaje en el servidor`,`error`)})}),e(document).on(`input${y}`,`#chatSearchInput`,function(){D=e(this).val(),K()}),e(document).on(`click${y}`,`.chat_sidebar_item`,function(t){if(!k)return;let n=(e(this).attr(`data-nombre`)||``).trim(),r=e(`#chatTextarea`),i=e(this).hasClass(`active`),a=r.val(),o=`@${n}`;if(i){let e=n.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),t=RegExp(`@`+e+`(?![a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ])\\s*`,`gi`);a=a.replace(t,``),a=a.replace(/\s+/g,` `).trim(),r.val(a?a+` `:``)}else{let e=a?a.endsWith(` `)?``:` `:``;r.val(a+e+o+` `)}r.trigger(`input`),r.focus(),$(r[0]),e(`#chatContainer`).removeClass(`chat_sidebar_active`)}),e(document).on(`click${y}`,`#chatSidebarToggle`,function(){e(`#chatContainer`).addClass(`chat_sidebar_active`)}),e(document).on(`click${y}`,`#chatSidebarClose`,function(){e(`#chatContainer`).removeClass(`chat_sidebar_active`)}),e(document).on(`click${y}`,`#chatRetry`,()=>{e(`#chatMessages`).html(L()),e(`#chatSidebarList`).html(I()),Y(),Z()}),e(document).on(`focus${y}`,`#chatTextarea`,function(){setTimeout(()=>q(!0),350)})},ie=()=>{e(document).off(y),O&&=(O(),null),T=[],E=[],D=``,k=!1,A=``,j=``,M=!1,N=!0,P=null};export{ie as cleanup,re as init,F as render};