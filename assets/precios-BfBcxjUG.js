import{$ as a}from"./vendor-2D3jvCpt.js";import{db as f}from"./firebase-_xy253Nz.js";import{i as R,c as x,A as S,e as k,u as m,a as I,d as D}from"./firebase-BwR1K4LJ.js";import{b as l,j as O,u as P,r as w,C}from"./index-CaICLHnq.js";let i=[],c={},n={},h=0;const d=".prec",_="toursSmile",K=()=>`
  <div class="prec_wrap">

    <!-- ══ HEADER ══ -->
    <div class="prec_header" id="prec_header">
      <div class="prec_header_inner">
        <div class="prec_header_text">
          <h1 class="prec_title">
            <i class="fas fa-tags"></i>
            Gestión de Precios
          </h1>
          <p class="prec_subtitle">Edita tours, precios, puntos y comisiones del reto</p>
        </div>
        <div class="prec_header_actions">
          <button class="prec_btn_new" id="prec_btn_new">
            <i class="fas fa-plus"></i> Nuevo Tour
          </button>
          <button class="prec_refresh_btn" id="prec_refresh" title="Actualizar lista">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="prec_stats_bar" id="prec_stats">
        <div class="prec_stat_chip prec_stat_total">
          <span class="prec_stat_num" id="prec_stat_total">—</span>
          <span class="prec_stat_label">Total</span>
        </div>
        <div class="prec_stat_chip prec_stat_activos">
          <span class="prec_stat_num" id="prec_stat_activos">—</span>
          <span class="prec_stat_label">Activos</span>
        </div>
        <div class="prec_stat_chip prec_stat_inactivos">
          <span class="prec_stat_num" id="prec_stat_inactivos">—</span>
          <span class="prec_stat_label">Inactivos</span>
        </div>
      </div>
    </div>

    <!-- ══ TABLE CARD ══ -->
    <div class="prec_table_card">
      <div class="prec_table_title_bar">
        <i class="fas fa-table-list"></i>
        <span>Lista de Tours</span>
      </div>
      <div class="prec_table_scroll">
        <table class="prec_table" id="prec_table">
          <thead>
            <tr>
              <th class="prec_th">#</th>
              <th class="prec_th">Tour</th>
              <th class="prec_th">Precio (S/)</th>
              <th class="prec_th">Puntos</th>
              <th class="prec_th">Comisión (%)</th>
              <th class="prec_th">Estado</th>
              <th class="prec_th prec_th_actions">Acciones</th>
            </tr>
          </thead>
          <tbody id="prec_tbody">
            ${E(6)}
          </tbody>
        </table>
      </div>
    </div>

  </div>
`;function E(t){return Array.from({length:t},()=>`
    <tr class="prec_row_skeleton">
      <td><div class="smw_sk_el" style="width:32px;height:22px;border-radius:6px"></div></td>
      <td><div class="smw_sk_el" style="width:120px;height:22px;border-radius:6px"></div></td>
      <td><div class="smw_sk_el" style="width:64px;height:22px;border-radius:6px"></div></td>
      <td><div class="smw_sk_el" style="width:56px;height:22px;border-radius:6px"></div></td>
      <td><div class="smw_sk_el" style="width:56px;height:22px;border-radius:6px"></div></td>
      <td><div class="smw_sk_el" style="width:44px;height:22px;border-radius:999px"></div></td>
      <td><div class="smw_sk_el" style="width:80px;height:30px;border-radius:8px"></div></td>
    </tr>
  `).join("")}function T(t,e=!1){const s=t.id,r=t.activo!==!1;return`
    <tr class="${e?"prec_row prec_row_new prec_row_dirty":"prec_row"}" data-id="${s}" data-new="${e?"1":"0"}">
      <td class="prec_td prec_td_num">
        <input
          class="prec_td_input prec_in_num"
          type="number"
          min="0"
          value="${t.num??""}"
          data-id="${s}"
          data-field="num"
          title="Orden de visualización"
        />
      </td>
      <td class="prec_td prec_td_tour">
        <input
          class="prec_td_input prec_in_tour"
          type="text"
          value="${G(t.tour??"")}"
          data-id="${s}"
          data-field="tour"
          placeholder="Nombre del tour"
        />
      </td>
      <td class="prec_td">
        <div class="prec_price_wrap">
          <span class="prec_currency">S/</span>
          <input
            class="prec_td_input prec_in_price"
            type="number"
            min="0"
            step="0.01"
            value="${t.precio??""}"
            data-id="${s}"
            data-field="precio"
            placeholder="0.00"
          />
        </div>
      </td>
      <td class="prec_td">
        <input
          class="prec_td_input prec_in_pts"
          type="number"
          min="0"
          value="${t.puntos??""}"
          data-id="${s}"
          data-field="puntos"
          placeholder="0"
        />
      </td>
      <td class="prec_td">
        <div class="prec_pct_wrap">
          <input
            class="prec_td_input prec_in_com"
            type="number"
            min="0"
            max="100"
            step="0.1"
            value="${t.comision??""}"
            data-id="${s}"
            data-field="comision"
            placeholder="0"
          />
          <span class="prec_pct_sign">%</span>
        </div>
      </td>
      <td class="prec_td prec_td_toggle">
        <label class="prec_toggle" title="${r?"Activo":"Inactivo"}">
          <input
            type="checkbox"
            class="prec_toggle_activo"
            data-id="${s}"
            data-field="activo"
            ${r?"checked":""}
          />
          <span class="prec_toggle_slider"></span>
        </label>
      </td>
      <td class="prec_td prec_td_actions">
        <div class="prec_actions_wrap">
          ${e?`
            <button class="prec_btn_save prec_btn_save_active" data-id="${s}" title="Guardar nuevo tour">
              <i class="fas fa-plus-circle"></i> Crear
            </button>
            <button class="prec_btn_cancel_new" data-id="${s}" title="Cancelar">
              <i class="fas fa-times"></i>
            </button>
          `:`
            <button class="prec_btn_save" data-id="${s}" title="Guardar cambios" disabled>
              <i class="fas fa-save"></i> Guardar
            </button>
            <button class="prec_btn_delete" data-id="${s}" title="Eliminar tour">
              <i class="fas fa-trash"></i>
            </button>
          `}
        </div>
      </td>
    </tr>
  `}function G(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function N(){const t=i.length,e=i.filter(r=>r.activo!==!1).length,s=t-e;a("#prec_stat_total").text(t),a("#prec_stat_activos").text(e),a("#prec_stat_inactivos").text(s)}function u(){if(N(),!i.length){a("#prec_tbody").html(`
      <tr>
        <td colspan="7">
          <div class="prec_empty">
            <i class="fas fa-map-marked-alt"></i>
            <p>No hay tours registrados.<br>Haz clic en <strong>+ Nuevo Tour</strong> para agregar uno.</p>
          </div>
        </td>
      </tr>
    `);return}const t=[...i].sort((e,s)=>(e.num??999)-(s.num??999));a("#prec_tbody").html(t.map(e=>T(e,!1)).join(""))}function g(t,e,s){c[t]||(c[t]={}),c[t][e]=s;const r=a(`tr[data-id="${t}"]`);r.addClass("prec_row_dirty"),r.find(`.prec_btn_save[data-id="${t}"]`).prop("disabled",!1).addClass("prec_btn_save_active")}function j(t){delete c[t];const e=a(`tr[data-id="${t}"]`);e.removeClass("prec_row_dirty"),e.find(`.prec_btn_save[data-id="${t}"]`).prop("disabled",!0).removeClass("prec_btn_save_active")}function b(t,e){const s=a(`tr[data-id="${t}"]`),r=e==="ok"?"prec_row_flash_ok":"prec_row_flash_err";s.addClass(r),setTimeout(()=>s.removeClass(r),900)}async function v(t){if(n[t])return;const e=c[t];if(!e||!Object.keys(e).length)return;n[t]=!0,a(`tr[data-id="${t}"] .prec_btn_save`).prop("disabled",!0).html('<i class="fas fa-circle-notch fa-spin"></i>');try{await S(k(f,"listatours",t),{...e,updatedAt:m()});const r=i.findIndex(o=>o.id===t);r!==-1&&Object.assign(i[r],e),w(_),j(t),b(t,"ok"),l("Tour guardado ✅","success")}catch(r){console.error("[PRECIOS] saveRow error:",r),b(t,"err"),l("Error al guardar el tour","error")}finally{n[t]=!1;const r=a(`tr[data-id="${t}"] .prec_btn_save`);c[t]?r.prop("disabled",!1).addClass("prec_btn_save_active").html('<i class="fas fa-save"></i> Guardar'):r.prop("disabled",!0).removeClass("prec_btn_save_active").html('<i class="fas fa-save"></i> Guardar')}}async function $(t){if(n[t])return;const e=c[t]||{},s=e.tour?.trim()||"";if(!s){l("El nombre del tour es obligatorio","warning"),a(`tr[data-id="${t}"] .prec_in_tour`).trigger("focus");return}n[t]=!0;const r=a(`tr[data-id="${t}"] .prec_btn_save`);r.prop("disabled",!0).html('<i class="fas fa-circle-notch fa-spin"></i> Creando…');try{const o={tour:s,num:Number(e.num)||0,precio:Number(e.precio)||0,puntos:Number(e.puntos)||0,comision:Number(e.comision)||0,activo:e.activo!==!1,createdAt:m(),updatedAt:m()},p=await I(x(f,"listatours"),o),A={id:p.id,...o};i.push(A),w(_),delete c[t],delete n[t],u(),setTimeout(()=>b(p.id,"ok"),50),l(`Tour "${C(s)}" creado ✅`,"success"),N()}catch(o){console.error("[PRECIOS] createTour error:",o),n[t]=!1,r.prop("disabled",!1).html('<i class="fas fa-plus-circle"></i> Crear'),l("Error al crear el tour","error")}}async function z(t){const e=i.find(p=>p.id===t),s=e?C(e.tour||"este tour"):"este tour";if(!window.confirm(`¿Eliminar "${s}" permanentemente?

Esta acción no se puede deshacer.`))return;const o=a(`tr[data-id="${t}"]`);o.css({opacity:.5,pointerEvents:"none"});try{await D(k(f,"listatours",t)),i=i.filter(p=>p.id!==t),delete c[t],w(_),o.addClass("prec_row_removing"),setTimeout(()=>{u()},350),l(`Tour "${s}" eliminado`,"warning")}catch(p){console.error("[PRECIOS] deleteTour error:",p),o.css({opacity:"",pointerEvents:""}),l("Error al eliminar el tour","error")}}function H(){if(a(".prec_row_new").length){a("tr.prec_row_new .prec_in_tour").first().trigger("focus"),l("Ya hay un tour nuevo pendiente de guardar","info");return}h++;const t=`__new_${h}`,e={id:t,num:i.length+1,tour:"",precio:0,puntos:0,comision:0,activo:!0};c[t]={num:e.num,precio:0,puntos:0,comision:0,activo:!0};const s=T(e,!0);a("#prec_tbody").prepend(s),a(`tr[data-id="${t}"] .prec_in_tour`).trigger("focus")}async function y(t=!1){if(!t){const e=O(_);if(e){i=e,u();return}}a("#prec_tbody").html(E(6)),a("#prec_header").addClass("smw_loading");try{i=(await R(x(f,"listatours"))).docs.map(s=>({id:s.id,...s.data()})),P(_,i,60),u()}catch(e){console.error("[PRECIOS] loadTours error:",e),a("#prec_tbody").html(`
      <tr>
        <td colspan="7">
          <div class="prec_empty prec_empty_error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error al cargar los tours. Intenta de nuevo.</p>
          </div>
        </td>
      </tr>
    `),l("Error al cargar los tours","error")}finally{a("#prec_header").removeClass("smw_loading")}}const W=async()=>{a(".prec_wrap").addClass("visible"),window.__WIREADY__=!0,i=[],c={},n={},h=0,y(!1),a(document).on(`input${d}`,".prec_td_input",function(){const t=a(this).data("id"),e=a(this).data("field");let s=a(this).val();["num","precio","puntos","comision"].includes(e)&&(s=s===""?"":Number(s)),g(t,e,s)}),a(document).on(`change${d}`,".prec_toggle_activo",function(){const t=a(this).data("id"),e=a(this).data("field"),s=a(this).is(":checked"),r=a(`tr[data-id="${t}"]`),o=r.data("new")===1||r.data("new")==="1";g(t,e,s),o||v(t)}),a(document).on(`click${d}`,".prec_btn_save",function(){const t=a(this).data("id"),e=a(`tr[data-id="${t}"]`);e.data("new")===1||e.data("new")==="1"?$(t):v(t)}),a(document).on(`click${d}`,".prec_btn_cancel_new",function(){const t=a(this).data("id");delete c[t],delete n[t],a(`tr[data-id="${t}"]`).remove()}),a(document).on(`click${d}`,".prec_btn_delete",function(){const t=a(this).data("id");z(t)}),a(document).on(`click${d}`,"#prec_btn_new",()=>{H()}),a(document).on(`click${d}`,"#prec_refresh",async function(){const t=a(this);t.hasClass("prec_spinning")||(t.addClass("prec_spinning"),c={},n={},await y(!0),t.removeClass("prec_spinning"),l("Lista actualizada","success"))}),a(document).on(`keydown${d}`,".prec_td_input",function(t){if(t.key!=="Enter")return;const e=a(this).data("id"),s=a(`tr[data-id="${e}"]`);s.data("new")===1||s.data("new")==="1"?$(e):c[e]&&v(e)}),a(document).on(`keydown${d}`,".prec_row_new .prec_td_input",function(t){if(t.key!=="Escape")return;const e=a(this).data("id");delete c[e],delete n[e],a(`tr[data-id="${e}"]`).remove()})},F=()=>{a(document).off(d),i=[],c={},n={}};export{F as cleanup,W as init,K as render};
