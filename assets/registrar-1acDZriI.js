import{$ as a}from"./vendor-PbmUQHyn.js";import{db as E}from"./firebase-BoXYLQFr.js";import{v as D,e as $,u as O}from"./firebase-BM1KOhEp.js";import{A as T,u as C,l as V,c as u,G as k}from"./index-_8gLK-S4.js";import{getMesActual as y,cargarTours as R,obtenerRankingMes as A,invalidateRankingCaches as F}from"./zsmile-DPoE5inu.js";let c=[],r=null;const U=()=>`
  <div class="smw_reg_container">
    <div class="smw_reg_card" id="smwRegCard">
      
      <!-- COLUMNA IZQUIERDA: FORMULARIO DE REGISTRO (70%) -->
      <div class="smw_reg_col_left">
        <h1 class="smw_reg_title" id="smwRegCardTitle">
          <i class="fas fa-cart-plus"></i> Registrar Nueva Venta
        </h1>

        <form id="formularioVenta" class="smw_form">
          <div class="smw_form_grid">
            
            <!-- Fila 1: Tipo de Tour (3 cols) + Registro En (1 col) -->
            <div class="smw_form_field w_3">
              <label><i class="fas fa-route"></i> Tipo de Tour *</label>
              <div class="smw_tour_selector" id="tourSelector">
                <div class="smw_tour_display" id="tourDisplay" tabindex="0">
                  <span class="smw_tour_text">
                    <i class="fas fa-search-location" style="color:var(--mco)"></i> 
                    <span id="tourSelectedLabel">Seleccionar tour...</span>
                  </span>
                  <i class="fas fa-chevron-down smw_arrow"></i>
                </div>
                <div class="smw_tour_dropdown" id="tourDropdown">
                  <div class="smw_tour_search">
                    <i class="fas fa-search"></i>
                    <input type="text" id="smwTourSearch" placeholder="Buscar tour por nombre o precio..." autocomplete="off">
                  </div>
                  <div class="smw_tour_table_container">
                    <table class="smw_tour_table">
                      <tbody id="tourTableBody">
                        ${I(4)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <input type="hidden" id="tipoTour" required>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-hotel"></i> Registro en:</label>
              <select id="registroEn" class="smw_select">
                <option value="hawka">Hawka</option>
                <option value="hclaudia">HClaudia</option>
              </select>
            </div>

            <!-- Fila 2: Cliente (2 cols) + N° Habitación (1 col) + Hora (1 col) -->
            <div class="smw_form_field w_2">
              <label><i class="fas fa-user"></i> Nombre del Cliente *</label>
              <input type="text" id="nombreCliente" class="smw_input" required placeholder="Nombre de cliente / calle / grupo">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-bed"></i> Habitación</label>
              <input type="text" id="numeroHabitacion" class="smw_input" placeholder="Ej: 205">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-clock"></i> Hora de salida *</label>
              <input type="text" id="horaSalida" class="smw_input" placeholder="Ej: 5PM" required>
            </div>

            <!-- Fila 3: Tipo Doc (1 col) + N° Doc (1 col) + Método Pago (1 col) + PAX (1 col) -->
            <div class="smw_form_field w_1">
              <label><i class="fas fa-id-card"></i> Documento</label>
              <select id="tipoDocumento" class="smw_select">
                <option value="dni">DNI</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedula">Cédula</option>
                <option value="ce">CE</option>
              </select>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-hashtag"></i> N° Documento</label>
              <input type="text" id="numeroDocumento" class="smw_input" placeholder="Ej: 78964523">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-credit-card"></i> Pago *</label>
              <select id="metodoPago" class="smw_select" required>
                <option value="">Seleccionar...</option>
                <option value="Tarjeta">Tarjeta</option>
                <option value="Transferencia">Transferencia</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Yape">Yape</option>
                <option value="Plin">Plin</option>
              </select>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-users"></i> PAX *</label>
              <input type="number" id="cantidadPax" class="smw_input" required min="1" value="1">
            </div>

            <!-- Fila 4: Imp. Indiv. (1 col) + Total (1 col) + Operador (1 col) + Pago Oper. (1 col) -->
            <div class="smw_form_field w_1">
              <label><i class="fas fa-dollar-sign"></i> Individual (S/)</label>
              <input type="number" id="precioUnitario" class="smw_input" step="0.01" placeholder="0.00">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-calculator"></i> Total (S/)</label>
              <input type="number" id="importeTotal" class="smw_input" step="0.01" placeholder="0.00" disabled>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-user-shield"></i> Operador *</label>
              <input type="text" id="Operador" class="smw_input" placeholder="Ejm: Pili..." required>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-hand-holding-usd"></i> Pago Oper. *</label>
              <input type="number" id="PagoOperador" class="smw_input" step="0.01" placeholder="0.00" required>
            </div>

            <!-- Fila 5: Estado Pago (1 col) + Ganancia (1 col) + Fecha (1 col) + Comentarios (1 col) -->
            <div class="smw_form_field w_1">
              <label><i class="fas fa-money-check-alt"></i> Estado Pago *</label>
              <select id="estadoPago" class="smw_select" required>
                <option value="pagado">Pagado (Nosotros)</option>
                <option value="cobrar">Yo pasé (->)</option>
                <option value="pagado2">Nos pasaron (<-)</option>
                <option value="cobrado">Arreglado (<->)</option>
              </select>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-handshake"></i> Ganancia (S/)</label>
              <input type="number" id="ganancia" class="smw_input" step="0.01" placeholder="0.00" disabled>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-calendar-day"></i> Fecha *</label>
              <input type="date" id="fechaTour" class="smw_input" required value="${new Date().toISOString().split("T")[0]}">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fa-solid fa-comment-dots"></i> Notas (Opcional)</label>
              <input type="text" id="Comentario" class="smw_input" placeholder="Anotaciones extra...">
            </div>

            <!-- Fila 6: Opciones de Puntos / Excepciones (4 cols - Ancho Completo) -->
            <div class="smw_options_section">
              <h3 class="smw_options_title"><i class="fas fa-star-half-alt"></i> Opciones de Puntos / Excepciones</h3>
              <div class="smw_check_grid">
                
                <label class="smw_check_label" id="lblJulio">
                  <input type="checkbox" id="vtJulio">
                  <span>Venta de Julio</span>
                </label>

                <label class="smw_check_label" id="lblSonia">
                  <input type="checkbox" id="vtSonia">
                  <span>Venta de Sonia</span>
                </label>

                <label class="smw_check_label" id="lblExterna">
                  <input type="checkbox" id="vtExterna">
                  <span>Venta Externa</span>
                </label>

              </div>
            </div>

          </div>

          <!-- Acciones del Formulario -->
          <div class="smw_form_actions">
            <div class="smw_actions_left" id="smwActionsLeft">
              <button type="submit" class="smw_btn smw_btn_save" id="btnSaveVenta">
                <i class="fas fa-save"></i> Guardar Venta
              </button>
            </div>

            <div class="smw_points_preview">
              <i class="fas fa-trophy"></i>
              <span>Puntos a ganar: <strong id="vistaPreviaLaPuntos">0</strong></span>
            </div>
          </div>

        </form>
      </div>

      <!-- COLUMNA DERECHA: WIDGET DE RANKING EN VIVO (30%) -->
      <div class="smw_reg_col_right">
        <div class="smw_sidebar_header">
          <h2><i class="fas fa-trophy" style="color:#FFDA34"></i> Ranking en Vivo</h2>
          <span class="smw_month_badge" id="lblMesActual">...</span>
        </div>
        
        <div class="smw_mini_ranking_list" id="miniRankingList">
          ${S(5)}
        </div>

        <div class="smw_sidebar_links">
          <a href="/historial" class="smw_sidebar_btn nv_item" data-page="historial">
            <i class="fas fa-clipboard-list"></i> Ver Historial de Ventas
          </a>
        </div>
      </div>

    </div>
  </div>
`,G=async()=>{if(!T.user)return setTimeout(()=>C.navigate("/login"),100);const i=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],t=y(),[l,s]=t.split("-");a("#lblMesActual").text(`${i[parseInt(s)-1]} ${l}`),c=await R(),h(c),await P(),L(),N()},z=()=>{a(document).off(".registrar"),r=null,c=[]};function h(e){if(!e.length){a("#tourTableBody").html('<tr><td colspan="4" style="text-align:center;color:var(--tx3);padding:2vh;">Sin resultados para la búsqueda</td></tr>');return}const i=e.map(t=>`
    <tr class="tour-row" data-index="${c.indexOf(t)}">
      <td class="smw_tour_num"><i class="fas fa-route"></i></td>
      <td>${t.tour}</td>
      <td class="smw_tour_price">S/ ${t.price.toFixed(2)}</td>
      <td class="smw_tour_pts">${t.pts} pts</td>
    </tr>
  `).join("");a("#tourTableBody").html(i)}async function P(){try{const e=y(),i=`empleadosPuntos_${e}`;V(i)||a("#miniRankingList").html(S(5));const l=await A(e);if(!l||!l.length){a("#miniRankingList").html(`
        <div class="smw_mini_empty">
          <i class="fas fa-star" style="color:var(--brd)"></i>
          <span>No hay ventas este mes.<br>¡Sé el primero en registrar!</span>
        </div>
      `);return}const s=l.slice(0,5).map((o,d)=>{const p=d+1,w=p<=3?`pos_${p}`:"",v=p===1?'<i class="fas fa-crown"></i>':p,b=`${(o.nombre||"?")[0]}${(o.nombre?.split(" ")[1]||"")[0]||""}`.toUpperCase();return`
        <div class="smw_mini_rank_item ${w}" style="animation-delay: ${d*.08}s">
          <div class="smw_mini_rank_badge">${v}</div>
          <div class="smw_mini_rank_avatar">
            ${o.imagen?`<img src="${o.imagen}" alt="${o.nombre}">`:`<span>${b}</span>`}
          </div>
          <div class="smw_mini_rank_info">
            <span class="smw_mini_rank_name">${o.nombre}</span>
            <span class="smw_mini_rank_sales">${o.totalVentas} tour${o.totalVentas!==1?"s":""}</span>
          </div>
          <div class="smw_mini_rank_pts">${o.totalPuntos} <span>pts</span></div>
        </div>
      `}).join("");a("#miniRankingList").html(s)}catch(e){console.error("Error al pintar mini ranking:",e),a("#miniRankingList").html(`
      <div class="smw_mini_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar el ranking</span>
      </div>
    `)}}function L(){a(document).on("input.registrar change.registrar","#formularioVenta input, #formularioVenta select",function(){const e=a(this),i=e.val()?.toString().trim();e.prop("required")?e.toggleClass("okValor",!!i).toggleClass("faltaValor",!i):e.toggleClass("okValor",!!i)}).on("click.registrar","#tourDisplay",function(e){e.stopPropagation();const i=a("#tourDropdown"),t=i.hasClass("active");a(".smw_tour_dropdown").removeClass("active"),a(".smw_tour_display").removeClass("active"),t||(i.addClass("active"),a(this).addClass("active"),setTimeout(()=>a("#smwTourSearch").focus(),100))}).on("click.registrar",function(e){a(e.target).closest(".smw_tour_selector").length||a("#tourDropdown, #tourDisplay").removeClass("active")}).on("input.registrar","#smwTourSearch",function(){const e=a(this).val().toLowerCase();if(!e)h(c);else{const i=c.filter(t=>t.tour.toLowerCase().includes(e)||t.price.toString().includes(e));h(i)}}).on("click.registrar",".tour-row",function(e){e.stopPropagation();const i=a(this).data("index");r=c[i],r&&(a("#tourSelectedLabel").text(r.tour),a("#tipoTour").val(r.tour).removeClass("faltaValor").addClass("okValor"),a("#precioUnitario").val(r.price).removeClass("faltaValor").addClass("okValor"),a("#tourDropdown, #tourDisplay").removeClass("active"),a(".tour-row").removeClass("selected"),a(this).addClass("selected"),g("#precioUnitario"),x(),m(),f())}).on("input.registrar","#cantidadPax, #precioUnitario",()=>{x(),m(),f()}).on("change.registrar","#estadoPago",m).on("input.registrar","#importeTotal, #PagoOperador",m).on("change.registrar","#vtJulio, #vtSonia, #vtExterna",function(){const e=a(this).attr("id");a({vtJulio:"#lblJulio",vtSonia:"#lblSonia",vtExterna:"#lblExterna"}[e]).toggleClass("active",a(this).prop("checked")),f()}).on("submit.registrar","#formularioVenta",async function(e){e.preventDefault();const i=a("#btnSaveVenta");if(i.prop("disabled"))return;if(!r){u("Selecciona un tour del catálogo","error"),a("#tourDisplay").addClass("faltaValor").focus();return}const l=[["#nombreCliente","Cliente"],["#horaSalida","Hora"],["#fechaTour","Fecha"],["#Operador","Operador"],["#metodoPago","Pago"]].filter(([n])=>!a(n).val()?.trim());if(l.length){l.forEach(([n])=>a(n).addClass("faltaValor")),u(`Completa los campos obligatorios: ${l.map(([,n])=>n).join(", ")}`,"error");return}const s=T.user,o=s.usuario||s.nombre||"Desconocido",d=s.email||"",p=parseInt(a("#cantidadPax").val())||1,w=a("#vtJulio, #vtSonia, #vtExterna").is(":checked"),v=i.attr("data-edit-id")||`venta_${Date.now()}`,b={idVenta:v,tipoTour:r.tour,registroEn:a("#registroEn").val(),nombreCliente:a("#nombreCliente").val().trim(),numeroHabitacion:a("#numeroHabitacion").val().trim(),tipoDocumento:a("#tipoDocumento").val(),numeroDocumento:a("#numeroDocumento").val().trim(),cantidadPax:p,precioUnitario:parseFloat(a("#precioUnitario").val())||0,metodoPago:a("#metodoPago").val(),importeTotal:parseFloat(a("#importeTotal").val())||0,ganancia:parseFloat(a("#ganancia").val())||0,horaSalida:a("#horaSalida").val().trim(),Operador:a("#Operador").val().trim(),PagoOperador:parseFloat(a("#PagoOperador").val())||0,Comentario:a("#Comentario").val().trim(),fechaTour:a("#fechaTour").val(),estadoPago:a("#estadoPago").val(),vendedor:o,puntos:w?0:r.pts*p,email:d,qventa:1,fechaRegistro:O(),esVentaJulio:!!a("#vtJulio").prop("checked"),esVentaSonia:!!a("#vtSonia").prop("checked"),esVentaExterna:!!a("#vtExterna").prop("checked")};k(i,!0,i.attr("data-edit-id")?"Actualizando...":"Guardando...");try{await D($(E,"registrosdb",v),b);const n=y();F(o,n),u(i.attr("data-edit-id")?"¡Venta actualizada con éxito! 🏆":"¡Venta registrada con éxito! 🚀","success"),_(),await P(),setTimeout(()=>{C.navigate("/historial")},1200)}catch(n){console.error("Error al guardar venta:",n),u("Error al intentar guardar la venta.","error")}finally{k(i,!1)}})}function x(){const e=parseInt(a("#cantidadPax").val())||1,t=(parseFloat(a("#precioUnitario").val())||0)*e;a("#importeTotal").val(t.toFixed(2)),g("#importeTotal")}function m(){const e=a("#estadoPago").val(),i=parseFloat(a("#importeTotal").val())||0,t=parseFloat(a("#PagoOperador").val())||0,l=e==="pagado"||e==="pagado2",s=a("#PagoOperador");if(l)s.prop("disabled",!0).val("0").attr("placeholder","Servicio propio"),a("#ganancia").val(i.toFixed(2));else{s.prop("disabled",!1).attr("placeholder","S/ 0.00");const o=i-t;a("#ganancia").val(o.toFixed(2))}g("#ganancia")}function f(){const e=parseInt(a("#cantidadPax").val())||1,i=r?.pts||0,l=a("#vtJulio, #vtSonia, #vtExterna").is(":checked")?0:i*e;a("#vistaPreviaLaPuntos").text(l),g("#vistaPreviaLaPuntos")}function g(e){a(e).addClass("field-updated"),setTimeout(()=>a(e).removeClass("field-updated"),600)}function _(){r=null;const e=a("#formularioVenta");e.length&&(e[0].reset(),a("#formularioVenta input, #formularioVenta select").prop("disabled",!1).removeClass("okValor faltaValor"),a("#smwRegCard").removeClass("view-only edit-mode"),a(".smw_check_label").removeClass("active"),a("#btnSaveVenta").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),a(".btn-custom-action").remove(),a("#cantidadPax").val(1),a("#fechaTour").val(new Date().toISOString().split("T")[0]),a("#vistaPreviaLaPuntos").text("0"),a("#tourSelectedLabel").text("Seleccionar tour..."),a(".tour-row").removeClass("selected"),a("#importeTotal, #ganancia").prop("disabled",!0),a("#smwRegCardTitle").html('<i class="fas fa-cart-plus"></i> Registrar Nueva Venta'))}function N(e){const i=window.editarVenta||V("editarVentaTemp");if(!i)return;window.editarVenta=null,removels("editarVentaTemp");const{venta:t,soloVista:l}=i;if(t){if(_(),r=c.find(s=>s.tour===t.tipoTour),r?(a("#tourSelectedLabel").text(r.tour),a("#tipoTour").val(r.tour),a(`.tour-row[data-index="${c.indexOf(r)}"]`).addClass("selected")):(a("#tourSelectedLabel").text(t.tipoTour||"Tour personalizado"),a("#tipoTour").val(t.tipoTour||"")),Object.entries(t).forEach(([s,o])=>{const d=a(`#${s}`);d.length&&s!=="fechaTour"&&d.val(o||"")}),t.fechaTour){let s="";t.fechaTour?.toDate?s=t.fechaTour.toDate().toISOString().split("T")[0]:typeof t.fechaTour=="string"&&(s=t.fechaTour.split("T")[0]),a("#fechaTour").val(s)}a("#vtJulio").prop("checked",t.esVentaJulio||!1).trigger("change"),a("#vtSonia").prop("checked",t.esVentaSonia||!1).trigger("change"),a("#vtExterna").prop("checked",t.esVentaExterna||!1).trigger("change"),x(),m(),f(),l?(a("#formularioVenta input, #formularioVenta select").prop("disabled",!0),a("#tourDisplay").css("pointer-events","none"),a("#smwRegCard").addClass("view-only"),a("#smwRegCardTitle").html('<i class="fas fa-eye"></i> Detalle de Venta (Solo Vista)'),a("#btnSaveVenta").prop("disabled",!0).html('<i class="fas fa-lock"></i> Venta Protegida'),a(".btn-clear-view").length||a("#smwActionsLeft").append(`
        <button type="button" class="smw_btn smw_btn_cancel btn-custom-action btn-clear-view">
          <i class="fas fa-arrow-left"></i> Volver al Registro
        </button>
      `),a(document).on("click.registrar",".btn-clear-view",function(){_(),u("Formulario restaurado a modo registro.","info")})):(a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a("#importeTotal, #ganancia").prop("disabled",!0),a("#tourDisplay").css("pointer-events","auto"),a("#smwRegCard").addClass("edit-mode"),a("#smwRegCardTitle").html('<i class="fas fa-edit"></i> Modificar Registro de Venta'),a("#btnSaveVenta").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Cambios').attr("data-edit-id",t.idVenta||t.id),a(".btn-cancel-edit").length||a("#smwActionsLeft").append(`
        <button type="button" class="smw_btn smw_btn_cancel btn-custom-action btn-cancel-edit">
          <i class="fas fa-times"></i> Cancelar Edición
        </button>
      `),a(document).on("click.registrar",".btn-cancel-edit",function(){_(),u("Edición cancelada.","info")}))}}function I(e=4){return Array(e).fill(0).map(()=>`
    <tr style="pointer-events: none;">
      <td class="smw_tour_num"><div class="smw_sk_el" style="width: 16px; height: 16px; border-radius: 4px;"></div></td>
      <td><div class="smw_sk_el" style="width: 140px; height: 14px; border-radius: 4px;"></div></td>
      <td class="smw_tour_price"><div class="smw_sk_el" style="width: 50px; height: 14px; border-radius: 4px;"></div></td>
      <td class="smw_tour_pts"><div class="smw_sk_el" style="width: 40px; height: 14px; border-radius: 4px;"></div></td>
    </tr>
  `).join("")}function S(e=5){return Array(e).fill(0).map((i,t)=>`
    <div class="smw_mini_rank_item smw_sk_mini_row" style="pointer-events: none; animation-delay: ${t*.05}s">
      <div class="smw_sk_el" style="width: 2.2vh; height: 2.2vh; border-radius: 50%; margin-right: 1.5vh;"></div>
      <div class="smw_mini_rank_avatar smw_sk_el smw_sk_circle" style="border-radius: 50%; width: 4.5vh; height: 4.5vh; background: none; margin-right: 1.5vh;"></div>
      <div class="smw_mini_rank_info" style="flex: 1;">
        <div class="smw_sk_el" style="width: 80px; height: 12px; margin-bottom: 0.6vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 50px; height: 9px; border-radius: 4px;"></div>
      </div>
      <div class="smw_sk_el" style="width: 40px; height: 14px; border-radius: 4px;"></div>
    </div>
  `).join("")}export{z as cleanup,G as init,U as render};
