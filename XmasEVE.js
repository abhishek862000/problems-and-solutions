function timeForMilkAndCookies(date) {
let month=date.getMonth()
let day=date.getDate()
if (month===11&&day===24){
    return true
}
else{
    return false
}
}
console.log(timeForMilkAndCookies(new Date(2013, 11, 24))) 

console.log(timeForMilkAndCookies(new Date(2013, 0, 23)) )

console.log(timeForMilkAndCookies(new Date(3000, 11, 24)) )