System.register(["./p-51da6f80.system.js","./p-21057e49.system.js","./p-a64c9619.system.js","./p-77f35bd6.system.js"],(function(t){"use strict";var e,s,o,i,a,n;return{setters:[function(t){e=t.r;s=t.c;o=t.h},function(t){i=t.T},function(t){a=t.T},function(t){n=t.C}],execute:function(){var r=undefined&&undefined.__decorate||function(t,e,s,o){var i=arguments.length,a=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,s,o);else for(var r=t.length-1;r>=0;r--)if(n=t[r])a=(i<3?n(a):i>3?n(e,s,a):n(e,s))||a;return i>3&&a&&Object.defineProperty(e,s,a),a};var l=t("psk_ui_toast",function(){function t(t){e(this,t);this.timeMeasure="Right now";this.toast=null;this.closeFeedback=s(this,"closeFeedback",7)}t.prototype.render=function(){var t=this;return this.toast=o("div",{class:"toast fade out show",style:this.styleCustomisation.toast?this.styleCustomisation.toast.feedback?this.styleCustomisation.toast.feedback.style?this.styleCustomisation.toast.feedback.style:{}:{}:{}},o("div",{class:"toast-header",style:this.styleCustomisation.toast?this.styleCustomisation.toast.header?this.styleCustomisation.toast.header.style?this.styleCustomisation.toast.header.style:{}:{}:{}},o("strong",{class:"mr-auto"},this.message.name),this.timeMeasure!=="Right now"?o("small",null,this.timeSinceCreation," ",this.timeMeasure," "):o("small",null,this.timeMeasure," "),o("button",{class:"ml-2 mb-1 close",title:"Close",onClick:function(){t.closeFeedback.emit(t.message)}},o("span",null,"×"))),o("div",{class:"toast-body",style:this.styleCustomisation.toast?this.styleCustomisation.toast.body?this.styleCustomisation.toast.body.style?this.styleCustomisation.toast.body.style:{}:{}:{}},this.message.content))};return t}());r([n(),i({description:"This property is the message that will be rendered on the toast",isMandatory:false,propertyType:"any"})],l.prototype,"message",void 0);r([i({description:"The time in milliseconds when the toast was created",isMandatory:true,propertyType:"number"})],l.prototype,"timeSinceCreation",void 0);r([i({description:"The time measure that will be renderer together with timeSinceCreation in order to get the live timer working properly",isMandatory:true,propertyType:"string",defaultValue:"Right now"})],l.prototype,"timeMeasure",void 0);r([i({description:"The style customisation for the toast so it looks according to your application",isMandatory:false,propertyType:"StyleCustomisation"})],l.prototype,"styleCustomisation",void 0);r([a({eventName:"closeFeedback",description:"When the X button is pressed this event is emitted in order to get rid of that specific feedback"})],l.prototype,"closeFeedback",void 0)}}}));