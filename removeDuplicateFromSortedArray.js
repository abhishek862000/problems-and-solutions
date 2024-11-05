const removeDuplicates = nums => {
   const unique = new Set(nums)
   return unique.size
  };
  
  console.log(removeDuplicates([1, 1, 2])); // 2 (because [1, 2] has length 2)
  console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
  console.log(removeDuplicates([])); // 0