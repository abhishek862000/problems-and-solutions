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
console.log(oneZero("1800"))