import{$ as r}from"./vendor-PbmUQHyn.js";import{db as u}from"./firebase-DJVx3tD8.js";import{i as T,c as D,A as x,e as g,u as P,v as I}from"./firebase-BM1KOhEp.js";import{c as i,l as B,w as m,a as E,C as v,t as w}from"./index-D2m2wUVg.js";let s=[],_="todos",f="",p=null,y=!1;const l="rrhhUsuarios",b=30,H=e=>((e.nombre||"")+" "+(e.apellidos||"")||e.usuario||"?").trim().split(/\s+/).slice(0,2).map(a=>(a[0]||"").toUpperCase()).join(""),L=(e,a=40)=>{if(e.imagen)return`<div class="rrhh_avatar" style="width:${a}px;height:${a}px"><img src="${e.imagen}" alt="${v(e.nombre||e.usuario||"?")}" loading="lazy"/></div>`;const t=H(e);return`<div class="rrhh_avatar rrhh_avatar_initials" data-rol="${e.rol||"smile"}" style="width:${a}px;height:${a}px;font-size:${Math.round(a*.36)}px">${t}</div>`},S=e=>{const a=(e||"smile").toLowerCase();return`<span class="rrhh_rol_badge rrhh_rol_${a}">${v(a)}</span>`},N=e=>{const a=(e||"activo").toLowerCase();return`<span class="rrhh_status rrhh_status_${a}">${E(a)}</span>`},j=(e,a)=>`
    <label class="rrhh_toggle" title="${a==="si"?"Participando":"No participa"}">
      <input type="checkbox" class="rrhh_toggle_participa" data-id="${e}" ${a==="si"?"checked":""} />
      <span class="rrhh_toggle_slider"></span>
    </label>
  `,z=()=>{const e=f.toLowerCase().trim();return s.filter(a=>!(_==="activos"&&a.participa!=="si"||_==="pendientes"&&a.estado!=="pendiente"||_==="inactivos"&&a.participa!=="no"&&a.estado!=="inactivo"||e&&![a.nombre,a.apellidos,a.usuario,a.email].join(" ").toLowerCase().includes(e)))},X=()=>`
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
          <button class="rrhh_btn_crear" id="rrhh_btn_crear">
            <i class="fas fa-user-plus"></i>
            <span>Nuevo</span>
          </button>
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
    <div class="rrhh_table_wrap">
      <table class="rrhh_table" id="rrhhTable">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Participa</th>
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
            <input class="rrhh_form_input" id="edit_usuario" type="text" placeholder="usuario" />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_email">Email</label>
            <input class="rrhh_form_input" id="edit_email" type="email" placeholder="correo@email.com" />
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
              <option value="empresa">Empresa</option>
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

  <!-- ══ CREATE MODAL ══ -->
  <div class="rrhh_modal_overlay" id="rrhh_modal_overlay" aria-hidden="true">
    <div class="rrhh_modal" role="dialog" aria-modal="true" aria-labelledby="rrhh_modal_title">
      <div class="rrhh_modal_header">
        <h3 class="rrhh_modal_title" id="rrhh_modal_title">
          <i class="fas fa-user-plus"></i> Crear Trabajador
        </h3>
        <button class="rrhh_modal_close" id="rrhh_modal_close" aria-label="Cerrar">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <form id="rrhh_create_form" autocomplete="off">
        <div class="rrhh_modal_body">
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="new_nombre">Nombre *</label>
            <input class="rrhh_form_input" id="new_nombre" type="text" placeholder="Nombre" required />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="new_apellidos">Apellidos *</label>
            <input class="rrhh_form_input" id="new_apellidos" type="text" placeholder="Apellidos" required />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="new_usuario">Usuario (ID único) *</label>
            <input class="rrhh_form_input rrhh_input_slug" id="new_usuario" type="text" placeholder="usuario.slug" required />
            <span class="rrhh_form_hint">Solo letras, números y puntos. Será el ID del documento.</span>
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="new_email">Email *</label>
            <input class="rrhh_form_input" id="new_email" type="email" placeholder="correo@email.com" required />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="new_rol">Rol</label>
            <select class="rrhh_form_select" id="new_rol">
              <option value="smile">Smile</option>
              <option value="gestor">Gestor</option>
              <option value="empresa">Empresa</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <div class="rrhh_modal_footer">
          <button type="button" class="rrhh_btn_cancel_modal" id="rrhh_modal_cancel">Cancelar</button>
          <button type="submit" class="rrhh_btn_save" id="rrhh_btn_create_save">
            <i class="fas fa-user-plus"></i>
            <span>Crear trabajador</span>
          </button>
        </div>
      </form>
    </div>
  </div>
`,U=()=>{const e=s.length,a=s.filter(c=>c.participa==="si").length,t=s.filter(c=>c.estado==="pendiente").length,o=s.filter(c=>c.participa!=="si").length;r("#stat_total").text(e),r("#stat_activos").text(a),r("#stat_pendientes").text(t),r("#stat_inactivos").text(o)},n=()=>{U();const e=z();if(!e.length){const t=f.toLowerCase().trim();r("#rrhh_tbody").html(`
      <tr>
        <td colspan="8">
          <div class="rrhh_empty">
            <i class="fas fa-user-slash"></i>
            <p>${t?`Sin resultados para "<strong>${t}</strong>"`:"No hay colaboradores en esta categoría"}</p>
          </div>
        </td>
      </tr>
    `);return}const a=e.map(t=>{const o=t.estado==="pendiente";return`
      <tr data-id="${t.id}" class="${t.participa==="si"?"":"rrhh_row_inactive"}">
        <td>${L(t,40)}</td>
        <td class="rrhh_nombre">${E((t.nombre||"")+" "+(t.apellidos||"")).trim()||"—"}</td>
        <td class="rrhh_usuario">@${t.usuario||"—"}</td>
        <td class="rrhh_email">${t.email||"—"}</td>
        <td>${S(t.rol)}</td>
        <td>${N(t.estado)}</td>
        <td>${j(t.id,t.participa)}</td>
        <td class="rrhh_actions_cell">
          <button class="rrhh_btn_editar" data-id="${t.id}" title="Editar colaborador">
            <i class="fas fa-pen-to-square"></i> Editar
          </button>
          ${o?`
            <button class="rrhh_btn_approve" data-id="${t.id}" title="Aprobar solicitud">
              <i class="fas fa-check"></i>
            </button>
            <button class="rrhh_btn_reject" data-id="${t.id}" title="Rechazar solicitud">
              <i class="fas fa-times"></i>
            </button>
          `:""}
        </td>
      </tr>
    `}).join("");r("#rrhh_tbody").html(a)},q=e=>{const a=s.find(o=>o.id===e);if(!a)return;p=e;const t=E((a.nombre||"")+" "+(a.apellidos||"")).trim()||a.usuario||"—";r("#rrhh_panel_avatar").html(L(a,52)),r("#rrhh_panel_name").text(t),r("#rrhh_panel_user").text("@"+(a.usuario||"—")),r("#edit_uid").val(e),r("#edit_nombre").val(a.nombre||""),r("#edit_apellidos").val(a.apellidos||""),r("#edit_usuario").val(a.usuario||""),r("#edit_email").val(a.email||""),r("#edit_descripcion").val(a.descripcion||""),r("#edit_imagen").val(a.imagen||""),r("#edit_rol").val(a.rol||"smile"),r("#edit_estado").val(a.estado||"activo"),r("#edit_participa").prop("checked",a.participa==="si"),r("#edit_banco").val(a.banco||""),r("#edit_numeroCuenta").val(a.numeroCuenta||""),r("#edit_titularCuenta").val(a.titularCuenta||""),r("#rrhh_panel").addClass("open").attr("aria-hidden","false"),r("#rrhh_overlay").addClass("visible"),r("body").addClass("rrhh_no_scroll")},C=()=>{p=null,r("#rrhh_panel").removeClass("open").attr("aria-hidden","true"),r("#rrhh_overlay").removeClass("visible"),r("body").removeClass("rrhh_no_scroll")},Y=()=>{r("#rrhh_create_form")[0].reset(),r("#rrhh_modal_overlay").addClass("open").attr("aria-hidden","false"),r("body").addClass("rrhh_no_scroll"),setTimeout(()=>r("#new_nombre").trigger("focus"),120)},$=()=>{r("#rrhh_modal_overlay").removeClass("open").attr("aria-hidden","true"),r("body").removeClass("rrhh_no_scroll")},M=async e=>{const a=s.findIndex(d=>d.id===e);if(a===-1)return;const o=s[a].participa==="si"?"no":"si",c=v(s[a].nombre||s[a].usuario||e);try{await x(g(u,"smiles",e),{participa:o}),s[a].participa=o,w(l),m(l,s,b),n(),i(`${c} ahora ${o==="si"?"participa ✅":"no participa ❌"}`,o==="si"?"success":"warning")}catch(d){console.error("[RRHH] toggleParticipa:",d),i("Error al actualizar participación","error"),n()}},G=async()=>{if(y||!p)return;y=!0;const e=r("#rrhh_btn_save");e.addClass("loading").prop("disabled",!0),r("#rrhh_header_card").addClass("smw_loading");const a={nombre:r("#edit_nombre").val().trim(),apellidos:r("#edit_apellidos").val().trim(),usuario:r("#edit_usuario").val().trim(),email:r("#edit_email").val().trim(),descripcion:r("#edit_descripcion").val().trim(),imagen:r("#edit_imagen").val().trim(),rol:r("#edit_rol").val(),estado:r("#edit_estado").val(),participa:r("#edit_participa").is(":checked")?"si":"no",banco:r("#edit_banco").val(),numeroCuenta:r("#edit_numeroCuenta").val().trim(),titularCuenta:r("#edit_titularCuenta").val().trim(),updatedAt:P()};Object.keys(a).forEach(t=>{a[t]===""&&delete a[t]});try{await x(g(u,"smiles",p),a);const t=s.findIndex(o=>o.id===p);t!==-1&&Object.assign(s[t],a),w(l),m(l,s,b),n(),C(),i("Colaborador actualizado ✅","success")}catch(t){console.error("[RRHH] saveEdit:",t),i("Error al guardar cambios","error")}finally{y=!1,e.removeClass("loading").prop("disabled",!1),r("#rrhh_header_card").removeClass("smw_loading")}},O=async e=>{const a=s.findIndex(o=>o.id===e);if(a===-1)return;const t=v(s[a].nombre||s[a].usuario||e);try{await x(g(u,"smiles",e),{estado:"activo",participa:"si"}),s[a].estado="activo",s[a].participa="si",w(l),m(l,s,b),n(),i(`${t} aprobado como colaborador ✅`,"success")}catch(o){console.error("[RRHH] aprobar:",o),i("Error al aprobar solicitud","error")}},V=async e=>{const a=s.findIndex(o=>o.id===e);if(a===-1)return;const t=v(s[a].nombre||s[a].usuario||e);try{await x(g(u,"smiles",e),{estado:"inactivo",participa:"no"}),s[a].estado="inactivo",s[a].participa="no",w(l),m(l,s,b),n(),i(`Solicitud de ${t} rechazada`,"warning")}catch(o){console.error("[RRHH] rechazar:",o),i("Error al rechazar solicitud","error")}},F=async()=>{const e=r("#new_nombre").val().trim(),a=r("#new_apellidos").val().trim(),t=r("#new_usuario").val().trim().toLowerCase().replace(/[^a-z0-9._-]/g,""),o=r("#new_email").val().trim(),c=r("#new_rol").val();if(!e||!a||!t||!o){i("Completa todos los campos requeridos","warning");return}if(s.some(h=>h.id===t||h.usuario===t)){i("Ya existe un colaborador con ese usuario","error");return}const d=r("#rrhh_btn_create_save");d.addClass("loading").prop("disabled",!0),r("#rrhh_header_card").addClass("smw_loading");try{const h={nombre:e,apellidos:a,usuario:t,email:o,rol:c,participa:"no",estado:"activo",createdAt:P()};await I(g(u,"smiles",t),h),s.push({id:t,...h}),s.sort((A,k)=>(A.nombre||A.usuario||"").localeCompare(k.nombre||k.usuario||"","es")),w(l),m(l,s,b),n(),$(),i(`Trabajador "${v(e)}" creado ✅`,"success")}catch(h){console.error("[RRHH] crearTrabajador:",h),i("Error al crear trabajador","error")}finally{d.removeClass("loading").prop("disabled",!1),r("#rrhh_header_card").removeClass("smw_loading")}},R=async(e=!1)=>{if(!e){const a=B(l);if(a){s=a,n();return}}r("#rrhh_tbody").html(`
    <tr>
      <td colspan="8" class="rrhh_loading_cell">
        <div class="rrhh_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando colaboradores…</div>
      </td>
    </tr>
  `);try{s=(await T(D(u,"smiles"))).docs.map(t=>({id:t.id,...t.data()})),s.sort((t,o)=>(t.nombre||t.usuario||"").localeCompare(o.nombre||o.usuario||"","es")),m(l,s,b),n()}catch(a){console.error("[RRHH] loadUsuarios:",a),r("#rrhh_tbody").html(`
      <tr>
        <td colspan="8">
          <div class="rrhh_empty rrhh_empty_error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error al cargar colaboradores. Intenta de nuevo.</p>
          </div>
        </td>
      </tr>
    `),i("Error al cargar colaboradores","error")}},Z=async()=>{r(".rrhh_wrap").addClass("visible"),window.__WIREADY__=!0,R(!1),r(document).on("input.rrhh","#rrhh_search",function(){f=r(this).val(),n()}),r(document).on("click.rrhh",".rrhh_tab",function(){_=r(this).data("tab"),r(".rrhh_tab").removeClass("active"),r(this).addClass("active"),n()}),r(document).on("click.rrhh","#rrhh_refresh",async function(){const e=r(this);e.addClass("rrhh_spinning"),f="",_="todos",r("#rrhh_search").val(""),r(".rrhh_tab").removeClass("active"),r('.rrhh_tab[data-tab="todos"]').addClass("active"),await R(!0),e.removeClass("rrhh_spinning"),i("Lista actualizada","success")}),r(document).on("change.rrhh",".rrhh_toggle_participa",function(){M(r(this).data("id"))}),r(document).on("click.rrhh",".rrhh_btn_editar",function(e){e.stopPropagation(),q(r(this).data("id"))}),r(document).on("click.rrhh","#rrhh_panel_close",C),r(document).on("click.rrhh","#rrhh_overlay",C),r(document).on("keydown.rrhh",function(e){e.key==="Escape"&&(C(),$())}),r(document).on("submit.rrhh","#rrhh_edit_form",function(e){e.preventDefault(),G()}),r(document).on("click.rrhh",".rrhh_btn_approve",function(e){e.stopPropagation(),O(r(this).data("id"))}),r(document).on("click.rrhh",".rrhh_btn_reject",function(e){e.stopPropagation(),V(r(this).data("id"))}),r(document).on("click.rrhh","#rrhh_btn_crear",Y),r(document).on("click.rrhh","#rrhh_modal_close, #rrhh_modal_cancel",$),r(document).on("click.rrhh","#rrhh_modal_overlay",function(e){r(e.target).is("#rrhh_modal_overlay")&&$()}),r(document).on("submit.rrhh","#rrhh_create_form",function(e){e.preventDefault(),F()}),r(document).on("input.rrhh","#new_nombre, #new_apellidos",function(){const e=r("#new_nombre").val().trim().toLowerCase(),a=r("#new_apellidos").val().trim().toLowerCase().split(/\s+/)[0]||"",t=(e.split(/\s+/)[0]||"")+(a?"."+a:"");r("#new_usuario").val(t.replace(/[^a-z0-9._-]/g,""))}),r(document).on("input.rrhh","#new_usuario",function(){const e=r(this).val().toLowerCase().replace(/[^a-z0-9._-]/g,"");r(this).val(e)})},rr=()=>{r(document).off(".rrhh"),r("body").removeClass("rrhh_no_scroll"),s=[],_="todos",f="",p=null,y=!1};export{rr as cleanup,Z as init,X as render};
