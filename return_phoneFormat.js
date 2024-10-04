function createPhoneNumber(number){
    const str=number.join("")
return `(${str.substring(0,3)})${str.substring(3,6)}-${str.substring(6)}`

}
function arrayToString(number){
    const str=number.join("")
return str

}
p=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(createPhoneNumber(p));
console.log(arrayToString(p))