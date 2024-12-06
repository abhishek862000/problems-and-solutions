function recursiveBinarySearch(arr,target){
    return search (arr,target,0,arr.length-1)
}
function search(arr,target,LeftIndex,RightIndex){
    if (LeftIndex > RightIndex) {
        return -1
    }
    let middleIndex = Math.floor ((LeftIndex+RightIndex)/2)

    if(target===arr[middleIndex]){
        return middleIndex
    }
    if (arr[middleIndex]>target){
        return search(arr,target,LeftIndex,middleIndex-1)
    }
    else{
        return search(arr,target,middleIndex+1,RightIndex)
    }
}
console.log(recursiveBinarySearch([-2,3,4,5,6],3))
console.log(recursiveBinarySearch([-2,3,4,5,6],30))
console.log(recursiveBinarySearch([-2,3,4,5,6],-2))