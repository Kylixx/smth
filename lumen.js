/* LŪMEN: hero (видео, сетка, узлы, карточка), меню, шапка */
(function(){try{
  const $=(s,r=document)=>r.querySelector(s);
  document.body.prepend(Object.assign(document.createElement('div'),{id:'gridbg',ariaHidden:'true'}));
  const hero=$('#hero');
  if(hero){
    const V=['12.6%','37.5%','61.9%','86.2%'], H=['32.7%','71.4%'];
    let h='<video class="hv anim-fade-in" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_115057_94c3699b-0fd1-4124-bcf3-3626bb8c1f77.mp4" autoplay muted loop playsinline preload="auto"></video><div class="hdeco">';
    V.forEach((l,i)=>h+=`<i class="gl v anim-grid-v" style="left:${l};animation-delay:${600+i*100}ms"></i>`);
    H.forEach((t,i)=>h+=`<i class="gl h anim-grid-h" style="top:${t};animation-delay:${800+i*150}ms"></i>`);
    H.forEach((t,hi)=>V.forEach((l,vi)=>h+=`<i class="pl anim-scale-in" style="top:${t};left:${l};animation-delay:${1000+(hi*4+vi)*80}ms"><b></b><u></u></i>`));
    h+='</div><div class="hn">';
    // узлы: квадрат [top,left,delay], подпись [top,left,анимация,delay], линии [x1,y1,x2,y2,delay]
    [{sq:[27,60,1500],lb:[11,26,'left',1100],t:'[ ТЫ ]',d:'Главный адресат этого сайта и всего, что в нём.',w:160,c:[[38,14,52,14,1200],[52,14,60,27,1400]]},
     {sq:[58,32,1800],lb:[76,3,'left',1400],t:'[ МЫ ]',d:'Каждый кадр и каждая мелочь, которую я помню.',w:160,c:[[32,58,20,74,1500],[20,74,6,74,1700]]},
     {sq:[63,50,2100],lb:[50,78,'right',1700],t:'[ ДАЛЬШЕ ]',d:'Листай вниз: там ещё много приветов от меня.',w:180,c:[[78,53,63,53,1800],[63,53,50,63,2000]]}
    ].forEach(n=>{
      n.c.forEach(l=>h+=`<svg class="cl anim-fade-in" style="animation-delay:${l[4]}ms"><line x1="${l[0]}%" y1="${l[1]}%" x2="${l[2]}%" y2="${l[3]}%" stroke="rgba(255,255,255,.25)" stroke-width="1" vector-effect="non-scaling-stroke"/></svg>`);
      h+=`<div class="nlb anim-slide-${n.lb[2]}" style="top:${n.lb[0]}%;left:${n.lb[1]}%;animation-delay:${n.lb[3]}ms"><span>${n.t}</span><p style="max-width:${n.w}px">${n.d}</p></div>`;
      h+=`<div class="sq anim-scale-in" style="top:${n.sq[0]}%;left:${n.sq[1]}%;animation-delay:${n.sq[2]}ms"></div>`;
    });
    h+=`</div><div class="hb"><a class="btn anim-fade-up" href="#desk" style="animation-delay:900ms">Смотреть наши фото</a>
      <div class="hc anim-slide-right" style="animation-delay:1100ms"><span class="bdg">Сделано для одного человека</span>
        <div class="hcb"><svg viewBox="0 0 280 168" preserveAspectRatio="none"><polygon points="0.5,0.5 279.5,0.5 279.5,167.5 30,167.5 0.5,137.5" fill="none" stroke="#AFDDFF" stroke-width="1" vector-effect="non-scaling-stroke"/></svg>
        <p>Здесь собрано всё, что я не умею сказать вслух: фотографии, причины, письмо и немного магии.</p><a href="#letter">ОТКРЫТЬ_ПИСЬМО</a></div></div></div>`;
    hero.insertAdjacentHTML('afterbegin',h);
  }
  // меню
  const menu=$('#menu'), bur=$('#burger');
  const set=o=>{ menu.classList.toggle('open',o); bur.classList.toggle('open',o); bur.setAttribute('aria-expanded',o); menu.setAttribute('aria-hidden',!o); };
  bur.addEventListener('click',()=>set(!menu.classList.contains('open')));
  $('#mclose').addEventListener('click',()=>set(false)); $('.mbd').addEventListener('click',()=>set(false));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>set(false)));
  // фон шапки после прокрутки
  const sc=()=>document.body.classList.toggle('sc',scrollY>60); sc(); addEventListener('scroll',sc,{passive:true});
}catch(e){ console.warn('lumen:',e); }})();
