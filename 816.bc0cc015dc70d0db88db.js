/*! For license information please see 816.bc0cc015dc70d0db88db.js.LICENSE.txt */
(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[816],{3520:(t,e,r)=>{"use strict";r.d(e,{TQ:()=>i,Xp:()=>a});var n=[{id:1,label:"XS",number:44},{id:2,label:"S",number:46},{id:3,label:"M",number:48},{id:4,label:"L",number:50},{id:5,label:"XL",number:52}],o=[{id:1,name:"Футболка",colors:[{id:1,name:"черный",images:["/images/1/black_front.png","/images/1/black_back.png"],price:"123.00",description:'Описание для "Футболка черный"',sizes:[1,2,3]},{id:2,name:"белый",images:["/images/1/white_front.png","/images/1/white_back.png"],price:"125.00",description:'Описание для "Футболка белый"',sizes:[1,2,3,4,5]},{id:3,name:"серый",images:["/images/1/gray_front.png","/images/1/gray_back.png"],price:"120.00",description:'Описание для "Футболка серый"',sizes:[]}]},{id:2,name:"Майка",colors:[{id:1,name:"желтый",images:["/images/2/yellow_front.png","/images/2/yellow_back.png"],price:"88.00",description:'Описание для "Майка желтый"',sizes:[1,2,3,4,5]},{id:2,name:"синий",images:["/images/2/blue_front.png","/images/2/blue_back.png"],price:"89.00",description:'Описание для "Майка синий"',sizes:[2]},{id:3,name:"черный",images:["/images/2/black_front.png","/images/2/black_back.png"],price:"90.00",description:'Описание для "Майка черный"',sizes:[]}]}];function i(){return new Promise((function(t){setTimeout((function(){return t(n)}),250)}))}function a(){return new Promise((function(t){setTimeout((function(){return t(o)}),250)}))}},9211:(t,e,r)=>{"use strict";r.d(e,{H:()=>b});var n=r(4942);const o=r.p+"61f0ac0c3fcaaba7ec9228aa1729361d.png",i=r.p+"a6eb19aa82d8371898848b1aecf22cb7.png",a=r.p+"14513a37d8dfc058436c74dc1e2fcc86.png",c=r.p+"ffdb022ceb7d81f3ba0d56529f7e21d2.png",u=r.p+"2a32db92461d34af0cc43cfc4f462019.png",s=r.p+"fdb09e69e4c79acf7eddaeae380e515c.png",f=r.p+"4035f557a87ba3aafee9a2fd56333ad1.png",l=r.p+"04da5ea36a561a3441697b7abcf3ef10.png",p=r.p+"7af32df511c6c4ec91b1d29f4deb31b0.png",h=r.p+"390bb93727418ebbd83ca0c0851cc627.png",d=r.p+"586d66dbe8c803b20db9113c02e48b9d.png",g=r.p+"10e944e13579b91bef68e6fe04b5261f.png";var y,v=(y={},(0,n.Z)(y,"/1/black_front",o),(0,n.Z)(y,"/1/black_back",i),(0,n.Z)(y,"/1/white_front",a),(0,n.Z)(y,"/1/white_back",c),(0,n.Z)(y,"/1/gray_front",u),(0,n.Z)(y,"/1/gray_back",s),(0,n.Z)(y,"/2/yellow_front",f),(0,n.Z)(y,"/2/yellow_back",l),(0,n.Z)(y,"/2/blue_front",p),(0,n.Z)(y,"/2/blue_back",h),(0,n.Z)(y,"/2/black_front",d),(0,n.Z)(y,"/2/black_back",g),y),b=function(t){for(var e in v)if(t.includes(e))return v[e]}},6722:(t,e,r)=>{"use strict";r.d(e,{R:()=>o});var n=r(9468),o=function(t){return{type:n.i.SET_PRODUCTS,payload:t}}},7061:(t,e,r)=>{var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new j(n||[]);return a(i,"_invoke",{value:L(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d={};function g(){}function y(){}function v(){}var b={};l(b,u,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(Z([])));w&&w!==r&&i.call(w,u)&&(b=w);var _=v.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==n(l)&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function Z(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,a(_,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,f,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},x(k.prototype),l(k.prototype,s,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(_),l(_,f,"Generator"),l(_,u,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=Z,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:(t,e,r)=>{var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},5861:(t,e,r)=>{"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:()=>o})}}]);