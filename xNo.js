const XO = str => {
    const lowerStr = str.toLowerCase();
  let result = 0;
  for (const letter of lowerStr) {
    if (letter === 'x') {
      result++;
    } else if (letter === 'o') {
      result--;
    }
  }

  return !result;
  };
  
  console.log(XO('xo')); // true
  console.log(XO('Oo')); // false
  console.log(XO('xxOo')); // true
  console.log(XO('xxxm')); // false
  console.log(XO('ooom')); // false
  console.log(XO('ty')); // true (when no 'x' and 'o' is present should return true)