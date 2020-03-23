var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n]};return e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();System.register(["./p-3369a689.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-609d210d.system.js","./p-48004ded.system.js"],(function(e){"use strict";var t,n,r,o,i;return{setters:[function(e){t=e.r;n=e.h;r=e.g},function(){},function(){},function(e){o=e.T},function(e){i=e.C}],execute:function(){var a=function(){function e(e){this._element=e}e.prototype.receive=function(e,t,n){if(typeof t==="function"){n=t;t=null}if(!e||e.trim().length===0||!n||typeof n!=="function"||!this._element||!this._element.addEventListener){return}if(t){t.addEventListener(e,n);return}this._element.addEventListener(e,n)};e.prototype.send=function(e,t,n){if(!e||e.trim().length===0||!this._element||!this._element||!this._element.dispatchEvent){return}var r=new CustomEvent(e,{bubbles:true,cancelable:true,composed:true,detail:t});if(n){n.dispatchEvent(r);return}this._element.dispatchEvent(r)};e.prototype.executeScript=function(e,t){if(e&&typeof t==="string"&&t.trim().length>0){new Function("controller",t)(e)}return null};return e}();var s="@event:";var c="/app-config.json";var p=function(e){__extends(t,e);function t(n){var r=e.call(this,n)||this;r.configIsLoaded=false;r.pendingRequests=[];r._getAppConfiguration(c,(function(e,n){var o;if(window&&window.location&&window.location.origin){o=window.location.origin}else{o=n.baseUrl}r.configuration=t._prepareConfiguration(n,o);r.configIsLoaded=true;while(r.pendingRequests.length){var i=r.pendingRequests.pop();if(!r.configuration[i.configName]){throw new Error("Config "+i.configName+" was not provided")}i.callback(null,r.configuration[i.configName])}}));n.addEventListener("needRoutes",r._provideConfig("routes"));n.addEventListener("needMenuItems",r._provideConfig("menu"));n.addEventListener("getUserInfo",r._provideConfig("profile"));n.addEventListener("getHistoryType",r._provideConfig("historyType"));n.addEventListener("validateUrl",(function(e){e.stopImmediatePropagation();var t=e.detail,n=t.sourceUrl,o=t.callback;if(o&&typeof o==="function"){r._parseSourceUrl(n,o)}else{console.error("Callback was not properly provided!")}}));return r}t.prototype._provideConfig=function(e){var t=this;return function(n){n.stopImmediatePropagation();var r=n.detail;if(r&&typeof r==="function"){if(t.configIsLoaded){if(!t.configuration[e]){throw new Error("Config "+e+" was not provided")}r(null,t.configuration[e])}else{t.pendingRequests.push({configName:e,callback:r})}}}};t._prepareConfiguration=function(e,n){var r={};r.baseUrl=n;var o=n+e.basePagesUrl;if(!e.menu||!e.menu.defaultMenuConfig){throw new Error("Default menu configuration is missing")}var i=e.menu.defaultMenuConfig;if(e.profile){r.profile=e.profile}var a=function(e){for(var t=0;t<e.length;t++){if(e[t].children&&e[t].children.items){a(e[t].children.items)}else{if(typeof e[t].indexed!=="undefined"&&e[t].indexed.toString()==="false"){e.splice(t,1)}}}return e};var c=function(e,t){e.forEach((function(e){if(!e.path){var n=e.name.toLowerCase();var r=n.toLowerCase().replace(/\s+/g,"-");r=r.replace(/[:\/]/g,"");e.path=r}if(t){e.path=t+"/"+e.path}else{if(e.path.indexOf("/")!==0){e.path="/"+e.path}}if(e.children){e.type="abstract";if(!e.icon){e.icon=i.icon}}else{for(var a in i){if(!e.hasOwnProperty(a)){e[a]=i[a]}}if(e.component==="psk-page-loader"){if(!e.componentProps){e.componentProps={}}if(e.pageSrc){if(e.pageSrc.startsWith("http")){e.componentProps.pageUrl=e.pageSrc}else{e.componentProps.pageUrl=o+e.pageSrc}}else{var p=e.name.replace(/[:.!?]/g,"").replace(/\s/g,"-").toLowerCase();var l="";if(t){l=t.replace(/^\//,"")}e.componentProps.pageUrl=o+l+"/"+p+".html"}}}if(typeof e.children==="object"&&Array.isArray(e.children)){e.children={type:"known",items:JSON.parse(JSON.stringify(e.children))};c(e.children.items,e.path)}else{if(typeof e.children==="string"&&e.children.indexOf(s)==0){var f=e.children.substring(s.length);e.children={type:"event",event:f};e.component="psk-ssapp-loader"}}}));return e};r.routes=c(e.menu.pages);r.historyType="browser";var p=e.menu.defaultMenuConfig.historyType;if(p==="hash"||p==="query"){r.historyType=p}if(p==="query"){var l="?";if(e.menu.defaultMenuConfig.pagePrefix){l=e.menu.defaultMenuConfig.pagePrefix}var f=function(e){e.forEach((function(e){var t=e.path;if(t.indexOf("/")===0){t=t.substr(1)}e.path=""+l+t;if(e.children){f(e.children.items)}}))};f(r.routes)}var u=JSON.parse(JSON.stringify(r.routes));r.menu=a(u);r.pagesHierarchy=t._prepareRoutesTree(r.routes,p);return r};t._prepareRoutesTree=function(e,t){var n=function(e){var r={};e.forEach((function(e){var o=e.name.replace(/(\s+|-)/g,"").toLowerCase();if(!r[o]){var i=e.path;switch(t){case"browser":case"query":i=e.path;break;case"hash":i="/#"+e.path;break}r[o]={path:i}}if(typeof e.children==="object"&&Array.isArray(e.children.items)){r[o].children={type:"known",items:n(e.children.items)}}else if(typeof e.children==="string"&&e.children.indexOf(s)===0){var a=e.children.substring(s.length);r[o].children={type:"event",event:a}}}));return r};return n(e)};t.prototype._parseSourceUrl=function(e,t){e=e.replace(/(\s+|-)/g,"").toLowerCase();var n=e.split("/");var r=this.configuration.pagesHierarchy;for(var o=0;o<n.length;o++){if(!r[n[o]]){t(e+" is not a valid path in the application!");break}var i=r[n[o]].children;if(typeof i==="object"&&typeof i.items==="object"&&o!==n.length){r=i.items;continue}t(null,r[n[o]].path)}};t.prototype._getAppConfiguration=function(e,t){var n=new XMLHttpRequest;n.open("GET",e);n.onload=function(){if(n.status!=200){t(new Error(n.status.code))}else{var e=JSON.parse(n.responseText);t(null,e)}};n.onerror=function(){t(new Error("An error occurred"))};n.send()};return t}(a);var l=undefined&&undefined.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i;return o>3&&i&&Object.defineProperty(t,n,i),i};var f=e("psk_app_root",function(){function e(e){t(this,e);this.mobileLayout=false;this.componentCode="";this.hasSlot=false}e.prototype.__createLoader=function(){var e=12;var t="";for(var n=1;n<=e;n++){t+='<div class="sk-circle'+n+' sk-circle"></div>'}var r=document.createElement("div");r.className="app-loader";r.innerHTML="<div class='sk-fading-circle'>"+t+"</div>";return r};e.prototype.connectedCallback=function(){this.disconnected=false};e.prototype.disconnectedCallback=function(){this.disconnected=true};e.prototype.componentWillLoad=function(){var e=this;if(this.host.parentElement){this.htmlLoader=this.__createLoader();this.host.parentElement.appendChild(this.htmlLoader)}var t=this.host.innerHTML;t=t.replace(/\s/g,"");if(t.length){this.hasSlot=true}if(typeof this.controller==="string"){return new Promise((function(t,n){i.getController(e.controller).then((function(n){if(e.disconnected){return t()}new n(e.host);t()})).catch(n)}))}else{new p(this.host)}};e.prototype.componentDidLoad=function(){if(this.htmlLoader&&this.htmlLoader.parentNode){this.htmlLoader.parentNode.removeChild(this.htmlLoader)}};e.prototype.render=function(){var e="psk-default-renderer";return this.hasSlot?n("slot",null):n(e,null)};Object.defineProperty(e.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());l([o({isMandatory:true,description:["This property is a string that will permit the developer to choose his own controller.","It is recommended that each app to extend the provided default controller and adapt it to the application needs"],propertyType:"string",defaultValue:"null"})],f.prototype,"controller",void 0)}}}));