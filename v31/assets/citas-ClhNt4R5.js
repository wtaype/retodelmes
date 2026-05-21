import{$ as a}from"./vendor-PbmUQHyn.js";import{db as _}from"./firebase-C8DVrBxg.js";import{l as x,u as H,d as G,c as f,G as S,h as N,e as W,I as g,w as X,C as J}from"./index-Cj1xyXrU.js";import{d as Q,e as $,A as O,u as M,v as V,c as P,q as C,z as q,T as K,n as Y,r as Z,i as aa}from"./firebase-BM1KOhEp.js";const b="wicitas",B="wiFrases";let l=[],w=[],n=0,r=null,E=null,F=!0,y=[],k=!1;const D=5,I=10,z=5,sa=t=>t?t[0].toUpperCase()+t.slice(1).toLowerCase():"",p=t=>t?.actualizado?.seconds||t?.creado?.seconds||0,ia=t=>(i,s)=>t==="favoritas"?s.favorito-i.favorito||p(s)-p(i):t==="recientes"?p(s)-p(i):p(i)-p(s),R=t=>[...new Set(t.map(i=>i.categoria).filter(Boolean))].map(i=>({nombre:i,count:t.filter(s=>s.categoria===i).length})).sort((i,s)=>s.count-i.count),A=()=>{const t=y.slice(0,k?y.length:z);a(".categorias_list").html(`<button class="cat_btn active" data-cat="todas"><i class="fas fa-layer-group"></i> Todas <span>(${l.length})</span></button>`+t.map(i=>`<button class="cat_btn" data-cat="${i.nombre}">${i.nombre} <span>(${i.count})</span></button>`).join("")),a(".btn_ver_mas").toggle(y.length>z).html(`<i class="fas fa-chevron-${k?"up":"down"}"></i> ${k?"Menos":"Más"}`)},j=(t,i,s=!1)=>{const c=i<10&&!s?(i*.05).toFixed(2):0,e=!!r?.email&&r.email===t.email;return`
  <div class="phr wi_fadeUp ${s?"visible":""} ${t.favorito?"is_fav":""}" style="--d: ${c}s" data-id="${t.id}">
    ${e?`
    <div class="phr_acciones">
      <button class="phr_btn btn_editar" data-id="${t.id}" ${g("Editar")}><i class="fas fa-pen"></i></button>
      <button class="phr_btn btn_eliminar" data-id="${t.id}" ${g("Eliminar")}><i class="fas fa-trash"></i></button>
    </div>`:""}
    <div class="phr_star ${e?"editable":""} ${t.favorito?"on":""}" data-id="${t.id}" ${g(t.favorito?"Quitar de favoritos":"Marcar como favorita")}>
      <i class="fa${t.favorito?"s":"r"} fa-star"></i>
    </div>
    <div class="phr_content">
      <p class="phr_cita">"${t.cita}"</p>
      <span class="phr_ref">${t.libro}</span>
    </div>
    <div class="phr_footer">
      <span><i class="fas fa-user-circle"></i> ${J(t.nombreShow||t.usuario||"WiiHope")}</span>
      <span><i class="fas fa-calendar-alt"></i> ${new Date(p(t)*1e3).toLocaleDateString()}</span>
    </div>
  </div>`},L=(t=!1)=>{const i=n===0?I:D,s=w.slice(n,n+i).map((c,e)=>j(c,n+e,!1)).join("");t?a("#phrsGrid").append(s):a("#phrsGrid").html(s||'<div class="frases_empty"><i class="fas fa-seedling"></i><p>No se encontraron frases.</p></div>'),n+=i,n<w.length?(a(".load_more_section").show(),a("#btnLoadMore").off("click").on("click",()=>{L(!0),setTimeout(()=>a(".wi_fadeUp:not(.visible)").addClass("visible"),50)})):F?(a(".load_more_section").show(),a("#btnLoadMore").off("click").on("click",function(){u(this,!0)})):a(".load_more_section").hide()},T=(t=!1)=>{const i=a("#citasBusq").val().toLowerCase(),s=a(".cat_btn.active").data("cat")||"todas",c=a("#citasOrden").val()||"recientes";if(w=l.filter(e=>(s==="todas"||e.categoria===s)&&(e.cita.toLowerCase().includes(i)||e.libro.toLowerCase().includes(i))).sort(ia(c)),!t)n=0,L();else{const e=n,m=e+D,d=w.slice(0,m).map((h,v)=>j(h,v,v<e)).join("");a("#phrsGrid").html(d||'<div class="frases_empty"><i class="fas fa-seedling"></i><p>No se encontraron frases.</p></div>'),n=m,n<w.length?(a(".load_more_section").show(),a("#btnLoadMore").off("click").on("click",()=>{L(!0),setTimeout(()=>a(".wi_fadeUp:not(.visible)").addClass("visible"),50)})):F?(a(".load_more_section").show(),a("#btnLoadMore").off("click").on("click",function(){u(this,!0)})):a(".load_more_section").hide()}},ra=()=>`
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
        <button class="citas_add" ${g("Nueva Frase")}><i class="fas fa-plus"></i> Nueva Frase</button>
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
        <button class="citas_sync" id="citasSync" ${g("Sincronizar")}><i class="fas fa-sync-alt"></i></button>
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
`,u=async(t,i=!1)=>{t?S(t,!0):a(".citas_sync").addClass("spinning");try{const s=i?D:I,c=a("#citasOrden").val()||"favoritas";let e=[P(_,b)];if(c==="favoritas"?e.push(C("favorito","desc"),C("creado","desc")):c==="antiguas"?e.push(C("creado","asc")):e.push(C("creado","desc")),i){if(E)e.push(q(E));else if(l.length>0){const o=l[l.length-1];if(o.creado&&o.creado.seconds){const U=new K(o.creado.seconds,o.creado.nanoseconds);c==="favoritas"?e.push(q(o.favorito,U)):e.push(q(U))}}}e.push(Y(s)),i||(l=[],n=0);const m=Z(...e),d=await aa(m);let h=d.docs.map(o=>({id:o.id,...o.data()})).filter(o=>o.publico!==!1||r?.email&&o.email===r.email);const v=new Set(l.map(o=>o.id));h.forEach(o=>{v.has(o.id)||l.push(o)}),E=d.docs.length>0?d.docs[d.docs.length-1]:null,F=d.docs.length===s,X(B+"_"+c,l,720),y=R(l),A(),T(i),setTimeout(()=>a(".wi_fadeUp:not(.visible)").addClass("visible"),50),t&&!i&&f("Actualizado ✓","success",1e3)}catch(s){console.error(s),t&&f("Error al sincronizar","error")}finally{t?S(t,!1):a(".citas_sync").removeClass("spinning")}},la=()=>{if(r=x("wiSmile"),r){const i=`${(r.nombre||"?")[0]}${(r.apellidos||"")[0]||""}`.toUpperCase();a("#citasAvatar").text(i)}else a("#citasAvatar").html('<i class="fas fa-dove"></i>');setTimeout(()=>a(".wi_fadeUp").addClass("visible"),50);const t=()=>{const i=a("#citasOrden").val()||"favoritas",s=x(B+"_"+i);s&&s.length?(l=s,y=R(l),A(),T()):u()};t(),a(document).off(".citas").on("input.citas","#citasBusq",function(){a(".citas_search_clear").toggle(!!a(this).val()),T()}).on("click.citas",".citas_search_clear",function(){a("#citasBusq").val("").trigger("input").focus()}).on("change.citas","#citasOrden",function(){E=null,F=!0,a("#phrsGrid").html('<div class="skc"></div><div class="skc"></div><div class="skc"></div><div class="skc"></div>'),t()}).on("click.citas",".cat_btn",function(){a(".cat_btn").removeClass("active"),a(this).addClass("active"),T(),setTimeout(()=>a(".wi_fadeUp:not(.visible)").addClass("visible"),50)}).on("click.citas",".btn_ver_mas",function(){k=!k,A()}).on("click.citas",".citas_sync",function(){u(this)}).on("click.citas",".citas_add",()=>{if(!r)return H.navigate("/login");a("#fid").val(""),a("#formFrase")[0].reset(),a("#fpub").prop("checked",!0),a("#mdTit").html('<i class="fas fa-plus"></i> Nueva Frase'),G("mdFrase")}).on("click.citas",".btn_editar",function(i){i.stopPropagation();const s=l.find(c=>c.id===a(this).data("id"));if(s){if(r?.email!==s.email)return f("Sin permisos","warning");a("#fid").val(s.id),a("#fcita").val(s.cita),a("#flibro").val(s.libro),a("#fcat").val(s.categoria),a("#ffav").prop("checked",s.favorito),a("#fpub").prop("checked",s.publico!==!1),a("#mdTit").html('<i class="fas fa-pen"></i> Editar Frase'),G("mdFrase")}}).on("click.citas",".btn_eliminar",async function(i){i.stopPropagation();const s=a(this).data("id"),c=l.find(e=>e.id===s);if(!c||r?.email!==c.email)return f("Sin permisos","warning");if(confirm(`¿Eliminar "${c.libro}"?`))try{await Q($(_,b,s)),f("Eliminada ✓","success"),u()}catch{f("Error al eliminar","error")}}).on("click.citas",".phr_star.editable",async function(i){i.stopPropagation();const s=a(this).data("id"),c=l.find(e=>e.id===s);if(!(!c||r?.email!==c.email))try{a(this).toggleClass("on"),await O($(_,b,s),{favorito:!c.favorito,actualizado:M()}),u()}catch{f("Error","error")}}).on("submit.citas","#formFrase",async function(i){i.preventDefault();const s=a("#fid").val(),c=a("#fcita").val().trim(),e=a("#flibro").val().trim(),m=sa(a("#fcat").val().trim()),d=a("#ffav").is(":checked"),h=a("#fpub").is(":checked");if(!c||!e)return;const v={cita:c,libro:e,categoria:m,favorito:d,publico:h,email:r.email,usuario:r.usuario||r.nombre,nombreShow:r.usuario||r.nombre,actualizado:M()};try{S("#fbtn",!0),s?await O($(_,b,s),v):await V($(P(_,b),`cita_${Date.now()}`),{...v,creado:M()}),N(),f(s?"Actualizada ✓":"Guardada ✓","success"),u()}catch(o){console.error(o),f("Error al guardar","error")}finally{S("#fbtn",!1)}}).on("click.citas",".phr",function(i){a(i.target).closest(".phr_btn, .phr_star").length||window.innerWidth<=768&&(a(".phr").not(this).removeClass("show_actions"),a(this).toggleClass("show_actions"))}),console.log(`✅ Citas — ${W} listo`)},na=()=>{a(document).off(".citas")};export{na as cleanup,la as init,ra as render};
