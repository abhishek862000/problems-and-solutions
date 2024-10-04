const getMiddle=str=>{
    let length=str.length;
    let middle=Math.floor(length/2);
    if(length%2===1){
        console.log(str[middle])
    }
    else{
       console.log( str[middle - 1] + str[middle])
    }
}
console.log(getMiddle('testy'));
 console.log(getMiddle('testingproblre'));
 console.log(parseInt(3.9))