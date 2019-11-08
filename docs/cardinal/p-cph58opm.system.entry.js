System.register(["./p-64181eed.system.js","./p-8918d7a0.system.js","./p-b61fafe4.system.js","./p-bc92a123.system.js","./p-455c1bab.system.js"],(function(e){"use strict";var t,r,n,o,i;return{setters:[function(e){t=e.r;r=e.c;n=e.h},function(){},function(){},function(e){o=e.T},function(e){i=e.T}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var p=e.length-1;p>=0;p--)if(s=e[p])i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var p=e("psk_app_router",function(){function e(e){t(this,e);this.menuItems=[];this.failRedirectTo="";this.needMenuItemsEvt=r(this,"needMenuItems",7)}e.prototype.componentDidLoad=function(){var e=this;this.needMenuItemsEvt.emit((function(t,r){if(t){console.log(t);return}e.menuItems=r}))};e.prototype.renderItems=function(e){var t=this;var r=e.map((function(e){if(e.children){return t.renderItems(e.children)}else{return n("stencil-route",{url:e.path,exact:e.exact,component:e.component,componentProps:e.componentProps})}}));return r};e.prototype.render=function(){var e=this.renderItems(this.menuItems);if(e.length===0){return n("psk-ui-loader",{shouldBeRendered:true})}return n("div",{class:"app_container"},n("stencil-router",{historyType:this.historyType},n("stencil-route-switch",{scrollTopOffset:0},e,n("stencil-route",{component:"psk-page-not-found",componentProps:{urlDestination:this.menuItems[0].path}}))))};return e}());s([o({description:"This parameter holds the datasource for the creation of the application routes. If this property is not provided, the component will emit an event (needMenuItems) in order to fetch this information.",specialNote:"The same configuration file is used in generating the App Menu component",isMandatory:false,propertyType:"Array of MenuItem types(MenuItem[])"})],p.prototype,"menuItems",void 0);s([o({description:"This is the history type that will be passed along to the stencil-router",isMandatory:false,propertyType:"string",defaultValue:"browser"})],p.prototype,"historyType",void 0);s([i({eventName:"needMenuItems",controllerInteraction:{required:true},description:"This event gets the data as parameter and it is emitted immediately after the component is loaded in order to create the application routes "})],p.prototype,"needMenuItemsEvt",void 0);var a=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var p=e.length-1;p>=0;p--)if(s=e[p])i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var u=e("psk_user_profile",function(){function e(e){t(this,e);this.userInfo=null;this.getUserInfoEvent=r(this,"getUserInfo",7)}e.prototype.componentWillLoad=function(){var e=this;if(!this.userInfo){this.getUserInfoEvent.emit((function(t,r){if(!t){e.userInfo=r}else{console.error("Error getting user info",t)}}))}};e.prototype.render=function(){var e=this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer";return n(e,{userInfo:this.userInfo})};return e}());a([o({description:"should receive an object with the following properties if the default renderer is wanted: username, avatar, email.",isMandatory:false,propertyType:"any",defaultValue:"null"})],u.prototype,"userInfo",void 0);a([o({description:"This property allows the component to display a custom User Profile in case the default one is not preferred. ",isMandatory:false,propertyType:"any"})],u.prototype,"profileRenderer",void 0);a([i({eventName:"getUserInfo",controllerInteraction:{required:true},description:"This event is emitted only if the userInfo property is null in order to get the desired data."})],u.prototype,"getUserInfoEvent",void 0)}}}));