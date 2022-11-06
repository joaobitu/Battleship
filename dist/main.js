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
/*
Battleship, yet another big milestone in the TOP curriculum... lets try to demistify the issue....
I need a ship function, that can see the length of the ship.. take it as an argument
*/

const Ship = (length, orientation, name) => {
  let hp = length;

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
  };

  const isSunk = () => {
    if (hp == 0) {
      name.sunkenShipCount();
      return true;
    } else {
      return false;
    }
  };

  return { isSunk, hit, getHP, getLength, getOrientation };
};

const Gameboard = (name) => {
  let gameboard = [[], [], [], [], [], [], [], [], [], []];

  const owner = name;

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

    return "ship succesfully placed";
  };
  const receiveAttack = (x, y) => {
    if (gameboard[x][y]) {
      gameboard[x][y].hit();
      return true;
    } else {
      gameboard[x][y];

      return false;
    }
  };

  return { receiveAttack, getGameboard, placeShip };
};
//players need to essentially play... there needs to be two different gameboards too, wich might be tricky.

const Player = (name) => {
  const userName = name;

  let turn = 0;
  let sunkenShips = 0;
  let lastMove = {
    hit: false,
    x: undefined,
    y: undefined,
  };
  const getSunkenShips = () => {
    return sunkenShips;
  };
  const sunkenShipCount = () => {
    sunkenShips++;
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
    if (x !== lastMove.x || y !== lastMove.y) {
      computerBoard.receiveAttack(x, y);
      lastMove.x = x;
      lastMove.x = y;
      return true;
    }
    return false;
  };
  const playAI = (humanBoard) => {
    const randomNumber = (max, min) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    if (!lastMove.hit) {
      let x = randomNumber(9, 0);
      let y = randomNumber(9, 0);
      while (
        document.getElementById(`${x}${y}`).style.border == "3px solid red"
      ) {
        x = randomNumber(9, 0);
        y = randomNumber(9, 0);
      }
      if (humanBoard.receiveAttack(x, y)) {
        lastMove.hit = true;
      } else {
        lastMove.hit = false;
      }
      lastMove.x = x;
      lastMove.y = y;
      console.log("x is: " + lastMove.x);
      console.log("y is: " + lastMove.y);
    } else {
      let x = randomNumber(1, 0);
      let y = randomNumber(1, 0);
      let i = 1;
      while (
        x == y ||
        x + lastMove.x > 9 ||
        y + lastMove.y > 9 ||
        document.getElementById(`${lastMove.x + x}${lastMove.y + y}`).style
          .border == "3px solid red"
      ) {
        if (i > 8) {
          let x = randomNumber(9, 0);
          let y = randomNumber(9, 0);
          while (
            document.getElementById(`${x}${y}`).style.border == "3px solid red"
          ) {
            x = randomNumber(9, 0);
            y = randomNumber(9, 0);
          }
          if (humanBoard.receiveAttack(x, y)) {
            lastMove.hit = true;
          } else {
            lastMove.hit = false;
          }
          lastMove.x = x;
          lastMove.y = y;
          return;
        } else {
          x = randomNumber(i, 0);
          y = randomNumber(i, 0);
          i++;
        }

        console.log(lastMove.x + x + " x  inside the loop");
        console.log(lastMove.y + y + " y inside the loop");
      }
      if (humanBoard.receiveAttack(lastMove.x + x, lastMove.y + y)) {
        lastMove.hit = true;
      } else {
        lastMove.hit = false;
      }
      lastMove.x = lastMove.x + x;
      lastMove.y = lastMove.y + y;
    }
  };

  return {
    playAI,
    incrementTurn,
    getTurnCount,
    playHuman,
    getLastMove,
    sunkenShipCount,
    getSunkenShips,
  };
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

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < 100; i++) {
  const el = document.createElement("div");
  if (i < 10) {
    el.classList.add("item-" + "0" + i);
    el.id = `${el.className.substr(-1, 1)}${9 - el.className.substr(-2, 1)}`;
  } else {
    el.classList.add("item-" + i);
    el.id = `${el.className.substr(-1, 1)}${9 - el.className.substr(-2, 1)}`;
  }
  playerGrid.appendChild(el);
}

