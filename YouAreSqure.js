const isSquare = n => {
    let root=Math.sqrt(n)
    if(root%1===0){
        console.log(`${n} has a root ${root}`)
    }
    else{
        console.log(`${n} is not a perfect square`)
    }
  };
  
 isSquare(0); // true
isSquare(4); // true
isSquare(25); // true
  isSquare(3); // false
isSquare(93); // false
  isSquare(-1); // false   