System.register(["./p-52cd94a3.system.js","./p-f934dd08.system.js","./p-39ee8722.system.js","./p-f84e857d.system.js","./p-37ef4985.system.js","./p-1dbda78a.system.js"],function(e){"use strict";var t,n,r,i,a,s;return{setters:[function(e){t=e.r;n=e.c;r=e.h},function(){},function(){},function(e){i=e.T},function(e){a=e.C},function(e){s=e.T}],execute:function(){var o=undefined&&undefined.__decorate||function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)if(s=e[o])a=(i<3?s(a):i>3?s(t,n,a):s(t,n))||a;return i>3&&a&&Object.defineProperty(t,n,a),a};var u=e("app_menu",function(){function e(e){t(this,e);this.menuItems=null;this.hamburgerMaxWidth=600;this.showHamburgerMenu=false;this.showNavBar=false;this.menuItemClicked=n(this,"menuEvent",7);this.needMenuItemsEvt=n(this,"needMenuItems",7)}e.prototype.checkIfHamburgerIsNeeded=function(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth};e.prototype.componentDidLoad=function(){this.checkIfHamburgerIsNeeded()};e.prototype.handleClick=function(e){e.preventDefault();var t=e.target.value;for(var n=0;n<this.menuItems.length;n++){this.menuItems[n].active=t===this.menuItems[n]}this.menuItemClicked.emit(e.target.value);this.menuItems=this.menuItems.slice()};e.prototype.toggleNavBar=function(){this.showNavBar=!this.showNavBar};e.prototype.componentWillLoad=function(){var e=this;if(!this.menuItems){this.needMenuItemsEvt.emit(function(t,n){if(t){console.log(t);return}e.menuItems=n})}};e.prototype.renderItem=function(e){var t=this;var n=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer";var i=[];if(e.children){for(var a=0;a<e.children.length;a++){i.push(this.renderItem(e.children[a]))}}return r(n,{onclick:function(e){return t.handleClick(e)},active:e.active?e.active:false,children:i,hamburger:this.showHamburgerMenu,value:e})};e.prototype.render=function(){var e=this;if(!this.menuItems){return}var t=[];for(var n=0;n<this.menuItems.length;n++){var i=this.menuItems[n];t.push(this.renderItem(i))}var a=this.menuItems.find(function(e){return e.active});if(this.showHamburgerMenu){t=t.map(function(t){return r("li",{onClick:e.toggleNavBar.bind(e),class:"nav-item"},t)});var s="collapse navbar-collapse "+(""+(this.showNavBar==true?"show":""));return r("nav",{class:"navbar navbar-dark "},r("a",{class:"navbar-brand",href:"#"},a?a.name:"Home"),r("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},r("span",{class:"navbar-toggler-icon"})),r("div",{class:s},r("ul",{class:"navbar-nav mr-auto"},t)))}else{return t}};Object.defineProperty(e,"style",{get:function(){return":host{width:100%}.navbar{padding:.5rem 1rem .5rem 0}.navbar-brand{padding:5px}"},enumerable:true,configurable:true});return e}());o([a(),i({description:"Another web component that can render each menu item.\n     This component is responsible for rendering children (nested menu items).",isMandatory:false,propertyType:"string"})],u.prototype,"itemRenderer",void 0);o([i({description:"Menu items datasource. It should be an array if MenuItem[]. \n      If it is not provided, it the component will emit an event (needMenuItems) in order to get the menu items.",isMandatory:false,propertyType:"array of MenuItem items (MenuItem[])",defaultValue:"null"})],u.prototype,"menuItems",void 0);o([i({description:"This property is intended to be added when you want to change the default value of 600px for switching between normal and hamburger menu.",isMandatory:false,propertyType:"number",defaultValue:"600"})],u.prototype,"hamburgerMaxWidth",void 0);o([s({eventName:"menuEvent",description:"This event will be emited when you click on a menu item and it will create another CustomEvent that will change your route to the page you want to access."})],u.prototype,"menuItemClicked",void 0);o([s({eventName:"needMenuItems",description:"If no data is provided for the menuItems property this event will be emited that will render a default menuItem created by us."})],u.prototype,"needMenuItemsEvt",void 0)}}});