import './biblia.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { savels, getls, Notificacion, wiSpin, wiTip } from '../widev.js';

export const render = () => `
    <div class="wibiblia">
      <div class="biblia_layout">
        <div class="biblia_player_wrap">
          <div class="biblia_player">
            <div class="player_info">
              <h3 class="current_title">Selecciona un capítulo</h3>
              <p class="current_book">Audio Biblia - ${app}</p>
            </div>
            
            <canvas id="audioCanvas" class="audio_canvas"></canvas>
            
            <div class="player_progress">
              <div class="progress_time"><span class="time_current">0:00</span><span class="time_duration">0:00</span></div>
              <div class="progress_container"><div class="progress_bg"><div class="progress_fill"></div></div></div>
            </div>
            
            <div class="player_controls">
              <button class="btn_control btn_repeat" ${wiTip('Repetir')}><i class="fas fa-repeat"></i></button>
              <button class="btn_control btn_prev" ${wiTip('Anterior')}><i class="fas fa-step-backward"></i></button>
              <button class="btn_control btn_play" ${wiTip('Reproducir')}><i class="fas fa-play"></i></button>
              <button class="btn_control btn_next" ${wiTip('Siguiente')}><i class="fas fa-step-forward"></i></button>
              <div class="volume_control">
                <button class="btn_control btn_volume" ${wiTip('Silenciar')}><i class="fas fa-volume-up"></i></button>
                <div class="volume_container"><div class="volume_bg"><div class="volume_fill"></div></div></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="biblia_playlist">
          <div class="playlist_header">
            <h3><i class="fas fa-headphones"></i> Capítulos</h3>
            <div class="playlist_actions">
              <button class="btn_icon btn_fullscreen" ${wiTip('Pantalla completa')}><i class="fas fa-expand"></i></button>
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
`;

