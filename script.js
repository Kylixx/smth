/* =====================================================
   ✎ ЗДЕСЬ ВСЁ, ЧТО НУЖНО ПОМЕНЯТЬ
   ===================================================== */
const NAME  = 'моя любимая зайка';        // например: 'Анечка' → «Для тебя / Анечка»
const SINCE = '2025-10-06';                       // дата, когда вы вместе (ГГГГ-ММ-ДД)
const EYEBROW = 'Моё сердце — твоё';   // маленькая надпись над заголовком

// Уведомления и фото приходят тебе через приложение ntfy (бесплатное, без регистрации).
// Подпишись в приложении на канал с таким же названием. Название — как пароль, никому не показывай.
// Если оставить пустым, кнопка с фото не появится и уведомлений не будет.
const NTFY_SERVER = 'https://ntfy.sh';
const NTFY_TOPIC  = 'lovenote-fllhcypchakd27qfkoay';

// Фото лежат в папке photos рядом с index.html
const PHOTOS = [
  {src:'photos/1.jpg', cap:'Тот самый день'},
  {src:'photos/2.jpg', cap:'Ты смеёшься — я счастлив'},
  {src:'photos/3.jpg', cap:'Моё любимое место — рядом с тобой'},
  {src:'photos/4.jpg', cap:'Просто мы'},
  {src:'photos/5.jpg', cap:'Наш вечер'},
  {src:'photos/6.jpg', cap:'Навсегда в кадре'},
];

// Рисунки и картинки: отдельный раздел «Мы в рисунках» между «Причинами» и «Небом»
// draw:true — белый фон рисунка сливается с бумагой карточки; draw:false — обычная фотография
const ARTS = [
  {src:'photos/art1.jpg', cap:'Рука в руке', draw:true},
  {src:'photos/art2.jpg', cap:'Два маленьких нас', draw:true},
  {src:'photos/art3.jpg', cap:'Чмоки-чмоки', draw:false},
];

const REASONS = [
  'За твою улыбку, от которой у меня сбивается всё внутри',
  'За то, как ты смеёшься над моими шутками, даже плохими',
  'За то, что рядом с тобой я становлюсь лучше',
  'За твои глаза, в которых можно потеряться',
  'За каждое «доброе утро» и «спокойной ночи»',
  'За то, что ты — это ты',
];

const LETTER = `Лера, любимая моя,

я не умею говорить так красиво, как поэты, но умею чувствовать.

Рядом с тобой даже обычный день становится особенным. Спасибо тебе за тепло, за смех, за то, что ты есть.

Я люблю тебя. Сегодня, завтра и всегда.

Твой котенок ♥`;

/* Большое признание: два абзаца. Первое предложение крупно, остальное по две фразы, они появляются при прокрутке. */
// Видеоклип между «Колесом желаний» и признанием. Положи файл в папку video рядом с index.html
const CLIP = {src:'video/monolog.mp4', poster:'video/monolog-poster.jpg', label:'Слова, которые лучше меня сказали за меня', hint:'нажми, чтобы включить звук и видео'};

// Песня: положи mp3 в папку audio и назови song.mp3 (или поменяй путь здесь)
const SONG = {src:'audio/song.mp3', cover:'audio/cover.jpg', title:'we fell in love in october', artist:'girl in red', label:'Наша песня'};

// Видео для первого экрана и первой карточки причин (можно заменить на свои файлы из папки video)
const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';
const FEAT_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';
const REASON_TITLES = ['Твоя улыбка.','Рядом с тобой.','Просто ты.'];

const LOVE_TITLE = 'Это то, что находится у меня на душе, и то, что хотелось тебе всё это время сказать';
const LOVE_TEXT = [
  `Ты для меня — человек, чью значимость невозможно выразить словами, любовь моя. Иногда я пытаюсь найти идеальные слова, чтобы объяснить, что ты для меня значишь, но любые слова кажутся слишком незначительными. Ты стала такой прекрасной и важной частью моей жизни, что я просто не представляю, как бы она выглядела без тебя. Ты не просто человек, присутствующий в моей жизни, - ты стала той, с кем мое сердце связано неразрывными узами. До встречи с тобой я и представить не мог, что один человек может стать для меня настолько важным. Постепенно ты стала частью всего, что меня окружает. Ты — первая, кому я хочу рассказать о своей радости; та, о ком я думаю в трудные дни; та, кого мое сердце ищет само собой, даже когда я этого не осознаю. Надеюсь, ты всегда будешь помнить, как много ты для меня значишь — особенно в те моменты, когда тебе кажется, что ты недостаточно хороша. Тебя ценят так, как ты, вероятно, даже не замечаешь. Я люблю твое сердце, твой характер, твою доброту, твой образ мыслей и все те мелочи, которые делают тебя именно такой, какая ты есть. Даже те черты, которые ты можешь считать недостатками, — это то, что я никогда не хотел бы в тебе менять. Твое счастье всегда будет для меня важным.`,
  `Я часто ловлю себя на мыслях о том, все ли у тебя хорошо, поела ли ты, не устала ли, не беспокоит ли тебя что-то. И не потому, что я обязан заботиться, а потому, что забота о тебе стала для меня чем-то естественным. Когда кто-то становится так дорог сердцу, начинаешь обращать внимание на самые мелкие детали, даже не задумываясь об этом. Спасибо тебе за каждое мгновение, которое мы разделили: за каждую улыбку, каждый смех, каждый разговор и каждое воспоминание, созданное нами вместе. Осознаешь ты это или нет, но ты принесла в мою жизнь столько счастья и изменила меня так, что я всегда буду тебе за это благодарен. Ты показала мне, как прекрасно - искренне заботиться о ком-то и любить всем сердцем. Если и есть что-то, что я хочу, чтобы ты всегда помнила, так это то, что для меня ты никогда не станешь «просто еще одним человеком». Ты всегда будешь для меня особенной — той, кого невозможно заменить; куда бы ни забросила нас жизнь, в моем сердце всегда будет место, принадлежащее только тебе. Ведь на самом деле ты для меня не просто важна. Ты та, кем я искренне дорожу, чье счастье мне по-настоящему дорого, и та, кому я всегда буду благодарен. Я люблю тебя сильнее, чем можно выразить словами, и надеюсь, ты никогда не забудешь, как глубоко я тебя люблю, ценю и как ты мне дорога.`
];

// Звёздочками отмечены слова, которые подсветятся розовым
const STATEMENT = 'Здесь слова, которые я бы хотел сказать *красивее*, чем умею. Поэтому часть из них мне помогли найти *поэты* разных времён.';

/* Стихи. Теперь их четыре, и между ними другие страницы.
   Толстой, Пушкин и Тютчев — подлинные тексты (общественное достояние).
   «Забыть тебя?» — четверостишие, которое в интернете чаще всего подписывают именем Есенина,
   но в его собраниях сочинений я его не нашёл, поэтому честно пишу «приписывают». */
const POEMS = [
  {author:'Для тебя', title:'Спасибо судьбе', stanzas:[
    ['Я мог никогда не узнать,','Как выглядит счастье земное.','Спасибо судьбе,','Что однажды','Свела нас с тобою.']
  ]},

  {author:'Для тебя', title:'Я зависим тобой', stanzas:[
    ['Я, кажется, стал тобой зависим.','Как ночь — от луны и сердце в огне.','И сколько бы ни путал я мысли,','Всё сводится снова к тебе.']
  ]},

  {author:'Для тебя', title:'Моё счастье — с тобой', stanzas:[
    ['Нехватка тебя, порой, бывает очень острой,','Пропадает улыбка, сон, погибает покой.','Понимаешь, у меня всё очень просто,','Моё счастье в секундах, проведённых с тобой...']
  ]},

  {author:'Приписывается С. А. Есенину', title:'Забыть тебя?', stanzas:[
    ['Забыть тебя? А с кем я буду','Печали, радости делить?','Пусть лучше все меня забудут,','Чем я смогу тебя забыть.']
  ]},
];

