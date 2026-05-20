import './citas.css';
import $ from 'jquery';
import { db } from '../firebase.js';
import { app } from '../wii.js';
import { collection, query, orderBy, limit, startAfter, where, doc, setDoc, updateDoc, deleteDoc, serverTimestamp, getDocs, Timestamp } from 'firebase/firestore';
import { getls, savels, Notificacion, abrirModal, cerrarTodos, wiSpin, wiTip, Capi } from '../widev.js';
import { rutas } from '../rutas.js';

const COL = 'wicitas', CACHE = 'wiFrases';
let todas = [], filtradas = [], mostradas = 0, smile = null;
let lastSnap = null, hasMore = true;
let categorias = [], verTodas = false;
const POR = 5, INIT = 10, CATS_MAX = 5;

const cap   = s => s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : '';
const ts    = f => f?.actualizado?.seconds || f?.creado?.seconds || 0;
const orden_fn = o => (a,b) => o === 'favoritas' ? (b.favorito-a.favorito)||(ts(b)-ts(a)) : o==='recientes' ? ts(b)-ts(a) : ts(a)-ts(b);
const mkCats  = arr => [...new Set(arr.map(f=>f.categoria).filter(Boolean))].map(c=>({nombre:c,count:arr.filter(f=>f.categoria===c).length})).sort((a,b)=>b.count-a.count);

const renderCats = () => {
  const cats = categorias.slice(0, verTodas ? categorias.length : CATS_MAX);
  $('.categorias_list').html(
    `<button class="cat_btn active" data-cat="todas"><i class="fas fa-layer-group"></i> Todas <span>(${todas.length})</span></button>` +
    cats.map(c=>`<button class="cat_btn" data-cat="${c.nombre}">${c.nombre} <span>(${c.count})</span></button>`).join('')
  );
  $('.btn_ver_mas').toggle(categorias.length > CATS_MAX).html(`<i class="fas fa-chevron-${verTodas?'up':'down'}"></i> ${verTodas?'Menos':'Más'}`);
};

const getPhrHtml = (f, i, isOld = false) => {
  const d = i < 10 && !isOld ? (i * 0.05).toFixed(2) : 0;
  const mia = !!smile?.email && smile.email === f.email;
  return `
  <div class="phr wi_fadeUp ${isOld ? 'visible' : ''} ${f.favorito?'is_fav':''}" style="--d: ${d}s" data-id="${f.id}">
    ${mia ? `
    <div class="phr_acciones">
      <button class="phr_btn btn_editar" data-id="${f.id}" ${wiTip('Editar')}><i class="fas fa-pen"></i></button>
      <button class="phr_btn btn_eliminar" data-id="${f.id}" ${wiTip('Eliminar')}><i class="fas fa-trash"></i></button>
    </div>` : ''}
    <div class="phr_star ${mia?'editable':''} ${f.favorito?'on':''}" data-id="${f.id}" ${wiTip(f.favorito?'Quitar de favoritos':'Marcar como favorita')}>
      <i class="fa${f.favorito?'s':'r'} fa-star"></i>
    </div>
    <div class="phr_content">
      <p class="phr_cita">"${f.cita}"</p>
      <span class="phr_ref">${f.libro}</span>
    </div>
    <div class="phr_footer">
      <span><i class="fas fa-user-circle"></i> ${Capi(f.nombreShow || f.usuario || 'WiiHope')}</span>
      <span><i class="fas fa-calendar-alt"></i> ${new Date(ts(f)*1000).toLocaleDateString()}</span>
    </div>
  </div>`;
};

const renderPhr = (append = false) => {
  const cant = mostradas === 0 ? INIT : POR;
  const html = filtradas.slice(mostradas, mostradas + cant).map((f, i) => getPhrHtml(f, mostradas + i, false)).join('');
  
  if (!append) {
    $('#phrsGrid').html(html || '<div class="frases_empty"><i class="fas fa-seedling"></i><p>No se encontraron frases.</p></div>');
  } else {
    $('#phrsGrid').append(html);
  }

  mostradas += cant;
  
  // Decide if we show Load More
  if (mostradas < filtradas.length) {
    $('.load_more_section').show();
    $('#btnLoadMore').off('click').on('click', () => { renderPhr(true); setTimeout(()=>$('.wi_fadeUp:not(.visible)').addClass('visible'),50); });
  } else if (hasMore) {
    $('.load_more_section').show();
    $('#btnLoadMore').off('click').on('click', function() { fetchFirestore(this, true); });
  } else {
    $('.load_more_section').hide();
  }
};

