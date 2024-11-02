const maxProfit = (prices) => {
  let smallPrice = prices[0];
  let index = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < smallPrice) {
      smallPrice = prices[i];
      index=i
    }
  }
  return index+1
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([77, 196, 45, 30, 18])); // 0
