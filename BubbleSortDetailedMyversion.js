function detaileDBubbleSort(arr, k) {
  let swapped;
  let count = 0;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        console.log(arr);
      }
    }

    count++;
  } while (swapped);
  console.log(arr);
  return count;
 
}
const arr = [5,10,8,100,4];
a=[1,2,3,4]
console.log(detaileDBubbleSort(arr));
console.log(detaileDBubbleSort(a))
