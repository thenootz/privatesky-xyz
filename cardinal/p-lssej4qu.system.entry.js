System.register(["./p-226ad382.system.js","./p-9e7e5912.system.js"],function(e){"use strict";var t,o,r,n,s;return{setters:[function(e){t=e.r;o=e.c;r=e.h;n=e.g},function(e){s=e.C}],execute:function(){var i=e("psk_app_root",function(){function e(e){var r=this;t(this,e);this.mobileLayout=false;this.componentCode="";this.hasSlot=false;this.htmlLoader=this.__createLoader();document.getElementsByTagName("body")[0].appendChild(this.htmlLoader);if(this.controller){var n=this.controller;s.getController(n).then(function(e){new e(r.host)})}else{console.log("No controller added to app-root")}this.routeChangedEvent=o(this,"routeChanged",7);this.cfReadyEvent=o(this,"controllerFactoryIsReady",7)}e.prototype.__createLoader=function(){var e=12;var t="";for(var o=1;o<=e;o++){t+='<div class="sk-circle'+o+' sk-circle"></div>'}var r=document.createElement("div");r.className="app-loader";r.innerHTML="<div class='sk-fading-circle'>"+t+"</div>";return r};e.prototype.componentWillLoad=function(){this.cfReadyEvent.emit(s);var e=this.host.innerHTML;e=e.replace(/\s/g,"");if(e.length){this.hasSlot=true}};e.prototype.componentDidLoad=function(){document.getElementsByTagName("body")[0].removeChild(this.htmlLoader)};e.prototype.render=function(){var e="psk-default-renderer";return this.hasSlot?r("slot",null):r(e,null)};Object.defineProperty(e.prototype,"host",{get:function(){return n(this)},enumerable:true,configurable:true});return e}())}}});