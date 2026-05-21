import './rrhh.css';
import $ from 'jquery';
import { auth } from '../firebase.js';
import { db } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, doc, updateDoc, query, where, serverTimestamp } from 'firebase/firestore';
import { getls, savels, Notificacion, wiSpin, Capi } from '../widev.js';
import { app } from '../wii.js';
import { rutas } from '../rutas.js';

// ─── State ────────────────────────────────────────────────────────────────────
let usuarios = [];
let filtro   = '';

// ─── Auth helper ──────────────────────────────────────────────────────────────
const waitAuth = () =>
  new Promise(r => {
    if (auth.currentUser) return r(auth.currentUser);
    const unsub = onAuthStateChanged(auth, u => { unsub(); r(u); });
  });

// ─── render ───────────────────────────────────────────────────────────────────
export const render = () => /* html */`
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
`;

// ─── Avatar helper ────────────────────────────────────────────────────────────
const _avatar = (u) => {
  if (u.imagen) {
    return `<div class="rrhh_avatar"><img src="${u.imagen}" alt="${Capi(u.nombre || u.usuario || '?')}" loading="lazy"/></div>`;
  }
  const initials = (u.nombre || u.usuario || '?')
    .split(' ')
    .slice(0, 2)
    .map(w => w[0]?.toUpperCase() || '')
    .join('');
  return `<div class="rrhh_avatar rrhh_avatar_initials" data-rol="${u.rol || 'smile'}">${initials}</div>`;
};

// ─── Rol badge ────────────────────────────────────────────────────────────────
const _rolBadge = (rol) => {
  const safe = (rol || 'smile').toLowerCase();
  return `<span class="rrhh_rol_badge rrhh_rol_${safe}">${Capi(safe)}</span>`;
};

// ─── Toggle HTML ──────────────────────────────────────────────────────────────
const _toggleHtml = (id, participa) => {
  const checked = participa === 'si' ? 'checked' : '';
  return /* html */`
    <label class="rrhh_toggle" title="${participa === 'si' ? 'Activo' : 'Inactivo'}">
      <input type="checkbox" class="rrhh_toggle_participa" data-id="${id}" ${checked} />
      <span class="rrhh_toggle_slider"></span>
    </label>
  `;
};

// ─── Role select HTML ─────────────────────────────────────────────────────────
const _rolSelectHtml = (id, currentRol) => {
  const roles = ['smile', 'gestor', 'empresa', 'admin'];
  const opts = roles
    .map(r => `<option value="${r}" ${r === currentRol ? 'selected' : ''}>${Capi(r)}</option>`)
    .join('');
  return `<select class="rrhh_rol_select" data-id="${id}">${opts}</select>`;
};

// ─── _renderTable ─────────────────────────────────────────────────────────────
const _renderTable = () => {
  const term = filtro.toLowerCase().trim();
  const lista = term
    ? usuarios.filter(u =>
        (u.nombre || '').toLowerCase().includes(term) ||
        (u.usuario || '').toLowerCase().includes(term)
      )
    : usuarios;

  // Update stats (always from full list)
  const activos   = usuarios.filter(u => u.participa === 'si').length;
  const inactivos = usuarios.length - activos;
  $('#stat_total').text(usuarios.length);
  $('#stat_activos').text(activos);
  $('#stat_inactivos').text(inactivos);

  if (!lista.length) {
    $('#rrhh_tbody').html(/* html */`
      <tr>
        <td colspan="7">
          <div class="rrhh_empty">
            <i class="fas fa-user-slash"></i>
            <p>${term ? 'Sin resultados para "' + term + '"' : 'No hay colaboradores registrados'}</p>
          </div>
        </td>
      </tr>
    `);
    return;
  }

  const rows = lista.map(u => /* html */`
    <tr data-id="${u.id}" class="${u.participa === 'si' ? '' : 'rrhh_row_inactive'}">
      <td>${_avatar(u)}</td>
      <td class="rrhh_nombre">${Capi(u.nombre || '—')}</td>
      <td class="rrhh_usuario">@${u.usuario || '—'}</td>
      <td class="rrhh_email">${u.email || '—'}</td>
      <td class="rrhh_rol_cell">${_rolBadge(u.rol)}</td>
      <td>${_toggleHtml(u.id, u.participa)}</td>
      <td>
        <button class="rrhh_btn_rol" data-id="${u.id}" title="Cambiar rol">
          <i class="fas fa-user-tag"></i> Rol
        </button>
      </td>
    </tr>
  `).join('');

  $('#rrhh_tbody').html(rows);
};

// ─── _toggleParticipa ─────────────────────────────────────────────────────────
const _toggleParticipa = async (id) => {
  const idx = usuarios.findIndex(u => u.id === id);
  if (idx === -1) return;

  const current  = usuarios[idx].participa;
  const newVal   = current === 'si' ? 'no' : 'si';
  const nombre   = Capi(usuarios[idx].nombre || usuarios[idx].usuario || id);

  try {
    await updateDoc(doc(db, 'smiles', id), { participa: newVal });
    usuarios[idx].participa = newVal;
    _renderTable();
    Notificacion(
      `${nombre} ahora ${newVal === 'si' ? 'participa ✅' : 'no participa ❌'} en el reto`,
      newVal === 'si' ? 'success' : 'warning'
    );
  } catch (err) {
    console.error('[RRHH] toggleParticipa error:', err);
    Notificacion('Error al actualizar participación', 'error');
    // Revert checkbox UI
    _renderTable();
  }
};

