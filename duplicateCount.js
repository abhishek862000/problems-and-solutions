const findCount = text => {
    let frequency = {};
  
    // Count frequency of each character
    for (let letter of text) {
      frequency[letter] = (frequency[letter]||0) + 1;
    }
  
    // Create a summary string
    let summary = Object.entries(frequency)
      .map(([letter, count]) => `${letter}: ${count}`)
      ;
  
    // Print the summary
    console.log(`Character counts: ${summary}`);
  
    // Sum up the frequencies
    let totalCount = Object.values(frequency).reduce((sum, value) => sum + value, 0);
    return totalCount;
  };
  
  console.log(findCount("aaaaBBBBccccyyyyyIIiiikk")); // Outputs: Character counts: a: 4, B: 4, c: 4
  