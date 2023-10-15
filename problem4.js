/*
 * Problem 4
 *
 * Create a program that reverses the order of the string without using its own functions
 *
 */

// Normal solution
function reverseString(text) {
  let textCount = text.length - 1;
  const result = [];

  for (let i = textCount; i >= 0; i--) {
    result.push(text[i]);
  }

  return result.join("");
}

// Recursive solution
function reverseStringRecursive(text) {
  if (text === "") {
    return "";
  } else {
    return reverseString(text.substr(1)) + text.charAt(0);
  }
}

console.log(reverseString("hola"));
console.log(reverseStringRecursive("mundo"));