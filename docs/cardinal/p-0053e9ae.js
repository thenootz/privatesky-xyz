import{g as e,B as n}from"./p-bedaeec3.js";function o(){return o=>{n.cmpDidLoad=!0,n.cmpDidUnload=!0;const{componentDidLoad:t,componentDidUnload:i}=o;o.componentDidLoad=function(){const n=e(this);if(!n)return;let o=n.tagName.toLowerCase();if("undefined"!=typeof globalConfig&&"string"==typeof globalConfig.theme){let e="/themes/"+globalConfig.theme+"/components/"+o+"/"+o+".css";var i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("href",e),n.shadowRoot.prepend(i)}else console.error("Theme or globalConfig is not defind!");return t&&t.call(this)},o.componentDidUnload=function(){return i&&i.call(this)}}}export{o as C};