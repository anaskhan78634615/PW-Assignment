function extractElements(arr) {
  const [first, second, , , last] = arr;
  return [first, second, last];
}

const arr = [1, 2, 3, 4, 5];
const result = extractElements(arr);
console.log(result); // Output: [1, 2, 5]