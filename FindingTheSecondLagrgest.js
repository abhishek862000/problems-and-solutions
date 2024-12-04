function findingSecondLargest(array){
if(array.length===0){  
    return null;
 }
 let max=array[0]
 for(let i=1; i<array.length; i++){
    if(array[i]>max){
        max=array[i]
    }
 }
const result=[];
for(let i=0; i<array.length; i++){
    if(array[i]!==max){
        result.push(array[i])
    }
}
let secondMax=result[0]
for(let i=1; i<result.length; i++){
    if(result[i]>secondMax){
        secondMax=result[i]

    }
}
return secondMax
}
console.log(findingSecondLargest([1,1,1,3,3,3,5,555,555,995,5]))