/* «Открой, когда…» — конверты. Впиши свои слова: сколько конвертов, столько и страниц. */
const ENVELOPES = [
  {when:'тебе грустно', text:'Представь, что я рядом и крепко тебя обнимаю. Плохие дни проходят, а я остаюсь. Ты справишься, ты всегда справляешься, но если не хочешь справляться одна, просто позови меня.'},
  {when:'ты скучаешь по мне', text:'Я тоже. Прямо сейчас я, скорее всего, думаю о тебе. Закрой глаза, вспомни, как мы смеялись в тот самый день, и знай: каждая минута до встречи стоит того.'},
  {when:'не получается уснуть', text:'Всё, что тревожит, подождёт до утра. А сейчас просто вдохни поглубже и думай о чём-нибудь тёплом. Например, о том, что кто-то на другом конце города тоже думает о тебе. Спокойной ночи, любимая.'},
  {when:'ты в себе сомневаешься', text:'Ты красивая, умная и добрая, и это не комплименты, а факты, которые я наблюдаю каждый день. Если когда-нибудь забудешь, перечитай это письмо.'},
  {when:'нужно просто улыбнуться', text:'Улыбнись. Вот так. Именно ради этой улыбки у меня сбивается всё внутри. Спасибо, что ты есть.'},
];

const JAPAN = [
  {ja:'月が綺麗ですね', ro:'Tsuki ga kirei desu ne', ru:'«Какая сегодня красивая луна».', note:'Так в Японии, по легенде, признаются в любви, не произнося этих слов.'},
  {ja:'君に出会えて、よかった', ro:'Kimi ni deaete, yokatta', ru:'«Как хорошо, что я встретил тебя».', note:''},
  {ja:'運命の赤い糸', ro:'Unmei no akai ito', ru:'«Красная нить судьбы».', note:'Невидимая нить, которая связывает людей, предназначенных друг другу. Такая же нить тянется сбоку по этой странице.'},
  {ja:'一期一会', ro:'Ichigo ichie', ru:'«Одна жизнь — одна встреча».', note:'Каждая встреча неповторима, и ты — самая драгоценная из них.'},
  {ja:'あなたと見る景色が、いちばん綺麗', ro:'Anata to miru keshiki ga, ichiban kirei', ru:'«Пейзаж, который я вижу рядом с тобой, — самый красивый».', note:''},
  {ja:'ずっと、そばにいてね', ro:'Zutto, soba ni ite ne', ru:'«Будь рядом всегда».', note:''},
];

// Колесо желаний: s — короткая надпись на колесе, t — что выпало, d — пояснение
const WISHES = [
  {s:'Обнимашки',  t:'Долгие обнимашки',        d:'Крепкие, тёплые и сколько захочешь. Требуй при встрече.'},
  {s:'Ужин',       t:'Ужин за мой счёт',        d:'Выбираешь любое место, я просто прихожу и плачу.'},
  {s:'Фильм',      t:'Фильм выбираешь ты',      d:'И я не ною, даже если это в пятый раз.'},
  {s:'Завтрак',    t:'Завтрак для тебя',        d:'Я готовлю, ты просыпаешься и улыбаешься.'},
  {s:'Массаж',     t:'Массаж плеч',             d:'Столько, сколько выдержат мои руки.'},
  {s:'Свидание',    t:'Свидание от меня',        d:'Место, время и сюрприз придумываю я. Тебе нужно только прийти.'},
  {s:'Поцелуй',    t:'Поцелуй',                 d:'Один очень долгий. Или много коротких.'},
  {s:'Мороженое',  t:'Прогулка и мороженое',    d:'Идём гулять, а я угощаю.'}
];

const MARQUEE = ['я люблю тебя','I love you','愛してる','Je t’aime','Ti amo','Te quiero','Ich liebe dich'];

/* =====================================================
   Дальше всё работает само
   ===================================================== */
const $  = (s,r=document) => r.querySelector(s);
const $$ = (s,r=document) => Array.from(r.querySelectorAll(s));
const clamp = (v,a,b)=>Math.min(b,Math.max(a,v));
const rnd = (a,b)=>a+Math.random()*(b-a);
const pad = n => String(n).padStart(2,'0');
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
const haptic = p => { try{ if(!finePointer && navigator.vibrate) navigator.vibrate(p); }catch(e){} };
let vw = innerWidth, vh = innerHeight;

/* ---------- Сборка страницы ---------- */
const HEART_D = 'M100 170C20 110 0 70 0 45C0 20 20 0 50 0C75 0 92 15 100 30C108 15 125 0 150 0C180 0 200 20 200 45C200 70 180 110 100 170Z';
const heartArt = `<svg class="heart-art" viewBox="0 0 200 180" aria-hidden="true">
  <defs>
    <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f08aa8"/><stop offset="1" stop-color="#e6c79c"/></linearGradient>
    <radialGradient id="hf" cx=".5" cy=".4" r=".62"><stop offset="0" stop-color="#f08aa8" stop-opacity=".4"/><stop offset="1" stop-color="#d9468a" stop-opacity="0"/></radialGradient>
  </defs>
  <g>
    <path class="fillh" d="${HEART_D}"/>
    ${[1,.84,.68,.52,.36].map((s,i)=>`<path pathLength="1" style="--k:${i}" transform="translate(100 85) scale(${s}) translate(-100 -85)" d="${HEART_D}"/>`).join('')}
  </g></svg>`;

const splitWordsHtml = (text,cls='') => text.split(' ').map((w,i)=>`<span class="w"><span class="wi" style="--i:${i}">${w}</span></span>`).join(' ');

const wheelSvg = () => {
  const n = WISHES.length, step = 360/n, R = 100;
  const pt = (deg,r)=>[(r*Math.sin(deg*Math.PI/180)).toFixed(2),(-r*Math.cos(deg*Math.PI/180)).toFixed(2)];
  const fills = ['#4a1230','#2c1429'];
  const segs = WISHES.map((w,i)=>{
    const a0 = i*step, a1 = (i+1)*step, c = a0+step/2, p0 = pt(a0,R), p1 = pt(a1,R);
    return `<path d="M0 0L${p0}A${R} ${R} 0 0 1 ${p1}Z" fill="${fills[i%2]}" stroke="rgba(230,199,156,.45)" stroke-width=".8"/>`
      + `<text transform="rotate(${c-90})" x="${R-9}" y="0" text-anchor="end" dominant-baseline="central" class="wl">${esc(w.s)}</text>`;
  }).join('');
  const dots = Array.from({length:16},(_,i)=>{ const p = pt(i*22.5,106); return `<circle cx="${p[0]}" cy="${p[1]}" r="1.7" class="wd" style="--i:${i}"/>`; }).join('');
  return `<svg viewBox="-114 -114 228 228" class="wheel-svg" aria-hidden="true">
    <circle r="110" fill="#1d0f1d" stroke="rgba(230,199,156,.55)" stroke-width="1.2"/>
    ${segs}${dots}
    <circle r="15" fill="#140a14" stroke="rgba(230,199,156,.7)" stroke-width="1"/>
    <path d="M0 6C-9 -1 -7 -9 -3.4 -9C-1.4 -9 0 -7.6 0 -6C0 -7.6 1.4 -9 3.4 -9C7 -9 9 -1 0 6Z" fill="#f08aa8"/>
  </svg>`;
};

const poemSection = (p,i) => {
  const variant = ['center','tint','flip','center'][i] || '';
  let n = 0;
  return `<section class="sec poem ${variant}" data-tag="Стихи"><div class="in-w"><div class="poem-grid">
    <div class="p-l">
      <div class="qm" aria-hidden="true">“</div>
      <div class="lab rv">${p.author}</div>
      <h2 class="ttl split">${splitWordsHtml(p.title)}</h2>
    </div>
    <div class="p-r">${p.stanzas.map(st=>`<div class="st">${st.map(l=>`<div class="ln rv" style="--d:${(n++%4)*80}">${l}</div>`).join('')}</div>`).join('')}
      ${p.note?`<div class="note rv">${p.note}</div>`:''}</div>
  </div></div></section>`;
};

