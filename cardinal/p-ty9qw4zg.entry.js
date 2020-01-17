import{r as t,h as e,c as i,g as s}from"./p-9835b40a.js";import{T as o,f as r,s as a,e as c,g as n}from"./p-6aa7f1b2.js";import{T as h}from"./p-51e7291b.js";import{C as l}from"./p-ec895615.js";var p=function(t,e,i,s){var o,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const d=class{constructor(e){t(this,e),this.title="",this.id=""}render(){const t=this.id.trim().replace(/(\s+|:+|\/+)/g,"-").toLowerCase();let i=null;return this.title&&(i=e("div",{class:"card-header"},e("h5",null,this.title,t.length>0?e("psk-copy-clipboard",{id:t},"#"):null),e("slot",{name:"toolbar"}))),e("div",{class:"card psk-card",id:t},i,e("div",{class:"card-body"},e("slot",null)))}};p([l(),o({description:"This property is the title that will be rendered in title specific format.",isMandatory:!1,propertyType:"string"})],d.prototype,"title",void 0),p([o({description:"This property is the id which will be attached to the component so finding the component in the DOM should be simplified.\n\t\t\t\t\tThe id is also simplifying the navigation to that section of the page where the component is rendered.\n\t\t\t\t\tSpecial characters(Example : ':','/') will be replaced with dash('-').",isMandatory:!1,propertyType:"string"})],d.prototype,"id",void 0);var f=function(t,e,i,s){var o,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const y=class{constructor(e){t(this,e),this.title="",this.reportedToc=!1,this.guid=(()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})))(),this.chapterInfo={title:this.title,guid:this.guid,children:[]},this.sendChapter=i(this,"psk-send-chapter",5)}componentDidLoad(){this.reportedToc||this.sendChapter.emit(this.chapterInfo)}receivedChapter(t){if(t.path&&t.path[0]&&s(this)!==t.path[0]){if(t.stopImmediatePropagation(),this.chapterInfo.children.length>0){let e=!1;this.chapterInfo.children.forEach(i=>{i.guid===t.detail.guid&&(i.children=t.detail.children,e=!0)}),e||this.chapterInfo.children.push(t.detail)}else this.chapterInfo.children.push(t.detail);this.sendChapter.emit(this.chapterInfo),this.reportedToc=!0}}render(){return e("psk-card",{title:this.title,id:this.title.replace(/( |:|\/|\.)/g,"-").toLowerCase()},e("slot",null))}};f([l(),o({description:"This property is the title, that will be used in order to create a psk-card ",isMandatory:!1,propertyType:"string"})],y.prototype,"title",void 0),f([h({eventName:"psk-send-chapter",description:["This event is emitted the moment a psk-chapter with a title is created.","This event contains the title of the chapter as well as all the titles of it's subchapters."]})],y.prototype,"sendChapter",void 0);var u=function(t,e,i,s){var o,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const x=class{constructor(e){t(this,e),this.id="",this.chapterToken="",this.getHistoryType=i(this,"getHistoryType",7)}componentWillLoad(){this.getHistoryType.emit((t,e)=>{if(t)console.log(t);else switch(e){case"browser":case"hash":this.chapterToken="?chapter=";break;case"query":this.chapterToken="&chapter="}})}_copyToClipboardHandler(t){try{let e=window.location.href;-1!==window.location.href.indexOf(this.chapterToken)&&(e=window.location.href.split(this.chapterToken)[0]),navigator.clipboard.writeText(`${e}${this.chapterToken}${t}`);const i=this.element.querySelector(".copy-tooltip");i.innerHTML=r,i.setAttribute("class","copy-tooltip copied"),a(t,c(this.element,"psk-page"))}catch(e){console.error(e)}}_resetTooltip(){const t=this.element.querySelector(".copy-tooltip");t.innerHTML=n,t.setAttribute("class","copy-tooltip")}_isCopySupported(){let t=!!document.queryCommandSupported;return["copy","cut"].forEach(e=>{t=t&&!!document.queryCommandSupported(e)}),t}render(){const t=this.id.trim().replace(/( |:|\/|\.)/g,"-").toLowerCase();if(0!==t.length&&this._isCopySupported())return e("div",{class:"tooltip_container",onClick:e=>{e.stopImmediatePropagation(),this._copyToClipboardHandler(t)},onMouseOut:()=>{this._resetTooltip()}},e("a",{class:"mark",href:`#${t}`,onClick:t=>{t.preventDefault()}},e("slot",null)),e("span",{class:"copy-tooltip"},n))}get element(){return s(this)}};u([l(),h({eventName:"getHistoryType",controllerInteraction:{required:!0},description:"This event gets the history type in order to see what identificator to use for the selected chapter Token.\n                  The three types of token that can be returned are : browser, hash or query."})],x.prototype,"getHistoryType",void 0),u([o({description:"This property is the id of the textzone that will be copied to the clipboard.\n                  It is necessary (but not mandatory) so the URL can be copied in a simplified fashion.\n                  Special characters(Example : ':','/') will be replaced with dash('-').",isMandatory:!1,propertyType:"string"})],x.prototype,"id",void 0);export{d as psk_card,y as psk_chapter,x as psk_copy_clipboard};