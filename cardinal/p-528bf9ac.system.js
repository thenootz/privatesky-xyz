System.register([],function(e){"use strict";return{execute:function(){var t=function(){function e(){this.controllers={};this.pendingControllerRequests={}}e.prototype.registerController=function(e,t){this.controllers[e]=t;this._fullFillPreviousRequests(e)};e.prototype._fullFillPreviousRequests=function(e){if(this.pendingControllerRequests[e]){while(this.pendingControllerRequests[e].length){var t=this.pendingControllerRequests[e].pop();t.resolve(this.controllers[e])}}};e.prototype.getController=function(e){var t=this;var r=new Promise(function(r,n){if(t.controllers[e]){r(t.controllers[e])}else{if(!t.pendingControllerRequests[e]){t.pendingControllerRequests[e]=[]}t.pendingControllerRequests[e].push({resolve:r,reject:n})}});return r};return e}();var r=e("C",new t)}}});