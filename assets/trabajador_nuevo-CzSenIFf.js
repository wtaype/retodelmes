import{r as e}from"./vendor-CZ6bxb2j.js";import{l as t}from"./wii-BvK6d7hI.js";import{T as n,c as r,i,n as a,o,t as s,v as c}from"./widev-BkR2Na_W.js";import{n as l}from"./index-CiBkJTvD.js";import{A as u,N as d,O as f,S as p,T as m,_ as h,d as g,g as _,k as v,n as y,w as b,x}from"./firebase-BXqel3Di.js";import{n as S,t as C}from"./firebase-Cc-Gk9nK.js";var w=`modalNuevoTrabajador`,T=`smiles`,E=!1,D=null,O=(e=8)=>Array.from(crypto.getRandomValues(new Uint8Array(e))).map(e=>e.toString(36)).join(``).slice(0,e),k=(e=``,t=``)=>{let n=e.trim().split(/\s+/)[0]||``,r=t.trim().split(/\s+/)[0]||``;return((n[0]||``)+r).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9_]/g,``)},A=e=>e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9_]/g,``).trim(),j=(e,n)=>`${t}/trabajador_nuevo?activar=${encodeURIComponent(e)}&k=${encodeURIComponent(n)}`,M=()=>`
  <div class="wiModal" id="${w}" role="dialog" aria-modal="true" aria-labelledby="tn_title_h">
    <div class="tn_modal_body">

      <div class="tn_modal_stripe"></div>

      <!-- ── Header sin X extra — widev cierra con backdrop/Escape ── -->
      <div class="tn_modal_header">
        <div class="tn_modal_icon"><i class="fas fa-user-plus"></i></div>
        <div class="tn_modal_header_text">
          <h2 class="tn_modal_title" id="tn_title_h">Nuevo Colaborador</h2>
          <p class="tn_modal_subtitle">Registra los datos y genera el link de acceso</p>
        </div>
      </div>

      <!-- ── Steps ── -->
      <div class="tn_steps">
        <div class="tn_step_dot active" id="tn_dot_1"></div>
        <div class="tn_step_dot"        id="tn_dot_2"></div>
      </div>

      <!-- ══ STEP 1 — Formulario ══ -->
      <div id="tn_step_form">
        <form id="tn_nuevo_form" autocomplete="off" novalidate>

          <div class="tn_modal_form">

            <!-- Fila 1: DNI | Rol -->
            <div class="tn_form_grid">
              <div class="tn_form_group">
                <label class="tn_form_label" for="tn_dni">
                  <i class="fas fa-id-card"></i> DNI / Documento
                </label>
                <input class="tn_form_input" id="tn_dni" type="text"
                  placeholder="Ej. 72345678" maxlength="20" />
              </div>
              <div class="tn_form_group">
                <label class="tn_form_label" for="tn_rol">
                  <i class="fas fa-briefcase"></i> Rol
                </label>
                <select class="tn_form_select" id="tn_rol">
                  <option value="smile">Smile (Vendedor)</option>
                  <option value="gestor">Gestor (Administrador)</option>
                </select>
              </div>
            </div>

            <!-- Fila 2: Nombre | Apellidos -->
            <div class="tn_form_grid">
              <div class="tn_form_group">
                <label class="tn_form_label" for="tn_nombre">
                  <i class="fas fa-user"></i> Nombre
                </label>
                <input class="tn_form_input" id="tn_nombre" type="text"
                  placeholder="Juan" required />
              </div>
              <div class="tn_form_group">
                <label class="tn_form_label" for="tn_apellidos">
                  <i class="fas fa-user"></i> Apellidos
                </label>
                <input class="tn_form_input" id="tn_apellidos" type="text"
                  placeholder="Pérez" required />
              </div>
            </div>

            <!-- Fila 3: Email | Usuario -->
            <div class="tn_form_grid">
              <div class="tn_form_group">
                <label class="tn_form_label" for="tn_email">
                  <i class="fas fa-envelope"></i> Email
                </label>
                <input class="tn_form_input" id="tn_email" type="email"
                  placeholder="juan@empresa.com" required />
              </div>
              <div class="tn_form_group">
                <label class="tn_form_label" for="tn_usuario">
                  <i class="fas fa-at"></i> Usuario
                </label>
                <input class="tn_form_input" id="tn_usuario" type="text"
                  placeholder="jperez" maxlength="20" required />
              </div>
            </div>

            <!-- Preview usuario — ancho completo -->
            <div class="tn_usuario_preview" id="tn_usuario_preview">
              <i class="fas fa-circle-info"></i>
              <span id="tn_usuario_status">Se sugiere al escribir nombre y apellidos</span>
            </div>

          </div><!-- /.tn_modal_form -->


          <!-- Footer: solo Cancelar (usa cerrarModal) + Confirmar -->
          <div class="tn_modal_footer">
            <button type="button" class="tn_btn_cancel" id="tn_btn_cancel">
              Cancelar
            </button>
            <button type="submit" class="tn_btn_confirm" id="tn_btn_crear">
              <i class="fas fa-bolt"></i> Crear y Generar Link
            </button>
          </div>

        </form>
      </div><!-- /#tn_step_form -->

      <!-- ══ STEP 2 — Link generado ══ -->
      <div id="tn_step_link" style="display:none">
        <div class="tn_link_screen">

          <div class="tn_success_icon"><i class="fas fa-check"></i></div>

          <p class="tn_link_title">¡Colaborador registrado!</p>
          <p class="tn_link_sub">
            Comparte este link con <strong id="tn_nombre_creado"></strong>.<br>
            Solo tiene que abrirlo y crear su contraseña.
          </p>

          <div class="tn_link_box">
            <span class="tn_link_text" id="tn_link_generado"></span>
            <button class="tn_btn_copy" id="tn_btn_copy" type="button">
              <i class="fas fa-copy"></i> Copiar
            </button>
          </div>

          <div class="tn_expiry_badge">
            <i class="fas fa-clock"></i>
            Válido hasta que el colaborador active su cuenta
          </div>

          <div class="tn_link_actions">
            <button class="tn_btn_share" id="tn_btn_share" type="button">
              <i class="fas fa-share-nodes"></i> Compartir
            </button>
            <button class="tn_btn_otro" id="tn_btn_otro" type="button">
              <i class="fas fa-user-plus"></i> Agregar otro
            </button>
          </div>

          <!-- Cerrar en step 2 -->
          <button class="tn_btn_cerrar" id="tn_btn_cerrar" type="button">
            Cerrar
          </button>

        </div>
      </div><!-- /#tn_step_link -->

    </div><!-- /.tn_modal_body -->
  </div><!-- /.wiModal -->
`,N=()=>{document.getElementById(w)||(document.body.insertAdjacentHTML(`beforeend`,M()),R())},P=()=>{e(`#tn_nuevo_form`)[0]?.reset(),e(`#tn_step_form`).show(),e(`#tn_step_link`).hide(),e(`#tn_dot_1`).addClass(`active`).removeClass(`done`),e(`#tn_dot_2`).removeClass(`active done`),e(`#tn_usuario`).val(``).removeClass(`is-ok is-error`).data(`auto`,!1),e(`#tn_usuario_preview`).removeClass(`ok error`).find(`#tn_usuario_status`).text(`Se sugiere al escribir nombre y apellidos`),E=!1,e(`#tn_btn_crear`).prop(`disabled`,!1).html(`<i class="fas fa-bolt"></i> Crear y Generar Link`)},F=(t,n)=>{e(`#tn_nombre_creado`).text(t),e(`#tn_link_generado`).text(n),e(`#tn_step_form`).hide(),e(`#tn_step_link`).show(),e(`#tn_dot_1`).removeClass(`active`).addClass(`done`),e(`#tn_dot_2`).addClass(`active`)},I=async t=>{let n=A(t),r=e(`#tn_usuario_preview`),i=e(`#tn_usuario_status`);if(!n||n.length<3){r.removeClass(`ok error`),i.text(`Mínimo 3 caracteres`);return}r.removeClass(`ok error`),i.html(`<i class="fas fa-circle-notch fa-spin"></i> Verificando…`);try{(await _(u(S,T,n))).exists()?(r.addClass(`error`).removeClass(`ok`),i.text(`⚠ "@${n}" ya está en uso`),e(`#tn_usuario`).addClass(`is-error`).removeClass(`is-ok`)):(r.addClass(`ok`).removeClass(`error`),i.text(`✓ "@${n}" disponible`),e(`#tn_usuario`).addClass(`is-ok`).removeClass(`is-error`))}catch{r.removeClass(`ok error`),i.text(`Error al verificar`)}},L=async()=>{if(E)return;let t=e(`#tn_nombre`).val().trim(),r=e(`#tn_apellidos`).val().trim(),a=e(`#tn_email`).val().trim().toLowerCase(),o=A(e(`#tn_usuario`).val().trim()),c=e(`#tn_rol`).val(),l=e(`#tn_dni`).val().trim();if(!t)return n(e(`#tn_nombre`)[0],`Ingresa el nombre`,`error`,2500);if(!r)return n(e(`#tn_apellidos`)[0],`Ingresa los apellidos`,`error`,2500);if(!a||!/^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(a))return n(e(`#tn_email`)[0],`Email inválido`,`error`,2500);if(!o||o.length<3)return n(e(`#tn_usuario`)[0],`Mínimo 3 caracteres`,`error`,2500);E=!0;let g=e(`#tn_btn_crear`);g.prop(`disabled`,!0).html(`<i class="fas fa-circle-notch fa-spin"></i> Verificando…`);try{if((await _(u(S,T,o))).exists()){n(e(`#tn_usuario`)[0],`Usuario ya en uso`,`error`,2500),E=!1,g.prop(`disabled`,!1).html(`<i class="fas fa-bolt"></i> Crear y Generar Link`);return}if(!(await h(x(f(S,T),m(`email`,`==`,a)))).empty){n(e(`#tn_email`)[0],`Email ya registrado en el sistema`,`error`,2500),E=!1,g.prop(`disabled`,!1).html(`<i class="fas fa-bolt"></i> Crear y Generar Link`);return}g.html(`<i class="fas fa-circle-notch fa-spin"></i> Creando…`);let i=O(8),v=j(o,i);await p(u(S,T,o),{usuario:o,email:a,nombre:t,apellidos:r,rol:c,dni:l||``,estado:`activo`,activo:!0,participa:`si`,uid:``,clave:i,creado:d(),registradoPor:`invitacion`,tema:`Cielo|#0EBEFF`,plan:`free`,avatar:`/smile.avif`}),F(s(t),v)}catch(e){console.error(`[TN] crearTrabajador:`,e),i(`Error al crear colaborador`,`error`),E=!1,g.prop(`disabled`,!1).html(`<i class="fas fa-bolt"></i> Crear y Generar Link`)}},R=()=>{e(document).on(`input.tn_modal`,`#tn_nombre, #tn_apellidos`,function(){let t=e(`#tn_nombre`).val().trim(),n=e(`#tn_apellidos`).val().trim();if((t||n)&&e(`#tn_usuario`).data(`auto`)!==!1){let r=k(t,n);e(`#tn_usuario`).val(r).data(`auto`,!0),e(`#tn_usuario_preview`).removeClass(`ok error`),e(`#tn_usuario_status`).text(`Sugerido: @${r} — escríbelo para verificar`)}}),e(document).on(`input.tn_modal`,`#tn_usuario`,function(){e(this).data(`auto`,!1);let t=A(e(this).val());e(this).val()!==t&&e(this).val(t),clearTimeout(D),t.length>=3?D=setTimeout(()=>I(t),700):(e(`#tn_usuario_preview`).removeClass(`ok error`),e(`#tn_usuario_status`).text(`Mínimo 3 caracteres`))}),e(document).on(`submit.tn_modal`,`#tn_nuevo_form`,function(e){e.preventDefault(),L()}),e(document).on(`click.tn_modal`,`#tn_btn_cancel`,function(){r(w),P()}),e(document).on(`click.tn_modal`,`#tn_btn_cerrar`,function(){r(w),P()}),e(document).on(`click.tn_modal`,`#tn_btn_copy`,function(){let t=e(`#tn_link_generado`).text();navigator.clipboard?.writeText(t).then(()=>{let t=e(this);t.addClass(`copied`).html(`<i class="fas fa-check"></i> Copiado`),setTimeout(()=>t.removeClass(`copied`).html(`<i class="fas fa-copy"></i> Copiar`),2200)})}),e(document).on(`click.tn_modal`,`#tn_btn_share`,function(){let t=e(`#tn_link_generado`).text(),n=e(`#tn_nombre_creado`).text();if(navigator.share)navigator.share({title:`Reto del Mes — Tu invitación`,text:`¡Hola ${n}! Aquí está tu link para activar tu cuenta:`,url:t}).catch(()=>{});else{let e=encodeURIComponent(`¡Hola ${n}! Activa tu cuenta en Reto del Mes: ${t}`);window.open(`https://wa.me/?text=${e}`,`_blank`)}}),e(document).on(`click.tn_modal`,`#tn_btn_otro`,P),e(document).on(`click.tn_modal`,`#${w}`,function(e){e.target===this&&P()})},z=()=>{N(),P(),o(w)},B=()=>`
  <div class="tn_wrap">
    <div class="tn_card">
      <div class="tn_card_stripe"></div>

      <div class="tn_card_header">
        <img class="tn_card_logo" src="/smile.avif" alt="Reto del Mes" />
        <h1 class="tn_card_title">Activa tu cuenta</h1>
        <p class="tn_card_subtitle">Crea tu contraseña y comienza a participar</p>
      </div>

      <div class="tn_card_body">

        <!-- Loading -->
        <div class="tn_state active" id="tn_state_loading">
          <i class="fas fa-circle-notch tn_spinner_icon"></i>
          <p class="tn_state_msg">Verificando tu invitación…</p>
        </div>

        <!-- Error -->
        <div class="tn_state" id="tn_state_error">
          <div class="tn_error_icon"><i class="fas fa-link-slash"></i></div>
          <p class="tn_error_title">Link inválido</p>
          <p class="tn_error_msg" id="tn_error_msg">
            Este link no es válido, ya fue utilizado o no existe.
          </p>
        </div>

        <!-- Form -->
        <div class="tn_state" id="tn_state_form">

          <div class="tn_bienvenida" id="tn_bienvenida_banner">
            <div class="tn_bienvenida_avatar" id="tn_avatar_initials">—</div>
            <div class="tn_bienvenida_info">
              <p class="tn_bienvenida_nombre" id="tn_full_nombre">Bienvenido</p>
              <p class="tn_bienvenida_rol"    id="tn_full_rol">Colaborador</p>
            </div>
          </div>

          <div class="tn_divider"></div>

          <!-- Dos columnas: Usuario | Email -->
          <div class="tn_grid_info">
            <div class="tn_field_wrap">
              <p class="tn_act_label"><i class="fas fa-at"></i> Usuario</p>
              <input class="tn_act_input" id="tn_act_usuario" type="text" disabled />
            </div>
            <div class="tn_field_wrap">
              <p class="tn_act_label"><i class="fas fa-envelope"></i> Email</p>
              <input class="tn_act_input" id="tn_act_email" type="email" disabled />
            </div>
          </div>

          <!-- Contraseña -->
          <div class="tn_field_wrap">
            <p class="tn_act_label"><i class="fas fa-lock"></i> Crear contraseña</p>
            <div class="tn_pass_wrap">
              <input class="tn_act_input" id="tn_act_pass" type="password"
                placeholder="Mínimo 6 caracteres" autocomplete="new-password" />
              <button type="button" class="tn_pass_eye" id="tn_eye1" tabindex="-1">
                <i class="fas fa-eye"></i>
              </button>
            </div>
          </div>

          <!-- Confirmar -->
          <div class="tn_field_wrap">
            <p class="tn_act_label"><i class="fas fa-lock"></i> Confirmar contraseña</p>
            <div class="tn_pass_wrap">
              <input class="tn_act_input" id="tn_act_pass2" type="password"
                placeholder="Repite tu contraseña" autocomplete="new-password" />
              <button type="button" class="tn_pass_eye" id="tn_eye2" tabindex="-1">
                <i class="fas fa-eye"></i>
              </button>
            </div>
          </div>

          <!-- Términos -->
          <label class="tn_terms">
            <input type="checkbox" id="tn_terminos" />
            <span>Acepto los <a href="/terminos" target="_blank">términos y condiciones</a> de Reto del Mes</span>
          </label>

          <!-- Botón activar -->
          <button class="tn_btn_activar" id="tn_btn_activar" type="button">
            <i class="fas fa-rocket"></i> Activar mi cuenta
          </button>

        </div><!-- /#tn_state_form -->

        <!-- Success -->
        <div class="tn_state" id="tn_state_success">
          <div class="tn_success_big_icon"><i class="fas fa-check"></i></div>
          <p class="tn_success_title">¡Cuenta activada!</p>
          <p class="tn_success_msg">Bienvenido al equipo. Redirigiendo…</p>
          <!-- Usuario mostrado para que sepa con qué inicia sesión -->
          <div class="tn_usuario_chip" id="tn_success_user_chip">
            <i class="fas fa-at"></i>
            <span id="tn_success_usuario"></span>
          </div>
          <p class="tn_success_hint">Ese es tu usuario para iniciar sesión</p>
        </div>

      </div><!-- /.tn_card_body -->
    </div><!-- /.tn_card -->
  </div>
`,V=t=>{[`tn_state_loading`,`tn_state_error`,`tn_state_form`,`tn_state_success`].forEach(t=>e(`#${t}`).removeClass(`active`)),e(`#${t}`).addClass(`active`)},H=async()=>{window.__WIREADY__=!0;let t=new URLSearchParams(window.location.search),r=t.get(`activar`),i=t.get(`k`);if(!r||!i){e(`#tn_error_msg`).text(`El link no contiene los datos necesarios.`),V(`tn_state_error`);return}let o;try{let t=await _(u(S,T,r));if(!t.exists()){e(`#tn_error_msg`).text(`Este link no existe o el colaborador fue eliminado.`),V(`tn_state_error`);return}o=t.data()}catch{e(`#tn_error_msg`).text(`Error al verificar el link. Intenta de nuevo más tarde.`),V(`tn_state_error`);return}if(o.clave!==i){e(`#tn_error_msg`).text(`El link no es válido o ya fue modificado.`),V(`tn_state_error`);return}if(o.uid&&o.uid!==``){e(`#tn_error_msg`).text(`Esta cuenta ya fue activada. Inicia sesión con tu usuario @`+r),V(`tn_state_error`);return}let f=a(((o.nombre||``)+` `+(o.apellidos||``)).trim()),p=((o.nombre?.[0]||``)+(o.apellidos?.[0]||``)).toUpperCase()||`?`;e(`#tn_full_nombre`).text(f),e(`#tn_full_rol`).text(s(o.rol||`smile`)),e(`#tn_avatar_initials`).text(p),e(`#tn_act_usuario`).val(`@`+r),e(`#tn_act_email`).val(o.email||``),V(`tn_state_form`),e(document).on(`click.tn`,`#tn_eye1`,function(){let t=e(`#tn_act_pass`);t.attr(`type`,t.attr(`type`)===`password`?`text`:`password`),e(this).find(`i`).toggleClass(`fa-eye fa-eye-slash`)}),e(document).on(`click.tn`,`#tn_eye2`,function(){let t=e(`#tn_act_pass2`);t.attr(`type`,t.attr(`type`)===`password`?`text`:`password`),e(this).find(`i`).toggleClass(`fa-eye fa-eye-slash`)}),e(document).on(`click.tn`,`#tn_btn_activar`,async function(){if(e(this).prop(`disabled`))return;let t=e(`#tn_act_pass`).val(),i=e(`#tn_act_pass2`).val();if(!e(`#tn_terminos`).is(`:checked`))return n(e(`#tn_terminos`)[0],`Acepta los términos para continuar`,`error`,2500);if(t.length<6)return n(e(`#tn_act_pass`)[0],`Mínimo 6 caracteres`,`error`,2500);if(t!==i)return n(e(`#tn_act_pass2`)[0],`Las contraseñas no coinciden`,`error`,2500);e(this).prop(`disabled`,!0).html(`<i class="fas fa-circle-notch fa-spin"></i> Activando…`);try{let{user:n}=await y(C,o.email,t);await g(n,{displayName:r}),await b(u(S,T,r),{uid:n.uid,clave:v(),activado:d(),terminos:!0,terminosFecha:d()});let i={...o,uid:n.uid,estado:`activo`,activo:!0,participa:`si`,avatar:`/smile.avif`,terminos:!0,terminosFecha:d(),activado:d()};delete i.clave,c.login(i,7,[`wiSmart`]),e(`#tn_success_usuario`).text(`@`+r),V(`tn_state_success`);let a=o.rol===`gestor`?`/gestor`:`/smile`;setTimeout(()=>l.navigate(a),3e3)}catch(t){console.error(`[TN] activar:`,t);let n=t.code===`auth/email-already-in-use`?`Este email ya tiene una cuenta. Inicia sesión normalmente.`:`Error al crear la cuenta. Intenta de nuevo.`;e(`#tn_error_msg`).text(n),V(`tn_state_error`)}})},U=()=>{e(document).off(`.tn`).off(`.tn_modal`),clearTimeout(D)};export{U as cleanup,z as iniciarModal,H as init,B as render};