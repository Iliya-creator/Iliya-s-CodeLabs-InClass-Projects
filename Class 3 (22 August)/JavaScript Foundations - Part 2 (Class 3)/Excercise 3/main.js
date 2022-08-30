// <!-- Exercise #3: Advanced
// Aim: Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically and their corresponding values in the same order.

let obj1 = { b: 2, a: 1, c: 3 };
let obj2 = { a: "Apple", b: "Microsoft", c: "Google" };
let obj3 = { key1: true, key2: false, key3: undefined };

function keysAndValues(obj) {
  let objArr = Object.entries();
  let sortedObjArr = objArr.sort((a, b) => b[0] - a[0]);
return obj;
}

console.log(keysAndValues(obj1));
console.log(keysAndValues(obj2));
console.log(keysAndValues(obj3));


// // +++++++++++++++++++++++++++++      Examples      ++++++++++++++++++++++++++++

// keysAndValues({ a: 1, b: 2, c: 3 });
// //  ➞    [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
// //  ➞    [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined });
// //  ➞    [["key1", "key2", "key3"], [true, false, undefined]]
