import{$ as e}from"./vendor-PbmUQHyn.js";import{db as A}from"./firebase-QWwQUjRS.js";import{d as ea,e as sa,q as z,c as I,p as G,n as P,i as F,a as ia,y as na,t as L}from"./firebase-DzkkQdMV.js";import{y as S,u as v,b as _,E as N,j as ca,a as k,F as K}from"./index-BQyVSIlW.js";import{cargarTodosEmpleados as ra}from"./zsmile-DCDuqMtS.js";const d=".chat",u="chatSmileMsgs",C=.1,T=7,O=5,oa=3e4,j=500;let n=[],R=[],D="",H=null,w=!1,f="",M="",m=!1,p=!0,y=null;const $a=()=>`
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
          ${W()}
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
              <p class="chat_subtitle">Canal interno de <em>Smiles</em></p>
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
          ${Y()}
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
                maxlength="${j}"
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
`;function W(){return Array(5).fill(0).map(()=>`
    <div class="chat_sidebar_sk_item">
      <div class="chat_sidebar_sk_avatar smw_sk_el"></div>
      <div class="chat_sidebar_sk_info">
        <div class="chat_sidebar_sk_name smw_sk_el"></div>
        <div class="chat_sidebar_sk_sub smw_sk_el"></div>
      </div>
    </div>
  `).join("")}function Y(){return[{mine:!1,w:"62%"},{mine:!0,w:"48%"},{mine:!1,w:"75%"},{mine:!0,w:"55%"},{mine:!1,w:"68%"}].map(({mine:t,w:s})=>`
    <div class="chat_bubble_wrap ${t?"mine":"other"}">
      ${t?"":'<div class="chat_sk_avatar smw_sk_el"></div>'}
      <div class="chat_sk_block">
        <div class="chat_sk_name smw_sk_el" style="width:90px;"></div>
        <div class="chat_sk_bubble smw_sk_el" style="width:${s};"></div>
      </div>
      ${t?'<div class="chat_sk_avatar smw_sk_el"></div>':""}
    </div>
  `).join("")}const V=(a="")=>{const t=a.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0][0].toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase():"?"},q=["#3b82f6","#f97316","#a855f7","#22c55e","#ef4444","#0ea5e9","#eab308","#ec4899"],Z=(a="")=>{let t=0;for(let s=0;s<a.length;s++)t=a.charCodeAt(s)+((t<<5)-t);return q[Math.abs(t)%q.length]},la=a=>{if(a.tipo==="snapshot")return da(a);const t=a.usuario||a.autor||"",s=t&&f&&t.toLowerCase().trim()===f.toLowerCase().trim(),i=Z(t),r=V(a.nombre||t||"?"),c=K(a.creado||a.ts),l=X(a.texto||"").replace(/\n/g,"<br>"),o=S.user?.rol==="gestor"||S.user?.rol==="admin",h=s||o,g=a.imagen,$=`
    <div class="chat_avatar_wrap" title="${k(a.nombre||t||"")}">
      ${g?`<img class="chat_avatar_img" src="${a.imagen}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`:""}
      <div class="chat_avatar_fallback" style="background:${i}; ${g?"display:none;":""}">
        ${r}
      </div>
    </div>
  `;return`
    <div class="chat_bubble_wrap ${s?"mine":"other"} chat_msg_in ${a.temp?"chat_msg_pending":""}" data-id="${a.id||""}">
      ${s?"":$}
      <div class="chat_bubble_col">
        <div class="chat_bubble_meta ${s?"right":""}">
          <span class="chat_bubble_name">${k(a.nombre||t||"Colaborador")}</span>
          <span class="chat_bubble_time">${c}</span>
          ${h?`<button class="chat_msg_delete_btn" data-id="${a.id||""}" title="Eliminar mensaje"><i class="fas fa-trash-alt"></i></button>`:""}
        </div>
        <div class="chat_bubble ${s?"mine":"other"}">
          <span>${l}</span>
        </div>
      </div>
      ${s?$:""}
    </div>
  `},da=a=>{const t=K(a.creado||a.ts),s=X(a.texto||"");return`
    <div class="chat_snapshot_card chat_msg_in">
      <div class="chat_snapshot_icon">📊</div>
      <div class="chat_snapshot_body">
        <div class="chat_snapshot_label">
          <i class="fas fa-chart-bar"></i> Snapshot del equipo
          <span class="chat_snapshot_time">${t}</span>
        </div>
        <div class="chat_snapshot_text">${s}</div>
      </div>
    </div>
  `},X=a=>String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),ha=a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),J=()=>{const a=e("#chatTextarea").val()||"";e(".chat_sidebar_item").each(function(){const t=(e(this).attr("data-nombre")||"").trim();if(!t)return;new RegExp("@"+ha(t)+"(?![a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ])","i").test(a)?e(this).addClass("active"):e(this).removeClass("active")})},b=(a=!1)=>{const t=e("#chatMessages");if(!n.length){t.html(`
      <div class="chat_empty">
        <div class="chat_empty_icon">💬</div>
        <p class="chat_empty_title">Sin mensajes aún</p>
        <p class="chat_empty_sub">¡Sé el primero en escribir!</p>
      </div>
    `);return}let s=n.map(la).join("");p&&n.length>=T&&(s='<div class="chat_paginate_container"><button class="chat_paginate_btn" id="chatPaginateBtn"><i class="fas fa-history"></i> Cargar anteriores (+5)</button></div>'+s),t.html(s),e("#chatMessages .chat_msg_in").each(function(i){e(this).css("animation-delay",`${i*.02}s`)}),a||aa()},Q=()=>{const a=e("#chatSidebarList");if(!a.length)return;const t=R.filter(i=>{const r=D.toLowerCase().trim(),c=(i.nombre||"").toLowerCase(),l=(i.apellidos||"").toLowerCase(),o=(i.usuario||"").toLowerCase();return c.includes(r)||l.includes(r)||o.includes(r)});if(e("#sidebarCount").text(t.length),!t.length){a.html(`
      <div class="chat_sidebar_empty">
        <i class="fas fa-search-minus"></i>
        <p class="chat_sidebar_empty_title">Sin resultados</p>
        <p class="chat_sidebar_empty_sub">Intenta buscar otra palabra</p>
      </div>
    `);return}const s=t.map(i=>{const r=i.usuario===f,c=V(i.nombre||"?"),l=Z(i.usuario||""),o=i.estado==="activo",h=i.imagen||i.avatar,g=h?`<img class="chat_sidebar_avatar_img" src="${h}" alt="${i.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`:"",ta=`${i.nombre||""} ${i.apellidos||""}`.replace(/\s+/g," ").trim();return`
      <div class="chat_sidebar_item ${r?"chat_sidebar_item_me":""}" data-usuario="${i.usuario}" data-nombre="${ta}">
        <div class="chat_sidebar_avatar_wrap">
          ${g}
          <div class="chat_sidebar_avatar_fallback" style="background:${l}; ${h?"display:none;":""}">
            ${c}
          </div>
          <span class="chat_sidebar_avatar_dot ${o?"online":"offline"}"></span>
        </div>
        <div class="chat_sidebar_info">
          <div class="chat_sidebar_name_row">
            <span class="chat_sidebar_name">${k(i.nombre)} ${k(i.apellidos||"")}</span>
            ${r?'<span class="chat_sidebar_me_badge">Tú</span>':""}
          </div>
          <div class="chat_sidebar_status_row">
            <span class="chat_sidebar_role chat_badge_${i.rol||"smile"}">
              ${i.rol==="gestor"?"Gestor":i.rol==="admin"?"Admin":"Smile"}
            </span>
            <span class="chat_sidebar_username">@${i.usuario}</span>
          </div>
        </div>
        <div class="chat_sidebar_action" title="Mencionar">
          <i class="fas fa-at"></i>
        </div>
      </div>
    `}).join("");a.html(s),J()},aa=(a=!1)=>{const t=document.getElementById("chatMessages");t&&t.scrollTo({top:t.scrollHeight,behavior:a?"smooth":"auto"})},_a=a=>{e("#chatOnlineCount").text(a)},E=async(a=!1)=>{if(!m){if(m=!0,!a){const t=ca(u);if(t&&Array.isArray(t)){n=t,p=!0,b(),m=!1;return}}a&&e("#chatRefresh").addClass("chat_spinning"),e("#chatHeader").addClass("smw_loading");try{const t=z(I(A,"chatSmiles"),G("creado","desc"),P(T)),s=await F(t);n=s.docs.reverse().map(c=>({id:c.id,...c.data()})),p=s.size>=T,v(u,n,C),b();const r=new Set(n.map(c=>c.usuario||c.autor).filter(Boolean));_a(r.size)}catch(t){console.error("[Chat] loadMensajes error:",t),n.length||e("#chatMessages").html(`
        <div class="chat_empty chat_empty_error">
          <div class="chat_empty_icon">⚠️</div>
          <p class="chat_empty_title">Error al cargar</p>
          <p class="chat_empty_sub">Revisa tu conexión e intenta de nuevo.</p>
          <button class="chat_retry_btn" id="chatRetry">
            <i class="fas fa-redo"></i> Reintentar
          </button>
        </div>
      `),_("No se pudieron cargar los mensajes","error")}finally{m=!1,e("#chatHeader").removeClass("smw_loading"),e("#chatRefresh").removeClass("chat_spinning")}}},ua=async()=>{if(m||!p||!n.length)return;const a=e("#chatMessages"),t=n[0].creado||n[0].ts;if(!t){_("No se puede paginar: falta cursor de tiempo","warning");return}m=!0,e("#chatPaginateBtn").prop("disabled",!0).html('<i class="fas fa-circle-notch fa-spin"></i> Cargando anteriores...');try{const i=z(I(A,"chatSmiles"),G("creado","desc"),na(t),P(O)),r=await F(i);if(r.empty){p=!1,b(!0),_("No hay más mensajes anteriores","info");return}const l=r.docs.reverse().map($=>({id:$.id,...$.data()}));l.length<O&&(p=!1);const o=a[0].scrollHeight,h=a[0].scrollTop;n=[...l,...n],b(!0);const g=a[0].scrollHeight;a[0].scrollTop=h+(g-o),_(`Cargados ${l.length} mensajes anteriores`,"success")}catch(i){console.error("[Chat] loadAnteriores error:",i),_("Error al cargar anteriores","error")}finally{m=!1}},x=async()=>{try{R=await ra(!0),Q()}catch(a){console.error("[Chat] _loadColaboradores error:",a)}},U=async()=>{if(!w)return;const a=e("#chatTextarea"),t=a.val().trim();if(!t)return;if(t.length>j){_(`El mensaje excede ${j} caracteres`,"warning");return}a.val("").trigger("input"),B(a[0]);const s="temp_"+Date.now()+Math.random().toString(36).substr(2,5),i=S.user,r=i?.imagen||i?.avatar||"",c={id:s,texto:t,usuario:f,email:i?.email||"",nombre:M,imagen:r,creado:new Date,ts:new Date,tipo:"texto",temp:!0};n.push(c),b(!1),ia(I(A,"chatSmiles"),{texto:t,usuario:f,email:i?.email||"",nombre:M,imagen:r,creado:L(),ts:L(),tipo:"texto"}).then(l=>{const o=n.findIndex(h=>h.id===s);o!==-1&&(n[o].id=l.id,delete n[o].temp,v(u,n,C),b(!0))}).catch(l=>{console.error("[Chat] Background send error:",l),_("No se pudo entregar el mensaje","error"),n=n.filter(o=>o.id!==s),v(u,n,C),b(!0)})},B=a=>{if(!a)return;a.style.height="auto";const s=24*4;a.style.height=Math.min(a.scrollHeight,s)+"px",a.style.overflowY=a.scrollHeight>s?"auto":"hidden"},ma=()=>{const a=e("#chatTextarea"),t=e("#chatSendBtn"),s=e("#chatBlockedMsg");w?(a.prop("disabled",!1).attr("placeholder","Escribe un mensaje…"),t.prop("disabled",!1).removeClass("chat_send_disabled"),s.hide()):(a.prop("disabled",!0).attr("placeholder","No puedes enviar mensajes (participación inactiva)"),t.prop("disabled",!0).addClass("chat_send_disabled"),s.show())},ya=async()=>{e(".chat_wrap").addClass("visible"),window.__WIREADY__=!0;const a=S.user;a&&(f=a.usuario||a.email||"",M=a.nombre||a.usuario||"Colaborador",w=a.participa==="si"),ma(),E(!1),x(),H=setInterval(()=>{v(u,null,0),E(!0),x()},oa),e(document).on(`input${d}`,"#chatTextarea",function(){B(this),J()}),e(document).on(`keydown${d}`,"#chatTextarea",function(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),U())}),e(document).on(`click${d}`,"#chatSendBtn",()=>U()),e(document).on(`click${d}`,"#chatRefresh",async function(){v(u,null,0),p=!0,await E(!0),await x(),_("Mensajes actualizados","success")}),e(document).on(`click${d}`,"#chatPaginateBtn",()=>ua()),e(document).on(`click${d}`,".chat_msg_delete_btn",function(){const t=e(this).attr("data-id");t&&(y=t,e("#chatEliminarModal").addClass("show"))}),e(document).on(`click${d}`,"#chatCancelDeleteBtn, #chatEliminarModal",function(t){e(t.target).is("#chatCancelDeleteBtn, #chatEliminarModal")&&(e("#chatEliminarModal").removeClass("show"),y=null)}),e(document).on(`click${d}`,"#chatConfirmDeleteBtn",async function(){if(!y)return;const t=this;N(t,!0,"Eliminando...");try{const s=y;await ea(sa(A,"chatSmiles",s)),_("Mensaje eliminado permanentemente","success"),e("#chatEliminarModal").removeClass("show"),y=null;const i=e(`.chat_bubble_wrap[data-id="${s}"]`);i.length?i.fadeOut(300,function(){e(this).remove(),n=n.filter(r=>r.id!==s),v(u,n,C)}):(n=n.filter(r=>r.id!==s),v(u,n,C),b(!0))}catch(s){console.error("[Chat] deleteDoc error:",s),_("Error al eliminar mensaje","error")}finally{N(t,!1,"Eliminar")}}),e(document).on(`input${d}`,"#chatSearchInput",function(){D=e(this).val(),Q()}),e(document).on(`click${d}`,".chat_sidebar_item",function(t){if(!w)return;const s=(e(this).attr("data-nombre")||"").trim(),i=e("#chatTextarea"),r=e(this).hasClass("active");let c=i.val();const l=`@${s}`;if(r){const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),h=new RegExp("@"+o+"(?![a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ])\\s*","gi");c=c.replace(h,""),c=c.replace(/\s+/g," ").trim(),i.val(c?c+" ":"")}else{const o=c?c.endsWith(" ")?"":" ":"";i.val(c+o+l+" ")}i.trigger("input"),i.focus(),B(i[0]),e("#chatContainer").removeClass("chat_sidebar_active")}),e(document).on(`click${d}`,"#chatSidebarToggle",function(){e("#chatContainer").addClass("chat_sidebar_active")}),e(document).on(`click${d}`,"#chatSidebarClose",function(){e("#chatContainer").removeClass("chat_sidebar_active")}),e(document).on(`click${d}`,"#chatRetry",()=>{e("#chatMessages").html(Y()),e("#chatSidebarList").html(W()),E(!0),x()}),e(document).on(`focus${d}`,"#chatTextarea",function(){setTimeout(()=>aa(!0),350)})},Ca=()=>{e(document).off(d),clearInterval(H),H=null,n=[],R=[],D="",w=!1,f="",M="",m=!1,p=!0,y=null};export{Ca as cleanup,ya as init,$a as render};
