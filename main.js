"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n#main-container {\n    display: flex;\n    height: 100vh;\n    gap: 5vh;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n#boards-section {\n    display: flex;\n    height: 50vh;\n    gap: 10vw;\n    justify-content: center;\n    align-items: center;\n}\n#player-grid{\n   display: flex;\n   flex-wrap: wrap;\n   width: 400px;\n}\n\n#player-grid > * {\n    border: 1px solid black;\n    width: 40px;\n    height: 40px;\n    aspect-ratio: 1 / 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#computer-grid{\n    display: flex;\n    flex-wrap: wrap;\n    width: 400px;\n }\n \n #computer-grid > * {\n     border: 1px solid black;\n     width: 40px;\n     height: 40px;\n     aspect-ratio: 1 / 1;\n     display: flex;\n     justify-content: center;\n     align-items: center;\n }\n\n #computer-grid{\n    display: none;\n }\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,aAAa;IACb,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;AACA;GACG,aAAa;GACb,eAAe;GACf,YAAY;AACf;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;CACf;;CAEA;KACI,uBAAuB;KACvB,WAAW;KACX,YAAY;KACZ,mBAAmB;KACnB,aAAa;KACb,uBAAuB;KACvB,mBAAmB;CACvB;;CAEA;IACG,aAAa;CAChB","sourcesContent":["* {\n    box-sizing: border-box;\n}\n#main-container {\n    display: flex;\n    height: 100vh;\n    gap: 5vh;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n#boards-section {\n    display: flex;\n    height: 50vh;\n    gap: 10vw;\n    justify-content: center;\n    align-items: center;\n}\n#player-grid{\n   display: flex;\n   flex-wrap: wrap;\n   width: 400px;\n}\n\n#player-grid > * {\n    border: 1px solid black;\n    width: 40px;\n    height: 40px;\n    aspect-ratio: 1 / 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#computer-grid{\n    display: flex;\n    flex-wrap: wrap;\n    width: 400px;\n }\n \n #computer-grid > * {\n     border: 1px solid black;\n     width: 40px;\n     height: 40px;\n     aspect-ratio: 1 / 1;\n     display: flex;\n     justify-content: center;\n     align-items: center;\n }\n\n #computer-grid{\n    display: none;\n }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gamelogic.js":
/*!**************************!*\
  !*** ./src/gamelogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/*
Battleship, yet another big milestone in the TOP curriculum... lets try to demistify the issue....
I need a ship function, that can see the length of the ship.. take it as an argument
*/


const Ship = (length, orientation, name) => {
  let hp = length;
  let owner = name;

  const getOrientation = () => {
    return orientation;
  };
  const getLength = () => {
    // vertical or horizontal
    return length;
  };
  const getHP = () => {
    return hp;
  };
  const hit = () => {
    hp -= 1;
    return hp;
  };

  const isSunk = () => {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.events.emit("shipSunk", owner);
    if (hp == 0) return true;
    return false;
  };

  return { isSunk, hit, getHP, getLength, getOrientation };
};

const Gameboard = (name) => {
  let gameboard = [[], [], [], [], [], [], [], [], [], []];
  let sunkenShips = 0;
  const owner = name;

  const sunkenShipCount = () => {
    sunkenShips++;
  };
  const verifyGameState = () => {
    if (sunkenShips == 5) _pubsub__WEBPACK_IMPORTED_MODULE_0__.events.emit("gameOver", owner);
  };

  const getGameboard = () => {
    return gameboard;
  };
  const placeShip = (x, y, ship) => {
    if (ship.getOrientation() == "Vertical" && y + ship.getLength() > 10) {
      return "this ship doesnt fit vertically";
    }
    if (ship.getOrientation() == "Horizontal" && x + ship.getLength() > 10) {
      return "this ship doesnt fit horizontally";
    }
    function shipExists() {
      let undefinedCounter = 0;
      for (let i = 0; i < ship.getLength(); i++) {
        if (ship.getOrientation() == "Vertical") {
          gameboard[x][y + i] == undefined || gameboard[x][y + i] == null
            ? undefinedCounter++
            : undefinedCounter--;
        } else {
          gameboard[x + i][y] == undefined || gameboard[x + i][y] == null
            ? undefinedCounter++
            : undefinedCounter--;
        }
      }
      return undefinedCounter !== ship.getLength() ? true : false;
    }
    if (shipExists()) return "there is a ship already";

    for (let i = 0; i < ship.getLength(); i++) {
      if (ship.getOrientation() == "Vertical") {
        gameboard[x][y + i] = ship;
      } else {
        gameboard[x + i][y] = ship;
      }
    }
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.events.emit("shipPlaced", ship.owner);
    return "ship succesfully placed";
  };
  const receiveAttack = (x, y) => {
    if (gameboard[x][y]) {
      _pubsub__WEBPACK_IMPORTED_MODULE_0__.events.emit("rightHit");
      gameboard[x][y].hit();
      return true;
    } else {
      gameboard[x][y];
      _pubsub__WEBPACK_IMPORTED_MODULE_0__.events.emit("wrongHit", (x, y));
      return false;
    }
  };
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.events.on("shipSunk", sunkenShipCount(), verifyGameState());
  return { receiveAttack, getGameboard, placeShip };
};
//players need to essentially play... there needs to be two different gameboards too, wich might be tricky.

const Player = (name) => {
  const userName = name;

  let turn = 0;
  let lastMove = {
    hit: false,
    x: undefined,
    y: undefined,
  };

  const getTurnCount = () => {
    return turn;
  };
  const getLastMove = () => {
    return lastMove;
  };
  const incrementTurn = () => {
    turn++;
  };
  const playHuman = (x, y, computerBoard) => {
    computerBoard.receiveAttack[x][y];
  };
  const playAI = (humanBoard) => {
    const randomNumber = (max, min) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    if (!lastMove.hit) {
      const x = randomNumber(11, 0);
      const y = randomNumber(11, 0);
      if (humanBoard.receiveAttack(x, y)) {
        lastMove.hit = true;
      }
      lastMove.x = x;
      lastMove.y = y;
    } else {
      let x = randomNumber(1, 0);
      let y = randomNumber(1, 0);
      while (x == 0 && y == 0 && !(x == 1 && y == 1)) {
        x = randomNumber(1, 0);
        y = randomNumber(1, 0);
      }
      humanBoard.receiveAttack(lastMove.x + x, lastMove.y + y);
    }
  };

  return { playAI, incrementTurn, getTurnCount, playHuman, getLastMove };
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gamelogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamelogic */ "./src/gamelogic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



//now think about the game loop
// 1st stage, setup your name, and start the game
// 2nd stage, place your ships 5x, do computer should do the same
// 3rd stage, attempt to hit, while all ships not sunk continue game
//4rd stage, when all ships sunk = game over

//makign the divs !!

const playerGrid = document.querySelector("#player-grid");
const computerGrid = document.querySelector("#computer-grid");
const orientationButton = document.querySelector("#orientation-button");

for (var i = 0; i < 100; i++) {
  const el = document.createElement("div");
  if (i < 10) {
    el.classList.add("item-" + "0" + i);
    el.id = `${el.className.substr(-1, 1)}${9 - el.className.substr(-2, 1)}`;
    el.textContent = el.id;
  } else {
    el.classList.add("item-" + i);
    el.id = `${el.className.substr(-1, 1)}${9 - el.className.substr(-2, 1)}`;
    el.textContent = el.id;
  }
  playerGrid.appendChild(el);
}

for (var i = 0; i < 100; i++) {
  const el = document.createElement("div");
  if (i < 10) {
    el.classList.add("item-" + "0" + i);
    el.textContent = `${el.className.substr(-1, 1)}${
      9 - el.className.substr(-2, 1)
    }`;
  } else {
    el.classList.add("item-" + i);
    el.textContent = `${el.className.substr(-1, 1)}${
      9 - el.className.substr(-2, 1)
    }`;
  }
  computerGrid.appendChild(el);
}
// instanciate the boards, ships and players!
const humanBoard = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Gameboard)("human");
const computerBoard = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Gameboard)("computer");
//lets add some event listeners!
let shipsPlaced = 0;
playerGrid.addEventListener("click", (e) => {
  const coordinates = e.target.id;
  const x = Number(coordinates.substr(0, 1));
  const y = Number(coordinates.substr(1, 1));
  switch (true) {
    case shipsPlaced == 0:
      const destroyerShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(6, orientationButton.textContent, "human");
      if (
        humanBoard.placeShip(x, y, destroyerShip) == "ship succesfully placed"
      );
      {
        shipsPlaced++;
      }
      break;
    case shipsPlaced == 1:
      const destructiveShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(5, orientationButton.textContent, "human");
      if (
        humanBoard.placeShip(x, y, destructiveShip) == "ship succesfully placed"
      ) {
        shipsPlaced++;
      }
      break;
    case shipsPlaced == 2:
      const bigShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(4, orientationButton.textContent, "human");
      if (humanBoard.placeShip(x, y, bigShip) == "ship succesfully placed") {
        shipsPlaced++;
      }
      break;
    case shipsPlaced == 3:
      const funnyShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, orientationButton.textContent, "human");
      if (humanBoard.placeShip(x, y, funnyShip) == "ship succesfully placed");
      {
        shipsPlaced++;
      }
      break;
    case shipsPlaced == 4:
      const smallShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, orientationButton.textContent, "human");
      if (humanBoard.placeShip(x, y, smallShip) == "ship succesfully placed");
      {
        shipsPlaced++;
      }
      break;
  }
  displayController.renderPlacement();
  console.log(humanBoard.getGameboard());
});

