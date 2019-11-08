import{r as o,c as t,h as e}from"./p-2972acc2.js";import{C as s}from"./p-a863d93b.js";import"./p-c662d4c5.js";import"./p-6b201bb2.js";import{T as a}from"./p-f4b07de4.js";import{T as i}from"./p-5cba9b8a.js";var l=function(o,t,e,s){var a,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(o,t,e,s);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};const r=class{constructor(e){o(this,e),this.opened=!1,this.closeModal=t(this,"closeModal",7)}render(){return e("div",null,e("div",{id:"backdrop",onClick:()=>{this.closeModal.emit()}}),e("div",{id:"modal"},e("div",{class:"modal-content"},e("div",{class:"modal-header"},e("slot",{name:"title"}),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},e("span",{"aria-hidden":"true",onClick:()=>{this.closeModal.emit()}},"×"))),e("div",{class:"modal-body"},e("slot",null)),e("div",{class:"modal-footer"},e("slot",{name:"confirm_action"}),e("button",{class:"btn btn-primary",onClick:()=>{this.closeModal.emit()}},"Close")))))}};l([s(),a({description:"This is the property that gives the state of the modal if it is opened or closed. The posible values are true or false.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],r.prototype,"opened",void 0),l([i({eventName:"closeModal",description:"When this event is triggered the Application Controller should listen to this so the modal can be closed within the controller."})],r.prototype,"closeModal",void 0);export{r as psk_modal};