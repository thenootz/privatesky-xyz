import{r as e,h as t,H as s,g as i}from"./p-9eaba2bd.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as r}from"./p-76b560d9.js";import{C as l}from"./p-ea3b4b27.js";import{B as n}from"./p-691f45fe.js";var a=function(e,t,s,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(l<3?r(n):l>3?r(t,s,n):r(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n};const o=class{constructor(t){e(this,t),this.__fileChangeHandler=e=>{let t=Array.from(e.target.files);if(0===t.length)return;let s=new Event(this.eventName,{bubbles:!0,composed:!0,cancelable:!0}),i=new FileReader;i.onload=e=>{let t=e.target.result;fetch(t).then(e=>e.arrayBuffer()).then(e=>{s.data=e,this.element.dispatchEvent(s)}),this.src=t},i.readAsDataURL(t[0])},this.__clickHandler=e=>{this.element.querySelector("input").dispatchEvent(new MouseEvent("click")),e.stopImmediatePropagation()},this.imageSource=null,this.src=null,this.alt=null,this.placeholder="click here to select source",this.label=null,this.eventName="change"}componentWillLoad(){this.srcUpdate(this.src)}render(){return t(s,{class:"form-group"},this.label&&t("psk-label",{label:this.label}),t("div",{class:"outer-container",onClick:this.__clickHandler.bind(this)},null!=this.imageSource?t("div",{class:"display-img-container"},t("img",{src:this.imageSource,alt:this.alt}),t("psk-icon",{icon:"pencil"})):t("psk-label",{label:this.placeholder})),t("input",{type:"file",class:"form-control-file form-control-sm",style:{display:"none"},onChange:this.__fileChangeHandler.bind(this)}))}srcUpdate(e){this.imageSource=e}get element(){return i(this)}static get watchers(){return{src:["srcUpdate"]}}};a([l(),n()],o.prototype,"modelHandler",void 0),a([r({description:["Represent the src of the image that need to be displayed"],isMandatory:!0,propertyType:"string"})],o.prototype,"src",void 0),a([r({description:["Represent the alternative text that will be displayed if the image was not able to be loaded"],isMandatory:!1,propertyType:"string"})],o.prototype,"alt",void 0),a([r({description:["Represent the text that will be displayed as placeholder when src attribute is not set"],isMandatory:!1,propertyType:"string"})],o.prototype,"placeholder",void 0),a([r({description:["Represent the text that will be used as label for the input"],isMandatory:!1,propertyType:"string"})],o.prototype,"label",void 0),a([r({description:["Represent the event type that will be thrown when user changes the image src"],isMandatory:!1,propertyType:"string"})],o.prototype,"eventName",void 0);export{o as psk_img_input}