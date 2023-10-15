/*
 * Problem 1, part 1
 *
 * Create an Object with a "hello" method that write "Hello <name> in the console"
 *
 */

const p = {
  name: "Carlos",
  hello: () => console.log(`Hello ${p.name}`),
};

p.hello();

/*
 * Problem 1, part 2
 *
 * How would you make the name immutable? (can write or just describe)
 *
 */

Object.freeze(p);
p.name = "Manolo";
p.hello();