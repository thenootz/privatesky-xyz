import{g as t}from"./p-2972acc2.js";import{D as e,a as r}from"./p-c662d4c5.js";import{c as s}from"./p-6b201bb2.js";function c(c){return function(i,n){const{connectedCallback:o,render:p}=i;i.connectedCallback=function(){let s=this;if(t(s).hasAttribute(e)){if(!s.componentDefinitions)return s.componentDefinitions={definedProperties:[Object.assign(Object.assign({},c),{propertyName:String(n)})]},o&&o.call(s);let t=s.componentDefinitions;const e=Object.assign(Object.assign({},c),{propertyName:String(n)});if(t&&t.hasOwnProperty(r)){let s=[...t[r]];s.push(e),t[r]=[...s]}else t[r]=[e];s.componentDefinitions=Object.assign({},t)}return o&&o.call(s)},i.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[r])return p&&p.call(this);let t=this.componentDefinitions[r];t&&(t=t.reverse()),s("psk-send-props",{composed:!0,bubbles:!0,cancelable:!0,detail:t},!0)}}}export{c as T};