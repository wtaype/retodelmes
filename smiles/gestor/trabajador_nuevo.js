import './trabajador_nuevo.css';
import $ from 'jquery';
import { auth, db } from '../firebase.js';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {
  doc, getDoc, setDoc, updateDoc, getDocs,
  collection, query, where,
  serverTimestamp, deleteField,
} from 'firebase/firestore';
import {
  Notificacion, Capi, Capit, wiTip, abrirModal, cerrarModal, wiAuth,
} from '../widev.js';
import { linkweb } from '../wii.js';
import { rutas } from '../rutas.js';

// ─── Constantes ───────────────────────────────────────────────────────────────
const MODAL_ID    = 'modalNuevoTrabajador';
const DB_SMILES   = 'smiles';
let   _busy       = false;
let   _checkTimer = null;

// ─── Helpers ──────────────────────────────────────────────────────────────────
/** Código random alfanumérico de N chars */
const _randomKey = (n = 8) =>
  Array.from(crypto.getRandomValues(new Uint8Array(n)))
    .map(b => b.toString(36)).join('').slice(0, n);

/** "Juan" + "Pérez" → "jperez" */
const _autoUsuario = (nombre = '', apellidos = '') => {
  const n = nombre.trim().split(/\s+/)[0] || '';
  const a = apellidos.trim().split(/\s+/)[0] || '';
  return ((n[0] || '') + a)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9_]/g, '');
};

/** Sanitiza username: solo minúsculas, números, guión bajo */
const _sanUser = v =>
  v.toLowerCase()
   .normalize('NFD')
   .replace(/[\u0300-\u036f]/g, '')
   .replace(/[^a-z0-9_]/g, '')
   .trim();

/** Link de activación */
const _buildLink = (usuario, clave) =>
  `${linkweb}/trabajador_nuevo?activar=${encodeURIComponent(usuario)}&k=${encodeURIComponent(clave)}`;

// ─── HTML del modal ───────────────────────────────────────────────────────────
const _modalHTML = () => /* html */`
  <div class="wiModal" id="${MODAL_ID}" role="dialog" aria-modal="true" aria-labelledby="tn_title_h">
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
`;

// ─── _injectModal ──────────────────────────────────────────────────────────────
const _injectModal = () => {
  if (document.getElementById(MODAL_ID)) return;
  document.body.insertAdjacentHTML('beforeend', _modalHTML());
  _bindModalEvents();
};

// ─── _resetModal ──────────────────────────────────────────────────────────────
const _resetModal = () => {
  $('#tn_nuevo_form')[0]?.reset();
  $('#tn_step_form').show();
  $('#tn_step_link').hide();
  $('#tn_dot_1').addClass('active').removeClass('done');
  $('#tn_dot_2').removeClass('active done');
  $('#tn_usuario').val('').removeClass('is-ok is-error').data('auto', false);
  $('#tn_usuario_preview')
    .removeClass('ok error')
    .find('#tn_usuario_status')
    .text('Se sugiere al escribir nombre y apellidos');
  _busy = false;
  const $btn = $('#tn_btn_crear');
  $btn.prop('disabled', false).html('<i class="fas fa-bolt"></i> Crear y Generar Link');
};

// ─── _showLink ────────────────────────────────────────────────────────────────
const _showLink = (nombre, link) => {
  $('#tn_nombre_creado').text(nombre);
  $('#tn_link_generado').text(link);
  $('#tn_step_form').hide();
  $('#tn_step_link').show();
  $('#tn_dot_1').removeClass('active').addClass('done');
  $('#tn_dot_2').addClass('active');
};

// ─── _validarUsuario Live ─────────────────────────────────────────────────────
const _validarUsuarioLive = async (raw) => {
  const u = _sanUser(raw);
  const $preview = $('#tn_usuario_preview');
  const $status  = $('#tn_usuario_status');

  if (!u || u.length < 3) {
    $preview.removeClass('ok error');
    $status.text('Mínimo 3 caracteres');
    return;
  }

  $preview.removeClass('ok error');
  $status.html('<i class="fas fa-circle-notch fa-spin"></i> Verificando…');

  try {
    const snap = await getDoc(doc(db, DB_SMILES, u));
    if (snap.exists()) {
      $preview.addClass('error').removeClass('ok');
      $status.text(`⚠ "@${u}" ya está en uso`);
      $('#tn_usuario').addClass('is-error').removeClass('is-ok');
    } else {
      $preview.addClass('ok').removeClass('error');
      $status.text(`✓ "@${u}" disponible`);
      $('#tn_usuario').addClass('is-ok').removeClass('is-error');
    }
  } catch {
    $preview.removeClass('ok error');
    $status.text('Error al verificar');
  }
};

