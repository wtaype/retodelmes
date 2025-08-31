import $ from 'jquery';
import { wiAuth } from './wiauth.js'; //Para autenticación login, registro y Restablecer
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, deleteDoc, onSnapshot, collection, query, where, writeBatch, serverTimestamp, limit} from "firebase/firestore";

import { wiTema, Capi, Mensaje, Notificacion, savels, getls, removels, accederRol, gosaves, getsaves, adtm, infoo} from './widev.js';

// 🔐 GESTIÓN DE AUTENTICACIÓN EN DASHBOARD
onAuthStateChanged(auth, async user => {
  if(!user) return window.location.href = '/'; // Seguridad default 
  try{
    const wi = getls('wiSmile');
    if(wi) return smileContenido(wi); // Cache primero 

    const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
    const widt = busq.docs[0].data(); savels('wiSmile', widt, 450); smileContenido(widt); // Desde Online 
  }catch(e){console.error(e)}
});
$(document).on('click', '.bt_salir', async () => {
  await signOut(auth); window.location.href = '/';   // Cierra la sesión + Envia al inicio 
  try{localStorage.clear();}catch(_){Object.keys(localStorage).forEach(k=>localStorage.removeItem(k));} //Limpieza de localStorage
});
$(document).on('click','.bt_cargar',()=>{
  const pattern=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+)$/;
  Object.keys(localStorage).filter(k=>pattern.test(k)).forEach(k=>localStorage.removeItem(k));
  Mensaje('Actualizado'); setTimeout(()=>location.reload(),800);
}); // Actualizar la parte de imagen 


// DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [START]
function smileContenido(wi){
  console.log(wi.nombre);
  Mensaje('Bienvenido ' + wi.nombre + '!');
// HTML CONTENIDO [Start] 
  $('.app').html(`
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
      <button class="bt_login"><i class="fas fa-user"></i> ${wi.nombre}</button>
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
    
`); // HTML CONTENIDO [End] 

// JQUERY CONTENIDO JS [Start] 
// ...existing code...
// NOTAS: local 12h, sync batch, live, y borrar remoto
gosaves('.txe','id',$e=>$e.html()); getsaves('.txe','id',($e,v)=>$e.html(v));

const $edt=$('.txe'), $lis=$('.nts'), $bar=$('.editor .hcon'); let cnt=0;
const idki=s=>+String(s).replace(/\D+/g,'')||0, prev=(h,l=22)=>$('<div>').html(h||'').text().replace(/\s+/g,' ').trim().slice(0,l);
const actv=id=>($('[data-ki^="ki"]').removeClass('activa'),$(`[data-ki="${id}"]`).addClass('activa'));
const krem=id=>`remote:${id}`, kdir=id=>`dirty:${id}`, kils=()=>Object.keys(localStorage).filter(k=>/^ki\d+$/.test(k));
const titl=v=>{const t=prev(v); return t?(t+'...'):'';};

// Chip: texto + icono nube si está remoto
const fich=(id,t)=>{
  const put=$el=>{
    $el.empty().text(t||'');
    if(getls(krem(id))) $el.append(' ').append($('<i class="fa-solid fa-cloud-arrow-up"></i>'));
  };
  const $c=$(`[data-ki="${id}"]`);
  $c.length?put($c):put($(`<div class="nt nt${idki(id)}" data-ki="${id}"></div>`).appendTo($lis));
};

const carg=id=>{const v=getls(id)||''; $edt.attr('id',id).html(v).focus(); actv(id);};

const init=()=>{
  const ch=$('[data-ki^="ki"]').map((i,e)=>idki($(e).data('ki'))).get();
  const ks=kils();
  cnt=Math.max(cnt,0,...ch,...ks.map(idki));
  $.each(ks,(_,id)=>{const v=getls(id); v&&fich(id,titl(v));});
};

const okgd=(()=>{let t;return(ms=1600)=>{const $b=$('.guardar_nota');if(!$b.length)return;$b.addClass('bta').text('Guardado');clearTimeout(t);t=setTimeout(()=>{$b.removeClass('bta').text('Guardar');},ms);};})();

// Hidratar si local vacío (máx 100)
const hidr = async () => {
  const u=auth.currentUser, email=u?.email; if(!email||kils().length) return;
  try{
    const qy=query(collection(db,'smilenotas'), where('email','==',email), limit(100));
    const sn=await getDocs(qy); let mx=0;
    sn.forEach(ds=>{
      const d=ds.data(), id=d.ki||'ki0', html=d.nota||'';
      savels(id,html,12); savels(krem(id),1,720);
      fich(id,titl(html)); mx=Math.max(mx,idki(id));
    });
    cnt=Math.max(cnt,mx);
  }catch(e){console.error('Hydrate error:',e);}
};

// Sync batch solo dirty
const sinc = async ({silent=false}={})=>{
  const u=auth.currentUser, email=u?.email, usuario=u?.displayName||wi?.nombre||''; if(!email) return;
  const ids=kils().filter(id=>!!getls(kdir(id))).slice(0,100);
  if(!ids.length){ if(!silent) Mensaje('Nada que sincronizar'); return; }
  const bat=writeBatch(db);
  ids.forEach(id=>{
    const html=getls(id)||'', titulo=prev(html,22), rf=doc(db,'smilenotas',`${email}_${id}`);
    const dt={ki:id,titulo,usuario,email,nota:html,actualizacion:serverTimestamp()};
    if(!getls(krem(id))) dt.creacion=serverTimestamp();
    bat.set(rf,dt,{merge:true});
  });
  try{
    await bat.commit();
    ids.forEach(id=>{savels(krem(id),1,720); removels(kdir(id)); fich(id,titl(getls(id)));});
    if(!silent) Mensaje('Notas guardadas en la nube');
    okgd();
  }catch(e){console.error('Sync error:',e); if(!silent) Notificacion('Error al sincronizar notas','error');}
};

// Eliminar local + remoto
const elim = async id=>{
  const u=auth.currentUser, email=u?.email;
  try{ if(email) await deleteDoc(doc(db,'smilenotas',`${email}_${id}`)); }
  catch(e){ console.error('Delete cloud error:',e); Notificacion('No se pudo eliminar en la nube','error'); }
  finally{
    removels(id); removels(kdir(id)); removels(krem(id));
    $(`[data-ki="${id}"]`).remove();
    if($edt.attr('id')===id) $edt.removeAttr('id').empty();
    const ks=kils().sort((a,b)=>idki(a)-idki(b)); ks.length&&carg(ks.includes('ki0')?'ki0':ks[0]);
    Mensaje('Nota eliminada');
  }
};

// Live updates (no pisa “dirty”)
let unsub=null;
const subn=()=>{
  const u=auth.currentUser, email=u?.email; if(!email) return;
  if(typeof unsub==='function') try{unsub();}catch(_){}
  const qy=query(collection(db,'smilenotas'), where('email','==',email), limit(100));
  unsub=onSnapshot(qy, sn=>{
    let mx=cnt;
    sn.docChanges().forEach(ch=>{
      const d=ch.doc.data()||{}, id=d.ki||(ch.doc.id.split('_')[1]||'ki0'), html=d.nota||'';
      if(ch.type==='removed') return; // lo maneja elim()
      if(!getls(kdir(id))){
        savels(id,html,12); savels(krem(id),1,720);
        if($edt.attr('id')===id) $edt.html(html);
      }
      fich(id, titl(getls(id)||html)); mx=Math.max(mx,idki(id));
    });
    cnt=Math.max(cnt,mx);
    if(!$edt.attr('id')){
      const ks=kils().sort((a,b)=>idki(a)-idki(b));
      ks.length&&carg(ks.includes('ki0')?'ki0':ks[0]);
    }
  }, e=>console.error('Snapshot notas error:',e));
};

// Eventos
$edt.on('input',()=>{
  const id=$edt.attr('id'); if(!id) return;
  savels(id,$edt.html(),12); savels(kdir(id),1,12);
  fich(id, titl(getls(id)));
  okgd();
});

$(document).on('click','.guardar_nota',async()=>{
  const id=$edt.attr('id');
  if(id){savels(id,$edt.html(),12); savels(kdir(id),1,12);}
  await sinc({silent:false});
});

$(document).on('click','.agregar_nota',()=>{
  const tot=kils().length; if(tot>=100) return Notificacion('Máximo 100 notas por usuario','warning');
  const id=`ki${++cnt}`; fich(id,`Nota ${cnt}`); carg(id);
});
$(document).on('click','[data-ki^="ki"]',e=>carg($(e.currentTarget).data('ki')));
$(document).on('click','.limpiar_nota',async function(){
  const id=$edt.attr('id'); if(!id) return; await elim(id); adtm(this,'bta','Eliminado','Eliminar');
});

// Intento silencioso al ocultar/cerrar
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='hidden') sinc({silent:true}); });

