function reverseQuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...reverseQuickSort(left), pivot, ...reverseQuickSort(right)];
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(reverseQuickSort(arr));
