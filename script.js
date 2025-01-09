// to require or get the data export by module.exports
// const formula = require('./math');
// const math = require('./math')
// console.log(math)
// console.log(formula.sum(3,6));
// console.log(formula.mul(3,6));
// console.log(formula.pi);
// console.log(formula.gravity)

//it will return a array
//first item the node.js execultable path
//second item node current working files path
// console.log(process.argv);

// to require the whole directory
const info = require("./Fruits");


// we are receiving array of object
console.log(info)

//single object
console.log(info[0]);
console.log(info[1]);
console.log(info[2]);
console.log(info[3]);

//single Itesm of an object
console.log(info[0].name)
console.log(info[0].color)