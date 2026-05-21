import{$ as e}from"./vendor-2D3jvCpt.js";import{auth as d,db as p}from"./firebase-BPYZb32v.js";import{i as b,r as w,c as h,q as y,v as x,e as C,u as I}from"./firebase-BwR1K4LJ.js";import{j as m,s as S,b as o,C as E}from"./index-Ds5QDkyH.js";let f="bug",c=[];const v=()=>{const a=m("wiSmile")||{};return a.nombre||a.usuario||d.currentUser?.displayName||d.currentUser?.email||"Anónimo"},O=()=>`
    <div class="smw_avisar_view">
      
      <!-- CABECERA: Título y Controles -->
      <header class="smw_avisar_header wi_fadeUp">
        <div class="smw_avisar_title_row">
          <h1><i class="fas fa-bug smw_mora_glow"></i> Centro de Feedback & Issues</h1>
          <p class="smw_avisar_subtitle">Reporta incidencias, propone sugerencias y comparte con el equipo</p>
        </div>
        <div class="smw_avisar_controls">
          <button class="smw_sync_btn" id="btnSyncIssues" title="Sincronizar Incidencias">
            <i class="fas fa-sync-alt"></i> Sincronizar
          </button>
          <a href="/smile" class="smw_back_btn nv_item" data-page="smile">
            <i class="fas fa-arrow-left"></i> Panel de Control
          </a>
        </div>
      </header>

      <!-- CUERPO PRINCIPAL DE DOS COLUMNAS -->
      <div class="smw_avisar_grid wi_fadeUp" style="animation-delay: 0.1s">
        
        <!-- COLUMNA IZQUIERDA: FORMULARIO -->
        <div class="smw_feedback_form_card">
          <div class="smw_fcard_header">
            <h2><i class="fas fa-pen-to-square"></i> Crear Nuevo Reporte</h2>
            <p class="smw_fcard_desc">Identificado como: <strong>${v()}</strong></p>
          </div>
          <form id="frmFeedback" class="smw_form_layout" onsubmit="return false;">
            
            <!-- Título -->
            <div class="smw_form_group">
              <label for="fbTitle">Título del Reporte</label>
              <input type="text" id="fbTitle" class="smw_input" placeholder="Ej. El selector de tours se demora en cargar..." required />
            </div>

            <!-- Categoria -->
            <div class="smw_form_group">
              <label>Categoría</label>
              <div class="smw_category_selector">
                <button type="button" class="smw_cat_tag_btn active" data-cat="bug" style="--c-accent: var(--Dulce)">
                  Bug 🐛
                </button>
                <button type="button" class="smw_cat_tag_btn" data-cat="sugerencia" style="--c-accent: var(--Oro)">
                  Sugerencia 💡
                </button>
                <button type="button" class="smw_cat_tag_btn" data-cat="felicitacion" style="--c-accent: var(--Paz)">
                  Felicitación ✨
                </button>
              </div>
            </div>

            <!-- Descripción -->
            <div class="smw_form_group">
              <label for="fbDesc">Descripción Detallada</label>
              <textarea id="fbDesc" class="smw_textarea" placeholder="Explica detalladamente la incidencia o tu sugerencia para que podamos entenderla fácilmente..." rows="5" required></textarea>
            </div>

            <button type="submit" class="smw_submit_fb_btn" id="btnSubmitFeedback">
              <i class="fas fa-paper-plane"></i> Enviar Incidencia
            </button>

          </form>
        </div>

        <!-- COLUMNA DERECHA: LISTADO DE ISSUES -->
        <div class="smw_issues_feed_card">
          <div class="smw_fcard_header">
            <h2><i class="fas fa-list-check"></i> Reportes del Equipo</h2>
            <span class="smw_badge_count" id="lblIssuesCount">0 reportes</span>
          </div>
          
          <div class="smw_issues_list" id="issuesList">
            ${g(3)}
          </div>
        </div>

      </div>
    </div>
  `,q=async()=>{if(!d.currentUser&&!m("wiSmile"))return setTimeout(()=>S.navigate("/login"),100);e(".wi_fadeUp").addClass("visible wi_visible"),await u(),k(),console.log("🐛 SPA Feedback & Issues cargado exitosamente"),window.__WIREADY__=!0},P=()=>{e(document).off(".avisar_events"),window.toggleExpandirIssue=null};function k(){e(document).off("click.avisar_events",".smw_cat_tag_btn").on("click.avisar_events",".smw_cat_tag_btn",function(){e(".smw_cat_tag_btn").removeClass("active"),e(this).addClass("active"),f=e(this).data("cat")}),e(document).off("submit.avisar_events","#frmFeedback").on("submit.avisar_events","#frmFeedback",async function(a){a.preventDefault();const s=e("#fbTitle").val().trim(),t=e("#fbDesc").val().trim();if(!s||!t)return o("Completa todos los campos obligatorios.","warning");await D(s,t)}),e(document).off("click.avisar_events","#btnSyncIssues").on("click.avisar_events","#btnSyncIssues",async function(){e(this).find("i").addClass("fa-spin"),await u(),e(this).find("i").removeClass("fa-spin"),o("Feed sincronizado exitosamente","success")}),window.toggleExpandirIssue=a=>{e(`.smw_issue_card[data-id="${a}"]`).toggleClass("expanded")}}async function u(){const a=e(".smw_avisar_header");a.addClass("smw_loading");try{e("#issuesList").html(g(3)),c=(await b(w(h(p,"wiFeedbackIssues"),y("fecha","desc")))).docs.map(t=>({id:t.id,...t.data()})),$()}catch(s){console.error("Error al cargar reportes:",s),e("#issuesList").html(`
      <div class="smw_empty_pane">
        <i class="fas fa-exclamation-triangle"></i>
        <span>Error al cargar reportes. Revisa tu conexión.</span>
      </div>
    `)}finally{a.removeClass("smw_loading")}}function $(){if(e("#lblIssuesCount").text(`${c.length} reportes`),!c.length){e("#issuesList").html(`
      <div class="smw_empty_pane">
        <i class="fas fa-folder-open"></i>
        <strong>No hay reportes de feedback</strong>
        <p>Sé el primero en reportar un bug o sugerir una mejora.</p>
      </div>
    `);return}const a=c.map(s=>{const t=E(s.autor||"Colaborador"),r=A(s.fecha),i=F(s.estado),n=R(s.categoria);return`
      <div class="smw_issue_card smw_anim_fade" data-id="${s.id}">
        <div class="smw_issue_summary" onclick="toggleExpandirIssue('${s.id}')">
          <div class="smw_issue_title_row">
            <h3 class="smw_issue_title">${_(s.titulo)}</h3>
            <div class="smw_issue_badges">
              <span class="smw_badge_status ${i.cls}">
                <i class="fas ${i.ico}"></i> ${i.txt}
              </span>
              <span class="smw_badge_cat ${n.cls}">
                ${n.txt}
              </span>
            </div>
          </div>
          
          <div class="smw_issue_meta">
            <span><i class="fas fa-user-circle"></i> por <strong>${t}</strong></span>
            <span class="smw_meta_dot"></span>
            <span><i class="fas fa-clock"></i> ${r}</span>
            <i class="fas fa-chevron-down smw_issue_arrow"></i>
          </div>
        </div>

        <div class="smw_issue_details">
          <div class="smw_issue_desc_wrap">
            <p>${_(s.descripcion).replace(/\n/g,"<br>")}</p>
          </div>
        </div>
      </div>
    `}).join("");e("#issuesList").html(a)}async function D(a,s){const t=e("#btnSubmitFeedback");t.prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Enviando...');const r=`issue_${Date.now()}`,i=v(),n={id:r,titulo:a,descripcion:s,categoria:f,estado:"abierto",autor:i,fecha:I()};try{await x(C(p,"wiFeedbackIssues",r),n),e("#fbTitle").val(""),e("#fbDesc").val(""),o("Reporte enviado con éxito ✨","success"),await u()}catch(l){console.error("Error al guardar reporte:",l),o("Error al enviar el reporte.","error")}finally{t.prop("disabled",!1).html('<i class="fas fa-paper-plane"></i> Enviar Incidencia')}}function A(a){if(!a)return"Ahora";let s=null;if(a.toDate?s=a.toDate():typeof a=="string"?s=new Date(a):a.seconds&&(s=new Date(a.seconds*1e3)),s&&!isNaN(s.getTime())){const t=String(s.getDate()).padStart(2,"0"),r=String(s.getMonth()+1).padStart(2,"0"),i=s.getFullYear(),n=String(s.getHours()).padStart(2,"0"),l=String(s.getMinutes()).padStart(2,"0");return`${t}/${r}/${i} ${n}:${l}`}return"Ahora"}function F(a){const s={abierto:{cls:"abierto",txt:"Abierto",ico:"fa-circle-dot"},en_progreso:{cls:"en_progreso",txt:"En Progreso",ico:"fa-gear"},cerrado:{cls:"cerrado",txt:"Cerrado",ico:"fa-circle-check"}};return s[a]||s.abierto}function R(a){return{bug:{cls:"bug",txt:"Bug 🐛"},sugerencia:{cls:"sugerencia",txt:"Sugerencia 💡"},felicitacion:{cls:"felicitacion",txt:"Felicitación ✨"}}[a]||{cls:"bug",txt:"General"}}function _(a){return String(a||"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[s])}function g(a=3){return Array(a).fill(0).map(()=>`
    <div class="smw_issue_card smw_sk_issue">
      <div class="smw_issue_summary" style="pointer-events: none;">
        <div class="smw_issue_title_row">
          <span class="smw_sk_el" style="width: 70%; height: 18px; border-radius: 4px;"></span>
          <div style="display: flex; gap: 8px;">
            <span class="smw_sk_el" style="width: 65px; height: 20px; border-radius: 12px;"></span>
            <span class="smw_sk_el" style="width: 75px; height: 20px; border-radius: 12px;"></span>
          </div>
        </div>
        <div class="smw_issue_meta" style="margin-top: 1.5vh;">
          <span class="smw_sk_el" style="width: 100px; height: 14px; border-radius: 4px;"></span>
          <span class="smw_sk_el" style="width: 80px; height: 14px; border-radius: 4px; margin-left: 2vh;"></span>
        </div>
      </div>
    </div>
  `).join("")}export{P as cleanup,q as init,O as render};
