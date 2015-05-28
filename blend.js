String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}

function and(x,y){
	return x & y;
}
function or(x,y){
	return x | y;
}
function xor(x,y){
	return x ^ y;
}
function blend(hex1, hex2, op){
	return op(parseInt(hex1, 16), parseInt(hex2, 16))
}
function blendInput(){
	var c1 = document.getElementById("myCanvas")
}
/*
var color1 = "F0F";
var color2 = "FF0";

funcs = [and, or, xor];
funcs.forEach(function(entry){
	console.log(blend(color1, color2, entry).toString(16));
});
*/

String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}
function hexStrToInt(hexStr){
	var i = 1;
	if(hexStr.indexOf("#") == -1){
		i = 0;
	}
	return parseInt(hexStr.substring(i),16);
}

function intToHexStr(i){
	var s = i.toString(16);
	return "#"+"0".repeat(6-s.length)+s;
}

console.log(hexStrToInt("#F0F0F0"));
console.log(intToHexStr(15790320));
