import{r as e,h as i}from"./p-9835b40a.js";import{T as t}from"./p-6aa7f1b2.js";import{B as n}from"./p-3f090620.js";var s=function(e,i,t,n){var s,o=arguments.length,a=o<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,t,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(o<3?s(a):o>3?s(i,t,a):s(i,t))||a);return o>3&&a&&Object.defineProperty(i,t,a),a};const o=class{constructor(i){e(this,i),this.__inputHandler=e=>{e.stopImmediatePropagation(),this.changeModel?this.changeModel.call(this,"value",e.target.value):console.warn("[psk-email-input] Function named -=changeModel=- is not defined!")},this.label=null,this.value=null,this.name=null,this.placeholder=null,this.required=!1,this.readOnly=!1,this.invalidValue=null}render(){return i("psk-input",{type:"email",label:this.label,name:this.name,value:this.value,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,invalidValue:this.invalidValue,specificProps:{onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}})}};s([n()],o.prototype,"render",null),s([t({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],o.prototype,"label",void 0),s([t({description:["Specifies the value of an psk-email-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],o.prototype,"value",void 0),s([t({description:["Specifies the name of a psk-email-input component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],o.prototype,"name",void 0),s([t({description:["Specifies a short hint that describes the expected value of an psk-email-input component"],isMandatory:!1,propertyType:"string"})],o.prototype,"placeholder",void 0),s([t({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],o.prototype,"required",void 0),s([t({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],o.prototype,"readOnly",void 0),s([t({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],o.prototype,"invalidValue",void 0);export{o as psk_email_input};