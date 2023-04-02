function removeDuplicates(inputArray) {
  const uniqueSet = new Set(inputArray);
  return Array.from(uniqueSet);
}

const inputArray = [1, 2, 2, 3, 3, 3, 4, 5, 5];

console.log(removeDuplicates(inputArray))