//💻 What are variables in JavaScript? In JavaScript, a variable is a named container that stores data values.
// It acts as a placeholder, allowing you to reference and manipulate data throughout your code.
// You can assign a variety of data types to variables, including numbers, strings, booleans, arrays, and objects.

// 💡 Declaring and Initializing Variables To create a variable,
// you use the var, let, or const keyword followed by the variable name and an optional assignment operator (=) to a value. 
// var is the traditional keyword, while let and const were introduced in ES6 (ECMAScript 2015) for better block scoping and immutability.

// 📝 Naming Conventions Choose meaningful and descriptive names for your variables to improve code readability and maintainability.
// Avoid using specific keywords or starting variable names with numbers. Use camel case for multi-word variable names (eg, FirstName, TotalValue).

var age = 23;
alert(age);
age = 25; // You can change the value of variables declared with var
alert(age + 2);

let marks = 221;
alert(marks);
marks = 212; // You can change the value of variables declared with let
alert(marks + 12);

const salary = 23000;
alert(salary);
// You cannot change the value of a constant declared with const
// salary = 24000; // This line would cause an error
alert(salary + 2000);
