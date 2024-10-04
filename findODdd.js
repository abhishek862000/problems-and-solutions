function oddFind(array){
    return array.reduce((a, b) => {
        console.log(`a:${a},b:${b}`)
        return a ^ b;
    });
    
}

console.log(oddFind([2,2,2,2,10]))