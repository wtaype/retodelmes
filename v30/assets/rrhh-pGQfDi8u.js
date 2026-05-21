import{$ as i}from"./vendor-PbmUQHyn.js";import{auth as _,db as p}from"./firebase-DaxCdgUB.js";import{o as w,i as y,c as C,A as b,e as v}from"./firebase-BM1KOhEp.js";import{u as m,e as x,c as n,l as R,w as A,C as l}from"./index-B-SYHrlC.js";let e=[],d="";const H=()=>new Promise(r=>{if(_.currentUser)return r(_.currentUser);const t=w(_,a=>{t(),r(a)})}),P=()=>`
  <div class="rrhh_wrap">

    <!-- Header -->
    <div class="rrhh_header">
      <div class="rrhh_header_text">
        <h1 class="rrhh_title">
          <i class="fas fa-users"></i>
          Gestión de Colaboradores
        </h1>
        <p class="rrhh_subtitle">Administra el equipo, roles y participación en el reto</p>
      </div>
      <button class="rrhh_refresh_btn" id="rrhh_refresh" title="Actualizar lista">
        <i class="fas fa-sync-alt"></i>
      </button>
    </div>

    <!-- Search -->
    <div class="rrhh_search_bar">
      <i class="fas fa-search rrhh_search_icon"></i>
      <input
        type="text"
        id="rrhh_search"
        class="rrhh_search_input"
        placeholder="Buscar por nombre o usuario…"
        autocomplete="off"
      />
    </div>

    <!-- Stats -->
    <div class="rrhh_stats_bar" id="rrhh_stats">
      <div class="rrhh_stat_chip rrhh_stat_total">
        <span class="rrhh_stat_num" id="stat_total">—</span>
        <span class="rrhh_stat_label">Total</span>
      </div>
      <div class="rrhh_stat_chip rrhh_stat_activos">
        <span class="rrhh_stat_num" id="stat_activos">—</span>
        <span class="rrhh_stat_label">Activos</span>
      </div>
      <div class="rrhh_stat_chip rrhh_stat_inactivos">
        <span class="rrhh_stat_num" id="stat_inactivos">—</span>
        <span class="rrhh_stat_label">Inactivos</span>
      </div>
    </div>

    <!-- Table -->
    <div class="rrhh_table_wrap">
      <table class="rrhh_table" id="rrhhTable">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre Completo</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Participa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="rrhh_tbody">
          <tr>
            <td colspan="7" class="rrhh_loading_cell">
              <div class="rrhh_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando colaboradores…</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
`,I=r=>{if(r.imagen)return`<div class="rrhh_avatar"><img src="${r.imagen}" alt="${l(r.nombre||r.usuario||"?")}" loading="lazy"/></div>`;const t=(r.nombre||r.usuario||"?").split(" ").slice(0,2).map(a=>a[0]?.toUpperCase()||"").join("");return`<div class="rrhh_avatar rrhh_avatar_initials" data-rol="${r.rol||"smile"}">${t}</div>`},g=r=>{const t=(r||"smile").toLowerCase();return`<span class="rrhh_rol_badge rrhh_rol_${t}">${l(t)}</span>`},T=(r,t)=>`
    <label class="rrhh_toggle" title="${t==="si"?"Activo":"Inactivo"}">
      <input type="checkbox" class="rrhh_toggle_participa" data-id="${r}" ${t==="si"?"checked":""} />
      <span class="rrhh_toggle_slider"></span>
    </label>
  `,L=(r,t)=>{const o=["smile","gestor","empresa","admin"].map(c=>`<option value="${c}" ${c===t?"selected":""}>${l(c)}</option>`).join("");return`<select class="rrhh_rol_select" data-id="${r}">${o}</select>`},h=()=>{const r=d.toLowerCase().trim(),t=r?e.filter(s=>(s.nombre||"").toLowerCase().includes(r)||(s.usuario||"").toLowerCase().includes(r)):e,a=e.filter(s=>s.participa==="si").length,o=e.length-a;if(i("#stat_total").text(e.length),i("#stat_activos").text(a),i("#stat_inactivos").text(o),!t.length){i("#rrhh_tbody").html(`
      <tr>
        <td colspan="7">
          <div class="rrhh_empty">
            <i class="fas fa-user-slash"></i>
            <p>${r?'Sin resultados para "'+r+'"':"No hay colaboradores registrados"}</p>
          </div>
        </td>
      </tr>
    `);return}const c=t.map(s=>`
    <tr data-id="${s.id}" class="${s.participa==="si"?"":"rrhh_row_inactive"}">
      <td>${I(s)}</td>
      <td class="rrhh_nombre">${l(s.nombre||"—")}</td>
      <td class="rrhh_usuario">@${s.usuario||"—"}</td>
      <td class="rrhh_email">${s.email||"—"}</td>
      <td class="rrhh_rol_cell">${g(s.rol)}</td>
      <td>${T(s.id,s.participa)}</td>
      <td>
        <button class="rrhh_btn_rol" data-id="${s.id}" title="Cambiar rol">
          <i class="fas fa-user-tag"></i> Rol
        </button>
      </td>
    </tr>
  `).join("");i("#rrhh_tbody").html(c)},S=async r=>{const t=e.findIndex(s=>s.id===r);if(t===-1)return;const o=e[t].participa==="si"?"no":"si",c=l(e[t].nombre||e[t].usuario||r);try{await b(v(p,"smiles",r),{participa:o}),e[t].participa=o,h(),n(`${c} ahora ${o==="si"?"participa ✅":"no participa ❌"} en el reto`,o==="si"?"success":"warning")}catch(s){console.error("[RRHH] toggleParticipa error:",s),n("Error al actualizar participación","error"),h()}},k=async(r,t)=>{const a=e.findIndex(c=>c.id===r);if(a===-1)return;const o=l(e[a].nombre||e[a].usuario||r);try{await b(v(p,"smiles",r),{rol:t}),e[a].rol=t,h(),n(`Rol de ${o} actualizado a "${l(t)}" ✅`,"success")}catch(c){console.error("[RRHH] cambiarRol error:",c),n("Error al cambiar el rol","error"),h()}},f=async(r=!1)=>{const t="rrhhUsuarios";if(!r){const o=R(t);if(o){e=o,h();return}}i("#rrhh_tbody").html(`
    <tr>
      <td colspan="7" class="rrhh_loading_cell">
        <div class="rrhh_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando colaboradores…</div>
      </td>
    </tr>
  `);try{e=(await y(C(p,"smiles"))).docs.map(c=>({id:c.id,...c.data()})),e.sort((c,s)=>(c.nombre||c.usuario||"").localeCompare(s.nombre||s.usuario||"","es")),A(t,e,30),h()}catch(o){console.error("[RRHH] loadUsuarios error:",o),i("#rrhh_tbody").html(`
      <tr>
        <td colspan="7">
          <div class="rrhh_empty rrhh_empty_error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error al cargar los colaboradores. Intenta de nuevo.</p>
          </div>
        </td>
      </tr>
    `),n("Error al cargar colaboradores","error")}},j=async()=>{if(!await H()){m("/login");return}const t=x?.wiSmile||window?.wiSmile||null;if(t&&t.rol){const a=(t.rol||"").toLowerCase();if(a!=="gestor"&&a!=="admin"){n("No tienes permiso para acceder a esta sección","error"),m("/gestor");return}}await f(!1),i(document).on("input.rrhh","#rrhh_search",function(){d=i(this).val(),h()}),i(document).on("click.rrhh","#rrhh_refresh",async function(){const a=i(this);a.addClass("rrhh_spinning"),d="",i("#rrhh_search").val(""),await f(!0),a.removeClass("rrhh_spinning"),n("Lista actualizada","success")}),i(document).on("change.rrhh",".rrhh_toggle_participa",function(){const a=i(this).data("id");S(a)}),i(document).on("click.rrhh",".rrhh_btn_rol",function(){const a=i(this).data("id"),o=e.findIndex($=>$.id===a);if(o===-1)return;const s=i(`tr[data-id="${a}"]`).find(".rrhh_rol_cell"),u=i(this);s.find(".rrhh_rol_select").length||(s.html(L(a,e[o].rol)),u.html('<i class="fas fa-times"></i> Cancel'),u.addClass("rrhh_btn_cancel"),s.find(".rrhh_rol_select").trigger("focus"))}),i(document).on("click.rrhh",".rrhh_btn_cancel",function(){const a=i(this).data("id"),o=e.findIndex(s=>s.id===a);if(o===-1)return;i(`tr[data-id="${a}"]`).find(".rrhh_rol_cell").html(g(e[o].rol)),i(this).html('<i class="fas fa-user-tag"></i> Rol'),i(this).removeClass("rrhh_btn_cancel")}),i(document).on("change.rrhh",".rrhh_rol_select",function(){const a=i(this).data("id"),o=i(this).val();k(a,o)})},B=()=>{i(document).off(".rrhh"),e=[],d=""};export{B as cleanup,j as init,P as render};
