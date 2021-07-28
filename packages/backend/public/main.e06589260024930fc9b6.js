/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5612:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js
var react_toastify_esm = __webpack_require__(2132);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 17 modules
var es = __webpack_require__(9226);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(5838);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
;// CONCATENATED MODULE: ./src/redux/types.js
var types_types = {
  uiSetError: '[UI] Set Error',
  uiClearError: '[UI] Clear Error',
  uiOpenModal: '[UI] Open modal',
  uiCloseModal: '[UI] Close modal',
  loadEvents: '[Event] Load events',
  eventSetActive: '[Event] Set active',
  eventAddNew: '[Event] Add new event',
  eventEdit: '[Event] Edit event',
  eventDelete: '[Event] Delete event',
  authLogin: '[Auth] Login',
  authStartLogin: '[Auth] Start Login',
  authRegister: '[Auth] Register',
  authStartRegister: '[Auth] Start Register',
  authLogout: '[Auth] Logout',
  authStartLogout: '[Auth] Start Logout',
  authCheckingFinish: '[Auth] Checking Finish',
  authStartRenewToken: '[Auth] Start renew token'
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__(7727);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(3894);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 2 modules
var redux = __webpack_require__(8676);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(7941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(7327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(5003);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(9337);
;// CONCATENATED MODULE: ./src/redux/reducers/uiReducer.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  error: {
    state: false,
    msg: ''
  },
  modal: {
    isModalOpen: false
  }
};
var uiReducer = function uiReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types_types.uiSetError:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: {
          state: true,
          msg: action.payload.msg
        }
      });

    case types_types.uiClearError:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: {
          state: false,
          msg: ''
        }
      });

    case types_types.uiOpenModal:
      return _objectSpread(_objectSpread({}, state), {}, {
        modal: {
          isModalOpen: true
        }
      });

    case types_types.uiCloseModal:
      return _objectSpread(_objectSpread({}, state), {}, {
        modal: {
          isModalOpen: false
        }
      });

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(1249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(1038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(7042);
;// CONCATENATED MODULE: ./src/redux/reducers/eventsReducer.js

















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function eventsReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function eventsReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { eventsReducer_ownKeys(Object(source), true).forEach(function (key) { eventsReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { eventsReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function eventsReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var eventsReducer_initialState = {
  events: [],
  activeEvent: null
};
var eventsReducer = function eventsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : eventsReducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types_types.loadEvents:
      return eventsReducer_objectSpread(eventsReducer_objectSpread({}, state), {}, {
        events: action.payload.events
      });

    case types_types.eventAddNew:
      return eventsReducer_objectSpread(eventsReducer_objectSpread({}, state), {}, {
        events: [].concat(_toConsumableArray(state.events), [action.payload.event])
      });

    case types_types.eventSetActive:
      return eventsReducer_objectSpread(eventsReducer_objectSpread({}, state), {}, {
        activeEvent: action.payload.event
      });

    case types_types.eventEdit:
      return eventsReducer_objectSpread(eventsReducer_objectSpread({}, state), {}, {
        events: state.events.map(function (e) {
          return e.id === action.payload.event.id ? action.payload.event : e;
        })
      });

    case types_types.eventDelete:
      return eventsReducer_objectSpread(eventsReducer_objectSpread({}, state), {}, {
        events: state.events.filter(function (e) {
          return e.id !== action.payload.eventId;
        })
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./src/redux/reducers/authReducer.js







function authReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function authReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { authReducer_ownKeys(Object(source), true).forEach(function (key) { authReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { authReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function authReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var authReducer_initialState = {
  checking: true,
  //checking if is a valid token
  uid: null,
  name: null
};
var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : authReducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types_types.authLogin:
      return authReducer_objectSpread(authReducer_objectSpread({}, state), {}, {
        uid: action.payload.uid,
        name: action.payload.name,
        checking: false
      });

    case types_types.authRegister:
      return authReducer_objectSpread({}, state);

    case types_types.authLogout:
      return authReducer_objectSpread(authReducer_objectSpread({}, state), {}, {
        uid: null,
        name: null
      });

    case types_types.authCheckingFinish:
      return authReducer_objectSpread(authReducer_objectSpread({}, state), {}, {
        checking: false
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./src/redux/store.js





var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux/* compose */.qC;
var middlewares = (0,redux/* applyMiddleware */.md)(redux_thunk_es/* default */.Z);
var reducers = (0,redux/* combineReducers */.UY)({
  ui: uiReducer,
  events: eventsReducer,
  auth: authReducer
});
var store = (0,redux/* createStore */.MT)(reducers, composeEnhancers(middlewares));
/* harmony default export */ var redux_store = (store);
;// CONCATENATED MODULE: ./src/api/instance.js








var instance = axios_default().create({
  baseURL: {"API_URL":"https://mern-calendar-backend-prod.herokuapp.com/api"}.API_URL,
  withCredentials: true
}); //add accesstoken on every request

instance.interceptors.request.use(function (config) {
  var token = localStorage.getItem('accessToken');

  if (token) {
    config.headers.Authorization = "Bearer ".concat(token);
  }

  return config;
});

function createAxiosResponseInterceptor() {
  var interceptor = instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    //Failed to connect to the server
    if (error.message === 'Network Error') {
      react_toastify_esm/* toast.error */.Am.error('Failed to connect to the server');
      return;
    } // Reject promise if usual error


    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    /*
     * When response code is 401, try to refresh the token.
     * Eject the interceptor so it doesn't loop in case
     * token refresh causes the 401 response
     */


    instance.interceptors.response.eject(interceptor);
    return auth.renewToken().then(function (res) {
      var token = res.data.accessToken;
      error.response.config.Authorization = "Bearer ".concat(token);
      localStorage.setItem('accessToken', token);
      return instance(error.response.config);
    }).catch(function (err) {
      if (err.response.status === 401) {
        react_toastify_esm/* toast.error */.Am.error('Try to re-authenticate');
        redux_store.dispatch(startLogoutAction());
      }

      return Promise.reject(err);
    }).finally(createAxiosResponseInterceptor);
  });
}

createAxiosResponseInterceptor();
/* harmony default export */ var api_instance = (instance);
;// CONCATENATED MODULE: ./src/api/auth.js


var login = function login(email, password) {
  return api_instance.post('/auth/login', {
    email: email,
    password: password
  });
};

var register = function register(name, email, password) {
  return api_instance.post('/auth/register', {
    name: name,
    email: email,
    password: password
  });
};

var logout = function logout() {
  return api_instance.delete('/auth/logout');
};

var renewToken = function renewToken() {
  return api_instance.get('/auth/renewToken');
};

/* harmony default export */ var auth = ({
  login: login,
  register: register,
  logout: logout,
  renewToken: renewToken
});
;// CONCATENATED MODULE: ./src/redux/actions/uiActions.js

var setErrorAction = function setErrorAction(errorMsg) {
  return {
    type: types_types.uiSetError,
    payload: {
      msg: errorMsg
    }
  };
};
var clearErrorAction = function clearErrorAction() {
  return {
    type: types_types.uiClearError
  };
};
var openModalAction = function openModalAction() {
  return {
    type: types_types.uiOpenModal
  };
};
var closeModalAction = function closeModalAction() {
  return {
    type: types_types.uiCloseModal,
    payload: {}
  };
};
;// CONCATENATED MODULE: ./src/redux/actions/authActions.js




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var startLoginAction = function startLoginAction(email, password) {
  return function (dispatch) {
    auth.login(email, password).then(function (res) {
      dispatch(loginAction(res.data.user._id, res.data.user.name));
      localStorage.setItem('accessToken', res.data.accessToken);
    }).catch(function (err) {
      return err;
    });
  };
};
var loginAction = function loginAction(uid, name) {
  return {
    type: types_types.authLogin,
    payload: {
      uid: uid,
      name: name
    }
  };
};
var startCheckingAction = function startCheckingAction() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var _yield$AuthService$re, data, _err$response, _err$response$data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!localStorage.getItem('accessToken')) {
                _context.next = 10;
                break;
              }

              _context.next = 4;
              return auth.renewToken();

            case 4:
              _yield$AuthService$re = _context.sent;
              data = _yield$AuthService$re.data;
              dispatch(loginAction(data._id, data.name));
              localStorage.setItem('accessToken', data.accessToken);
              _context.next = 11;
              break;

            case 10:
              dispatch(startLogoutAction());

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              dispatch(setErrorAction((_context.t0 === null || _context.t0 === void 0 ? void 0 : (_err$response = _context.t0.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.msg) || 'unexpected error'));

            case 16:
              dispatch(finishCheckingAction());

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var finishCheckingAction = function finishCheckingAction() {
  return {
    type: types_types.authCheckingFinish
  };
};
var startLogoutAction = function startLogoutAction() {
  return function (dispatch) {
    if (localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken');
    }

    auth.logout().then(function (res) {
      return res.data.ok && dispatch(logoutAction());
    }).catch(function (e) {
      return e;
    });
  };
};
var logoutAction = function logoutAction() {
  return {
    type: types_types.authLogout
  };
};
var startRegisterUser = function startRegisterUser(name, email, password) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var _err$response2, _err$response2$data;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return auth.register(name, email, password);

            case 3:
              _context2.next = 8;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              dispatch(setErrorAction((_context2.t0 === null || _context2.t0 === void 0 ? void 0 : (_err$response2 = _context2.t0.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : _err$response2$data.msg) || 'unexpected error'));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 5]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var registerAction = function registerAction() {
  return {
    type: types.authRegister
  };
};
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/hooks/useForm.js















function useForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function useForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useForm_ownKeys(Object(source), true).forEach(function (key) { useForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || useForm_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useForm_arrayLikeToArray(o, minLen); }

function useForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var useForm = function useForm() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = (0,react.useState)(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      formValues = _useState2[0],
      setFormValues = _useState2[1];

  var handleInputChange = function handleInputChange(_ref) {
    var target = _ref.target;
    setFormValues(function (state) {
      return useForm_objectSpread(useForm_objectSpread({}, state), {}, useForm_defineProperty({}, target.name, target.value));
    });
  };

  return {
    formValues: formValues,
    handleInputChange: handleInputChange
  };
};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/screens/auth/RegisterScreen.js










function RegisterScreen_slicedToArray(arr, i) { return RegisterScreen_arrayWithHoles(arr) || RegisterScreen_iterableToArrayLimit(arr, i) || RegisterScreen_unsupportedIterableToArray(arr, i) || RegisterScreen_nonIterableRest(); }

function RegisterScreen_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function RegisterScreen_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RegisterScreen_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RegisterScreen_arrayLikeToArray(o, minLen); }

function RegisterScreen_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function RegisterScreen_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function RegisterScreen_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function RegisterScreen() {
  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.ui.error;
  }),
      state = _useSelector.state,
      msg = _useSelector.msg;

  var dispatch = (0,es/* useDispatch */.I0)();
  var history = (0,react_router/* useHistory */.k6)();

  var _useForm = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
      formValues = _useForm.formValues,
      handleInputChange = _useForm.handleInputChange;

  var _useState = (0,react.useState)(false),
      _useState2 = RegisterScreen_slicedToArray(_useState, 2),
      vissiblePassword = _useState2[0],
      setVissiblePassword = _useState2[1];

  var handleSubmitForm = function handleSubmitForm(e) {
    e.preventDefault();
    var name = formValues.name,
        email = formValues.email,
        password = formValues.password,
        confirmPassword = formValues.confirmPassword;

    if (password === confirmPassword) {
      dispatch(startRegisterUser(name, email, password)).then(function (error) {
        return !error && toLogin();
      });
    } else {
      dispatch(setErrorAction('Passwords must be the same'));
    }
  };

  var toLogin = function toLogin() {
    history.push('/login');
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "auth",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "auth__container",
      children: [state && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [" ", msg, " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "auth__imgContainer",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: "../../../public/img/candado.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
        onSubmit: handleSubmitForm,
        className: "auth__form auth__register__form",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "auth__form__container",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            className: "auth__form__input",
            placeholder: " ",
            type: "text",
            id: "name_input",
            name: "name",
            onChange: handleInputChange
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
            htmlFor: "name_input",
            className: "auth__form__label",
            children: "Name"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "auth__form__container",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            className: "auth__form__input",
            placeholder: " ",
            type: "email",
            id: "email_input",
            name: "email",
            onChange: handleInputChange
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
            htmlFor: "email_input",
            className: "auth__form__label",
            children: "Email"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "auth__form__container",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            className: "auth__form__input",
            placeholder: " ",
            type: vissiblePassword ? 'text' : 'password',
            id: "password_input",
            name: "password",
            onChange: handleInputChange
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
            htmlFor: "password_input",
            className: "auth__form__label",
            children: "Password"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            onClick: function onClick() {
              return setVissiblePassword(function (v) {
                return !v;
              });
            },
            className: "auth__form__viewpassword",
            children: vissiblePassword ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-eye-slash"
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-eye"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "auth__form__container",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            className: "auth__form__input",
            placeholder: " ",
            type: vissiblePassword ? 'text' : 'password',
            id: "confirmpassword_input",
            name: "confirmPassword",
            onChange: handleInputChange
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
            htmlFor: "confirmpassword_input",
            className: "auth__form__label",
            children: "Confirm Password"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          className: "auth__form__button",
          type: "submit",
          children: "Register"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "auth__newaccount",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "you have an account?"
        }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          onClick: toLogin,
          children: "Login!"
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/screens/auth/LoginScreen.js










function LoginScreen_slicedToArray(arr, i) { return LoginScreen_arrayWithHoles(arr) || LoginScreen_iterableToArrayLimit(arr, i) || LoginScreen_unsupportedIterableToArray(arr, i) || LoginScreen_nonIterableRest(); }

function LoginScreen_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function LoginScreen_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LoginScreen_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LoginScreen_arrayLikeToArray(o, minLen); }

function LoginScreen_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function LoginScreen_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function LoginScreen_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function LoginScreen() {
  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.ui.error;
  }),
      state = _useSelector.state,
      msg = _useSelector.msg;

  var dispatch = (0,es/* useDispatch */.I0)();

  var _useForm = useForm({
    email: '',
    password: ''
  }),
      formValues = _useForm.formValues,
      handleInputChange = _useForm.handleInputChange;

  var handleSubmitForm = function handleSubmitForm(e) {
    e.preventDefault();
    var email = formValues.email,
        password = formValues.password;
    dispatch(startLoginAction(email, password));
  };

  var _useState = (0,react.useState)(false),
      _useState2 = LoginScreen_slicedToArray(_useState, 2),
      vissiblePassword = _useState2[0],
      setVissiblePassword = _useState2[1];

  var history = (0,react_router/* useHistory */.k6)();

  var toRegister = function toRegister() {
    history.push('/register');
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "auth",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "auth__container",
      children: [state && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [" ", msg, " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "auth__imgContainer",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: "../../../public/img/candado.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
        onSubmit: handleSubmitForm,
        className: "auth__form",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "auth__form__container",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            className: "auth__form__input",
            placeholder: " ",
            type: "email",
            id: "email_input",
            name: "email",
            required: true,
            onChange: handleInputChange
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
            htmlFor: "email_input",
            className: "auth__form__label",
            children: "Email"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "auth__form__container",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            className: "auth__form__input",
            placeholder: " ",
            type: vissiblePassword ? 'text' : 'password',
            id: "password_input",
            name: "password",
            required: true,
            onChange: handleInputChange
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
            htmlFor: "password_input",
            className: "auth__form__label",
            children: "Password"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            onClick: function onClick() {
              return setVissiblePassword(function (v) {
                return !v;
              });
            },
            className: "auth__form__viewpassword",
            children: vissiblePassword ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-eye-slash"
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-eye"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          className: "auth__form__button",
          type: "submit",
          children: "Login"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: "auth__forgot",
        children: "Forgot password?"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "auth__newaccount",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "Don\xB4t have an account?"
        }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          onClick: toRegister,
          children: "Register!"
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./node_modules/react-big-calendar/dist/react-big-calendar.esm.js + 291 modules
var react_big_calendar_esm = __webpack_require__(2011);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/helpers/stringFormatDateToDate.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function stringFormatDateToDate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function stringFormatDateToDate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { stringFormatDateToDate_ownKeys(Object(source), true).forEach(function (key) { stringFormatDateToDate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { stringFormatDateToDate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function stringFormatDateToDate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var stringFormatDateToDate = function stringFormatDateToDate(events) {
  if (Array.isArray(events)) {
    return events.map(function (e) {
      return stringFormatDateToDate_objectSpread(stringFormatDateToDate_objectSpread({}, e), {}, {
        startDate: moment_default()(e.startDate).toDate(),
        endDate: moment_default()(e.endDate).toDate()
      });
    });
  }

  if (_typeof(events) === 'object') {
    return stringFormatDateToDate_objectSpread(stringFormatDateToDate_objectSpread({}, events), {}, {
      startDate: moment_default()(events.startDate).toDate(),
      endDate: moment_default()(events.endDate).toDate()
    });
  }
};
;// CONCATENATED MODULE: ./src/api/events.js


var getAllEvents = function getAllEvents() {
  return api_instance.get('/events/all');
};

var getEvent = function getEvent(eventId) {
  return api_instance.get("/events/".concat(eventId));
};

var createEvent = function createEvent(title, notes, startDate, endDate) {
  return api_instance.post('/events', {
    title: title,
    notes: notes,
    startDate: startDate,
    endDate: endDate
  });
};

var editEvent = function editEvent(title, notes, startDate, endDate) {
  return api_instance.put('/events/editEvent', {
    title: title,
    notes: notes,
    startDate: startDate,
    endDate: endDate
  });
};

var deleteEvent = function deleteEvent(eventId) {
  return api_instance.delete("/events/".concat(eventId));
};

/* harmony default export */ var events = ({
  getAllEvents: getAllEvents,
  getEvent: getEvent,
  createEvent: createEvent,
  editEvent: editEvent,
  deleteEvent: deleteEvent
});
;// CONCATENATED MODULE: ./src/redux/actions/eventsActions.js




var startLoadEvents = function startLoadEvents() {
  return function (dispatch) {
    return events.getAllEvents().then(function (_ref) {
      var data = _ref.data;
      var eventsStringDateToDate = stringFormatDateToDate(data.events);
      dispatch(loadEvents(eventsStringDateToDate));
    }).catch(function () {
      return dispatch(setErrorAction('Failed to load events, contact an administrator'));
    });
  };
};
var loadEvents = function loadEvents(events) {
  return {
    type: types_types.loadEvents,
    payload: {
      events: events
    }
  };
};
var setActiveEventAction = function setActiveEventAction(event) {
  return {
    type: types_types.eventSetActive,
    payload: {
      event: event
    }
  };
};
var startAddNewEventAction = function startAddNewEventAction(event) {
  return function (dispatch) {
    var title = event.title,
        notes = event.notes,
        startDate = event.startDate,
        endDate = event.endDate;
    events.createEvent(title, notes, startDate, endDate).then(function (res) {
      var eventStringDateToDate = stringFormatDateToDate(res.data.newEvent);
      dispatch(addNewEventAction(eventStringDateToDate));
    }).catch(function (err) {
      return err;
    });
  };
};
var addNewEventAction = function addNewEventAction(event) {
  return {
    type: types_types.eventAddNew,
    payload: {
      event: event
    }
  };
};
var editEventAction = function editEventAction(event) {
  return {
    type: types_types.eventEdit,
    payload: {
      event: event
    }
  };
};
var startDeleteEventAction = function startDeleteEventAction(eventId) {
  return function (dispatch) {
    events.deleteEvent(eventId).then(function (res) {
      return res.data.ok && dispatch(deleteEventAction(eventId));
    }).catch(function (e) {
      return e;
    });
  };
};
var deleteEventAction = function deleteEventAction(eventId) {
  return {
    type: types_types.eventDelete,
    payload: {
      eventId: eventId
    }
  };
};
;// CONCATENATED MODULE: ./src/components/ui/NewEventButton.js





function NewEventButton() {
  var dispatch = (0,es/* useDispatch */.I0)();

  var addNewEventHandler = function addNewEventHandler(e) {
    e.preventDefault();
    dispatch(setActiveEventAction(null));
    dispatch(openModalAction());
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
    onClick: addNewEventHandler,
    className: "btn btn-primary newEventButton",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fas fa-plus"
    })
  });
}
;// CONCATENATED MODULE: ./src/components/ui/NavBar.js






function NavBar() {
  var dispatch = (0,es/* useDispatch */.I0)();

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      name = _useSelector.name;

  var handleLogout = function handleLogout() {
    return dispatch(startLogoutAction());
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("nav", {
    className: "navbar__nav",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: name
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "navbar__logout",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
        onClick: handleLogout,
        className: "btn btn-outline-danger",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          className: "navbar__logout__p",
          children: "Logout"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-sign-out-alt"
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/ui/DeleteEventButton.js





function DeleteEventButton() {
  var dispatch = (0,es/* useDispatch */.I0)();

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.events;
  }),
      activeEvent = _useSelector.activeEvent;

  var deleteEventHandler = function deleteEventHandler(e) {
    e.preventDefault();
    dispatch(startDeleteEventAction(activeEvent.id));
    dispatch(setActiveEventAction(null));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
    onClick: deleteEventHandler,
    className: "btn btn-danger deleteEventButton",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fas fa-trash"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: " Delete event"
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/calendar/ToolBar.js
/* eslint-disable */





function ToolBar(props) {
  var toDay = function toDay() {
    return props.onView('day');
  };

  var toWeek = function toWeek() {
    return props.onView('week');
  };

  var toMonth = function toMonth() {
    return props.onView('month');
  };

  var toAgenda = function toAgenda() {
    return props.onView('agenda');
  };

  var toToday = function toToday() {
    return props.onNavigate('TODAY');
  };

  var toNext = function toNext() {
    return props.onNavigate('NEXT');
  };

  var toPrev = function toPrev() {
    return props.onNavigate('PREV');
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "toolbar__container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "toolbar__group1",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        onClick: toPrev,
        className: "toolbar__arrow --arrowleft",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-arrow-left"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        onClick: toToday,
        className: "toolbar__button --todaybtn",
        children: props.localizer.messages.today
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        onClick: toNext,
        className: "toolbar__arrow --arrowright",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-arrow-right"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: props.label
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "toolbar__group",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        onClick: toMonth,
        className: "toolbar__view toolbar__button",
        children: props.views[0]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        onClick: toWeek,
        className: "toolbar__view toolbar__button",
        children: props.views[1]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        onClick: toDay,
        className: "toolbar__view toolbar__button",
        children: props.views[2]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        onClick: toAgenda,
        className: "toolbar__view toolbar__button",
        children: props.views[3]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(3253);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-datetime-picker/dist/entry.js
var entry = __webpack_require__(8591);
;// CONCATENATED MODULE: ./src/components/calendar/CalendarModal.js















function CalendarModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function CalendarModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CalendarModal_ownKeys(Object(source), true).forEach(function (key) { CalendarModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CalendarModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CalendarModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CalendarModal_slicedToArray(arr, i) { return CalendarModal_arrayWithHoles(arr) || CalendarModal_iterableToArrayLimit(arr, i) || CalendarModal_unsupportedIterableToArray(arr, i) || CalendarModal_nonIterableRest(); }

function CalendarModal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CalendarModal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CalendarModal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CalendarModal_arrayLikeToArray(o, minLen); }

function CalendarModal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CalendarModal_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CalendarModal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var now = moment_default()().minutes(0).seconds(0).add(1, 'hours'); // 3:00:00

var nowPlus1 = now.clone().add(1, 'hours');
var initFormValues = {
  title: '',
  notes: '',
  startDate: now.toDate(),
  endDate: nowPlus1.toDate()
};
function CalendarModal() {
  var state = (0,es/* useSelector */.v9)(function (state) {
    return state;
  });
  var isModalOpen = state.ui.modal.isModalOpen;
  var activeEvent = state.events.activeEvent;
  var dispatch = (0,es/* useDispatch */.I0)();

  var _useState = (0,react.useState)(initFormValues),
      _useState2 = CalendarModal_slicedToArray(_useState, 2),
      formValues = _useState2[0],
      setFormValues = _useState2[1];

  var notes = formValues.notes,
      title = formValues.title;

  var handleInputChange = function handleInputChange(_ref) {
    var target = _ref.target;
    return setFormValues(function (values) {
      return CalendarModal_objectSpread(CalendarModal_objectSpread({}, values), {}, CalendarModal_defineProperty({}, target.name, target.value));
    });
  };

  var handleSubmitForm = function handleSubmitForm(e) {
    e.preventDefault();

    if (activeEvent) {
      dispatch(editEventAction(CalendarModal_objectSpread({}, formValues)));
    } else {
      dispatch(startAddNewEventAction(formValues));
    }

    dispatch(closeModalAction());
    dispatch(setActiveEventAction(null));
    setFormValues(initFormValues);
  };

  var startDateChangeHanlder = function startDateChangeHanlder(e) {
    setFormValues(function (values) {
      return CalendarModal_objectSpread(CalendarModal_objectSpread({}, values), {}, {
        startDate: e
      });
    });
  };

  var endDateChangeHanlder = function endDateChangeHanlder(e) {
    setFormValues(function (values) {
      return CalendarModal_objectSpread(CalendarModal_objectSpread({}, values), {}, {
        endDate: e
      });
    });
  };

  lib_default().setAppElement('#root');

  var closeModal = function closeModal() {
    dispatch(closeModalAction());
    dispatch(setActiveEventAction(null));
    setFormValues(initFormValues);
  };

  (0,react.useEffect)(function () {
    activeEvent ? setFormValues(activeEvent) : setFormValues(initFormValues);
  }, [activeEvent, setFormValues]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)((lib_default()), {
    isOpen: isModalOpen,
    onRequestClose: closeModal,
    contentLabel: "Example Modal",
    closeTimeoutMS: 200,
    className: "calendarmodal",
    overlayClassName: "modal-fondo",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "modalHeader",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("h1", {
        children: [activeEvent ? 'Edit Event' : 'New Event', " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        onClick: function onClick() {
          return dispatch(closeModalAction());
        },
        className: "modalClose",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-times-circle fa-2x"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      className: "container",
      onSubmit: handleSubmitForm,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
          children: "Start date and time"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(entry/* default */.Z, {
          onChange: startDateChangeHanlder,
          value: formValues.startDate,
          className: "form-control"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
          children: "End date and time"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(entry/* default */.Z, {
          onChange: endDateChangeHanlder,
          value: formValues.endDate,
          minDate: formValues.startDate,
          className: "form-control"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
          children: "Title and Notes"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
          type: "text",
          className: "form-control",
          placeholder: "Event title",
          name: "title",
          autoComplete: "off",
          value: title,
          onChange: handleInputChange,
          required: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
          id: "emailHelp",
          className: "form-text text-muted",
          children: "A short description"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("textarea", {
          type: "text",
          className: "form-control",
          placeholder: "Notes",
          rows: "5",
          name: "notes",
          value: notes,
          onChange: handleInputChange
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
          id: "emailHelp",
          className: "form-text text-muted",
          children: "Additional Information"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
        type: "submit",
        className: "btn btn-outline-primary btn-block",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "far fa-save"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: " Save"
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/calendar/CalendarEvent.js




function CalendarEvent(_ref) {
  var event = _ref.event;
  var title = event.title,
      user = event.user,
      notes = event.notes;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: title
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("strong", {
      children: [" - ", notes]
    })]
  });
}
CalendarEvent.propTypes = {
  event: (prop_types_default()).object
};
;// CONCATENATED MODULE: ./src/screens/CalendarScreen.js















function CalendarScreen_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function CalendarScreen_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CalendarScreen_ownKeys(Object(source), true).forEach(function (key) { CalendarScreen_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CalendarScreen_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CalendarScreen_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CalendarScreen_slicedToArray(arr, i) { return CalendarScreen_arrayWithHoles(arr) || CalendarScreen_iterableToArrayLimit(arr, i) || CalendarScreen_unsupportedIterableToArray(arr, i) || CalendarScreen_nonIterableRest(); }

function CalendarScreen_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CalendarScreen_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CalendarScreen_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CalendarScreen_arrayLikeToArray(o, minLen); }

function CalendarScreen_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CalendarScreen_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CalendarScreen_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















var localizer = (0,react_big_calendar_esm/* momentLocalizer */.Zt)((moment_default()));
function CalendarScreen() {
  var dispatch = (0,es/* useDispatch */.I0)();

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.events;
  }),
      events = _useSelector.events,
      activeEvent = _useSelector.activeEvent;

  (0,react.useEffect)(function () {
    dispatch(startLoadEvents());
  }, [dispatch]);

  var _useState = (0,react.useState)(localStorage.getItem('lastView') || 'week'),
      _useState2 = CalendarScreen_slicedToArray(_useState, 2),
      lastView = _useState2[0],
      setLastView = _useState2[1];

  var selectHandler = function selectHandler(e) {
    return dispatch(setActiveEventAction(e));
  };

  var selectSlotHandler = function selectSlotHandler(e) {
    console.log('paso');
    dispatch(setActiveEventAction(null));
    e.action === 'doubleClick' && dispatch(openModalAction());
  };

  var dobleClickHandler = function dobleClickHandler() {
    return dispatch(openModalAction());
  };

  var onViewChangeHandler = function onViewChangeHandler(e) {
    setLastView(lastView);
    localStorage.setItem('lastView', e);
  };

  var eventStyleGetter = function eventStyleGetter(event, start, end, isSelected) {
    var defaults = {
      display: 'block',
      backgroundColor: '#367CF7',
      borderRadius: '5px',
      opacity: '0.8',
      color: 'white',
      outline: 'none'
    };
    return isSelected ? {
      style: CalendarScreen_objectSpread(CalendarScreen_objectSpread({}, defaults), {}, {
        outline: '2px auto #0044bd'
      })
    } : {
      style: CalendarScreen_objectSpread({}, defaults)
    };
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "calendar__root",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "calendar__wrapper",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NavBar, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(react_big_calendar_esm/* Calendar */.f, {
        localizer: localizer,
        components: {
          event: CalendarEvent,
          toolbar: ToolBar
        },
        defaultView: lastView,
        eventPropGetter: eventStyleGetter,
        events: events,
        onDoubleClickEvent: dobleClickHandler,
        onSelectEvent: selectHandler,
        onSelectSlot: selectSlotHandler,
        onView: onViewChangeHandler,
        selected: activeEvent,
        popup: true,
        startAccessor: "startDate",
        endAccessor: "endDate",
        selectable: "ignoreEvents"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NewEventButton, {}), activeEvent && /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteEventButton, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(CalendarModal, {})]
  });
}
;// CONCATENATED MODULE: ./src/components/PageNotFound.js


function PageNotFound() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: "page not found"
  });
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(2772);
;// CONCATENATED MODULE: ./src/routes/PublicRoute.js







var _excluded = ["Component", "isAuthenticated", "path"];

function PublicRoute_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function PublicRoute_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PublicRoute_ownKeys(Object(source), true).forEach(function (key) { PublicRoute_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PublicRoute_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PublicRoute_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function PublicRoute(_ref) {
  var Component = _ref.Component,
      isAuthenticated = _ref.isAuthenticated,
      path = _ref.path,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: !isAuthenticated ? /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, PublicRoute_objectSpread({
      path: path,
      component: Component
    }, props)) : /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
      to: "/"
    })
  });
}
PublicRoute.propTypes = {
  Component: (prop_types_default()).elementType,
  isAuthenticated: (prop_types_default()).bool,
  path: (prop_types_default()).string
};
;// CONCATENATED MODULE: ./src/routes/PrivateRoute.js







var PrivateRoute_excluded = ["Component", "isAuthenticated", "path"];

function PrivateRoute_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function PrivateRoute_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PrivateRoute_ownKeys(Object(source), true).forEach(function (key) { PrivateRoute_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PrivateRoute_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PrivateRoute_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PrivateRoute_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PrivateRoute_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PrivateRoute_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function PrivateRoute(_ref) {
  var Component = _ref.Component,
      isAuthenticated = _ref.isAuthenticated,
      path = _ref.path,
      props = PrivateRoute_objectWithoutProperties(_ref, PrivateRoute_excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: isAuthenticated ? /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, PrivateRoute_objectSpread({
      path: path,
      component: Component
    }, props)) : /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
      to: "/login"
    })
  });
}
PrivateRoute.propTypes = {
  Component: (prop_types_default()).elementType,
  isAuthenticated: (prop_types_default()).bool,
  path: (prop_types_default()).string
};
;// CONCATENATED MODULE: ./src/routes/Wrapper.js













function Wrapper() {
  var dispatch = (0,es/* useDispatch */.I0)();
  var location = (0,react_router/* useLocation */.TH)(); //clear errors when changing pages

  (0,react.useEffect)(function () {
    return dispatch(clearErrorAction());
  }, [location.pathname, dispatch]);

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      checking = _useSelector.checking,
      uid = _useSelector.uid;

  var isAuthenticated = !checking && uid != null;

  if (checking) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: "Wait please..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PrivateRoute, {
      Component: CalendarScreen,
      path: "/",
      isAuthenticated: isAuthenticated,
      exact: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PublicRoute, {
      Component: LoginScreen,
      path: "/login",
      isAuthenticated: isAuthenticated
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PublicRoute, {
      Component: RegisterScreen,
      path: "/register",
      isAuthenticated: isAuthenticated
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
      path: "*",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(PageNotFound, {})
    })]
  });
}
Wrapper.propTypes = {
  location: (prop_types_default()).object.isRequired
};
;// CONCATENATED MODULE: ./src/routes/AppRouter.js






function AppRouter() {
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    dispatch(startCheckingAction());
  }, [dispatch]);
  /*
     the withrouter is to be able to detect when the page/path 
     changes and to be able to erase the errors from the state
   	*/

  var WithRouterApp = (0,react_router/* withRouter */.EN)(Wrapper);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* BrowserRouter */.VK, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(WithRouterApp, {})
  });
}
;// CONCATENATED MODULE: ./src/App.js









function App() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(es/* Provider */.zt, {
    store: redux_store,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_toastify_esm/* ToastContainer */.Ix, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(AppRouter, {})]
  });
}
;// CONCATENATED MODULE: ./src/index.js




react_dom.render( /*#__PURE__*/(0,jsx_runtime.jsx)(App, {}), document.getElementById('root'));

/***/ }),

/***/ 6700:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 2786,
	"./af.js": 2786,
	"./ar": 867,
	"./ar-dz": 4130,
	"./ar-dz.js": 4130,
	"./ar-kw": 6737,
	"./ar-kw.js": 6737,
	"./ar-ly": 6440,
	"./ar-ly.js": 6440,
	"./ar-ma": 7702,
	"./ar-ma.js": 7702,
	"./ar-sa": 6040,
	"./ar-sa.js": 6040,
	"./ar-tn": 7100,
	"./ar-tn.js": 7100,
	"./ar.js": 867,
	"./az": 1083,
	"./az.js": 1083,
	"./be": 9808,
	"./be.js": 9808,
	"./bg": 8338,
	"./bg.js": 8338,
	"./bm": 7438,
	"./bm.js": 7438,
	"./bn": 8905,
	"./bn-bd": 6225,
	"./bn-bd.js": 6225,
	"./bn.js": 8905,
	"./bo": 1560,
	"./bo.js": 1560,
	"./br": 1278,
	"./br.js": 1278,
	"./bs": 622,
	"./bs.js": 622,
	"./ca": 2468,
	"./ca.js": 2468,
	"./cs": 5822,
	"./cs.js": 5822,
	"./cv": 877,
	"./cv.js": 877,
	"./cy": 7373,
	"./cy.js": 7373,
	"./da": 4780,
	"./da.js": 4780,
	"./de": 9740,
	"./de-at": 217,
	"./de-at.js": 217,
	"./de-ch": 894,
	"./de-ch.js": 894,
	"./de.js": 9740,
	"./dv": 5300,
	"./dv.js": 5300,
	"./el": 837,
	"./el.js": 837,
	"./en-au": 8348,
	"./en-au.js": 8348,
	"./en-ca": 7925,
	"./en-ca.js": 7925,
	"./en-gb": 2243,
	"./en-gb.js": 2243,
	"./en-ie": 6436,
	"./en-ie.js": 6436,
	"./en-il": 7207,
	"./en-il.js": 7207,
	"./en-in": 4175,
	"./en-in.js": 4175,
	"./en-nz": 6319,
	"./en-nz.js": 6319,
	"./en-sg": 1662,
	"./en-sg.js": 1662,
	"./eo": 2915,
	"./eo.js": 2915,
	"./es": 7093,
	"./es-do": 2088,
	"./es-do.js": 2088,
	"./es-mx": 6112,
	"./es-mx.js": 6112,
	"./es-us": 1146,
	"./es-us.js": 1146,
	"./es.js": 7093,
	"./et": 5603,
	"./et.js": 5603,
	"./eu": 7763,
	"./eu.js": 7763,
	"./fa": 6959,
	"./fa.js": 6959,
	"./fi": 1897,
	"./fi.js": 1897,
	"./fil": 2549,
	"./fil.js": 2549,
	"./fo": 4694,
	"./fo.js": 4694,
	"./fr": 4470,
	"./fr-ca": 3049,
	"./fr-ca.js": 3049,
	"./fr-ch": 2330,
	"./fr-ch.js": 2330,
	"./fr.js": 4470,
	"./fy": 5044,
	"./fy.js": 5044,
	"./ga": 9295,
	"./ga.js": 9295,
	"./gd": 2101,
	"./gd.js": 2101,
	"./gl": 8794,
	"./gl.js": 8794,
	"./gom-deva": 7884,
	"./gom-deva.js": 7884,
	"./gom-latn": 3168,
	"./gom-latn.js": 3168,
	"./gu": 5349,
	"./gu.js": 5349,
	"./he": 4206,
	"./he.js": 4206,
	"./hi": 94,
	"./hi.js": 94,
	"./hr": 316,
	"./hr.js": 316,
	"./hu": 2138,
	"./hu.js": 2138,
	"./hy-am": 1423,
	"./hy-am.js": 1423,
	"./id": 9218,
	"./id.js": 9218,
	"./is": 135,
	"./is.js": 135,
	"./it": 626,
	"./it-ch": 150,
	"./it-ch.js": 150,
	"./it.js": 626,
	"./ja": 9183,
	"./ja.js": 9183,
	"./jv": 4286,
	"./jv.js": 4286,
	"./ka": 2105,
	"./ka.js": 2105,
	"./kk": 7772,
	"./kk.js": 7772,
	"./km": 8758,
	"./km.js": 8758,
	"./kn": 9282,
	"./kn.js": 9282,
	"./ko": 3730,
	"./ko.js": 3730,
	"./ku": 1408,
	"./ku.js": 1408,
	"./ky": 3291,
	"./ky.js": 3291,
	"./lb": 6841,
	"./lb.js": 6841,
	"./lo": 5466,
	"./lo.js": 5466,
	"./lt": 7010,
	"./lt.js": 7010,
	"./lv": 7595,
	"./lv.js": 7595,
	"./me": 9861,
	"./me.js": 9861,
	"./mi": 5493,
	"./mi.js": 5493,
	"./mk": 5966,
	"./mk.js": 5966,
	"./ml": 7341,
	"./ml.js": 7341,
	"./mn": 5115,
	"./mn.js": 5115,
	"./mr": 370,
	"./mr.js": 370,
	"./ms": 9847,
	"./ms-my": 1237,
	"./ms-my.js": 1237,
	"./ms.js": 9847,
	"./mt": 2126,
	"./mt.js": 2126,
	"./my": 6165,
	"./my.js": 6165,
	"./nb": 4924,
	"./nb.js": 4924,
	"./ne": 6744,
	"./ne.js": 6744,
	"./nl": 3901,
	"./nl-be": 9814,
	"./nl-be.js": 9814,
	"./nl.js": 3901,
	"./nn": 3877,
	"./nn.js": 3877,
	"./oc-lnc": 2135,
	"./oc-lnc.js": 2135,
	"./pa-in": 5858,
	"./pa-in.js": 5858,
	"./pl": 4495,
	"./pl.js": 4495,
	"./pt": 9520,
	"./pt-br": 7971,
	"./pt-br.js": 7971,
	"./pt.js": 9520,
	"./ro": 6459,
	"./ro.js": 6459,
	"./ru": 238,
	"./ru.js": 238,
	"./sd": 950,
	"./sd.js": 950,
	"./se": 7930,
	"./se.js": 7930,
	"./si": 124,
	"./si.js": 124,
	"./sk": 4249,
	"./sk.js": 4249,
	"./sl": 4985,
	"./sl.js": 4985,
	"./sq": 1104,
	"./sq.js": 1104,
	"./sr": 9131,
	"./sr-cyrl": 9915,
	"./sr-cyrl.js": 9915,
	"./sr.js": 9131,
	"./ss": 5606,
	"./ss.js": 5606,
	"./sv": 8760,
	"./sv.js": 8760,
	"./sw": 1172,
	"./sw.js": 1172,
	"./ta": 7333,
	"./ta.js": 7333,
	"./te": 3110,
	"./te.js": 3110,
	"./tet": 2095,
	"./tet.js": 2095,
	"./tg": 7321,
	"./tg.js": 7321,
	"./th": 9041,
	"./th.js": 9041,
	"./tk": 9005,
	"./tk.js": 9005,
	"./tl-ph": 5768,
	"./tl-ph.js": 5768,
	"./tlh": 9444,
	"./tlh.js": 9444,
	"./tr": 2397,
	"./tr.js": 2397,
	"./tzl": 8254,
	"./tzl.js": 8254,
	"./tzm": 1106,
	"./tzm-latn": 699,
	"./tzm-latn.js": 699,
	"./tzm.js": 1106,
	"./ug-cn": 9288,
	"./ug-cn.js": 9288,
	"./uk": 7691,
	"./uk.js": 7691,
	"./ur": 3795,
	"./ur.js": 3795,
	"./uz": 6791,
	"./uz-latn": 588,
	"./uz-latn.js": 588,
	"./uz.js": 6791,
	"./vi": 9822,
	"./vi.js": 9822,
	"./x-pseudo": 4378,
	"./x-pseudo.js": 4378,
	"./yo": 5805,
	"./yo.js": 5805,
	"./zh-cn": 3839,
	"./zh-cn.js": 3839,
	"./zh-hk": 5726,
	"./zh-hk.js": 5726,
	"./zh-mo": 9807,
	"./zh-mo.js": 9807,
	"./zh-tw": 4152,
	"./zh-tw.js": 4152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkclient"] = self["webpackChunkclient"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [534], function() { return __webpack_require__(5612); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.e06589260024930fc9b6.js.map