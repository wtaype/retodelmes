const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-DZ1HMeIo.css"])))=>i.map(i=>d[i]);
import{M as r,j as v,s as d,_ as m}from"./index-BMe1Kusn.js";import{$ as a}from"./vendor-2D3jvCpt.js";import{db as h,auth as f}from"./firebase-BDkoVxkB.js";import{h as A,e as b,o as I,v as S,u as _}from"./firebase-BwR1K4LJ.js";const E=()=>new Promise(i=>{if(f.currentUser)return i(f.currentUser);const e=I(f,t=>{e(),i(t)})}),w="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",D=i=>{let e=0,t=0;const o=[];for(const l of i.replace(/=+$/,"").toUpperCase())t=t<<5|w.indexOf(l),e+=5,e>=8&&(o.push(t>>>e-8&255),e-=8);return new Uint8Array(o)},M=()=>{const i=crypto.getRandomValues(new Uint8Array(20));return Array.from(i,e=>w[e&31]).join("")},T=async(i,e=0)=>{const t=Math.floor(Date.now()/3e4)+e,o=new ArrayBuffer(8);new DataView(o).setUint32(4,t,!1);const l=await crypto.subtle.importKey("raw",D(i),{name:"HMAC",hash:"SHA-1"},!1,["sign"]),n=new Uint8Array(await crypto.subtle.sign("HMAC",l,o)),c=n[19]&15;return(((n[c]&127)<<24|n[c+1]<<16|n[c+2]<<8|n[c+3])%1e6).toString().padStart(6,"0")},y=async(i,e)=>{for(const t of[-1,0,1])if(await T(e,t)===i)return!0;return!1},L=i=>{const e=v("wiSmile");return!i||!e?(d.navigate("/login"),!1):e.rol!=="admin"?(d.navigate("/"),!1):e.estado!=="activo"?(d.navigate("/registrado"),!1):sessionStorage.getItem("vault_unlocked")==="true"?(d.navigate("/admin"),!1):e},B=`
  <svg viewBox="0 0 100 100" class="vault_svg_logo" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g_glow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#4285F4"/>
        <stop offset="33%" stop-color="#EA4335"/>
        <stop offset="66%" stop-color="#FBBC05"/>
        <stop offset="100%" stop-color="#34A853"/>
      </linearGradient>
    </defs>
    <!-- Glowing ring -->
    <circle cx="50" cy="50" r="46" fill="none" stroke="url(#g_glow)" stroke-width="3" opacity="0.3" class="vault_glow_ring"/>
    <!-- Outer white dial with shadow -->
    <circle cx="50" cy="50" r="38" fill="var(--wb, #fff)" style="filter: drop-shadow(0px 8px 16px rgba(0,0,0,0.12))"/>
    
    <!-- Google Colors Dial segments -->
    <path d="M 50,18 A 32,32 0 0,1 82,50 L 50,50 Z" fill="#4285F4"/>
    <path d="M 82,50 A 32,32 0 0,1 50,82 L 50,50 Z" fill="#EA4335"/>
    <path d="M 50,82 A 32,32 0 0,1 18,50 L 50,50 Z" fill="#FBBC05"/>
    <path d="M 18,50 A 32,32 0 0,1 50,18 L 50,50 Z" fill="#34A853"/>
    
    <!-- White center hub with a lock keyhole -->
    <circle cx="50" cy="50" r="16" fill="var(--wb, #fff)"/>
    <circle cx="50" cy="46" r="4.5" fill="#1e293b"/>
    <path d="M 47.5,46 L 52.5,46 L 54,58 L 46,58 Z" fill="#1e293b"/>
  </svg>
`,U=`
  <div class="vault_badge">Admin</div>
  <h1 class="vault_title">Configura tu Bóveda</h1>
  <p class="vault_subtitle">Escanea este código QR con <strong>Google Authenticator</strong> para proteger el panel de administración.</p>

  <div id="vault_qr_wrap" class="vault_qr_wrap">
    <canvas id="vault_qr"></canvas>
    <div class="vault_qr_shine"></div>
  </div>
  <p class="vault_qr_hint"><i class="fas fa-info-circle"></i> Abre Google Authenticator → Añadir cuenta → Escanear QR</p>

  <div class="vault_auth_box" style="margin-top:1.5rem">
    <label>Ingresa el código de 6 dígitos para confirmar</label>
    <div class="vault_input_wrap">
      <i class="fas fa-th"></i>
      <input type="text" id="vault_code_setup" placeholder="000000" maxlength="6" autocomplete="off" inputmode="numeric" />
    </div>
    <button id="btn_vault_confirmar" class="vault_btn_primary" disabled>
      <i class="fas fa-lock"></i> Confirmar y Cerrar Puerta
    </button>
  </div>
`,G=`
  <h1 class="vault_title">Verificar que eres tú</h1>
  <p class="vault_subtitle">Abre <strong>Google Authenticator</strong> en tu celular e ingresa el código de 6 dígitos.</p>

  <div class="vault_auth_box">
    <div class="vault_input_wrap vault_input_lg">
      <i class="fas fa-th"></i>
      <input type="text" id="vault_code" placeholder="000000" maxlength="6"
             autocomplete="off" inputmode="numeric" autofocus />
    </div>
    <button id="btn_code" class="vault_btn_primary">
      <i class="fas fa-unlock"></i> Verificar y Entrar
    </button>
  </div>

  <button id="btn_vault_back" class="vault_btn_back">
    <i class="fas fa-arrow-left"></i> Volver al inicio
  </button>
`;let u=null,g=!1,s=null;const $=60;function P(){s&&clearInterval(s);let i=localStorage.getItem("vault_expire");i||(i=Date.now()+$*1e3,localStorage.setItem("vault_expire",i));const e=()=>Math.max(0,Math.ceil((parseInt(i)-Date.now())/1e3));let t=e();a("#vault_timer").text(`${t}s`);const o=async()=>{if(t=e(),a("#vault_timer").text(`${t}s`),t<=0){s&&clearInterval(s),s=null,localStorage.removeItem("vault_expire"),r("Sesión cerrada por inactividad","error");const{salir:l}=await m(async()=>{const{salir:n}=await import("./login-RXzWOiGJ.js");return{salir:n}},__vite__mapDeps([0]));await l()}};o(),t>0&&(s=setInterval(o,1e3))}const K=()=>{const i=v("wiSmile");return!i||i.rol!=="admin"?"":`
    <div class="vault_wrap">
      <div class="vault_card" id="vault_card_container">
        <div class="vault_timer_band">
          <i class="fas fa-clock fa-spin"></i> Cierre de seguridad en <strong id="vault_timer">60s</strong>
        </div>
        <div class="vault_logo_wrapper">
          ${B}
        </div>
        <div id="vault_content_area" style="text-align:center;padding:1rem 0">
          <i class="fas fa-spinner fa-spin fa-2x" style="color:var(--tx3,#aaa)"></i>
          <p style="margin-top:1rem;color:var(--tx2)">Cargando Autenticación...</p>
        </div>
      </div>
    </div>
  `},N=async()=>{a("body").addClass("is-vault-locked"),P(),a(document).off(".vault_shield"),a(document).on("click.vault_shield","a, [href], .nv_item",function(t){if(a("body").hasClass("is-vault-locked")){const o=a(this);if(o.attr("id")==="btn_vault_back"||o.closest("#btn_vault_back").length)return;t.preventDefault(),t.stopPropagation(),r('<i class="fas fa-exclamation-triangle"></i> Identidad no verificada. Completa el 2FA primero.',"warning")}}),a(document).on("contextmenu.vault_shield",function(t){a("body").hasClass("is-vault-locked")&&(t.preventDefault(),r('<i class="fas fa-eye-slash"></i> Clic derecho inhabilitado por seguridad.',"warning"))}),a(document).on("copy.vault_shield cut.vault_shield paste.vault_shield","input, body",function(t){a("body").hasClass("is-vault-locked")&&(t.preventDefault(),r('<i class="fas fa-key"></i> Copiar y pegar inhabilitado en esta boveda.',"warning"))}),a(document).on("keydown.vault_shield",function(t){if(a("body").hasClass("is-vault-locked")){if(t.keyCode===123)return t.preventDefault(),r('<i class="fas fa-shield-alt"></i> DevTools bloqueado por seguridad.',"error"),!1;if(t.ctrlKey||t.metaKey){const o=String.fromCharCode(t.keyCode).toLowerCase();if(o==="u"||o==="s"||o==="p"||t.shiftKey&&(o==="i"||o==="j"||o==="c"))return t.preventDefault(),r('<i class="fas fa-shield-alt"></i> Combinación de teclas restringida en esta zona.',"error"),!1}}});const i=await E(),e=L(i);if(e)try{const t=await A(b(h,"configwii",e.usuario)),o=t.exists()?t.data():null;o?.configurado&&o?.secret?(g=!1,u=o.secret,a("#vault_card_container").removeClass("vault_card_setup"),a("#vault_content_area").html(G),q(e)):(g=!0,a("#vault_card_container").addClass("vault_card_setup"),a("#vault_content_area").html(U),await R(e))}catch(t){console.error("[verificar] init:",t),r("Error al cargar la bóveda","error")}};async function R(i){const e=await m(()=>import("./vendor-2D3jvCpt.js").then(c=>c.b),[]);u=M();const t="RetoDelMes",o=v("wiSmile"),l=encodeURIComponent(o?.usuario||i.usuario),n=`otpauth://totp/${t}:${l}?secret=${u}&issuer=${t}&algorithm=SHA1&digits=6&period=30`;await e.toCanvas(document.getElementById("vault_qr"),n,{width:200,margin:2,color:{dark:"#0f172a",light:"#ffffff"}}),a(document).on("input.vault","#vault_code_setup",function(){this.value=this.value.replace(/[^0-9]/g,""),a("#btn_vault_confirmar").prop("disabled",this.value.length!==6)}),a(document).on("click.vault","#btn_vault_confirmar",async function(){const c=a("#vault_code_setup").val().trim();if(c.length!==6)return;if(!await y(c,u)){r('<i class="fas fa-times-circle"></i> Código incorrecto, intenta de nuevo',"error"),a("#vault_code_setup").val("").focus();return}const p=a(this);p.html('<i class="fas fa-spinner fa-spin"></i> Guardando...').prop("disabled",!0);try{await S(b(h,"configwii",i.usuario),{configurado:!0,secret:u,email:i.email||"",creado:_(),actualizado:_()}),r('<i class="fas fa-lock"></i> ¡Bóveda configurada! Bienvenido al panel.',"success"),k()}catch(C){console.error("[verificar] setup save:",C),r("Error al guardar la configuración","error"),p.html('<i class="fas fa-lock"></i> Confirmar y Cerrar Puerta').prop("disabled",!1)}})}function q(i){setTimeout(()=>a("#vault_code").focus(),100),a(document).on("input.vault","#vault_code",function(){this.value=this.value.replace(/[^0-9]/g,""),this.value.length===6&&a("#btn_code").click()}),a(document).on("click.vault","#btn_code",async function(){const e=a("#vault_code").val().trim();if(e.length!==6)return r("Ingresa los 6 dígitos","warning");const t=a(this),o=t.html();t.html('<i class="fas fa-spinner fa-spin"></i> Verificando...').prop("disabled",!0);try{await y(e,u)?(r('<i class="fas fa-unlock"></i> ¡Bóveda desbloqueada!',"success"),k()):(r('<i class="fas fa-times-circle"></i> Código incorrecto o expirado',"error"),a("#vault_code").val("").focus(),t.html(o).prop("disabled",!1))}catch(l){console.error("[verificar] unlock:",l),t.html(o).prop("disabled",!1)}}),a(document).on("click.vault","#btn_vault_back",()=>{localStorage.removeItem("vault_expire"),d.navigate("/")})}function k(){s&&(clearInterval(s),s=null),localStorage.removeItem("vault_expire"),a("body").removeClass("is-vault-locked"),sessionStorage.setItem("vault_unlocked","true"),window.location.href="/admin"}const Z=()=>{s&&(clearInterval(s),s=null),a("body").removeClass("is-vault-locked"),a(document).off(".vault"),a(document).off(".vault_shield")};export{Z as cleanup,N as init,K as render};
