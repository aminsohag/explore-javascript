const persons = ['rakib', 'nokib', 'akib', 'dakib', 'anis', 'Anis'];
const sortedPersons = persons.sort();
console.log(sortedPersons);


// Sort -->
// const numbers = [4, 7, 2, 8, 3, 6];
/**
 * Ascending --> smaller to larger: [2, 3, 4, 5, 6, 7]
 * Decending --> larger to smaller: [7, 6, 5, 4, 3, 2]
 * 
 * */ 

const numbers = [4, 7, 2, 8, 43,  3, 6, 13];
// const numbers_asc = numbers.sort()  // not working properly
const numbers_asc = numbers.sort(function (a, b){return a - b})
const numbers_dsc = numbers.sort(function (a, b){return a - b})
console.log(numbers_asc);
console.log(numbers_dsc);

// a to Z --- A to Z Ascii code

