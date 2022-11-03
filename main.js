"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

const Ship = (length, orientation) => {
  let hp = length;

  const getOrientation = () => {
    return orientation;
  };
  const getLength = () => {
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
    if (hp == 0) return true;
    return false;
  };

  return { isSunk, hit, getHP, getLength, getOrientation };
};

const Gameboard = () => {
  const gameboard = [[], [], [], [], [], [], [], [], [], [], [], []];

  const getGameboard = () => {
    return gameboard;
  };
  const placeShip = (x, y, ship) => {
    function shipExists() {
      let undefinedCounter = 0;
      for (let i = 0; i < ship.getLength(); i++) {
        if (ship.getOrientation() == "vertical") {
          gameboard[x][y + i] == undefined
            ? undefinedCounter++
            : undefinedCounter--;
        } else {
          gameboard[x + i][y] == undefined
            ? undefinedCounter++
            : undefinedCounter--;
        }
      }
      return undefinedCounter !== ship.getLength() ? true : false;
    }
    if (shipExists()) return "no space for this ship";
    for (let i = 0; i < ship.getLength(); i++) {
      if (ship.getOrientation() == "vertical") {
        gameboard[x][y + i] = ship;
      } else {
        gameboard[x + i][y] = ship;
      }
    }
  };
  const receiveAttack = (x, y) => {
    if (gameboard[x][y]) {
      gameboard[x][y].hit();
      return true;
    } else {
      gameboard[x][y]; //must emit this was hit so that the program knows to paint it, and disable it.
      return false;
    }
  };
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
  const incrementTurn = () => {
    turn++;
  };

  const playAI = (humanBoard) => {
    const randomNumber = (max, min) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    if (!lastMove.hit) {
      const x = randomNumber(11, 0);
      const y = randomNumber(11, 0);
      if (humanBoard.receiveAttack[x][y]) {
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
      humanBoard.receiveAttack[lastMove.x + x][lastMove.y + y];
    }
  };

  return { playAI, incrementTurn, getTurnCount };
};

let board = Gameboard();
let initialHP = 2;
let testShip = Ship(initialHP, "vertical");
board.placeShip(0, 0, testShip);
console.log(board.getGameboard());



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkJhdHRsZXNoaXAsIHlldCBhbm90aGVyIGJpZyBtaWxlc3RvbmUgaW4gdGhlIFRPUCBjdXJyaWN1bHVtLi4uIGxldHMgdHJ5IHRvIGRlbWlzdGlmeSB0aGUgaXNzdWUuLi4uXG5JIG5lZWQgYSBzaGlwIGZ1bmN0aW9uLCB0aGF0IGNhbiBzZWUgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcC4uIHRha2UgaXQgYXMgYW4gYXJndW1lbnRcbiovXG5cbmNvbnN0IFNoaXAgPSAobGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICBsZXQgaHAgPSBsZW5ndGg7XG5cbiAgY29uc3QgZ2V0T3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICB9O1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgZ2V0SFAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhwO1xuICB9O1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaHAgLT0gMTtcbiAgICByZXR1cm4gaHA7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChocCA9PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHsgaXNTdW5rLCBoaXQsIGdldEhQLCBnZXRMZW5ndGgsIGdldE9yaWVudGF0aW9uIH07XG59O1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcblxuICBjb25zdCBnZXRHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwID0gKHgsIHksIHNoaXApID0+IHtcbiAgICBmdW5jdGlvbiBzaGlwRXhpc3RzKCkge1xuICAgICAgbGV0IHVuZGVmaW5lZENvdW50ZXIgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICBnYW1lYm9hcmRbeF1beSArIGldID09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB1bmRlZmluZWRDb3VudGVyKytcbiAgICAgICAgICAgIDogdW5kZWZpbmVkQ291bnRlci0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVib2FyZFt4ICsgaV1beV0gPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHVuZGVmaW5lZENvdW50ZXIrK1xuICAgICAgICAgICAgOiB1bmRlZmluZWRDb3VudGVyLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWRDb3VudGVyICE9PSBzaGlwLmdldExlbmd0aCgpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoc2hpcEV4aXN0cygpKSByZXR1cm4gXCJubyBzcGFjZSBmb3IgdGhpcyBzaGlwXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgIGlmIChzaGlwLmdldE9yaWVudGF0aW9uKCkgPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGdhbWVib2FyZFt4XVt5ICsgaV0gPSBzaGlwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2FtZWJvYXJkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkW3hdW3ldKSB7XG4gICAgICBnYW1lYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZWJvYXJkW3hdW3ldOyAvL211c3QgZW1pdCB0aGlzIHdhcyBoaXQgc28gdGhhdCB0aGUgcHJvZ3JhbSBrbm93cyB0byBwYWludCBpdCwgYW5kIGRpc2FibGUgaXQuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyByZWNlaXZlQXR0YWNrLCBnZXRHYW1lYm9hcmQsIHBsYWNlU2hpcCB9O1xufTtcbi8vcGxheWVycyBuZWVkIHRvIGVzc2VudGlhbGx5IHBsYXkuLi4gdGhlcmUgbmVlZHMgdG8gYmUgdHdvIGRpZmZlcmVudCBnYW1lYm9hcmRzIHRvbywgd2ljaCBtaWdodCBiZSB0cmlja3kuXG5cbmNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gbmFtZTtcblxuICBsZXQgdHVybiA9IDA7XG4gIGxldCBsYXN0TW92ZSA9IHtcbiAgICBoaXQ6IGZhbHNlLFxuICAgIHg6IHVuZGVmaW5lZCxcbiAgICB5OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgY29uc3QgZ2V0VHVybkNvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiB0dXJuO1xuICB9O1xuICBjb25zdCBpbmNyZW1lbnRUdXJuID0gKCkgPT4ge1xuICAgIHR1cm4rKztcbiAgfTtcblxuICBjb25zdCBwbGF5QUkgPSAoaHVtYW5Cb2FyZCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IChtYXgsIG1pbikgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfTtcbiAgICBpZiAoIWxhc3RNb3ZlLmhpdCkge1xuICAgICAgY29uc3QgeCA9IHJhbmRvbU51bWJlcigxMSwgMCk7XG4gICAgICBjb25zdCB5ID0gcmFuZG9tTnVtYmVyKDExLCAwKTtcbiAgICAgIGlmIChodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2tbeF1beV0pIHtcbiAgICAgICAgbGFzdE1vdmUuaGl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxhc3RNb3ZlLnggPSB4O1xuICAgICAgbGFzdE1vdmUueSA9IHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtYmVyKDEsIDApO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1iZXIoMSwgMCk7XG4gICAgICB3aGlsZSAoeCA9PSAwICYmIHkgPT0gMCAmJiAhKHggPT0gMSAmJiB5ID09IDEpKSB7XG4gICAgICAgIHggPSByYW5kb21OdW1iZXIoMSwgMCk7XG4gICAgICAgIHkgPSByYW5kb21OdW1iZXIoMSwgMCk7XG4gICAgICB9XG4gICAgICBodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2tbbGFzdE1vdmUueCArIHhdW2xhc3RNb3ZlLnkgKyB5XTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgcGxheUFJLCBpbmNyZW1lbnRUdXJuLCBnZXRUdXJuQ291bnQgfTtcbn07XG5cbmxldCBib2FyZCA9IEdhbWVib2FyZCgpO1xubGV0IGluaXRpYWxIUCA9IDI7XG5sZXQgdGVzdFNoaXAgPSBTaGlwKGluaXRpYWxIUCwgXCJ2ZXJ0aWNhbFwiKTtcbmJvYXJkLnBsYWNlU2hpcCgwLCAwLCB0ZXN0U2hpcCk7XG5jb25zb2xlLmxvZyhib2FyZC5nZXRHYW1lYm9hcmQoKSk7XG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9