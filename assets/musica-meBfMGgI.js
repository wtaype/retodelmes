import{$ as a}from"./vendor-PbmUQHyn.js";import{db as f}from"./firebase-DmJttupn.js";import{A,e as b,u as g,d as L,v as M,c as E,p as j,r as G,q as T}from"./firebase-BM1KOhEp.js";import{l as h,y as B,w as F,c as o,t as C,G as R,e as H}from"./index-DKQikmxs.js";const p="wimusica",v="wiMusica";let c=[],r=null,q=null;const n=new Audio,e={actual:null,playing:!1,repeat:!1,editando:null},x="/retodelmes/poster.webp",N=t=>isNaN(t)?"0:00":`${~~(t/60)}:${String(~~(t%60)).padStart(2,"0")}`,J=()=>{const t=h("wiSmile");return`
<div class="mwb">
  <div class="mus_layout ${t?.email?"autenticado":""}">

    <!-- LEFT -->
    <div class="mus_left" data-showi="60">
      <div class="mus_player" id="musPlayer">
        <img id="musCover" class="mus_cover" src="${x}" alt="Portada">
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
            ${t?.email?'<button class="mc" id="musFav"><i class="fas fa-star"></i></button>':""}
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
    ${t?.email?`<div class="mus_right" data-showi="80">
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
    </div>`:""}
  </div>
</div>`},$=()=>{const t=a(".cat.active").data("cat")||"todas",u=(a("#musSrc").val()||"").toLowerCase(),l=c.filter(i=>(t==="todas"||i.tag===t)&&`${i.nombre}${i.cantante}`.toLowerCase().includes(u)),s=[...new Set(c.map(i=>i.tag).filter(Boolean))].slice(0,8);if(a("#catSugs").html(s.map(i=>`<button type="button" class="cat sug_cat" style="padding:0.4vh 1.2vh; font-size:var(--fz_s3);">${i}</button>`).join("")),!l.length)return a("#musPls").html('<div class="mus_empty"><i class="fas fa-music"></i><p>Sin resultados</p></div>');a("#musPls").html(l.map(i=>{const d=e.actual?.id===i.id,m=r?.email===i.email;return`<div class="mpi ${d?"on":""} ${i.favorito?"fav":""}" data-id="${i.id}">
      <div class="mpi_cov"><img src="${i.portada||x}" loading="lazy"><div class="mpi_ico"><i class="fas ${d&&e.playing?"fa-pause":"fa-play"}"></i></div></div>
      <div class="mpi_info"><b>${i.nombre}</b><small>${i.cantante}</small></div>
      ${m?`<div class="mpi_acts">
        <button class="ma fav_t ${i.favorito?"on":""}" data-id="${i.id}"><i class="fas fa-star"></i></button>
      </div>`:""}
    </div>`}).join(""))},O=t=>{a("#musActual").text(t.nombre),a("#musArtista").text(t.cantante),a("#musCover").attr("src",t.portada||x),a("#musFav").toggleClass("on",!!t.favorito),a(".mpi").removeClass("on").filter(`[data-id="${t.id}"]`).addClass("on")},k=t=>{t&&(e.actual=t,O(t),n.src=t.url,F("musActual",t.id,168),a(".mpi_ico i").attr("class","fas fa-play"))},_=()=>{if(!e.actual){if(!c.length)return o("Sin canciones","warning");k(c[0])}n.play().then(()=>{e.playing=!0,a("#musPlay i").attr("class","fas fa-pause"),a(".mpi.on .mpi_ico i").attr("class","fas fa-pause")}).catch(()=>o("Error al reproducir","error"))},D=()=>{n.pause(),e.playing=!1,a("#musPlay i").attr("class","fas fa-play"),a(".mpi_ico i").attr("class","fas fa-play")},z=t=>{if(!c.length)return;const u=c.findIndex(l=>l.id===e.actual?.id);k(c[u+t]||c[t>0?0:c.length-1]),_()},S=()=>{a("#fmMusica")[0]?.reset(),a("#fiFav").prop("checked",!1),a("#fiPub").prop("checked",!0),e.editando=null,a("#fmTitle").html('<i class="fas fa-plus-circle"></i> Nueva Canción'),a("#fmSave span").text("Guardar"),a("#fmSave i").attr("class","fas fa-save"),a("#fmDelete, #fmNew, #fgId").hide()},K=t=>{const u=s=>s.publico!==!1,l=(s,i)=>i.favorito-s.favorito||(i.creado?.seconds||0)-(s.creado?.seconds||0);return r?.email?[...t.filter(s=>s.email===r.email),...t.filter(s=>s.email!==r.email&&u(s))].sort(l):t.filter(u).sort(l)},Q=()=>{r=h("wiSmile"),B();const t=h(v);if(t?.length){c=t,$();const l=c.find(s=>s.id===h("musActual"));l&&k(l)}h("musRep")&&(e.repeat=!0,a("#musRep").addClass("on")),a(n).on({"timeupdate.m":()=>{const{currentTime:l,duration:s}=n;isNaN(s)||(a("#musCur").text(N(l)),a("#musDur").text(N(s)),a(".mus_fill").css("width",`${l/s*100}%`))},"ended.m":()=>e.repeat?(n.currentTime=0,_()):z(1),"loadedmetadata.m":()=>a("#musDur").text(N(n.duration))}),a(document).off(".musica").on("click.musica","#musPlay, #musPlay *",()=>e.playing?D():_()).on("click.musica","#musPrev, #musPrev *",()=>z(-1)).on("click.musica","#musNext, #musNext *",()=>z(1)).on("click.musica","#musRep,  #musRep *",()=>{e.repeat=!e.repeat,a("#musRep").toggleClass("on",e.repeat),F("musRep",e.repeat,168)}).on("click.musica","#musFav,  #musFav *",async function(){if(!e.actual||r?.email!==e.actual.email)return o("Sin permisos","warning");const l=!e.actual.favorito;a("#musFav").toggleClass("on");try{await A(b(f,p,e.actual.id),{favorito:l,actualizado:g()}),e.actual.favorito=l,C(v)}catch{a("#musFav").toggleClass("on"),o("Error","error")}}).on("click.musica",".mus_bar",function(l){n.duration&&(n.currentTime=l.offsetX/a(this).width()*n.duration)}).on("click.musica",".mpi",function(l){if(a(l.target).closest(".mpi_acts").length)return;const s=c.find(i=>i.id===a(this).data("id"));s&&(e.actual?.id===s.id?e.playing?D():_():(k(s),_()),r?.email===s.email?(e.editando=s.id,a(".fi_nom").val(s.nombre),a(".fi_art").val(s.cantante),a(".fi_url").val(s.url),a(".fi_por").val(s.portada||""),a(".fi_tag").val(s.tag||"alabanza"),a(".fi_id").val(s.id),a("#fiFav").prop("checked",!!s.favorito),a("#fiPub").prop("checked",s.publico!==!1),a("#fmTitle").html('<i class="fas fa-pen"></i> Editar Canción'),a("#fmSave span").text("Actualizar"),a("#fmSave i").attr("class","fas fa-pen"),a("#fmDelete, #fmNew, #fgId").show()):S())}).on("input.musica","#musSrc",$).on("click.musica",".cat",function(){a(this).hasClass("sug_cat")||(a(".cat").not(".sug_cat").removeClass("active"),a(this).addClass("active"),$())}).on("click.musica",".sug_cat",function(){a(".fi_tag").val(a(this).text()),a(".fi_tag").focus()}).on("click.musica",".fav_t, .fav_t *",async function(l){l.stopPropagation();const s=a(this).closest(".fav_t").data("id"),i=c.find(P=>P.id===s);if(!i||r?.email!==i.email)return o("Sin permisos","warning");const d=!i.favorito,m=a(`.fav_t[data-id="${s}"]`),y=m.closest(".mpi");m.toggleClass("on"),y.toggleClass("fav");try{await A(b(f,p,s),{favorito:d,actualizado:g()}),i.favorito=d,C(v)}catch{m.toggleClass("on"),y.toggleClass("fav"),o("Error","error")}}).on("click.musica","#fmDelete",async function(l){if(!e.editando)return;const s=c.find(i=>i.id===e.editando);if(!s||r?.email!==s.email)return o("Sin permisos","warning");if(confirm(`¿Eliminar "${s.nombre}"?`))try{await L(b(f,p,s.id)),a(`.mpi[data-id="${s.id}"]`).fadeOut(250,function(){a(this).remove()}),e.actual?.id===s.id&&(D(),e.actual=null,a("#musActual").text("Selecciona una canción"),a("#musCover").attr("src",x)),C(v),o("Eliminada","success"),S()}catch{o("Error","error")}}).on("submit.musica","#fmMusica",async function(l){l.preventDefault();const s=a(".fi_nom").val().trim(),i=a(".fi_art").val().trim(),d=a(".fi_url").val().trim(),m=a(".fi_por").val().trim(),y=a(".fi_tag").val(),P=a("#fiFav").is(":checked"),I=a("#fiPub").is(":checked");if(!s||!i||!d||!m)return o("Completa todos los campos","warning");if(!d.toLowerCase().includes(".mp3"))return o("La pista debe ser .mp3","warning");try{R(a("#fmSave")[0],!0);const w={nombre:s,cantante:i,url:d,portada:m,tag:y,favorito:P,publico:I,email:r.email,usuario:r.usuario||r.email.split("@")[0]};e.editando?(await A(b(f,p,e.editando),{...w,actualizado:g()}),o("✅ Actualizada","success")):(await M(b(E(f,p),`musica_${Date.now()}`),{...w,creado:g(),actualizado:g()}),o("✅ Agregada","success")),C(v),S()}catch(w){console.error(w),o("Error","error")}finally{R(a("#fmSave")[0],!1)}}).on("click.musica","#fmNew",S);const u=()=>{q=j(G(E(f,p),T("favorito","desc"),T("creado","desc")),l=>{const s=l.docs.map(i=>({id:i.id,...i.data()}));c=K(s),F(v,c,168),$()},()=>o("Desde caché","info",2e3))};t?.length?setTimeout(u,800):u(),console.log(`✅ Música — ${H}`)},V=()=>{q?.(),n.pause(),n.src="",a(n).off(".m"),a(document).off(".musica")};export{V as cleanup,Q as init,J as render};
