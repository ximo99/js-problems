/*
 * Problem 5
 *
 * Create a program that counts how many times each word is repeated and displays the count
 *
 */

function countWords(text) {
  textList = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/);

  const words = {};

  textList.forEach((word) => {
    words[word] = !words[word] ? 1 : (words[word] += 1);
  });

  Object.keys(words)
    .map((word) => ({
      name: word,
      times: words[word],
    }))
    .sort((a, b) => b.times - a.times);

  for (let i = 0; i < Object.keys(words).length; i++) {
    console.log(
      "la palabra ",
      Object.keys(words)[i],
      " se repite",
      words[Object.keys(words)[i]],
      " veces"
    );
  }
}

console.log(
  countWords(
    "Hola, mi nombre es Ximo. Esta es una prueba muy facil. Que tengas un muy buen dia."
  )
);
