const objectSort = (str) => {
   arr = str.split('')
  let frequency = {};
  for (const words of arr) {
    if (frequency[words]) {
      frequency[words]++;
    } else {
      frequency[words] = 1;
    }
  }
const sortedArray=Object.entries(frequency).sort((a,b) =>a[1] - b[1]);
console.log( sortedObject = Object.fromEntries(sortedArray)) 
return sortedArray[0].join(' ')
};

console.log(objectSort("apple"));
console.log(objectSort("REversae"));
