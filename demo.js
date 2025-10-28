console.log("Hello world !!")

const mymodule = require('./mymodule.js'); //      ./ for looking into same folder
// .. for go outside from current folder

var rs =mymodule.sum(10,20);
console.log("Sum is:",rs); //here we are calling sum function outside of that file soo need to export that function.

var rs2 =mymodule.product(10,20);
console.log("Multiplication is :",rs2);
