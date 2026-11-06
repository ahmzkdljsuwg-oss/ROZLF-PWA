/* ROZLF v3.5 — recommendations, real charts, tools, theme, notifications */
(function(){
'use strict';
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const A=window.ROZLF_APP;
const on=(el,ev,fn,o)=>el&&el.addEventListener(ev,fn,o);
const LSget=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}};
const LSset=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const fmt=(n,d=5)=>n==null||!isFinite(n)?'—':Number(n).toFixed(d);
const isAr=()=>A.LANG()==='ar';
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dt=ts=>{const d=new Date(ts),p=n=>String(n).padStart(2,'0');return p(d.getDate())+'/'+p(d.getMonth()+1)+' '+p(d.getHours())+':'+p(d.getMinutes())};
const tt=ts=>ts?new Date(ts).toLocaleTimeString('ar-EG',{hour:'2-digit',minute:'2-digit'}):'—';
const T=(k,v)=>{let s=(window.__RX&&window.__RX[A.LANG()]&&window.__RX[A.LANG()][k])||(window.__RX&&window.__RX.ar[k])||k;if(v)Object.keys(v).forEach(x=>{s=s.replace('{'+x+'}',v[x])});return s};
window.__RX={ar:{navRecs:'التوصيات',navTools:'الأدوات',recTitle:'التوصيات | RECOMMENDATIONS',scanNow:'مسح السوق الآن',allPairs:'كل الأزواج',recNoTrade:'لا توجد فرصة مؤكدة الآن، الماسح يراقب السوق.',recLog:'سجل التوصيات ونتائجها',recLogNote:'تسجل التوصيات بسعر الدخول الحقيقي وتقيّم من الشموع لاحقاً.',clearLog:'مسح السجل',toolsTitle:'أدوات التداول',riskCalc:'حاسبة المخاطرة والحجم',riskCalcD:'حجم الصفقة حسب نسبة المخاطرة',pnlCalc:'حاسبة الربح/الخسارة',pnlCalcD:'بالنقاط والدولار',pipsCalc:'حاسبة النقاط',pipsCalcD:'Pips بين الدخول والخروج',watchlist:'قائمة المراقبة',alerts:'تنبيهات الأسعار',news:'أخبار السوق',performance:'أداء التوصيات',notifications:'الإشعارات',balance:'الرصيد ($)',riskPct:'المخاطرة %',slPips:'الستوب (نقاط)',pair:'الزوج',lots:'اللوت',entry:'الدخول',exit:'الخروج',useLive:'السعر الحي',targetPrice:'السعر المستهدف',direction:'الاتجاه',addAlert:'إضافة',newsLoading:'جاري تحميل الأخبار…',perfNote:'تحسب فقط التوصيات المكتملة بسعر حقيقي.',pushChecking:'جاري التحقق…',enablePush:'تفعيل إشعارات Push',ntRec:'توصية جديدة',ntSignal:'إشارة شراء/بيع',ntPrice:'وصول السعر',ntLevel:'كسر دعم/مقاومة',pushNote:'على iPhone أضف التطبيق للشاشة الرئيسية ثم فعّل الإشعارات.',targetHint:'أدخل القيم المطلوبة أولاً.',marginNote:'تقديري؛ قد يختلف هامش الوسيط.',newsUnavailable:'تعذر الوصول إلى مصدر الأخبار الآن.',pushReady:'اضغط لتفعيل إشعارات المتصفح.',pushNoVapid:'أضف VAPID_PUBLIC_KEY في config.js أو Worker لتفعيل Web Push.',pushVapidFail:'تم منح الإذن لكن ربط VAPID فشل.',pushLocalOnly:'تم تفعيل الإشعارات المحلية فقط.',pushBlocked:'الإشعارات محظورة من إعدادات المتصفح.',pushTest:'ROZLF',pushTestBody:'الإشعارات تعمل على هذا الجهاز.',newsLoadingTxt:'جاري تحميل الأخبار…',calendarT:'التقويم الاقتصادي',calendarD:'أحداث حقيقية هذا الأسبوع',calendarLoading:'جاري تحميل التقويم…',calendarEmpty:'لا توجد أحداث مجدولة الآن.',calendarUnavailable:'تعذر الوصول إلى تقويم الأحداث الآن.',scanned:'آخر مسح',scanning:'مسح {n} زوجاً…',scanDone:'اكتمل: {b} شراء · {s} بيع',noSource:'تعذر جلب البيانات',wait:'انتظار',notrade:'لا تداول',confidence:'الثقة',entryTime:'وقت الدخول',duration:'المدة',timeframe:'الفريم',reason:'الأسباب',source:'المصدر',updated:'التحديث',pending:'معلقة',win:'فوز',loss:'خسارة',archived:'مؤرشفة',close:'إغلاق',viewChart:'الشارت',logEmpty:'لا توصيات مسجلة بعد.',watchEmpty:'أضف أزواجاً للمراقبة.',alertsEmpty:'لا تنبيهات بعد.',newsEmpty:'لا أخبار متاحة الآن.',newsFail:'تعذر تحميل الأخبار — DATA UNAVAILABLE',riskAmount:'مبلغ المخاطرة',positionSize:'حجم المركز (لوت)',pipValue:'قيمة النقطة',profit:'الربح/الخسارة',pipsResult:'النقاط',alertAdded:'تمت إضافة التنبيه',alertHit:'تم وصول السعر!',watchAdd:'اختر زوجاً',pushOn:'الإشعارات مفعلة',pushOff:'الإشعارات غير مفعلة',pushUnsupported:'المتصفح لا يدعم Push',pushDenied:'تم رفض إذن الإشعارات',pushNeedWorker:'يتطلب Worker مهيأ',pushWorking:'جاري التفعيل…',theme:'المظهر',light:'فاتح',dark:'داكن',noKey:'Gemini غير مهيأ على الخادم. أضف GEMINI_KEY كـ Secret في Worker. لن يعرض تحليل محلي مكانه.',localBtn:'تحليل فني محلي (أداة مساعدة)',aiLocal:'تحليل محلي — ليس Gemini',aiFail:'فشل تحليل Gemini',recScanNote:'مسح تقني حقيقي من شموع OHLC، ليس نصيحة استثمارية.',above:'فوق',below:'تحت',lotUnit:'لوت',pips:'نقطة',entries:'توصية',resistance:'مقاومة',support:'دعم'},
en:{navRecs:'RECOMMENDATIONS',navTools:'TOOLS',recTitle:'RECOMMENDATIONS',scanNow:'Scan market now',allPairs:'All pairs',recNoTrade:'No confirmed opportunity right now; the scanner keeps watching.',recLog:'Recommendations log & results',recLogNote:'Entries use the real entry price and are evaluated from candles later.',clearLog:'Clear log',toolsTitle:'Trading tools',riskCalc:'Risk & position size',riskCalcD:'Lot size from risk percentage',pnlCalc:'Profit / loss calculator',pnlCalcD:'Pips and USD',pipsCalc:'Pips calculator',pipsCalcD:'Pips between entry and exit',watchlist:'Watchlist',alerts:'Price alerts',news:'Market news',performance:'Recommendation performance',notifications:'Notifications',balance:'Balance ($)',riskPct:'Risk %',slPips:'Stop (pips)',pair:'Pair',lots:'Lots',entry:'Entry',exit:'Exit',useLive:'Live price',targetPrice:'Target price',direction:'Direction',addAlert:'Add',newsLoading:'Loading news…',perfNote:'Only completed recommendations with real prices are counted.',pushChecking:'Checking…',enablePush:'Enable push notifications',ntRec:'New recommendation',ntSignal:'Buy/sell signal',ntPrice:'Price reached',ntLevel:'Support/resistance break',pushNote:'On iPhone add to Home Screen, then enable notifications.',targetHint:'Enter the required values first.',marginNote:'Estimate only; broker margin may differ.',newsUnavailable:'The news source is unreachable right now.',pushReady:'Tap to enable browser notifications.',pushNoVapid:'Add VAPID_PUBLIC_KEY in config.js or the Worker to enable Web Push.',pushVapidFail:'Permission granted but VAPID subscription failed.',pushLocalOnly:'Local notifications enabled only.',pushBlocked:'Notifications are blocked in browser settings.',pushTest:'ROZLF',pushTestBody:'Notifications work on this device.',calendarT:'Economic Calendar',calendarD:'Real events this week',calendarLoading:'Loading calendar…',calendarEmpty:'No scheduled events right now.',calendarUnavailable:'The calendar source is unreachable right now.',scanned:'Last scan',scanning:'Scanning {n} pairs…',scanDone:'Done: {b} BUY · {s} SELL',noSource:'No data source',wait:'WAIT',notrade:'NO TRADE',confidence:'Confidence',entryTime:'Entry time',duration:'Duration',timeframe:'Timeframe',reason:'Reasons',source:'Source',updated:'Updated',pending:'Pending',win:'Win',loss:'Loss',archived:'Archived',close:'Close',viewChart:'Chart',logEmpty:'No recommendations logged yet.',watchEmpty:'Add pairs to watch.',alertsEmpty:'No alerts yet.',newsEmpty:'No news available right now.',newsFail:'News unavailable — DATA UNAVAILABLE',riskAmount:'Risk amount',positionSize:'Position size (lots)',pipValue:'Pip value',profit:'Profit / loss',pipsResult:'Pips',alertAdded:'Alert added',alertHit:'Price level reached!',watchAdd:'Pick a pair',pushOn:'Notifications enabled',pushOff:'Notifications not enabled',pushUnsupported:'This browser does not support push',pushDenied:'Notification permission denied',pushNeedWorker:'Requires a configured Worker',pushWorking:'Enabling…',theme:'Theme',light:'Light',dark:'Dark',noKey:'Gemini is not configured on the server. Add GEMINI_KEY as a Worker secret. Local analysis will not be shown in its place.',localBtn:'Local technical analysis (assistant)',aiLocal:'Local analysis — not Gemini',aiFail:'Gemini analysis failed',recScanNote:'Real technical scan from OHLC candles. Not investment advice.',above:'above',below:'below',lotUnit:'lot',pips:'pips',entries:'calls',resistance:'Resistance',support:'Support'}};
function injectKeys(){['ar','en'].forEach(lang=>{const d=window.__RX[lang]||{};if(!A.I18N[lang])A.I18N[lang]={};Object.keys(d).forEach(k=>{if(!A.I18N[lang][k])A.I18N[lang][k]=d[k]})})}
function applyTheme(mode,persist){
 const m=mode==='light'?'light':'dark';document.documentElement.setAttribute('data-theme',m);
 const b=$('#theme-btn');if(b){b.textContent=m==='light'?'☀':'☾';b.title=m==='light'?'داكن':'فاتح'}
 const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute('content',m==='light'?'#F5F3EC':'#050A12');
 if(persist!==false)LSset('rozlF_theme',m);
 if(window.RozlfChart)window.RozlfChart.relayout();
}
function bootTheme(){
 applyTheme(LSget('rozlF_theme','dark'),false);
 on($('#theme-btn'),'click',()=>{const n=document.documentElement.getAttribute('data-theme')==='light'?'dark':'light';applyTheme(n);A.toast(n==='light'?T('light'):T('dark'))});
}
/* ── Lightweight Charts ── */
const RC={main:null,rsi:null,macd:null,s:{},key:'',ro:null,busy:false};
function cc(k){return getComputedStyle(document.documentElement).getPropertyValue(k).trim()||'#888'}
function chartLabels(){
 return {layout:{background:{type:'solid',color:cc('--bg2')},textColor:cc('--muted'),fontFamily:'IBM Plex Mono, monospace',fontSize:10},
  grid:{vertLines:{color:cc('--grid')||'rgba(255,255,255,.05)'},horzLines:{color:cc('--grid')||'rgba(255,255,255,.05)'}},
  crosshair:{mode:1,vertLine:{color:cc('--accent'),labelBackgroundColor:cc('--accent')},horzLine:{color:cc('--accent'),labelBackgroundColor:cc('--accent')}},
  rightPriceScale:{borderColor:cc('--border')},timeScale:{borderColor:cc('--border'),timeVisible:true,secondsVisible:false,rightOffset:3}};
}
function mk(el,h){const c=LightweightCharts.createChart(el,Object.assign(chartLabels(),{height:h,width:el.clientWidth||300,handleScroll:true,handleScale:true}));return c}
function build(){
 if(!window.LightweightCharts)return false;
 const m=$('#lwc-main'),r=$('#lwc-rsi'),d=$('#lwc-macd');
 if(!m||!r||!d)return false;
 const hMain=Math.max(220,m.clientHeight||m.offsetHeight||260);
 RC.main=mk(m,hMain);RC.rsi=mk(r,84);RC.macd=mk(d,84);
 const s=RC.s;
 s.candles=RC.main.addCandlestickSeries({upColor:cc('--up'),downColor:cc('--down'),borderUpColor:cc('--up'),borderDownColor:cc('--down'),wickUpColor:cc('--up'),wickDownColor:cc('--down'),priceLineVisible:true,lastValueVisible:true});
 s.vol=RC.main.addHistogramSeries({priceFormat:{type:'volume'},priceScaleId:'vol',priceLineVisible:false,lastValueVisible:false});
 RC.main.priceScale('vol').applyOptions({scaleMargins:{top:.82,bottom:0}});
 s.ma20=RC.main.addLineSeries({color:'#5AA9FF',lineWidth:1.4,priceLineVisible:false,lastValueVisible:false});
 s.ma50=RC.main.addLineSeries({color:'#F5C451',lineWidth:1.4,priceLineVisible:false,lastValueVisible:false});
 s.ma200=RC.main.addLineSeries({color:'#C084FC',lineWidth:1.2,priceLineVisible:false,lastValueVisible:false});
 s.bbU=RC.main.addLineSeries({color:'rgba(90,169,255,.45)',lineWidth:1,priceLineVisible:false,lastValueVisible:false});
 s.bbL=RC.main.addLineSeries({color:'rgba(90,169,255,.45)',lineWidth:1,priceLineVisible:false,lastValueVisible:false});
 s.rsi=RC.rsi.addLineSeries({color:'#F5C451',lineWidth:1.5,priceLineVisible:false,lastValueVisible:true});
 s.rsi.createPriceLine({price:70,color:'rgba(240,80,110,.5)',lineWidth:1,lineStyle:2,axisLabelVisible:true,title:'70'});
 s.rsi.createPriceLine({price:30,color:'rgba(34,197,139,.5)',lineWidth:1,lineStyle:2,axisLabelVisible:true,title:'30'});
 s.macd=RC.macd.addHistogramSeries({priceLineVisible:false,lastValueVisible:false});
 s.macdLine=RC.macd.addLineSeries({color:'#5AA9FF',lineWidth:1.3,priceLineVisible:false,lastValueVisible:false});
 s.sigLine=RC.macd.addLineSeries({color:'#F5C451',lineWidth:1.3,priceLineVisible:false,lastValueVisible:false});
 const sync=(src,dst)=>{src.timeScale().subscribeVisibleLogicalRangeChange(rg=>{if(rg&&!RC.busy){RC.busy=true;try{dst.timeScale().setVisibleLogicalRange(rg)}catch(e){}RC.busy=false}})};
 sync(RC.main,RC.rsi);sync(RC.main,RC.macd);
 RC.ro=new ResizeObserver(()=>{try{RC.main.resize(m.clientWidth,m.clientHeight);RC.rsi.resize(r.clientWidth,84);RC.macd.resize(d.clientWidth,84)}catch(e){}});
 RC.ro.observe(m);RC.ro.observe(r);RC.ro.observe(d);
 return true;
}
function mapCandles(cs){const out=[],vol=[];cs.forEach(c=>{const t=Math.floor(c.t/1000);out.push({time:t,open:c.o,high:c.h,low:c.l,close:c.c});vol.push({time:t,value:c.v||0,color:c.c>=c.o?'rgba(34,197,139,.35)':'rgba(240,80,110,.35)'})});return{candles:out,vol:vol}}
function seriesFrom(cs,key,fn){const out=[];cs.forEach((c,i)=>{const v=fn(cs,i);if(v!=null&&isFinite(v))out.push({time:Math.floor(c.t/1000),value:v})});return out}
function sma(cs,n){const out=[];let sum=0;for(let i=0;i<cs.length;i++){sum+=cs[i].c;if(i>=n)sum-=cs[i-n].c;out.push(i>=n-1?sum/n:null)}return out}
function ema(cs,n){const out=[],k=2/(n+1);let e=null;cs.forEach((c,i)=>{if(i===n-1){let s=0;for(let j=0;j<n;j++)s+=cs[j].c;e=s/n;out.push(e)}else if(i>=n){e=c.c*k+e*(1-k);out.push(e)}else out.push(null)});return out}
function rsiSeries(cs,n=14){const out=[];let g=0,l=0;for(let i=1;i<cs.length;i++){const d=cs[i].c-cs[i-1].c,up=Math.max(0,d),dn=Math.max(0,-d);if(i<=n){g+=up;l+=dn;if(i===n){g/=n;l/=n;out.push(l===0?100:100-100/(1+g/l))}else out.push(null)}else{g=(g*(n-1)+up)/n;l=(l*(n-1)+dn)/n;out.push(l===0?100:100-100/(1+g/l))}}return out}
function macdSeries(cs){const e12=ema(cs,12),e26=ema(cs,26),m=[],sg=[];for(let i=0;i<cs.length;i++)m.push(e12[i]!=null&&e26[i]!=null?e12[i]-e26[i]:null);let prev=null,k=2/10;for(let i=0;i<m.length;i++){if(m[i]==null){sg.push(null);prev=null;continue}if(prev==null)prev=m[i];else prev=m[i]*k+prev*(1-k);sg.push(prev)}return{macd:m,signal:sg,hist:m.map((v,i)=>v!=null&&sg[i]!=null?v-sg[i]:null)}}
function bbSeries(cs,n=20,mult=2){const mid=sma(cs,n),up=[],lo=[];for(let i=0;i<cs.length;i++){if(i<n-1){up.push(null);lo.push(null);continue}let s=0;for(let j=i-n+1;j<=i;j++)s+=Math.pow(cs[j].c-mid[i],2);const sd=Math.sqrt(s/n);up.push(mid[i]+sd*mult);lo.push(mid[i]-sd*mult)}return{mid,up,lo}}
function clearLevels(){if(!RC.levels)return;RC.levels.forEach(x=>{try{RC.s.candles.removePriceLine(x)}catch(e){}});RC.levels=[]}
function setOpt(series,key,vis){try{if(series&&series[key])series[key].applyOptions({visible:vis!==false})}catch(e){}}
function render(state){
 if(!window.LightweightCharts)return false;
 if(!RC.main&&!build())return false;
 const cs=state&&state.candles;if(!cs||!cs.length)return false;
 const wrap=$('#chart-wrap');if(wrap)wrap.classList.add('chart-live');
 const m=$('#lwc-main');if(m&&(m.clientWidth<20))return false;
 const nc=mapCandles(cs),ind=state.settings.ind||{};
 const ma20=sma(cs,20),ma50=sma(cs,50),ma200=sma(cs,200),bb=bbSeries(cs),rsi=rsiSeries(cs),md=macdSeries(cs);
 const t=arr=>arr.map((v,i)=>v==null?null:{time:Math.floor(cs[i].t/1000),value:v}).filter(Boolean);
 RC.s.candles.setData(nc.candles);
 RC.s.vol.setData(nc.vol);setOpt(RC.s,'vol',nc.vol.some(x=>x.value>0));
 RC.s.ma20.setData(t(ma20));RC.s.ma50.setData(t(ma50));RC.s.ma200.setData(t(ma200));
 RC.s.bbU.setData(t(bb.up));RC.s.bbL.setData(t(bb.lo));
 RC.s.rsi.setData(t(rsi));
 RC.s.macd.setData(md.hist.map((v,i)=>v==null?null:{time:Math.floor(cs[i].t/1000),value:v,color:v>=0?'rgba(34,197,139,.55)':'rgba(240,80,110,.55)'}).filter(Boolean));
 RC.s.macdLine.setData(t(md.macd));RC.s.sigLine.setData(t(md.signal));
 setOpt(RC.s,'ma20',ind.ma);setOpt(RC.s,'ma50',ind.ma);setOpt(RC.s,'ma200',ind.ma);
 setOpt(RC.s,'bbU',ind.bb);setOpt(RC.s,'bbL',ind.bb);
 setOpt(RC.s,'rsi',ind.rsi);setOpt(RC.s,'macd',ind.macd);setOpt(RC.s,'macdLine',ind.macd);setOpt(RC.s,'sigLine',ind.macd);
 const key=state.chartPair+'|'+state.chartTf;const first=RC.key!==key;RC.key=key;
 clearLevels();
 try{
  const lv=A.findLevels(cs,cs[cs.length-1].c);
  RC.levels=[
   RC.s.candles.createPriceLine({price:lv.resistance,color:'#F0506E',lineWidth:1,lineStyle:2,axisLabelVisible:true,title:T('resistance')}),
   RC.s.candles.createPriceLine({price:lv.support,color:'#22C58B',lineWidth:1,lineStyle:2,axisLabelVisible:true,title:T('support')})
  ];
 }catch(e){}
 if(first){try{RC.main.timeScale().fitContent();RC.rsi.timeScale().fitContent();RC.macd.timeScale().fitContent()}catch(e){}}
 const h1=$('#lwc-hint');if(h1)h1.textContent=(A.PMAP[state.chartPair]?A.PMAP[state.chartPair].label:state.chartPair)+' · '+state.chartTf+' · '+cs.length;
 return true;
}
function relayout(){
 if(!RC.main)return;
 try{
  RC.main.applyOptions(chartLabels());RC.rsi.applyOptions(chartLabels());RC.macd.applyOptions(chartLabels());
  const m=$('#lwc-main'),r=$('#lwc-rsi'),d=$('#lwc-macd');
  if(m)RC.main.resize(m.clientWidth,m.clientHeight);if(r)RC.rsi.resize(r.clientWidth,84);if(d)RC.macd.resize(d.clientWidth,84);
  RC.s.candles.applyOptions({upColor:cc('--up'),downColor:cc('--down'),borderUpColor:cc('--up'),borderDownColor:cc('--down'),wickUpColor:cc('--up'),wickDownColor:cc('--down')});
  if(RC.s.rsi)RC.s.rsi.applyOptions({color:cc('--accent')});
 }catch(e){}
}
window.RozlfChart={render,relayout};
/* ── recommendations ── */
const RKEY='rozlF_recs_v35';
const RX={recs:LSget(RKEY,[]),scanAt:0,scanning:false,auto:true,params:{pair:'ALL',tf:'M15',dir:'ALL'},last:null,timer:null,newIds:[]};
if(!Array.isArray(RX.recs))RX.recs=[];
function saveRecs(){LSset(RKEY,RX.recs.slice(0,300))}
function pairLabel(p){const x=A.PMAP[p];return x?x.label:p}
function dirText(d){return d==='buy'?A.t('buy'):d==='sell'?A.t('sell'):T('wait')}
function scoreOf(a,pair){
 const ind=a.ind||{},smc=a.smc||{};
 let s=46,why=[];
 const up=ind.ma20!=null&&ind.ma50!=null&&ind.ma20>ind.ma50;
 const dn=ind.ma20!=null&&ind.ma50!=null&&ind.ma20<ind.ma50;
 if(up){s+=12;why.push('MA20 > MA50')}if(dn){s+=12;why.push('MA20 < MA50')}
 if(ind.ma200!=null){if(a.dir==='buy'&&a.price>ind.ma200){s+=6;why.push('السعر فوق MA200')}if(a.dir==='sell'&&a.price<ind.ma200){s+=6;why.push('السعر تحت MA200')}}
 if(ind.hist!=null){if(a.dir==='buy'&&ind.hist>0){s+=10;why.push('MACD Histogram +')}if(a.dir==='sell'&&ind.hist<0){s+=10;why.push('MACD Histogram −')}}
 if(ind.rsi!=null){if(a.dir==='buy'&&ind.rsi>=50&&ind.rsi<70){s+=6;why.push('RSI '+ind.rsi.toFixed(1))}if(a.dir==='sell'&&ind.rsi<=50&&ind.rsi>30){s+=6;why.push('RSI '+ind.rsi.toFixed(1))}}
 if(smc.bias&&((smc.bias==='bull'&&a.dir==='buy')||(smc.bias==='bear'&&a.dir==='sell'))){s+=10;why.push(smc.bos||('SMC '+smc.bias))}
 if(smc.choch&&smc.choch!=='—')why.push(smc.choch);
 if(smc.fvg&&((smc.fvg.dir==='bull'&&a.dir==='buy')||(smc.fvg.dir==='bear'&&a.dir==='sell'))){s+=6;why.push('FVG '+(smc.fvg.dir==='bull'?'↑':'↓'))}
 if(smc.ob&&((smc.ob.dir==='bull'&&a.dir==='buy')||(smc.ob.dir==='bear'&&a.dir==='sell'))){s+=4;why.push('Order Block')}
 (a.notes||[]).forEach(n=>{if(n&&why.length<8&&why.indexOf(n)<0)why.push(n)});
 const near=Math.abs(a.price-((a.levels&&(a.dir==='buy'?a.levels.support:a.levels.resistance))||a.price));
 if(a.atr&&near<a.atr*0.5){s+=4;why.push(a.dir==='buy'?'قرب دعم':'قرب مقاومة')}
 return{score:Math.min(96,Math.max(0,Math.round(s))),why:why.slice(0,8)};
}
function candleTime(tf){const m=A.TFS[tf]?A.TFS[tf].ms:9e5;return Math.floor(Date.now()/m)*m}
function addRec(a,tf,src,when){
 const dup=RX.recs.find(r=>r.pair===a.pair&&r.dir===a.dir&&r.status==='pending'&&Math.abs(r.entry-a.price)<(a.atr||a.price*0.001)*2.5);
 if(dup)return null;
 const sc=scoreOf(a,a.pair);
 if(sc.score<62)return null;
 const duration=a.expiryMin||A.state.settings.expiry||15;
 const rec={id:'r'+Date.now().toString(36)+Array.from(crypto.getRandomValues(new Uint8Array(3))).map(x=>x.toString(16).padStart(2,'0')).join(''),pair:a.pair,label:pairLabel(a.pair),dir:a.dir,entry:+a.price.toFixed(6),sl:+a.sl.toFixed(6),tp1:+a.tp1.toFixed(6),tp2:+a.tp2.toFixed(6),tp:a.tp1,price2:a.tp2,
  strength:sc.score,why:sc.why,tf:tf,source:src,at:Date.now(),scanAt:when,entryCandle:a.priceTime,expiresAt:Date.now()+duration*60000,duration:duration,status:'pending',exit:null,exitAt:null,pnlPips:null};
 RX.recs.unshift(rec);return rec;
}
function evaluateRecs(candlesByPair){
 const dp=p=>A.pipSize(p);
 let ch=false;
 RX.recs.forEach(r=>{
  if(r.status!=='pending')return;
  const cs=candlesByPair[r.pair];if(!cs||!cs.length)return;
  const after=cs.filter(c=>c.t>(r.entryCandle||r.at));
  let hitTp=null,hitSl=null;
  for(const c of after){
   if(r.dir==='buy'){
    if(c.l<=r.sl){hitSl=c;break}
    if(c.h>=r.tp1){hitTp=c;break}
   }else{
    if(c.h>=r.sl){hitSl=c;break}
    if(c.l<=r.tp1){hitTp=c;break}
   }
  }
  if(hitSl){r.status='loss';r.exit=hitSl.c;r.exitAt=hitSl.t;r.pnlPips=((r.dir==='buy'?r.exit-r.entry:r.entry-r.exit)/dp(r.pair));ch=true}
  else if(hitTp){r.status='win';r.exit=hitTp.c;r.exitAt=hitTp.t;r.pnlPips=((r.dir==='buy'?r.exit-r.entry:r.entry-r.exit)/dp(r.pair));ch=true}
  else if(Date.now()>r.expiresAt){r.status='expired';r.exit=cs[cs.length-1].c;r.exitAt=cs[cs.length-1].t;ch=true}
  if(r.status!=='pending')r.closedAt=Date.now();
 });
 if(ch){saveRecs();renderRecLog();renderPerf()}
}
async function fetchPair(pair,tf,force){
 try{const r=await A.loadOHLC(pair,tf,force);return{pair,candles:r.candles,source:r.source}}
 catch(e){try{const r=await A.loadOHLC(pair,'M15',force);return{pair,candles:r.candles,source:r.source,fallback:'M15'}}catch(e2){return{pair,error:String(e2&&e2.message||e2)}}}
}
async function runScan(force){
 if(RX.scanning)return;
 RX.scanning=true;const tf=RX.params.tf==='AUTO'?'M15':RX.params.tf;
 const pairs=A.PAIRS.map(p=>p.sym);
 const bar=$('#rec-bar'),st=$('#rec-status'),dot=$('#rec-dot');
 if(bar)bar.style.width='4%';if(st)st.textContent=T('scanning',{n:pairs.length});if(dot)dot.className='scan-dot on';
 const out=[],byPair={};let done=0,waitN=0,tradeN=0;
 const queue=pairs.slice();
 async function worker(){while(queue.length){const p=queue.shift();const r=await fetchPair(p,tf,!!force);done++;if(bar)bar.style.width=Math.round(4+done/pairs.length*92)+'%';if(st)st.textContent=T('scanning',{n:pairs.length})+' '+done+'/'+pairs.length;out.push(r);if(r.candles)byPair[p]=r.candles;await new Promise(z=>setTimeout(z,120))}}
 await Promise.all([worker(),worker(),worker(),worker()]);
 out.forEach(r=>{
  if(!r.candles||r.candles.length<60)return;
  try{
   const a=A.analyzePair(r.pair,r.candles,r.source);a.expiryMin=A.state.settings.expiry||15;a.priceTime=r.candles[r.candles.length-1].t;
   const sc=scoreOf(a,r.pair);a.strength=sc.score;a.why=sc.why;
   if(a.dir!=='wait'&&sc.score>=62){tradeN++;const rec=addRec(a,r.fallback||tf,r.source,Date.now());if(rec)RX.newIds.push(rec.id)}else waitN++;
  }catch(e){}
 });
 evaluateRecs(byPair);
 RX.scanAt=Date.now();RX.last={tf:tf,ok:out.filter(x=>x.candles).length,noData:out.filter(x=>!x.candles).map(x=>x.pair),buy:RX.recs.filter(r=>r.status==='pending'&&r.dir==='buy').length,sell:RX.recs.filter(r=>r.status==='pending'&&r.dir==='sell').length,wait:waitN,notrade:Math.max(0,out.length-out.filter(x=>x.candles&&x.candles.length>=60).length)};
 saveRecs();RX.scanning=false;
 if(bar)bar.style.width='100%';if(dot)dot.className='scan-dot on';
 if(st)st.textContent=T('scanDone',{b:RX.last.buy,s:RX.last.sell});
 setTimeout(()=>{if(bar)bar.style.width='0%'},1200);
 renderRecs();renderRecLog();renderPerf();
 if(RX.newIds.length)notify('newRec',T('ntRec'),RX.newIds.length+(isAr()?' توصية جديدة':' new recommendation(s)'));
 RX.newIds=[];
}
function pendingRecs(){return RX.recs.filter(r=>r.status==='pending')}
function renderRecs(){
 const list=$('#rec-list'),empty=$('#rec-empty');if(!list)return;
 const f=RX.params;let rows=pendingRecs();
 if(f.pair!=='ALL')rows=rows.filter(r=>r.pair===f.pair);
 if(f.dir!=='ALL')rows=rows.filter(r=>r.dir===f.dir.toLowerCase());
 list.innerHTML='';
 rows.slice(0,20).forEach(r=>{
  const c=document.createElement('div');c.className='rec-card '+r.dir;
  const rem=Math.max(0,Math.round((r.expiresAt-Date.now())/60000));
  const dp=(A.PMAP[r.pair]||{dp:5}).dp;
  c.innerHTML='<div class="rc-top"><span class="rc-pair">'+esc(r.label)+'</span><span class="dir-pill '+r.dir+'">'+esc(dirText(r.dir))+'</span></div>'+
   '<div class="rc-line"><span>'+esc(T('entry'))+'</span><b>'+fmt(r.entry,dp)+'</b></div>'+
   '<div class="rc-line"><span>SL</span><b style="color:var(--down)">'+fmt(r.sl,dp)+'</b></div>'+
   '<div class="rc-line"><span>TP1</span><b style="color:var(--up)">'+fmt(r.tp1,dp)+'</b></div>'+
   '<div class="rc-line"><span>TP2</span><b style="color:var(--up)">'+fmt(r.tp2,dp)+'</b></div>'+
   '<div class="rc-meta"><span>'+esc(r.tf)+' · '+esc(T('duration'))+' '+r.duration+'m</span><span>'+Math.max(0,rem)+'m</span></div>'+
   '<div class="conf"><i style="width:'+r.strength+'%"></i><span>'+esc(T('confidence'))+' '+r.strength+'%</span></div>'+
   '<div class="rc-why">'+r.why.map(w=>'<span>'+esc(w)+'</span>').join('')+'</div>'+
   '<div class="rc-meta"><span>'+esc(T('entryTime'))+' '+dt(r.entryCandle||r.at)+'</span><span>'+esc(T('source'))+': '+esc(r.source)+'</span></div>'+
   '<button class="action-btn rc-btn">📈 '+esc(T('viewChart'))+'</button>';
  c.querySelector('.rc-btn').addEventListener('click',()=>{A.state.chartPair=r.pair;A.state.chartTf=r.tf&&A.TFS[r.tf]?r.tf:'M15';A.setTab('chart');A.openChart(true)});
  list.appendChild(c);
 });
 if(empty)empty.style.display=rows.length?'none':'block';
 const b=pendingRecs().filter(r=>r.dir==='buy').length,s=pendingRecs().filter(r=>r.dir==='sell').length;
 if($('#rec-n-buy'))$('#rec-n-buy').textContent=b;
 if($('#rec-n-sell'))$('#rec-n-sell').textContent=s;
 if($('#rec-n-wait'))$('#rec-n-wait').textContent=RX.last?RX.last.wait||0:0;
 if($('#rec-n-notrade'))$('#rec-n-notrade').textContent=RX.last?RX.last.notrade||0:0;
 if($('#rec-last'))$('#rec-last').textContent=RX.scanAt?T('scanned')+' '+tt(RX.scanAt):'—';
 if($('#rec-src'))$('#rec-src').textContent=RX.last&&RX.last.ok?(RX.last.ok+' pairs · '+RX.last.tf):'—';
}
function renderRecLog(){
 const box=$('#rec-log');if(!box)return;
 box.innerHTML='';
 const rows=RX.recs.slice(0,30);
 if(!rows.length){box.innerHTML='<div class="empty-state">'+esc(T('logEmpty'))+'</div>';return}
 rows.forEach(r=>{
  const dp=(A.PMAP[r.pair]||{dp:5}).dp;const st=r.status;
  const row=document.createElement('div');row.className='log-row '+st;
  row.innerHTML='<div class="log-main"><b>'+esc(r.label)+'</b><span class="dir-pill '+r.dir+'">'+esc(dirText(r.dir))+'</span><span class="tag">'+esc(r.tf)+'</span></div>'+
   '<div class="log-side"><span>'+fmt(r.entry,dp)+' → '+(r.exit==null?'—':fmt(r.exit,dp))+'</span><span class="status '+st+'">'+esc(T(st))+'</span></div>'+
   (r.pnlPips!=null?'<div class="log-pnl '+(r.pnlPips>=0?'up':'down')+'">'+(r.pnlPips>=0?'+':'')+r.pnlPips.toFixed(1)+' '+esc(T('pips'))+'</div>':'');
  box.appendChild(row);
 });
 const w=RX.recs.filter(r=>r.status==='win').length,l=RX.recs.filter(r=>r.status==='loss').length,pe=RX.recs.filter(r=>r.status==='pending').length;
 if($('#rec-stats-line'))$('#rec-stats-line').textContent=(w+l?Math.round(w/(w+l)*100)+'%':'—')+' · '+w+'W/'+l+'L · '+pe+' '+T('pending');
}
function renderPerf(){
 const box=$('#perf-out');if(!box)return;
 const done=RX.recs.filter(r=>r.status==='win'||r.status==='loss');
 const w=done.filter(r=>r.status==='win').length,l=done.length-w;
 const pips=done.reduce((a,r)=>a+(r.pnlPips||0),0);
 const avg=done.length?pips/done.length:0;
 const wr=done.length?Math.round(w/done.length*100):null;
 box.innerHTML='<div class="perf-grid">'+
  '<div><b>'+(wr==null?'—':wr+'%')+'</b><span>Win rate</span></div>'+
  '<div><b>'+w+'</b><span>'+esc(T('win'))+'</span></div>'+
  '<div><b>'+l+'</b><span>'+esc(T('loss'))+'</span></div>'+
  '<div><b>'+(pips>=0?'+':'')+pips.toFixed(1)+'</b><span>'+esc(T('pipsResult'))+'</span></div>'+
  '<div><b>'+avg.toFixed(1)+'</b><span>Avg pips</span></div>'+
  '<div><b>'+pendingRecs().length+'</b><span>'+esc(T('pending'))+'</span></div></div>';
 if($('#perf-tag'))$('#perf-tag').textContent=done.length?done.length+' closed':'—';
}
function fillPairSelects(){
 const sel=['#rec-pair-filter','#calc-pair','#pnl-pair','#pips-pair','#alert-pair','#watch-select'];
 A.PAIRS.forEach(p=>{
  sel.forEach(s=>{const x=$(s);if(!x||x.querySelector('option[value="'+p.sym+'"]'))return;const o=document.createElement('option');o.value=p.sym;o.textContent=p.label;x.appendChild(o)});
 });
}
function bootRecs(){
 fillPairSelects();
 const scan=$('#rec-scan');on(scan,'click',()=>runScan(true));
 const au=$('#rec-auto');if(au){au.classList.add('on');au.addEventListener('click',()=>{RX.auto=!RX.auto;au.classList.toggle('on',RX.auto);A.toast(RX.auto?'AUTO ON':'AUTO OFF')})}
 on($('#rec-pair-filter'),'change',e=>{RX.params.pair=e.target.value;renderRecs()});
 on($('#rec-tf-filter'),'change',e=>{const v=e.target.value;RX.params.tf=v==='all'?'M15':v;runScan(true)});
 on($('#rec-type-filter'),'change',e=>{RX.params.dir=e.target.value;renderRecs()});
 on($('#rec-clear'),'click',()=>{if(!confirm(isAr()?'مسح كل سجل التوصيات؟':'Clear the whole log?'))return;RX.recs=[];saveRecs();renderRecs();renderRecLog();renderPerf()});
 renderRecs();renderRecLog();renderPerf();
 if(!RX.scanAt)setTimeout(()=>runScan(false),2500);
 clearInterval(RX.timer);RX.timer=setInterval(()=>{if(!RX.auto||document.hidden||RX.scanning)return;if(Date.now()-RX.scanAt>5*60000)runScan(false)},60000);
}
/* ── calculators ── */
function qUsd(pair){const p=A.state.prices||{};if(!p[pair])return null;return p[pair].price}
function pipValueUsd(pair,price){
 const ps=A.pipSize(pair),p=A.PMAP[pair]||{},quote=pair.slice(3);
 if(pair==='XAUUSD')return ps*100;
 if(quote==='USD')return ps*100000;
 if(quote==='JPY')return ps*100000/(price||qUsd('USDJPY')||1);
 if(quote==='GBP')return ps*100000*(qUsd('GBPUSD')||1);
 if(quote==='CHF')return ps*100000/(qUsd('USDCHF')||1);
 if(quote==='CAD')return ps*100000/(qUsd('USDCAD')||1);
 if(quote==='AUD')return ps*100000*(qUsd('AUDUSD')||1);
 if(quote==='NZD')return ps*100000*(qUsd('NZDUSD')||1);
 return ps*100000;
}
function livePrice(pair){const p=A.state.prices&&A.state.prices[pair];return p&&isFinite(p.price)?p.price:null}
function calcRisk(){
 const bal=Number(($('#calc-balance')||{}).value),rp=Number(($('#calc-risk')||{}).value),sl=Number(($('#calc-sl')||{}).value),pair=($('#calc-pair')||{}).value||'EURUSD';
 const out=$('#calc-risk-out');if(!out)return;
 if(!(bal>0)||!(rp>0)||!(sl>0)){out.innerHTML='<span class="calc-hint">'+T('targetHint')+'</span>';return}
 const pv=pipValueUsd(pair,livePrice(pair)),risk=bal*rp/100,lots=risk/(sl*pv);
 out.innerHTML='<div class="calc-line"><span>'+T('riskAmount')+'</span><b>$'+risk.toFixed(2)+'</b></div><div class="calc-line"><span>'+T('pipValue')+'</span><b>$'+pv.toFixed(2)+'</b></div><div class="calc-line"><span>'+T('positionSize')+'</span><b style="color:var(--accent)">'+lots.toFixed(2)+' '+T('lotUnit')+'</b></div><div class="calc-hint">'+T('marginNote')+'</div>';
}
function calcPnl(){
 const pair=($('#pnl-pair')||{}).value||'EURUSD',lots=Number(($('#pnl-lots')||{}).value),e=Number(($('#pnl-entry')||{}).value),x=Number(($('#pnl-exit')||{}).value);
 const out=$('#calc-pnl-out');if(!out)return;
 if(!(lots>0)||!isFinite(e)||!isFinite(x)||!e||!x){out.innerHTML='<span class="calc-hint">'+T('targetHint')+'</span>';return}
 const ps=A.pipSize(pair),pips=(x-e)/ps;
 const px=livePrice(pair);const usd=pips*pipValueUsd(pair,px||x)*lots;const dp=(A.PMAP[pair]||{dp:5}).dp;
 out.innerHTML='<div class="calc-line"><span>'+T('pipsResult')+'</span><b>'+(pips>=0?'+':'')+pips.toFixed(1)+'</b></div><div class="calc-line"><span>'+T('profit')+'</span><b class="'+(usd>=0?'up':'down')+'">'+(usd>=0?'+':'')+'$'+usd.toFixed(2)+'</b></div>'+(px?'<div class="calc-hint">'+T('useLive')+': '+fmt(px,dp)+'</div>':'');
}
function calcPips(){
 const pair=($('#pips-pair')||{}).value||'EURUSD',e=Number(($('#pips-entry')||{}).value),x=Number(($('#pips-exit')||{}).value);
 const out=$('#calc-pips-out');if(!out)return;
 if(!isFinite(e)||!isFinite(x)||!e||!x){out.innerHTML='<span class="calc-hint">'+T('targetHint')+'</span>';return}
 const ps=A.pipSize(pair),pips=(x-e)/ps,dp=(A.PMAP[pair]||{dp:5}).dp;
 out.innerHTML='<div class="calc-line"><span>'+T('pipsResult')+'</span><b>'+(pips>=0?'+':'')+pips.toFixed(1)+'</b></div><div class="calc-line"><span>Δ</span><b>'+fmt(Math.abs(x-e),dp)+'</b></div>';
}
function bootCalc(){
 ['#calc-balance','#calc-risk','#calc-sl','#calc-pair'].forEach(s=>on($(s),'input',calcRisk));
 ['#pnl-pair','#pnl-lots','#pnl-entry','#pnl-exit'].forEach(s=>on($(s),'input',calcPnl));
 ['#pips-pair','#pips-entry','#pips-exit'].forEach(s=>on($(s),'input',calcPips));
 on($('#pips-use-live'),'click',()=>{const pair=($('#pips-pair')||{}).value;const px=livePrice(pair);if(!px){A.toast('DATA UNAVAILABLE');return}const e=$('#pips-entry');if(e&&!e.value)e.value=px;else if($('#pips-exit'))$('#pips-exit').value=px;calcPips()});
 calcRisk();calcPnl();calcPips();
}
/* ── watchlist & alerts ── */
const WKEY='rozlF_watch_v35',AKEY='rozlF_alerts_v35';
let watch=LSget(WKEY,[]),alerts=LSget(AKEY,[]);
if(!Array.isArray(watch))watch=[];if(!Array.isArray(alerts))alerts=[];
function saveWatch(){LSset(WKEY,watch)}
function saveAlerts(){LSset(AKEY,alerts)}
function renderWatch(){
 const box=$('#watch-list');if(!box)return;box.innerHTML='';
 if(!watch.length){box.innerHTML='<div class="empty-state">'+esc(T('watchEmpty'))+'</div>';return}
 watch.forEach(sym=>{
  const p=A.state.prices&&A.state.prices[sym],dp=(A.PMAP[sym]||{dp:5}).dp;
  const row=document.createElement('div');row.className='watch-row';
  row.innerHTML='<b>'+pairLabel(sym)+'</b><span>'+(p?fmt(p.price,dp):'DATA UNAVAILABLE')+'</span><button class="mini-x">✕</button>';
  row.querySelector('button').addEventListener('click',()=>{watch=watch.filter(x=>x!==sym);saveWatch();renderWatch()});
  box.appendChild(row);
 });
}
function renderAlerts(){
 const box=$('#alert-list');if(!box)return;box.innerHTML='';
 if(!alerts.length){box.innerHTML='<div class="empty-state">'+esc(T('alertsEmpty'))+'</div>'}
 alerts.forEach(a=>{
  const dp=(A.PMAP[a.pair]||{dp:5}).dp;const row=document.createElement('div');row.className='alert-row';
  row.innerHTML='<b>'+pairLabel(a.pair)+'</b><span>'+(a.dir==='above'?'↑':'↓')+' '+fmt(a.price,dp)+'</span><span class="tag">'+(a.hit?'✓':'…')+'</span><button class="mini-x">✕</button>';
  row.querySelector('button').addEventListener('click',()=>{alerts=alerts.filter(x=>x.id!==a.id);saveAlerts();renderAlerts()});
  box.appendChild(row);
 });
 const n=$('#alerts-count');if(n)n.textContent=alerts.filter(a=>!a.hit).length;
}
function checkAlerts(){
 let dirty=false;
 alerts.forEach(a=>{
  if(a.hit)return;const px=livePrice(a.pair);if(px==null)return;
  if((a.dir==='above'&&px>=a.price)||(a.dir==='below'&&px<=a.price)){
   a.hit=true;a.hitAt=Date.now();dirty=true;
   notify('price',T('alertHit'),pairLabel(a.pair)+' '+fmt(px,(A.PMAP[a.pair]||{dp:5}).dp));
  }
 });
 if(dirty){saveAlerts();renderAlerts()}
 renderWatch();
}
function bootTools(){
 const wb=$('#watch-add-btn');
 on(wb,'click',()=>{const s=($('#watch-select')||{}).value;if(!s)return;if(watch.indexOf(s)<0)watch.push(s);saveWatch();renderWatch();A.toast(pairLabel(s)+' ★')});
 on($('#alert-add'),'click',()=>{const pair=($('#alert-pair')||{}).value,price=Number(($('#alert-price')||{}).value),dir=($('#alert-dir')||{}).value||'above';if(!pair||!isFinite(price)||price<=0){A.toast('DATA UNAVAILABLE');return}alerts.unshift({id:'a'+Date.now().toString(36)+crypto.getRandomValues(new Uint8Array(2)).join(''),pair,price,dir,hit:false,at:Date.now()});saveAlerts();renderAlerts();A.toast(T('alertAdded'))});
 on($('#news-refresh'),'click',()=>loadNews(true));
 renderWatch();renderAlerts();
 setInterval(()=>{checkAlerts();renderWatch()},10000);
}
function onPricesUpdated(){renderWatch();calcRisk();calcPnl();checkAlerts()}
/* ── news ── */
let newsBusy=false;
function stripTags(s){return String(s||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim()}
function parseNews(txt){
 const out=[];
 if(/<\?xml|<rss|<feed/i.test(txt)){
  const items=txt.match(/<item[\s\S]*?<\/item>/gi)||txt.match(/<entry[\s\S]*?<\/entry>/gi)||[];
  items.forEach(it=>{
   const t=(it.match(/<title[^>]*>([\s\S]*?)<\/title>/i)||[])[1];
   const d=(it.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)||it.match(/<updated>([\s\S]*?)<\/updated>/i)||[])[1];
   if(t)out.push({title:stripTags(t).replace(/<!\[CDATA\[|\]\]>/g,''),time:d?Date.parse(d):null});
  });
 }else{
  txt.split('\n').forEach(l=>{
   const m=/^#{1,4}\s+(.+)$/.exec(l.trim());
   if(m&&m[1]&&!/rss|feed/i.test(m[1]))out.push({title:stripTags(m[1]).slice(0,180),time:null});
  });
 }
 return out.slice(0,8);
}
async function loadNews(force){
 const box=$('#news-list');if(!box||newsBusy)return;
 newsBusy=true;box.innerHTML='<div class="ai-note">'+esc(T('newsLoading'))+'</div>';
 let items=[],src='';
 const w=A.workerBase();
 if(w){
  try{const j=await A.fetchJSON(w+'/news',{cache:'no-store'},9000);if(j&&Array.isArray(j.news)&&j.news.length){items=j.news.slice(0,8).map(n=>({title:n.title,time:n.time||n.date}));src=j.source||'worker'}}catch(e){}
 }
 if(!items.length){
  try{
   const r=await fetch('https://r.jina.ai/https://feeds.a.dj.com/rss/RSSMarketsMain.xml',{cache:'no-store',headers:{'Accept':'text/plain'}});
   if(r.ok){const txt=await r.text();items=parseNews(txt);if(items.length)src='WSJ Markets via r.jina.ai'}
  }catch(e){}
 }
 if(!items.length){
  try{
   const r=await fetch('https://r.jina.ai/https://www.investing.com/rss/news_1.rss',{cache:'no-store',headers:{'Accept':'text/plain'}});
   if(r.ok){const txt=await r.text();items=parseNews(txt);if(items.length)src='Investing.com via r.jina.ai'}
  }catch(e){}
 }
 if(!items.length){box.innerHTML='<div class="empty-state">DATA UNAVAILABLE<br><span class="rc-meta">'+esc(T('newsUnavailable'))+'</span></div>';newsBusy=false;return}
 box.innerHTML=items.map(n=>'<div class="news-row"><span class="news-dot"></span><div><div class="news-t">'+esc(n.title)+'</div><div class="rc-meta">'+(n.time?dt(n.time):'')+'</div></div></div>').join('')+'<div class="rc-meta" style="margin-top:6px">'+esc(T('source'))+': '+esc(src)+'</div>';
 newsBusy=false;
}
/* ── economic calendar ── */
let calBusy=false;
async function loadCalendar(force){
 const box=$('#calendar-list');if(!box||calBusy)return;
 const w=A.workerBase();
 if(!w){box.innerHTML='<div class="empty-state">DATA UNAVAILABLE<br><span class="rc-meta">'+esc(T('calendarUnavailable'))+'</span></div>';return}
 calBusy=true;box.innerHTML='<div class="ai-note">'+esc(T('calendarLoading'))+'</div>';
 try{
  const j=await A.fetchJSON(w+'/calendar',{cache:force?'reload':'default'},12000);
  const evs=(j&&Array.isArray(j.events))?j.events:[];
  if(!evs.length){box.innerHTML='<div class="empty-state">DATA UNAVAILABLE<br><span class="rc-meta">'+esc(T('calendarEmpty'))+'</span></div>';calBusy=false;return}
  const imp=v=>/high/i.test(v)?'high':/medium/i.test(v)?'med':'low';
  box.innerHTML=evs.map(e=>'<div class="news-row"><span class="news-dot imp-'+imp(e.impact)+'"></span><div style="flex:1"><div class="news-t">'+esc(e.title)+'</div><div class="rc-meta">'+esc(e.country)+' · '+esc(e.impact)+' · '+(e.date?dt(e.date):'')+(e.forecast?' · F: '+esc(e.forecast):'')+(e.previous?' · P: '+esc(e.previous):'')+'</div></div></div>').join('')+'<div class="rc-meta" style="margin-top:6px">'+esc(T('source'))+': '+esc(j.source||'ForexFactory')+'</div>';
 }catch(e){box.innerHTML='<div class="empty-state">DATA UNAVAILABLE<br><span class="rc-meta">'+esc(T('calendarUnavailable'))+'</span></div>'}
 calBusy=false;
}
/* ── push ── */
const NTKEY='rozlF_nt_v35';
let nt=LSget(NTKEY,{newRec:true,signal:true,price:true,level:true});
if(!nt||typeof nt!=='object')nt={newRec:true,signal:true,price:true,level:true};
function notifSupported(){return 'Notification'in window&&'serviceWorker'in navigator}
function notify(type,title,body){
 if(!nt[type])return false;
 if(!notifSupported()||Notification.permission!=='granted')return false;
 const opts={body:body||'',icon:'./icon-192.png',badge:'./icon-192.png',tag:'rozlF-'+type,renotify:false,data:{url:'./'}};
 try{if(navigator.serviceWorker.ready)navigator.serviceWorker.ready.then(reg=>reg.showNotification(title,opts));else new Notification(title,opts);return true}catch(e){return false}
}
function b64ToU8(b64){const pad='='.repeat((4-b64.length%4)%4);const s=(b64+pad).replace(/-/g,'+').replace(/_/g,'/');const raw=atob(s);const a=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)a[i]=raw.charCodeAt(i);return a}
async function bootPush(){
 const btn=$('#push-enable'),txt=$('#push-text'),state=$('#push-state');
 document.querySelectorAll('[data-nt]').forEach(t=>{const k=t.getAttribute('data-nt');if(nt[k]===false)t.classList.remove('on');else t.classList.add('on');t.addEventListener('click',()=>{nt[k]=!nt[k];t.classList.toggle('on',nt[k]);LSset(NTKEY,nt)})});
 const key=(window.ROZLF_CONFIG&&window.ROZLF_CONFIG.VAPID_PUBLIC_KEY)||'';
 if(!notifSupported()){if(txt)txt.textContent=T('pushUnsupported');if(btn)btn.disabled=true;return}
 if(Notification.permission==='granted'){
  if(txt)txt.textContent=T('pushOn');if(state)state.classList.add('on');
  if(key)try{const reg=await navigator.serviceWorker.ready;const sub=await reg.pushManager.getSubscription();if(!sub)await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64ToU8(key)});}catch(e){}
 }else if(Notification.permission==='denied'){if(txt)txt.textContent=T('pushBlocked');if(btn)btn.disabled=true}
 else if(txt)txt.textContent=key?T('pushReady'):T('pushNoVapid');
 on(btn,'click',async()=>{
  if(!notifSupported()){A.toast(T('pushUnsupported'));return}
  const perm=await Notification.requestPermission();
  if(perm!=='granted'){if(txt)txt.textContent=T('pushBlocked');return}
  if(txt)txt.textContent=T('pushOn');if(state)state.classList.add('on');
  if(key){
   try{
    const reg=await navigator.serviceWorker.ready;
    let sub=await reg.pushManager.getSubscription();
    if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64ToU8(key)});
    const w=A.workerBase();
    if(w)await fetch(w+'/push/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(sub)});
    A.toast(T('pushOn'));
   }catch(e){A.toast(T('pushVapidFail'))}
  }else{A.toast(T('pushLocalOnly'))}
  notify('newRec',T('pushTest'),T('pushTestBody'));
 });
}
function bootV35(){
 injectKeys();
 bootTheme();bootRecs();bootTools();bootCalc();bootPush();loadNews(false);loadCalendar(false);
 const cr=$('#calendar-refresh');if(cr)cr.addEventListener('click',()=>loadCalendar(true));
 const orig=A.updateHeaderStatus;
 if(typeof orig==='function'){A.updateHeaderStatus=function(){const r=orig.apply(null,arguments);try{onPricesUpdated()}catch(e){}return r}}
 const origSetLang=A.setLang;
 if(typeof origSetLang==='function'){A.setLang=function(v){origSetLang(v);renderRecs();renderRecLog();renderPerf();renderWatch();renderAlerts();loadNews(false);loadCalendar(false)}
  const lb=$('#lang-btn');if(lb)on(lb,'click',()=>setTimeout(()=>{renderRecs();renderRecLog();renderPerf();loadNews(false);const st=$('#rec-status');if(st&&RX.last)st.textContent=T('scanDone',{b:RX.last.buy,s:RX.last.sell})},60));
 }
 window.ROZLF_V35={RX,runScan,renderRecs,renderRecLog,renderPerf,loadNews,notify,applyTheme,calcRisk,calcPnl,calcPips,watch:()=>watch,alerts:()=>alerts};
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bootV35);else bootV35();
})();