const stmtWords = STATEMENT.split(' ').map(w=>{
  const hl = w.startsWith('*'); const t = w.replace(/\*/g,'');
  return `<span class="swd">${[...t].map(ch=>`<span class="sw${hl?' hl':''}">${ch}</span>`).join('')}</span>`;
}).join(' ');

const marqSet = MARQUEE.map(t=>`<span>${t}<b>♥</b></span>`).join('');

const loveSection = (()=>{
  if(!LOVE_TEXT.length) return '';
  const sents = p => p.match(/[^.!?]+[.!?]+[»"]?\s*/g) || [p];
  const first = sents(LOVE_TEXT[0]);
  const lead = first.shift().trim();
  let d = 0;
  const chunks = (list, gap) => {
    const out = [];
    for(let i=0;i<list.length;i+=2){
      out.push(`<p class="rv${gap && i===0 ? ' gap' : ''}" style="--d:${(d++%2)*90}">${esc(list.slice(i,i+2).join('').trim())}</p>`);
    }
    return out.join('');
  };
  const body = chunks(first,false) + LOVE_TEXT.slice(1).map(p=>chunks(sents(p),true)).join('');
  return `<section class="sec words" id="words" data-tag="Для тебя"><div class="in-w">
  <div class="lab rv">Для тебя</div>
  <p class="words-title rv">${esc(LOVE_TITLE)}</p>
  <p class="words-lead rv">${esc(lead)}</p>
  <div class="words-body">${body}</div>
  <div class="words-heart rv" aria-hidden="true">♥</div>
</div></section>`;
})();

const poemStack = POEMS.length ? `<section class="sec stack" id="stack" data-tag="Стихи"><div class="in-w">
  <div class="lab rv">Стихи</div>
  <h2 class="big split">${splitWordsHtml('Слова')} <em>${splitWordsHtml('для тебя')}</em></h2>
  <div class="sk-list">${POEMS.map((p,i)=>`<div class="sk"><div class="sk-c" style="--i:${i}">
    <div class="sk-top"><b>${pad(i+1)}</b><div><small>${esc(p.author)}</small><h3>${esc(p.title)}</h3></div></div>
    <div class="sk-l">${p.stanzas.map(st=>st.map(l=>`<p>${l}</p>`).join('')).join('')}</div></div></div>`).join('')}</div>
</div></section>` : '';
const songSection = `<section class="sec song" id="song" data-tag="Музыка" style="--cov:url('${SONG.cover}')"><div class="in-w">
  <div class="lab rv">${esc(SONG.label)}</div>
  <div class="sg rv" id="sg">
    <img class="sg-c" src="${SONG.cover}" alt="">
    <div class="sg-t"><div><b>${esc(SONG.title)}</b><span>${esc(SONG.artist)}</span></div><i class="eq" aria-hidden="true"><u></u><u></u><u></u><u></u><u></u></i></div>
    <input type="range" id="sgProg" min="0" max="1000" value="0" aria-label="Перемотка">
    <div class="sg-tm"><span id="sgCur">0:00</span><span id="sgRem">−0:00</span></div>
    <div class="sg-b">
      <button id="sgBack" type="button" aria-label="Назад на 10 секунд"><svg viewBox="0 0 24 24"><path d="M11 6v12L2 12zM22 6v12l-9-6z"/></svg></button>
      <button id="sgPlay" type="button" class="big" aria-label="Играть"><svg class="ic-play" viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg><svg class="ic-pause" viewBox="0 0 24 24"><path d="M6 4h4.5v16H6zM13.5 4H18v16h-4.5z"/></svg></button>
      <button id="sgFwd" type="button" aria-label="Вперёд на 10 секунд"><svg viewBox="0 0 24 24"><path d="M13 6v12l9-6zM2 6v12l9-6z"/></svg></button>
    </div>
    <div class="sg-v"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9z"/></svg><input type="range" id="sgVol" min="0" max="100" value="70" aria-label="Громкость"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9zM15 8a5 5 0 0 1 0 8M18 5a9 9 0 0 1 0 14" stroke="currentColor" stroke-width="1.6" fill="none"/></svg></div>
    <p class="sg-m" id="sgMsg"></p>
  </div>
</div></section>`;
const pull = t => t.split(' ').map((w,i)=>`<span class="pw"><span class="pu" style="--i:${i}">${w}</span></span>`).join(' ');
const CHK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const featCards = REASON_TITLES.map((t,i)=>{ const per=Math.ceil(REASONS.length/REASON_TITLES.length), items=REASONS.slice(i*per,i*per+per);
  return `<div class="fc rv" style="--d:${(i+1)*150}"><img class="fi" src="${PHOTOS[(i+1)%PHOTOS.length].src}" alt=""><h3>${t}<sup>(${pad(i+1)})</sup></h3><ul>${items.map(r=>`<li>${CHK}<span>${r}</span></li>`).join('')}</ul></div>`; }).join('');
const mqImgs = [...PHOTOS,...ARTS].map(p=>p.src);
const mqRow = a => `<div class="mq-r">${[...a,...a,...a].map(s=>`<img src="${s}" alt="" loading="lazy">`).join('')}</div>`;
$('#app').innerHTML = `
<section id="hero" data-tag=""><div class="pr-hero">
  <video class="pr-v" autoplay loop muted playsinline poster="${PHOTOS[0].src}" src="${HERO_VIDEO}"></video>
  <div class="pr-noise"></div><div class="pr-grad"></div>
  <div class="pr-hc">
    <h1 class="pr-h rv pull">${pull('Для тебя')}</h1>
    <p class="pr-p rv" style="--d:500">${esc(EYEBROW)}. Я собрал это для одного человека</p>
  </div>
</div></section>

<section class="mq" id="mq" aria-hidden="true">${mqRow(mqImgs)}${mqRow([...mqImgs].reverse())}</section>

<section class="sec statement" id="manifest" data-tag="Для тебя"><div class="in-w">
  <div class="lab rv">Из моих слов</div>
  <h2 class="pr-h2 rv pull">${pull('Я не мастер слов,')} <i>${pull('но очень стараюсь.')}</i></h2>
  <p id="stmt">${stmtWords}</p>
</div></section>

<div class="marq" aria-hidden="true"><div class="marq-t">${marqSet}${marqSet}${marqSet}${marqSet}</div></div>



<section class="gal" id="gal" data-tag="Мы"><div class="gal-pin">
  <div class="gal-head"><h2 class="split">${splitWordsHtml('Мы с тобой')}</h2><div class="cnt-n" id="galN">01 / ${pad(PHOTOS.length)}</div></div>
  <div class="gal-track" id="galTrack">${PHOTOS.map((p,i)=>`
    <figure class="card" data-i="${i}"><div class="ph" role="button" tabindex="0" aria-label="Открыть фото: ${esc(p.cap)}" style="width:calc(var(--ch)*.75)"><span class="heart">♥</span></div>
    <figcaption><b>${pad(i+1)}</b><span>${p.cap}</span></figcaption></figure>`).join('')}</div>
  <div class="gal-bar"><i></i></div>
</div></section>

${poemStack}

<section class="jap" id="jap" data-tag="Япония" style="--n:${JAPAN.length}"><div class="jap-pin"><div class="in-w">
  <div class="lab">Слова из Японии</div>
  ${JAPAN.map(j=>`<div class="jp"><div class="ja" lang="ja">${j.ja}</div><div class="r"><div class="ro">${j.ro}</div><div class="ru">${j.ru}</div>${j.note?`<div class="note">${j.note}</div>`:''}</div></div>`).join('')}
  <div class="jap-bar"><span id="japN">01</span><div class="ln"><i></i></div><span>${pad(JAPAN.length)}</span></div>
</div></div></section>

<section class="sec cnt-sec" id="cnt" data-tag="Вместе"><div class="in-w">
  <div class="lab rv">Время рядом с тобой</div>
  <p class="cnt-t rv">Мы вместе уже</p>
  <div class="cnt-num rv" id="days" style="--d:100">0</div>
  <p class="cnt-word rv" id="daysWord" style="--d:200">дней</p>
  <div class="cnt-live rv" style="--d:300"><div><b id="cH">0</b><small>часов</small></div><div><b id="cM">0</b><small>минут</small></div><div><b id="cS">0</b><small>секунд</small></div></div>
  <p class="cnt-detail rv" id="detail" style="--d:400"></p>
</div></section>



<section class="sec feat" id="rs" data-tag="Причины"><div class="noise"></div><div class="in-w">
  <h2 class="pr-h2 rv pull">${pull('Шесть причин, по которым я выбрал тебя.')} <span class="g">${pull('Хотя на самом деле их гораздо больше.')}</span></h2>
  <div class="fg">
    <div class="fc fvid rv"><video autoplay loop muted playsinline poster="${PHOTOS[1%PHOTOS.length].src}" src="${FEAT_VIDEO}"></video><p>Всё это — для тебя.</p></div>
    ${featCards}
  </div>
</div></section>

<section class="sec arts" id="arts" data-tag="Мы"><div class="in-w">
  <div class="lab rv">Ещё немного нас</div>
  <h2 class="big split">${splitWordsHtml('Мы в')} <em>${splitWordsHtml('рисунках')}</em></h2>
  <div class="arts-row">${ARTS.map((a,i)=>`
    <figure class="art rv" style="--d:${i*130};--r:${[-3,2.4,-1.8][i%3]}deg">
      <button class="art-b" data-i="${i}" aria-label="Открыть: ${esc(a.cap)}">
        <img class="${a.draw?'draw':'pic'}" src="${a.src}" alt="${esc(a.cap)}" loading="lazy" decoding="async">
        <span class="cap">${esc(a.cap)}</span>
      </button>
    </figure>`).join('')}</div>
</div></section>

<section class="sec" id="sky" data-tag="Небо"><div class="in-w">
  <div class="lab rv">Наше небо</div>
  <h2 class="big split">${splitWordsHtml('Зажги')} <em>${splitWordsHtml('звезду')}</em></h2>
  <p class="sub rv">Коснись неба, и появится звезда. Звёзды соединятся в созвездие, которое никто, кроме нас, не прочтёт.</p>
  <div class="sky-box rv" id="skyBox"><canvas id="skyc" aria-label="Звёздное небо: касайтесь, чтобы зажигать звёзды"></canvas><div class="sky-hint">коснись неба</div></div>
</div></section>



<section class="sec env" id="env" data-tag="Конверты"><div class="in-w">
  <div class="lab rv">Открой, когда…</div>
  <h2 class="big split">${splitWordsHtml('Письма на')} <em>${splitWordsHtml('каждый случай')}</em></h2>
  <p class="sub rv">Я оставил для тебя несколько конвертов. Открывай тот, который подходит под настроение.</p>
  <div class="env-grid">${ENVELOPES.map((e,i)=>`
    <button class="envl rv" style="--d:${(i%3)*100}" data-i="${i}" aria-label="Открыть конверт: ${esc(e.when)}">
      <span class="eb"><span class="ef"></span><span class="es"><svg viewBox="0 0 24 22" aria-hidden="true"><path d="M12 21S2 14.6 2 7.8C2 4.6 4.4 2.4 7.2 2.4c2 0 3.8 1.1 4.8 2.8 1-1.7 2.8-2.8 4.8-2.8C19.6 2.4 22 4.6 22 7.8 22 14.6 12 21 12 21Z"/></svg></span></span>
      <span class="et"><small>открой, когда</small><b>${esc(e.when)}</b></span>
    </button>`).join('')}</div>
</div></section>

<section class="sec wheel-sec" id="wheel" data-tag="Колесо"><div class="in-w">
  <div class="lab rv">Колесо желаний</div>
  <h2 class="big split">${splitWordsHtml('Крути, и я')} <em>${splitWordsHtml('исполню')}</em></h2>
  <p class="sub rv">Нажми на кнопку, и колесо решит, чем я тебя порадую. Всё честно, я ничего не подкручиваю.</p>
  <div class="wheel-box rv">
    <div class="wheel-wrap"><i class="wptr" aria-hidden="true"></i><div class="wheel" id="wheel-rot">${wheelSvg()}</div></div>
    <button class="btn" id="wheelBtn" type="button">Крутить</button>
    <div class="wheel-res" id="wheelRes" role="status" aria-live="polite"></div>
  </div>
</div></section>

${CLIP && CLIP.src ? `<section class="sec clip" id="clip" data-tag="Видео"><div class="in-w">
  <div class="lab rv">Момент для тебя</div>
  <p class="clip-t rv">${esc(CLIP.label)}</p>
  <div class="clip-box rv" id="clipBox">
    <video id="clipV" playsinline preload="metadata" poster="${esc(CLIP.poster||'')}" src="${esc(CLIP.src)}"></video>
    <button class="clip-play" id="clipPlay" type="button" aria-label="Смотреть видео"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span><em>${esc(CLIP.hint||'')}</em></button>
  </div>
</div></section>` : ''}

${loveSection}

${songSection}

<section class="sec letter-sec" id="letter" data-tag="Письмо" data-light="1"><div class="in-w">
  <div class="lab rv">Письмо</div>
  <div class="paper" id="paper" aria-live="polite"></div>
  <div class="seal-wrap rv">
    <button class="seal" id="heart" aria-label="Нажми, если тоже" aria-pressed="false" data-mag>
      <i class="ring"></i><i class="ring r2"></i>
      <svg class="sheart" viewBox="0 0 200 180" aria-hidden="true">
        <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6a3bb"/><stop offset=".55" stop-color="#e0487f"/><stop offset="1" stop-color="#a81f4e"/></linearGradient></defs>
        <path d="${HEART_D}" fill="url(#sg)"/>
        <path d="M32 58C28 38 42 22 62 22C48 32 40 44 38 62Z" fill="#fff" opacity=".32"/>
      </svg>
    </button>
    <div class="seal-txt" id="heartTxt">Нажми, если тоже</div>
  </div>
</div></section>
${NTFY_TOPIC?`<section class="sec ask" id="ask" data-tag="Просьба" data-light="1"><div class="in-w">
  <div class="lab rv">Одна просьба</div>
  <h2 class="big split">${splitWordsHtml('Срочно нужно фото')} <em>${splitWordsHtml('моей любимой')}</em></h2>
  <p class="sub rv">Сделай снимок прямо сейчас и отправь мне. Он придёт только ко мне.</p>
  <div class="ask-box rv" id="askBox">
    <input type="file" id="askFile" accept="image/*" capture="user" hidden>
    <div class="ask-prev" id="askPrev" hidden><img id="askImg" alt="Твоё фото перед отправкой"></div>
    <div class="ask-btns">
      <button class="btn" id="askShoot" type="button">Сделать фото</button>
      <button class="btn" id="askSend" type="button" hidden>Отправить мне</button>
      <button class="btn ghost" id="askRetake" type="button" hidden>Переснять</button>
    </div>
    <p class="ask-msg" id="askMsg" role="status" aria-live="polite"></p>
  </div>
</div></section>`:''}
<footer>сделано с любовью, только для тебя <b>♥</b></footer>`;

/* ---------- Появление при прокрутке ---------- */
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
$$('.rv,.split').forEach(el=>io.observe(el));

/* ---------- Лайтбокс ---------- */
const lightbox = $('#lightbox');
const lbOpen = ()=>lightbox.classList.contains('on');
function openLightbox(src,cap){
  lightbox.innerHTML = src ? `<img src="${src}" alt="${esc(cap)}">` : `<span class="heart">♥</span>`;
  lightbox.classList.add('on');
}
lightbox.addEventListener('click',()=>lightbox.classList.remove('on'));
addEventListener('keydown',e=>{ if(e.key==='Escape') lightbox.classList.remove('on'); });
$$('.art-b').forEach(b=>b.addEventListener('click',()=>{ const a = ARTS[+b.dataset.i]; openLightbox(a.src, a.cap); }));

/* ---------- Конверты ---------- */
const envm = document.createElement('div');
envm.id = 'envm'; envm.setAttribute('role','dialog'); envm.setAttribute('aria-label','Письмо');
document.body.appendChild(envm);
const envOpen = ()=>envm.classList.contains('on');
function openEnv(i){
  const e = ENVELOPES[i];
  envm.innerHTML = `<div class="ep"><small>открой, когда</small><h3>${esc(e.when)}</h3><p>${esc(e.text)}</p><span class="ec">♥</span><em>нажми, чтобы закрыть</em></div>`;
  envm.classList.add('on'); haptic(8);
}
$$('.envl').forEach(b=>b.addEventListener('click',()=>openEnv(+b.dataset.i)));
envm.addEventListener('click',()=>envm.classList.remove('on'));
addEventListener('keydown',e=>{ if(e.key==='Escape') envm.classList.remove('on'); });

/* ---------- Галерея ---------- */
const gal = $('#gal'), galTrack = $('#galTrack'), galBar = $('.gal-bar i'), galN = $('#galN');
let galH = 0;
const cards = $$('.card');
cards.forEach((c,i)=>{
  const p = PHOTOS[i], ph = $('.ph',c);
  const img = new Image(); img.alt = p.cap; img.decoding = 'async';
  img.onload = ()=>{
    ph.innerHTML = ''; ph.appendChild(img); ph.style.width = '';
    c.classList.add(img.naturalWidth/img.naturalHeight < .85 ? 'arch' : 'sq');
    setSizes(); update();
  };
  img.src = p.src;
  const open = ()=>openLightbox(img.complete && img.naturalWidth ? p.src : null, p.cap);
  ph.addEventListener('click',open);
  ph.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); } });
});
function setSizes(){
  if(reduce){ gal.classList.add('static'); $('#jap').classList.add('static'); return; }
  const trackW = galTrack.offsetWidth;
  galH = Math.max(0, trackW - vw) + vh;
  gal.style.height = galH + 'px';
}

