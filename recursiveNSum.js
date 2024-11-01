const sumOfNumbers = n => {
    // Base case: if n is 0, the sum is 0
    if (n === 0) return 0;
    
    // Recursive case: sum of n numbers is n plus the sum of n-1 numbers
    return n + sumOfNumbers(n - 1);
  };
  
  console.log(sumOfNumbers(5)); // Outputs: 15 (since 5 + 4 + 3 + 2 + 1 + 0 = 15)
  