
// Custom type definition

/**
 * @typedef Person
 * @type {Object}
 * @property {string} name The name.
 * @property {string} surname The surname.
 * @property {number} [age] The age.
 * @property {Person[]} friends List of friends.
 */


/** @type {Person} */
var marty = {
  name: "Marty",
  surname: "McFly",
  age: 17,
  friends: []
};

if (marty.guitar === "Gibson ES-345") {  // Error: "guitar" doesn't exist

  console.log("Johnny B. Goode.");
}


/**
 * Emmett Brown, alias Doc
 * @type {Person}
 **/
var doc = {
  name: "Emmett",
  surname: "Brown",
  friends: [marty]
};

marty.friends.push(doc);

marty.friends.push({ name: "Jennifer", surname: "Parker" });  // Error: missing property "age"

console.log(`$nb friend = ${marty.friends.length}`);



// Type from globals.d.ts

/** @type {Dog} */
var dog = {
  name: "Einstein",
  bark: "woof! woof!",
  master: doc
};
