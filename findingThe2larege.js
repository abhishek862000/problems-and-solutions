function findingSecondLargest(array) {
    if (array.length === 0) {
      return null;
    }
  
    let max = -Infinity;
    let secondMax = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        secondMax = max;
        max = array[i];
      } else if (array[i] > secondMax && array[i] !== max) {
        secondMax = array[i];
      }
    }
  
    return secondMax === -Infinity ? null : secondMax;
  }
  
  console.log(findingSecondLargest([1, 1, 1, 3, 3, 3, 5, 5, 5])); // Outputs: 3
  