<<<<<<< HEAD
function oneZero(str){

    let count = 0;
    for(const digit of str )
        {
        if(digit==='1')
        {
            count++;
        }
        else if(digit==='0')
        {
            count--;
        }
    }
    return !count;
    
}
console.log(oneZero("1100"))
console.log(oneZero("66"))
=======
function oneZero(str){

    let count = 0;
    for(const digit of str )
        {
        if(digit==='1')
        {
            count++;
        }
        else if(digit==='0')
        {
            count--;
        }
    }
    return !count;
    
}
console.log(oneZero("1100"))
console.log(oneZero("66"))
>>>>>>> f66ca287ebcf51c4221f6bfc56efaa63b3e85eaf
console.log(oneZero("1800"))