System.register(["./p-226ad382.system.js","./p-57436eba.system.js"],function(t){"use strict";var e,r;return{setters:[function(t){e=t.g},function(t){r=t.c}],execute:function(){t("B",o);function n(t){var e=this;Object.keys(t).forEach(function(r){e[r]=t[r]})}function a(t,r,n,a){var i=this;var u=e(i);var l=Array.from(u.attributes).filter(function(t){return t.name.startsWith(n)});l.forEach(function(e){var a=e.name.split(n)[1];var u=t?t+"."+e.value:e.value;i[a]=r.getChainValue(u)});return a()}function i(t,r,n,a){var i=this;var u=e(i);var l=Array.from(u.attributes).filter(function(t){return t.value.startsWith(n)});l.forEach(function(e){var a=e.value.split(n)[1];var u=t?t+"."+a:a;i[e.name]=r.getChainValue(u);r.onChange(u,function(){i[e.name]=r.getChainValue(u)})});return a()}function u(t,e){try{var r=this;if(r.rootModel){var n=t;if(r.parentChain){n=r.parentChain+"."+t}r.rootModel.setChainValue(n,e);return true}return false}catch(t){console.error(t)}return false}function l(t,r,n){if(t||!r){return n()}var u=this;var l=e(u);var o,s,c;if(l.getAttribute("data-view-model")!==null&&l.tagName.toLowerCase()==="psk-for-each"){o=l.getAttribute("data-view-model");c=o;u.__assignProperties.call(u,{rootModel:r,parentChain:c});return n()}o=l.getAttribute("view-model");c=o;if(o===null){s=l.getAttribute("name")!==null&&!l.getAttribute("name").startsWith("@")?l.getAttribute("name"):null;if(s===null&&l.getAttribute("label")!==null&&!l.getAttribute("label").startsWith("@")){s=l.getAttribute("label").replace(/( |:|\/|\.|-)/g,"").toLowerCase()}c=s}if(!o&&!s){i.call(u,c,r,"@",n);a.call(u,c,r,"view-model-",n);return n()}function f(t,e){u[t]=r.getChainValue(e);r.onChange(e,function(){u[t]=r.getChainValue(e)})}function v(){var t=c+".value";var e=r.getChainValue(c);if(!e||r.getChainValue(t)){return n()}f("value",t)}u.__assignProperties.call(u,{rootModel:r,parentChain:c});if(o){var h=r.getChainValue(c);if(!h){return n()}Object.keys(h).forEach(function(t){var e=c+"."+t;f(t,e)});v();return n()}return n()}function o(){return function(t){var a=t.componentWillLoad,i=t.render;t.componentWillLoad=function(){var t=this;var o=e(t);t["render"]=i;t["changeModel"]=u;t["__assignProperties"]=n;function s(e){function n(r,n){l.apply(t,[r,n,e])}r("getModelEvent",{bubbles:true,composed:true,cancellable:true,detail:{callback:n}},true,o)}if(!o.isConnected){return a&&a.call(t)}var c=o.getAttributeNames();var f=c.filter(function(t){if(t.toLowerCase()==="data-view-model"){return true}if(t.toLowerCase().includes("view-model")){return true}if(o.getAttribute(t).toLowerCase().startsWith("@")){return true}return false});if(f.length===0){return a&&a.call(t)}return new Promise(function(e){var r=function(){e(a&&a.call(t))};s(r)})}}}}}});