export const init = () => {
  const books={"San Mateo":28,"San Marcos":16,"San Lucas":24,"San Juan":21,"Hechos":28,"Romanos":16,"1 Corintios":16,"2 Corintios":13,"Galatas":6,"Efesios":6,"Filipenses":4,"Colosenses":4,"1 Tesalonicenses":5,"2 Tesalonicenses":3,"1 Timoteo":6,"2 Timoteo":4,"Tito":3,"Filemon":1,"Hebreos":13,"Santiago":5,"1 San Pedro":5,"2 San Pedro":3,"1 San Juan":5,"2 San Juan":1,"3 San Juan":1,"Judas":1,"Apocalipsis":22};
  const base='https://raw.githubusercontent.com/geluksee/hope/main/',audio=new Audio(),tracks=[];
  let idx=0,play=false,rep=false,first=true,cv,cvx,anim,bars=[],smoothBars=[];

  Object.entries(books).forEach(([b,c])=>Array.from({length:c},(_,i)=>{
    const n=tracks.length+1;tracks.push({book:b,chapter:i+1,title:`${b} - Capítulo ${i+1}`,url:`${base}${n}_${b.replace(/\s/g,'_')}_${String(i+1).padStart(2,'0')}.mp3`,num:n});
  }));

  const fmt=s=>isNaN(s)?'0:00':`${~~(s/60)}:${String(~~(s%60)).padStart(2,'0')}`;

  const draw=()=>{
    if(!cv||!cvx)return;
    cvx.clearRect(0,0,cv.width,cv.height);
    const n=45,w=cv.width/n,b=w*.65,r=b/2,t=play?audio.currentTime*2.5:0;
    const g=cvx.createLinearGradient(0,cv.height,0,cv.height*.3);
    g.addColorStop(0,getComputedStyle(document.documentElement).getPropertyValue('--mco').trim());
    g.addColorStop(1,getComputedStyle(document.documentElement).getPropertyValue('--hv').trim());
    smoothBars=smoothBars.length?smoothBars:Array(n).fill(0);
    for(let i=0;i<n;i++){
      const p=play?Math.sin(t+i*.18)*Math.sin(t*.3+i*.1):Math.sin(i*.3);
      smoothBars[i]+=(((p+1)/2*cv.height*.65+cv.height*.1)-smoothBars[i])*(play?.06:.02);
      const h=smoothBars[i],x=i*w+(w-b)/2,y=cv.height-h;
      cvx.fillStyle=g;
      cvx.beginPath();
      cvx.moveTo(x+r,y);
      cvx.lineTo(x+b-r,y);
      cvx.arcTo(x+b,y,x+b,y+r,r);
      cvx.lineTo(x+b,cv.height);
      cvx.lineTo(x,cv.height);
      cvx.lineTo(x,y+r);
      cvx.arcTo(x,y,x+r,y,r);
      cvx.fill();
    }
    anim=requestAnimationFrame(draw);
  };

  const stop=()=>{if(anim){cancelAnimationFrame(anim);anim=null;}cv&&cvx&&cvx.clearRect(0,0,cv.width,cv.height);smoothBars=[];};

  const render=()=>$('#playlistList').html(tracks.map((t,i)=>`
    <div class="playlist_item ${i===idx?'active':''}" data-index="${i}">
      <span class="item_number">${t.num}</span>
      <div class="item_info"><span class="item_title">${t.title}</span><span class="item_book">${t.book}</span></div>
      ${i===idx&&play?'<div class="item_playing_wave"><span></span><span></span><span></span></div>':''}
    </div>
  `).join(''));

  const load=i=>{
    if(i<0||i>=tracks.length)return;
    idx=i;const t=tracks[i];
    audio.src=t.url;audio.load();
    $('.current_title').text(t.title);$('.current_book').text(t.book);
    render();!first&&Notificacion(`📖 ${t.title}`,'info',2000);
    savels('bibliaIndex',idx,168);
  };

  const togglePlay=()=>{
    if(play){audio.pause();play=false;$('.btn_play i').attr('class','fas fa-play');stop();render();}
    else{
      if(!audio.src)load(0);
      audio.play().then(()=>{play=true;first=false;$('.btn_play i').attr('class','fas fa-pause');draw();render();}).catch(()=>Notificacion('Error al reproducir','error'));
    }
  };

  const nav=d=>{const n=idx+d;if(n>=0&&n<tracks.length){load(n);audio.src=tracks[n].url;audio.play().then(()=>{play=true;$('.btn_play i').attr('class','fas fa-pause');draw();render();});}else if(n>=tracks.length){load(0);audio.play().then(()=>{play=true;$('.btn_play i').attr('class','fas fa-pause');draw();render();});}};

  $(audio).on({
    timeupdate:()=>{const{currentTime:c,duration:d}=audio;$('.time_current').text(fmt(c));$('.time_duration').text(fmt(d));$('.progress_fill').css('width',`${(c/d)*100}%`);},
    ended:()=>rep?(audio.currentTime=0,audio.play()):nav(1),
    loadedmetadata:()=>$('.time_duration').text(fmt(audio.duration)),
    error:()=>Notificacion('Error al cargar audio','error')
  });

  $('.wibiblia').on('click','.btn_play',togglePlay);
  $('.wibiblia').on('click','#audioCanvas',togglePlay);
  $('.wibiblia').on('click','.btn_prev',()=>nav(-1));
  $('.wibiblia').on('click','.btn_next',()=>nav(1));
  $('.wibiblia').on('click','.btn_repeat',function(){rep=!rep;$(this).toggleClass('active');savels('bibliaRepeat',rep,168);});
  $('.wibiblia').on('click','.btn_volume',()=>{audio.muted=!audio.muted;$('.btn_volume i').attr('class',`fas ${audio.muted?'fa-volume-mute':'fa-volume-up'}`);});
  
  $('.wibiblia').on('click','.volume_container',function(e){
    const vol=e.offsetX/$(this).width();
    audio.volume=vol;
    audio.muted=false;
    $('.btn_volume i').attr('class','fas fa-volume-up');
    $('.volume_fill').css('width',`${vol*100}%`);
    savels('bibliaVolume',vol,168);
  });

  $('.wibiblia').on('click','.progress_container',function(e){if(!audio.duration)return;audio.currentTime=(e.offsetX/$(this).width())*audio.duration;});
  $('.wibiblia').on('click','.playlist_item',function(){load(parseInt($(this).data('index')));audio.play().then(()=>{play=true;$('.btn_play i').attr('class','fas fa-pause');draw();render();});});
  
  // Search with debounce
  let searchTimer;
  $('#searchInput').on('input',function(){
    const q=$(this).val().toLowerCase();
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        $('.playlist_item').each(function(){$(this).toggle($(this).text().toLowerCase().includes(q));});
    }, 200);
  });

  $('.wibiblia').on('click','.btn_fullscreen',()=>{const el=$('.wibiblia')[0];!document.fullscreenElement?(el.requestFullscreen?.()||el.webkitRequestFullscreen?.()||el.mozRequestFullScreen?.()):(document.exitFullscreen?.()||document.webkitExitFullscreen?.()||document.mozCancelFullScreen?.());});
  $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange.biblia',()=>{$('.btn_fullscreen i').attr('class',`fas fa-${!!(document.fullscreenElement||document.webkitFullscreenElement)?'compress':'expand'}`);});

  cv=$('#audioCanvas')[0];
  if(cv){
    cvx=cv.getContext('2d');
    const resize=()=>{
      const dpr=devicePixelRatio||1;
      cv.width=cv.offsetWidth*dpr;
      cv.height=cv.offsetHeight*dpr;
      cv.style.width=`${cv.offsetWidth}px`;
      cv.style.height=`${cv.offsetHeight}px`;
      cvx.scale(dpr,dpr);
    };
    resize();
    $(window).on('resize.biblia',resize);
    draw();
  }

  render();
  const savedIdx=getls('bibliaIndex');
  savedIdx!==null&&savedIdx>=0&&savedIdx<tracks.length&&load(savedIdx);
  getls('bibliaRepeat')&&(rep=true,$('.btn_repeat').addClass('active'));
  const savedVol=getls('bibliaVolume');
  if(savedVol){audio.volume=savedVol;$('.volume_fill').css('width',`${savedVol*100}%`);}else{audio.volume=.7;$('.volume_fill').css('width','70%');}

  window._bibliaAudio = audio; // Save to clean up later

  console.log('✅ Biblia Audio cargado');
};

export const cleanup = () => {
    $(window).off('.biblia');
    $(document).off('.biblia');
    if(window._bibliaAudio) {
        window._bibliaAudio.pause();
        window._bibliaAudio.removeAttribute('src');
        window._bibliaAudio.load();
        delete window._bibliaAudio;
    }
};
