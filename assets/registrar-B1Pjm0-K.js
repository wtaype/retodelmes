import{$ as a}from"./vendor-PbmUQHyn.js";import{db as J}from"./firebase-DJVx3tD8.js";import{v as U,e as G,i as z,c as B,u as Y}from"./firebase-BM1KOhEp.js";import{A as R,u as L,l as w,t as S,c as _,G as A,w as M}from"./index-D2m2wUVg.js";import{getMesActual as V,cargarTours as K,obtenerRankingMes as X,invalidateRankingCaches as Z}from"./zsmile-aXnOAlJm.js";let f=[],p=null,b=null,y=!1;const ia=()=>`
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
                        ${W(4)}
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
                
                <label class="smw_check_label active" id="lblMiVenta">
                  <input type="checkbox" id="vtMiVenta" checked>
                  <i class="fas fa-check-circle smw_check_icon"></i>
                  <span>Mi venta</span>
                </label>

                <label class="smw_check_label" id="lblJulio">
                  <input type="checkbox" id="vtJulio">
                  <i class="far fa-circle smw_check_icon"></i>
                  <span>Venta de Julio</span>
                </label>

                <label class="smw_check_label" id="lblSonia">
                  <input type="checkbox" id="vtSonia">
                  <i class="far fa-circle smw_check_icon"></i>
                  <span>Venta de Sonia</span>
                </label>

                <label class="smw_check_label" id="lblExterna">
                  <input type="checkbox" id="vtExterna">
                  <i class="far fa-circle smw_check_icon"></i>
                  <span>Venta Externa</span>
                </label>

              </div>
            </div>

          </div>

          <!-- Acciones del Formulario (Guardar Venta junto a Puntos) -->
          <div class="smw_form_actions">
            <div class="smw_actions_right" id="smwActionsRight">
              <div class="smw_points_preview">
                <span>Puntos a ganar: <strong id="vistaPreviaLaPuntos">0</strong></span>
                <i class="fas fa-star"></i>
              </div>

              <button type="submit" class="smw_btn smw_btn_save" id="btnSaveVenta">
                <i class="fas fa-save"></i> Guardar Venta
              </button>
            </div>
          </div>

        </form>
      </div>

      <!-- COLUMNA DERECHA: SIDEBAR (30%) (Ranking en Vivo + Mis Ventas de Hoy) -->
      <div class="smw_reg_col_right">
        
        <!-- Panel Superior: Ranking en Vivo (Top 3-4 Guías) -->
        <div class="smw_sidebar_section" style="flex: 0 0 42%; display: flex; flex-direction: column; overflow: hidden;">
          <div class="smw_sidebar_header">
            <h2><i class="fas fa-trophy" style="color:#FFDA34"></i> Ranking en Vivo</h2>
            <span class="smw_month_badge" id="lblMesActual">...</span>
          </div>
          
          <div class="smw_mini_ranking_list" id="miniRankingList">
            ${j(3)}
          </div>
        </div>

        <div style="border-top: 1px dashed var(--brd); margin: 1.5vh 0; flex-shrink: 0;"></div>

        <!-- Panel Inferior: Mis Ventas de Hoy & Objetivos en Tiempo Real -->
        <div class="smw_sidebar_section" style="flex: 1 1 58%; display: flex; flex-direction: column; overflow: hidden;">
          <div class="smw_sidebar_header">
            <h2><i class="fas fa-bullseye" style="color:var(--mco)"></i> Mis Ventas de Hoy</h2>
            <span class="smw_user_points_badge" id="lblMisPuntosMes">0 pts</span>
          </div>

          <div class="smw_my_today_sales_list" id="myTodaySalesList">
            <div class="smw_mini_empty">
              <i class="fas fa-circle-notch fa-spin"></i>
              <span>Cargando mis ventas...</span>
            </div>
          </div>
        </div>

        <div class="smw_sidebar_links">
          <a href="/historial" class="smw_sidebar_btn nv_item" data-page="historial">
            <i class="fas fa-clipboard-list"></i> Ver Historial de Ventas
          </a>
        </div>
      </div>

    </div>
  </div>
`,ra=async()=>{const t=R.user;if(!t)return setTimeout(()=>L.navigate("/login"),100);const e=a("#smwRegCard");e.addClass("smw_loading"),a("#tourDisplay").addClass("smw_loading_select");const s=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],o=V(),[l,i]=o.split("-");a("#lblMesActual").text(`${s[parseInt(i)-1]} ${l}`);const n=w("toursSmile");n?.length>0&&(f=n.map(r=>({nt:r.num||Math.random(),tour:r.tour,price:parseFloat(r.precio)||0,pts:parseInt(r.puntos)||0,com:parseFloat(r.comision)||5})),T(f)),K().then(r=>{f=r,T(f),O(t,!0),I(!0),v()}).catch(r=>console.error("Error al cargar tours:",r)).finally(()=>{e.removeClass("smw_loading"),a("#tourDisplay").removeClass("smw_loading_select")}),N().catch(r=>console.error(r)),H(t.usuario).catch(r=>console.error(r)),Q(),O(),I(),v();for(let r of[100,300,600,1e3,1800,3e3])setTimeout(v,r)},la=()=>{a(document).off(".registrar"),p=null,f=[],b=null,y=!1};function T(t){if(!t.length){a("#tourTableBody").html('<tr><td colspan="4" style="text-align:center;color:var(--tx3);padding:2vh;">Sin resultados para la búsqueda</td></tr>');return}const e=t.map((s,o)=>`
    <tr class="tour-row" data-index="${f.indexOf(s)}">
      <td class="smw_tour_num">${o+1}</td>
      <td>${s.tour}</td>
      <td class="smw_tour_price">S/ ${s.price.toFixed(2)}</td>
      <td class="smw_tour_pts">${s.pts} pts</td>
    </tr>
  `).join("");a("#tourTableBody").html(e)}async function N(){try{const t=V(),e=`empleadosPuntos_${t}`;w(e)||a("#miniRankingList").html(j(3));const o=await X(t);if(!o||!o.length){a("#miniRankingList").html(`
        <div class="smw_mini_empty">
          <i class="fas fa-star" style="color:var(--brd)"></i>
          <span>No hay ventas este mes.<br>¡Sé el primero en registrar!</span>
        </div>
      `);return}const l=o.slice(0,4).map((i,n)=>{const r=n+1,c=r<=3?`pos_${r}`:"",d=r===1?'<i class="fas fa-crown"></i>':r,m=`${(i.nombre||"?")[0]}${(i.nombre?.split(" ")[1]||"")[0]||""}`.toUpperCase();return`
        <div class="smw_mini_rank_item ${c}" style="animation-delay: ${n*.08}s">
          <div class="smw_mini_rank_badge">${d}</div>
          <div class="smw_mini_rank_avatar">
            ${i.imagen?`<img src="${i.imagen}" alt="${i.nombre}">`:`<span>${m}</span>`}
          </div>
          <div class="smw_mini_rank_info">
            <span class="smw_mini_rank_name">${i.nombre}</span>
            <span class="smw_mini_rank_sales">${i.totalVentas} tour${i.totalVentas!==1?"s":""}</span>
          </div>
          <div class="smw_mini_rank_pts">${i.totalPuntos} <span>pts</span></div>
        </div>
      `}).join("");a("#miniRankingList").html(l)}catch(t){console.error("Error al pintar mini ranking:",t),a("#miniRankingList").html(`
      <div class="smw_mini_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar el ranking</span>
      </div>
    `)}}async function q(t,e){try{const s=w("svVentas");if(s&&s.vendedor===t&&s.mes===e)return console.log("⚡ [Smart Cache] Mis ventas recuperadas usando la clave svVentas."),s.ventas;const o=`ventasSmile_${t}_${e}`,l=w(o);if(l)return l;const[i,n]=e.split("-").map(Number),r=await z(B(J,"registrosdb")),c=[];return r.docs.forEach(d=>{const m=d.data();if(m.vendedor!==t)return;const u=m.fechaTour;let k,D;if(typeof u=="string")[k,D]=u.split("-").map(Number);else if(u?.toDate){const F=u.toDate();k=F.getFullYear(),D=F.getMonth()+1}else return;k===i&&D===n&&c.push({idVenta:m.idVenta||d.id,...m})}),c.sort((d,m)=>{const u=d.fechaRegistro?.seconds?d.fechaRegistro.seconds*1e3:d.fechaRegistro?.toDate?d.fechaRegistro.toDate().getTime():Date.now();return(m.fechaRegistro?.seconds?m.fechaRegistro.seconds*1e3:m.fechaRegistro?.toDate?m.fechaRegistro.toDate().getTime():Date.now())-u}),M(o,c,10),M("svVentas",{vendedor:t,mes:e,ventas:c},10),c}catch(s){return console.error("Error al obtener mis ventas del mes:",s),[]}}async function H(t){try{const e=V(),s=await q(t,e),o=s.reduce((c,d)=>c+(parseInt(d.puntos)||0),0);a("#lblMisPuntosMes").text(`${o} pts`);const l=new Date,i=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`,n=s.filter(c=>{let d=c.fechaTour;return d&&d.toDate&&(d=d.toDate().toISOString().split("T")[0]),d===i});if(!n.length){a("#myTodaySalesList").html(`
        <div class="smw_mini_empty">
          <i class="fas fa-calendar-day" style="color:var(--brd)"></i>
          <span>No has registrado ventas hoy.<br>Tus ventas del día aparecerán aquí.</span>
        </div>
      `);return}const r=n.map((c,d)=>{const m=parseInt(c.cantidadPax)||1,u=parseInt(c.puntos)||0;return`
        <div class="smw_today_sale_card" style="animation-delay: ${d*.06}s">
          <div class="smw_today_sale_icon">
            <i class="fas fa-route"></i>
          </div>
          <div class="smw_today_sale_info">
            <span class="smw_today_sale_client">${c.nombreCliente}</span>
            <span class="smw_today_sale_tour">${c.tipoTour}</span>
            <div class="smw_today_sale_meta">
              <span class="smw_today_sale_pax"><i class="fas fa-users"></i> ${m} pax</span>
              <span class="smw_today_sale_pts"><i class="fas fa-star"></i> ${u} pts</span>
            </div>
          </div>
          <div class="smw_today_sale_edit_btn btn-edit-today-sale" data-id="${c.idVenta}" title="Editar en tiempo real">
            <i class="fas fa-edit"></i>
          </div>
        </div>
      `}).join("");a("#myTodaySalesList").html(r)}catch(e){console.error("Error al pintar mis datos en el sidebar:",e),a("#myTodaySalesList").html(`
      <div class="smw_mini_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar tus datos</span>
      </div>
    `)}}function P(){Object.entries({vtMiVenta:"#lblMiVenta",vtJulio:"#lblJulio",vtSonia:"#lblSonia",vtExterna:"#lblExterna"}).forEach(([e,s])=>{const o=a(`#${e}`).prop("checked"),l=a(s);l.toggleClass("active",o);const i=l.find(".smw_check_icon");o?i.removeClass("fa-circle far").addClass("fa-check-circle fas"):i.removeClass("fa-check-circle fas").addClass("fa-circle far")})}function Q(){a(document).on("input.registrar change.registrar focus.registrar blur.registrar keyup.registrar click.registrar","#formularioVenta input, #formularioVenta select",function(){v(),$()}).on("mouseenter.registrar focusin.registrar click.registrar change.registrar","#formularioVenta",function(){v()}).on("click.registrar","#tourDisplay",function(t){t.stopPropagation();const e=a("#tourDropdown"),s=e.hasClass("active");a(".smw_tour_dropdown").removeClass("active"),a(".smw_tour_display").removeClass("active"),s||(e.addClass("active"),a(this).addClass("active"),setTimeout(()=>a("#smwTourSearch").focus(),100))}).on("click.registrar",function(t){a(t.target).closest(".smw_tour_selector").length||a("#tourDropdown, #tourDisplay").removeClass("active")}).on("input.registrar","#smwTourSearch",function(){const t=a(this).val().toLowerCase();if(!t)T(f);else{const e=f.filter(s=>s.tour.toLowerCase().includes(t)||s.price.toString().includes(t));T(e)}}).on("click.registrar",".tour-row",function(t){t.stopPropagation();const e=a(this).data("index");p=f[e],p&&(a("#tourSelectedLabel").text(p.tour),a("#tipoTour").val(p.tour),a("#tourDisplay").removeClass("faltaValor").addClass("okValor"),a("#precioUnitario").val(p.price).removeClass("faltaValor").addClass("okValor"),a("#tourDropdown, #tourDisplay").removeClass("active"),a(".tour-row").removeClass("selected"),a(this).addClass("selected"),E("#precioUnitario"),x(),h(),g(),v(),$())}).on("input.registrar","#cantidadPax, #precioUnitario",()=>{x(),h(),g()}).on("change.registrar","#estadoPago",h).on("input.registrar","#importeTotal, #PagoOperador",h).on("change.registrar","#vtMiVenta, #vtJulio, #vtSonia, #vtExterna",function(){const t=a(this).attr("id"),e=a(this).prop("checked"),s=["vtMiVenta","vtJulio","vtSonia","vtExterna"];e?s.forEach(o=>{o!==t&&a(`#${o}`).prop("checked",!1)}):s.some(l=>a(`#${l}`).prop("checked"))||a("#vtMiVenta").prop("checked",!0),P(),g(),$()}).on("click.registrar",".btn-edit-today-sale",async function(t){t.preventDefault(),t.stopPropagation();const e=a(this).data("id"),s=R.user;if(!s)return;const o=V(),i=(await q(s.usuario,o)).find(n=>n.idVenta===e);i?(window.editarVenta={venta:i,soloVista:!1},O(),a("html, body").animate({scrollTop:a("#formularioVenta").offset().top-20},500),_("Venta cargada para modificación en tiempo real","info")):_("No se encontró la venta seleccionada","error")}).on("submit.registrar","#formularioVenta",async function(t){t.preventDefault();const e=a("#btnSaveVenta");if(e.prop("disabled"))return;if(!p){_("Selecciona un tour del catálogo","error"),a("#tourDisplay").addClass("faltaValor").focus();return}const o=[["#nombreCliente","Cliente"],["#horaSalida","Hora"],["#fechaTour","Fecha"],["#Operador","Operador"],["#metodoPago","Pago"]].filter(([u])=>!a(u).val()?.trim());if(o.length){o.forEach(([u])=>a(u).addClass("faltaValor")),_(`Completa los campos obligatorios: ${o.map(([,u])=>u).join(", ")}`,"error");return}const l=R.user,i=l.usuario||l.nombre||"Desconocido",n=l.email||"",r=parseInt(a("#cantidadPax").val())||1,c=a("#vtJulio, #vtSonia, #vtExterna").is(":checked"),d=e.attr("data-edit-id")||`venta_${Date.now()}`,m={idVenta:d,tipoTour:p.tour,registroEn:a("#registroEn").val(),nombreCliente:a("#nombreCliente").val().trim(),numeroHabitacion:a("#numeroHabitacion").val().trim(),tipoDocumento:a("#tipoDocumento").val(),numeroDocumento:a("#numeroDocumento").val().trim(),cantidadPax:r,precioUnitario:parseFloat(a("#precioUnitario").val())||0,metodoPago:a("#metodoPago").val(),importeTotal:parseFloat(a("#importeTotal").val())||0,ganancia:parseFloat(a("#ganancia").val())||0,horaSalida:a("#horaSalida").val().trim(),Operador:a("#Operador").val().trim(),PagoOperador:parseFloat(a("#PagoOperador").val())||0,Comentario:a("#Comentario").val().trim(),fechaTour:a("#fechaTour").val(),estadoPago:a("#estadoPago").val(),vendedor:i,puntos:c?0:p.pts*r,email:n,qventa:1,fechaRegistro:Y(),esVentaJulio:!!a("#vtJulio").prop("checked"),esVentaSonia:!!a("#vtSonia").prop("checked"),esVentaExterna:!!a("#vtExterna").prop("checked")};A(e,!0,e.attr("data-edit-id")?"Actualizando...":"Guardando...");try{await U(G(J,"registrosdb",d),m);const u=V();Z(i,u),S("svVentas"),_(e.attr("data-edit-id")?"¡Venta actualizada con éxito! 🏆":"¡Venta registrada con éxito! 🚀","success"),C(),await N(),await H(i),setTimeout(()=>{L.navigate("/historial")},1200)}catch(u){console.error("Error al guardar venta:",u),_("Error al intentar guardar la venta.","error")}finally{A(e,!1)}})}function x(){const t=parseInt(a("#cantidadPax").val())||1,s=(parseFloat(a("#precioUnitario").val())||0)*t;a("#importeTotal").val(s.toFixed(2)),E("#importeTotal")}function h(){const t=a("#estadoPago").val(),e=parseFloat(a("#importeTotal").val())||0,s=parseFloat(a("#PagoOperador").val())||0,o=t==="pagado"||t==="pagado2",l=a("#PagoOperador");if(o)l.prop("disabled",!0).val("0").attr("placeholder","Servicio propio"),a("#ganancia").val(e.toFixed(2));else{l.prop("disabled",!1).attr("placeholder","S/ 0.00");const i=e-s;a("#ganancia").val(i.toFixed(2))}E("#ganancia")}function g(){const t=parseInt(a("#cantidadPax").val())||1,e=p?.pts||0,o=a("#vtJulio, #vtSonia, #vtExterna").is(":checked")?0:e*t;a("#vistaPreviaLaPuntos").text(o),E("#vistaPreviaLaPuntos")}function E(t){a(t).addClass("field-updated"),setTimeout(()=>a(t).removeClass("field-updated"),600)}function v(){a("#formularioVenta input, #formularioVenta select").each(function(){const e=a(this);if(e.attr("type")==="hidden"||e.attr("type")==="checkbox"||e.attr("type")==="submit")return;const s=e.val()?.toString().trim();e.prop("required")?e.toggleClass("okValor",!!s).toggleClass("faltaValor",!s):e.toggleClass("okValor",!!s)}),a("#tipoTour").val()?a("#tourDisplay").removeClass("faltaValor").addClass("okValor"):a("#tourDisplay").removeClass("okValor faltaValor")}function C(){y=!0,p=null,b=null;const t=a("#formularioVenta");if(!t.length){y=!1;return}t[0].reset(),S("registroVentaDraft"),a("#formularioVenta input, #formularioVenta select, #tourDisplay").prop("disabled",!1).removeClass("okValor faltaValor"),a("#smwRegCard").removeClass("view-only edit-mode"),a("#vtMiVenta").prop("checked",!0),a("#vtJulio, #vtSonia, #vtExterna").prop("checked",!1),P(),a("#btnSaveVenta").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),a(".btn-custom-action").remove(),a("#cantidadPax").val(1),a("#fechaTour").val(new Date().toISOString().split("T")[0]),a("#vistaPreviaLaPuntos").text("0"),a("#tourSelectedLabel").text("Seleccionar tour..."),a(".tour-row").removeClass("selected"),a("#importeTotal, #ganancia").prop("disabled",!0),a("#smwRegCardTitle").html('<i class="fas fa-cart-plus"></i> Registrar Nueva Venta'),v(),y=!1}function O(t,e=!1){let s=b;if(s||(s=window.editarVenta||w("editarVentaTemp"),s&&(b=s,window.editarVenta=null,S("editarVentaTemp"))),!s)return;const{venta:o,soloVista:l}=s;if(o)if(e||(C(),b=s),p=f.find(i=>i.tour===o.tipoTour),p?(a("#tourSelectedLabel").text(p.tour),a("#tipoTour").val(p.tour),a("#tourDisplay").removeClass("faltaValor").addClass("okValor"),a(".tour-row").removeClass("selected"),a(`.tour-row[data-index="${f.indexOf(p)}"]`).addClass("selected")):(a("#tourSelectedLabel").text(o.tipoTour||"Tour personalizado"),a("#tipoTour").val(o.tipoTour||""),a("#tourDisplay").removeClass("okValor faltaValor")),e)x(),h(),g(),v();else{if(Object.entries(o).forEach(([n,r])=>{const c=a(`#${n}`);c.length&&n!=="fechaTour"&&n!=="esVentaJulio"&&n!=="esVentaSonia"&&n!=="esVentaExterna"&&c.val(r||"")}),o.fechaTour){let n="";o.fechaTour?.toDate?n=o.fechaTour.toDate().toISOString().split("T")[0]:typeof o.fechaTour=="string"&&(n=o.fechaTour.split("T")[0]),a("#fechaTour").val(n)}const i=o.esVentaJulio||o.esVentaSonia||o.esVentaExterna;a("#vtMiVenta").prop("checked",!i),a("#vtJulio").prop("checked",o.esVentaJulio||!1),a("#vtSonia").prop("checked",o.esVentaSonia||!1),a("#vtExterna").prop("checked",o.esVentaExterna||!1),P(),x(),h(),g(),l?(a("#formularioVenta input, #formularioVenta select").prop("disabled",!0),a("#tourDisplay").css("pointer-events","none"),a("#smwRegCard").addClass("view-only"),a("#smwRegCardTitle").html('<i class="fas fa-eye"></i> Detalle de Venta (Solo Vista)'),a("#btnSaveVenta").prop("disabled",!0).html('<i class="fas fa-lock"></i> Venta Protegida'),a(".btn-clear-view").length||a("#smwActionsRight").append(`
          <button type="button" class="smw_btn smw_btn_cancel btn-custom-action btn-clear-view">
            <i class="fas fa-arrow-left"></i> Volver al Registro
          </button>
        `),a(document).on("click.registrar",".btn-clear-view",function(){C(),_("Formulario restaurado a modo registro.","info")})):(a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a("#importeTotal, #ganancia").prop("disabled",!0),a("#tourDisplay").css("pointer-events","auto"),a("#smwRegCard").addClass("edit-mode"),a("#smwRegCardTitle").html('<i class="fas fa-edit"></i> Modificar Registro de Venta'),a("#btnSaveVenta").prop("disabled",!1).html('<i class="fas fa-save"></i> Guardar Cambios').attr("data-edit-id",o.idVenta||o.id),a(".btn-cancel-edit").length||a("#smwActionsRight").append(`
          <button type="button" class="smw_btn smw_btn_cancel btn-custom-action btn-cancel-edit">
            <i class="fas fa-times"></i> Cancelar Edición
          </button>
        `),a(document).on("click.registrar",".btn-cancel-edit",function(){C(),_("Edición cancelada.","info")})),v()}}function W(t=4){return Array(t).fill(0).map(()=>`
    <tr style="pointer-events: none;">
      <td class="smw_tour_num"><div class="smw_sk_el" style="width: 16px; height: 16px; border-radius: 4px;"></div></td>
      <td><div class="smw_sk_el" style="width: 140px; height: 14px; border-radius: 4px;"></div></td>
      <td class="smw_tour_price"><div class="smw_sk_el" style="width: 50px; height: 14px; border-radius: 4px;"></div></td>
      <td class="smw_tour_pts"><div class="smw_sk_el" style="width: 40px; height: 14px; border-radius: 4px;"></div></td>
    </tr>
  `).join("")}function j(t=3){return Array(t).fill(0).map((e,s)=>`
    <div class="smw_mini_rank_item smw_sk_mini_row" style="pointer-events: none; animation-delay: ${s*.05}s">
      <div class="smw_sk_el" style="width: 2.2vh; height: 2.2vh; border-radius: 50%; margin-right: 1.5vh;"></div>
      <div class="smw_mini_rank_avatar smw_sk_el smw_sk_circle" style="border-radius: 50%; width: 4.5vh; height: 4.5vh; background: none; margin-right: 1.5vh;"></div>
      <div class="smw_mini_rank_info" style="flex: 1;">
        <div class="smw_sk_el" style="width: 80px; height: 12px; margin-bottom: 0.6vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 50px; height: 9px; border-radius: 4px;"></div>
      </div>
      <div class="smw_sk_el" style="width: 40px; height: 14px; border-radius: 4px;"></div>
    </div>
  `).join("")}function $(){if(y||a("#smwRegCard").hasClass("edit-mode")||a("#smwRegCard").hasClass("view-only"))return;const t=a("#nombreCliente").val()?.trim()||"",e=a("#tipoTour").val()||"";if(!t&&!e){S("registroVentaDraft");return}const s={tipoTour:e,registroEn:a("#registroEn").val()||"hawka",nombreCliente:t,numeroHabitacion:a("#numeroHabitacion").val()?.trim()||"",horaSalida:a("#horaSalida").val()?.trim()||"",tipoDocumento:a("#tipoDocumento").val()||"dni",numeroDocumento:a("#numeroDocumento").val()?.trim()||"",metodoPago:a("#metodoPago").val()||"",cantidadPax:a("#cantidadPax").val()||"1",precioUnitario:a("#precioUnitario").val()||"",Operador:a("#Operador").val()?.trim()||"",PagoOperador:a("#PagoOperador").val()||"",estadoPago:a("#estadoPago").val()||"pagado",Comentario:a("#Comentario").val()?.trim()||"",fechaTour:a("#fechaTour").val()||"",esVentaJulio:a("#vtJulio").prop("checked")||!1,esVentaSonia:a("#vtSonia").prop("checked")||!1,esVentaExterna:a("#vtExterna").prop("checked")||!1};M("registroVentaDraft",s,24)}function I(t=!1){if(a("#smwRegCard").hasClass("edit-mode")||a("#smwRegCard").hasClass("view-only"))return;const e=w("registroVentaDraft");if(e){if(!t){Object.entries(e).forEach(([o,l])=>{const i=a(`#${o}`);i.length&&o!=="fechaTour"&&o!=="esVentaJulio"&&o!=="esVentaSonia"&&o!=="esVentaExterna"&&i.val(l||"")}),e.fechaTour&&a("#fechaTour").val(e.fechaTour);const s=e.esVentaJulio||e.esVentaSonia||e.esVentaExterna;a("#vtMiVenta").prop("checked",!s),a("#vtJulio").prop("checked",e.esVentaJulio||!1),a("#vtSonia").prop("checked",e.esVentaSonia||!1),a("#vtExterna").prop("checked",e.esVentaExterna||!1),P()}e.tipoTour&&(p=f.find(s=>s.tour===e.tipoTour),p&&(a("#tourSelectedLabel").text(p.tour),a("#tipoTour").val(p.tour),a("#tourDisplay").removeClass("faltaValor").addClass("okValor"),a(".tour-row").removeClass("selected"),a(`.tour-row[data-index="${f.indexOf(p)}"]`).addClass("selected"))),x(),h(),g(),v()}}export{la as cleanup,ra as init,ia as render};