const filtrar = (preserveGrid = false) => {
  const q = $('#citasBusq').val().toLowerCase();
  const c = $('.cat_btn.active').data('cat') || 'todas';
  const o = $('#citasOrden').val() || 'recientes';

  filtradas = todas.filter(f => 
    (c === 'todas' || f.categoria === c) &&
    (f.cita.toLowerCase().includes(q) || f.libro.toLowerCase().includes(q))
  ).sort(orden_fn(o));

  if (!preserveGrid) {
    mostradas = 0;
    renderPhr();
  } else {
    // Seamless append on fetch more
    const m = mostradas;
    const cant = m + POR;
    const html = filtradas.slice(0, cant).map((f, i) => getPhrHtml(f, i, i < m)).join('');
    $('#phrsGrid').html(html || '<div class="frases_empty"><i class="fas fa-seedling"></i><p>No se encontraron frases.</p></div>');
    mostradas = cant;
    
    if (mostradas < filtradas.length) {
      $('.load_more_section').show();
      $('#btnLoadMore').off('click').on('click', () => { renderPhr(true); setTimeout(()=>$('.wi_fadeUp:not(.visible)').addClass('visible'),50); });
    } else if (hasMore) {
      $('.load_more_section').show();
      $('#btnLoadMore').off('click').on('click', function() { fetchFirestore(this, true); });
    } else {
      $('.load_more_section').hide();
    }
  }
};

export const render = () => `
<div class="wicitas">
  
  <!-- ══ HERO PREMIUM ══ -->
  <header class="citas_hero wi_fadeUp">
    <div class="citas_hero_glow"></div>
    <div class="citas_hero_content">
      <div class="citas_hero_left">
        <div class="citas_avatar_wrap">
           <div class="citas_avatar" id="citasAvatar"></div>
           <div class="citas_avatar_ring"></div>
        </div>
        <div class="citas_welcome">
          <h1>Palabras de Vida</h1>
          <p>Tu colección personal de promesas y versículos para fortalecer el alma.</p>
        </div>
      </div>
      <div class="citas_hero_actions">
        <button class="citas_add" ${wiTip('Nueva Frase')}><i class="fas fa-plus"></i> Nueva Frase</button>
      </div>
    </div>
  </header>

  <!-- ══ CONTROLES ══ -->
  <div class="citas_ctrl_wrap wi_fadeUp">
    <div class="citas_search_wrap">
      <div class="citas_search_box">
        <i class="fas fa-search citas_search_ico"></i>
        <input type="text" class="citas_search" id="citasBusq" placeholder="Buscar por cita o libro..." autocomplete="off">
        <button class="citas_search_clear" style="display:none"><i class="fas fa-times"></i></button>
      </div>
      <div class="citas_filtros">
        <select class="citas_orden" id="citasOrden">
          <option value="favoritas">⭐ Destacadas</option>
          <option value="recientes">🆕 Recientes</option>
          <option value="antiguas">📅 Antiguas</option>
        </select>
        <button class="citas_sync" id="citasSync" ${wiTip('Sincronizar')}><i class="fas fa-sync-alt"></i></button>
      </div>
    </div>

    <div class="citas_ctrl">
      <div class="categorias_wrapper">
        <div class="categorias_list"></div>
        <button class="btn_ver_mas"><span>Más</span> <i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  </div>

  <!-- ══ GRID ══ -->
  <main class="phrs" id="phrsGrid">
    <div class="skc"></div><div class="skc"></div><div class="skc"></div><div class="skc"></div>
  </main>

  <div class="load_more_section" style="display:none">
    <button class="btn_load_more" id="btnLoadMore"><i class="fas fa-chevron-down"></i> Cargar más frases</button>
  </div>

</div>

<!-- ══ MODAL FRASES ══ -->
<div class="modal wiModal" id="mdFrase">
  <div class="modalBody">
    <button class="modalX"><i class="fas fa-times"></i></button>
    <div class="modal_hd">
      <h3 id="mdTit"><i class="fas fa-feather"></i> Guardar Frase</h3>
    </div>
    <form id="formFrase">
      <input type="hidden" id="fid">
      <div class="modal_body">
        <div class="form_grp">
          <label><i class="fas fa-quote-left"></i> Inspiración / Cita *</label>
          <textarea id="fcita" placeholder="Ej: Jehová es mi pastor; nada me faltará..." required maxlength="500"></textarea>
        </div>
        <div class="form_row">
          <div class="form_grp">
            <label><i class="fas fa-book"></i> Referencia *</label>
            <input type="text" id="flibro" placeholder="Ej: Salmos 23:1" required maxlength="100">
          </div>
          <div class="form_grp">
            <label><i class="fas fa-tag"></i> Categoría *</label>
            <input type="text" id="fcat" placeholder="Ej: Esperanza, Fe..." required maxlength="50">
          </div>
        </div>
        <div class="form_row">
          <div class="form_check">
            <input type="checkbox" id="fpub" checked>
            <label for="fpub"><i class="fas fa-eye"></i> Pública</label>
          </div>
          <div class="form_check">
            <input type="checkbox" id="ffav">
            <label for="ffav"><i class="fas fa-star"></i> Destacar</label>
          </div>
        </div>
      </div>
      <div class="modal_ftr">
        <button type="submit" class="btn_pri" id="fbtn"><i class="fas fa-save"></i> Guardar</button>
      </div>
    </form>
  </div>
</div>
`;

