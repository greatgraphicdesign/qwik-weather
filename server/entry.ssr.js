import{t as p,v as ce,w as ue,x as de,F as z,y as fe,a as X,i as M,z as me,A as pe,_ as k,f,j as he,B as D,C as be,Q as ye}from"./q-DUT_-RJm.js";const L={manifestHash:"b4fh8t",core:"q-Bh-u0Mce.js",preloader:"q-DoNi8vyY.js",qwikLoader:"q-naDMFAHy.js",bundleGraphAsset:"assets/KslxW1Hm-bundle-graph.json",injections:[{tag:"style",location:"head",attributes:{"data-src":"/assets/DjmTUZuP-style.css",dangerouslySetInnerHTML:`html,body{margin:0;padding:0;box-sizing:border-box;scroll-behavior:smooth}html{font-size:62.5%;font-family:Arial,Helvetica,sans-serif}body{min-width:320px}body.lock{height:100vh;overflow:hidden;touch-action:none}body .nowrap{white-space:nowrap}
`}}],mapping:{s_B5CGBzSqbls:"q-WidGCBde.js",s_VIyuPlWz0No:"q-WidGCBde.js",s_aj9DGiS7Bpc:"q-DdUX4HrI.js",s_3UrX2JAL0Dk:"q-VKSzaECd.js",s_6t0Puo0MfQQ:"q-Dcg1AUv-.js",s_4P3Tq1ya4fI:"q-CzhZ4RJF.js",s_9Dk7fUYNCDI:"q-DW-7VA_a.js",s_a80EB3bt7Wg:"q-D2O_llU9.js",s_vg3z8wZWCPA:"q-DQaxtMNl.js",s_zqpXT8B27s0:"q-rcy1LN24.js",s_0ADYAZ4tl5U:"q-Cl2DEaCq.js",s_3sccYCDd1Z0:"q-Bh-u0Mce.js",s_5Wn3iQBlyEQ:"q-WidGCBde.js",s_ASeN064cN2o:"q-Br4oWlFq.js",s_Kuk0TZChONA:"q-9MIw5Prd.js",s_SbetB8Tzpas:"q-DRBKI03e.js",s_SdTHsMBGSa0:"q-DdUX4HrI.js",s_VkLNXphUh5s:"q-DTU2CsX6.js",s_XqRdMYz9jnU:"q-DtWHCgam.js",s_Y43qYApudrQ:"q-Dxs74CB3.js",s_kJfmLBv5WRc:"q-Af11p02V.js",s_l7Wnvx498s4:"q-Dcg1AUv-.js",s_oQnubcoI5HI:"q-HG-RJFwV.js",s_qVZalLKqOFs:"q-VKSzaECd.js",s_uAo0TsKR8Tk:"q-DWBnya1t.js",s_xYL1qOwPyDI:"q-BSU8uYRq.js",s_yFd7xrvnSPQ:"q-DHUFR0ea.js",s_zadRqopi1J4:"q-DZtHwvnk.js",s_zrbrqoaqXSY:"q-PYkOtLEs.js",s_5zQTLmoQbTs:"q-Dcg1AUv-.js",s_JKHgMZ4xLZQ:"q-DTU2CsX6.js",s_1U0avqj3eik:"q-WidGCBde.js",s_t0wHq1y0afE:"q-9MIw5Prd.js",s_8TYXi5YtmAY:"q-DJEUiPde.js",s_V8okuY7MQr4:"q-De0aiIQR.js",s_sPpAbMz0cPs:"q-DdW-Ku0I.js",s_sXD8zQmIbZ4:"q-Cck2FOCp.js",s_07WpCTSgFOM:"q-DRBKI03e.js",s_0CAUp0JTeY8:"q-BSU8uYRq.js",s_1NWk033F7Jc:"q-Dcg1AUv-.js",s_CyL0Cs5MPnI:"q-Dcg1AUv-.js",s_ES9UyRPMNuU:"q-Af11p02V.js",s_Lg59CUNo6EY:"q-Dxs74CB3.js",s_NFhMOhuEe4k:"q-Dxs74CB3.js",s_Q5ucSmmHBmI:"q-DRBKI03e.js",s_Si0HDg6C5tU:"q-DZtHwvnk.js",s_XxHek272ejU:"q-VKSzaECd.js",s_Ykb6fREedaw:"q-Br4oWlFq.js",s_ZrRVap1iTHs:"q-BSU8uYRq.js",s_Zui6ovy5tcw:"q-Dxs74CB3.js",s_ysmnbPCXPAU:"q-DZtHwvnk.js"}};/**
 * @license
 * @builder.io/qwik/server 1.19.2
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ve=!1,qe="",ge=(t,...e)=>{const n=we(ve,t,...e);debugger;return n},_e=t=>t,we=(t,e,...n)=>{const r=e instanceof Error?e:new Error(e);return console.error("%cQWIK ERROR",qe,r.message,..._e(n),r.stack),r},$e=(t,...e)=>`Code(${t}) https://github.com/QwikDev/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8+t}`,Se=11,Pe=(t,...e)=>{const n=$e(t,...e);return ge(n,...e)},ke="<sync>";function Ee(t,e){const n=e==null?void 0:e.mapper,r=t.symbolMapper?t.symbolMapper:(o,a,i)=>{var l;if(n){const u=x(o),c=n[u];if(!c){if(u===ke)return[u,""];if((l=globalThis.__qwik_reg_symbols)==null?void 0:l.has(u))return[o,"_"];if(i)return[o,`${i}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",n,i)}return c}};return{isServer:!0,async importSymbol(o,a,i){var c;const l=x(i),u=(c=globalThis.__qwik_reg_symbols)==null?void 0:c.get(l);if(u)return u;throw Pe(Se,i)},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(a=>{setTimeout(()=>{a(o())})}),chunkForSymbol(o,a,i){return r(o,n,i)}}}async function je(t,e){const n=Ee(t,e);ue(n)}var x=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t},Ce="q:instance",O={$DEBUG$:!1,$invPreloadProbability$:.65},Ae=Date.now(),De=/\.[mc]?js$/,ee=0,xe=1,Ie=2,Be=3,R,U,Te=(t,e)=>({$name$:t,$state$:De.test(t)?ee:Be,$deps$:ne?e==null?void 0:e.map(n=>({...n,$factor$:1})):e,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),Ne=t=>{const e=new Map;let n=0;for(;n<t.length;){const r=t[n++],s=[];let o,a=1;for(;o=t[n],typeof o=="number";)o<0?a=-o/10:s.push({$name$:t[o],$importProbability$:a,$factor$:1}),n++;e.set(r,s)}return e},te=t=>{let e=H.get(t);if(!e){let n;if(U){if(n=U.get(t),!n)return;n.length||(n=void 0)}e=Te(t,n),H.set(t,e)}return e},Le=(t,e)=>{e&&("debug"in e&&(O.$DEBUG$=!!e.debug),typeof e.preloadProbability=="number"&&(O.$invPreloadProbability$=1-e.preloadProbability)),!(R!=null||!t)&&(R="",U=Ne(t))},H=new Map,ne,I,re=0,E=[],Oe=(...t)=>{console.log(`Preloader ${Date.now()-Ae}ms ${re}/${E.length} queued>`,...t)},Re=()=>{H.clear(),I=!1,ne=!0,re=0,E.length=0},Ue=()=>{I&&(E.sort((t,e)=>t.$inverseProbability$-e.$inverseProbability$),I=!1)},He=()=>{Ue();let t=.4;const e=[];for(const n of E){const r=Math.round((1-n.$inverseProbability$)*10);r!==t&&(t=r,e.push(t)),e.push(n.$name$)}return e},se=(t,e,n)=>{if(n!=null&&n.has(t))return;const r=t.$inverseProbability$;if(t.$inverseProbability$=e,!(r-t.$inverseProbability$<.01)&&(R!=null&&t.$state$<Ie&&(t.$state$===ee&&(t.$state$=xe,E.push(t),O.$DEBUG$&&Oe(`queued ${Math.round((1-t.$inverseProbability$)*100)}%`,t.$name$)),I=!0),t.$deps$)){n||(n=new Set),n.add(t);const s=1-t.$inverseProbability$;for(const o of t.$deps$){const a=te(o.$name$);if(a.$inverseProbability$===0)continue;let i;if(s===1||s>=.99&&Q<100)Q++,i=Math.min(.01,1-o.$importProbability$);else{const l=1-o.$importProbability$*s,u=o.$factor$,c=l/u;i=Math.max(.02,a.$inverseProbability$*c),o.$factor$=c}se(a,i,n)}}},V=(t,e)=>{const n=te(t);n&&n.$inverseProbability$>e&&se(n,e)},Q,Qe=(t,e)=>{if(!(t!=null&&t.length))return;Q=0;let n=e?1-e:.4;if(Array.isArray(t))for(let r=t.length-1;r>=0;r--){const s=t[r];typeof s=="number"?n=1-s/10:V(s,n)}else V(t,n)};function Fe(t){const e=[],n=r=>{if(r)for(const s of r)e.includes(s.url)||(e.push(s.url),s.imports&&n(s.imports))};return n(t),e}var ze=t=>{var r;const e=fe(),n=(r=t==null?void 0:t.qrls)==null?void 0:r.map(s=>{var l;const o=s.$refSymbol$||s.$symbol$,a=s.$chunk$,i=e.chunkForSymbol(o,a,(l=s.dev)==null?void 0:l.file);return i?i[1]:a}).filter(Boolean);return[...new Set(n)]};function Ye(t,e,n){const r=e.prefetchStrategy;if(r===null)return[];if(!(n!=null&&n.manifest.bundleGraph))return ze(t);if(typeof(r==null?void 0:r.symbolsToPrefetch)=="function")try{const o=r.symbolsToPrefetch({manifest:n.manifest});return Fe(o)}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}const s=new Set;for(const o of(t==null?void 0:t.qrls)||[]){const a=x(o.$refSymbol$||o.$symbol$);a&&a.length>=10&&s.add(a)}return[...s]}var We=(t,e)=>{if(!(e!=null&&e.manifest.bundleGraph))return[...new Set(t)];Re();let n=.99;for(const r of t.slice(0,15))Qe(r,n),n*=.85;return He()},F=(t,e)=>{if(e==null)return null;const n=`${t}${e}`.split("/"),r=[];for(const s of n)s===".."&&r.length>0?r.pop():r.push(s);return r.join("/")},Je=(t,e,n,r,s)=>{var l;const o=F(t,(l=e==null?void 0:e.manifest)==null?void 0:l.preloader),a="/"+(e==null?void 0:e.manifest.bundleGraphAsset);if(o&&a&&n!==!1){const u=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;Le(e==null?void 0:e.manifest.bundleGraph,u);const c=[];n!=null&&n.debug&&c.push("d:1"),n!=null&&n.maxIdlePreloads&&c.push(`P:${n.maxIdlePreloads}`),n!=null&&n.preloadProbability&&c.push(`Q:${n.preloadProbability}`);const y=c.length?`,{${c.join(",")}}`:"",w=`let b=fetch("${a}");import("${o}").then(({l})=>l(${JSON.stringify(t)},b${y}));`;r.push(p("link",{rel:"modulepreload",href:o,nonce:s,crossorigin:"anonymous"}),p("link",{rel:"preload",href:a,as:"fetch",crossorigin:"anonymous",nonce:s}),p("script",{type:"module",async:!0,dangerouslySetInnerHTML:w,nonce:s}))}const i=F(t,e==null?void 0:e.manifest.core);i&&r.push(p("link",{rel:"modulepreload",href:i,nonce:s}))},Ze=(t,e,n,r,s)=>{if(r.length===0||n===!1)return null;const{ssrPreloads:o,ssrPreloadProbability:a}=Ke(typeof n=="boolean"?void 0:n);let i=o;const l=[],u=[],c=e==null?void 0:e.manifest.manifestHash;if(i){const q=e==null?void 0:e.manifest.preloader,d=e==null?void 0:e.manifest.core,b=We(r,e);let S=4;const j=a*10;for(const v of b)if(typeof v=="string"){if(S<j)break;if(v===q||v===d)continue;if(u.push(v),--i===0)break}else S=v}const y=F(t,c&&(e==null?void 0:e.manifest.preloader));let $=u.length?`${JSON.stringify(u)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(t)}+l;document.head.appendChild(e)});`:"";return y&&($+=`window.addEventListener('load',f=>{f=_=>import("${y}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),$&&l.push(p("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:$,nonce:s})),l.length>0?p(z,{children:l}):null},Ge=(t,e,n,r,s)=>{var o;if(n.preloader!==!1){const a=Ye(e,n,r);if(a.length>0){const i=Ze(t,r,n.preloader,a,(o=n.serverData)==null?void 0:o.nonce);i&&s.push(i)}}};function Ke(t){return{...Ve,...t}}var Ve={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},Xe='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{b(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),b=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:b,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{u("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){u("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){u("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},u=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{const s=t.readyState;if(!r&&("interactive"==s||"complete"==s)&&(o.forEach(i),r=1,u("qinit"),(e.requestIdleCallback??e.setTimeout).bind(e)(()=>u("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',Me=`const doc = document;
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
}`;function et(t={}){return t.debug?Me:Xe}function N(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function tt(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var nt="<!DOCTYPE html>";async function rt(t,e){var J,Z;let n=e.stream,r=0,s=0,o=0,a=0,i="",l;const u=((J=e.streaming)==null?void 0:J.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},c=e.containerTagName??"html",y=e.containerAttributes??{},w=n,$=N(),q=tt(e),d=ot(e.manifest),b=(Z=e.serverData)==null?void 0:Z.nonce;function S(){i&&(w.write(i),i="",r=0,o++,o===1&&(a=$()))}function j(m){const h=m.length;r+=h,s+=h,i+=m}switch(u.strategy){case"disabled":n={write:j};break;case"direct":n=w;break;case"auto":let m=0,h=!1;const G=u.maximunChunk??0,T=u.maximunInitialChunk??0;n={write(g){g==="<!--qkssr-f-->"?h||(h=!0):g==="<!--qkssr-pu-->"?m++:g==="<!--qkssr-po-->"?m--:j(g),m===0&&(h||r>=(o===0?T:G))&&(h=!1,S())}};break}c==="html"?n.write(nt):n.write("<!--cq-->"),d||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await je(e,d);const v=d==null?void 0:d.manifest.injections,C=v?v.map(m=>p(m.tag,m.attributes??{})):[];let A=e.qwikLoader?typeof e.qwikLoader=="object"?e.qwikLoader.include==="never"?2:0:e.qwikLoader==="inline"?1:e.qwikLoader==="never"?2:0:0;const B=d==null?void 0:d.manifest.qwikLoader;if(A===0&&!B&&(A=1),A===0)C.unshift(p("link",{rel:"modulepreload",href:`${q}${B}`,nonce:b}),p("script",{type:"module",async:!0,src:`${q}${B}`,nonce:b}));else if(A===1){const m=et({debug:e.debug});C.unshift(p("script",{id:"qwikloader",type:"module",async:!0,nonce:b,dangerouslySetInnerHTML:m}))}Je(q,d,e.preloader,C,b);const oe=N(),ae=[];let Y=0,W=0;await ce(t,{stream:n,containerTagName:c,containerAttributes:y,serverData:e.serverData,base:q,beforeContent:C,beforeClose:async(m,h,G,T)=>{Y=oe();const g=N();l=await de(m,h,void 0,T);const _=[];Ge(q,l,e,d,_);const le=JSON.stringify(l.state,void 0,void 0);if(_.push(p("script",{type:"qwik/json",dangerouslySetInnerHTML:at(le),nonce:b})),l.funcs.length>0){const P=y[Ce];_.push(p("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:ct(P,l.funcs),nonce:b}))}const K=Array.from(h.$events$,P=>JSON.stringify(P));if(K.length>0){const P=`(window.qwikevents||(window.qwikevents=[])).push(${K.join(",")})`;_.push(p("script",{dangerouslySetInnerHTML:P,nonce:b}))}return it(ae,m),W=g(),p(z,{children:_})},manifestHash:(d==null?void 0:d.manifest.manifestHash)||"dev"+st()}),c!=="html"&&n.write("<!--/cq-->"),S();const ie=l.resources.some(m=>m._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:d==null?void 0:d.manifest,size:s,isStatic:!ie,timing:{render:Y,snapshot:W,firstFlush:a}}}function st(){return Math.random().toString(36).slice(2)}function ot(t){const e=t?{...L,...t}:L;if(!e||"mapper"in e)return e;if(e.mapping){const n={};return Object.entries(e.mapping).forEach(([r,s])=>{n[x(r)]=[r,s]}),{mapper:n,manifest:e,injections:e.injections||[]}}}var at=t=>t.replace(/<(\/?script)/gi,"\\x3C$1");function it(t,e){var n;for(const r of e){const s=(n=r.$componentQrl$)==null?void 0:n.getSymbol();s&&!t.includes(s)&&t.push(s)}}var lt='document["qFuncs_HASH"]=';function ct(t,e){return lt.replace("HASH",t)+`[${e.join(`,
`)}]`}const ut=()=>{const t=me(),e=pe();return k(z,{children:[f("title",null,null,t.title,1,null),f("link",null,{rel:"canonical",href:he(n=>n.url.href,[e],"p0.url.href")},null,3,null),f("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),t.meta.map(n=>D("meta",{...n},null,0,n.key)),t.links.map(n=>D("link",{...n},null,0,n.key)),t.styles.map(n=>{var r;return D("style",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.style}},null,0,n.key)}),t.scripts.map(n=>{var r;return D("script",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.script}},null,0,n.key)})]},1,"OA_0")},dt=X(M(ut,"s_zrbrqoaqXSY")),ft=()=>k(ye,{children:[f("head",null,null,[f("meta",null,{charSet:"utf-8"},null,3,null),f("meta",null,{name:"ROBOTS",content:"All"},null,3,null),f("meta",null,{name:"revisit-after",content:"14 days"},null,3,null),f("meta",null,{name:"rating",content:"safe for kids"},null,3,null),f("meta",null,{name:"viewport",content:"width=device-width,initial-scale=1"},null,3,null),f("link",null,{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/icons/apple-touch-icon.png"},null,3,null),f("link",null,{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/icons/favicon-32x32.png"},null,3,null),f("link",null,{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/icons/favicon-16x16.png"},null,3,null),f("link",null,{rel:"manifest",href:"/assets/icons/site.webmanifest"},null,3,null),f("meta",null,{name:"msapplication-TileColor",content:"#fbf3e5"},null,3,null),f("meta",null,{name:"msapplication-config",content:"/assets/icons/browserconfig.xml"},null,3,null),f("meta",null,{name:"theme-color",content:"#fbf3e5"},null,3,null),f("link",null,{rel:"shortcut icon",href:"/favicon.ico"},null,3,null),k(dt,null,3,"35_0")],1,null),f("body",null,{lang:"en"},k(be,null,3,"35_1"),1,null)]},1,"35_2"),mt=X(M(ft,"s_3sccYCDd1Z0"));function bt(t){return rt(k(mt,null,3,"pY_0"),{manifest:L,...t,containerAttributes:{lang:"en-us",...t.containerAttributes},serverData:{...t.serverData}})}export{bt as default};
