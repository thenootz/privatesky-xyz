System.register(["./p-946489a5.system.js","./p-68d723c9.system.js","./p-1921e01f.system.js"],function(e){"use strict";var n,t,i,s;return{setters:[function(e){n=e.g},function(e){t=e.D;i=e.a},function(e){s=e.c}],execute:function(){e("T",r);function r(e){return function(r,o){var c=r.connectedCallback,a=r.render;r.connectedCallback=function(){var s=this;var r=n(s);if(r.hasAttribute(t)){if(!s.componentDefinitions){s.componentDefinitions={definedProperties:[Object.assign(Object.assign({},e),{propertyName:String(o)})]};return c&&c.call(s)}var a=s.componentDefinitions;var f=Object.assign(Object.assign({},e),{propertyName:String(o)});if(a&&a.hasOwnProperty(i)){var u=a[i].slice();u.push(f);a[i]=u.slice()}else{a[i]=[f]}s.componentDefinitions=Object.assign({},a)}return c&&c.call(s)};r.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[i])){return a&&a.call(e)}var n=e.componentDefinitions[i];if(n){n=n.reverse()}s("psk-send-props",{composed:true,bubbles:true,cancelable:true,detail:n},true)}}}}}});