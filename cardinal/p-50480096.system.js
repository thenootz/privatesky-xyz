System.register([],function(e){"use strict";return{execute:function(){e({c:u,g:h,s:f});var a=e("a","definedProperties");var r=e("b","definedEvents");var t=e("f","definedControllers");var n=e("D","data-define-props");var i=e("d","data-define-events");var o=e("e","data-define-controller");var l=e("h","Copy to clipboard");var c=e("T","Copied!");var v=e("L","numeric");var d=e("P",{startTag:/<([a-z]+|-*)>/,endTag:/<\/([a-z]+|-*)>/,inlineTag:/.*<([a-z]+|-*)>.*<\/([a-z]+|-*)>.*/});var s=e("A",{view:{value:"eye",color:"rgba(108, 192, 145, 1)"},edit:{value:"edit",color:"#007bff"},cancel:{value:"close",color:"#dc3545"},bid:{value:"gavel"},calendar:{value:"calendar-check-o"}});function f(e,a){var r=e.replace(/( |:|\/|\.)/g,"-").toLowerCase();var t=a.querySelector("#"+r);if(!t){return}t.scrollIntoView({behavior:"smooth"});var n=window.location.href;var i="?";if(n.indexOf("chapter=")!==-1){n=window.location.href.split("chapter=")[0];if(n.length>0){i=n[n.length-1];n=n.substring(0,n.length-1)}}else{i=n.indexOf("?")>0?"&":"?"}var o=i+"chapter=";window.history.pushState({},"",""+n+o+r)}function u(e,a,r){if(r===void 0){r=false}var t=new CustomEvent(e,a);if(r){document.dispatchEvent(t)}}function h(e,a,r){var t=null;while(e){if(e.matches(a)){t=e;break}else if(r&&e.matches(r)){break}e=e.parentElement}return t}}}});