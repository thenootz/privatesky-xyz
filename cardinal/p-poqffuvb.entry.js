import{r as e,h as t,g as o}from"./p-9835b40a.js";import{T as n}from"./p-df30e3e9.js";import"./p-72de6249.js";import{C as r}from"./p-ec895615.js";var s=function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};const i=class{constructor(t){e(this,t),this.layout=null}render(){let e=this.__host.children.length;return Array.from(this.__host.children).forEach((function(t){"link"===t.tagName.toLowerCase()&&e--})),t("psk-grid",{columns:e,layout:this.layout},t("slot",null))}get __host(){return o(this)}};s([r()],i.prototype,"__host",void 0),s([n({isMandatory:!0,propertyType:"string",description:["This attribute will set the layout for the components inside the grid, according to the number of columns.",'Example: <psk-grid columns="3" layout="xs=[12,12,12] s=[6,6,12] m=[3,3,6] l=[3,4,5]" xl=[3,4,5]>',"There are 5 possible breakpoints, according to Bootstrap documentation: xs, s, m, l and xl. For each breakpoint you want to use, the number of the values must be the same with the number of the columns, otherwise, the breakpoint will be ignored.",'Each breakpoint will be written in the following manner: breakpoint=[value1, value2,... valueN], where N is the number of columns and the value accepts numbers between 0 and 12 included, or the string "auto".',"If a value is 0, then the element for that column will be hidden. If a value is auto, it will have no bootstrap class and will inherit the design.","If any other value is set, the breakpoint will be ignored even if it has the same number of columns."],defaultValue:"null"})],i.prototype,"layout",void 0);export{i as psk_form_row};