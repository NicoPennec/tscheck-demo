

const fs = require("fs");

fs.readFileSync(); // Error: missing param
fs.readFileSync(true); // Error: wrong param

/**
 * Export function readFile
 * @param {any}  f
 **/
module.exports.readFile = function(f) {
  return fs.readFileSync(f);
};

// comment inside
module.exports.readFile2 = function(/** @type {any} */ f) {
  return fs.readFileSync(f);
};
