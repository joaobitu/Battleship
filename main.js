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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n#main-container {\n    display: flex;\n    height: 100vh;\n    gap: 5vh;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n#boards-section {\n    display: flex;\n    height: 50vh;\n    gap: 10vw;\n    justify-content: center;\n    align-items: center;\n}\n#player-grid{\n   display: flex;\n   flex-wrap: wrap;\n   width: 400px;\n}\n\n#player-grid > * {\n    border: 1px solid black;\n    width: 40px;\n    height: 40px;\n    aspect-ratio: 1 / 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#computer-grid{\n    display: flex;\n    flex-wrap: wrap;\n    width: 400px;\n }\n \n #computer-grid > * {\n     border: 1px solid black;\n     width: 40px;\n     height: 40px;\n     aspect-ratio: 1 / 1;\n     display: flex;\n     justify-content: center;\n     align-items: center;\n }\n\n #computer-grid{\n    display: none;\n }\n\n #start-game {\n    display: none;\n }\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,aAAa;IACb,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;AACA;GACG,aAAa;GACb,eAAe;GACf,YAAY;AACf;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;CACf;;CAEA;KACI,uBAAuB;KACvB,WAAW;KACX,YAAY;KACZ,mBAAmB;KACnB,aAAa;KACb,uBAAuB;KACvB,mBAAmB;CACvB;;CAEA;IACG,aAAa;CAChB;;CAEA;IACG,aAAa;CAChB","sourcesContent":["* {\n    box-sizing: border-box;\n}\n#main-container {\n    display: flex;\n    height: 100vh;\n    gap: 5vh;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n#boards-section {\n    display: flex;\n    height: 50vh;\n    gap: 10vw;\n    justify-content: center;\n    align-items: center;\n}\n#player-grid{\n   display: flex;\n   flex-wrap: wrap;\n   width: 400px;\n}\n\n#player-grid > * {\n    border: 1px solid black;\n    width: 40px;\n    height: 40px;\n    aspect-ratio: 1 / 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#computer-grid{\n    display: flex;\n    flex-wrap: wrap;\n    width: 400px;\n }\n \n #computer-grid > * {\n     border: 1px solid black;\n     width: 40px;\n     height: 40px;\n     aspect-ratio: 1 / 1;\n     display: flex;\n     justify-content: center;\n     align-items: center;\n }\n\n #computer-grid{\n    display: none;\n }\n\n #start-game {\n    display: none;\n }\n"],"sourceRoot":""}]);
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
  let owner = name;

  const getOwner = () => {
    return owner;
  };

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
      return true;
    } else {
      return false;
    }
  };

  return { isSunk, hit, getHP, getLength, getOrientation, getOwner };
};

const Gameboard = (name) => {
  let gameboard = [[], [], [], [], [], [], [], [], [], []];

  const owner = name;

  const getGameboard = () => {
    return gameboard;
  };
  const placeShip = (x, y, ship, playerObject) => {
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
    playerObject.shipsArray().push(ship);
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
  let ships = [];

  const isGameOver = () => {
    let i = 0;
    ships.forEach((e) => {
      e.isSunk() ? i++ : i--;
    });
    if (i == 5) return true;
  };

  const shipsArray = () => {
    return ships;
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
    if (document.getElementById(`${x}${y}b`).style.border !== "3px solid red") {
      computerBoard.receiveAttack(x, y);
      lastMove.x = x;
      lastMove.y = y;
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
    shipsArray,
    isGameOver,
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
const startGame = document.querySelector("start-game");

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
  if (gameStage.getShipsPlaced() == 4) {
    orientationButton.textContent = "Start Game";
  }
  if (gameStage.getShipsPlaced() < 5) {
    gameStage.placementPhase(x, y);
  }
});
//startGame.addEventListener("click", (e) => {});
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
  if (humanPlayer.isGameOver()) {
    displayController.renderGameOver("human");
  } else if (computerPlayer.isGameOver()) {
    displayController.renderGameOver("computer");
  }
});

