let string = "INDIA";

// Convert string to array
let arr = string.split("");

// Use splice to insert letters
arr.splice(2, 0, 'D', 'O', 'N', 'E', 'S');

// Convert back to string
let output = arr.join("");

console.log(output);