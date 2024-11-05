const maxProfit = (prices) => {
  let smallPrice = prices[0];
  let smallIndex = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < smallPrice) {
      smallPrice = prices[i];
      smallIndex = i;
    }
  }

  if (smallIndex === prices.length - 1) {
    console.log(`Smallest number: ${smallPrice} at index ${smallIndex}`);
    console.log(`No largest number after the smallest as it is the last element.`);
    return;
  }

  let largestAfterSmallest = prices[smallIndex + 1];
  let largestIndex = smallIndex + 1;

  for (let i = smallIndex + 1; i < prices.length; i++) {
    if (prices[i] > largestAfterSmallest) {
      largestAfterSmallest = prices[i];
      largestIndex = i;
    }
  }

  console.log(`Smallest number: ${smallPrice} at day ${smallIndex+1}`);
  console.log(`Largest number after smallest: ${largestAfterSmallest} at day ${largestIndex+1}`);
};

maxProfit([7, 1, 5, 3, 6, 4]); // Outputs: Smallest number: 1 at index 1, Largest number after smallest: 6 at index 4
maxProfit([77, 196, 45, 30, 18]); // Outputs: Smallest number: 18 at index 4, No largest number after the smallest as it is the last element.