for (var i = 0; i < 100; i++) {
  const el = document.createElement("div");
  if (i < 10) {
    el.classList.add("item-" + "0" + i);
    el.id = `${el.className.substr(-1, 1)}${9 - el.className.substr(-2, 1)}b`;
  } else {
    el.classList.add("item-" + i);
    el.id = `${el.className.substr(-1, 1)}${9 - el.className.substr(-2, 1)}b`;
  }
  computerGrid.appendChild(el);
}
// instanciate the boards, and players!
const humanBoard = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Gameboard)("human");
const humanPlayer = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Player)("human");
const computerBoard = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Gameboard)("computer");
const computerPlayer = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Player)("computer");
//lets add some event listeners!

playerGrid.addEventListener("click", (e) => {
  const coordinates = e.target.id;
  const x = Number(coordinates.substr(0, 1));
  const y = Number(coordinates.substr(1, 1));
  if (gameStage.getShipsPlaced() < 5) {
    gameStage.placementPhase(x, y);
  } else {
    computerGrid.style.display = "flex";
    orientationButton.style.display = "none";
    while (gameStage.getShipsPlaced() < 10) {
      gameStage.placementPhase(randomNumber(9, 0), randomNumber(9, 0));
    }
    console.log(computerBoard.getGameboard());
  }
});

computerGrid.addEventListener("click", (e) => {
  const coordinates = e.target.id;
  const x = Number(coordinates.substr(0, 1));
  const y = Number(coordinates.substr(1, 1));
  if (humanPlayer.playHuman(x, y, computerBoard) === true) {
    displayController.renderAttack(x, y, "human");
    computerPlayer.playAI(humanBoard);
    let computerMove = computerPlayer.getLastMove();
    displayController.renderAttack(computerMove.x, computerMove.y, "computer");
  }
  if (humanPlayer.getSunkenShips() == 5) {
    displayController.renderGameOver("human");
  } else if (computerPlayer.getSunkenShips() == 5) {
    displayController.renderGameOver("computer");
  }
});

// orientation button

orientationButton.addEventListener("click", (e) => {
  if (orientationButton.textContent === "Horizontal") {
    orientationButton.textContent = "Vertical";
  } else {
    orientationButton.textContent = "Horizontal";
  }
});

const displayController = (() => {
  const renderAttack = (x, y, name) => {
    if (name === "human") {
      document.getElementById(`${x}${y}b`).style.border = "3px solid red";
    } else {
      document.getElementById(`${x}${y}`).style.border = "3px solid red";
    }
  };
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
  const renderGameOver = (owner) => {
    document.querySelector("body").innerHTML = "";
    document.querySelector("body").innerHTML = `${owner} lost!`;
  };

  return { renderPlacement, renderAttack, renderGameOver };
})();

