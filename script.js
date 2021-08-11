/* =============
Initial Function
============= */
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

/* =============================
Function Re-written using ES2015
============================= */

const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

/* =============
findMin Function
============= */

const findMin = (...args) => Math.min(...args);

/* ==================
mergeObjects Function
================== */

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

/* =========================
doubleAndReturnArgs Function
========================= */

const doubleAndReturnArgs = (arg, ...args) => [
  ...arg,
  ...args.map((v) => v * 2),
];

/* ===========
Slice and Dice
=========== */

// function removeRandom(items) {}
const removeRandom = (items) => {
  let index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

// function extend(array1, array2) {}
const extend = (array1, array2) => {
  return [...array1, ...array2];
};

// function addKeyVal(obj, key, val) {}
const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
  console.log(newObj);
};

// function removeKey(obj, key) {}
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

// function combine(obj1, obj2) {}
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// function update(obj, key, val) {}
const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
