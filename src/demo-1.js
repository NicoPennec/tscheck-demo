// @ts-check


// Basic type declaration for ts-check

/** @type {number} */
let test;

test = false;     // Error: boolean is not assignable to number
test = 0;         // OK
test = Infinity;  // OK



// Type inference

let foo = 111;

foo = 222;        // OK
foo = "yolo";   // Error: string is not assignable to number



// Check const assign

const bar = 333;

bar = 444;        // Error: cannot assign a constant
bar.buz = 555;    // Error: propety 'buz' doesn't exist

// @ts-ignore
bar.yolo = "ignore";
