import{g as n}from"./p-bd5842d7.js";import{c as e}from"./p-5a953e20.js";function t(n){let e=this;Object.keys(n).forEach(function(t){e[t]=n[t]})}function l(n,e){try{let t=this;if(t.rootModel){let l=n;return t.parentChain&&(l=`${t.parentChain}.${n}`),t.rootModel.setChainValue(l,e),!0}return!1}catch(n){console.error(n)}return!1}function o(){return o=>{let{componentWillLoad:r,render:i}=o;o.componentWillLoad=function(){let o=this,u=n(o);return o.render=i,o.changeModel=l,o.__assignProperties=t,u.isConnected?0===u.getAttributeNames().filter(n=>"data-view-model"===n.toLowerCase()||!!n.toLowerCase().includes("view-model")||!!u.getAttribute(n).toLowerCase().startsWith("@")).length?r&&r.call(o):new Promise(t=>{!function(t){e("getModelEvent",{bubbles:!0,composed:!0,cancellable:!0,detail:{callback:function(e,l){(function(e,t,l){if(e||!t)return l();let o,r,i,u=this,a=n(u);if(null!==a.getAttribute("data-view-model")&&"psk-for-each"===a.tagName.toLowerCase())return o=a.getAttribute("data-view-model"),u.__assignProperties.call(u,{rootModel:t,parentChain:i=o}),l();if(o=a.getAttribute("view-model"),i=o,null===o&&(null!==(r=null===a.getAttribute("name")||a.getAttribute("name").startsWith("@")?null:a.getAttribute("name"))||null===a.getAttribute("label")||a.getAttribute("label").startsWith("@")||(r=a.getAttribute("label").replace(/( |:|\/|\.|-)/g,"").toLowerCase()),i=r),!o&&!r)return function(e,t,l,o){let r=this;const i=n(r);return Array.from(i.attributes).filter(n=>n.value.startsWith(l)).forEach(n=>{const o=n.value.split(l)[1],i=e?`${e}.${o}`:o;r[n.name]=t.getChainValue(i),t.onChange(i,function(){r[n.name]=t.getChainValue(i)})}),o()}.call(u,i,t,"@",l),function(e,t,l,o){let r=this;const i=n(r);return Array.from(i.attributes).filter(n=>n.name.startsWith(l)).forEach(n=>{const o=n.name.split(l)[1];r[o]=t.getChainValue(e?`${e}.${n.value}`:n.value)}),o()}.call(u,i,t,"view-model-",l),l();function c(n,e){u[n]=t.getChainValue(e),t.onChange(e,function(){u[n]=t.getChainValue(e)})}if(u.__assignProperties.call(u,{rootModel:t,parentChain:i}),o){let n=t.getChainValue(i);return n?(Object.keys(n).forEach(n=>{c(n,`${i}.${n}`)}),function(){const n=`${i}.value`;if(!t.getChainValue(i)||t.getChainValue(n))return l();c("value",n)}(),l()):l()}return l()}).apply(o,[e,l,t])}}},!0,u)}(()=>{t(r&&r.call(o))})}):r&&r.call(o)}}}export{o as B};