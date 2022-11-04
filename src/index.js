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
const humanBoard = Gameboard("human");
const computerBoard = Gameboard("computer");
//lets add some event listeners!
let shipsPlaced = 0;
playerGrid.addEventListener("click", (e) => {
  const coordinates = e.target.id;
  const x = Number(coordinates.substr(0, 1));
  const y = Number(coordinates.substr(1, 1));
  switch (true) {
    case shipsPlaced == 0:
      const destroyerShip = Ship(6, orientationButton.textContent, "human");
      if (
        humanBoard.placeShip(x, y, destroyerShip) == "ship succesfully placed"
      );
      {
        shipsPlaced++;
      }
      break;
    case shipsPlaced == 1:
      const destructiveShip = Ship(5, orientationButton.textContent, "human");
      if (
        humanBoard.placeShip(x, y, destructiveShip) == "ship succesfully placed"
      ) {
        shipsPlaced++;
      }
      break;
    case shipsPlaced == 2:
      const bigShip = Ship(4, orientationButton.textContent, "human");
      if (humanBoard.placeShip(x, y, bigShip) == "ship succesfully placed") {
        shipsPlaced++;
      }
      break;
    case shipsPlaced == 3:
      const funnyShip = Ship(3, orientationButton.textContent, "human");
      if (humanBoard.placeShip(x, y, funnyShip) == "ship succesfully placed");
      {
        shipsPlaced++;
      }
      break;
    case shipsPlaced == 4:
      const smallShip = Ship(2, orientationButton.textContent, "human");
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
