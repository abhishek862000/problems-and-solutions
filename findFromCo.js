const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  let kill = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[kill] = nums[i];
      kill++;
    }
  }

  return kill;
};

let num = [1, 1, 2];
let k = removeDuplicates(num);
console.log(k, num.slice(0, k)); // Outputs: 2, [1, 2]
