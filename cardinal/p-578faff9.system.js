System.register(["./p-226ad382.system.js","./p-628cfddf.system.js"],function(e){"use strict";var t,n;return{setters:[function(e){t=e.g},function(e){n=e.c}],execute:function(){e("B",o);function r(e){var t=this;Object.keys(e).forEach(function(n){t[n]=e[n]})}function a(e,t){try{var n=this;if(n.rootModel){var r=e;if(n.parentChain){r=n.parentChain+"."+e}n.rootModel.setChainValue(r,t);return true}return false}catch(e){console.error(e)}return false}function i(e,n){if(e||!n){return}var r=this;var a=t(r);var i=a.getAttribute("view-model");var o,l=i;if(i===null){o=a.getAttribute("name");if(o===null&&a.getAttribute("label")!==null){o=a.getAttribute("label").replace(/( |:|\/|\.|-)/g,"").toLowerCase()}l=o}if(!i&&!o){console.error("[Bind Model] At least one of the attributes should be defined in order to apply the binding: view-model, name, label");return}function u(e,t){r[e]=n.getChainValue(t);n.onChange(t,function(){r[e]=n.getChainValue(t)})}function s(){var e=l+".value";var t=n.getChainValue(l);if(!t||n.getChainValue(e)){return}console.warn("[Initialize] init chain for",e);u("value",e)}r.__assignProperties.call(r,{rootModel:n,parentChain:l});if(i){var c=n.getChainValue(l);if(!c){return}Object.keys(c).forEach(function(e){var t=l+"."+e;u(e,t)});s();return}for(var f=0;f<a.attributes.length;++f){var d=a.attributes[f];if(d.value.startsWith("@")){var v=d.value.split("@")[1];var h=l?l+"."+v:v;u(v,h)}}s()}function o(){return function(e){var o=e.componentWillLoad;e.componentWillLoad=function(){var e=this;var l=t(e);document.addEventListener("modelReady",function(){n("getModelEvent",{bubbles:true,composed:false,cancellable:true,detail:{callback:i.bind(e)}},true,l)});e["changeModel"]=a;e["__assignProperties"]=r;return o&&o.call(e)}}}}}});