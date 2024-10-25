const dna=sample=>{
element=sample.split('')
for(i=0;i<element.length;i++)
{
    if(element[i]==='A'){
        element[i]='T'
    }
    else if(element[i]==='T'){
        element[i]='A'
    }
    else if (element[i] === 'G') {
        element[i] = 'C';
      } else if (element[i] === 'C') {
        element[i] = 'G';
      }
}
return element.join('')
}

console.log(dna("AAGGTTCC"))