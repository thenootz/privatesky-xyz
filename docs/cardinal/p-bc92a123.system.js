var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var r=Array(e),i=0,n=0;n<t;n++)for(var s=arguments[n],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r};System.register(["./p-64181eed.system.js","./p-8918d7a0.system.js","./p-b61fafe4.system.js"],(function(e){"use strict";var n,t,r,i;return{setters:[function(e){n=e.g},function(e){t=e.D;r=e.a},function(e){i=e.c}],execute:function(){e("T",s);function s(e){return function(s,o){var a=s.connectedCallback,c=s.render;s.connectedCallback=function(){var i=this;var s=n(i);if(s.hasAttribute(t)){if(!i.componentDefinitions){i.componentDefinitions={definedProperties:[Object.assign(Object.assign({},e),{propertyName:String(o)})]};return a&&a.call(i)}var c=i.componentDefinitions;var f=Object.assign(Object.assign({},e),{propertyName:String(o)});if(c&&c.hasOwnProperty(r)){var p=__spreadArrays(c[r]);p.push(f);c[r]=__spreadArrays(p)}else{c[r]=[f]}i.componentDefinitions=Object.assign({},c)}return a&&a.call(i)};s.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[r])){return c&&c.call(e)}var n=e.componentDefinitions[r];if(n){n=n.reverse()}i("psk-send-props",{composed:true,bubbles:true,cancelable:true,detail:n},true)}}}}}}));