// Init
(async()=>{
  init(); await hidr(); subn();
  const ks=kils().sort((a,b)=>idki(a)-idki(b));
  if(ks.length && !$edt.html()) carg(ks.includes('ki0')?'ki0':ks[0]);
})();

// Toolbar editor (corto)
const CMD={'.fa-bold':'bold','.fa-italic':'italic','.fa-underline':'underline','.fa-list-ul':'insertUnorderedList','.fa-list-ol':'insertOrderedList','.fa-align-left':'justifyLeft','.fa-align-center':'justifyCenter','.fa-align-right':'justifyRight','.fa-rotate-left':'undo'};
$.each(CMD,(sel,cmd)=>$bar.find(sel).attr('data-cmd',cmd));
let rng=null; const ened=()=>{const s=window.getSelection(); if(!s||!s.rangeCount)return false; const n=s.anchorNode; return n&&($edt[0]===n||$.contains($edt[0],n));};
const gsel=()=>{const s=window.getSelection(); if(s&&s.rangeCount&&ened()) rng=s.getRangeAt(0);};
const rsel=()=>{if(!rng)return; const s=window.getSelection(); s.removeAllRanges(); s.addRange(rng);};
const exec=c=>{if(!ened()&&rng) rsel(); document.execCommand(c,false,null); $edt.focus(); gsel(); stbr();};
$bar.on('mousedown','i',e=>e.preventDefault()).on('click','i',function(){const c=$(this).data('cmd'); c&&exec(c);});
const EST=[['.fa-bold','bold'],['.fa-italic','italic'],['.fa-underline','underline'],['.fa-list-ul','insertUnorderedList'],['.fa-list-ol','insertOrderedList']];
const stbr=()=>{if(!ened()) return void $bar.find('i').removeClass('actv').addClass('is-disabled'); $bar.find('i').removeClass('is-disabled'); $.each(EST,(_,a)=>$bar.find(a[0]).toggleClass('actv',document.queryCommandState(a[1]))); const ce=document.queryCommandState('justifyCenter'), dr=document.queryCommandState('justifyRight'); $bar.find('.fa-align-center').toggleClass('actv',ce); $bar.find('.fa-align-right').toggleClass('actv',dr); $bar.find('.fa-align-left').toggleClass('actv',!ce&&!dr);};
document.addEventListener('selectionchange',()=>{gsel(); stbr();}); $edt.on('keyup mouseup input',()=>{gsel(); stbr();}); gsel(); stbr();

// ==============================
// IMÁGENES: optimizadas + Firebase + Drag&Drop + Sync Manual
// ==============================
const $ps=$('.paste'), $bx=$('.ibx .bx'); $bx.each((i,e)=>$(e).attr('data-k',`im${i+1}`));
const $vw=$('.vw'), $im=$('.vw img'), $th=$('.vw .th'); let ci=-1;
const ikr=id=>`remote:${id}`, ikd=id=>`dirty:${id}`;

