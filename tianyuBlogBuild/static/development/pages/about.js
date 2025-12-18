((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/about.js"],{

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_e21296ef0094940af1b6 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e21296ef0094940af1b6 */ "dll-reference dll_e21296ef0094940af1b6"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/about/index.js":
/*!******************************!*\
  !*** ./pages/about/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _jsxFileName = "/home/user/Downloads/tsetup.6.3.9/pages/about/index.js";
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var About = /*#__PURE__*/function (_Component) {
  function About() {
    _classCallCheck(this, About);
    return _callSuper(this, About, arguments);
  }
  _inherits(About, _Component);
  return _createClass(About, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "home-main-wrap about-main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrap-lg clearfix",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-top",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-container clearfix",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-side f-r",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "a-title pc-show",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 37
        }
      }, "\u4E2A\u4EBA\u4FE1\u606F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/avator.jpg",
        alt: "\u90B5\u5929\u5B87\u7684\u5934\u50CF",
        className: "about-pic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 37
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-msg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 41
        }
      }, "\u59D3\u540D\uFF1ASoy\xA0|\xA0\u90B5\u5929\u5B87"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 41
        }
      }, "\u804C\u4E1A\uFF1AWeb\u524D\u7AEF\u5F00\u53D1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 41
        }
      }, "QQ\uFF1A840812407"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 41
        }
      }, "\u90AE\u7BB1\uFF1Am18010777026@613.com"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-desc f-l",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 37
        }
      }, "25\u5C81\uFF0C\u7537\uFF0CLOL\u9AA8\u7070\u7EA7\u73A9\u5BB6\uFF0C\u827E\u6B27\u5C3C\u4E9A\u7816\u77F35\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 37
        }
      }, "2016\u5E74\u6BD5\u4E1A\u4E8E\u5B89\u5FBD\u5E08\u8303\u5927\u5B66\u7696\u6C5F\u5B66\u9662\uFF0C\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F\u4E13\u4E1A\u3002\u5927\u5B66\u671F\u95F4\u6253\u8FC7\u5DE5\uFF0C\u505A\u8FC7\u6D41\u6C34\u7EBF\uFF0C\u53D1\u8FC7\u4F20\u5355\uFF0C\u505A\u8FC7\u534E\u5C14\u8857\u82F1\u8BED\u7535\u8BDD\u5BA2\u670D\uFF08\u987A\u4FBF\u62FF\u8FC7\u5BA2\u670D\u4F18\u79C0\u5956^_^\uFF09\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 37
        }
      }, "2016-2019\u5E74\u5165\u804C\u4E0A\u6D77\u7422\u672C\u7F51\u7EDC\uFF0C\u4EFB\u524D\u7AEF\u7EC4\u8D1F\u8D23\u4EBA\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 37
        }
      }, "\u73B0\u5C31\u804C\u4E8E\u4EBA\u529B\u7A9D\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 37
        }
      }, "\u5DE5\u4F5C\u8FD9\u51E0\u5E74\uFF0C\u4E3B\u8981\u662F\u524D\u7AEF\u65B9\u5411\uFF0Cmootools.js\u5230jquery\uFF0Cangular1.x\u5230angular4.x+\uFF0Cgulp\u3001grunt\u5230webpack\uFF0Cvue1.x\u52302.x\uFF0Creact^15\u5230\u76EE\u524D\u7528\u7684react^16+nextjs\uFF0C\u4EE5\u4E0A\u8FD9\u4E9B\u65E0\u4E00\u7CBE\u901A\u3002nodejs\uFF08express\uFF0Ckoa\uFF09\u53EA\u662FCURD\u7EA7\u522B\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/shaotianyu/blog-front",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 40
        }
      }, "Github\uFF1Ahttps://github.com/shaotianyu/blog-front"), "(\u535A\u5BA2\u6E90\u7801\uFF0C\u559C\u6B22\u7684\u53EF\u4EE5\u7ED9\u4E2Astar\u652F\u6301\u4E00\u4E0B)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://blog.csdn.net/qq_35087256",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 40
        }
      }, "CSDN\uFF1Ahttps://blog.csdn.net/qq_35087256"), "(\u5DF2\u7A81\u7834\u5341\u4E07+\u9605\u8BFB\u91CF^_^)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://juejin.im/user/593600b0a22b9d0058fc2edd",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 40
        }
      }, "\u6398\u91D1\uFF1Ahttps://juejin.im/user/593600b0a22b9d0058fc2edd")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 37
        }
      }, "\u770B\u5B8C\u7684\u4E66\uFF1A\u300Ajavascript\u4ECE\u5165\u95E8\u5230\u7CBE\u901A\u300B\uFF0C\u300Ajavascript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u300B,\u300AES6\u6807\u51C6\u5165\u95E8\u300B\uFF0C\u300A\u6DF1\u5165\u7406\u89E3ES6\u300B\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 37
        }
      }, "\u5728\u770B\u7684\u4E66\uFF1A\u300A\u6DF1\u5165\u6D45\u51FAnode\u300B\uFF0C\u300A\u4F60\u4E0D\u77E5\u9053\u7684javascript\uFF08\u4E0A\uFF09\u300B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 37
        }
      }, "\u672C\u7AD9\u7528\u7684\u4E00\u4E9B\u57FA\u7840\u6280\u672F\u6808\uFF1AReact+NextJs+Redux\u5B9E\u73B0\u7684SSR\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 37
        }
      }, "\u8FD8\u6709\u535A\u5BA2\u76F8\u5BF9\u5E94\u7684\u4E00\u4E2A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u4E5F\u662F\u57FA\u672C\u7684React\u3001Redux\uFF0C\u5404\u79CD\u5B50\u7EA7\u8DEF\u7531\u5D4C\u5957\uFF0C\u7136\u540E\u5288\u91CC\u556A\u5566\u5730\u8FDB\u884C\u589E\u5220\u6539\u67E5\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 37
        }
      }, "\u535A\u5BA2\u7684\u670D\u52A1\u7AEF\u7528\u7684\u662FCentos\uFF0CExpress\uFF08\u5373\u5C06\u7528Nestjs\u91CD\u6784\uFF09\u3001Mongoose\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 37
        }
      }, "That's all\uFF0Cthank you\uFF01")))))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (About);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 6:
/*!************************************!*\
  !*** multi ./pages/about/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/about', function() {
module.exports = __webpack_require__(/*! ./pages/about/index.js */"./pages/about/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_e21296ef0094940af1b6":
/*!*******************************************!*\
  !*** external "dll_e21296ef0094940af1b6" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_e21296ef0094940af1b6;

/***/ })

},[[6,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=about.js.map