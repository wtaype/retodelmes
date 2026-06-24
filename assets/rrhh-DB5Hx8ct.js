import{r as e}from"./vendor-CZ6bxb2j.js";import{f as t,h as n,i as r,m as i,n as a,t as o}from"./widev-BkR2Na_W.js";import"./index-C2ky4mwu.js";import{A as s,N as c,O as l,_ as u,w as d}from"./firebase-BXqel3Di.js";import{n as f}from"./firebase-Cc-Gk9nK.js";import{iniciarModal as p}from"./trabajador_nuevo-DX9Eq2ik.js";var m=[],h=`todos`,g=``,_=null,v=!1,y=`rrhhUsuarios`,b=30,x=e=>((e.nombre||``)+` `+(e.apellidos||``)||e.usuario||`?`).trim().split(/\s+/).slice(0,2).map(e=>(e[0]||``).toUpperCase()).join(``),S=(e,t=40)=>{if(e.imagen)return`<div class="rrhh_avatar" style="width:${t}px;height:${t}px"><img src="${e.imagen}" alt="${o(e.nombre||e.usuario||`?`)}" loading="lazy"/></div>`;let n=x(e);return`<div class="rrhh_avatar rrhh_avatar_initials" data-rol="${e.rol||`smile`}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.36)}px">${n}</div>`},C=e=>{let t=(e||`smile`).toLowerCase();return`<span class="rrhh_rol_badge rrhh_rol_${t}">${o(t)}</span>`},w=(e,t)=>{let n=t===`activo`;return`
    <label class="rrhh_toggle" title="${n?`Activo`:`Inactivo`}">
      <input type="checkbox" class="rrhh_toggle_estado_input" data-id="${e}" ${n?`checked`:``} />
      <span class="rrhh_toggle_slider" style="--c: #29C72E"></span>
    </label>
  `},T=(e,t)=>`
    <label class="rrhh_toggle" title="${t===`si`?`Participando`:`No participa`}">
      <input type="checkbox" class="rrhh_toggle_participa" data-id="${e}" ${t===`si`?`checked`:``} />
      <span class="rrhh_toggle_slider"></span>
    </label>
  `,E=()=>{let e=g.toLowerCase().trim(),n=t(`wiSmile`)?.rol||`smile`;return m.filter(t=>!(n===`gestor`&&t.rol===`admin`||h===`activos`&&t.participa!==`si`||h===`pendientes`&&t.estado!==`pendiente`||h===`inactivos`&&t.participa!==`no`&&t.estado!==`inactivo`||e&&![t.nombre,t.apellidos,t.usuario,t.email].join(` `).toLowerCase().includes(e)))},D=()=>`
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
          <button class="rrhh_btn_nuevo" id="rrhh_btn_nuevo" title="Agregar nuevo colaborador">
            <i class="fas fa-user-plus"></i> Agregar nuevo trabajador
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
`,O=()=>{let t=m.length,n=m.filter(e=>e.participa===`si`).length,r=m.filter(e=>e.estado===`pendiente`).length,i=m.filter(e=>e.participa!==`si`).length;e(`#stat_total`).text(t),e(`#stat_activos`).text(n),e(`#stat_pendientes`).text(r),e(`#stat_inactivos`).text(i)},k=()=>{O();let t=E();if(t.sort((e,t)=>{let n=e.participa===`si`?0:1,r=t.participa===`si`?0:1;return n===r?(e.nombre||e.usuario||``).localeCompare(t.nombre||t.usuario||``,`es`):n-r}),!t.length){let t=g.toLowerCase().trim();e(`#rrhh_tbody`).html(`
      <tr>
        <td colspan="8">
          <div class="rrhh_empty">
            <i class="fas fa-user-slash"></i>
            <p>${t?`Sin resultados para "<strong>${t}</strong>"`:`No hay colaboradores en esta categoría`}</p>
          </div>
        </td>
      </tr>
    `);return}let n=t.map(e=>{let t=e.estado===`pendiente`;return`
      <tr data-id="${e.id}" class="${e.participa===`si`?``:`rrhh_row_inactive`}">
        <td>${S(e,40)}</td>
        <td class="rrhh_nombre">${a((e.nombre||``)+` `+(e.apellidos||``)).trim()||`—`}</td>
        <td class="rrhh_usuario">@${e.usuario||`—`}</td>
        <td class="rrhh_email">${e.email||`—`}</td>
        <td>${C(e.rol)}</td>
        <td>${T(e.id,e.participa)}</td>
        <td>${w(e.id,e.estado)}</td>
        <td class="rrhh_actions_cell">
          <button class="rrhh_btn_editar" data-id="${e.id}" title="Editar colaborador">
            <i class="fas fa-pen-to-square"></i> Editar
          </button>
          ${t?`
            <button class="rrhh_btn_approve" data-id="${e.id}" title="Aprobar solicitud">
              <i class="fas fa-check"></i>
            </button>
            <button class="rrhh_btn_reject" data-id="${e.id}" title="Rechazar solicitud">
              <i class="fas fa-times"></i>
            </button>
          `:``}
        </td>
      </tr>
    `}).join(``);e(`#rrhh_tbody`).html(n)},A=n=>{let r=m.find(e=>e.id===n);if(!r)return;_=n;let i=a((r.nombre||``)+` `+(r.apellidos||``)).trim()||r.usuario||`—`;e(`#rrhh_panel_avatar`).html(S(r,52)),e(`#rrhh_panel_name`).text(i),e(`#rrhh_panel_user`).text(`@`+(r.usuario||`—`)),e(`#edit_uid`).val(n),e(`#edit_nombre`).val(r.nombre||``),e(`#edit_apellidos`).val(r.apellidos||``),e(`#edit_usuario`).val(r.usuario||``),e(`#edit_email`).val(r.email||``),e(`#edit_descripcion`).val(r.descripcion||``),e(`#edit_imagen`).val(r.imagen||``),e(`#edit_rol`).val(r.rol||`smile`),e(`#edit_estado`).val(r.estado||`activo`),e(`#edit_participa`).prop(`checked`,r.participa===`si`),e(`#edit_banco`).val(r.banco||``),e(`#edit_numeroCuenta`).val(r.numeroCuenta||``),e(`#edit_titularCuenta`).val(r.titularCuenta||``),(t(`wiSmile`)?.rol||`smile`)===`gestor`?e(`#edit_rol option[value="admin"]`).hide():e(`#edit_rol option[value="admin"]`).show(),e(`#rrhh_panel`).addClass(`open`).attr(`aria-hidden`,`false`),e(`#rrhh_overlay`).addClass(`visible`),e(`body`).addClass(`rrhh_no_scroll`)},j=()=>{_=null,e(`#rrhh_panel`).removeClass(`open`).attr(`aria-hidden`,`true`),e(`#rrhh_overlay`).removeClass(`visible`),e(`body`).removeClass(`rrhh_no_scroll`)},M=async e=>{let t=m.findIndex(t=>t.id===e);if(t===-1)return;let a=m[t].participa===`si`?`no`:`si`,c=o(m[t].nombre||m[t].usuario||e);try{await d(s(f,`smiles`,e),{participa:a}),m[t].participa=a,i(y),n(y,m,b),k(),r(`${c} ahora ${a===`si`?`participa ✅`:`no participa ❌`}`,a===`si`?`success`:`warning`)}catch(e){console.error(`[RRHH] toggleParticipa:`,e),r(`Error al actualizar participación`,`error`),k()}},N=async e=>{let t=m.findIndex(t=>t.id===e);if(t===-1)return;let a=m[t].estado===`activo`?`inactivo`:`activo`,c=o(m[t].nombre||m[t].usuario||e);try{await d(s(f,`smiles`,e),{estado:a}),m[t].estado=a,i(y),n(y,m,b),k(),r(`${c} ahora está ${a===`activo`?`Activo ✅`:`Inactivo ❌`}`,a===`activo`?`success`:`warning`)}catch(e){console.error(`[RRHH] toggleEstado:`,e),r(`Error al actualizar estado`,`error`),k()}},P=async()=>{if(v||!_)return;v=!0;let t=e(`#rrhh_btn_save`);t.addClass(`loading`).prop(`disabled`,!0),e(`#rrhh_header_card`).addClass(`smw_loading`);let a={nombre:e(`#edit_nombre`).val().trim(),apellidos:e(`#edit_apellidos`).val().trim(),usuario:e(`#edit_usuario`).val().trim(),email:e(`#edit_email`).val().trim(),descripcion:e(`#edit_descripcion`).val().trim(),imagen:e(`#edit_imagen`).val().trim(),rol:e(`#edit_rol`).val(),estado:e(`#edit_estado`).val(),participa:e(`#edit_participa`).is(`:checked`)?`si`:`no`,banco:e(`#edit_banco`).val(),numeroCuenta:e(`#edit_numeroCuenta`).val().trim(),titularCuenta:e(`#edit_titularCuenta`).val().trim(),updatedAt:c()};Object.keys(a).forEach(e=>{a[e]===``&&delete a[e]});try{await d(s(f,`smiles`,_),a);let e=m.findIndex(e=>e.id===_);e!==-1&&Object.assign(m[e],a),i(y),n(y,m,b),k(),j(),r(`Colaborador actualizado ✅`,`success`)}catch(e){console.error(`[RRHH] saveEdit:`,e),r(`Error al guardar cambios`,`error`)}finally{v=!1,t.removeClass(`loading`).prop(`disabled`,!1),e(`#rrhh_header_card`).removeClass(`smw_loading`)}},F=async e=>{let t=m.findIndex(t=>t.id===e);if(t===-1)return;let a=o(m[t].nombre||m[t].usuario||e);try{await d(s(f,`smiles`,e),{estado:`activo`,participa:`si`}),m[t].estado=`activo`,m[t].participa=`si`,i(y),n(y,m,b),k(),r(`${a} aprobado como colaborador ✅`,`success`)}catch(e){console.error(`[RRHH] aprobar:`,e),r(`Error al aprobar solicitud`,`error`)}},I=async e=>{let t=m.findIndex(t=>t.id===e);if(t===-1)return;let a=o(m[t].nombre||m[t].usuario||e);try{await d(s(f,`smiles`,e),{estado:`inactivo`,participa:`no`}),m[t].estado=`inactivo`,m[t].participa=`no`,i(y),n(y,m,b),k(),r(`Solicitud de ${a} rechazada`,`warning`)}catch(e){console.error(`[RRHH] rechazar:`,e),r(`Error al rechazar solicitud`,`error`)}},L=async(i=!1)=>{if(!i){let e=t(y);if(e){m=e,k();return}}e(`#rrhh_tbody`).html(`
    <tr>
      <td colspan="8" class="rrhh_loading_cell">
        <div class="rrhh_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando colaboradores…</div>
      </td>
    </tr>
  `);try{m=(await u(l(f,`smiles`))).docs.map(e=>({id:e.id,...e.data()})),m.sort((e,t)=>{let n=e.participa===`si`?0:1,r=t.participa===`si`?0:1;return n===r?(e.nombre||e.usuario||``).localeCompare(t.nombre||t.usuario||``,`es`):n-r}),n(y,m,b),k()}catch(t){console.error(`[RRHH] loadUsuarios:`,t),e(`#rrhh_tbody`).html(`
      <tr>
        <td colspan="8">
          <div class="rrhh_empty rrhh_empty_error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error al cargar colaboradores. Intenta de nuevo.</p>
          </div>
        </td>
      </tr>
    `),r(`Error al cargar colaboradores`,`error`)}},R=async()=>{e(`.rrhh_wrap`).addClass(`visible`),window.__WIREADY__=!0,L(!1),e(document).on(`input.rrhh`,`#rrhh_search`,function(){g=e(this).val(),k()}),e(document).on(`click.rrhh`,`.rrhh_tab`,function(){h=e(this).data(`tab`),e(`.rrhh_tab`).removeClass(`active`),e(this).addClass(`active`),k()}),e(document).on(`click.rrhh`,`#rrhh_refresh`,async function(){let t=e(this);t.addClass(`rrhh_spinning`),g=``,h=`todos`,e(`#rrhh_search`).val(``),e(`.rrhh_tab`).removeClass(`active`),e(`.rrhh_tab[data-tab="todos"]`).addClass(`active`),await L(!0),t.removeClass(`rrhh_spinning`),r(`Lista actualizada`,`success`)}),e(document).on(`change.rrhh`,`.rrhh_toggle_participa`,function(){M(e(this).data(`id`))}),e(document).on(`change.rrhh`,`.rrhh_toggle_estado_input`,function(){N(e(this).data(`id`))}),e(document).on(`click.rrhh`,`.rrhh_btn_editar`,function(t){t.stopPropagation(),A(e(this).data(`id`))}),e(document).on(`click.rrhh`,`#rrhh_panel_close`,j),e(document).on(`click.rrhh`,`#rrhh_overlay`,j),e(document).on(`click.rrhh`,`#rrhh_btn_nuevo`,function(){p()}),e(document).on(`keydown.rrhh`,function(e){e.key===`Escape`&&j()}),e(document).on(`submit.rrhh`,`#rrhh_edit_form`,function(e){e.preventDefault(),P()}),e(document).on(`click.rrhh`,`.rrhh_btn_approve`,function(t){t.stopPropagation(),F(e(this).data(`id`))}),e(document).on(`click.rrhh`,`.rrhh_btn_reject`,function(t){t.stopPropagation(),I(e(this).data(`id`))})},z=()=>{e(document).off(`.rrhh`),e(`body`).removeClass(`rrhh_no_scroll`),m=[],h=`todos`,g=``,_=null,v=!1};export{z as cleanup,R as init,D as render};