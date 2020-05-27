import{r as t,h as e}from"./p-1c0c10bb.js";import{C as i}from"./p-c1dd1c78.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as s}from"./p-24eba9a2.js";import{B as o}from"./p-8721f972.js";var a=function(t,e,i,s){var o,a=arguments.length,n=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var p=t.length-1;p>=0;p--)(o=t[p])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};const n=class{constructor(e){t(this,e),this.__keyUpHandler=t=>{t.stopImmediatePropagation(),this.modelHandler.updateModel("value",t.target.value)},this.type="text",this.label=null,this.value=null,this.name=null,this.placeholder=null,this.required=!1,this.readOnly=!1,this.invalidValue=null,this.dataDateFormat=null,this.specificProps={}}componentWillLoad(){}render(){const t=null===this.invalidValue?"":this.invalidValue?"is-invalid":"is-valid",i=this.name?this.name:this.label&&this.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();return e("div",{class:"form-group"},this.label&&e("psk-label",{for:i,label:this.label}),e("input",Object.assign({type:this.type,value:this.value,"data-date":this.dataDate,name:i,"data-date-format":this.dataDateFormat,class:`form-control ${t} ${this.dateClass?this.dateClass:null}`,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,onKeyUp:this.__keyUpHandler.bind(this)},this.specificProps)))}};a([i(),o()],n.prototype,"modelHandler",void 0),a([s({description:["Specifies the type psk-input to display.",'The full list of type and explanations can be found at: <a href="https://www.w3schools.com/html/html_form_input_types.asp">HTML Input Types</a>'],isMandatory:!1,propertyType:"string",defaultValue:"text",specialNote:'If no value is provided, "text" is assumed'})],n.prototype,"type",void 0),a([s({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],n.prototype,"label",void 0),a([s({description:["Specifies the value of an psk-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],n.prototype,"value",void 0),a([s({description:["Specifies the name of a psk-input component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],n.prototype,"name",void 0),a([s({description:["Specifies a short hint that describes the expected value of an psk-input component"],isMandatory:!1,propertyType:"string"})],n.prototype,"placeholder",void 0),a([s({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean"})],n.prototype,"required",void 0),a([s({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean"})],n.prototype,"readOnly",void 0),a([s({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],n.prototype,"invalidValue",void 0),a([s({isMandatory:!1,description:"",propertyType:"string"})],n.prototype,"dataDateFormat",void 0);export{n as psk_input}