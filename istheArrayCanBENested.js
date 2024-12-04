function canNest(arr1, arr2) {
  s1 = arr1.sort();
  s2 = arr2.sort();
  if (s1[0] > s2[0] && 
    s1[s1.length - 1] < s2[s2.length - 1]) {
    return true;
  } else {
    return false;
  }
}
console.log(canNest([1, 2, 3, 4], [0, 6]));

console.log(canNest([3, 1], [4, 0]));

console.log(canNest([9, 9, 8], [8, 9]));

console.log(canNest([1, 2, 3, 4], [2, 3]));
