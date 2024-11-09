const solution = str => {
    // Your solution
    
     return str.replace(/([a-z])([A-Z][1-9])/g, '$1 $2 $3');
  };
  
  console.log(solution('camel12CasingHere')); // camel Casing Here
  console.log(solution('No Camels here')); // No Camels here
  console.log(solution('ABC')); // ABC
  console.log(solution('')); // ''


  