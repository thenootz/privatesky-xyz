System.register(["./p-226ad382.system.js","./p-9c53ea88.system.js","./p-528bf9ac.system.js"],function(t){"use strict";var e,r,n,o,l;return{setters:[function(t){e=t.r;r=t.h;n=t.g},function(t){o=t.T},function(t){l=t.C}],execute:function(){var i=undefined&&undefined.__decorate||function(t,e,r,n){var o=arguments.length,l=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)if(i=t[c])l=(o<3?i(l):o>3?i(e,r,l):i(e,r))||l;return o>3&&l&&Object.defineProperty(e,r,l),l};var c=t("psk_container",function(){function t(t){var r=this;e(this,t);var n=this.controllerName?this.controllerName:"Controller";l.getController(n).then(function(t){r.controller=new t(r.host)})}t.prototype.render=function(){return[r("slot",null),this.htmlFilePath&&r("psk-page-loader",{pageUrl:this.htmlFilePath}),this.controllerScript&&this.controller.executeScript(this.controller,this.controllerScript)]};t.prototype.componentDidLoad=function(){var t=this.host.querySelector("psk-controller");if(t!==null){this.controllerScript=t.innerHTML;t.innerHTML=""}};Object.defineProperty(t.prototype,"host",{get:function(){return n(this)},enumerable:true,configurable:true});return t}());i([o({isMandatory:false,description:"This property is a string that will let the developer to choose his own controller.\n\t\t\t\t\tIf no value is sent then the null default value will be taken and the component will use the basic Controller",propertyType:"string",defaultValue:"null"})],c.prototype,"controllerName",void 0)}}});