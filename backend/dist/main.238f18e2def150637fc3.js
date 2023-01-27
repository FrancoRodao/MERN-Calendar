!function(){"use strict";var e,t,n,r,o,i={1797:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(7840),o={login:"/auth/login",register:"/auth/register",logout:"/auth/logout",renewToken:"/auth/renewToken"},i={login:function(e,t){return r.Z.post(o.login,{email:e,password:t})},register:function(e,t,n){return r.Z.post(o.register,{name:e,email:t,password:n})},logout:function(){return r.Z.delete(o.logout)},renewToken:function(){return r.Z.get(o.renewToken)},authEndPoints:o}},7840:function(e,t,n){n(1539),n(8674),n(7727);var r=n(2132),o=n(9669),i=n.n(o),a=n(8091),u=n(7865),c=n(1797),s=i().create({baseURL:"https://mern-calendar-pmix.onrender.com/api",withCredentials:!0});s.interceptors.request.use((function(e){var t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),function e(){var t=s.interceptors.response.use((function(e){return e}),(function(n){if("Network Error"!==n.message)return s.interceptors.response.eject(t),n.response.config.url===c.e.authEndPoints.login||n.response.config.url===c.e.authEndPoints.register||401!==n.response.status?Promise.reject(n):c.e.renewToken().then((function(e){var t=e.data.accessToken;return n.response.config.Authorization="Bearer ".concat(t),localStorage.setItem("accessToken",t),s(n.response.config)})).catch((function(e){return console.log(e.response),r.Am.error("Try to re-authenticate"),a.Z.dispatch((0,u.dg)()),Promise.reject(e)})).finally(e);r.Am.error("Failed to connect to the server")}))}(),t.Z=s},4171:function(e,t,n){n.d(t,{Q:function(){return r}});var r={FAILED_TO_LOAD_EVENTS:"Failed to load events, contact an administrator",UNEXPECTED_ERROR:"Unexpected error, contact an administrator",SAME_PASSWORDS:"Passwords must be the same"}},8224:function(e,t,n){var r=n(3935),o=n(7294),i=n(2132),a=(n(1708),n(9226)),u=n(3727),c=n(6550),s=n(7865),l=(n(6992),n(1539),n(8674),n(8783),n(3948),n(5697)),f=n.n(l),p=n(684),d=n(383),v=n(5893);function h(){return(0,v.jsx)("div",{children:"page not found"})}function b(){return(0,v.jsx)("div",{children:"Wait please..."})}n(7941),n(2772),n(2526),n(7327),n(5003),n(4747),n(9337);var g=["Component","isAuthenticated","path"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){var t=e.Component,n=e.isAuthenticated,r=e.path,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,g);return(0,v.jsx)(v.Fragment,{children:n?(0,v.jsx)(c.l_,{to:"/"}):(0,v.jsx)(c.AW,m({path:r,component:t},o))})}j.propTypes={Component:f().elementType,isAuthenticated:f().bool,path:f().string};var w=["Component","isAuthenticated","path"];function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){var t=e.Component,n=e.isAuthenticated,r=e.path,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,w);return(0,v.jsx)(v.Fragment,{children:n?(0,v.jsx)(c.AW,E({path:r,component:t},o)):(0,v.jsx)(c.l_,{to:"/login"})})}k.propTypes={Component:f().elementType,isAuthenticated:f().bool,path:f().string};var A=(0,p.ZP)((function(){return n.e(793).then(n.bind(n,5793))}),{fallback:(0,v.jsx)(b,{})}),x=(0,p.ZP)((function(){return n.e(424).then(n.bind(n,1424))}),{fallback:(0,v.jsx)(b,{})}),C=(0,p.ZP)((function(){return Promise.all([n.e(267),n.e(850),n.e(591),n.e(659),n.e(655),n.e(1),n.e(703)]).then(n.bind(n,9069))}),{fallback:(0,v.jsx)(b,{})});function T(){var e=(0,a.I0)(),t=(0,c.TH)();(0,o.useEffect)((function(){return e((0,d.B2)())}),[t.pathname,e]);var n=(0,a.v9)((function(e){return e.auth})),r=n.checking,i=n.uid,u=!r&&null!=i;return r?(0,v.jsx)(b,{}):(0,v.jsxs)(c.rs,{children:[(0,v.jsx)(k,{Component:C,path:"/",isAuthenticated:u,exact:!0}),(0,v.jsx)(j,{Component:x,path:"/login",isAuthenticated:u}),(0,v.jsx)(j,{Component:A,path:"/register",isAuthenticated:u}),(0,v.jsx)(c.AW,{path:"*",children:(0,v.jsx)(h,{})})]})}function D(){var e=(0,a.I0)();(0,o.useEffect)((function(){e((0,s.r9)())}),[e]);var t=(0,c.EN)(T);return(0,v.jsx)(u.VK,{children:(0,v.jsx)(t,{})})}T.propTypes={location:f().object.isRequired};var L=n(8091);function V(){return(0,v.jsxs)(a.zt,{store:L.Z,children:[(0,v.jsx)(i.Ix,{}),(0,v.jsx)(D,{}),(0,v.jsx)("div",{id:"modal-root"})]})}r.render((0,v.jsx)(V,{}),document.getElementById("root"))},7865:function(e,t,n){n.d(t,{Y8:function(){return s},r9:function(){return f},dg:function(){return d},Lk:function(){return h}}),n(1539),n(8674),n(5666);var r=n(9883),o=n(4171),i=n(1797),a=n(383);function u(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,c,"next",e)}function c(e){u(i,r,o,a,c,"throw",e)}a(void 0)}))}}var s=function(e,t){return function(n){i.e.login(e,t).then((function(e){n(l(e.data.user._id,e.data.user.name)),localStorage.setItem("accessToken",e.data.accessToken)})).catch((function(e){var t;return null!==(t=e.response)&&void 0!==t&&t.data&&n((0,a.L4)(e.response.data.msg)),e}))}},l=function(e,t){return{type:r.V.authLogin,payload:{uid:e,name:t}}},f=function(){return function(){var e=c(regeneratorRuntime.mark((function e(t){var n,r,u,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.getItem("accessToken")){e.next=10;break}return e.next=4,i.e.renewToken();case 4:n=e.sent,r=n.data,t(l(r._id,r.name)),localStorage.setItem("accessToken",r.accessToken),e.next=11;break;case 10:t(d());case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t((0,a.L4)((null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u||null===(c=u.data)||void 0===c?void 0:c.msg)||o.Q.UNEXPECTED_ERROR));case 16:t(p());case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()},p=function(){return{type:r.V.authCheckingFinish}},d=function(){return function(e){localStorage.getItem("accessToken")&&localStorage.removeItem("accessToken"),i.e.logout().then((function(t){return t.data.ok&&e(v())})).catch((function(e){return e}))}},v=function(){return{type:r.V.authLogout}},h=function(e,t,n){return function(){var r=c(regeneratorRuntime.mark((function r(o){var u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.e.register(e,t,n);case 3:r.next=9;break;case 5:return r.prev=5,r.t0=r.catch(0),null!==(u=r.t0.response)&&void 0!==u&&u.data&&o((0,a.L4)(r.t0.response.data.msg)),r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,5]])})));return function(e){return r.apply(this,arguments)}}()}},383:function(e,t,n){n.d(t,{L4:function(){return o},B2:function(){return i},uU:function(){return a},Cg:function(){return u}});var r=n(9883),o=function(e){return{type:r.V.uiSetError,payload:{msg:e}}},i=function(){return{type:r.V.uiClearError}},a=function(){return{type:r.V.uiOpenModal}},u=function(){return{type:r.V.uiCloseModal,payload:{}}}},8091:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(3894),o=n(4890),i=(n(7941),n(2526),n(7327),n(5003),n(4747),n(9337),n(9883));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={error:{state:!1,msg:""},modal:{isModalOpen:!1}};function l(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(2222),n(1249),n(1817),n(1539),n(2165),n(6992),n(8783),n(3948),n(1038),n(7042);var h={events:[],activeEvent:null,activeSlot:null};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={checking:!0,uid:null,name:null},O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.qC,j=(0,o.md)(r.Z),w=(0,o.UY)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.V.uiSetError:return u(u({},e),{},{error:{state:!0,msg:t.payload.msg}});case i.V.uiClearError:return u(u({},e),{},{error:{state:!1,msg:""}});case i.V.uiOpenModal:return u(u({},e),{},{modal:{isModalOpen:!0}});case i.V.uiCloseModal:return u(u({},e),{},{modal:{isModalOpen:!1}});default:return e}},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.V.loadEvents:return d(d({},e),{},{events:t.payload.events});case i.V.eventAddNew:return d(d({},e),{},{events:[].concat(l(e.events),[t.payload.event])});case i.V.eventSetActive:return d(d({},e),{},{activeEvent:t.payload.event});case i.V.setActiveSlot:return d(d({},e),{},{activeSlot:t.payload.slot});case i.V.eventEdit:return d(d({},e),{},{events:e.events.map((function(e){return e.id===t.payload.event.id?t.payload.event:e}))});case i.V.eventDelete:return d(d({},e),{},{events:e.events.filter((function(e){return e.id!==t.payload.eventId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.V.authLogin:return g(g({},e),{},{uid:t.payload.uid,name:t.payload.name,checking:!1});case i.V.authRegister:return g({},e);case i.V.authLogout:return g(g({},e),{},{uid:null,name:null});case i.V.authCheckingFinish:return g(g({},e),{},{checking:!1});default:return e}}}),P=(0,o.MT)(w,O(j))},9883:function(e,t,n){n.d(t,{V:function(){return r}});var r={uiSetError:"[UI] Set Error",uiClearError:"[UI] Clear Error",uiOpenModal:"[UI] Open modal",uiCloseModal:"[UI] Close modal",loadEvents:"[Event] Load events",eventSetActive:"[Event] Set active",eventAddNew:"[Event] Add new event",eventEdit:"[Event] Edit event",eventDelete:"[Event] Delete event",setActiveSlot:"[Event] Set active slot",authLogin:"[Auth] Login",authStartLogin:"[Auth] Start Login",authRegister:"[Auth] Register",authStartRegister:"[Auth] Start Register",authLogout:"[Auth] Logout",authStartLogout:"[Auth] Start Logout",authCheckingFinish:"[Auth] Checking Finish",authStartRenewToken:"[Auth] Start renew token"}}},a={};function u(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return i[e](n,n.exports,u),n.exports}u.m=i,e=[],u.O=function(t,n,r,o){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<i&&(i=o));a&&(e.splice(s--,1),t=r())}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return e+"."+{1:"27bf259107cc3b9e4651",267:"9b245daf49da7e210365",424:"4ceffa62449f1273c61c",591:"50608d322ddcf36de4aa",655:"0c480a3ad05958c69440",659:"086c23d8f3fa16fa1488",703:"92ce0c880ffcf2ea49ec",793:"878aaab75368e6e710c2",850:"43688b8043ed287be38f"}[e]+".js"},u.miniCssF=function(e){return e+"."+{424:"bbf4a405e5b635422997",703:"af997977464ceb566dd9",793:"fc98ea5447ed250982cb"}[e]+".css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="client:",u.l=function(e,r,o,i){if(t[e])t[e].push(r);else{var a,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+o){a=f;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",n+o),a.src=e),t[e]=[r];var p=function(n,r){a.onerror=a.onload=null,clearTimeout(d);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),n)return n(r)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="",r=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},o={179:0},u.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{424:1,703:1,793:1}[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={179:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=u.p+u.u(t),a=new Error;u.l(i,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],a=n[1],c=n[2],s=0;for(r in a)u.o(a,r)&&(u.m[r]=a[r]);if(c)var l=c(u);for(t&&t(n);s<i.length;s++)o=i[s],u.o(e,o)&&e[o]&&e[o][0](),e[i[s]]=0;return u.O(l)},n=self.webpackChunkclient=self.webpackChunkclient||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var c=u.O(void 0,[359,698,729,866,668,752],(function(){return u(8224)}));c=u.O(c)}();