const fetchFirestore = async (btn, isNext = false) => {
  if (btn) wiSpin(btn, true);
  else $('.citas_sync').addClass('spinning');
  
  try {
    const reqLimit = isNext ? POR : INIT;
    const o = $('#citasOrden').val() || 'favoritas';
    let qArgs = [collection(db, COL)];
    
    if (o === 'favoritas') {
      qArgs.push(orderBy('favorito', 'desc'), orderBy('creado', 'desc'));
    } else if (o === 'antiguas') {
      qArgs.push(orderBy('creado', 'asc'));
    } else { // recientes
      qArgs.push(orderBy('creado', 'desc'));
    }
    
    if (isNext) {
      if (lastSnap) {
        qArgs.push(startAfter(lastSnap));
      } else if (todas.length > 0) {
        // Reanudar paginación usando los valores del caché (0 reads en F5)
        const lastItem = todas[todas.length - 1];
        if (lastItem.creado && lastItem.creado.seconds) {
          const ts = new Timestamp(lastItem.creado.seconds, lastItem.creado.nanoseconds);
          if (o === 'favoritas') qArgs.push(startAfter(lastItem.favorito, ts));
          else qArgs.push(startAfter(ts));
        }
      }
    }
    
    qArgs.push(limit(reqLimit));
    
    if (!isNext) { todas = []; mostradas = 0; }
    
    const q = query(...qArgs);

    const snap = await getDocs(q);
    
    // Filtrar para "sin index": Público o del autor
    let data = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      .filter(p => p.publico !== false || (smile?.email && p.email === smile.email));

    // Agregar sin duplicar
    const ids = new Set(todas.map(x => x.id));
    data.forEach(p => { if (!ids.has(p.id)) todas.push(p); });

    lastSnap = snap.docs.length > 0 ? snap.docs[snap.docs.length - 1] : null;
    hasMore = snap.docs.length === reqLimit;

    savels(CACHE + '_' + o, todas, 720);
    categorias = mkCats(todas);
    renderCats();
    filtrar(isNext); // Mantiene grilla si es next
    setTimeout(() => $('.wi_fadeUp:not(.visible)').addClass('visible'), 50);

    if (btn && !isNext) Notificacion('Actualizado ✓', 'success', 1000);
  } catch (e) {
    console.error(e);
    if (btn) Notificacion('Error al sincronizar', 'error');
  } finally {
    if (btn) wiSpin(btn, false);
    else $('.citas_sync').removeClass('spinning');
  }
};

