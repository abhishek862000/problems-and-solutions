var removeDuplicates = function(num) {
    actualData=new Set(num)
    console.log( Array.from(actualData))
    console.log(actualData.size)
};
removeDuplicates([1,1,1,3,3,4]);