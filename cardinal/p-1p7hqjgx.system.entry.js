System.register(["./p-226ad382.system.js","./p-57436eba.system.js","./p-5ca8f7bd.system.js","./p-b5719584.system.js"],function(e){"use strict";var t,o,r,n,i;return{setters:[function(e){t=e.r;o=e.h;r=e.g},function(){},function(e){n=e.T},function(e){i=e.B}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(n<3?a(i):n>3?a(t,o,i):a(t,o))||i;return n>3&&i&&Object.defineProperty(t,o,i),i};var s=e("psk_for_each",function(){function e(e){t(this,e);this.modelChanged=false;this.ignoredNodeNames=["link","slot","#text","#comment","text","comment"];this.templateNodes=[];this.dataViewModel=null}e.prototype.componentWillLoad=function(){var e=this;var t=Array.from(this.__host.childNodes);var o=t.filter(function(t){return e.ignoredNodeNames.indexOf(t.nodeName.toLowerCase())===-1});var r=o.filter(function(e){return!e.hasAttribute("slot")});var n=o.find(function(e){return e.hasAttribute("slot")&&e.getAttribute("slot")==="no-data"});if(n){n.removeAttribute("slot");this.emptyNode=n.cloneNode(true)}this.__host.innerHTML="";if(r){r.forEach(function(t){e.templateNodes.push(t.cloneNode(true))})}else{console.error("No template found!")}};e.prototype.componentDidLoad=function(){var e=this;if(this["rootModel"]){this["rootModel"].onChange(this["parentChain"],function(){e.modelChanged=!e.modelChanged})}};e.prototype.render=function(){var e=this;if(!this["rootModel"]||!this["parentChain"]){return null}if(!this.templateNodes){return null}var t=this["rootModel"].getChainValue(this["parentChain"]);var r=[];var n=function(t){var n=i["parentChain"]?i["parentChain"]+"."+t+".":t+".";var a=[];i.templateNodes.forEach(function(t){var r=t.cloneNode(true);var i=e.prepareItem(n,r);a.push(o("div",{innerHTML:i.outerHTML}))});r.push(a)};var i=this;for(var a=0;a<t.length;a++){n(a)}if(r.length===0&&this.emptyNode){return o("div",{innerHTML:this.emptyNode.outerHTML})}return r};e.prototype.__processNode=function(e,t){var o=this;var r=Array.from(e.attributes).filter(function(e){return e.name.startsWith("view-model-")});r.forEach(function(r){var n=r.name.split("view-model-")[1];var i=t?""+t+r.value:r.value;e.setAttribute(n,o["rootModel"].getChainValue(i))});r=Array.from(e.attributes).filter(function(e){return e.value.startsWith("@")});r.forEach(function(r){var n=r.value.split("@")[1];var i=t?""+t+n:n;e.setAttribute(r.name,o["rootModel"].getChainValue(i))});Array.from(e.children).forEach(function(e){o.__processNode.call(o,e,t)})};e.prototype.prepareItem=function(e,t){var o=t.querySelectorAll("[view-model]");this.__processNode.call(this,t,e);o.forEach(function(t){var o=""+e+t.getAttribute("view-model");t.setAttribute("view-model",o)});return t};Object.defineProperty(e.prototype,"__host",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());a([i()],s.prototype,"__host",void 0);a([n({description:["This property is the name of the model which will be used to generate the form. The model should be a JavaScript array.",'All the information about how to write a model, hot to use the two-way binding and how to use the model with this component cand be found in the documentation found at: <psk-link page="forms/using-forms">Using forms</psk-link>'],isMandatory:true,propertyType:"string",specialNote:["If this property is not provided, nothing written inside the component's template will be displayed."]})],s.prototype,"dataViewModel",void 0)}}});