// Optimizar imagen (WebP/JPEG <=200KB) - más eficiente
const icmp=async(file,maxW=1600,maxKB=200)=>{
  const du=await new Promise(r=>{const fr=new FileReader();fr.onload=e=>r(e.target.result);fr.readAsDataURL(file)});
  const img=await new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.src=du;});
  const ratio=Math.min(1,maxW/img.naturalWidth), [w,h]=[Math.round(img.naturalWidth*ratio),Math.round(img.naturalHeight*ratio)];
  const cv=Object.assign(document.createElement('canvas'),{width:w,height:h}); cv.getContext('2d').drawImage(img,0,0,w,h);
  const fmt=cv.toDataURL('image/webp').startsWith('data:image/webp')?'image/webp':'image/jpeg';
  let [q,url]=[0.9,''];
  for(let i=0;i<6&&q>=0.5;i++,q=(q+0.5)/2){
    url=cv.toDataURL(fmt,q);
    if(Math.ceil((url.length-(`data:${fmt};base64,`).length)*3/4)<=maxKB*1024) break;
  } return url;
};

// UI helpers optimizados
const lst=()=>$bx.map((i,e)=>$(e).attr('data-src')?i:null).get().filter(x=>x!==null);
const upd=($e,k)=>{if(getls(ikr(k||$e.attr('data-k')))&&!$e.find('.fa-cloud-arrow-up').length) $e.append(' <i class="fa-solid fa-cloud-arrow-up"></i>');};
const thumb=()=>{const L=lst(); $th.html(L.map(i=>`<div class="ti" data-i="${i}"><img src="${$bx.eq(i).attr('data-src')}">${getls(ikr($bx.eq(i).attr('data-k')))?'<i class="fa-solid fa-cloud-arrow-up"></i>':''}</div>`).join('')); $th.find(`[data-i="${ci}"]`).addClass('on');};
const set=(i,src)=>{const $b=$bx.eq(i), k=$b.attr('data-k'); $b.attr('data-src',src).addClass('fill').html(`<img src="${src}">`); upd($b,k); savels(k,src,720); savels(ikd(k),1,12); thumb();};
const emp=()=>$bx.toArray().findIndex(e=>!$(e).attr('data-src'));
const rea=async f=>{const opt=await icmp(f); set(emp()>=0?emp():0,opt);};
const take=fs=>[...fs].filter(f=>f?.type?.startsWith('image/')).forEach(rea);

// Eventos: pegar + DRAG&DROP + subir (FIXED)
$ps.on('paste',e=>{const d=e.originalEvent.clipboardData; d&&take([...d.items].map(x=>x.getAsFile()).filter(Boolean));});
$ps.on('dblclick',()=>$('<input type="file" accept="image/*" multiple hidden>').appendTo('body').on('change',e=>{take(e.target.files); $(e.target).remove();}).trigger('click'));

// DRAG & DROP FIXED - Prevenir navegación
$ps.on('dragover dragenter',e=>{e.preventDefault(); e.stopPropagation();});
$ps.on('drop',e=>{e.preventDefault(); e.stopPropagation(); const dt=e.originalEvent.dataTransfer; dt?.files?.length&&take(dt.files);});
$(document).on('dragover drop',e=>e.preventDefault()); // Global fallback

// Cargar imágenes guardadas localmente
const load=()=>{getsaves('.ibx .bx','data-k',($e,v)=>{if(v){$e.attr('data-src',v).addClass('fill').html(`<img src="${v}">`); upd($e);}}); gosaves('.ibx .bx','data-k',$e=>$e.attr('data-src')||''); thumb();};
load();

