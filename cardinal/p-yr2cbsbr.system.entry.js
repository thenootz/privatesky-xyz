System.register(["./p-51da6f80.system.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.r;r=t.h}],execute:function(){var i=t("psk_ss_app",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){var t="/"+this.appName+"/";navigator.serviceWorker.register(this.swPath,{scope:t}).then((function(t){console.log("registration with scope: ",t.scope)}),(function(t){console.log("ServiceWorker registration failed: ",t)}))};t.prototype.render=function(){return r("iframe",{width:"100%",height:"600px",src:this.iframeSrc})};return t}())}}}));