// ─── _cambiarRol ─────────────────────────────────────────────────────────────
const _cambiarRol = async (id, nuevoRol) => {
  const idx = usuarios.findIndex(u => u.id === id);
  if (idx === -1) return;

  const nombre = Capi(usuarios[idx].nombre || usuarios[idx].usuario || id);

  try {
    await updateDoc(doc(db, 'smiles', id), { rol: nuevoRol });
    usuarios[idx].rol = nuevoRol;
    _renderTable();
    Notificacion(`Rol de ${nombre} actualizado a "${Capi(nuevoRol)}" ✅`, 'success');
  } catch (err) {
    console.error('[RRHH] cambiarRol error:', err);
    Notificacion('Error al cambiar el rol', 'error');
    _renderTable();
  }
};

// ─── _loadUsuarios ────────────────────────────────────────────────────────────
const _loadUsuarios = async (forceReload = false) => {
  const CACHE_KEY = 'rrhhUsuarios';
  const TTL_MIN   = 30;

  if (!forceReload) {
    const cached = getls(CACHE_KEY);
    if (cached) {
      usuarios = cached;
      _renderTable();
      return;
    }
  }

  $('#rrhh_tbody').html(`
    <tr>
      <td colspan="7" class="rrhh_loading_cell">
        <div class="rrhh_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando colaboradores…</div>
      </td>
    </tr>
  `);

  try {
    const snap = await getDocs(collection(db, 'smiles'));
    usuarios = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    // Sort by nombre
    usuarios.sort((a, b) =>
      (a.nombre || a.usuario || '').localeCompare(b.nombre || b.usuario || '', 'es')
    );
    savels(CACHE_KEY, usuarios, TTL_MIN);
    _renderTable();
  } catch (err) {
    console.error('[RRHH] loadUsuarios error:', err);
    $('#rrhh_tbody').html(`
      <tr>
        <td colspan="7">
          <div class="rrhh_empty rrhh_empty_error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error al cargar los colaboradores. Intenta de nuevo.</p>
          </div>
        </td>
      </tr>
    `);
    Notificacion('Error al cargar colaboradores', 'error');
  }
};

// ─── init ─────────────────────────────────────────────────────────────────────
export const init = async () => {
  // 1. Auth check
  const user = await waitAuth();
  if (!user) {
    rutas('/login');
    return;
  }

  // Check gestor/admin role from app state or Firestore
  // wiSmile is typically set on the app object after login
  const wiSmile = app?.wiSmile || window?.wiSmile || null;
  if (wiSmile && wiSmile.rol) {
    const rol = (wiSmile.rol || '').toLowerCase();
    if (rol !== 'gestor' && rol !== 'admin') {
      Notificacion('No tienes permiso para acceder a esta sección', 'error');
      rutas('/gestor');
      return;
    }
  }

  // 2. Load data
  await _loadUsuarios(false);

  // 3. Events
  // Search
  $(document).on('input.rrhh', '#rrhh_search', function () {
    filtro = $(this).val();
    _renderTable();
  });

  // Refresh
  $(document).on('click.rrhh', '#rrhh_refresh', async function () {
    const $btn = $(this);
    $btn.addClass('rrhh_spinning');
    filtro = '';
    $('#rrhh_search').val('');
    await _loadUsuarios(true);
    $btn.removeClass('rrhh_spinning');
    Notificacion('Lista actualizada', 'success');
  });

  // Toggle participa
  $(document).on('change.rrhh', '.rrhh_toggle_participa', function () {
    const id = $(this).data('id');
    _toggleParticipa(id);
  });

  // Edit rol button — replace badge with inline select
  $(document).on('click.rrhh', '.rrhh_btn_rol', function () {
    const id  = $(this).data('id');
    const idx = usuarios.findIndex(u => u.id === id);
    if (idx === -1) return;

    const $row   = $(`tr[data-id="${id}"]`);
    const $rolTd = $row.find('.rrhh_rol_cell');
    const $btn   = $(this);

    // Avoid double-open
    if ($rolTd.find('.rrhh_rol_select').length) return;

    $rolTd.html(_rolSelectHtml(id, usuarios[idx].rol));
    $btn.html('<i class="fas fa-times"></i> Cancel');
    $btn.addClass('rrhh_btn_cancel');

    // Auto-focus select
    $rolTd.find('.rrhh_rol_select').trigger('focus');
  });

  // Cancel rol edit (re-click button while select is open)
  $(document).on('click.rrhh', '.rrhh_btn_cancel', function () {
    const id  = $(this).data('id');
    const idx = usuarios.findIndex(u => u.id === id);
    if (idx === -1) return;
    const $row = $(`tr[data-id="${id}"]`);
    $row.find('.rrhh_rol_cell').html(_rolBadge(usuarios[idx].rol));
    $(this).html('<i class="fas fa-user-tag"></i> Rol');
    $(this).removeClass('rrhh_btn_cancel');
  });

  // Change rol via select
  $(document).on('change.rrhh', '.rrhh_rol_select', function () {
    const id      = $(this).data('id');
    const newRol  = $(this).val();
    _cambiarRol(id, newRol);
  });
};

// ─── cleanup ──────────────────────────────────────────────────────────────────
export const cleanup = () => {
  $(document).off('.rrhh');
  usuarios = [];
  filtro   = '';
};
