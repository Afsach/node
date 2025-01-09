let sum = (a, b) => (a + b);
let mul = (a, b) => (a * b);
let g = 9.8;
const PI = 3.14;

// first way
module.exports = {
    sum : sum,
    mul : mul,
    gravity : g,
    pi : PI
}

// second way 
// create a new object and assign the new object value to module.exports
// const formula = {
//     sum: sum,
//     mul: mul,
//     gravity: g,
//     pi: PI
// }

// module.exports = formula;