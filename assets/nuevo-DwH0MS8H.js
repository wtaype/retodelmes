import{A as k,l as z,c as f,G as M,M as q,_ as N,s as B,I as w,E as G}from"./index-q-muxlkU.js";import{$ as a}from"./vendor-PbmUQHyn.js";import{db as S}from"./firebase-oqHtqqC9.js";import{h as O,e as T,A as K,u as L,v as U}from"./firebase-BM1KOhEp.js";import{i as J,w as W,C as E,e as Q,d as R}from"./devblog-V8k2W-GN.js";const F=_=>_.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\b(el|la|los|las|de|del|en|un|una|y|a|con|por|para|que|es|se)\b/g," ").replace(/[^a-z0-9\s]/g,"").replace(/\s+/g,"_").replace(/_{2,}/g,"_").replace(/^_|_$/g,"").slice(0,50),A=_=>{const s=_.replace(/<[^>]*>/g," ").split(/\s+/).filter(Boolean);return{words:s.length,min:Math.max(1,Math.ceil(s.length/200))}},V=()=>G.params()?.edit||new URLSearchParams(location.search).get("edit")||null,ea=()=>{const _=k.user?.usuario?k.user:z("wiSmile")||{};if(!_.email)return'<div class="nu_err dpvc"><i class="fas fa-lock"></i><h2>Acceso restringido</h2><p>Inicia sesión para crear historias</p></div>';const s=V();return`
  <div class="nu_wrap">
    <div class="nu_head">
      <div class="nu_head_left"><h1><i class="fas fa-${s?"pen":"pen-fancy"}"></i> ${s?"Editar historia":"Nueva historia"}</h1><p>${s?`Editando: <strong>${s}</strong> ✏️`:""}</p></div>
      <div class="nu_head_right">
        ${s?`<a href="/${s}" class="nu_btn_outline" ${w("Ver post")}><i class="fas fa-eye"></i> Ver</a>`:`<button type="button" id="nu_preview_pg" class="nu_btn_outline" ${w("Preview")}><i class="fas fa-eye"></i> Preview</button>`}
        <button type="submit" form="nu_form" id="nu_submit" class="nu_btn_submit"><i class="fas fa-${s?"save":"paper-plane"}"></i> ${s?"Guardar":"Publicar"}</button>
      </div>
    </div>
    <form id="nu_form" autocomplete="off"><div class="nu_layout">
      <div class="nu_left">
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-heading"></i> Título</div>
          <input id="nu_titulo" type="text" class="nu_titulo_inp" placeholder="Historias que inspiren y con mucho valor" maxlength="100" required/>
          <div class="nu_slug_box">
            <span class="nu_slug_label"><i class="fas fa-link"></i> ${B}</span>
            <input id="nu_slug_inp" type="text" placeholder="mi_historia" maxlength="50" spellcheck="false" ${s?"readonly":""}/>
            ${s?"":`<button type="button" id="nu_slug_reset" class="nu_slug_btn" ${w("Regenerar")}><i class="fas fa-rotate"></i></button>`}
          </div>
          <div id="nu_slug_status" class="nu_slug_status">${s?'<span class="ok"><i class="fas fa-lock"></i> Slug bloqueado (edición)</span>':""}</div>
        </div>
        <div class="nu_grid_seo">
          <div class="nu_card">
            <div class="nu_card_title"><i class="fas fa-align-left"></i> Resumen (Meta Description)</div>
            <textarea id="nu_resumen" rows="3" maxlength="160" placeholder="Describe en pocas palabras..."></textarea>
            <div class="nu_counter"><span id="nu_resumen_cnt">0</span>/160</div>
          </div>
          <div class="nu_card">
            <div class="nu_card_title"><i class="fas fa-search"></i> Palabras Clave (Meta Keywords)</div>
            <textarea id="nu_keywords" rows="3" placeholder="amor, fe, esperanza, wiihope..."></textarea>
            <div class="nu_hint">Separa las palabras con comas. Solo para SEO.</div>
          </div>
        </div>
        <div class="nu_card nu_card_editor">
          <div class="nu_card_title_row">
            <span><i class="fas fa-code"></i> Contenido Markdown</span>
            <div class="nu_editor_tabs">
              <button type="button" class="nu_tab active" data-tab="edit"><i class="fas fa-code"></i> Editor</button>
              <button type="button" class="nu_tab" data-tab="prev"><i class="fas fa-eye"></i> Preview</button>
            </div>
          </div>
          <div class="nu_toolbar" style="flex-wrap:wrap;">${[[["fa-bold","**texto**","Negrita"],["fa-italic","*texto*","Cursiva"],["fa-strikethrough","~~texto~~","Tachado"]],[["fa-heading","## Título H2","Subtítulo (H2)"],["fa-heading","### Título H3","Sección (H3)"]],[["fa-list-ul",`- item
- item2`,"Lista"],["fa-check-square","- [ ] tarea","Checklist"],["fa-quote-right","> cita","Citar"],["fa-minus",`
---
`,"Separador"]],[["fa-code","`código`","Código"],["fa-image","![desc](url)","Imagen"],["fa-link","[texto](url)","Enlace"]]].map((o,C)=>`<div style="display:flex;gap:0.4vh${C<3?";border-right:1px solid var(--brd);padding-right:0.6vh;margin-right:0.2vh":""}">${o.map(([p,P,h])=>`<button type="button" class="nu_tool" data-tag='${P}' ${w(h)}><i class="fas ${p}"></i></button>`).join("")}</div>`).join("")}</div>
          <textarea id="nu_contenido" class="nu_code" rows="18" placeholder="Escribe tu historia en Markdown...

## Un nuevo comienzo

Había una vez..."></textarea>
          <div id="nu_prev_html" class="nu_html_prev dpn po_contenido" style="padding: 1.5vh; border: 1px solid var(--brd); border-radius: 1vh; min-height: 20vh; margin-top: 1vh; background: var(--wb);"></div>
          <div class="nu_content_footer"><span id="nu_palabras" class="nu_hint"><i class="fas fa-font"></i> 0 palabras</span><span id="nu_lectura" class="nu_hint"><i class="fas fa-clock"></i> 1 min</span></div>
        </div>
      </div>
      <div class="nu_right">
        <div class="nu_card nu_card_publish">
          <div class="nu_card_title"><i class="fas fa-rocket"></i> ${s?"Actualizar":"Publicar"}</div>
          <div class="nu_publish_opts">
            <label class="nu_check_l"><input type="checkbox" id="nu_activo" checked/><span><i class="fas fa-globe"></i> Público</span></label>
            <label class="nu_check_l"><input type="checkbox" id="nu_pin"/><span><i class="fas fa-thumbtack"></i> Pin</span></label>
          </div>
          <button type="submit" form="nu_form" class="nu_btn_submit nu_btn_full"><i class="fas fa-${s?"save":"paper-plane"}"></i> ${s?"Guardar cambios":"Publicar"}</button>
        </div>
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-folder"></i> Categoría</div>
          <input id="nu_cat_inp" type="text" placeholder="Ej: Esperanza, Salud..." maxlength="30" required/>
          <div id="nu_cat_sug" class="nu_sug_box"></div>
        </div>
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-tags"></i> Tags</div>
          <input id="nu_tags_inp" type="text" placeholder="Escribe y presiona Enter"/>
          <div id="nu_tag_sug" class="nu_sug_box"></div>
          <div id="nu_tags_box" class="nu_tags_box"></div>
        </div>
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-image"></i> Imágenes</div>
          <div style="display:flex; flex-direction:column; gap:1vh; margin-bottom: 1.5vh;">
            <label style="font-size:var(--fz_s4); color:var(--tx2); font-weight:600;"><i class="fas fa-compress"></i> Miniatura (Inicio-Blog)</label>
            <input id="nu_img" type="url" placeholder="https://... (Sugerido: 334x208px)"/>
            <div id="nu_img_prev" class="nu_img_prev dpn"><img id="nu_img_el" src="" alt=""/><button type="button" id="nu_img_clear" class="nu_img_clear" ${w("Quitar")}><i class="fas fa-xmark"></i></button></div>
          </div>
          <div style="display:flex; flex-direction:column; gap:1vh;">
            <label style="font-size:var(--fz_s4); color:var(--tx2); font-weight:600;"><i class="fas fa-panorama"></i> ImagenTop (Post)</label>
            <input id="nu_img_top" type="url" placeholder="https://... (Sugerido: 1180px425px u horizontal)"/>
            <div id="nu_img_top_prev" class="nu_img_prev dpn"><img id="nu_img_top_el" src="" alt=""/><button type="button" id="nu_img_top_clear" class="nu_img_clear" ${w("Quitar")}><i class="fas fa-xmark"></i></button></div>
          </div>
        </div>
        <div class="nu_card nu_card_autor">
          <div class="nu_card_title"><i class="fas fa-user-pen"></i> Autor</div>
          <div class="nu_autor_info"><div class="nu_autor_av"><i class="fas fa-user-circle"></i></div><div><strong>${_?.nombre||_?.usuario||"Anónimo"}</strong><span>${_?.email||""}</span></div></div>
        </div>
      </div>
    </div></form>
  </div>`},sa=async()=>{if(!(k.user?.usuario?k.user:z("wiSmile")||{}).email)return;const s=V();let o=[],C,p=!!s;const P=()=>F(a("#nu_titulo").val()),h=()=>{const{words:t,min:i}=A(a("#nu_contenido").val());a("#nu_palabras").html(`<i class="fas fa-font"></i> ${t} palabras`),a("#nu_lectura").html(`<i class="fas fa-clock"></i> ${i} min`)},$=()=>a("#nu_tags_box").html(o.map((t,i)=>`<span class="nu_tag_chip">#${t} <i class="fas fa-xmark nu_tag_rm" data-i="${i}"></i></span>`).join("")),H=t=>{if(!t)return"";const n=t.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^\> (.*$)/gim,"<blockquote>$1</blockquote>").replace(/\*\*(.*?)\*\*/gim,"<strong>$1</strong>").replace(/\*(.*?)\*/gim,"<em>$1</em>").replace(/~~(.*?)~~/gim,"<del>$1</del>").replace(/`([^`]+)`/gim,"<code>$1</code>").replace(/!\[(.*?)\]\((.*?)\)/gim,'<img alt="$1" src="$2" />').replace(/\[(.*?)\]\((https:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*?))\)/gim,'<button type="button" class="po_yt_btn" data-yt="$3"><i class="fab fa-youtube" style="color:#fe0149; font-size:1.2em; margin-right:6px;"></i> $1</button>').replace(/\[(.*?)\]\((.*?)\)/gim,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>').replace(/^---/gim,'<hr style="border:none;border-top:1px solid var(--brd);margin:2vh 0"/>').split(`
