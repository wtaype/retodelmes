import{v as I,w as h,D,d as w,b as M,j as f,G as e,y as E,l as R,I as T,_ as m}from"./index-CGMM99MM.js";import{$ as a}from"./vendor-2D3jvCpt.js";import{i as C,b as z,g,l as L,m as V,k as j,o as y,t as O,a as q,e as B,f as N}from"./devblog-B5oxwYj0.js";import"./firebase-DXGRMKXG.js";import"./firebase-BwR1K4LJ.js";a("#wiad_styles").length||a('<style id="wiad_styles">').text(`
    .wi_ad_link { max-width:300px; }
    .wi_ad_link:hover { opacity:1!important; transform:scale(1.01); }
    .wi_ad_img { margin-block:4vh 2vh; }
  `).appendTo("head");const P=`
  <div class="lc_ad_side lc_ad_r">
    <a href="https://wtaype.me/" target="_blank" class="lc_ad_box wi_ad_link">
      <img src="https://typingwii.web.app/Img1.webp" alt="Ad Right" class="wi_ad_img" />
    </a>
  </div>
`,_=s=>`<a href="/${s.slug||s.id}" class="po_rel_card" ${e(s.resumen||s.titulo)}><div class="po_rel_img"><img src="${s.imagen}" alt="${s.imagenAlt||s.titulo}" loading="lazy"/></div><div class="po_rel_info"><span class="po_rel_cat"><i class="fas fa-paw"></i> ${s.categoria}</span><strong>${s.titulo}</strong><span class="po_rel_meta"><i class="fas fa-calendar"></i> ${y(s.actualizado||s.creado)} · <i class="fas fa-eye"></i> ${s.vistas||0} · <i class="fas fa-heart" style="color:#fe0149"></i> ${s.likes||0}</span></div></a>`,b=(s,i,t="po_fade po_visible")=>s||i?`
    <div class="po_pn_box ${t}" style="--d:.4s">
      ${s?`<a href="/${s.slug||s.id}" class="po_pn_card pn_prev" ${e("Anterior")}><div class="po_pn_img"><img src="${s.imagen}" loading="lazy"/></div><div class="po_pn_info"><span class="po_pn_lb"><i class="fas fa-arrow-left"></i> Anterior</span><strong class="po_pn_tit">${s.titulo}</strong></div></a>`:"<div></div>"}
      ${i?`<a href="/${i.slug||i.id}" class="po_pn_card pn_next" ${e("Siguiente")}><div class="po_pn_info"><span class="po_pn_lb">Siguiente <i class="fas fa-arrow-right"></i></span><strong class="po_pn_tit">${i.titulo}</strong></div><div class="po_pn_img"><img src="${i.imagen}" loading="lazy"/></div></a>`:"<div></div>"}
    </div>`:"",k=(s,i,t,o,n)=>{const v=E.user?.usuario,l=n?"po_fade po_visible":"po_fade",c=i!==null&&t!==null,d=i||[],r=t||[],x=d[0]||r[0],S=d[1]||r[1],A=c?b(x,S,l):'<div id="po_nav_container"></div>';return`
    <div class="po_progress_bar" id="po_progress"></div>
    <div class="po_wrap"><div class="po_layout">
      <div class="po_col_main"><div class="po_content">
        <div class="po_hero ${l}" style="--d:0s">
          <img src="${s.imagenTop||s.imagen}" alt="${s.imagenAlt||s.titulo}" class="po_hero_img" loading="eager"/>
          <div class="po_hero_over">
            <a href="/blog" class="po_back" ${e("Volver")}><i class="fas fa-arrow-left"></i> Blog</a>
            <div class="po_hero_badges">
              <span class="po_cat_badge" ${e(s.categoria)}><i class="fas fa-paw"></i> ${s.categoria}</span>
              ${s.pin?`<span class="po_dest_badge" ${e("Destacada")}><i class="fas fa-thumbtack"></i> Pin</span>`:""}
              <button class="po_like_btn po_like_sync ${localStorage.getItem("wi_like_"+o)?"active":""}" data-slug="${o}" ${e("Me encanta")} style="border-color:rgba(255,255,255,0.2);background:rgba(0,0,0,0.4);color:#fff;padding:.6vh 1.2vh;font-size:var(--fz_s4)"><i class="fas fa-heart"></i> <span class="po_likes_count_text">${s.likes||0}</span></button>
            </div>
          </div>
        </div>
        <header class="po_header ${l}" style="--d:.1s">
          <h1 class="po_titulo">${s.titulo}</h1>
          <p class="po_resumen">${s.resumen}</p>
          <div class="po_meta">
            <span ${e("Autor")}><i class="fas fa-user-pen"></i> ${s.autor}</span>
            <span ${e("Fecha")}><i class="fas fa-calendar"></i> ${y(s.creado,!0)}</span>
            <span ${e("Lectura")}><i class="fas fa-clock"></i> ${s.tiempoLectura}</span>
            <span ${e("Vistas")}><i class="fas fa-eye"></i> ${(s.vistas||0)+1}</span>
            <button class="po_like_btn po_like_sync ${localStorage.getItem("wi_like_"+o)?"active":""}" data-slug="${o}" ${e("Me encanta")}><i class="fas fa-heart"></i> <span class="po_likes_count_text">${s.likes||0}</span></button>
            ${n?`<span class="po_cache_badge" ${e("Cache ⚡")}><i class="fas fa-bolt"></i> Local</span>`:""}
          </div>
        </header>
        <div class="po_contenido ${l}" style="--d:.2s">${s.contenido}</div>
        ${A}
        <div class="po_share ${l}" style="--d:.45s"><span><i class="fas fa-share-nodes"></i> Comparte</span>
          <div class="po_share_btns">
            <button class="po_like_btn po_like_sync ${localStorage.getItem("wi_like_"+o)?"active":""}" data-slug="${o}" ${e("Me encanta")}><i class="fas fa-heart"></i> <span class="po_likes_count_text">${s.likes||0}</span></button>
            ${O(s.titulo)}<button class="po_share_btn po_copy" style="--sc:var(--mco)" ${e("Copiar")}><i class="fas fa-link"></i></button>
          </div>
        </div>
      </div>
      <div id="wi_comments" class="po_comments ${l}" style="--d:.55s"><div class="po_comments_title"><i class="fas fa-comments"></i> Comentarios</div><div id="disqus_thread"></div></div>
    </div>
    <aside class="po_sidebar">
      <div class="po_side_card ${l}" style="--d:.15s">
        <div class="po_side_title"><i class="fas fa-user-pen"></i> Autor</div>
        <div class="po_autor_box"><div class="po_autor_av"><img src="/retodelmes/smile.avif" alt="${s.autor}"/></div><div class="po_autor_info"><strong>${s.autor}</strong><span>${w} <i class="fas ${R}"></i></span></div></div>
        ${v?`<div class="po_admin_actions" style="margin-top:.8vh"><a href="/nuevo?edit=${o}" class="po_admin_btn_edit" ${e("Editar")}><i class="fas fa-pen"></i> Editar</a><button id="po_refresh" class="po_admin_btn_refresh" data-slug="${o}" data-cat="${s.categoria}" ${e("Recargar")}><i class="fas fa-rotate"></i></button></div>`:""}
      </div>
      <div id="po_ultimas_container">${c?r.length?`<div class="po_side_card ${l}" style="--d:.2s"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_relacionados" data-showi="100">${r.map(_).join("")}</div></div>`:"":'<div class="po_side_card po_fade po_visible" style="--d:.2s"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_sk_side shimmer" style="height:120px"></div></div>'}</div>
      <div id="po_rels_container">${c?d.length?`<div class="po_side_card ${l}" style="--d:.25s"><div class="po_side_title"><i class="fas fa-heart"></i> Más historias de ${s.categoria}</div><div class="po_relacionados" data-showi="100">${d.map(_).join("")}</div></div>`:"":`<div class="po_side_card po_fade po_visible" style="--d:.25s"><div class="po_side_title"><i class="fas fa-heart"></i> Más historias de ${s.categoria}</div><div class="po_sk_side shimmer" style="height:120px"></div></div>`}</div>
    
      <!-- AdSense Sticky Sidebar 300x600 con adRight Fallback -->
      <div class="po_ad_sticky ${l}" style="--d:.3s; position: sticky; top: 8vh; margin-top: 2vh; text-align:center; min-height:600px;">
         <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1362457560630815" data-ad-slot="1800353788" data-ad-format="auto" data-full-width-responsive="true"></ins>
         <div class="wi_ad_fallback">${P}</div>
      </div>
    </aside>
  </div></div>`};let p=!1;const K=s=>{const i=s&&f(`wi_post_${s}`);if(i)return p=!0,k(i,f(`wi_mas_${i.categoria}`)||[],f("wi_sidebar_posts")||[],s,!0);p=!1;const t=s&&j(s);return t?`
    <div class="po_wrap"><div class="po_layout"><div class="po_col_main"><div class="po_content">
      <div class="po_hero po_fade po_visible" style="--d:0s"><img src="${t.imagenTop||t.imagen}" alt="${t.imagenAlt||t.titulo}" class="po_hero_img" loading="eager"/><div class="po_hero_over"><a href="/blog" class="po_back" ${e("Volver")}><i class="fas fa-arrow-left"></i> Blog</a><div class="po_hero_badges"><span class="po_cat_badge"><i class="fas fa-paw"></i> ${t.categoria}</span></div></div></div>
      <header class="po_header po_fade po_visible" style="--d:0s"><h1 class="po_titulo">${t.titulo}</h1><p class="po_resumen">${t.resumen}</p></header>
      <div class="po_contenido po_fade" style="--d:.1s; min-height:98vh;"><div class="po_sk_body">${'<div class="po_sk_p shimmer"></div>'.repeat(6)}</div></div>
    </div></div><aside class="po_sidebar" style="min-height:98vh;">${'<div class="po_sk_side shimmer"></div>'.repeat(3)}</aside></div></div>`:`<div class="po_wrap"><div class="po_layout"><div class="po_col_main"><div class="po_content"><div class="po_sk_img shimmer"></div><div class="po_sk_body" style="min-height:98vh;"><div class="po_sk_cat shimmer"></div><div class="po_sk_tit shimmer"></div><div class="po_sk_meta shimmer"></div>${'<div class="po_sk_p shimmer"></div>'.repeat(5)}</div></div></div><aside class="po_sidebar" style="min-height:98vh;">${'<div class="po_sk_side shimmer"></div>'.repeat(3)}</aside></div></div>`},U=async(s,i=!1)=>{if(s){p&&!i&&(g("po_fade"),h(),u(),$());try{const t=await C(s,i);if(!t?.data?.activo)return a("#wimain").html('<div class="po_err dpvc"><i class="fas fa-paw"></i><h2>Historia no encontrada</h2><p>No existe o no está disponible 🐾</p><a href="/blog" class="po_back_btn"><i class="fas fa-arrow-left"></i> Ver historias</a></div>');const{data:o,fromCache:n}=t;!n&&!i&&z(s),I({title:o.titulo,desc:o.resumen,keywords:o.keywords,img:o.imagenTop||o.imagen,path:`/${s}`,type:"Article",datePublished:o.creado}),!p||i?(a("#wimain").html(k(o,null,null,s,n)),g("po_fade"),h(),u(),$()):n||a(".po_cache_badge").remove();const v=(c,d)=>{a("#po_nav_container").html(b(c[0]||d[0],c[1]||d[1])),a("#po_ultimas_container").html(d.length?`<div class="po_side_card po_fade po_visible" style="--d:0s"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_relacionados" data-showi="100">${d.map(_).join("")}</div></div>`:""),a("#po_rels_container").html(c.length?`<div class="po_side_card po_fade po_visible" style="--d:0s"><div class="po_side_title"><i class="fas fa-heart"></i> Más historias de ${o.categoria}</div><div class="po_relacionados" data-showi="100">${c.map(_).join("")}</div></div>`:""),h()};Promise.all([L(s,o.categoria,i),V(s,i)]).then(([c,d])=>{v(c||[],d||[])});const l=function(){this.page.url=`https://wiihope.com/${s}`,this.page.identifier=s,this.page.title=o.titulo};window.DISQUS?window.DISQUS.reset({reload:!0,config:l}):(window.disqus_config=l,D({disqus:[async()=>a("body").append(a("<script>",{src:"https://superwii.disqus.com/embed.js","data-timestamp":+new Date}))]})),console.log(`🐾 ${w} Post OK`),window.__WIREADY__=!0}catch(t){console.error("[post]",t),M("Error al cargar","error")}}};function u(){if(a(".po_toc_box").length)return;const s=a(".po_contenido").find("h2,h3");if(!s.length)return;let i='<div class="po_toc_box po_fade" style="--d:.15s"><div class="po_toc_title"><i class="fas fa-list"></i> En este artículo</div><ul class="po_toc">';s.each((t,o)=>{const n="po_h_"+t;a(o).attr("id",n).css("scroll-margin-top","7vh"),i+=`<li style="margin-left:${o.tagName.toLowerCase()==="h3"?"1.5vh":"0"}"><a href="#${n}" class="po_toc_link">${a(o).text()}</a></li>`}),a(i+"</ul></div>").insertBefore(".po_contenido")}function $(){a(window).off("scroll.post_prog").on("scroll.post_prog",()=>a("#po_progress").css("width",a(window).scrollTop()/Math.max(a(document).height()-a(window).height(),1)*100+"%"))}a(document).on("click.post",".po_copy,.po_copy2",()=>T(location.href,".po_copy","¡Enlace copiado! 🔗")).on("click.post",".po_rel_card",function(s){s.preventDefault(),m(()=>import("./index-CGMM99MM.js").then(i=>i.t),[]).then(i=>i.rutas.navigate(a(this).attr("href")))}).on("click.post",".po_like_sync",function(){const s=a(this).data("slug");localStorage.getItem("wi_like_"+s)||(localStorage.setItem("wi_like_"+s,"1"),a(".po_like_sync").addClass("active"),a(".po_likes_count_text").text((parseInt(a(".po_likes_count_text").first().text())||0)+1),q(s))}).on("click.post",".po_yt_btn",async function(){const s=a(this).data("yt");a("#wi_yt_modal").length||(a("body").append(`
        <div id="wi_yt_modal" class="wiModal">
          <div class="modalBody" style="background:#000; padding:0; border-radius:1.5vh; overflow:hidden; width:95%; max-width:800px; border:1px solid rgba(255,255,255,.1);">
            <button class="modalX wi_yt_close" style="color:#fff; text-shadow:0 0 8px #000; right:1.5vh; top:1vh; font-size:2.2rem; z-index:10;">&times;</button>
            <div id="wi_yt_player" style="width:100%; aspect-ratio:16/9; background:#000;"></div>
          </div>
        </div>`),a("#wi_yt_modal").on("click",function(t){t.target===this&&a(".wi_yt_close").trigger("click")})),a("#wi_yt_player").html(`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${s}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);const{abrirModal:i}=await m(async()=>{const{abrirModal:t}=await import("./index-CGMM99MM.js").then(o=>o.J);return{abrirModal:t}},[]);i("wi_yt_modal")}).on("click.post",".wi_yt_close",async function(){const{cerrarModal:s}=await m(async()=>{const{cerrarModal:i}=await import("./index-CGMM99MM.js").then(t=>t.J);return{cerrarModal:i}},[]);s("wi_yt_modal"),setTimeout(()=>a("#wi_yt_player").html(""),300)}).on("click.post","#po_refresh",async function(){const s=a(this);s.html('<i class="fas fa-spinner fa-spin"></i>').prop("disabled",!0),B(s.data("slug")),N(s.data("cat")),await U(s.data("slug"),!0)});const W=()=>a(window).off("scroll.post_prog");export{W as cleanup,U as init,K as render};