/* ---------- Манифест, японские фразы ---------- */
const sw = $$('#stmt .sw'), stmtEl = $('#stmt');
const jps = $$('.jp'), jap = $('#jap'), japBar = $('.jap-bar .ln i'), japN = $('#japN');
let japIdx = -1;

/* ---------- Нить и подпись в шапке ---------- */
const threadEl = $('#thread i'), tagEl = $('#tag');
const tagSecs = $$('[data-tag]');
let lastTag = null, lastY = scrollY, scrollVel = 0;

let ticking = false;
function update(){
  ticking = false;
  const y = scrollY, max = Math.max(1, document.documentElement.scrollHeight - vh);
  scrollVel = y - lastY; lastY = y;
  threadEl.parentNode.style.setProperty('--p', clamp(y/max,0,1).toFixed(4));

  // слова манифеста зажигаются по мере прокрутки
  const sr = stmtEl.getBoundingClientRect();
  if(sr.top < vh && sr.bottom > 0){
    const t = reduce ? 1 : clamp((vh*.8 - sr.top)/(sr.height*.9 + vh*.1),0,1);
    const n = Math.round(t*sw.length);
    sw.forEach((w,i)=>w.classList.toggle('lit', i<n));
  }

  if(!reduce){
    // галерея: горизонтальное движение при вертикальной прокрутке
    const gr = gal.getBoundingClientRect();
    if(gr.bottom > -50 && gr.top < vh+50){
      const range = Math.max(1, galH - vh);
      const gp = clamp(-gr.top/range,0,1);
      const travel = Math.max(0, galTrack.offsetWidth - vw);
      galTrack.style.transform = `translate3d(${(-gp*travel).toFixed(1)}px,0,0)`;
      galBar.parentNode.style.setProperty('--gp', gp.toFixed(4));
      galN.textContent = pad(Math.round(gp*(cards.length-1))+1) + ' / ' + pad(cards.length);
      cards.forEach(c=>{
        if(c.classList.contains('sq')) return;
        const r = c.getBoundingClientRect(), off = (r.left + r.width/2 - vw/2)/vw;
        c.style.setProperty('--px', clamp(-off*5,-4.5,4.5).toFixed(2)+'%');
      });
    }

    // японские фразы: по одной на экран
    const jr = jap.getBoundingClientRect();
    if(jr.bottom > 0 && jr.top < vh){
      const range = Math.max(1, jr.height - vh);
      const jp = clamp(-jr.top/range,0,1);
      const idx = clamp(Math.floor(jp*jps.length), 0, jps.length-1);
      jap.style.setProperty('--jprog', jp.toFixed(4));
      if(idx!==japIdx){
        japIdx = idx; japN.textContent = pad(idx+1);
        jps.forEach((j,i)=>{ j.classList.toggle('on', i===idx); j.classList.toggle('past', i<idx); });
      }
    }
  }

  // что сейчас на экране
  let cur = null;
  for(const s of tagSecs){ const r = s.getBoundingClientRect(); if(r.top <= vh*.5 && r.bottom > vh*.5){ cur = s; break; } }
  if(cur !== lastTag){
    lastTag = cur;
    tagEl.textContent = cur ? cur.dataset.tag : '';
    document.body.classList.toggle('light', !!(cur && cur.dataset.light));
  }
}
const onScroll = ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(update); } };
addEventListener('scroll',onScroll,{passive:true});

