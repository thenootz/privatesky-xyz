import{r as s,h as t}from"./p-d76f0ca1.js";const i=class{constructor(t){s(this,t)}normalize(s){return s?s.substr(0,1).toUpperCase()+s.substr(1).toLowerCase():""}render(){if(console.log(this.match),this.match&&this.match.params.name)return t("div",{class:"app-profile"},t("p",null,"Hello! My name is ",this.normalize(this.match.params.name),". My last name is ",this.lastName," and my full Name is ",this.getMyName(this.match.params.name,this.lastName)))}static get style(){return".app-profile{padding:10px}"}};export{i as app_profile};