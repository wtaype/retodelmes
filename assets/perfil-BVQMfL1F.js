import{r as e}from"./vendor-CZ6bxb2j.js";import{T as t,f as n,h as r,r as i,y as a}from"./widev-BkR2Na_W.js";import{r as o}from"./index-CA-XJpFF.js";import{f as s,j as c,v as l}from"./firebase-D6VL4aaK.js";import{n as u,t as d}from"./firebase-BfEAzf30.js";var f=()=>n(`wiSmile`)||{},p=()=>{let e=f();if(!e.email)return location.replace(`/`),``;let t=e.nombre||``,n=e.apellidos||``,r=e.usuario||``,i=e.email||``,o=e.rol||`smile`,s=e.plan||`free`,c=e.estado||`activo`,l=(e.tema||`cielo|#0EBEFF`).toLowerCase();e.uid;let u=e.avatar||``,d=e.fechaNacimiento||``,p=e.pais||``,m=e.genero||``,h=e.gustos||``,g=e.bio||``,_=e.creacion||e.creado,v=_?a(null).get(_,`local`):`Desconocido`,y=`https://ui-avatars.com/api/?name=`+encodeURIComponent(t+` `+n)+`&background=random&color=fff`;return`
  <div class="prf_wrap">

    <div class="prf_hero">
      <div class="prf_av_wrap">
        <img src="${u||y}" alt="${t}" class="prf_av" onerror="this.src='./smile.avif'">
        <div class="prf_av_ring"></div>
      </div>
      <div class="prf_hero_info">
        <h1 class="prf_fullname">${t} ${n}</h1>
        <p class="prf_username"><i class="fas fa-at"></i> ${r}</p>
        <span class="prf_rol_chip"><i class="fas fa-crown"></i> Plan ${s.toUpperCase()}</span>
      </div>
    </div>

    <div class="prf_grid">

      <div class="prf_card">
        <h2 class="prf_card_tit"><i class="fas fa-user-edit"></i> Editar perfil</h2>
        
        <div class="prf_form_2col">
          <div class="prf_form_grp">
            <label>Nombres</label>
            <input id="prf_nombre" value="${t}" placeholder="Tus nombres">
          </div>
          <div class="prf_form_grp">
            <label>Apellidos</label>
            <input id="prf_apellidos" value="${n}" placeholder="Tus apellidos">
          </div>
        </div>
        
        <label>Enlace del Avatar (URL)</label>
        <input id="prf_avatar" value="${u}" placeholder="https://tu-foto.com/imagen.jpg">
        
        <div class="prf_form_2col">
          <div class="prf_form_grp">
            <label>Fecha de Nacimiento</label>
            <input type="date" id="prf_nacimiento" value="${d}">
          </div>
          <div class="prf_form_grp">
            <label>Género</label>
            <select id="prf_genero">
              <option value="" disabled ${m?``:`selected`}>Selecciona tu género</option>
              <option value="Masculino" ${m===`Masculino`?`selected`:``}>Masculino</option>
              <option value="Femenino" ${m===`Femenino`?`selected`:``}>Femenino</option>
              <option value="Otro" ${m===`Otro`?`selected`:``}>Otro</option>
              <option value="Prefiero no decirlo" ${m===`Prefiero no decirlo`?`selected`:``}>Prefiero no decirlo</option>
            </select>
          </div>
        </div>

        <div class="prf_form_2col">
          <div class="prf_form_grp">
            <label>País</label>
            <input id="prf_pais" value="${p}" placeholder="Ej. Perú, México, España...">
          </div>
          <div class="prf_form_grp">
            <label>Gustos o intereses</label>
            <input id="prf_gustos" value="${h}" placeholder="Ej. Fútbol, leer, viajar...">
          </div>
        </div>
        
        <div class="prf_form_2col">
          <div class="prf_form_grp">
            <label>Biografía</label>
            <input id="prf_bio" value="${g}" placeholder="Cuéntanos un poco sobre ti...">
          </div>
          <div class="prf_form_grp">
            <label>Tema de la aplicación</label>
            <select id="prf_tema">
              <option value="cielo|#0EBEFF" ${l.startsWith(`cielo`)?`selected`:``}>Cielo</option>
              <option value="dulce|#FF5C69" ${l.startsWith(`dulce`)?`selected`:``}>Dulce</option>
              <option value="paz|#29C72E" ${l.startsWith(`paz`)?`selected`:``}>Paz</option>
              <option value="oro|#ffc107" ${l.startsWith(`oro`)?`selected`:``}>Oro</option>
              <option value="mora|#7000FF" ${l.startsWith(`mora`)?`selected`:``}>Mora</option>
              <option value="futuro|#21273B" ${l.startsWith(`futuro`)?`selected`:``}>Futuro</option>
            </select>
          </div>
        </div>

        <button id="prf_guardar" class="prf_btn"><i class="fas fa-save"></i> Guardar cambios</button>
      </div>

      <div class="prf_col_right">
        <div class="prf_card">
          <h2 class="prf_card_tit"><i class="fas fa-lock"></i> Actualizar contraseña</h2>
          <label>Nueva contraseña</label>
          <input type="password" id="prf_pass" placeholder="Ingresa tu nueva contraseña">
          <label>Confirmar contraseña</label>
          <input type="password" id="prf_pass_conf" placeholder="Confirma tu nueva contraseña">
          <button id="prf_guardar_pass" class="prf_btn"><i class="fas fa-key"></i> Actualizar contraseña</button>
        </div>

        <div class="prf_card">
          <h2 class="prf_card_tit"><i class="fas fa-info-circle"></i> Datos de cuenta</h2>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-envelope"></i> Email</span>
            <span class="prf_val em">${i}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-crown"></i> Plan</span>
            <span class="prf_val" style="color:var(--mco); text-transform:uppercase;">${s}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-signal"></i> Estado</span>
            <span class="prf_val" style="color:var(--success)">${c}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-calendar-alt"></i> Registro</span>
            <span class="prf_val">${v}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-user-tag"></i> Rol</span>
            <span class="prf_val" style="text-transform:capitalize;">${o}</span>
          </div>
        </div>
      </div>

    </div>
  </div>`},m=()=>{if(!f().email)return o.navigate(`/`);e(document).on(`click.prf`,`#prf_guardar`,async function(){let n=f(),a={nombre:e(`#prf_nombre`).val().trim(),apellidos:e(`#prf_apellidos`).val().trim(),avatar:e(`#prf_avatar`).val().trim(),fechaNacimiento:e(`#prf_nacimiento`).val(),pais:e(`#prf_pais`).val().trim(),genero:e(`#prf_genero`).val()||``,gustos:e(`#prf_gustos`).val().trim(),bio:e(`#prf_bio`).val().trim(),tema:e(`#prf_tema`).val()};if(!a.nombre)return t(document.getElementById(`prf_nombre`),`Ingresa tu nombre`,`error`);e(this).prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i> Guardando...`);try{await s(l(u,`smiles`,n.usuario),a),r(`wiSmile`,{...n,...a},24),a.tema&&(localStorage.wiTema=a.tema),e(`.prf_fullname`).text(`${a.nombre} ${a.apellidos}`),a.avatar?e(`.prf_av`).attr(`src`,a.avatar):e(`.prf_av`).attr(`src`,`https://ui-avatars.com/api/?name=`+encodeURIComponent(a.nombre+` `+a.apellidos)+`&background=random&color=fff`),i(`Perfil actualizado `,`success`)}catch(e){console.error(e),i(`Error al guardar`,`error`)}finally{e(this).prop(`disabled`,!1).html(`<i class="fas fa-save"></i> Guardar cambios`)}}).on(`click.prf`,`#prf_guardar_pass`,async function(){let n=e(`#prf_pass`).val(),r=e(`#prf_pass_conf`).val(),a=e(this);if(!n||n.length<6)return t(document.getElementById(`prf_pass`),`Mínimo 6 caracteres`,`error`);if(n!==r)return t(document.getElementById(`prf_pass_conf`),`Las contraseñas no coinciden`,`error`);if(!d.currentUser)return i(`Sesión expirada. Por favor recarga`,`error`);a.prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i> Actualizando...`);try{await c(d.currentUser,n),e(`#prf_pass`).val(``),e(`#prf_pass_conf`).val(``),i(`Contraseña actualizada correctamente ✅`,`success`)}catch(e){console.error(e),e.code===`auth/requires-recent-login`?i(`Por seguridad, cierra sesión y vuelve a ingresar para cambiar la contraseña.`,`error`):i(`Error al actualizar contraseña`,`error`)}finally{a.prop(`disabled`,!1).html(`<i class="fas fa-key"></i> Actualizar contraseña`)}}).on(`change.prf`,`#prf_tema`,function(){let t=e(this).val();if(!t)return;let[n,r]=t.split(`|`);document.documentElement.dataset.theme=n,e(`meta[name="theme-color"]`).attr(`content`,r),e(`.tema`).removeClass(`mtha`).filter(`[data-ths="${t}"]`).addClass(`mtha`),localStorage.wiTema=t})},h=()=>e(document).off(`.prf`);export{h as cleanup,m as init,p as render};