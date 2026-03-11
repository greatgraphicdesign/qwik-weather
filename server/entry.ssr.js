import{t as p,v as ce,w as ue,x as fe,F as Q,y as de,a as V,i as M,z as me,A as pe,_ as k,f as d,j as he,B as N,C as be,Q as ye}from"./q-Bz2nHqrO.js";const L={manifestHash:"iylfgh",core:"q-pkfIzfSq.js",preloader:"q-DoNi8vyY.js",qwikLoader:"q-naDMFAHy.js",bundleGraphAsset:"assets/24q9n7LH-bundle-graph.json",injections:[{tag:"style",location:"head",attributes:{"data-src":"/assets/DjmTUZuP-style.css",dangerouslySetInnerHTML:`html,body{margin:0;padding:0;box-sizing:border-box;scroll-behavior:smooth}html{font-size:62.5%;font-family:Arial,Helvetica,sans-serif}body{min-width:320px}body.lock{height:100vh;overflow:hidden;touch-action:none}body .nowrap{white-space:nowrap}
`}}],mapping:{s_B5CGBzSqbls:"q-BaDmjuHu.js",s_VIyuPlWz0No:"q-BaDmjuHu.js",s_aj9DGiS7Bpc:"q-BAy756zt.js",s_PvHz57UJRzY:"q-CRNH7zNk.js",s_zv6OHrfXfY8:"q-CfO5dy2n.js",s_8ANlJo5F6HM:"q-BY_8xOad.js",s_9Dk7fUYNCDI:"q-DDlphq4Y.js",s_GNe6cxgIKtk:"q-CZVKada8.js",s_vg3z8wZWCPA:"q-CxsWA0zU.js",s_zqpXT8B27s0:"q-Bnu2wVMI.js",s_0ADYAZ4tl5U:"q-DojwxbWi.js",s_3sccYCDd1Z0:"q-pkfIzfSq.js",s_5Wn3iQBlyEQ:"q-BaDmjuHu.js",s_Kuk0TZChONA:"q-CnGgZAFy.js",s_O0c25Utd2G8:"q-rh7dOs-G.js",s_SdTHsMBGSa0:"q-BAy756zt.js",s_UbNvavyDAnI:"q-BhKl0D_o.js",s_VkLNXphUh5s:"q-B72nAzKu.js",s_W8XMQGfpqB0:"q-CfO5dy2n.js",s_XqRdMYz9jnU:"q-DvlaGPd5.js",s_kJfmLBv5WRc:"q-CS1rcgd2.js",s_oQnubcoI5HI:"q-mwrRVEXT.js",s_pOqxqVbMQ0o:"q-C4O5yzTM.js",s_prDylBvAW2Y:"q-FjmalGiZ.js",s_ss4Bm8PB8MM:"q-CRNH7zNk.js",s_xYL1qOwPyDI:"q-DNR4zqWM.js",s_yFd7xrvnSPQ:"q-tCvWwoZG.js",s_zadRqopi1J4:"q-Bs6BgiPO.js",s_zrbrqoaqXSY:"q-Dx0nD9g3.js",s_JKHgMZ4xLZQ:"q-B72nAzKu.js",s_vnfHqUXJypg:"q-CfO5dy2n.js",s_1U0avqj3eik:"q-BaDmjuHu.js",s_t0wHq1y0afE:"q-CnGgZAFy.js",s_0GjXawfPNqI:"q-RzOWHNAy.js",s_HvG0SI67ZPU:"q-CNdVwZuL.js",s_PXFKbl0pBoY:"q-C0Pn_gZh.js",s_nJynWpwTzMA:"q-DkltqHMu.js",s_0CAUp0JTeY8:"q-DNR4zqWM.js",s_ES9UyRPMNuU:"q-CS1rcgd2.js",s_Si0HDg6C5tU:"q-Bs6BgiPO.js",s_Uh99KhRqE9Q:"q-BhKl0D_o.js",s_ZrRVap1iTHs:"q-DNR4zqWM.js",s_brCOxmZCU8Y:"q-CfO5dy2n.js",s_cS5wm1Hk0Ns:"q-rh7dOs-G.js",s_eHgdWoW5Gn0:"q-rh7dOs-G.js",s_jHtB2GKFMTA:"q-FjmalGiZ.js",s_p0e0XQd029k:"q-rh7dOs-G.js",s_r28dRWLQSFw:"q-FjmalGiZ.js",s_siu7OnxpAjU:"q-CRNH7zNk.js",s_xxllKS2Ln4o:"q-CfO5dy2n.js",s_ysmnbPCXPAU:"q-Bs6BgiPO.js"}};/**
 * @license
 * @builder.io/qwik/server 1.19.1
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ve=!1,qe="",ge=(n,...e)=>{const t=we(ve,n,...e);debugger;return t},_e=n=>n,we=(n,e,...t)=>{const r=e instanceof Error?e:new Error(e);return console.error("%cQWIK ERROR",qe,r.message,..._e(t),r.stack),r},$e=(n,...e)=>`Code(${n}) https://github.com/QwikDev/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8+n}`,Se=11,Pe=(n,...e)=>{const t=$e(n,...e);return ge(t,...e)},ke="<sync>";function Ee(n,e){const t=e==null?void 0:e.mapper,r=n.symbolMapper?n.symbolMapper:(o,a,i)=>{var l;if(t){const u=x(o),c=t[u];if(!c){if(u===ke)return[u,""];if((l=globalThis.__qwik_reg_symbols)==null?void 0:l.has(u))return[o,"_"];if(i)return[o,`${i}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",t,i)}return c}};return{isServer:!0,async importSymbol(o,a,i){var c;const l=x(i),u=(c=globalThis.__qwik_reg_symbols)==null?void 0:c.get(l);if(u)return u;throw Pe(Se,i)},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(a=>{setTimeout(()=>{a(o())})}),chunkForSymbol(o,a,i){return r(o,t,i)}}}async function je(n,e){const t=Ee(n,e);ue(t)}var x=n=>{const e=n.lastIndexOf("_");return e>-1?n.slice(e+1):n},Ce="q:instance",T={$DEBUG$:!1,$invPreloadProbability$:.65},Ae=Date.now(),Ne=/\.[mc]?js$/,ee=0,xe=1,Be=2,De=3,R,H,Oe=(n,e)=>({$name$:n,$state$:Ne.test(n)?ee:De,$deps$:te?e==null?void 0:e.map(t=>({...t,$factor$:1})):e,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),Ie=n=>{const e=new Map;let t=0;for(;t<n.length;){const r=n[t++],s=[];let o,a=1;for(;o=n[t],typeof o=="number";)o<0?a=-o/10:s.push({$name$:n[o],$importProbability$:a,$factor$:1}),t++;e.set(r,s)}return e},ne=n=>{let e=z.get(n);if(!e){let t;if(H){if(t=H.get(n),!t)return;t.length||(t=void 0)}e=Oe(n,t),z.set(n,e)}return e},Le=(n,e)=>{e&&("debug"in e&&(T.$DEBUG$=!!e.debug),typeof e.preloadProbability=="number"&&(T.$invPreloadProbability$=1-e.preloadProbability)),!(R!=null||!n)&&(R="",H=Ie(n))},z=new Map,te,B,re=0,E=[],Te=(...n)=>{console.log(`Preloader ${Date.now()-Ae}ms ${re}/${E.length} queued>`,...n)},Re=()=>{z.clear(),B=!1,te=!0,re=0,E.length=0},He=()=>{B&&(E.sort((n,e)=>n.$inverseProbability$-e.$inverseProbability$),B=!1)},ze=()=>{He();let n=.4;const e=[];for(const t of E){const r=Math.round((1-t.$inverseProbability$)*10);r!==n&&(n=r,e.push(n)),e.push(t.$name$)}return e},se=(n,e,t)=>{if(t!=null&&t.has(n))return;const r=n.$inverseProbability$;if(n.$inverseProbability$=e,!(r-n.$inverseProbability$<.01)&&(R!=null&&n.$state$<Be&&(n.$state$===ee&&(n.$state$=xe,E.push(n),T.$DEBUG$&&Te(`queued ${Math.round((1-n.$inverseProbability$)*100)}%`,n.$name$)),B=!0),n.$deps$)){t||(t=new Set),t.add(n);const s=1-n.$inverseProbability$;for(const o of n.$deps$){const a=ne(o.$name$);if(a.$inverseProbability$===0)continue;let i;if(s===1||s>=.99&&U<100)U++,i=Math.min(.01,1-o.$importProbability$);else{const l=1-o.$importProbability$*s,u=o.$factor$,c=l/u;i=Math.max(.02,a.$inverseProbability$*c),o.$factor$=c}se(a,i,t)}}},X=(n,e)=>{const t=ne(n);t&&t.$inverseProbability$>e&&se(t,e)},U,Ue=(n,e)=>{if(!(n!=null&&n.length))return;U=0;let t=e?1-e:.4;if(Array.isArray(n))for(let r=n.length-1;r>=0;r--){const s=n[r];typeof s=="number"?t=1-s/10:X(s,t)}else X(n,t)};function Fe(n){const e=[],t=r=>{if(r)for(const s of r)e.includes(s.url)||(e.push(s.url),s.imports&&t(s.imports))};return t(n),e}var Qe=n=>{var r;const e=de(),t=(r=n==null?void 0:n.qrls)==null?void 0:r.map(s=>{var l;const o=s.$refSymbol$||s.$symbol$,a=s.$chunk$,i=e.chunkForSymbol(o,a,(l=s.dev)==null?void 0:l.file);return i?i[1]:a}).filter(Boolean);return[...new Set(t)]};function Ge(n,e,t){const r=e.prefetchStrategy;if(r===null)return[];if(!(t!=null&&t.manifest.bundleGraph))return Qe(n);if(typeof(r==null?void 0:r.symbolsToPrefetch)=="function")try{const o=r.symbolsToPrefetch({manifest:t.manifest});return Fe(o)}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}const s=new Set;for(const o of(n==null?void 0:n.qrls)||[]){const a=x(o.$refSymbol$||o.$symbol$);a&&a.length>=10&&s.add(a)}return[...s]}var We=(n,e)=>{if(!(e!=null&&e.manifest.bundleGraph))return[...new Set(n)];Re();let t=.99;for(const r of n.slice(0,15))Ue(r,t),t*=.85;return ze()},F=(n,e)=>{if(e==null)return null;const t=`${n}${e}`.split("/"),r=[];for(const s of t)s===".."&&r.length>0?r.pop():r.push(s);return r.join("/")},Ye=(n,e,t,r,s)=>{var l;const o=F(n,(l=e==null?void 0:e.manifest)==null?void 0:l.preloader),a="/"+(e==null?void 0:e.manifest.bundleGraphAsset);if(o&&a&&t!==!1){const u=typeof t=="object"?{debug:t.debug,preloadProbability:t.ssrPreloadProbability}:void 0;Le(e==null?void 0:e.manifest.bundleGraph,u);const c=[];t!=null&&t.debug&&c.push("d:1"),t!=null&&t.maxIdlePreloads&&c.push(`P:${t.maxIdlePreloads}`),t!=null&&t.preloadProbability&&c.push(`Q:${t.preloadProbability}`);const y=c.length?`,{${c.join(",")}}`:"",w=`let b=fetch("${a}");import("${o}").then(({l})=>l(${JSON.stringify(n)},b${y}));`;r.push(p("link",{rel:"modulepreload",href:o,nonce:s,crossorigin:"anonymous"}),p("link",{rel:"preload",href:a,as:"fetch",crossorigin:"anonymous",nonce:s}),p("script",{type:"module",async:!0,dangerouslySetInnerHTML:w,nonce:s}))}const i=F(n,e==null?void 0:e.manifest.core);i&&r.push(p("link",{rel:"modulepreload",href:i,nonce:s}))},Ze=(n,e,t,r,s)=>{if(r.length===0||t===!1)return null;const{ssrPreloads:o,ssrPreloadProbability:a}=Ke(typeof t=="boolean"?void 0:t);let i=o;const l=[],u=[],c=e==null?void 0:e.manifest.manifestHash;if(i){const q=e==null?void 0:e.manifest.preloader,f=e==null?void 0:e.manifest.core,b=We(r,e);let S=4;const j=a*10;for(const v of b)if(typeof v=="string"){if(S<j)break;if(v===q||v===f)continue;if(u.push(v),--i===0)break}else S=v}const y=F(n,c&&(e==null?void 0:e.manifest.preloader));let $=u.length?`${JSON.stringify(u)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(n)}+l;document.head.appendChild(e)});`:"";return y&&($+=`window.addEventListener('load',f=>{f=_=>import("${y}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),$&&l.push(p("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:$,nonce:s})),l.length>0?p(Q,{children:l}):null},Je=(n,e,t,r,s)=>{var o;if(t.preloader!==!1){const a=Ge(e,t,r);if(a.length>0){const i=Ze(n,r,t.preloader,a,(o=t.serverData)==null?void 0:o.nonce);i&&s.push(i)}}};function Ke(n){return{...Xe,...n}}var Xe={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},Ve='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{b(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),b=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:b,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{u("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){u("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){u("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},u=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{const s=t.readyState;if(!r&&("interactive"==s||"complete"==s)&&(o.forEach(i),r=1,u("qinit"),(e.requestIdleCallback??e.setTimeout).bind(e)(()=>u("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',Me=`const doc = document;
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
}`;function en(n={}){return n.debug?Me:Ve}function I(){if(typeof performance>"u")return()=>0;const n=performance.now();return()=>(performance.now()-n)/1e6}function nn(n){let e=n.base;return typeof n.base=="function"&&(e=n.base(n)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var tn="<!DOCTYPE html>";async function rn(n,e){var Y,Z;let t=e.stream,r=0,s=0,o=0,a=0,i="",l;const u=((Y=e.streaming)==null?void 0:Y.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},c=e.containerTagName??"html",y=e.containerAttributes??{},w=t,$=I(),q=nn(e),f=on(e.manifest),b=(Z=e.serverData)==null?void 0:Z.nonce;function S(){i&&(w.write(i),i="",r=0,o++,o===1&&(a=$()))}function j(m){const h=m.length;r+=h,s+=h,i+=m}switch(u.strategy){case"disabled":t={write:j};break;case"direct":t=w;break;case"auto":let m=0,h=!1;const J=u.maximunChunk??0,O=u.maximunInitialChunk??0;t={write(g){g==="<!--qkssr-f-->"?h||(h=!0):g==="<!--qkssr-pu-->"?m++:g==="<!--qkssr-po-->"?m--:j(g),m===0&&(h||r>=(o===0?O:J))&&(h=!1,S())}};break}c==="html"?t.write(tn):t.write("<!--cq-->"),f||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await je(e,f);const v=f==null?void 0:f.manifest.injections,C=v?v.map(m=>p(m.tag,m.attributes??{})):[];let A=e.qwikLoader?typeof e.qwikLoader=="object"?e.qwikLoader.include==="never"?2:0:e.qwikLoader==="inline"?1:e.qwikLoader==="never"?2:0:0;const D=f==null?void 0:f.manifest.qwikLoader;if(A===0&&!D&&(A=1),A===0)C.unshift(p("link",{rel:"modulepreload",href:`${q}${D}`,nonce:b}),p("script",{type:"module",async:!0,src:`${q}${D}`,nonce:b}));else if(A===1){const m=en({debug:e.debug});C.unshift(p("script",{id:"qwikloader",type:"module",async:!0,nonce:b,dangerouslySetInnerHTML:m}))}Ye(q,f,e.preloader,C,b);const oe=I(),ae=[];let G=0,W=0;await ce(n,{stream:t,containerTagName:c,containerAttributes:y,serverData:e.serverData,base:q,beforeContent:C,beforeClose:async(m,h,J,O)=>{G=oe();const g=I();l=await fe(m,h,void 0,O);const _=[];Je(q,l,e,f,_);const le=JSON.stringify(l.state,void 0,void 0);if(_.push(p("script",{type:"qwik/json",dangerouslySetInnerHTML:an(le),nonce:b})),l.funcs.length>0){const P=y[Ce];_.push(p("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:un(P,l.funcs),nonce:b}))}const K=Array.from(h.$events$,P=>JSON.stringify(P));if(K.length>0){const P=`(window.qwikevents||(window.qwikevents=[])).push(${K.join(",")})`;_.push(p("script",{dangerouslySetInnerHTML:P,nonce:b}))}return ln(ae,m),W=g(),p(Q,{children:_})},manifestHash:(f==null?void 0:f.manifest.manifestHash)||"dev"+sn()}),c!=="html"&&t.write("<!--/cq-->"),S();const ie=l.resources.some(m=>m._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:f==null?void 0:f.manifest,size:s,isStatic:!ie,timing:{render:G,snapshot:W,firstFlush:a}}}function sn(){return Math.random().toString(36).slice(2)}function on(n){const e=n?{...L,...n}:L;if(!e||"mapper"in e)return e;if(e.mapping){const t={};return Object.entries(e.mapping).forEach(([r,s])=>{t[x(r)]=[r,s]}),{mapper:t,manifest:e,injections:e.injections||[]}}}var an=n=>n.replace(/<(\/?script)/gi,"\\x3C$1");function ln(n,e){var t;for(const r of e){const s=(t=r.$componentQrl$)==null?void 0:t.getSymbol();s&&!n.includes(s)&&n.push(s)}}var cn='document["qFuncs_HASH"]=';function un(n,e){return cn.replace("HASH",n)+`[${e.join(`,
`)}]`}const fn=()=>{const n=me(),e=pe();return k(Q,{children:[d("title",null,null,n.title,1,null),d("link",null,{rel:"canonical",href:he(t=>t.url.href,[e],"p0.url.href")},null,3,null),d("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),n.meta.map(t=>N("meta",{...t},null,0,t.key)),n.links.map(t=>N("link",{...t},null,0,t.key)),n.styles.map(t=>{var r;return N("style",{...t.props,...(r=t.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.style}},null,0,t.key)}),n.scripts.map(t=>{var r;return N("script",{...t.props,...(r=t.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.script}},null,0,t.key)})]},1,"OA_0")},dn=V(M(fn,"s_zrbrqoaqXSY")),mn=()=>k(ye,{children:[d("head",null,null,[d("meta",null,{charSet:"utf-8"},null,3,null),d("meta",null,{name:"ROBOTS",content:"All"},null,3,null),d("meta",null,{name:"revisit-after",content:"14 days"},null,3,null),d("meta",null,{name:"rating",content:"safe for kids"},null,3,null),d("meta",null,{name:"viewport",content:"width=device-width,initial-scale=1"},null,3,null),d("link",null,{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/icons/apple-touch-icon.png"},null,3,null),d("link",null,{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/icons/favicon-32x32.png"},null,3,null),d("link",null,{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/icons/favicon-16x16.png"},null,3,null),d("link",null,{rel:"manifest",href:"/assets/icons/site.webmanifest"},null,3,null),d("meta",null,{name:"msapplication-TileColor",content:"#fbf3e5"},null,3,null),d("meta",null,{name:"msapplication-config",content:"/assets/icons/browserconfig.xml"},null,3,null),d("meta",null,{name:"theme-color",content:"#fbf3e5"},null,3,null),d("link",null,{rel:"shortcut icon",href:"/favicon.ico"},null,3,null),k(dn,null,3,"35_0")],1,null),d("body",null,{lang:"en"},k(be,null,3,"35_1"),1,null)]},1,"35_2"),pn=V(M(mn,"s_3sccYCDd1Z0"));function yn(n){return rn(k(pn,null,3,"pY_0"),{manifest:L,...n,containerAttributes:{lang:"en-us",...n.containerAttributes},serverData:{...n.serverData}})}export{yn as default};
