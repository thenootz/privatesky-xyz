import{r as e,c as r,h as t}from"./p-1c0c10bb.js";import{C as s}from"./p-c1dd1c78.js";const i=class{constructor(t){e(this,t),this.mobileLayout=!1,this.getAppVersion=r(this,"getAppVersion",7)}checkLayout(){this.mobileLayout=document.documentElement.clientWidth<960}componentWillLoad(){return new Promise(e=>{this.checkLayout(),this.getAppVersion.emit((r,t)=>{r||(this.appVersion=t),e()})})}render(){let e=t("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:960}),r=t("div",{class:"nav-footer"},"version ",this.appVersion),s=[];return s=this.mobileLayout?[t("psk-user-profile",{"profile-renderer":"mobile-profile-renderer"}),e]:[t("psk-user-profile",null),e,r],t("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},t("aside",null,s),t("section",null,t("psk-app-router",null),!0===this.mobileLayout?r:null))}};!function(e,r,t,s){var i,o=arguments.length,l=o<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,t,s);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(o<3?i(l):o>3?i(r,t,l):i(r,t))||l);o>3&&l&&Object.defineProperty(r,t,l)}([s()],i.prototype,"mobileLayout",void 0);export{i as psk_default_renderer}