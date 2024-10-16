function headingFinder(url) {
  var str = url.split(".");
  str2 = str[1].toUpperCase();
  return str2;
}

console.log(headingFinder("https://www.blackbox.ai/chat/rk3IyRq"));
console.log(headingFinder("https://www.youtube.com/"));
console.log(headingFinder("https://www.flipkart.com/"))
