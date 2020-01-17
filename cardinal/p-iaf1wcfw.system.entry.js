System.register(["./p-51da6f80.system.js","./p-21057e49.system.js","./p-4cef2d74.system.js"],(function(e){"use strict";var t,i,n,o;return{setters:[function(e){t=e.r;i=e.h},function(e){n=e.T},function(e){o=e.B}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)if(a=e[l])s=(o<3?a(s):o>3?a(t,i,s):a(t,i))||s;return o>3&&s&&Object.defineProperty(t,i,s),s};var a=e("psk_input",function(){function e(e){var i=this;t(this,e);this.__keyUpHandler=function(e){e.stopImmediatePropagation();var t=e.target.value;if(i["changeModel"]){i["changeModel"].call(i,"value",t)}else{console.warn("[psk-input] Function named -=changeModel=- is not defined!")}};this.type="text";this.label=null;this.value=null;this.name=null;this.placeholder=null;this.required=false;this.readOnly=false;this.invalidValue=null;this.specificProps={}}e.prototype.render=function(){var e=this.invalidValue===null?"":this.invalidValue?"is-invalid":"is-valid";var t=this.name?this.name:this.label&&this.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();return i("div",{class:"form-group"},this.label&&i("psk-label",{for:t,label:this.label}),i("input",Object.assign({type:this.type,value:this.value,name:t,class:"form-control "+e,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,onKeyUp:this.__keyUpHandler.bind(this)},this.specificProps)))};return e}());s([o()],a.prototype,"render",null);s([n({description:["Specifies the type psk-input to display.",'The full list of type and explanations can be found at: <a href="https://www.w3schools.com/html/html_form_input_types.asp">HTML Input Types</a>'],isMandatory:false,propertyType:"string",defaultValue:"text",specialNote:'If no value is provided, "text" is assumed'})],a.prototype,"type",void 0);s([n({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],a.prototype,"label",void 0);s([n({description:["Specifies the value of an psk-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],a.prototype,"value",void 0);s([n({description:["Specifies the name of a psk-input component. It is used along with the psk-label component."],isMandatory:false,propertyType:"string"})],a.prototype,"name",void 0);s([n({description:["Specifies a short hint that describes the expected value of an psk-input component"],isMandatory:false,propertyType:"string"})],a.prototype,"placeholder",void 0);s([n({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean"})],a.prototype,"required",void 0);s([n({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean"})],a.prototype,"readOnly",void 0);s([n({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:false,propertyType:"boolean"})],a.prototype,"invalidValue",void 0)}}}));