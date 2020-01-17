System.register(["./p-51da6f80.system.js","./p-21057e49.system.js","./p-4cef2d74.system.js"],(function(e){"use strict";var t,i,o,s;return{setters:[function(e){t=e.r;i=e.h},function(e){o=e.T},function(e){s=e.B}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,i,o){var s=arguments.length,l=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)if(n=e[a])l=(s<3?n(l):s>3?n(t,i,l):n(t,i))||l;return s>3&&l&&Object.defineProperty(t,i,l),l};var n=e("psk_select",function(){function e(e){t(this,e);this.options=null;this.label=null;this.value=null;this.selectionType="single";this.placeholder=null;this.required=false;this.disabled=false;this.invalidValue=null}e.prototype.componentWillLoad=function(){if(this.selectionType!=="single"&&this.selectionType!=="multiple"){this.selectionType="single"}};e.prototype.render=function(){var e=this.label&&this.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();return i("div",{class:"form-group"},i("psk-label",{for:e,label:this.label}),i("select",{name:e,id:e,class:"form-control",disabled:this.disabled,required:this.required,multiple:this.selectionType==="multiple",onChange:this.__onChangeHandler.bind(this)},this.placeholder&&i("option",{disabled:true,label:this.placeholder,value:"",selected:this.value===null}),this.options&&this.options.map((function(e){var t=e.value?e.value:e.label&&e.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();var o=e.selected===true;return i("option",{selected:o,value:t,label:e.label,disabled:e.disabled})}))))};e.prototype.__onChangeHandler=function(e){e.preventDefault();e.stopImmediatePropagation();var t=e.target.value;if(this["changeModel"]){this["changeModel"].call(this,"value",t)}else{console.warn("[psk-select] Function named -=changeModel=- is not defined!")}};return e}());l([s()],n.prototype,"options",void 0);l([o({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],n.prototype,"label",void 0);l([o({description:["Specifies the value of a psk-select component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],n.prototype,"value",void 0);l([o({description:["Specifies the type of the psk-select component.",'There are two possible values, "single" and "multiple". If no value is provided, "single" is assumed.'],isMandatory:false,propertyType:"string",defaultValue:"single"})],n.prototype,"selectionType",void 0);l([o({description:["Specifies a short hint that describes the expected value of an psk-date-input component"],isMandatory:false,propertyType:"string"})],n.prototype,"placeholder",void 0);l([o({description:["Specifies that at least one option must be selected before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],n.prototype,"required",void 0);l([o({description:["\tSpecifies that the component is disabled. Most of the times is used within conditional formatting of components.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],n.prototype,"disabled",void 0);l([o({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:false,propertyType:"boolean"})],n.prototype,"invalidValue",void 0)}}}));