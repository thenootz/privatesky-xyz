System.register(["./p-64181eed.system.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.r;r=t.h}],execute:function(){var o=t("psk_controller_descriptor",function(){function t(t){e(this,t);this.title="";this.decoratorControllers=[]}t.prototype.receivedControllersDescription=function(t){var e=t.detail;t.stopImmediatePropagation();if(e&&e.length>0){this.decoratorControllers=JSON.parse(JSON.stringify(e))}};t.prototype.render=function(){var t=this.decoratorControllers.map((function(t){var e=t.eventName+": CustomEvent";var o="Required : "+t.controllerInteraction.required;return r("psk-hoc",{title:t.eventName},r("p",{class:"subtitle"},r("i",null,e)),r("p",{class:"subtitle"},r("b",null,o)),r("p",null,t.description),t.specialNote?r("p",null,r("b",null,"Note: ",t.specialNote)):null)}));return r("psk-chapter",{title:this.title,id:this.title.replace(/( |:|\/|\.)/g,"-").toLowerCase()},t)};return t}())}}}));