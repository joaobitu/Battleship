import { Gameboard, Ship, Player } from "./gamelogic";

import "./style.css";

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
const humanBoard = Gameboard("human");
const humanPlayer = Player("human");
const computerBoard = Gameboard("computer");
const computerPlayer = Player("computer");
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
        const destroyerShip = Ship(
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
        const destructiveShip = Ship(
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
        const bigShip = Ship(4, orientationButton.textContent, humanPlayer);
        if (humanBoard.placeShip(x, y, bigShip) == "ship succesfully placed") {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 3:
        const funnyShip = Ship(3, orientationButton.textContent, humanPlayer);
        if (
          humanBoard.placeShip(x, y, funnyShip) == "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
        break;
      case shipsPlaced == 4:
        const smallShip = Ship(2, orientationButton.textContent, humanPlayer);
        if (
          humanBoard.placeShip(x, y, smallShip) == "ship succesfully placed"
        ) {
          shipsPlaced++;
        }
      case shipsPlaced == 5:
        const destroyerShipComputer = Ship(
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
        const destructiveShipComputer = Ship(
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
        const bigShipComputer = Ship(
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
        const funnyShipComputer = Ship(
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
        const smallShipComputer = Ship(
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
