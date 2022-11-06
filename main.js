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
  return Math.floor(Math.random() * (max - min + 1)) + min; //hi
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
  }
  if (gameStage.getShipsPlaced() > 4) {
    orientationButton.textContent = "Start Game";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGtDQUFrQyxnREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0RBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBnYXA6IDV2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNib2FyZHMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgZ2FwOiAxMHZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3BsYXllci1ncmlke1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC13cmFwOiB3cmFwO1xcbiAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuI3BsYXllci1ncmlkID4gKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbXB1dGVyLWdyaWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiB9XFxuIFxcbiAjY29tcHV0ZXItZ3JpZCA+ICoge1xcbiAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICB3aWR0aDogNDBweDtcXG4gICAgIGhlaWdodDogNDBweDtcXG4gICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuICNjb21wdXRlci1ncmlke1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiB9XFxuXFxuICNzdGFydC1nYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7R0FDRyxhQUFhO0dBQ2IsZUFBZTtHQUNmLFlBQVk7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtDQUNmOztDQUVBO0tBQ0ksdUJBQXVCO0tBQ3ZCLFdBQVc7S0FDWCxZQUFZO0tBQ1osbUJBQW1CO0tBQ25CLGFBQWE7S0FDYix1QkFBdUI7S0FDdkIsbUJBQW1CO0NBQ3ZCOztDQUVBO0lBQ0csYUFBYTtDQUNoQjs7Q0FFQTtJQUNHLGFBQWE7Q0FDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGdhcDogNXZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI2JvYXJkcy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBnYXA6IDEwdnc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jcGxheWVyLWdyaWR7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jcGxheWVyLWdyaWQgPiAqIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29tcHV0ZXItZ3JpZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuIH1cXG4gXFxuICNjb21wdXRlci1ncmlkID4gKiB7XFxuICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIH1cXG5cXG4gI2NvbXB1dGVyLWdyaWR7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuIH1cXG5cXG4gI3N0YXJ0LWdhbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKlxuQmF0dGxlc2hpcCwgeWV0IGFub3RoZXIgYmlnIG1pbGVzdG9uZSBpbiB0aGUgVE9QIGN1cnJpY3VsdW0uLi4gbGV0cyB0cnkgdG8gZGVtaXN0aWZ5IHRoZSBpc3N1ZS4uLi5cbkkgbmVlZCBhIHNoaXAgZnVuY3Rpb24sIHRoYXQgY2FuIHNlZSB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLi4gdGFrZSBpdCBhcyBhbiBhcmd1bWVudFxuKi9cblxuY29uc3QgU2hpcCA9IChsZW5ndGgsIG9yaWVudGF0aW9uLCBuYW1lKSA9PiB7XG4gIGxldCBocCA9IGxlbmd0aDtcbiAgbGV0IG93bmVyID0gbmFtZTtcblxuICBjb25zdCBnZXRPd25lciA9ICgpID0+IHtcbiAgICByZXR1cm4gb3duZXI7XG4gIH07XG5cbiAgY29uc3QgZ2V0T3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICB9O1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgLy8gdmVydGljYWwgb3IgaG9yaXpvbnRhbFxuICAgIHJldHVybiBsZW5ndGg7XG4gIH07XG4gIGNvbnN0IGdldEhQID0gKCkgPT4ge1xuICAgIHJldHVybiBocDtcbiAgfTtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhwIC09IDE7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChocCA9PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBpc1N1bmssIGhpdCwgZ2V0SFAsIGdldExlbmd0aCwgZ2V0T3JpZW50YXRpb24sIGdldE93bmVyIH07XG59O1xuXG5jb25zdCBHYW1lYm9hcmQgPSAobmFtZSkgPT4ge1xuICBsZXQgZ2FtZWJvYXJkID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcblxuICBjb25zdCBvd25lciA9IG5hbWU7XG5cbiAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBzaGlwLCBwbGF5ZXJPYmplY3QpID0+IHtcbiAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09IFwiVmVydGljYWxcIiAmJiB5ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDEwKSB7XG4gICAgICByZXR1cm4gXCJ0aGlzIHNoaXAgZG9lc250IGZpdCB2ZXJ0aWNhbGx5XCI7XG4gICAgfVxuICAgIGlmIChzaGlwLmdldE9yaWVudGF0aW9uKCkgPT0gXCJIb3Jpem9udGFsXCIgJiYgeCArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkge1xuICAgICAgcmV0dXJuIFwidGhpcyBzaGlwIGRvZXNudCBmaXQgaG9yaXpvbnRhbGx5XCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNoaXBFeGlzdHMoKSB7XG4gICAgICBsZXQgdW5kZWZpbmVkQ291bnRlciA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09IFwiVmVydGljYWxcIikge1xuICAgICAgICAgIGdhbWVib2FyZFt4XVt5ICsgaV0gPT0gdW5kZWZpbmVkIHx8IGdhbWVib2FyZFt4XVt5ICsgaV0gPT0gbnVsbFxuICAgICAgICAgICAgPyB1bmRlZmluZWRDb3VudGVyKytcbiAgICAgICAgICAgIDogdW5kZWZpbmVkQ291bnRlci0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVib2FyZFt4ICsgaV1beV0gPT0gdW5kZWZpbmVkIHx8IGdhbWVib2FyZFt4ICsgaV1beV0gPT0gbnVsbFxuICAgICAgICAgICAgPyB1bmRlZmluZWRDb3VudGVyKytcbiAgICAgICAgICAgIDogdW5kZWZpbmVkQ291bnRlci0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkQ291bnRlciAhPT0gc2hpcC5nZXRMZW5ndGgoKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHNoaXBFeGlzdHMoKSkgcmV0dXJuIFwidGhlcmUgaXMgYSBzaGlwIGFscmVhZHlcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09IFwiVmVydGljYWxcIikge1xuICAgICAgICBnYW1lYm9hcmRbeF1beSArIGldID0gc2hpcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVib2FyZFt4ICsgaV1beV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgICBwbGF5ZXJPYmplY3Quc2hpcHNBcnJheSgpLnB1c2goc2hpcCk7XG4gICAgcmV0dXJuIFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIjtcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKGdhbWVib2FyZFt4XVt5XSkge1xuICAgICAgZ2FtZWJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWVib2FyZFt4XVt5XTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZWNlaXZlQXR0YWNrLCBnZXRHYW1lYm9hcmQsIHBsYWNlU2hpcCB9O1xufTtcbi8vcGxheWVycyBuZWVkIHRvIGVzc2VudGlhbGx5IHBsYXkuLi4gdGhlcmUgbmVlZHMgdG8gYmUgdHdvIGRpZmZlcmVudCBnYW1lYm9hcmRzIHRvbywgd2ljaCBtaWdodCBiZSB0cmlja3kuXG5cbmNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gbmFtZTtcblxuICBsZXQgdHVybiA9IDA7XG4gIGxldCBzdW5rZW5TaGlwcyA9IDA7XG4gIGxldCBsYXN0TW92ZSA9IHtcbiAgICBoaXQ6IGZhbHNlLFxuICAgIHg6IHVuZGVmaW5lZCxcbiAgICB5OiB1bmRlZmluZWQsXG4gIH07XG4gIGxldCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHNoaXBzLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUuaXNTdW5rKCkgPyBpKysgOiBpLS07XG4gICAgfSk7XG4gICAgaWYgKGkgPT0gNSkgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2hpcHNBcnJheSA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHM7XG4gIH07XG4gIGNvbnN0IGdldFN1bmtlblNoaXBzID0gKCkgPT4ge1xuICAgIHJldHVybiBzdW5rZW5TaGlwcztcbiAgfTtcbiAgY29uc3Qgc3Vua2VuU2hpcENvdW50ID0gKCkgPT4ge1xuICAgIHN1bmtlblNoaXBzKys7XG4gIH07XG5cbiAgY29uc3QgZ2V0VHVybkNvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiB0dXJuO1xuICB9O1xuICBjb25zdCBnZXRMYXN0TW92ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbGFzdE1vdmU7XG4gIH07XG4gIGNvbnN0IGluY3JlbWVudFR1cm4gPSAoKSA9PiB7XG4gICAgdHVybisrO1xuICB9O1xuICBjb25zdCBwbGF5SHVtYW4gPSAoeCwgeSwgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1iYCkuc3R5bGUuYm9yZGVyICE9PSBcIjNweCBzb2xpZCByZWRcIikge1xuICAgICAgY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgbGFzdE1vdmUueCA9IHg7XG4gICAgICBsYXN0TW92ZS55ID0geTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IHBsYXlBSSA9IChodW1hbkJvYXJkKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKG1heCwgbWluKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9O1xuICAgIGlmICghbGFzdE1vdmUuaGl0KSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bWJlcig5LCAwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgd2hpbGUgKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1gKS5zdHlsZS5ib3JkZXIgPT0gXCIzcHggc29saWQgcmVkXCJcbiAgICAgICkge1xuICAgICAgICB4ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgfVxuICAgICAgaWYgKGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KSkge1xuICAgICAgICBsYXN0TW92ZS5oaXQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdE1vdmUuaGl0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXN0TW92ZS54ID0geDtcbiAgICAgIGxhc3RNb3ZlLnkgPSB5O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bWJlcigxLCAwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtYmVyKDEsIDApO1xuICAgICAgbGV0IGkgPSAxO1xuICAgICAgd2hpbGUgKFxuICAgICAgICB4ID09IHkgfHxcbiAgICAgICAgeCArIGxhc3RNb3ZlLnggPiA5IHx8XG4gICAgICAgIHkgKyBsYXN0TW92ZS55ID4gOSB8fFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtsYXN0TW92ZS54ICsgeH0ke2xhc3RNb3ZlLnkgKyB5fWApLnN0eWxlXG4gICAgICAgICAgLmJvcmRlciA9PSBcIjNweCBzb2xpZCByZWRcIlxuICAgICAgKSB7XG4gICAgICAgIGlmIChpID4gOCkge1xuICAgICAgICAgIGxldCB4ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgICAgIGxldCB5ID0gcmFuZG9tTnVtYmVyKDksIDApO1xuICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApLnN0eWxlLmJvcmRlciA9PSBcIjNweCBzb2xpZCByZWRcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgeCA9IHJhbmRvbU51bWJlcig5LCAwKTtcbiAgICAgICAgICAgIHkgPSByYW5kb21OdW1iZXIoOSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgIGxhc3RNb3ZlLmhpdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RNb3ZlLmhpdCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0TW92ZS54ID0geDtcbiAgICAgICAgICBsYXN0TW92ZS55ID0geTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeCA9IHJhbmRvbU51bWJlcihpLCAwKTtcbiAgICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKGksIDApO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayhsYXN0TW92ZS54ICsgeCwgbGFzdE1vdmUueSArIHkpKSB7XG4gICAgICAgIGxhc3RNb3ZlLmhpdCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0TW92ZS5oaXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxhc3RNb3ZlLnggPSBsYXN0TW92ZS54ICsgeDtcbiAgICAgIGxhc3RNb3ZlLnkgPSBsYXN0TW92ZS55ICsgeTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5QUksXG4gICAgaW5jcmVtZW50VHVybixcbiAgICBnZXRUdXJuQ291bnQsXG4gICAgcGxheUh1bWFuLFxuICAgIGdldExhc3RNb3ZlLFxuICAgIHN1bmtlblNoaXBDb3VudCxcbiAgICBnZXRTdW5rZW5TaGlwcyxcbiAgICBzaGlwc0FycmF5LFxuICAgIGlzR2FtZU92ZXIsXG4gIH07XG59O1xuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkLCBTaGlwLCBQbGF5ZXIgfSBmcm9tIFwiLi9nYW1lbG9naWNcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy9ub3cgdGhpbmsgYWJvdXQgdGhlIGdhbWUgbG9vcFxuLy8gMXN0IHN0YWdlLCBzZXR1cCB5b3VyIG5hbWUsIGFuZCBzdGFydCB0aGUgZ2FtZVxuLy8gMm5kIHN0YWdlLCBwbGFjZSB5b3VyIHNoaXBzIDV4LCBkbyBjb21wdXRlciBzaG91bGQgZG8gdGhlIHNhbWVcbi8vIDNyZCBzdGFnZSwgYXR0ZW1wdCB0byBoaXQsIHdoaWxlIGFsbCBzaGlwcyBub3Qgc3VuayBjb250aW51ZSBnYW1lXG4vLzRyZCBzdGFnZSwgd2hlbiBhbGwgc2hpcHMgc3VuayA9IGdhbWUgb3ZlclxuXG4vL21ha2lnbiB0aGUgZGl2cyAhIVxuXG5jb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItZ3JpZFwiKTtcbmNvbnN0IGNvbXB1dGVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcHV0ZXItZ3JpZFwiKTtcbmNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmllbnRhdGlvbi1idXR0b25cIik7XG5jb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3RhcnQtZ2FtZVwiKTtcblxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1heCwgbWluKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvL2hpXG59XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpZiAoaSA8IDEwKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcIml0ZW0tXCIgKyBcIjBcIiArIGkpO1xuICAgIGVsLmlkID0gYCR7ZWwuY2xhc3NOYW1lLnN1YnN0cigtMSwgMSl9JHs5IC0gZWwuY2xhc3NOYW1lLnN1YnN0cigtMiwgMSl9YDtcbiAgfSBlbHNlIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1cIiArIGkpO1xuICAgIGVsLmlkID0gYCR7ZWwuY2xhc3NOYW1lLnN1YnN0cigtMSwgMSl9JHs5IC0gZWwuY2xhc3NOYW1lLnN1YnN0cigtMiwgMSl9YDtcbiAgfVxuICBwbGF5ZXJHcmlkLmFwcGVuZENoaWxkKGVsKTtcbn1cblxuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmIChpIDwgMTApIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1cIiArIFwiMFwiICsgaSk7XG4gICAgZWwuaWQgPSBgJHtlbC5jbGFzc05hbWUuc3Vic3RyKC0xLCAxKX0kezkgLSBlbC5jbGFzc05hbWUuc3Vic3RyKC0yLCAxKX1iYDtcbiAgfSBlbHNlIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1cIiArIGkpO1xuICAgIGVsLmlkID0gYCR7ZWwuY2xhc3NOYW1lLnN1YnN0cigtMSwgMSl9JHs5IC0gZWwuY2xhc3NOYW1lLnN1YnN0cigtMiwgMSl9YmA7XG4gIH1cbiAgY29tcHV0ZXJHcmlkLmFwcGVuZENoaWxkKGVsKTtcbn1cbi8vIGluc3RhbmNpYXRlIHRoZSBib2FyZHMsIGFuZCBwbGF5ZXJzIVxuY29uc3QgaHVtYW5Cb2FyZCA9IEdhbWVib2FyZChcImh1bWFuXCIpO1xuY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoXCJodW1hblwiKTtcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoXCJjb21wdXRlclwiKTtcbmNvbnN0IGNvbXB1dGVyUGxheWVyID0gUGxheWVyKFwiY29tcHV0ZXJcIik7XG4vL2xldHMgYWRkIHNvbWUgZXZlbnQgbGlzdGVuZXJzIVxuXG5wbGF5ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCBjb29yZGluYXRlcyA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCB4ID0gTnVtYmVyKGNvb3JkaW5hdGVzLnN1YnN0cigwLCAxKSk7XG4gIGNvbnN0IHkgPSBOdW1iZXIoY29vcmRpbmF0ZXMuc3Vic3RyKDEsIDEpKTtcbiAgaWYgKGdhbWVTdGFnZS5nZXRTaGlwc1BsYWNlZCgpIDwgNSkge1xuICAgIGdhbWVTdGFnZS5wbGFjZW1lbnRQaGFzZSh4LCB5KTtcbiAgfVxuICBpZiAoZ2FtZVN0YWdlLmdldFNoaXBzUGxhY2VkKCkgPiA0KSB7XG4gICAgb3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcbiAgfVxufSk7XG4vL3N0YXJ0R2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHt9KTtcbmNvbXB1dGVyR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBlLnRhcmdldC5pZDtcbiAgY29uc3QgeCA9IE51bWJlcihjb29yZGluYXRlcy5zdWJzdHIoMCwgMSkpO1xuICBjb25zdCB5ID0gTnVtYmVyKGNvb3JkaW5hdGVzLnN1YnN0cigxLCAxKSk7XG4gIGlmIChodW1hblBsYXllci5wbGF5SHVtYW4oeCwgeSwgY29tcHV0ZXJCb2FyZCkgPT09IHRydWUpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRhY2soeCwgeSwgXCJodW1hblwiKTtcbiAgICBjb21wdXRlclBsYXllci5wbGF5QUkoaHVtYW5Cb2FyZCk7XG4gICAgbGV0IGNvbXB1dGVyTW92ZSA9IGNvbXB1dGVyUGxheWVyLmdldExhc3RNb3ZlKCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0YWNrKGNvbXB1dGVyTW92ZS54LCBjb21wdXRlck1vdmUueSwgXCJjb21wdXRlclwiKTtcbiAgfVxuICBpZiAoaHVtYW5QbGF5ZXIuaXNHYW1lT3ZlcigpKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyR2FtZU92ZXIoXCJodW1hblwiKTtcbiAgfSBlbHNlIGlmIChjb21wdXRlclBsYXllci5pc0dhbWVPdmVyKCkpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJHYW1lT3ZlcihcImNvbXB1dGVyXCIpO1xuICB9XG59KTtcblxuLy8gb3JpZW50YXRpb24gYnV0dG9uXG5cbm9yaWVudGF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAob3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQgPT0gXCJTdGFydCBHYW1lXCIpIHtcbiAgICBjb21wdXRlckdyaWQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIG9yaWVudGF0aW9uQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB3aGlsZSAoZ2FtZVN0YWdlLmdldFNoaXBzUGxhY2VkKCkgPCAxMCkge1xuICAgICAgZ2FtZVN0YWdlLnBsYWNlbWVudFBoYXNlKHJhbmRvbU51bWJlcig5LCAwKSwgcmFuZG9tTnVtYmVyKDksIDApKTtcbiAgICB9XG4gIH1cbiAgaWYgKG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50ID09PSBcIkhvcml6b250YWxcIikge1xuICAgIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJWZXJ0aWNhbFwiO1xuICB9IGVsc2Uge1xuICAgIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb3Jpem9udGFsXCI7XG4gIH1cbn0pO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckF0dGFjayA9ICh4LCB5LCBuYW1lKSA9PiB7XG4gICAgaWYgKG5hbWUgPT09IFwiaHVtYW5cIikge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YmApLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgICAgaWYgKGNvbXB1dGVyQm9hcmQuZ2V0R2FtZWJvYXJkKClbeF1beV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1iYCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1gKS5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCByZWRcIjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlclBsYWNlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGh1bWFuQm9hcmQuZ2V0R2FtZWJvYXJkKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IDEwOyB6KyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW3pdID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9JHt6fWApLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSR7en1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlckdhbWVPdmVyID0gKG93bmVyKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5pbm5lckhUTUwgPSBgJHtvd25lcn0gbG9zdCFgO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlclBsYWNlbWVudCwgcmVuZGVyQXR0YWNrLCByZW5kZXJHYW1lT3ZlciB9O1xufSkoKTtcblxuY29uc3QgZ2FtZVN0YWdlID0gKCgpID0+IHtcbiAgbGV0IHNoaXBzUGxhY2VkID0gMDtcbiAgY29uc3QgZ2V0U2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzUGxhY2VkO1xuICB9O1xuICBjb25zdCBwbGFjZW1lbnRQaGFzZSA9ICh4LCB5KSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHNoaXBzUGxhY2VkID09IDA6XG4gICAgICAgIGNvbnN0IGRlc3Ryb3llclNoaXAgPSBTaGlwKFxuICAgICAgICAgIDYsXG4gICAgICAgICAgb3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQsXG4gICAgICAgICAgaHVtYW5QbGF5ZXJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGh1bWFuQm9hcmQucGxhY2VTaGlwKHgsIHksIGRlc3Ryb3llclNoaXAsIGh1bWFuUGxheWVyKSA9PVxuICAgICAgICAgIFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSAxOlxuICAgICAgICBjb25zdCBkZXN0cnVjdGl2ZVNoaXAgPSBTaGlwKFxuICAgICAgICAgIDUsXG4gICAgICAgICAgb3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQsXG4gICAgICAgICAgaHVtYW5QbGF5ZXJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGh1bWFuQm9hcmQucGxhY2VTaGlwKHgsIHksIGRlc3RydWN0aXZlU2hpcCwgaHVtYW5QbGF5ZXIpID09XG4gICAgICAgICAgXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXBzUGxhY2VkKys7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNoaXBzUGxhY2VkID09IDI6XG4gICAgICAgIGNvbnN0IGJpZ1NoaXAgPSBTaGlwKDQsIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50LCBodW1hblBsYXllcik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBodW1hbkJvYXJkLnBsYWNlU2hpcCh4LCB5LCBiaWdTaGlwLCBodW1hblBsYXllcikgPT1cbiAgICAgICAgICBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gMzpcbiAgICAgICAgY29uc3QgZnVubnlTaGlwID0gU2hpcCgzLCBvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCwgaHVtYW5QbGF5ZXIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoeCwgeSwgZnVubnlTaGlwLCBodW1hblBsYXllcikgPT1cbiAgICAgICAgICBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gNDpcbiAgICAgICAgY29uc3Qgc21hbGxTaGlwID0gU2hpcCgyLCBvcmllbnRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCwgaHVtYW5QbGF5ZXIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoeCwgeSwgc21hbGxTaGlwLCBodW1hblBsYXllcikgPT1cbiAgICAgICAgICBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSA1OlxuICAgICAgICBjb25zdCBkZXN0cm95ZXJTaGlwQ29tcHV0ZXIgPSBTaGlwKFxuICAgICAgICAgIDYsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyKDIsIDEpID09IDEgPyBcIlZlcnRpY2FsXCIgOiBcIkhvcml6b250YWxcIixcbiAgICAgICAgICBjb21wdXRlclBsYXllclxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIGRlc3Ryb3llclNoaXBDb21wdXRlcixcbiAgICAgICAgICAgIGNvbXB1dGVyUGxheWVyXG4gICAgICAgICAgKSA9PSBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gNjpcbiAgICAgICAgY29uc3QgZGVzdHJ1Y3RpdmVTaGlwQ29tcHV0ZXIgPSBTaGlwKFxuICAgICAgICAgIDUsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyKDIsIDEpID09IDEgPyBcIlZlcnRpY2FsXCIgOiBcIkhvcml6b250YWxcIixcbiAgICAgICAgICBjb21wdXRlclBsYXllclxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIGRlc3RydWN0aXZlU2hpcENvbXB1dGVyLFxuICAgICAgICAgICAgY29tcHV0ZXJQbGF5ZXJcbiAgICAgICAgICApID09IFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSA3OlxuICAgICAgICBjb25zdCBiaWdTaGlwQ29tcHV0ZXIgPSBTaGlwKFxuICAgICAgICAgIDQsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyKDIsIDEpID09IDEgPyBcIlZlcnRpY2FsXCIgOiBcIkhvcml6b250YWxcIixcbiAgICAgICAgICBjb21wdXRlclBsYXllclxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoeCwgeSwgYmlnU2hpcENvbXB1dGVyLCBjb21wdXRlclBsYXllcikgPT1cbiAgICAgICAgICBcInNoaXAgc3VjY2VzZnVsbHkgcGxhY2VkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2hpcHNQbGFjZWQgPT0gODpcbiAgICAgICAgY29uc3QgZnVubnlTaGlwQ29tcHV0ZXIgPSBTaGlwKFxuICAgICAgICAgIDMsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyKDIsIDEpID09IDEgPyBcIlZlcnRpY2FsXCIgOiBcIkhvcml6b250YWxcIixcbiAgICAgICAgICBjb21wdXRlclBsYXllclxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoeCwgeSwgZnVubnlTaGlwQ29tcHV0ZXIsIGNvbXB1dGVyUGxheWVyKSA9PVxuICAgICAgICAgIFwic2hpcCBzdWNjZXNmdWxseSBwbGFjZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc1BsYWNlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzaGlwc1BsYWNlZCA9PSA5OlxuICAgICAgICBjb25zdCBzbWFsbFNoaXBDb21wdXRlciA9IFNoaXAoXG4gICAgICAgICAgMixcbiAgICAgICAgICByYW5kb21OdW1iZXIoMiwgMSkgPT0gMSA/IFwiVmVydGljYWxcIiA6IFwiSG9yaXpvbnRhbFwiLFxuICAgICAgICAgIGNvbXB1dGVyUGxheWVyXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCh4LCB5LCBzbWFsbFNoaXBDb21wdXRlciwgY29tcHV0ZXJQbGF5ZXIpID09XG4gICAgICAgICAgXCJzaGlwIHN1Y2Nlc2Z1bGx5IHBsYWNlZFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXBzUGxhY2VkKys7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclBsYWNlbWVudCgpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHBsYWNlbWVudFBoYXNlLFxuICAgIGdldFNoaXBzUGxhY2VkLFxuICB9O1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==