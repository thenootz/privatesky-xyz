System.register(["./p-51da6f80.system.js","./p-77f35bd6.system.js"],(function(e){"use strict";var t,r,o;return{setters:[function(e){t=e.r;r=e.h},function(e){o=e.C}],execute:function(){var n=undefined&&undefined.__decorate||function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)if(l=e[s])i=(n<3?l(i):n>3?l(t,r,i):l(t,r))||i;return n>3&&i&&Object.defineProperty(t,r,i),i};var i=960;var l=e("psk_default_renderer",function(){function e(e){t(this,e);this.mobileLayout=false}e.prototype.checkLayout=function(){this.mobileLayout=document.documentElement.clientWidth<i};e.prototype.componentWillLoad=function(){this.checkLayout()};e.prototype.render=function(){var e=r("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:i});var t=r("div",{class:"nav-footer"},"version 0.1");var o=[];if(this.mobileLayout){o=[r("psk-user-profile",{"profile-renderer":"mobile-profile-renderer"}),e]}else{o=[r("psk-user-profile",null),e,t]}return r("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},r("aside",null,o),r("section",{onScroll:this.handleScrollEvent.bind(this)},r("psk-app-router",{failRedirectTo:"/home"}),this.mobileLayout===true?t:null))};return e}());n([o()],l.prototype,"handleScrollEvent",void 0)}}}));