/* ---------- Лепестки ---------- */
const pc = $('#petals'), pg = pc.getContext('2d');
const PCOL = ['240,138,168','240,138,168','217,70,138','230,199,156','255,226,232'];
let petals = [], mpx = -9999, mpy = -9999;
function newPetal(init){
  const z = rnd(.45,1.3);
  return {x:rnd(0,vw), y:init?rnd(0,vh):rnd(-80,-20), z, s:rnd(6,13)*z, vy:rnd(.25,.7)*z, sw:rnd(0,6.28), ss:rnd(.005,.013),
    rot:rnd(0,6.28), vr:rnd(-.02,.02), fl:rnd(0,6.28), fv:rnd(.01,.03), col:PCOL[Math.floor(rnd(0,PCOL.length))], a:rnd(.14,.36)};
}
function initPetals(){ petals = Array.from({length: vw<700 ? 14 : 28},()=>newPetal(true)); }
function drawPetal(c,s){
  c.beginPath(); c.moveTo(0,-s);
  c.bezierCurveTo(s*.95,-s*.55,s*.85,s*.55,0,s);
  c.bezierCurveTo(-s*.85,s*.55,-s*.95,-s*.55,0,-s);
  c.fill();
}
function petalFrame(){
  pg.clearRect(0,0,vw,vh);
  if(!document.hidden){
    for(const p of petals){
      p.sw += p.ss; p.rot += p.vr; p.fl += p.fv;
      p.y += p.vy*1.2 + scrollVel*.28*p.z;
      p.x += Math.sin(p.sw)*.45*p.z;
      const dx = p.x-mpx, dy = p.y-mpy, d2 = dx*dx+dy*dy;
      if(d2 < 14400){ const d = Math.sqrt(d2)||1, f = (1-d/120)*2.2; p.x += dx/d*f; p.y += dy/d*f; }
      if(p.y > vh+40){ p.y = rnd(-80,-20); p.x = rnd(0,vw); }
      else if(p.y < -90){ p.y = vh+30; p.x = rnd(0,vw); }
      if(p.x < -40) p.x = vw+30; else if(p.x > vw+40) p.x = -30;
      pg.save(); pg.translate(p.x,p.y); pg.rotate(p.rot); pg.scale(Math.abs(Math.cos(p.fl))*.8+.25, 1);
      pg.fillStyle = `rgba(${p.col},${p.a})`; drawPetal(pg,p.s); pg.restore();
    }
  }
  scrollVel *= .9;
  requestAnimationFrame(petalFrame);
}

