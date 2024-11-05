const total = (arr) => {
//   sum = 0;
//   for (i = 0; i < accounts.length; i++) {
//     sum += accounts[i];
//   }
//   return sum;
return arr.reduce((sum, num) => sum + num, 0);
};

console.log(total([2, 8, 7]));
