function detailedBubbleSort(arr) {
    let swapped;
    let count = 0;

    // Perform the bubble sort
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
                console.log("After swap:", arr);  // Print array after each swap
            }
        }
        count++;
    } while (swapped);

    // Print the final sorted array
    console.log("Final sorted array:", arr);
    return count;
}

const arr = [5, 10, 8, 100, 4];
const a = [1, 2, 3, 4];

console.log("Number of iterations for arr:", detailedBubbleSort(arr));
console.log("Number of iterations for a:", detailedBubbleSort(a));
