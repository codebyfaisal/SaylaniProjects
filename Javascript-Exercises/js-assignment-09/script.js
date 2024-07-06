// // Tables
// let userInput = +prompt("Please enter any number");

// for (let i = 1; i <= 10; i++) {
//     console.log(`${userInput} x ${i} = ${userInput * i} \n`);
// }

// // Sum of userNumbers
// let array = [];
// for (let i = 1; i <= 5; i++) {
//     let userInput = +prompt(`Please enter number ${i}`);
//     array.push(userInput); // adding userInput to array
// }

// let sum = 0;
// for (let i = 0; i < 5; i++) {
//     sum += array[i];
// }
// console.log(`Sum of Your Entered Numbers is ${sum} \n`);

// // Max number finder
// let array = [];

// for (let i = 1; i <= 5; i++) {
//     let userInput = +prompt(`Please enter number ${i}`);
//     array.push(userInput);
// }

// let max = array[ 0 ];
// for (let i = 1; i < array.length; i++) {
//     if (array[ i ] > max) max = array[ i ];
// }
// console.log(`Max Number is ${max} \n`);


// // Print reverse name
// let name = prompt("Please enter your name");
// console.log(`Name: ${name} \n`);

// let reverseName = "";
// for (let i = name.length - 1; i >= 0; i--) {
//     reverseName += name[i];
// }
// console.log(`Reverse Name: ${reverseName} \n`);

// // Find factorial
// let number = +prompt("Please enter any number");
// let factorial = 1;
// let factorialExpression = "";

// for (let i = number; i >= 1; i--) {
//     factorial *= i;
//     factorialExpression += (i > 1) ? `${i} x ` : `${i}`;
// }
// console.log(`${number}! = ${factorialExpression} = ${factorial}`);
