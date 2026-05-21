import{$ as e}from"./vendor-PbmUQHyn.js";import{l as b,c as m}from"./index-DIaJmuXG.js";const r=()=>b("wiSmile"),g=[{id:"wiihope_all",txt:"Todos los usuarios"},{id:"wiihope_paz",txt:"Mensajes de paz"},{id:"wiihope_esperanza",txt:"Esperanza"},{id:"wiihope_blog",txt:"Blog"},{id:"wiihope_biblia",txt:"Biblia"},{id:"wiihope_felicitaciones",txt:"Felicitaciones"}],x=[{id:"home",txt:"Inicio"},{id:"messages",txt:"Mensajes"},{id:"blog",txt:"Blog"},{id:"bible",txt:"Biblia"},{id:"quotes",txt:"Citas"},{id:"music",txt:"Musica"},{id:"settings",txt:"Ajustes"},{id:"dashboard",txt:"Dashboard"}],h=[{id:"esperanza",txt:"Esperanza"},{id:"blog",txt:"Blog"},{id:"biblia",txt:"Biblia"},{id:"citas",txt:"Citas"},{id:"sistema",txt:"Sistema"},{id:"felicitacion",txt:"Felicitacion"}],f=(a="")=>String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),c=a=>String(e(a).val()||"").trim(),C=()=>{const a=r();return!a||a.rol!=="admin"?'<div class="fcm_page"><div class="fcm_empty"><i class="fas fa-ban"></i> Acceso denegado.</div></div>':`
  <div class="fcm_page">
    <section class="fcm_hero">
      <div class="fcm_hero_icon"><i class="fas fa-bell"></i></div>
      <div>
        <div class="fcm_badge"><i class="fas fa-shield-heart"></i> Admin seguro</div>
        <h1>Mi FCM</h1>
        <p>Generador de payloads para enviar avisos a WiiHope Android desde Firebase Console.</p>
      </div>
    </section>

    <section class="fcm_grid">
      <div class="fcm_card">
        <div class="fcm_head">
          <i class="fas fa-pen-nib"></i>
          <div>
            <h2>Mensaje</h2>
            <p>Escribe el aviso y elige donde abrira en la app.</p>
          </div>
        </div>

        <div class="fcm_field">
          <label>Titulo</label>
          <input id="fcm_title" class="fcm_input" maxlength="80" value="Un mensaje de esperanza para ti">
        </div>

        <div class="fcm_field">
          <label>Cuerpo</label>
          <textarea id="fcm_body" class="fcm_input" maxlength="240">Dios sigue contigo. Respira, ora un momento y continua con paz.</textarea>
        </div>

        <div class="fcm_cols">
          <div class="fcm_field">
            <label>Topic</label>
            <select id="fcm_topic" class="fcm_input">
              ${g.map(i=>`<option value="${i.id}">${i.txt}</option>`).join("")}
            </select>
          </div>
          <div class="fcm_field">
            <label>Pantalla</label>
            <select id="fcm_screen" class="fcm_input">
              ${x.map(i=>`<option value="${i.id}">${i.txt}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="fcm_cols">
          <div class="fcm_field">
            <label>Tipo</label>
            <select id="fcm_type" class="fcm_input">
              ${h.map(i=>`<option value="${i.id}">${i.txt}</option>`).join("")}
            </select>
          </div>
          <div class="fcm_field">
            <label>Slug opcional</label>
            <input id="fcm_slug" class="fcm_input" placeholder="ej. biblia_amor_verdadero">
          </div>
        </div>

        <div class="fcm_actions">
          <button id="fcm_btn_build" class="fcm_btn primary"><i class="fas fa-wand-magic-sparkles"></i> Generar</button>
          <button id="fcm_btn_demo" class="fcm_btn"><i class="fas fa-seedling"></i> Ejemplo blog</button>
        </div>
      </div>

      <div class="fcm_card">
        <div class="fcm_head">
          <i class="fas fa-list-check"></i>
          <div>
            <h2>Firebase Console</h2>
            <p>Copia estos campos en Cloud Messaging.</p>
          </div>
        </div>
        <div id="fcm_console" class="fcm_console"></div>
        <button class="fcm_btn wide" data-copy="#fcm_console_text"><i class="fas fa-copy"></i> Copiar campos</button>
      </div>
    </section>

    <section class="fcm_card">
      <div class="fcm_head">
        <i class="fas fa-code"></i>
        <div>
          <h2>JSON REST v1</h2>
          <p>Guardalo para una fase futura con backend seguro.</p>
        </div>
      </div>
      <pre id="fcm_json" class="fcm_pre"></pre>
      <button class="fcm_btn wide" data-copy="#fcm_json"><i class="fas fa-copy"></i> Copiar JSON</button>
    </section>
  </div>`},S=()=>{const a=r();!a||a.rol!=="admin"||(e(document).off(".fcm"),e(document).on("click.fcm","#fcm_btn_build",o).on("change.fcm keyup.fcm","#fcm_title,#fcm_body,#fcm_topic,#fcm_screen,#fcm_type,#fcm_slug",o).on("click.fcm","#fcm_btn_demo",y).on("click.fcm","[data-copy]",function(){$(e(this).data("copy"))}),o())},T=()=>{e(document).off(".fcm")};function o(){const a=c("#fcm_title")||"WiiHope",i=c("#fcm_body")||"Tienes un nuevo mensaje.",s=c("#fcm_topic")||"wiihope_all",l=c("#fcm_screen")||"messages",_=c("#fcm_type")||"sistema",p=c("#fcm_slug"),t={title:a,body:i,screen:l,type:_};p&&(t.slug=p);const u=[`Topic: ${s}`,"",`Notification title: ${a}`,`Notification text: ${i}`,"","Custom data:",...Object.entries(t).map(([n,d])=>`${n}: ${d}`)].join(`
`),v={message:{topic:s,notification:{title:a,body:i},data:t,android:{priority:"HIGH",notification:{channel_id:"wiihope_general",click_action:"OPEN_WIIHOPE"}}}};e("#fcm_console").html(`
    <div class="fcm_console_box">
      <input id="fcm_console_text" value="${f(u)}" readonly>
      ${Object.entries(t).map(([n,d])=>`<div><strong>${f(n)}</strong><span>${f(d)}</span></div>`).join("")}
    </div>
  `),e("#fcm_json").text(JSON.stringify(v,null,2))}function y(){e("#fcm_title").val("Nueva reflexion en WiiHope"),e("#fcm_body").val("Hay una lectura nueva para fortalecer tu fe hoy."),e("#fcm_topic").val("wiihope_blog"),e("#fcm_screen").val("blog"),e("#fcm_type").val("blog"),e("#fcm_slug").val("biblia_amor_verdadero"),o(),m("Ejemplo de blog cargado","success")}async function $(a){const i=e(a),s=i.is("input,textarea")?i.val():i.text();try{await navigator.clipboard.writeText(s),m("Copiado al portapapeles","success")}catch{const l=e("<textarea>").val(s).appendTo("body").select();document.execCommand("copy"),l.remove(),m("Copiado","success")}}export{T as cleanup,S as init,C as render};
