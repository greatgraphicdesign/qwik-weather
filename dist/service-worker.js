/* Qwik Service Worker */
const appBundles=[["q-7rzFIk7W.js",[4,8,24,29,30],["0CAUp0JTeY8","9Dk7fUYNCDI","vg3z8wZWCPA","xYL1qOwPyDI","zqpXT8B27s0","ZrRVap1iTHs"]],["q-Ak9QCCpA.js",[8,19,30],["e0ssiDXoeAM"]],["q-B7fxEfOA.js",[4,8,24,30],["yFd7xrvnSPQ"]],["q-B8RuzyP9.js",[8,19,30],["SGytLJ8uq8I"]],["q-Bo8KhTk-.js",[8,30]],["q-Bq36Wx9q.js",[]],["q-Bw2YI8da.js",[8,19,30],["KK5BfmKH4ZI","Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-BZUAsMa2.js",[8,30]],["q-CBAji49d.js",[]],["q-CJk4aENo.js",[8,19,30],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-CKvLaDhC.js",[8],["A5bZC7WO00A"]],["q-CMhp0Za3.js",[8,29,30],["Si0HDg6C5tU","ysmnbPCXPAU","zadRqopi1J4"]],["q-CNzInhSE.js",[8,19,30],["3sccYCDd1Z0"]],["q-CTY_e-Rx.js",[4,8,30],["0MezwHFeMFc","SdTHsMBGSa0"]],["q-CUJtqBHa.js",[8,19,30]],["q-cUlN23XM.js",[8],["uPHV2oGn4wc"]],["q-D2pCLGA9.js",[8,19,30],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-D3WBTSLL.js",[],["DyVc0YBIqQU"]],["q-D4yBT5tQ.js",[8,29,30],["JKHgMZ4xLZQ","VkLNXphUh5s"]],["q-D5Fxpckm.js",[8,30]],["q-DaPK549F.js",[8],["XqRdMYz9jnU"]],["q-DcdCnpK6.js",[8,19,30],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-DkHK4XB3.js",[8,24,30],["kJfmLBv5WRc","Y08BJ5I9ZFo"]],["q-Dm7biMwy.js",[8,29,30],["1U0avqj3eik","5Wn3iQBlyEQ","B5CGBzSqbls","VIyuPlWz0No"]],["q-Dre6je3B.js",[8,30]],["q-jMD-pBAc.js",[30]],["q-JwcKMTEI.js",[8,29,30],["Kuk0TZChONA","t0wHq1y0afE"]],["q-KHv-OFCu.js",[8,19,30],["zrbrqoaqXSY"]],["q-MCvHYk_K.js",[8],["oQnubcoI5HI"]],["q-TJBU60mj.js",[8,30]],["q-uemlvruI.js",[]],["q-X3J0hX5P.js",[8],["0ADYAZ4tl5U"]]];
const libraryBundleIds=[16];
const linkBundles=[[/^\/$/,[14,18,4,0]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