// OPCIÓN 1: Auto-sync (silencioso al ocultar pestaña)
const isyn=async({silent=false}={})=>{
  const {currentUser:u}=auth, email=u?.email, usuario=u?.displayName||wi?.nombre||''; if(!email) return;
  const dirty=$bx.filter((i,e)=>{const k=$(e).attr('data-k'); return $(e).attr('data-src')&&getls(ikd(k));}).get();
  if(!dirty.length) return silent||Mensaje('Nada que sincronizar');
  
  const bat=writeBatch(db);
  dirty.forEach(el=>{
    const $e=$(el), [k,src]=[$e.attr('data-k'),$e.attr('data-src')], rf=doc(db,'smileimgs',`${email}_${k}`);
    const dt={email,usuario,titulo:`Imagen ${k.replace('im','')}`,imagen:src,actualizacion:serverTimestamp()};
    if(!getls(ikr(k))) dt.creacion=serverTimestamp();
    bat.set(rf,dt,{merge:true});
  });
  
  try{
    await bat.commit();
    dirty.forEach(el=>{const $e=$(el), k=$e.attr('data-k'); savels(ikr(k),1,720); removels(ikd(k)); upd($e,k);});
    if(!silent) Mensaje('Imágenes guardadas en la nube');
    okgd?.(); thumb();
  }catch(e){console.error('Sync imgs error:',e); !silent&&Notificacion('Error al sincronizar imágenes','error');}
};

// OPCIÓN 2: Sync manual con botón .dw (para móviles)
const syncManual=async()=>{
  const {currentUser:u}=auth, email=u?.email, usuario=u?.displayName||wi?.nombre||''; if(!email) return Notificacion('Debes iniciar sesión','error');
  const dirty=$bx.filter((i,e)=>{const k=$(e).attr('data-k'); return $(e).attr('data-src')&&getls(ikd(k));}).get();
  if(!dirty.length) return Mensaje('No hay imágenes nuevas para guardar');
  
  // Mostrar progreso
  const $btn=$('.vw .dw'); $btn.html('<i class="fa-solid fa-spinner fa-spin"></i>').prop('disabled',true);
  
  const bat=writeBatch(db);
  dirty.forEach(el=>{
    const $e=$(el), [k,src]=[$e.attr('data-k'),$e.attr('data-src')], rf=doc(db,'smileimgs',`${email}_${k}`);
    const dt={email,usuario,titulo:`Imagen ${k.replace('im','')}`,imagen:src,actualizacion:serverTimestamp()};
    if(!getls(ikr(k))) dt.creacion=serverTimestamp();
    bat.set(rf,dt,{merge:true});
  });
  
  try{
    await bat.commit();
    dirty.forEach(el=>{const $e=$(el), k=$e.attr('data-k'); savels(ikr(k),1,720); removels(ikd(k)); upd($e,k);});
    Mensaje('Guardado en nube'); // Mensaje específico para sync manual
    thumb();
  }catch(e){
    console.error('Manual sync error:',e); 
    Notificacion('Error al guardar en la nube','error');
  }finally{
    // Restaurar botón
    $btn.html('<i class="fa-solid fa-cloud-arrow-up"></i>').prop('disabled',false);
  }
};

// Hidratar desde Firebase (si local vacío)
const ihid=async()=>{
  const {currentUser:u}=auth, email=u?.email; if(!email||lst().length) return;
  try{
    const sn=await getDocs(query(collection(db,'smileimgs'),where('email','==',email),limit(60)));
    sn.forEach(ds=>{
      const {imagen:src,...d}=ds.data()||{}, k=ds.id.split('_')[1]||'im1', $b=$bx.filter(`[data-k="${k}"]`);
      if($b.length&&src){$b.attr('data-src',src).addClass('fill').html(`<img src="${src}">`); savels(k,src,720); savels(ikr(k),1,720); upd($b,k);}
    }); thumb();
  }catch(e){console.error('Hydrate imgs error:',e);}
};

// Live updates desde Firebase
let iun=null; const isub=()=>{
  const {currentUser:u}=auth, email=u?.email; if(!email) return; iun?.(); 
  iun=onSnapshot(query(collection(db,'smileimgs'),where('email','==',email),limit(60)),sn=>{
    sn.docChanges().forEach(({type,doc})=>{
      if(type==='removed') return;
      const {imagen:src,...d}=doc.data()||{}, k=doc.id.split('_')[1]||'im1', $b=$bx.filter(`[data-k="${k}"]`);
      if(src&&$b.length&&!getls(ikd(k))){$b.attr('data-src',src).addClass('fill').html(`<img src="${src}">`); savels(k,src,720); savels(ikr(k),1,720); upd($b,k);}
    }); thumb();
  },e=>console.error('Snapshot imgs error:',e));
};

