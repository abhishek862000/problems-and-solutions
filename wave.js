const wave = (str) => {
  result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      const word =
        str.substring(0, i).toLowerCase() +
        str[i].toUpperCase() +
        str.substring(i+1).toLowerCase();
      result.push(word);
    }
  }
  return result;
};
console.log(wave("apple")); 
console.log(wave("gap"));
