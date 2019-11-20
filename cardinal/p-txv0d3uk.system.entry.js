System.register(["./p-226ad382.system.js","./p-32fcf664.system.js","./p-50480096.system.js","./p-d5102599.system.js","./p-29529ff4.system.js"],function(t){"use strict";var e,s,i,o,r,n;return{setters:[function(t){e=t.r;s=t.c;i=t.h},function(t){o=t.C},function(){},function(t){r=t.T},function(t){n=t.C}],execute:function(){var a=undefined&&undefined.__decorate||function(t,e,s,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)if(n=t[a])r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r;return o>3&&r&&Object.defineProperty(e,s,r),r};var l=t("psk_ui_alert",function(){function t(t){e(this,t);this.typeOfAlert=n.ALERT_SUCCESS;this.timeAlive=3e3;this.alert=null;this.isVisible=true;this.closeFeedback=s(this,"closeFeedback",7)}t.prototype.closeUIFeedback=function(){var t=this;this.isVisible=false;setTimeout(function(){t.closeFeedback.emit(t.message)},1e3)};t.prototype.render=function(){var t=this;this.alert=i("div",{class:"alert "+this.typeOfAlert+" alert-dismissible fade "+(this.isVisible?"show":"hide"),style:this.styleCustomisation.alert?this.styleCustomisation.alert.style?this.styleCustomisation.alert.style:{}:{},onClick:function(){t.closeUIFeedback()}},i("slot",null),i("div",{class:"toast-body"},this.message.content));setTimeout(function(){t.closeUIFeedback()},this.timeAlive);return this.alert};return t}());a([o(),r({description:"This property is a string that indicates the type of alert that you want so send back to the user",isMandatory:false,propertyType:"string",defaultValue:"alert-success"})],l.prototype,"typeOfAlert",void 0);a([r({description:"This property is the message that will be rendered on the alert",isMandatory:false,propertyType:"any"})],l.prototype,"message",void 0);a([r({description:"This property is the time in milliseconds t",isMandatory:false,propertyType:"any"})],l.prototype,"timeAlive",void 0);a([r({description:"The style customisation for the alert so it looks according to your application",isMandatory:false,propertyType:"StyleCustomisation"})],l.prototype,"styleCustomisation",void 0)}}});