
/**
 * Say hello to everyone for me!
 *
 *  ✨ It's just a standard JSDoc comment ✨
 *
 *  => http://usejsdoc.org/
 *
 * @param {string} name Name of the person.
 * @param {string} [surname] Surname of the person
 * @param {number} [repeat] Nb time to repeat
 *
 * @return {string} an awesome message to the world
 */
function sayHello(name, surname = null, repeat = 0) {

  const fullname = [name, surname].join(" ");

  const message = `Hello  ${fullname} 🦄 `;

  return message.repeat(repeat);
}



sayHello("World");
sayHello("pretty", "unicorn", 1000);
sayHello("error", false);
