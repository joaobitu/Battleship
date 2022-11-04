import { Gameboard, Ship, Player } from "./gamelogic";
// test first... battleship, lets gooo!!!

it("hit function decreases hp", () => {
  let initialHP = 1;
  let testShip = Ship(initialHP, "vertical");
  testShip.hit();
  expect(testShip.getHP()).toBe(initialHP - 1);
});

it("sunks", () => {
  let initialHP = 1;
  let testShip = Ship(initialHP, "vertical");
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});

it("gets orientation", () => {
  let testShip = Ship(10, "vertical");
  expect(testShip.getOrientation()).toBe("vertical");
});

it("places ship correctly", () => {
  let board = Gameboard();
  let initialHP = 2;
  let testShip = Ship(initialHP, "vertical");
  board.placeShip(0, 2, testShip);
  console.log(board.getGameboard());
  expect(
    board.getGameboard()[0][2] === testShip &&
      board.getGameboard()[0][3] === testShip
  ).toEqual(true);
});
it("cannot place ship if there isnt space horizontally on the board", () => {
  let board = Gameboard();
  let initialHP = 2;
  let testShip = Ship(initialHP, "horizontal");
  expect(board.placeShip(12, 0, testShip)).toBe(
    "this ship doesnt fit horizontally"
  );
});
it("cannot place ship where there is a ship already", () => {
  let board = Gameboard();
  let initialHP = 2;
  let testShip = Ship(initialHP, "vertical");
  let testShip2 = Ship(initialHP, "vertical");
  board.placeShip(0, 0, testShip);
  expect(board.placeShip(0, 0, testShip2)).toBe("there is a ship already");
});

it("attacks the placed ship", () => {
  let board = Gameboard();
  let initialHP = 2;
  let testShip = Ship(initialHP, "vertical");
  board.placeShip(0, 0, testShip);
  board.receiveAttack(0, 0);
  board.receiveAttack(0, 1);
  expect(testShip.getHP()).toBe(0);
});

it("ai plays a random attack", () => {
  let board = Gameboard();
  let initialHP = 2;
  let testShip = Ship(initialHP, "vertical");
  board.placeShip(0, 0, testShip);
  let computer = Player("computer");
  computer.playAI(board);
  expect(computer.getLastMove().x !== undefined).toBe(true);
});
