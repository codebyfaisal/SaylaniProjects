// In JavaScript, if statements allow you to control the flow of your code based on certain conditions.
// They execute a block of code only if the condition evaluates to true.
// if condition return boolean value (true / false).
// prompt return input as string whatever value is, so for converting string to number add + with prompt
// +prompt();

let age = 23;
age = prompt("Please Enter your Age")
if (age === 23) {
  alert("Your Age is " + age);
}

let marks = 40;
marks = +prompt("Please Enter your Marks")
if (marks >= 50 ) {
  alert("You Pass");
}
if (marks >= 80 ) {
  alert("You Pass");
  alert("Excelent");
}


if (condition) { // you can check either number ot string
  // Code to execute if the condition is true
  // Whatever you want to code
}

// Traffic signal identifier by color
let name = prompt("Please enter signal color");
if (color === "red") {
  alert("Stop!")
}
if (color === "yellow") {
  alert("Ready!")
}
if (color === "green") {
  alert("Go!")
}

// If you use an if statement for this👆(traffic signal checker), it will test all conditions (if statements) to see if they are true or false.
