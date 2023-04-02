function swapVariables(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

let x = 5;
let y = 10;

[x, y] = swapVariables(x, y);
console.log(x); // Output: 10
console.log(y); // Output: 5