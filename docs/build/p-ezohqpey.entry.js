import{r as s,h as e}from"./p-d76f0ca1.js";const t=class{constructor(e){s(this,e)}componentWillLoad(){this.stepProperties||(this.stepProperties={csbType:"",stepPhase:"csb-type"},this.onPropertiesChange(this.stepProperties))}handleInputChange(s){this.stepProperties.csbType=s.target.value,this.onPropertiesChange(this.stepProperties)}render(){return e("div",{class:"content clearfix"},e("section",{role:"tabpanel",class:"body"},e("div",{class:"inner"},e("div",{class:"wizard-header"},e("h3",{class:"heading"},"CSB Type")),e("div",{class:"form-row"},e("div",{class:"form-holder form-holder-2"},e("label",{htmlFor:"csb-type"},"Enter the type of your CSB"),e("input",{type:"text",name:"csb-type",id:"csb-type",class:"form-control",placeholder:"E.g. Password, Financial, Health",value:this.stepProperties.csbType,onKeyUp:this.handleInputChange.bind(this),required:!0}))))))}};export{t as select_csb_type};