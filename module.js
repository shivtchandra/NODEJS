const cities = require('./places');

//This alone with out console.log statement
// Will print for us as we have defined it in other file

console.log(cities) // {} will be returned.

//The path is accesed only for that call but not for the whole file
// If module.export is defined equal to the dataset in the file containing dataset
//Then cities will get those values 

console.log(cities); // [ 'Tokyo', 'seoul', 'New york', 'Zurich' ] will be returned

const os = require('os');
console.log(os.platform());