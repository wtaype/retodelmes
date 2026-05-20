import './musica.css';
import $ from 'jquery';
import { db } from '../firebase.js';
import { collection, query, orderBy, doc, updateDoc, deleteDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { savels, getls, removels, Notificacion, wiSpin, showi } from '../widev.js';
import { app } from '../wii.js';

const COL = 'wimusica', KEY = 'wiMusica';
let canciones = [], smile = null, unsub = null;
const audio = new Audio();
const state = { actual: null, playing: false, repeat: false, editando: null };
const DC = `${import.meta.env.BASE_URL}poster.webp`;
const fmt = s => isNaN(s) ? '0:00' : `${~~(s/60)}:${String(~~(s%60)).padStart(2,'0')}`;

// ── HTML ──────────────────────────────────────────────────────────────────────
export const render = () => {
  const s = getls('wiSmile');
  return `
<div class="mwb">
  <div class="mus_layout ${s?.email ? 'autenticado' : ''}">

    <!-- LEFT -->
    <div class="mus_left" data-showi="60">
      <div class="mus_player" id="musPlayer">
        <img id="musCover" class="mus_cover" src="${DC}" alt="Portada">
        <div class="mus_pcore">
          <div class="mus_now">
            <strong id="musActual">Selecciona una canción</strong>
            <span id="musArtista">WiiHope</span>
          </div>
          <div class="mus_ctrls">
            <button class="mc" id="musPrev"><i class="fas fa-backward-step"></i></button>
            <button class="mc mc_play" id="musPlay"><i class="fas fa-play"></i></button>
            <button class="mc" id="musNext"><i class="fas fa-forward-step"></i></button>
            <button class="mc" id="musRep"><i class="fas fa-repeat"></i></button>
            ${s?.email ? '<button class="mc" id="musFav"><i class="fas fa-star"></i></button>' : ''}
          </div>
          <div class="mus_prog">
            <span id="musCur">0:00</span>
            <div class="mus_bar"><div class="mus_fill"></div></div>
            <span id="musDur">0:00</span>
          </div>
        </div>
      </div>

      <div class="mus_tools">
        <div class="mus_sbox"><i class="fas fa-search"></i><input id="musSrc" placeholder="Buscar..."></div>
        <div class="mus_cats">
          <button class="cat active" data-cat="todas">Todas</button>
          <button class="cat" data-cat="alabanza">🎵 Alabanza</button>
          <button class="cat" data-cat="adoracion">⛪ Adoración</button>
          <button class="cat" data-cat="reflexion">🧘 Reflexión</button>
        </div>
      </div>

      <div id="musPls" class="mus_list"></div>
    </div>

    <!-- RIGHT (solo autenticados) -->
    ${s?.email ? `<div class="mus_right" data-showi="80">
      <div class="mus_card">
        <h3 id="fmTitle"><i class="fas fa-plus-circle"></i> Nueva Canción</h3>
        <form id="fmMusica">
          <div class="fg" id="fgId" style="display:none;"><label>ID de Canción</label><input class="fi fi_id" readonly style="cursor:not-allowed; opacity:0.6;"></div>
          <div class="fg"><label>Nombre *</label><input class="fi fi_nom" maxlength="100" placeholder="Nombre de la canción" required></div>
          <div class="fg"><label>Cantante *</label><input class="fi fi_art" maxlength="100" placeholder="Cantante / intérprete" required></div>
          <div class="fg"><label>URL Música mp3 *</label><input type="url" class="fi fi_url" placeholder="https://.../cancion.mp3" required><small>Archivo .mp3 directo</small></div>
          <div class="fg"><label>Portada Imagen *</label><input type="url" class="fi fi_por" placeholder="https://.../portada.jpg" required><small>Imagen cuadrada (500×500px)</small></div>
          <div class="fg"><label>Categoría</label>
            <input class="fi fi_tag" placeholder="Ej. Alabanza, Adoración" required>
            <div id="catSugs" class="mus_cats" style="margin-top:0.8vh; gap:0.6vh;"></div>
          </div>
          <div class="fchecks">
            <label class="fck"><input type="checkbox" id="fiFav"><i class="fas fa-star"></i> Favorita</label>
            <label class="fck"><input type="checkbox" id="fiPub" checked><i class="fas fa-eye"></i> Pública</label>
          </div>
          <div class="fbtns">
            <button type="button" class="btn_sec" id="fmDelete" style="display:none; color: var(--error);"><i class="fas fa-trash"></i></button>
            <button type="button" class="btn_sec" id="fmNew" style="display:none;"><i class="fas fa-plus"></i> Nuevo</button>
            <button type="submit" class="btn_pri" id="fmSave"><i class="fas fa-save"></i> <span>Guardar</span></button>
          </div>
        </form>
      </div>
    </div>` : ''}
  </div>
</div>`;
};

// ── Render lista ──────────────────────────────────────────────────────────────
const renderList = () => {
  const cat = $('.cat.active').data('cat') || 'todas';
  const q   = ($('#musSrc').val()||'').toLowerCase();
  const fil = canciones.filter(c =>
    (cat === 'todas' || c.tag === cat) &&
    (`${c.nombre}${c.cantante}`.toLowerCase().includes(q))
  );
  
  const tags = [...new Set(canciones.map(c => c.tag).filter(Boolean))].slice(0, 8);
  $('#catSugs').html(tags.map(t => `<button type="button" class="cat sug_cat" style="padding:0.4vh 1.2vh; font-size:var(--fz_s3);">${t}</button>`).join(''));

  if (!fil.length) return $('#musPls').html('<div class="mus_empty"><i class="fas fa-music"></i><p>Sin resultados</p></div>');
  $('#musPls').html(fil.map(c => {
    const activa = state.actual?.id === c.id, mia = smile?.email === c.email;
    return `<div class="mpi ${activa?'on':''} ${c.favorito?'fav':''}" data-id="${c.id}">
      <div class="mpi_cov"><img src="${c.portada||DC}" loading="lazy"><div class="mpi_ico"><i class="fas ${activa&&state.playing?'fa-pause':'fa-play'}"></i></div></div>
      <div class="mpi_info"><b>${c.nombre}</b><small>${c.cantante}</small></div>
      ${mia ? `<div class="mpi_acts">
        <button class="ma fav_t ${c.favorito?'on':''}" data-id="${c.id}"><i class="fas fa-star"></i></button>
      </div>` : ''}
    </div>`;
  }).join(''));
};

// ── Player ────────────────────────────────────────────────────────────────────
const setPlayer = c => {
  $('#musActual').text(c.nombre);
  $('#musArtista').text(c.cantante);
  $('#musCover').attr('src', c.portada || DC);
  $('#musFav').toggleClass('on', !!c.favorito);
  $('.mpi').removeClass('on').filter(`[data-id="${c.id}"]`).addClass('on');
};

const load = c => {
  if (!c) return;
  state.actual = c;
  setPlayer(c);        // UI instantánea ⚡
  audio.src = c.url;
  savels('musActual', c.id, 168);
  $('.mpi_ico i').attr('class', 'fas fa-play');
};

const play = () => {
  if (!state.actual) { if (!canciones.length) return Notificacion('Sin canciones','warning'); load(canciones[0]); }
  audio.play().then(() => {
    state.playing = true;
    $('#musPlay i').attr('class', 'fas fa-pause');
    $(`.mpi.on .mpi_ico i`).attr('class', 'fas fa-pause');
  }).catch(() => Notificacion('Error al reproducir','error'));
};

const pause = () => {
  audio.pause(); state.playing = false;
  $('#musPlay i').attr('class', 'fas fa-play');
  $('.mpi_ico i').attr('class', 'fas fa-play');
};

const nav = d => {
  if (!canciones.length) return;
  const i = canciones.findIndex(c => c.id === state.actual?.id);
  load(canciones[i+d] || canciones[d>0?0:canciones.length-1]);
  play();
};

const limpiar = () => {
  $('#fmMusica')[0]?.reset();
  $('#fiFav').prop('checked',false); $('#fiPub').prop('checked',true);
  state.editando = null;
  $('#fmTitle').html('<i class="fas fa-plus-circle"></i> Nueva Canción');
  $('#fmSave span').text('Guardar'); $('#fmSave i').attr('class','fas fa-save');
  $('#fmDelete, #fmNew, #fgId').hide();
};

// ── Ordenar canciones ─────────────────────────────────────────────────────────
const ordenar = todas => {
  const pub = c => c.publico !== false;
  const sort = (a, b) => b.favorito - a.favorito || (b.creado?.seconds||0) - (a.creado?.seconds||0);
  return smile?.email
    ? [...todas.filter(c => c.email===smile.email), ...todas.filter(c => c.email!==smile.email && pub(c))].sort(sort)
    : todas.filter(pub).sort(sort);
};

// ── init ──────────────────────────────────────────────────────────────────────
export const init = () => {
  smile = getls('wiSmile');
  showi();

  // ① Caché inmediata — UI lista antes que Firebase responda
  const cache = getls(KEY);
  if (cache?.length) {
    canciones = cache;
    renderList();
    const c = canciones.find(x => x.id === getls('musActual'));
    if (c) load(c);
  }
  if (getls('musRep')) { state.repeat = true; $('#musRep').addClass('on'); }

  // Audio events
  $(audio).on({
    'timeupdate.m': () => {
      const {currentTime:c, duration:d} = audio;
      if (!isNaN(d)) { $('#musCur').text(fmt(c)); $('#musDur').text(fmt(d)); $('.mus_fill').css('width',`${(c/d)*100}%`); }
    },
    'ended.m': () => state.repeat ? (audio.currentTime=0, play()) : nav(1),
    'loadedmetadata.m': () => $('#musDur').text(fmt(audio.duration))
  });

  // ② Todos los eventos con selectores delegados (sin handler genérico que interfiera)
  $(document).off('.musica')
    // Player controls — usar closest para capturar click en <i> hijo
    .on('click.musica', '#musPlay, #musPlay *',  () => state.playing ? pause() : play())
    .on('click.musica', '#musPrev, #musPrev *',  () => nav(-1))
    .on('click.musica', '#musNext, #musNext *',  () => nav(1))
    .on('click.musica', '#musRep,  #musRep *',   () => { state.repeat=!state.repeat; $('#musRep').toggleClass('on',state.repeat); savels('musRep',state.repeat,168); })
    .on('click.musica', '#musFav,  #musFav *',   async function(){
      if(!state.actual||smile?.email!==state.actual.email) return Notificacion('Sin permisos','warning');
      const nv=!state.actual.favorito;
      $('#musFav').toggleClass('on');
      try { await updateDoc(doc(db,COL,state.actual.id),{favorito:nv,actualizado:serverTimestamp()}); state.actual.favorito=nv; removels(KEY); }
      catch{ $('#musFav').toggleClass('on'); Notificacion('Error','error'); }
    })
    // Barra progreso
    .on('click.musica', '.mus_bar', function(e){ if(audio.duration) audio.currentTime=(e.offsetX/$(this).width())*audio.duration; })
    // Lista
    .on('click.musica', '.mpi', function(e){
      if($(e.target).closest('.mpi_acts').length) return;
      const c = canciones.find(x=>x.id===$(this).data('id'));
      if(!c) return;
      state.actual?.id===c.id ? (state.playing?pause():play()) : (load(c),play());
      
      if(smile?.email === c.email) {
        state.editando=c.id;
        $('.fi_nom').val(c.nombre);
        $('.fi_art').val(c.cantante);
        $('.fi_url').val(c.url);
        $('.fi_por').val(c.portada||'');
        $('.fi_tag').val(c.tag||'alabanza');
        $('.fi_id').val(c.id);
        $('#fiFav').prop('checked',!!c.favorito);
        $('#fiPub').prop('checked',c.publico!==false);
        $('#fmTitle').html('<i class="fas fa-pen"></i> Editar Canción');
        $('#fmSave span').text('Actualizar'); $('#fmSave i').attr('class','fas fa-pen');
        $('#fmDelete, #fmNew, #fgId').show();
      } else {
        limpiar();
      }
    })
    .on('input.musica',  '#musSrc', renderList)
    .on('click.musica',  '.cat', function(){ 
      if($(this).hasClass('sug_cat')) return; // No filtrar al clickear sugerencia
      $('.cat').not('.sug_cat').removeClass('active'); 
      $(this).addClass('active'); 
      renderList(); 
    })
    .on('click.musica', '.sug_cat', function(){
      $('.fi_tag').val($(this).text());
      $('.fi_tag').focus();
    })
    // Favorito de lista
    .on('click.musica', '.fav_t, .fav_t *', async function(e){
      e.stopPropagation();
      const id=$(this).closest('.fav_t').data('id'), c=canciones.find(x=>x.id===id);
      if(!c||smile?.email!==c.email) return Notificacion('Sin permisos','warning');
      const nv=!c.favorito;
      const $btn=$(`.fav_t[data-id="${id}"]`), $mpi=$btn.closest('.mpi');
      $btn.toggleClass('on'); $mpi.toggleClass('fav');
      try { await updateDoc(doc(db,COL,id),{favorito:nv,actualizado:serverTimestamp()}); c.favorito=nv; removels(KEY); }
      catch{ $btn.toggleClass('on'); $mpi.toggleClass('fav'); Notificacion('Error','error'); }
    })
    // Eliminar desde el formulario
    .on('click.musica', '#fmDelete', async function(e){
      if(!state.editando) return;
      const c = canciones.find(x=>x.id===state.editando);
      if(!c || smile?.email!==c.email) return Notificacion('Sin permisos','warning');
      if(!confirm(`¿Eliminar "${c.nombre}"?`)) return;
      try {
        await deleteDoc(doc(db,COL,c.id));
        $(`.mpi[data-id="${c.id}"]`).fadeOut(250,function(){$(this).remove();});
        if(state.actual?.id===c.id){ pause(); state.actual=null; $('#musActual').text('Selecciona una canción'); $('#musCover').attr('src',DC); }
        removels(KEY); Notificacion('Eliminada','success');
        limpiar();
      } catch{ Notificacion('Error','error'); }
    })
    // Form submit
    .on('submit.musica','#fmMusica', async function(e){
      e.preventDefault();
      const nombre=$('.fi_nom').val().trim(), cantante=$('.fi_art').val().trim(),
            url=$('.fi_url').val().trim(), portada=$('.fi_por').val().trim(),
            tag=$('.fi_tag').val(), favorito=$('#fiFav').is(':checked'), publico=$('#fiPub').is(':checked');
      if(!nombre||!cantante||!url||!portada) return Notificacion('Completa todos los campos','warning');
      if(!url.toLowerCase().includes('.mp3')) return Notificacion('La pista debe ser .mp3','warning');
      try {
        wiSpin($('#fmSave')[0],true);
        const datos={nombre,cantante,url,portada,tag,favorito,publico,email:smile.email,usuario:smile.usuario||smile.email.split('@')[0]};
        if(state.editando){
          await updateDoc(doc(db,COL,state.editando),{...datos,actualizado:serverTimestamp()});
          Notificacion('✅ Actualizada','success');
        } else {
          await setDoc(doc(collection(db,COL),`musica_${Date.now()}`),{...datos,creado:serverTimestamp(),actualizado:serverTimestamp()});
          Notificacion('✅ Agregada','success');
        }
        removels(KEY); limpiar();
      } catch(err){ console.error(err); Notificacion('Error','error'); }
      finally { wiSpin($('#fmSave')[0],false); }
    })
    .on('click.musica','#fmNew', limpiar);

  // ③ Firebase — diferido si hay caché, inmediato si no
  const suscribir = () => {
    unsub = onSnapshot(query(collection(db,COL),orderBy('favorito','desc'),orderBy('creado','desc')), snap => {
      const todas = snap.docs.map(d=>({id:d.id,...d.data()}));
      canciones = ordenar(todas);
      savels(KEY,canciones,168);
      renderList();
    }, () => Notificacion('Desde caché','info',2000));
  };

  cache?.length ? setTimeout(suscribir, 800) : suscribir();

  console.log(`✅ Música — ${app}`);
};

export const cleanup = () => {
  unsub?.();
  audio.pause(); audio.src='';
  $(audio).off('.m');
  $(document).off('.musica');
};