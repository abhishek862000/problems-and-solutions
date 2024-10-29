const countWords = text => {
    let wordFrequency = {};
    const words = text.split(/\s+/); // Split the text into words
  
    for (let word of words) {
      if (wordFrequency[word]) {
        wordFrequency[word] += 1;
      } else {
        wordFrequency[word] = 1;
      }
    }
  
    return wordFrequency;
  };
  
  const text = "This is a test. This test is only a this test.";
  console.log(countWords(text)); 
  // Outputs: { this: 2, is: 2, a: 2, test.: 2, only: 1, test: 1 }
  