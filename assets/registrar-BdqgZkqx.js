import{r as e}from"./vendor-CZ6bxb2j.js";import{C as t,f as n,h as r,i,m as a,v as o}from"./widev-BkR2Na_W.js";import{i as s}from"./index-By8tpuOv.js";import{a as c,g as l,u,v as d,x as f}from"./firebase-D6VL4aaK.js";import{n as p}from"./firebase-BfEAzf30.js";import{cargarTours as m,getMesActual as h,invalidateRankingCaches as g,obtenerRankingMes as _}from"./zsmile-9OBMck8o.js";var v=[],y=null,b=null,x=!1,S=()=>`
  <div class="smw_reg_container">
    <div class="smw_reg_card" id="smwRegCard">
      
      <!-- COLUMNA IZQUIERDA: FORMULARIO DE REGISTRO (70%) -->
      <div class="smw_reg_col_left">
        <h1 class="smw_reg_title">
          <span id="smwRegCardTitle"><i class="fas fa-cart-plus"></i> Registrar Nueva Venta</span>
          <div class="smw_points_title_preview" data-witip="¡Puntos a ganar!" data-wtipo="success">
            <span id="vistaPreviaLaPuntos">0</span> <i class="fas fa-star"></i>
          </div>
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
                        ${R(4)}
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

            <!-- Fila 2: Información General del Tour -->
            <div class="smw_form_field w_1">
              <label><i class="fas fa-calendar-day"></i> Fecha del Tour *</label>
              <input type="date" id="fechaTour" class="smw_input" required value="${new Date().toISOString().split(`T`)[0]}">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-user"></i> Cliente o Grupo *</label>
              <input type="text" id="nombreCliente" class="smw_input" required placeholder="Cliente / calle / grupo">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-credit-card"></i> Pago Cliente *</label>
              <select id="metodoPago" class="smw_select" required>
                <option value="">Seleccionar...</option>
                <option value="Tarjeta">Tarjeta</option>
                <option value="Transferencia">Transferencia</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Yape">Yape</option>
                <option value="Plin">Plin</option>
              </select>
            </div>

            <input type="hidden" id="horaSalida" value="—">

            <!-- Fila 3: Transacción Financiera del Cliente -->
            <div class="smw_form_field w_1">
              <label>
                <i class="fas fa-dollar-sign"></i> Precio Persona
                <i class="fas fa-circle-question" data-witip="¿Cuánto cobraremos por cada pasajero en este tour?" data-wtipo="info"></i>
              </label>
              <input type="number" id="precioUnitario" class="smw_input" step="0.01" placeholder="0.00">
            </div>

            <div class="smw_form_field w_1">
              <label>
                <i class="fas fa-users"></i> Personas (PAX) *
                <i class="fas fa-circle-question" data-witip="¿Cuántas personas viajarán en total?" data-wtipo="info"></i>
              </label>
              <input type="number" id="cantidadPax" class="smw_input" required min="1" value="1">
            </div>

            <div class="smw_form_field w_1">
              <label>
                <i class="fas fa-calculator"></i> Ingreso Total
                <i class="fas fa-circle-question" data-witip="Lo que el cliente nos paga en total por todo el grupo (Precio × Pasajeros)." data-wtipo="info"></i>
              </label>
              <input type="number" id="importeTotal" class="smw_input" step="0.01" placeholder="0.00" disabled>
            </div>

            <div class="smw_form_field w_1">
              <label>
                <i class="fas fa-money-check-alt"></i> Pago al Proveedor *
                <i class="fas fa-circle-question" data-witip="¿Cuál es el estado del pago al proveedor?<br>• Elige 'No aplica (Nosotros)' si el servicio es propio.<br>• Elige 'Sí (Pagado)' si ya se le pagó al operador.<br>• Elige 'No (Deuda)' si el pago queda pendiente." data-wtipo="info"></i>
              </label>
              <select id="estadoPago" class="smw_select" required>
                <option value="pagado2">No aplica (Nosotros)</option>
                <option value="pagado" selected>Sí (Pagado)</option>
                <option value="cobrar">No (Deuda)</option>
              </select>
            </div>

            <!-- Fila 4: Liquidación del Operador, Costo y Observaciones -->
            <div class="smw_form_field w_1">
              <label>
                <i class="fas fa-user-shield"></i> Operador del Tour *
                <i class="fas fa-circle-question" data-witip="La empresa externa que realizará el servicio.<br>Si el viaje lo hacemos nosotros mismos, puedes dejarlo vacío." data-wtipo="info"></i>
              </label>
              <input type="text" id="Operador" class="smw_input" placeholder="Ejm: Pili..." required>
            </div>

            <div class="smw_form_field w_1">
              <label>
                <i class="fas fa-hand-holding-usd"></i> Costo Operador *
                <i class="fas fa-circle-question" data-witip="El costo neto que nos cobra el operador por realizar el tour." data-wtipo="info"></i>
              </label>
              <input type="number" id="PagoOperador" class="smw_input" step="0.01" placeholder="0.00" required>
            </div>

            <div class="smw_form_field w_3">
              <label><i class="fa-solid fa-comment-dots"></i> Observaciones / Detalles Extra (Opcional)</label>
              <input type="text" id="Comentario" class="smw_input" placeholder="Anotaciones extra...">
            </div>

            <input type="hidden" id="pagoOperadorSiNo" value="no">
            <input type="hidden" id="ganancia" value="0.00">

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

          <!-- Acciones del Formulario (Guardar Venta) -->
          <div class="smw_form_actions">
            <div class="smw_actions_right" id="smwActionsRight">
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
            ${z(3)}
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
`,C=async()=>{let t=e(`#smwRegCard`);t.addClass(`smw_loading`),e(`#tourDisplay`).addClass(`smw_loading_select`),e(`#formularioVenta`).removeClass(`smw_show_checks`);let r=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`],[i,a]=h().split(`-`);e(`#lblMesActual`).text(`${r[parseInt(a)-1]} ${i}`);let o=n(`toursSmile`);o?.length>0&&(v=o.map(e=>({nt:e.num||Math.random(),tour:e.tour,price:parseFloat(e.precio)||0,pts:parseInt(e.puntos)||0,com:parseFloat(e.comision)||5})),T(v)),m().then(e=>{v=e,T(v),L(user,!0),V(!0),F()}).catch(e=>console.error(`Error al cargar tours:`,e)).finally(()=>{t.removeClass(`smw_loading`),e(`#tourDisplay`).removeClass(`smw_loading_select`)}),E().catch(e=>console.error(e)),O(user.usuario).catch(e=>console.error(e)),A(),L(user),V(),F();for(let e of[100,300,600,1e3,1800,3e3])setTimeout(F,e)},w=()=>{e(document).off(`.registrar`),y=null,v=[],b=null,x=!1};function T(t){if(!t.length){e(`#tourTableBody`).html(`<tr><td colspan="4" style="text-align:center;color:var(--tx3);padding:2vh;">Sin resultados para la búsqueda</td></tr>`);return}let n=t.map((e,t)=>`
    <tr class="tour-row" data-index="${v.indexOf(e)}">
      <td class="smw_tour_num">${t+1}</td>
      <td>${e.tour}</td>
      <td class="smw_tour_price">S/ ${e.price.toFixed(2)}</td>
      <td class="smw_tour_pts">${e.pts} pts</td>
    </tr>
  `).join(``);e(`#tourTableBody`).html(n)}async function E(){try{let t=h();n(`empleadosPuntos_${t}`)||e(`#miniRankingList`).html(z(3));let r=await _(t);if(!r||!r.length){e(`#miniRankingList`).html(`
        <div class="smw_mini_empty">
          <i class="fas fa-star" style="color:var(--brd)"></i>
          <span>No hay ventas este mes.<br>¡Sé el primero en registrar!</span>
        </div>
      `);return}let i=r.slice(0,4).map((e,t)=>{let n=t+1,r=n<=3?`pos_${n}`:``,i=n===1?`<i class="fas fa-crown"></i>`:n,a=`${(e.nombre||`?`)[0]}${(e.nombre?.split(` `)[1]||``)[0]||``}`.toUpperCase();return`
        <div class="smw_mini_rank_item ${r}" style="animation-delay: ${t*.08}s">
          <div class="smw_mini_rank_badge">${i}</div>
          <div class="smw_mini_rank_avatar">
            ${e.imagen?`<img src="${e.imagen}" alt="${e.nombre}">`:`<span>${a}</span>`}
          </div>
          <div class="smw_mini_rank_info">
            <span class="smw_mini_rank_name">${e.nombre}</span>
            <span class="smw_mini_rank_sales">${e.totalVentas} tour${e.totalVentas===1?``:`s`}</span>
          </div>
          <div class="smw_mini_rank_pts">${e.totalPuntos} <span>pts</span></div>
        </div>
      `}).join(``);e(`#miniRankingList`).html(i)}catch(t){console.error(`Error al pintar mini ranking:`,t),e(`#miniRankingList`).html(`
      <div class="smw_mini_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar el ranking</span>
      </div>
    `)}}async function D(e,t){try{let i=n(`svVentas`);if(i&&i.vendedor===e&&i.mes===t)return console.log(`⚡ [Smart Cache] Mis ventas recuperadas usando la clave svVentas.`),i.ventas;let a=`ventasSmile_${e}_${t}`,o=n(a);if(o)return o;let[s,u]=t.split(`-`).map(Number),d=await c(l(p,`registrosdb`)),f=[];return d.docs.forEach(t=>{let n=t.data();if(n.vendedor!==e)return;let r=n.fechaTour,i,a;if(typeof r==`string`)[i,a]=r.split(`-`).map(Number);else if(r?.toDate){let e=r.toDate();i=e.getFullYear(),a=e.getMonth()+1}else return;i===s&&a===u&&f.push({idVenta:n.idVenta||t.id,...n})}),f.sort((e,t)=>{let n=e.fechaRegistro?.seconds?e.fechaRegistro.seconds*1e3:e.fechaRegistro?.toDate?e.fechaRegistro.toDate().getTime():Date.now();return(t.fechaRegistro?.seconds?t.fechaRegistro.seconds*1e3:t.fechaRegistro?.toDate?t.fechaRegistro.toDate().getTime():Date.now())-n}),r(a,f,10),r(`svVentas`,{vendedor:e,mes:t,ventas:f},10),f}catch(e){return console.error(`Error al obtener mis ventas del mes:`,e),[]}}async function O(t){try{let n=await D(t,h()),r=n.reduce((e,t)=>e+(parseInt(t.puntos)||0),0);e(`#lblMisPuntosMes`).text(`${r} pts`);let i=new Date,a=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,`0`)}-${String(i.getDate()).padStart(2,`0`)}`,o=n.filter(e=>{let t=e.fechaTour;return t&&t.toDate&&(t=t.toDate().toISOString().split(`T`)[0]),t===a});if(!o.length){e(`#myTodaySalesList`).html(`
        <div class="smw_mini_empty">
          <i class="fas fa-calendar-day" style="color:var(--brd)"></i>
          <span>No has registrado ventas hoy.<br>Tus ventas del día aparecerán aquí.</span>
        </div>
      `);return}let s=o.map((e,t)=>{let n=parseInt(e.cantidadPax)||1,r=parseInt(e.puntos)||0;return`
        <div class="smw_today_sale_card" style="animation-delay: ${t*.06}s">
          <div class="smw_today_sale_icon">
            <i class="fas fa-route"></i>
          </div>
          <div class="smw_today_sale_info">
            <span class="smw_today_sale_client">${e.nombreCliente}</span>
            <span class="smw_today_sale_tour">${e.tipoTour}</span>
            <div class="smw_today_sale_meta">
              <span class="smw_today_sale_pax"><i class="fas fa-users"></i> ${n} pax</span>
              <span class="smw_today_sale_pts"><i class="fas fa-star"></i> ${r} pts</span>
            </div>
          </div>
          <div class="smw_today_sale_edit_btn btn-edit-today-sale" data-id="${e.idVenta}" title="Editar en tiempo real">
            <i class="fas fa-edit"></i>
          </div>
        </div>
      `}).join(``);e(`#myTodaySalesList`).html(s)}catch(t){console.error(`Error al pintar mis datos en el sidebar:`,t),e(`#myTodaySalesList`).html(`
      <div class="smw_mini_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar tus datos</span>
      </div>
    `)}}function k(){Object.entries({vtMiVenta:`#lblMiVenta`,vtJulio:`#lblJulio`,vtSonia:`#lblSonia`,vtExterna:`#lblExterna`}).forEach(([t,n])=>{let r=e(`#${t}`).prop(`checked`),i=e(n);i.toggleClass(`active`,r);let a=i.find(`.smw_check_icon`);r?a.removeClass(`fa-circle far`).addClass(`fa-check-circle fas`):a.removeClass(`fa-check-circle fas`).addClass(`fa-circle far`)})}function A(){e(document).on(`input.registrar change.registrar focus.registrar blur.registrar keyup.registrar click.registrar`,`#formularioVenta input, #formularioVenta select`,function(){F(),B()}).on(`mouseenter.registrar focusin.registrar click.registrar change.registrar`,`#formularioVenta`,function(){F()}).on(`click.registrar`,`#tourDisplay`,function(t){t.stopPropagation();let n=e(`#tourDropdown`),r=n.hasClass(`active`);e(`.smw_tour_dropdown`).removeClass(`active`),e(`.smw_tour_display`).removeClass(`active`),r||(n.addClass(`active`),e(this).addClass(`active`),setTimeout(()=>e(`#smwTourSearch`).focus(),100))}).on(`click.registrar`,function(t){e(t.target).closest(`.smw_tour_selector`).length||e(`#tourDropdown, #tourDisplay`).removeClass(`active`)}).on(`input.registrar`,`#smwTourSearch`,function(){let t=e(this).val().toLowerCase();T(t?v.filter(e=>e.tour.toLowerCase().includes(t)||e.price.toString().includes(t)):v)}).on(`click.registrar`,`.tour-row`,function(t){t.stopPropagation();let n=e(this).data(`index`);y=v[n],y&&(e(`#tourSelectedLabel`).text(y.tour),e(`#tipoTour`).val(y.tour),e(`#tourDisplay`).removeClass(`faltaValor`).addClass(`okValor`),e(`#precioUnitario`).val(y.price).removeClass(`faltaValor`).addClass(`okValor`),e(`#tourDropdown, #tourDisplay`).removeClass(`active`),e(`.tour-row`).removeClass(`selected`),e(this).addClass(`selected`),P(`#precioUnitario`),j(),M(),N(),F(),B())}).on(`input.registrar`,`#cantidadPax, #precioUnitario`,()=>{j(),M(),N()}).on(`change.registrar`,`#estadoPago`,M).on(`input.registrar`,`#importeTotal, #PagoOperador`,M).on(`change.registrar`,`#vtMiVenta, #vtJulio, #vtSonia, #vtExterna`,function(){let t=e(this).attr(`id`),n=e(this).prop(`checked`),r=[`vtMiVenta`,`vtJulio`,`vtSonia`,`vtExterna`];n?r.forEach(n=>{n!==t&&e(`#${n}`).prop(`checked`,!1)}):r.some(t=>e(`#${t}`).prop(`checked`))||e(`#vtMiVenta`).prop(`checked`,!0),k(),N(),B()}).on(`click.registrar`,`.btn-edit-today-sale`,async function(t){t.preventDefault(),t.stopPropagation();let n=e(this).data(`id`),r=o.user;if(!r)return;let a=h(),s=(await D(r.usuario,a)).find(e=>e.idVenta===n);s?(window.editarVenta={venta:s,soloVista:!1},L(r),e(`html, body`).animate({scrollTop:e(`#formularioVenta`).offset().top-20},500),i(`Venta cargada para modificación en tiempo real`,`info`)):i(`No se encontró la venta seleccionada`,`error`)}).on(`submit.registrar`,`#formularioVenta`,async function(n){n.preventDefault();let r=e(`#btnSaveVenta`);if(r.prop(`disabled`))return;if(!y){i(`Selecciona un tour del catálogo`,`error`),e(`#tourDisplay`).addClass(`faltaValor`).focus();return}let c=[[`#nombreCliente`,`Cliente`],[`#fechaTour`,`Fecha`],[`#Operador`,`Operador`],[`#metodoPago`,`Pago`]].filter(([t])=>!e(t).val()?.trim());if(c.length){c.forEach(([t])=>e(t).addClass(`faltaValor`)),i(`Completa los campos obligatorios: ${c.map(([,e])=>e).join(`, `)}`,`error`);return}let l=o.user,m=l.usuario||l.nombre||`Desconocido`,_=l.email||``,v=parseInt(e(`#cantidadPax`).val())||1,b=e(`#vtJulio, #vtSonia, #vtExterna`).is(`:checked`),x=r.attr(`data-edit-id`)||`venta_${Date.now()}`,S={idVenta:x,tipoTour:y.tour,registroEn:e(`#registroEn`).val(),nombreCliente:e(`#nombreCliente`).val().trim(),cantidadPax:v,precioUnitario:parseFloat(e(`#precioUnitario`).val())||0,metodoPago:e(`#metodoPago`).val(),importeTotal:parseFloat(e(`#importeTotal`).val())||0,ganancia:parseFloat(e(`#ganancia`).val())||0,horaSalida:e(`#horaSalida`).val().trim(),Operador:e(`#Operador`).val().trim(),PagoOperador:parseFloat(e(`#PagoOperador`).val())||0,pagoOperadorSiNo:e(`#pagoOperadorSiNo`).val(),Comentario:e(`#Comentario`).val().trim(),fechaTour:e(`#fechaTour`).val(),estadoPago:e(`#estadoPago`).val(),vendedor:m,puntos:b?0:y.pts*v,email:_,qventa:1,fechaRegistro:f(),esVentaJulio:!!e(`#vtJulio`).prop(`checked`),esVentaSonia:!!e(`#vtSonia`).prop(`checked`),esVentaExterna:!!e(`#vtExterna`).prop(`checked`)};t(r[0],!0,r.attr(`data-edit-id`)?`Actualizando...`:`Guardando...`);try{await u(d(p,`registrosdb`,x),S),g(m,h()),a(`svVentas`),i(r.attr(`data-edit-id`)?`¡Venta actualizada con éxito! 🏆`:`¡Venta registrada con éxito! 🚀`,`success`),I(),await E(),await O(m),setTimeout(()=>{s.navigate(`/historial`)},1200)}catch(e){console.error(`Error al guardar venta:`,e),i(`Error al intentar guardar la venta.`,`error`)}finally{t(r[0],!1)}})}function j(){let t=parseInt(e(`#cantidadPax`).val())||1,n=(parseFloat(e(`#precioUnitario`).val())||0)*t;e(`#importeTotal`).val(n.toFixed(2)),P(`#importeTotal`)}function M(){let t=e(`#estadoPago`).val(),n=parseFloat(e(`#importeTotal`).val())||0,r=e(`#PagoOperador`),i=e(`#pagoOperadorSiNo`),a=e(`#Operador`);if(t===`pagado2`){let t=r.prop(`disabled`);r.prop(`disabled`,!0).val(`0.00`).attr(`placeholder`,`No aplica`),i.val(`na`),a.prop(`disabled`,!0).val(`Nosotros`).attr(`placeholder`,`Servicio propio`),e(`#ganancia`).val(n.toFixed(2)),t||(P(`#Operador`),P(`#PagoOperador`),P(`#pagoOperadorSiNo`))}else{let o=!r.prop(`disabled`);a.val()===`Nosotros`&&a.val(``),parseFloat(r.val())===0&&r.val(``),t===`pagado`?i.val(`si`):i.val(`no`),r.prop(`disabled`,!1).attr(`placeholder`,`S/ 0.00`),i.prop(`disabled`,!1),a.prop(`disabled`,!1).attr(`placeholder`,`Ejm: Pili...`);let s=n-(parseFloat(r.val())||0);e(`#ganancia`).val(s.toFixed(2)),o||(P(`#Operador`),P(`#PagoOperador`),P(`#pagoOperadorSiNo`))}P(`#ganancia`)}function N(){let t=parseInt(e(`#cantidadPax`).val())||1,n=y?.pts||0,r=e(`#vtJulio, #vtSonia, #vtExterna`).is(`:checked`)?0:n*t;e(`#vistaPreviaLaPuntos`).text(r),P(`#vistaPreviaLaPuntos`)}function P(t){e(t).addClass(`field-updated`),setTimeout(()=>e(t).removeClass(`field-updated`),600)}function F(){e(`#formularioVenta input, #formularioVenta select`).each(function(){let t=e(this);if(t.attr(`type`)===`hidden`||t.attr(`type`)===`checkbox`||t.attr(`type`)===`submit`)return;let n=t.val()?.toString().trim();t.prop(`required`)?t.toggleClass(`okValor`,!!n).toggleClass(`faltaValor`,!n):t.toggleClass(`okValor`,!!n)}),e(`#tipoTour`).val()?e(`#tourDisplay`).removeClass(`faltaValor`).addClass(`okValor`):e(`#tourDisplay`).removeClass(`okValor faltaValor`)}function I(){x=!0,y=null,b=null;let t=e(`#formularioVenta`);if(!t.length){x=!1;return}t[0].reset(),a(`registroVentaDraft`),e(`#formularioVenta input, #formularioVenta select, #tourDisplay`).prop(`disabled`,!1).removeClass(`okValor faltaValor`),e(`#smwRegCard`).removeClass(`view-only edit-mode`),e(`#vtMiVenta`).prop(`checked`,!0),e(`#vtJulio, #vtSonia, #vtExterna`).prop(`checked`,!1),k(),e(`#btnSaveVenta`).prop(`disabled`,!1).html(`<i class="fas fa-save"></i> Guardar Venta`).removeAttr(`data-edit-id`),e(`.btn-custom-action`).remove(),e(`#cantidadPax`).val(1),e(`#fechaTour`).val(new Date().toISOString().split(`T`)[0]),e(`#estadoPago`).val(`pagado`),e(`#vistaPreviaLaPuntos`).text(`0`),e(`#tourSelectedLabel`).text(`Seleccionar tour...`),e(`.tour-row`).removeClass(`selected`),e(`#importeTotal, #ganancia`).prop(`disabled`,!0),e(`#pagoOperadorSiNo`).val(`si`).prop(`disabled`,!1),e(`#smwRegCardTitle`).html(`<i class="fas fa-cart-plus"></i> Registrar Nueva Venta`),M(),F(),x=!1}function L(t,r=!1){let o=b;if(o||(o=window.editarVenta||n(`editarVentaTemp`),o&&(b=o,window.editarVenta=null,a(`editarVentaTemp`))),!o)return;let{venta:s,soloVista:c}=o;if(s)if(r||(I(),b=o),y=v.find(e=>e.tour===s.tipoTour),y?(e(`#tourSelectedLabel`).text(y.tour),e(`#tipoTour`).val(y.tour),e(`#tourDisplay`).removeClass(`faltaValor`).addClass(`okValor`),e(`.tour-row`).removeClass(`selected`),e(`.tour-row[data-index="${v.indexOf(y)}"]`).addClass(`selected`)):(e(`#tourSelectedLabel`).text(s.tipoTour||`Tour personalizado`),e(`#tipoTour`).val(s.tipoTour||``),e(`#tourDisplay`).removeClass(`okValor faltaValor`)),r)j(),M(),N(),F();else{if(Object.entries(s).forEach(([t,n])=>{let r=e(`#${t}`);r.length&&t!==`fechaTour`&&t!==`esVentaJulio`&&t!==`esVentaSonia`&&t!==`esVentaExterna`&&r.val(n||``)}),s.fechaTour){let t=``;s.fechaTour?.toDate?t=s.fechaTour.toDate().toISOString().split(`T`)[0]:typeof s.fechaTour==`string`&&(t=s.fechaTour.split(`T`)[0]),e(`#fechaTour`).val(t)}let t=s.esVentaJulio||s.esVentaSonia||s.esVentaExterna;e(`#vtMiVenta`).prop(`checked`,!t),e(`#vtJulio`).prop(`checked`,s.esVentaJulio||!1),e(`#vtSonia`).prop(`checked`,s.esVentaSonia||!1),e(`#vtExterna`).prop(`checked`,s.esVentaExterna||!1),k(),e(`#pagoOperadorSiNo`).val(s.pagoOperadorSiNo||`no`),j(),M(),N(),c?(e(`#formularioVenta input, #formularioVenta select`).prop(`disabled`,!0),e(`#tourDisplay`).css(`pointer-events`,`none`),e(`#smwRegCard`).addClass(`view-only`),e(`#smwRegCardTitle`).html(`<i class="fas fa-eye"></i> Detalle de Venta (Solo Vista)`),e(`#btnSaveVenta`).prop(`disabled`,!0).html(`<i class="fas fa-lock"></i> Venta Protegida`),e(`.btn-clear-view`).length||e(`#smwActionsRight`).append(`
          <button type="button" class="smw_btn smw_btn_cancel btn-custom-action btn-clear-view">
            <i class="fas fa-arrow-left"></i> Volver al Registro
          </button>
        `),e(document).on(`click.registrar`,`.btn-clear-view`,function(){I(),i(`Formulario restaurado a modo registro.`,`info`)})):(e(`#formularioVenta input, #formularioVenta select`).prop(`disabled`,!1),e(`#importeTotal, #ganancia`).prop(`disabled`,!0),e(`#tourDisplay`).css(`pointer-events`,`auto`),e(`#smwRegCard`).addClass(`edit-mode`),e(`#smwRegCardTitle`).html(`<i class="fas fa-edit"></i> Modificar Registro de Venta`),e(`#btnSaveVenta`).prop(`disabled`,!1).html(`<i class="fas fa-save"></i> Guardar Cambios`).attr(`data-edit-id`,s.idVenta||s.id),e(`.btn-cancel-edit`).length||e(`#smwActionsRight`).append(`
          <button type="button" class="smw_btn smw_btn_cancel btn-custom-action btn-cancel-edit">
            <i class="fas fa-times"></i> Cancelar Edición
          </button>
        `),e(document).on(`click.registrar`,`.btn-cancel-edit`,function(){I(),i(`Edición cancelada.`,`info`)})),F()}}function R(e=4){return Array(e).fill(0).map(()=>`
    <tr style="pointer-events: none;">
      <td class="smw_tour_num"><div class="smw_sk_el" style="width: 16px; height: 16px; border-radius: 4px;"></div></td>
      <td><div class="smw_sk_el" style="width: 140px; height: 14px; border-radius: 4px;"></div></td>
      <td class="smw_tour_price"><div class="smw_sk_el" style="width: 50px; height: 14px; border-radius: 4px;"></div></td>
      <td class="smw_tour_pts"><div class="smw_sk_el" style="width: 40px; height: 14px; border-radius: 4px;"></div></td>
    </tr>
  `).join(``)}function z(e=3){return Array(e).fill(0).map((e,t)=>`
    <div class="smw_mini_rank_item smw_sk_mini_row" style="pointer-events: none; animation-delay: ${t*.05}s">
      <div class="smw_sk_el" style="width: 2.2vh; height: 2.2vh; border-radius: 50%; margin-right: 1.5vh;"></div>
      <div class="smw_mini_rank_avatar smw_sk_el smw_sk_circle" style="border-radius: 50%; width: 4.5vh; height: 4.5vh; background: none; margin-right: 1.5vh;"></div>
      <div class="smw_mini_rank_info" style="flex: 1;">
        <div class="smw_sk_el" style="width: 80px; height: 12px; margin-bottom: 0.6vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 50px; height: 9px; border-radius: 4px;"></div>
      </div>
      <div class="smw_sk_el" style="width: 40px; height: 14px; border-radius: 4px;"></div>
    </div>
  `).join(``)}function B(){if(x||e(`#smwRegCard`).hasClass(`edit-mode`)||e(`#smwRegCard`).hasClass(`view-only`))return;let t=e(`#nombreCliente`).val()?.trim()||``,n=e(`#tipoTour`).val()||``;if(!t&&!n){a(`registroVentaDraft`);return}r(`registroVentaDraft`,{tipoTour:n,registroEn:e(`#registroEn`).val()||`hawka`,nombreCliente:t,horaSalida:e(`#horaSalida`).val()?.trim()||``,metodoPago:e(`#metodoPago`).val()||``,cantidadPax:e(`#cantidadPax`).val()||`1`,precioUnitario:e(`#precioUnitario`).val()||``,Operador:e(`#Operador`).val()?.trim()||``,PagoOperador:e(`#PagoOperador`).val()||``,pagoOperadorSiNo:e(`#pagoOperadorSiNo`).val()||`no`,estadoPago:e(`#estadoPago`).val()||`pagado`,Comentario:e(`#Comentario`).val()?.trim()||``,fechaTour:e(`#fechaTour`).val()||``,esVentaJulio:e(`#vtJulio`).prop(`checked`)||!1,esVentaSonia:e(`#vtSonia`).prop(`checked`)||!1,esVentaExterna:e(`#vtExterna`).prop(`checked`)||!1},24)}function V(t=!1){if(e(`#smwRegCard`).hasClass(`edit-mode`)||e(`#smwRegCard`).hasClass(`view-only`))return;let r=n(`registroVentaDraft`);if(r){if(!t){Object.entries(r).forEach(([t,n])=>{let r=e(`#${t}`);r.length&&t!==`fechaTour`&&t!==`esVentaJulio`&&t!==`esVentaSonia`&&t!==`esVentaExterna`&&r.val(n||``)}),r.fechaTour&&e(`#fechaTour`).val(r.fechaTour);let t=r.esVentaJulio||r.esVentaSonia||r.esVentaExterna;e(`#vtMiVenta`).prop(`checked`,!t),e(`#vtJulio`).prop(`checked`,r.esVentaJulio||!1),e(`#vtSonia`).prop(`checked`,r.esVentaSonia||!1),e(`#vtExterna`).prop(`checked`,r.esVentaExterna||!1),k()}r.tipoTour&&(y=v.find(e=>e.tour===r.tipoTour),y&&(e(`#tourSelectedLabel`).text(y.tour),e(`#tipoTour`).val(y.tour),e(`#tourDisplay`).removeClass(`faltaValor`).addClass(`okValor`),e(`.tour-row`).removeClass(`selected`),e(`.tour-row[data-index="${v.indexOf(y)}"]`).addClass(`selected`))),j(),M(),N(),F()}}export{w as cleanup,C as init,S as render};