// ─── _crearTrabajador ─────────────────────────────────────────────────────────
const _crearTrabajador = async () => {
  if (_busy) return;

  const nombre    = $('#tn_nombre').val().trim();
  const apellidos = $('#tn_apellidos').val().trim();
  const email     = $('#tn_email').val().trim().toLowerCase();
  const rawUser   = $('#tn_usuario').val().trim();
  const usuario   = _sanUser(rawUser);
  const rol       = $('#tn_rol').val();
  const dni       = $('#tn_dni').val().trim();

  // ── Validaciones de campos ──────────────────────────────────────────────────
  if (!nombre)
    return wiTip($('#tn_nombre')[0],    'Ingresa el nombre', 'error', 2500);
  if (!apellidos)
    return wiTip($('#tn_apellidos')[0], 'Ingresa los apellidos', 'error', 2500);
  if (!email || !/^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email))
    return wiTip($('#tn_email')[0],     'Email inválido', 'error', 2500);
  if (!usuario || usuario.length < 3)
    return wiTip($('#tn_usuario')[0],   'Mínimo 3 caracteres', 'error', 2500);

  _busy = true;
  const $btn = $('#tn_btn_crear');
  $btn.prop('disabled', true).html('<i class="fas fa-circle-notch fa-spin"></i> Verificando…');

  try {
    // ── Verificar usuario único ─────────────────────────────────────────────
    const snapUser = await getDoc(doc(db, DB_SMILES, usuario));
    if (snapUser.exists()) {
      wiTip($('#tn_usuario')[0], 'Usuario ya en uso', 'error', 2500);
      _busy = false;
      $btn.prop('disabled', false).html('<i class="fas fa-bolt"></i> Crear y Generar Link');
      return;
    }

    // ── Verificar email único ───────────────────────────────────────────────
    const snapEmail = await getDocs(
      query(collection(db, DB_SMILES), where('email', '==', email))
    );
    if (!snapEmail.empty) {
      wiTip($('#tn_email')[0], 'Email ya registrado en el sistema', 'error', 2500);
      _busy = false;
      $btn.prop('disabled', false).html('<i class="fas fa-bolt"></i> Crear y Generar Link');
      return;
    }

    // ── Crear en Firestore ──────────────────────────────────────────────────
    $btn.html('<i class="fas fa-circle-notch fa-spin"></i> Creando…');
    const clave = _randomKey(8);
    const link  = _buildLink(usuario, clave);

    await setDoc(doc(db, DB_SMILES, usuario), {
      usuario,
      email,
      nombre,
      apellidos,
      rol,
      dni:           dni || '',
      estado:        'activo',
      activo:        true,
      participa:     'si',
      uid:           '',
      clave,
      creado:        serverTimestamp(),
      registradoPor: 'invitacion',
      tema:          'Cielo|#0EBEFF',
      plan:          'free',
      avatar:        '/smile.avif',
    });

    _showLink(Capi(nombre), link);

  } catch (err) {
    console.error('[TN] crearTrabajador:', err);
    Notificacion('Error al crear colaborador', 'error');
    _busy = false;
    $btn.prop('disabled', false).html('<i class="fas fa-bolt"></i> Crear y Generar Link');
  }
};

