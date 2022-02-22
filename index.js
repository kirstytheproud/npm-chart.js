// Create a new repo and have a go at installing npm on your repo, e.g: creating a package.json etc
// Build a dashboard that has at least three different graphs on it. 
// 1 should use the population data displayed on the graph
// The 2nd should use the cities data
// The third is up to you (come up with your own data)
// Or if you're feeling extra creative - come up with your own set of data entirely for all three graphs.
// Have a go at playing around with the docs and editing the graphs.

import { cities } from "./data.js"
import { population } from "./data.js"

// console.log(cities[1]);
// console.log(population[2]);

console.log(cities);


// const populationNumberArray = cities.map(Number);

// console.log(populationNumberArray);

const data = {
    labels: cities.name,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: cities.population,
    }]
  };

const config = {
    type: 'line',
    data: data,
    options: {}
  };

//   console.log(cities)