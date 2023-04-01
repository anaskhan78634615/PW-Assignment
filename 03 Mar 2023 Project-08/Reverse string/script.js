let input = "hello world"; // input string

setTimeout(function() {
  let reversed = input.split("").reverse().join(""); // reverse the input string
  console.log(reversed); // log the reversed string to the console
}, 2000); // delay for 2 seconds (2000 milliseconds)