/* ---------- Размеры ---------- */
const bc = $('#burst'), bx = bc.getContext('2d');
function resize(){
  vw = innerWidth; vh = innerHeight;
  const d = Math.min(devicePixelRatio||1,2);
  [[pc,pg],[bc,bx]].forEach(([c,g])=>{ c.width = vw*d; c.height = vh*d; g.setTransform(d,0,0,d,0,0); });
  const was = petals.length; if(!was || (vw<700) !== (was<20)) initPetals();
  setSizes(); sizeSky(); update();
}
let rzT; addEventListener('resize',()=>{ clearTimeout(rzT); rzT = setTimeout(resize,120); });

/* ---------- Небо: звёзды-искры ---------- */
const skc = $('#skyc'), sx = skc.getContext('2d'), skyBox = $('#skyBox');
let SW=0, SH=0, sstars=[], sbg=[], shoot=null, skyVis=false;
function sizeSky(){
  SW = skc.offsetWidth; SH = skc.offsetHeight; if(!SW) return;
  const d = Math.min(devicePixelRatio||1,2);
  skc.width = SW*d; skc.height = SH*d; sx.setTransform(d,0,0,d,0,0);
  sbg = Array.from({length:90},()=>({x:rnd(0,SW),y:rnd(0,SH),r:rnd(.3,1.3),p:rnd(0,6.28)}));
}
function sparkle(c,x,y,R){
  c.beginPath(); c.moveTo(x,y-R);
  c.quadraticCurveTo(x,y,x+R,y); c.quadraticCurveTo(x,y,x,y+R);
  c.quadraticCurveTo(x,y,x-R,y); c.quadraticCurveTo(x,y,x,y-R); c.closePath();
}
const SCOL = ['255,240,224','230,199,156','240,138,168'];
skc.addEventListener('pointerdown',e=>{
  const r = skc.getBoundingClientRect();
  sstars.push({x:(e.clientX-r.left)*(SW/r.width||1), y:(e.clientY-r.top)*(SH/r.height||1), born:performance.now(), p:rnd(0,6.28), col:sstars.length%3});
  if(sstars.length>14) sstars.shift();
  skyBox.classList.add('used'); haptic(6);
  if(reduce) drawSky(performance.now());
});
setInterval(()=>{ if(!reduce && !shoot && SW && skyVis) shoot = {x:rnd(SW*.4,SW*.95), y:rnd(0,SH*.3), t:0}; },4600);
function drawSky(now){
  if(!SW) return;
  sx.clearRect(0,0,SW,SH);
  sbg.forEach(s=>{ const a = .25+.35*Math.sin(now/900+s.p); sx.fillStyle = `rgba(255,240,224,${Math.max(.06,a)})`; sx.beginPath(); sx.arc(s.x,s.y,s.r,0,6.28); sx.fill(); });
  if(sstars.length>1){
    sx.strokeStyle = 'rgba(230,199,156,.55)'; sx.lineWidth = 1; sx.lineJoin = 'round'; sx.beginPath();
    sstars.forEach((s,i)=>{ i?sx.lineTo(s.x,s.y):sx.moveTo(s.x,s.y); }); sx.stroke();
  }
  sstars.forEach(s=>{
    const k = Math.min(1,(now-s.born)/700), R = 4+15*(1-Math.pow(1-k,3)) + Math.sin(now/500+s.p)*1.2;
    const col = SCOL[s.col];
    const gr = sx.createRadialGradient(s.x,s.y,0,s.x,s.y,R*2.6);
    gr.addColorStop(0,`rgba(${col},.45)`); gr.addColorStop(1,`rgba(${col},0)`);
    sx.fillStyle = gr; sx.beginPath(); sx.arc(s.x,s.y,R*2.6,0,6.28); sx.fill();
    sx.fillStyle = `rgb(${col})`; sparkle(sx,s.x,s.y,R); sx.fill();
  });
  if(shoot){
    shoot.t += .018; const x = shoot.x-shoot.t*SW*.6, y = shoot.y+shoot.t*SH*.5;
    const gr = sx.createLinearGradient(x,y,x+90,y-70); gr.addColorStop(0,'rgba(255,240,224,.95)'); gr.addColorStop(1,'rgba(255,240,224,0)');
    sx.strokeStyle = gr; sx.lineWidth = 1.6; sx.beginPath(); sx.moveTo(x,y); sx.lineTo(x+90,y-70); sx.stroke();
    if(shoot.t>1) shoot = null;
  }
}
new IntersectionObserver(es=>es.forEach(e=>{ skyVis = e.isIntersecting; if(skyVis) sizeSky(); }),{threshold:0}).observe(skyBox);
function skyLoop(now){ if(skyVis) drawSky(now); requestAnimationFrame(skyLoop); }

/* ---------- Причины ---------- */
$$('.rc').forEach(c=>c.addEventListener('click',()=>{
  const o = c.classList.toggle('open'); c.setAttribute('aria-pressed',o); haptic(8);
}));

/* ---------- Счётчик ---------- */
function plural(n,a,b,c){ n=Math.abs(n)%100; const m=n%10; if(n>10&&n<20) return c; if(m>1&&m<5) return b; if(m===1) return a; return c; }
const sinceMs = new Date(SINCE+'T00:00:00').getTime();
let counted = false, liveOn = false;
function tickLive(){
  const ms = Math.max(0, Date.now()-sinceMs);
  $('#cH').textContent = Math.floor(ms/36e5)%24;
  $('#cM').textContent = pad(Math.floor(ms/6e4)%60);
  $('#cS').textContent = pad(Math.floor(ms/1e3)%60);
}
function startCount(){
  if(counted) return; counted = true;
  const ms = Math.max(0, Date.now()-sinceMs), days = Math.floor(ms/864e5), hours = Math.floor(ms/36e5);
  const el = $('#days');
  $('#daysWord').textContent = plural(days,'день','дня','дней');
  $('#detail').textContent = `это ${hours.toLocaleString('ru-RU')} ${plural(hours,'час','часа','часов')}, и я ни о чём не жалею`;
  tickLive(); setInterval(tickLive,1000);
  if(reduce){ el.textContent = days; return; }
  const t0 = performance.now(), dur = 2400;
  (function tick(){ const k = Math.min(1,(performance.now()-t0)/dur); el.textContent = Math.round(days*(1-Math.pow(1-k,4))); if(k<1) requestAnimationFrame(tick); })();
}
new IntersectionObserver((es,o)=>es.forEach(e=>{ if(e.isIntersecting){ startCount(); o.disconnect(); } }),{threshold:.3}).observe($('#cnt'));

/* ---------- Письмо ---------- */
const paper = $('#paper');
let typed = false, skipType = false;
function renderLetter(n,caret){
  paper.innerHTML = `<span>${esc(LETTER.slice(0,n))}</span>${caret?'<span class="caret"></span>':''}<span style="visibility:hidden">${esc(LETTER.slice(n))}</span>`;
}
function typeLetter(){
  if(typed) return; typed = true;
  if(reduce){ paper.textContent = LETTER; return; }
  let i = 0;
  (function step(){
    if(skipType){ renderLetter(LETTER.length,false); return; }
    renderLetter(++i, i<LETTER.length);
    if(i<LETTER.length){ const ch = LETTER[i-1]; setTimeout(step, ch==='\n'?280:(/[.,!]/.test(ch)?180:34)); }
  })();
}
paper.addEventListener('click',()=>{ skipType = true; });
renderLetter(0,false);
new IntersectionObserver((es,o)=>es.forEach(e=>{ if(e.isIntersecting){ typeLetter(); o.disconnect(); } }),{threshold:.35}).observe(paper);

