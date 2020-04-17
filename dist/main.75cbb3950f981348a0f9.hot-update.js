webpackHotUpdate("main",{

/***/ "./src/components/Notebook.tsx":
/*!*************************************!*\
  !*** ./src/components/Notebook.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\ClientApp\\words-app\\src\\components\\Notebook.tsx";








let mapDispatchToProps = {
  openModal: value => ({
    type: "OPEN_MODAL",
    payload: value
  }),
  closeModal: () => ({
    type: "CLOSE_MODAL",
    payload: null
  }),
  setWord: value => ({
    type: "SET_WORD",
    payload: value
  })
};
let connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps);

class Notebook extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleClick = e => {
      let name = e.currentTarget.getAttribute('data-word') || "";
      this.props.setWord(name);
      this.props.history.push("/");
    };

    this.state = {
      words: [],
      inProgress: true
    };
  }

  componentDidMount() {
    fetch("/api/words/all").then(res => res.json()).then(res => {
      let words = res.words.sort();
      this.setState({
        words,
        inProgress: false
      });
    });
  }

  render() {
    let content = null;

    if (this.state.inProgress) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 23
        }
      });
    } else {
      let list = this.state.words.map((word, index) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
          item: true,
          xs: 6,
          sm: 4,
          md: 2,
          key: index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "word-card",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          onClick: this.handleClick,
          "data-word": word,
          color: "primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 29
          }
        }, word)));
      });
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
        container: true,
        spacing: 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 23
        }
      }, list);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      maxWidth: "lg",
      fixed: true,
      className: "notebook",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, "Notebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      spacing: 1,
      className: "grid-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, content));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Notebook)));

/***/ })

})
//# sourceMappingURL=main.75cbb3950f981348a0f9.hot-update.js.map