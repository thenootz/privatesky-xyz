const e={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!0,cmpDidUpdate:!0,cmpDidRender:!1,cmpWillLoad:!0,cmpWillUpdate:!1,cmpWillRender:!1,connectedCallback:!0,disconnectedCallback:!0,element:!1,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!1,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!1,mode:!1,noVdomRender:!1,observeAttribute:!0,prop:!0,propBoolean:!0,propNumber:!0,propString:!0,propMutable:!0,reflect:!0,scoped:!1,shadowDom:!0,slot:!0,slotRelocation:!0,state:!0,style:!0,svg:!1,updatable:!0,vdomAttribute:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,lazyLoad:!0,hydrateServerSide:!1,cssVarShim:!0,hydrateClientSide:!1,isDebug:!1,isDev:!1,lifecycleDOMEvents:!1,profile:!1,hotModuleReplacement:!1,constructableCSS:!0,initializeNextTick:!0,cssAnnotations:!0};let t,n,o,s=0,l=!1,r=!1,i=!1,c=!1;const a=window,f=document,d={t:0,o:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},p=(()=>!!f.documentElement.attachShadow)(),u=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),m={},$=new WeakMap,h=e=>$.get(e),y=(e,t)=>$.set(t.s=e,t),b=(e,t)=>t in e,w=e=>console.error(e),v=new Map,g=new Map,_=[],k=[],R=[],S=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&d.t?U(j):d.raf(j))},L=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(e){w(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},j=()=>{s++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){w(e)}e.length=0})(_);const e=2==(6&d.t)?performance.now()+10*Math.ceil(s*(1/22)):1/0;L(k,e),L(R,e),k.length>0&&(R.push(...k),k.length=0),(l=_.length+k.length+R.length>0)?d.raf(j):s=0},U=e=>Promise.resolve().then(e),C=S(_,!1),M=S(k,!0),D={},T=e=>null!=e,x=e=>e.toLowerCase(),O=e=>"object"==(e=typeof e)||"function"===e,P=()=>a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_app("./p-8178315f.js"),W=async()=>{const e=new RegExp("/app(\\.esm)?\\.js($|\\?|#)"),t=Array.from(f.querySelectorAll("script")).find(t=>e.test(t.src)||"app"===t.getAttribute("data-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,a.location.href));return A(e.href),window.customElements||await __sc_import_app("./p-59290340.js"),Object.assign({},n,{resourcesUrl:e.href})}},A=e=>{const t=(()=>`__sc_import_${"app".replace(/\s|-/g,"_")}`)();try{a[t]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const o=new Map;a[t]=n=>{const s=new URL(n,e).href;let l=o.get(s);if(!l){const e=f.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${t}.m = m;`],{type:"application/javascript"})),l=new Promise(n=>{e.onload=()=>{n(a[t].m),e.remove()}}),o.set(s,l),f.head.appendChild(e)}return l}}},E=new WeakMap,F=e=>"sc-"+e,B=(e,t,...n)=>{let o,s,l=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!O(l))&&(l=String(l)),r&&i?c[c.length-1].l+=l:c.push(r?{t:0,l}:l),i=r)};if(a(n),t){o=t.key||void 0,s=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,V);const f={t:0,i:e,p:c.length>0?c:null,u:void 0,$:t};return f.h=o,f.v=s,f},N={},V={forEach:(e,t)=>e.map(q).forEach(t),map:(e,t)=>e.map(q).map(t).map(z)},q=e=>({vattrs:e.$,vchildren:e.p,vkey:e.h,vname:e.v,vtag:e.i,vtext:e.l}),z=e=>({t:0,$:e.vattrs,p:e.vchildren,h:e.vkey,v:e.vname,i:e.vtag,l:e.vtext}),H=(e,t,n,o,s,l)=>{if(n!==o)if("class"===t){const t=e.classList;K(n).forEach(e=>t.remove(e)),K(o).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)n&&o[t]===n[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("key"===t);else if("ref"===t)o&&o(e);else if(t.startsWith("on")&&!b(e,t))t=b(e,x(t))?x(t.substring(2)):x(t[2])+t.substring(3),n&&d.rel(e,t,n,!1),o&&d.ael(e,t,o,!1);else{const n=b(e,t),r=O(o);if((n||r&&null!==o)&&!s)try{if(e.tagName.includes("-"))e[t]=o;else{const n=null==o?"":o;e[t]!==n&&(e[t]=n)}}catch(e){}null==o||!1===o?e.removeAttribute(t):(!n||4&l||s)&&!r&&(o=!0===o?"":o.toString(),e.setAttribute(t,o))}},K=e=>e?e.split(/\s+/).filter(e=>e):[],Q=(e,t,n,o)=>{const s=11===t.u.nodeType&&t.u.host?t.u.host:t.u,l=e&&e.$||D,r=t.$||D;for(o in l)o in r||H(s,o,l[o],void 0,n,t.t);for(o in r)H(s,o,l[o],r[o],n,t.t)},G=(e,s,l,i)=>{let a,d,p,u=s.p[l],m=0;if(r||(c=!0,"slot"===u.i&&(t&&i.classList.add(t+"-s"),u.t|=u.p?2:1)),T(u.l))u.u=f.createTextNode(u.l);else if(1&u.t)u.u=f.createTextNode("");else if(a=u.u=f.createElement(2&u.t?"slot-fb":u.i),Q(null,u,!1),T(t)&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),u.p)for(m=0;m<u.p.length;++m)(d=G(e,u,m,a))&&a.appendChild(d);return u.u["s-hn"]=o,3&u.t&&(u.u["s-sr"]=!0,u.u["s-cr"]=n,u.u["s-sn"]=u.v||"",(p=e&&e.p&&e.p[l])&&p.i===u.i&&e.u&&I(e.u,!1)),u.u},I=(e,t)=>{d.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==o&&s["s-ol"]&&(ee(s).insertBefore(s,Z(s)),s["s-ol"].remove(),s["s-ol"]=void 0,c=!0),t&&I(s,t)}d.t&=-2},J=(e,t,n,s,l,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&x(c.tagName)===o&&(c=c.shadowRoot);l<=r;++l)s[l]&&(i=G(null,n,l,e))&&(s[l].u=i,c.insertBefore(i,Z(t)))},X=(e,t,n,o)=>{for(;t<=n;++t)T(e[t])&&(o=e[t].u,le(e[t],!0),i=!0,o["s-ol"]?o["s-ol"].remove():I(o,!0),o.remove())},Y=(e,t)=>e.i===t.i&&("slot"===e.i?e.v===t.v:e.h===t.h),Z=e=>e&&e["s-ol"]||e,ee=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,te=(e,t)=>{const n=t.u=e.u,o=e.p,s=t.p;let l;T(t.l)?(l=n["s-cr"])?l.parentNode.textContent=t.l:e.l!==t.l&&(n.textContent=t.l):("slot"===t.i||Q(e,t,!1),T(o)&&T(s)?((e,t,n,o)=>{let s,l,r=0,i=0,c=0,a=0,f=t.length-1,d=t[0],p=t[f],u=o.length-1,m=o[0],$=o[u];for(;r<=f&&i<=u;)if(null==d)d=t[++r];else if(null==p)p=t[--f];else if(null==m)m=o[++i];else if(null==$)$=o[--u];else if(Y(d,m))te(d,m),d=t[++r],m=o[++i];else if(Y(p,$))te(p,$),p=t[--f],$=o[--u];else if(Y(d,$))"slot"!==d.i&&"slot"!==$.i||I(d.u.parentNode,!1),te(d,$),e.insertBefore(d.u,p.u.nextSibling),d=t[++r],$=o[--u];else if(Y(p,m))"slot"!==d.i&&"slot"!==$.i||I(p.u.parentNode,!1),te(p,m),e.insertBefore(p.u,d.u),p=t[--f],m=o[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&T(t[a].h)&&t[a].h===m.h){c=a;break}c>=0?((l=t[c]).i!==m.i?s=G(t&&t[i],n,c,e):(te(l,m),t[c]=void 0,s=l.u),m=o[++i]):(s=G(t&&t[i],n,i,e),m=o[++i]),s&&ee(d.u).insertBefore(s,Z(d.u))}r>f?J(e,null==o[u+1]?null:o[u+1].u,n,o,i,u):i>u&&X(t,r,f)})(n,o,t,s):T(s)?(T(e.l)&&(n.textContent=""),J(n,null,t,s,0,s.length-1)):T(o)&&X(o,0,o.length-1))},ne=(e,t,n,o,s,l,r,i)=>{for(o=0,s=(n=e.childNodes).length;o<s;o++)if(1===(t=n[o]).nodeType){if(t["s-sr"])for(r=t["s-sn"],t.hidden=!1,l=0;l<s;l++)if(n[l]["s-hn"]!==t["s-hn"])if(i=n[l].nodeType,""!==r){if(1===i&&r===n[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==n[l].textContent.trim()){t.hidden=!0;break}ne(t)}},oe=[],se=e=>{let t,n,o,s,l=e.childNodes,r=l.length,c=0,a=0,f=0;for(r=l.length;c<r;c++){if((t=l[c])["s-sr"]&&(n=t["s-cr"]))for(s=t["s-sn"],a=(o=n.parentNode.childNodes).length-1;a>=0;a--)(n=o[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===s||1===f&&null===n.getAttribute("slot")&&""===s||1===f&&n.getAttribute("slot")===s)&&(oe.some(e=>e.g===n)||(i=!0,n["s-sn"]=s,oe.push({_:t,g:n})));1===t.nodeType&&se(t)}},le=(e,t)=>{e&&(e.$&&e.$.ref&&e.$.ref(t?null:e.u),e.p&&e.p.forEach(e=>{le(e,t)}))},re=(e,t,n,o)=>{t.t|=16;const s=t.s,l=()=>ie(e,t,n,s,o);let r;return o&&(t.t|=256,t.k&&(t.k.forEach(([e,t])=>fe(s,e,t)),t.k=null),r=fe(s,"componentWillLoad")),de(r,()=>M(l))},ie=(e,s,l,a,u)=>{s.t&=-17,e["s-lr"]=!1,u&&((e,t)=>{const n=((e,t)=>{let n=F(t.R),o=g.get(n);if(e=11===e.nodeType?e:f,o)if("string"==typeof o){let t,s=E.get(e=e.head||e);s||E.set(e,s=new Set),s.has(n)||((t=f.createElement("style")).innerHTML=o,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return n})(p&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"))})(e,l),s.t|=4;try{((e,s,l,a)=>{o=x(e.tagName);const u=s.S||{t:0},m=(e=>e&&e.i===N)(a)?a:B(null,null,a);if(l.L&&(m.$=m.$||{},l.L.forEach(([t,n])=>m.$[n]=e[t])),m.i=null,m.t|=4,s.S=m,m.u=u.u=e.shadowRoot||e,t=e["s-sc"],n=e["s-cr"],r=p&&0!=(1&l.t),c=i=!1,te(u,m),c){se(m.u);for(let e=0;e<oe.length;e++){const t=oe[e];if(!t.g["s-ol"]){const e=f.createTextNode("");e["s-nr"]=t.g,t.g.parentNode.insertBefore(t.g["s-ol"]=e,t.g)}}d.t|=1;for(let e=0;e<oe.length;e++){const t=oe[e],n=t._.parentNode;let o=t._.nextSibling,s=t.g["s-ol"];for(;s=s.previousSibling;){let e=s["s-nr"];if(e&&e["s-sn"]===t.g["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){o=e;break}}(!o&&n!==t.g.parentNode||t.g.nextSibling!==o)&&t.g!==o&&n.insertBefore(t.g,o)}d.t&=-2}i&&ne(m.u),oe.length=0})(e,s,l,a.render&&a.render())}catch(e){w(e)}s.t&=-5,e["s-lr"]=!0,s.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),ce(e,s)},ce=(t,n,o)=>{if(!t["s-al"]){const s=n.s,l=n.j;64&n.t?fe(s,"componentDidUpdate"):(n.t|=64,t.classList.add("hydrated"),e.cmpDidLoad&&fe(s,"componentDidLoad"),n.U(t),l||ae()),l&&((o=l["s-al"])&&(o.delete(t),0===o.size&&(l["s-al"]=void 0,l["s-init"]())),n.j=void 0)}},ae=()=>{f.documentElement.classList.add("hydrated"),d.t|=2},fe=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){w(e)}},de=(e,t)=>e&&e.then?e.then(t):t(),pe=(e,t,n)=>{if(t.C){e.watchers&&(t.M=e.watchers);const o=Object.entries(t.C),s=e.prototype;if(o.forEach(([e,[o]])=>{(31&o||2&n&&32&o)&&Object.defineProperty(s,e,{get(){return((e,t)=>h(e).D.get(t))(this,e)},set(n){((e,t,n,o)=>{const s=h(this),l=s.T,r=s.D.get(t),i=s.t;if(!((n=((e,t)=>null==e||O(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,o.C[t][0]))===r||8&i&&void 0!==r)&&(s.D.set(t,n),s.s)){if(o.M&&128&i){const e=o.M[t];e&&e.forEach(e=>{try{s.s[e].call(s.s,n,r,t)}catch(e){w(e)}})}2==(22&i)&&re(l,s,o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,o){d.jmp(()=>{const t=n.get(e);this[t]=(null!==o||"boolean"!=typeof this[t])&&o})},e.observedAttributes=o.filter(([e,t])=>15&t[0]).map(([e,o])=>{const s=o[1]||e;return n.set(s,e),512&o[0]&&t.L.push([e,s]),s})}}return e},ue=e=>{fe(e,"connectedCallback")},me=(e,t)=>{(t=e["s-cr"]=f.createComment(""))["s-cn"]=!0,e.insertBefore(t,e.firstChild)},$e=(t,n={})=>{const o=[],s=n.exclude||[],l=f.head,r=a.customElements,i=l.querySelector("meta[charset]"),c=f.createElement("style");let m;Object.assign(d,n),d.o=new URL(n.resourcesUrl||"./",f.baseURI).href,n.syncQueue&&(d.t|=4),t.forEach(t=>t[1].forEach(n=>{const l={t:n[0],R:n[1],C:n[2],O:n[3],L:[],M:{}};!p&&1&l.t&&(l.t|=8);const i=l.R;l.P=t[0],s.includes(i)||r.get(i)||(o.push(i),r.define(i,pe(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,T:e,D:new Map};t.W=new Promise(e=>t.U=e),$.set(e,t)}})(e),1&l.t&&(p?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){m&&(clearTimeout(m),m=null),d.jmp(()=>((e,t)=>{if(0==(1&d.t)){const n=h(e);if(t.O&&(n.A=((e,t,n)=>{t.k=t.k||[];const o=n.map(([n,o,s])=>{const l=((e,t)=>4&t?f:8&t?a:e)(e,n),r=((e,t)=>n=>{256&e.t?e.s[t](n):e.k.push([t,n])})(t,s),i=(e=>({passive:0!=(1&e),capture:0!=(2&e)}))(n);return d.ael(l,o,r,i),()=>d.rel(l,o,r,i)});return()=>o.forEach(e=>e())})(e,n,t.O)),!(1&n.t)){let o;n.t|=1,o||(4&t.t||8&t.t)&&me(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!1===t["s-lr"]){n.j=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}t.C&&Object.entries(t.C).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),U(()=>(async(e,t,n,o,s)=>{if(0==(32&t.t)){t.t|=32,(s=(e=>{const t=e.R.replace(/-/g,"_"),n=e.P,o=v.get(n);return o?o[t]:__sc_import_app(`./${n}.entry.js`).then(e=>(v.set(n,e),e[t]),w)})(n)).then&&(s=await s),s.isProxied||(n.M=s.watchers,pe(s,n,2),s.isProxied=!0),t.t|=8;try{new s(t)}catch(e){w(e)}t.t&=-9,t.t|=128,ue(t.s);const e=F(n.R);if(!g.has(e)&&s.style){let t=s.style;8&n.t&&(t=await __sc_import_app("./p-c68d0961.js").then(n=>n.scopeCss(t,e,!1))),((e,t,n)=>{let o=g.get(e);u&&n?(o=o||new CSSStyleSheet).replace(t):o=t,g.set(e,o)})(e,t,!!(1&n.t))}}const l=t.j,r=()=>re(e,t,n,!0);l&&!1===l["s-lr"]&&l["s-rc"]?l["s-rc"].push(r):r()})(e,n,t))}ue(n.s)}})(this,l))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const t=h(this),n=t.s;t.A&&(t.A(),t.A=void 0),fe(n,"disconnectedCallback"),e.cmpDidUnload&&fe(n,"componentDidUnload")}})())}"s-init"(){const e=h(this);e.s&&ce(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=h(e);2&n.t&&re(e,n,t,!1)}})(this,l)}componentOnReady(){return h(this).W}},l,1)))})),c.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),l.insertBefore(c,i?i.nextSibling:l.firstChild),d.jmp(()=>m=setTimeout(ae,30))},he=(e,t,n)=>{const o=be(e);return{emit:e=>o.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},ye=(e,t)=>t in m?m[t]:"window"===t?a:"document"===t?f:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",d.o);return e.origin!==a.location.origin?e.href:e.pathname})():"queue"===t?{write:M,read:C,tick:{then:e=>U(e)}}:void 0)),be=e=>h(e).T;export{e as B,P as a,$e as b,he as c,ye as d,be as g,B as h,W as p,y as r};