/* ---------- Конфетти из сердец и лепестков ---------- */
let bparts = [], burstOn = false;
function heartShape(c,x,y,s){
  c.beginPath(); c.moveTo(x,y+s*.9);
  c.bezierCurveTo(x-s*1.5,y-s*.2,x-s*.7,y-s*1.2,x,y-s*.4);
  c.bezierCurveTo(x+s*.7,y-s*1.2,x+s*1.5,y-s*.2,x,y+s*.9); c.fill();
}
const BCOL = ['240,138,168','217,70,138','230,199,156','255,240,224'];
function spawnBurst(cx,cy){
  for(let i=0;i<130;i++){
    const a = rnd(0,6.283), s = rnd(3,13);
    bparts.push({x:cx,y:cy,vx:Math.cos(a)*s,vy:Math.sin(a)*s-6,rot:rnd(0,6.28),vr:rnd(-.2,.2),r:rnd(5,12),
      col:BCOL[i%4],life:rnd(90,160),heart:i%3===0});
  }
  if(!burstOn){ burstOn = true; requestAnimationFrame(burstFrame); }
}
function burstFrame(){
  bx.clearRect(0,0,vw,vh);
  bparts = bparts.filter(p=>p.life>0);
  for(const p of bparts){
    p.vy += .18; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
    bx.globalAlpha = clamp(p.life/40,0,1); bx.fillStyle = `rgb(${p.col})`;
    bx.save(); bx.translate(p.x,p.y); bx.rotate(p.rot);
    if(p.heart) heartShape(bx,0,0,p.r*.7); else drawPetal(bx,p.r);
    bx.restore();
  }
  bx.globalAlpha = 1;
  if(bparts.length) requestAnimationFrame(burstFrame); else { burstOn = false; bx.clearRect(0,0,vw,vh); }
}
/* ---------- Эффект свечи: по первому нажатию на сердце свет гаснет, остаётся один огонёк ---------- */
let candleDone = false, heartSent = false;
function lightsOut(x,y){
  const d = document.createElement('div'); d.id = 'dusk'; d.setAttribute('aria-hidden','true');
  d.style.setProperty('--fx',x+'px'); d.style.setProperty('--fy',y+'px');
  d.innerHTML = '<i class="flame"></i><p class="dusk-t"></p>';
  const t = d.querySelector('.dusk-t'); t.style.top = (y+110 > vh ? y-120 : y+64) + 'px';
  document.body.appendChild(d); document.body.classList.add('dusk-on');
  requestAnimationFrame(()=>d.classList.add('on'));
  const stop = e=>e.preventDefault();
  d.addEventListener('wheel',stop,{passive:false}); d.addEventListener('touchmove',stop,{passive:false});
  const t0 = performance.now(), base = vw<700 ? 200 : 290, timers = [];
  let alive = true, raf = 0;
  const say = (txt)=>{ t.classList.remove('show'); timers.push(setTimeout(()=>{ t.textContent = txt; t.classList.add('show'); }, 700)); };
  const loop = now=>{
    const g = clamp((now-t0-900)/1900,0,1), e = 1-Math.pow(1-g,3);
    const k = 1 + Math.sin(now/90)*.04 + Math.sin(now/37)*.03 + Math.sin(now/230)*.05;
    d.style.setProperty('--fr',(base*e*k).toFixed(1)+'px');
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  timers.push(setTimeout(()=>say('Если вдруг всё погаснет…'),1500));
  timers.push(setTimeout(()=>say('…я всё равно найду дорогу к тебе.'),3700));
  const finish = ()=>{
    if(!alive) return; alive = false; timers.forEach(clearTimeout);
    const b = document.createElement('div'); b.className = 'bloom';
    b.style.setProperty('--fx',x+'px'); b.style.setProperty('--fy',y+'px'); document.body.appendChild(b);
    b.animate([{opacity:0},{opacity:1,offset:.16},{opacity:0}],{duration:1500,easing:'ease-out'});
    d.classList.remove('on'); document.body.classList.remove('dusk-on');
    spawnBurst(x,y); haptic([12,50,12]);
    setTimeout(()=>{ cancelAnimationFrame(raf); d.remove(); b.remove(); },1600);
  };
  timers.push(setTimeout(finish,6600));
  d.addEventListener('click',()=>{ if(performance.now()-t0 > 1600) finish(); });
}
$('#heart').addEventListener('click',e=>{
  const btn = e.currentTarget, r = btn.getBoundingClientRect(), txt = $('#heartTxt');
  if(!heartSent){ heartSent = true; notify('Она нажала ♥','Нажала на сердечко в конце сайта, в '+nowTime(),'heart'); }
  if(!reduce && !candleDone){ candleDone = true; lightsOut(r.left+r.width/2, r.top+r.height/2); }
  else if(!reduce){ spawnBurst(r.left+r.width/2, r.top+r.height/2); haptic([12,50,12]); }
  btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop','on');
  btn.setAttribute('aria-pressed','true');
  if(txt.textContent !== 'Я знал ♥'){
    txt.style.opacity = 0;
    setTimeout(()=>{ txt.textContent = 'Я знал ♥'; txt.classList.add('done'); txt.style.opacity = 1; }, 320);
  }
});

/* ---------- Курсор: свечение и «магнитные» кнопки (только на компьютере) ---------- */
const glow = $('#glow'), mags = $$('[data-mag]');
addEventListener('pointermove',e=>{
  mpx = e.clientX; mpy = e.clientY;
  if(e.pointerType!=='mouse' || reduce) return;
  glow.classList.add('on'); glow.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
  for(const el of mags){
    const r = el.getBoundingClientRect();
    if(!r.width || r.bottom<0 || r.top>vh) continue;
    const dx = e.clientX-(r.left+r.width/2), dy = e.clientY-(r.top+r.height/2);
    el.style.translate = Math.hypot(dx,dy) < Math.max(r.width,r.height)*.9+30 ? `${(dx*.25).toFixed(1)}px ${(dy*.25).toFixed(1)}px` : '';
  }
});
addEventListener('pointerleave',()=>{ mpx = mpy = -9999; });
addEventListener('touchend',()=>{ mpx = mpy = -9999; },{passive:true});
document.addEventListener('mouseleave',()=>{ mpx = mpy = -9999; glow.classList.remove('on'); });

/* ---------- Запуск ---------- */
resize();
if(document.fonts && document.fonts.ready) document.fonts.ready.then(()=>{ setSizes(); update(); });
addEventListener('load',()=>{ setSizes(); update(); });
/* ---------- Фото для тебя (ntfy) ---------- */
const nowTime = () => new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});
const nUrl = o => `${NTFY_SERVER}/${NTFY_TOPIC}?` + Object.entries(o).map(([k,v])=>k+'='+encodeURIComponent(v)).join('&');
function shrink(file,max=1600,q=.86){
  return new Promise((res,rej)=>{
    const url = URL.createObjectURL(file), img = new Image();
    img.onload = ()=>{
      const k = Math.min(1, max/Math.max(img.naturalWidth,img.naturalHeight));
      const c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth*k); c.height = Math.round(img.naturalHeight*k);
      c.getContext('2d').drawImage(img,0,0,c.width,c.height);
      c.toBlob(b=>{ URL.revokeObjectURL(url); b ? res(b) : rej(new Error('blob')); },'image/jpeg',q);
    };
    img.onerror = ()=>{ URL.revokeObjectURL(url); rej(new Error('img')); };
    img.src = url;
  });
}
(function(){
  const box = $('#askBox'); if(!box) return;
  const file = $('#askFile'), prev = $('#askPrev'), img = $('#askImg'), msg = $('#askMsg');
  const bShoot = $('#askShoot'), bSend = $('#askSend'), bRe = $('#askRetake');
  let blob = null, prevUrl = null, busy = false;
  const say = s => { msg.style.opacity = 0; setTimeout(()=>{ msg.textContent = s; msg.style.opacity = 1; }, 200); };
  function show(state){
    prev.hidden = !(state==='preview'||state==='sending');
    bShoot.hidden = state!=='idle' && state!=='done';
    bSend.hidden = !(state==='preview'||state==='sending');
    bRe.hidden = state!=='preview';
    box.dataset.state = state;
  }
  show('idle');
  const pick = ()=>{ if(!busy){ file.value = ''; file.click(); } };
  bShoot.addEventListener('click',pick); bRe.addEventListener('click',pick);
  file.addEventListener('change',async()=>{
    const f = file.files && file.files[0]; if(!f) return;
    try{
      say('Секунду…');
      blob = await shrink(f);
      if(prevUrl) URL.revokeObjectURL(prevUrl);
      prevUrl = URL.createObjectURL(blob); img.src = prevUrl;
      show('preview'); say('Так и отправим? Фото уйдёт только мне.');
    }catch(e){ show('idle'); say('Не получилось открыть фото. Попробуй ещё раз.'); }
  });
  bSend.addEventListener('click',async()=>{
    if(!blob || busy) return;
    busy = true; show('sending'); bSend.disabled = true; bSend.textContent = 'Отправляю…'; say('');
    try{
      const r = await fetch(nUrl({title:'Фото от любимой ♥', message:'Прислала фото в '+nowTime(), filename:'photo.jpg', tags:'heart', priority:'4'}),{method:'PUT',body:blob});
      if(!r.ok) throw new Error('http '+r.status);
      blob = null; show('done'); bShoot.textContent = 'Отправить ещё одно';
      say('Фото уже у меня. Спасибо, моя любимая ♥');
      haptic([12,50,12]);
      if(!reduce){ const b = bShoot.getBoundingClientRect(); spawnBurst(b.left+b.width/2, b.top); }
    }catch(e){ show('preview'); say('Не получилось отправить. Проверь интернет и нажми ещё раз.'); }
    busy = false; bSend.disabled = false; bSend.textContent = 'Отправить мне';
  });
})();

