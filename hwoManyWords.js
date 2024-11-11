const scramble = (str1, str2) => {
    return [...str2].every(
        letter => str2.split(letter).length <= str1.split(letter).length)
      
  };
  
  console.log(scramble('scriptjava', 'javascript')); 
  console.log(scramble('scriptigjavauyyyyyyy', 'javascript')); 
 