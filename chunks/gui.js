var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([[4],{

/***/ 1428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "html,\r\nbody,\r\n.index_app_2mqDO {\r\n    /* probably unecessary, transitional until layout is refactored */\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n\r\n    /* Setting min height/width makes the UI scroll below those sizes */\r\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\r\n}\r\n\r\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\r\n\r\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\r\n", ""]);

// exports
exports.locals = {
	"app": "index_app_2mqDO"
};

/***/ }),

/***/ 1429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(105);
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(114);
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(139);
/* harmony import */ var _lib_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









var onClickLogo = function onClickLogo() {
  window.open('https://github.com/powerbox1000/dev-blocks/blob/main/README.md');
};

var handleTelemetryModalCancel = function handleTelemetryModalCancel() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('User canceled telemetry modal');
};

var handleTelemetryModalOptIn = function handleTelemetryModalOptIn() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('User opted into telemetry');
};

var handleTelemetryModalOptOut = function handleTelemetryModalOptOut() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('User opted out of telemetry');
};

function urlOptionValue(name, defaultValue) {
  var matches = window.location.href.match(new RegExp("[?&]".concat(name, "=([^&]*)&?")));
  return matches ? matches[1] : defaultValue;
}

function urlFlag(name) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var matches = window.location.href.match(new RegExp("[?&]".concat(name, "=([^&]+)")));
  var yes = defaultValue;

  if (matches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      yes = JSON.parse(matches[1]);
    } catch (_unused) {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      yes = matches[1];
    }
  }

  return yes;
}
/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */


/* harmony default export */ __webpack_exports__["default"] = (function (appTarget) {
  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].setAppElement(appTarget); // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.

  var WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_2__[/* compose */ "d"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
  var loadGriffpatch = urlFlag('load_griffpatch', false);

  if (true) {
    // From https://github.com/griffpatch/Scratch3-Dev-Tools/blob/master/inject.user.js
    // Ideally, I'd just load inject.user.js directly, but jsdelivr seems to omit it.
    document.head.appendChild(Object.assign(document.createElement('script'), {
      src: 'https://cdn.jsdelivr.net/gh/griffpatch/Scratch3-Dev-Tools/inject3.js'
    }));
    document.head.appendChild(Object.assign(document.createElement('link'), {
      href: 'https://cdn.jsdelivr.net/gh/griffpatch/Scratch3-Dev-Tools/inject.css',
      rel: 'stylesheet'
    }));
  }

  var loadPlugin = urlOptionValue('load_plugin', null);

  if (loadPlugin) {
    document.head.appendChild(Object.assign(document.createElement('script'), {
      src: decodeURIComponent(loadPlugin)
    }));
  } // TODO a hack for testing the backpack, allow backpack host to be set by url param
  // (Currently ignored; it'll always use localStorage)


  var backpackHost = decodeURIComponent(urlOptionValue('backpack_host', 'localStorage'));
  var cloudHost = decodeURIComponent(urlOptionValue('cloud_host', 'localStorage'));
  var username = urlOptionValue('username', 'username');
  var simulateScratchDesktop = urlFlag('isScratchDesktop', false);
  var compatibilityMode = urlFlag('compatibility_mode', true);
  var extensionURL = urlOptionValue('(?:extension|url)', null);
  var imposeLimits = urlFlag('limits', true);

  var onVmInit = function onVmInit(vm) {
    if (extensionURL) {
      vm.extensionManager.loadExtensionURL(decodeURIComponent(extensionURL));
    }

    if (!imposeLimits) {
      vm.requireLimits(imposeLimits);
    }

    window.vm = vm;
  };

  if ( true && (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
    // Warn before navigating away
    window.onbeforeunload = function () {
      return true;
    };
  }

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
  simulateScratchDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    isScratchDesktop: true,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    backpackVisible: true,
    backpackHost: backpackHost,
    cloudHost: cloudHost,
    compatibilityMode: compatibilityMode,
    hasCloudPermission: true,
    canSave: false,
    onClickLogo: onClickLogo,
    onVmInit: onVmInit,
    username: username
  }), appTarget);
});

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1428);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(12)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(956);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(958);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(970);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(987);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(105);
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(220);
/* harmony import */ var _lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(221);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(711);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_layout_constants_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
// Polyfills



 // For Safari 9









var standardStageHeight = _lib_layout_constants_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "d"].standardStageHeight; // Register "base" page view

_lib_analytics__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].pageview('/');
var appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_10___default.a.app;
appTarget.style.minHeight = standardStageHeight + 280 + 'px';
document.body.appendChild(appTarget);

if (Object(_lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])()) {
  // require needed here to avoid importing unsupported browser-crashing code
  // at the top level
  __webpack_require__(1429).default(appTarget);
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].setAppElement(appTarget);
  var WrappedBrowserModalComponent = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], true
  /* localesOnly */
  );

  var handleBack = function handleBack() {}; // eslint-disable-next-line react/jsx-no-bind


  react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[955,0]]]);
//# sourceMappingURL=gui.js.map