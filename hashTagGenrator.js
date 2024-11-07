const generateHashtag = (str) => {
  const words = str.split(" ").join("");
//   if (words.length === 0) {
//     return false;
//   }
//   hashWord = "#" + words;
//   return hashWord;
// };
const hashWord =words.length===0?false:"#"+words;
return hashWord
}


console.log(generateHashtag("JavaScript"));
console.log(generateHashtag("Do we have a Hashtag"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag(" "));