computerGrid.addEventListener("click", (e) => {});

orientationButton.addEventListener("click", (e) => {
  if (orientationButton.textContent === "Horizontal") {
    orientationButton.textContent = "Vertical";
  } else {
    orientationButton.textContent = "Horizontal";
  }
});

const displayController = (() => {
  const renderPlacement = () => {
    const board = humanBoard.getGameboard();
    for (let i = 0; i < 10; i++) {
      for (let z = 0; z < 10; z++) {
        if (board[i][z] == undefined) {
          document.getElementById(`${i}${z}`).textContent = "";
        } else {
          document.getElementById(`${i}${z}`).style.backgroundColor = "black";
        }
      }
    }
  };

  return { renderPlacement };
})();


/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
//events - a super-basic Javascript (publish subscribe) pattern

const events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function (eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (fn) {
        fn(data);
      });
    }
  },
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdCLDJCQUEyQjtBQUNuRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBUztBQUM1QixzQkFBc0IscURBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0EscUNBQXFDLEVBQUUsRUFBRSxFQUFFO0FBQzNDLFVBQVU7QUFDVixxQ0FBcUMsRUFBRSxFQUFFLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pIRDs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3B1YnN1Yi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBnYXA6IDV2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNib2FyZHMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgZ2FwOiAxMHZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3BsYXllci1ncmlke1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC13cmFwOiB3cmFwO1xcbiAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuI3BsYXllci1ncmlkID4gKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbXB1dGVyLWdyaWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiB9XFxuIFxcbiAjY29tcHV0ZXItZ3JpZCA+ICoge1xcbiAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICB3aWR0aDogNDBweDtcXG4gICAgIGhlaWdodDogNDBweDtcXG4gICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuICNjb21wdXRlci1ncmlke1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztJQUNULHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtHQUNHLGFBQWE7R0FDYixlQUFlO0dBQ2YsWUFBWTtBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0NBRUE7S0FDSSx1QkFBdUI7S0FDdkIsV0FBVztLQUNYLFlBQVk7S0FDWixtQkFBbUI7S0FDbkIsYUFBYTtLQUNiLHVCQUF1QjtLQUN2QixtQkFBbUI7Q0FDdkI7O0NBRUE7SUFDRyxhQUFhO0NBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBnYXA6IDV2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNib2FyZHMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgZ2FwOiAxMHZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3BsYXllci1ncmlke1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC13cmFwOiB3cmFwO1xcbiAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuI3BsYXllci1ncmlkID4gKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbXB1dGVyLWdyaWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiB9XFxuIFxcbiAjY29tcHV0ZXItZ3JpZCA+ICoge1xcbiAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICB3aWR0aDogNDBweDtcXG4gICAgIGhlaWdodDogNDBweDtcXG4gICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuICNjb21wdXRlci1ncmlke1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKlxuQmF0dGxlc2hpcCwgeWV0IGFub3RoZXIgYmlnIG1pbGVzdG9uZSBpbiB0aGUgVE9QIGN1cnJpY3VsdW0uLi4gbGV0cyB0cnkgdG8gZGVtaXN0aWZ5IHRoZSBpc3N1ZS4uLi5cbkkgbmVlZCBhIHNoaXAgZnVuY3Rpb24sIHRoYXQgY2FuIHNlZSB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLi4gdGFrZSBpdCBhcyBhbiBhcmd1bWVudFxuKi9cbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5jb25zdCBTaGlwID0gKGxlbmd0aCwgb3JpZW50YXRpb24sIG5hbWUpID0+IHtcbiAgbGV0IGhwID0gbGVuZ3RoO1xuICBsZXQgb3duZXIgPSBuYW1lO1xuXG4gIGNvbnN0IGdldE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfTtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgIC8vIHZlcnRpY2FsIG9yIGhvcml6b250YWxcbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBnZXRIUCA9ICgpID0+IHtcbiAgICByZXR1cm4gaHA7XG4gIH07XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBocCAtPSAxO1xuICAgIHJldHVybiBocDtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgZXZlbnRzLmVtaXQoXCJzaGlwU3Vua1wiLCBvd25lcik7XG4gICAgaWYgKGhwID09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4geyBpc1N1bmssIGhpdCwgZ2V0SFAsIGdldExlbmd0aCwgZ2V0T3JpZW50YXRpb24gfTtcbn07XG5cbmNvbnN0IEdhbWVib2FyZCA9IChuYW1lKSA9PiB7XG4gIGxldCBnYW1lYm9hcmQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuICBsZXQgc3Vua2VuU2hpcHMgPSAwO1xuICBjb25zdCBvd25lciA9IG5hbWU7XG5cbiAgY29uc3Qgc3Vua2VuU2hpcENvdW50ID0gKCkgPT4ge1xuICAgIHN1bmtlblNoaXBzKys7XG4gIH07XG4gIGNvbnN0IHZlcmlmeUdhbWVTdGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoc3Vua2VuU2hpcHMgPT0gNSkgZXZlbnRzLmVtaXQoXCJnYW1lT3ZlclwiLCBvd25lcik7XG4gIH07XG5cbiAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcIlZlcnRpY2FsXCIgJiYgeSArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkge1xuICAgICAgcmV0dXJuIFwidGhpcyBzaGlwIGRvZXNudCBmaXQgdmVydGljYWxseVwiO1xuICAgIH1cbiAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09IFwiSG9yaXpvbnRhbFwiICYmIHggKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHtcbiAgICAgIHJldHVybiBcInRoaXMgc2hpcCBkb2VzbnQgZml0IGhvcml6b250YWxseVwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaGlwRXhpc3RzKCkge1xuICAgICAgbGV0IHVuZGVmaW5lZENvdW50ZXIgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgICBnYW1lYm9hcmRbeF1beSArIGldID09IHVuZGVmaW5lZCB8fCBnYW1lYm9hcmRbeF1beSArIGldID09IG51bGxcbiAgICAgICAgICAgID8gdW5kZWZpbmVkQ291bnRlcisrXG4gICAgICAgICAgICA6IHVuZGVmaW5lZENvdW50ZXItLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lYm9hcmRbeCArIGldW3ldID09IHVuZGVmaW5lZCB8fCBnYW1lYm9hcmRbeCArIGldW3ldID09IG51bGxcbiAgICAgICAgICAgID8gdW5kZWZpbmVkQ291bnRlcisrXG4gICAgICAgICAgICA6IHVuZGVmaW5lZENvdW50ZXItLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZENvdW50ZXIgIT09IHNoaXAuZ2V0TGVuZ3RoKCkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIGlmIChzaGlwRXhpc3RzKCkpIHJldHVybiBcInRoZXJlIGlzIGEgc2hpcCBhbHJlYWR5XCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lYm9hcmRbeCArIGldW3ldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzLmVtaXQoXCJzaGlwUGxhY2VkXCIsIHNoaXAub3duZXIpO1xuICAgIHJldHVybiBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCI7XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmIChnYW1lYm9hcmRbeF1beV0pIHtcbiAgICAgIGV2ZW50cy5lbWl0KFwicmlnaHRIaXRcIik7XG4gICAgICBnYW1lYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZWJvYXJkW3hdW3ldO1xuICAgICAgZXZlbnRzLmVtaXQoXCJ3cm9uZ0hpdFwiLCAoeCwgeSkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgZXZlbnRzLm9uKFwic2hpcFN1bmtcIiwgc3Vua2VuU2hpcENvdW50KCksIHZlcmlmeUdhbWVTdGF0ZSgpKTtcbiAgcmV0dXJuIHsgcmVjZWl2ZUF0dGFjaywgZ2V0R2FtZWJvYXJkLCBwbGFjZVNoaXAgfTtcbn07XG4vL3BsYXllcnMgbmVlZCB0byBlc3NlbnRpYWxseSBwbGF5Li4uIHRoZXJlIG5lZWRzIHRvIGJlIHR3byBkaWZmZXJlbnQgZ2FtZWJvYXJkcyB0b28sIHdpY2ggbWlnaHQgYmUgdHJpY2t5LlxuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IG5hbWU7XG5cbiAgbGV0IHR1cm4gPSAwO1xuICBsZXQgbGFzdE1vdmUgPSB7XG4gICAgaGl0OiBmYWxzZSxcbiAgICB4OiB1bmRlZmluZWQsXG4gICAgeTogdW5kZWZpbmVkLFxuICB9O1xuXG4gIGNvbnN0IGdldFR1cm5Db3VudCA9ICgpID0+IHtcbiAgICByZXR1cm4gdHVybjtcbiAgfTtcbiAgY29uc3QgZ2V0TGFzdE1vdmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxhc3RNb3ZlO1xuICB9O1xuICBjb25zdCBpbmNyZW1lbnRUdXJuID0gKCkgPT4ge1xuICAgIHR1cm4rKztcbiAgfTtcbiAgY29uc3QgcGxheUh1bWFuID0gKHgsIHksIGNvbXB1dGVyQm9hcmQpID0+IHtcbiAgICBjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2tbeF1beV07XG4gIH07XG4gIGNvbnN0IHBsYXlBSSA9IChodW1hbkJvYXJkKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKG1heCwgbWluKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9O1xuICAgIGlmICghbGFzdE1vdmUuaGl0KSB7XG4gICAgICBjb25zdCB4ID0gcmFuZG9tTnVtYmVyKDExLCAwKTtcbiAgICAgIGNvbnN0IHkgPSByYW5kb21OdW1iZXIoMTEsIDApO1xuICAgICAgaWYgKGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KSkge1xuICAgICAgICBsYXN0TW92ZS5oaXQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgbGFzdE1vdmUueCA9IHg7XG4gICAgICBsYXN0TW92ZS55ID0geTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1iZXIoMSwgMCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bWJlcigxLCAwKTtcbiAgICAgIHdoaWxlICh4ID09IDAgJiYgeSA9PSAwICYmICEoeCA9PSAxICYmIHkgPT0gMSkpIHtcbiAgICAgICAgeCA9IHJhbmRvbU51bWJlcigxLCAwKTtcbiAgICAgICAgeSA9IHJhbmRvbU51bWJlcigxLCAwKTtcbiAgICAgIH1cbiAgICAgIGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayhsYXN0TW92ZS54ICsgeCwgbGFzdE1vdmUueSArIHkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBwbGF5QUksIGluY3JlbWVudFR1cm4sIGdldFR1cm5Db3VudCwgcGxheUh1bWFuLCBnZXRMYXN0TW92ZSB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCwgU2hpcCwgUGxheWVyIH0gZnJvbSBcIi4vZ2FtZWxvZ2ljXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vL25vdyB0aGluayBhYm91dCB0aGUgZ2FtZSBsb29wXG4vLyAxc3Qgc3RhZ2UsIHNldHVwIHlvdXIgbmFtZSwgYW5kIHN0YXJ0IHRoZSBnYW1lXG4vLyAybmQgc3RhZ2UsIHBsYWNlIHlvdXIgc2hpcHMgNXgsIGRvIGNvbXB1dGVyIHNob3VsZCBkbyB0aGUgc2FtZVxuLy8gM3JkIHN0YWdlLCBhdHRlbXB0IHRvIGhpdCwgd2hpbGUgYWxsIHNoaXBzIG5vdCBzdW5rIGNvbnRpbnVlIGdhbWVcbi8vNHJkIHN0YWdlLCB3aGVuIGFsbCBzaGlwcyBzdW5rID0gZ2FtZSBvdmVyXG5cbi8vbWFraWduIHRoZSBkaXZzICEhXG5cbmNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllci1ncmlkXCIpO1xuY29uc3QgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdXRlci1ncmlkXCIpO1xuY29uc3Qgb3JpZW50YXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yaWVudGF0aW9uLWJ1dHRvblwiKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmIChpIDwgMTApIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1cIiArIFwiMFwiICsgaSk7XG4gICAgZWwuaWQgPSBgJHtlbC5jbGFzc05hbWUuc3Vic3RyKC0xLCAxKX0kezkgLSBlbC5jbGFzc05hbWUuc3Vic3RyKC0yLCAxKX1gO1xuICAgIGVsLnRleHRDb250ZW50ID0gZWwuaWQ7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcIml0ZW0tXCIgKyBpKTtcbiAgICBlbC5pZCA9IGAke2VsLmNsYXNzTmFtZS5zdWJzdHIoLTEsIDEpfSR7OSAtIGVsLmNsYXNzTmFtZS5zdWJzdHIoLTIsIDEpfWA7XG4gICAgZWwudGV4dENvbnRlbnQgPSBlbC5pZDtcbiAgfVxuICBwbGF5ZXJHcmlkLmFwcGVuZENoaWxkKGVsKTtcbn1cblxuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmIChpIDwgMTApIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1cIiArIFwiMFwiICsgaSk7XG4gICAgZWwudGV4dENvbnRlbnQgPSBgJHtlbC5jbGFzc05hbWUuc3Vic3RyKC0xLCAxKX0ke1xuICAgICAgOSAtIGVsLmNsYXNzTmFtZS5zdWJzdHIoLTIsIDEpXG4gICAgfWA7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcIml0ZW0tXCIgKyBpKTtcbiAgICBlbC50ZXh0Q29udGVudCA9IGAke2VsLmNsYXNzTmFtZS5zdWJzdHIoLTEsIDEpfSR7XG4gICAgICA5IC0gZWwuY2xhc3NOYW1lLnN1YnN0cigtMiwgMSlcbiAgICB9YDtcbiAgfVxuICBjb21wdXRlckdyaWQuYXBwZW5kQ2hpbGQoZWwpO1xufVxuLy8gaW5zdGFuY2lhdGUgdGhlIGJvYXJkcywgc2hpcHMgYW5kIHBsYXllcnMhXG5jb25zdCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKFwiaHVtYW5cIik7XG5jb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKFwiY29tcHV0ZXJcIik7XG4vL2xldHMgYWRkIHNvbWUgZXZlbnQgbGlzdGVuZXJzIVxubGV0IHNoaXBzUGxhY2VkID0gMDtcbnBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZS50YXJnZXQuaWQ7XG4gIGNvbnN0IHggPSBOdW1iZXIoY29vcmRpbmF0ZXMuc3Vic3RyKDAsIDEpKTtcbiAgY29uc3QgeSA9IE51bWJlcihjb29yZGluYXRlcy5zdWJzdHIoMSwgMSkpO1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIHNoaXBzUGxhY2VkID09IDA6XG4gICAgICBjb25zdCBkZXN0cm95ZXJTaGlwID0gU2hpcCg2LCBvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCwgXCJodW1hblwiKTtcbiAgICAgIGlmIChcbiAgICAgICAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoeCwgeSwgZGVzdHJveWVyU2hpcCkgPT0gXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiXG4gICAgICApO1xuICAgICAge1xuICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBzaGlwc1BsYWNlZCA9PSAxOlxuICAgICAgY29uc3QgZGVzdHJ1Y3RpdmVTaGlwID0gU2hpcCg1LCBvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCwgXCJodW1hblwiKTtcbiAgICAgIGlmIChcbiAgICAgICAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoeCwgeSwgZGVzdHJ1Y3RpdmVTaGlwKSA9PSBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICkge1xuICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBzaGlwc1BsYWNlZCA9PSAyOlxuICAgICAgY29uc3QgYmlnU2hpcCA9IFNoaXAoNCwgb3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQsIFwiaHVtYW5cIik7XG4gICAgICBpZiAoaHVtYW5Cb2FyZC5wbGFjZVNoaXAoeCwgeSwgYmlnU2hpcCkgPT0gXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiKSB7XG4gICAgICAgIHNoaXBzUGxhY2VkKys7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIHNoaXBzUGxhY2VkID09IDM6XG4gICAgICBjb25zdCBmdW5ueVNoaXAgPSBTaGlwKDMsIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50LCBcImh1bWFuXCIpO1xuICAgICAgaWYgKGh1bWFuQm9hcmQucGxhY2VTaGlwKHgsIHksIGZ1bm55U2hpcCkgPT0gXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiKTtcbiAgICAgIHtcbiAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gNDpcbiAgICAgIGNvbnN0IHNtYWxsU2hpcCA9IFNoaXAoMiwgb3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQsIFwiaHVtYW5cIik7XG4gICAgICBpZiAoaHVtYW5Cb2FyZC5wbGFjZVNoaXAoeCwgeSwgc21hbGxTaGlwKSA9PSBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCIpO1xuICAgICAge1xuICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbiAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyUGxhY2VtZW50KCk7XG4gIGNvbnNvbGUubG9nKGh1bWFuQm9hcmQuZ2V0R2FtZWJvYXJkKCkpO1xufSk7XG5cbmNvbXB1dGVyR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHt9KTtcblxub3JpZW50YXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICBvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiVmVydGljYWxcIjtcbiAgfSBlbHNlIHtcbiAgICBvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9yaXpvbnRhbFwiO1xuICB9XG59KTtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCByZW5kZXJQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBodW1hbkJvYXJkLmdldEdhbWVib2FyZCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCAxMDsgeisrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVt6XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSR7en1gKS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0ke3p9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlclBsYWNlbWVudCB9O1xufSkoKTtcbiIsIi8vZXZlbnRzIC0gYSBzdXBlci1iYXNpYyBKYXZhc2NyaXB0IChwdWJsaXNoIHN1YnNjcmliZSkgcGF0dGVyblxuXG5jb25zdCBldmVudHMgPSB7XG4gIGV2ZW50czoge30sXG4gIG9uOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gIH0sXG4gIG9mZjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlbWl0OiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgZm4oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgeyBldmVudHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==