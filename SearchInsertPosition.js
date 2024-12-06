 function searchInsertPosition(arr,element){
    max=arr.length-1
    min=0
 
    while(min<=max){
        let mid=Math.floor((min+max)/2)
        if (arr[mid] === element) {
             return mid
             }
             if(element<arr[mid]){
                max=mid-1
             }
             else{
                min=mid+1
             }
    }
    return min
 }
 console.log(searchInsertPosition([1,2,4,8,14],44))