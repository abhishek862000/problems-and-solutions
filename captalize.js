const capitalize=word=>{
    cap=word.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');  
    
return cap
}


console.log(capitalize("how can mirrors be real if our eyes aren't real"))
