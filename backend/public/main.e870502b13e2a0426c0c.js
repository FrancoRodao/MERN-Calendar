!function(){"use strict";var e,t={8054:function(e,t,n){var r=n(2268),a=n.n(r),o=n(9297),i=n(2132),c=react-redux,s=(n(1708),n(3727)),u=n(5977),l=(n(1539),n(8674),n(5666),"[UI] Set Error"),d="[UI] Clear Error",f="[UI] Open modal",p="[UI] Close modal",m="[Event] Load events",h="[Event] Set active",v="[Event] Add new event",y="[Event] Edit event",b="[Event] Delete event",j="[Event] Set active slot",g="[Auth] Login",_="[Auth] Register",O="[Auth] Logout",x="[Auth] Checking Finish",w=(n(7727),axios),P=n.n(w),S=redux-thunk,D=n.n(S),N=redux;function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(7941),n(2526),n(7327),n(5003),n(4747),n(9337);var A={error:{state:!1,msg:""},modal:{isModalOpen:!1}};function I(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(2222),n(1249),n(1817),n(2165),n(6992),n(8783),n(3948),n(1038),n(7042);var R={events:[],activeEvent:null,activeSlot:null};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q={checking:!0,uid:null,name:null},B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.compose,Z=(0,N.applyMiddleware)(D()),W=(0,N.combineReducers)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return k(k({},e),{},{error:{state:!0,msg:t.payload.msg}});case d:return k(k({},e),{},{error:{state:!1,msg:""}});case f:return k(k({},e),{},{modal:{isModalOpen:!0}});case p:return k(k({},e),{},{modal:{isModalOpen:!1}});default:return e}},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return F(F({},e),{},{events:t.payload.events});case v:return F(F({},e),{},{events:[].concat(I(e.events),[t.payload.event])});case h:return F(F({},e),{},{activeEvent:t.payload.event});case j:return F(F({},e),{},{activeSlot:t.payload.slot});case y:return F(F({},e),{},{events:e.events.map((function(e){return e.id===t.payload.event.id?t.payload.event:e}))});case b:return F(F({},e),{},{events:e.events.filter((function(e){return e.id!==t.payload.eventId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return U(U({},e),{},{uid:t.payload.uid,name:t.payload.name,checking:!1});case _:return U({},e);case O:return U(U({},e),{},{uid:null,name:null});case x:return U(U({},e),{},{checking:!1});default:return e}}}),$=(0,N.createStore)(W,B(Z)),z=P().create({baseURL:"https://mern-calendar-backend-prod.herokuapp.com/api",withCredentials:!0});z.interceptors.request.use((function(e){var t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),function e(){var t=z.interceptors.response.use((function(e){return e}),(function(n){if("Network Error"!==n.message)return z.interceptors.response.eject(t),n.response.config.url===Q.authEndPoints.login||n.response.config.url===Q.authEndPoints.register||401!==n.response.status?Promise.reject(n):Q.renewToken().then((function(e){var t=e.data.accessToken;return n.response.config.Authorization="Bearer ".concat(t),localStorage.setItem("accessToken",t),z(n.response.config)})).catch((function(e){return i.Am.error("Try to re-authenticate"),$.dispatch(re()),Promise.reject(e)})).finally(e);i.Am.error("Failed to connect to the server")}))}();var G=z,K={login:"/auth/login",register:"/auth/register",logout:"/auth/logout",renewToken:"/auth/renewToken"},Q={login:function(e,t){return G.post(K.login,{email:e,password:t})},register:function(e,t,n){return G.post(K.register,{name:e,email:t,password:n})},logout:function(){return G.delete(K.logout)},renewToken:function(){return G.get(K.renewToken)},authEndPoints:K},X=function(e){return{type:l,payload:{msg:e}}},Y=function(){return{type:f}},J=function(){return{type:p,payload:{}}};function ee(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function te(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ee(o,r,a,i,c,"next",e)}function c(e){ee(o,r,a,i,c,"throw",e)}i(void 0)}))}}var ne=function(e,t){return{type:g,payload:{uid:e,name:t}}},re=function(){return function(e){localStorage.getItem("accessToken")&&localStorage.removeItem("accessToken"),Q.logout().then((function(t){return t.data.ok&&e(ae())})).catch((function(e){return e}))}},ae=function(){return{type:O}},oe=n(5697),ie=n.n(oe);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return de(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?de(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.useState)(e),n=le(t,2),r=n[0],a=n[1],i=function(e){var t=e.target;a(se(se({},r),{},ue({},t.name,t.value)))},c=function(){return a(e)};return{formValues:r,handleInputChange:i,resetForm:c,setFormValues:a}},pe=n(5893);function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function he(){var e,t,n=(0,c.useSelector)((function(e){return e.ui.error})),r=n.state,a=n.msg,i=(0,c.useDispatch)(),s=(0,u.k6)(),l=fe({name:"",email:"",password:"",confirmPassword:""}),d=l.formValues,f=l.handleInputChange,p=(e=(0,o.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=p[0],h=p[1],v=function(){return s.push("/login")};return(0,pe.jsx)("div",{className:"auth",children:(0,pe.jsxs)("div",{className:"auth__container",children:[r&&(0,pe.jsxs)("div",{className:"auth__error",children:[" ",a," "]}),(0,pe.jsx)("div",{className:"auth__imgContainer",children:(0,pe.jsx)("img",{src:"../../../public/img/candado.png"})}),(0,pe.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=d.name,n=d.email,r=d.password;r===d.confirmPassword?i(function(e,t,n){return function(){var r=te(regeneratorRuntime.mark((function r(a){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Q.register(e,t,n);case 3:r.next=9;break;case 5:return r.prev=5,r.t0=r.catch(0),null!==(o=r.t0.response)&&void 0!==o&&o.data&&a(X(r.t0.response.data.msg)),r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,5]])})));return function(e){return r.apply(this,arguments)}}()}(t,n,r)).then((function(e){return!e&&v()})):i(X("Passwords must be the same"))},className:"auth__form auth__register__form",children:[(0,pe.jsxs)("div",{className:"auth__form__container",children:[(0,pe.jsx)("input",{className:"auth__form__input",placeholder:" ",type:"text",id:"name_input",name:"name",onChange:f}),(0,pe.jsx)("label",{htmlFor:"name_input",className:"auth__form__label",children:"Name"})]}),(0,pe.jsxs)("div",{className:"auth__form__container",children:[(0,pe.jsx)("input",{className:"auth__form__input",placeholder:" ",type:"email",id:"email_input",name:"email",onChange:f}),(0,pe.jsx)("label",{htmlFor:"email_input",className:"auth__form__label",children:"Email"})]}),(0,pe.jsxs)("div",{className:"auth__form__container",children:[(0,pe.jsx)("input",{className:"auth__form__input",placeholder:" ",type:m?"text":"password",id:"password_input",name:"password",onChange:f}),(0,pe.jsx)("label",{htmlFor:"password_input",className:"auth__form__label",children:"Password"}),(0,pe.jsx)("span",{onClick:function(){return h(!m)},className:"auth__form__viewpassword",children:m?(0,pe.jsx)("i",{className:"fas fa-eye-slash"}):(0,pe.jsx)("i",{className:"fas fa-eye"})})]}),(0,pe.jsxs)("div",{className:"auth__form__container",children:[(0,pe.jsx)("input",{className:"auth__form__input",placeholder:" ",type:m?"text":"password",id:"confirmpassword_input",name:"confirmPassword",onChange:f}),(0,pe.jsx)("label",{htmlFor:"confirmpassword_input",className:"auth__form__label",children:"Confirm Password"})]}),(0,pe.jsx)("button",{className:"auth__form__button",type:"submit",children:"Register"})]}),(0,pe.jsxs)("div",{className:"auth__newaccount",children:[(0,pe.jsx)("p",{children:"you have an account?"})," ",(0,pe.jsx)("button",{onClick:v,children:"Login!"})]})]})})}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ye(){var e,t,n=(0,c.useSelector)((function(e){return e.ui.error})),r=n.state,a=n.msg,s=(0,c.useDispatch)(),l=fe({email:"",password:""}),d=l.formValues,f=l.handleInputChange,p=(e=(0,o.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ve(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=p[0],h=p[1],v=(0,u.k6)();return(0,pe.jsx)("div",{className:"auth",children:(0,pe.jsxs)("div",{className:"auth__container",children:[r&&(0,pe.jsxs)("div",{className:"auth__error",children:[" ",a," "]}),(0,pe.jsx)("div",{className:"auth__imgContainer",children:(0,pe.jsx)("img",{src:"../../../public/img/candado.png"})}),(0,pe.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=d.email,n=d.password;s(function(e,t){return function(n){Q.login(e,t).then((function(e){n(ne(e.data.user._id,e.data.user.name)),localStorage.setItem("accessToken",e.data.accessToken)})).catch((function(e){var t;return null!==(t=e.response)&&void 0!==t&&t.data&&n(X(e.response.data.msg)),e}))}}(t,n))},className:"auth__form",children:[(0,pe.jsxs)("div",{className:"auth__form__container",children:[(0,pe.jsx)("input",{className:"auth__form__input",placeholder:" ",type:"email",id:"email_input",name:"email",required:!0,onChange:f}),(0,pe.jsx)("label",{htmlFor:"email_input",className:"auth__form__label",children:"Email"})]}),(0,pe.jsxs)("div",{className:"auth__form__container",children:[(0,pe.jsx)("input",{className:"auth__form__input",placeholder:" ",type:m?"text":"password",id:"password_input",name:"password",required:!0,onChange:f}),(0,pe.jsx)("label",{htmlFor:"password_input",className:"auth__form__label",children:"Password"}),(0,pe.jsx)("span",{onClick:function(){return h(!m)},className:"auth__form__viewpassword",children:m?(0,pe.jsx)("i",{className:"fas fa-eye-slash"}):(0,pe.jsx)("i",{className:"fas fa-eye"})})]}),(0,pe.jsx)("button",{className:"auth__form__button",type:"submit",children:"Login"})]}),(0,pe.jsx)("button",{onClick:function(e){return i.Am.info("Coming soon...")},className:"auth__forgot",children:"Forgot password?"}),(0,pe.jsxs)("div",{className:"auth__newaccount",children:[(0,pe.jsx)("p",{children:"Don´t have an account?"})," ",(0,pe.jsx)("button",{onClick:function(){return v.push("/register")},children:"Register!"})]})]})})}var be=n(306),je=n(1996),ge=n(9563),_e=n(6842),Oe=n(8658),xe=function(){return function(e){return G.get("/events/all").then((function(t){var n=t.data;return e(we(n.events))})).catch((function(){return e(X("Failed to load events, contact an administrator"))}))}},we=function(e){return{type:m,payload:{events:e}}},Pe=function(e){return{type:h,payload:{event:e}}},Se=function(e,t){return function(n){(function(e,t){var n=e.title,r=e.notes,a=e.startDate,o=e.endDate;return G.put("/events/".concat(t),{title:n,notes:r,startDate:a,endDate:o})})(e,t).then((function(e){return n(De(e.data.event))})).catch((function(e){return e}))}},De=function(e){return{type:y,payload:{event:e}}};function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){ke(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ce(e){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Ae,Ie=0,Te=null;function Me(){var e=(0,c.useDispatch)(),t=(0,c.useSelector)((function(e){return e.events})).activeEvent;return(0,pe.jsx)("button",{onClick:function(t){t.preventDefault(),e(Pe(null)),e(Y())},className:"calendar__button newEventButton opacity-".concat(t?"0":"1"),children:(0,pe.jsx)("i",{className:"fas fa-plus"})})}function Fe(){var e=(0,c.useDispatch)(),t=(0,c.useSelector)((function(e){return e.auth})).name;return(0,pe.jsxs)("nav",{className:"navbar__nav",children:[(0,pe.jsx)("p",{children:t}),(0,pe.jsx)("div",{className:"navbar__logout",children:(0,pe.jsxs)("button",{onClick:function(){return e(re())},className:"navbar__button",children:[(0,pe.jsx)("p",{className:"navbar__logout__p",children:"Logout"}),(0,pe.jsx)("i",{className:"fas fa-sign-out-alt"})]})})]})}function Le(){var e=(0,c.useDispatch)(),t=(0,c.useSelector)((function(e){return e.events})).activeEvent;return(0,pe.jsx)("button",{onClick:function(t){t.preventDefault(),t.stopPropagation(),e(Y())},className:"calendar__button editEventButton opacity-".concat(t?"1":"0"),children:(0,pe.jsx)("i",{className:"fas fa-edit"})})}function Re(){var e=(0,c.useDispatch)(),t=(0,c.useSelector)((function(e){return e.events})).activeEvent;return(0,pe.jsx)("button",{onClick:function(n){var r;n.preventDefault(),e((r=t.id,function(e){(function(e){return G.delete("/events/".concat(e))})(r).then((function(t){return t.data.ok&&e(function(e){return{type:b,payload:{eventId:e}}}(r))})).catch((function(e){return e}))})),e(Pe(null))},className:"calendar__button deleteEventButton opacity-".concat(t?"1":"0"),children:(0,pe.jsx)("i",{className:"fas fa-trash"})})}var Ve=react-datetime-picker,Ue=n.n(Ve),He=function(e){var t=e.children;return a().createPortal(t,document.getElementById("modal-root"))};function qe(e){var t=e.isOpen,n=e.children,r=(0,c.useDispatch)();return(0,pe.jsx)(He,{children:(0,pe.jsx)("div",{onClick:function(){return r(J())},className:"".concat("_1HeRTJYMl-Q7cQLxtKM-9M"," opacity-").concat(t?"1":"0"),children:(0,pe.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:"".concat("_1s0CD_t_wSgy7iLBokKxm7"),children:n})})})}function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(n),!0).forEach((function(t){We(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function We(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $e(){var e=(0,c.useSelector)((function(e){return e})),t=e.events.activeEvent,n=e.ui.modal.isModalOpen,r=(0,c.useDispatch)(),a=function(){var e=(0,c.useSelector)((function(e){return e})),t=e.events,n=t.activeEvent,r=t.activeSlot,a=e.ui.modal.isModalOpen,i=(0,c.useDispatch)(),s=function(){if(n){var e=n.title,t=n.start,a=n.end;return{title:e,notes:n.extendedProps.notes,startDate:t,endDate:a}}var o=r?new Date(r.date):new Date,i=r?new Date(r.date):new Date;return i.setHours(o.getHours()+1),{title:"",notes:"",startDate:o,endDate:i}},u=fe(s),l=u.formValues,d=u.handleInputChange,f=u.setFormValues;return(0,o.useEffect)((function(){a&&f(s())}),[a]),{modalFormValues:l,closeCalendarModal:function(){return i(J())},modalHandleInputChange:d,modalStartDateChangeHandler:function(e){return f(Ze(Ze({},l),{},{startDate:e}))},modalEndDateChangeHandler:function(e){return f(Ze(Ze({},l),{},{endDate:e}))}}}(),i=a.modalFormValues,s=a.closeCalendarModal,u=a.modalHandleInputChange,l=a.modalStartDateChangeHandler,d=a.modalEndDateChangeHandler,f=i.title,p=i.notes;return(0,pe.jsxs)(qe,{isOpen:n,children:[(0,pe.jsxs)("div",{className:"modal__header",children:[(0,pe.jsxs)("h1",{className:"modal__headTitle",children:[t?"Edit Event":"New Event"," "]}),(0,pe.jsx)("span",{onClick:s,className:"modal__close",children:(0,pe.jsx)("i",{className:"fas fa-times-circle fa-2x"})})]}),(0,pe.jsx)("hr",{className:"modal__hr--first"}),(0,pe.jsxs)("form",{className:"modal__form",onSubmit:function(e){var n;e.preventDefault(),r(t?Se(i,t.id):(n=i,function(e){(function(e){var t=e.title,n=e.notes,r=e.startDate,a=e.endDate;return G.post("/events",{title:t,notes:n,startDate:r,endDate:a})})(n).then((function(t){return e(function(e){return{type:v,payload:{event:e}}}(t.data.event))})).catch((function(e){return e}))})),s()},children:[(0,pe.jsxs)("div",{className:"modal__container",children:[(0,pe.jsx)("label",{className:"modal__label",children:"Start date and time"}),(0,pe.jsx)(Ue(),{disableClock:!0,clearIcon:null,onChange:l,value:i.startDate,className:"modal__input"})]}),(0,pe.jsxs)("div",{className:"modal__container",children:[(0,pe.jsx)("label",{className:"modal__label",children:"End date and time"}),(0,pe.jsx)(Ue(),{disableClock:!0,clearIcon:null,onChange:d,value:i.endDate,minDate:i.startDate,className:"modal__input modal__input--endDate"})]}),(0,pe.jsx)("hr",{className:"modal__hr"}),(0,pe.jsxs)("div",{className:"modal__container",children:[(0,pe.jsx)("label",{className:"modal__label",children:"Title and Notes"}),(0,pe.jsx)("input",{type:"text",className:"modal__input",placeholder:"Event title",name:"title",autoComplete:"off",value:f,onChange:u,required:!0}),(0,pe.jsx)("small",{className:"modal__small",children:"A short description"})]}),(0,pe.jsxs)("div",{className:"modal__container",children:[(0,pe.jsx)("textarea",{type:"text",className:"modal__input",placeholder:"Notes",rows:"5",name:"notes",value:p,onChange:u}),(0,pe.jsx)("small",{className:"modal__small",children:"Additional Information"})]}),(0,pe.jsxs)("button",{type:"submit",className:"modal__button",children:[(0,pe.jsx)("i",{className:"far fa-save"}),(0,pe.jsx)("span",{children:" Save"})]})]})]})}function ze(e){var t=e.event,n=t.title,r=t.start,a=(t.extendedProps.notes,r.getHours()>=12?"pm":"am");return(0,pe.jsx)("div",{children:(0,pe.jsxs)("span",{children:[(0,pe.jsxs)("strong",{children:[r.getHours(),":",String(r.getMinutes()).padStart(2,"0"),a]})," ",n]})})}function Ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ke(){var e=(0,c.useDispatch)(),t=(0,c.useSelector)((function(e){return e.events})),n=t.events,r=t.activeEvent;(0,o.useEffect)((function(){e(xe())}),[e]);var a,i,s=(a=(0,o.useState)(localStorage.getItem("lastView")||"dayGridMonth"),i=2,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(a,i)||function(e,t){if(e){if("string"==typeof e)return Ge(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ge(e,t):void 0}}(a,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=s[0],l=s[1],d=function(t){var n=t.event,r={title:n.title,notes:n.extendedProps.notes,startDate:n.start,endDate:n.end};e(Se(r,n.id))},f=function(){document.querySelectorAll('[data-event-id="'.concat(r.id,'"]')).forEach((function(e){e.classList.remove("selectedEvent")}))},p=function(e){document.querySelectorAll('[data-event-id="'.concat(e.el.dataset.eventId,'"]')).forEach((function(e){e.classList.add("selectedEvent")}))},m=screen.width<768;return(0,pe.jsxs)("div",{className:"calendar__root",children:[(0,pe.jsxs)("div",{className:"calendar__wrapper",children:[(0,pe.jsx)(Fe,{}),(0,pe.jsx)("div",{style:{padding:"10px"},children:(0,pe.jsx)(be.ZPm,{eventLongPressDelay:200,timeZone:"local",plugins:[je.ZP,Oe.ZP,_e.ZP,ge.Z],initialView:u,eventDataTransform:function(e){return function(e){if("object"===Ce(e))return Ee(Ee({},e),{},{start:new Date(e.startDate),end:new Date(e.endDate)})}(e)},events:n,eventDidMount:function(t){t.el.dataset.eventId=t.event.id,r&&t.event.id===r.id&&p(t),t.el.addEventListener("dblclick",(function(n){n.stopPropagation(),e(Pe(t.event)),e(Y())}))},eventClick:function(t){e(Pe(t.event)),r&&f(),p(t)},eventTextColor:"black",eventContent:ze,eventResizableFromStart:!0,eventResize:d,eventDrop:d,eventTimeFormat:{hour:"numeric",minute:"2-digit",meridiem:"short"},editable:!0,selectable:!m,dateClick:function(t){var n;e(Pe(null)),e({type:j,payload:{slot:{date:(n=t).date,dateStr:n.dateStr,allDay:n.allDay}}}),r&&f(),function(e){if(!e&&"DEVELOPMENT"==={API_URL:"https://mern-calendar-backend-prod.herokuapp.com/api"}.MODE)throw Error("parameters are required");return 1==++Ie&&(Te=e,Ae=setTimeout((function(){Ie=0}),500)),2===Ie&&(clearTimeout(Ae),Ie=0,e.dateStr===Te.dateStr)}(t)&&e(Y())},allDaySlot:!1,allDayText:"All day",viewDidMount:function(e){l(e.view.type),localStorage.setItem("lastView",e.view.type)},headerToolbar:{start:"prev,today,next",center:"title",end:"listYear dayGridMonth timeGridWeek dayGridDay"},unselectAuto:!1})})]}),(0,pe.jsx)($e,{}),(0,pe.jsx)(Le,{}),(0,pe.jsx)(Me,{}),(0,pe.jsx)(Re,{})]})}function Qe(){return(0,pe.jsx)("div",{children:"page not found"})}qe.propTypes={isOpen:ie().bool,children:ie().arrayOf(ie().element)},n(3112),ze.propTypes={event:ie().object},n(2772);var Xe=["Component","isAuthenticated","path"];function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(n),!0).forEach((function(t){et(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function et(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tt(e){var t=e.Component,n=e.isAuthenticated,r=e.path,a=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,Xe);return(0,pe.jsx)(pe.Fragment,{children:n?(0,pe.jsx)(u.l_,{to:"/"}):(0,pe.jsx)(u.AW,Je({path:r,component:t},a))})}tt.propTypes={Component:ie().elementType,isAuthenticated:ie().bool,path:ie().string};var nt=["Component","isAuthenticated","path"];function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?rt(Object(n),!0).forEach((function(t){ot(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ot(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function it(e){var t=e.Component,n=e.isAuthenticated,r=e.path,a=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,nt);return(0,pe.jsx)(pe.Fragment,{children:n?(0,pe.jsx)(u.AW,at({path:r,component:t},a)):(0,pe.jsx)(u.l_,{to:"/login"})})}function ct(){var e=(0,c.useDispatch)(),t=(0,u.TH)();(0,o.useEffect)((function(){return e({type:d})}),[t.pathname,e]);var n=(0,c.useSelector)((function(e){return e.auth})),r=n.checking,a=n.uid,i=!r&&null!=a;return r?(0,pe.jsx)("div",{children:"Wait please..."}):(0,pe.jsxs)(u.rs,{children:[(0,pe.jsx)(it,{Component:Ke,path:"/",isAuthenticated:i,exact:!0}),(0,pe.jsx)(tt,{Component:ye,path:"/login",isAuthenticated:i}),(0,pe.jsx)(tt,{Component:he,path:"/register",isAuthenticated:i}),(0,pe.jsx)(u.AW,{path:"*",children:(0,pe.jsx)(Qe,{})})]})}function st(){var e=(0,c.useDispatch)();(0,o.useEffect)((function(){e(function(){var e=te(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.getItem("accessToken")){e.next=10;break}return e.next=4,Q.renewToken();case 4:n=e.sent,r=n.data,t(ne(r._id,r.name)),localStorage.setItem("accessToken",r.accessToken),e.next=11;break;case 10:t(re());case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t(X((null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.msg)||"Unexpected error, contact an administrator"));case 16:t({type:x});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=(0,u.EN)(ct);return(0,pe.jsx)(s.VK,{children:(0,pe.jsx)(t,{})})}function ut(){return(0,pe.jsxs)(c.Provider,{store:$,children:[(0,pe.jsx)(i.Ix,{}),(0,pe.jsx)(st,{}),(0,pe.jsx)("div",{id:"modal-root"})]})}it.propTypes={Component:ie().elementType,isAuthenticated:ie().bool,path:ie().string},ct.propTypes={location:ie().object.isRequired},a().render((0,pe.jsx)(ut,{}),document.getElementById("root"))},9297:function(e){e.exports=react},2268:function(e){e.exports=react-dom}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,a,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(c=!1,o<i&&(i=o));c&&(e.splice(u--,1),t=a())}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,i=n[0],c=n[1],s=n[2],u=0;for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(s)var l=s(r);for(t&&t(n);u<i.length;u++)o=i[u],r.o(e,o)&&e[o]&&e[o][0](),e[i[u]]=0;return r.O(l)},n=self.webpackChunkclient=self.webpackChunkclient||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[457,879,850,777],(function(){return r(8054)}));a=r.O(a)}();