function binarySearch(arr,target){
let left=0
let right=arr.length-1
while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(arr[mid]==target){
        return mid
    }
    if(target<arr[mid]){
        right=mid-1
    }
    else{
        left=mid+1
    }
}
return "invalid target"
}

console.log(binarySearch([1,87,8888],897))
console.log(binarySearch([1,2,3,6,7,8,87,8888],6687))
console.log(binarySearch([1,7,8888],7))
console.log(binarySearch([1,2,3,6,7,8,87,8888],87))