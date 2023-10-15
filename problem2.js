/*
 * Problem 2
 *
 * Write a function that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least
 *
 */

const citiesList = [
  "londres",
  "paris",
  "roma",
  "madrid",
  "berlin",
  "amsterdam",
  "lisboa",
  "barcelona",
  "londres",
  "atenas",
  "paris",
  "estocolmo",
  "lisboa",
  "amsterdam",
  "londres",
  "paris",
  "berlin",
  "roma",
  "roma",
];

function logMostOcurrencesCities(numCities) {
  const cities = {};

  citiesList.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });

  return Object.keys(cities)
    .map((city) => ({
      name: city,
      times: cities[city],
    }))
    .sort((a, b) => b.times - a.times)
    .slice(0, numCities)
    .map((city) => city.name);
}

console.log(logMostOcurrencesCities(5))