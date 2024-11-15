const removeDuplicates = (num) => {
  if (num.length === 0) return 0;

  let k =1;

  for (let i = 1; i < num.length; i++) {
    if (num[i] !== num[i - 1]) {
      num[k] = num[i];
      k++;
    }
  }

  return k;
};

let num = [1,1,1,1,1,2,2,2,4,4,4,90];
let k = removeDuplicates(num);
console.log(k, num.slice(0,k));

