System.register(["./p-226ad382.system.js","./p-f97ba841.system.js"],function(e){"use strict";var n,t,i,r;return{setters:[function(e){n=e.g},function(e){t=e.D;i=e.a;r=e.c}],execute:function(){e("T",o);function o(e){return function(o,s){var c=o.connectedCallback,a=o.render;o.connectedCallback=function(){var r=this;var o=n(r);if(o.hasAttribute(t)){if(!r.componentDefinitions){r.componentDefinitions={definedProperties:[Object.assign({},e,{propertyName:String(s)})]};return c&&c.call(r)}var a=r.componentDefinitions;var f=Object.assign({},e,{propertyName:String(s)});if(a&&a.hasOwnProperty(i)){var u=a[i].slice();u.push(f);a[i]=u.slice()}else{a[i]=[f]}r.componentDefinitions=Object.assign({},a)}return c&&c.call(r)};o.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[i])){return a&&a.call(e)}var n=e.componentDefinitions[i];if(n){n=n.reverse()}r("psk-send-props",{composed:true,bubbles:true,cancelable:true,detail:n},true)}}}}}});