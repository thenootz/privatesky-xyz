System.register(["./p-226ad382.system.js"],function(e){"use strict";var t,o,r;return{setters:[function(e){t=e.r;o=e.h;r=e.g}],execute:function(){var s=e("psk_ss_app",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){this.digestSeedHex=this.digestMessage(this.csbSeed)};e.prototype.componentDidLoad=function(){var e=this;var t=this.element.querySelector("iframe");var o=require("boot-host").getBootScriptLoader();o.createPowerCord(this.digestSeedHex,this.csbSeed,t);setTimeout(function(){e.sendMessageToIframe(e.digestSeedHex,"Hi there "+e.digestSeedHex)},1e3)};e.prototype.sendMessageToIframe=function(e,t){var o=function(t){$$.interactions.startSwarmAs(e,"echo","say",t).onReturn(function(e,t){if(!e){console.log("Iframe received: ",t);setTimeout(function(){},1e4)}else{console.log(e)}})};o(t)};e.prototype.digestMessage=function(e){var t=require("pskcrypto");var o=t.pskHash(e,"hex");return o};e.prototype.render=function(){var e="/SSApps/app/"+this.digestSeedHex+"/index.html?"+this.digestSeedHex;return o("iframe",{sandbox:"allow-scripts allow-same-origin allow-downloads-without-user-activation allow-forms",width:"300px",height:"300px",src:e})};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});return e}())}}});