// ─── _bindModalEvents ─────────────────────────────────────────────────────────
const _bindModalEvents = () => {

  // Auto-sugerir usuario desde nombre+apellidos (SIN consulta Firestore aquí)
  $(document).on('input.tn_modal', '#tn_nombre, #tn_apellidos', function () {
    const n = $('#tn_nombre').val().trim();
    const a = $('#tn_apellidos').val().trim();
    if ((n || a) && $('#tn_usuario').data('auto') !== false) {
      const suggested = _autoUsuario(n, a);
      $('#tn_usuario').val(suggested).data('auto', true);
      // NO consultamos Firestore aquí — solo mostramos la sugerencia visual
      $('#tn_usuario_preview').removeClass('ok error');
      $('#tn_usuario_status').text(`Sugerido: @${suggested} — escríbelo para verificar`);
    }
  });

  // Validación live SOLO cuando el gestor escribe en el campo usuario
  $(document).on('input.tn_modal', '#tn_usuario', function () {
    $(this).data('auto', false); // Ya es edición manual
    const v = _sanUser($(this).val());
    if ($(this).val() !== v) $(this).val(v); // Sanitizar en tiempo real
    clearTimeout(_checkTimer);
    if (v.length >= 3) {
      _checkTimer = setTimeout(() => _validarUsuarioLive(v), 700);
    } else {
      $('#tn_usuario_preview').removeClass('ok error');
      $('#tn_usuario_status').text('Mínimo 3 caracteres');
    }
  });

  // Submit
  $(document).on('submit.tn_modal', '#tn_nuevo_form', function (e) {
    e.preventDefault();
    _crearTrabajador();
  });

  // Cancelar (step 1) — usa cerrarModal, NO modalX para no duplicar con widev
  $(document).on('click.tn_modal', '#tn_btn_cancel', function () {
    cerrarModal(MODAL_ID);
    _resetModal();
  });

  // Cerrar (step 2)
  $(document).on('click.tn_modal', '#tn_btn_cerrar', function () {
    cerrarModal(MODAL_ID);
    _resetModal();
  });

  // Copiar link
  $(document).on('click.tn_modal', '#tn_btn_copy', function () {
    const link = $('#tn_link_generado').text();
    navigator.clipboard?.writeText(link).then(() => {
      const $b = $(this);
      $b.addClass('copied').html('<i class="fas fa-check"></i> Copiado');
      setTimeout(() => $b.removeClass('copied').html('<i class="fas fa-copy"></i> Copiar'), 2200);
    });
  });

  // Compartir
  $(document).on('click.tn_modal', '#tn_btn_share', function () {
    const link   = $('#tn_link_generado').text();
    const nombre = $('#tn_nombre_creado').text();
    if (navigator.share) {
      navigator.share({
        title: 'Reto del Mes — Tu invitación',
        text:  `¡Hola ${nombre}! Aquí está tu link para activar tu cuenta:`,
        url:   link,
      }).catch(() => {});
    } else {
      const msg = encodeURIComponent(
        `¡Hola ${nombre}! Activa tu cuenta en Reto del Mes: ${link}`
      );
      window.open(`https://wa.me/?text=${msg}`, '_blank');
    }
  });

  // Agregar otro
  $(document).on('click.tn_modal', '#tn_btn_otro', _resetModal);

  // Cerrar al hacer clic en el backdrop del wiModal (ya lo maneja widev,
  // pero reseteamos el formulario para próxima apertura)
  $(document).on('click.tn_modal', `#${MODAL_ID}`, function (e) {
    if (e.target === this) _resetModal(); // clic en el backdrop
  });
};

// ─── iniciarModal ─────────────────────────────────────────────────────────────
export const iniciarModal = () => {
  _injectModal();
  _resetModal();
  abrirModal(MODAL_ID);
};

// ══════════════════════════════════════════════════════════════════════════════
//  PÁGINA DE ACTIVACIÓN — El trabajador abre el link
// ══════════════════════════════════════════════════════════════════════════════
export const render = () => /* html */`
  <div class="tn_wrap">
    <div class="tn_card">
      <div class="tn_card_stripe"></div>

      <div class="tn_card_header">
        <img class="tn_card_logo" src="${import.meta.env.BASE_URL}smile.avif" alt="Reto del Mes" />
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
`;

// ─── _setState ────────────────────────────────────────────────────────────────
const _setState = (id) => {
  ['tn_state_loading', 'tn_state_error', 'tn_state_form', 'tn_state_success']
    .forEach(s => $(`#${s}`).removeClass('active'));
  $(`#${id}`).addClass('active');
};

