function findMinMax(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
}

// Example usage:
const arr = [5, 2, 7, 1, 9];
const result = findMinMax(arr);
console.log(result); // Output: { max: 9, min: 1 }
