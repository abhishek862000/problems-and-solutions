const diff=(arr1,arr2)=>{
    // for(let i=0;i<arr1.length;i++){
    //     for (let j = 0; j < arr2.length; j++) {
    //     if(arr1[i]===arr2[j]){
    //     arr1.splice(i,1)
    //     i--
    //     break;
    //     }}
    // }
    // return arr1
    return arr1.filter(ele => !arr2.includes(ele))
    
}

console.log(diff([1,2,3],[2]))
console.log(diff([1,2,3,46],[1,2]))