// ─── init ─────────────────────────────────────────────────────────────────────
export const init = async () => {
  window.__WIREADY__ = true;

  const params  = new URLSearchParams(window.location.search);
  const usuario = params.get('activar');
  const clave   = params.get('k');

  if (!usuario || !clave) {
    $('#tn_error_msg').text('El link no contiene los datos necesarios.');
    _setState('tn_state_error');
    return;
  }

  let wiData;
  try {
    const snap = await getDoc(doc(db, DB_SMILES, usuario));
    if (!snap.exists()) {
      $('#tn_error_msg').text('Este link no existe o el colaborador fue eliminado.');
      _setState('tn_state_error');
      return;
    }
    wiData = snap.data();
  } catch {
    $('#tn_error_msg').text('Error al verificar el link. Intenta de nuevo más tarde.');
    _setState('tn_state_error');
    return;
  }

  if (wiData.clave !== clave) {
    $('#tn_error_msg').text('El link no es válido o ya fue modificado.');
    _setState('tn_state_error');
    return;
  }

  if (wiData.uid && wiData.uid !== '') {
    $('#tn_error_msg').text('Esta cuenta ya fue activada. Inicia sesión con tu usuario @' + usuario);
    _setState('tn_state_error');
    return;
  }

  // Mostrar datos del trabajador
  const nombre   = Capit(((wiData.nombre || '') + ' ' + (wiData.apellidos || '')).trim());
  const initials = ((wiData.nombre?.[0] || '') + (wiData.apellidos?.[0] || '')).toUpperCase() || '?';

  $('#tn_full_nombre').text(nombre);
  $('#tn_full_rol').text(Capi(wiData.rol || 'smile'));
  $('#tn_avatar_initials').text(initials);
  $('#tn_act_usuario').val('@' + usuario);
  $('#tn_act_email').val(wiData.email || '');
  _setState('tn_state_form');

  // ── Eventos de la página ─────────────────────────────────────────────────────

  $(document).on('click.tn', '#tn_eye1', function () {
    const $i = $('#tn_act_pass');
    $i.attr('type', $i.attr('type') === 'password' ? 'text' : 'password');
    $(this).find('i').toggleClass('fa-eye fa-eye-slash');
  });

  $(document).on('click.tn', '#tn_eye2', function () {
    const $i = $('#tn_act_pass2');
    $i.attr('type', $i.attr('type') === 'password' ? 'text' : 'password');
    $(this).find('i').toggleClass('fa-eye fa-eye-slash');
  });

  $(document).on('click.tn', '#tn_btn_activar', async function () {
    if ($(this).prop('disabled')) return;

    const pass  = $('#tn_act_pass').val();
    const pass2 = $('#tn_act_pass2').val();

    if (!$('#tn_terminos').is(':checked'))
      return wiTip($('#tn_terminos')[0], 'Acepta los términos para continuar', 'error', 2500);
    if (pass.length < 6)
      return wiTip($('#tn_act_pass')[0], 'Mínimo 6 caracteres', 'error', 2500);
    if (pass !== pass2)
      return wiTip($('#tn_act_pass2')[0], 'Las contraseñas no coinciden', 'error', 2500);

    $(this).prop('disabled', true).html('<i class="fas fa-circle-notch fa-spin"></i> Activando…');

    try {
      const { user } = await createUserWithEmailAndPassword(auth, wiData.email, pass);
      await updateProfile(user, { displayName: usuario });

      await updateDoc(doc(db, DB_SMILES, usuario), {
        uid:           user.uid,
        clave:         deleteField(),
        activado:      serverTimestamp(),
        terminos:      true,
        terminosFecha: serverTimestamp(),
      });

      // Guardar sesión localmente y redirigir
      const loggedUser = {
        ...wiData,
        uid:           user.uid,
        estado:        'activo',
        activo:        true,
        participa:     'si',
        avatar:        '/smile.avif',
        terminos:      true,
        terminosFecha: serverTimestamp(),
        activado:      serverTimestamp()
      };
      delete loggedUser.clave;
      wiAuth.login(loggedUser, 7, ['wiSmart']);

      // Mostrar usuario para que sepa con qué iniciará sesión
      $('#tn_success_usuario').text('@' + usuario);
      _setState('tn_state_success');

      const targetPath = wiData.rol === 'gestor' ? '/gestor' : '/smile';
      setTimeout(() => rutas.navigate(targetPath), 3000);

    } catch (err) {
      console.error('[TN] activar:', err);
      const msg = err.code === 'auth/email-already-in-use'
        ? 'Este email ya tiene una cuenta. Inicia sesión normalmente.'
        : 'Error al crear la cuenta. Intenta de nuevo.';
      $('#tn_error_msg').text(msg);
      _setState('tn_state_error');
    }
  });
};

// ─── cleanup ──────────────────────────────────────────────────────────────────
export const cleanup = () => {
  $(document).off('.tn').off('.tn_modal');
  clearTimeout(_checkTimer);
};
