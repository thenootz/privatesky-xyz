import{r as t,c as s,h as e,g as r}from"./p-bedaeec3.js";const i=new class{constructor(){this.controllers={},this.pendingControllerRequests={}}registerController(t,s){this.controllers[t]=s,this._fullFillPreviousRequests(t)}_fullFillPreviousRequests(t){if(this.pendingControllerRequests[t])for(;this.pendingControllerRequests[t].length;)this.pendingControllerRequests[t].pop().resolve(this.controllers[t])}getController(t){return new Promise((s,e)=>{this.controllers[t]?s(this.controllers[t]):(this.pendingControllerRequests[t]||(this.pendingControllerRequests[t]=[]),this.pendingControllerRequests[t].push({resolve:s,reject:e}))})}},o=class{constructor(e){t(this,e),this.mobileLayout=!1,this.componentCode="",this.hasSlot=!1,this.controller?i.getController(this.controller).then(t=>{new t(this.host)}):console.log("No controller added to app-root"),this.routeChangedEvent=s(this,"routeChanged",7),this.cfReadyEvent=s(this,"controllerFactoryIsReady",7)}componentWillLoad(){this.cfReadyEvent.emit(i);let t=this.host.innerHTML;(t=t.replace(/\s/g,"")).length&&(this.hasSlot=!0)}render(){let t=e("psk-default-renderer",{historyType:this.historyType});return this.hasSlot?e("slot",null):t}get host(){return r(this)}};export{o as psk_app_root};