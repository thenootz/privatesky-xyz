import{r as s,h as t}from"./p-2972acc2.js";import{C as e}from"./p-84e4ebcb.js";import"./p-c662d4c5.js";import"./p-6b201bb2.js";import{T as o}from"./p-f4b07de4.js";var i=function(s,t,e,o){var i,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(s,t,e,o);else for(var r=s.length-1;r>=0;r--)(i=s[r])&&(c=(a<3?i(c):a>3?i(t,e,c):i(t,e))||c);return a>3&&c&&Object.defineProperty(t,e,c),c};const a=class{constructor(t){s(this,t),this.opened=!1}render(){return console.log(this.menuItems),console.log(this.opened),[t("div",{id:"backdrop",onClick:s=>{s.preventDefault(),this.opened=!this.opened}}),t("div",{class:"container"},t("ul",{class:"items"},this.menuItems.map(s=>{t("li",{onClick:()=>{this.opened=!this.opened},class:"nav-item"},s)})),t("div",{class:"toggleFloatingMenu"},t("a",{href:"#",class:"plus",onClick:s=>{s.preventDefault(),this.opened=!this.opened}},t("span",{class:"fa fa-plus"}))))]}};i([e()],a.prototype,"menuItems",void 0),i([o({description:"This property shows the state of the backdrop on the floating menu",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"opened",void 0);export{a as psk_floating_menu};