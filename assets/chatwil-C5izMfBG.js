import{S as $,_ as C}from"./index-CaICLHnq.js";import{$ as e}from"./vendor-2D3jvCpt.js";import{version as w}from"./waa-DywimY2S.js";import{SUGERENCIAS as v,detectarTema as y}from"./contexto-Cppy8AFp.js";const P=()=>{const i=v.general,a=$().replace(/, $/,"").toLowerCase();return`
<div class="miia">
  
  <div class="miia_messages_wrap">
    <div class="miia_messages" id="miiaMessages">
      <div class="miia_empty wi_fadeUp visible">
        <div class="miia_welcome_icon">
          <img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img">
          <div class="miia_icon_ring"></div>
        </div>
        <h2 class="miia_welcome_title">ChatWil</h2>
        <p class="miia_welcome_text">
          ${a.charAt(0).toUpperCase()+a.slice(1)} herman@, <strong>bienvenid@ a ChatWil. ¿Cuéntame, cómo te sientes hoy?</strong>
        </p>
        <div class="miia_suggestions">
          ${i.map((s,t)=>`
            <div class="suggestion_card" data-prompt="${s.prompt}" style="animation-delay: ${t*.1}s">
              <i class="fas ${s.ico}"></i><span>${s.txt}</span>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </div>

  <div class="miia_input_area wi_fadeUp visible">
    <div class="miia_input_container">
      <div class="miia_input_wrapper">
        <textarea class="miia_input" id="miiaInput" placeholder="Escribe tu petición aquí..." rows="1"></textarea>
        <button class="miia_send active" id="miiaSend">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
      <div class="miia_input_info">
        <span><i class="fas fa-hands-praying"></i> ChatWil ${w} · <a href="https://chatwiil.web.app/terminos.html" target="_blank">Términos</a></span>
      </div>
    </div>
  </div>

</div>`};let l=!1,x=0,E=null,c=[];const m=()=>({$msg:e("#miiaMessages"),$inp:e("#miiaInput"),$btn:e("#miiaSend")}),r=(i=!1)=>{const a=e(".miia_messages_wrap")[0];a&&(i?a.scrollTo({top:a.scrollHeight,behavior:"smooth"}):a.scrollTop=a.scrollHeight)},S=async()=>E??=await C(()=>import("./brain-CvN6kxK8.js"),[]),b=i=>i.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<strong>$1</strong>"),f=(i,a)=>{const{$msg:n}=m(),s=new Date().toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"}),o=e(`
    <div class="miia_message ${a}" data-time="${s}">
      <div class="message_avatar">${a==="user"?'<i class="fas fa-user-circle"></i>':'<img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img">'}</div>
      <div class="message_content">
        <div class="message_header">
          <span class="message_name">${a==="user"?"Tú":"ChatWil"}</span>
          <span class="message_time">${s}</span>
        </div>
        <div class="message_text"></div>
      </div>
    </div>`);o.find(".message_text").html(b(i)),n.append(o),r()},p=i=>{e(".miia_message.typing").remove(),i&&(e("#miiaMessages").append(`
    <div class="miia_message ai typing">
      <div class="message_avatar"><img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img"></div>
      <div class="message_content">
        <div class="message_text"><div class="typing_dots"><span></span><span></span><span></span></div></div>
      </div>
    </div>`),r())},T=(i,a)=>{const{$msg:n}=m(),s=new Date().toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"}),t=`tw_${Date.now()}_${++x}`;n.append(`
    <div class="miia_message ai" data-time="${s}">
      <div class="message_avatar"><img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img"></div>
      <div class="message_content">
        <div class="message_header">
          <span class="message_name">ChatWil</span>
          <span class="message_time">${s}</span>
        </div>
        <div class="message_text" id="${t}"></div>
      </div>
    </div>`),r();const o=e(`#${t}`),u=Array.from(i);let d=0,_=0;const h=()=>{d<u.length?(o.html(b(u.slice(0,d+1).join(""))),d++,Date.now()-_>100&&(r(),_=Date.now()),setTimeout(h,15)):(o.removeAttr("id"),r(!0),a?.())};h()},W=i=>{e(".miia_contextual_suggestions").remove();const a=v[i]??v.general;if(!a?.length)return;const n=`
    <div class="miia_contextual_suggestions">
      <p class="suggestions_title"><i class="fas fa-hands-praying"></i> ¿En qué más podemos orar?</p>
      <div class="suggestions_grid">
        ${a.map(s=>`
          <div class="suggestion_card_small" data-prompt="${s.prompt}">
            <i class="fas ${s.ico}"></i><span>${s.txt}</span>
          </div>`).join("")}
      </div>
    </div>`;e("#miiaMessages").append(n),r(!0)},g=async()=>{const{$inp:i}=m(),a=i.val().trim();if(!(!a||l)){e(".miia_empty").fadeOut(200,function(){e(this).remove()}),f(a,"user"),i.val("").css("height","auto").trigger("input"),l=!0,p(!0);try{c.push({role:"user",content:a}),await new Promise(t=>setTimeout(t,800+Math.random()*700));let s=await(await S()).procesar(a,c);if(p(!1),!s||typeof s!="string")throw new Error("Respuesta inválida");c.push({role:"assistant",content:s}),T(s,()=>{l=!1;const t=y(a);W(t)})}catch(n){console.error("❌ Error:",n),p(!1),f("😔 Disculpa, tuve un problema. Por favor, intenta de nuevo. 💚","ai"),l=!1}}},k=()=>{const{$inp:i}=m(),a=$().replace(/, $/,"").toLowerCase(),s=`${a.charAt(0).toUpperCase()+a.slice(1)}, me gustaría que ores por mí, por favor.`;i.val(s),i.attr("placeholder","Escribe tu petición aquí..."),e(document).on("input.chatwil","#miiaInput",function(){this.style.height="auto",this.style.height=Math.min(this.scrollHeight,120)+"px";const t=e(this).val().trim().length>0;e("#miiaSend").prop("disabled",!t).toggleClass("active",t)}).on("keydown.chatwil","#miiaInput",t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),g())}).on("click.chatwil","#miiaSend",g).on("click.chatwil",".suggestion_card, .suggestion_card_small",function(){e("#miiaInput").val(e(this).data("prompt")).css("height","auto").trigger("input").focus(),e(this).hasClass("suggestion_card_small")&&setTimeout(g,120)}),console.log(`✅ ChatWil ${w} iniciado`)},L=()=>{e(document).off(".chatwil"),c=[]};export{L as cleanup,k as init,P as render};
