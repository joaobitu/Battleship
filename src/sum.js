function sum(a, b) {
  return a + b;
}
function capitalize(string) {
  return string[0].toUpperCase() + string.substr(1);
}
function reverseString(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let index = -i - 1;
    newString += string.substr(index, 1);
  }
  return newString;
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  reduce: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

function ceaserCipher(string, key) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (alphabet.includes(string.substr(i, 1).toUpperCase())) {
      let alphabetIndex = alphabet.indexOf(string.substr(i, 1).toUpperCase());
      while (alphabetIndex + key > 25) {
        alphabetIndex -= 26;
      }
      if (string.substr(i, 1).toUpperCase() === string.substr(i, 1)) {
        newString += alphabet[alphabetIndex + key];
      } else {
        newString += alphabet[alphabetIndex + key].toLowerCase();
      }
    } else {
      newString += string.substr(i, 1);
    }
  }
  return newString;
}

function analyzeArray(array) {
  let details = {};
  array.sort((a, b) => {
    return a - b;
  });
  console.log(array);
  let total = 0;
  array.forEach((e) => {
    total += e;
  });
  details.average = total / array.length;
  details.min = array[0];
  details.max = array[array.length - 1];
  details.length = array.length;

  return details;
}
export {
  sum,
  capitalize,
  reverseString,
  calculator,
  ceaserCipher,
  analyzeArray,
};
