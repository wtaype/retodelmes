import{$ as r,t as e,b as t,c as l,a as p,l as d,M as m}from"./widev-DnIyZzvI.js";/* empty css              */r(".app").html("<h1>Cargando rankings...</h1>");const v=async()=>{const i=e("topSmiles");if(i)return c(i);try{const s=await t(l(p,"smiles"));if(s.empty)return r(".app").html('<div class="estado-vacio"><i class="fa-solid fa-user-slash"></i><p>No hay empleados registrados</p></div>');const o=s.docs.map(a=>({id:a.id,...a.data()})).sort((a,n)=>(n.puntos||0)-(a.puntos||0));d("topSmiles",o,5),c(o),m(`✅ ${s.size} empleados cargados`)}catch(s){console.error(s),r(".app").html('<div class="estado-error"><i class="fa-solid fa-exclamation-triangle"></i><p>Error al cargar</p></div>')}};function c(i){r(".app").html(i.map((s,o)=>{const a=o+1;return`
      <div class="worker-card ${a===1?"champion":a===2?"runner-up":""}">
        <div class="rank-badge"><i class="fas fa-${a===1?"crown":a===2?"medal":"user"}"></i>#${a}</div>
        <div class="worker-avatar">
          <img src="${s.imagen||"/smile.png"}" alt="${s.nombre}">
        </div>
        <div class="worker-info">
          <h3>${s.nombre}</h3>
          <p>${s.descripcion||"Colaborador"}</p>
        </div>
        <div class="worker-points">
          <span class="points-number">${s.puntos||0}</span>
          <span class="points-label">puntos</span>
        </div>
      </div>
    `}).join(""))}v();
