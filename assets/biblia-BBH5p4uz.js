import{$ as t}from"./vendor-PbmUQHyn.js";import{e as M,c as C,w as A,l as F,I as h}from"./index-B3suI07f.js";const H=()=>`
    <div class="wibiblia">
      <div class="biblia_layout">
        <div class="biblia_player_wrap">
          <div class="biblia_player">
            <div class="player_info">
              <h3 class="current_title">Selecciona un capítulo</h3>
              <p class="current_book">Audio Biblia - ${M}</p>
            </div>
            
            <canvas id="audioCanvas" class="audio_canvas"></canvas>
            
            <div class="player_progress">
              <div class="progress_time"><span class="time_current">0:00</span><span class="time_duration">0:00</span></div>
              <div class="progress_container"><div class="progress_bg"><div class="progress_fill"></div></div></div>
            </div>
            
            <div class="player_controls">
              <button class="btn_control btn_repeat" ${h("Repetir")}><i class="fas fa-repeat"></i></button>
              <button class="btn_control btn_prev" ${h("Anterior")}><i class="fas fa-step-backward"></i></button>
              <button class="btn_control btn_play" ${h("Reproducir")}><i class="fas fa-play"></i></button>
              <button class="btn_control btn_next" ${h("Siguiente")}><i class="fas fa-step-forward"></i></button>
              <div class="volume_control">
                <button class="btn_control btn_volume" ${h("Silenciar")}><i class="fas fa-volume-up"></i></button>
                <div class="volume_container"><div class="volume_bg"><div class="volume_fill"></div></div></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="biblia_playlist">
          <div class="playlist_header">
            <h3><i class="fas fa-headphones"></i> Capítulos</h3>
            <div class="playlist_actions">
              <button class="btn_icon btn_fullscreen" ${h("Pantalla completa")}><i class="fas fa-expand"></i></button>
            </div>
          </div>
          <div class="citas_search_wrap playlist_search">
            <div class="citas_search_box">
              <i class="fas fa-search citas_search_ico"></i>
              <input type="text" id="searchInput" class="citas_search" placeholder="Buscar libro o capítulo..." autocomplete="off">
            </div>
          </div>
          <div class="playlist_list" id="playlistList"></div>
        </div>
      </div>
    </div>
`,N=()=>{const I={"San Mateo":28,"San Marcos":16,"San Lucas":24,"San Juan":21,Hechos:28,Romanos:16,"1 Corintios":16,"2 Corintios":13,Galatas:6,Efesios:6,Filipenses:4,Colosenses:4,"1 Tesalonicenses":5,"2 Tesalonicenses":3,"1 Timoteo":6,"2 Timoteo":4,Tito:3,Filemon:1,Hebreos:13,Santiago:5,"1 San Pedro":5,"2 San Pedro":3,"1 San Juan":5,"2 San Juan":1,"3 San Juan":1,Judas:1,Apocalipsis:22},L="https://raw.githubusercontent.com/geluksee/hope/main/",a=new Audio,c=[];let v=0,o=!1,_=!1,E=!0,s,l,y,d=[];Object.entries(I).forEach(([e,i])=>Array.from({length:i},(b,n)=>{const w=c.length+1;c.push({book:e,chapter:n+1,title:`${e} - Capítulo ${n+1}`,url:`${L}${w}_${e.replace(/\s/g,"_")}_${String(n+1).padStart(2,"0")}.mp3`,num:w})}));const x=e=>isNaN(e)?"0:00":`${~~(e/60)}:${String(~~(e%60)).padStart(2,"0")}`,m=()=>{if(!s||!l)return;l.clearRect(0,0,s.width,s.height);const e=45,i=s.width/e,b=i*.65,n=b/2,w=o?a.currentTime*2.5:0,T=l.createLinearGradient(0,s.height,0,s.height*.3);T.addColorStop(0,getComputedStyle(document.documentElement).getPropertyValue("--mco").trim()),T.addColorStop(1,getComputedStyle(document.documentElement).getPropertyValue("--hv").trim()),d=d.length?d:Array(e).fill(0);for(let r=0;r<e;r++){const z=o?Math.sin(w+r*.18)*Math.sin(w*.3+r*.1):Math.sin(r*.3);d[r]+=((z+1)/2*s.height*.65+s.height*.1-d[r])*(o?.06:.02);const J=d[r],u=r*i+(i-b)/2,f=s.height-J;l.fillStyle=T,l.beginPath(),l.moveTo(u+n,f),l.lineTo(u+b-n,f),l.arcTo(u+b,f,u+b,f+n,n),l.lineTo(u+b,s.height),l.lineTo(u,s.height),l.lineTo(u,f+n),l.arcTo(u,f,u+n,f,n),l.fill()}y=requestAnimationFrame(m)},q=()=>{y&&(cancelAnimationFrame(y),y=null),s&&l&&l.clearRect(0,0,s.width,s.height),d=[]},p=()=>t("#playlistList").html(c.map((e,i)=>`
    <div class="playlist_item ${i===v?"active":""}" data-index="${i}">
      <span class="item_number">${e.num}</span>
      <div class="item_info"><span class="item_title">${e.title}</span><span class="item_book">${e.book}</span></div>
      ${i===v&&o?'<div class="item_playing_wave"><span></span><span></span><span></span></div>':""}
    </div>
  `).join("")),g=e=>{if(e<0||e>=c.length)return;v=e;const i=c[e];a.src=i.url,a.load(),t(".current_title").text(i.title),t(".current_book").text(i.book),p(),!E&&C(`📖 ${i.title}`,"info",2e3),A("bibliaIndex",v,168)},R=()=>{o?(a.pause(),o=!1,t(".btn_play i").attr("class","fas fa-play"),q(),p()):(a.src||g(0),a.play().then(()=>{o=!0,E=!1,t(".btn_play i").attr("class","fas fa-pause"),m(),p()}).catch(()=>C("Error al reproducir","error")))},k=e=>{const i=v+e;i>=0&&i<c.length?(g(i),a.src=c[i].url,a.play().then(()=>{o=!0,t(".btn_play i").attr("class","fas fa-pause"),m(),p()})):i>=c.length&&(g(0),a.play().then(()=>{o=!0,t(".btn_play i").attr("class","fas fa-pause"),m(),p()}))};t(a).on({timeupdate:()=>{const{currentTime:e,duration:i}=a;t(".time_current").text(x(e)),t(".time_duration").text(x(i)),t(".progress_fill").css("width",`${e/i*100}%`)},ended:()=>_?(a.currentTime=0,a.play()):k(1),loadedmetadata:()=>t(".time_duration").text(x(a.duration)),error:()=>C("Error al cargar audio","error")}),t(".wibiblia").on("click",".btn_play",R),t(".wibiblia").on("click","#audioCanvas",R),t(".wibiblia").on("click",".btn_prev",()=>k(-1)),t(".wibiblia").on("click",".btn_next",()=>k(1)),t(".wibiblia").on("click",".btn_repeat",function(){_=!_,t(this).toggleClass("active"),A("bibliaRepeat",_,168)}),t(".wibiblia").on("click",".btn_volume",()=>{a.muted=!a.muted,t(".btn_volume i").attr("class",`fas ${a.muted?"fa-volume-mute":"fa-volume-up"}`)}),t(".wibiblia").on("click",".volume_container",function(e){const i=e.offsetX/t(this).width();a.volume=i,a.muted=!1,t(".btn_volume i").attr("class","fas fa-volume-up"),t(".volume_fill").css("width",`${i*100}%`),A("bibliaVolume",i,168)}),t(".wibiblia").on("click",".progress_container",function(e){a.duration&&(a.currentTime=e.offsetX/t(this).width()*a.duration)}),t(".wibiblia").on("click",".playlist_item",function(){g(parseInt(t(this).data("index"))),a.play().then(()=>{o=!0,t(".btn_play i").attr("class","fas fa-pause"),m(),p()})});let P;if(t("#searchInput").on("input",function(){const e=t(this).val().toLowerCase();clearTimeout(P),P=setTimeout(()=>{t(".playlist_item").each(function(){t(this).toggle(t(this).text().toLowerCase().includes(e))})},200)}),t(".wibiblia").on("click",".btn_fullscreen",()=>{const e=t(".wibiblia")[0];document.fullscreenElement?document.exitFullscreen?.()||document.webkitExitFullscreen?.()||document.mozCancelFullScreen?.():e.requestFullscreen?.()||e.webkitRequestFullscreen?.()||e.mozRequestFullScreen?.()}),t(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange.biblia",()=>{t(".btn_fullscreen i").attr("class",`fas fa-${document.fullscreenElement||document.webkitFullscreenElement?"compress":"expand"}`)}),s=t("#audioCanvas")[0],s){l=s.getContext("2d");const e=()=>{const i=devicePixelRatio||1;s.width=s.offsetWidth*i,s.height=s.offsetHeight*i,s.style.width=`${s.offsetWidth}px`,s.style.height=`${s.offsetHeight}px`,l.scale(i,i)};e(),t(window).on("resize.biblia",e),m()}p();const $=F("bibliaIndex");$!==null&&$>=0&&$<c.length&&g($),F("bibliaRepeat")&&(_=!0,t(".btn_repeat").addClass("active"));const S=F("bibliaVolume");S?(a.volume=S,t(".volume_fill").css("width",`${S*100}%`)):(a.volume=.7,t(".volume_fill").css("width","70%")),window._bibliaAudio=a,console.log("✅ Biblia Audio cargado")},j=()=>{t(window).off(".biblia"),t(document).off(".biblia"),window._bibliaAudio&&(window._bibliaAudio.pause(),window._bibliaAudio.removeAttribute("src"),window._bibliaAudio.load(),delete window._bibliaAudio)};export{j as cleanup,N as init,H as render};
