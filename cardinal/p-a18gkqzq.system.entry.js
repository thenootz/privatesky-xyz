var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var i=Array(t),s=0,e=0;e<r;e++)for(var n=arguments[e],o=0,a=n.length;o<a;o++,s++)i[s]=n[o];return i};System.register(["./p-3369a689.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-609d210d.system.js","./p-5514a11c.system.js"],(function(t){"use strict";var e,r,i,s,n,o,a,l;return{setters:[function(t){e=t.r;r=t.h;i=t.g},function(){},function(t){s=t.e;n=t.s;o=t.c},function(t){a=t.T},function(t){l=t.C}],execute:function(){function c(){var t=this;var e=t.element;var r=Array.from(t.element.querySelectorAll("psk-chapter"));t.activeChapter=null;var i=e.scrollTop;var s=e.offsetHeight;var n=p(r);h.call(t,n,i,s)}function p(t){var e=[];t.forEach((function(t){var r=t.getAttribute("guid");if(!r){return null}var i=t.getElementsByClassName("card psk-card")?t.getElementsByClassName("card psk-card")[0]:null;if(!i){return null}var s=u(i,e);e.push({guid:r,height:i.offsetHeight,verticalOffset:s,title:t.title})}));return e}function h(t,e,r){var i=this;var s=t.find((function(t){return e<=t.verticalOffset&&t.verticalOffset+t.height<=e+r}));if(s){i.activeChapter=s.guid;return}var n=t.filter((function(t){return e>=t.verticalOffset&&(e+r<=t.verticalOffset+t.height||e<=t.verticalOffset+t.height)}));if(n.length>0){i.activeChapter=n[n.length-1].guid;return}if(t.length>0){i.activeChapter=t[0].guid}}function u(t,e){var r=t.offsetTop;var i=t.offsetHeight;var n=e[e.length-1]?e[e.length-1]:null;if(n){var o=n.verticalOffset,a=n.height;if(o>r||o+a>r+i){var l=s(t,"psk-chapter",2);var c=e.find((function(t){return l&&t.guid===l.getAttribute("guid")}));if(c){r+=c.verticalOffset}}}return r}var d=undefined&&undefined.__decorate||function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)if(o=t[a])n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n;return s>3&&n&&Object.defineProperty(e,r,n),n};var f=t("psk_page",function(){function t(t){var r=this;e(this,t);this.hasToc=false;this.activeChapter=null;this.chapters=[];this.pageClass="";this.title="";this.subTitle="";this.componentFullyLoaded=false;this.__handleScrollEvent=function(t){var e=r;t.preventDefault();t.stopImmediatePropagation();clearTimeout(r.__isScrolling);r.__isScrolling=setTimeout((function(){c.call(e)}),100)}}t.prototype.render=function(){this.hasToc&&this._sendTableOfContentChapters();var t=r("div",{class:"toc"},r("slot",{name:"toc"}));return r("div",{class:"main-container "+this.pageClass+'"'},this.badgeText?r("div",{class:"psk-badge",style:{backgroundColor:this.badgeBackgroundColor}},r("div",{class:"psk-badge-text",style:{color:this.badgeTextColor}},this.badgeText)):null,r("div",{class:"page-title"},r("h1",null,this.title)),this.subTitle?r("div",{class:"page-subtitle"},r("h2",null,this.subTitle)):null,r("div",{class:"page-content"},this.componentFullyLoaded&&this.hasToc&&t,r("div",{class:"container"},this.componentFullyLoaded?r("div",{class:"container-content"},r("slot",null)):r("psk-ui-loader",{shouldBeRendered:true}))))};t.prototype.receiveChapters=function(t){t.stopImmediatePropagation();if(!t.detail){return}var e=Object.assign({},t.detail);var r=function(t){return e.guid===t.guid};var i=this.chapters.findIndex(r);var s=__spreadArrays(this.chapters);if(i===-1){s.push(Object.assign({},e));this.chapters=JSON.parse(JSON.stringify(s));return}s[i]=Object.assign({},e);this.chapters=JSON.parse(JSON.stringify(s))};t.prototype._checkForChapterScrolling=function(){var t=this;if(window.location.href.indexOf("chapter=")===-1){return}var e=window.location.href.split("chapter=")[1];setTimeout((function(){n(e,t.element)}),50)};t.prototype._sendTableOfContentChapters=function(){o("psk-send-toc",{bubbles:true,composed:true,cancelable:true,detail:{chapters:this.chapters,active:this.activeChapter}},true)};t.prototype.connectedCallback=function(){if(this.element.querySelector("psk-toc")!==null){var t=this.element.querySelector("psk-toc");t.setAttribute("slot","toc");this.hasToc=true}};t.prototype.componentDidLoad=function(){this.componentFullyLoaded=true;this._checkForChapterScrolling();this.element.addEventListener("scroll",this.__handleScrollEvent,true)};t.prototype.disconnectedCallback=function(){this.element.removeEventListener("scroll",this.__handleScrollEvent,true)};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});return t}());d([l()],f.prototype,"hasToc",void 0);d([a({description:"This property is used as the page title",isMandatory:false,propertyType:"string"})],f.prototype,"title",void 0);d([a({description:"This property is used as the page sub-title",isMandatory:false,propertyType:"string"})],f.prototype,"subTitle",void 0);d([a({description:"This property is the name of the table of content.",isMandatory:false,propertyType:"string"})],f.prototype,"tocTitle",void 0);d([a({description:"This property sets the text of the badge.",isMandatory:false,propertyType:"string"})],f.prototype,"badgeText",void 0);d([a({description:"This property sets the color of the badge text.",isMandatory:false,propertyType:"string"})],f.prototype,"badgeTextColor",void 0);d([a({description:"This property sets the background color of the badge.",isMandatory:false,propertyType:"string"})],f.prototype,"badgeBackgroundColor",void 0)}}}));