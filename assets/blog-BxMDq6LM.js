import{b as $,k as y,G as o,j as x,_ as C}from"./index-D2CM3kGN.js";import{$ as s}from"./vendor-2D3jvCpt.js";import{s as w,d as P,p as T,j,n as D,h as N,c as u}from"./devblog-DXYW_EzN.js";import"./firebase-lQbfGFXx.js";import"./firebase-BwR1K4LJ.js";const k=16,B=8,I=[{id:"nuevo",icon:"fa-clock",label:"Recientes"},{id:"vistas",icon:"fa-fire",label:"Populares"}],O=l=>{const c=u(l.categoria);return`
  <a href="/${l.slug||l.id}" class="bl_card">
    <div class="bl_card_img">
      <img src="${l.imagen||"https://placehold.co/600x400?text=📖"}" alt="${l.imagenAlt||l.titulo}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=📖'"/>
      <div class="bl_card_over">
        <span class="bl_card_cat" style="--cc:${c.color}"><i class="fas ${c.icon}"></i> ${l.categoria||"—"}</span>
        ${l.pin?`<span class="bl_card_dest" ${o("Destacada")}><i class="fas fa-thumbtack"></i></span>`:""}
      </div>
    </div>
    <div class="bl_card_body">
      <h2 class="bl_card_tit">${l.titulo}</h2>
      <p class="bl_card_res">${l.resumen||""}</p>
      <div class="bl_card_footer">
        <div class="bl_card_meta">
          <span ${o("Tiempo")}><i class="fas fa-clock"></i> ${l.tiempoLectura||"—"}</span>
          <span ${o("Vistas")}><i class="fas fa-eye"></i> ${l.vistas||0}</span>
          <span ${o("Likes")}><i class="fas fa-heart" style="color:#fe0149"></i> ${l.likes||0}</span>
        </div>
        <span class="bl_card_leer">Leer <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>
  </a>`},M=()=>`
  <div class="bl_wrap">
    <div class="bl_hero" data-herowi="100">
      <h1 class="bl_hero_tit">Historias que <span class="bl_grad">inspiran</span> 🕊️</h1>
      <p class="bl_hero_sub">Reflexiones, fe y palabras que tocan el corazón</p>
    </div>
    <div class="bl_search_bar" id="bl_search_bar" style="display:none">
      <div class="bl_search_inner">
        <i class="fas fa-search bl_search_ico"></i>
        <input id="bl_search_inp" type="text" placeholder="Buscar historias..." autocomplete="off" spellcheck="false"/>
        <button id="bl_search_close" class="bl_search_close"><i class="fas fa-xmark"></i></button>
      </div>
    </div>
    <div class="bl_bar">
      <div class="bl_cats" id="bl_cats"></div>
      <div class="bl_bar_right">
        <div class="bl_orden">${I.map(l=>`<button class="bl_ord_btn ${l.id==="nuevo"?"active":""}" data-ord="${l.id}"><i class="fas ${l.icon}"></i><span>${l.label}</span></button>`).join("")}</div>
        <button class="bl_icon_btn" id="bl_search_toggle" ${o("Buscar")}><i class="fas fa-search"></i></button>
        <button class="bl_icon_btn" id="bl_refresh" ${o("Actualizar")}><i class="fas fa-rotate"></i></button>
      </div>
    </div>
    <div class="bl_result_bar" id="bl_result_bar"></div>
    <div class="bl_grid" id="bl_grid" data-herowi="140"></div>
    <div class="bl_mas_wrap" id="bl_mas_wrap" style="display:none"><button class="bl_mas_btn" id="bl_mas"><i class="fas fa-plus"></i> Ver más</button></div>
    <div class="bl_empty dpvc" id="bl_empty" style="display:none"><i class="fas fa-dove"></i><h3>Sin historias</h3></div>
  </div>`,V=async()=>{let l="todo",c="nuevo",e=[],d=!1,f=null,g=!0,b=!0;const A=a=>C(()=>import("./index-D2CM3kGN.js").then(t=>t.t),[]).then(t=>t.rutas.navigate(a)),p=a=>{const t=[...new Set(a.map(i=>i.categoria).filter(Boolean))].sort();localStorage.setItem("wi_blogs_cats",JSON.stringify(t)),s("#bl_cats").html(`<button class="bl_cat_btn ${l==="todo"?"active":""}" data-cat="todo" style="--cc:var(--mco)"><i class="fas fa-grip"></i><span>Todas</span></button>`+t.map(i=>`<button class="bl_cat_btn ${l===i?"active":""}" data-cat="${i}" style="--cc:${u(i).color}"><i class="fas ${u(i).icon}"></i><span>${i}</span></button>`).join(""))},n=(a,t=[])=>{const i=a||t.length?t:e;if(!i.length&&!a)return s("#bl_empty").show(),s("#bl_mas_wrap").hide(),s("#bl_grid").html("");s("#bl_empty").hide(),s("#bl_grid")[a?"append":"html"](i.map(O).join("")),y(),s("#bl_mas_wrap").toggle(t.length&&t!==e?!1:g)},m=()=>{try{const t=JSON.parse(localStorage.getItem("wi_blogs_cats")||"[]");t.length&&p(t.map(i=>({categoria:i})))}catch{}const a=x(l==="todo"&&c==="nuevo"?"wi_blogs":`wi_blogs_${l}_${c}`);return Array.isArray(a)&&a.length?(e=a.slice(0,k),s("#bl_result_bar").html(`<span><strong>${e.length}</strong> historia${e.length!==1?"s":""}</span><span class="bl_cache_tag" ${o("⚡ Memoria")}><i class="fas fa-bolt"></i> Local</span>`),n(!1,e),b=!1,!0):!1},_=async(a=!1,t=!1)=>{if(d)return;d=!0;const i=t?B:k;t||(s("#bl_empty,#bl_mas_wrap").hide(),f=null);try{const r=await j(l,c,a,f,i);(b||JSON.stringify(t?[]:e)!==JSON.stringify(r.lista))&&(e=t?[...e,...r.lista]:r.lista,p(e),n(t,r.lista)),f=r.lastSnap,g=r.lista.length===i,s("#bl_result_bar").html(`<span><strong>${e.length}</strong> historia${e.length!==1?"s":""}</span>${D(r.fromCache)}`)}catch(r){console.error("[blog]",r),$("Error","error"),!t&&!e.length&&s("#bl_grid .bl_card").length===0&&s("#bl_empty").show()}b=d=!1};let v;const S=a=>{clearTimeout(v),v=setTimeout(async()=>{if(!a.trim())return n(!1),s("#bl_result_bar").html(`<span><strong>${e.length}</strong> historias</span>`);const t=a.toLowerCase();s("#bl_result_bar").html('<span><i class="fas fa-spinner fa-spin"></i> Buscando...</span>');const i=(await N()).filter(r=>[r.titulo,r.resumen,r.categoria,...r.tags||[]].some(L=>L?.toLowerCase().includes(t)));s("#bl_result_bar").html(`<span><i class="fas fa-search"></i> <strong>${i.length}</strong> resultados — "<em>${a}</em>"</span>`),n(!1,i)},400)},h=()=>{b=!0,!m()&&s("#bl_grid .bl_card").length===0&&s("#bl_grid").html(Array(16).fill(w()).join(""))};m()||s("#bl_grid .bl_card").length===0&&s("#bl_grid").html(Array(16).fill(w()).join("")),await _(!1,!1),window.__WIREADY__=!0,s(document).on("click.blog",".bl_cat_btn",function(){const a=s(this).data("cat");a!==l&&(l=a,h(),_())}).on("click.blog",".bl_ord_btn",function(){const a=s(this).data("ord");a!==c&&(c=a,h(),_())}).on("click.blog","#bl_refresh",async function(){s(this).html('<i class="fas fa-spinner fa-spin"></i>').prop("disabled",!0),P(),localStorage.removeItem("wi_blogs_cats"),h(),await _(!0),s(this).html('<i class="fas fa-rotate"></i>').prop("disabled",!1),$("Actualizado ✅","success")}).on("click.blog","#bl_search_toggle",function(){s("#bl_search_bar").stop(!0).slideToggle(180,function(){s(this).is(":visible")?s("#bl_search_inp").focus():(s("#bl_search_inp").val(""),n(!1))})}).on("click.blog","#bl_search_close",()=>{s("#bl_search_bar").slideUp(160),s("#bl_search_inp").val(""),n(!1)}).on("input.blog","#bl_search_inp",function(){S(s(this).val())}).on("click.blog","#bl_mas",function(){const a=s(this),t=a.html();a.html('<i class="fas fa-spinner fa-spin"></i> Cargando...').prop("disabled",!0),_(!1,!0).finally(()=>a.html(t).prop("disabled",!1))}).on("click.blog",".bl_card",function(a){a.preventDefault();const t=s(this).attr("href");t&&A(t)}).on("mouseenter.blog",".bl_card",function(){const a=s(this).attr("href");a&&T(a.substring(1))}),y()},q=()=>s(document).off(".blog");export{q as cleanup,V as init,M as render};
