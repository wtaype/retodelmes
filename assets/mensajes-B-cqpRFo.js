import{$ as t}from"./vendor-PbmUQHyn.js";import{auth as E,db as _}from"./firebase-DDX1bF82.js";import{v as I,e as y,d as L,r as T,c as H,D as M,n as N,i as q,u as A}from"./firebase-BM1KOhEp.js";import{u as O,K as J,e as K,S as U,I as p,l as V,c as w}from"./index-B3suI07f.js";let i=[],l=null,u=!1,v=null,m=null;const $="wi_mensajes_cache",B=50,g=()=>V("wiSmile")||{},d=e=>{try{localStorage.setItem($,JSON.stringify(e))}catch{}},D=()=>{try{return JSON.parse(localStorage.getItem($)||"[]")}catch{return[]}},C=()=>{const e=document.getElementById("wmChat");e&&requestAnimationFrame(()=>e.scrollTop=e.scrollHeight)},Z=()=>{const e=g();if(!e.email)return location.replace("/"),"";const s=e.nombre||e.usuario||e.email||E.currentUser?.email||"";return`
  <div class="wm_container">
    <div class="wm_header">
      <div class="wm_info">
        <img src="/smile.avif" alt="${K}" class="wm_avatar" />
        <div class="wm_text">
          <h1>Mis Mensajes</h1>
          <p>${U()} <strong>${s}</strong></p>
        </div>
      </div>
      <div class="wm_status">
        <span class="wm_dot"></span>
        <span class="wm_dotxt">Conectando...</span>
      </div>
    </div>

    <div class="wm_chat" id="wmChat">${r(D())}</div>

    <div class="wm_input">
      <div class="wm_wrap">
        <textarea id="wmNuevo" placeholder="Escribe un mensaje." rows="1" maxlength="500"></textarea>
        <span class="wm_count" id="wmCount">0/500</span>
      </div>
      <button id="wmEnviar" disabled ${p("Enviar · Enter")}><i class="fas fa-paper-plane"></i></button>
    </div>

    <div class="wm_modal" id="wmEliminar">
      <div class="wm_modal_body">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar mensaje?</h3>
        <p>Esta acción no se puede deshacer</p>
        <div class="wm_modal_acts">
          <button class="wm_cancel" id="wmCancel">Cancelar</button>
          <button class="wm_confirm" id="wmConfirm">Eliminar</button>
        </div>
      </div>
    </div>
  </div>`},ee=()=>{Q();const e=g();if(!e.email)return O.navigate("/");const s=e.email||E.currentUser?.email;t(document).on("input.wm","#wmNuevo",function(){t("#wmCount").text(`${t(this).val().length}/500`),t("#wmEnviar").prop("disabled",!t(this).val().trim()),t(this).css("height","auto").css("height",Math.min(this.scrollHeight,150)+"px")}).on("keydown.wm","#wmNuevo",a=>{a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),b(s))}).on("click.wm","#wmEnviar",()=>b(s)).on("click.wm",".wm_item",function(a){if(t(a.target).closest(".wm_del").length)return;const n=i.find(o=>o.id===t(this).data("id"));n&&(J(n.mensaje,this,'¡Copiado! <i class="fas fa-check-circle"></i>'),t(this).addClass("copied"),setTimeout(()=>t(this).removeClass("copied"),800))}).on("click.wm",".wm_del",function(a){a.stopPropagation(),l=t(this).data("id"),t("#wmEliminar").addClass("show")}).on("click.wm","#wmCancel, #wmEliminar",a=>{t(a.target).is("#wmCancel, #wmEliminar")&&(t("#wmEliminar").removeClass("show"),l=null)}).on("click.wm","#wmConfirm",F),h(s,!0),v=setInterval(()=>!document.hidden&&h(s,!0),3e4),m=()=>{!document.hidden&&h(s,!0)},document.addEventListener("visibilitychange",m),C()},h=async(e,s=!1)=>{try{const a=T(H(_,"wiMensajes"),M("email","==",e),N(B));i=(await q(a)).docs.map(o=>({id:o.id,...o.data()})).sort((o,c)=>(o.fecha?.seconds||0)-(c.fecha?.seconds||0)),d(i),t("#wmChat").html(r(i)),f(!0),C()}catch(a){if(console.error("❌",a),f(!1),!s){const n=D();n.length?(i=n,t("#wmChat").html(r(i)),w("Caché local 📦","warning",2e3)):t("#wmChat").html(j("fa-wifi-slash","Sin conexión","Verifica tu internet"))}}},b=e=>{if(u)return;const s=t("#wmNuevo"),a=s.val().trim();if(!a)return;u=!0;const{usuario:n="",nombre:o=""}=g(),c=`m${Date.now()}`,x={id:c,mensaje:a,email:e,usuario:o||n||e,fecha:{seconds:Date.now()/1e3}};i.push(x),d(i),t("#wmChat").html(r(i)),C(),s.val("").css("height","auto").trigger("focus"),t("#wmCount").text("0/500"),t("#wmEnviar").prop("disabled",!0),I(y(_,"wiMensajes",c),{id:c,mensaje:a,email:e,usuario:o||n||e,fecha:A()}).then(()=>{f(!0)}).catch(k=>{console.error("❌",k),i=i.filter(S=>S.id!==c),d(i),t("#wmChat").html(r(i)),w("Error al guardar","error")}).finally(()=>{u=!1})},F=()=>{if(!l)return;const e=l;l=null,t("#wmEliminar").removeClass("show");const s=[...i];i=i.filter(a=>a.id!==e),d(i),t(`.wm_item[data-id="${e}"]`).addClass("deleting"),setTimeout(()=>{t("#wmChat").html(r(i))},250),L(y(_,"wiMensajes",e)).then(()=>w("Eliminado 🗑️","success",1200)).catch(a=>{console.error("❌",a),i=s,d(i),t("#wmChat").html(r(i)),w("Error al eliminar","error")})},f=e=>{t(".wm_dot").removeClass("active error").addClass(e?"active":"error"),t(".wm_dotxt").text(e?"Online":"Offline")},P=e=>{if(!e)return"Hoy";const s=e.toDate?.()||new Date((e.seconds||0)*1e3),a=new Date,n=new Date(a);return a.setHours(0,0,0,0),n.setDate(n.getDate()-1),n.setHours(0,0,0,0),s>=a?"Hoy":s>=n?"Ayer":s.toLocaleDateString("es",{day:"numeric",month:"long"})},z=e=>e?(e.toDate?.()||new Date((e.seconds||0)*1e3)).toLocaleTimeString("es",{hour:"2-digit",minute:"2-digit"}):"Ahora",r=e=>{if(!e?.length)return j("fa-comment-dots","Sin mensajes aún","Escribe tu primer mensaje 👇");let s="";return e.map(a=>{const n=P(a.fecha),o=n!==s?`<div class="wm_sep"><span>${n}</span></div>`:"";return s=n,`${o}<div class="wm_item" data-id="${a.id}" ${p("Click para copiar")}>
      <div class="wm_bubble">
        <p class="wm_txt">${G(a.mensaje).replace(/\n/g,"<br>")}</p>
        <div class="wm_foot"><span class="wm_time">${z(a.fecha)}</span><i class="fas fa-check-double wm_check"></i></div>
      </div>
      <button class="wm_del" data-id="${a.id}" ${p("Eliminar")}><i class="fas fa-trash"></i></button>
    </div>`}).join("")},j=(e,s,a)=>`<div class="wm_empty"><i class="fas ${e}"></i><p>${s}</p><span>${a}</span></div>`,G=e=>String(e||"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[s]),Q=()=>{clearInterval(v),v=null,m&&(document.removeEventListener("visibilitychange",m),m=null),t(document).off(".wm"),[i,l,u]=[[],null,!1]};export{Q as cleanup,ee as init,Z as render};
