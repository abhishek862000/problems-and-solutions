function squareDigits(number){
return (
    number.toString()
    .split('')
     .map(ele => ele *ele)
  .join('')
)
}
console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581