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
export { Ship, Gameboard, Player };
