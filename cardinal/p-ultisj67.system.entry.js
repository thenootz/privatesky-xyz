System.register(["./p-226ad382.system.js","./p-57436eba.system.js","./p-5ca8f7bd.system.js"],function(e){"use strict";var t,r,i;return{setters:[function(e){t=e.r;r=e.h},function(){},function(e){i=e.T}],execute:function(){var n=undefined&&undefined.__decorate||function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,r,i);else for(var o=e.length-1;o>=0;o--)if(c=e[o])s=(n<3?c(s):n>3?c(t,r,s):c(t,r))||s;return n>3&&s&&Object.defineProperty(t,r,s),s};var s=e("psk_description",function(){function e(e){t(this,e);this.title=""}e.prototype.render=function(){var e=r("div",{class:"psk-description"},r("slot",null));if(this.title.replace(/\s/g,"")===""){return r("psk-card",null,e)}return r("psk-chapter",{title:this.title},e)};return e}());n([i({description:"This property is the title of the new psk-card/psk-chapter that will be created.",isMandatory:false,propertyType:"string",specialNote:"All the empty spaces in the title will be deleted."})],s.prototype,"title",void 0)}}});