/* ---------- Колесо желаний ---------- */
function notify(title,message,tags='gift'){
  if(!NTFY_TOPIC) return;
  fetch(nUrl({title,tags}),{method:'POST',body:message}).catch(()=>{});
}
(function(){
  const box = $('#wheel-rot'), btn = $('#wheelBtn'), res = $('#wheelRes'); if(!box) return;
  const rot = box.querySelector('.wheel-svg');
  const n = WISHES.length, step = 360/n;
  let angle = 0, spinning = false;
  btn.addEventListener('click',()=>{
    if(spinning) return; spinning = true; btn.disabled = true;
    res.style.opacity = 0; haptic(10);
    const idx = Math.floor(Math.random()*n), center = idx*step + step/2, jitter = rnd(-step*.35, step*.35);
    const need = (((-center + jitter - angle) % 360) + 360) % 360;
    angle += 360*(5 + Math.floor(rnd(0,3))) + need;
    rot.style.transform = `rotate(${angle}deg)`;
    setTimeout(()=>{
      const w = WISHES[idx];
      res.innerHTML = `<b>${esc(w.t)}</b><span>${esc(w.d)}</span>`; res.style.opacity = 1;
      haptic([12,50,12]);
      if(!reduce){ const r = box.getBoundingClientRect(); spawnBurst(r.left+r.width/2, r.top+r.height/2); }
      notify('Колесо желаний ♥','Ей выпало: '+w.t);
      btn.textContent = 'Крутить ещё'; btn.disabled = false; spinning = false;
    }, reduce ? 60 : 5400);
  });
})();

if(!reduce){ requestAnimationFrame(petalFrame); requestAnimationFrame(skyLoop); }
else { drawSky(0); }
update();

/* ---------- Видеоклип ---------- */
(function(){
  const v = $('#clipV'), b = $('#clipPlay'), box = $('#clipBox'); if(!v) return;
  b.addEventListener('click',()=>{ v.controls = true; box.classList.add('playing'); v.play().catch(()=>{ v.controls = true; }); });
  v.addEventListener('ended',()=>{ box.classList.remove('playing'); v.controls = false; v.currentTime = 0; });
  new IntersectionObserver(es=>es.forEach(e=>{ if(!e.isIntersecting && !v.paused) v.pause(); }),{threshold:.1}).observe(box);
})();

/* ---------- Бегущие ряды фото и магнитный портрет ---------- */
(function(){
  const mq=$('#mq'), rows=$$('.mq-r',mq), pt=$('.portrait');
  addEventListener('scroll',()=>{ const o=(scrollY-mq.offsetTop+vh)*.3-600; rows[0].style.transform=`translateX(${o}px)`; rows[1].style.transform=`translateX(${-o}px)`; },{passive:true});
  addEventListener('pointermove',e=>{ if(e.pointerType!=='mouse'||reduce) return;
    const r=pt.getBoundingClientRect(), dx=e.clientX-(r.left+r.width/2), dy=e.clientY-(r.top+r.height/2);
    pt.style.translate = Math.hypot(dx,dy) < r.width/2+150 ? `${dx/3}px ${dy/3}px` : ''; });
})();

/* ---------- Стопка карточек со стихами ---------- */
(function(){
  const cs=$$('.sk-c'); if(!cs.length||reduce) return; const n=cs.length;
  const f=()=>cs.forEach((c,i)=>{
    const r=c.parentNode.getBoundingClientRect(), t=clamp((96+i*28-r.top)/(vh*.85*(n-i)),0,1);
    c.style.transform=`scale(${(1-(n-1-i)*.03*t).toFixed(4)})`;
  });
  addEventListener('scroll',f,{passive:true}); addEventListener('resize',f); f();
})();

/* ---------- Плеер ---------- */
(function(){
  const box=$('#sg'); if(!box) return;
  const a=new Audio(SONG.src), v=$('#clipV'), pr=$('#sgProg'), vol=$('#sgVol'), msg=$('#sgMsg');
  a.preload='metadata'; a.volume=.7;
  const fmt=s=>{ s=Math.max(0,Math.floor(s||0)); return Math.floor(s/60)+':'+pad(s%60); };
  const fill=(el,p)=>el.style.setProperty('--v',p+'%');
  const draw=()=>{ const d=a.duration||0; pr.value=d?a.currentTime/d*1000:0; fill(pr,pr.value/10);
    $('#sgCur').textContent=fmt(a.currentTime); $('#sgRem').textContent='−'+fmt(d-a.currentTime); };
  a.addEventListener('timeupdate',draw); a.addEventListener('loadedmetadata',draw);
  a.addEventListener('play',()=>{ box.classList.add('playing'); if(v&&!v.paused) v.pause(); });
  a.addEventListener('pause',()=>box.classList.remove('playing'));
  a.addEventListener('ended',()=>{ a.currentTime=0; });
  a.addEventListener('error',()=>{ msg.textContent='Не нашёл файл '+SONG.src; });
  $('#sgPlay').addEventListener('click',()=>{ msg.textContent=''; a.paused ? a.play().catch(()=>{}) : a.pause(); haptic(8); });
  $('#sgBack').addEventListener('click',()=>{ a.currentTime=Math.max(0,a.currentTime-10); });
  $('#sgFwd').addEventListener('click',()=>{ a.currentTime=Math.min(a.duration||0,a.currentTime+10); });
  pr.addEventListener('input',()=>{ if(a.duration) a.currentTime=pr.value/1000*a.duration; fill(pr,pr.value/10); });
  vol.addEventListener('input',()=>{ a.volume=vol.value/100; fill(vol,vol.value); });
  fill(pr,0); fill(vol,70);
  if(v) v.addEventListener('play',()=>a.pause());
})();
