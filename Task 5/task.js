"use strict";
const first = (arr, n) => {
 if (isNaN(n) || n < 0 || !n) {
    return [];
  } else {
    return arr.slice(0, n);
  }
};

console.log(first([7, 9, 0, -2])); // [7, 9, 0]
