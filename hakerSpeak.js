function hackerSpeak(str) {
  const replacements = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5",
  };

  return;
  str
    .split("")
    .map((char) => replacements[char] || char)
    .join("");
}

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
