var str = prompt("Compose your Tweet");
var count = (280 - str.length);
console.log("you have 280 word to us and you use " + str.length + " word and you have left " + count + " Word.");

// Slice and extracting
console.log(str.slice(0, 5));
