import{r as e,h as t,g as i}from"./p-2eb42df6.js";import"./p-acb9d1e1.js";import"./p-7111d76e.js";import{T as o}from"./p-f3fbe684.js";import{C as s}from"./p-6a61ad0f.js";import{B as n}from"./p-64525f46.js";var r=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const a=class{constructor(t){e(this,t),this.options=null,this.label=null,this.value=null,this.name=null,this.required=!1,this.invalid=!0}onChangeRadioHandler(e){e.preventDefault(),e.stopImmediatePropagation(),e.detail&&e.detail.value&&this._host.querySelectorAll("psk-radio").forEach(t=>{const i=t.getElementsByTagName("input")[0];i.value===e.detail.value?(this.value=e.detail.value,this.__updateModel.call(this),i.checked=!0):i.checked=!1})}render(){return t("div",{class:"form-group"},t("psk-label",{for:this.name,label:this.label}),t("div",{id:"psk-radio-group",class:"form-group"},this.options&&this.options.map(e=>{const i=e.name?e.name:e.label&&e.label.replace(/\s/g,"").toLowerCase();return t("psk-radio",Object.assign({},e,{name:i}))}),t("slot",null)))}__updateModel(){this.changeModel?this.changeModel.call(this,"value",this.value):console.warn("[psk-radio-group] Function named -=changeModel=- is not defined!")}get _host(){return i(this)}};r([s(),n()],a.prototype,"options",void 0),r([o({description:['By filling out this property, the component will display above the group, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],a.prototype,"label",void 0),r([o({description:["Specifies the selected value of a psk-radio component inside the group.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],a.prototype,"value",void 0),r([o({description:["Specifies the name of a psk-radio-group component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],a.prototype,"name",void 0),r([o({description:["Specifies that a psk-radio inside the group must be checked before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"required",void 0),r([o({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean",specialNote:"For the moment, there is no visual implelentation for this attribute, but it will be in a further iteration."})],a.prototype,"invalid",void 0);export{a as psk_radio_group};