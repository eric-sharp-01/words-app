webpackHotUpdate("main",{

/***/ "./src/components/Home.tsx":
/*!*********************************!*\
  !*** ./src/components/Home.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_AddToPhotos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AddToPhotos */ "./node_modules/@material-ui/icons/AddToPhotos.js");
/* harmony import */ var _material_ui_icons_AddToPhotos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddToPhotos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\ClientApp\\words-app\\src\\components\\Home.tsx";
















let mapStateToProps = state => {
  return {
    currentWord: state.currentWord
  };
};

let mapDispatchToProps = {
  openModal: value => ({
    type: "OPEN_MODAL",
    payload: value
  }),
  closeModal: () => ({
    type: "CLOSE_MODAL",
    payload: null
  })
};
let connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps);

class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.search = () => {
      if (!this.state.searchText) return;
      this.setState({
        inProgress: true
      });
      let text = this.state.searchText;
      fetch(`/api/words?name=${text}`).then(res => res.json()).then(res => {
        if (!res.data) {
          this.setState({
            definitions: [],
            addToDict: false
          });
          return;
        }

        let definitions = res.data.definitions.sort((a, b) => a.partOfSpeech > b.partOfSpeech ? 1 : -1);
        let addToDict = res.addToDict;
        this.setState({
          definitions,
          addToDict,
          inProgress: false
        });
      });
    };

    this.add = () => {
      this.setState({
        inProgress: true
      });
      let word = this.state.searchText;
      fetch(`/api/words`, {
        method: 'POST',
        // or 'PUT'
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          word
        })
      }).then(response => response.json()).then(data => {
        this.setState({
          addToDict: false,
          isOpenAlert: data.flag
        });
      }).catch(error => {
        console.error('Error:', error);
        this.setState({
          inProgress: false
        });
        alert();
      });
    };

    this.enter = e => {
      if (e.which !== 13) return;
      this.search();
    };

    this.change = (field, value) => {
      this.setState({
        [field]: value
      });
    };

    this.closeAlert = () => {
      this.setState(prev => ({
        isOpenAlert: !prev.isOpenAlert
      }));
    };

    this.state = {
      definitions: [],
      searchText: "",
      word: null,
      addToDict: false,
      isOpenAlert: false,
      inProgress: false
    };
  }

  componentDidMount() {
    if (this.props.currentWord) {
      this.setState({
        searchText: this.props.currentWord
      }, this.search);
    }
  }

  componentDidUpdate(prevProps) {}

  render() {
    let wordList = null;

    if (this.state.inProgress) {
      wordList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 24
        }
      });
    } else {
      if (this.state.definitions.length) {
        let list = this.state.definitions.map((item, index) => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            key: index,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 28
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
            button: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
            primary: item.definition,
            secondary: item.partOfSpeech,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 33
            }
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {
            component: "li",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }
          }));
        });
        wordList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: "word-list",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 28
          }
        }, list);
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      maxWidth: "lg",
      fixed: true,
      className: "home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }, "WORDS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-main",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "word-search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "div",
      elevation: 3,
      className: "paper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      onKeyPress: this.enter,
      className: "input-base flex-1",
      value: this.state.searchText,
      onChange: e => this.change('searchText', e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "button",
      className: "icon-button",
      "aria-label": "search",
      onClick: this.search,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "divider",
      orientation: "vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "primary",
      className: "icon-button",
      disabled: !this.state.addToDict,
      onClick: this.add,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AddToPhotos__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 29
      }
    })))), wordList, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      open: this.state.isOpenAlert,
      autoHideDuration: 2000,
      onClose: this.closeAlert,
      TransitionComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Fade"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12__["default"], {
      elevation: 6,
      variant: "filled",
      onClose: this.closeAlert,
      severity: "success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 21
      }
    }, "The word is saved."))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (connector(Home));

/***/ })

})
//# sourceMappingURL=main.5ab18e4b363e0b5645a5.hot-update.js.map