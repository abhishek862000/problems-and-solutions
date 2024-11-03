const reverse = x => {
    if (x === 0) return '0'; 
    const sign=x<0?'-':'';
    num=Math.abs(x).toString()
   r=num.split('').reverse()
   if(r[0]==0){
    r=r.slice(1)
    return r.join('')
   }
   
   return sign+r.join('')
  };
  
  console.log(reverse(0)); // 0
  console.log(reverse(120)); // 21
  console.log(reverse(123)); // 321
  console.log(reverse(-123)); // -321
 