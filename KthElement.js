function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;  // Return the sorted array
}

function kthLargestElement(arr, k) {
    bubbleSort(arr);  // Sort the array
    return arr[arr.length - k];  // Return the kth largest element
}

const arr = [121, 22, 323, 3, 4, 5, 90];
console.log(kthLargestElement(arr, 2));  // Output: 121 (2nd largest element)
console.log(kthLargestElement(arr, 3));  // Output: 121 (2nd largest element)

