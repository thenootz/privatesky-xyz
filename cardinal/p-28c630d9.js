import{g as o}from"./p-bd5842d7.js";function t(){return t=>{const{componentWillLoad:e}=t;t.getInnerContent=function(t){const e=o(this);if(e[t]){let o=e.querySelector("link");if(o){let n=e[t].replace(o.outerHTML,"");return e[t]=o.outerHTML,n}return e[t]}console.error(`${t} is not a property`)},t.componentWillLoad=function(){const t=o(this);if(!t)return e&&e.call(this);if("undefined"!=typeof globalConfig&&"string"==typeof globalConfig.theme){let o=t.tagName.toLowerCase();return new Promise(n=>{let i="/themes/"+globalConfig.theme+"/components/"+o+"/"+o+".css";var s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href",i),(t.shadowRoot?t.shadowRoot:t).prepend(s);let l=!1,r=()=>{l||(l=!0,n(e&&e.call(this)))};s.onload=r,s.onerror=()=>{console.log(`File ${i} was not found`),r()},setTimeout(()=>{!1===l&&(l=!0,n(e&&e.call(this)))},100)})}console.error("Theme or globalConfig is not defind!")}}}export{t as C};