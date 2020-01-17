import{r as t,h as e}from"./p-9835b40a.js";import{T as s}from"./p-6aa7f1b2.js";const r=class{constructor(e){t(this,e),this.errorLoadingPage=!1}watchHandler(t){this.getPageContent(t)}componentWillLoad(){this.getPageContent(this.pageUrl)}getPageContent(t){let e=new XMLHttpRequest;e.open("GET",t),e.onload=()=>{200!=e.status?this.errorLoadingPage=!0:(this.errorLoadingPage=!1,this.pageContent=e.responseText)},e.onerror=()=>{this.errorLoadingPage=!0},e.send()}render(){return this.errorLoadingPage?e("h4",null,`Page ${this.pageUrl} could not be loaded!`):e("div",{class:"page_content",innerHTML:this.pageContent})}static get watchers(){return{pageUrl:["watchHandler"]}}};!function(t,e,s,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o<3?a(i):o>3?a(e,s,i):a(e,s))||i);o>3&&i&&Object.defineProperty(e,s,i)}([s({description:["This property is the url for the page that needs to be loaded.","When this component loads a get http request will be issued and the cotent of that url will be rendered if it can be accessed."],isMandatory:!0,propertyType:"string"})],r.prototype,"pageUrl",void 0);export{r as psk_page_loader};