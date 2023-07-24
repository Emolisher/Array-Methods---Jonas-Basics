"use strict";

// Simple Array Methods
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

console.log("splice");  

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));

///////////////////////////////////////
// The new at Method
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// getting last array element
console.log(arr3[arr.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log("jonas".at(0));
console.log("jonas".at(-1));

///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---- FOREACH ----");
movements.forEach(function (mov, i, arr) {
  //we can use 1 - mov; or 2 mov, i or 3...
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// forEach With Maps and Sets
// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);

  //again 3 parameters  - but we can write : value, _, maps
  // _ means a THROWAWAY Variable  (completely unnecessary)
});

///////////////////////////////////////
// The map Method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

/////////////////////

// const movementDescriptions = movements.map(
// (mov, i, arr) => {
//     if (mov > 0) {
//       return `Movement ${i + 1}: You deposited ${mov}`;
//     }
//     else {
//       return `Movement ${i + 1}: You withdrew  ${Math.abs(mov)} `;
//     }
//   });

////////////////////////

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: YOu ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementDescriptions);

// Before we printed each line individually (console logged)
// forEach creates a side effect
// with map - we created a whole new array

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);
console.log("");

// we can do the same with for Loop

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(deposits);

// Filter - we can chain methods together

const withdrawals = movements.filter((mov) => mov <= 0);
console.log(withdrawals);

//REDCUE METHOD
//acc -> SNOWBALL       last argument - 0 - start off point for acc

// const balance = movements.reduce(function(acc, cur, i, arr) {
//   return acc + cur;
// },0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

//Maximum Value

const maximum = movements.reduce((acc, cur) => {
  if (acc >= cur) return (cur = acc);
  else return cur;
}, movements[0]);
console.log(maximum);
