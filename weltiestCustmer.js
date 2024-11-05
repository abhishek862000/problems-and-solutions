const maximumWealth = accounts => {
    let maxWealth = 0;
    
    for (const account of accounts) {
      const accountWealth = account.reduce((sum, num) => sum + num);
      if (accountWealth > maxWealth) {
        maxWealth = accountWealth;
      }
    }
    
    return maxWealth;
  };
  
  console.log(
    maximumWealth([
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ])
  );
  
  console.log(
    maximumWealth([
      [1, 5],
      [7, 3],
    ])
  ); 

  
  console.log(
    maximumWealth([
      [1, 2, 3],
      [3, 2, 1],
    ])
  ); 
  