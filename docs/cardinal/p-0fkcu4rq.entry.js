import{r as t,h as s}from"./p-bedaeec3.js";const e=class{constructor(s){t(this,s),this.title="",this.decoratorEvents=[]}receivedEventsDescription(t){const s=t.detail;t.stopImmediatePropagation(),s&&s.length>0&&(this.decoratorEvents=JSON.parse(JSON.stringify(s)))}render(){let t=this.decoratorEvents.map(t=>s("psk-hoc",{title:t.eventName},s("p",{class:"subtitle"},s("i",null,`${t.eventName}: CustomEvent`)),s("p",null,t.description),t.specialNote?s("p",null,s("b",null,"Note: ",t.specialNote)):null));return s("psk-chapter",{title:this.title,id:this.title.replace(/( |:|\/)/g,"-").toLowerCase()},t)}};export{e as psk_event_descriptor};