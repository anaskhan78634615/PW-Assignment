let input = "hello world";

setTimeout(function() {
  let reversed = input.split("").reverse().join("");
  console.log(reversed);
}, 2000);