System.register(["./p-52cd94a3.system.js","./p-f934dd08.system.js","./p-39ee8722.system.js","./p-f84e857d.system.js","./p-1dbda78a.system.js","./p-29529ff4.system.js"],function(e){"use strict";var t,s,i,o,n,r;return{setters:[function(e){t=e.r;s=e.c;i=e.h},function(){},function(){},function(e){o=e.T},function(e){n=e.T},function(e){r=e.C}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,s,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,s):i,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)if(r=e[a])n=(o<3?r(n):o>3?r(t,s,n):r(t,s))||n;return o>3&&n&&Object.defineProperty(t,s,n),n};var p=e("psk_list_feedbacks",function(){function e(e){t(this,e);this.alertOpened=false;this._messagesQueue=[];this._messagesContent=[];this.timer=0;this.opened=false;this.typeOfAlert=[];this.timeAlive=5e3;this.messagesToDisplay=3;this.openFeedbackHandler=s(this,"openFeedback",7)}e.prototype.closeFeedbackHandler=function(e){if(this.alertOpened){this.alertOpened=false}var t=this._messagesContent.indexOf(e.detail);if(t>-1){this.typeOfAlert.splice(t,1);this._messagesContent.splice(t,1);this._messagesContent=this._messagesContent.slice();if(this._messagesQueue.length>0){this._messagesContent=this._messagesContent.concat([this._messagesQueue.shift()])}}};e.prototype.componentWillLoad=function(){var e=this;this.openFeedbackHandler.emit(function(t,s,i){if(i){e.typeOfAlert.push(i)}else{e.typeOfAlert.push("toast")}e.alertOpened=true;if(t instanceof Array){t.forEach(function(t,s){e.addToMessageArray.bind(e)(t,s)})}else{e.addToMessageArray.bind(e)(t,s)}})};e.prototype.timerToShow=function(e){var t=this;if(this._messagesContent.length>0){var s=(new Date).getTime();var i=e.timer;var o=Math.floor((s-i)/r.MINUTE);var n=setTimeout(function(){t.timerToShow.bind(t)(e)},r.MINUTE_TICK);var a=setTimeout(function(){t.timerToShow.bind(t)(e)},r.HOUR_TICK);switch(true){case o<=0:this.timeMeasure=r.RIGHT_NOW;break;case o<60:this.timer=Math.floor((s-i)/r.MINUTE);this.timeMeasure=r.MINUTES;break;case o>=60:this.timer=Math.floor((s-i)/r.HOUR);this.timeMeasure=r.HOURS;break}}else{return}};e.prototype.addToMessageArray=function(e,t){var s=new Date;var i={content:e,timer:s.getTime(),name:t};if(this._messagesContent.length+1<=this.messagesToDisplay){this._messagesContent=this._messagesContent.concat([i])}else{this._messagesQueue=this._messagesQueue.concat([i])}};e.prototype.render=function(){var e=this;var t=[];var s;this._messagesContent.forEach(function(o,n){if(e.typeOfAlert[n]==="toast"){s=e.toastRenderer?e.toastRenderer:"psk-ui-toast";e.timerToShow.bind(e)(o);t.push(i(s,{message:o,timeSinceCreation:e.timer,timeMeasure:e.timeMeasure,styleCustomisation:e.styleCustomisation}))}else{s=e.alertRenderer?e.alertRenderer:"psk-ui-alert";t.push(i(s,{message:e._messagesContent[e._messagesContent.length-1],typeOfAlert:e.typeOfAlert[n],timeAlive:e.timeAlive,styleCustomisation:e.styleCustomisation}))}});return i("div",null,t?t:null)};Object.defineProperty(e,"style",{get:function(){return":host{top:0;right:0;position:fixed;z-index:999;width:auto}"},enumerable:true,configurable:true});return e}());a([o({description:"This property is a object based on StyleCustomisation interface ",isMandatory:false,propertyType:"StyleCustomisation type",specialNote:"Even if you do not use all the parameters there will not be a problem with the default renderers."})],p.prototype,"styleCustomisation",void 0);a([o({description:"This property is the auto closing timer in milliseconds for the alert.",isMandatory:false,propertyType:"number",defaultValue:5e3,specialNote:"This property will only be taken into consideration when used with the psk-ui-alert child component"})],p.prototype,"timeAlive",void 0);a([o({description:"This property represents the number of toasts to be renderer on the user interface.",isMandatory:false,propertyType:"number",defaultValue:3,specialNote:"This property will only be taken into consideration when used with the psk-ui-toast child component."})],p.prototype,"messagesToDisplay",void 0);a([o({description:"This property allows the component to display a custom toast in case the default one is not preferred.",isMandatory:false,propertyType:"string",defaultValue:"psk-ui-toast",specialNote:"If this property is missing , psk-ui-toast will be assumed."})],p.prototype,"toastRenderer",void 0);a([o({description:"This property allows the component to display a custom alert in case the default one is not preferred.",isMandatory:false,propertyType:"string",defaultValue:"psk-ui-alert",specialNote:"If this property is missing , psk-ui-alert will be assumed."})],p.prototype,"alertRenderer",void 0);a([n({eventName:"openFeedback",description:"This even is triggered when the user does an action that require feedback.This event comes with three parameters :\n            message(string) : the message for the action that was executed,\n            name(string) : the name is necessary in case of a toast feedback and\n            typeOfAlert(string) : either toast or a bootstrap alert."})],p.prototype,"openFeedbackHandler",void 0)}}});