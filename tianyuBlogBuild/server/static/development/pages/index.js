module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Side.js":
/*!****************************!*\
  !*** ./components/Side.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_iconfont__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/iconfont */ "./config/iconfont.js");

var _this = undefined,
  _jsxFileName = "/home/user/Downloads/tsetup.6.3.9/components/Side.js";




var Side = function Side() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("aside", {
    id: "common-side",
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: _this,
    className: "jsx-1796084328" + " " + "avator-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/avator.jpg",
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __self: _this,
    className: "jsx-1796084328" + " " + "name-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: _this,
    className: "jsx-1796084328" + " " + "side-cat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "javascript:void(0);",
    __self: _this,
    className: "jsx-1796084328" + " " + "link-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "\u4E3B\u9875")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __self: _this,
    className: "jsx-1796084328" + " " + 'mobile-show',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 40
    }
  }, "\u6280\u672F\u535A\u5BA2"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __self: _this,
    className: "jsx-1796084328" + " " + 'mobile-show',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/life",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 40
    }
  }, "\u751F\u6D3B\u8BB0\u5F55"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 41
    }
  }, "\u5173\u4E8E\u6211"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/board",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 41
    }
  }, "\u7559\u8A00\u677F"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: _this,
    className: "jsx-1796084328" + " " + "person-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/shaotianyu/blog-front",
    target: "_blank",
    title: "\u6211\u7684github",
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "github",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 97
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://juejin.im/user/593600b0a22b9d0058fc2edd",
    target: "_blank",
    title: "\u6211\u7684\u6398\u91D1",
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_config_iconfont__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "icon-juejin",
    className: "icon-juejin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 100
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://blog.csdn.net/qq_35087256",
    target: "_blank",
    title: "\u6211\u7684csdn",
    __self: _this,
    className: "jsx-1796084328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_config_iconfont__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "icon-csdn",
    className: "icon-csdn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 88
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "1796084328",
    css: "#common-side .person-link .icon-juejin{font-size:37px;color:#3780f7;position:relative;top:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG93bmxvYWRzL3RzZXR1cC42LjMuOS9jb21wb25lbnRzL1NpZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0MyQixBQUc0QixlQUNELGNBQ0ksa0JBQ1YsUUFDWiIsImZpbGUiOiIvaG9tZS91c2VyL0Rvd25sb2Fkcy90c2V0dXAuNi4zLjkvY29tcG9uZW50cy9TaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEljb25Gb250IGZyb20gJy4uL2NvbmZpZy9pY29uZm9udCdcblxuY29uc3QgU2lkZSA9ICgpID0+IChcbiAgICA8YXNpZGUgaWQ9XCJjb21tb24tc2lkZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRvci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9hdmF0b3IuanBnXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWUtYm94XCI+PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtY2F0XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cImxpbmstYWN0aXZlXCI+5Li76aG1PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbW9iaWxlLXNob3cnPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj48YT7mioDmnK/ljZrlrqI8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbW9iaWxlLXNob3cnPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xpZmVcIj48YT7nlJ/mtLvorrDlvZU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGE+5YWz5LqO5oiRPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ib2FyZFwiPjxhPueVmeiogOadvzwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcnNvbi1saW5rXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NoYW90aWFueXUvYmxvZy1mcm9udFwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwi5oiR55qEZ2l0aHViXCI+PEljb24gdHlwZT1cImdpdGh1YlwiIC8+PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vanVlamluLmltL3VzZXIvNTkzNjAwYjBhMjJiOWQwMDU4ZmMyZWRkXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCLmiJHnmoTmjpjph5FcIj48SWNvbkZvbnQgdHlwZT1cImljb24tanVlamluXCIgY2xhc3NOYW1lPSdpY29uLWp1ZWppbicvPjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Jsb2cuY3Nkbi5uZXQvcXFfMzUwODcyNTZcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIuaIkeeahGNzZG5cIj48SWNvbkZvbnQgdHlwZT1cImljb24tY3NkblwiICBjbGFzc05hbWU9J2ljb24tY3NkbicvPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICNjb21tb24tc2lkZSAucGVyc29uLWxpbmsgLmljb24tanVlamluIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzdweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzc4MGY3O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvYXNpZGU+XG4pXG4gIFxuZXhwb3J0IGRlZmF1bHQgU2lkZSJdfQ== */\n/*@ sourceURL=/home/user/Downloads/tsetup.6.3.9/components/Side.js */"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Side);

