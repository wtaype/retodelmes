import{$ as t,w as ia,g as va,d as I,a as v,c as sa,q as W,e as G,f as Y,h as Oa,i as M,u as Va,j as Ba,s as Wa,b as B,k as Ga,M as x,l as g,m as $a,n as Ya,o as Ha,p as Ka,r as Za,t as Ja,v as b,x as Ma,y as Sa,N as ea,z as Aa,A as pa,B as ba,C as V,D as qa,E as Na}from"./widev-MdKkhTof.js";function Qa(){const $=`
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Wii Login</h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
        <span class="crearCuenta">Crear cuenta</span>
      </div>
    </div>
  </div>
</div>`,u=`
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear Cuenta</h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-phone"></i>
            <input type="text" id="regCelular" placeholder="Celular" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-cake-candles"></i>
            <input type="date" id="regFechaNacimiento" placeholder="Fecha de nacimiento" class="datepicker" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`,oa=`
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer Contraseña</h2>
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;t(function(){let h="smiles",w=3e3,L="wiAuthIn",q="wiAuthRol",_="smile";t(".login").click(()=>y("loginModal")),t(".registrar").click(()=>y("registroModal")),t(".crearCuenta").click(()=>{y("registroModal"),k("loginModal")}),t(".conCuenta").click(()=>{y("loginModal"),k("registroModal")}),t(".olvidastePass").click(()=>{y("recuperarModal"),k("loginModal")}),t(".volverLogin").click(()=>{y("loginModal"),k("recuperarModal")}),t(".togglePass").click(function(){const i=t(this).siblings("input"),m=i.attr("type")==="password";i.attr("type",m?"text":"password"),t(this).toggleClass("fa-eye fa-eye-slash")}),t('.miauth input:not([type="checkbox"])').on("click",function(){ia(this,t(this).attr("placeholder"))}),t("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){t(this).val(t(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recFechaNacimiento","#Recuperar"],["#recEmail","#Recuperar"]].forEach(([i,m])=>{t(i).on("input keyup",d=>{t(m).removeClass("inactivo"),d.key==="Enter"&&(t(m).click(),t(m).addClass("inactivo"))})});const D={regEmail:[i=>i.toLowerCase(),i=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(i)||"Correo inválido"],regUsuario:[i=>i.toLowerCase().replace(/[^a-z0-9_]/g,""),i=>i.length>=4||"Usuario 4-20 caracteres"],regNombre:[i=>i.trim(),i=>i.length>0||"Ingrese nombre"],regApellidos:[i=>i.trim(),i=>i.length>0||"Ingrese apellidos"],regCelular:[i=>i.replace(/\D/g,""),i=>i.length>=8||"Mínimo 8 dígitos"],regFechaNacimiento:[i=>i,i=>Ka(i)>=13||"Tienes que ser mayor de 13 años"],regPassword:[i=>i,i=>i.length>=6||"Mínimo 6 caracteres"],regPassword1:[i=>i,i=>i===t("#regPassword").val()||"Contraseñas no coinciden"]};t.each(D,function(i,[m,d]){t(`#${i}`).on("blur",function(){const f=m(t(this).val());t(this).val(f);const C=d(f);C!==!0&&ia(this,C,"error")})});let U=!1;t("#regUsuario").on("blur focus",async function(){const i=t(this).val();if(i.length>=3)try{const d=(await va(I(v,h,i))).exists();U=!d,ia(this,`Usuario ${d?"no disponible":"disponible ✅"}`,d?"error":"success","top",7e3)}catch(m){console.error(m)}});let na=!1;t("#regEmail").on("blur focus",async function(){const i=t(this).val();if(i.length>=3)try{const d=!(await sa(W(G(v,h),Y("email","==",i)))).empty;na=!d,ia(this,`Email ${d?"no disponible":"disponible ✅"}`,d?"error":"success","top",7e3)}catch(m){console.error(m)}}),t("#Registrar").click(async function(){const i=[[U,t("#regUsuario")[0],"Usuario no disponible"],[na,t("#regEmail")[0],"Email no disponible"],...Object.entries(D).map(([m,[d,f]])=>{const C=t(`#${m}`),N=d(C.val()),T=f(N);return[T===!0,C[0],T!==!0?T:""]})];for(const[m,d,f]of i)if(!m&&f&&(ia(d,f,"error"),d.focus(),!0))return;try{const m=["regEmail","regUsuario","regNombre","regApellidos","regCelular","regPassword"],[d,f,C,N,T,H]=m.map(fa=>t("#"+fa).val().trim()),{user:z}=await Oa(M,d,H);await Promise.all([Va(z,{displayName:f}),Ba(z)]),console.log("Registro completo en Auth ✅"+Date());const K=I(v,h,f);await Wa(K,{usuario:f,email:d,nombre:C,apellidos:N,celular:T,rol:_,fechaNacimiento:Ga(t("#regFechaNacimiento").val()),creacion:B(),uid:z.uid}),console.log("Registro completo en Firestore ✅"+Date()),x("Registro completado! ✅")}catch(m){x({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[m.code]||m.message)||console.error(m)}finally{g(L,"wIn",24),g(q,_,24),setTimeout(()=>$a(_),w)}}),t("#Login").click(async function(){try{const[i,m]=["#email","#password"].map(C=>t(C).val());let d=null,f=i;if(!i.includes("@"))try{d=await va(I(v,h,i)),f=d.exists()?d.data().email:null}catch(C){console.error("ebdUsuario",C),f=null}await Ya(M,f,m),g(L,"wIn",24),g(q,d.data().rol,24),$a(d.data().rol)}catch(i){x({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[i.code]||i.message,"error"),console.error(i)}}),t("#Recuperar").click(async function(){try{const[i,m]=["#recEmail","#recFechaNacimiento"].map(N=>t(N).val()),d=i.includes("@")?i:await(async()=>{const N=await va(I(v,h,i));return N.exists()?N.data().email:null})();if(!d)return x("Usuario no registrado","error");const f=await sa(W(G(v,h),Y("email","==",d)));if(f.empty)return x("Email incorrecto o no existe","error");if(f.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==m)return x("Fecha de nacimiento incorrecta","error");await Ha(M,d),x("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(i){console.error(i)}})}),t("body").append($+u+oa);function S(){const h=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}",w=t(".wiAuthCss");w.length?w.text(h):t("head").append(`<style class="wiAuthCss">${h}</style>`)}const y=h=>{const w=t(`#${h}`).addClass("active");t("body").addClass("modal-open"),setTimeout(()=>{w.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},k=h=>{t(`#${h}`).removeClass("active"),t(".modal.active").length||t("body").removeClass("modal-open")},ra=()=>{const h=()=>{t(".modal").removeClass("active"),t("body").removeClass("modal-open")};t(document).off(".authModals").on("click.authModals",".close-modal",h).on("click.authModals",".modal",w=>{t(w.target).is(".modal")&&h()}).on("keydown.authModals",w=>{w.key==="Escape"&&h()})};S(),ra()}Qa();Za(M,async $=>{if(!$)return window.location.href="/";try{const u=b("wiSmile");if(u)return La(u);const S=(await sa(W(G(v,"smiles"),Y("usuario","==",$.displayName)))).docs[0].data();g("wiSmile",S,450),La(S)}catch(u){console.error(u)}});t(document).on("click",".bt_salir",async()=>{await Ja(M),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(u=>localStorage.removeItem(u))}});t(document).on("click",".bt_cargar",()=>{const $=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+)$/;Object.keys(localStorage).filter(u=>$.test(u)).forEach(u=>localStorage.removeItem(u)),x("Actualizado"),setTimeout(()=>location.reload(),800)});function La($){console.log($.nombre),x("Bienvenido "+$.nombre+"!"),t(".app").html(`
    <header class="hd">
  <nav class="nv dfw wdp">
  <a class="logo nv_left" href="#Logo">
      <h1>
          <span class="nv_titulo"><i class="fas fa-graduation-cap logo-icon"></i> wiimage</span>
          <span class="nv_descri">| Tu pizarra personalizada con notepad y anotes en imágenes</span>
      </h1>
  </a>
  <div class="logo nv_right dfw">
      
      <div class="witemas dpf"></div>
      <button class="bt_cargar"><i class="fa-solid fa-arrow-rotate-right"></i></button>
      <button class="bt_login"><i class="fas fa-user"></i> ${$.nombre}</button>
      <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> Salir</button>
  </div>
  </nav>
  </header>

  <main class="miwb wdp">
  <section class="swb notas">
    <div class="lista wbg">
      <div class="dfw hcon dfc">
          <h2><i class="fas fa-list"></i> Notas</h2>
          <button class="agregar_nota"><i class="fas fa-plus"></i> Nota</button>
      </div>
      <div class="nts dfcc">
          <div class="nt nt0 activa" data-ki="ki0">Nota actual</div>
          
      </div>
  </div>
  <div class="editor wbg">
      <div class="hcon dfc">
          <h2><i class="fas fa-edit"></i> Editor</h2> 
          <i title="Ctrl + B" class="fas fa-bold"></i>
          <i title="Ctrl + I" class="fas fa-italic"></i>
          <i title="Ctrl + K" class="fas fa-underline"></i>
          <i title="Ctrl + L" class="fas fa-list-ul"></i>
          <i title="Ctrl + J" class="fas fa-list-ol"></i>
          <i title="Ctrl + I" class="fa-solid fa-align-left"></i>
          <i title="Ctrl + T" class="fa-solid fa-align-center"></i>
          <i title="Ctrl + D" class="fa-solid fa-align-right"></i>
          <i title="Ctrl + Z" class="fa-solid fa-rotate-left"></i>
          <button class="limpiar_nota"><i class="fas fa-trash"></i>Eliminar</button>
          <button class="guardar_nota"><i class="fas fa-save"></i> Guardar</button>
      </div>
      <div class="mcon">
          <div class="txe" contenteditable="true" id="ki0">Ejemplo de las notas </div>
      </div>

    </div>
    </section>

  <section class="swb images psr">
  <div class="paste wbg dfc">
      <p>Área de Capturas.</p>
      <p>Presiona Ctrl+V para pegar capturas de pantalla.</p> 
      <p>Doble click para seleccionar imagen</p>
    </div>
    <div class="ibx">
      <div class="bx bx1"></div><div class="bx bx2"></div><div class="bx bx3"></div><div class="bx bx4"></div>
      <div class="bx bx5"></div><div class="bx bx6"></div><div class="bx bx7"></div><div class="bx bx8"></div>
      <div class="bx bx9"></div><div class="bx bx10"></div><div class="bx bx11"></div><div class="bx bx12"></div>
    </div>

      <!-- Visor fullscreen -->
    <div class="vw" aria-hidden="true">
      <button class="ic dw"  title="Anterior (<)"><i class="fa-solid fa-cloud-arrow-up"></i></button>
      <button class="ic cls" title="Cerrar (Esc)"><i class="fa-solid fa-xmark"></i></button>
      <button class="ic dl"  title="Descargar (Ctrl+S)"><i class="fa-solid fa-download"></i></button>
      <button class="ic rm"  title="Eliminar (Supr)"><i class="fa-solid fa-trash"></i></button>
      <button class="ic pv"  title="Anterior (<)"><i class="fa-solid fa-chevron-left"></i></button>
      <img alt="Vista previa">
      <button class="ic nx"  title="Siguiente (>)"><i class="fa-solid fa-chevron-right"></i></button>
      <div class="th" aria-label="Miniaturas"></div>
    </div>

  <div class='abwc psa dpn dfcc'>
    <b>Acerca de Wiimage</b>
    <p>Wiimage es una pizarra personal con editor de notas y un gestor de imágenes tipo galería. Pega capturas con Ctrl+V o selecciona por doble clic, organízalas en cuadros y míralas en pantalla completa con miniaturas y atajos de teclado. Todo funciona en tu navegador.</p>
    <p>Funciones destacadas:</p>
    <ul>
      <li>Pegar imágenes desde portapapeles (Ctrl+V) y carga por doble clic; se ubican en el siguiente cuadro libre.</li>
      <li>Visor fullscreen con miniaturas al pie, navegación anterior/siguiente y acciones rápidas (cerrar, descargar, eliminar).</li>
      <li>Atajos: > o Flecha Derecha (siguiente),  o Flecha Izquierda (anterior), Esc (cerrar), Ctrl+S (descargar), Supr (eliminar).</li>
      <li>Notas con auto-guardado, chips con vista previa y herramientas de formato (negrita, listas, alineación).</li>
      <li>Persistencia local (LocalStorage) para notas e imágenes y botón “Borrar todo”.</li>
      <li>Diseño responsivo y temas visuales para un uso tipo app.</li>
    </ul>
    <p><a href='https://wtaype.github.io/wiimage/v11' target='_blank'>v11 - Version Inicial</a></p>
    <p><a href='https://wtaype.github.io/wiimage/v12' target='_blank'>v12 - Version Blue</a></p>
    <b>Privacidad y seguridad</b>
    <p>Wiimage no recopila datos personales ni envía información a servidores. Todo se procesa localmente en tu dispositivo y se guarda en el almacenamiento del navegador. Puedes eliminarlo cuando quieras con “Borrar todo”. No usamos cookies de rastreo.</p>
    <button aria-label='ENTENDIDO' class='abwok bts'>ENTENDIDO</button>
  </div>

  </section>

  </main>

  <footer class='foo hwb txc'>
  <p>Creado con<i class="fa fa-heart"></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class="wty"></span><span class="abw tm11042025" id="101542394703517594">| Acerca del app | Actualizado</span><span class="wtu"></span></p>
  </footer>
    
`),Ma(".txe","id",a=>a.html()),Sa(".txe","id",(a,e)=>a.html(e));const u=t(".txe"),oa=t(".nts"),S=t(".editor .hcon");let y=0;const k=a=>+String(a).replace(/\D+/g,"")||0,ra=(a,e=22)=>t("<div>").html(a||"").text().replace(/\s+/g," ").trim().slice(0,e),h=a=>(t('[data-ki^="ki"]').removeClass("activa"),t(`[data-ki="${a}"]`).addClass("activa")),w=a=>`remote:${a}`,L=a=>`dirty:${a}`,q=()=>Object.keys(localStorage).filter(a=>/^ki\d+$/.test(a)),_=a=>{const e=ra(a);return e?e+"...":""},D=(a,e)=>{const s=l=>{l.empty().text(e||""),b(w(a))&&l.append(" ").append(t('<i class="fa-solid fa-cloud-arrow-up"></i>'))},r=t(`[data-ki="${a}"]`);r.length?s(r):s(t(`<div class="nt nt${k(a)}" data-ki="${a}"></div>`).appendTo(oa))},U=a=>{const e=b(a)||"";u.attr("id",a).html(e).focus(),h(a)},na=()=>{const a=t('[data-ki^="ki"]').map((s,r)=>k(t(r).data("ki"))).get(),e=q();y=Math.max(y,0,...a,...e.map(k)),t.each(e,(s,r)=>{const l=b(r);l&&D(r,_(l))})},i=(()=>{let a;return(e=1600)=>{const s=t(".guardar_nota");s.length&&(s.addClass("bta").text("Guardado"),clearTimeout(a),a=setTimeout(()=>{s.removeClass("bta").text("Guardar")},e))}})(),m=async()=>{const a=M.currentUser,e=a?.email;if(!(!e||q().length))try{const s=W(G(v,"smilenotas"),Y("email","==",e),pa(100)),r=await sa(s);let l=0;r.forEach(p=>{const n=p.data(),o=n.ki||"ki0",c=n.nota||"";g(o,c,12),g(w(o),1,720),D(o,_(c)),l=Math.max(l,k(o))}),y=Math.max(y,l)}catch(s){console.error("Hydrate error:",s)}},d=async({silent:a=!1}={})=>{const e=M.currentUser,s=e?.email,r=e?.displayName||$?.nombre||"";if(!s)return;const l=q().filter(n=>!!b(L(n))).slice(0,100);if(!l.length){a||x("Nada que sincronizar");return}const p=ba(v);l.forEach(n=>{const o=b(n)||"",c=ra(o,22),F=I(v,"smilenotas",`${s}_${n}`),A={ki:n,titulo:c,usuario:r,email:s,nota:o,actualizacion:B()};b(w(n))||(A.creacion=B()),p.set(F,A,{merge:!0})});try{await p.commit(),l.forEach(n=>{g(w(n),1,720),V(L(n)),D(n,_(b(n)))}),a||x("Notas guardadas en la nube"),i()}catch(n){console.error("Sync error:",n),a||ea("Error al sincronizar notas","error")}},f=async a=>{const e=M.currentUser,s=e?.email;try{s&&await qa(I(v,"smilenotas",`${s}_${a}`))}catch(r){console.error("Delete cloud error:",r),ea("No se pudo eliminar en la nube","error")}finally{V(a),V(L(a)),V(w(a)),t(`[data-ki="${a}"]`).remove(),u.attr("id")===a&&u.removeAttr("id").empty();const r=q().sort((l,p)=>k(l)-k(p));r.length&&U(r.includes("ki0")?"ki0":r[0]),x("Nota eliminada")}};let C=null;const N=()=>{const a=M.currentUser,e=a?.email;if(!e)return;if(typeof C=="function")try{C()}catch{}const s=W(G(v,"smilenotas"),Y("email","==",e),pa(100));C=Na(s,r=>{let l=y;if(r.docChanges().forEach(p=>{const n=p.doc.data()||{},o=n.ki||p.doc.id.split("_")[1]||"ki0",c=n.nota||"";p.type!=="removed"&&(b(L(o))||(g(o,c,12),g(w(o),1,720),u.attr("id")===o&&u.html(c)),D(o,_(b(o)||c)),l=Math.max(l,k(o)))}),y=Math.max(y,l),!u.attr("id")){const p=q().sort((n,o)=>k(n)-k(o));p.length&&U(p.includes("ki0")?"ki0":p[0])}},r=>console.error("Snapshot notas error:",r))};u.on("input",()=>{const a=u.attr("id");a&&(g(a,u.html(),12),g(L(a),1,12),D(a,_(b(a))),i())}),t(document).on("click",".guardar_nota",async()=>{const a=u.attr("id");a&&(g(a,u.html(),12),g(L(a),1,12)),await d({silent:!1})}),t(document).on("click",".agregar_nota",()=>{if(q().length>=100)return ea("Máximo 100 notas por usuario","warning");const e=`ki${++y}`;D(e,`Nota ${y}`),U(e)}),t(document).on("click",'[data-ki^="ki"]',a=>U(t(a.currentTarget).data("ki"))),t(document).on("click",".limpiar_nota",async function(){const a=u.attr("id");a&&(await f(a),Aa(this,"bta","Eliminado","Eliminar"))}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&d({silent:!0})}),(async()=>{na(),await m(),N();const a=q().sort((e,s)=>k(e)-k(s));a.length&&!u.html()&&U(a.includes("ki0")?"ki0":a[0])})();const T={".fa-bold":"bold",".fa-italic":"italic",".fa-underline":"underline",".fa-list-ul":"insertUnorderedList",".fa-list-ol":"insertOrderedList",".fa-align-left":"justifyLeft",".fa-align-center":"justifyCenter",".fa-align-right":"justifyRight",".fa-rotate-left":"undo"};t.each(T,(a,e)=>S.find(a).attr("data-cmd",e));let H=null;const z=()=>{const a=window.getSelection();if(!a||!a.rangeCount)return!1;const e=a.anchorNode;return e&&(u[0]===e||t.contains(u[0],e))},K=()=>{const a=window.getSelection();a&&a.rangeCount&&z()&&(H=a.getRangeAt(0))},fa=()=>{if(!H)return;const a=window.getSelection();a.removeAllRanges(),a.addRange(H)},_a=a=>{!z()&&H&&fa(),document.execCommand(a,!1,null),u.focus(),K(),la()};S.on("mousedown","i",a=>a.preventDefault()).on("click","i",function(){const a=t(this).data("cmd");a&&_a(a)});const Da=[[".fa-bold","bold"],[".fa-italic","italic"],[".fa-underline","underline"],[".fa-list-ul","insertUnorderedList"],[".fa-list-ol","insertOrderedList"]],la=()=>{if(!z())return void S.find("i").removeClass("actv").addClass("is-disabled");S.find("i").removeClass("is-disabled"),t.each(Da,(s,r)=>S.find(r[0]).toggleClass("actv",document.queryCommandState(r[1])));const a=document.queryCommandState("justifyCenter"),e=document.queryCommandState("justifyRight");S.find(".fa-align-center").toggleClass("actv",a),S.find(".fa-align-right").toggleClass("actv",e),S.find(".fa-align-left").toggleClass("actv",!a&&!e)};document.addEventListener("selectionchange",()=>{K(),la()}),u.on("keyup mouseup input",()=>{K(),la()}),K(),la();const ca=t(".paste"),E=t(".ibx .bx");E.each((a,e)=>t(e).attr("data-k",`im${a+1}`));const ga=t(".vw"),ya=t(".vw img"),Z=t(".vw .th");let J=-1;const P=a=>`remote:${a}`,O=a=>`dirty:${a}`,Pa=async(a,e=1600,s=200)=>{const r=await new Promise(aa=>{const ta=new FileReader;ta.onload=za=>aa(za.target.result),ta.readAsDataURL(a)}),l=await new Promise(aa=>{const ta=new Image;ta.onload=()=>aa(ta),ta.src=r}),p=Math.min(1,e/l.naturalWidth),[n,o]=[Math.round(l.naturalWidth*p),Math.round(l.naturalHeight*p)],c=Object.assign(document.createElement("canvas"),{width:n,height:o});c.getContext("2d").drawImage(l,0,0,n,o);const F=c.toDataURL("image/webp").startsWith("data:image/webp")?"image/webp":"image/jpeg";let[A,j]=[.9,""];for(let aa=0;aa<6&&A>=.5&&(j=c.toDataURL(F,A),!(Math.ceil((j.length-`data:${F};base64,`.length)*3/4)<=s*1024));aa++,A=(A+.5)/2);return j},da=()=>E.map((a,e)=>t(e).attr("data-src")?a:null).get().filter(a=>a!==null),Q=(a,e)=>{b(P(e||a.attr("data-k")))&&!a.find(".fa-cloud-arrow-up").length&&a.append(' <i class="fa-solid fa-cloud-arrow-up"></i>')},R=()=>{const a=da();Z.html(a.map(e=>`<div class="ti" data-i="${e}"><img src="${E.eq(e).attr("data-src")}">${b(P(E.eq(e).attr("data-k")))?'<i class="fa-solid fa-cloud-arrow-up"></i>':""}</div>`).join("")),Z.find(`[data-i="${J}"]`).addClass("on")},Ra=(a,e)=>{const s=E.eq(a),r=s.attr("data-k");s.attr("data-src",e).addClass("fill").html(`<img src="${e}">`),Q(s,r),g(r,e,720),g(O(r),1,12),R()},wa=()=>E.toArray().findIndex(a=>!t(a).attr("data-src")),ja=async a=>{const e=await Pa(a);Ra(wa()>=0?wa():0,e)},ha=a=>[...a].filter(e=>e?.type?.startsWith("image/")).forEach(ja);ca.on("paste",a=>{const e=a.originalEvent.clipboardData;e&&ha([...e.items].map(s=>s.getAsFile()).filter(Boolean))}),ca.on("dblclick",()=>t('<input type="file" accept="image/*" multiple hidden>').appendTo("body").on("change",a=>{ha(a.target.files),t(a.target).remove()}).trigger("click")),ca.on("dragover dragenter",a=>{a.preventDefault(),a.stopPropagation()}),ca.on("drop",a=>{a.preventDefault(),a.stopPropagation();const e=a.originalEvent.dataTransfer;e?.files?.length&&ha(e.files)}),t(document).on("dragover drop",a=>a.preventDefault()),(()=>{Sa(".ibx .bx","data-k",(a,e)=>{e&&(a.attr("data-src",e).addClass("fill").html(`<img src="${e}">`),Q(a))}),Ma(".ibx .bx","data-k",a=>a.attr("data-src")||""),R()})();const Ia=async({silent:a=!1}={})=>{const{currentUser:e}=M,s=e?.email,r=e?.displayName||$?.nombre||"";if(!s)return;const l=E.filter((n,o)=>{const c=t(o).attr("data-k");return t(o).attr("data-src")&&b(O(c))}).get();if(!l.length)return a||x("Nada que sincronizar");const p=ba(v);l.forEach(n=>{const o=t(n),[c,F]=[o.attr("data-k"),o.attr("data-src")],A=I(v,"smileimgs",`${s}_${c}`),j={email:s,usuario:r,titulo:`Imagen ${c.replace("im","")}`,imagen:F,actualizacion:B()};b(P(c))||(j.creacion=B()),p.set(A,j,{merge:!0})});try{await p.commit(),l.forEach(n=>{const o=t(n),c=o.attr("data-k");g(P(c),1,720),V(O(c)),Q(o,c)}),a||x("Imágenes guardadas en la nube"),i?.(),R()}catch(n){console.error("Sync imgs error:",n),!a&&ea("Error al sincronizar imágenes","error")}},xa=async()=>{const{currentUser:a}=M,e=a?.email,s=a?.displayName||$?.nombre||"";if(!e)return ea("Debes iniciar sesión","error");const r=E.filter((n,o)=>{const c=t(o).attr("data-k");return t(o).attr("data-src")&&b(O(c))}).get();if(!r.length)return x("No hay imágenes nuevas para guardar");const l=t(".vw .dw");l.html('<i class="fa-solid fa-spinner fa-spin"></i>').prop("disabled",!0);const p=ba(v);r.forEach(n=>{const o=t(n),[c,F]=[o.attr("data-k"),o.attr("data-src")],A=I(v,"smileimgs",`${e}_${c}`),j={email:e,usuario:s,titulo:`Imagen ${c.replace("im","")}`,imagen:F,actualizacion:B()};b(P(c))||(j.creacion=B()),p.set(A,j,{merge:!0})});try{await p.commit(),r.forEach(n=>{const o=t(n),c=o.attr("data-k");g(P(c),1,720),V(O(c)),Q(o,c)}),x("Guardado en nube"),R()}catch(n){console.error("Manual sync error:",n),ea("Error al guardar en la nube","error")}finally{l.html('<i class="fa-solid fa-cloud-arrow-up"></i>').prop("disabled",!1)}},Ua=async()=>{const{currentUser:a}=M,e=a?.email;if(!(!e||da().length))try{(await sa(W(G(v,"smileimgs"),Y("email","==",e),pa(60)))).forEach(r=>{const{imagen:l,...p}=r.data()||{},n=r.id.split("_")[1]||"im1",o=E.filter(`[data-k="${n}"]`);o.length&&l&&(o.attr("data-src",l).addClass("fill").html(`<img src="${l}">`),g(n,l,720),g(P(n),1,720),Q(o,n))}),R()}catch(s){console.error("Hydrate imgs error:",s)}};let ka=null;const Fa=()=>{const{currentUser:a}=M,e=a?.email;e&&(ka?.(),ka=Na(W(G(v,"smileimgs"),Y("email","==",e),pa(60)),s=>{s.docChanges().forEach(({type:r,doc:l})=>{if(r==="removed")return;const{imagen:p,...n}=l.data()||{},o=l.id.split("_")[1]||"im1",c=E.filter(`[data-k="${o}"]`);p&&c.length&&!b(O(o))&&(c.attr("data-src",p).addClass("fill").html(`<img src="${p}">`),g(o,p,720),g(P(o),1,720),Q(c,o))}),R()},s=>console.error("Snapshot imgs error:",s)))},Ta=async a=>{const{currentUser:e}=M,s=e?.email;try{s&&await qa(I(v,"smileimgs",`${s}_${a}`))}catch(r){console.error("Delete img error:",r)}[a,O(a),P(a)].forEach(V),E.filter(`[data-k="${a}"]`).removeAttr("data-src").removeClass("fill").empty(),R(),x("Imagen eliminada")},ua=a=>{const e=E.eq(a).attr("data-src");if(!e)return;J=a,ya.attr("src",e),ga.addClass("show"),R();const s=Z.find(`[data-i="${a}"]`).addClass("on");s.length&&Z.animate({scrollLeft:Math.max(0,s.position().left+Z.scrollLeft()-(Z.width()-s.width())/2)},180)},X=()=>{ga.removeClass("show"),J=-1},ma=a=>{const e=da();if(!e.length)return X();ua(e[(e.indexOf(J)+a+e.length)%e.length])},Ca=()=>{const a=Object.assign(document.createElement("a"),{href:ya.attr("src"),download:`wiimage-${J+1}.png`});document.body.append(a),a.click(),a.remove()},Ea=async()=>{const a=E.eq(J).attr("data-k");await Ta(a);const e=da();e.length?ua(e[0]):X()};t(document).on("click",".ibx .bx",a=>{const e=E.index(a.currentTarget);t(a.currentTarget).attr("data-src")&&ua(e)}),t(document).on("click",".vw .cls",X),t(document).on("click",".vw",a=>{a.target===a.currentTarget&&X()}),t(document).on("click",".vw .nx",()=>ma(1)),t(document).on("click",".vw .pv",()=>ma(-1)),t(document).on("click",".vw .dl",Ca),t(document).on("click",".vw .rm",Ea),t(document).on("click",".vw .dw",xa),t(document).on("click",".vw .th .ti",a=>ua(+t(a.currentTarget).data("i"))),t(document).on("keydown",a=>{if(ga.hasClass("show")){if(a.ctrlKey&&["s","S"].includes(a.key))return a.preventDefault(),Ca();if(a.key==="Escape")return X();if(["ArrowRight",">","."].includes(a.key))return ma(1);if(["ArrowLeft","<",","].includes(a.key))return ma(-1);if(["Delete","Supr","Backspace"].includes(a.key))return Ea();if(a.key===" ")return a.preventDefault(),xa()}}),t(document).on("click",".bt_borrar",async function(){if(confirm("¿Eliminar todo lo guardado?")){try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}t('[data-ki^="ki"]').remove(),t(".txe").removeAttr("id").empty(),y=0,E.removeAttr("data-src").removeClass("fill").empty(),X(),R(),Aa(this,"bta","Eliminado","Eliminar")}}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ia({silent:!0})}),(async()=>(await Ua(),Fa()))()}
