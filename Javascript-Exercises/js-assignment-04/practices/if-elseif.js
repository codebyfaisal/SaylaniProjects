// Here is an example of using a traffic signal, as we did it with just `if`, but using `if-else if` can make the code more concise.
// With 'if-and', you can combine multiple conditions into a single block, improving readability.
// When using 'if-else', if one condition is true, the following conditions are skipped, even if they are also true.
// The 'if-and' statement evaluates each condition one by one. Only the first matching condition will be executed if two or more conditions are the same.

// Traffic signal identifier by color
let name = prompt("Please enter signal color");
if (color === "red") {
  alert("Stop!");
}
else if (color === "yellow") {
  alert("Ready!");
}
else if (color === "green") {
  alert("Go!");
}
else {
  alert("Invalid Color")
}
