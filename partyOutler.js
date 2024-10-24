const outLier = (arr) => {
  const odd = arr.filter((e) => e % 2 !== 0);
  const even = arr.filter((e) => e % 2 == 0);
  console.log(odd)
  console.log(even)
//   if(odd.length===1){
//     return odd[0]
//   }
//   else if(even.length===1){
//     return even[0]
//   }
return even.length===1?even[0]:odd[0]
};

console.log(outLier([10, 1,6,834,68, 54]))
console.log(outLier([101, 6, 8343, 681, 5, 9]));
