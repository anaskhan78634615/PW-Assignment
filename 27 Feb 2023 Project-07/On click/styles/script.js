// The error in the code is that getElementsByClassName() method returns 
// a collection of elements and not a single element, therefore, the methods
// addEventListener() and innerText cannot be called on the collection.

// getting the html elements
const decrementBtn = document.querySelector(".decrementBtn");
const incrementBtn = document.querySelector(".incrementBtn");
const resetBtn = document.querySelector(".resetBtn");
const displayValue = document.querySelector(".displayValue");


// for decrement button click
decrementBtn.addEventListener("doubleclick", () => {
  // The Number() function in JavaScript is used to convert a string or other value into a number.
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});


// for increment button click
incrementBtn.addEventListener("doubleclick", () => {
  const value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});


// for reset button click
resetBtn.addEventListener("doubleclick", () => {
  displayValue.innerText = 0;
});
