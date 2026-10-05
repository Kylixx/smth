/* Пиксельная заставка: сердце собирается из падающих пикселей, бьётся, печатается «ДЛЯ ТЕБЯ», экран рассыпается блоками */
(function(){
  const el=document.getElementById('px'); if(!el) return;
  const done=()=>{ el.remove(); document.body.classList.remove('px-on'); };
  try{
    if(matchMedia('(prefers-reduced-motion:reduce)').matches) return done();
    document.body.classList.add('px-on');
    const cv=document.createElement('canvas'), g=cv.getContext('2d'); el.appendChild(cv);
    const dpr=Math.min(2,devicePixelRatio||1), W=innerWidth, H=innerHeight;
    cv.width=W*dpr; cv.height=H*dpr; g.setTransform(dpr,0,0,dpr,0,0);
    const S=['..XXX...XXX..','.XXXXX.XXXXX.','XXXXXXXXXXXXX','XXXXXXXXXXXXX','XXXXXXXXXXXXX','.XXXXXXXXXXX.','..XXXXXXXXX..','...XXXXXXX...','....XXXXX....','.....XXX.....','......X......'];
    const c=Math.max(8,Math.floor(Math.min(W,H*.8)*.5/13)), ox=Math.round((W-13*c)/2), oy=Math.round(H*.5-6.5*c);
    const rnd=Math.random, cells=[];
    S.forEach((row,r)=>[...row].forEach((ch,x)=>{ if(ch!=='X') return;
      const col=(x+r<=6&&r<=3)?'#ffd1de':(r>=7||(x>=10&&r>=4))?'#d9468a':'#f08aa8';
      cells.push({x:ox+x*c,y:oy+r*c,col,d:(10-r)*70+rnd()*260,y0:-c*(2+rnd()*10)}); }));
    const stars=Array.from({length:46},()=>({x:Math.floor(rnd()*W/(c/2))*(c/2),y:Math.floor(rnd()*H/(c/2))*(c/2),p:rnd()*6}));
    const bs=Math.ceil(c*1.2), nx=Math.ceil(W/bs), ny=Math.ceil(H/bs), bd=[];
    for(let j=0;j<ny;j++) for(let i=0;i<nx;i++) bd.push(.55*(i+j)/(nx+ny)+.45*rnd());
    const TXT='ДЛЯ ТЕБЯ', fs=Math.max(13,Math.round(c*.75)), ty=oy+11*c+c*2.2;
    const t0=performance.now(); let tD=t0+2600;
    el.addEventListener('pointerdown',()=>{ tD=Math.min(tD,performance.now()); });
    el.style.background='transparent';
    (function f(now){
      const t=now-t0, p=(now-tD)/1000;
      if(p>=1.05) return done();
      g.globalCompositeOperation='source-over'; g.fillStyle='#141414'; g.fillRect(0,0,W,H);
      stars.forEach(s=>{ g.fillStyle=`rgba(239,236,230,${.1+.25*Math.abs(Math.sin(t/700+s.p))})`; g.fillRect(s.x,s.y,c/2,c/2); });
      const bt=t-1700, k=bt>0?1+.07*Math.abs(Math.sin(bt/800*Math.PI*2)):1;
      g.save(); g.translate(W/2,oy+5.5*c); g.scale(k,k); g.translate(-W/2,-(oy+5.5*c));
      cells.forEach(q=>{ const u=Math.min(1,Math.max(0,(t-q.d)/700)); if(u<=0) return;
        const e=1-Math.pow(1-u,3), y=Math.round((q.y0+(q.y-q.y0)*e)/(c/2))*(c/2);
        g.fillStyle=q.col; g.fillRect(q.x,y,c-1,c-1); });
      g.restore();
      const n=Math.max(0,Math.min(TXT.length,Math.floor((t-1500)/90)));
      if(n>0||t>1500){ g.font=`500 ${fs}px 'JetBrains Mono',monospace`; g.textAlign='center'; g.fillStyle='#efece6';
        g.fillText(TXT.slice(0,n)+((Math.floor(t/350)%2)?'':'▮'),W/2,ty); }
      if(p>0) for(let j=0;j<ny;j++) for(let i=0;i<nx;i++) if(p>bd[j*nx+i]) g.clearRect(i*bs,j*bs,bs,bs);
      requestAnimationFrame(f);
    })(t0);
  }catch(e){ done(); }
})();
