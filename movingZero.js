const moveZeroes = num => {
   
   let zeroCount = 0;
   for (let i=0; i<num.length;i++){
    if(num[i]===0){
         zeroCount++; num.splice(i, 1)
         i--
    }
   }
   for (let i = 0; i < zeroCount; i++) { num.push(0); } 
   return num
  };
  
  console.log(moveZeroes([0, 1, 0, "abhi", 12])); // [1, 3, 12, 0, 0]
  console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
  console.log(moveZeroes([0])); // [0]