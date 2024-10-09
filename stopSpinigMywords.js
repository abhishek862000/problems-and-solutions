const spinWords = str => {
    return str
    .split(' ')
    .map(word => (word.length < 5 ? word : word.split('').reverse().join('')))
    .join(' ');
  };
  
  console.log(spinWords('This is a test')); 
  console.log(spinWords('Hey fellow warriors')); 
  console.log(spinWords('This is another test')); 