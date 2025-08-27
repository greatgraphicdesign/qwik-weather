import{t as p,v as fe,w as me,x as pe,F,y as he,a as ee,i as ne,z as be,A as ye,_ as E,f as d,j as ve,B as C,C as qe,Q as _e}from"./q-aIHa9z5y.js";const O={manifestHash:"sl9jwe",core:"q-CG5bTEZD.js",preloader:"q-BKunlu9X.js",qwikLoader:"q-pLIxelCT.js",bundleGraphAsset:"assets/D0WU481A-bundle-graph.json",injections:[{tag:"style",location:"head",attributes:{"data-src":"/assets/DjmTUZuP-style.css",dangerouslySetInnerHTML:`html,body{margin:0;padding:0;box-sizing:border-box;scroll-behavior:smooth}html{font-size:62.5%;font-family:Arial,Helvetica,sans-serif}body{min-width:320px}body.lock{height:100vh;overflow:hidden;touch-action:none}body .nowrap{white-space:nowrap}
`}}],mapping:{s_B5CGBzSqbls:"q-B9OXJep7.js",s_VIyuPlWz0No:"q-B9OXJep7.js",s_aj9DGiS7Bpc:"q-CnCPPY2P.js",s_8mMf3cFU4F8:"q-diTtdL6L.js",s_TnPe1RWYzEg:"q-5EA26dKb.js",s_9Dk7fUYNCDI:"q-Cdq0Lzoe.js",s_RkYnNb7VNEk:"q-CnDWWYvB.js",s_vg3z8wZWCPA:"q-Cdq0Lzoe.js",s_zqpXT8B27s0:"q-Cdq0Lzoe.js",s_0ADYAZ4tl5U:"q-B5Z3-g2N.js",s_0j2zpNAshA4:"q-CG5bTEZD.js",s_3sccYCDd1Z0:"q-BkViHoQc.js",s_5Wn3iQBlyEQ:"q-B9OXJep7.js",s_HfFSkqX4mf8:"q-C6olwJj_.js",s_Kuk0TZChONA:"q-B71IYRxp.js",s_SdTHsMBGSa0:"q-CnCPPY2P.js",s_VkLNXphUh5s:"q-D752zBzH.js",s_Wz0ZeQUMEl4:"q-diTtdL6L.js",s_XqRdMYz9jnU:"q-BUtRRl-U.js",s_fwRdcv2tR3U:"q-Cbn5VlTs.js",s_kJfmLBv5WRc:"q-B3tx4YOs.js",s_oQnubcoI5HI:"q-DEx2I51c.js",s_scOYc9KblU8:"q-CnDWWYvB.js",s_xYL1qOwPyDI:"q-Cdq0Lzoe.js",s_yFd7xrvnSPQ:"q-Dxzd_qGy.js",s_ywAOr1C9AUM:"q-BJQVPGBO.js",s_zadRqopi1J4:"q-rrFo7DJa.js",s_zrbrqoaqXSY:"q-DgjvyiDO.js",s_JKHgMZ4xLZQ:"q-D752zBzH.js",s_njyHnPvDum0:"q-diTtdL6L.js",s_1U0avqj3eik:"q-B9OXJep7.js",s_t0wHq1y0afE:"q-B71IYRxp.js",s_28gzhLy4xbE:"q-AnjPNdC6.js",s_5Obij2IZ0sw:"q-HF1zc3nM.js",s_EnqkD2j1opw:"q-P14HsrLO.js",s_qzRNLIW28Mo:"q-B7ue9kiS.js",s_0CAUp0JTeY8:"q-Cdq0Lzoe.js",s_0i29IMeZvmw:"q-CG5bTEZD.js",s_ES9UyRPMNuU:"q-B3tx4YOs.js",s_INtUpUfwvLE:"q-diTtdL6L.js",s_Ll8CDxQcFag:"q-C6olwJj_.js",s_NgME0XIDIPE:"q-C6olwJj_.js",s_OOE6z0kiAfg:"q-Cbn5VlTs.js",s_Si0HDg6C5tU:"q-rrFo7DJa.js",s_ZrRVap1iTHs:"q-Cdq0Lzoe.js",s_d2uoBV2bd3A:"q-diTtdL6L.js",s_rS3TZtMHBQQ:"q-CnDWWYvB.js",s_uYBA7oMS9dk:"q-CnDWWYvB.js",s_ysmnbPCXPAU:"q-rrFo7DJa.js"}};/**
 * @license
 * @builder.io/qwik/server 1.16.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ge=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')}),we="<sync>";function $e(n,e){const t=e==null?void 0:e.mapper,r=n.symbolMapper?n.symbolMapper:(o,i,a)=>{var l;if(t){const u=L(o),c=t[u];if(!c){if(u===we)return[u,""];if((l=globalThis.__qwik_reg_symbols)==null?void 0:l.has(u))return[o,"_"];if(a)return[o,`${a}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",t,a)}return c}};return{isServer:!0,async importSymbol(o,i,a){var v;const l=L(a),u=(v=globalThis.__qwik_reg_symbols)==null?void 0:v.get(l);if(u)return u;let c=String(i);c.endsWith(".js")||(c+=".js");const h=ge(c);if(!(a in h))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${c}'.`);return h[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(i=>{setTimeout(()=>{i(o())})}),chunkForSymbol(o,i,a){return r(o,t,a)}}}async function Pe(n,e){const t=$e(n,e);me(t)}var L=n=>{const e=n.lastIndexOf("_");return e>-1?n.slice(e+1):n},Se="q:instance",A={$DEBUG$:!1,$invPreloadProbability$:.65},Ee=Date.now(),ke=/\.[mc]?js$/,te=0,je=1,Ce=2,Le=3,R,z,Ae=(n,e)=>({$name$:n,$state$:ke.test(n)?te:Le,$deps$:oe?e==null?void 0:e.map(t=>({...t,$factor$:1})):e,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),xe=n=>{const e=new Map;let t=0;for(;t<n.length;){const r=n[t++],s=[];let o,i=1;for(;o=n[t],typeof o=="number";)o<0?i=-o/10:s.push({$name$:n[o],$importProbability$:i,$factor$:1}),t++;e.set(r,s)}return e},re=n=>{let e=H.get(n);if(!e){let t;if(z){if(t=z.get(n),!t)return;t.length||(t=void 0)}e=Ae(n,t),H.set(n,e)}return e},Be=(n,e)=>{e&&("debug"in e&&(A.$DEBUG$=!!e.debug),typeof e.preloadProbability=="number"&&(A.$invPreloadProbability$=1-e.preloadProbability)),!(R!=null||!n)&&(R="",z=xe(n))},H=new Map,oe,x,se=0,k=[],De=(...n)=>{console.log(`Preloader ${Date.now()-Ee}ms ${se}/${k.length} queued>`,...n)},Te=()=>{H.clear(),x=!1,oe=!0,se=0,k.length=0},Ie=()=>{x&&(k.sort((n,e)=>n.$inverseProbability$-e.$inverseProbability$),x=!1)},Ne=()=>{Ie();let n=.4;const e=[];for(const t of k){const r=Math.round((1-t.$inverseProbability$)*10);r!==n&&(n=r,e.push(n)),e.push(t.$name$)}return e},ie=(n,e,t)=>{if(t!=null&&t.has(n))return;const r=n.$inverseProbability$;if(n.$inverseProbability$=e,!(r-n.$inverseProbability$<.01)&&(R!=null&&n.$state$<Ce&&n.$inverseProbability$<A.$invPreloadProbability$&&(n.$state$===te&&(n.$state$=je,k.push(n),A.$DEBUG$&&De(`queued ${Math.round((1-n.$inverseProbability$)*100)}%`,n.$name$)),x=!0),n.$deps$)){t||(t=new Set),t.add(n);const s=1-n.$inverseProbability$;for(const o of n.$deps$){const i=re(o.$name$);if(i.$inverseProbability$===0)continue;let a;if(o.$importProbability$>.5&&(s===1||s>=.99&&U<100))U++,a=Math.min(.01,1-o.$importProbability$);else{const l=1-o.$importProbability$*s,u=o.$factor$,c=l/u;a=Math.max(.02,i.$inverseProbability$*c),o.$factor$=c}ie(i,a,t)}}},M=(n,e)=>{const t=re(n);t&&t.$inverseProbability$>e&&ie(t,e)},U,Oe=(n,e)=>{if(!(n!=null&&n.length))return;U=0;let t=e?1-e:.4;if(Array.isArray(n))for(let r=n.length-1;r>=0;r--){const s=n[r];typeof s=="number"?t=1-s/10:M(s,t)}else M(n,t)};function Re(n){const e=[],t=r=>{if(r)for(const s of r)e.includes(s.url)||(e.push(s.url),s.imports&&t(s.imports))};return t(n),e}var ze=n=>{var t;const e=he();return(t=n==null?void 0:n.qrls)==null?void 0:t.map(r=>{var a;const s=r.$refSymbol$||r.$symbol$,o=r.$chunk$,i=e.chunkForSymbol(s,o,(a=r.dev)==null?void 0:a.file);return i?i[1]:o}).filter(Boolean)};function He(n,e,t){const r=e.prefetchStrategy;if(r===null)return[];if(!(t!=null&&t.manifest.bundleGraph))return ze(n);if(typeof(r==null?void 0:r.symbolsToPrefetch)=="function")try{const o=r.symbolsToPrefetch({manifest:t.manifest});return Re(o)}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}const s=new Set;for(const o of(n==null?void 0:n.qrls)||[]){const i=L(o.$refSymbol$||o.$symbol$);i&&i.length>=10&&s.add(i)}return[...s]}var Ue=(n,e)=>{if(!(e!=null&&e.manifest.bundleGraph))return[...new Set(n)];Te();let t=.99;for(const r of n.slice(0,15))Oe(r,t),t*=.85;return Ne()},Q=(n,e)=>{if(e==null)return null;const t=`${n}${e}`.split("/"),r=[];for(const s of t)s===".."&&r.length>0?r.pop():r.push(s);return r.join("/")},Qe=(n,e,t,r,s)=>{var l;const o=Q(n,(l=e==null?void 0:e.manifest)==null?void 0:l.preloader),i="/"+(e==null?void 0:e.manifest.bundleGraphAsset);if(o&&i&&t!==!1){const u=typeof t=="object"?{debug:t.debug,preloadProbability:t.ssrPreloadProbability}:void 0;Be(e==null?void 0:e.manifest.bundleGraph,u);const c=[];t!=null&&t.debug&&c.push("d:1"),t!=null&&t.maxIdlePreloads&&c.push(`P:${t.maxIdlePreloads}`),t!=null&&t.preloadProbability&&c.push(`Q:${t.preloadProbability}`);const h=c.length?`,{${c.join(",")}}`:"",v=`let b=fetch("${i}");import("${o}").then(({l})=>l(${JSON.stringify(n)},b${h}));`;r.push(p("link",{rel:"modulepreload",href:o,nonce:s}),p("link",{rel:"preload",href:i,as:"fetch",crossorigin:"anonymous",nonce:s}),p("script",{type:"module",async:!0,dangerouslySetInnerHTML:v,nonce:s}))}const a=Q(n,e==null?void 0:e.manifest.core);a&&r.push(p("link",{rel:"modulepreload",href:a,nonce:s}))},Fe=(n,e,t,r,s)=>{if(r.length===0||t===!1)return null;const{ssrPreloads:o,ssrPreloadProbability:i}=Je(typeof t=="boolean"?void 0:t);let a=o;const l=[],u=[],c=e==null?void 0:e.manifest.manifestHash;if(a){const _=e==null?void 0:e.manifest.preloader,f=e==null?void 0:e.manifest.core,y=Ue(r,e);let S=4;const j=i*10;for(const q of y)if(typeof q=="string"){if(S<j)break;if(q===_||q===f)continue;if(u.push(q),--a===0)break}else S=q}const h=Q(n,c&&(e==null?void 0:e.manifest.preloader));let P=u.length?`${JSON.stringify(u)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(n)}+l;document.head.appendChild(e)});`:"";return h&&(P+=`window.addEventListener('load',f=>{f=_=>import("${h}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),P&&l.push(p("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:P,nonce:s})),l.length>0?p(F,{children:l}):null},Ye=(n,e,t,r,s)=>{var o;if(t.preloader!==!1){const i=He(e,t,r);if(i.length>0){const a=Fe(n,r,t.preloader,i,(o=t.serverData)==null?void 0:o.nonce);a&&s.push(a)}}};function Je(n){return{...We,...n}}var We={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},Ze='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{u(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),u=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),u=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:u,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{b("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){b("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){b("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},b=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=u(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{var s;const c=t.readyState;if(!r&&("interactive"==c||"complete"==c)&&(o.forEach(i),r=1,b("qinit"),(null!=(s=e.requestIdleCallback)?s:e.setTimeout).bind(e)(()=>b("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),u(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',Ge=`const doc = document;
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
  var _a;
  const readyState = doc.readyState;
  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
    roots.forEach(findShadowRoots);
    hasInitialized = 1;
    emitEvent("qinit");
    const riC = (_a = win.requestIdleCallback) != null ? _a : win.setTimeout;
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
}`;function Xe(n={}){return n.debug?Ge:Ze}function N(){if(typeof performance>"u")return()=>0;const n=performance.now();return()=>(performance.now()-n)/1e6}function Ve(n){let e=n.base;return typeof n.base=="function"&&(e=n.base(n)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var Ke="<!DOCTYPE html>";async function Me(n,e){var Z,G,X;let t=e.stream,r=0,s=0,o=0,i=0,a="",l;const u=((Z=e.streaming)==null?void 0:Z.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},c=e.containerTagName??"html",h=e.containerAttributes??{},v=t,P=N(),_=Ve(e),f=nn(e.manifest),y=(G=e.serverData)==null?void 0:G.nonce;function S(){a&&(v.write(a),a="",r=0,o++,o===1&&(i=P()))}function j(m){const b=m.length;r+=b,s+=b,a+=m}switch(u.strategy){case"disabled":t={write:j};break;case"direct":t=v;break;case"auto":let m=0,b=!1;const V=u.maximunChunk??0,I=u.maximunInitialChunk??0;t={write($){$==="<!--qkssr-f-->"?b||(b=!0):$==="<!--qkssr-pu-->"?m++:$==="<!--qkssr-po-->"?m--:j($),m===0&&(b||r>=(o===0?I:V))&&(b=!1,S())}};break}c==="html"?t.write(Ke):t.write("<!--cq-->"),f||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Pe(e,f);const q=f==null?void 0:f.manifest.injections,B=q?q.map(m=>p(m.tag,m.attributes??{})):[],D=((X=e.qwikLoader)==null?void 0:X.include)??"auto",T=f==null?void 0:f.manifest.qwikLoader;let Y=!1;D!=="never"&&T&&(B.unshift(p("link",{rel:"modulepreload",href:`${_}${T}`,nonce:y}),p("script",{type:"module",async:!0,src:`${_}${T}`,nonce:y})),Y=!0),Qe(_,f,e.preloader,B,y);const ae=N(),le=[];let J=0,W=0;await fe(n,{stream:t,containerTagName:c,containerAttributes:h,serverData:e.serverData,base:_,beforeContent:B,beforeClose:async(m,b,V,I)=>{J=ae();const $=N();l=await pe(m,b,void 0,I);const g=[];Ye(_,l,e,f,g);const ue=JSON.stringify(l.state,void 0,void 0);if(g.push(p("script",{type:"qwik/json",dangerouslySetInnerHTML:tn(ue),nonce:y})),l.funcs.length>0){const w=h[Se];g.push(p("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:sn(w,l.funcs),nonce:y}))}const de=!l||l.mode!=="static";if(!Y&&(D==="always"||D==="auto"&&de)){const w=Xe({debug:e.debug});g.push(p("script",{id:"qwikloader",async:!0,type:"module",dangerouslySetInnerHTML:w,nonce:y}))}const K=Array.from(b.$events$,w=>JSON.stringify(w));if(K.length>0){const w=`(window.qwikevents||(window.qwikevents=[])).push(${K.join(",")})`;g.push(p("script",{dangerouslySetInnerHTML:w,nonce:y}))}return rn(le,m),W=$(),p(F,{children:g})},manifestHash:(f==null?void 0:f.manifest.manifestHash)||"dev"+en()}),c!=="html"&&t.write("<!--/cq-->"),S();const ce=l.resources.some(m=>m._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:f==null?void 0:f.manifest,size:s,isStatic:!ce,timing:{render:J,snapshot:W,firstFlush:i}}}function en(){return Math.random().toString(36).slice(2)}function nn(n){const e=n?{...O,...n}:O;if(!e||"mapper"in e)return e;if(e.mapping){const t={};return Object.entries(e.mapping).forEach(([r,s])=>{t[L(r)]=[r,s]}),{mapper:t,manifest:e,injections:e.injections||[]}}}var tn=n=>n.replace(/<(\/?script)/gi,"\\x3C$1");function rn(n,e){var t;for(const r of e){const s=(t=r.$componentQrl$)==null?void 0:t.getSymbol();s&&!n.includes(s)&&n.push(s)}}var on='document["qFuncs_HASH"]=';function sn(n,e){return on.replace("HASH",n)+`[${e.join(`,
`)}]`}const an=()=>{const n=be(),e=ye();return E(F,{children:[d("title",null,null,n.title,1,null),d("link",null,{rel:"canonical",href:ve(t=>t.url.href,[e],"p0.url.href")},null,3,null),d("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),d("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),n.meta.map(t=>C("meta",{...t},null,0,t.key)),n.links.map(t=>C("link",{...t},null,0,t.key)),n.styles.map(t=>{var r;return C("style",{...t.props,...(r=t.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.style}},null,0,t.key)}),n.scripts.map(t=>{var r;return C("script",{...t.props,...(r=t.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.script}},null,0,t.key)})]},1,"OA_0")},ln=ee(ne(an,"s_zrbrqoaqXSY")),cn=()=>E(_e,{children:[d("head",null,null,[d("meta",null,{charSet:"utf-8"},null,3,null),d("meta",null,{name:"ROBOTS",content:"All"},null,3,null),d("meta",null,{name:"revisit-after",content:"14 days"},null,3,null),d("meta",null,{name:"rating",content:"safe for kids"},null,3,null),d("meta",null,{name:"viewport",content:"width=device-width,initial-scale=1"},null,3,null),d("link",null,{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/icons/apple-touch-icon.png"},null,3,null),d("link",null,{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/icons/favicon-32x32.png"},null,3,null),d("link",null,{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/icons/favicon-16x16.png"},null,3,null),d("link",null,{rel:"manifest",href:"/assets/icons/site.webmanifest"},null,3,null),d("meta",null,{name:"msapplication-TileColor",content:"#fbf3e5"},null,3,null),d("meta",null,{name:"msapplication-config",content:"/assets/icons/browserconfig.xml"},null,3,null),d("meta",null,{name:"theme-color",content:"#fbf3e5"},null,3,null),d("link",null,{rel:"shortcut icon",href:"/favicon.ico"},null,3,null),E(ln,null,3,"35_0")],1,null),d("body",null,{lang:"en"},E(qe,null,3,"35_1"),1,null)]},1,"35_2"),un=ee(ne(cn,"s_3sccYCDd1Z0"));function pn(n){return Me(E(un,null,3,"pY_0"),{manifest:O,...n,containerAttributes:{lang:"en-us",...n.containerAttributes},serverData:{...n.serverData}})}export{pn as default};
