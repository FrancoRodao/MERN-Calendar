(self.webpackChunkclient=self.webpackChunkclient||[]).push([[424],{4077:function(e,r,t){"use strict";t.d(r,{c:function(){return l}}),t(2526),t(1817),t(1539),t(2165),t(6992),t(8783),t(3948),t(7042),t(1038),t(7941),t(7327),t(5003),t(4747),t(9337);var n=t(7378);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,n.useState)(e),t=u(r,2),a=t[0],s=t[1],l=function(e){var r=e.target;s(o(o({},a),{},i({},r.name,r.value)))},c=function(){return s(e)};return{formValues:a,handleInputChange:l,resetForm:c,setFormValues:s}}},1424:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}}),t(2526),t(1817),t(1539),t(2165),t(6992),t(8783),t(3948),t(7042),t(1038);var n=t(2132),a=t(6550),o=t(9226),i=t(7378),u=t(7865),s=t(4077),l=t(699),c=t(4246);function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function m(){var e,r,t=(0,o.v9)((function(e){return e.ui.error})),m=t.state,h=t.msg,p=(0,o.I0)(),d=(0,s.c)({email:"",password:""}),y=d.formValues,b=d.handleInputChange,_=(e=(0,i.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=_[0],j=_[1],g=(0,a.k6)();return(0,c.jsx)("div",{className:"auth",children:(0,c.jsxs)("div",{className:"auth__container",children:[m&&(0,c.jsxs)("div",{className:"auth__error",children:[" ",h," "]}),(0,c.jsx)("div",{className:"auth__imgContainer",children:(0,c.jsx)("img",{src:l})}),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=y.email,t=y.password;p((0,u.Y8)(r,t))},className:"auth__form",children:[(0,c.jsxs)("div",{className:"auth__form__container",children:[(0,c.jsx)("input",{className:"auth__form__input",placeholder:" ",type:"email",id:"email_input",name:"email",required:!0,onChange:b}),(0,c.jsx)("label",{htmlFor:"email_input",className:"auth__form__label",children:"Email"})]}),(0,c.jsxs)("div",{className:"auth__form__container",children:[(0,c.jsx)("input",{className:"auth__form__input",placeholder:" ",type:v?"text":"password",id:"password_input",name:"password",required:!0,onChange:b}),(0,c.jsx)("label",{htmlFor:"password_input",className:"auth__form__label",children:"Password"}),(0,c.jsx)("span",{onClick:function(){return j(!v)},className:"auth__form__viewpassword",children:v?(0,c.jsx)("i",{className:"fas fa-eye-slash"}):(0,c.jsx)("i",{className:"fas fa-eye"})})]}),(0,c.jsx)("button",{className:"auth__form__button",type:"submit",children:"Login"})]}),(0,c.jsx)("button",{onClick:function(e){return n.Am.info("Coming soon...")},className:"auth__forgot",children:"Forgot password?"}),(0,c.jsxs)("div",{className:"auth__newaccount",children:[(0,c.jsx)("p",{children:"Don´t have an account?"})," ",(0,c.jsx)("button",{onClick:function(){return g.push("/register")},children:"Register!"})]})]})})}},699:function(e,r,t){"use strict";e.exports=t.p+"fe738aaba2eafe0baacf.png"}}]);