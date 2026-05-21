import"./wiad-DWbEudQX.js";import{$ as i}from"./vendor-PbmUQHyn.js";import{w as v,j as n,v as w,D as b,b as k,G as o,y,d as S,l as x}from"./index-BQyVSIlW.js";import{k as u,i as A,l as f,m as P,b as C,o as I,t as L}from"./devblog-CFkKKv_r.js";import"./firebase-QWwQUjRS.js";import"./firebase-DzkkQdMV.js";const h=s=>`<a href="/${s.slug}" class="po_rel_card" ${o(s.resumen||s.titulo)}><div class="po_rel_img"><img src="${s.imagen}" alt="${s.imagenAlt||s.titulo}" loading="lazy"/></div><div class="po_rel_info"><span class="po_rel_cat"><i class="fas fa-paw"></i> ${s.categoria}</span><strong>${s.titulo}</strong><span class="po_rel_meta"><i class="fas fa-clock"></i> ${s.tiempoLectura} · <i class="fas fa-eye"></i> ${s.vistas||0} . <i class="fas fa-heart"></i> ${s.likes||0}</span></div></a>`,g=(s,d,_,e,a)=>{const c=y.user?.usuario,l=I(s.creado,!0),r=(s.tags||[]).map(p=>`<span class="po_tag">#${p}</span>`).join(""),t=(s.vistas||0)+1;return`
    <div class="po_progress_bar" id="po_progress"></div>
    <div class="po_wrap"><div class="po_layout">
      <div class="po_col_main">
        <div class="po_content">
        <div class="po_hero" data-showi="50">
          <img src="${s.imagenTop||s.imagen}" alt="${s.imagenAlt||s.titulo}" class="po_hero_img" loading="eager"/>
          <div class="po_hero_over">
            <a href="/blog" class="po_back" ${o("Volver")}><i class="fas fa-arrow-left"></i> Blog</a>
            <div class="po_hero_badges">
              <span class="po_cat_badge" ${o(s.categoria)}><i class="fas fa-paw"></i> ${s.categoria}</span>
              ${s.pin?`<span class="po_dest_badge" ${o("Destacada")}><i class="fas fa-thumbtack"></i> Pin</span>`:""}
              <button class="po_like_btn po_like_sync ${localStorage.getItem("wi_like_"+e)?"active":""}" data-slug="${e}" ${o("Me encanta")} style="border-color:rgba(255,255,255,0.2); background: rgba(0,0,0,0.4); color: #fff; padding: .6vh 1.2vh; font-size: var(--fz_s4);"><i class="fas fa-heart"></i> <span class="po_likes_count_text">${s.likes||0}</span></button>
            </div>
          </div>
        </div>
        <header class="po_header" data-showi="100">
          <h1 class="po_titulo">${s.titulo}</h1>
          <p class="po_resumen">${s.resumen}</p>
          <div class="po_meta">
            <span ${o("Autor")}><i class="fas fa-user-pen"></i> ${s.autor}</span>
            <span ${o("Fecha")}><i class="fas fa-calendar"></i> ${l}</span>
            <span ${o("Lectura")}><i class="fas fa-clock"></i> ${s.tiempoLectura}</span>
            <span ${o("Vistas")}><i class="fas fa-eye"></i> ${t}</span>
            <button class="po_like_btn po_like_sync ${localStorage.getItem("wi_like_"+e)?"active":""}" data-slug="${e}" ${o("Me encanta")}><i class="fas fa-heart"></i> <span class="po_likes_count_text">${s.likes||0}</span></button>
            ${a?`<span class="po_cache_badge" ${o("Cache ⚡")}><i class="fas fa-bolt"></i> Local</span>`:""}
          </div>
        </header>
        <div class="po_contenido" data-showi="150">${s.contenido}</div>
        ${r?`<div class="po_tags" data-showi="200">${r}</div>`:""}
        <div class="po_share" data-showi="250">
          <span><i class="fas fa-share-nodes"></i> Comparte</span>
          <div class="po_share_btns">
            <button class="po_like_btn po_like_sync ${localStorage.getItem("wi_like_"+e)?"active":""}" data-slug="${e}" ${o("Me encanta")}><i class="fas fa-heart"></i> <span class="po_likes_count_text">${s.likes||0}</span></button>
            ${L(s.titulo)}<button class="po_share_btn po_copy" style="--sc:var(--mco)" ${o("Copiar")}><i class="fas fa-link"></i></button>
          </div>
        </div>
      </div>
      
      <div id="wi_comments" class="po_comments" data-showi="300">
        <div class="po_comments_title"><i class="fas fa-comments"></i> Comentarios</div>
        <div id="disqus_thread"></div>
      </div>
    </div>

    <aside class="po_sidebar">
        <div class="po_side_card" data-showi="150">
          <div class="po_side_title"><i class="fas fa-user-pen"></i> Autor</div>
          <div class="po_autor_box"><div class="po_autor_av"><img src="/retodelmes/smile.avif" alt="${s.autor}"/></div><div class="po_autor_info"><strong>${s.autor}</strong><span>${S} <i class="fas ${x}"></i></span></div></div>
          ${c?`<div class="po_admin_actions" style="margin-top:.8vh"><a href="/nuevo?edit=${e}" class="po_admin_btn_edit" ${o("Editar post")}><i class="fas fa-pen"></i> Editar</a><button id="po_refresh" class="po_admin_btn_refresh" data-slug="${e}" data-cat="${s.categoria}" ${o("Recargar")}><i class="fas fa-rotate"></i></button></div>`:""}
        </div>
        ${_.length?`<div class="po_side_card" data-showi="200"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_relacionados">${_.map(h).join("")}</div></div>`:""}
        ${d.length?`<div class="po_side_card" data-showi="250"><div class="po_side_title"><i class="fas fa-heart"></i> Te gustará</div><div class="po_relacionados">${d.map(h).join("")}</div></div>`:""}
      </aside>
    </div></div>`},V=()=>{const s="amar_como_dios_manda_tiempos_dificiles",d=n(`wi_post_${s}`),_=n(`wi_mas_${s}`),e=n("wi_sidebar_posts");if(d&&_&&e)return'<div id="po_instant_container"></div>';const a=u(s);return a?`
    <div class="po_wrap"><div class="po_layout">
      <div class="po_col_main">
        <div class="po_content">
          <div class="po_hero po_visible">
          <img src="${a.imagenTop||a.imagen}" alt="${a.imagenAlt||a.titulo}" class="po_hero_img" loading="eager"/>
          <div class="po_hero_over">
            <a href="/blog" class="po_back" ${o("Volver")}><i class="fas fa-arrow-left"></i> Blog</a>
            <div class="po_hero_badges"><span class="po_cat_badge" ${o(a.categoria)}><i class="fas fa-paw"></i> ${a.categoria}</span></div>
          </div>
        </div>
        <header class="po_header po_visible">
          <h1 class="po_titulo">${a.titulo}</h1>
          <p class="po_resumen">${a.resumen}</p>
        </header>
          <div class="po_contenido"><div class="po_sk_body">${'<div class="po_sk_p shimmer"></div>'.repeat(6)}</div></div>
        </div>
      </div>
      <aside class="po_sidebar">${'<div class="po_sk_side shimmer"></div>'.repeat(3)}</aside>
    </div></div>`:`<div class="po_wrap"><div class="po_layout"><div class="po_col_main"><div class="po_content"><div class="po_sk_img shimmer"></div><div class="po_sk_body"><div class="po_sk_cat shimmer"></div><div class="po_sk_tit shimmer"></div><div class="po_sk_tit po_sk_t2 shimmer"></div><div class="po_sk_meta shimmer"></div>${'<div class="po_sk_p shimmer"></div>'.repeat(5)}</div></div></div><aside class="po_sidebar">${'<div class="po_sk_side shimmer"></div>'.repeat(3)}</aside></div></div>`},q=async()=>{const s="amar_como_dios_manda_tiempos_dificiles";let d=!0;(()=>{const a=n(`wi_post_${s}`),c=n(`wi_mas_${s}`),l=n("wi_sidebar_posts");return a&&c&&l?(i("#po_instant_container").replaceWith(g(a,c,l,s,!0)),d=!1,!0):!1})(),v();const e=()=>{const a=i(".po_contenido").find("h2, h3");if(a.length>0&&!i(".po_toc_box").length){let c='<div class="po_toc_box" data-showi="180"><div class="po_toc_title"><i class="fas fa-list"></i> En este artículo</div><ul class="po_toc">';a.each((l,r)=>{const t="po_h_"+l;i(r).attr("id",t).css("scroll-margin-top","7vh"),c+=`<li style="margin-left:${r.tagName.toLowerCase()==="h3"?"1.5vh":"0"}"><a href="#${t}" class="po_toc_link">${i(r).text()}</a></li>`}),i(c+"</ul></div>").insertBefore(".po_contenido"),v()}i(window).off("scroll.post_prog").on("scroll.post_prog",()=>i("#po_progress").css("width",(i(window).scrollTop()/(i(document).height()-i(window).height())*100||0)+"%"))};d||e();try{const a=u(s),[c,l,r]=await Promise.all([A(s,!1),a?f(s,a.categoria,!1):Promise.resolve([]),P(s,!1)]);if(!c?.data?.activo)return i("#wimain").html('<div class="po_err dpvc"><i class="fas fa-paw"></i><h2>Historia no encontrada</h2><p>No existe o no está disponible 🐾</p><a href="/blog" class="po_back_btn"><i class="fas fa-arrow-left"></i> Ver historias</a></div>');const{data:t,fromCache:p}=c;p||C(s);const $=l.length?l:await f(s,t.categoria,!1);d||JSON.stringify(t.contenido)!==JSON.stringify(n(`wi_post_${s}`)?.contenido)?(i("#wimain").html(g(t,$,r,s,p)),e(),v()):p||i(".po_cache_badge").remove(),w({title:t.titulo,desc:t.resumen,keywords:t.keywords,img:t.imagenTop||t.imagen,path:`/${s}`,type:"Article",datePublished:t.creado});const m=function(){this.page.url=`https://wiihope.com/${s}`,this.page.identifier=s,this.page.title=t.titulo};window.DISQUS?window.DISQUS.reset({reload:!0,config:m}):(window.disqus_config=m,b({disqus:[async()=>i("body").append(i("<script>",{src:"https://superwii.disqus.com/embed.js","data-timestamp":+new Date}))]}))}catch(a){console.error("[post]",a),k("Error al cargar","error")}},z=()=>i(document).off(".post");export{z as cleanup,q as init,V as render};
