var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{o(n.next(e))}catch(r){i(r)}}function l(e){try{o(n["throw"](e))}catch(r){i(r)}}function o(e){e.done?t(e.value):a(e.value).then(s,l)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(r){return o([e,r])}}function o(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(l){s=[6,l];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,l=i.length;s<l;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n=e("B",{allRenderFn:false,cmpDidLoad:true,cmpShouldUpdate:false,cmpDidUnload:true,cmpDidUpdate:true,cmpDidRender:false,cmpWillLoad:true,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:true,disconnectedCallback:true,element:false,event:true,hasRenderFn:true,lifecycle:true,asyncLoading:true,hostListener:true,hostListenerTargetWindow:true,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:true,member:true,method:false,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:true,propNumber:true,propString:true,propMutable:true,reflect:true,scoped:false,shadowDom:true,slot:true,slotRelocation:true,state:true,style:true,svg:false,updatable:true,vdomAttribute:true,vdomXlink:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:true,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,initializeNextTick:true,hydrateClientSide:false,isDebug:false,isDev:false,devTools:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true});var a="app";var i=0;var s=false;var l;var o;var f;var u=false;var $=false;var c=false;var v=false;var d=window;var h=document;var m={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var p=function(){return!!h.documentElement.attachShadow}();var g=function(){var e=false;try{h.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(r){}return e}();var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b={};var w=new WeakMap;var R=function(e){return w.get(e)};var S=e("r",(function(e,r){return w.set(r.$lazyInstance$=e,r)}));var _=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return w.set(e,r)};var L=function(e,r){return r in e};var N=function(e){return console.error(e)};var k=new Map;var x=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=k.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{k.set(i,e)}return e[a]}),N)};var T=new Map;var C=[];var E=[];var j=[];var U=function(e,r){return function(t){e.push(t);if(!s){s=true;if(r&&m.$flags$&4){B(O)}else{m.raf(O)}}}};var A=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){N(t)}}e.length=0};var P=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){N(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var O=function(){i++;A(C);var e=(m.$flags$&6)===2?performance.now()+10*Math.ceil(i*(1/22)):Infinity;P(E,e);P(j,e);if(E.length>0){j.push.apply(j,E);E.length=0}if(s=C.length+E.length+j.length>0){m.raf(O)}else{i=0}};var B=function(e){return Promise.resolve().then(e)};var M=U(C,false);var D=U(E,true);var I={};var z=function(e){return e!=null};var q=function(e){e=typeof e;return e==="object"||e==="function"};var W=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var F=function(e,r){if(r===void 0){r=""}{return function(){return}}};var H=function(e,r){{return function(){return}}};var V=e("a",(function(){if(!(d.CSS&&d.CSS.supports&&d.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){m.$cssShim$=d.__stencil_cssshim;if(m.$cssShim$){return m.$cssShim$.initShim()}}))}return Promise.resolve()}));var Q=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,n,i,s;return __generator(this,(function(l){switch(l.label){case 0:{m.$cssShim$=d.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+a+"(\\.esm)?\\.js($|\\?|#)");n=Array.from(h.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===a}));i=n["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,d.location.href));G(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:l.sent();l.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var G=function(e){var r=W(a);try{d[r]=new Function("w","return import(w);//"+Math.random())}catch(n){var t=new Map;d[r]=function(n){var a=new URL(n,e).href;var i=t.get(a);if(!i){var s=h.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(d[r].m);s.remove()}}));t.set(a,i);h.head.appendChild(s)}return i}}};var K=function(e,r){if(e!=null&&!q(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var X="hydrated";var J="http://www.w3.org/1999/xlink";var Y=new WeakMap;var Z=function(e,r,t){var n=T.get(e);if(y&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}T.set(e,n)};var ee=function(e,r,t,n){var a=te(r.$tagName$);var i=T.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=Y.get(e);var l=void 0;if(!s){Y.set(e,s=new Set)}if(!s.has(a)){{if(m.$cssShim$){l=m.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var o=l["s-sc"];if(o){a=o;s=null}}else{l=h.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var re=function(e,r,t){var n=F("attachStyles",r.$tagName$);var a=ee(p&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,t,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var te=function(e,r){return"sc-"+e};var ne=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var l=false;var o=false;var f=[];var u=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!q(a)){a=String(a)}if(l&&o){f[f.length-1].$text$+=a}else{f.push(l?ae(null,a):a)}o=l}}};u(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}if(typeof e==="function"){return e(r,f,le)}var c=ae(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var ae=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var ie={};var se=function(e){return e&&e.$tag$===ie};var le={forEach:function(e,r){return e.map(oe).forEach(r)},map:function(e,r){return e.map(oe).map(r).map(fe)}};var oe=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var fe=function(e){var r=ae(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var ue=function(e,r,t,n,a,i){if(t===n){return}var s=L(e,r);var l=r.toLowerCase();if(r==="class"){var o=e.classList;var f=ce(t);var u=ce(n);o.remove.apply(o,f.filter((function(e){return e&&!u.includes(e)})));o.add.apply(o,u.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var $ in t){if(!n||n[$]==null){if($.includes("-")){e.style.removeProperty($)}else{e.style[$]=""}}}}for(var $ in n){if(!t||n[$]!==t[$]){if($.includes("-")){e.style.setProperty($,n[$])}else{e.style[$]=n[$]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(L(d,l)){r=l.slice(2)}else{r=l[2]+r.slice(3)}if(t){m.rel(e,r,t,false)}if(n){m.ael(e,r,n,false)}}else{var c=q(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var v=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=v){e[r]=v}}else{e[r]=n}}catch(p){}}var h=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){r=l;h=true}}if(n==null||n===false){if(h){e.removeAttributeNS(J,r)}else{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(h){e.setAttributeNS(J,r,n)}else{e.setAttribute(r,n)}}}};var $e=/\s/;var ce=function(e){return!e?[]:e.split($e)};var ve=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||I;var s=r.$attrs$||I;{for(n in i){if(!(n in s)){ue(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){ue(a,n,i[n],s[n],t,r.$flags$)}};var de=function(e,r,t,n){var a=r.$children$[t];var i=0;var s;var $;var d;if(!u){c=true;if(a.$tag$==="slot"){if(l){n.classList.add(l+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){s=a.$elm$=h.createTextNode(a.$text$)}else if(a.$flags$&1){s=a.$elm$=h.createTextNode("")}else{s=a.$elm$=h.createElement(a.$flags$&2?"slot-fb":a.$tag$);{ve(null,a,v)}if(z(l)&&s["s-si"]!==l){s.classList.add(s["s-si"]=l)}if(a.$children$){for(i=0;i<a.$children$.length;++i){$=de(e,a,i,s);if($){s.appendChild($)}}}}{s["s-hn"]=f;if(a.$flags$&(2|1)){s["s-sr"]=true;s["s-cr"]=o;s["s-sn"]=a.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===a.$tag$&&e.$elm$){he(e.$elm$,false)}}}return s};var he=function(e,r){m.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==f&&a["s-ol"]){we(a).insertBefore(a,be(a));a["s-ol"].remove();a["s-ol"]=undefined;c=true}if(r){he(a,r)}}m.$flags$&=~1};var me=function(e,r,t,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(s.shadowRoot&&s.tagName===f){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){l=de(null,t,a,e);if(l){n[a].$elm$=l;s.insertBefore(l,be(r))}}}};var pe=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;Ne(n);{$=true;if(a["s-ol"]){a["s-ol"].remove()}else{he(a,true)}}a.remove()}}};var ge=function(e,r,t,n){var a=0;var i=0;var s=0;var l=0;var o=r.length-1;var f=r[0];var u=r[o];var $=n.length-1;var c=n[0];var v=n[$];var d;var h;while(a<=o&&i<=$){if(f==null){f=r[++a]}else if(u==null){u=r[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--$]}else if(ye(f,c)){Re(f,c);f=r[++a];c=n[++i]}else if(ye(u,v)){Re(u,v);u=r[--o];v=n[--$]}else if(ye(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){he(f.$elm$.parentNode,false)}Re(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=r[++a];v=n[--$]}else if(ye(u,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){he(u.$elm$.parentNode,false)}Re(u,c);e.insertBefore(u.$elm$,f.$elm$);u=r[--o];c=n[++i]}else{s=-1;{for(l=a;l<=o;++l){if(r[l]&&r[l].$key$!==null&&r[l].$key$===c.$key$){s=l;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=de(r&&r[i],t,s,e)}else{Re(h,c);r[s]=undefined;d=h.$elm$}c=n[++i]}else{d=de(r&&r[i],t,i,e);c=n[++i]}if(d){{we(f.$elm$).insertBefore(d,be(f.$elm$))}}}}if(a>o){me(e,n[$+1]==null?null:n[$+1].$elm$,t,n,i,$)}else if(i>$){pe(r,a,o)}};var ye=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}return true}return false};var be=function(e){return e&&e["s-ol"]||e};var we=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Re=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i;if(r.$text$===null){{if(r.$tag$==="slot");else{ve(e,r,v)}}if(n!==null&&a!==null){ge(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}me(t,null,r,a,0,a.length-1)}else if(n!==null){pe(n,0,n.length-1)}}else if(i=t["s-cr"]){i.parentNode.textContent=r.$text$}else if(e.$text$!==r.$text$){t.data=r.$text$}};var Se=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var l;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){l=r[i].nodeType;if(s!==""){if(l===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(l===1||l===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}Se(t)}}};var _e=[];var Le=function(e){var r=e.childNodes;var t=r.length;var n=0;var a=0;var i=0;var s;var l;var o;var f;for(t=r.length;n<t;n++){s=r[n];if(s["s-sr"]&&(l=s["s-cr"])){o=l.parentNode.childNodes;f=s["s-sn"];for(a=o.length-1;a>=0;a--){l=o[a];if(!l["s-cn"]&&!l["s-nr"]&&l["s-hn"]!==s["s-hn"]){i=l.nodeType;if((i===3||i===8)&&f===""||i===1&&l.getAttribute("slot")===null&&f===""||i===1&&l.getAttribute("slot")===f){if(!_e.some((function(e){return e.$nodeToRelocate$===l}))){$=true;l["s-sn"]=f;_e.push({$slotRefNode$:s,$nodeToRelocate$:l})}}}}}if(s.nodeType===1){Le(s)}}};var Ne=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(Ne)}};var ke=function(e,r,t,n){f=e.tagName;var a=r.$vnode$||ae(null,null);var i=se(n)?n:ne(null,null,n);if(t.$attrsToReflect$){i.$attrs$=i.$attrs$||{};t.$attrsToReflect$.forEach((function(r){var t=r[0],n=r[1];return i.$attrs$[n]=e[t]}))}i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{l=e["s-sc"]}{o=e["s-cr"];u=p&&(t.$flags$&1)!==0;c=$=false}Re(a,i);{if(c){Le(i.$elm$);for(var s=0;s<_e.length;s++){var v=_e[s];if(!v.$nodeToRelocate$["s-ol"]){var d=h.createTextNode("");d["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=d,v.$nodeToRelocate$)}}m.$flags$|=1;for(var s=0;s<_e.length;s++){var v=_e[s];var g=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var d=v.$nodeToRelocate$["s-ol"];while(d=d.previousSibling){var b=d["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){g.insertBefore(v.$nodeToRelocate$,y)}}}m.$flags$&=~1}if($){Se(i.$elm$)}_e.length=0}};var xe=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var Te=function(e,r,t,a){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var i=F("scheduleUpdate",t.$tagName$);var s=r.$ancestorComponent$;var l=r.$lazyInstance$;var o=function(){return Ce(e,r,t,l,a)};xe(r,s);var f;if(a){{r.$flags$|=256;if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],t=e[1];return Ae(l,r,t)}));r.$queuedListeners$=null}}if(n.cmpWillLoad){f=Ae(l,"componentWillLoad")}}i();return Pe(f,(function(){return D(o)}))};var Ce=function(e,r,t,n,a){var i=F("update",t.$tagName$);var s=e["s-rc"];if(a){re(e,t,r.$modeName$)}var l=F("render",t.$tagName$);{{try{ke(e,r,t,n.render&&n.render())}catch(u){N(u)}}}if(m.$cssShim$){m.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}l();i();{var o=e["s-p"];var f=function(){return Ee(e,r,t)};if(o.length===0){f()}else{Promise.all(o).then(f);r.$flags$|=4;o.length=0}}};var Ee=function(e,r,t){var a=F("postUpdate",t.$tagName$);var i=r.$lazyInstance$;var s=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(X)}if(n.cmpDidLoad){Ae(i,"componentDidLoad")}a();{r.$onReadyResolve$(e);if(!s){Ue()}}}else{{Ae(i,"componentDidUpdate")}a()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){B((function(){return Te(e,r,t,false)}))}r.$flags$&=~(4|512)}};var je=function(e,r){{var t=R(e);if((t.$flags$&(2|16))===2){Te(e,t,r,false)}}};var Ue=function(e){{h.documentElement.classList.add(X)}{m.$flags$|=2}};var Ae=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){N(n)}}return undefined};var Pe=function(e,r){return e&&e.then?e.then(r):r()};var Oe=function(e,r){return R(e).$instanceValues$.get(r)};var Be=function(e,r,t,n){var a=R(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var l=a.$flags$;var o=a.$lazyInstance$;t=K(t,n.$members$[r][0]);if(t!==s&&(!(l&8)||s===undefined)){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&l&128){var f=n.$watchers$[r];if(f){f.forEach((function(e){try{o[e](t,s,r)}catch(n){N(n)}}))}}if((l&(2|16))===2){Te(i,a,n,false)}}}};var Me=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return Oe(this,n)},set:function(e){Be(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;m.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var De=function(e,r,t){r.$queuedListeners$=r.$queuedListeners$||[];var n=t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=ze(e,n);var l=Ie(r,i);var o=qe(n);m.ael(s,a,l,o);return function(){return m.rel(s,a,l,o)}}));return function(){return n.forEach((function(e){return e()}))}};var Ie=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{e.$queuedListeners$.push([r,t])}}}};var ze=function(e,r){if(r&8)return d;return e};var qe=function(e){return g?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var We=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var t,i,l,o,f,u,$;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=x(a);if(!s.then)return[3,2];t=H();return[4,s];case 1:s=c.sent();t();c.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Me(s,a,2);s.isProxied=true}i=F("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){N(v)}{n.$flags$&=~8}{n.$flags$|=128}i();Fe(n.$lazyInstance$);l=te(a.$tagName$);if(!(!T.has(l)&&s.style))return[3,5];o=F("registerStyles",a.$tagName$);f=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(f,l,false)}))];case 3:f=c.sent();c.label=4;case 4:Z(l,f,!!(a.$flags$&1));o();c.label=5;case 5:u=n.$ancestorComponent$;$=function(){return Te(e,n,a,true)};if(u&&u["s-rc"]){u["s-rc"].push($)}else{$()}return[2]}}))}))};var Fe=function(e){{Ae(e,"connectedCallback")}};var He=function(e,r){if((m.$flags$&1)===0){var t=F("connectedCallback",r.$tagName$);var n=R(e);if(r.$listeners$){n.$rmListeners$=De(e,n,r.$listeners$)}if(!(n.$flags$&1)){n.$flags$|=1;var a=void 0;if(!a){if(r.$flags$&4||r.$flags$&8){Ve(e)}}{var i=e;while(i=i.parentNode||i.host){if(i["s-p"]){xe(n,n.$ancestorComponent$=i);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{B((function(){return We(e,n,r)}))}}Fe(n.$lazyInstance$);t()}};var Ve=function(e){var r="";var t=e["s-cr"]=h.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Qe=function(e){if((m.$flags$&1)===0){var r=R(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(m.$cssShim$){m.$cssShim$.removeHost(e)}{Ae(t,"disconnectedCallback")}if(n.cmpDidUnload){Ae(t,"componentDidUnload")}}};var Ge=e("b",(function(e,r){if(r===void 0){r={}}var t=F();var n=[];var a=r.exclude||[];var i=h.head;var s=d.customElements;var l=i.querySelector("meta[charset]");var o=h.createElement("style");var f=[];var u;var $=true;Object.assign(m,r);m.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;if(r.syncQueue){m.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!p&&t.$flags$&1){t.$flags$|=8}var i=t.$tagName$;var l=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;_(r);if(t.$flags$&1){if(p){r.attachShadow({mode:"open"})}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if($){f.push(this)}else{m.jmp((function(){return He(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return Qe(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){je(this,t)};r.prototype.componentOnReady=function(){return R(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,Me(l,t,1))}}))}));o.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";o.setAttribute("data-styles","");i.insertBefore(o,l?l.nextSibling:i.firstChild);$=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{m.jmp((function(){return u=setTimeout(Ue,30,"timeout")}))}t()}));var Ke=e("c",(function(e,r,t){var n=Ye(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e}))}}}));var Xe=function(e){var r=new URL(e,m.$resourcesUrl$);return r.origin!==d.location.origin?r.href:r.pathname};var Je=e("d",(function(e,r){if(r in b){return b[r]}else if(r==="window"){return d}else if(r==="document"){return h}else if(r==="isServer"||r==="isPrerender"){return false}else if(r==="isClient"){return true}else if(r==="resourcesUrl"||r==="publicPath"){return Xe(".")}else if(r==="queue"){return{write:D,read:M,tick:{then:function(e){return B(e)}}}}return undefined}));var Ye=e("g",(function(e){return R(e).$hostElement$}))}}}));