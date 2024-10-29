const reverseString = str => {
  array=str.split("")
  const reversedArray = [];
  for(i=array.length;i>=0;i--){
    reversedArray.push(array[i])
  }
  return reversedArray.join("");
  };
  
  console.log(reverseString('hello')); // 'olleh'
  console.log(reverseString('world')); // 'dlrow'
  