export const init = () => {
  smile = getls('wiSmile');
  
  if (smile) {
    const iniciales = `${(smile.nombre || '?')[0]}${(smile.apellidos || '')[0] || ''}`.toUpperCase();
    $('#citasAvatar').text(iniciales);
  } else {
    $('#citasAvatar').html('<i class="fas fa-dove"></i>');
  }

  setTimeout(() => $('.wi_fadeUp').addClass('visible'), 50);

  const loadInitial = () => {
    const o = $('#citasOrden').val() || 'favoritas';
    const cache = getls(CACHE + '_' + o);
    if (cache && cache.length) {
      todas = cache;
      categorias = mkCats(todas);
      renderCats();
      filtrar();
    } else {
      fetchFirestore();
    }
  };

  loadInitial();

  $(document)
    .off('.citas')
    .on('input.citas', '#citasBusq', function(){ $('.citas_search_clear').toggle(!!$(this).val()); filtrar(); })
    .on('click.citas', '.citas_search_clear', function(){ $('#citasBusq').val('').trigger('input').focus(); })
    .on('change.citas', '#citasOrden', function() { 
      lastSnap = null; hasMore = true; 
      $('#phrsGrid').html('<div class="skc"></div><div class="skc"></div><div class="skc"></div><div class="skc"></div>');
      loadInitial();
    })
    .on('click.citas', '.cat_btn', function(){ $('.cat_btn').removeClass('active'); $(this).addClass('active'); filtrar(); setTimeout(()=>$('.wi_fadeUp:not(.visible)').addClass('visible'),50); })
    .on('click.citas', '.btn_ver_mas', function(){ verTodas = !verTodas; renderCats(); })
    // btnLoadMore se maneja dentro de renderPhr y filtrar
    .on('click.citas', '.citas_sync', function(){ fetchFirestore(this); })
    .on('click.citas', '.citas_add', () => { 
      if(!smile) return rutas.navigate('/login');
      $('#fid').val(''); $('#formFrase')[0].reset(); $('#fpub').prop('checked', true);
      $('#mdTit').html('<i class="fas fa-plus"></i> Nueva Frase'); abrirModal('mdFrase'); 
    })
    .on('click.citas', '.btn_editar', function(e){
      e.stopPropagation();
      const f = todas.find(x => x.id === $(this).data('id'));
      if(!f) return;
      if (smile?.email !== f.email) return Notificacion('Sin permisos', 'warning');
      $('#fid').val(f.id); $('#fcita').val(f.cita); $('#flibro').val(f.libro); $('#fcat').val(f.categoria); 
      $('#ffav').prop('checked', f.favorito); $('#fpub').prop('checked', f.publico !== false);
      $('#mdTit').html('<i class="fas fa-pen"></i> Editar Frase'); abrirModal('mdFrase');
    })
    .on('click.citas', '.btn_eliminar', async function(e){
      e.stopPropagation();
      const id = $(this).data('id'), f = todas.find(x => x.id === id);
      if(!f || smile?.email !== f.email) return Notificacion('Sin permisos', 'warning');
      if(!confirm(`¿Eliminar "${f.libro}"?`)) return;
      try { await deleteDoc(doc(db, COL, id)); Notificacion('Eliminada ✓', 'success'); fetchFirestore(); } catch(e){ Notificacion('Error al eliminar','error'); }
    })
    .on('click.citas', '.phr_star.editable', async function(e){
      e.stopPropagation();
      const id = $(this).data('id'), f = todas.find(x => x.id === id);
      if(!f || smile?.email !== f.email) return;
      try { 
        $(this).toggleClass('on');
        await updateDoc(doc(db, COL, id), { favorito: !f.favorito, actualizado: serverTimestamp() }); 
        fetchFirestore();
      } catch(e){ Notificacion('Error','error'); }
    })
    .on('submit.citas', '#formFrase', async function(e){
      e.preventDefault();
      const id = $('#fid').val(), cita = $('#fcita').val().trim(), libro = $('#flibro').val().trim(), cat = cap($('#fcat').val().trim()), fav = $('#ffav').is(':checked'), pub = $('#fpub').is(':checked');
      if(!cita || !libro) return;
      
      const payload = { cita, libro, categoria: cat, favorito: fav, publico: pub, email: smile.email, usuario: smile.usuario || smile.nombre, nombreShow: smile.usuario || smile.nombre, actualizado: serverTimestamp() };
      try {
        wiSpin('#fbtn', true);
        if(id) await updateDoc(doc(db, COL, id), payload);
        else await setDoc(doc(collection(db, COL), `cita_${Date.now()}`), { ...payload, creado: serverTimestamp() });
        cerrarTodos(); Notificacion(id ? 'Actualizada ✓' : 'Guardada ✓', 'success'); fetchFirestore();
      } catch(e){ console.error(e); Notificacion('Error al guardar','error'); }
      finally { wiSpin('#fbtn', false); }
    })
    .on('click.citas', '.phr', function(e) {
      if ($(e.target).closest('.phr_btn, .phr_star').length) return;
      if (window.innerWidth <= 768) {
        $('.phr').not(this).removeClass('show_actions');
        $(this).toggleClass('show_actions');
      }
    });

  console.log(`✅ Citas — ${app} listo`);
};

export const cleanup = () => { $(document).off('.citas'); };