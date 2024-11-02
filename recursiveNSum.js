const sumOfNumbers = n => {
    if (n === 0) {
        return 0;
    }
    
    return n + sumOfNumbers(n - 1);
  };
  
  console.log(sumOfNumbers(4)); 
  