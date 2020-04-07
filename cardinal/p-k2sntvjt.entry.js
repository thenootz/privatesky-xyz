import{r as e,h as t}from"./p-2eb42df6.js";import"./p-acb9d1e1.js";import"./p-7111d76e.js";import{T as o}from"./p-f3fbe684.js";import{C as i}from"./p-b40f893a.js";import{B as s}from"./p-64525f46.js";var r=function(e,t,o,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(r<3?s(a):r>3?s(t,o,a):s(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};const a=class{constructor(t){e(this,t),this.label=null,this.for=null}render(){return t("label",{class:"col-form-label",htmlFor:this.for},this.label&&this.label,t("slot",null))}};r([i(),s(),o({description:["Specifies the label to be displayed.","If this attribute is not provided, the component will display the content of the component as label."],isMandatory:!1,propertyType:"string"})],a.prototype,"label",void 0),r([o({description:["Specifies which form element a label is bound to.","Usually, this attribute comes in pair with another component, and is used by the browser to group the content in a specific order to be read by screen readers.","The screen readers are used by the people with disabilities in order to have the possibility to navigate a website.",'An example of this pair of components can be found in the <a href="#live-examples">Examples section</a>.'],isMandatory:!1,propertyType:"string"})],a.prototype,"for",void 0);export{a as psk_label};