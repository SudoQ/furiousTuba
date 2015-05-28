var color1 = "FF";
var color2 = "F0";

console.log(parseInt(color1,16).toString(2));
console.log(parseInt(color2,16).toString(2));
var tmp = color1 & color2;
console.log(tmp.toString(2));
