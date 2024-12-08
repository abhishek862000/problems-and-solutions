function bubbleSort(arr){
    let swapped
    do {
        swapped = false
for(var i=0;i<=arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        var temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
        swapped=true
    }

}
} while (swapped);
}
const arr=[121,22,323,3,4,5,90]
bubbleSort(arr)
console.log(arr)