// Eliminar imagen (local + remoto)
const idel=async k=>{
  const {currentUser:u}=auth, email=u?.email;
  try{email&&await deleteDoc(doc(db,'smileimgs',`${email}_${k}`));}catch(e){console.error('Delete img error:',e);}
  [k,ikd(k),ikr(k)].forEach(removels); $bx.filter(`[data-k="${k}"]`).removeAttr('data-src').removeClass('fill').empty(); thumb(); Mensaje('Imagen eliminada');
};

// Visor fullscreen + navegación
const show=i=>{const s=$bx.eq(i).attr('data-src'); if(!s) return; ci=i; $im.attr('src',s); $vw.addClass('show'); thumb(); const $ti=$th.find(`[data-i="${i}"]`).addClass('on'); $ti.length&&$th.animate({scrollLeft:Math.max(0,$ti.position().left+$th.scrollLeft()-($th.width()-$ti.width())/2)},180);};
const hide=()=>{$vw.removeClass('show'); ci=-1;};
const nav=dir=>{const L=lst(); if(!L.length) return hide(); show(L[(L.indexOf(ci)+dir+L.length)%L.length]);};
const dl=()=>{const a=Object.assign(document.createElement('a'),{href:$im.attr('src'),download:`wiimage-${ci+1}.png`}); document.body.append(a); a.click(); a.remove();};
const rm=async()=>{const k=$bx.eq(ci).attr('data-k'); await idel(k); const L=lst(); L.length?show(L[0]):hide();};

// Eventos UI del visor
$(document).on('click','.ibx .bx',e=>{const i=$bx.index(e.currentTarget); $(e.currentTarget).attr('data-src')&&show(i);});
$(document).on('click','.vw .cls',hide);
$(document).on('click','.vw',e=>{if(e.target===e.currentTarget) hide();});
$(document).on('click','.vw .nx',()=>nav(1));
$(document).on('click','.vw .pv',()=>nav(-1));
$(document).on('click','.vw .dl',dl);
$(document).on('click','.vw .rm',rm);
$(document).on('click','.vw .dw',syncManual); // NUEVO: Sync manual con botón
$(document).on('click','.vw .th .ti',e=>show(+$(e.currentTarget).data('i')));

// Atajos de teclado en visor
$(document).on('keydown',e=>{
  if(!$vw.hasClass('show')) return;
  if(e.ctrlKey&&['s','S'].includes(e.key)) return e.preventDefault(),dl();
  if(e.key==='Escape') return hide();
  if(['ArrowRight','>','.'].includes(e.key)) return nav(1);
  if(['ArrowLeft','<',','].includes(e.key)) return nav(-1);
  if(['Delete','Supr','Backspace'].includes(e.key)) return rm();
  if(e.key===' ') return e.preventDefault(),syncManual(); // Espaciadora para sync manual
});

// Botón "Borrar todo" (notas + imágenes)
$(document).on('click','.bt_borrar',async function(){
  if(!confirm('¿Eliminar todo lo guardado?')) return;
  try{localStorage.clear();}catch(_){Object.keys(localStorage).forEach(k=>localStorage.removeItem(k));}
  $('[data-ki^="ki"]').remove(); $('.txe').removeAttr('id').empty(); cnt=0;
  $bx.removeAttr('data-src').removeClass('fill').empty(); hide(); thumb();
  adtm(this,'bta','Eliminado','Eliminar');
});

// OPCIÓN 1: Auto-sync al ocultar pestaña (para desktop)
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='hidden') isyn({silent:true}); });

// Inicialización
(async()=>{await ihid(); isub();})();

// JQUERY CONTENIDO JS [End] 

}// DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [START]

 