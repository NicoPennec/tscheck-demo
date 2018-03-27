
// Simple Array

/** @type {Array} */
let array = [];

array.push(123);       // OK
array.push("string");  // OK, type === Array<any>



// Array of Number

/** @type {Array.<number>} */
let arrayOfNumber = [];

arrayOfNumber.push(123);       // OK
arrayOfNumber.push("string");  // Error: string is not assignable to number



// Array of ...

/** @type {Array.<number | string | Date>} */
let arrayOfCustom = [];

arrayOfCustom.push(123);       // OK
arrayOfCustom.push("yolo");    // OK
arrayOfCustom.push(Date());    // OK
arrayOfCustom.push();          // OK
arrayOfCustom.push(false);     // Error

