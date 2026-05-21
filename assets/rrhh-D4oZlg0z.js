import{$ as r}from"./vendor-2D3jvCpt.js";import{db as p}from"./firebase-BPYZb32v.js";import{i as k,c as R,A as f,e as g,u as P}from"./firebase-BwR1K4LJ.js";import{b as n,j as $,u,a as E,C as m,r as y}from"./index-Ds5QDkyH.js";let e=[],h="todos",b="",_=null,C=!1;const c="rrhhUsuarios",v=30,I=s=>((s.nombre||"")+" "+(s.apellidos||"")||s.usuario||"?").trim().split(/\s+/).slice(0,2).map(a=>(a[0]||"").toUpperCase()).join(""),A=(s,a=40)=>{if(s.imagen)return`<div class="rrhh_avatar" style="width:${a}px;height:${a}px"><img src="${s.imagen}" alt="${m(s.nombre||s.usuario||"?")}" loading="lazy"/></div>`;const t=I(s);return`<div class="rrhh_avatar rrhh_avatar_initials" data-rol="${s.rol||"smile"}" style="width:${a}px;height:${a}px;font-size:${Math.round(a*.36)}px">${t}</div>`},H=s=>{const a=(s||"smile").toLowerCase();return`<span class="rrhh_rol_badge rrhh_rol_${a}">${m(a)}</span>`},B=(s,a)=>{const t=a==="activo";return`
    <label class="rrhh_toggle" title="${t?"Activo":"Inactivo"}">
      <input type="checkbox" class="rrhh_toggle_estado_input" data-id="${s}" ${t?"checked":""} />
      <span class="rrhh_toggle_slider" style="--c: #29C72E"></span>
    </label>
  `},S=(s,a)=>`
    <label class="rrhh_toggle" title="${a==="si"?"Participando":"No participa"}">
      <input type="checkbox" class="rrhh_toggle_participa" data-id="${s}" ${a==="si"?"checked":""} />
      <span class="rrhh_toggle_slider"></span>
    </label>
  `,T=()=>{const s=b.toLowerCase().trim(),a=$("wiSmile")?.rol||"smile";return e.filter(t=>!(a==="gestor"&&t.rol==="admin"||h==="activos"&&t.participa!=="si"||h==="pendientes"&&t.estado!=="pendiente"||h==="inactivos"&&t.participa!=="no"&&t.estado!=="inactivo"||s&&![t.nombre,t.apellidos,t.usuario,t.email].join(" ").toLowerCase().includes(s)))},q=()=>`
  <div class="rrhh_wrap">

    <!-- ══ HEADER CARD ══ -->
    <div class="rrhh_header_card" id="rrhh_header_card">
      <div class="rrhh_header_card_stripe"></div>
      <div class="rrhh_header_inner">
        <div class="rrhh_header_text">
          <h1 class="rrhh_title">
            <i class="fas fa-users-gear"></i>
            Gestión de Colaboradores
          </h1>
          <p class="rrhh_subtitle">Administra el equipo, roles, estado y participación en el reto</p>
        </div>
        <div class="rrhh_header_actions">
          <button class="rrhh_refresh_btn" id="rrhh_refresh" title="Actualizar lista">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- ══ STATS BAR ══ -->
    <div class="rrhh_stats_bar" id="rrhh_stats">
      <div class="rrhh_stat_chip rrhh_stat_total">
        <span class="rrhh_stat_num" id="stat_total">—</span>
        <span class="rrhh_stat_label">Total</span>
      </div>
      <div class="rrhh_stat_chip rrhh_stat_activos">
        <span class="rrhh_stat_num" id="stat_activos">—</span>
        <span class="rrhh_stat_label">Activos</span>
      </div>
      <div class="rrhh_stat_chip rrhh_stat_pendientes">
        <span class="rrhh_stat_num" id="stat_pendientes">—</span>
        <span class="rrhh_stat_label">Pendientes</span>
      </div>
      <div class="rrhh_stat_chip rrhh_stat_inactivos">
        <span class="rrhh_stat_num" id="stat_inactivos">—</span>
        <span class="rrhh_stat_label">Inactivos</span>
      </div>
    </div>

    <!-- ══ SEARCH BAR ══ -->
    <div class="rrhh_search_bar">
      <i class="fas fa-search rrhh_search_icon"></i>
      <input
        type="text"
        id="rrhh_search"
        class="rrhh_search_input"
        placeholder="Buscar por nombre, usuario o email…"
        autocomplete="off"
      />
    </div>

    <!-- ══ FILTER TABS ══ -->
    <div class="rrhh_tabs" id="rrhh_tabs">
      <button class="rrhh_tab active" data-tab="todos">
        <i class="fas fa-list"></i> Todos
      </button>
      <button class="rrhh_tab" data-tab="activos">
        <i class="fas fa-circle-check"></i> Activos
      </button>
      <button class="rrhh_tab" data-tab="pendientes">
        <i class="fas fa-clock"></i> Pendientes
      </button>
      <button class="rrhh_tab" data-tab="inactivos">
        <i class="fas fa-circle-xmark"></i> Inactivos
      </button>
    </div>

    <!-- ══ TABLE ══ -->
    <table class="rrhh_table" id="rrhhTable">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Participa</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody id="rrhh_tbody">
        <tr>
          <td colspan="8" class="rrhh_loading_cell">
            <div class="rrhh_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando colaboradores…</div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>

  <!-- ══ SIDE PANEL OVERLAY ══ -->
  <div class="rrhh_overlay" id="rrhh_overlay"></div>

  <!-- ══ SIDE PANEL ══ -->
  <aside class="rrhh_panel" id="rrhh_panel" aria-hidden="true">
    <div class="rrhh_panel_header">
      <div class="rrhh_panel_avatar_wrap" id="rrhh_panel_avatar"></div>
      <div class="rrhh_panel_title_wrap">
        <h2 class="rrhh_panel_name" id="rrhh_panel_name">Colaborador</h2>
        <span class="rrhh_panel_user" id="rrhh_panel_user">@usuario</span>
      </div>
      <button class="rrhh_panel_close" id="rrhh_panel_close" aria-label="Cerrar panel">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="rrhh_panel_body">
      <form id="rrhh_edit_form" autocomplete="off">
        <input type="hidden" id="edit_uid" />

        <!-- Personal -->
        <div class="rrhh_form_section">
          <div class="rrhh_form_section_title"><i class="fas fa-id-card"></i> Datos Personales</div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_nombre">Nombre</label>
            <input class="rrhh_form_input" id="edit_nombre" type="text" placeholder="Nombre" />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_apellidos">Apellidos</label>
            <input class="rrhh_form_input" id="edit_apellidos" type="text" placeholder="Apellidos" />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_usuario">Usuario</label>
            <input class="rrhh_form_input rrhh_input_locked" id="edit_usuario" type="text" disabled />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_email">Email</label>
            <input class="rrhh_form_input rrhh_input_locked" id="edit_email" type="email" disabled />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_descripcion">Descripción</label>
            <textarea class="rrhh_form_input rrhh_form_textarea" id="edit_descripcion" placeholder="Bio o descripción…" rows="2"></textarea>
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_imagen">Imagen (URL)</label>
            <input class="rrhh_form_input" id="edit_imagen" type="url" placeholder="https://…" />
          </div>
        </div>

        <!-- Laboral -->
        <div class="rrhh_form_section">
          <div class="rrhh_form_section_title"><i class="fas fa-briefcase"></i> Datos Laborales</div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_rol">Rol</label>
            <select class="rrhh_form_select" id="edit_rol">
              <option value="smile">Smile</option>
              <option value="gestor">Gestor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_estado">Estado</label>
            <select class="rrhh_form_select" id="edit_estado">
              <option value="activo">Activo</option>
              <option value="pendiente">Pendiente</option>
              <option value="suspendido">Suspendido</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
          <div class="rrhh_form_row rrhh_form_row_inline">
            <label class="rrhh_form_label">Participa en el reto</label>
            <label class="rrhh_toggle" id="edit_participa_toggle">
              <input type="checkbox" id="edit_participa" />
              <span class="rrhh_toggle_slider"></span>
            </label>
          </div>
        </div>

        <!-- Banca -->
        <div class="rrhh_form_section">
          <div class="rrhh_form_section_title"><i class="fas fa-building-columns"></i> Datos Bancarios</div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_banco">Banco / Método</label>
            <select class="rrhh_form_select" id="edit_banco">
              <option value="">— Seleccionar —</option>
              <option value="BCP">BCP</option>
              <option value="BBVA">BBVA</option>
              <option value="Interbank">Interbank</option>
              <option value="Yape">Yape</option>
              <option value="Plin">Plin</option>
              <option value="Efectivo">Efectivo</option>
            </select>
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_numeroCuenta">Número de Cuenta</label>
            <input class="rrhh_form_input" id="edit_numeroCuenta" type="text" placeholder="N.º cuenta o celular" />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_titularCuenta">Titular</label>
            <input class="rrhh_form_input" id="edit_titularCuenta" type="text" placeholder="Nombre del titular" />
          </div>
        </div>

        <div class="rrhh_panel_footer">
          <button type="submit" class="rrhh_btn_save" id="rrhh_btn_save">
            <i class="fas fa-save"></i>
            <span>Guardar cambios</span>
          </button>
        </div>
      </form>
    </div>
  </aside>
`,L=()=>{const s=e.length,a=e.filter(o=>o.participa==="si").length,t=e.filter(o=>o.estado==="pendiente").length,i=e.filter(o=>o.participa!=="si").length;r("#stat_total").text(s),r("#stat_activos").text(a),r("#stat_pendientes").text(t),r("#stat_inactivos").text(i)},d=()=>{L();const s=T();if(s.sort((t,i)=>{const o=t.participa==="si"?0:1,l=i.participa==="si"?0:1;return o!==l?o-l:(t.nombre||t.usuario||"").localeCompare(i.nombre||i.usuario||"","es")}),!s.length){const t=b.toLowerCase().trim();r("#rrhh_tbody").html(`
      <tr>
        <td colspan="8">
          <div class="rrhh_empty">
            <i class="fas fa-user-slash"></i>
            <p>${t?`Sin resultados para "<strong>${t}</strong>"`:"No hay colaboradores en esta categoría"}</p>
          </div>
        </td>
      </tr>
    `);return}const a=s.map(t=>{const i=t.estado==="pendiente";return`
      <tr data-id="${t.id}" class="${t.participa==="si"?"":"rrhh_row_inactive"}">
        <td>${A(t,40)}</td>
        <td class="rrhh_nombre">${E((t.nombre||"")+" "+(t.apellidos||"")).trim()||"—"}</td>
        <td class="rrhh_usuario">@${t.usuario||"—"}</td>
        <td class="rrhh_email">${t.email||"—"}</td>
        <td>${H(t.rol)}</td>
        <td>${S(t.id,t.participa)}</td>
        <td>${B(t.id,t.estado)}</td>
        <td class="rrhh_actions_cell">
          <button class="rrhh_btn_editar" data-id="${t.id}" title="Editar colaborador">
            <i class="fas fa-pen-to-square"></i> Editar
          </button>
          ${i?`
            <button class="rrhh_btn_approve" data-id="${t.id}" title="Aprobar solicitud">
              <i class="fas fa-check"></i>
            </button>
            <button class="rrhh_btn_reject" data-id="${t.id}" title="Rechazar solicitud">
              <i class="fas fa-times"></i>
            </button>
          `:""}
        </td>
      </tr>
    `}).join("");r("#rrhh_tbody").html(a)},D=s=>{const a=e.find(o=>o.id===s);if(!a)return;_=s;const t=E((a.nombre||"")+" "+(a.apellidos||"")).trim()||a.usuario||"—";r("#rrhh_panel_avatar").html(A(a,52)),r("#rrhh_panel_name").text(t),r("#rrhh_panel_user").text("@"+(a.usuario||"—")),r("#edit_uid").val(s),r("#edit_nombre").val(a.nombre||""),r("#edit_apellidos").val(a.apellidos||""),r("#edit_usuario").val(a.usuario||""),r("#edit_email").val(a.email||""),r("#edit_descripcion").val(a.descripcion||""),r("#edit_imagen").val(a.imagen||""),r("#edit_rol").val(a.rol||"smile"),r("#edit_estado").val(a.estado||"activo"),r("#edit_participa").prop("checked",a.participa==="si"),r("#edit_banco").val(a.banco||""),r("#edit_numeroCuenta").val(a.numeroCuenta||""),r("#edit_titularCuenta").val(a.titularCuenta||""),($("wiSmile")?.rol||"smile")==="gestor"?r('#edit_rol option[value="admin"]').hide():r('#edit_rol option[value="admin"]').show(),r("#rrhh_panel").addClass("open").attr("aria-hidden","false"),r("#rrhh_overlay").addClass("visible"),r("body").addClass("rrhh_no_scroll")},w=()=>{_=null,r("#rrhh_panel").removeClass("open").attr("aria-hidden","true"),r("#rrhh_overlay").removeClass("visible"),r("body").removeClass("rrhh_no_scroll")},N=async s=>{const a=e.findIndex(l=>l.id===s);if(a===-1)return;const i=e[a].participa==="si"?"no":"si",o=m(e[a].nombre||e[a].usuario||s);try{await f(g(p,"smiles",s),{participa:i}),e[a].participa=i,y(c),u(c,e,v),d(),n(`${o} ahora ${i==="si"?"participa ✅":"no participa ❌"}`,i==="si"?"success":"warning")}catch(l){console.error("[RRHH] toggleParticipa:",l),n("Error al actualizar participación","error"),d()}},j=async s=>{const a=e.findIndex(l=>l.id===s);if(a===-1)return;const i=e[a].estado==="activo"?"inactivo":"activo",o=m(e[a].nombre||e[a].usuario||s);try{await f(g(p,"smiles",s),{estado:i}),e[a].estado=i,y(c),u(c,e,v),d(),n(`${o} ahora está ${i==="activo"?"Activo ✅":"Inactivo ❌"}`,i==="activo"?"success":"warning")}catch(l){console.error("[RRHH] toggleEstado:",l),n("Error al actualizar estado","error"),d()}},z=async()=>{if(C||!_)return;C=!0;const s=r("#rrhh_btn_save");s.addClass("loading").prop("disabled",!0),r("#rrhh_header_card").addClass("smw_loading");const a={nombre:r("#edit_nombre").val().trim(),apellidos:r("#edit_apellidos").val().trim(),usuario:r("#edit_usuario").val().trim(),email:r("#edit_email").val().trim(),descripcion:r("#edit_descripcion").val().trim(),imagen:r("#edit_imagen").val().trim(),rol:r("#edit_rol").val(),estado:r("#edit_estado").val(),participa:r("#edit_participa").is(":checked")?"si":"no",banco:r("#edit_banco").val(),numeroCuenta:r("#edit_numeroCuenta").val().trim(),titularCuenta:r("#edit_titularCuenta").val().trim(),updatedAt:P()};Object.keys(a).forEach(t=>{a[t]===""&&delete a[t]});try{await f(g(p,"smiles",_),a);const t=e.findIndex(i=>i.id===_);t!==-1&&Object.assign(e[t],a),y(c),u(c,e,v),d(),w(),n("Colaborador actualizado ✅","success")}catch(t){console.error("[RRHH] saveEdit:",t),n("Error al guardar cambios","error")}finally{C=!1,s.removeClass("loading").prop("disabled",!1),r("#rrhh_header_card").removeClass("smw_loading")}},U=async s=>{const a=e.findIndex(i=>i.id===s);if(a===-1)return;const t=m(e[a].nombre||e[a].usuario||s);try{await f(g(p,"smiles",s),{estado:"activo",participa:"si"}),e[a].estado="activo",e[a].participa="si",y(c),u(c,e,v),d(),n(`${t} aprobado como colaborador ✅`,"success")}catch(i){console.error("[RRHH] aprobar:",i),n("Error al aprobar solicitud","error")}},V=async s=>{const a=e.findIndex(i=>i.id===s);if(a===-1)return;const t=m(e[a].nombre||e[a].usuario||s);try{await f(g(p,"smiles",s),{estado:"inactivo",participa:"no"}),e[a].estado="inactivo",e[a].participa="no",y(c),u(c,e,v),d(),n(`Solicitud de ${t} rechazada`,"warning")}catch(i){console.error("[RRHH] rechazar:",i),n("Error al rechazar solicitud","error")}},x=async(s=!1)=>{if(!s){const a=$(c);if(a){e=a,d();return}}r("#rrhh_tbody").html(`
    <tr>
      <td colspan="8" class="rrhh_loading_cell">
        <div class="rrhh_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando colaboradores…</div>
      </td>
    </tr>
  `);try{e=(await k(R(p,"smiles"))).docs.map(t=>({id:t.id,...t.data()})),e.sort((t,i)=>{const o=t.participa==="si"?0:1,l=i.participa==="si"?0:1;return o!==l?o-l:(t.nombre||t.usuario||"").localeCompare(i.nombre||i.usuario||"","es")}),u(c,e,v),d()}catch(a){console.error("[RRHH] loadUsuarios:",a),r("#rrhh_tbody").html(`
      <tr>
        <td colspan="8">
          <div class="rrhh_empty rrhh_empty_error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error al cargar colaboradores. Intenta de nuevo.</p>
          </div>
        </td>
      </tr>
    `),n("Error al cargar colaboradores","error")}},F=async()=>{r(".rrhh_wrap").addClass("visible"),window.__WIREADY__=!0,x(!1),r(document).on("input.rrhh","#rrhh_search",function(){b=r(this).val(),d()}),r(document).on("click.rrhh",".rrhh_tab",function(){h=r(this).data("tab"),r(".rrhh_tab").removeClass("active"),r(this).addClass("active"),d()}),r(document).on("click.rrhh","#rrhh_refresh",async function(){const s=r(this);s.addClass("rrhh_spinning"),b="",h="todos",r("#rrhh_search").val(""),r(".rrhh_tab").removeClass("active"),r('.rrhh_tab[data-tab="todos"]').addClass("active"),await x(!0),s.removeClass("rrhh_spinning"),n("Lista actualizada","success")}),r(document).on("change.rrhh",".rrhh_toggle_participa",function(){N(r(this).data("id"))}),r(document).on("change.rrhh",".rrhh_toggle_estado_input",function(){j(r(this).data("id"))}),r(document).on("click.rrhh",".rrhh_btn_editar",function(s){s.stopPropagation(),D(r(this).data("id"))}),r(document).on("click.rrhh","#rrhh_panel_close",w),r(document).on("click.rrhh","#rrhh_overlay",w),r(document).on("keydown.rrhh",function(s){s.key==="Escape"&&(w(),_closeModal())}),r(document).on("submit.rrhh","#rrhh_edit_form",function(s){s.preventDefault(),z()}),r(document).on("click.rrhh",".rrhh_btn_approve",function(s){s.stopPropagation(),U(r(this).data("id"))}),r(document).on("click.rrhh",".rrhh_btn_reject",function(s){s.stopPropagation(),V(r(this).data("id"))})},K=()=>{r(document).off(".rrhh"),r("body").removeClass("rrhh_no_scroll"),e=[],h="todos",b="",_=null,C=!1};export{K as cleanup,F as init,q as render};
