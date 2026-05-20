import './blog/post.css';
import $ from 'jquery';
import { app, icon } from '../wii.js';
import { rutas } from '../rutas.js';
import { wiAuth, wiVista, Notificacion, wicopy, wiTip, wiSmart, setMeta, showi, getls } from '../widev.js';
import { getPost, getPreview, getRelacionados, getUltimas, addView, addLike, superDate, tplShare, fade, clearPostCache, clearRelCache } from './blog/devblog.js';
import { adRight } from './blog/wiad.js';

const tplRel = r => `<a href="/${r.slug}" class="po_rel_card" ${wiTip(r.resumen||r.titulo)}><div class="po_rel_img"><img src="${r.imagen}" alt="${r.imagenAlt||r.titulo}" loading="lazy"/></div><div class="po_rel_info"><span class="po_rel_cat"><i class="fas fa-paw"></i> ${r.categoria}</span><strong>${r.titulo}</strong><span class="po_rel_meta"><i class="fas fa-clock"></i> ${r.tiempoLectura} · <i class="fas fa-eye"></i> ${r.vistas||0} . <i class="fas fa-heart"></i> ${r.likes||0}</span></div></a>`;

// Función pura para generar el HTML completo del post
const generarHTML = (p, rels, ultimas, slug, isCache) => {
  const isAdmin = wiAuth.user?.usuario;
  const fecha = superDate(p.creado, true);
  const tags = (p.tags||[]).map(t=>`<span class="po_tag">#${t}</span>`).join('');
  const vistas = (p.vistas||0)+1;

  return `
    <div class="po_progress_bar" id="po_progress"></div>
    <div class="po_wrap"><div class="po_layout">
      <div class="po_col_main">
        <div class="po_content">
        <div class="po_hero" data-showi="50">
          <img src="${p.imagenTop || p.imagen}" alt="${p.imagenAlt||p.titulo}" class="po_hero_img" loading="eager"/>
          <div class="po_hero_over">
            <a href="/blog" class="po_back" ${wiTip('Volver')}><i class="fas fa-arrow-left"></i> Blog</a>
            <div class="po_hero_badges">
              <span class="po_cat_badge" ${wiTip(p.categoria)}><i class="fas fa-paw"></i> ${p.categoria}</span>
              ${p.pin?`<span class="po_dest_badge" ${wiTip('Destacada')}><i class="fas fa-thumbtack"></i> Pin</span>`:''}
              <button class="po_like_btn po_like_sync ${localStorage.getItem('wi_like_'+slug)?'active':''}" data-slug="${slug}" ${wiTip('Me encanta')} style="border-color:rgba(255,255,255,0.2); background: rgba(0,0,0,0.4); color: #fff; padding: .6vh 1.2vh; font-size: var(--fz_s4);"><i class="fas fa-heart"></i> <span class="po_likes_count_text">${p.likes||0}</span></button>
            </div>
          </div>
        </div>
        <header class="po_header" data-showi="100">
          <h1 class="po_titulo">${p.titulo}</h1>
          <p class="po_resumen">${p.resumen}</p>
          <div class="po_meta">
            <span ${wiTip('Autor')}><i class="fas fa-user-pen"></i> ${p.autor}</span>
            <span ${wiTip('Fecha')}><i class="fas fa-calendar"></i> ${fecha}</span>
            <span ${wiTip('Lectura')}><i class="fas fa-clock"></i> ${p.tiempoLectura}</span>
            <span ${wiTip('Vistas')}><i class="fas fa-eye"></i> ${vistas}</span>
            <button class="po_like_btn po_like_sync ${localStorage.getItem('wi_like_'+slug)?'active':''}" data-slug="${slug}" ${wiTip('Me encanta')}><i class="fas fa-heart"></i> <span class="po_likes_count_text">${p.likes||0}</span></button>
            ${isCache?`<span class="po_cache_badge" ${wiTip('Cache ⚡')}><i class="fas fa-bolt"></i> Local</span>`:''}
          </div>
        </header>
        <div class="po_contenido" data-showi="150">${p.contenido}</div>
        ${tags?`<div class="po_tags" data-showi="200">${tags}</div>`:''}
        <div class="po_share" data-showi="250">
          <span><i class="fas fa-share-nodes"></i> Comparte</span>
          <div class="po_share_btns">
            <button class="po_like_btn po_like_sync ${localStorage.getItem('wi_like_'+slug)?'active':''}" data-slug="${slug}" ${wiTip('Me encanta')}><i class="fas fa-heart"></i> <span class="po_likes_count_text">${p.likes||0}</span></button>
            ${tplShare(p.titulo)}<button class="po_share_btn po_copy" style="--sc:var(--mco)" ${wiTip('Copiar')}><i class="fas fa-link"></i></button>
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
          <div class="po_autor_box"><div class="po_autor_av"><img src="${import.meta.env.BASE_URL}smile.avif" alt="${p.autor}"/></div><div class="po_autor_info"><strong>${p.autor}</strong><span>${app} <i class="fas ${icon}"></i></span></div></div>
          ${isAdmin?`<div class="po_admin_actions" style="margin-top:.8vh"><a href="/nuevo?edit=${slug}" class="po_admin_btn_edit" ${wiTip('Editar post')}><i class="fas fa-pen"></i> Editar</a><button id="po_refresh" class="po_admin_btn_refresh" data-slug="${slug}" data-cat="${p.categoria}" ${wiTip('Recargar')}><i class="fas fa-rotate"></i></button></div>`:''}
        </div>
        ${ultimas.length?`<div class="po_side_card" data-showi="200"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_relacionados">${ultimas.map(tplRel).join('')}</div></div>`:''}
        ${rels.length?`<div class="po_side_card" data-showi="250"><div class="po_side_title"><i class="fas fa-heart"></i> Te gustará</div><div class="po_relacionados">${rels.map(tplRel).join('')}</div></div>`:''}
      </aside>
    </div></div>`;
};

// ── RENDER (Síncrono) ────────────────────
export const render = () => {
  const slug = 'amar_como_dios_manda_tiempos_dificiles'; // HARDCODED para test en /1lab
  
  // Si tenemos toda la info en caché, retornamos un contenedor vacío porque init() la pintará sincrónicamente
  const fullP = getls(`wi_post_${slug}`);
  const rels = getls(`wi_mas_${slug}`);
  const ultimas = getls('wi_sidebar_posts');
  
  if (fullP && rels && ultimas) {
    return `<div id="po_instant_container"></div>`; // Wrapper temporal para no flashear
  }

  // Si no tenemos caché full, mostramos esqueletos
  const p = getPreview(slug);
  if (p) return `
    <div class="po_wrap"><div class="po_layout">
      <div class="po_col_main">
        <div class="po_content">
          <div class="po_hero po_visible">
          <img src="${p.imagenTop || p.imagen}" alt="${p.imagenAlt||p.titulo}" class="po_hero_img" loading="eager"/>
          <div class="po_hero_over">
            <a href="/blog" class="po_back" ${wiTip('Volver')}><i class="fas fa-arrow-left"></i> Blog</a>
            <div class="po_hero_badges"><span class="po_cat_badge" ${wiTip(p.categoria)}><i class="fas fa-paw"></i> ${p.categoria}</span></div>
          </div>
        </div>
        <header class="po_header po_visible">
          <h1 class="po_titulo">${p.titulo}</h1>
          <p class="po_resumen">${p.resumen}</p>
        </header>
          <div class="po_contenido"><div class="po_sk_body">${'<div class="po_sk_p shimmer"></div>'.repeat(6)}</div></div>
        </div>
      </div>
      <aside class="po_sidebar">${'<div class="po_sk_side shimmer"></div>'.repeat(3)}</aside>
    </div></div>`;

  return `<div class="po_wrap"><div class="po_layout"><div class="po_col_main"><div class="po_content"><div class="po_sk_img shimmer"></div><div class="po_sk_body"><div class="po_sk_cat shimmer"></div><div class="po_sk_tit shimmer"></div><div class="po_sk_tit po_sk_t2 shimmer"></div><div class="po_sk_meta shimmer"></div>${'<div class="po_sk_p shimmer"></div>'.repeat(5)}</div></div></div><aside class="po_sidebar">${'<div class="po_sk_side shimmer"></div>'.repeat(3)}</aside></div></div>`;
};

// ── INIT ──────────────────────────────────────────────────────
export const init = async () => {
  const slug = 'amar_como_dios_manda_tiempos_dificiles';
  let isFirstLoad = true;

  // 1. Render Síncrono si hay caché
  const renderInstantaneo = () => {
    const fullP = getls(`wi_post_${slug}`);
    const rels = getls(`wi_mas_${slug}`);
    const ultimas = getls('wi_sidebar_posts');
    
    if (fullP && rels && ultimas) {
      $('#po_instant_container').replaceWith(generarHTML(fullP, rels, ultimas, slug, true));
      isFirstLoad = false;
      return true;
    }
    return false;
  };
  
  renderInstantaneo();
  showi(); // Animaciones de componentes que entran
  
  // Generar TOC y Scroll (funciones auxiliares síncronas)
  const setupExtras = () => {
    const headings = $('.po_contenido').find('h2, h3');
    if (headings.length > 0 && !$('.po_toc_box').length) {
      let tocHtml = '<div class="po_toc_box" data-showi="180"><div class="po_toc_title"><i class="fas fa-list"></i> En este artículo</div><ul class="po_toc">';
      headings.each((i, el) => {
        const id = 'po_h_' + i;
        $(el).attr('id', id).css('scroll-margin-top', '7vh');
        tocHtml += `<li style="margin-left:${el.tagName.toLowerCase()==='h3'?'1.5vh':'0'}"><a href="#${id}" class="po_toc_link">${$(el).text()}</a></li>`;
      });
      $(tocHtml + '</ul></div>').insertBefore('.po_contenido');
      showi();
    }
    $(window).off('scroll.post_prog').on('scroll.post_prog', () => $('#po_progress').css('width', (($(window).scrollTop() / ($(document).height() - $(window).height())) * 100 || 0) + '%'));
  };

  if (!isFirstLoad) setupExtras();

  try {
    const preview = getPreview(slug);
    const [result, relacionados, ultimas] = await Promise.all([
      getPost(slug, false),
      preview ? getRelacionados(slug, preview.categoria, false) : Promise.resolve([]),
      getUltimas(slug, false)
    ]);

    if (!result?.data?.activo) return $('#wimain').html(`<div class="po_err dpvc"><i class="fas fa-paw"></i><h2>Historia no encontrada</h2><p>No existe o no está disponible 🐾</p><a href="/blog" class="po_back_btn"><i class="fas fa-arrow-left"></i> Ver historias</a></div>`);

    const { data: p, fromCache } = result;
    if (!fromCache) addView(slug);

    const rels = relacionados.length ? relacionados : await getRelacionados(slug, p.categoria, false);
    
    // Si la caché cambió o no había caché, actualizamos el DOM silenciosamente o de golpe
    if (isFirstLoad || JSON.stringify(p.contenido) !== JSON.stringify(getls(`wi_post_${slug}`)?.contenido)) {
       $('#wimain').html(generarHTML(p, rels, ultimas, slug, fromCache));
       setupExtras();
       showi();
    } else if (!fromCache) {
       // Actualización silenciosa de badge cache
       $('.po_cache_badge').remove();
    }

    setMeta({ title: p.titulo, desc: p.resumen, keywords: p.keywords, img: p.imagenTop || p.imagen, path: `/${slug}`, type: 'Article', datePublished: p.creado });
    
    const dCfg = function(){ this.page.url=`https://wiihope.com/${slug}`; this.page.identifier=slug; this.page.title=p.titulo; };
    window.DISQUS ? window.DISQUS.reset({reload:true,config:dCfg}) : (window.disqus_config=dCfg, wiSmart({disqus:[async()=>$('body').append($('<script>',{src:'https://superwii.disqus.com/embed.js','data-timestamp':+new Date()}))]}));

  } catch(e) { console.error('[post]',e); Notificacion('Error al cargar','error'); }
};

export const cleanup = () => $(document).off('.post');
