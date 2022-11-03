import {
  sum,
  capitalize,
  reverseString,
  calculator,
  ceaserCipher,
  analyzeArray,
} from "./sum";

it("sums", () => {
  expect(sum(1, 2)).toBe(3);
});

it("capitalize", () => {
  expect(capitalize("banana")).toBe("Banana");
});

it("reverse", () => {
  expect(reverseString("cheirosa")).toBe("asoriehc");
});

it("multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
it("add", () => {
  expect(calculator.add(2, 3)).toBe(5);
});
it("reduce", () => {
  expect(calculator.reduce(2, 3)).toBe(-1);
});
it("divide", () => {
  expect(calculator.divide(2, 3)).toBeCloseTo(0.666);
});

it("cypher works", () => {
  expect(ceaserCipher("mae", 1)).toBe("nbf");
});

it("cypher wraps at z", () => {
  expect(ceaserCipher("maz", 1)).toBe("nba");
});

it("cypher takes keepts rest of structure", () => {
  expect(ceaserCipher("maz ,", 1)).toBe("nba ,");
});

it("analyze array", () => {
  const result = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject(result);
});
