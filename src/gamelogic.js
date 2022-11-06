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

export { Ship, Gameboard, Player };
