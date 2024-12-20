function insertionSort(arr){
for (var i=1; i<arr.length; i++){
    let numberToInsert = arr[i]

    let j=i-1
    while (j>=0 && arr[j]>=numberToInsert) {
        arr[j+1] = arr[j];
        j=j-1
    }
    arr[j+1] = numberToInsert;
}
}

arr=[4,5,-4,5,6,1,2,3]
insertionSort(arr)
console.log(arr)
