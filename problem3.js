/*
 * Problem 3
 *
 * Given a number, calculate its Fibonacci series (order of numbers where each number is the result of the sum of the previous two)
 *
 */

function fibonacci(number) {
  let serie = [0, 1];

  for (let i = 2; i <= number; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }

  return [serie, serie[number]]
}

console.log("Serie completa: ", fibonacci(10)[0])
console.log("Resultado de la serie: ", fibonacci(10)[1])