System.register(["./p-3369a689.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-609d210d.system.js","./p-61ba0e70.system.js","./p-6aba9852.system.js"],(function(e){"use strict";var t,i,o,s,n;return{setters:[function(e){t=e.r;i=e.h},function(){},function(){},function(e){o=e.T},function(e){s=e.C},function(e){n=e.B}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,i,o){var s=arguments.length,n=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,i,o);else for(var c=e.length-1;c>=0;c--)if(a=e[c])n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n;return s>3&&n&&Object.defineProperty(t,i,n),n};var c=e("psk_checkbox",function(){function e(e){t(this,e);this.label=null;this.name=null;this.checkboxLabel=null;this.required=false;this.checked=false;this.value="unchecked";this.checkedValue=null;this.uncheckedValue=null}e.prototype.render=function(){var e=this.name?this.name:this.checkboxLabel?this.checkboxLabel.replace(/\s/g,"").toLowerCase():"";return i("div",{class:"form-group"},i("psk-label",{label:this.label}),i("div",{class:"form-group"},i("div",{class:"form-check form-check-inline"},i("input",{type:"checkbox",class:"form-check-input",id:e,name:e,required:this.required,checked:this.checked,onChange:this.__handleCheckbox.bind(this),value:this.value}),i("psk-label",{for:e,label:this.checkboxLabel}))))};e.prototype.__handleCheckbox=function(e){this.checked=e.target.checked;if(e.target.checked){this.value=this.checkedValue?this.checkedValue:"checked"}else{this.value=this.uncheckedValue?this.uncheckedValue:"unchecked"}if(this["changeModel"]){this["changeModel"].call(this,"value",this.value)}else{console.warn("[psk-input] Function named -=changeModel=- is not defined!")}};return e}());a([s(),n()],c.prototype,"render",null);a([o({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],c.prototype,"label",void 0);a([o({description:["Specifies the name of a psk-checkbox component. It is used along with the psk-label component."],isMandatory:false,propertyType:"string"})],c.prototype,"name",void 0);a([o({description:['By filling out this property, the component will display near the checkbox, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],c.prototype,"checkboxLabel",void 0);a([o({description:["Specifies that the psk-checkbox must be checked before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],c.prototype,"required",void 0);a([o({description:["This property indicates the status of the component, if it checked or not. Also, by using this property, you can set the default value of the psk-checkbox, in case you need it to be checked."],isMandatory:false,propertyType:"boolean"})],c.prototype,"checked",void 0);a([o({description:["Specifies the value of a psk-checkbox component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],c.prototype,"value",void 0);a([o({description:["Specifies the value that will be assigned to the component when it is checked."],isMandatory:false,propertyType:"string"})],c.prototype,"checkedValue",void 0);a([o({description:["Specifies the value that will be assigned to the component when it is unchecked."],isMandatory:false,propertyType:"string"})],c.prototype,"uncheckedValue",void 0)}}}));