`),e=[];let l=!1,r=!1;return n.forEach(u=>{const g=u.trim();if(g.startsWith("|")&&g.endsWith("|")){if(r||(e.push('<div class="po_table_wrap"><table>'),r=!0),g.match(/^\|?[\s\-\|:]+\|?$/))return;const c=g.split("|").filter((v,x,m)=>x>0&&x<m.length-1),d=r&&e[e.length-1].includes("<table>")?"th":"td";e.push("<tr>"+c.map(v=>`<${d}>${v.trim()}</${d}>`).join("")+"</tr>");return}else r&&(e.push("</table></div>"),r=!1);const b=u.match(/^[\-\*]\s+(.*)$/);if(b){l||(e.push("<ul>"),l=!0);let c=b[1];c.startsWith("[ ] ")?c='<input type="checkbox" disabled style="margin-right:0.5vh"> '+c.slice(4):c.startsWith("[x] ")&&(c='<input type="checkbox" checked disabled style="margin-right:0.5vh"> '+c.slice(4)),e.push(`<li>${c}</li>`)}else{if(l&&(e.push("</ul>"),l=!1),g==="")return;u.match(/^<(h2|h3|ul|ol|li|blockquote|img|hr|div|table|tr|th|td)/)?e.push(u):e.push(`<p>${u}</p>`)}}),r&&e.push("</table></div>"),l&&e.push("</ul>"),e.join(`
`)},D=p?"wi_draft_edit_"+s:"wi_draft_new",I=()=>{const t={titulo:a("#nu_titulo").val(),slug:a("#nu_slug_inp").val(),resumen:a("#nu_resumen").val(),keywords:a("#nu_keywords").val(),cat:a("#nu_cat_inp").val(),img:a("#nu_img").val(),imgTop:a("#nu_img_top").val(),content:a("#nu_contenido").val(),tags:o};localStorage.setItem(D,JSON.stringify(t))};if(a("#nu_form").on("input","input, textarea",()=>{clearTimeout(window.wiDraftTimer),window.wiDraftTimer=setTimeout(I,1e3)}),(()=>{try{const t=new Set,i=new Set;for(const n of Object.keys(localStorage).filter(e=>e.startsWith("wi_blogs")||e.startsWith("wi_post_"))){const e=z(n);(Array.isArray(e)?e:e?[e]:[]).forEach(r=>{r.categoria&&t.add(r.categoria),r.tags&&Array.isArray(r.tags)&&r.tags.forEach(u=>i.add(u))})}t.size>0&&a("#nu_cat_sug").html(Array.from(t).slice(0,8).map(n=>`<span class="nu_sug_chip cat_sug">${n}</span>`).join("")),i.size>0&&a("#nu_tag_sug").html(Array.from(i).slice(0,12).map(n=>`<span class="nu_sug_chip tag_sug">#${n}</span>`).join(""))}catch{console.warn("No se pudieron cargar sugerencias")}})(),p)try{const t=await J(s,!0);if(!t?.data){f("Post no encontrado","error");return}const i=t.data;a("#nu_titulo").val(i.titulo),a("#nu_slug_inp").val(i.slug||i.id),a("#nu_resumen").val(i.resumen||"").trigger("input"),a("#nu_keywords").val(i.keywords||""),a("#nu_contenido").val(i.contenidoMd||i.contenido||""),a("#nu_img").val(i.imagen||""),a("#nu_img_top").val(i.imagenTop||""),a("#nu_activo").prop("checked",i.activo!==!1),a("#nu_pin").prop("checked",!!i.pin),a("#nu_cat_inp").val(i.categoria||""),o=Array.isArray(i.tags)?[...i.tags]:[],$(),i.imagen&&(a("#nu_img_el").attr("src",i.imagen),a("#nu_img_prev").removeClass("dpn")),i.imagenTop&&(a("#nu_img_top_el").attr("src",i.imagenTop),a("#nu_img_top_prev").removeClass("dpn")),a("#nu_resumen_cnt").text((i.resumen||"").length),h()}catch(t){console.error("edit load:",t),f("Error cargando post","error")}else try{const t=JSON.parse(localStorage.getItem(D));t&&(a("#nu_titulo").val(t.titulo),a("#nu_slug_inp").val(t.slug),a("#nu_resumen").val(t.resumen),a("#nu_keywords").val(t.keywords||""),a("#nu_cat_inp").val(t.cat),a("#nu_img").val(t.img).trigger("input"),a("#nu_img_top").val(t.imgTop).trigger("input"),a("#nu_contenido").val(t.content),t.tags&&(o=t.tags,$()),h())}catch{}a("#nu_form").on("keydown",t=>{t.key==="Enter"&&t.target.tagName!=="TEXTAREA"&&t.preventDefault()}),p||(a("#nu_slug_inp").on("input",function(){a(this).val(a(this).val().replace(/[^a-z0-9_]/gi,t=>t===" "?"_":"").toLowerCase().replace(/_{2,}/g,"_")),a("#nu_slug_status").html('<i class="fas fa-pen"></i> Escribiendo...').removeClass("ok err")}).on("change",async function(){const t=a(this).val(),i=a("#nu_slug_status");if(!t)return i.html("").removeClass("ok err");if(t.length<3)return i.html('<i class="fas fa-exclamation"></i> Muy corto').addClass("err").removeClass("ok");i.html('<i class="fas fa-spinner fa-spin"></i>').removeClass("ok err"),(await O(T(S,E,t)).catch(()=>null))?.exists()?i.html('<i class="fas fa-xmark"></i> Ya existe').addClass("err").removeClass("ok"):i.html('<i class="fas fa-check"></i> OK').addClass("ok").removeClass("err")}),a("#nu_slug_reset").on("click",()=>{a("#nu_slug_inp").val(P()).trigger("input").trigger("change")})),a("#nu_resumen").on("input",function(){a("#nu_resumen_cnt").text(a(this).val().length)}),a("#nu_img").on("input",function(){clearTimeout(C),C=setTimeout(()=>{const t=a(this).val().trim();if(!t)return a("#nu_img_prev").addClass("dpn");a("#nu_img_el").attr("src",t).off("load error").on("load",()=>a("#nu_img_prev").removeClass("dpn")).on("error",()=>a("#nu_img_prev").addClass("dpn"))},600)}),a("#nu_img_clear").on("click",()=>{a("#nu_img").val("").trigger("input"),a("#nu_img_prev").addClass("dpn")});let j;a("#nu_img_top").on("input",function(){clearTimeout(j),j=setTimeout(()=>{const t=a(this).val().trim();if(!t)return a("#nu_img_top_prev").addClass("dpn");a("#nu_img_top_el").attr("src",t).off("load error").on("load",()=>a("#nu_img_top_prev").removeClass("dpn")).on("error",()=>a("#nu_img_top_prev").addClass("dpn"))},600)}),a("#nu_img_top_clear").on("click",()=>{a("#nu_img_top").val("").trigger("input"),a("#nu_img_top_prev").addClass("dpn")}),a("#nu_contenido").on("input",h),a("#nu_tags_inp").on("keydown",function(t){t.key!=="Enter"&&t.key!==","||(t.preventDefault(),a(this).val().toLowerCase().split(",").map(i=>i.trim().replace(/\s+/g,"_")).filter(Boolean).forEach(i=>{!o.includes(i)&&o.length<8&&o.push(i)}),$(),a(this).val(""))}),a(document).on("click.nuevo",".nu_tool",function(){const t=a(this).data("tag"),i=a("#nu_contenido"),n=i[0],e=n.selectionStart,l=n.selectionEnd,r=n.value.substring(e,l)||"texto",u=t.replace("texto",r).replace("cita",r);i.val(n.value.substring(0,e)+u+n.value.substring(l)),n.focus(),n.selectionStart=e,n.selectionEnd=e+u.length,h(),I()}).on("click.nuevo",".nu_tab",function(){const t=a(this).data("tab");a(".nu_tab").removeClass("active"),a(this).addClass("active"),t==="prev"?(a("#nu_prev_html").html(W(H(a("#nu_contenido").val()))).removeClass("dpn"),a("#nu_contenido").addClass("dpn")):(a("#nu_contenido").removeClass("dpn"),a("#nu_prev_html").addClass("dpn"))}).on("click.nuevo",".nu_tag_rm",function(){o.splice(+a(this).data("i"),1),$()}).on("click.nuevo",".cat_sug",function(){a("#nu_cat_inp").val(a(this).text())}).on("click.nuevo",".tag_sug",function(){const t=a(this).text().replace("#","");t&&!o.includes(t)&&o.length<8&&(o.push(t),$())}),a("#nu_form").on("submit",async function(t){t.preventDefault();const i=a("#nu_submit,.nu_btn_full"),n=k.user?.usuario?k.user:z("wiSmile")||{};let e=a("#nu_cat_inp").val().trim();e&&(e=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase());const[l,r,u,g,b,c,y,d]=[a("#nu_titulo").val().trim(),a("#nu_resumen").val().trim(),a("#nu_keywords").val().trim(),e,a("#nu_img").val().trim(),a("#nu_img_top").val().trim(),a("#nu_contenido").val().trim(),a("#nu_slug_inp").val().trim()],v=W(H(y));if(!l||!r||!g||!b||!y)return f("Completa los campos obligatorios","warning");if(y.length<10)return f("Contenido muy corto","warning");if(!d||d.length<3)return f("Slug inválido","warning");if(!p&&a("#nu_slug_status").hasClass("err"))return f("Slug no disponible","error");M(i,!0,p?"Guardando...":"Publicando...");try{const x=`${A(v).min} min`;if(p)await K(T(S,E,s),{activo:a("#nu_activo").is(":checked"),pin:a("#nu_pin").is(":checked"),titulo:l,resumen:r,keywords:u,categoria:g,contenido:v,contenidoMd:y,imagen:b,imagenTop:c,imagenAlt:l,tags:o,tiempoLectura:`${A(v).min} min`,actualizado:L()}),Q(s),R(),q("¡Historia actualizada! 🐾✨","success"),setTimeout(()=>N(()=>import("./index-q-muxlkU.js").then(m=>m.v),[]).then(m=>m.rutas.navigate(`/${s}`)),1200);else{if((await O(T(S,E,d))).exists())return M(i,!1),f("Slug existente","warning");await U(T(S,E,d),{id:d,slug:d,activo:a("#nu_activo").is(":checked"),pin:a("#nu_pin").is(":checked"),usuario:n.usuario,email:n.email,autor:n.nombre||n.usuario,titulo:l,resumen:r,keywords:u,categoria:g,contenido:v,contenidoMd:y,imagen:b,imagenTop:c,imagenAlt:l,tags:o,vistas:0,likes:0,tiempoLectura:`${A(v).min} min`,creado:L(),actualizado:L()}),R(),localStorage.removeItem(D),q("¡Historia publicada! 🐾✨","success"),setTimeout(()=>N(()=>import("./index-q-muxlkU.js").then(m=>m.v),[]).then(m=>m.rutas.navigate(`/${d}`)),1200)}}catch(x){console.error("nuevo:",x),f(p?"Error al guardar":"Error al publicar","error"),M(i,!1)}})},na=()=>{a("#nu_form,#nu_slug_inp,#nu_titulo,#nu_resumen,#nu_img,#nu_contenido").off(),a(document).off(".nuevo")};export{na as cleanup,sa as init,ea as render};
