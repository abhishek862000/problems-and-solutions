const solution = (str) => {
  camel = str.split("");

  for (i = 0; i < camel.length; i++) {
    if (camel[i] === camel[i].toUpperCase()) {
      camel[i] = " " + camel[i];
    }
  }
  let result = camel.join("");
  return result;
};

console.log(solution("camelCasingHere"));
// camel Casing Here
console.log(solution("No Camels here")); // No Camels here
console.log(solution("ABC")); // ABC
console.log(solution("")); // ''
