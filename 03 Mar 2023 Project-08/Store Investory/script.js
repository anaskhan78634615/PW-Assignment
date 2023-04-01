const pricesInUSD = {
  'item1': 10,
  'item2': 20,
  'item3': 30
};

const exchangeRate = 80; // 1 USD = 80 INR

const pricesInINR = Object.keys(pricesInUSD).map(function(item) {
  return { [item]: pricesInUSD[item] * exchangeRate }
});

console.log(pricesInINR);