// orientation button

orientationButton.addEventListener("click", (e) => {
  if (orientationButton.textContent == "Start Game") {
    computerGrid.style.display = "flex";
    orientationButton.style.display = "none";
    while (gameStage.getShipsPlaced() < 10) {
      gameStage.placementPhase(randomNumber(9, 0), randomNumber(9, 0));
    }
  }
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
      if (computerBoard.getGameboard()[x][y] !== undefined) {
        document.getElementById(`${x}${y}b`).style.backgroundColor = "black";
      }
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
          humanBoard.placeShip(x, y, destroyerShip, humanPlayer) ==
          "ship succesfully placed"
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
          humanBoard.placeShip(x, y, destructiveShip, humanPlayer) ==
          "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 2:
        const bigShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(4, orientationButton.textContent, humanPlayer);
        if (
          humanBoard.placeShip(x, y, bigShip, humanPlayer) ==
          "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 3:
        const funnyShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, orientationButton.textContent, humanPlayer);
        if (
          humanBoard.placeShip(x, y, funnyShip, humanPlayer) ==
          "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 4:
        const smallShip = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, orientationButton.textContent, humanPlayer);
        if (
          humanBoard.placeShip(x, y, smallShip, humanPlayer) ==
          "ship succesfully placed"
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
          computerBoard.placeShip(
            x,
            y,
            destroyerShipComputer,
            computerPlayer
          ) == "ship succesfully placed"
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
          computerBoard.placeShip(
            x,
            y,
            destructiveShipComputer,
            computerPlayer
          ) == "ship succesfully placed"
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
          computerBoard.placeShip(x, y, bigShipComputer, computerPlayer) ==
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
          computerBoard.placeShip(x, y, funnyShipComputer, computerPlayer) ==
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
          computerBoard.placeShip(x, y, smallShipComputer, computerPlayer) ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0MsZ0RBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdEQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWxvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ2FwOiA1dmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jYm9hcmRzLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGdhcDogMTB2dztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNwbGF5ZXItZ3JpZHtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICB3aWR0aDogNDAwcHg7XFxufVxcblxcbiNwbGF5ZXItZ3JpZCA+ICoge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb21wdXRlci1ncmlke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gfVxcbiBcXG4gI2NvbXB1dGVyLWdyaWQgPiAqIHtcXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgd2lkdGg6IDQwcHg7XFxuICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gfVxcblxcbiAjY29tcHV0ZXItZ3JpZHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gfVxcblxcbiAjc3RhcnQtZ2FtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuIH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0dBQ0csYUFBYTtHQUNiLGVBQWU7R0FDZixZQUFZO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7Q0FDZjs7Q0FFQTtLQUNJLHVCQUF1QjtLQUN2QixXQUFXO0tBQ1gsWUFBWTtLQUNaLG1CQUFtQjtLQUNuQixhQUFhO0tBQ2IsdUJBQXVCO0tBQ3ZCLG1CQUFtQjtDQUN2Qjs7Q0FFQTtJQUNHLGFBQWE7Q0FDaEI7O0NBRUE7SUFDRyxhQUFhO0NBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBnYXA6IDV2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNib2FyZHMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgZ2FwOiAxMHZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3BsYXllci1ncmlke1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC13cmFwOiB3cmFwO1xcbiAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuI3BsYXllci1ncmlkID4gKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbXB1dGVyLWdyaWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiB9XFxuIFxcbiAjY29tcHV0ZXItZ3JpZCA+ICoge1xcbiAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICB3aWR0aDogNDBweDtcXG4gICAgIGhlaWdodDogNDBweDtcXG4gICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuICNjb21wdXRlci1ncmlke1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiB9XFxuXFxuICNzdGFydC1nYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLypcbkJhdHRsZXNoaXAsIHlldCBhbm90aGVyIGJpZyBtaWxlc3RvbmUgaW4gdGhlIFRPUCBjdXJyaWN1bHVtLi4uIGxldHMgdHJ5IHRvIGRlbWlzdGlmeSB0aGUgaXNzdWUuLi4uXG5JIG5lZWQgYSBzaGlwIGZ1bmN0aW9uLCB0aGF0IGNhbiBzZWUgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcC4uIHRha2UgaXQgYXMgYW4gYXJndW1lbnRcbiovXG5cbmNvbnN0IFNoaXAgPSAobGVuZ3RoLCBvcmllbnRhdGlvbiwgbmFtZSkgPT4ge1xuICBsZXQgaHAgPSBsZW5ndGg7XG4gIGxldCBvd25lciA9IG5hbWU7XG5cbiAgY29uc3QgZ2V0T3duZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG93bmVyO1xuICB9O1xuXG4gIGNvbnN0IGdldE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfTtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgIC8vIHZlcnRpY2FsIG9yIGhvcml6b250YWxcbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBnZXRIUCA9ICgpID0+IHtcbiAgICByZXR1cm4gaHA7XG4gIH07XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBocCAtPSAxO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoaHAgPT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgaXNTdW5rLCBoaXQsIGdldEhQLCBnZXRMZW5ndGgsIGdldE9yaWVudGF0aW9uLCBnZXRPd25lciB9O1xufTtcblxuY29uc3QgR2FtZWJvYXJkID0gKG5hbWUpID0+IHtcbiAgbGV0IGdhbWVib2FyZCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV07XG5cbiAgY29uc3Qgb3duZXIgPSBuYW1lO1xuXG4gIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXAgPSAoeCwgeSwgc2hpcCwgcGxheWVyT2JqZWN0KSA9PiB7XG4gICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcIlZlcnRpY2FsXCIgJiYgeSArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkge1xuICAgICAgcmV0dXJuIFwidGhpcyBzaGlwIGRvZXNudCBmaXQgdmVydGljYWxseVwiO1xuICAgIH1cbiAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09IFwiSG9yaXpvbnRhbFwiICYmIHggKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHtcbiAgICAgIHJldHVybiBcInRoaXMgc2hpcCBkb2VzbnQgZml0IGhvcml6b250YWxseVwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaGlwRXhpc3RzKCkge1xuICAgICAgbGV0IHVuZGVmaW5lZENvdW50ZXIgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgICBnYW1lYm9hcmRbeF1beSArIGldID09IHVuZGVmaW5lZCB8fCBnYW1lYm9hcmRbeF1beSArIGldID09IG51bGxcbiAgICAgICAgICAgID8gdW5kZWZpbmVkQ291bnRlcisrXG4gICAgICAgICAgICA6IHVuZGVmaW5lZENvdW50ZXItLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lYm9hcmRbeCArIGldW3ldID09IHVuZGVmaW5lZCB8fCBnYW1lYm9hcmRbeCArIGldW3ldID09IG51bGxcbiAgICAgICAgICAgID8gdW5kZWZpbmVkQ291bnRlcisrXG4gICAgICAgICAgICA6IHVuZGVmaW5lZENvdW50ZXItLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZENvdW50ZXIgIT09IHNoaXAuZ2V0TGVuZ3RoKCkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIGlmIChzaGlwRXhpc3RzKCkpIHJldHVybiBcInRoZXJlIGlzIGEgc2hpcCBhbHJlYWR5XCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lYm9hcmRbeCArIGldW3ldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcGxheWVyT2JqZWN0LnNoaXBzQXJyYXkoKS5wdXNoKHNoaXApO1xuICAgIHJldHVybiBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCI7XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmIChnYW1lYm9hcmRbeF1beV0pIHtcbiAgICAgIGdhbWVib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lYm9hcmRbeF1beV07XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVjZWl2ZUF0dGFjaywgZ2V0R2FtZWJvYXJkLCBwbGFjZVNoaXAgfTtcbn07XG4vL3BsYXllcnMgbmVlZCB0byBlc3NlbnRpYWxseSBwbGF5Li4uIHRoZXJlIG5lZWRzIHRvIGJlIHR3byBkaWZmZXJlbnQgZ2FtZWJvYXJkcyB0b28sIHdpY2ggbWlnaHQgYmUgdHJpY2t5LlxuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IG5hbWU7XG5cbiAgbGV0IHR1cm4gPSAwO1xuICBsZXQgc3Vua2VuU2hpcHMgPSAwO1xuICBsZXQgbGFzdE1vdmUgPSB7XG4gICAgaGl0OiBmYWxzZSxcbiAgICB4OiB1bmRlZmluZWQsXG4gICAgeTogdW5kZWZpbmVkLFxuICB9O1xuICBsZXQgc2hpcHMgPSBbXTtcblxuICBjb25zdCBpc0dhbWVPdmVyID0gKCkgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBzaGlwcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBlLmlzU3VuaygpID8gaSsrIDogaS0tO1xuICAgIH0pO1xuICAgIGlmIChpID09IDUpIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBzQXJyYXkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzO1xuICB9O1xuICBjb25zdCBnZXRTdW5rZW5TaGlwcyA9ICgpID0+IHtcbiAgICByZXR1cm4gc3Vua2VuU2hpcHM7XG4gIH07XG4gIGNvbnN0IHN1bmtlblNoaXBDb3VudCA9ICgpID0+IHtcbiAgICBzdW5rZW5TaGlwcysrO1xuICB9O1xuXG4gIGNvbnN0IGdldFR1cm5Db3VudCA9ICgpID0+IHtcbiAgICByZXR1cm4gdHVybjtcbiAgfTtcbiAgY29uc3QgZ2V0TGFzdE1vdmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxhc3RNb3ZlO1xuICB9O1xuICBjb25zdCBpbmNyZW1lbnRUdXJuID0gKCkgPT4ge1xuICAgIHR1cm4rKztcbiAgfTtcbiAgY29uc3QgcGxheUh1bWFuID0gKHgsIHksIGNvbXB1dGVyQm9hcmQpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YmApLnN0eWxlLmJvcmRlciAhPT0gXCIzcHggc29saWQgcmVkXCIpIHtcbiAgICAgIGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgIGxhc3RNb3ZlLnggPSB4O1xuICAgICAgbGFzdE1vdmUueSA9IHk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCBwbGF5QUkgPSAoaHVtYW5Cb2FyZCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IChtYXgsIG1pbikgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfTtcbiAgICBpZiAoIWxhc3RNb3ZlLmhpdCkge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1iZXIoOSwgMCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bWJlcig5LCAwKTtcbiAgICAgIHdoaWxlIChcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YCkuc3R5bGUuYm9yZGVyID09IFwiM3B4IHNvbGlkIHJlZFwiXG4gICAgICApIHtcbiAgICAgICAgeCA9IHJhbmRvbU51bWJlcig5LCAwKTtcbiAgICAgICAgeSA9IHJhbmRvbU51bWJlcig5LCAwKTtcbiAgICAgIH1cbiAgICAgIGlmIChodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgbGFzdE1vdmUuaGl0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3RNb3ZlLmhpdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgbGFzdE1vdmUueCA9IHg7XG4gICAgICBsYXN0TW92ZS55ID0geTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1iZXIoMSwgMCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bWJlcigxLCAwKTtcbiAgICAgIGxldCBpID0gMTtcbiAgICAgIHdoaWxlIChcbiAgICAgICAgeCA9PSB5IHx8XG4gICAgICAgIHggKyBsYXN0TW92ZS54ID4gOSB8fFxuICAgICAgICB5ICsgbGFzdE1vdmUueSA+IDkgfHxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bGFzdE1vdmUueCArIHh9JHtsYXN0TW92ZS55ICsgeX1gKS5zdHlsZVxuICAgICAgICAgIC5ib3JkZXIgPT0gXCIzcHggc29saWQgcmVkXCJcbiAgICAgICkge1xuICAgICAgICBpZiAoaSA+IDgpIHtcbiAgICAgICAgICBsZXQgeCA9IHJhbmRvbU51bWJlcig5LCAwKTtcbiAgICAgICAgICBsZXQgeSA9IHJhbmRvbU51bWJlcig5LCAwKTtcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1gKS5zdHlsZS5ib3JkZXIgPT0gXCIzcHggc29saWQgcmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHggPSByYW5kb21OdW1iZXIoOSwgMCk7XG4gICAgICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaHVtYW5Cb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICBsYXN0TW92ZS5oaXQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0TW92ZS5oaXQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGFzdE1vdmUueCA9IHg7XG4gICAgICAgICAgbGFzdE1vdmUueSA9IHk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHggPSByYW5kb21OdW1iZXIoaSwgMCk7XG4gICAgICAgICAgeSA9IHJhbmRvbU51bWJlcihpLCAwKTtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2sobGFzdE1vdmUueCArIHgsIGxhc3RNb3ZlLnkgKyB5KSkge1xuICAgICAgICBsYXN0TW92ZS5oaXQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdE1vdmUuaGl0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXN0TW92ZS54ID0gbGFzdE1vdmUueCArIHg7XG4gICAgICBsYXN0TW92ZS55ID0gbGFzdE1vdmUueSArIHk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxheUFJLFxuICAgIGluY3JlbWVudFR1cm4sXG4gICAgZ2V0VHVybkNvdW50LFxuICAgIHBsYXlIdW1hbixcbiAgICBnZXRMYXN0TW92ZSxcbiAgICBzdW5rZW5TaGlwQ291bnQsXG4gICAgZ2V0U3Vua2VuU2hpcHMsXG4gICAgc2hpcHNBcnJheSxcbiAgICBpc0dhbWVPdmVyLFxuICB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCwgU2hpcCwgUGxheWVyIH0gZnJvbSBcIi4vZ2FtZWxvZ2ljXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vbm93IHRoaW5rIGFib3V0IHRoZSBnYW1lIGxvb3Bcbi8vIDFzdCBzdGFnZSwgc2V0dXAgeW91ciBuYW1lLCBhbmQgc3RhcnQgdGhlIGdhbWVcbi8vIDJuZCBzdGFnZSwgcGxhY2UgeW91ciBzaGlwcyA1eCwgZG8gY29tcHV0ZXIgc2hvdWxkIGRvIHRoZSBzYW1lXG4vLyAzcmQgc3RhZ2UsIGF0dGVtcHQgdG8gaGl0LCB3aGlsZSBhbGwgc2hpcHMgbm90IHN1bmsgY29udGludWUgZ2FtZVxuLy80cmQgc3RhZ2UsIHdoZW4gYWxsIHNoaXBzIHN1bmsgPSBnYW1lIG92ZXJcblxuLy9tYWtpZ24gdGhlIGRpdnMgISFcblxuY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLWdyaWRcIik7XG5jb25zdCBjb21wdXRlckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXB1dGVyLWdyaWRcIik7XG5jb25zdCBvcmllbnRhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JpZW50YXRpb24tYnV0dG9uXCIpO1xuY29uc3Qgc3RhcnRHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0YXJ0LWdhbWVcIik7XG5cbmZ1bmN0aW9uIHJhbmRvbU51bWJlcihtYXgsIG1pbikge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmIChpIDwgMTApIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1cIiArIFwiMFwiICsgaSk7XG4gICAgZWwuaWQgPSBgJHtlbC5jbGFzc05hbWUuc3Vic3RyKC0xLCAxKX0kezkgLSBlbC5jbGFzc05hbWUuc3Vic3RyKC0yLCAxKX1gO1xuICB9IGVsc2Uge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpdGVtLVwiICsgaSk7XG4gICAgZWwuaWQgPSBgJHtlbC5jbGFzc05hbWUuc3Vic3RyKC0xLCAxKX0kezkgLSBlbC5jbGFzc05hbWUuc3Vic3RyKC0yLCAxKX1gO1xuICB9XG4gIHBsYXllckdyaWQuYXBwZW5kQ2hpbGQoZWwpO1xufVxuXG5mb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWYgKGkgPCAxMCkge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpdGVtLVwiICsgXCIwXCIgKyBpKTtcbiAgICBlbC5pZCA9IGAke2VsLmNsYXNzTmFtZS5zdWJzdHIoLTEsIDEpfSR7OSAtIGVsLmNsYXNzTmFtZS5zdWJzdHIoLTIsIDEpfWJgO1xuICB9IGVsc2Uge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpdGVtLVwiICsgaSk7XG4gICAgZWwuaWQgPSBgJHtlbC5jbGFzc05hbWUuc3Vic3RyKC0xLCAxKX0kezkgLSBlbC5jbGFzc05hbWUuc3Vic3RyKC0yLCAxKX1iYDtcbiAgfVxuICBjb21wdXRlckdyaWQuYXBwZW5kQ2hpbGQoZWwpO1xufVxuLy8gaW5zdGFuY2lhdGUgdGhlIGJvYXJkcywgYW5kIHBsYXllcnMhXG5jb25zdCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKFwiaHVtYW5cIik7XG5jb25zdCBodW1hblBsYXllciA9IFBsYXllcihcImh1bWFuXCIpO1xuY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZChcImNvbXB1dGVyXCIpO1xuY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbi8vbGV0cyBhZGQgc29tZSBldmVudCBsaXN0ZW5lcnMhXG5cbnBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZS50YXJnZXQuaWQ7XG4gIGNvbnN0IHggPSBOdW1iZXIoY29vcmRpbmF0ZXMuc3Vic3RyKDAsIDEpKTtcbiAgY29uc3QgeSA9IE51bWJlcihjb29yZGluYXRlcy5zdWJzdHIoMSwgMSkpO1xuICBpZiAoZ2FtZVN0YWdlLmdldFNoaXBzUGxhY2VkKCkgPT0gNCkge1xuICAgIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG4gIH1cbiAgaWYgKGdhbWVTdGFnZS5nZXRTaGlwc1BsYWNlZCgpIDwgNSkge1xuICAgIGdhbWVTdGFnZS5wbGFjZW1lbnRQaGFzZSh4LCB5KTtcbiAgfVxufSk7XG4vL3N0YXJ0R2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHt9KTtcbmNvbXB1dGVyR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBlLnRhcmdldC5pZDtcbiAgY29uc3QgeCA9IE51bWJlcihjb29yZGluYXRlcy5zdWJzdHIoMCwgMSkpO1xuICBjb25zdCB5ID0gTnVtYmVyKGNvb3JkaW5hdGVzLnN1YnN0cigxLCAxKSk7XG4gIGlmIChodW1hblBsYXllci5wbGF5SHVtYW4oeCwgeSwgY29tcHV0ZXJCb2FyZCkgPT09IHRydWUpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRhY2soeCwgeSwgXCJodW1hblwiKTtcbiAgICBjb21wdXRlclBsYXllci5wbGF5QUkoaHVtYW5Cb2FyZCk7XG4gICAgbGV0IGNvbXB1dGVyTW92ZSA9IGNvbXB1dGVyUGxheWVyLmdldExhc3RNb3ZlKCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0YWNrKGNvbXB1dGVyTW92ZS54LCBjb21wdXRlck1vdmUueSwgXCJjb21wdXRlclwiKTtcbiAgfVxuICBpZiAoaHVtYW5QbGF5ZXIuaXNHYW1lT3ZlcigpKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyR2FtZU92ZXIoXCJodW1hblwiKTtcbiAgfSBlbHNlIGlmIChjb21wdXRlclBsYXllci5pc0dhbWVPdmVyKCkpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJHYW1lT3ZlcihcImNvbXB1dGVyXCIpO1xuICB9XG59KTtcblxuLy8gb3JpZW50YXRpb24gYnV0dG9uXG5cbm9yaWVudGF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAob3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQgPT0gXCJTdGFydCBHYW1lXCIpIHtcbiAgICBjb21wdXRlckdyaWQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIG9yaWVudGF0aW9uQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB3aGlsZSAoZ2FtZVN0YWdlLmdldFNoaXBzUGxhY2VkKCkgPCAxMCkge1xuICAgICAgZ2FtZVN0YWdlLnBsYWNlbWVudFBoYXNlKHJhbmRvbU51bWJlcig5LCAwKSwgcmFuZG9tTnVtYmVyKDksIDApKTtcbiAgICB9XG4gIH1cbiAgaWYgKG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50ID09PSBcIkhvcml6b250YWxcIikge1xuICAgIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJWZXJ0aWNhbFwiO1xuICB9IGVsc2Uge1xuICAgIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb3Jpem9udGFsXCI7XG4gIH1cbn0pO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckF0dGFjayA9ICh4LCB5LCBuYW1lKSA9PiB7XG4gICAgaWYgKG5hbWUgPT09IFwiaHVtYW5cIikge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YmApLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgICAgaWYgKGNvbXB1dGVyQm9hcmQuZ2V0R2FtZWJvYXJkKClbeF1beV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1iYCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1gKS5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCByZWRcIjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlclBsYWNlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGh1bWFuQm9hcmQuZ2V0R2FtZWJvYXJkKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IDEwOyB6KyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW3pdID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9JHt6fWApLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSR7en1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlckdhbWVPdmVyID0gKG93bmVyKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5pbm5lckhUTUwgPSBgJHtvd25lcn0gbG9zdCFgO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlclBsYWNlbWVudCwgcmVuZGVyQXR0YWNrLCByZW5kZXJHYW1lT3ZlciB9O1xufSkoKTtcblxuY29uc3QgZ2FtZVN0YWdlID0gKCgpID0+IHtcbiAgbGV0IHNoaXBzUGxhY2VkID0gMDtcbiAgY29uc3QgZ2V0U2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzUGxhY2VkO1xuICB9O1xuICBjb25zdCBwbGFjZW1lbnRQaGFzZSA9ICh4LCB5KSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHNoaXBzUGxhY2VkID09IDA6XG4gICAgICAgIGNvbnN0IGRlc3Ryb3llclNoaXAgPSBTaGlwKFxuICAgICAgICAgIDYsXG4gICAgICAgICAgb3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQsXG4gICAgICAgICAgaHVtYW5QbGF5ZXJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGh1bWFuQm9hcmQucGxhY2VTaGlwKHgsIHksIGRlc3Ryb3llclNoaXAsIGh1bWFuUGxheWVyKSA9PVxuICAgICAgICAgIFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSAxOlxuICAgICAgICBjb25zdCBkZXN0cnVjdGl2ZVNoaXAgPSBTaGlwKFxuICAgICAgICAgIDUsXG4gICAgICAgICAgb3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQsXG4gICAgICAgICAgaHVtYW5QbGF5ZXJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGh1bWFuQm9hcmQucGxhY2VTaGlwKHgsIHksIGRlc3RydWN0aXZlU2hpcCwgaHVtYW5QbGF5ZXIpID09XG4gICAgICAgICAgXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXBzUGxhY2VkKys7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNoaXBzUGxhY2VkID09IDI6XG4gICAgICAgIGNvbnN0IGJpZ1NoaXAgPSBTaGlwKDQsIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50LCBodW1hblBsYXllcik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBodW1hbkJvYXJkLnBsYWNlU2hpcCh4LCB5LCBiaWdTaGlwLCBodW1hblBsYXllcikgPT1cbiAgICAgICAgICBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gMzpcbiAgICAgICAgY29uc3QgZnVubnlTaGlwID0gU2hpcCgzLCBvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCwgaHVtYW5QbGF5ZXIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoeCwgeSwgZnVubnlTaGlwLCBodW1hblBsYXllcikgPT1cbiAgICAgICAgICBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gNDpcbiAgICAgICAgY29uc3Qgc21hbGxTaGlwID0gU2hpcCgyLCBvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCwgaHVtYW5QbGF5ZXIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoeCwgeSwgc21hbGxTaGlwLCBodW1hblBsYXllcikgPT1cbiAgICAgICAgICBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSA1OlxuICAgICAgICBjb25zdCBkZXN0cm95ZXJTaGlwQ29tcHV0ZXIgPSBTaGlwKFxuICAgICAgICAgIDYsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyKDIsIDEpID09IDEgPyBcIlZlcnRpY2FsXCIgOiBcIkhvcml6b250YWxcIixcbiAgICAgICAgICBjb21wdXRlclBsYXllclxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIGRlc3Ryb3llclNoaXBDb21wdXRlcixcbiAgICAgICAgICAgIGNvbXB1dGVyUGxheWVyXG4gICAgICAgICAgKSA9PSBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gNjpcbiAgICAgICAgY29uc3QgZGVzdHJ1Y3RpdmVTaGlwQ29tcHV0ZXIgPSBTaGlwKFxuICAgICAgICAgIDUsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyKDIsIDEpID09IDEgPyBcIlZlcnRpY2FsXCIgOiBcIkhvcml6b250YWxcIixcbiAgICAgICAgICBjb21wdXRlclBsYXllclxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIGRlc3RydWN0aXZlU2hpcENvbXB1dGVyLFxuICAgICAgICAgICAgY29tcHV0ZXJQbGF5ZXJcbiAgICAgICAgICApID09IFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSA3OlxuICAgICAgICBjb25zdCBiaWdTaGlwQ29tcHV0ZXIgPSBTaGlwKFxuICAgICAgICAgIDQsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyKDIsIDEpID09IDEgPyBcIlZlcnRpY2FsXCIgOiBcIkhvcml6b250YWxcIixcbiAgICAgICAgICBjb21wdXRlclBsYXllclxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoeCwgeSwgYmlnU2hpcENvbXB1dGVyLCBjb21wdXRlclBsYXllcikgPT1cbiAgICAgICAgICBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gODpcbiAgICAgICAgY29uc3QgZnVubnlTaGlwQ29tcHV0ZXIgPSBTaGlwKFxuICAgICAgICAgIDMsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyKDIsIDEpID09IDEgPyBcIlZlcnRpY2FsXCIgOiBcIkhvcml6b250YWxcIixcbiAgICAgICAgICBjb21wdXRlclBsYXllclxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoeCwgeSwgZnVubnlTaGlwQ29tcHV0ZXIsIGNvbXB1dGVyUGxheWVyKSA9PVxuICAgICAgICAgIFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSA5OlxuICAgICAgICBjb25zdCBzbWFsbFNoaXBDb21wdXRlciA9IFNoaXAoXG4gICAgICAgICAgMixcbiAgICAgICAgICByYW5kb21OdW1iZXIoMiwgMSkgPT0gMSA/IFwiVmVydGljYWxcIiA6IFwiSG9yaXpvbnRhbFwiLFxuICAgICAgICAgIGNvbXB1dGVyUGxheWVyXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCh4LCB5LCBzbWFsbFNoaXBDb21wdXRlciwgY29tcHV0ZXJQbGF5ZXIpID09XG4gICAgICAgICAgXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXBzUGxhY2VkKys7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclBsYWNlbWVudCgpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHBsYWNlbWVudFBoYXNlLFxuICAgIGdldFNoaXBzUGxhY2VkLFxuICB9O1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==