const gameStage = (() => {
  let shipsPlaced = 0;
  const getShipsPlaced = () => {
    return shipsPlaced;
  };
  const placementPhase = (x, y) => {
    switch (true) {
      case shipsPlaced == 0:
        const destroyerShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(
          6,
          orientationButton.textContent,
          humanPlayer
        );
        if (
          humanBoard.placeShip(x, y, destroyerShip) == "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 1:
        const destructiveShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(
          5,
          orientationButton.textContent,
          humanPlayer
        );
        if (
          humanBoard.placeShip(x, y, destructiveShip) ==
          "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 2:
        const bigShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(4, orientationButton.textContent, humanPlayer);
        if (humanBoard.placeShip(x, y, bigShip) == "ship succesfully placed") {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 3:
        const funnyShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, orientationButton.textContent, humanPlayer);
        if (
          humanBoard.placeShip(x, y, funnyShip) == "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 4:
        const smallShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, orientationButton.textContent, humanPlayer);
        if (
          humanBoard.placeShip(x, y, smallShip) == "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
      case shipsPlaced == 5:
        const destroyerShipComputer = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(
          6,
          randomNumber(2, 1) == 1 ? "Vertical" : "Horizontal",
          computerPlayer
        );
        if (
          computerBoard.placeShip(x, y, destroyerShipComputer) ==
          "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 6:
        const destructiveShipComputer = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(
          5,
          randomNumber(2, 1) == 1 ? "Vertical" : "Horizontal",
          computerPlayer
        );
        if (
          computerBoard.placeShip(x, y, destructiveShipComputer) ==
          "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 7:
        const bigShipComputer = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(
          4,
          randomNumber(2, 1) == 1 ? "Vertical" : "Horizontal",
          computerPlayer
        );
        if (
          computerBoard.placeShip(x, y, bigShipComputer) ==
          "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 8:
        const funnyShipComputer = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(
          3,
          randomNumber(2, 1) == 1 ? "Vertical" : "Horizontal",
          computerPlayer
        );
        if (
          computerBoard.placeShip(x, y, funnyShipComputer) ==
          "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 9:
        const smallShipComputer = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(
          2,
          randomNumber(2, 1) == 1 ? "Vertical" : "Horizontal",
          computerPlayer
        );
        if (
          computerBoard.placeShip(x, y, smallShipComputer) ==
          "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
    }
    displayController.renderPlacement();
  };
  return {
    placementPhase,
    getShipsPlaced,
  };
})();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO0FBQ3pEOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0RBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0RBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdEQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0RBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdEQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWxvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ2FwOiA1dmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jYm9hcmRzLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGdhcDogMTB2dztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNwbGF5ZXItZ3JpZHtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICB3aWR0aDogNDAwcHg7XFxufVxcblxcbiNwbGF5ZXItZ3JpZCA+ICoge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb21wdXRlci1ncmlke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gfVxcbiBcXG4gI2NvbXB1dGVyLWdyaWQgPiAqIHtcXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgd2lkdGg6IDQwcHg7XFxuICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gfVxcblxcbiAjY29tcHV0ZXItZ3JpZHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7R0FDRyxhQUFhO0dBQ2IsZUFBZTtHQUNmLFlBQVk7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtDQUNmOztDQUVBO0tBQ0ksdUJBQXVCO0tBQ3ZCLFdBQVc7S0FDWCxZQUFZO0tBQ1osbUJBQW1CO0tBQ25CLGFBQWE7S0FDYix1QkFBdUI7S0FDdkIsbUJBQW1CO0NBQ3ZCOztDQUVBO0lBQ0csYUFBYTtDQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ2FwOiA1dmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jYm9hcmRzLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGdhcDogMTB2dztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNwbGF5ZXItZ3JpZHtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICB3aWR0aDogNDAwcHg7XFxufVxcblxcbiNwbGF5ZXItZ3JpZCA+ICoge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb21wdXRlci1ncmlke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gfVxcbiBcXG4gI2NvbXB1dGVyLWdyaWQgPiAqIHtcXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgd2lkdGg6IDQwcHg7XFxuICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gfVxcblxcbiAjY29tcHV0ZXItZ3JpZHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLypcbkJhdHRsZXNoaXAsIHlldCBhbm90aGVyIGJpZyBtaWxlc3RvbmUgaW4gdGhlIFRPUCBjdXJyaWN1bHVtLi4uIGxldHMgdHJ5IHRvIGRlbWlzdGlmeSB0aGUgaXNzdWUuLi4uXG5JIG5lZWQgYSBzaGlwIGZ1bmN0aW9uLCB0aGF0IGNhbiBzZWUgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcC4uIHRha2UgaXQgYXMgYW4gYXJndW1lbnRcbiovXG5cbmNvbnN0IFNoaXAgPSAobGVuZ3RoLCBvcmllbnRhdGlvbiwgbmFtZSkgPT4ge1xuICBsZXQgaHAgPSBsZW5ndGg7XG5cbiAgY29uc3QgZ2V0T3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICB9O1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgLy8gdmVydGljYWwgb3IgaG9yaXpvbnRhbFxuICAgIHJldHVybiBsZW5ndGg7XG4gIH07XG4gIGNvbnN0IGdldEhQID0gKCkgPT4ge1xuICAgIHJldHVybiBocDtcbiAgfTtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhwIC09IDE7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChocCA9PSAwKSB7XG4gICAgICBuYW1lLnN1bmtlblNoaXBDb3VudCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgaXNTdW5rLCBoaXQsIGdldEhQLCBnZXRMZW5ndGgsIGdldE9yaWVudGF0aW9uIH07XG59O1xuXG5jb25zdCBHYW1lYm9hcmQgPSAobmFtZSkgPT4ge1xuICBsZXQgZ2FtZWJvYXJkID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcblxuICBjb25zdCBvd25lciA9IG5hbWU7XG5cbiAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcIlZlcnRpY2FsXCIgJiYgeSArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkge1xuICAgICAgcmV0dXJuIFwidGhpcyBzaGlwIGRvZXNudCBmaXQgdmVydGljYWxseVwiO1xuICAgIH1cbiAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09IFwiSG9yaXpvbnRhbFwiICYmIHggKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHtcbiAgICAgIHJldHVybiBcInRoaXMgc2hpcCBkb2VzbnQgZml0IGhvcml6b250YWxseVwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaGlwRXhpc3RzKCkge1xuICAgICAgbGV0IHVuZGVmaW5lZENvdW50ZXIgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgICBnYW1lYm9hcmRbeF1beSArIGldID09IHVuZGVmaW5lZCB8fCBnYW1lYm9hcmRbeF1beSArIGldID09IG51bGxcbiAgICAgICAgICAgID8gdW5kZWZpbmVkQ291bnRlcisrXG4gICAgICAgICAgICA6IHVuZGVmaW5lZENvdW50ZXItLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lYm9hcmRbeCArIGldW3ldID09IHVuZGVmaW5lZCB8fCBnYW1lYm9hcmRbeCArIGldW3ldID09IG51bGxcbiAgICAgICAgICAgID8gdW5kZWZpbmVkQ291bnRlcisrXG4gICAgICAgICAgICA6IHVuZGVmaW5lZENvdW50ZXItLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZENvdW50ZXIgIT09IHNoaXAuZ2V0TGVuZ3RoKCkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIGlmIChzaGlwRXhpc3RzKCkpIHJldHVybiBcInRoZXJlIGlzIGEgc2hpcCBhbHJlYWR5XCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lYm9hcmRbeCArIGldW3ldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiO1xuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkW3hdW3ldKSB7XG4gICAgICBnYW1lYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZWJvYXJkW3hdW3ldO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHJlY2VpdmVBdHRhY2ssIGdldEdhbWVib2FyZCwgcGxhY2VTaGlwIH07XG59O1xuLy9wbGF5ZXJzIG5lZWQgdG8gZXNzZW50aWFsbHkgcGxheS4uLiB0aGVyZSBuZWVkcyB0byBiZSB0d28gZGlmZmVyZW50IGdhbWVib2FyZHMgdG9vLCB3aWNoIG1pZ2h0IGJlIHRyaWNreS5cblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3QgdXNlck5hbWUgPSBuYW1lO1xuXG4gIGxldCB0dXJuID0gMDtcbiAgbGV0IHN1bmtlblNoaXBzID0gMDtcbiAgbGV0IGxhc3RNb3ZlID0ge1xuICAgIGhpdDogZmFsc2UsXG4gICAgeDogdW5kZWZpbmVkLFxuICAgIHk6IHVuZGVmaW5lZCxcbiAgfTtcbiAgY29uc3QgZ2V0U3Vua2VuU2hpcHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN1bmtlblNoaXBzO1xuICB9O1xuICBjb25zdCBzdW5rZW5TaGlwQ291bnQgPSAoKSA9PiB7XG4gICAgc3Vua2VuU2hpcHMrKztcbiAgfTtcblxuICBjb25zdCBnZXRUdXJuQ291bnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHR1cm47XG4gIH07XG4gIGNvbnN0IGdldExhc3RNb3ZlID0gKCkgPT4ge1xuICAgIHJldHVybiBsYXN0TW92ZTtcbiAgfTtcbiAgY29uc3QgaW5jcmVtZW50VHVybiA9ICgpID0+IHtcbiAgICB0dXJuKys7XG4gIH07XG4gIGNvbnN0IHBsYXlIdW1hbiA9ICh4LCB5LCBjb21wdXRlckJvYXJkKSA9PiB7XG4gICAgaWYgKHggIT09IGxhc3RNb3ZlLnggfHwgeSAhPT0gbGFzdE1vdmUueSkge1xuICAgICAgY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgbGFzdE1vdmUueCA9IHg7XG4gICAgICBsYXN0TW92ZS54ID0geTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IHBsYXlBSSA9IChodW1hbkJvYXJkKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKG1heCwgbWluKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9O1xuICAgIGlmICghbGFzdE1vdmUuaGl0KSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bWJlcig5LCAwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgd2hpbGUgKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1gKS5zdHlsZS5ib3JkZXIgPT0gXCIzcHggc29saWQgcmVkXCJcbiAgICAgICkge1xuICAgICAgICB4ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgfVxuICAgICAgaWYgKGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KSkge1xuICAgICAgICBsYXN0TW92ZS5oaXQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdE1vdmUuaGl0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXN0TW92ZS54ID0geDtcbiAgICAgIGxhc3RNb3ZlLnkgPSB5O1xuICAgICAgY29uc29sZS5sb2coXCJ4IGlzOiBcIiArIGxhc3RNb3ZlLngpO1xuICAgICAgY29uc29sZS5sb2coXCJ5IGlzOiBcIiArIGxhc3RNb3ZlLnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bWJlcigxLCAwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtYmVyKDEsIDApO1xuICAgICAgbGV0IGkgPSAxO1xuICAgICAgd2hpbGUgKFxuICAgICAgICB4ID09IHkgfHxcbiAgICAgICAgeCArIGxhc3RNb3ZlLnggPiA5IHx8XG4gICAgICAgIHkgKyBsYXN0TW92ZS55ID4gOSB8fFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtsYXN0TW92ZS54ICsgeH0ke2xhc3RNb3ZlLnkgKyB5fWApLnN0eWxlXG4gICAgICAgICAgLmJvcmRlciA9PSBcIjNweCBzb2xpZCByZWRcIlxuICAgICAgKSB7XG4gICAgICAgIGlmIChpID4gOCkge1xuICAgICAgICAgIGxldCB4ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgICAgIGxldCB5ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApLnN0eWxlLmJvcmRlciA9PSBcIjNweCBzb2xpZCByZWRcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgeCA9IHJhbmRvbU51bWJlcig5LCAwKTtcbiAgICAgICAgICAgIHkgPSByYW5kb21OdW1iZXIoOSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgIGxhc3RNb3ZlLmhpdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RNb3ZlLmhpdCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0TW92ZS54ID0geDtcbiAgICAgICAgICBsYXN0TW92ZS55ID0geTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeCA9IHJhbmRvbU51bWJlcihpLCAwKTtcbiAgICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKGksIDApO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RNb3ZlLnggKyB4ICsgXCIgeCAgaW5zaWRlIHRoZSBsb29wXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsYXN0TW92ZS55ICsgeSArIFwiIHkgaW5zaWRlIHRoZSBsb29wXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayhsYXN0TW92ZS54ICsgeCwgbGFzdE1vdmUueSArIHkpKSB7XG4gICAgICAgIGxhc3RNb3ZlLmhpdCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0TW92ZS5oaXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxhc3RNb3ZlLnggPSBsYXN0TW92ZS54ICsgeDtcbiAgICAgIGxhc3RNb3ZlLnkgPSBsYXN0TW92ZS55ICsgeTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5QUksXG4gICAgaW5jcmVtZW50VHVybixcbiAgICBnZXRUdXJuQ291bnQsXG4gICAgcGxheUh1bWFuLFxuICAgIGdldExhc3RNb3ZlLFxuICAgIHN1bmtlblNoaXBDb3VudCxcbiAgICBnZXRTdW5rZW5TaGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQsIFNoaXAsIFBsYXllciB9IGZyb20gXCIuL2dhbWVsb2dpY1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vL25vdyB0aGluayBhYm91dCB0aGUgZ2FtZSBsb29wXG4vLyAxc3Qgc3RhZ2UsIHNldHVwIHlvdXIgbmFtZSwgYW5kIHN0YXJ0IHRoZSBnYW1lXG4vLyAybmQgc3RhZ2UsIHBsYWNlIHlvdXIgc2hpcHMgNXgsIGRvIGNvbXB1dGVyIHNob3VsZCBkbyB0aGUgc2FtZVxuLy8gM3JkIHN0YWdlLCBhdHRlbXB0IHRvIGhpdCwgd2hpbGUgYWxsIHNoaXBzIG5vdCBzdW5rIGNvbnRpbnVlIGdhbWVcbi8vNHJkIHN0YWdlLCB3aGVuIGFsbCBzaGlwcyBzdW5rID0gZ2FtZSBvdmVyXG5cbi8vbWFraWduIHRoZSBkaXZzICEhXG5cbmNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllci1ncmlkXCIpO1xuY29uc3QgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdXRlci1ncmlkXCIpO1xuY29uc3Qgb3JpZW50YXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yaWVudGF0aW9uLWJ1dHRvblwiKTtcblxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1heCwgbWluKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5mb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWYgKGkgPCAxMCkge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpdGVtLVwiICsgXCIwXCIgKyBpKTtcbiAgICBlbC5pZCA9IGAke2VsLmNsYXNzTmFtZS5zdWJzdHIoLTEsIDEpfSR7OSAtIGVsLmNsYXNzTmFtZS5zdWJzdHIoLTIsIDEpfWA7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcIml0ZW0tXCIgKyBpKTtcbiAgICBlbC5pZCA9IGAke2VsLmNsYXNzTmFtZS5zdWJzdHIoLTEsIDEpfSR7OSAtIGVsLmNsYXNzTmFtZS5zdWJzdHIoLTIsIDEpfWA7XG4gIH1cbiAgcGxheWVyR3JpZC5hcHBlbmRDaGlsZChlbCk7XG59XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpZiAoaSA8IDEwKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcIml0ZW0tXCIgKyBcIjBcIiArIGkpO1xuICAgIGVsLmlkID0gYCR7ZWwuY2xhc3NOYW1lLnN1YnN0cigtMSwgMSl9JHs5IC0gZWwuY2xhc3NOYW1lLnN1YnN0cigtMiwgMSl9YmA7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcIml0ZW0tXCIgKyBpKTtcbiAgICBlbC5pZCA9IGAke2VsLmNsYXNzTmFtZS5zdWJzdHIoLTEsIDEpfSR7OSAtIGVsLmNsYXNzTmFtZS5zdWJzdHIoLTIsIDEpfWJgO1xuICB9XG4gIGNvbXB1dGVyR3JpZC5hcHBlbmRDaGlsZChlbCk7XG59XG4vLyBpbnN0YW5jaWF0ZSB0aGUgYm9hcmRzLCBhbmQgcGxheWVycyFcbmNvbnN0IGh1bWFuQm9hcmQgPSBHYW1lYm9hcmQoXCJodW1hblwiKTtcbmNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKFwiaHVtYW5cIik7XG5jb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKFwiY29tcHV0ZXJcIik7XG5jb25zdCBjb21wdXRlclBsYXllciA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuLy9sZXRzIGFkZCBzb21lIGV2ZW50IGxpc3RlbmVycyFcblxucGxheWVyR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBlLnRhcmdldC5pZDtcbiAgY29uc3QgeCA9IE51bWJlcihjb29yZGluYXRlcy5zdWJzdHIoMCwgMSkpO1xuICBjb25zdCB5ID0gTnVtYmVyKGNvb3JkaW5hdGVzLnN1YnN0cigxLCAxKSk7XG4gIGlmIChnYW1lU3RhZ2UuZ2V0U2hpcHNQbGFjZWQoKSA8IDUpIHtcbiAgICBnYW1lU3RhZ2UucGxhY2VtZW50UGhhc2UoeCwgeSk7XG4gIH0gZWxzZSB7XG4gICAgY29tcHV0ZXJHcmlkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBvcmllbnRhdGlvbkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgd2hpbGUgKGdhbWVTdGFnZS5nZXRTaGlwc1BsYWNlZCgpIDwgMTApIHtcbiAgICAgIGdhbWVTdGFnZS5wbGFjZW1lbnRQaGFzZShyYW5kb21OdW1iZXIoOSwgMCksIHJhbmRvbU51bWJlcig5LCAwKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQuZ2V0R2FtZWJvYXJkKCkpO1xuICB9XG59KTtcblxuY29tcHV0ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCBjb29yZGluYXRlcyA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCB4ID0gTnVtYmVyKGNvb3JkaW5hdGVzLnN1YnN0cigwLCAxKSk7XG4gIGNvbnN0IHkgPSBOdW1iZXIoY29vcmRpbmF0ZXMuc3Vic3RyKDEsIDEpKTtcbiAgaWYgKGh1bWFuUGxheWVyLnBsYXlIdW1hbih4LCB5LCBjb21wdXRlckJvYXJkKSA9PT0gdHJ1ZSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckF0dGFjayh4LCB5LCBcImh1bWFuXCIpO1xuICAgIGNvbXB1dGVyUGxheWVyLnBsYXlBSShodW1hbkJvYXJkKTtcbiAgICBsZXQgY29tcHV0ZXJNb3ZlID0gY29tcHV0ZXJQbGF5ZXIuZ2V0TGFzdE1vdmUoKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRhY2soY29tcHV0ZXJNb3ZlLngsIGNvbXB1dGVyTW92ZS55LCBcImNvbXB1dGVyXCIpO1xuICB9XG4gIGlmIChodW1hblBsYXllci5nZXRTdW5rZW5TaGlwcygpID09IDUpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJHYW1lT3ZlcihcImh1bWFuXCIpO1xuICB9IGVsc2UgaWYgKGNvbXB1dGVyUGxheWVyLmdldFN1bmtlblNoaXBzKCkgPT0gNSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckdhbWVPdmVyKFwiY29tcHV0ZXJcIik7XG4gIH1cbn0pO1xuXG4vLyBvcmllbnRhdGlvbiBidXR0b25cblxub3JpZW50YXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICBvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiVmVydGljYWxcIjtcbiAgfSBlbHNlIHtcbiAgICBvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9yaXpvbnRhbFwiO1xuICB9XG59KTtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCByZW5kZXJBdHRhY2sgPSAoeCwgeSwgbmFtZSkgPT4ge1xuICAgIGlmIChuYW1lID09PSBcImh1bWFuXCIpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWJgKS5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCByZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YCkuc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgcmVkXCI7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBodW1hbkJvYXJkLmdldEdhbWVib2FyZCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCAxMDsgeisrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVt6XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSR7en1gKS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0ke3p9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJHYW1lT3ZlciA9IChvd25lcikgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5uZXJIVE1MID0gYCR7b3duZXJ9IGxvc3QhYDtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJQbGFjZW1lbnQsIHJlbmRlckF0dGFjaywgcmVuZGVyR2FtZU92ZXIgfTtcbn0pKCk7XG5cbmNvbnN0IGdhbWVTdGFnZSA9ICgoKSA9PiB7XG4gIGxldCBzaGlwc1BsYWNlZCA9IDA7XG4gIGNvbnN0IGdldFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwc1BsYWNlZDtcbiAgfTtcbiAgY29uc3QgcGxhY2VtZW50UGhhc2UgPSAoeCwgeSkgPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSAwOlxuICAgICAgICBjb25zdCBkZXN0cm95ZXJTaGlwID0gU2hpcChcbiAgICAgICAgICA2LFxuICAgICAgICAgIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50LFxuICAgICAgICAgIGh1bWFuUGxheWVyXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBodW1hbkJvYXJkLnBsYWNlU2hpcCh4LCB5LCBkZXN0cm95ZXJTaGlwKSA9PSBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gMTpcbiAgICAgICAgY29uc3QgZGVzdHJ1Y3RpdmVTaGlwID0gU2hpcChcbiAgICAgICAgICA1LFxuICAgICAgICAgIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50LFxuICAgICAgICAgIGh1bWFuUGxheWVyXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBodW1hbkJvYXJkLnBsYWNlU2hpcCh4LCB5LCBkZXN0cnVjdGl2ZVNoaXApID09XG4gICAgICAgICAgXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXBzUGxhY2VkKys7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNoaXBzUGxhY2VkID09IDI6XG4gICAgICAgIGNvbnN0IGJpZ1NoaXAgPSBTaGlwKDQsIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50LCBodW1hblBsYXllcik7XG4gICAgICAgIGlmIChodW1hbkJvYXJkLnBsYWNlU2hpcCh4LCB5LCBiaWdTaGlwKSA9PSBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCIpIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSAzOlxuICAgICAgICBjb25zdCBmdW5ueVNoaXAgPSBTaGlwKDMsIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50LCBodW1hblBsYXllcik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBodW1hbkJvYXJkLnBsYWNlU2hpcCh4LCB5LCBmdW5ueVNoaXApID09IFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSA0OlxuICAgICAgICBjb25zdCBzbWFsbFNoaXAgPSBTaGlwKDIsIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50LCBodW1hblBsYXllcik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBodW1hbkJvYXJkLnBsYWNlU2hpcCh4LCB5LCBzbWFsbFNoaXApID09IFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICBjYXNlIHNoaXBzUGxhY2VkID09IDU6XG4gICAgICAgIGNvbnN0IGRlc3Ryb3llclNoaXBDb21wdXRlciA9IFNoaXAoXG4gICAgICAgICAgNixcbiAgICAgICAgICByYW5kb21OdW1iZXIoMiwgMSkgPT0gMSA/IFwiVmVydGljYWxcIiA6IFwiSG9yaXpvbnRhbFwiLFxuICAgICAgICAgIGNvbXB1dGVyUGxheWVyXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCh4LCB5LCBkZXN0cm95ZXJTaGlwQ29tcHV0ZXIpID09XG4gICAgICAgICAgXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXBzUGxhY2VkKys7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNoaXBzUGxhY2VkID09IDY6XG4gICAgICAgIGNvbnN0IGRlc3RydWN0aXZlU2hpcENvbXB1dGVyID0gU2hpcChcbiAgICAgICAgICA1LFxuICAgICAgICAgIHJhbmRvbU51bWJlcigyLCAxKSA9PSAxID8gXCJWZXJ0aWNhbFwiIDogXCJIb3Jpem9udGFsXCIsXG4gICAgICAgICAgY29tcHV0ZXJQbGF5ZXJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKHgsIHksIGRlc3RydWN0aXZlU2hpcENvbXB1dGVyKSA9PVxuICAgICAgICAgIFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSA3OlxuICAgICAgICBjb25zdCBiaWdTaGlwQ29tcHV0ZXIgPSBTaGlwKFxuICAgICAgICAgIDQsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyKDIsIDEpID09IDEgPyBcIlZlcnRpY2FsXCIgOiBcIkhvcml6b250YWxcIixcbiAgICAgICAgICBjb21wdXRlclBsYXllclxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoeCwgeSwgYmlnU2hpcENvbXB1dGVyKSA9PVxuICAgICAgICAgIFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSA4OlxuICAgICAgICBjb25zdCBmdW5ueVNoaXBDb21wdXRlciA9IFNoaXAoXG4gICAgICAgICAgMyxcbiAgICAgICAgICByYW5kb21OdW1iZXIoMiwgMSkgPT0gMSA/IFwiVmVydGljYWxcIiA6IFwiSG9yaXpvbnRhbFwiLFxuICAgICAgICAgIGNvbXB1dGVyUGxheWVyXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCh4LCB5LCBmdW5ueVNoaXBDb21wdXRlcikgPT1cbiAgICAgICAgICBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gOTpcbiAgICAgICAgY29uc3Qgc21hbGxTaGlwQ29tcHV0ZXIgPSBTaGlwKFxuICAgICAgICAgIDIsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyKDIsIDEpID09IDEgPyBcIlZlcnRpY2FsXCIgOiBcIkhvcml6b250YWxcIixcbiAgICAgICAgICBjb21wdXRlclBsYXllclxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoeCwgeSwgc21hbGxTaGlwQ29tcHV0ZXIpID09XG4gICAgICAgICAgXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXBzUGxhY2VkKys7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclBsYWNlbWVudCgpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHBsYWNlbWVudFBoYXNlLFxuICAgIGdldFNoaXBzUGxhY2VkLFxuICB9O1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==