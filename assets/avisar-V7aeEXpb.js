import{$ as s}from"./vendor-PbmUQHyn.js";import{auth as T,db as _}from"./firebase-DmJttupn.js";import{v as b,e as p,u as C,d as j,r as P,c as L,D as A,n as M,i as z}from"./firebase-BM1KOhEp.js";import{u as B,e as U,S as q,I as f,l as H,c as u}from"./index-DKQikmxs.js";let o=[],w=null,g=null,h=null;const $="wi_notas_cache",E="wi_notas_cache_time",V=100,J=1200,K=300*1e3,S=()=>H("wiSmile")||{},l=a=>{try{localStorage.setItem($,JSON.stringify(a)),localStorage.setItem(E,Date.now().toString())}catch{}},x=()=>{try{return JSON.parse(localStorage.getItem($)||"[]")}catch{return[]}},G=()=>{const a=parseInt(localStorage.getItem(E)||"0");return Date.now()-a<K},R=()=>{localStorage.removeItem($),localStorage.removeItem(E)},y=[{id:"Cielo",hex:"#0EBEFF",bg:"rgba(14,190,255,.12)",tx:"var(--tx)",rgb:"14,190,255"},{id:"Dulce",hex:"#FF5C93",bg:"rgba(255,92,147,.12)",tx:"var(--tx)",rgb:"255,92,147"},{id:"Paz",hex:"#10B981",bg:"rgba(16,185,129,.12)",tx:"var(--tx)",rgb:"16,185,129"},{id:"Mora",hex:"#8B5CF6",bg:"rgba(139,92,246,.12)",tx:"var(--tx)",rgb:"139,92,246"},{id:"Sol",hex:"#F59E0B",bg:"rgba(245,158,11,.12)",tx:"var(--tx)",rgb:"245,158,11"}],O=()=>{const a=S();if(!a.email)return location.replace("/"),"";const t=a.nombre||a.usuario||a.email||T.currentUser?.email||"";return`
  <div class="wn_container">
    <div class="wn_header">
      <div class="wn_info">
        <img src="/smile.avif" alt="${U}" class="wn_avatar" />
        <div class="wn_text">
          <h1><i class="fas fa-sticky-note"></i> Mis Notas</h1>
          <p>${q()} <strong>${t}</strong></p>
        </div>
      </div>
      <div class="wn_actions">
        <button class="wn_btn_new" id="wnNueva" ${f("Nueva nota")}>
          <i class="fas fa-plus"></i> <span>Nueva</span>
        </button>
        <div class="wn_status_wrap">
          <div class="wn_status">
            <span class="wn_dot"></span>
            <span class="wn_dotxt">Cargando...</span>
          </div>
          <button class="wn_btn_sync" id="wnSync" ${f("Sincronizar")}>
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="wn_grid" id="wnGrid">${c(x())}</div>

    <div class="wn_modal" id="wnEliminar">
      <div class="wn_modal_body">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar nota?</h3>
        <p>Esta acción no se puede deshacer</p>
        <div class="wn_modal_acts">
          <button class="wn_cancel" id="wnCancel">Cancelar</button>
          <button class="wn_confirm" id="wnConfirm">Eliminar</button>
        </div>
      </div>
    </div>
  </div>`},I=()=>{D();const a=S();if(!a.email)return B.navigate("/");const t=a.email||T.currentUser?.email;s(document).on("click.wn","#wnNueva",()=>W(t)).on("click.wn","#wnSync",()=>Q(t)).on("click.wn",".wn_card",function(n){s(n.target).closest(".wn_toolbar, .wn_colors").length||X(s(this).data("id"))}).on("input.wn",".wn_titulo, .wn_contenido",function(){Z(s(this).closest(".wn_card").data("id"),t)}).on("click.wn",".wn_pin",function(n){n.stopPropagation(),at(s(this).closest(".wn_card").data("id"))}).on("click.wn",".wn_color",function(n){n.stopPropagation(),s(this).closest(".wn_card").find(".wn_colors").toggleClass("show")}).on("click.wn",".wn_color_opt",function(n){n.stopPropagation();const e=s(this).closest(".wn_card");nt(e.data("id"),s(this).data("color")),e.find(".wn_colors").removeClass("show")}).on("click.wn",".wn_del",function(n){n.stopPropagation(),w=s(this).closest(".wn_card").data("id"),s("#wnEliminar").addClass("show")}).on("click.wn","#wnCancel, #wnEliminar",n=>{s(n.target).is("#wnCancel, #wnEliminar")&&(s("#wnEliminar").removeClass("show"),w=null)}).on("click.wn","#wnConfirm",()=>st()).on("click.wn",n=>{s(n.target).closest(".wn_colors, .wn_color").length||s(".wn_colors").removeClass("show")}),Y(t),h=()=>{!document.hidden&&!G()&&N(t,!0)},document.addEventListener("visibilitychange",h)},Y=a=>{const t=x();t.length&&G()?(o=t,v(),s("#wnGrid").html(c(o)),d(!0,"Cache")):N(a,!1)},Q=async a=>{s("#wnSync").addClass("spinning"),R(),await N(a,!1),s("#wnSync").removeClass("spinning"),u("Sincronizado ✓","success",1500)},N=async(a,t=!1)=>{try{d(!1,"Cargando...");const n=P(L(_,"wiNotas"),A("email","==",a),M(V));o=(await z(n)).docs.map(r=>({id:r.id,...r.data()})),v(),l(o),s("#wnGrid").html(c(o)),d(!0)}catch(n){if(console.error("❌ Notas:",n),d(!1,"Offline"),!t){const e=x();e.length?(o=e,s("#wnGrid").html(c(o)),u("Usando caché local 📦","warning",2e3)):s("#wnGrid").html(F("fa-wifi-slash","Sin conexión","Verifica tu internet"))}}},v=()=>{o.sort((a,t)=>a.pin!==t.pin?t.pin?1:-1:(t.fecha?.seconds||0)-(a.fecha?.seconds||0))},W=async a=>{const t=`nota_${Date.now()}`,{usuario:n="",nombre:e=""}=S(),r={id:t,titulo:"",contenido:"",color:"Cielo",pin:!1,email:a,usuario:e||n||a,fecha:{seconds:Date.now()/1e3}};o.unshift(r),l(o),s("#wnGrid").html(c(o)),setTimeout(()=>{s(`.wn_card[data-id="${t}"]`).addClass("editing").find(".wn_titulo").focus()},50);try{await b(p(_,"wiNotas",t),{...r,fecha:C()}),d(!0),u("Nueva nota ✨","success",1200)}catch(i){console.error("❌",i),o=o.filter(m=>m.id!==t),l(o),s("#wnGrid").html(c(o)),u("Error al crear","error")}},X=a=>{const t=s(`.wn_card[data-id="${a}"]`);s(".wn_card.editing").not(t).removeClass("editing"),t.toggleClass("editing"),t.hasClass("editing")&&t.find(".wn_titulo").focus()},Z=(a,t)=>{clearTimeout(g),g=setTimeout(()=>tt(a,t),J)},tt=async(a,t)=>{const n=s(`.wn_card[data-id="${a}"]`),e=n.find(".wn_titulo").text().trim(),r=n.find(".wn_contenido").text().trim(),i=o.find(m=>m.id===a);if(i&&!(i.titulo===e&&i.contenido===r)){i.titulo=e,i.contenido=r,l(o),n.addClass("saving");try{await b(p(_,"wiNotas",a),{id:a,titulo:e,contenido:r,color:i.color,pin:i.pin,email:t,usuario:i.usuario,fecha:C()}),d(!0),n.removeClass("saving").addClass("saved"),setTimeout(()=>n.removeClass("saved"),800)}catch(m){console.error("❌",m),n.removeClass("saving"),u("Error al guardar","error")}}},at=async(a,t)=>{const n=o.find(e=>e.id===a);if(n){n.pin=!n.pin,v(),l(o),s("#wnGrid").html(c(o));try{await b(p(_,"wiNotas",a),{...n,fecha:C()}),d(!0),u(n.pin?"Fijada 📌":"Desanclada","success",1e3)}catch(e){console.error("❌",e),n.pin=!n.pin,v(),l(o),s("#wnGrid").html(c(o))}}},nt=async(a,t,n)=>{const e=o.find(i=>i.id===a);if(!e||e.color===t)return;const r=e.color;e.color=t,l(o),s("#wnGrid").html(c(o));try{await b(p(_,"wiNotas",a),{...e,fecha:C()}),d(!0)}catch(i){console.error("❌",i),e.color=r,l(o),s("#wnGrid").html(c(o))}},st=async()=>{if(!w)return;const a=w;w=null,s("#wnEliminar").removeClass("show");const t=[...o];o=o.filter(n=>n.id!==a),l(o),s(`.wn_card[data-id="${a}"]`).addClass("deleting"),setTimeout(()=>s("#wnGrid").html(c(o)),250);try{await j(p(_,"wiNotas",a)),u("Eliminada 🗑️","success",1e3)}catch(n){console.error("❌",n),o=t,l(o),s("#wnGrid").html(c(o)),u("Error al eliminar","error")}},d=(a,t)=>{s(".wn_dot").removeClass("active error").addClass(a?"active":"error"),s(".wn_dotxt").text(t||(a?"Online":"Offline"))},ot=a=>y.find(t=>t.id===a)||y[0],et=a=>{if(!a)return"Ahora";const t=a.toDate?.()||new Date((a.seconds||0)*1e3),n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(e.getDate()-1),t>=n?t.toLocaleTimeString("es",{hour:"2-digit",minute:"2-digit"}):t>=e?"Ayer":t.toLocaleDateString("es",{day:"numeric",month:"short"})},c=a=>a?.length?a.map(t=>{const n=ot(t.color);return`
    <div class="wn_card${t.pin?" pinned":""}" data-id="${t.id}" style="--c-bg:${n.bg};--c-tx:${n.tx};--c-accent:${n.hex}">
      <div class="wn_card_inner">
        ${t.pin?'<span class="wn_pin_badge"><i class="fas fa-thumbtack"></i></span>':""}
        <div class="wn_titulo" contenteditable="true" data-placeholder="Título" spellcheck="false">${k(t.titulo)}</div>
        <div class="wn_contenido" contenteditable="true" data-placeholder="Escribe aquí..." spellcheck="false">${k(t.contenido).replace(/\n/g,"<br>")}</div>
        <div class="wn_footer">
          <span class="wn_fecha">${et(t.fecha)}</span>
          <span class="wn_saved"><i class="fas fa-check"></i></span>
        </div>
        <div class="wn_toolbar">
          <button class="wn_pin${t.pin?" active":""}" ${f("Fijar")}><i class="fas fa-thumbtack"></i></button>
          <button class="wn_color" ${f("Color")}><i class="fas fa-palette"></i></button>
          <button class="wn_del" ${f("Eliminar")}><i class="fas fa-trash"></i></button>
        </div>
        <div class="wn_colors">${y.map(e=>`<span class="wn_color_opt${e.id===t.color?" active":""}" data-color="${e.id}" style="--cc:${e.hex}"></span>`).join("")}</div>
      </div>
    </div>`}).join(""):F("fa-sticky-note","Sin notas aún","Crea tu primera nota 👆"),F=(a,t,n)=>`<div class="wn_empty"><i class="fas ${a}"></i><p>${t}</p><span>${n}</span></div>`,k=a=>String(a||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t]),D=()=>{clearTimeout(g),h&&(document.removeEventListener("visibilitychange",h),h=null),s(document).off(".wn"),[o,w,g]=[[],null,null]},dt=Object.freeze(Object.defineProperty({__proto__:null,cleanup:D,init:I,render:O},Symbol.toStringTag,{value:"Module"})),ut=Object.freeze(Object.defineProperty({__proto__:null,cleanup:D,init:I,render:O},Symbol.toStringTag,{value:"Module"}));export{ut as a,dt as n};
