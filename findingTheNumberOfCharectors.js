const count = (string) => {
  const words = string.split("");
  wordsObject = {};
  for (const word of words) {
    if (wordsObject[word]) {
      wordsObject[word] += 1;
    } else {
      wordsObject[word] = 1;
    }
  }
  return wordsObject;
};

console.log(count("Ddfjgtgjtgbjgj"));

console.log(count("aba"));
// { a: 2, b: 1 }
