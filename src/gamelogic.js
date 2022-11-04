/*
Battleship, yet another big milestone in the TOP curriculum... lets try to demistify the issue....
I need a ship function, that can see the length of the ship.. take it as an argument
*/
import { events } from "./pubsub";

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
    events.emit("shipSunk", owner);
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
    if (sunkenShips == 5) events.emit("gameOver", owner);
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
    events.emit("shipPlaced", ship.owner);
    return "ship succesfully placed";
  };
  const receiveAttack = (x, y) => {
    if (gameboard[x][y]) {
      events.emit("rightHit");
      gameboard[x][y].hit();
      return true;
    } else {
      gameboard[x][y];
      events.emit("wrongHit", (x, y));
      return false;
    }
  };
  events.on("shipSunk", sunkenShipCount(), verifyGameState());
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

export { Ship, Gameboard, Player };