/***/ }),

/***/ "./config/iconfont.js":
/*!****************************!*\
  !*** ./config/iconfont.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__);

var scriptUrl = '//at.alicdn.com/t/font_984288_lq36f6azytp.js';
var IconFont = antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a.createFromIconfontCN({
  scriptUrl: scriptUrl
});
/* harmony default export */ __webpack_exports__["default"] = (IconFont);

/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Side__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Side */ "./components/Side.js");

var _this = undefined,
  _jsxFileName = "/home/user/Downloads/tsetup.6.3.9/pages/index/index.js";





var Index = function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Side__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
    __self: _this,
    className: "jsx-3668499203" + " " + "home-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: _this,
    className: "jsx-3668499203" + " " + "home-btngroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __self: _this,
    className: "jsx-3668499203" + " " + "blog-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "edit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 49
    }
  }), "\u6280\u672F\u535A\u5BA2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/life",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __self: _this,
    className: "jsx-3668499203" + " " + "life-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, "\u751F\u6D3B\u8BB0\u5F55", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "swap-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 53
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: _this,
    className: "jsx-3668499203" + " " + "icp-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __self: _this,
    className: "jsx-3668499203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }, "Copyright\xA9 \u90B5\u5929\u5B87"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __self: _this,
    className: "jsx-3668499203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "http://beian.miit.gov.cn/",
    target: "_blank",
    __self: _this,
    className: "jsx-3668499203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "\u7696ICP\u590718006906\u53F7")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3668499203",
    css: ".head-wrap,.common-footer{display:none;}.icp-content{color:whitesmoke;position:absolute;bottom:20px;right:0;left:0;margin:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:center;}.icp-content p{margin-bottom:5px;font-size:12px;}.icp-content p a{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG93bmxvYWRzL3RzZXR1cC42LjMuOS9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnNCLEFBSWlCLEFBR0ssQUFVQyxBQUlQLFdBQ1osRUFqQkEsSUFHbUIsQ0FVSCxlQUNoQixFQVZhLFlBQ0osUUFDRCxPQUNLLFlBQ00sbUVBQ0Esa0JBQ25CIiwiZmlsZSI6Ii9ob21lL3VzZXIvRG93bmxvYWRzL3RzZXR1cC42LjMuOS9wYWdlcy9pbmRleC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFNpZGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWRlJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8U2lkZSAvPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiaG9tZS1jb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1idG5ncm91cFwiPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYmxvZ1wiPjxhIGNsYXNzTmFtZT1cImJsb2ctYnRuXCI+PEljb24gdHlwZT1cImVkaXRcIiAvPuaKgOacr+WNmuWuojwvYT48L0xpbms+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9saWZlXCI+PGEgY2xhc3NOYW1lPVwibGlmZS1idG5cIj7nlJ/mtLvorrDlvZU8SWNvbiB0eXBlPVwic3dhcC1yaWdodFwiIC8+PC9hPjwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNwLWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8cD5Db3B5cmlnaHTCqSDpgrXlpKnlroc8L3A+XG5cdFx0XHRcdFx0PHA+PGEgaHJlZj1cImh0dHA6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIiB0YXJnZXQ9J19ibGFuayc+55qWSUNQ5aSHMTgwMDY5MDblj7c8L2E+PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHRcdDxzdHlsZSBnbG9iYWwganN4PntgXG5cdFx0XHQuaGVhZC13cmFwLFxuXHRcdFx0LmNvbW1vbi1mb290ZXIge1xuXHRcdFx0XHRkaXNwbGF5Om5vbmU7XG5cdFx0XHR9XG5cdFx0XHQuaWNwLWNvbnRlbnQge1xuXHRcdFx0XHRjb2xvcjogd2hpdGVzbW9rZTtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDIwcHg7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdHdpZHRoOiBmaXQtY29udGVudDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXHRcdFx0LmljcC1jb250ZW50IHAge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdH1cblx0XHRcdC5pY3AtY29udGVudCBwIGEge1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=/home/user/Downloads/tsetup.6.3.9/pages/index/index.js */"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/index/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index/index.js */"./pages/index/index.js");


/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map