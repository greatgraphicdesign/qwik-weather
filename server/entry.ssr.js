import{t as p,v as ce,w as ue,x as fe,F as J,y as de,a as X,i as M,z as me,A as pe,_ as k,f,j as he,B as T,C as be,Q as ye}from"./q-S-tQVGJZ.js";const R={manifestHash:"64gzvc",core:"q-C3GbeG-e.js",preloader:"q-DoNi8vyY.js",qwikLoader:"q-naDMFAHy.js",bundleGraphAsset:"assets/D9tkKjbI-bundle-graph.json",injections:[{tag:"style",location:"head",attributes:{"data-src":"/assets/DjmTUZuP-style.css",dangerouslySetInnerHTML:`html,body{margin:0;padding:0;box-sizing:border-box;scroll-behavior:smooth}html{font-size:62.5%;font-family:Arial,Helvetica,sans-serif}body{min-width:320px}body.lock{height:100vh;overflow:hidden;touch-action:none}body .nowrap{white-space:nowrap}
`}}],mapping:{s_B5CGBzSqbls:"q-DKsRHgjh.js",s_VIyuPlWz0No:"q-DKsRHgjh.js",s_aj9DGiS7Bpc:"q-D5Px3yCr.js",s_0isg24ZeSFU:"q-D5T0KI9T.js",s_F8XMEKk3ImM:"q-DW7aJCmx.js",s_9Dk7fUYNCDI:"q-CbrvJTxR.js",s_IwvcG8T6xkc:"q-7-NRNaS_.js",s_vg3z8wZWCPA:"q-CbrvJTxR.js",s_zqpXT8B27s0:"q-CbrvJTxR.js",s_0ADYAZ4tl5U:"q-3egcfVU7.js",s_3sccYCDd1Z0:"q-DNTWlRK2.js",s_5Wn3iQBlyEQ:"q-DKsRHgjh.js",s_7gJxx01YKBQ:"q-BsJshDh4.js",s_D630JQDV2kA:"q-7-NRNaS_.js",s_I0AH7Mq9iSU:"q-DdelnbJh.js",s_Kuk0TZChONA:"q-CZzF5biy.js",s_SdTHsMBGSa0:"q-D5Px3yCr.js",s_UlhgH4fzha8:"q-C3GbeG-e.js",s_VkLNXphUh5s:"q-BYrmbkzQ.js",s_XqRdMYz9jnU:"q-Dj1Acy5x.js",s_aZ78XuwTvgg:"q-DQyAMWhh.js",s_c8zL9a1xzdM:"q-D5T0KI9T.js",s_kJfmLBv5WRc:"q-rXkMztmW.js",s_oQnubcoI5HI:"q-DWkyOAvC.js",s_xYL1qOwPyDI:"q-CbrvJTxR.js",s_yFd7xrvnSPQ:"q-Mwcb-pOC.js",s_zadRqopi1J4:"q-BlCGGG0R.js",s_zrbrqoaqXSY:"q-aPjy8ake.js",s_JKHgMZ4xLZQ:"q-BYrmbkzQ.js",s_jh8isGgpPmM:"q-D5T0KI9T.js",s_1U0avqj3eik:"q-DKsRHgjh.js",s_t0wHq1y0afE:"q-CZzF5biy.js",s_7fO9dAvizm8:"q-BxyLfvRW.js",s_iqueVeFBXMs:"q-CVmc0kV4.js",s_r7yEgdqPozw:"q-BJAsNKGB.js",s_ukYi6LYgdro:"q-CTYK1jSZ.js",s_0CAUp0JTeY8:"q-CbrvJTxR.js",s_8Mya1rbYN0E:"q-C3GbeG-e.js",s_ES9UyRPMNuU:"q-rXkMztmW.js",s_Kbh4noZ0b1s:"q-D5T0KI9T.js",s_Si0HDg6C5tU:"q-BlCGGG0R.js",s_TmqgUpNIRjs:"q-DdelnbJh.js",s_Zd0ByPAJqrk:"q-D5T0KI9T.js",s_ZrRVap1iTHs:"q-CbrvJTxR.js",s_dvY07BG40NI:"q-7-NRNaS_.js",s_h020e3ml5UM:"q-DdelnbJh.js",s_i1T3Tua1QQs:"q-7-NRNaS_.js",s_iiJNZWrGswo:"q-BsJshDh4.js",s_j0nOJkUtYFY:"q-7-NRNaS_.js",s_ysmnbPCXPAU:"q-BlCGGG0R.js"}};/**
 * @license
 * @builder.io/qwik/server 1.17.2
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ve=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')}),qe="<sync>";function ge(n,e){const t=e==null?void 0:e.mapper,r=n.symbolMapper?n.symbolMapper:(s,i,a)=>{var c;if(t){const u=N(s),l=t[u];if(!l){if(u===qe)return[u,""];if((c=globalThis.__qwik_reg_symbols)==null?void 0:c.has(u))return[s,"_"];if(a)return[s,`${a}?qrl=${s}`];console.error("Cannot resolve symbol",s,"in",t,a)}return l}};return{isServer:!0,async importSymbol(s,i,a){var v;const c=N(a),u=(v=globalThis.__qwik_reg_symbols)==null?void 0:v.get(c);if(u)return u;let l=String(i);l.endsWith(".js")||(l+=".js");const h=ve(l);if(!(a in h))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${l}'.`);return h[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(i=>{setTimeout(()=>{i(s())})}),chunkForSymbol(s,i,a){return r(s,t,a)}}}async function _e(n,e){const t=ge(n,e);ue(t)}var N=n=>{const e=n.lastIndexOf("_");return e>-1?n.slice(e+1):n},we="q:instance",L={$DEBUG$:!1,$invPreloadProbability$:.65},$e=Date.now(),Se=/\.[mc]?js$/,ee=0,Pe=1,ke=2,je=3,O,H,Ee=(n,e)=>({$name$:n,$state$:Se.test(n)?ee:je,$deps$:te?e==null?void 0:e.map(t=>({...t,$factor$:1})):e,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),Ce=n=>{const e=new Map;let t=0;for(;t<n.length;){const r=n[t++],o=[];let s,i=1;for(;s=n[t],typeof s=="number";)s<0?i=-s/10:o.push({$name$:n[s],$importProbability$:i,$factor$:1}),t++;e.set(r,o)}return e},ne=n=>{let e=z.get(n);if(!e){let t;if(H){if(t=H.get(n),!t)return;t.length||(t=void 0)}e=Ee(n,t),z.set(n,e)}return e},xe=(n,e)=>{e&&("debug"in e&&(L.$DEBUG$=!!e.debug),typeof e.preloadProbability=="number"&&(L.$invPreloadProbability$=1-e.preloadProbability)),!(O!=null||!n)&&(O="",H=Ce(n))},z=new Map,te,A,re=0,j=[],Te=(...n)=>{console.log(`Preloader ${Date.now()-$e}ms ${re}/${j.length} queued>`,...n)},Ne=()=>{z.clear(),A=!1,te=!0,re=0,j.length=0},Ae=()=>{A&&(j.sort((n,e)=>n.$inverseProbability$-e.$inverseProbability$),A=!1)},De=()=>{Ae();let n=.4;const e=[];for(const t of j){const r=Math.round((1-t.$inverseProbability$)*10);r!==n&&(n=r,e.push(n)),e.push(t.$name$)}return e},se=(n,e,t)=>{if(t!=null&&t.has(n))return;const r=n.$inverseProbability$;if(n.$inverseProbability$=e,!(r-n.$inverseProbability$<.01)&&(O!=null&&n.$state$<ke&&(n.$state$===ee&&(n.$state$=Pe,j.push(n),L.$DEBUG$&&Te(`queued ${Math.round((1-n.$inverseProbability$)*100)}%`,n.$name$)),A=!0),n.$deps$)){t||(t=new Set),t.add(n);const o=1-n.$inverseProbability$;for(const s of n.$deps$){const i=ne(s.$name$);if(i.$inverseProbability$===0)continue;let a;if(o===1||o>=.99&&U<100)U++,a=Math.min(.01,1-s.$importProbability$);else{const c=1-s.$importProbability$*o,u=s.$factor$,l=c/u;a=Math.max(.02,i.$inverseProbability$*l),s.$factor$=l}se(i,a,t)}}},V=(n,e)=>{const t=ne(n);t&&t.$inverseProbability$>e&&se(t,e)},U,Ie=(n,e)=>{if(!(n!=null&&n.length))return;U=0;let t=e?1-e:.4;if(Array.isArray(n))for(let r=n.length-1;r>=0;r--){const o=n[r];typeof o=="number"?t=1-o/10:V(o,t)}else V(n,t)};function Be(n){const e=[],t=r=>{if(r)for(const o of r)e.includes(o.url)||(e.push(o.url),o.imports&&t(o.imports))};return t(n),e}var Re=n=>{var t;const e=de();return(t=n==null?void 0:n.qrls)==null?void 0:t.map(r=>{var a;const o=r.$refSymbol$||r.$symbol$,s=r.$chunk$,i=e.chunkForSymbol(o,s,(a=r.dev)==null?void 0:a.file);return i?i[1]:s}).filter(Boolean)};function Le(n,e,t){const r=e.prefetchStrategy;if(r===null)return[];if(!(t!=null&&t.manifest.bundleGraph))return Re(n);if(typeof(r==null?void 0:r.symbolsToPrefetch)=="function")try{const s=r.symbolsToPrefetch({manifest:t.manifest});return Be(s)}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}const o=new Set;for(const s of(n==null?void 0:n.qrls)||[]){const i=N(s.$refSymbol$||s.$symbol$);i&&i.length>=10&&o.add(i)}return[...o]}var Oe=(n,e)=>{if(!(e!=null&&e.manifest.bundleGraph))return[...new Set(n)];Ne();let t=.99;for(const r of n.slice(0,15))Ie(r,t),t*=.85;return De()},G=(n,e)=>{if(e==null)return null;const t=`${n}${e}`.split("/"),r=[];for(const o of t)o===".."&&r.length>0?r.pop():r.push(o);return r.join("/")},He=(n,e,t,r,o)=>{var c;const s=G(n,(c=e==null?void 0:e.manifest)==null?void 0:c.preloader),i="/"+(e==null?void 0:e.manifest.bundleGraphAsset);if(s&&i&&t!==!1){const u=typeof t=="object"?{debug:t.debug,preloadProbability:t.ssrPreloadProbability}:void 0;xe(e==null?void 0:e.manifest.bundleGraph,u);const l=[];t!=null&&t.debug&&l.push("d:1"),t!=null&&t.maxIdlePreloads&&l.push(`P:${t.maxIdlePreloads}`),t!=null&&t.preloadProbability&&l.push(`Q:${t.preloadProbability}`);const h=l.length?`,{${l.join(",")}}`:"",v=`let b=fetch("${i}");import("${s}").then(({l})=>l(${JSON.stringify(n)},b${h}));`;r.push(p("link",{rel:"modulepreload",href:s,nonce:o}),p("link",{rel:"preload",href:i,as:"fetch",crossorigin:"anonymous",nonce:o}),p("script",{type:"module",async:!0,dangerouslySetInnerHTML:v,nonce:o}))}const a=G(n,e==null?void 0:e.manifest.core);a&&r.push(p("link",{rel:"modulepreload",href:a,nonce:o}))},ze=(n,e,t,r,o)=>{if(r.length===0||t===!1)return null;const{ssrPreloads:s,ssrPreloadProbability:i}=Ge(typeof t=="boolean"?void 0:t);let a=s;const c=[],u=[],l=e==null?void 0:e.manifest.manifestHash;if(a){const g=e==null?void 0:e.manifest.preloader,d=e==null?void 0:e.manifest.core,y=Oe(r,e);let S=4;const E=i*10;for(const q of y)if(typeof q=="string"){if(S<E)break;if(q===g||q===d)continue;if(u.push(q),--a===0)break}else S=q}const h=G(n,l&&(e==null?void 0:e.manifest.preloader));let $=u.length?`${JSON.stringify(u)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(n)}+l;document.head.appendChild(e)});`:"";return h&&($+=`window.addEventListener('load',f=>{f=_=>import("${h}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),$&&c.push(p("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:$,nonce:o})),c.length>0?p(J,{children:c}):null},Ue=(n,e,t,r,o)=>{var s;if(t.preloader!==!1){const i=Le(e,t,r);if(i.length>0){const a=ze(n,r,t.preloader,i,(s=t.serverData)==null?void 0:s.nonce);a&&o.push(a)}}};function Ge(n){return{...Je,...n}}var Je={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},Qe='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{b(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),b=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:b,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{u("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){u("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){u("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},u=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{const s=t.readyState;if(!r&&("interactive"==s||"complete"==s)&&(o.forEach(i),r=1,u("qinit"),(e.requestIdleCallback??e.setTimeout).bind(e)(()=>u("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',Fe=`const doc = document;
const win = window;
const events = /* @__PURE__ */ new Set();
const roots = /* @__PURE__ */ new Set([doc]);
let hasInitialized;
const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
const querySelectorAll = (query) => {
  const elements = [];
  roots.forEach((root) => elements.push(...nativeQuerySelectorAll(root, query)));
  return elements;
};
const findShadowRoots = (fragment) => {
  processEventOrNode(fragment);
  nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent) => {
    const shadowRoot = parent.shadowRoot;
    shadowRoot && findShadowRoots(shadowRoot);
  });
};
const isPromise = (promise) => promise && typeof promise.then === "function";
const broadcast = (infix, ev, type = ev.type) => {
  querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el) => {
    dispatch(el, infix, ev, type);
  });
};
const resolveContainer = (containerEl) => {
  if (containerEl._qwikjson_ === void 0) {
    const parentJSON = containerEl === doc.documentElement ? doc.body : containerEl;
    let script = parentJSON.lastElementChild;
    while (script) {
      if (script.tagName === "SCRIPT" && script.getAttribute("type") === "qwik/json") {
        containerEl._qwikjson_ = JSON.parse(
          script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1")
        );
        break;
      }
      script = script.previousElementSibling;
    }
  }
};
const createEvent = (eventName, detail) => new CustomEvent(eventName, {
  detail
});
const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
  const attrName = "on" + onPrefix + ":" + eventName;
  if (element.hasAttribute("preventdefault:" + eventName)) {
    ev.preventDefault();
  }
  if (element.hasAttribute("stoppropagation:" + eventName)) {
    ev.stopPropagation();
  }
  const ctx = element._qc_;
  const relevantListeners = ctx && ctx.li.filter((li) => li[0] === attrName);
  if (relevantListeners && relevantListeners.length > 0) {
    for (const listener of relevantListeners) {
      const results = listener[1].getFn([element, ev], () => element.isConnected)(ev, element);
      const cancelBubble = ev.cancelBubble;
      if (isPromise(results)) {
        await results;
      }
      if (cancelBubble) {
        ev.stopPropagation();
      }
    }
    return;
  }
  const attrValue = element.getAttribute(attrName);
  if (attrValue) {
    const container = element.closest("[q\\\\:container]");
    const qBase = container.getAttribute("q:base");
    const qVersion = container.getAttribute("q:version") || "unknown";
    const qManifest = container.getAttribute("q:manifest-hash") || "dev";
    const base = new URL(qBase, doc.baseURI);
    for (const qrl of attrValue.split("\\n")) {
      const url = new URL(qrl, base);
      const href = url.href;
      const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
      const reqTime = performance.now();
      let handler;
      let importError;
      let error;
      const isSync = qrl.startsWith("#");
      const eventData = {
        qBase,
        qManifest,
        qVersion,
        href,
        symbol,
        element,
        reqTime
      };
      if (isSync) {
        const hash = container.getAttribute("q:instance");
        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
        if (!handler) {
          importError = "sync";
          error = new Error("sym:" + symbol);
        }
      } else {
        emitEvent("qsymbol", eventData);
        const uri = url.href.split("#")[0];
        try {
          const module = import(
                        uri
          );
          resolveContainer(container);
          handler = (await module)[symbol];
          if (!handler) {
            importError = "no-symbol";
            error = new Error(\`\${symbol} not in \${uri}\`);
          }
        } catch (err) {
          importError || (importError = "async");
          error = err;
        }
      }
      if (!handler) {
        emitEvent("qerror", {
          importError,
          error,
          ...eventData
        });
        console.error(error);
        break;
      }
      const previousCtx = doc.__q_context__;
      if (element.isConnected) {
        try {
          doc.__q_context__ = [element, ev, url];
          const results = handler(ev, element);
          if (isPromise(results)) {
            await results;
          }
        } catch (error2) {
          emitEvent("qerror", { error: error2, ...eventData });
        } finally {
          doc.__q_context__ = previousCtx;
        }
      }
    }
  }
};
const emitEvent = (eventName, detail) => {
  doc.dispatchEvent(createEvent(eventName, detail));
};
const camelToKebab = (str) => str.replace(/([A-Z])/g, (a) => "-" + a.toLowerCase());
const processDocumentEvent = async (ev) => {
  let type = camelToKebab(ev.type);
  let element = ev.target;
  broadcast("-document", ev, type);
  while (element && element.getAttribute) {
    const results = dispatch(element, "", ev, type);
    let cancelBubble = ev.cancelBubble;
    if (isPromise(results)) {
      await results;
    }
    cancelBubble || (cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type));
    element = ev.bubbles && cancelBubble !== true ? element.parentElement : null;
  }
};
const processWindowEvent = (ev) => {
  broadcast("-window", ev, camelToKebab(ev.type));
};
const processReadyStateChange = () => {
  const readyState = doc.readyState;
  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
    roots.forEach(findShadowRoots);
    hasInitialized = 1;
    emitEvent("qinit");
    const riC = win.requestIdleCallback ?? win.setTimeout;
    riC.bind(win)(() => emitEvent("qidle"));
    if (events.has("qvisible")) {
      const results = querySelectorAll("[on\\\\:qvisible]");
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            dispatch(entry.target, "", createEvent("qvisible", entry));
          }
        }
      });
      results.forEach((el) => observer.observe(el));
    }
  }
};
const addEventListener = (el, eventName, handler, capture = false) => {
  el.addEventListener(eventName, handler, { capture, passive: false });
};
const processEventOrNode = (...eventNames) => {
  for (const eventNameOrNode of eventNames) {
    if (typeof eventNameOrNode === "string") {
      if (!events.has(eventNameOrNode)) {
        roots.forEach(
          (root) => addEventListener(root, eventNameOrNode, processDocumentEvent, true)
        );
        addEventListener(win, eventNameOrNode, processWindowEvent, true);
        events.add(eventNameOrNode);
      }
    } else {
      if (!roots.has(eventNameOrNode)) {
        events.forEach(
          (eventName) => addEventListener(eventNameOrNode, eventName, processDocumentEvent, true)
        );
        roots.add(eventNameOrNode);
      }
    }
  }
};
if (!("__q_context__" in doc)) {
  doc.__q_context__ = 0;
  const qwikevents = win.qwikevents;
  if (qwikevents) {
    if (Array.isArray(qwikevents)) {
      processEventOrNode(...qwikevents);
    } else {
      processEventOrNode("click", "input");
    }
  }
  win.qwikevents = {
    events,
    roots,
    push: processEventOrNode
  };
  addEventListener(doc, "readystatechange", processReadyStateChange);
  processReadyStateChange();
}`;function Ye(n={}){return n.debug?Fe:Qe}function B(){if(typeof performance>"u")return()=>0;const n=performance.now();return()=>(performance.now()-n)/1e6}function Ke(n){let e=n.base;return typeof n.base=="function"&&(e=n.base(n)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var We="<!DOCTYPE html>";async function Ze(n,e){var Y,K;let t=e.stream,r=0,o=0,s=0,i=0,a="",c;const u=((Y=e.streaming)==null?void 0:Y.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},l=e.containerTagName??"html",h=e.containerAttributes??{},v=t,$=B(),g=Ke(e),d=Xe(e.manifest),y=(K=e.serverData)==null?void 0:K.nonce;function S(){a&&(v.write(a),a="",r=0,s++,s===1&&(i=$()))}function E(m){const b=m.length;r+=b,o+=b,a+=m}switch(u.strategy){case"disabled":t={write:E};break;case"direct":t=v;break;case"auto":let m=0,b=!1;const W=u.maximunChunk??0,I=u.maximunInitialChunk??0;t={write(_){_==="<!--qkssr-f-->"?b||(b=!0):_==="<!--qkssr-pu-->"?m++:_==="<!--qkssr-po-->"?m--:E(_),m===0&&(b||r>=(s===0?I:W))&&(b=!1,S())}};break}l==="html"?t.write(We):t.write("<!--cq-->"),d||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await _e(e,d);const q=d==null?void 0:d.manifest.injections,C=q?q.map(m=>p(m.tag,m.attributes??{})):[];let x=e.qwikLoader?typeof e.qwikLoader=="object"?e.qwikLoader.include==="never"?2:0:e.qwikLoader==="inline"?1:e.qwikLoader==="never"?2:0:0;const D=d==null?void 0:d.manifest.qwikLoader;if(x===0&&!D&&(x=1),x===0)C.unshift(p("link",{rel:"modulepreload",href:`${g}${D}`,nonce:y}),p("script",{type:"module",async:!0,src:`${g}${D}`,nonce:y}));else if(x===1){const m=Ye({debug:e.debug});C.unshift(p("script",{id:"qwikloader",type:"module",async:!0,nonce:y,dangerouslySetInnerHTML:m}))}He(g,d,e.preloader,C,y);const oe=B(),ie=[];let Q=0,F=0;await ce(n,{stream:t,containerTagName:l,containerAttributes:h,serverData:e.serverData,base:g,beforeContent:C,beforeClose:async(m,b,W,I)=>{Q=oe();const _=B();c=await fe(m,b,void 0,I);const w=[];Ue(g,c,e,d,w);const le=JSON.stringify(c.state,void 0,void 0);if(w.push(p("script",{type:"qwik/json",dangerouslySetInnerHTML:Me(le),nonce:y})),c.funcs.length>0){const P=h[we];w.push(p("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:tn(P,c.funcs),nonce:y}))}const Z=Array.from(b.$events$,P=>JSON.stringify(P));if(Z.length>0){const P=`(window.qwikevents||(window.qwikevents=[])).push(${Z.join(",")})`;w.push(p("script",{dangerouslySetInnerHTML:P,nonce:y}))}return en(ie,m),F=_(),p(J,{children:w})},manifestHash:(d==null?void 0:d.manifest.manifestHash)||"dev"+Ve()}),l!=="html"&&t.write("<!--/cq-->"),S();const ae=c.resources.some(m=>m._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:s,manifest:d==null?void 0:d.manifest,size:o,isStatic:!ae,timing:{render:Q,snapshot:F,firstFlush:i}}}function Ve(){return Math.random().toString(36).slice(2)}function Xe(n){const e=n?{...R,...n}:R;if(!e||"mapper"in e)return e;if(e.mapping){const t={};return Object.entries(e.mapping).forEach(([r,o])=>{t[N(r)]=[r,o]}),{mapper:t,manifest:e,injections:e.injections||[]}}}var Me=n=>n.replace(/<(\/?script)/gi,"\\x3C$1");function en(n,e){var t;for(const r of e){const o=(t=r.$componentQrl$)==null?void 0:t.getSymbol();o&&!n.includes(o)&&n.push(o)}}var nn='document["qFuncs_HASH"]=';function tn(n,e){return nn.replace("HASH",n)+`[${e.join(`,
`)}]`}const rn=()=>{const n=me(),e=pe();return k(J,{children:[f("title",null,null,n.title,1,null),f("link",null,{rel:"canonical",href:he(t=>t.url.href,[e],"p0.url.href")},null,3,null),f("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),f("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),n.meta.map(t=>T("meta",{...t},null,0,t.key)),n.links.map(t=>T("link",{...t},null,0,t.key)),n.styles.map(t=>{var r;return T("style",{...t.props,...(r=t.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.style}},null,0,t.key)}),n.scripts.map(t=>{var r;return T("script",{...t.props,...(r=t.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.script}},null,0,t.key)})]},1,"OA_0")},sn=X(M(rn,"s_zrbrqoaqXSY")),on=()=>k(ye,{children:[f("head",null,null,[f("meta",null,{charSet:"utf-8"},null,3,null),f("meta",null,{name:"ROBOTS",content:"All"},null,3,null),f("meta",null,{name:"revisit-after",content:"14 days"},null,3,null),f("meta",null,{name:"rating",content:"safe for kids"},null,3,null),f("meta",null,{name:"viewport",content:"width=device-width,initial-scale=1"},null,3,null),f("link",null,{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/icons/apple-touch-icon.png"},null,3,null),f("link",null,{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/icons/favicon-32x32.png"},null,3,null),f("link",null,{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/icons/favicon-16x16.png"},null,3,null),f("link",null,{rel:"manifest",href:"/assets/icons/site.webmanifest"},null,3,null),f("meta",null,{name:"msapplication-TileColor",content:"#fbf3e5"},null,3,null),f("meta",null,{name:"msapplication-config",content:"/assets/icons/browserconfig.xml"},null,3,null),f("meta",null,{name:"theme-color",content:"#fbf3e5"},null,3,null),f("link",null,{rel:"shortcut icon",href:"/favicon.ico"},null,3,null),k(sn,null,3,"35_0")],1,null),f("body",null,{lang:"en"},k(be,null,3,"35_1"),1,null)]},1,"35_2"),an=X(M(on,"s_3sccYCDd1Z0"));function un(n){return Ze(k(an,null,3,"pY_0"),{manifest:R,...n,containerAttributes:{lang:"en-us",...n.containerAttributes},serverData:{...n.serverData}})}export{un as default};
