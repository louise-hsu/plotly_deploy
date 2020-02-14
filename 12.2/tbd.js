// Skill Drill: use map() to add 5 to each number in the following array: var numbers = [0,2,4,6,8]; 
var numbers = [0,2,4,6,8];
var addFive = numbers.map(function(num){
    return num + 5;
})
addFive

// Skill Drill: Modify the code in the previous example to extract the population of each city, instead of city name
cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityPopulation = cities.map(function(pop){
    return pop.population;
});
console.log(cityPopulation);

// Skill Drill: Filter the results to include only animals whose species name starts with the letter “s.”
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var animalsWithS = words.filter(function(word){
    return word[0] == 's';
    });
console.log(animalsWithS);

// Skill Drill: Modify the code below to use an arrow function inside filter():
var animalsWithS = words.filter(word => word[0] == 's');
console.log(animalsWithS);

// Skill Drill: Use slice() to select the first three elements of the words array.
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(0,3)

