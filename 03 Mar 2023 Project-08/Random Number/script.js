let delay = 3000; // delay in milliseconds
let countdown = delay / 1000; // countdown in seconds

let timer = setInterval(function() {
  console.log(countdown + " seconds until random number generation...");
  countdown--;
}, 1000); // display countdown every second

setTimeout(function() {
  clearInterval(timer); // clear the timer
  let randomNumber = Math.floor(Math.random() * 100); // generate a random number
  console.log("Random number generated: " + randomNumber);
}, delay); // generate random number after delay
