function peak(arr){
    for(var i=1; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]&&arr[i]>arr[i-1]){
            return i
        }
    }
}
console.log(peak([1,21,3,1]))